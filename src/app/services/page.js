import Link from "next/link";
import PageShell from "@/components/PageShell";
import { ConsultationCta } from "@/components/ConsultationCta";
import { ServiceIcon } from "@/components/icons/ServiceIcons";
import { services } from "@/data/services";
import { businessDetails } from "@/config/business";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Accountancy and Tax Services | Sterling Crest",
  description:
    "Explore Sterling Crest accountancy services including bookkeeping, company accounts, corporation tax, self assessment, payroll, VAT and CIS.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="relative w-full bg-gradient-to-br from-[#0B1C2D] via-[#081524] to-[#050E18] py-16 md:py-24 pt-24 md:pt-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F7FA] mb-5">
              Accountancy and tax services
            </h1>
            <p className="text-lg text-[#AAB2BD] leading-relaxed mb-8">
              Practical support for individuals and businesses, from organised
              bookkeeping to HMRC submissions and company accounts. Request a
              tailored quotation for the services you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConsultationCta location="services_hero">Book a Consultation</ConsultationCta>
              <ConsultationCta href="/contact#enquiry-form" variant="secondary">
                Send an enquiry
              </ConsultationCta>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-[#0B1C2D] py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A]/20 hover:border-[#C9A14A]/50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
              >
                <div className="w-12 h-12 rounded-lg bg-[#C9A14A]/10 text-[#C9A14A] flex items-center justify-center mb-4">
                  <ServiceIcon slug={service.slug} className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-semibold text-[#F5F7FA] mb-2 group-hover:text-[#C9A14A] transition-colors">
                  {service.title}
                </h2>
                <p className="text-[#AAB2BD] text-sm leading-relaxed mb-4">
                  {service.summary}
                </p>
                <span className="text-[#C9A14A] text-sm font-medium">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-[#081524] to-[#050E18]">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-[#F5F7FA] mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-[#AAB2BD] mb-8">
            Send a short enquiry and we will help you identify the right
            support. {businessDetails.responseTime}
          </p>
          <ConsultationCta location="services_cta">Arrange Your Consultation</ConsultationCta>
        </div>
      </section>
    </PageShell>
  );
}
