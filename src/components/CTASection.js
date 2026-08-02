"use client";

import { ConsultationCta } from "@/components/ConsultationCta";
import Reveal from "@/components/Reveal";
import {
  businessDetails,
  getWhatsAppHref,
  hasValue,
} from "@/config/business";
import { AnalyticsEvents, trackEvent } from "@/lib/analytics";

export default function CTASection() {
  const whatsappHref = getWhatsAppHref();

  return (
    <section
      id="contact-cta"
      className="relative w-full py-20 md:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, rgb(var(--surface-elevated)), rgb(var(--surface-deep)))",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 text-center max-w-4xl relative z-10">
        <Reveal>
          <div className="cta-panel bg-gradient-to-br from-surface to-surface-elevated p-8 md:p-14 rounded-3xl border border-gold/30">
            <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">
              Next step
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-5">
              Tell us what support you need
            </h2>
            <p className="text-lg text-ink-muted mb-8 leading-relaxed max-w-2xl mx-auto">
              Send a short enquiry or book a free 30-minute consultation.{" "}
              {businessDetails.responseTime}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <ConsultationCta
                href="/contact#enquiry-form"
                variant="secondary"
                location="homepage_cta"
              >
                Send an Enquiry
              </ConsultationCta>
              <ConsultationCta location="homepage_cta">
                Book a Consultation
              </ConsultationCta>
              {hasValue(whatsappHref) && (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Message Sterling Crest Accountants on WhatsApp"
                  className="button-secondary"
                  onClick={() =>
                    trackEvent(AnalyticsEvents.WHATSAPP_CLICK, {
                      location: "homepage_cta",
                    })
                  }
                >
                  WhatsApp Us
                </a>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
