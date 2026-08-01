import { getGaMeasurementId, getGtmId } from "@/lib/analytics";

/**
 * Server-rendered Google tag snippets for the document head.
 * Always present when IDs exist; Consent Mode keeps analytics storage denied until consent.
 */
export function GoogleTagHeadScripts() {
  const measurementId = getGaMeasurementId();
  const gtmId = getGtmId();

  if (!measurementId && !gtmId) return null;

  const consentAndBootstrap = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
      functionality_storage: 'granted',
      security_storage: 'granted',
      wait_for_update: 500
    });
    ${
      gtmId
        ? `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`
        : ""
    }
    ${
      measurementId
        ? `gtag('js', new Date());
    gtag('config', '${measurementId}', { anonymize_ip: true, send_page_view: true });`
        : ""
    }
  `;

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: consentAndBootstrap }}
      />
      {measurementId ? (
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        />
      ) : null}
    </>
  );
}

export function GoogleTagManagerNoscript() {
  const gtmId = getGtmId();
  if (!gtmId) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
