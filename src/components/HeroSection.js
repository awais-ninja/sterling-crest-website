import Link from "next/link";
import { businessDetails } from "@/config/business";
import { ConsultationCta } from "@/components/ConsultationCta";

const trustPoints = [
  "Proven experience",
  "Dedicated Support",
  "Secure & Compliant",
  "Grow Your Business",
  "HMRC Support",
  "Cloud Accounting",
];

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[min(92vh,52rem)] flex items-end lg:items-center overflow-hidden">
      {/*
        Native <picture> so desktop/mobile each download one asset — no JS swap
        (JS swap was tanking desktop Speed Index).
      */}
      <picture className="absolute inset-0">
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
          <p className="text-gold text-sm sm:text-base font-semibold tracking-wide">
            Welcome to {businessDetails.tradingName}
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold text-ink leading-tight break-words">
            Specialist UK Accountants for Limited Companies, Company Accounts
            and Payroll
          </h1>

          <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
            UK accountants for self assessment, company accounts, bookkeeping,
            payroll and company formation. Clear fixed fee support for limited
            companies, sole traders, landlords and small businesses across the
            UK, with HMRC compliant accounts and practical advice you can use
            week to week.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
            <ConsultationCta location="hero">
              Book Free Consultation
            </ConsultationCta>
            <Link
              href="/services"
              className="inline-flex items-center justify-center min-h-12 px-8 py-3 rounded-lg font-semibold border-2 border-gold text-gold hover:bg-gold hover:text-on-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              View Services
            </Link>
          </div>

          <ul className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 pt-2 text-sm text-ink-muted">
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
