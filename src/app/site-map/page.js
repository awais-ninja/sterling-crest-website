import Link from "next/link";
import PageShell from "@/components/PageShell";
import { getAudienceCategoriesWithAudiences } from "@/data/audiences";
import { getServiceCategoriesWithServices } from "@/data/services";
import { legalLinks, navigation } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Sitemap | Sterling Crest Accountants",
  description:
    "HTML sitemap for Sterling Crest Accountants covering main pages, services and who we serve.",
  path: "/site-map",
});

export default function HtmlSitemapPage() {
  const serviceCategories = getServiceCategoriesWithServices();
  const audienceCategories = getAudienceCategoriesWithAudiences();

  return (
    <PageShell>
      <section className="relative w-full bg-gradient-to-br from-surface via-surface-elevated to-surface-deep py-16 md:py-24 pt-24 md:pt-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-5">
              Sitemap
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed">
              Find the main pages, services and audience guides on this website.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl space-y-12">
          <SitemapGroup title="Main pages">
            {navigation.map((item) => (
              <SitemapLink key={item.href} href={item.href} label={item.label} />
            ))}
            {legalLinks.map((item) => (
              <SitemapLink key={item.href} href={item.href} label={item.label} />
            ))}
            <SitemapLink href="/site-map" label="Sitemap" />
            <SitemapLink href="/faqs" label="FAQs" />
          </SitemapGroup>

          {serviceCategories.map((category) => (
            <SitemapGroup key={category.id} title={category.title}>
              <SitemapLink href="/services" label="All services" />
              {category.services.map((service) => (
                <SitemapLink
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  label={service.title}
                />
              ))}
            </SitemapGroup>
          ))}

          {audienceCategories.map((category) => (
            <SitemapGroup
              key={category.id}
              title={`Who we serve: ${category.title}`}
            >
              <SitemapLink href="/who-we-serve" label="All audiences" />
              {category.audiences.map((audience) => (
                <SitemapLink
                  key={audience.slug}
                  href={`/who-we-serve/${audience.slug}`}
                  label={audience.title}
                />
              ))}
            </SitemapGroup>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function SitemapGroup({ title, children }) {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-ink mb-4">
        {title}
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {children}
      </ul>
    </div>
  );
}

function SitemapLink({ href, label }) {
  return (
    <li>
      <Link
        href={href}
        className="text-ink-muted hover:text-gold transition-colors text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        {label}
      </Link>
    </li>
  );
}
