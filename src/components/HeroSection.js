import Image from "next/image";
import Link from "next/link";
import { businessDetails } from "@/config/business";
import { ConsultationCta } from "@/components/ConsultationCta";

const trustPoints = [
  "Proven experience",
  "Dedicated Support",
  "Secure & Compliant",
  "Grow Your Business",
];

const highlightPoints = ["HMRC Support", "Cloud Accounting"];

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-br from-surface via-surface-elevated to-surface-deep min-h-[90vh] flex items-center overflow-hidden pt-8 md:pt-16">
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgb(var(--gold)) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          <div className="text-center lg:text-left space-y-6">
            <p className="text-gold text-sm sm:text-base font-semibold tracking-wide">
              Welcome to {businessDetails.tradingName}
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold text-ink leading-tight break-words">
              Specialist UK Accountants for Limited Companies, Company
              Accounts and Payroll
            </h1>

            <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-2xl mx-auto lg:mx-0">
              UK accountants for self assessment, company accounts,
              bookkeeping, payroll and company formation. Clear fixed fee
              support for limited companies, sole traders, landlords and small
              businesses across the UK, with HMRC compliant accounts and
              practical advice you can use week to week.
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

            <ul className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-sm text-gold/90">
              {highlightPoints.map((point) => (
                <li key={point} className="inline-flex items-center gap-2">
                  <span aria-hidden="true">·</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10 hidden lg:block">
            <div className="relative w-full h-[560px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/homepage/home-page-hero-section.webp"
                alt="Accounting workspace representing Sterling Crest’s practical support for UK clients"
                fill
                sizes="(max-width: 1024px) 0px, 560px"
                className="object-cover"
                priority
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-brand to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
