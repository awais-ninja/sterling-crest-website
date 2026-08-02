/**
 * Slim navigation menus for desktop/mobile mega menus.
 * Full catalogues remain on /services and /who-we-serve.
 */

export const featuredServiceNav = [
  {
    title: "Accounts and compliance",
    items: [
      { slug: "annual-accounts" },
      { slug: "bookkeeping" },
      { slug: "payroll" },
      { slug: "vat-returns" },
    ],
  },
  {
    title: "Tax",
    items: [
      { slug: "self-assessment" },
      { slug: "corporation-tax" },
      { slug: "capital-gains-tax" },
      { slug: "tax-planning" },
    ],
  },
  {
    title: "Business and property",
    items: [
      { slug: "company-formation" },
      { slug: "business-growth-planning", label: "Business Advisory" },
      { slug: "landlord-accounting" },
      { slug: "property-tax-returns", label: "Property Tax" },
    ],
  },
];

/** Flat featured client list for the Who We Serve menu. */
export const featuredAudienceNav = [
  { slug: "limited-companies", label: "Limited Companies" },
  { slug: "self-employed", label: "Self-Employed" },
  { slug: "landlords", label: "Landlords" },
  { slug: "contractors", label: "Contractors" },
  { slug: "startups", label: "Start-ups" },
  { slug: "property-investors", label: "Property Investors" },
];
