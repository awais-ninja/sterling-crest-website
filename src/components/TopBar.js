"use client";

import {
  businessDetails,
  getEmailHref,
  getPhoneHref,
  getWhatsAppHref,
  hasValue,
} from "@/config/business";
import { AnalyticsEvents, trackEvent } from "@/lib/analytics";

/**
 * Compact utility bar above the main navbar.
 * Only renders configured contact / social details, never invents reviews or links.
 */
export default function TopBar() {
  const phoneHref = getPhoneHref();
  const emailHref = getEmailHref();
  const whatsappHref = getWhatsAppHref();

  const socials = [
    { label: "LinkedIn", href: businessDetails.linkedinUrl },
    { label: "Facebook", href: businessDetails.facebookUrl },
    { label: "Instagram", href: businessDetails.instagramUrl },
    { label: "Google Business", href: businessDetails.googleBusinessUrl },
  ].filter((item) => hasValue(item.href));

  const hasLeft =
    hasValue(businessDetails.email) ||
    phoneHref ||
    whatsappHref;
  const hasRight =
    hasValue(businessDetails.businessHours) ||
    hasValue(businessDetails.weekendHours) ||
    socials.length > 0;

  if (!hasLeft && !hasRight) return null;

  return (
    <div className="bg-[#081524] border-b border-[#C9A14A]/25 text-[0.75rem] sm:text-[0.8125rem] text-[#AAB2BD]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center md:justify-between gap-x-4 gap-y-1.5 py-2 min-h-9 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-0 gap-y-1">
            {hasValue(businessDetails.email) && (
              <TopItem showDivider={false}>
                <a
                  href={emailHref || `mailto:${businessDetails.email}`}
                  aria-label={`Email ${businessDetails.email}`}
                  className="inline-flex items-center gap-1.5 text-[#C9A14A] hover:text-[#B08B3E] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
                  onClick={() =>
                    trackEvent(AnalyticsEvents.EMAIL_CLICK, {
                      location: "top_bar",
                    })
                  }
                >
                  <EnvelopeIcon />
                  <span className="break-all">{businessDetails.email}</span>
                </a>
              </TopItem>
            )}

            {phoneHref && (
              <TopItem showDivider={hasValue(businessDetails.email)}>
                <a
                  href={phoneHref}
                  aria-label={`Call ${businessDetails.phone}`}
                  className="inline-flex items-center gap-1.5 text-[#F5F7FA] hover:text-[#C9A14A] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
                  onClick={() =>
                    trackEvent(AnalyticsEvents.PHONE_CLICK, {
                      location: "top_bar",
                    })
                  }
                >
                  <PhoneIcon />
                  <span>{businessDetails.phone}</span>
                </a>
              </TopItem>
            )}

            {whatsappHref && (
              <TopItem showDivider={Boolean(phoneHref || hasValue(businessDetails.email))}>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`WhatsApp ${businessDetails.whatsappNumber}`}
                  className="inline-flex items-center gap-1.5 text-[#F5F7FA] hover:text-[#C9A14A] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
                  onClick={() =>
                    trackEvent(AnalyticsEvents.WHATSAPP_CLICK, {
                      location: "top_bar",
                    })
                  }
                >
                  <WhatsAppIcon />
                  <span>{businessDetails.whatsappNumber}</span>
                </a>
              </TopItem>
            )}
          </div>

          <div className="hidden md:flex flex-wrap items-center justify-center md:justify-end gap-x-0">
            {(hasValue(businessDetails.businessHours) ||
              hasValue(businessDetails.weekendHours)) && (
              <TopItem showDivider={false}>
                <span className="inline-flex items-center gap-1.5">
                  <ClockIcon />
                  <span>
                    {hasValue(businessDetails.businessHours) &&
                      businessDetails.businessHours}
                    {hasValue(businessDetails.businessHours) &&
                      hasValue(businessDetails.weekendHours) &&
                      " · "}
                    {hasValue(businessDetails.weekendHours) &&
                      businessDetails.weekendHours}
                    {hasValue(businessDetails.consultationUrl) && (
                      <>
                        {" · "}
                        <a
                          href={businessDetails.consultationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Book an appointment on Picktime (opens in a new tab)"
                          className="text-[#C9A14A] hover:text-[#B08B3E] underline underline-offset-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
                          onClick={() =>
                            trackEvent(AnalyticsEvents.CONSULTATION_CLICK, {
                              location: "top_bar_weekend",
                            })
                          }
                        >
                          Book appointment
                        </a>
                      </>
                    )}
                  </span>
                </span>
              </TopItem>
            )}

            {socials.map((social, index) => (
              <TopItem
                key={social.label}
                showDivider={
                  index > 0 ||
                  hasValue(businessDetails.businessHours) ||
                  hasValue(businessDetails.weekendHours)
                }
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.label} (opens in a new tab)`}
                  className="text-[#F5F7FA] hover:text-[#C9A14A] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
                >
                  {social.label}
                </a>
              </TopItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TopItem({ children, showDivider = true }) {
  return (
    <span className="inline-flex items-center">
      {showDivider && (
        <span
          className="mx-2.5 sm:mx-3 text-[#C9A14A]/30 select-none"
          aria-hidden="true"
        >
          |
        </span>
      )}
      {children}
    </span>
  );
}

function EnvelopeIcon() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0 text-[#C9A14A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
