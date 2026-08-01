"use client";

import { useEffect } from "react";
import {
  applyGtagConsent,
  hasAnalyticsConsent,
  isAnalyticsConfigured,
} from "@/lib/analytics";

/**
 * Keeps Google Consent Mode in sync with the cookie banner.
 * Tags themselves are loaded from the root layout so Google can detect them.
 */
export default function AnalyticsConsentSync() {
  useEffect(() => {
    if (!isAnalyticsConfigured()) return;

    function sync() {
      applyGtagConsent(hasAnalyticsConsent());
    }

    sync();
    window.addEventListener("sc-consent-updated", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("sc-consent-updated", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return null;
}
