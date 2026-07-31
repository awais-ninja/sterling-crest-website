/**
 * Who we serve catalogue, used by audience pages, nav and sitemap.
 * Related service slugs must match src/data/services.js.
 */

import { getRelatedServices } from "@/data/services";

function defineAudience({
  slug,
  title,
  category,
  summary,
  metaDescription,
  intro,
  challenges,
  howWeHelp,
  relatedServices,
  faqs,
  metaTitle,
  h1,
  navLabel,
}) {
  return {
    slug,
    title,
    navLabel: navLabel || title,
    category,
    summary,
    metaTitle: metaTitle || `${title} Accountants | Sterling Crest`,
    metaDescription,
    h1: h1 || `Accountants for ${title}`,
    intro,
    challenges,
    howWeHelp,
    relatedServices,
    faqs,
  };
}

export const audienceCategories = [
  {
    id: "individuals",
    title: "Individuals",
    summary:
      "Personal tax and accounting support for people with employment, freelance or investment income.",
    slugs: [
      "self-employed",
      "freelancers",
      "high-net-worth-individuals",
      "cis-contractors",
    ],
  },
  {
    id: "businesses",
    title: "Businesses",
    summary:
      "Compliance and advisory support for start ups, limited companies and growing trading businesses.",
    slugs: [
      "startups",
      "limited-companies",
      "small-businesses",
      "contractors",
    ],
  },
  {
    id: "property",
    title: "Property",
    summary:
      "Accounting and tax support for landlords, SPVs and property investors across the UK.",
    slugs: [
      "landlords",
      "non-resident-landlords",
      "spv-companies",
      "property-investors",
    ],
  },
  {
    id: "specialist",
    title: "Specialist",
    summary:
      "Practical support for charities, consultants, healthcare professionals and tech start ups.",
    slugs: [
      "charities",
      "consultants",
      "healthcare-professionals",
      "tech-startups",
    ],
  },
];

export const audiences = [
  defineAudience({
    slug: "self-employed",
    title: "Self Employed",
    category: "individuals",
    summary:
      "Bookkeeping and self assessment support for sole traders managing busy workloads.",
    metaDescription:
      "Accountants for self employed professionals across the UK. Self assessment, bookkeeping, VAT and practical tax support.",
    intro:
      "If you work for yourself, clear records and a tidy self assessment process make a real difference. We help self employed clients stay organised, understand their tax position and meet HMRC deadlines without last minute pressure.",
    challenges: [
      "Mixing personal and business spending",
      "Uncertainty about allowable expenses",
      "January self assessment deadlines arriving too quickly",
      "Growing turnover that may trigger VAT registration questions",
    ],
    howWeHelp: [
      "Set up practical bookkeeping routines",
      "Prepare self assessment returns with clear explanations",
      "Advise on VAT and record keeping as your income grows",
      "Agree fixed fee options where scope is clear",
    ],
    relatedServices: [
      "self-assessment",
      "bookkeeping",
      "vat-returns",
      "tax-planning",
    ],
    faqs: [
      {
        question: "Do I need an accountant if I am self employed?",
        answer:
          "Not every sole trader needs ongoing support, but many benefit from help with records, allowable expenses and self assessment filing. We can scope a one off return or ongoing bookkeeping.",
      },
      {
        question: "Can you work with my existing spreadsheets or apps?",
        answer:
          "Yes. We can work with common cloud tools or tidy spreadsheet records, then agree a process that fits how you already work.",
      },
    ],
  }),

  defineAudience({
    slug: "freelancers",
    title: "Freelancers",
    category: "individuals",
    summary:
      "Tax and bookkeeping support for freelancers with multiple clients and irregular income.",
    metaDescription:
      "Freelance accountants for UK freelancers. Self assessment, bookkeeping and tax planning for irregular income.",
    intro:
      "Freelance income rarely arrives in neat monthly amounts. We help freelancers track invoices, expenses and tax so cashflow and filing stay under control across the year.",
    challenges: [
      "Irregular income making tax hard to estimate",
      "Platform and client invoices scattered across systems",
      "Uncertainty about home office and equipment claims",
      "Late catch up when several projects finish at once",
    ],
    howWeHelp: [
      "Organise income and expense tracking",
      "Prepare self assessment figures with clear tax estimates where possible",
      "Support VAT registration decisions as turnover grows",
      "Discuss company formation if incorporation becomes relevant",
    ],
    relatedServices: [
      "self-assessment",
      "bookkeeping",
      "tax-planning",
      "company-formation",
    ],
    faqs: [
      {
        question: "Should freelancers use a limited company?",
        answer:
          "It depends on income, risk and personal circumstances. We can outline practical differences so you can decide with clearer numbers, without one size fits all advice.",
      },
      {
        question: "Can you help if I invoice through more than one platform?",
        answer:
          "Yes. We reconcile platform statements and client invoices so your records reflect the full picture.",
      },
    ],
  }),

  defineAudience({
    slug: "high-net-worth-individuals",
    title: "High Net Worth Individuals",
    category: "individuals",
    summary:
      "Discreet tax and reporting support for individuals with complex income and investment profiles.",
    metaDescription:
      "Accountants for high net worth individuals. Tax planning, self assessment, capital gains and property tax support.",
    intro:
      "When income and investments span several sources, reporting needs careful coordination. We help high net worth individuals organise self assessment, capital gains and property related filings with clear explanations and practical next steps.",
    challenges: [
      "Multiple income streams that are hard to consolidate",
      "Property and investment disposals with short reporting windows",
      "Planning decisions that affect more than one tax year",
      "Need for clear documentation without unnecessary complexity",
    ],
    howWeHelp: [
      "Coordinate self assessment across income sources",
      "Support capital gains calculations for relevant disposals",
      "Discuss legitimate tax planning within UK rules",
      "Link property and investment records into one reporting process",
    ],
    relatedServices: [
      "tax-planning",
      "self-assessment",
      "capital-gains-tax",
      "property-tax-returns",
    ],
    faqs: [
      {
        question: "Do you provide investment advice?",
        answer:
          "No. We focus on accounting and tax reporting. Where specialist investment or legal advice is needed, we will say so clearly.",
      },
      {
        question: "Can you work alongside my existing advisers?",
        answer:
          "Yes. Clear information sharing with your solicitor, wealth manager or other advisers often improves the quality of the tax return.",
      },
    ],
  }),

  defineAudience({
    slug: "cis-contractors",
    title: "CIS Contractors",
    category: "individuals",
    summary:
      "Self assessment and record keeping support for construction industry contractors.",
    metaDescription:
      "Accountants for CIS contractors. Self assessment, bookkeeping and tax support for construction subcontractors.",
    intro:
      "CIS deductions and construction income need clear records if your self assessment is going to stay accurate. We help contractors track deductions, expenses and year end figures with practical support.",
    challenges: [
      "CIS statements that do not match bank receipts",
      "Uncertainty about which site expenses are allowable",
      "Working through an umbrella, limited company or sole trade setup",
      "Self assessment left until statements are incomplete",
    ],
    howWeHelp: [
      "Organise CIS and invoice records for tax time",
      "Prepare self assessment returns with deduction reconciliations",
      "Support bookkeeping routines during the year",
      "Discuss company or sole trade structures where relevant",
    ],
    relatedServices: [
      "self-assessment",
      "bookkeeping",
      "tax-planning",
      "company-formation",
    ],
    faqs: [
      {
        question: "Do you submit CIS returns for contractors?",
        answer:
          "Monthly CIS returns are usually a contractor employer responsibility. As a subcontractor, your focus is often records and self assessment. We clarify your role during consultation.",
      },
      {
        question: "Can you help if I also have employment income?",
        answer:
          "Yes. Many contractors have mixed income. We bring those sources together in the self assessment return.",
      },
    ],
  }),

  defineAudience({
    slug: "startups",
    title: "Startups",
    category: "businesses",
    summary:
      "Accounting setup and early stage support for founders building their first trading routines.",
    metaDescription:
      "Startup accountants for UK founders. Company formation, bookkeeping, cashflow forecasting and early compliance support.",
    intro:
      "Starting up is easier when the financial foundations are right from day one. We help founders with formation, bookkeeping setup and early reporting so growth is not held back by messy records.",
    challenges: [
      "Uncertainty about sole trade versus limited company",
      "Personal and business finances mixed together",
      "No clear first year compliance calendar",
      "Cash pressure while sales are still building",
    ],
    howWeHelp: [
      "Support company formation and post incorporation setup",
      "Build practical bookkeeping and banking routines",
      "Prepare simple cashflow views for early decisions",
      "Outline VAT, payroll and accounts deadlines as you grow",
    ],
    relatedServices: [
      "startup-support",
      "company-formation",
      "bookkeeping",
      "cashflow-forecasting",
    ],
    faqs: [
      {
        question: "When should a start up appoint an accountant?",
        answer:
          "Earlier is usually cheaper than reconstructing a busy first year later. Even a setup consultation can prevent common filing and record keeping mistakes.",
      },
      {
        question: "Do you only work with funded start ups?",
        answer:
          "No. We work with bootstrapped founders and early trading businesses as well as teams preparing for investment conversations.",
      },
    ],
  }),

  defineAudience({
    slug: "limited-companies",
    title: "Limited Companies",
    category: "businesses",
    summary:
      "Annual accounts, corporation tax, payroll and Companies House support for directors.",
    metaDescription:
      "Limited company accountants. Annual accounts, corporation tax, payroll, VAT and confirmation statement support.",
    intro:
      "Limited companies need reliable statutory filings and clear director reporting. We support annual accounts, corporation tax, payroll and related compliance so directors understand the numbers behind each deadline.",
    challenges: [
      "Year end packing left too late",
      "Uncertainty about salary, dividends and director loans",
      "Payroll and VAT running separately from accounts",
      "Confirmation statement and accounts deadlines colliding",
    ],
    howWeHelp: [
      "Prepare annual accounts with plain English explanations",
      "Support corporation tax computations and CT600 filing where engaged",
      "Run payroll and coordinate with accounts work",
      "Keep confirmation statement and Companies House details on track",
    ],
    relatedServices: [
      "annual-accounts",
      "corporation-tax",
      "payroll",
      "confirmation-statement",
    ],
    faqs: [
      {
        question: "Do you work with new and established companies?",
        answer:
          "Yes. We support first year filings as well as companies switching from another accountant.",
      },
      {
        question: "Can accounts and corporation tax be prepared together?",
        answer:
          "Often yes. Preparing them together keeps figures consistent. Exact scope is confirmed in your engagement letter.",
      },
    ],
  }),

  defineAudience({
    slug: "small-businesses",
    title: "Small Businesses",
    category: "businesses",
    summary:
      "Day to day accounting, VAT and management reporting for owner managed small businesses.",
    metaDescription:
      "Small business accountants. Bookkeeping, VAT, management accounts and annual compliance for UK SMEs.",
    intro:
      "Small businesses need accounting support that stays practical. We help owner managers keep books current, meet VAT and filing duties, and see performance clearly between year ends.",
    challenges: [
      "Directors spending too much time on admin",
      "VAT periods causing repeated last minute pressure",
      "Limited visibility of profit and cash during the year",
      "Compliance work that feels disconnected from trading decisions",
    ],
    howWeHelp: [
      "Maintain organised bookkeeping routines",
      "Prepare VAT returns and improve record keeping",
      "Provide management accounts for clearer decisions",
      "Support annual accounts when you trade through a company",
    ],
    relatedServices: [
      "bookkeeping",
      "vat-returns",
      "management-accounts",
      "annual-accounts",
    ],
    faqs: [
      {
        question: "Do you offer fixed fee packages for small businesses?",
        answer:
          "Where the scope is clear, we can agree fixed fee options in advance so you know what is included before work begins.",
      },
      {
        question: "Can you support both sole traders and companies?",
        answer:
          "Yes. The filings differ, but the focus on organised records and clear explanations is the same.",
      },
    ],
  }),

  defineAudience({
    slug: "contractors",
    title: "Contractors",
    category: "businesses",
    summary:
      "Accounting support for contractors working through a limited company or as a sole trader.",
    metaDescription:
      "Contractor accountants for UK contractors. Company accounts, self assessment, bookkeeping and tax planning support.",
    intro:
      "Contracting brings flexibility and admin. We help contractors keep company or sole trade records organised, plan for tax, and stay ready for accounts and self assessment deadlines.",
    challenges: [
      "Unclear mix of salary, dividends or drawings",
      "IR35 and contract status questions needing careful scoping",
      "Bookkeeping falling behind between contracts",
      "Tax bills arriving without a payment plan",
    ],
    howWeHelp: [
      "Support bookkeeping through each contract cycle",
      "Prepare company accounts or self assessment as relevant",
      "Discuss practical tax planning within UK rules",
      "Help with company formation if you are incorporating",
    ],
    relatedServices: [
      "bookkeeping",
      "annual-accounts",
      "self-assessment",
      "tax-planning",
    ],
    faqs: [
      {
        question: "Do you provide IR35 status determinations?",
        answer:
          "We can discuss practical record keeping and tax implications. Formal status determinations may require specialist review depending on your contracts.",
      },
      {
        question: "Can you take over mid contract?",
        answer:
          "Yes. We review your current records, agree a handover and get bookkeeping and filings back on a clear schedule.",
      },
    ],
  }),

  defineAudience({
    slug: "landlords",
    title: "Landlords",
    category: "property",
    summary:
      "Property accounting and tax ready figures for UK landlords and rental portfolios.",
    metaDescription:
      "Landlord accountants for UK rental portfolios. Landlord accounting, property tax returns and self assessment support.",
    intro:
      "Rental income needs clean records if tax time is going to stay manageable. We help landlords track rents, expenses and portfolio results, then prepare tax ready figures for self assessment.",
    challenges: [
      "Rents and costs mixed across personal accounts",
      "Missing invoices for repairs and finance costs",
      "Uncertainty about allowable expenses",
      "Multiple properties with no clear profit view",
    ],
    howWeHelp: [
      "Maintain landlord focused bookkeeping",
      "Prepare property tax return figures",
      "Support self assessment property pages where engaged",
      "Organise records for HMOs and holiday lets where relevant",
    ],
    relatedServices: [
      "landlord-accounting",
      "property-tax-returns",
      "self-assessment",
      "hmo-holiday-let-accounting",
    ],
    faqs: [
      {
        question: "Do you work with letting agent reports?",
        answer:
          "Yes. Agent statements are often the starting point. We will tell you which extra invoices we still need from you.",
      },
      {
        question: "Can you handle jointly owned properties?",
        answer:
          "Yes. Clear ownership shares and evidence of how income and costs were split make the return smoother.",
      },
    ],
  }),

  defineAudience({
    slug: "non-resident-landlords",
    title: "Non Resident Landlords",
    category: "property",
    summary:
      "UK property tax and reporting support for landlords living abroad.",
    metaDescription:
      "Non resident landlord accountants. NRL tax support, landlord accounting and UK property tax return help.",
    intro:
      "Non resident landlords have specific UK reporting points for rental income. We help with records, withholding reconciliations and the filings needed to keep your UK property tax position clear while you are abroad.",
    challenges: [
      "Letting agent withholding without clear reconciliations",
      "UK records held across email and overseas folders",
      "Uncertainty about which UK returns apply",
      "Difficulty estimating UK tax from abroad",
    ],
    howWeHelp: [
      "Review rental income and allowable expenses",
      "Support non resident landlord tax reporting questions",
      "Prepare property tax and self assessment figures where required",
      "Improve agent and document routines for future years",
    ],
    relatedServices: [
      "non-resident-landlord-tax",
      "landlord-accounting",
      "property-tax-returns",
      "self-assessment",
    ],
    faqs: [
      {
        question: "Do non resident landlords always need a UK tax return?",
        answer:
          "Often yes where there is UK rental income, but the exact route depends on your arrangements. We assess this from the information you provide.",
      },
      {
        question: "Can you liaise with my UK letting agent?",
        answer:
          "Yes. Clear agent statements make the process much smoother.",
      },
    ],
  }),

  defineAudience({
    slug: "spv-companies",
    title: "SPV Companies",
    category: "property",
    summary:
      "Accounting and compliance for property special purpose vehicles and property limited companies.",
    metaDescription:
      "SPV company accountants. SPV accounting, annual accounts, corporation tax and company formation support.",
    intro:
      "Property SPVs need company compliance as well as rental accounting. We support bookkeeping, annual accounts and corporation tax so your special purpose vehicle stays organised and filing ready.",
    challenges: [
      "Company and property records maintained inconsistently",
      "Director loan and extraction questions at year end",
      "Purchase and refinance paperwork incomplete at filing time",
      "Limited visibility of SPV cash during the year",
    ],
    howWeHelp: [
      "Provide SPV focused accounting support",
      "Prepare annual accounts and corporation tax computations",
      "Support company formation for new property vehicles",
      "Organise transaction records for lenders and future sales",
    ],
    relatedServices: [
      "spv-accounting",
      "annual-accounts",
      "corporation-tax",
      "company-formation",
    ],
    faqs: [
      {
        question: "Is an SPV filed like any other limited company?",
        answer:
          "For Companies House and corporation tax purposes, yes. The underlying property activity shapes the records and adjustments we prepare.",
      },
      {
        question: "Can you support a group of property SPVs?",
        answer:
          "Yes. We can discuss a portfolio approach so each company stays compliant with clear property level visibility.",
      },
    ],
  }),

  defineAudience({
    slug: "property-investors",
    title: "Property Investors",
    category: "property",
    summary:
      "Portfolio accounting and tax support for investors building or restructuring UK property holdings.",
    metaDescription:
      "Property investor accountants. Landlord accounting, SPV support, capital gains tax and tax planning.",
    intro:
      "Property investors often juggle personal holdings, company structures and future disposals. We help bring portfolio records together and support the tax reporting that sits behind acquisition, refinance and exit decisions.",
    challenges: [
      "Mixed personal and company ownership across a portfolio",
      "Unclear profitability after finance and operating costs",
      "Capital gains questions before a sale completes",
      "Planning changes without seeing the tax effect first",
    ],
    howWeHelp: [
      "Organise landlord and portfolio accounting",
      "Support SPV accounting where properties are company owned",
      "Prepare capital gains figures for relevant disposals",
      "Discuss legitimate planning points before major transactions",
    ],
    relatedServices: [
      "landlord-accounting",
      "spv-accounting",
      "capital-gains-tax",
      "tax-planning",
    ],
    faqs: [
      {
        question: "Can you help before I buy or sell a property?",
        answer:
          "Where enough information is available, we can prepare indicative figures and outline reporting points. Final tax depends on the completed transaction details.",
      },
      {
        question: "Do you only work with large portfolios?",
        answer:
          "No. We support investors with a single property as well as multi property portfolios.",
      },
    ],
  }),

  defineAudience({
    slug: "charities",
    title: "Charities",
    category: "specialist",
    summary:
      "Practical bookkeeping, payroll and reporting support for smaller charities and not for profit organisations.",
    metaDescription:
      "Charity accountants for smaller UK charities. Bookkeeping, payroll, accounts support and practical compliance help.",
    intro:
      "Charities need clear records for trustees, funders and regulators. We provide practical bookkeeping, payroll and accounts support tailored to smaller charity operations, with scope confirmed against your reporting duties.",
    challenges: [
      "Restricted and unrestricted funds mixed in the records",
      "Volunteer run bookkeeping that falls behind",
      "Payroll for staff alongside grant funded projects",
      "Year end reporting that trustees find hard to interpret",
    ],
    howWeHelp: [
      "Set up clearer bookkeeping and coding routines",
      "Support payroll where you employ staff",
      "Help prepare year end figures for accounts work",
      "Explain results in plain English for trustees",
    ],
    relatedServices: [
      "bookkeeping",
      "payroll",
      "annual-accounts",
      "tax-planning",
    ],
    faqs: [
      {
        question: "Do you act as independent examiners or auditors?",
        answer:
          "Independent examination and audit requirements depend on charity size and constitution. We confirm what we can support during consultation and will not overstate regulated roles.",
      },
      {
        question: "Can you work with charity treasurers?",
        answer:
          "Yes. Clear handovers and simple monthly routines often make trustee reporting much easier.",
      },
    ],
  }),

  defineAudience({
    slug: "consultants",
    title: "Consultants",
    category: "specialist",
    summary:
      "Tax and accounting support for consultants operating as sole traders or through a company.",
    metaDescription:
      "Consultant accountants. Self assessment, bookkeeping, company formation and tax planning for UK consultants.",
    intro:
      "Consulting income can look simple until expenses, travel, retainers and company decisions stack up. We help consultants keep records clean, file accurately and plan for tax as the practice grows.",
    challenges: [
      "Client work leaving little time for bookkeeping",
      "Uncertainty about sole trade versus limited company",
      "Expenses spread across cards and personal accounts",
      "Tax estimates that are hard to forecast between projects",
    ],
    howWeHelp: [
      "Maintain practical bookkeeping through engagements",
      "Prepare self assessment or company accounts as relevant",
      "Support company formation when incorporation is appropriate",
      "Discuss tax planning around income timing and extraction",
    ],
    relatedServices: [
      "self-assessment",
      "bookkeeping",
      "company-formation",
      "tax-planning",
    ],
    faqs: [
      {
        question: "Do you support both day rate and retained consultants?",
        answer:
          "Yes. The record keeping approach adapts to how you bill and recover expenses.",
      },
      {
        question: "Can you help if I am moving from employment into consulting?",
        answer:
          "Yes. We can outline first year registrations, record keeping and likely filing duties before you start.",
      },
    ],
  }),

  defineAudience({
    slug: "healthcare-professionals",
    title: "Healthcare Professionals",
    category: "specialist",
    summary:
      "Accounting support for healthcare professionals with private practice, locum or company income.",
    metaDescription:
      "Accountants for healthcare professionals. Self assessment, bookkeeping, company accounts and tax planning support.",
    intro:
      "Healthcare professionals often combine employment, locum work or private practice. We help organise those income streams, keep practice records tidy and prepare the tax filings that follow.",
    challenges: [
      "Mixed PAYE, locum and private practice income",
      "Practice expenses that are easy to miss",
      "Uncertainty about company structures for private work",
      "Limited time for admin between clinical commitments",
    ],
    howWeHelp: [
      "Track practice and locum income clearly",
      "Prepare self assessment returns across income sources",
      "Support limited company accounts where you practise through a company",
      "Discuss practical tax planning within UK rules",
    ],
    relatedServices: [
      "self-assessment",
      "bookkeeping",
      "annual-accounts",
      "tax-planning",
    ],
    faqs: [
      {
        question: "Do you understand private practice fee structures?",
        answer:
          "We work with the records and billing reports you provide, including clinic and platform statements, and organise them for tax and accounts.",
      },
      {
        question: "Can you work around clinical schedules?",
        answer:
          "Yes. Remote consultations and clear document checklists are designed to respect limited admin time.",
      },
    ],
  }),

  defineAudience({
    slug: "tech-startups",
    title: "Tech Startups",
    category: "specialist",
    summary:
      "Financial setup and advisory support for tech founders focused on building product and traction.",
    metaDescription:
      "Tech startup accountants. Startup support, company formation, cashflow forecasting and CFO advisory for UK tech teams.",
    intro:
      "Tech start ups move quickly, but investors and HMRC still expect clean numbers. We help founders set up company finances, track burn and runway, and stay compliant while the product grows.",
    challenges: [
      "Burn rate and runway tracked only in rough spreadsheets",
      "Formation and share details left incomplete",
      "Compliance catching up after a funding or hiring sprint",
      "Need for board ready numbers without a full time CFO",
    ],
    howWeHelp: [
      "Support company formation and financial foundations",
      "Build cashflow and runway views founders can revisit",
      "Provide startup accounting and compliance support",
      "Offer CFO style advisory as reporting needs mature",
    ],
    relatedServices: [
      "startup-support",
      "company-formation",
      "cashflow-forecasting",
      "cfo-advisory",
    ],
    faqs: [
      {
        question: "Do you work with pre revenue tech teams?",
        answer:
          "Yes. Early bookkeeping, formation and cashflow discipline are often most valuable before revenue arrives.",
      },
      {
        question: "Can you support fundraising reporting?",
        answer:
          "We can help organise financial information founders use in investor conversations. Formal valuation or deal advice sits outside accountancy support.",
      },
    ],
  }),
];

export function getAudienceBySlug(slug) {
  return audiences.find((audience) => audience.slug === slug) || null;
}

export function getAudienceCategoriesWithAudiences() {
  return audienceCategories.map((category) => ({
    ...category,
    audiences: category.slugs
      .map((slug) => getAudienceBySlug(slug))
      .filter(Boolean),
  }));
}

export function getAudienceRelatedServices(audience) {
  return getRelatedServices(audience?.relatedServices || []);
}

export function getAudiencePath(slug) {
  return `/who-we-serve/${slug}`;
}
