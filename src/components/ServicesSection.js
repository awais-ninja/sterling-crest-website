import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { ServiceIcon } from "@/components/icons/ServiceIcons";

export default function ServicesSection() {
  const featured = services.slice(0, 6);

  return (
    <section
      id="services"
      className="relative w-full py-20 md:py-24"
      style={{ background: "linear-gradient(to bottom, #0B1C2D, #081524)" }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#C9A14A] text-sm font-semibold uppercase tracking-wider mb-3">
            What we offer
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F7FA] mb-4">
            Accountancy and tax services
          </h2>
          <p className="text-lg text-[#AAB2BD] max-w-3xl mx-auto">
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
                className="group flex items-start gap-4 bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-5 rounded-xl border border-[#C9A14A]/20 hover:border-[#C9A14A]/50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
              >
                <div className="w-12 h-12 rounded-lg bg-[#C9A14A]/10 text-[#C9A14A] flex items-center justify-center shrink-0">
                  <ServiceIcon slug={service.slug} className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#F5F7FA] group-hover:text-[#C9A14A] transition-colors mb-1">
                    {service.title}
                  </h3>
                  <p className="text-[#AAB2BD] text-sm leading-relaxed">
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
            className="inline-flex items-center gap-2 text-[#C9A14A] font-semibold text-lg hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
          >
            View all services
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
