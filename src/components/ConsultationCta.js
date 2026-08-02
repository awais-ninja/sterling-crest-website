"use client";

import Link from "next/link";
import { businessDetails } from "@/config/business";
import { AnalyticsEvents, trackEvent } from "@/lib/analytics";

function isExternalHref(href) {
  return typeof href === "string" && /^https?:\/\//i.test(href);
}

/** Primary / secondary consultation CTA, Picktime by default. */
export function ConsultationCta({
  href = businessDetails.consultationUrl,
  children = "Book a Consultation",
  variant = "primary",
  className = "",
  location = "cta",
  ariaLabel,
}) {
  const base = variant === "primary" ? "button-primary" : "button-secondary";
  const classes = `${base} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${className}`;

  const label =
    ariaLabel ||
    (isExternalHref(href)
      ? `${typeof children === "string" ? children : "Book a consultation"} (opens in a new tab)`
      : undefined);

  function handleClick() {
    if (isExternalHref(href)) {
      trackEvent(AnalyticsEvents.CONSULTATION_CLICK, { location });
      if (/picktime\.com/i.test(href)) {
        trackEvent(AnalyticsEvents.PICKTIME_CLICK, { location });
      }
    }
  }

  if (isExternalHref(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={label}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
