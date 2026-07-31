import PageShell from "@/components/PageShell";
import { ConsultationCta } from "@/components/ConsultationCta";
import {
  businessDetails,
  getCompanyDisclosure,
  hasValue,
} from "@/config/business";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Sterling Crest Accountants",
  description:
    "Learn about Sterling Crest Accountants, a UK limited company providing practical accounting and tax support for individuals and businesses.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageShell>
      <section className="relative w-full bg-gradient-to-br from-[#0B1C2D] via-[#081524] to-[#050E18] py-16 md:py-24 pt-24 md:pt-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F7FA] mb-5">
              About Sterling Crest Accountants
            </h1>
            <p className="text-lg text-[#AAB2BD] leading-relaxed mb-8">
              {businessDetails.tradingName} provides practical accounting and
              tax support for individuals, landlords and growing businesses.
              We focus on organised records, clear explanations and
              deadline aware service delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConsultationCta location="about_hero">Book a Consultation</ConsultationCta>
              <ConsultationCta href="/services" variant="secondary">
                View services
              </ConsultationCta>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1C2D] py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#F5F7FA] mb-4">
            Our purpose and approach
          </h2>
          <p className="text-[#AAB2BD] leading-relaxed mb-4">
            We help clients keep financial records organised, meet filing
            obligations and understand their numbers in plain English. Work is
            scoped clearly before it begins, and we agree fees in advance.
          </p>
          <p className="text-[#AAB2BD] leading-relaxed">
            {hasValue(businessDetails.yearsCombinedExperience) && (
              <>
                Our team brings {businessDetails.yearsCombinedExperience} years’
                combined experience to client work.{" "}
              </>
            )}
            We do not invent qualifications or overstate results. Every
            engagement is based on confirmed scope and accurate information
            provided by the client.
          </p>
        </div>
      </section>

      <section className="bg-[#081524] py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <h2 className="text-3xl font-bold text-[#F5F7FA] mb-8 text-center">
            Clients we support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Limited companies",
                text: "Accounts, corporation tax, payroll and VAT support for directors who need organised compliance.",
              },
              {
                title: "Sole traders and freelancers",
                text: "Bookkeeping and self assessment support for self employed professionals.",
              },
              {
                title: "Landlords and property investors",
                text: "Property income reporting and expense organisation for UK rental income.",
              },
              {
                title: "Contractors",
                text: "CIS and related tax reporting support for construction related work.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl border border-[#C9A14A]/20 bg-[#0B1C2D]"
              >
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#AAB2BD] text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B1C2D] py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <h2 className="text-3xl font-bold text-[#F5F7FA] mb-8 text-center">
            Working principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Clear scope",
                text: "We confirm what is included, what you need to provide and when key dates fall.",
              },
              {
                title: "Confidential handling",
                text: "Financial and personal information is handled carefully and used for agreed purposes.",
              },
              {
                title: "Transparent communication",
                text: "You receive practical updates and plain English explanations, not jargon.",
              },
              {
                title: "Responsible guidance",
                text: "We discuss legitimate options within current rules and avoid exaggerated promises.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl border border-[#C9A14A]/20 bg-[#081524]"
              >
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081524] py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#F5F7FA] mb-4">
            Company information
          </h2>
          <p className="text-[#AAB2BD] leading-relaxed mb-3">
            {getCompanyDisclosure()}
          </p>
          {hasValue(businessDetails.registeredOffice) && (
            <p className="text-[#AAB2BD] leading-relaxed mb-3">
              Registered office: {businessDetails.registeredOffice}
            </p>
          )}
          <p className="text-[#AAB2BD] leading-relaxed text-sm">
            Optional details such as professional memberships, AML supervisory
            body, ICO registration and team profiles will be published here once
            confirmed by management.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-[#081524] to-[#050E18]">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-[#F5F7FA] mb-4">
            Work with Sterling Crest
          </h2>
          <p className="text-[#AAB2BD] mb-8">
            Tell us what you need and we will outline a clear next step.{" "}
            {businessDetails.responseTime}
          </p>
          <ConsultationCta location="about_cta">Arrange Your Consultation</ConsultationCta>
        </div>
      </section>
    </PageShell>
  );
}
