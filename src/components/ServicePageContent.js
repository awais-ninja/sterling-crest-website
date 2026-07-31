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
      <section className="relative w-full bg-gradient-to-br from-[#0B1C2D] via-[#081524] to-[#050E18] py-16 md:py-24 pt-24 md:pt-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs
              items={breadcrumbs.map(({ name, href }) => ({ name, href }))}
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F7FA] mb-5 break-words">
              {service.h1}
            </h1>
            <p className="text-lg text-[#AAB2BD] leading-relaxed mb-8">
              {service.intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ConsultationCta>
                Request a tailored quotation
              </ConsultationCta>
              <ConsultationCta href="/services" variant="secondary">
                All services
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
            <li key={step} className="flex gap-4 text-[#AAB2BD]">
              <span className="text-[#C9A14A] font-semibold shrink-0">
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
        <p className="text-[#AAB2BD] leading-relaxed">{service.deadlines}</p>
        <p className="text-[#AAB2BD] leading-relaxed mt-4 text-sm">
          For official dates, check{" "}
          <a
            href="https://www.gov.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C9A14A] underline"
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
                  className="block h-full p-5 rounded-xl border border-[#C9A14A]/20 hover:border-[#C9A14A]/50 text-[#F5F7FA] hover:text-[#C9A14A] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
                >
                  <span className="font-semibold">{item.title}</span>
                  <span className="block text-sm text-[#AAB2BD] mt-2">
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

      <section className="py-16 md:py-20 bg-gradient-to-b from-[#081524] to-[#050E18]">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-[#F5F7FA] mb-4">
            Discuss {service.shortTitle.toLowerCase()} with our team
          </h2>
          <p className="text-[#AAB2BD] mb-8">
            Request a tailored quotation. We will confirm scope and fees before
            any engagement begins.
          </p>
          <ConsultationCta location="service_page">Book a Consultation</ConsultationCta>
        </div>
      </section>
    </PageShell>
  );
}

function Section({ title, children, dark = false }) {
  return (
    <section
      className={`py-14 md:py-16 ${dark ? "bg-[#081524]" : "bg-[#0B1C2D]"}`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#F5F7FA] mb-6">
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
        <li key={item} className="flex gap-3 text-[#AAB2BD] leading-relaxed">
          <span className="text-[#C9A14A] mt-1" aria-hidden="true">
            •
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
