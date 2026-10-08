import { useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const loadingRoutes = new Set(["/services", "/products", "/about", "/contact"]);
const storagePrefix = "artechzo:visited:";

export function PageVisitLoader() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!loadingRoutes.has(pathname)) {
      setIsVisible(false);
      return;
    }

    const storageKey = `${storagePrefix}${pathname}`;
    try {
      if (window.sessionStorage.getItem(storageKey)) {
        setIsVisible(false);
        return;
      }
      window.sessionStorage.setItem(storageKey, "true");
    } catch {
      // The transition still works when browser storage is unavailable.
    }

    setIsVisible(true);
    const timer = window.setTimeout(() => setIsVisible(false), 1000);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  if (!isVisible) return null;

  return (
    <div
      className="page-visit-loader"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="page-visit-loader__mark" aria-hidden="true">
        <svg viewBox="0 0 44 44" className="h-12 w-12">
          <path d="M22 3 40 35H28l-6-11-6 11H4L22 3Z" className="fill-primary" />
          <path d="M14.5 28.5h15L35 38H9l5.5-9.5Z" className="fill-brand-ink" />
          <path d="m21.9 14 4.5 8h-9l4.5-8Z" className="fill-background" />
        </svg>
        <span>ARTECHZO</span>
      </div>
      <div className="page-visit-loader__track" aria-hidden="true">
        <span />
      </div>
      <span className="sr-only">Loading {pathname.slice(1)} page</span>
    </div>
  );
}