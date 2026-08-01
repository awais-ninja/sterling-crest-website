/**
 * Service catalogue used by services index, individual pages, nav and sitemap.
 * Keep user facing copy free of hyphens; slugs may contain hyphens.
 */

function defineService({
  slug,
  title,
  category,
  summary,
  metaDescription,
  intro,
  whoFor,
  problems,
  included,
  process,
  documents,
  deadlines,
  benefits,
  related,
  faqs,
  metaTitle,
  h1,
  shortTitle,
  navLabel,
}) {
  return {
    slug,
    title,
    shortTitle: shortTitle || title,
    navLabel: navLabel || title,
    category,
    summary,
    metaTitle: metaTitle || `${title} | Sterling Crest Accountants`,
    metaDescription,
    h1: h1 || title,
    intro,
    whoFor,
    problems,
    included,
    process,
    documents,
    deadlines,
    benefits,
    related,
    faqs,
  };
}

export const serviceCategories = [
  {
    id: "accounting-compliance",
    title: "Accounting & Compliance",
    summary:
      "Day to day records, statutory filings and compliance support for individuals and companies.",
    slugs: [
      "annual-accounts",
      "bookkeeping",
      "management-accounts",
      "payroll",
      "vat-returns",
      "confirmation-statement",
    ],
  },
  {
    id: "tax-services",
    title: "Tax Services",
    summary:
      "Personal and business tax return support with clear explanations of your position.",
    slugs: [
      "self-assessment",
      "corporation-tax",
      "capital-gains-tax",
      "tax-planning",
      "non-resident-landlord-tax",
    ],
  },
  {
    id: "business-advisory",
    title: "Business Advisory",
    summary:
      "Practical advice for start ups, growing companies and directors who need clearer numbers.",
    slugs: [
      "startup-support",
      "company-formation",
      "cashflow-forecasting",
      "cfo-advisory",
      "business-growth-planning",
    ],
  },
  {
    id: "property-services",
    title: "Property Services",
    summary:
      "Accounting and tax support for landlords, SPVs, HMOs and holiday lets.",
    slugs: [
      "landlord-accounting",
      "spv-accounting",
      "property-tax-returns",
      "hmo-holiday-let-accounting",
    ],
  },
];

export const services = [
  defineService({
    slug: "annual-accounts",
    title: "Annual Accounts",
    category: "accounting-compliance",
    summary:
      "Preparation of limited company annual accounts ready for Companies House and HMRC.",
    metaDescription:
      "Annual accounts preparation and filing support for UK limited companies. Clear reporting and practical guidance for directors.",
    h1: "Annual Accounts",
    intro:
      "Every limited company must prepare accounts and file them with Companies House. We prepare statutory annual accounts with clear explanations so directors understand the figures behind the filings.",
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
      "Preparation of statutory annual accounts",
      "Supporting schedules and working papers as needed",
      "Corporation tax computation support where engaged",
      "Filing support for Companies House where agreed",
      "Plain English explanation of key figures",
    ],
    process: [
      "Gather books, bank information and prior year files",
      "Prepare draft accounts and raise clarification questions",
      "Review drafts with you and agree final figures",
      "Finalise and support filing as scoped in the engagement",
    ],
    documents: [
      "Bookkeeping records or cloud software access",
      "Bank and card statements",
      "Prior year accounts and tax computations",
      "Director loan and dividend information",
      "Asset purchase details and loan agreements",
    ],
    deadlines:
      "Private limited companies generally must file accounts with Companies House within nine months of the accounting reference date. Confirm current rules on GOV.UK for your company type.",
    benefits: [
      "Compliant filings with clearer director understanding",
      "Organised year end process with clear next steps",
      "Fewer surprises when corporation tax is calculated",
      "A cleaner starting point for the next financial year",
    ],
    related: ["corporation-tax", "bookkeeping", "management-accounts"],
    faqs: [
      {
        question: "Do you file accounts at Companies House?",
        answer:
          "Where filing is included in your engagement, we can support submission. Exact responsibilities are confirmed in writing before work begins.",
      },
      {
        question: "Can you work from incomplete records?",
        answer:
          "We can help reconstruct records where needed, but incomplete information may increase fees and extend timelines. We will flag gaps early.",
      },
    ],
  }),

  defineService({
    slug: "bookkeeping",
    title: "Bookkeeping",
    category: "accounting-compliance",
    summary:
      "Organised day to day bookkeeping so your records stay up to date and ready for tax and reporting.",
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
      "Bookkeeping itself has no single statutory deadline, but timely records support VAT return dates, corporation tax filings, self assessment and Companies House accounts.",
    benefits: [
      "Clearer visibility of cash flow and profitability",
      "Smoother preparation of tax returns and accounts",
      "Reduced risk of missing allowable expenses",
      "Better prepared figures for decision making",
    ],
    related: ["annual-accounts", "vat-returns", "payroll"],
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
  }),

  defineService({
    slug: "management-accounts",
    title: "Management Accounts",
    category: "accounting-compliance",
    summary:
      "Regular management accounts so directors can track performance, cash and margins between year ends.",
    metaDescription:
      "Management accounts for UK businesses. Clear monthly or quarterly reporting to support decisions and cash control.",
    intro:
      "Annual accounts look backwards. Management accounts help you see how the business is performing now. We prepare clear, practical reports so you can act earlier on profit, costs and cash.",
    whoFor: [
      "Directors who want regular performance visibility",
      "Growing companies preparing for funding or expansion",
      "Owners reviewing pricing, margins and overheads",
      "Businesses that outgrew informal spreadsheet tracking",
    ],
    problems: [
      "Only seeing results once a year",
      "Uncertainty about which products or clients are profitable",
      "Cash surprises despite apparently healthy sales",
      "Limited board pack information for decisions",
    ],
    included: [
      "Profit and loss reporting for the agreed period",
      "Balance sheet and cash position summaries where scoped",
      "Comparison to prior periods or budgets where available",
      "Commentary on notable movements",
      "Follow up discussion of key points",
    ],
    process: [
      "Agree reporting frequency and key metrics",
      "Confirm bookkeeping cut off and information needed",
      "Prepare draft management accounts",
      "Review findings with you and note action points",
    ],
    documents: [
      "Up to date bookkeeping records",
      "Bank balances and loan schedules",
      "Payroll summaries",
      "Budget or forecast figures if you use them",
      "Prior management packs where available",
    ],
    deadlines:
      "Management accounts are not a statutory filing. Timelines are agreed with you so reports arrive early enough to support decisions.",
    benefits: [
      "Earlier sight of profit and cash trends",
      "Better informed pricing and cost decisions",
      "Clearer board or investor discussions",
      "Stronger link between day to day trading and year end results",
    ],
    related: ["bookkeeping", "cashflow-forecasting", "cfo-advisory"],
    faqs: [
      {
        question: "How often should management accounts be prepared?",
        answer:
          "Monthly suits many growing companies. Quarterly can work for simpler businesses. We recommend a rhythm that matches how quickly your numbers change.",
      },
      {
        question: "Do management accounts replace annual accounts?",
        answer:
          "No. Management accounts support internal decisions. Statutory annual accounts remain a separate Companies House and tax requirement.",
      },
    ],
  }),

  defineService({
    slug: "payroll",
    title: "Payroll",
    category: "accounting-compliance",
    summary:
      "PAYE payroll processing, payslips and HMRC reporting support for employers.",
    metaDescription:
      "Payroll and PAYE services for UK employers. Accurate payslips, HMRC reporting and practical year end payroll support.",
    h1: "Payroll and PAYE Services",
    intro:
      "Payroll must be accurate and on time. We process payslips, handle PAYE reporting requirements and help you keep employee pay administration organised.",
    whoFor: [
      "Limited companies with directors and employees on payroll",
      "Start ups hiring their first employee",
      "Employers wanting reliable monthly payroll processing",
      "Businesses needing clearer payroll records for accounts",
    ],
    problems: [
      "Time consuming payroll administration each month",
      "Uncertainty about PAYE, NI and student loan deductions",
      "Risk of late or incorrect HMRC submissions",
      "Scattered payslip and year end paperwork",
    ],
    included: [
      "Payroll setup or takeover support",
      "Payslip production for agreed pay cycles",
      "PAYE reporting support as scoped",
      "Year end payroll summaries as required",
      "Queries support on routine payroll matters",
    ],
    process: [
      "Collect starter details and pay information",
      "Agree cut off dates and communication routines",
      "Process each pay run and share payslips",
      "Support HMRC submissions and year end summaries",
    ],
    documents: [
      "Employee starter checklists and P45 or new starter declarations",
      "Salary, hours and deduction changes",
      "Pension contribution details where relevant",
      "Director remuneration instructions",
      "Prior payroll software export or reports if taking over",
    ],
    deadlines:
      "PAYE information must usually be reported to HMRC on or before each payday. We agree processing cut off dates with you.",
    benefits: [
      "Reliable pay run routine",
      "Clearer payroll records for accounts and tax",
      "Reduced admin burden on directors",
      "Better preparedness for year end filings",
    ],
    related: ["annual-accounts", "corporation-tax", "bookkeeping"],
    faqs: [
      {
        question: "Can you run payroll for directors only?",
        answer:
          "Yes. Many limited companies need payroll for directors even where there are no other employees. We can discuss the right setup during consultation.",
      },
      {
        question: "Do you handle pensions auto enrolment?",
        answer:
          "We can discuss pension contribution processing as part of payroll. Specific auto enrolment duties remain with the employer; we will clarify responsibilities during onboarding.",
      },
    ],
  }),

  defineService({
    slug: "vat-returns",
    title: "VAT Returns",
    category: "accounting-compliance",
    summary:
      "VAT return preparation and support for Making Tax Digital compatible processes.",
    metaDescription:
      "VAT return services for UK businesses. Organised records, practical MTD compatible support and clearer VAT reporting.",
    h1: "VAT Return Services",
    intro:
      "VAT returns need accurate records and timely submission. We prepare returns carefully, explain the figures and help you stay organised for each VAT period.",
    whoFor: [
      "VAT registered sole traders and limited companies",
      "Businesses newly registering for VAT",
      "Clients wanting clearer VAT record keeping",
      "Companies preparing figures for quarterly returns",
    ],
    problems: [
      "Uncertainty about which transactions are VATable",
      "Incomplete purchase invoices close to the deadline",
      "Difficulty reconciling VAT with bank and sales figures",
      "Pressure around Making Tax Digital requirements",
    ],
    included: [
      "Review of VAT relevant transactions",
      "Preparation of VAT return figures",
      "Support with submission where engaged",
      "Queries on routine VAT classification points",
      "Practical notes on record keeping improvements",
    ],
    process: [
      "Confirm VAT scheme and period dates",
      "Gather sales, purchase and adjustment information",
      "Prepare draft return figures and raise questions",
      "Finalise and support submission as agreed",
    ],
    documents: [
      "Sales invoices and credit notes",
      "Purchase invoices and expense receipts",
      "Bank statements for the VAT period",
      "Import or EU transaction records where relevant",
      "Prior VAT returns and software access if available",
    ],
    deadlines:
      "VAT return and payment due dates depend on your VAT periods and scheme. Confirm current dates on GOV.UK or your HMRC account.",
    benefits: [
      "Clearer VAT figures each period",
      "Reduced last minute return pressure",
      "Better organised VAT records",
      "Improved readiness for Making Tax Digital processes",
    ],
    related: ["bookkeeping", "annual-accounts", "management-accounts"],
    faqs: [
      {
        question: "Do you submit VAT returns to HMRC?",
        answer:
          "Where submission is included in the engagement, we can support filing. You remain responsible for ensuring information provided is complete and accurate.",
      },
      {
        question: "Can you help with VAT registration?",
        answer:
          "We can discuss whether registration is likely to be required and support the practical next steps as part of a scoped engagement.",
      },
    ],
  }),

  defineService({
    slug: "confirmation-statement",
    title: "Confirmation Statement",
    category: "accounting-compliance",
    summary:
      "Companies House confirmation statement support so company details stay accurate and filed on time.",
    metaDescription:
      "Confirmation statement filing support for UK limited companies. Keep officer, share and PSC details accurate at Companies House.",
    intro:
      "Limited companies must file a confirmation statement at least once a year. We help you review company details and support timely filing so statutory information stays accurate.",
    whoFor: [
      "UK limited companies needing annual confirmation statement support",
      "Directors updating shareholdings or officer details",
      "New companies approaching their first statement deadline",
      "Businesses wanting accounts and Companies House filings coordinated",
    ],
    problems: [
      "Uncertainty about what information must be confirmed",
      "Missed statement deadlines and late filing risk",
      "Out of date officer, PSC or share capital details",
      "Scattered company secretarial paperwork",
    ],
    included: [
      "Review of current Companies House information",
      "Support updating changes where instructed",
      "Preparation support for the confirmation statement",
      "Filing support where included in the engagement",
      "Reminder coordination alongside accounts work where engaged",
    ],
    process: [
      "Confirm your statement due date and company details",
      "Review changes since the last statement",
      "Prepare the filing information with you",
      "Support submission and retain confirmation records",
    ],
    documents: [
      "Current Companies House authentication details where needed",
      "Share allotment or transfer paperwork",
      "Director appointment or resignation details",
      "PSC change information",
      "Prior confirmation statement acknowledgements",
    ],
    deadlines:
      "Confirmation statements are generally due at least every 12 months. Exact due dates appear on your Companies House record. Confirm current rules on GOV.UK.",
    benefits: [
      "Timely Companies House compliance",
      "Accurate public company information",
      "Fewer last minute secretarial surprises",
      "Better alignment with annual accounts work",
    ],
    related: ["annual-accounts", "company-formation", "corporation-tax"],
    faqs: [
      {
        question: "Is a confirmation statement the same as annual accounts?",
        answer:
          "No. The confirmation statement confirms company information at Companies House. Annual accounts are a separate filing with different content and deadlines.",
      },
      {
        question: "What happens if the statement is late?",
        answer:
          "Late filing can lead to penalties and, in serious cases, further Companies House action. We help you plan ahead so the statement is not left to the last minute.",
      },
    ],
  }),

  defineService({
    slug: "self-assessment",
    title: "Self Assessment",
    category: "tax-services",
    summary:
      "Self assessment tax return preparation for individuals, sole traders, landlords and directors.",
    metaDescription:
      "Self assessment tax return services for individuals, sole traders, landlords and company directors across the UK.",
    h1: "Self Assessment Tax Return Services",
    intro:
      "Self assessment can feel overwhelming when income comes from several sources. We prepare returns carefully, explain your tax position and help you meet HMRC filing requirements.",
    whoFor: [
      "Sole traders and freelancers",
      "Company directors with salary, dividends or benefits",
      "Landlords with UK rental income",
      "Individuals with untaxed income or capital gains to report",
    ],
    problems: [
      "Uncertainty about what must be declared",
      "Scattered income records across banks and platforms",
      "Worry about January filing and payment deadlines",
      "Difficulty estimating tax due",
    ],
    included: [
      "Review of income and allowable expenses",
      "Preparation of the self assessment return",
      "Calculation of tax and National Insurance where applicable",
      "Plain English summary of the tax position",
      "Submission support where engaged",
    ],
    process: [
      "Discuss your income sources and filing history",
      "Collect documents and clarify open points",
      "Prepare the draft return and tax computation",
      "Review with you, finalise and support filing",
    ],
    documents: [
      "P60, P45 and P11D forms where relevant",
      "Self employment income and expense records",
      "Rental statements and property expenses",
      "Dividend vouchers and bank interest certificates",
      "Prior year tax return and HMRC correspondence",
    ],
    deadlines:
      "Online self assessment returns are generally due by 31 January following the end of the tax year. Payment deadlines can differ. Always confirm current dates on GOV.UK.",
    benefits: [
      "Clearer understanding of what you owe and why",
      "Organised records for future years",
      "Reduced last minute filing stress",
      "Practical notes on improving next year’s process",
    ],
    related: ["landlord-accounting", "capital-gains-tax", "tax-planning"],
    faqs: [
      {
        question: "Do I need to complete a self assessment return?",
        answer:
          "It depends on your circumstances. Common reasons include self employment, rental income, significant untaxed income or capital gains. We can help you assess whether a return is required.",
      },
      {
        question: "Can you estimate my tax before January?",
        answer:
          "Where records are available early enough, we can prepare figures ahead of the deadline so you can plan for payment.",
      },
    ],
  }),

  defineService({
    slug: "corporation-tax",
    title: "Corporation Tax",
    category: "tax-services",
    summary:
      "Corporation tax computations and CT600 support for UK limited companies.",
    metaDescription:
      "Corporation tax services for UK limited companies. CT600 support, clear computations and practical planning discussions.",
    h1: "Corporation Tax Services",
    intro:
      "Corporation tax is calculated from your company accounts and supporting adjustments. We prepare computations carefully, explain the tax position and support CT600 filing where engaged.",
    whoFor: [
      "UK limited companies of all sizes",
      "Directors wanting clearer corporation tax explanations",
      "Companies approaching their first CT600 filing",
      "Businesses reviewing allowable deductions and timing",
    ],
    problems: [
      "Uncertainty about taxable profit versus accounting profit",
      "Surprise tax balances close to the payment deadline",
      "Incomplete records for capital allowances",
      "Difficulty planning for future tax payments",
    ],
    included: [
      "Corporation tax computation",
      "CT600 preparation support",
      "Review of common adjustments and allowances",
      "Plain English explanation of the tax position",
      "Filing support where included in the engagement",
    ],
    process: [
      "Review draft or final accounts and supporting records",
      "Prepare the tax computation and raise queries",
      "Agree figures with you",
      "Support CT600 submission and payment planning notes",
    ],
    documents: [
      "Annual accounts and trial balance",
      "Fixed asset additions and disposals",
      "Director loan account details",
      "Prior year tax computations",
      "HMRC correspondence relating to corporation tax",
    ],
    deadlines:
      "Corporation tax payment and CT600 filing deadlines depend on your accounting period. Confirm current dates on GOV.UK for your company.",
    benefits: [
      "Clear link between accounts and tax payable",
      "Better preparedness for HMRC payment dates",
      "Organised workings for future years",
      "Practical discussion of legitimate planning points where appropriate",
    ],
    related: ["annual-accounts", "bookkeeping", "business-growth-planning"],
    faqs: [
      {
        question: "Do you offer corporation tax planning?",
        answer:
          "Where appropriate, we discuss legitimate planning points relevant to your circumstances. We do not offer aggressive or non compliant schemes.",
      },
      {
        question: "Can corporation tax be prepared with annual accounts?",
        answer:
          "Yes. Accounts and corporation tax are often prepared together so figures stay consistent. Scope is confirmed in your engagement letter.",
      },
    ],
  }),

  defineService({
    slug: "capital-gains-tax",
    title: "Capital Gains Tax",
    category: "tax-services",
    summary:
      "Capital gains tax support for property, share and other chargeable asset disposals.",
    metaDescription:
      "Capital gains tax return support for UK individuals. Clear calculations for property, shares and other disposals.",
    intro:
      "Disposing of property, shares or other assets can create a capital gains tax reporting requirement. We help gather the figures, calculate the gain or loss and explain what needs reporting to HMRC.",
    whoFor: [
      "Individuals selling residential or investment property",
      "Shareholders disposing of company shares",
      "Clients with mixed gains and losses in the same year",
      "Landlords restructuring or exiting property portfolios",
    ],
    problems: [
      "Uncertainty about acquisition cost and allowable expenses",
      "Confusion about reporting deadlines after a property sale",
      "Incomplete records for improvements and selling costs",
      "Worry about estimating tax before completion",
    ],
    included: [
      "Review of disposal and acquisition information",
      "Capital gain or loss calculation support",
      "Consideration of common reliefs where relevant information is available",
      "Reporting support through self assessment or other required routes",
      "Plain English summary of the tax position",
    ],
    process: [
      "Discuss the disposal and available paperwork",
      "Establish base cost, proceeds and allowable costs",
      "Prepare calculations and note open assumptions",
      "Support reporting and payment planning notes",
    ],
    documents: [
      "Completion statements and sale contracts",
      "Purchase paperwork and improvement invoices",
      "Broker or share dealing statements",
      "Prior valuations where used",
      "Previous tax returns reporting related assets",
    ],
    deadlines:
      "Some property disposals have shorter reporting windows than the main self assessment deadline. Confirm current HMRC rules on GOV.UK for your disposal type.",
    benefits: [
      "Clearer understanding of taxable gains",
      "Organised workings for HMRC queries",
      "Better awareness of reporting deadlines",
      "Practical notes for future disposals",
    ],
    related: ["self-assessment", "property-tax-returns", "tax-planning"],
    faqs: [
      {
        question: "Do all property sales need capital gains tax reporting?",
        answer:
          "Not always. It depends on the property, your residence history and other circumstances. We can help you assess whether a report is required based on the facts you provide.",
      },
      {
        question: "Can you estimate tax before I sell?",
        answer:
          "Where enough information is available, we can prepare an indicative calculation to support decision making. Final figures depend on actual completion details.",
      },
    ],
  }),

  defineService({
    slug: "tax-planning",
    title: "Tax Planning",
    category: "tax-services",
    summary:
      "Practical tax planning discussions for individuals and companies within UK rules.",
    metaDescription:
      "Tax planning support for UK individuals and limited companies. Legitimate, practical advice tailored to your circumstances.",
    intro:
      "Good tax planning starts with accurate numbers and clear goals. We discuss legitimate options that fit your situation, explain trade offs and help you avoid leaving decisions to the last minute.",
    whoFor: [
      "Company directors reviewing salary and dividend mix",
      "Growing businesses planning investment or expansion",
      "Individuals with multiple income sources",
      "Landlords considering portfolio or ownership changes",
    ],
    problems: [
      "Uncertainty about the tax effect of business decisions",
      "Last minute planning when deadlines are already close",
      "Fragmented advice that ignores the full picture",
      "Worry about aggressive schemes versus compliant options",
    ],
    included: [
      "Review of your current tax profile and upcoming events",
      "Discussion of legitimate planning options",
      "Plain English comparison of practical alternatives",
      "Notes on timing, documentation and next steps",
      "Referral points where specialist advice is required",
    ],
    process: [
      "Understand your objectives and constraints",
      "Review relevant accounts, returns and forecasts",
      "Outline options with tax and commercial implications",
      "Agree actions you wish to take and how we will support them",
    ],
    documents: [
      "Recent accounts and tax returns",
      "Management accounts or cashflow forecasts",
      "Details of planned transactions",
      "Shareholding and ownership structures",
      "Existing advice or engagement letters where relevant",
    ],
    deadlines:
      "Tax planning is most effective before transactions complete and before year end. Statutory filing dates still apply to any resulting returns.",
    benefits: [
      "Earlier visibility of tax outcomes",
      "Decisions grounded in your actual figures",
      "Clearer documentation of why options were chosen",
      "Reduced reliance on last minute fixes",
    ],
    related: ["corporation-tax", "self-assessment", "business-growth-planning"],
    faqs: [
      {
        question: "Do you sell packaged tax schemes?",
        answer:
          "No. We discuss legitimate planning relevant to your circumstances and do not promote aggressive or non compliant arrangements.",
      },
      {
        question: "Is tax planning a one off meeting?",
        answer:
          "It can be. Some clients prefer a single planning session; others include ongoing review as part of wider advisory support.",
      },
    ],
  }),

  defineService({
    slug: "non-resident-landlord-tax",
    title: "Non Resident Landlord Tax",
    category: "tax-services",
    summary:
      "Support with non resident landlord tax reporting, withholding issues and UK rental filings.",
    metaDescription:
      "Non resident landlord tax support for overseas landlords with UK property. Clear reporting and practical compliance guidance.",
    intro:
      "Non resident landlords have specific UK tax rules for rental income. We help with record keeping, return preparation and practical questions about withholding and HMRC reporting.",
    whoFor: [
      "Landlords living abroad with UK rental property",
      "Agents or owners needing clearer NRL paperwork",
      "Non residents deciding how rent should be reported",
      "Clients coordinating UK property tax with self assessment",
    ],
    problems: [
      "Uncertainty about non resident landlord scheme options",
      "Withholding by letting agents without clear reconciliations",
      "Incomplete UK rental records held overseas",
      "Confusion about which UK returns are required",
    ],
    included: [
      "Review of rental income and allowable expenses",
      "Support with non resident landlord reporting questions",
      "Preparation support for relevant UK tax filings",
      "Reconciliation notes where tax has been withheld",
      "Plain English explanation of your UK property tax position",
    ],
    process: [
      "Confirm residency and property ownership details",
      "Gather rental statements and expense records",
      "Prepare figures and outline filing requirements",
      "Support submissions and document next year improvements",
    ],
    documents: [
      "Tenancy and letting agent statements",
      "Expense invoices for the property",
      "Evidence of tax withheld where applicable",
      "Prior UK tax returns",
      "Ownership and mortgage interest information",
    ],
    deadlines:
      "Filing and payment dates depend on whether you report through self assessment and on any non resident landlord arrangements in place. Confirm current HMRC guidance on GOV.UK.",
    benefits: [
      "Clearer UK rental tax position while abroad",
      "Better organised agent and expense records",
      "Reduced risk of missed UK filing duties",
      "Practical setup for future tax years",
    ],
    related: ["landlord-accounting", "self-assessment", "property-tax-returns"],
    faqs: [
      {
        question: "Do non resident landlords always need a UK tax return?",
        answer:
          "Often yes where there is UK rental income, but the exact route depends on your arrangements. We assess this from the information you provide.",
      },
      {
        question: "Can you work with my UK letting agent?",
        answer:
          "Yes. Clear agent statements make the process smoother. We will tell you what information we need from the agent.",
      },
    ],
  }),

  defineService({
    slug: "startup-support",
    title: "Startup Support",
    category: "business-advisory",
    summary:
      "Practical accounting setup and early stage support for new businesses and founders.",
    metaDescription:
      "Startup accounting support for new UK businesses. Bank ready records, tax registration guidance and clear early stage routines.",
    intro:
      "Starting a business brings admin as well as opportunity. We help founders set up practical accounting routines, understand early tax duties and avoid messy catch up later.",
    whoFor: [
      "Founders launching a limited company or sole trade",
      "Side hustles moving into full trading",
      "Early stage teams needing bookkeeping and payroll basics",
      "Start ups preparing figures for lenders or investors",
    ],
    problems: [
      "Uncertainty about what to register and when",
      "Mixing personal and business finances",
      "No clear bookkeeping routine from day one",
      "Surprise tax deadlines in the first year",
    ],
    included: [
      "Accounting setup recommendations",
      "Guidance on records to keep from the start",
      "Support with VAT, PAYE and tax registration questions",
      "Simple reporting routines for early decisions",
      "Introductions to bookkeeping, payroll or accounts as needed",
    ],
    process: [
      "Understand your business model and launch timeline",
      "Map immediate compliance and record keeping needs",
      "Agree a practical setup and first year calendar",
      "Support implementation and review after the first period",
    ],
    documents: [
      "Business plan or outline of activities",
      "Incorporation documents if already formed",
      "Bank account details and opening balances",
      "Any HMRC registration letters",
      "Initial sales and expense records",
    ],
    deadlines:
      "First year deadlines depend on your start date, accounting reference date and registrations. We help you build a calendar so nothing important is missed.",
    benefits: [
      "Cleaner books from the beginning",
      "Fewer first year compliance surprises",
      "Clearer personal versus business boundaries",
      "A scalable routine as trading grows",
    ],
    related: ["company-formation", "bookkeeping", "business-growth-planning"],
    faqs: [
      {
        question: "Should I start as a sole trader or limited company?",
        answer:
          "It depends on risk, income expectations and personal circumstances. We can outline practical differences to help you decide, without overstating one size fits all answers.",
      },
      {
        question: "When should a start up appoint an accountant?",
        answer:
          "Earlier is usually easier. Setting up records and registrations correctly at the start often costs less than reconstructing a busy first year later.",
      },
    ],
  }),

  defineService({
    slug: "company-formation",
    title: "Company Formation",
    category: "business-advisory",
    summary:
      "Support forming a UK limited company and setting up the accounting foundations that follow.",
    metaDescription:
      "UK company formation support with practical post incorporation accounting setup for new directors.",
    intro:
      "Forming a company is only the first step. We help with incorporation support and the practical accounting setup that keeps your new company organised from day one.",
    whoFor: [
      "Founders incorporating a new UK limited company",
      "Sole traders considering incorporation",
      "Directors needing post formation compliance guidance",
      "Owners setting up a property or trading SPV",
    ],
    problems: [
      "Uncertainty about share structure and officer details",
      "Company formed without a clear bookkeeping plan",
      "Missed first year filing dates",
      "Confusion about director payroll and dividends",
    ],
    included: [
      "Company formation support as scoped",
      "Guidance on basic constitutional details",
      "Post incorporation compliance calendar",
      "Accounting and bank record setup recommendations",
      "Introduction to payroll, VAT and accounts needs where relevant",
    ],
    process: [
      "Confirm business purpose and proposed structure",
      "Support incorporation steps as agreed",
      "Set out immediate post formation actions",
      "Hand over into bookkeeping or advisory support if required",
    ],
    documents: [
      "Proposed company name and business activity",
      "Director and shareholder identification details",
      "Share capital instructions",
      "Registered office preferences",
      "Any existing trading records if converting from sole trade",
    ],
    deadlines:
      "After incorporation, Companies House and HMRC deadlines begin quickly. We outline the first confirmation statement, accounts and tax dates relevant to your company.",
    benefits: [
      "Cleaner start for statutory and tax records",
      "Clearer director responsibilities from day one",
      "Fewer gaps between formation and first filings",
      "A practical bridge into ongoing accountancy support",
    ],
    related: ["startup-support", "confirmation-statement", "annual-accounts"],
    faqs: [
      {
        question: "Do you only form the company, or help afterwards?",
        answer:
          "Formation can be scoped on its own, but many clients continue with bookkeeping, payroll and accounts so the company stays compliant after incorporation.",
      },
      {
        question: "Can you form a company for a property investment?",
        answer:
          "Yes, where appropriate. We can also discuss whether an SPV structure and ongoing property accounting support are a good fit.",
      },
    ],
  }),

  defineService({
    slug: "cashflow-forecasting",
    title: "Cashflow Forecasting",
    category: "business-advisory",
    summary:
      "Cashflow forecasts that help you plan tax payments, hiring, investment and quieter trading periods.",
    metaDescription:
      "Cashflow forecasting for UK businesses. Practical forecasts to plan tax, payroll, investment and working capital.",
    intro:
      "Profit on paper does not always mean cash in the bank. We build practical cashflow forecasts so you can plan tax bills, supplier payments and growth decisions with fewer surprises.",
    whoFor: [
      "Directors managing uneven income or seasonal trading",
      "Businesses preparing for hiring, equipment or expansion",
      "Owners wanting earlier warning of cash shortfalls",
      "Companies presenting figures to lenders or investors",
    ],
    problems: [
      "Unexpected cash pressure despite profitable months",
      "Tax and VAT bills arriving without a payment plan",
      "Limited visibility beyond the next few weeks",
      "Forecasts that are too complex to maintain",
    ],
    included: [
      "Review of recent cash and trading patterns",
      "Build of a practical forecast model",
      "Scenario notes for key decisions where requested",
      "Tax, VAT and payroll timing built into the outlook",
      "Follow up review to update assumptions",
    ],
    process: [
      "Gather bank, sales, cost and tax timing information",
      "Agree forecast horizon and level of detail",
      "Prepare the forecast and highlight pressure points",
      "Review actions and update the model as trading changes",
    ],
    documents: [
      "Bank statements and current balances",
      "Sales pipeline or recurring revenue details",
      "Supplier payment terms and loan schedules",
      "Payroll and tax payment dates",
      "Budgets or prior forecasts if available",
    ],
    deadlines:
      "Forecasts are planning tools rather than statutory filings. Updates are most useful ahead of VAT, corporation tax, payroll and major spending decisions.",
    benefits: [
      "Earlier warning of cash gaps",
      "Better timing for tax and investment decisions",
      "Clearer conversations with lenders or partners",
      "A living model you can revisit as plans change",
    ],
    related: ["management-accounts", "cfo-advisory", "business-growth-planning"],
    faqs: [
      {
        question: "How far ahead should a cashflow forecast look?",
        answer:
          "Thirteen weeks suits many trading businesses. A twelve month view can help with tax and growth planning. We choose a horizon that matches your decisions.",
      },
      {
        question: "Do I need perfect bookkeeping first?",
        answer:
          "Better books make better forecasts, but we can start with bank data and known commitments, then refine as records improve.",
      },
    ],
  }),

  defineService({
    slug: "cfo-advisory",
    title: "CFO Advisory",
    category: "business-advisory",
    summary:
      "Part time CFO style support for directors who need clearer financial leadership without a full time hire.",
    metaDescription:
      "CFO advisory support for UK SMEs. Board ready numbers, cash oversight and practical financial leadership.",
    intro:
      "Many growing businesses need senior financial input before a full time CFO is justified. We provide practical CFO style advisory support focused on clarity, cash and decision ready reporting.",
    whoFor: [
      "Owner managed businesses outgrowing informal finance routines",
      "Directors preparing for investment, lending or expansion",
      "Companies wanting board pack discipline without a full finance team",
      "Founders needing a regular financial sounding board",
    ],
    problems: [
      "No single view of performance, cash and commitments",
      "Decisions made without reliable management information",
      "Finance admin taking director time away from trading",
      "Difficulty challenging costs, pricing or investment cases",
    ],
    included: [
      "Regular financial review meetings as scoped",
      "Interpretation of management accounts and cashflow",
      "Support preparing board or lender packs",
      "Challenge and advice on pricing, costs and investment timing",
      "Coordination notes for bookkeeping and compliance work",
    ],
    process: [
      "Assess current reporting and decision needs",
      "Agree a review rhythm and priority metrics",
      "Work through packs, forecasts and open issues",
      "Document actions and track follow through",
    ],
    documents: [
      "Management accounts and bookkeeping access",
      "Cashflow forecasts and bank information",
      "Budgets, KPIs and board minutes where used",
      "Loan covenants or investor reporting requirements",
      "Major contract or pricing information",
    ],
    deadlines:
      "CFO advisory follows an agreed meeting and reporting schedule rather than a single statutory deadline.",
    benefits: [
      "Senior financial input scaled to your stage",
      "Clearer board and lender conversations",
      "Faster identification of cash and margin issues",
      "Stronger link between compliance numbers and strategy",
    ],
    related: ["management-accounts", "cashflow-forecasting", "business-growth-planning"],
    faqs: [
      {
        question: "Is this the same as bookkeeping?",
        answer:
          "No. Bookkeeping keeps records. CFO advisory helps you use those records to steer the business. Many clients use both.",
      },
      {
        question: "How many hours are included?",
        answer:
          "We agree a practical retainer or project scope based on meeting frequency and the depth of analysis you need.",
      },
    ],
  }),

  defineService({
    slug: "business-growth-planning",
    title: "Business Growth Planning",
    category: "business-advisory",
    summary:
      "Financially grounded growth planning for hiring, pricing, investment and expansion decisions.",
    metaDescription:
      "Business growth planning support for UK companies. Practical financial plans for hiring, pricing and expansion.",
    intro:
      "Growth plans fail when the numbers are vague. We help owners turn expansion ideas into practical financial plans covering capacity, cash, tax timing and measurable milestones.",
    whoFor: [
      "Owners planning to hire, expand premises or enter new markets",
      "Companies preparing internal growth targets",
      "Directors weighing reinvestment versus extraction",
      "Businesses needing a clearer roadmap for the next 12 to 24 months",
    ],
    problems: [
      "Growth ideas without a funding or cash plan",
      "Hiring or marketing spend that outpaces revenue",
      "No milestones to test whether expansion is working",
      "Tax and working capital ignored until pressure appears",
    ],
    included: [
      "Review of current performance and capacity",
      "Growth scenario modelling at a practical level",
      "Cash and tax timing implications",
      "Priority actions and milestone suggestions",
      "Follow up review after implementation begins",
    ],
    process: [
      "Clarify growth goals and constraints",
      "Analyse baseline numbers and bottlenecks",
      "Build planning scenarios and required resources",
      "Agree priorities, owners and review dates",
    ],
    documents: [
      "Recent accounts and management information",
      "Current headcount and cost base",
      "Sales pipeline or customer concentration data",
      "Cashflow and funding details",
      "Any existing strategy notes or investor materials",
    ],
    deadlines:
      "Growth planning is most useful before major spending commitments. Review points are agreed with you rather than set by statute.",
    benefits: [
      "Growth decisions tested against real numbers",
      "Clearer hiring and investment timing",
      "Better awareness of cash and tax consequences",
      "A shared plan directors can revisit",
    ],
    related: ["cfo-advisory", "cashflow-forecasting", "tax-planning"],
    faqs: [
      {
        question: "Do you write full formal business plans?",
        answer:
          "We can support planning with financial insight and structured notes. Formal business plan writing for lenders or investors can be agreed if required.",
      },
      {
        question: "Can growth planning include tax planning?",
        answer:
          "Yes where relevant. Expansion often affects VAT, payroll and corporation tax timing, so we keep those points in view.",
      },
    ],
  }),

  defineService({
    slug: "landlord-accounting",
    title: "Landlord Accounting",
    category: "property-services",
    summary:
      "Accounting support for UK landlords, including rental income, expenses and year end figures.",
    metaDescription:
      "Landlord accounting services for UK rental portfolios. Organised property records and clearer tax ready figures.",
    intro:
      "Property income needs clean records if tax time is going to stay manageable. We help landlords track rents, expenses and portfolio results with practical, property focused accounting support.",
    whoFor: [
      "Individual landlords with one or more UK rentals",
      "Portfolio landlords needing property by property tracking",
      "Owners preparing figures for self assessment",
      "Landlords switching from spreadsheets to organised records",
    ],
    problems: [
      "Rents and expenses mixed across personal accounts",
      "Missing invoices for repairs and finance costs",
      "Uncertainty about which costs are allowable",
      "Difficulty preparing figures for self assessment",
    ],
    included: [
      "Recording rental income and allowable expenses",
      "Property level summaries where scoped",
      "Support with self assessment property pages where engaged",
      "Practical guidance on record keeping",
      "Year end packs for tax return preparation",
    ],
    process: [
      "Map your properties and current record keeping",
      "Agree a bookkeeping or year end only routine",
      "Maintain or review records through the year",
      "Prepare tax ready summaries at year end",
    ],
    documents: [
      "Tenancy agreements and rent statements",
      "Mortgage interest statements",
      "Repair and maintenance invoices",
      "Insurance, ground rent and service charge bills",
      "Prior property tax return pages",
    ],
    deadlines:
      "Property income is usually reported through self assessment. Online filing is generally due by 31 January following the tax year. Confirm current dates on GOV.UK.",
    benefits: [
      "Clearer property profitability",
      "Better organised landlord records",
      "Smoother self assessment preparation",
      "Practical support for multi property portfolios",
    ],
    related: ["self-assessment", "bookkeeping", "business-growth-planning"],
    faqs: [
      {
        question: "Do you handle both furnished and unfurnished lets?",
        answer:
          "Yes. We adapt the records and tax reporting points to the type of letting and the information you provide.",
      },
      {
        question: "Can you work with letting agent reports?",
        answer:
          "Yes. Agent statements are often the backbone of landlord bookkeeping. We will tell you what extra invoices we still need from you.",
      },
    ],
  }),

  defineService({
    slug: "spv-accounting",
    title: "SPV Accounting",
    category: "property-services",
    summary:
      "Accounting and compliance support for property special purpose vehicles and property limited companies.",
    metaDescription:
      "SPV accounting for UK property companies. Annual accounts, corporation tax and property transaction support.",
    intro:
      "Property SPVs need company compliance as well as rental accounting. We support bookkeeping, annual accounts and corporation tax so your property company stays organised and filing ready.",
    whoFor: [
      "Directors of property limited companies and SPVs",
      "Investors holding properties through a company",
      "Owners comparing personal versus SPV ownership records",
      "Companies with development or investment property activity",
    ],
    problems: [
      "Company and property records maintained separately and inconsistently",
      "Uncertainty about director loans, dividends and rental extraction",
      "Year end pressure when purchase and refinance paperwork is incomplete",
      "Limited visibility of SPV cash and profitability during the year",
    ],
    included: [
      "Bookkeeping support for the SPV where engaged",
      "Annual accounts preparation",
      "Corporation tax computation support",
      "Property transaction record organisation",
      "Director reporting summaries as scoped",
    ],
    process: [
      "Confirm company structure and property holdings",
      "Set up or review accounting routines",
      "Maintain records and raise missing document requests",
      "Prepare accounts and tax filings as engaged",
    ],
    documents: [
      "Companies House and bank information",
      "Purchase, refinance and solicitor completion statements",
      "Rental statements and expense invoices",
      "Director loan and intercompany details",
      "Prior accounts and tax computations",
    ],
    deadlines:
      "SPVs follow limited company accounts and corporation tax deadlines. Property tax points may also arise on transactions. Confirm current dates on GOV.UK.",
    benefits: [
      "Company and property records in one coherent process",
      "Clearer director visibility of SPV performance",
      "Smoother year end and tax filings",
      "Better documentation for lenders or future sales",
    ],
    related: ["annual-accounts", "corporation-tax", "landlord-accounting"],
    faqs: [
      {
        question: "Is an SPV treated like any other limited company?",
        answer:
          "For filing purposes, yes: accounts, confirmation statements and corporation tax still apply. The underlying property activity shapes the records and tax adjustments we prepare.",
      },
      {
        question: "Can you support a group of property SPVs?",
        answer:
          "Yes. We can discuss a portfolio approach so each company stays compliant while you retain clear property level visibility.",
      },
    ],
  }),

  defineService({
    slug: "property-tax-returns",
    title: "Property Tax Returns",
    category: "property-services",
    summary:
      "Tax return support focused on UK property income, expenses and related disclosures.",
    metaDescription:
      "Property tax return services for UK landlords and property investors. Clear rental computations and filing support.",
    intro:
      "Property tax returns bring together rents, finance costs, capital items and allowable expenses. We prepare the property figures carefully and explain the tax result in plain English.",
    whoFor: [
      "Landlords filing UK property pages on self assessment",
      "Investors with multiple properties or joint ownership",
      "Clients with both rental income and property disposals",
      "Non residents needing UK property tax return support",
    ],
    problems: [
      "Uncertainty about finance cost restriction and allowable repairs",
      "Joint ownership splits that are unclear on paper",
      "Missing documents for capital improvements",
      "Difficulty estimating balancing payments",
    ],
    included: [
      "Property income and expense computations",
      "Support preparing relevant tax return sections",
      "Notes on common disallowable items",
      "Coordination with capital gains information where needed",
      "Filing support where engaged",
    ],
    process: [
      "List properties and ownership shares",
      "Collect rental and expense evidence",
      "Prepare draft property tax figures",
      "Review, finalise and support submission",
    ],
    documents: [
      "Rent schedules and agent statements",
      "Mortgage interest certificates",
      "Repair and improvement invoices",
      "Insurance and service charge documents",
      "Prior year property tax computations",
    ],
    deadlines:
      "Most property income is reported through self assessment, generally due online by 31 January following the tax year. Some disposals have earlier reporting rules.",
    benefits: [
      "Clearer property tax computations",
      "Better documentation if HMRC asks questions",
      "Reduced year end scrambling across properties",
      "Practical improvements for next year’s records",
    ],
    related: ["landlord-accounting", "self-assessment", "capital-gains-tax"],
    faqs: [
      {
        question: "Do furnished holiday lets have different tax rules?",
        answer:
          "They can. Eligibility and tax treatment depend on the letting pattern and current HMRC rules. We review the facts before applying any holiday let treatment.",
      },
      {
        question: "Can you handle jointly owned property?",
        answer:
          "Yes. We need clear ownership shares and evidence of how income and costs were split.",
      },
    ],
  }),

  defineService({
    slug: "hmo-holiday-let-accounting",
    title: "HMO / Holiday Let Accounting",
    category: "property-services",
    summary:
      "Specialist record keeping and tax ready figures for HMOs and holiday let properties.",
    metaDescription:
      "HMO and holiday let accounting for UK hosts and landlords. Organised income, expenses and tax ready property reports.",
    intro:
      "HMOs and holiday lets often have higher transaction volumes than standard assured shorthold tenancies. We help you keep income platforms, cleaning, maintenance and occupancy costs organised for accounting and tax.",
    whoFor: [
      "HMO landlords with room by room or multi tenant income",
      "Holiday let hosts using booking platforms",
      "Owners with mixed AST, HMO and short let portfolios",
      "Clients needing clearer profitability by property",
    ],
    problems: [
      "Booking platform payouts that are hard to reconcile",
      "High volumes of cleaning, linen and maintenance costs",
      "Uncertainty about holiday let versus standard property treatment",
      "Poor visibility of occupancy driven profit",
    ],
    included: [
      "Income reconciliation from agents and platforms",
      "Expense tracking tailored to HMO and short let cost patterns",
      "Property level summaries where scoped",
      "Tax ready packs for property return preparation",
      "Practical record keeping recommendations",
    ],
    process: [
      "Map each property and income source",
      "Agree bookkeeping frequency and coding structure",
      "Maintain or review records through the year",
      "Prepare year end summaries for tax and accounts",
    ],
    documents: [
      "Booking platform and agent statements",
      "Cleaning, laundry and maintenance invoices",
      "Utility, council tax and licensing costs",
      "Mortgage and insurance statements",
      "Prior tax returns and occupancy records where relevant",
    ],
    deadlines:
      "Reporting usually follows self assessment or company filing dates depending on ownership. Holiday let eligibility and tax rules can change, so we confirm treatment against current HMRC guidance.",
    benefits: [
      "Clearer profit after short let operating costs",
      "Easier reconciliation of platform payouts",
      "Better prepared property tax figures",
      "Stronger documentation for financing or disposal",
    ],
    related: ["landlord-accounting", "property-tax-returns", "self-assessment"],
    faqs: [
      {
        question: "Do you work with Airbnb and similar platforms?",
        answer:
          "Yes. Platform statements are useful starting points. We still need supporting invoices for costs paid outside the platform.",
      },
      {
        question: "Can HMOs and holiday lets sit in the same portfolio report?",
        answer:
          "Yes. We can report separately by property type so you can see how each part of the portfolio is performing.",
      },
    ],
  }),
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

export function getServiceCategoriesWithServices() {
  return serviceCategories.map((category) => ({
    ...category,
    services: category.slugs
      .map((slug) => getServiceBySlug(slug))
      .filter(Boolean),
  }));
}

export function getFeaturedServices(limit = 6) {
  const featuredSlugs = [
    "bookkeeping",
    "annual-accounts",
    "self-assessment",
    "corporation-tax",
    "payroll",
    "landlord-accounting",
  ];
  return featuredSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean)
    .slice(0, limit);
}
