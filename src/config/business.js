/**
 * Central business configuration for Sterling Crest Accountants.
 * Leave unconfirmed fields as empty strings, never display empty values publicly.
 */

export const businessDetails = {
  legalName: "Sterling Crest Accountants Ltd",
  tradingName: "Sterling Crest Accountants",
  companyNumber: "16941931",
  registrationCountry: "England and Wales",

  registeredOffice:
    "530 Manor Mills, Ingram Street, Leeds, England, LS11 9BR",
  registeredOfficeLines: [
    "530 Manor Mills",
    "Ingram Street",
    "Leeds",
    "England",
    "LS11 9BR",
  ],

  phone: "+44 7417 532136",
  phoneTel: "+447417532136",
  email: "info@sterlingcrest.co.uk",
  whatsappNumber: "",

  websiteUrl: "https://sterlingcrest.co.uk",
  consultationUrl:
    "https://www.picktime.com/home/b78ca841-f132-42e5-a485-f99e71f9e1b7",

  businessHours: "Monday to Friday, 8:00am to 5:00pm",
  weekendHours: "Saturday and Sunday, appointments only",
  responseTime: "We aim to respond to new enquiries within one working day.",
  areasServed: "Individuals and businesses across the United Kingdom",
  onlineConsultations: true,

  googleBusinessUrl: "",
  linkedinUrl: "",
  facebookUrl: "",
  instagramUrl: "",

  amlSupervisor: "",
  professionalBody: "",
  icoRegistrationNumber: "",
  professionalIndemnityDetails: "",

  yearsCombinedExperience: "15+",
  clientsSupported: "",

  brandDescription:
    "Practical accounting and tax support for individuals, landlords, self employed professionals and growing businesses across the UK.",

  creditUrl: "https://www.awaisdigitalservices.co.uk",
  creditName: "Awais Digital Services",

  trustStats: [
    {
      value: "15+",
      label: "Years’ Combined Experience",
      enabled: true,
    },
    {
      value: "",
      label: "Personal support for businesses and individuals",
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

/** Footer / mega menu service subsets (slugs from src/data/services.js). */
export const footerServiceSlugs = [
  "bookkeeping",
  "company-accounts",
  "corporation-tax",
  "self-assessment",
  "payroll",
  "vat-returns",
];

export const megaMenuColumns = [
  [
    "bookkeeping",
    "corporation-tax",
    "payroll",
    "cis-returns",
    "business-advisory",
  ],
  [
    "company-accounts",
    "self-assessment",
    "vat-returns",
    "property-accounting",
  ],
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
  if (hasValue(businessDetails.phoneTel)) {
    return `tel:${businessDetails.phoneTel}`;
  }
  if (!hasValue(businessDetails.phone)) return null;
  return `tel:${businessDetails.phone.replace(/\s+/g, "")}`;
}

export function getWhatsAppHref(
  message = "Hello, I would like to enquire about your accountancy services."
) {
  if (!hasValue(businessDetails.whatsappNumber)) return null;
  const digits = businessDetails.whatsappNumber.replace(/[^\d]/g, "");
  if (!digits) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function getEmailHref(subject = "Accountancy enquiry") {
  if (!hasValue(businessDetails.email)) return null;
  return `mailto:${businessDetails.email}?subject=${encodeURIComponent(subject)}`;
}

export function getSocialProfiles() {
  return [
    businessDetails.linkedinUrl,
    businessDetails.facebookUrl,
    businessDetails.instagramUrl,
    businessDetails.googleBusinessUrl,
  ].filter(hasValue);
}

export function getCompanyDisclosure() {
  return `${businessDetails.legalName} is registered in ${businessDetails.registrationCountry} under company number ${businessDetails.companyNumber}.`;
}

export function getRegisteredOfficeDisclosure() {
  if (!hasValue(businessDetails.registeredOffice)) return "";
  return `Address: ${businessDetails.registeredOffice}.`;
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
  "Bookkeeping",
  "Company accounts",
  "Corporation tax",
  "Self assessment",
  "Payroll and PAYE",
  "VAT returns",
  "CIS returns",
  "Property and landlord accounts",
  "Business advisory",
  "Company formation",
  "Other",
];

export const contactMethodOptions = ["Email", "Phone", "WhatsApp"];
