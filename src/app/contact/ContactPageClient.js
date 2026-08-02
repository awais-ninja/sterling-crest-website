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
      <section className="relative w-full bg-gradient-to-br from-surface via-surface-elevated to-surface-deep py-16 md:py-24 pt-24 md:pt-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-5">
              Contact Sterling Crest Accountants
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed mb-8">
              Send an enquiry or book a free 30 minute consultation.{" "}
              {businessDetails.responseTime} Sterling Crest Accountants is
              registered in Leeds and provides remote accounting and tax support
              across the UK.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConsultationCta location="contact_hero">
                Book a Free 30 Minute Consultation
              </ConsultationCta>
              <a
                href="#enquiry-form"
                className="inline-flex items-center justify-center min-h-12 px-8 py-3 rounded-md font-semibold border-2 border-gold text-gold hover:bg-gold hover:text-on-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                Send an enquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-surface py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-ink mb-2">
                Send an enquiry
              </h2>
              <p className="text-ink-muted mb-6 text-sm leading-relaxed">
                Prefer to write to us first? Use the form below. Your information
                is used only to respond to this enquiry. See our{" "}
                <Link href="/privacy" className="text-gold underline">
                  Privacy Policy
                </Link>{" "}
                for details.
              </p>
              <ContactForm defaultService={defaultServiceOption} />
            </div>

            <aside className="lg:col-span-2 space-y-6">
              <div className="card-interactive bg-gradient-to-br from-surface-elevated to-surface p-6 rounded-xl">
                <h2 className="text-xl font-semibold text-ink mb-3">
                  Book a free 30-minute consultation
                </h2>
                <p className="text-sm text-ink-muted mb-4 leading-relaxed">
                  Prefer to choose a time online? Book a free consultation with
                  our team.
                </p>
                <ConsultationCta
                  location="contact_sidebar"
                  className="w-full min-h-11 px-5 text-sm"
                >
                  Book a Consultation
                </ConsultationCta>
              </div>

              {whatsappHref && (
                <div className="card-interactive bg-gradient-to-br from-surface-elevated to-surface p-6 rounded-xl">
                  <h2 className="text-xl font-semibold text-ink mb-3">
                    WhatsApp Us
                  </h2>
                  <p className="text-sm text-ink-muted mb-4 leading-relaxed">
                    Prefer WhatsApp? Send us a message and briefly tell us what
                    support you need.
                  </p>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Message Sterling Crest Accountants on WhatsApp"
                    className="inline-flex w-full items-center justify-center min-h-11 px-5 rounded-md font-semibold border-2 border-gold text-gold hover:bg-gold hover:text-on-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                    onClick={() =>
                      trackEvent(AnalyticsEvents.WHATSAPP_CLICK, {
                        location: "contact_page",
                      })
                    }
                  >
                    WhatsApp Us
                  </a>
                </div>
              )}

              <div className="card-interactive bg-gradient-to-br from-surface-elevated to-surface p-6 rounded-xl">
                <h2 className="text-xl font-semibold text-ink mb-4">
                  Contact details
                </h2>
                <ul className="space-y-4 text-sm text-ink-muted">
                  {phoneHref && (
                    <li>
                      <span className="block text-ink mb-1">Phone</span>
                      <a
                        href={phoneHref}
                        aria-label={`Call ${businessDetails.phone}`}
                        className="link-gold"
                        onClick={() =>
                          trackEvent(AnalyticsEvents.PHONE_CLICK, {
                            location: "contact_page",
                          })
                        }
                      >
                        {businessDetails.phone}
                      </a>
                    </li>
                  )}
                  {hasValue(businessDetails.email) && (
                    <li>
                      <span className="block text-ink mb-1">Email</span>
                      <a
                        href={emailHref || `mailto:${businessDetails.email}`}
                        aria-label={`Email ${businessDetails.email}`}
                        className="link-gold break-all"
                        onClick={() =>
                          trackEvent(AnalyticsEvents.EMAIL_CLICK, {
                            location: "contact_page",
                          })
                        }
                      >
                        {businessDetails.email}
                      </a>
                    </li>
                  )}
                  {whatsappHref && (
                    <li>
                      <span className="block text-ink mb-1">WhatsApp</span>
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Message Sterling Crest Accountants on WhatsApp"
                        className="link-gold"
                        onClick={() =>
                          trackEvent(AnalyticsEvents.WHATSAPP_CLICK, {
                            location: "contact_page_details",
                          })
                        }
                      >
                        WhatsApp Us
                      </a>
                    </li>
                  )}
                </ul>
                <div className="mt-5 pt-4 border-t border-gold/20">
                  <span className="block text-ink text-sm mb-3">
                    Follow us
                  </span>
                  <SocialLinks location="contact_page" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-surface-elevated to-surface p-6 rounded-xl border border-gold/20 space-y-3 text-sm text-ink-muted">
                <h2 className="text-xl font-semibold text-ink">
                  Office hours
                </h2>
                <p>
                  <strong className="text-ink">Weekdays:</strong>{" "}
                  {businessDetails.businessHours}
                </p>
                {hasValue(businessDetails.weekendHours) && (
                  <p>
                    <strong className="text-ink">Weekend:</strong>{" "}
                    {businessDetails.weekendHours}
                  </p>
                )}
                <p>
                  <strong className="text-ink">Response time:</strong>{" "}
                  {businessDetails.responseTime}
                </p>
                {hasValue(businessDetails.registeredOffice) && (
                  <p>
                    <strong className="text-ink">Registered office:</strong>{" "}
                    {businessDetails.registeredOffice}
                  </p>
                )}
                <p className="pt-2 border-t border-gold/20">
                  {getCompanyDisclosure()}
                </p>
                {hasValue(getRegisteredOfficeDisclosure()) && (
                  <p>{getRegisteredOfficeDisclosure()}</p>
                )}
              </div>

              <div className="bg-gradient-to-br from-surface-elevated to-surface p-6 rounded-xl border border-gold/20">
                <h2 className="text-xl font-semibold text-ink mb-3">
                  Services overview
                </h2>
                <ul className="space-y-2 text-sm">
                  {getFeaturedServices(6).map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="link-gold"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-5">
                  <ConsultationCta
                    href="/services"
                    variant="secondary"
                    className="w-full"
                  >
                    View all services
                  </ConsultationCta>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
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
