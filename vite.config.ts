// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  nitro: {
    compatibilityDate: "2026-10-08",
    cloudflare: {
      wrangler: {
        account_id: "c4938e5e778ef26dacad7b4306c76bdc",
        workers_dev: true,
        routes: [{ pattern: "artechzo.tech", custom_domain: true }],
        send_email: [{ name: "EMAIL", allowed_sender_addresses: ["website@artechzo.tech"] }],
      },
    },
  },
});
