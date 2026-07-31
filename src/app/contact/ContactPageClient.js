"use client";

import ContactForm from "@/components/ContactForm";
import { ConsultationCta } from "@/components/ConsultationCta";
import PageShell from "@/components/PageShell";
import {
  businessDetails,
  getEmailHref,
  getPhoneHref,
  getWhatsAppHref,
  getCompanyDisclosure,
  getRegisteredOfficeDisclosure,
  hasValue,
} from "@/config/business";
import { AnalyticsEvents, trackEvent } from "@/lib/analytics";
import { services } from "@/data/services";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function resolveDefaultService(requestedService) {
  if (!requestedService) return "";
  const options = [
    "Bookkeeping",
    "Company accounts",
    "Corporation tax",
    "Self assessment",
    "Payroll and PAYE",
    "VAT returns",
    "CIS returns",
    "Property and landlord accounts",
    "Business advisory",
    "Company formation",
    "Other",
  ];
  const normalize = (value) =>
    value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  const requested = normalize(requestedService);
  return (
    options.find((option) => normalize(option) === requested) ||
    options.find((option) => requested.includes(normalize(option))) ||
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
      <section className="relative w-full bg-gradient-to-br from-[#0B1C2D] via-[#081524] to-[#050E18] py-16 md:py-24 pt-24 md:pt-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F7FA] mb-5">
              Contact Sterling Crest Accountants
            </h1>
            <p className="text-lg text-[#AAB2BD] leading-relaxed mb-8">
              Send an enquiry or book a free 30 minute consultation.{" "}
              {businessDetails.responseTime}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConsultationCta location="contact_hero">
                Book a Free 30 Minute Consultation
              </ConsultationCta>
              <a
                href="#enquiry-form"
                className="inline-flex items-center justify-center min-h-12 px-8 py-3 rounded-md font-semibold border-2 border-[#C9A14A] text-[#C9A14A] hover:bg-[#C9A14A] hover:text-[#0B1C2D] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
              >
                Send an enquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-[#0B1C2D] py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-[#F5F7FA] mb-2">
                Send an enquiry
              </h2>
              <p className="text-[#AAB2BD] mb-6 text-sm leading-relaxed">
                Prefer to write to us first? Use the form below. Your information
                is used only to respond to this enquiry. See our{" "}
                <Link href="/privacy" className="text-[#C9A14A] underline">
                  Privacy Policy
                </Link>{" "}
                for details.
              </p>
              <ContactForm defaultService={defaultServiceOption} />
            </div>

            <aside className="lg:col-span-2 space-y-6">
              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A]/20">
                <h2 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Book a consultation
                </h2>
                <p className="text-sm text-[#AAB2BD] mb-4 leading-relaxed">
                  Prefer to choose a time online? Book a free 30 minute
                  consultation with our team.
                </p>
                <ConsultationCta
                  location="contact_sidebar"
                  className="w-full min-h-11 px-5 text-sm"
                >
                  Book a Free 30 Minute Consultation
                </ConsultationCta>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A]/20">
                <h2 className="text-xl font-semibold text-[#F5F7FA] mb-4">
                  Contact details
                </h2>
                <ul className="space-y-4 text-sm text-[#AAB2BD]">
                  {phoneHref && (
                    <li>
                      <span className="block text-[#F5F7FA] mb-1">Phone</span>
                      <a
                        href={phoneHref}
                        aria-label={`Call ${businessDetails.phone}`}
                        className="text-[#C9A14A] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
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
                      <span className="block text-[#F5F7FA] mb-1">Email</span>
                      <a
                        href={emailHref || `mailto:${businessDetails.email}`}
                        aria-label={`Email ${businessDetails.email}`}
                        className="text-[#C9A14A] break-all hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
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
                      <span className="block text-[#F5F7FA] mb-1">WhatsApp</span>
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#C9A14A] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
                        onClick={() =>
                          trackEvent(AnalyticsEvents.WHATSAPP_CLICK, {
                            location: "contact_page",
                          })
                        }
                      >
                        Message us on WhatsApp
                      </a>
                    </li>
                  )}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A]/20 space-y-3 text-sm text-[#AAB2BD]">
                <h2 className="text-xl font-semibold text-[#F5F7FA]">
                  Office hours
                </h2>
                <p>
                  <strong className="text-[#F5F7FA]">Weekdays:</strong>{" "}
                  {businessDetails.businessHours}
                </p>
                {hasValue(businessDetails.weekendHours) && (
                  <p>
                    <strong className="text-[#F5F7FA]">Weekend:</strong>{" "}
                    {businessDetails.weekendHours}{" "}
                    <a
                      href={businessDetails.consultationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Book a weekend appointment on Picktime (opens in a new tab)"
                      className="text-[#C9A14A] underline underline-offset-2 hover:text-[#B08B3E]"
                      onClick={() =>
                        trackEvent(AnalyticsEvents.CONSULTATION_CLICK, {
                          location: "contact_weekend",
                        })
                      }
                    >
                      Book appointment
                    </a>
                  </p>
                )}
                <p>
                  <strong className="text-[#F5F7FA]">Response time:</strong>{" "}
                  {businessDetails.responseTime}
                </p>
                {hasValue(businessDetails.registeredOffice) && (
                  <p>
                    <strong className="text-[#F5F7FA]">Registered office:</strong>{" "}
                    {businessDetails.registeredOffice}
                  </p>
                )}
                <p className="pt-2 border-t border-[#C9A14A]/20">
                  {getCompanyDisclosure()}
                </p>
                {hasValue(getRegisteredOfficeDisclosure()) && (
                  <p>{getRegisteredOfficeDisclosure()}</p>
                )}
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A]/20">
                <h2 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Services overview
                </h2>
                <ul className="space-y-2 text-sm">
                  {services.slice(0, 6).map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="text-[#C9A14A] hover:underline"
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
          <div className="container mx-auto px-4 py-32 text-[#AAB2BD]">
            Loading contact form…
          </div>
        }
      >
        <ContactPageInner />
      </Suspense>
    </PageShell>
  );
}
