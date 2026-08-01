import Link from "next/link";
import Accordion from "@/components/Accordion";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ConsultationCta } from "@/components/ConsultationCta";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import {
  getBreadcrumbSchema,
  getFaqSchema,
  getServiceSchema,
} from "@/lib/schema";
import { getRelatedServices } from "@/data/services";

export default function ServicePageContent({ service }) {
  const related = getRelatedServices(service.related);
  const breadcrumbs = [
    { name: "Home", href: "/", path: "/" },
    { name: "Services", href: "/services", path: "/services" },
    { name: service.title, path: `/services/${service.slug}` },
  ];

  const jsonLd = [
    getServiceSchema(service),
    getBreadcrumbSchema(breadcrumbs),
    getFaqSchema(service.faqs),
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
              {service.h1}
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed mb-8">
              {service.intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
              <ConsultationCta>
                Book a free consultation
              </ConsultationCta>
              <ConsultationCta href="/contact#enquiry-form" variant="secondary">
                Contact Sterling Crest Accountants
              </ConsultationCta>
              <ConsultationCta href="/services" variant="secondary">
                View all accountancy services
              </ConsultationCta>
            </div>
          </div>
        </div>
      </section>

      <Section title="Who this service is for">
        <BulletList items={service.whoFor} />
      </Section>

      <Section title="Common challenges" dark>
        <BulletList items={service.problems} />
      </Section>

      <Section title="What is included">
        <BulletList items={service.included} />
      </Section>

      <Section title="How the process works" dark>
        <ol className="space-y-4">
          {service.process.map((step, index) => (
            <li key={step} className="flex gap-4 text-ink-muted">
              <span className="text-gold font-semibold shrink-0">
                {index + 1}.
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Documents normally required">
        <BulletList items={service.documents} />
      </Section>

      <Section title="Key deadlines" dark>
        <p className="text-ink-muted leading-relaxed">{service.deadlines}</p>
        <p className="text-ink-muted leading-relaxed mt-4 text-sm">
          For official dates, check{" "}
          <a
            href="https://www.gov.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline"
          >
            GOV.UK
          </a>
          .
        </p>
      </Section>

      <Section title="Benefits">
        <BulletList items={service.benefits} />
      </Section>

      {related.length > 0 && (
        <Section title="Related services" dark>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/services/${item.slug}`}
                  className="block h-full p-5 rounded-xl border border-gold/20 hover:border-gold/50 text-ink hover:text-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  aria-label={`View ${item.title} services`}
                >
                  <span className="font-semibold">View {item.title} services</span>
                  <span className="block text-sm text-ink-muted mt-2">
                    {item.summary}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {service.faqs?.length > 0 && (
        <Section title="Frequently asked questions">
          <Accordion items={service.faqs} />
        </Section>
      )}

      <section className="py-16 md:py-20 bg-gradient-to-b from-surface-elevated to-surface-deep">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-ink mb-4">
            Discuss {service.shortTitle.toLowerCase()} with our team
          </h2>
          <p className="text-ink-muted mb-8">
            Book a free consultation on Picktime or send an enquiry. We will
            confirm scope and fees before any engagement begins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConsultationCta location="service_page">
              Book a free consultation
            </ConsultationCta>
            <ConsultationCta
              href="/contact#enquiry-form"
              variant="secondary"
              location="service_page"
            >
              Contact Sterling Crest Accountants
            </ConsultationCta>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Section({ title, children, dark = false }) {
  return (
    <section
      className={`py-14 md:py-16 ${dark ? "bg-surface-elevated" : "bg-surface"}`}
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
