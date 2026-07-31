import Image from "next/image";
import Link from "next/link";
import { getFeaturedServices } from "@/data/services";
import { ServiceIcon } from "@/components/icons/ServiceIcons";

export default function ServicesSection() {
  const featured = getFeaturedServices(6);

  return (
    <section
      id="services"
      className="relative w-full py-20 md:py-24"
      style={{ background: "linear-gradient(to bottom, rgb(var(--surface)), rgb(var(--surface-elevated)))" }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">
            What we offer
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-4">
            Accountancy and tax services
          </h2>
          <p className="text-lg text-ink-muted max-w-3xl mx-auto">
            From day to day bookkeeping to year end accounts and HMRC
            submissions. Request a tailored quotation for the support you need.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-7xl mx-auto mb-12">
          <div className="hidden lg:block relative w-full h-[520px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/homepage/home-page-section-3.webp"
              alt="Organised financial documents and reporting materials"
              fill
              sizes="(max-width: 1024px) 0px, 520px"
              className="object-cover"
            />
          </div>

          <div className="space-y-4">
            {featured.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex items-start gap-4 bg-gradient-to-br from-surface-elevated to-surface p-5 rounded-xl border border-gold/20 hover:border-gold/50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 text-gold flex items-center justify-center shrink-0">
                  <ServiceIcon slug={service.slug} className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ink group-hover:text-gold transition-colors mb-1">
                    {service.title}
                  </h3>
                  <p className="text-ink-muted text-sm leading-relaxed">
                    {service.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-gold font-semibold text-lg hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            View all services
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
