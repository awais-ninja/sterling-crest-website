/**
 * Lightweight analytics helper.
 * Disabled until GA and/or GTM IDs are set and consent is granted.
 */

const CONSENT_KEY = "sc_cookie_consent";
export const OPEN_COOKIE_SETTINGS_EVENT = "sc-open-cookie-settings";

export function getStoredConsent() {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function storeConsent(consent) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(
    CONSENT_KEY,
    JSON.stringify({
      ...consent,
      updatedAt: new Date().toISOString(),
    })
  );
  window.dispatchEvent(new Event("sc-consent-updated"));
}

export function openCookieSettings() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT));
}

export function hasAnalyticsConsent() {
  const consent = getStoredConsent();
  return Boolean(consent?.analytics);
}

export function getGaMeasurementId() {
  return process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "";
}

export function getGtmId() {
  return process.env.NEXT_PUBLIC_GTM_ID?.trim() || "";
}

export function isAnalyticsConfigured() {
  return Boolean(getGaMeasurementId() || getGtmId());
}

/**
 * Push a non sensitive analytics event when consent and analytics are present.
 * Never send names, emails, phone numbers or message content.
 */
export function trackEvent(eventName, params = {}) {
  if (typeof window === "undefined") return;
  if (!isAnalyticsConfigured()) return;
  if (!hasAnalyticsConsent()) return;

  const safeParams = { ...params };
  delete safeParams.email;
  delete safeParams.phone;
  delete safeParams.name;
  delete safeParams.message;
  delete safeParams.fullName;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...safeParams,
  });

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, safeParams);
  }
}

export const AnalyticsEvents = {
  CONTACT_FORM_SUBMIT: "contact_form_submit",
  PHONE_CLICK: "phone_click",
  EMAIL_CLICK: "email_click",
  WHATSAPP_CLICK: "whatsapp_click",
  CONSULTATION_CLICK: "consultation_click",
  PICKTIME_CLICK: "picktime_click",
  SERVICE_ENQUIRY_CLICK: "service_enquiry_click",
};
