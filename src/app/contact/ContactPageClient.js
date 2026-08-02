"use client";

import ContactForm from "@/components/ContactForm";
import { ConsultationCta } from "@/components/ConsultationCta";
import PageShell from "@/components/PageShell";
import SocialLinks from "@/components/SocialLinks";
import {
  businessDetails,
  getEmailHref,
  getPhoneHref,
  getWhatsAppHref,
  getCompanyDisclosure,
  getRegisteredOfficeDisclosure,
  hasValue,
  napDetails,
  serviceOptions,
} from "@/config/business";
import { AnalyticsEvents, trackEvent } from "@/lib/analytics";
import { getFeaturedServices } from "@/data/services";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function resolveDefaultService(requestedService) {
  if (!requestedService) return "";
  const normalize = (value) =>
    value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  const requested = normalize(requestedService);
  return (
    serviceOptions.find((option) => normalize(option) === requested) ||
    serviceOptions.find((option) => requested.includes(normalize(option))) ||
    ""
  );
}

function ContactPageInner() {
  const searchParams = useSearchParams();
  const requestedService = searchParams.get("service") || "";
  const defaultServiceOption = resolveDefaultService(requestedService);

  const phoneHref = getPhoneHref();
  const whatsappHref = getWhatsAppHref();
  const emailHref = getEmailHref();

  return (
    <>
      {/* Atmospheric contact hero — one composition, brand-led */}
      <section className="relative w-full overflow-hidden pt-28 md:pt-32 pb-16 md:pb-20">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 10% 20%, rgb(var(--gold) / 0.12), transparent 55%), radial-gradient(ellipse 70% 50% at 90% 80%, rgb(var(--gold) / 0.08), transparent 50%), linear-gradient(165deg, rgb(var(--surface-deep)) 0%, rgb(var(--surface)) 45%, rgb(var(--surface-elevated)) 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-y-0 right-0 w-1/2 opacity-[0.07] pointer-events-none hidden lg:block"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-18deg, transparent, transparent 28px, rgb(var(--gold)) 28px, rgb(var(--gold)) 29px)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute left-0 top-24 bottom-16 w-1 bg-gradient-to-b from-transparent via-gold to-transparent opacity-70 hidden md:block"
          aria-hidden="true"
        />

        <div className="relative container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-gold text-sm font-semibold tracking-[0.18em] uppercase mb-4">
              {businessDetails.tradingName}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-[3.4rem] font-bold text-ink leading-[1.1] mb-5">
              Let&apos;s talk about your accounts
            </h1>
            <p className="text-lg md:text-xl text-ink-muted leading-relaxed max-w-2xl mb-10">
              Two clear ways to reach us — send a short enquiry, or book a free
              30-minute consultation. {businessDetails.responseTime}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              <a
                href="#enquiry-form"
                className="group relative overflow-hidden rounded-2xl border border-gold/35 bg-surface/60 backdrop-blur-sm p-6 transition-interactive hover:border-gold/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <span
                  className="absolute inset-x-0 top-0 h-0.5 bg-gold"
                  aria-hidden="true"
                />
                <span className="block text-xs font-semibold uppercase tracking-wider text-gold mb-2">
                  Write to us
                </span>
                <span className="block text-xl font-semibold text-ink mb-2 group-hover:text-gold transition-colors">
                  Send an enquiry
                </span>
                <span className="block text-sm text-ink-muted leading-relaxed">
                  Tell us what you need and we will reply by email or phone.
                </span>
              </a>

              <div className="group relative overflow-hidden rounded-2xl border border-gold/35 bg-gold/10 p-6">
                <span
                  className="absolute inset-x-0 top-0 h-0.5 bg-gold"
                  aria-hidden="true"
                />
                <span className="block text-xs font-semibold uppercase tracking-wider text-gold mb-2">
                  Talk to us
                </span>
                <span className="block text-xl font-semibold text-ink mb-2">
                  Book a consultation
                </span>
                <span className="block text-sm text-ink-muted leading-relaxed mb-4">
                  Choose a free 30-minute slot online at a time that suits you.
                </span>
                <ConsultationCta
                  location="contact_hero"
                  className="w-full min-h-11 px-5 text-sm"
                >
                  Book free consultation
                </ConsultationCta>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick channels — interactive contact strip */}
      <section
        className="relative border-y border-gold/20 bg-surface-elevated"
        aria-label="Quick contact options"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <ul className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gold/20">
            {phoneHref && (
              <li>
                <a
                  href={phoneHref}
                  aria-label={`Call ${businessDetails.phone}`}
                  className="flex items-center gap-4 px-4 py-6 md:px-8 min-h-[5.5rem] transition-interactive hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-gold"
                  onClick={() =>
                    trackEvent(AnalyticsEvents.PHONE_CLICK, {
                      location: "contact_quick",
                    })
                  }
                >
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold"
                    aria-hidden="true"
                  >
                    <PhoneIcon />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-ink-muted mb-1">
                      Call
                    </span>
                    <span className="block text-ink font-semibold">
                      {businessDetails.phone}
                    </span>
                  </span>
                </a>
              </li>
            )}
            {hasValue(businessDetails.email) && (
              <li>
                <a
                  href={emailHref || `mailto:${businessDetails.email}`}
                  aria-label={`Email ${businessDetails.email}`}
                  className="flex items-center gap-4 px-4 py-6 md:px-8 min-h-[5.5rem] transition-interactive hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-gold"
                  onClick={() =>
                    trackEvent(AnalyticsEvents.EMAIL_CLICK, {
                      location: "contact_quick",
                    })
                  }
                >
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold"
                    aria-hidden="true"
                  >
                    <MailIcon />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wider text-ink-muted mb-1">
                      Email
                    </span>
                    <span className="block text-ink font-semibold break-all">
                      {businessDetails.email}
                    </span>
                  </span>
                </a>
              </li>
            )}
            {whatsappHref && (
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Message Sterling Crest Accountants on WhatsApp"
                  className="flex items-center gap-4 px-4 py-6 md:px-8 min-h-[5.5rem] transition-interactive hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-gold"
                  onClick={() =>
                    trackEvent(AnalyticsEvents.WHATSAPP_CLICK, {
                      location: "contact_quick",
                    })
                  }
                >
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold"
                    aria-hidden="true"
                  >
                    <WhatsAppIcon />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-ink-muted mb-1">
                      WhatsApp
                    </span>
                    <span className="block text-ink font-semibold">
                      WhatsApp Us
                    </span>
                  </span>
                </a>
              </li>
            )}
          </ul>
        </div>
      </section>

      {/* Form + supporting column */}
      <section className="relative w-full bg-surface py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 max-w-6xl mx-auto">
            <div className="lg:col-span-7">
              <div className="mb-8">
                <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-2">
                  Enquiry form
                </p>
                <h2 className="text-3xl font-bold text-ink mb-3">
                  Send an enquiry
                </h2>
                <p className="text-ink-muted text-sm leading-relaxed max-w-xl">
                  Prefer to write first? Share a few details below. Your
                  information is used only to respond to this enquiry. See our{" "}
                  <Link href="/privacy" className="link-gold">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>

              <div className="relative">
                <div
                  className="absolute -inset-px rounded-2xl bg-gradient-to-br from-gold/40 via-gold/10 to-transparent opacity-80 pointer-events-none"
                  aria-hidden="true"
                />
                <ContactForm
                  defaultService={defaultServiceOption}
                  className="relative !rounded-2xl !border-gold/30 !p-6 md:!p-9 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.55)]"
                />
              </div>
            </div>

            <aside className="lg:col-span-5 space-y-8 lg:pt-16">
              <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-b from-gold/15 via-surface-elevated to-surface p-7 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold mb-3">
                  Prefer to talk?
                </p>
                <h2 className="text-2xl font-bold text-ink mb-3">
                  Book a free 30-minute consultation
                </h2>
                <p className="text-sm text-ink-muted leading-relaxed mb-6">
                  Pick a time online. We will discuss your circumstances,
                  deadlines and the support that fits — with no obligation.
                </p>
                <ConsultationCta
                  location="contact_sidebar"
                  className="w-full"
                >
                  Choose a time
                </ConsultationCta>
              </div>

              {whatsappHref && (
                <div className="rounded-2xl border border-gold/25 bg-surface-elevated/80 p-7">
                  <div className="flex items-start gap-4">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold"
                      aria-hidden="true"
                    >
                      <WhatsAppIcon />
                    </span>
                    <div>
                      <h2 className="text-lg font-semibold text-ink mb-2">
                        Prefer WhatsApp?
                      </h2>
                      <p className="text-sm text-ink-muted leading-relaxed mb-4">
                        Send us a message and briefly tell us what support you
                        need.
                      </p>
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Message Sterling Crest Accountants on WhatsApp"
                        className="button-secondary !min-h-11 !px-5 !text-sm"
                        onClick={() =>
                          trackEvent(AnalyticsEvents.WHATSAPP_CLICK, {
                            location: "contact_page",
                          })
                        }
                      >
                        WhatsApp Us
                      </a>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-5">
                <h2 className="text-lg font-semibold text-ink">
                  Hours and location
                </h2>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-ink-muted uppercase tracking-wider text-xs mb-1">
                      Weekdays
                    </dt>
                    <dd className="text-ink">{businessDetails.businessHours}</dd>
                  </div>
                  {hasValue(businessDetails.weekendHours) && (
                    <div>
                      <dt className="text-ink-muted uppercase tracking-wider text-xs mb-1">
                        Weekend
                      </dt>
                      <dd className="text-ink">
                        {businessDetails.weekendHours}
                      </dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-ink-muted uppercase tracking-wider text-xs mb-1">
                      Registered office
                    </dt>
                    <dd className="text-ink leading-relaxed">
                      {napDetails.address}
                      <span className="block text-ink-muted mt-1 text-xs">
                        Remote support across the UK — consultations by
                        appointment.
                      </span>
                    </dd>
                  </div>
                </dl>

                <div className="pt-4 border-t border-gold/20">
                  <p className="text-xs uppercase tracking-wider text-ink-muted mb-3">
                    Follow us
                  </p>
                  <SocialLinks location="contact_page" />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Services rail */}
      <section className="relative w-full border-t border-gold/20 bg-surface-elevated py-14 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-2">
                How we can help
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-ink">
                Popular services
              </h2>
            </div>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 link-gold font-semibold"
            >
              View all accountancy services
              <span className="link-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {getFeaturedServices(6).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-gold/20 bg-surface px-4 py-4 transition-interactive hover:border-gold/55 hover:bg-surface-elevated focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  <span className="font-medium text-ink group-hover:text-gold transition-colors">
                    {service.title}
                  </span>
                  <span
                    className="link-arrow text-gold shrink-0"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Legal disclosure band */}
      <section className="relative w-full bg-surface-deep py-8 border-t border-gold/15">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <p className="text-sm text-ink-muted leading-relaxed">
            {getCompanyDisclosure()}{" "}
            {hasValue(getRegisteredOfficeDisclosure()) &&
              getRegisteredOfficeDisclosure()}
          </p>
        </div>
      </section>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function ContactPageClient() {
  return (
    <PageShell>
      <Suspense
        fallback={
          <div className="container mx-auto px-4 py-32 text-ink-muted">
            Loading contact form…
          </div>
        }
      >
        <ContactPageInner />
      </Suspense>
    </PageShell>
  );
}
