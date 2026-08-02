import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { ConsultationCta } from "@/components/ConsultationCta";
import SocialLinks from "@/components/SocialLinks";
import {
  businessDetails,
  getCompanyDisclosure,
  hasValue,
  napDetails,
} from "@/config/business";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Sterling Crest Accountants",
  description:
    "Sterling Crest Accountants is a UK limited company providing practical accounting and tax support for limited companies, self employed professionals, landlords and growing businesses.",
  path: "/about",
});

const audiences = [
  {
    title: "Limited companies",
    href: "/who-we-serve/limited-companies",
    text: "Accounts, corporation tax, payroll and VAT support for directors who need organised year-end and day-to-day compliance.",
  },
  {
    title: "Sole traders and freelancers",
    href: "/who-we-serve/self-employed",
    text: "Bookkeeping and self assessment support designed for self employed professionals managing busy workloads.",
  },
  {
    title: "Landlords and property investors",
    href: "/who-we-serve/landlords",
    text: "Property income summaries, expense tracking and self assessment support for UK rental portfolios.",
  },
  {
    title: "Start ups and growing businesses",
    href: "/who-we-serve/startups",
    text: "Company formation, cashflow forecasting and practical advisory support as you scale.",
  },
];

const principles = [
  {
    title: "Clear scope before work begins",
    text: "We confirm what is included, what you need to provide and when key dates fall — so expectations stay aligned.",
  },
  {
    title: "Organised, deadline-aware delivery",
    text: "Records, filings and reminders are planned around HMRC and Companies House dates that apply to your affairs.",
  },
  {
    title: "Plain English explanations",
    text: "You receive practical summaries of what the numbers mean and what needs to happen next, without unnecessary jargon.",
  },
  {
    title: "Responsible, measured guidance",
    text: "We discuss legitimate options within current rules. We do not overpromise tax outcomes or guarantee results.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Initial conversation",
    text: "We discuss your circumstances, deadlines and the support you need.",
  },
  {
    number: "02",
    title: "Agreed scope and fees",
    text: "You receive a clear outline of services and fees before work begins.",
  },
  {
    number: "03",
    title: "Service delivery",
    text: "We prepare the agreed work, keep you informed and request documents promptly.",
  },
  {
    number: "04",
    title: "Review and next steps",
    text: "We explain the outcomes and confirm any follow-up or ongoing support.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative w-full overflow-hidden pt-28 md:pt-32 pb-16 md:pb-20">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 15% 15%, rgb(var(--gold) / 0.12), transparent 55%), radial-gradient(ellipse 60% 50% at 85% 70%, rgb(var(--gold) / 0.07), transparent 50%), linear-gradient(165deg, rgb(var(--surface-deep)) 0%, rgb(var(--surface)) 48%, rgb(var(--surface-elevated)) 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-y-0 right-0 w-1/2 opacity-[0.06] pointer-events-none hidden lg:block"
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
              About {businessDetails.tradingName}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-[3.4rem] font-bold text-ink leading-[1.1] mb-5">
              Practical UK accounting and tax support you can work with
            </h1>
            <p className="text-lg md:text-xl text-ink-muted leading-relaxed max-w-2xl mb-10">
              {businessDetails.brandDescription} We focus on organised records,
              clear explanations and deadline-aware delivery — with scope and
              fees agreed before work begins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ConsultationCta location="about_hero">
                Book a consultation
              </ConsultationCta>
              <ConsultationCta href="/services" variant="secondary">
                View our services
              </ConsultationCta>
            </div>
          </div>
        </div>
      </section>

      {/* Snapshot facts */}
      <section
        className="relative border-y border-gold/20 bg-surface-elevated"
        aria-label="Company snapshot"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <ul className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gold/20">
            <li className="px-4 py-7 md:px-8">
              <p className="text-xs uppercase tracking-wider text-ink-muted mb-1">
                Legal entity
              </p>
              <p className="text-ink font-semibold leading-snug">
                {businessDetails.legalName}
              </p>
              <p className="text-sm text-ink-muted mt-1">
                Company no. {businessDetails.companyNumber}
              </p>
            </li>
            <li className="px-4 py-7 md:px-8">
              <p className="text-xs uppercase tracking-wider text-ink-muted mb-1">
                Experience
              </p>
              <p className="text-ink font-semibold leading-snug">
                Combined experience
              </p>
              <p className="text-sm text-ink-muted mt-1">
                Practical support for individuals and businesses
              </p>
            </li>
            <li className="px-4 py-7 md:px-8">
              <p className="text-xs uppercase tracking-wider text-ink-muted mb-1">
                Coverage
              </p>
              <p className="text-ink font-semibold leading-snug">
                UK-wide remote support
              </p>
              <p className="text-sm text-ink-muted mt-1">
                Registered in Leeds, West Yorkshire
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Story + image */}
      <section className="relative w-full bg-surface py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">
                Our approach
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-5">
                Organised records, clear advice, careful handling
              </h2>
              <div className="space-y-4 text-ink-muted leading-relaxed">
                <p>
                  {businessDetails.tradingName} helps clients keep financial
                  records in order, meet filing obligations and understand their
                  numbers in plain English. Whether you run a limited company,
                  work for yourself or manage rental income, we adapt our
                  support to your circumstances.
                </p>
                <p>
                  Work is scoped clearly before it begins. We agree fees in
                  advance, confirm responsibilities in writing and plan around
                  the dates that matter for your affairs. We do not invent
                  qualifications, inflate claims or promise guaranteed tax
                  outcomes.
                </p>
                <p>
                  Consultations are available by phone or online video call —
                  practical for clients across the United Kingdom.{" "}
                  {businessDetails.responseTime}
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/who-we-serve"
                  className="group inline-flex items-center gap-2 link-gold font-semibold"
                >
                  See who we serve
                  <span className="link-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </div>

            <figure className="image-hover relative min-h-[20rem] md:min-h-[26rem] overflow-hidden rounded-2xl border border-gold/25 shadow-[0_24px_60px_-36px_rgba(0,0,0,0.65)]">
              <Image
                src="/homepage/home-page-clients.webp"
                alt="Sterling Crest accountancy discussion and professional workspace"
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover object-center"
                quality={80}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-surface/55 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section
        className="relative w-full py-16 md:py-24"
        style={{
          background:
            "linear-gradient(to bottom, rgb(var(--surface-elevated)), rgb(var(--surface)))",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="max-w-2xl mb-12">
            <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">
              How we work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              A clear working process
            </h2>
            <p className="text-ink-muted leading-relaxed">
              Four practical steps from first conversation to completed work —
              designed to keep communication straightforward and deadlines in
              view.
            </p>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step) => (
              <li
                key={step.number}
                className="card-interactive rounded-2xl border border-gold/20 bg-surface p-6 md:p-7"
              >
                <span
                  className="block text-3xl font-bold text-gold/35 mb-3"
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <h3 className="card-heading text-lg font-semibold text-ink mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Principles */}
      <section className="relative w-full bg-surface py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-4">
              <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">
                Working principles
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
                What you can expect from us
              </h2>
              <p className="text-ink-muted leading-relaxed">
                Professional support without exaggerated claims. Confidential
                handling of your information and measured advice that fits your
                situation.
              </p>
            </div>
            <ul className="lg:col-span-8 space-y-0 divide-y divide-gold/20 border-y border-gold/20">
              {principles.map((item) => (
                <li key={item.title} className="py-6 md:py-7">
                  <div className="flex gap-4 md:gap-6">
                    <span
                      className="mt-1.5 h-8 w-1 shrink-0 rounded-full bg-gold"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-ink mb-2">
                        {item.title}
                      </h3>
                      <p className="text-ink-muted leading-relaxed text-sm md:text-base">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Who we support */}
      <section className="relative w-full bg-surface-elevated py-16 md:py-24 border-y border-gold/20">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div className="max-w-2xl">
              <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">
                Who we support
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-3">
                Clients across the UK
              </h2>
              <p className="text-ink-muted leading-relaxed">
                From sole traders and landlords to limited companies and growing
                businesses — we focus on clear records, timely filings and
                practical next steps.
              </p>
            </div>
            <Link
              href="/who-we-serve"
              className="group inline-flex items-center gap-2 link-gold font-semibold shrink-0"
            >
              View all
              <span className="link-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {audiences.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="group card-interactive flex h-full flex-col rounded-2xl border border-gold/20 bg-surface p-6 md:p-7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  <h3 className="card-heading text-xl font-semibold text-ink mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed mb-4 flex-1">
                    {item.text}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gold">
                    View {item.title.toLowerCase()} support
                    <span className="link-arrow" aria-hidden="true">
                      →
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Local + company info */}
      <section className="relative w-full bg-surface py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            <div className="rounded-2xl border border-gold/25 bg-gradient-to-br from-surface-elevated to-surface p-7 md:p-9">
              <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">
                Where we are based
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-ink mb-4">
                Registered in Leeds, supporting clients across the UK
              </h2>
              <p className="text-ink-muted leading-relaxed mb-5">
                {napDetails.name} is registered in Leeds, West Yorkshire, and
                provides remote accounting and tax support to clients across the
                United Kingdom. Consultations are arranged by appointment by
                phone or online video call — not as a walk-in office.
              </p>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-ink-muted mb-1">
                    Registered office
                  </dt>
                  <dd className="text-ink leading-relaxed">
                    {napDetails.address}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-ink-muted mb-1">
                    Opening hours
                  </dt>
                  <dd className="text-ink">
                    {businessDetails.businessHours}
                    {hasValue(businessDetails.weekendHours) && (
                      <span className="block text-ink-muted mt-1">
                        {businessDetails.weekendHours}
                      </span>
                    )}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl border border-gold/25 bg-surface-elevated/80 p-7 md:p-9 flex flex-col">
              <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">
                Company information
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-ink mb-4">
                Official details
              </h2>
              <div className="space-y-3 text-ink-muted leading-relaxed text-sm md:text-base flex-1">
                <p>{getCompanyDisclosure()}</p>
                <p>
                  Trading name: {businessDetails.tradingName}. Website:{" "}
                  <a
                    href={businessDetails.websiteUrl}
                    className="link-gold"
                  >
                    www.sterlingcrest.co.uk
                  </a>
                  .
                </p>
                {hasValue(businessDetails.email) && (
                  <p>
                    Email:{" "}
                    <a
                      href={`mailto:${businessDetails.email}`}
                      className="link-gold"
                    >
                      {businessDetails.email}
                    </a>
                  </p>
                )}
                {hasValue(businessDetails.phone) && (
                  <p>
                    Phone:{" "}
                    <a
                      href={businessDetails.phoneHref || `tel:${businessDetails.phoneTel}`}
                      className="link-gold"
                    >
                      {businessDetails.phone}
                    </a>
                  </p>
                )}
              </div>
              <div className="mt-8 pt-6 border-t border-gold/20">
                <p className="text-xs uppercase tracking-wider text-ink-muted mb-3">
                  Follow us
                </p>
                <SocialLinks location="about_page" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative w-full py-16 md:py-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(to bottom, rgb(var(--surface-elevated)), rgb(var(--surface-deep)))",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-3xl relative z-10">
          <div className="cta-panel rounded-3xl border border-gold/30 bg-gradient-to-br from-surface to-surface-elevated p-8 md:p-14">
            <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">
              Next step
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Ready to discuss your requirements?
            </h2>
            <p className="text-ink-muted mb-8 leading-relaxed">
              Book a free 30-minute consultation or send a short enquiry.{" "}
              {businessDetails.responseTime}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConsultationCta location="about_cta">
                Book a consultation
              </ConsultationCta>
              <ConsultationCta
                href="/contact#enquiry-form"
                variant="secondary"
              >
                Contact us
              </ConsultationCta>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
