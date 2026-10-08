import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ compact = false, className }: { compact?: boolean; className?: string }) {
  return (
    <Link to="/" aria-label="ARTECHZO home" className={cn("group inline-flex items-center gap-3", className)}>
      <svg viewBox="0 0 44 44" className="h-9 w-9 shrink-0" role="img" aria-label="ARTECHZO symbol">
        <path d="M22 3 40 35H28l-6-11-6 11H4L22 3Z" className="fill-primary" />
        <path d="M14.5 28.5h15L35 38H9l5.5-9.5Z" className="fill-brand-ink" />
        <path d="m21.9 14 4.5 8h-9l4.5-8Z" className="fill-background" />
      </svg>
      {!compact && (
        <span className="text-[1.05rem] font-bold tracking-[0.16em] text-foreground">ARTECHZO</span>
      )}
    </Link>
  );
}
