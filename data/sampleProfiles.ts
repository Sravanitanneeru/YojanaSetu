import { UserProfile } from '../types';

export const SAMPLE_PROFILES: (UserProfile & { title: string; story: string; expectedBestMatches: string[] })[] = [
  {
    id: 'profile-sunita',
    title: 'Sunita Devi (Potter & Clay Artisan)',
    story: '38-year-old traditional potter from UP. Needs ₹2 Lakhs for an electric potter wheel and clay mixer.',
    name: 'Sunita Devi',
    age: 38,
    gender: 'Female',
    category: 'OBC',
    state: 'Uttar Pradesh',
    areaType: 'Rural',
    businessType: 'Artisan / Traditional Craft',
    tradeType: 'Potter',
    education: 'Below 8th',
    investmentNeeded: 200000,
    documentsHeld: [
      'Aadhaar Card',
      'Bank Passbook (Aadhaar linked)',
      'Mobile linked with Aadhaar',
      'Artisan Trade Self-Declaration / Gram Panchayat Verification'
    ],
    differentlyAbled: false,
    language: 'hi',
    expectedBestMatches: ['PM Vishwakarma Scheme', 'Mahila Samridhi Yojana (NBCFDC)']
  },
  {
    id: 'profile-ramesh',
    title: 'Ramesh Kumar (Small Food Processing Unit)',
    story: '26-year-old from Bihar starting a small Makhana and spices packaging unit needing ₹6 Lakhs.',
    name: 'Ramesh Kumar',
    age: 26,
    gender: 'Male',
    category: 'SC',
    state: 'Bihar',
    areaType: 'Rural',
    businessType: 'Food Processing',
    tradeType: 'Other',
    education: '10th Pass',
    investmentNeeded: 600000,
    documentsHeld: [
      'Aadhaar Card',
      'PAN Card',
      'Caste / Community Certificate (for SC/ST/OBC/Minority subsidy)',
      'Rural Area Certificate (issued by Gram Panchayat for 35% rural subsidy)',
      'Educational Qualification Certificate (8th pass certificate if project > ₹10L)',
      'Detailed Project Report (DPR / Business Plan)'
    ],
    differentlyAbled: false,
    language: 'en',
    expectedBestMatches: [
      "Prime Minister's Employment Generation Programme (PMEGP)",
      'PM Formalisation of Micro Food Processing Enterprises (PMFME)',
      'Pradhan Mantri Mudra Yojana (Tarun & Tarun Plus)'
    ]
  },
  {
    id: 'profile-fatima',
    title: 'Fatima Bi (Boutique Tailoring Unit)',
    story: '32-year-old woman in Hyderabad expanding a boutique tailoring unit with 3 sewing machines needing ₹3.5 Lakhs.',
    name: 'Fatima Bi',
    age: 32,
    gender: 'Female',
    category: 'Minority',
    state: 'Telangana',
    areaType: 'Urban',
    businessType: 'Textiles & Handloom',
    tradeType: 'Tailor',
    education: '12th Pass',
    investmentNeeded: 350000,
    documentsHeld: [
      'Aadhaar Card',
      'PAN Card',
      'Bank Account Statement (last 6 months)',
      'Proof of Business (Udyam Registration / Shop & Establishment license)',
      'Mobile linked with Aadhaar'
    ],
    differentlyAbled: false,
    language: 'te',
    expectedBestMatches: [
      'Pradhan Mantri Mudra Yojana (Kishor)',
      "Prime Minister's Employment Generation Programme (PMEGP)",
      'SAMARTH (Scheme for Capacity Building in Textile Sector)'
    ]
  },
  {
    id: 'profile-kiran',
    title: 'Kiran Nayak (Handloom Master Weaver)',
    story: '44-year-old tribal weaver in Odisha buying a modern wooden loom and organic yarn stock for ₹2.5 Lakhs.',
    name: 'Kiran Nayak',
    age: 44,
    gender: 'Male',
    category: 'ST',
    state: 'Odisha',
    areaType: 'Rural',
    businessType: 'Artisan / Traditional Craft',
    tradeType: 'Weaver',
    education: '8th Pass',
    investmentNeeded: 250000,
    documentsHeld: [
      'Aadhaar Card',
      'Bank Passbook (Aadhaar linked)',
      'Caste / Community Certificate (for SC/ST/OBC/Minority subsidy)',
      'Artisan Trade Self-Declaration / Gram Panchayat Verification',
      'Rural Area Certificate (issued by Gram Panchayat for 35% rural subsidy)'
    ],
    differentlyAbled: false,
    language: 'en',
    expectedBestMatches: [
      'PM Vishwakarma Scheme',
      "Prime Minister's Employment Generation Programme (PMEGP)",
      'SAMARTH (Scheme for Capacity Building in Textile Sector)'
    ]
  },
  {
    id: 'profile-rajesh',
    title: 'Rajesh Varma (Small Fabrication Workshop)',
    story: '34-year-old diploma holder starting a small metal fabrication workshop needing ₹8 Lakhs.',
    name: 'Rajesh Varma',
    age: 34,
    gender: 'Male',
    category: 'General',
    state: 'Gujarat',
    areaType: 'Urban',
    businessType: 'Manufacturing',
    tradeType: 'Other',
    education: 'Graduate & Above',
    investmentNeeded: 800000,
    documentsHeld: [
      'Aadhaar Card',
      'PAN Card',
      'Educational Qualification Certificate (8th pass certificate if project > ₹10L)',
      'Detailed Project Report (DPR / Business Plan)',
      'Proof of Business (Udyam Registration / Shop & Establishment license)'
    ],
    differentlyAbled: false,
    language: 'en',
    expectedBestMatches: [
      "Prime Minister's Employment Generation Programme (PMEGP)",
      'Pradhan Mantri Mudra Yojana (Tarun & Tarun Plus)',
      'Credit Guarantee Scheme for Micro & Small Enterprises (CGTMSE)'
    ]
  }
];
