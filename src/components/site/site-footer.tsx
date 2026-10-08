import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./logo";
import { company, navItems, services } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-brand-ink text-brand-ink-foreground">
      <div className="site-container py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo className="[&_span]:text-brand-ink-foreground [&_.fill-brand-ink]:fill-brand-ink-foreground" />
            <p className="mt-6 text-sm leading-7 text-brand-ink-muted">
              Engineering software, intelligent automation, and scalable cloud solutions.
            </p>
            <a
              href={`mailto:${company.email}`}
              className="mt-5 inline-flex text-sm text-brand-ink-foreground/90 transition-colors hover:text-primary-light"
            >
              {company.email}
            </a>
          </div>
          <FooterGroup
            title="Explore"
            links={navItems.slice(0, 4).map((item) => ({ label: item.label, to: item.to }))}
          />
          <FooterGroup
            title="Solutions"
            links={services.map((service) => ({
              label: service.shortTitle,
              to: "/services" as const,
            }))}
          />
          <FooterGroup title="Connect" links={[{ label: "Contact", to: "/contact" as const }]} />
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-brand-ink-border pt-6 text-xs text-brand-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ARTECHZO. All rights reserved.</p>
          <p>Built with engineering precision.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; to: "/" | "/services" | "/products" | "/about" | "/contact" }[];
}) {
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-ink-muted">
        {title}
      </h2>
      <ul className="mt-5 space-y-3">
        {links.map((link, index) => (
          <li key={`${link.label}-${index}`}>
            <Link
              to={link.to}
              className="inline-flex items-center gap-1 text-sm text-brand-ink-foreground/90 transition-colors hover:text-primary-light"
            >
              {link.label}
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
