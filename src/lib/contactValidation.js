import {
  clientTypeOptions,
  contactMethodOptions,
  serviceOptions,
} from "@/config/business";
import { isValidEmail, isValidPhone, sanitizeText } from "@/lib/sanitize";

/**
 * Validate contact form payload on the server (and reusable on the client).
 * @param {Record<string, unknown>} raw
 */
export function validateContactPayload(raw) {
  const errors = {};

  const fullName = sanitizeText(String(raw.fullName || ""), 120);
  const email = sanitizeText(String(raw.email || ""), 160).toLowerCase();
  const phone = sanitizeText(String(raw.phone || ""), 40);
  const clientType = sanitizeText(String(raw.clientType || ""), 80);
  const serviceRequired = sanitizeText(String(raw.serviceRequired || ""), 120);
  const preferredContactMethod = sanitizeText(
    String(raw.preferredContactMethod || ""),
    40
  );
  const message = sanitizeText(String(raw.message || ""), 4000);
  const privacyAccepted = Boolean(raw.privacyAccepted);
  const website = sanitizeText(String(raw.website || ""), 200); // honeypot

  if (website) {
    return {
      ok: false,
      honeypot: true,
      errors: { form: "Unable to submit this enquiry." },
      data: null,
    };
  }

  if (!fullName || fullName.length < 2) {
    errors.fullName = "Please enter your full name.";
  }

  if (!email || !isValidEmail(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!phone || !isValidPhone(phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!clientType || !clientTypeOptions.includes(clientType)) {
    errors.clientType = "Please select a client type.";
  }

  if (!serviceRequired || !serviceOptions.includes(serviceRequired)) {
    errors.serviceRequired = "Please select a service.";
  }

  if (
    !preferredContactMethod ||
    !contactMethodOptions.includes(preferredContactMethod)
  ) {
    errors.preferredContactMethod = "Please select a preferred contact method.";
  }

  if (!message || message.length < 10) {
    errors.message = "Please provide a short message (at least 10 characters).";
  }

  if (!privacyAccepted) {
    errors.privacyAccepted =
      "Please confirm you have read the privacy policy.";
  }

  const ok = Object.keys(errors).length === 0;

  return {
    ok,
    honeypot: false,
    errors,
    data: ok
      ? {
          fullName,
          email,
          phone,
          clientType,
          serviceRequired,
          preferredContactMethod,
          message,
          privacyAccepted: true,
        }
      : null,
  };
}
