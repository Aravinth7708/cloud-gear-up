import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

type EmailSender = {
  send: (message: {
    to: string;
    from: string;
    subject: string;
    text: string;
    html: string;
    replyTo?: string;
  }) => Promise<unknown>;
};

type WorkerEnv = {
  EMAIL?: EmailSender;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      if (new URL(request.url).pathname === "/api/contact") {
        return await handleContactRequest(request, env as WorkerEnv);
      }
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};

async function handleContactRequest(request: Request, env: WorkerEnv): Promise<Response> {
  if (request.method !== "POST") return json({ error: "Method not allowed." }, 405);

  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin)
    return json({ error: "Invalid request origin." }, 403);
  if (!env.EMAIL) return json({ error: "Email delivery is not configured yet." }, 503);

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }
  if (!body || typeof body !== "object") return json({ error: "Invalid request." }, 400);

  const values = body as Record<string, unknown>;
  if (text(values.website)) return json({ ok: true });

  const name = text(values.name, 120);
  const email = text(values.email, 254);
  const company = text(values.company, 160);
  const budget = text(values.budget, 80);
  const service = text(values.service, 120);
  const description = text(values.description, 5_000);

  if (name.length < 2 || !isEmail(email) || !service || description.length < 20) {
    return json({ error: "Please complete the required fields." }, 400);
  }

  const rows = [
    ["Name", name],
    ["Email", email],
    ["Company", company || "Not provided"],
    ["Budget", budget || "Not provided"],
    ["Service", service],
    ["Project description", description],
  ];
  const plainText = rows.map(([label, value]) => `${label}: ${value}`).join("\n\n");
  const html = rows
    .map(
      ([label, value]) =>
        `<p><strong>${escapeHtml(label)}</strong><br>${escapeHtml(value).replace(/\n/g, "<br>")}</p>`,
    )
    .join("");

  try {
    await env.EMAIL.send({
      to: "founder@artechzo.tech",
      from: "website@artechzo.tech",
      replyTo: email,
      subject: `New ${service} inquiry from ${name}`,
      text: plainText,
      html: `<h1>New ARTECHZO website inquiry</h1>${html}`,
    });
    return json({ ok: true });
  } catch (error) {
    console.error("Unable to send contact inquiry", error);
    return json(
      { error: "We could not send your inquiry. Please use the contact email or phone number." },
      502,
    );
  }
}

function text(value: unknown, maxLength = 1_000): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string): string {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character] ??
      character,
  );
}

function json(payload: unknown, status = 200): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}
