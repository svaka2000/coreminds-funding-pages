// ---------------------------------------------------------------------------
// Education funding programs (ESA / scholarship / charter instructional funds)
// ---------------------------------------------------------------------------
//
// ⚠️  READ THIS BEFORE CHANGING ANY `status` FIELD.
//
// These programs only pay providers that are approved and active. If CoreMinds
// advertises that a program covers us before our approval is finished, a family
// who believes it will try to pay, the purchase will not go through, and the
// parent is the one left dealing with it. It also burns our relationship with
// the program office that has to approve us.
//
// So the rule is simple and absolute:
//
//   status: 'live'      -> The program has approved CoreMinds as a provider and
//                          families can pay us through it right now. Only these
//                          get a public page, a sitemap entry, and permission
//                          to say the program covers us.
//   status: 'pending'   -> Application submitted, not yet approved. NO page.
//   status: 'exploring' -> Researched only, not applied. NO page.
//
// The code cannot know whether we are approved; a person decides when to flip
// this. Flip a program to 'live' only after the program has confirmed our
// approval in writing and our listing is visible in ClassWallet, Odyssey, or
// the program's own portal. Never flip it on optimism.
//
// California charter school funds are deliberately NOT in this list. Each
// charter school approves its own vendors, so there is no single switch that
// could honestly say "your charter funds pay us". If a particular school
// approves CoreMinds, add that school as its own entry here.
//
// Nothing is 'live' yet, which is correct. The /funding page still publishes:
// it explains how funding works and says plainly that we are not approved in
// any program yet, and that wording switches automatically once one is live.
// ---------------------------------------------------------------------------

export const PROGRAM_STATUS = {
  LIVE: 'live',
  PENDING: 'pending',
  EXPLORING: 'exploring',
}

export const programs = [
  {
    slug: 'north-carolina-esa-plus',
    status: 'exploring',
    name: 'ESA+',
    fullName: 'North Carolina Education Student Accounts (ESA+)',
    state: 'North Carolina',
    stateAbbr: 'NC',
    platform: 'ClassWallet',
    administrator: 'NC State Education Assistance Authority (NCSEAA)',
    officialUrl: 'https://k12.ncseaa.edu/the-education-student-accounts/current-families/service-providers/',
    metaTitle: 'Using North Carolina ESA+ Funds for Online Tutoring',
    metaDescription:
      'How families in North Carolina’s ESA+ program, for students with disabilities, use their funds for online tutoring through ClassWallet.',
    intro:
      'North Carolina’s ESA+ is for students with disabilities who need special education services. For families who have it, the funds can pay for tutoring through ClassWallet, and a fully online provider based in another state can be approved.',
    // Provider rules: NCSEAA provider support, in writing, September 2026.
    // Eligibility and award amounts: NCSEAA's ESA+ program page.
    verified:
      'Confirmed in writing by the NC ESA+ Provider Support team, September 2026: a fully online tutoring company located outside North Carolina can be approved, because a North Carolina address is only required for providers delivering in-person services. Eligibility and award amounts come from NCSEAA’s ESA+ program page, and tutor requirements from its provider enrollment page.',
    covered: [
      'Tutoring delivered live over video, for students in the program',
      'Providers based outside North Carolina, as long as services are virtual',
      'A company applying once for several tutors, if every tutor holds a teaching certificate or a bachelor’s degree',
    ],
    howItWorks: [
      'Eligible students have a disability and need special education services, confirmed by an Eligibility Determination from a North Carolina public school. The award is $9,000 a year, or $17,000 for certain designated disabilities.',
      'The award is loaded into a ClassWallet account in your name, and you pay approved providers from that balance.',
      'Paying an approved provider this way means nothing out of pocket while your balance covers it, and no reimbursement paperwork.',
    ],
    askFor:
      'If a tutoring provider you want is not in ClassWallet yet, you can ask them to apply. Providers apply through NCSEAA directly. A company whose tutors all meet the credential requirement can apply once for all of them, using the Facility Provider Agreement.',
    tutorRules:
      'Every ESA+ tutor must hold a teaching certificate from any state, current or not, or a bachelor’s degree. Tutoring has to support math, science, English and language arts, social studies, a foreign language, music, or art.',
  },
  {
    slug: 'new-hampshire-efa',
    status: 'exploring',
    name: 'EFA',
    fullName: 'New Hampshire Education Freedom Account (EFA)',
    state: 'New Hampshire',
    stateAbbr: 'NH',
    platform: 'ClassWallet',
    administrator: "Children's Scholarship Fund New Hampshire (CSFNH)",
    officialUrl: 'https://nh.scholarshipfund.org/apply/nh-education-freedom-accounts/',
    metaTitle: 'Using New Hampshire EFA Funds for Online Tutoring',
    metaDescription:
      'How New Hampshire Education Freedom Account families use EFA funds for online tutoring through ClassWallet, and how out-of-state online providers get approved.',
    intro:
      'New Hampshire EFA funds run through ClassWallet, and CSFNH decides which providers appear there. Out-of-state, fully online tutoring providers are eligible.',
    verified:
      'Confirmed in writing by CSFNH order approvals, September 2026: they approve providers that are out of state and fully online, and already work with several in that format. Every vendor appearing in the ClassWallet marketplace for the NH EFA must first go through the CSFNH application process.',
    covered: [
      'Live online tutoring from a provider in another state',
      'Providers already approved in the same fully remote format',
    ],
    howItWorks: [
      'Your EFA award is administered by CSFNH and spent through ClassWallet.',
      'You find approved providers in the ClassWallet marketplace and pay from your balance.',
      'A provider has to clear the CSFNH application before it can appear there at all.',
    ],
    askFor:
      'Ask a provider whether they have completed the CSFNH application, not just whether they "take EFA". Appearing in ClassWallet is the only thing that makes a purchase processable.',
    tutorRules:
      'CSFNH reviews each provider before approval. Requirements come from CSFNH rather than from ClassWallet.',
  },
  {
    slug: 'west-virginia-hope',
    status: 'exploring',
    name: 'Hope Scholarship',
    fullName: 'West Virginia Hope Scholarship',
    state: 'West Virginia',
    stateAbbr: 'WV',
    platform: 'Hope Scholarship portal',
    administrator: 'West Virginia State Treasurer',
    officialUrl: 'https://hopescholarshipwv.gov/',
    metaTitle: 'Using the West Virginia Hope Scholarship for Online Tutoring',
    metaDescription:
      'How West Virginia Hope Scholarship families use their award for online tutoring, and how an education service provider gets added.',
    intro:
      'The West Virginia Hope Scholarship lets families direct their award to approved education service providers. The provider does not have to be in West Virginia; only the student does.',
    verified:
      'Confirmed in writing by the Hope Scholarship team, September 2026: the program does not require providers to be located in West Virginia, only that students reside there, and a new provider starts by filling out the New Provider Request Form.',
    covered: [
      'Education services from a provider located outside West Virginia',
      'New providers added through the program’s New Provider Request Form',
    ],
    howItWorks: [
      'Your award is managed through the Hope Scholarship parent portal.',
      'Approved providers list their services there, and you direct funds to them.',
      'A provider that is not approved yet starts with the New Provider Request Form.',
    ],
    askFor:
      'If a tutor you want is not an approved Hope provider yet, ask whether they have submitted the New Provider Request Form. That is the first step the program asks for.',
    tutorRules:
      'Anyone in contact with a Hope Scholarship student, including over video, must have a criminal background check. The provider certifies this in the Education Service Provider agreement it signs before accepting funds.',
  },
  {
    slug: 'indiana-esa',
    status: 'exploring',
    name: 'Indiana ESA',
    fullName: 'Indiana Education Scholarship Account (ESA)',
    state: 'Indiana',
    stateAbbr: 'IN',
    platform: 'ClassWallet',
    administrator: 'Indiana Department of Education',
    officialUrl: 'https://www.in.gov/doe/students/indiana-education-scholarship-account-program/',
    metaTitle: 'Using Indiana ESA Funds for Virtual Tutoring',
    metaDescription:
      'How families in the Indiana Education Scholarship Account, which serves students with disabilities and their siblings, use ESA funds for virtual tutoring through ClassWallet.',
    intro:
      'The Indiana ESA is for students with disabilities and their siblings. For families who qualify, the funds can pay for virtual tutoring through ClassWallet.',
    verified:
      'Confirmed in writing by the Indiana Department of Education ESA team, September 2026: the program allows virtual tutoring, and a tutoring company applies as a business, listing each of its tutors by name on its employee listing. Eligibility and award amounts come from the Department’s 2026 ESA FAQ.',
    covered: [
      'Virtual tutoring, for students eligible for the program',
      'A tutoring company applying once as a business, with each tutor named on its employee listing',
    ],
    howItWorks: [
      'Eligible students are those with a disability, and their siblings. A student with a disability may receive up to $20,000 a year, and a sibling up to $8,000.',
      'Parents pay approved providers directly from the student’s account through ClassWallet.',
      'A provider has to complete Indiana’s enrollment before families can pay it from the account.',
    ],
    askFor:
      'Ask whether the provider has finished Indiana enrollment, and whether the specific tutor teaching your student is named on that enrollment.',
    tutorRules:
      'Indiana requires a tutoring company to name each of its tutors on its employee listing. A tutor who is not on the listing is not covered.',
  },
  {
    slug: 'iowa-students-first-esa',
    status: 'exploring',
    name: 'Students First ESA',
    fullName: 'Iowa Students First Education Savings Account (ESA)',
    state: 'Iowa',
    stateAbbr: 'IA',
    platform: 'Odyssey',
    administrator: 'Iowa Department of Education',
    officialUrl: 'https://educate.iowa.gov/pk-12/educational-choice/education-savings-accounts',
    metaTitle: 'Using Iowa Students First ESA Funds for Tutoring',
    metaDescription:
      'How Iowa Students First ESA families can use money left after private school tuition for tutoring, through the Odyssey marketplace.',
    intro:
      'Iowa Students First ESA funds must pay private school tuition and fees first. Money left over after that can pay for other eligible costs, including tutoring, bought through the Odyssey marketplace.',
    verified:
      'Confirmed by the Iowa Department of Education ESA support team, September 2026: vendors work directly with Odyssey for registration and marketplace participation. The tuition rule comes from the Department’s Eligible and Ineligible Expenses guide.',
    covered: [
      'Tutoring, paid from money left after private school tuition and fees',
      'Vendors registered with Odyssey rather than with the Department directly',
    ],
    howItWorks: [
      'Iowa requires ESA funds to pay private school tuition and fees each semester before anything else.',
      'Any money left after that can pay for other eligible costs. Tutoring is on the eligible list.',
      'Every purchase has to go through the Odyssey marketplace. Purchases made anywhere else are not reimbursed.',
    ],
    askFor:
      'Ask whether the provider is registered and live in the Odyssey marketplace for Iowa specifically. Approval in one state does not carry into another.',
    tutorRules:
      'Iowa sets its own eligible and ineligible expense rules. Check the state guidance for what tutoring qualifies.',
  },
  {
    slug: 'utah-fits-all',
    status: 'exploring',
    name: 'Utah Fits All',
    fullName: 'Utah Fits All Scholarship',
    state: 'Utah',
    stateAbbr: 'UT',
    platform: 'Odyssey',
    administrator: 'Odyssey',
    officialUrl: 'https://schools.utah.gov/utahfitsallscholarship',
    metaTitle: 'Using the Utah Fits All Scholarship for Online Tutoring',
    metaDescription:
      'How Utah Fits All families use scholarship funds for online tutoring through Odyssey, and how out-of-state providers get approved.',
    intro:
      'Utah Fits All runs on Odyssey. Odyssey manages provider approval and the marketplace, and it reviews both the business and each individual offering.',
    verified:
      'Confirmed by Utah Education Fits All, September 2026: UEFA is an advocacy organization, not an approval body. Odyssey manages provider and marketplace approvals, and an application filed in another state does not replace the Utah-specific process.',
    covered: [
      'Online tutoring from a provider based outside Utah, subject to Odyssey review',
      'Individual offerings reviewed one by one, not just the business',
    ],
    howItWorks: [
      'Your scholarship funds sit in an Odyssey account.',
      'You search or browse the marketplace and pay from your balance.',
      'Odyssey confirms whether an out-of-state provider meets Utah requirements before listing it.',
    ],
    askFor:
      'Ask whether the provider is approved for Utah specifically. Utah runs its own approval, separate from other states.',
    tutorRules:
      'Odyssey reviews the business and its individual offerings. Questions about eligibility go to Odyssey support for Utah.',
  },
]

// --- The gate. Only enrolled-and-active programs are publishable. -----------
export const livePrograms = programs.filter((p) => p.status === PROGRAM_STATUS.LIVE)

export function getProgram(slug) {
  // Deliberately resolves against livePrograms only, so a pending or exploring
  // program 404s instead of quietly publishing a claim we cannot back.
  return livePrograms.find((p) => p.slug === slug) || null
}

export function getProgramAnyStatus(slug) {
  return programs.find((p) => p.slug === slug) || null
}

// Options for the booking form's optional funding question.
//
// These ask only for the KIND of funding, never a specific program. Some
// programs are limited to students with disabilities (North Carolina's ESA+),
// or to them and their siblings (Indiana's ESA), so asking a family to pick one
// of those by name in a web form would be asking them to disclose a disability
// in the family. We ask about the details one-on-one when we reply, where the
// family decides what to share.
export const fundingOptions = [
  { value: 'state-esa-or-scholarship', label: 'An education savings account or state scholarship' },
  { value: 'california-charter-funds', label: 'California charter school funds' },
  { value: 'other-school-program', label: 'Another school or district program' },
  { value: 'unsure', label: 'Not sure what we have' },
  { value: 'none', label: 'No, paying directly' },
]
