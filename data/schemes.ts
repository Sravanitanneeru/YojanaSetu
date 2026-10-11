import { Scheme } from '../types';

export const OFFICIAL_SCHEMES: Scheme[] = [
  {
    id: 'pm-vishwakarma',
    code: 'PMV-2023',
    name: 'PM Vishwakarma Scheme',
    nameInHindi: 'पीएम विश्वकर्मा योजना',
    ministry: 'Ministry of MSME & Ministry of Skill Development',
    level: 'Central',
    category: 'Artisans & Craftsmen',
    tagline: 'Collateral-free collateral credit up to ₹3 Lakhs at 5% interest with ₹15,000 free toolkit grant for 18 traditional crafts',
    maxAmount: 300000,
    amountLabel: 'Up to ₹3,00,000 + ₹15,000 Kit',
    subsidyPercentage: 8, // Interest subvention of 8% (charged at only 5%)
    subsidyNote: 'Concessional interest rate of 5% with 8% subvention paid by MoMSME. ₹15,000 e-voucher for modern toolkits + ₹500/day training stipend.',
    interestRate: '5% fixed concessional',
    collateralRequired: false,
    briefDescription: 'A flagship Central Sector Scheme providing end-to-end support to traditional artisans and craftspeople working with their hands and tools. Covers 18 traditional trades including potters, weavers, blacksmiths, carpenters, and tailors.',
    eligibilityExplanation: 'Must be an artisan engaged in one of the 18 specified trades on self-employment basis. Minimum age 18 years. Not availed similar credit schemes (PMEGP, Mudra) in the past 5 years. Limited to one family member.',
    targetBeneficiaries: [
      'Potters (Kumhaar)',
      'Weavers & Tailors (Darzi)',
      'Carpenters (Suthar)',
      'Blacksmiths & Locksmiths (Lohar)',
      'Sculptors & Stone Carvers (Murti-kaar)',
      'Cobblers & Leather Craftsmen (Charmakar)',
      'Barbers & Washermen (Dhobi / Naai)'
    ],
    rules: {
      minAge: 18,
      requiresArtisanTrade: true,
      maxInvestment: 300000,
      allowedBusinessTypes: ['Artisan / Traditional Craft', 'Textiles & Handloom', 'Service / Retail']
    },
    requiredDocuments: [
      'Aadhaar Card',
      'Bank Passbook (Aadhaar linked)',
      'Mobile linked with Aadhaar',
      'Artisan Trade Self-Declaration / Gram Panchayat Verification'
    ],
    keyBenefits: [
      'Recognition as Vishwakarma through PM Vishwakarma Certificate & ID card',
      'Skill upgradation: 5-7 days basic training with ₹500/day stipend',
      'Toolkit incentive: ₹15,000 digital e-voucher',
      'Enterprise credit: Tranche 1 of ₹1 Lakh (18 months) and Tranche 2 of ₹2 Lakhs (30 months) at just 5%',
      'Digital transaction incentive: ₹1 per transaction up to 100 transactions/month'
    ],
    applicationSteps: [
      'Step 1: Mobile and Aadhaar biometric verification at nearest Common Service Center (CSC)',
      'Step 2: Artisan trade registration and Gram Panchayat / Urban Local Body verification',
      'Step 3: Verification by District Implementation Committee (DIC)',
      'Step 4: Completion of 5-day basic training and receipt of ₹15,000 toolkit voucher',
      'Step 5: Direct bank disbursement of ₹1,00,000 1st tranche loan without collateral'
    ],
    officialPortalUrl: 'https://pmvishwakarma.gov.in',
    portalName: 'PM Vishwakarma Official Portal',
    isActive: true,
    sdgGoals: [1, 8, 10]
  },
  {
    id: 'pmegp',
    code: 'PMEGP-KVIC',
    name: "Prime Minister's Employment Generation Programme (PMEGP)",
    nameInHindi: 'प्रधानमंत्री रोजगार सृजन कार्यक्रम',
    ministry: 'Ministry of MSME (implemented via KVIC & DIC)',
    level: 'Central & State',
    category: 'Subsidies & Grants',
    tagline: 'Credit-linked capital subsidy up to 35% on projects up to ₹50 Lakhs for setting up micro-enterprises',
    maxAmount: 5000000,
    amountLabel: 'Up to ₹50 Lakhs (Manufacturing) / ₹20 Lakhs (Service)',
    subsidyPercentage: 35,
    subsidyNote: 'Special Categories (SC, ST, OBC, Minorities, Women, Ex-Servicemen, PwD, Hill/Border Areas) receive 35% subsidy in rural areas and 25% in urban areas. Beneficiary contribution is only 5%.',
    interestRate: 'Normal commercial bank rate (CGTMSE backed)',
    collateralRequired: false,
    briefDescription: 'Major credit-linked subsidy programme to generate self-employment opportunities through establishment of micro-enterprises in non-farm sectors by helping traditional artisans and unemployed rural/urban youth.',
    eligibilityExplanation: 'Any individual above 18 years. For setting up project above ₹10 Lakhs in manufacturing or above ₹5 Lakhs in service sector, minimum educational qualification is 8th pass. Existing units or units already availed government subsidy are not eligible.',
    targetBeneficiaries: [
      'SC / ST / OBC Entrepreneurs',
      'Women Entrepreneurs (All Communities)',
      'Rural & Urban Unemployed Youth',
      'Self Help Groups (SHGs)',
      'Divyangjan (Persons with Disability)'
    ],
    rules: {
      minAge: 18,
      maxInvestment: 5000000,
      allowedBusinessTypes: ['Manufacturing', 'Food Processing', 'Service / Retail', 'Textiles & Handloom', 'Artisan / Traditional Craft']
    },
    requiredDocuments: [
      'Aadhaar Card',
      'PAN Card',
      'Caste / Community Certificate (for SC/ST/OBC/Minority subsidy)',
      'Special Category Certificate (for PwD / Ex-servicemen if applicable)',
      'Educational Qualification Certificate (8th pass certificate if project > ₹10L)',
      'Detailed Project Report (DPR / Business Plan)',
      'Rural Area Certificate (issued by Gram Panchayat for 35% rural subsidy)'
    ],
    keyBenefits: [
      'Highest capital subsidy in India: Up to 35% non-refundable margin money grant',
      'Own investment needed is only 5% of project cost for special category entrepreneurs (10% for general)',
      'Banks finance 90-95% of total project cost',
      'Free Entrepreneurship Development Programme (EDP) training included',
      'Second loan up to ₹1 Crore for upgradation of existing successful PMEGP units with 15-20% subsidy'
    ],
    applicationSteps: [
      'Step 1: Formulate Detailed Project Report (DPR) with estimated capital expenditure & working capital',
      'Step 2: Submit online application at KVIC PMEGP e-Portal with agency choice (DIC/KVIC/KVIB)',
      'Step 3: District Level Task Force Committee (DLTFC) scrutinizes and forwards proposal to chosen bank',
      'Step 4: Bank branch sanctions and disburses loan after sanction letter issuance',
      'Step 5: Complete 10-day EDP training online or offline; KVIC releases margin money subsidy into 3-year term deposit'
    ],
    officialPortalUrl: 'https://www.kviconline.gov.in/pmegp/',
    portalName: 'KVIC PMEGP e-Portal',
    isActive: true,
    sdgGoals: [1, 8, 10]
  },
  {
    id: 'stand-up-india',
    code: 'SUI-SIDBI',
    name: 'Stand-Up India Scheme',
    nameInHindi: 'स्टैंड-अप इंडिया योजना',
    ministry: 'Department of Financial Services, Ministry of Finance',
    level: 'Central',
    category: 'Women Entrepreneurs',
    tagline: 'Composite bank loans from ₹10 Lakhs to ₹1 Crore for SC, ST, and Women entrepreneurs for greenfield ventures',
    maxAmount: 10000000,
    amountLabel: '₹10 Lakhs to ₹1 Crore',
    subsidyPercentage: 15,
    subsidyNote: 'Margin money support can be converged with state subsidies so borrower contribution can be as low as 10-15%. Backed by National Credit Guarantee Trustee Company (NCGTC).',
    interestRate: 'Lowest applicable bank rate (Base Rate + 3% + Tenor Premium)',
    collateralRequired: false,
    briefDescription: 'Facilitates bank loans between ₹10 Lakhs and ₹1 Crore to at least one Scheduled Caste (SC) or Scheduled Tribe (ST) borrower and at least one Woman borrower per bank branch for setting up a greenfield enterprise in manufacturing, services, agri-allied activities, or trading.',
    eligibilityExplanation: 'SC/ST and/or Woman entrepreneurs above 18 years of age. Loans under the scheme are only available for greenfield (first-time) ventures. In case of non-individual enterprises, 51% shareholding must be held by SC/ST or Woman.',
    targetBeneficiaries: [
      'Women Entrepreneurs (All Castes)',
      'Scheduled Caste (SC) Entrepreneurs',
      'Scheduled Tribe (ST) Entrepreneurs'
    ],
    rules: {
      minAge: 18,
      allowedCategories: ['SC', 'ST', 'General', 'OBC', 'Minority', 'EWS'], // Women from any category or SC/ST men
      requiresSpecialGroup: true,
      minInvestment: 1000000,
      maxInvestment: 10000000,
      allowedBusinessTypes: ['Manufacturing', 'Food Processing', 'Service / Retail', 'Agriculture & Allied', 'Textiles & Handloom']
    },
    requiredDocuments: [
      'Aadhaar & PAN Card',
      'Caste Certificate (for SC/ST males; not required for general women)',
      'Proof of Business Address / Rent Agreement / Industrial shed allotment',
      'Project Report & Balance Sheet Projections for 3-5 years',
      'Partnership Deed / Incorporation Certificate (if enterprise is not sole proprietorship)',
      'Pollution Clearance / NOC where applicable'
    ],
    keyBenefits: [
      'Direct access to ₹10 Lakh to ₹1 Crore credit across 1.4+ lakh commercial bank branches',
      'Repayable in 7 years with maximum moratorium period of 18 months',
      'Covered by Credit Guarantee Scheme for Stand-Up India (CGSUI)',
      'Handholding support through SIDBI connect centers, NABARD, and DIC'
    ],
    applicationSteps: [
      'Step 1: Register on Stand-Up Mitra portal (standupmitra.in)',
      'Step 2: Choose handholding support agency if DPR is not ready, or apply directly as "Ready Borrower"',
      'Step 3: Select preferred bank branch and submit DPR with financial projections',
      'Step 4: Bank processes application and conducts appraisal within 3-4 weeks',
      'Step 5: Sanction and disbursement of composite loan (term loan + working capital limit)'
    ],
    officialPortalUrl: 'https://www.standupmitra.in',
    portalName: 'Stand-Up Mitra Portal',
    isActive: true,
    sdgGoals: [1, 5, 8, 10]
  },
  {
    id: 'pm-mudra-shishu',
    code: 'PMMY-SHISHU',
    name: 'Pradhan Mantri Mudra Yojana (Shishu)',
    nameInHindi: 'पीएम मुद्रा योजना (शिशु)',
    ministry: 'Department of Financial Services, Ministry of Finance',
    level: 'Central',
    category: 'Loans & Credit',
    tagline: 'Micro-loans up to ₹50,000 with zero collateral and zero processing fee for tiny businesses and street vendors',
    maxAmount: 50000,
    amountLabel: 'Up to ₹50,000',
    interestRate: 'Mudra concessional rate (8.5% - 11% depending on bank)',
    collateralRequired: false,
    briefDescription: 'Designed for early-stage micro-enterprises and vendors needing quick seed capital to buy initial inventory, basic tools, raw materials, or a mobile cart without bureaucratic red tape.',
    eligibilityExplanation: 'Any Indian citizen engaged in or proposing non-farm income generating micro-activity (vegetable selling, tea stall, tailoring, small repair, pottery, handloom). No minimum education required. No collateral or third-party guarantee needed.',
    targetBeneficiaries: [
      'Street Vendors & Hawkers',
      'Artisans & Handloom Workers',
      'Rural & Peri-urban Micro-vendors',
      'Women Home-based Workers'
    ],
    rules: {
      minAge: 18,
      maxInvestment: 50000,
      allowedBusinessTypes: ['Service / Retail', 'Artisan / Traditional Craft', 'Food Processing', 'Textiles & Handloom', 'Manufacturing', 'Agriculture & Allied']
    },
    requiredDocuments: [
      'Aadhaar Card / Voter ID',
      'Bank Account Passbook (past 6 months if existing)',
      'Quotation of machinery/goods to be purchased',
      'Proof of business location / Self-declaration of vending'
    ],
    keyBenefits: [
      'Zero collateral and zero guarantor requirement',
      'Zero loan processing fee and zero upfront charges',
      'Repayment flexibility up to 3 to 5 years',
      'Mudra Debit Card provided for hassle-free working capital withdrawals',
      'Builds initial credit history enabling quick graduation to Mudra Kishor'
    ],
    applicationSteps: [
      'Step 1: Collect quotation of tools, cart, or inventory to be bought',
      'Step 2: Visit nearest Public Sector Bank, Regional Rural Bank (RRB), or apply via JanSamarth portal',
      'Step 3: Fill single-page Mudra Shishu application form',
      'Step 4: Branch manager conducts brief verification of business activity',
      'Step 5: Loan sanctioned and disbursed within 7-10 working days'
    ],
    officialPortalUrl: 'https://www.mudra.org.in',
    portalName: 'MUDRA Portal & JanSamarth',
    isActive: true,
    sdgGoals: [1, 8, 10]
  },
  {
    id: 'pm-mudra-kishor',
    code: 'PMMY-KISHOR',
    name: 'Pradhan Mantri Mudra Yojana (Kishor)',
    nameInHindi: 'पीएम मुद्रा योजना (किशोर)',
    ministry: 'Department of Financial Services, Ministry of Finance',
    level: 'Central',
    category: 'Loans & Credit',
    tagline: 'Working capital and equipment loans from ₹50,000 to ₹5,00,000 for growing micro-enterprises',
    maxAmount: 500000,
    amountLabel: '₹50,000 to ₹5,00,000',
    interestRate: '8.5% - 11.5% per annum',
    collateralRequired: false,
    briefDescription: 'Targeted at micro-enterprises that have already established their business and now require capital to expand, purchase industrial sewing machines, food processing equipment, commercial refrigeration, or raw materials.',
    eligibilityExplanation: 'Micro-entrepreneurs with an existing operational setup or well-planned new business requiring credit between ₹50,000 and ₹5 Lakhs. Satisfactory credit record and clear business model required.',
    targetBeneficiaries: [
      'Small Manufacturing Workshops',
      'Tailoring Boutiques & Garment Units',
      'Bakery & Packaged Snack Makers',
      'Repair Shops & Service Centers'
    ],
    rules: {
      minAge: 18,
      minInvestment: 50000,
      maxInvestment: 500000,
      allowedBusinessTypes: ['Manufacturing', 'Food Processing', 'Service / Retail', 'Textiles & Handloom', 'Artisan / Traditional Craft', 'Agriculture & Allied']
    },
    requiredDocuments: [
      'Aadhaar Card & PAN Card',
      'Bank Account Statement (last 6 months)',
      'Proof of Business (Udyam Registration / Shop & Establishment license)',
      'Sales tax / GST returns (if registered) or estimated sales ledger',
      'Quotations of machinery or equipment from supplier'
    ],
    keyBenefits: [
      'No collateral security required under CGFMU guarantee',
      'Affordable interest rates without exploitative local moneylenders',
      'Composite loan combining term loan for machinery and cash credit for stock',
      'Convenient repayment tenure of 36 to 60 months'
    ],
    applicationSteps: [
      'Step 1: Obtain machine quotation from authorized vendor and gather 6 months bank statement',
      'Step 2: Apply online on JanSamarth portal (jansamarth.in) under Mudra Kishor category',
      'Step 3: Receive digital In-Principle Sanction Letter',
      'Step 4: Visit assigned bank branch for document verification',
      'Step 5: Bank disburses machinery payment directly to supplier and credits working capital'
    ],
    officialPortalUrl: 'https://www.jansamarth.in',
    portalName: 'JanSamarth National Portal',
    isActive: true,
    sdgGoals: [1, 8, 10]
  },
  {
    id: 'pm-mudra-tarun',
    code: 'PMMY-TARUN',
    name: 'Pradhan Mantri Mudra Yojana (Tarun & Tarun Plus)',
    nameInHindi: 'पीएम मुद्रा योजना (तरुण)',
    ministry: 'Department of Financial Services, Ministry of Finance',
    level: 'Central',
    category: 'Loans & Credit',
    tagline: 'Growth finance from ₹5 Lakhs up to ₹20 Lakhs for mature micro-enterprises with successful repayment history',
    maxAmount: 2000000,
    amountLabel: '₹5 Lakhs to ₹20 Lakhs',
    interestRate: '9% - 12% per annum',
    collateralRequired: false,
    briefDescription: 'Provides substantial working capital and capital expenditure credit for established micro-entrepreneurs ready to scale production capacity, hire local staff, and serve regional markets.',
    eligibilityExplanation: 'Operational micro and small enterprises seeking expansion capital above ₹5 Lakhs up to ₹20 Lakhs (Union Budget enhanced limit for entrepreneurs who have successfully repaid prior Tarun loans). Must have clean repayment record and viable cash flows.',
    targetBeneficiaries: [
      'Scaling Micro-factories',
      'Wholesale & Retail Distributors',
      'Commercial Food Processing Units',
      'Engineering Job-work Centers'
    ],
    rules: {
      minAge: 18,
      minInvestment: 500000,
      maxInvestment: 2000000,
      allowedBusinessTypes: ['Manufacturing', 'Food Processing', 'Service / Retail', 'Textiles & Handloom', 'Agriculture & Allied']
    },
    requiredDocuments: [
      'Aadhaar & PAN of Proprietor/Partners',
      'Udyam Registration Certificate',
      'Audited Balance Sheets (last 2 years) & Projected Cash Flows',
      'GST returns and 12-month Bank Current Account statement',
      'Machinery proforma invoice and factory lease deed'
    ],
    keyBenefits: [
      'Collateral-free credit backed by Credit Guarantee Fund for Micro Units (CGFMU)',
      'Extended credit limit up to ₹20 Lakhs under new Tarun Plus provision',
      'Competitive interest rates and customized repayment moratorium up to 12 months'
    ],
    applicationSteps: [
      'Step 1: Prepare audited accounts and machine acquisition plan',
      'Step 2: Submit application via JanSamarth or direct commercial bank MSME desk',
      'Step 3: Bank manager conducts unit inspection and financial viability assessment',
      'Step 4: Sanction order issued within 14-21 days and funds released'
    ],
    officialPortalUrl: 'https://www.mudra.org.in',
    portalName: 'Mudra Portal',
    isActive: true,
    sdgGoals: [8, 9]
  },
  {
    id: 'pmfme',
    code: 'PMFME-MOFPI',
    name: 'PM Formalisation of Micro Food Processing Enterprises (PMFME)',
    nameInHindi: 'पीएम सूक्ष्म खाद्य उद्योग उन्नयन योजना',
    ministry: 'Ministry of Food Processing Industries (MoFPI)',
    level: 'Central & State',
    category: 'Food & Agriculture',
    tagline: '35% credit-linked capital subsidy up to ₹10 Lakhs for food processing micro-units (pickles, spices, grains, dairy)',
    maxAmount: 3000000,
    amountLabel: 'Up to ₹10 Lakhs Subsidy (Project up to ₹30L+)',
    subsidyPercentage: 35,
    subsidyNote: 'Credit-linked capital subsidy at 35% of eligible project cost with maximum ceiling of ₹10 Lakhs per enterprise. Seed capital of ₹40,000 per SHG member for food processing working capital.',
    interestRate: 'Standard commercial priority sector rate',
    collateralRequired: false,
    briefDescription: 'Part of the Atmanirbhar Bharat Abhiyan to bring unorganized micro-food processing units into the formal sector. Focuses on "One District One Product" (ODOP) produce like spices, millets, honey, mango pulp, edible oils, bakery, and pulses.',
    eligibilityExplanation: 'Existing micro food processing entrepreneurs, Self Help Groups (SHGs), Farmer Producer Organizations (FPOs), and Producer Co-operatives. Must be involved in food processing. Individual units must invest at least 10% own contribution.',
    targetBeneficiaries: [
      'Micro Food Processors (Papad, Pickle, Masala, Flour mills)',
      'Rural Women SHGs in Food Processing',
      'Organic & Traditional Agri-product Makers',
      'Dairy & Bakery Micro-enterprises'
    ],
    rules: {
      minAge: 18,
      allowedBusinessTypes: ['Food Processing', 'Agriculture & Allied'],
      maxInvestment: 4000000
    },
    requiredDocuments: [
      'Aadhaar Card & PAN Card',
      'FSSAI Registration or undertaking to obtain upon sanction',
      'Udyam Registration Certificate',
      'Land/Rent Agreement of processing premises',
      'Detailed Project Report (DPR) on ODOP / food processing activity',
      'Quotation of food grade machinery (SS304 stainless steel etc.)'
    ],
    keyBenefits: [
      '35% direct capital grant credited to bank loan account',
      'Free technical training in food safety standards, packaging, and FSSAI hygiene norms',
      'Access to Common Incubation Centers and shared testing labs',
      'Branding & marketing support under national brand umbrella'
    ],
    applicationSteps: [
      'Step 1: Contact District Resource Person (DRP) assigned by State Nodal Agency for free DPR preparation',
      'Step 2: Register on PMFME portal (pmfme.mofpi.gov.in) with DRP assistance',
      'Step 3: Verification by District Level Committee headed by District Magistrate',
      'Step 4: Bank loan sanction with automated 35% subsidy claim generation',
      'Step 5: Machinery installation and subsidy credited to loan account as back-ended subsidy'
    ],
    officialPortalUrl: 'https://pmfme.mofpi.gov.in',
    portalName: 'PMFME Official Portal',
    isActive: true,
    sdgGoals: [1, 2, 8, 12]
  },
  {
    id: 'mahila-samridhi',
    code: 'MSY-NBCFDC',
    name: 'Mahila Samridhi Yojana (NBCFDC)',
    nameInHindi: 'महिला समृद्धि योजना',
    ministry: 'Ministry of Social Justice & Empowerment (via NBCFDC)',
    level: 'Central & State',
    category: 'SC/ST & Backward Classes',
    tagline: 'Concessional micro-credit up to ₹1,40,000 at only 4% annual interest for women from backward classes',
    maxAmount: 140000,
    amountLabel: 'Up to ₹1,40,000 per Woman',
    subsidyPercentage: 6, // Low interest differential
    subsidyNote: 'Interest rate charged to beneficiary is only 4% per annum. 95% of project cost is financed by NBCFDC/State Channelizing Agency.',
    interestRate: '4% per annum simple interest',
    collateralRequired: false,
    briefDescription: 'A focused micro-finance scheme providing concessional loans to women entrepreneurs belonging to Other Backward Classes (OBC) living below double the poverty line, enabling economic self-reliance through micro-trades.',
    eligibilityExplanation: 'Woman entrepreneur belonging to Backward Classes as per Central/State OBC list. Annual family income should be below ₹3,00,000. Age between 18 and 55 years.',
    targetBeneficiaries: [
      'OBC Women Entrepreneurs',
      'Women Artisans & Tailors',
      'Rural Dairy & Poultry Keepers',
      'Petty Traders & Vegetable Sellers'
    ],
    rules: {
      minAge: 18,
      maxAge: 55,
      allowedGenders: ['Female'],
      allowedCategories: ['OBC', 'Minority', 'SC', 'ST'],
      maxInvestment: 140000,
      allowedBusinessTypes: ['Service / Retail', 'Artisan / Traditional Craft', 'Textiles & Handloom', 'Food Processing', 'Agriculture & Allied']
    },
    requiredDocuments: [
      'Aadhaar Card',
      'OBC / Caste Certificate issued by competent authority',
      'Income Certificate (family income under ₹3 Lakh/year)',
      'Bank Account Details',
      'Passport size photograph'
    ],
    keyBenefits: [
      'Extremely low interest rate of 4% per annum (far below microfinance MFI rates of 24%)',
      'Loan repayment in 36 to 48 easy monthly installments',
      'Implementation through State Channelising Agencies (SCAs) and rural banks',
      '95% loan coverage, beneficiary contributes only 5%'
    ],
    applicationSteps: [
      'Step 1: Obtain income and OBC certificate from local Tehsil office',
      'Step 2: Apply through State Backward Classes Development Corporation or regional rural bank',
      'Step 3: Field verification by welfare inspector',
      'Step 4: Loan amount disbursed directly into savings bank account'
    ],
    officialPortalUrl: 'https://nbcfdc.gov.in',
    portalName: 'NBCFDC Portal',
    isActive: true,
    sdgGoals: [1, 5, 10]
  },
  {
    id: 'nsfdc-micro-credit',
    code: 'NSFDC-MCS',
    name: 'NSFDC Micro Credit Scheme (For SC Entrepreneurs)',
    nameInHindi: 'एनएसएफडीसी सूक्ष्म ऋण योजना (अनुसूचित जाति)',
    ministry: 'Ministry of Social Justice & Empowerment',
    level: 'Central',
    category: 'SC/ST & Backward Classes',
    tagline: 'Direct micro-finance up to ₹1,40,000 at 5% interest per annum for Scheduled Caste entrepreneurs',
    maxAmount: 140000,
    amountLabel: 'Up to ₹1,40,000',
    interestRate: '5% per annum for male, 4% for female SC borrowers',
    collateralRequired: false,
    briefDescription: 'Targeted economic development scheme specifically designed to meet credit requirements of Scheduled Caste persons living below poverty line or double the poverty line for petty business, crafts, and transport services.',
    eligibilityExplanation: 'Applicant must belong to Scheduled Caste (SC). Annual family income should not exceed ₹3,00,000 (rural and urban). Age must be at least 18 years.',
    targetBeneficiaries: [
      'Scheduled Caste (SC) Youth & Women',
      'Sanitation Workers & Dependents',
      'SC Artisans, Mechanics & Vendors'
    ],
    rules: {
      minAge: 18,
      allowedCategories: ['SC'],
      maxInvestment: 140000
    },
    requiredDocuments: [
      'Aadhaar Card',
      'SC Caste Certificate from authorized revenue officer',
      'Income Certificate (Annual income < ₹3,00,000)',
      'Bank Account Passbook with Aadhaar linkage',
      'Brief description of micro-venture'
    ],
    keyBenefits: [
      'Direct concessional credit at only 4-5% annual interest',
      'Moratorium period of 3 months and repayment tenure up to 3 years',
      '90% project cost financed by NSFDC',
      'Free vocational skill training provided prior to loan disbursal'
    ],
    applicationSteps: [
      'Step 1: Contact State Scheduled Castes Finance & Development Corporation (SC/ST Nigam) in district',
      'Step 2: Submit application form with SC certificate and income proof',
      'Step 3: Screening by District Selection Committee',
      'Step 4: Direct fund transfer to beneficiary account'
    ],
    officialPortalUrl: 'https://nsfdc.nic.in',
    portalName: 'NSFDC National Portal',
    isActive: true,
    sdgGoals: [1, 8, 10]
  },
  {
    id: 'samarth-textiles',
    code: 'SAMARTH-TEX',
    name: 'SAMARTH (Scheme for Capacity Building in Textile Sector)',
    nameInHindi: 'समर्थ योजना (वस्त्र क्षेत्र कौशल)',
    ministry: 'Ministry of Textiles',
    level: 'Central',
    category: 'Skill Training',
    tagline: '100% subsidized certified skill training in textiles, apparel, and handlooms with wage compensation',
    maxAmount: 50000,
    amountLabel: '100% Free Training + Wage Compensation',
    subsidyPercentage: 100,
    subsidyNote: 'Completely free training course accredited under NSQF, with biometric attendance, free assessment certification, and minimum 70% wage placement guarantee.',
    interestRate: 'N/A (Full Grant)',
    collateralRequired: false,
    briefDescription: 'Flagship initiative aiming to provide demand-driven, placement-oriented National Skills Qualifications Framework (NSQF) compliant skilling programmes to incentivize and supplement efforts in creating jobs in handloom, handicrafts, and apparel.',
    eligibilityExplanation: 'Any Indian citizen above 14 years seeking career or micro-enterprise in handlooms, spinning, weaving, or apparel manufacturing. Preference given to SC, ST, Women, Minorities, and BPL families.',
    targetBeneficiaries: [
      'Traditional Handloom Weavers & Assistants',
      'Rural Women Seeking Garmenting Skills',
      'Youth entering Textile Micro-enterprises',
      'Unemployed SC/ST Artisans'
    ],
    rules: {
      minAge: 16,
      allowedBusinessTypes: ['Textiles & Handloom', 'Artisan / Traditional Craft', 'Manufacturing']
    },
    requiredDocuments: [
      'Aadhaar Card',
      'Bank Account Details',
      'Age Proof (School certificate or voter ID)',
      'Category Certificate (if claiming SC/ST/Minority quota)'
    ],
    keyBenefits: [
      '100% free practical training in specialized textile trades (stitching, weaving, pattern making)',
      'Aadhaar Enabled Biometric Attendance System ensuring quality standards',
      'Industry-recognized government skill certificate',
      'Wage compensation stipend during training period',
      'Direct linkage to Mudra loan for setting up home tailoring/weaving unit upon graduation'
    ],
    applicationSteps: [
      'Step 1: Search nearest SAMARTH accredited training center on samarth-textiles.gov.in',
      'Step 2: Register online with Aadhaar number and preferred trade',
      'Step 3: Undergo 30 to 45 days practical training in workshop',
      'Step 4: Assessment by third-party Textile Sector Skill Council',
      'Step 5: Receive certification and micro-enterprise startup handholding'
    ],
    officialPortalUrl: 'https://samarth-textiles.gov.in',
    portalName: 'SAMARTH Official Portal',
    isActive: true,
    sdgGoals: [4, 8, 10]
  },
  {
    id: 'sfurti-msme',
    code: 'SFURTI-CLUST',
    name: 'SFURTI (Scheme of Fund for Regeneration of Traditional Industries)',
    nameInHindi: 'स्फूर्ति योजना (पारंपरिक उद्योग संवर्धन)',
    ministry: 'Ministry of MSME',
    level: 'Central',
    category: 'Artisans & Craftsmen',
    tagline: 'Up to ₹2.5 Crore to ₹5 Crore grant for artisan clusters to establish Common Facility Centers (CFC)',
    maxAmount: 25000000,
    amountLabel: 'Up to ₹2.5 Cr - ₹5 Cr Cluster Grant',
    subsidyPercentage: 90,
    subsidyNote: 'Central government provides up to 90% grant funding for Common Facility Centers (CFC), advanced machinery, raw material banks, and market exposure for traditional artisan clusters.',
    interestRate: 'N/A (Cluster Grant)',
    collateralRequired: false,
    briefDescription: 'Organizes traditional artisans and craftspersons into sustainable clusters to make them competitive, provide advanced shared machinery in Common Facility Centers, product design, packaging, and direct market access.',
    eligibilityExplanation: 'Artisan groups, SHG federations, Cooperatives, or NGOs working with a cluster of minimum 500 artisans (Regular cluster) or 500-1000+ artisans (Major cluster) in bamboo, khadi, honey, terracotta, brass, or coir.',
    targetBeneficiaries: [
      'Artisan Collectives & SHG Federations',
      'Pottery, Terracotta & Ceramic Clusters',
      'Handloom & Khadi Weavers Cooperatives',
      'Agro-processing & Coir Artisan Groups'
    ],
    rules: {
      minAge: 18,
      allowedBusinessTypes: ['Artisan / Traditional Craft', 'Textiles & Handloom', 'Food Processing'],
      requiresArtisanTrade: true
    },
    requiredDocuments: [
      'Artisan Collective Registration / SHG Federation List',
      'Artisan Aadhaar & Voter IDs',
      'Cluster Diagnostic Study Report (DSR)',
      'Land availability certificate for Common Facility Center (lease/owned)'
    ],
    keyBenefits: [
      'State-of-the-art machinery provided at 90% grant subsidy in shared common center',
      'Elimination of middle-men through collective marketing and e-commerce onboarding',
      'Raw material bulk procurement bank reduces input costs by 25-40%',
      'Artisans double their take-home income within 18 months of cluster activation'
    ],
    applicationSteps: [
      'Step 1: Contact Technical Agency (TA) or Nodal Agency (KVIC/Coir Board) in your state',
      'Step 2: Prepare Diagnostic Study Report (DSR) and cluster DPR',
      'Step 3: Approval by Scheme Steering Committee (SSC) at Ministry of MSME, New Delhi',
      'Step 4: Grant disbursed in milestone tranches for CFC construction and machine purchase',
      'Step 5: Artisans begin shared production with modern finishing'
    ],
    officialPortalUrl: 'https://sfurti.msme.gov.in',
    portalName: 'SFURTI MSME Portal',
    isActive: true,
    sdgGoals: [1, 8, 9, 10]
  },
  {
    id: 'cgtmse-msme',
    code: 'CGTMSE-2024',
    name: 'Credit Guarantee Scheme for Micro & Small Enterprises (CGTMSE)',
    nameInHindi: 'सूक्ष्म एवं लघु उद्यम क्रेडिट गारंटी योजना',
    ministry: 'Ministry of MSME & SIDBI',
    level: 'Central',
    category: 'Loans & Credit',
    tagline: 'Collateral-free bank loans up to ₹5 Crore with up to 85% sovereign guarantee coverage for women & SC/ST units',
    maxAmount: 50000000,
    amountLabel: 'Up to ₹5 Crore Collateral-Free',
    subsidyPercentage: 85,
    subsidyNote: 'Guarantee coverage up to 85% for loans to Women, SC/ST, PwD, and ZED-certified MSMEs. Reduces annual guarantee fee by 10-50% for marginalized entrepreneurs.',
    interestRate: 'Competitive MSME bank rate',
    collateralRequired: false,
    briefDescription: 'Enables banks and NBFCs to extend collateral-free term loans and working capital to micro and small manufacturing and service enterprises by providing institutional guarantee up to ₹5 Crore.',
    eligibilityExplanation: 'New or existing Micro and Small Enterprises engaged in manufacturing or service sector. Borrower does not need to pledge land, building, or third-party guarantee to the lending bank.',
    targetBeneficiaries: [
      'Micro Manufacturers & Machine Shops',
      'Women-Owned Small Enterprises',
      'SC / ST Business Owners',
      'Service & Tech Startups'
    ],
    rules: {
      minAge: 18,
      minInvestment: 500000,
      maxInvestment: 50000000,
      allowedBusinessTypes: ['Manufacturing', 'Food Processing', 'Service / Retail', 'Textiles & Handloom']
    },
    requiredDocuments: [
      'Udyam Registration Certificate',
      'PAN Card of Business and Proprietor',
      'Audited Financial Statements / Income Tax Returns',
      'Detailed Project Feasibility Report',
      'Bank Current Account Statements (last 12 months)'
    ],
    keyBenefits: [
      'Zero collateral security needed even for large loans up to ₹5 Crore',
      'Bank cannot ask for property mortgage or third-party guarantee',
      '85% guarantee coverage gives banks high confidence to sanction loans to first-generation entrepreneurs'
    ],
    applicationSteps: [
      'Step 1: Obtain Udyam Registration number on udyamregistration.gov.in',
      'Step 2: Approach commercial bank MSME relationship manager with project report',
      'Step 3: Request bank to route loan under CGTMSE guarantee cover',
      'Step 4: Bank sanctions loan and lodges guarantee request on CGTMSE portal',
      'Step 5: Borrower pays nominal annual guarantee fee (AGF) and receives fund disbursement'
    ],
    officialPortalUrl: 'https://www.cgtmse.in',
    portalName: 'CGTMSE Trust Portal',
    isActive: true,
    sdgGoals: [8, 9]
  }
];
