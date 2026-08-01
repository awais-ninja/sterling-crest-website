"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import {
  getGaMeasurementId,
  getGtmId,
  hasAnalyticsConsent,
  isAnalyticsConfigured,
} from "@/lib/analytics";

/**
 * Loads GA4 and/or Google Tag Manager only when configured and consent is granted.
 */
export default function AnalyticsLoader() {
  const [enabled, setEnabled] = useState(false);
  const measurementId = getGaMeasurementId();
  const gtmId = getGtmId();

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

  if (!enabled) return null;

  return (
    <>
      {gtmId ? (
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `}
        </Script>
      ) : null}

      {measurementId ? (
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
      ) : null}

      {gtmId ? (
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
      ) : null}
    </>
  );
}
