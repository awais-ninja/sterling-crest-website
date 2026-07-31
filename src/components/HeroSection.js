import Image from "next/image";
import Link from "next/link";
import { businessDetails } from "@/config/business";
import { ConsultationCta } from "@/components/ConsultationCta";

export default function HeroSection() {
  const stats = businessDetails.trustStats.filter((stat) => stat.enabled);

  return (
    <section className="relative w-full bg-gradient-to-br from-[#0B1C2D] via-[#081524] to-[#050E18] min-h-[90vh] flex items-center overflow-hidden pt-8 md:pt-16">
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #C9A14A 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          <div className="text-center lg:text-left space-y-6">
            <p className="text-[#C9A14A] text-sm font-semibold uppercase tracking-wider">
              {businessDetails.tradingName}
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F7FA] leading-tight break-words">
              Practical accounting and tax support for businesses and
              individuals
            </h1>

            <p className="text-lg sm:text-xl text-[#AAB2BD] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Bookkeeping, tax returns, payroll and company accounts with
              clear explanations, deadline support and a straightforward next
              step.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <ConsultationCta location="hero">Book a Consultation</ConsultationCta>
              <Link
                href="/services"
                className="inline-flex items-center justify-center min-h-12 px-8 py-3 rounded-lg font-semibold border-2 border-[#C9A14A] text-[#C9A14A] hover:bg-[#C9A14A] hover:text-[#0B1C2D] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
              >
                View services
              </Link>
            </div>

            {stats.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 max-w-xl mx-auto lg:mx-0">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    {!stat.isTextOnly && stat.value ? (
                      <>
                        <div className="text-2xl font-bold text-[#C9A14A]">
                          {stat.value}
                        </div>
                        <div className="text-sm text-[#AAB2BD] mt-1">
                          {stat.label}
                        </div>
                      </>
                    ) : (
                      <div className="text-sm text-[#AAB2BD] leading-snug pt-1">
                        {stat.label}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
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
                className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D] to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
