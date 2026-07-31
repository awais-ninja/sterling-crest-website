import { businessDetails } from "./business";

const DEFAULT_SITE_URL = "https://sterlingcrest.co.uk";

/**
 * Production site URL. Preview deployments should never become canonical.
 */
export function getSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv && !fromEnv.includes("vercel.app")) {
    return fromEnv.replace(/\/$/, "");
  }
  if (hasValue(businessDetails.websiteUrl)) {
    return businessDetails.websiteUrl.replace(/\/$/, "");
  }
  return DEFAULT_SITE_URL;
}

function hasValue(value) {
  return typeof value === "string" && value.trim().length > 0;
}

export const siteConfig = {
  name: businessDetails.tradingName,
  legalName: businessDetails.legalName,
  description: businessDetails.brandDescription,
  defaultOgImage: "/og-image.webp",
  locale: "en_GB",
  twitterHandle: "",
};

/** Primary navigation, FAQs intentionally excluded. */
export const navigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/who-we-serve", label: "Who We Serve" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/cookies", label: "Cookie Policy" },
];

export const footerLegalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/site-map", label: "Sitemap" },
];
