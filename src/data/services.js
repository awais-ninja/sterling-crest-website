/**
 * Service catalogue, used by services index, individual pages, nav and sitemap.
 */

export const services = [
  {
    slug: "bookkeeping",
    title: "Bookkeeping",
    shortTitle: "Bookkeeping",
    navLabel: "Bookkeeping",
    summary:
      "Organised day to day bookkeeping so your records stay up to date and ready for tax and reporting.",
    metaTitle: "Bookkeeping Services | Sterling Crest Accountants",
    metaDescription:
      "Cloud bookkeeping support for sole traders and limited companies. Organised records, clearer reporting and smoother HMRC submissions.",
    h1: "Bookkeeping Services",
    intro:
      "Reliable bookkeeping helps you understand how your business is performing and reduces last minute pressure at year end. We maintain clear, organised records using practical processes suited to your business.",
    whoFor: [
      "Sole traders and freelancers who need organised records",
      "Limited companies requiring ongoing bookkeeping support",
      "Landlords managing rental income and expenses",
      "Businesses preparing for VAT, payroll or year end accounts",
    ],
    problems: [
      "Receipts and invoices scattered across emails and folders",
      "Uncertainty about bank balances and outstanding invoices",
      "Last minute scrambling before tax deadlines",
      "Difficulty producing figures for lenders or HMRC",
    ],
    included: [
      "Recording income and expenditure",
      "Bank and card reconciliation support",
      "Supplier and customer ledger maintenance",
      "Preparation of figures for VAT, payroll and accounts",
      "Regular communication on outstanding items",
    ],
    process: [
      "Discuss your current systems and reporting needs",
      "Agree bookkeeping frequency and responsibilities",
      "Set up or review cloud accounting workflows where appropriate",
      "Maintain records and provide updates on request",
    ],
    documents: [
      "Bank and card statements",
      "Sales invoices and purchase invoices",
      "Expense receipts",
      "Payroll summaries where relevant",
      "Opening balances or previous accountant handover information",
    ],
    deadlines:
      "Bookkeeping itself has no single statutory deadline, but timely records support VAT return dates, corporation tax filings, self assessment and Companies House accounts. We help you plan around the deadlines that apply to you.",
    benefits: [
      "Clearer visibility of cash flow and profitability",
      "Smoother preparation of tax returns and accounts",
      "Reduced risk of missing allowable expenses",
      "Better prepared figures for decision making",
    ],
    related: ["company-accounts", "vat-returns", "payroll"],
    faqs: [
      {
        question: "Do you use cloud accounting software?",
        answer:
          "Where suitable, we can work with common cloud accounting platforms. During your consultation we will discuss which approach fits your business.",
      },
      {
        question: "How often should bookkeeping be updated?",
        answer:
          "This depends on transaction volume and reporting needs. Many clients benefit from monthly updates; others prefer quarterly. We agree a practical schedule with you.",
      },
    ],
  },
  {
    slug: "company-accounts",
    title: "Company Accounts",
    shortTitle: "Company Accounts",
    navLabel: "Company Accounts",
    summary:
      "Preparation of limited company accounts ready for Companies House and HMRC filings.",
    metaTitle: "Limited Company Accounts | Sterling Crest",
    metaDescription:
      "Limited company accounts preparation and filing support. Clear reporting, deadline focus and practical guidance for directors.",
    h1: "Limited Company Accounts",
    intro:
      "Every limited company must prepare accounts and file them with Companies House. We prepare statutory accounts with clear explanations so directors understand the figures behind the filings.",
    whoFor: [
      "UK limited companies of all sizes",
      "New companies preparing their first set of accounts",
      "Directors wanting clearer year end reporting",
      "Businesses switching from another accountant",
    ],
    problems: [
      "Uncertainty about what Companies House requires",
      "Incomplete records close to the filing deadline",
      "Difficulty interpreting profit, tax and director drawings",
      "Stress around year end packing and handover",
    ],
    included: [
      "Preparation of statutory accounts",
      "Supporting schedules and working papers as needed",
      "Guidance on Companies House filing requirements",
      "Explanation of key results for directors",
      "Coordination with corporation tax where engaged",
    ],
    process: [
      "Confirm accounting period and filing deadlines",
      "Gather bookkeeping records and supporting documents",
      "Prepare draft accounts for director review",
      "Finalise and support filing once approved",
    ],
    documents: [
      "Bookkeeping records for the period",
      "Bank statements and loan statements",
      "Fixed asset and stock information where relevant",
      "Director loan account details",
      "Previous year accounts if available",
    ],
    deadlines:
      "Private limited companies generally must file accounts with Companies House within nine months of the accounting reference date. Exact deadlines depend on your company. Always check Companies House guidance for your filing date.",
    benefits: [
      "Organised year end process with clear next steps",
      "Accounts prepared for statutory filing requirements",
      "Directors receive practical explanations of results",
      "Better foundation for tax and planning discussions",
    ],
    related: ["corporation-tax", "bookkeeping", "business-advisory"],
    faqs: [
      {
        question: "Do you file accounts at Companies House?",
        answer:
          "Where engaged to do so, we can support the filing process once directors have approved the accounts. Responsibilities are confirmed in your engagement letter.",
      },
      {
        question: "Can you prepare abbreviated or filleted accounts?",
        answer:
          "Filing options depend on company size and current Companies House rules. We advise on the appropriate presentation for your circumstances.",
      },
    ],
  },
  {
    slug: "corporation-tax",
    title: "Corporation Tax",
    shortTitle: "Corporation Tax",
    navLabel: "Corporation Tax",
    summary:
      "Corporation tax computation and return support aligned with your company accounts.",
    metaTitle: "Corporation Tax Services | Sterling Crest",
    metaDescription:
      "Corporation tax return preparation for UK limited companies. Clear computations, filing support and practical tax discussions.",
    h1: "Corporation Tax Services",
    intro:
      "Corporation tax is calculated from your company’s taxable profits. We prepare computations and returns with clear workings so directors understand the liability and payment timeline.",
    whoFor: [
      "Limited companies needing CT600 support",
      "Directors wanting clearer tax computations",
      "Companies approaching their payment deadline",
      "Businesses with more complex adjustments",
    ],
    problems: [
      "Uncertainty about taxable profit adjustments",
      "Missed or late corporation tax payments",
      "Confusion between accounting profit and tax profit",
      "Incomplete records delaying the return",
    ],
    included: [
      "Corporation tax computation",
      "Preparation of the company tax return",
      "Review of common allowable adjustments",
      "Payment deadline reminders where engaged",
      "Plain English explanation of the tax position",
    ],
    process: [
      "Review accounts and supporting information",
      "Prepare draft corporation tax computation",
      "Discuss key adjustments with directors",
      "Finalise and support submission once approved",
    ],
    documents: [
      "Draft or final company accounts",
      "Bank interest and finance costs",
      "Capital expenditure details",
      "Director remuneration and dividend information",
      "Prior year tax computations where available",
    ],
    deadlines:
      "Corporation tax is usually payable nine months and one day after the end of the accounting period. Return filing deadlines can differ. Check current HMRC guidance for your company’s dates.",
    benefits: [
      "Clear link between accounts and tax",
      "Support with identifying relevant adjustments",
      "Reduced risk of late filing or payment surprises",
      "Practical discussion of the company’s tax position",
    ],
    related: ["company-accounts", "business-advisory", "payroll"],
    faqs: [
      {
        question: "Do you provide tax planning advice?",
        answer:
          "Where appropriate, we discuss legitimate planning points relevant to your circumstances. We do not offer aggressive or non compliant schemes.",
      },
      {
        question: "Can you help if my records are incomplete?",
        answer:
          "Yes. We will explain what is missing and help you gather what is needed before finalising the return.",
      },
    ],
  },
  {
    slug: "self-assessment",
    title: "Self Assessment",
    shortTitle: "Self Assessment",
    navLabel: "Self Assessment",
    summary:
      "Self assessment tax return preparation for individuals, sole traders, landlords and directors.",
    metaTitle: "Self Assessment Tax Return Services | Sterling Crest",
    metaDescription:
      "Self assessment tax return services for individuals, sole traders, landlords and company directors across the UK.",
    h1: "Self Assessment Tax Return Services",
    intro:
      "Self assessment can feel overwhelming when income comes from several sources. We prepare returns carefully, explain your tax position and help you meet HMRC filing requirements.",
    whoFor: [
      "Sole traders and freelancers",
      "Company directors with salary and dividends",
      "Landlords with rental income",
      "Individuals with multiple income streams",
    ],
    problems: [
      "Uncertainty about whether a return is required",
      "Missing paperwork close to the deadline",
      "Confusion about allowable expenses",
      "Anxiety about HMRC penalties for late filing",
    ],
    included: [
      "Review of income and allowable expenses",
      "Preparation of the self assessment return",
      "Calculation of tax and National Insurance where relevant",
      "Clear summary of what you owe or are due",
      "Support with submission once approved",
    ],
    process: [
      "Confirm the sources of income to include",
      "Collect documents and clarify missing items",
      "Prepare a draft return for your review",
      "Finalise and submit once you are happy to proceed",
    ],
    documents: [
      "P60, P45 or payslips where relevant",
      "Dividend vouchers and bank interest certificates",
      "Self employment income and expense records",
      "Property income and expense records",
      "Previous year’s tax return if available",
    ],
    deadlines:
      "Online self assessment returns are generally due by 31 January following the end of the tax year. Payment deadlines can differ. Always confirm current dates on GOV.UK.",
    benefits: [
      "Organised gathering of income and expenses",
      "Clear explanation of your tax calculation",
      "Support ahead of HMRC deadlines",
      "Practical guidance for the following tax year",
    ],
    related: ["property-accounting", "bookkeeping", "business-advisory"],
    faqs: [
      {
        question: "Do I need to complete a self assessment return?",
        answer:
          "It depends on your income sources and circumstances. If you are unsure, contact us with a short summary and we can advise whether a return is likely to be required.",
      },
      {
        question: "Can you help with a late return?",
        answer:
          "Yes. We can help bring outstanding returns up to date and explain the likely next steps, including any HMRC penalties that may already apply.",
      },
    ],
  },
  {
    slug: "payroll",
    title: "Payroll and PAYE",
    shortTitle: "Payroll",
    navLabel: "Payroll and PAYE",
    summary:
      "Payroll processing, payslips and PAYE support so employees are paid correctly and on time.",
    metaTitle: "Payroll and PAYE Services | Sterling Crest",
    metaDescription:
      "Payroll and PAYE services for UK employers. Payslips, RTI support and clear processing for growing teams.",
    h1: "Payroll and PAYE Services",
    intro:
      "Accurate payroll protects both employer and employee. We process payroll on an agreed schedule, prepare payslips and support the PAYE obligations that come with employing staff.",
    whoFor: [
      "Limited companies with employees or directors on payroll",
      "Start ups hiring their first employee",
      "Businesses wanting to outsource PAYE administration",
      "Employers needing clearer payroll routines",
    ],
    problems: [
      "Uncertainty about PAYE registration and starter processes",
      "Missed or late Full Payment Submissions",
      "Confusion about statutory payments and deductions",
      "Time consuming payroll administration each month",
    ],
    included: [
      "Payroll processing on an agreed schedule",
      "Payslip preparation",
      "Support with RTI submissions where engaged",
      "Starter and leaver administration guidance",
      "Year end payroll summaries as required",
    ],
    process: [
      "Confirm pay dates, employees and payroll frequency",
      "Collect starter details and existing payroll information",
      "Process payroll and share payslips for review",
      "Support submissions and maintain payroll records",
    ],
    documents: [
      "Employee starter checklists and P45s where relevant",
      "Salary, bonus and deduction instructions",
      "Pension contribution details",
      "Statutory payment information (sick, maternity, etc.)",
      "Existing payroll software exports if switching provider",
    ],
    deadlines:
      "PAYE information must usually be reported to HMRC on or before each payday. Exact obligations depend on your payroll setup. We agree processing cut off dates with you.",
    benefits: [
      "Reliable pay run routine",
      "Clear payslips for staff",
      "Reduced admin burden for directors",
      "Better alignment with HMRC reporting expectations",
    ],
    related: ["company-accounts", "corporation-tax", "bookkeeping"],
    faqs: [
      {
        question: "Can you run payroll for directors only?",
        answer:
          "Yes. Many limited companies need payroll even where only directors are paid through PAYE. We can set this up as part of your engagement.",
      },
      {
        question: "Do you handle pensions auto enrolment?",
        answer:
          "We can discuss pension contribution processing as part of payroll. Specific auto enrolment duties remain with the employer; we will clarify responsibilities during onboarding.",
      },
    ],
  },
  {
    slug: "vat-returns",
    title: "VAT Returns",
    shortTitle: "VAT Returns",
    navLabel: "VAT Returns",
    summary:
      "VAT return preparation and support for Making Tax Digital compatible processes.",
    metaTitle: "VAT Return Services | Sterling Crest Accountants",
    metaDescription:
      "VAT return preparation for UK businesses. Clear workings, deadline support and practical guidance on VAT schemes.",
    h1: "VAT Return Services",
    intro:
      "VAT returns need accurate figures and timely submission. We prepare returns from organised records, explain the VAT due or reclaimable, and help you stay on top of your VAT cycle.",
    whoFor: [
      "VAT registered sole traders and limited companies",
      "Businesses approaching the VAT threshold",
      "Clients needing support with Making Tax Digital processes",
      "Businesses unsure which VAT scheme suits them",
    ],
    problems: [
      "Uncertainty about input and output VAT",
      "Rushed returns from incomplete bookkeeping",
      "Confusion about flat rate or other schemes",
      "Missed submission or payment dates",
    ],
    included: [
      "Review of VAT relevant transactions",
      "Preparation of VAT return figures",
      "Explanation of VAT payable or reclaimable",
      "Support with submission where engaged",
      "Practical notes on record keeping improvements",
    ],
    process: [
      "Confirm VAT scheme and return period",
      "Review bookkeeping and supporting invoices",
      "Prepare draft VAT figures for approval",
      "Finalise and support filing once confirmed",
    ],
    documents: [
      "Sales and purchase invoices for the period",
      "Bank statements and cash records",
      "Import and export paperwork where relevant",
      "Previous VAT returns",
      "Access to accounting software if used",
    ],
    deadlines:
      "VAT return due dates depend on your VAT periods and submission method. Check your HMRC VAT online account for the dates that apply to your business.",
    benefits: [
      "Clearer VAT workings each period",
      "Reduced last minute return pressure",
      "Better organised VAT records",
      "Practical discussion of scheme suitability",
    ],
    related: ["bookkeeping", "company-accounts", "business-advisory"],
    faqs: [
      {
        question: "Do I need to register for VAT?",
        answer:
          "You may need to register if your taxable turnover exceeds the VAT threshold, or you may choose to register voluntarily. We can discuss your position during a consultation.",
      },
      {
        question: "Can you help with Making Tax Digital?",
        answer:
          "Yes. We can advise on compatible software and processes so your VAT records support Making Tax Digital requirements.",
      },
    ],
  },
  {
    slug: "cis-returns",
    title: "CIS Returns",
    shortTitle: "CIS Returns",
    navLabel: "CIS Returns",
    summary:
      "Construction Industry Scheme return support for contractors and related compliance.",
    metaTitle: "CIS Return Services | Sterling Crest Accountants",
    metaDescription:
      "CIS return services for construction contractors. Monthly return support, deduction records and practical compliance guidance.",
    h1: "CIS Return Services",
    intro:
      "The Construction Industry Scheme brings monthly reporting duties for contractors. We help you prepare CIS returns, keep deduction records organised and reduce the risk of avoidable penalties.",
    whoFor: [
      "Contractors required to file monthly CIS returns",
      "Construction businesses engaging subcontractors",
      "Clients needing clearer CIS record keeping",
      "Businesses combining CIS with payroll and VAT",
    ],
    problems: [
      "Missed monthly CIS filing deadlines",
      "Incomplete subcontractor payment records",
      "Confusion about deduction rates and verification",
      "Difficulty reconciling CIS with year end accounts",
    ],
    included: [
      "Preparation of monthly CIS return information",
      "Review of subcontractor payment and deduction records",
      "Support with filing where engaged",
      "Guidance on common CIS record keeping requirements",
      "Coordination with wider accounting and tax work",
    ],
    process: [
      "Confirm contractor status and filing schedule",
      "Collect payment and deduction information",
      "Prepare return figures for review",
      "Support submission and retain working records",
    ],
    documents: [
      "Subcontractor payment schedules",
      "CIS deduction statements",
      "Verification details where relevant",
      "Invoices from subcontractors",
      "Bank payment evidence",
    ],
    deadlines:
      "CIS monthly returns are generally due within the HMRC timetable for each tax month. Confirm current due dates in your HMRC account or on GOV.UK.",
    benefits: [
      "More organised monthly CIS routine",
      "Clearer deduction and payment records",
      "Reduced risk of late filing issues",
      "Better alignment with year end accounting",
    ],
    related: ["payroll", "bookkeeping", "self-assessment"],
    faqs: [
      {
        question: "Do subcontractors need CIS returns too?",
        answer:
          "CIS monthly returns are a contractor responsibility. Subcontractors still need to keep records and may need self assessment. We can clarify your role during a consultation.",
      },
      {
        question: "Can you help with CIS registration?",
        answer:
          "Yes. We can discuss whether CIS registration applies and outline the practical next steps for your business.",
      },
    ],
  },
  {
    slug: "property-accounting",
    title: "Property and Landlord Accounts",
    shortTitle: "Property Accounting",
    navLabel: "Property and Landlords",
    summary:
      "Accounting and tax support for landlords and property investors with UK rental income.",
    metaTitle: "Property and Landlord Accountants | Sterling Crest",
    metaDescription:
      "Property and landlord accountancy support for UK rental income, allowable expenses and self assessment reporting.",
    h1: "Property and Landlord Accountants",
    intro:
      "Rental income brings its own reporting requirements. We help landlords organise property income and expenses, prepare figures for tax returns and keep property finances clearer throughout the year.",
    whoFor: [
      "Individual landlords with one or more properties",
      "Property investors with mixed portfolios",
      "Landlords needing clearer expense tracking",
      "Clients with both employment and rental income",
    ],
    problems: [
      "Scattered rent and expense paperwork",
      "Uncertainty about allowable property expenses",
      "Difficulty preparing figures for self assessment",
      "Limited visibility of property profitability",
    ],
    included: [
      "Organisation of rental income and expenditure",
      "Property income summaries for tax reporting",
      "Support with self assessment property pages where engaged",
      "Practical guidance on record keeping",
      "Discussion of common landlord reporting points",
    ],
    process: [
      "Map your properties and income sources",
      "Gather rent statements and expense evidence",
      "Prepare property summaries for review",
      "Include figures in your tax return where engaged",
    ],
    documents: [
      "Tenancy and rent statements",
      "Mortgage interest statements",
      "Repair and maintenance invoices",
      "Agent statements and fees",
      "Insurance and utility costs where relevant",
    ],
    deadlines:
      "Property income is usually reported through self assessment. Online filing is generally due by 31 January following the tax year. Confirm current dates on GOV.UK.",
    benefits: [
      "Clearer property profit and loss summaries",
      "Better organised landlord records",
      "Smoother self assessment preparation",
      "Practical support for multi property portfolios",
    ],
    related: ["self-assessment", "bookkeeping", "business-advisory"],
    faqs: [
      {
        question: "Do you work with landlords who use letting agents?",
        answer:
          "Yes. Agent statements are often a useful starting point. We still review the underlying income and expenses for completeness.",
      },
      {
        question: "Can you help with furnished holiday lets or mixed use?",
        answer:
          "We can discuss your property types during a consultation and explain what information we need. Rules can differ by property category.",
      },
    ],
  },
  {
    slug: "business-advisory",
    title: "Business Advisory",
    shortTitle: "Business Advisory",
    navLabel: "Business Advisory",
    summary:
      "Practical financial guidance to support planning, reporting and informed business decisions.",
    metaTitle: "Business Advisory Services | Sterling Crest",
    metaDescription:
      "Business advisory support for UK directors and owners. Management reporting, planning discussions and clear next steps.",
    h1: "Business Advisory Services",
    intro:
      "Good decisions need clear numbers. Our advisory support helps owners and directors understand performance, plan ahead and identify practical next steps, without jargon or overpromising.",
    whoFor: [
      "Directors wanting clearer management information",
      "Growing businesses planning expansion or hiring",
      "Owners reviewing pricing, costs or cash flow",
      "Clients who want regular financial check ins",
    ],
    problems: [
      "Limited visibility of monthly performance",
      "Uncertainty about cash flow and upcoming liabilities",
      "Decisions made without reliable figures",
      "No structured review of financial priorities",
    ],
    included: [
      "Review of key financial performance indicators",
      "Management reporting discussions where engaged",
      "Cash flow and liability planning conversations",
      "Practical action points after each review",
      "Coordination with bookkeeping, tax and payroll work",
    ],
    process: [
      "Agree the questions you need answered",
      "Review available management and accounting data",
      "Discuss findings in plain English",
      "Confirm priorities and follow up actions",
    ],
    documents: [
      "Recent management or bookkeeping reports",
      "Bank balances and loan schedules",
      "Sales pipeline or forecast notes where available",
      "Payroll summaries",
      "Prior year accounts",
    ],
    deadlines:
      "Advisory work is not tied to a single statutory deadline, but it often supports decisions ahead of VAT, payroll, corporation tax and year end accounts dates.",
    benefits: [
      "Clearer understanding of business performance",
      "Earlier visibility of cash and tax pressures",
      "Better prepared discussions with lenders or partners",
      "Action points you can implement",
    ],
    related: ["bookkeeping", "company-accounts", "corporation-tax"],
    faqs: [
      {
        question: "Is advisory included with compliance work?",
        answer:
          "Basic explanations are part of good service delivery. Dedicated advisory reviews can be scoped separately depending on how much analysis and reporting you need.",
      },
      {
        question: "Do you provide formal business plans?",
        answer:
          "We can support planning discussions with financial insight. Formal business plan writing can be agreed if required as part of a tailored engagement.",
      },
    ],
  },
];

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug) || null;
}

export function getRelatedServices(slugs = []) {
  return slugs.map((slug) => getServiceBySlug(slug)).filter(Boolean);
}

export function getServicePath(slug) {
  return `/services/${slug}`;
}
