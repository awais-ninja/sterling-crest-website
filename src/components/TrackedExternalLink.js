"use client";

import { trackEvent } from "@/lib/analytics";

export default function TrackedExternalLink({
  href,
  eventName,
  location,
  className = "",
  ariaLabel,
  children,
  external = true,
}) {
  if (!href) return null;

  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      onClick={() => {
        if (eventName) {
          trackEvent(eventName, { location });
        }
      }}
    >
      {children}
    </a>
  );
}
