import Image from "next/image";
import Link from "next/link";

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
        <div className="text-center mb-12 md:mb-16">
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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {clientTypes.map((client) => (
              <Link
                key={client.title}
                href={client.href}
                className="bg-gradient-to-br from-surface-elevated to-surface p-6 rounded-xl border border-gold/20 hover:border-gold/50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <h3 className="text-lg font-semibold text-ink mb-2 group-hover:text-gold">
                  {client.title}
                </h3>
                <p className="text-ink-muted leading-relaxed text-sm mb-3">
                  {client.description}
                </p>
                <span className="text-gold text-sm font-medium">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full h-[480px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/homepage/home-page-section-4.webp"
                alt="Business discussion representing client focused accountancy support"
                fill
                sizes="(max-width: 1024px) 0px, 520px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/who-we-serve"
            className="inline-flex items-center gap-2 text-gold font-semibold text-lg hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            View all audiences
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
