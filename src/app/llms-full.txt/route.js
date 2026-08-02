import { buildLlmsTxt } from "@/lib/llms";
import { businessDetails } from "@/config/business";
import { getSiteUrl } from "@/config/site";
import { getServiceBySlug } from "@/data/services";

const OVERVIEW_SERVICE_SLUGS = [
  "bookkeeping",
  "annual-accounts",
  "corporation-tax",
  "self-assessment",
  "payroll",
  "vat-returns",
  "landlord-accounting",
  "property-tax-returns",
  "business-growth-planning",
  "company-formation",
];

/**
 * Longer optional LLM summary. Public information only.
 * Not a replacement for sitemap, robots or JSON-LD.
 */
export function GET() {
  const siteUrl = getSiteUrl();
  const base = buildLlmsTxt();

  const summaries = OVERVIEW_SERVICE_SLUGS.map((slug) => {
    const service = getServiceBySlug(slug);
    if (!service) return null;
    const blurb = service.summary || service.metaDescription || service.intro || "";
    const short = String(blurb).replace(/\s+/g, " ").trim().slice(0, 220);
    if (!short) return null;
    return `### ${service.title}\n\n${short}\n\n- Page: ${siteUrl}/services/${service.slug}`;
  }).filter(Boolean);

  const body = [
    base.trimEnd(),
    "",
    "## Company Overview",
    "",
    `${businessDetails.tradingName} (${businessDetails.legalName}) provides accounting and tax support for individuals and businesses across the United Kingdom. Company number ${businessDetails.companyNumber}.`,
    "",
    "## Service Summaries",
    "",
    ...summaries,
    "",
    "## Primary Pages",
    "",
    `- ${siteUrl}/`,
    `- ${siteUrl}/services`,
    `- ${siteUrl}/who-we-serve`,
    `- ${siteUrl}/about`,
    `- ${siteUrl}/contact`,
    `- ${siteUrl}/faqs`,
    "",
  ].join("\n");

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
