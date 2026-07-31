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
      <section className="relative w-full bg-gradient-to-br from-surface via-surface-elevated to-surface-deep py-16 md:py-24 pt-24 md:pt-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-5">
              About Sterling Crest Accountants
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed mb-8">
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

      <section className="bg-surface py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-ink mb-4">
            Our purpose and approach
          </h2>
          <p className="text-ink-muted leading-relaxed mb-4">
            We help clients keep financial records organised, meet filing
            obligations and understand their numbers in plain English. Work is
            scoped clearly before it begins, and we agree fees in advance.
          </p>
          <p className="text-ink-muted leading-relaxed">
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

      <section className="bg-surface-elevated py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <h2 className="text-3xl font-bold text-ink mb-8 text-center">
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
                title: "Start ups and growing businesses",
                text: "Company formation, cashflow forecasting and practical advisory support as you scale.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl border border-gold/20 bg-surface"
              >
                <h3 className="text-xl font-semibold text-ink mb-2">
                  {item.title}
                </h3>
                <p className="text-ink-muted text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <h2 className="text-3xl font-bold text-ink mb-8 text-center">
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
                className="p-6 rounded-xl border border-gold/20 bg-surface-elevated"
              >
                <h3 className="text-xl font-semibold text-ink mb-2">
                  {item.title}
                </h3>
                <p className="text-ink-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-elevated py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-ink mb-4">
            Company information
          </h2>
          <p className="text-ink-muted leading-relaxed mb-3">
            {getCompanyDisclosure()}
          </p>
          {hasValue(businessDetails.registeredOffice) && (
            <p className="text-ink-muted leading-relaxed mb-3">
              Registered office: {businessDetails.registeredOffice}
            </p>
          )}
          <p className="text-ink-muted leading-relaxed text-sm">
            Optional details such as professional memberships, AML supervisory
            body, ICO registration and team profiles will be published here once
            confirmed by management.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-surface-elevated to-surface-deep">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-ink mb-4">
            Work with Sterling Crest
          </h2>
          <p className="text-ink-muted mb-8">
            Tell us what you need and we will outline a clear next step.{" "}
            {businessDetails.responseTime}
          </p>
          <ConsultationCta location="about_cta">Arrange Your Consultation</ConsultationCta>
        </div>
      </section>
    </PageShell>
  );
}
