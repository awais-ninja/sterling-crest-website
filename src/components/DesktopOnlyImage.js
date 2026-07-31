"use client";

import { useEffect, useState } from "react";

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(null);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const sync = () => setIsDesktop(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  return isDesktop;
}

/** Renders children only at lg+. Null on mobile and during SSR. */
export default function DesktopOnly({ children }) {
  const isDesktop = useIsDesktop();
  if (!isDesktop) return null;
  return children;
}

/**
 * Mobile-first media gate. SSR and mobile render children (for LCP).
 * Hidden on desktop after mount so the larger desktop asset can take over.
 */
export function MobileOnly({ children }) {
  const isDesktop = useIsDesktop();
  if (isDesktop === true) return null;
  return children;
}
