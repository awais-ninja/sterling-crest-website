import Link from "next/link";
import Accordion from "@/components/Accordion";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ConsultationCta } from "@/components/ConsultationCta";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import { ServiceIcon } from "@/components/icons/ServiceIcons";
import { getBreadcrumbSchema, getFaqSchema } from "@/lib/schema";
import { getAudienceRelatedServices } from "@/data/audiences";

export default function AudiencePageContent({ audience }) {
  const relatedServices = getAudienceRelatedServices(audience);
  const breadcrumbs = [
    { name: "Home", href: "/", path: "/" },
    { name: "Who We Serve", href: "/who-we-serve", path: "/who-we-serve" },
    { name: audience.title, path: `/who-we-serve/${audience.slug}` },
  ];

  const jsonLd = [
    getBreadcrumbSchema(breadcrumbs),
    getFaqSchema(audience.faqs),
  ];

  return (
    <PageShell>
      <JsonLd data={jsonLd} />
      <section className="relative w-full bg-gradient-to-br from-surface via-surface-elevated to-surface-deep py-16 md:py-24 pt-24 md:pt-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs
              items={breadcrumbs.map(({ name, href }) => ({ name, href }))}
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-5 break-words">
              {audience.h1}
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed mb-8">
              {audience.intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ConsultationCta>Book a Consultation</ConsultationCta>
              <ConsultationCta href="/who-we-serve" variant="secondary">
                Who we serve
              </ConsultationCta>
            </div>
          </div>
        </div>
      </section>

      <Section title="Common challenges">
        <BulletList items={audience.challenges} />
      </Section>

      <Section title="How we help" dark>
        <BulletList items={audience.howWeHelp} />
      </Section>

      <Section title="Related services">
        <p className="text-ink-muted leading-relaxed mb-6">
          These services are most often relevant for {audience.title.toLowerCase()}.
          Open any page to see what is included and how the process works.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {relatedServices.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex items-start gap-4 h-full p-5 rounded-xl border border-gold/20 hover:border-gold/50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <ServiceIcon slug={service.slug} className="w-5 h-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold text-ink group-hover:text-gold transition-colors">
                    {service.title}
                  </span>
                  <span className="block text-sm text-ink-muted mt-1 leading-relaxed">
                    {service.summary}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {audience.faqs?.length > 0 && (
        <Section title="Frequently asked questions" dark>
          <Accordion items={audience.faqs} />
        </Section>
      )}

      <section className="py-16 md:py-20 bg-gradient-to-b from-surface-elevated to-surface-deep">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-ink mb-4">
            Talk through your circumstances
          </h2>
          <p className="text-ink-muted mb-8">
            Tell us what you need and we will outline a clear next step before
            any engagement begins.
          </p>
          <ConsultationCta>Arrange Your Consultation</ConsultationCta>
        </div>
      </section>
    </PageShell>
  );
}

function Section({ title, children, dark = false }) {
  return (
    <section
      className={`py-14 md:py-20 ${dark ? "bg-surface-elevated" : "bg-surface"}`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </section>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-ink-muted leading-relaxed">
          <span className="text-gold mt-1" aria-hidden="true">
            •
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
