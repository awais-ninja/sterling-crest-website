"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import {
  getGaMeasurementId,
  hasAnalyticsConsent,
  isAnalyticsConfigured,
} from "@/lib/analytics";

/**
 * Sends a route-aware page_view when GA is configured and consent is granted.
 */
export default function AnalyticsPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!isAnalyticsConfigured() || !hasAnalyticsConsent()) return;
    if (typeof window.gtag !== "function") return;

    const measurementId = getGaMeasurementId();
    const query = searchParams?.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;

    window.gtag("event", "page_view", {
      page_path: pagePath,
      send_to: measurementId,
    });
  }, [pathname, searchParams]);

  return null;
}
