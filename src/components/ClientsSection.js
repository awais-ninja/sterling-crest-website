import Image from "next/image";
import Link from "next/link";
import DesktopOnly from "@/components/DesktopOnlyImage";
import Reveal from "@/components/Reveal";
import StaggerGroup from "@/components/StaggerGroup";

const clientTypes = [
  {
    title: "Limited companies",
    href: "/who-we-serve/limited-companies",
    description:
      "Accounts, corporation tax, payroll and VAT support for directors who need organised year end and day to day compliance.",
  },
  {
    title: "Sole traders and freelancers",
    href: "/who-we-serve/self-employed",
    description:
      "Bookkeeping and self assessment support designed for self employed professionals managing busy workloads.",
  },
  {
    title: "Landlords and property investors",
    href: "/who-we-serve/landlords",
    description:
      "Property income summaries, expense tracking and self assessment support for UK rental portfolios.",
  },
  {
    title: "Start ups and growing businesses",
    href: "/who-we-serve/startups",
    description:
      "Company formation, cashflow forecasting and practical advisory support as you scale.",
  },
];

export default function ClientsSection() {
  return (
    <section id="clients" className="relative w-full bg-surface py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-12 md:mb-16">
          <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">
            Who we serve
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-4">
            Support for individuals and growing businesses
          </h2>
          <p className="text-lg text-ink-muted max-w-3xl mx-auto">
            Whether you are starting out or already trading, we focus on clear
            records, timely filings and practical next steps.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-10 items-stretch max-w-7xl mx-auto">
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-4" stagger={80}>
            {clientTypes.map((client) => (
              <Link
                key={client.title}
                href={client.href}
                className="group card-interactive p-5 md:p-6 hover:bg-surface-elevated/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <h3 className="card-heading text-lg font-semibold text-ink mb-2">
                  {client.title}
                </h3>
                <p className="text-ink-muted leading-relaxed text-sm mb-3">
                  {client.description}
                </p>
                <span className="inline-flex items-center gap-1 text-gold underline underline-offset-2 text-sm font-medium">
                  View accountants for {client.title.toLowerCase()}
                  <span className="link-arrow" aria-hidden="true">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </StaggerGroup>

          <DesktopOnly>
            <Reveal className="h-full">
              <figure className="image-hover relative h-full min-h-[28rem] overflow-hidden border border-gold/25 shadow-[0_24px_60px_-36px_rgba(0,0,0,0.7)]">
                <Image
                  src="/homepage/home-page-clients.webp"
                  alt="Client focused accountancy discussion and workspace"
                  fill
                  sizes="45vw"
                  className="object-cover object-center"
                  quality={80}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-surface/50 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />
              </figure>
            </Reveal>
          </DesktopOnly>
        </div>

        <Reveal className="text-center mt-10">
          <Link
            href="/who-we-serve"
            className="group inline-flex items-center gap-2 link-gold font-semibold text-lg"
          >
            View all
            <span className="link-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
