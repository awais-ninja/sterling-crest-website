import Image from "next/image";
import Link from "next/link";
import { getFeaturedServices } from "@/data/services";
import { ServiceIcon } from "@/components/icons/ServiceIcons";
import DesktopOnly from "@/components/DesktopOnlyImage";

export default function ServicesSection() {
  const featured = getFeaturedServices(6);

  return (
    <section
      id="services"
      className="relative w-full py-20 md:py-24"
      style={{
        background:
          "linear-gradient(to bottom, rgb(var(--surface)), rgb(var(--surface-elevated)))",
      }}
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

        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-10 items-stretch max-w-7xl mx-auto mb-12">
          <DesktopOnly>
            <figure className="relative h-full min-h-[32rem] overflow-hidden border border-gold/25 shadow-[0_24px_60px_-36px_rgba(0,0,0,0.7)]">
              <Image
                src="/homepage/home-page-services.webp"
                alt="Sterling Crest accounting workspace with reports, laptop and branded materials"
                fill
                sizes="45vw"
                className="object-cover object-[center_20%]"
                quality={80}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-surface/50 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />
            </figure>
          </DesktopOnly>

          <div className="space-y-3">
            {featured.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex items-start gap-4 p-4 md:p-5 border border-gold/20 hover:border-gold/50 hover:bg-surface/40 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <div className="w-11 h-11 border border-gold/40 text-gold flex items-center justify-center shrink-0 group-hover:border-gold transition-colors">
                  <ServiceIcon slug={service.slug} className="w-5 h-5" />
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
            className="inline-flex items-center gap-2 link-gold font-semibold text-lg"
          >
            View all services
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
