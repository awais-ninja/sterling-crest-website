import {
  businessDetails,
  getSocialProfiles,
  hasValue,
} from "@/config/business";
import { getSiteUrl } from "@/config/site";
import { services } from "@/data/services";

function omitEmpty(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(([, value]) => {
      if (value === null || value === undefined || value === "") return false;
      if (Array.isArray(value) && value.length === 0) return false;
      return true;
    })
  );
}

export function getOrganizationSchema() {
  const siteUrl = getSiteUrl();
  const sameAs = getSocialProfiles();

  return omitEmpty({
    "@context": "https://schema.org",
    "@type": ["Organization", "AccountingService", "ProfessionalService"],
    name: businessDetails.tradingName,
    legalName: businessDetails.legalName,
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    email: hasValue(businessDetails.email) ? businessDetails.email : undefined,
    telephone: hasValue(businessDetails.phoneTel)
      ? businessDetails.phoneTel
      : hasValue(businessDetails.phone)
        ? businessDetails.phone
        : undefined,
    identifier: businessDetails.companyNumber,
    areaServed: "GB",
    sameAs: sameAs.length ? sameAs : undefined,
    address: hasValue(businessDetails.registeredOffice)
      ? omitEmpty({
          "@type": "PostalAddress",
          streetAddress: "530 Manor Mills, Ingram Street",
          addressLocality: "Leeds",
          addressRegion: "England",
          postalCode: "LS11 9BR",
          addressCountry: "GB",
        })
      : undefined,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    contactPoint: hasValue(businessDetails.email)
      ? omitEmpty({
          "@type": "ContactPoint",
          contactType: "customer service",
          email: businessDetails.email,
          telephone: hasValue(businessDetails.phoneTel)
            ? businessDetails.phoneTel
            : hasValue(businessDetails.phone)
              ? businessDetails.phone
              : undefined,
          availableLanguage: "English",
        })
      : undefined,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Accountancy services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          url: `${siteUrl}/services/${service.slug}`,
          description: service.summary,
        },
      })),
    },
  });
}

export function getWebsiteSchema() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: businessDetails.tradingName,
    url: siteUrl,
  };
}

export function getBreadcrumbSchema(items) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) =>
      omitEmpty({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.path ? `${siteUrl}${item.path}` : undefined,
      })
    ),
  };
}

export function getFaqSchema(faqs) {
  if (!faqs?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getServiceSchema(service) {
  const siteUrl = getSiteUrl();
  return omitEmpty({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    url: `${siteUrl}/services/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: businessDetails.tradingName,
      url: siteUrl,
    },
    areaServed: "GB",
  });
}
