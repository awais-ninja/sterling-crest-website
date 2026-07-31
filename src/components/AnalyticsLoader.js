"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import {
  getGaMeasurementId,
  getStoredConsent,
  hasAnalyticsConsent,
  isAnalyticsConfigured,
} from "@/lib/analytics";

/**
 * Loads Google Analytics only when configured and consent is granted.
 */
export default function AnalyticsLoader() {
  const [enabled, setEnabled] = useState(false);
  const measurementId = getGaMeasurementId();

  useEffect(() => {
    function refresh() {
      setEnabled(isAnalyticsConfigured() && hasAnalyticsConsent());
    }
    refresh();
    window.addEventListener("sc-consent-updated", refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener("sc-consent-updated", refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  if (!enabled || !measurementId) return null;

  // Ensure consent object exists for debugging/support
  if (typeof window !== "undefined" && !getStoredConsent()) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${measurementId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
