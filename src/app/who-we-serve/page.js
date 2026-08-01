import Link from "next/link";
import PageShell from "@/components/PageShell";
import { ConsultationCta } from "@/components/ConsultationCta";
import { getAudienceCategoriesWithAudiences } from "@/data/audiences";
import { businessDetails } from "@/config/business";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Who We Serve | Sterling Crest Accountants",
  description:
    "See who Sterling Crest Accountants support, including individuals, businesses, property clients and specialist professions across the UK.",
  path: "/who-we-serve",
});

export default function WhoWeServePage() {
  const categories = getAudienceCategoriesWithAudiences();

  return (
    <PageShell>
      <section className="relative w-full bg-gradient-to-br from-surface via-surface-elevated to-surface-deep py-16 md:py-24 pt-24 md:pt-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-5">
              Who we serve
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed mb-8">
              Practical accounting and tax support for individuals, businesses,
              property clients and specialist professions across the UK.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConsultationCta location="who_we_serve_hero">
                Book a Consultation
              </ConsultationCta>
              <ConsultationCta href="/services" variant="secondary">
                View services
              </ConsultationCta>
            </div>
          </div>
        </div>
      </section>

      {categories.map((category, index) => (
        <section
          key={category.id}
          className={`relative w-full py-14 md:py-20 ${
            index % 2 === 0 ? "bg-surface" : "bg-surface-elevated"
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-7xl mx-auto mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-ink mb-3">
                {category.title}
              </h2>
              <p className="text-ink-muted max-w-3xl leading-relaxed">
                {category.summary}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {category.audiences.map((audience) => (
                <Link
                  key={audience.slug}
                  href={`/who-we-serve/${audience.slug}`}
                  className="group bg-gradient-to-br from-surface-elevated to-surface p-6 rounded-xl border border-gold/20 hover:border-gold/50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  <h3 className="text-xl font-semibold text-ink mb-2 group-hover:text-gold transition-colors">
                    {audience.title}
                  </h3>
                  <p className="text-ink-muted text-sm leading-relaxed mb-4">
                    {audience.summary}
                  </p>
                  <span className="text-gold text-sm font-medium underline underline-offset-2">
                    View accountants for {audience.title} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 bg-gradient-to-b from-surface-elevated to-surface-deep">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-ink mb-4">
            Not sure where you fit?
          </h2>
          <p className="text-ink-muted mb-8">
            Send a short enquiry and we will help you identify the right
            support. {businessDetails.responseTime}
          </p>
          <ConsultationCta location="who_we_serve_cta">
            Arrange Your Consultation
          </ConsultationCta>
        </div>
      </section>
    </PageShell>
  );
}
