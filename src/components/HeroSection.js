import Link from "next/link";
import { businessDetails } from "@/config/business";
import { ConsultationCta } from "@/components/ConsultationCta";

const trustPoints = [
  "Practical accountancy experience",
  "Confidential and compliance-focused",
  "Clear fees agreed before work begins",
  "UK-wide remote support",
];

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[min(92vh,52rem)] flex items-end lg:items-center overflow-hidden">
      <picture className="absolute inset-0 image-hover image-hover-hero">
        <source
          media="(min-width: 1024px)"
          srcSet="/homepage/home-page-hero.webp"
          type="image/webp"
        />
        <img
          src="/homepage/home-page-hero-mobile.webp"
          alt="Sterling Crest accounting workspace with branded desk, laptop reports and client files"
          width={1672}
          height={941}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[72%_center]"
        />
      </picture>

      <div
        className="absolute inset-0 bg-gradient-to-r from-surface via-surface/92 to-surface/55 lg:to-surface/35"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface/40 lg:to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24 lg:py-28">
        <div className="max-w-2xl text-center lg:text-left space-y-6">
          <p className="hero-enter text-gold text-sm sm:text-base font-semibold tracking-wide">
            Welcome to {businessDetails.tradingName}
          </p>

          <h1 className="hero-enter hero-enter-delay-1 text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold text-ink leading-tight break-words">
            Practical accountants for businesses and individuals across the UK
          </h1>

          <p className="hero-enter hero-enter-delay-2 text-base sm:text-lg text-ink-muted leading-relaxed">
            Clear support with company accounts, tax returns, bookkeeping,
            payroll and VAT—backed by organised processes and straightforward
            advice.
          </p>

          <div className="hero-enter hero-enter-delay-3 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
            <ConsultationCta location="hero">
              Book a Consultation
            </ConsultationCta>
            <ConsultationCta
              href="/contact#enquiry-form"
              variant="secondary"
              location="hero"
            >
              Send an Enquiry
            </ConsultationCta>
          </div>

          <ul className="hero-enter hero-enter-delay-3 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 pt-2 text-sm text-ink-muted">
            {trustPoints.map((point) => (
              <li key={point} className="inline-flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-gold"
                  aria-hidden="true"
                />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
