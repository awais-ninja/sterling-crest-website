/**
 * Optional llms.txt generator.
 * llms.txt is a supplementary machine-readable summary — not a replacement for
 * sitemap, robots, page content or JSON-LD structured data.
 */

import {
  businessDetails,
  getGoogleBusinessProfileUrl,
  getPublicSocialLinks,
  getWhatsAppHref,
  hasValue,
  napDetails,
} from "@/config/business";
import { getSiteUrl } from "@/config/site";
import { getServiceBySlug } from "@/data/services";

/** Main service links that exist on the live site. */
const FEATURED_SERVICE_SLUGS = [
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

function mdLink(label, href) {
  return `- [${label}](${href})`;
}

export function buildLlmsTxt() {
  const siteUrl = getSiteUrl();
  const whatsappHref = getWhatsAppHref();
  const gbpUrl = getGoogleBusinessProfileUrl();
  const socials = getPublicSocialLinks();

  const serviceLines = FEATURED_SERVICE_SLUGS.map((slug) => {
    const service = getServiceBySlug(slug);
    if (!service) return null;
    return mdLink(service.title, `${siteUrl}/services/${service.slug}`);
  }).filter(Boolean);

  const profileLines = [];
  if (hasValue(gbpUrl)) {
    profileLines.push(mdLink("Google Business Profile", gbpUrl));
  }
  for (const social of socials) {
    profileLines.push(mdLink(social.label, social.href));
  }

  const lines = [
    `# ${businessDetails.tradingName}`,
    "",
    `> ${businessDetails.tradingName} provides ${businessDetails.brandDescription.charAt(0).toLowerCase()}${businessDetails.brandDescription.slice(1)}`,
    "",
    "## Primary Website",
    "",
    mdLink("Homepage", `${siteUrl}/`),
    mdLink(`About ${businessDetails.tradingName}`, `${siteUrl}/about`),
    mdLink("Accountancy Services", `${siteUrl}/services`),
    mdLink("Who We Serve", `${siteUrl}/who-we-serve`),
    mdLink(`Contact ${businessDetails.tradingName}`, `${siteUrl}/contact`),
  ];

  if (hasValue(businessDetails.consultationUrl)) {
    lines.push(
      mdLink("Book a Free Consultation", businessDetails.consultationUrl)
    );
  }

  lines.push("", "## Main Services", "", ...serviceLines);

  lines.push(
    "",
    "## Clients We Support",
    "",
    "- Limited companies",
    "- Self-employed professionals",
    "- Sole traders",
    "- Landlords",
    "- Property investors",
    "- Contractors",
    "- Start-ups",
    "- Growing businesses",
    "- Individuals requiring tax-return support",
    "",
    "## Business Details",
    "",
    `- Legal name: ${businessDetails.legalName}`,
    `- Trading name: ${businessDetails.tradingName}`,
    `- Company number: ${businessDetails.companyNumber}`,
    `- Website: ${siteUrl}`,
    `- Email: ${businessDetails.email}`,
    `- Telephone: ${businessDetails.phone}`
  );

  if (hasValue(whatsappHref)) {
    const waBase = whatsappHref.split("?")[0];
    lines.push(`- WhatsApp: ${waBase}`);
  }

  lines.push(
    `- Registered office: ${napDetails.address}`,
    `- Service area: ${businessDetails.areasServed}`,
    `- Opening hours: ${businessDetails.businessHours}`,
    `- Weekend appointments: By prior appointment`,
    ""
  );

  if (profileLines.length) {
    lines.push("## Official Profiles", "", ...profileLines, "");
  }

  lines.push(
    "## Important Information",
    "",
    "- Website information is general and does not constitute personalised accounting, tax or legal advice.",
    "- Submitting an enquiry does not create an accountant-client relationship.",
    "- A professional relationship begins only after formal engagement and acceptance.",
    "- Tax rules, filing requirements, thresholds and deadlines may change.",
    "- Users should obtain advice appropriate to their circumstances.",
    ""
  );

  return lines.join("\n");
}
