import {
  businessDetails,
  getSocialProfiles,
  hasValue,
  napDetails,
} from "@/config/business";
import { getSiteUrl } from "@/config/site";

function omitEmpty(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(([, value]) => {
      if (value === null || value === undefined || value === "") return false;
      if (Array.isArray(value) && value.length === 0) return false;
      return true;
    })
  );
}

const FEATURED_SCHEMA_SERVICES = [
  "Bookkeeping",
  "Company Accounts",
  "Corporation Tax",
  "Self-Assessment",
  "Payroll and PAYE",
  "VAT Returns",
  "CIS Returns",
  "Property and Landlord Accounting",
  "Business Advisory",
  "Company Formation",
];

export function getOrganizationSchema() {
  const siteUrl = getSiteUrl();
  const sameAs = getSocialProfiles();
  const lines = businessDetails.registeredOfficeLines || [];

  return omitEmpty({
    "@context": "https://schema.org",
    "@type": ["Organization", "AccountingService", "ProfessionalService"],
    name: businessDetails.tradingName,
    legalName: businessDetails.legalName,
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    description: businessDetails.brandDescription,
    email: hasValue(businessDetails.email) ? businessDetails.email : undefined,
    telephone: hasValue(businessDetails.phoneTel)
      ? businessDetails.phoneTel
      : hasValue(napDetails.phone)
        ? napDetails.phone
        : undefined,
    identifier: businessDetails.companyNumber,
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    sameAs: sameAs.length ? sameAs : undefined,
    address: hasValue(napDetails.address)
      ? omitEmpty({
          "@type": "PostalAddress",
          streetAddress:
            [lines[0], lines[1]].filter(Boolean).join(", ") ||
            "530 Manor Mills, Ingram Street",
          addressLocality: lines[2] || "Leeds",
          addressRegion: "West Yorkshire",
          postalCode: lines[4] || "LS11 9BR",
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
            : hasValue(napDetails.phone)
              ? napDetails.phone
              : undefined,
          areaServed: "GB",
          availableLanguage: "English",
        })
      : undefined,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Accountancy and tax services",
      itemListElement: FEATURED_SCHEMA_SERVICES.map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
          provider: {
            "@type": "Organization",
            name: businessDetails.tradingName,
          },
          areaServed: "GB",
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
    publisher: {
      "@type": "Organization",
      name: businessDetails.tradingName,
      url: siteUrl,
    },
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
      telephone: hasValue(businessDetails.phoneTel)
        ? businessDetails.phoneTel
        : undefined,
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
  });
}

/** Review schema only when genuine reviews are configured. */
export function getReviewsSchema() {
  const reviews = Array.isArray(businessDetails.reviews)
    ? businessDetails.reviews.filter(
        (review) =>
          hasValue(review?.text) &&
          hasValue(review?.name) &&
          typeof review?.rating === "number"
      )
    : [];

  if (!reviews.length) return null;

  return reviews.map((review) =>
    omitEmpty({
      "@context": "https://schema.org",
      "@type": "Review",
      reviewBody: review.text,
      datePublished: review.date || undefined,
      author: {
        "@type": "Person",
        name: review.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
      },
      itemReviewed: {
        "@type": "Organization",
        name: businessDetails.tradingName,
      },
    })
  );
}
