/**
 * Central business configuration for Sterling Crest Accountants.
 * Leave unconfirmed fields as empty strings, never display empty values publicly.
 * Do not invent reviews, memberships, social profiles or office locations.
 */

export const napDetails = {
  name: "Sterling Crest Accountants",
  address: "530 Manor Mills, Ingram Street, Leeds, England, LS11 9BR",
  phone: "+44 7417 532136",
};

export const businessDetails = {
  legalName: "Sterling Crest Accountants Ltd",
  tradingName: "Sterling Crest Accountants",
  companyNumber: "16941931",
  registrationCountry: "England and Wales",

  registeredOffice: napDetails.address,
  registeredOfficeLines: [
    "530 Manor Mills",
    "Ingram Street",
    "Leeds",
    "England",
    "LS11 9BR",
    "United Kingdom",
  ],

  phone: napDetails.phone,
  phoneHref: "tel:+447417532136",
  phoneTel: "+447417532136",
  email: "info@sterlingcrest.co.uk",

  whatsappNumber: "447417532136",
  whatsappUrl:
    "https://wa.me/447417532136?text=Hello%20Sterling%20Crest%20Accountants%2C%20I%20would%20like%20to%20discuss%20accounting%20or%20tax%20support.",

  websiteUrl: "https://www.sterlingcrest.co.uk",
  consultationUrl:
    "https://www.picktime.com/home/b78ca841-f132-42e5-a485-f99e71f9e1b7",

  businessHours: "Monday to Friday, 8:00am to 5:00pm",
  weekendHours: "Saturday and Sunday, appointments only",
  responseTime: "We aim to respond to new enquiries within one working day.",
  areasServed: "United Kingdom",
  onlineConsultations: true,

  /** Google Business Profile URL — leave empty until confirmed. */
  googleBusinessProfileUrl: "https://share.google/35VvheFKduO4v6B9p",
  /** @deprecated Use googleBusinessProfileUrl */
  googleBusinessUrl: "",

  socialLinks: {
    linkedin: "https://www.linkedin.com/company/sterling-crest-accountants-ltd/",
    facebook: "https://www.facebook.com/profile.php?id=61592590986744",
    instagram: "https://www.instagram.com/sterlingcrestaccountants/",
    x: "",
  },

  /** Legacy individual fields — prefer socialLinks. */
  linkedinUrl: "https://www.linkedin.com/company/sterling-crest-accountants-ltd/",
  facebookUrl: "https://www.facebook.com/profile.php?id=61592590986744",
  instagramUrl: "https://www.instagram.com/sterlingcrestaccountants/",

  /**
   * Genuine reviews only. Leave empty until verified testimonials are supplied.
   * Shape: { name, platform, rating, text, date }
   */
  reviews: [],

  amlSupervisor: "",
  professionalBody: "",
  icoRegistrationNumber: "",
  professionalIndemnityDetails: "",

  yearsCombinedExperience: "",
  clientsSupported: "",

  brandDescription:
    "Practical accounting and tax support for individuals, landlords, self employed professionals and growing businesses across the UK.",

  creditUrl: "https://www.awaisdigitalservices.co.uk",
  creditName: "ADS",

  trustStats: [
    {
      value: "",
      label: "Combined experience",
      enabled: true,
      isTextOnly: true,
    },
    {
      value: "",
      label: "Practical support for individuals and businesses",
      enabled: true,
      isTextOnly: true,
    },
    {
      value: "",
      label: "Compliance focused service",
      enabled: true,
      isTextOnly: true,
    },
  ],
};

/** Footer service subset (slugs from src/data/services.js). */
export const footerServiceSlugs = [
  "bookkeeping",
  "annual-accounts",
  "self-assessment",
  "corporation-tax",
  "payroll",
  "landlord-accounting",
];

/** Returns true when a config string has a usable public value. */
export function hasValue(value) {
  if (value === null || value === undefined) return false;
  if (typeof value !== "string") return Boolean(value);
  const trimmed = value.trim();
  if (!trimmed) return false;
  if (/^TODO:/i.test(trimmed)) return false;
  if (/^\[.*\]$/.test(trimmed)) return false;
  return true;
}

export function getPhoneHref() {
  if (hasValue(businessDetails.phoneHref)) {
    return businessDetails.phoneHref.trim();
  }
  if (hasValue(businessDetails.phoneTel)) {
    return `tel:${businessDetails.phoneTel}`;
  }
  if (!hasValue(businessDetails.phone)) return null;
  return `tel:${businessDetails.phone.replace(/\s+/g, "")}`;
}

/**
 * WhatsApp chat URL from central config.
 * Prefer whatsappUrl; otherwise build from whatsappNumber.
 */
export function getWhatsAppHref() {
  if (hasValue(businessDetails.whatsappUrl)) {
    return businessDetails.whatsappUrl.trim();
  }
  if (!hasValue(businessDetails.whatsappNumber)) return null;
  const digits = businessDetails.whatsappNumber.replace(/[^\d]/g, "");
  if (!digits) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(
    "Hello Sterling Crest Accountants, I would like to discuss accounting or tax support."
  )}`;
}

export function getEmailHref(subject = "Accountancy enquiry") {
  if (!hasValue(businessDetails.email)) return null;
  return `mailto:${businessDetails.email}?subject=${encodeURIComponent(subject)}`;
}

export function getGoogleBusinessProfileUrl() {
  if (hasValue(businessDetails.googleBusinessProfileUrl)) {
    return businessDetails.googleBusinessProfileUrl.trim();
  }
  if (hasValue(businessDetails.googleBusinessUrl)) {
    return businessDetails.googleBusinessUrl.trim();
  }
  return "";
}

/**
 * Configured public profile URLs for JSON-LD sameAs.
 * Excludes WhatsApp, Picktime and empty values.
 */
export function getSocialProfiles() {
  const links = businessDetails.socialLinks || {};
  return [
    links.linkedin || businessDetails.linkedinUrl,
    links.facebook || businessDetails.facebookUrl,
    links.instagram || businessDetails.instagramUrl,
    links.x,
    getGoogleBusinessProfileUrl(),
  ]
    .map((value) => (typeof value === "string" ? value.trim() : value))
    .filter(hasValue);
}

/** Configured social links for UI icons (empty profiles omitted). */
export function getPublicSocialLinks() {
  const links = businessDetails.socialLinks || {};
  return [
    {
      key: "linkedin",
      label: "LinkedIn",
      href: links.linkedin || businessDetails.linkedinUrl,
      ariaLabel: "Sterling Crest Accountants on LinkedIn",
      event: "linkedin_click",
    },
    {
      key: "facebook",
      label: "Facebook",
      href: links.facebook || businessDetails.facebookUrl,
      ariaLabel: "Sterling Crest Accountants on Facebook",
      event: "facebook_click",
    },
    {
      key: "instagram",
      label: "Instagram",
      href: links.instagram || businessDetails.instagramUrl,
      ariaLabel: "Sterling Crest Accountants on Instagram",
      event: "instagram_click",
    },
    {
      key: "x",
      label: "X",
      href: links.x,
      ariaLabel: "Sterling Crest Accountants on X",
      event: "x_click",
    },
  ].filter((item) => hasValue(item.href));
}

export function getCompanyDisclosure() {
  return `${businessDetails.legalName} is registered in ${businessDetails.registrationCountry} under company number ${businessDetails.companyNumber}.`;
}

export function getRegisteredOfficeDisclosure() {
  if (!hasValue(napDetails.address)) return "";
  return `Address: ${napDetails.address}.`;
}

export const clientTypeOptions = [
  "Individual",
  "Self employed",
  "Limited company",
  "Partnership",
  "Landlord",
  "Contractor",
  "Start up",
  "Charity",
  "Other",
];

export const serviceOptions = [
  "Annual Accounts",
  "Bookkeeping",
  "Management Accounts",
  "Payroll",
  "VAT Returns",
  "Confirmation Statement",
  "Self Assessment",
  "Corporation Tax",
  "Capital Gains Tax",
  "Tax Planning",
  "Non Resident Landlord Tax",
  "Startup Support",
  "Company Formation",
  "Cashflow Forecasting",
  "CFO Advisory",
  "Business Growth Planning",
  "Landlord Accounting",
  "SPV Accounting",
  "Property Tax Returns",
  "HMO / Holiday Let Accounting",
  "Other",
];

export const contactMethodOptions = ["Email", "Phone", "WhatsApp"];
