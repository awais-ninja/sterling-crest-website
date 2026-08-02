import Image from "next/image";
import Link from "next/link";
import { getFeaturedServices } from "@/data/services";
import { ServiceIcon } from "@/components/icons/ServiceIcons";
import DesktopOnly from "@/components/DesktopOnlyImage";
import Reveal from "@/components/Reveal";
import StaggerGroup from "@/components/StaggerGroup";

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
        <Reveal className="text-center mb-12 md:mb-16">
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
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-10 items-stretch max-w-7xl mx-auto mb-12">
          <DesktopOnly>
            <Reveal className="h-full">
              <figure className="image-hover relative h-full min-h-[32rem] overflow-hidden border border-gold/25 shadow-[0_24px_60px_-36px_rgba(0,0,0,0.7)]">
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
            </Reveal>
          </DesktopOnly>

          <StaggerGroup className="space-y-3" stagger={70}>
            {featured.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group card-interactive flex items-start gap-4 p-4 md:p-5 hover:bg-surface/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <div className="icon-interactive w-11 h-11 border border-gold/40 text-gold flex items-center justify-center shrink-0 group-hover:border-gold">
                  <ServiceIcon slug={service.slug} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="card-heading text-lg font-semibold text-ink mb-1">
                    {service.title}
                  </h3>
                  <p className="text-ink-muted text-sm leading-relaxed">
                    {service.summary}
                  </p>
                </div>
              </Link>
            ))}
          </StaggerGroup>
        </div>

        <Reveal className="text-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 link-gold font-semibold text-lg"
          >
            View all services
            <span className="link-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
