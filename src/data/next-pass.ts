/**
 * NEXT PASS product content — shared by the home page, /next-pass,
 * /next-pass/benefits and /how-it-works.
 *
 * PRODUCT MODEL: NEXT PASS is DIGITAL. Each partner hostel has its own
 * NEXT STOP QR code, displayed at reception. A traveller scans it with their
 * phone, a NEXT STOP mobile web page opens, and a unique digital pass code is
 * generated and shown on their phone. There is no app, no physical card and
 * no membership. The QR carries the partner/referral identifier, so the
 * originating hostel is recorded on the pass and credited for the onward
 * booking.
 *
 * DEMO DATA — product copy for the MVP. Sample codes below are illustrations.
 */

export type StepIcon =
  | "backpack"
  | "scan"
  | "pass"
  | "pin"
  | "calendar"
  | "flag";

export type NextPassStep = {
  step: number;
  /** Short all-caps label used on the big timelines. */
  label: string;
  icon: StepIcon;
  title: string;
  description: string;
  /** Longer explanation used on /how-it-works. */
  detail: string[];
  /** Practical notes shown beside the step. */
  notes: string[];
};

export const nextPassSteps: NextPassStep[] = [
  {
    step: 1,
    label: "Stay",
    icon: "backpack",
    title: "Stay at a partner hostel",
    description: "Stay at a NEXT STOP partner hostel.",
    detail: [
      "Everything starts with a stay. Book a NEXT STOP partner hostel however you normally would, arrive, and check in as usual.",
      "There is nothing to sign up for in advance and nothing to install before you travel. Being a guest is the only entry requirement.",
    ],
    notes: [
      "Any partner hostel in any country counts",
      "No account needed to stay",
    ],
  },
  {
    step: 2,
    label: "Scan",
    icon: "scan",
    title: "Scan the QR code at reception",
    description: "Scan the NEXT STOP QR code at reception.",
    detail: [
      "Every partner hostel has its own NEXT STOP QR code on display at reception. Point your phone camera at it — that is the whole interaction.",
      "The QR carries that hostel's identifier, which is how the network knows where your journey continued from.",
    ],
    notes: [
      "Your phone camera is enough — no app to install",
      "Each hostel has its own unique QR code",
    ],
  },
  {
    step: 3,
    label: "Get your pass",
    icon: "pass",
    title: "Get your digital NEXT PASS",
    description: "Your unique digital NEXT PASS code is generated instantly.",
    detail: [
      "The QR opens a NEXT STOP page in your phone's browser. A short flow generates a unique NEXT PASS code and shows it on screen straight away.",
      "The pass lives on your phone. Nothing is printed, nothing is handed over, and there is no membership to manage.",
    ],
    notes: [
      "A unique code, shown on your phone",
      "No app, no physical card, no registration to work through",
    ],
  },
  {
    step: 4,
    label: "Discover",
    icon: "pin",
    title: "Discover your next stop",
    description: "Choose your next destination and participating hostel.",
    detail: [
      "With a pass active, browse where you could go next. Every hostel listed is a partner in the same network, with prices, ratings and the neighbourhood shown up front.",
      "Destination pages carry the practical things reception would tell you: what a bed costs, how to get there and which cities pair well with the one you are in.",
    ],
    notes: [
      "Suggested onward cities on every destination page",
      "Routes group cities into ready-made itineraries",
    ],
  },
  {
    step: 5,
    label: "Book",
    icon: "calendar",
    title: "Unlock your next booking",
    description:
      "Use your NEXT PASS code to unlock the available partner benefit.",
    detail: [
      "Enter your NEXT PASS code when you book. It unlocks the partner's direct rate — the price the hostel sets when it is not paying a platform commission.",
      "You book with the hostel rather than through a marketplace, which is what makes the lower price possible in the first place.",
    ],
    notes: [
      "The direct rate is set by the hostel, not by NEXT STOP",
      "You see both prices before you commit",
    ],
  },
  {
    step: 6,
    label: "Continue",
    icon: "flag",
    title: "Continue your journey",
    description:
      "Arrive at your next hostel and continue through the network.",
    detail: [
      "You arrive at the next partner hostel, check in, and the loop starts again: scan that hostel's QR code and pick the city after that.",
      "That is the whole idea. The network follows the journey instead of ending at checkout.",
    ],
    notes: [
      "Each stay can begin the next hop",
      "The hostel whose QR you scanned is credited for the onward booking",
    ],
  },
];

/**
 * The condensed version shown on the home page: scan → pass → book → continue.
 * Discovery is folded into the booking step to keep the row to five.
 */
export type JourneyBeat = {
  step: number;
  label: string;
  icon: StepIcon;
  title: string;
  description: string;
};

export const homeJourney: JourneyBeat[] = [
  {
    step: 1,
    label: "Stay",
    icon: "backpack",
    title: "Stay at a partner hostel",
    description: "Check in at any NEXT STOP partner hostel.",
  },
  {
    step: 2,
    label: "Scan",
    icon: "scan",
    title: "Scan the QR code",
    description: "Reception has a NEXT STOP QR code. Scan it with your phone.",
  },
  {
    step: 3,
    label: "Get your pass",
    icon: "pass",
    title: "Get your NEXT PASS",
    description: "A unique digital pass code appears on your phone.",
  },
  {
    step: 4,
    label: "Book",
    icon: "calendar",
    title: "Book your next stop",
    description: "Use the code to unlock the partner rate at your next city.",
  },
  {
    step: 5,
    label: "Continue",
    icon: "flag",
    title: "Continue your journey",
    description: "Arrive, scan again, and keep moving through the network.",
  },
];

/** SCAN → GET PASS → DISCOVER → BOOK → TRAVEL → REPEAT */
export const loopLabels = [
  "Scan",
  "Get pass",
  "Discover",
  "Book",
  "Travel",
  "Repeat",
];

/**
 * Sample pass used by the digital-pass UI. Illustration only — this code is
 * made up and is not issued by any hostel.
 */
export const samplePass = {
  code: "NS-VLC-4K7Q",
  status: "Active",
  issuedCity: "Valencia",
  issuedCountry: "Spain",
  issuedHostelSlug: "casa-naranja-valencia",
};

export type PartnerPerkIcon = "bookings" | "globe" | "community";

export type PartnerPerk = {
  icon: PartnerPerkIcon;
  label: string;
};

export const partnerPerks: PartnerPerk[] = [
  { icon: "bookings", label: "More bookings" },
  { icon: "globe", label: "Global exposure" },
  { icon: "community", label: "Trusted community" },
];

/* ---------- /next-pass ---------- */

export type IconKey =
  | "euro"
  | "shield"
  | "compass"
  | "sparkles"
  | "ticket"
  | "users"
  | "route"
  | "clock"
  | "check"
  | "scan"
  | "phone";

export type ValueItem = {
  icon: IconKey;
  title: string;
  description: string;
};

export const travellerReasons: ValueItem[] = [
  {
    icon: "euro",
    title: "A better price at the next hostel",
    description:
      "The code unlocks the hostel's own direct rate instead of a marketplace rate, so the saving comes out of commission rather than out of the hostel.",
  },
  {
    icon: "shield",
    title: "Somewhere you can trust, sight unseen",
    description:
      "Every hostel in the network was vouched for by another hostel in it. That is a very different filter from a review score alone.",
  },
  {
    icon: "compass",
    title: "Your next stop, already researched",
    description:
      "Destination pages carry onward suggestions, realistic prices and route ideas, so deciding where to go next takes minutes.",
  },
  {
    icon: "phone",
    title: "Nothing to install, nothing to carry",
    description:
      "Scanning the QR opens a web page, not an app store. The pass sits on your phone with no account, no card and nothing to keep track of.",
  },
];

export const networkPoints: ValueItem[] = [
  {
    icon: "users",
    title: "Hostels recommend hostels",
    description:
      "Partners know which places in the next city actually look after travellers. The network is built on those recommendations rather than on advertising spend.",
  },
  {
    icon: "route",
    title: "The journey is the product",
    description:
      "Most booking platforms optimise a single night. NEXT STOP is built around the fact that backpackers move on, usually within a week.",
  },
  {
    icon: "scan",
    title: "One QR code per hostel",
    description:
      "The code at reception identifies the hostel, so the pass it generates carries where the journey continued from — without anyone typing anything in.",
  },
];

export type JourneyStep = {
  city: string;
  country: string;
  action: string;
};

export const exampleJourney: JourneyStep[] = [
  {
    city: "Valencia",
    country: "Spain",
    action:
      "You check into a partner hostel in El Carmen and scan the NEXT STOP QR code at reception. A pass appears on your phone.",
  },
  {
    city: "Alicante",
    country: "Spain",
    action:
      "You use the code to book the partner hostel's direct rate, and travel down the coast.",
  },
  {
    city: "Málaga",
    country: "Spain",
    action:
      "At reception in Alicante you scan again for a fresh pass, and book onward to Málaga.",
  },
  {
    city: "Granada",
    country: "Spain",
    action:
      "The loop continues — each stay unlocks the next one for as long as you keep moving.",
  },
];

export type SavingsRow = {
  hostelSlug: string;
  nights: number;
};

/** Worked example used on /next-pass — figures come from the demo hostel data. */
export const savingsExample: SavingsRow[] = [
  { hostelSlug: "santa-barbara-alicante", nights: 2 },
  { hostelSlug: "malagueta-surf-malaga", nights: 3 },
  { hostelSlug: "albayzin-view-granada", nights: 3 },
];

export const faqPreviewIds = [
  "what-is-next-pass",
  "how-do-i-get-one",
  "do-i-need-an-app",
  "how-long-is-it-valid",
];

/* ---------- /next-pass/benefits ---------- */

export const travellerBenefits: ValueItem[] = [
  {
    icon: "euro",
    title: "Better hostel prices",
    description:
      "Partner hostels set a direct rate for NEXT PASS holders that sits below the price they list on commission-based platforms.",
  },
  {
    icon: "shield",
    title: "A trusted hostel network",
    description:
      "Hostels join by recommendation. Each partner has been vouched for by another partner that already works with travellers on the same route.",
  },
  {
    icon: "compass",
    title: "Easy next-destination discovery",
    description:
      "Every destination page suggests where to go next, with journey times and realistic bed prices rather than a list of ads.",
  },
  {
    icon: "sparkles",
    title: "Local recommendations",
    description:
      "Guides and city pages are written around what reception staff actually tell guests: where to eat, what to skip, when things open.",
  },
  {
    icon: "scan",
    title: "One scan, no paperwork",
    description:
      "Point your camera at the QR code at reception and the pass is generated there and then. Nothing to fill in, nothing to collect.",
  },
  {
    icon: "phone",
    title: "Digital, not another card in your wallet",
    description:
      "The pass lives on your phone. No app to install, no physical card to lose and no membership to manage.",
  },
  {
    icon: "route",
    title: "A network that moves with you",
    description:
      "Each stay can open the next one, so the longer your trip, the more useful the network becomes.",
  },
];

export type ComparisonRow = {
  aspect: string;
  regular: string;
  nextPass: string;
};

export const travellerComparison: ComparisonRow[] = [
  {
    aspect: "Who you book with",
    regular: "A marketplace that takes a commission from the hostel",
    nextPass: "The hostel directly, using a code from another partner",
  },
  {
    aspect: "How the next city gets chosen",
    regular: "Search results ranked by paid placement and popularity",
    nextPass: "Onward suggestions from the network the hostel belongs to",
  },
  {
    aspect: "Getting started",
    regular: "Create an account, then browse",
    nextPass: "Scan the QR code at reception — that is the whole setup",
  },
  {
    aspect: "What you carry",
    regular: "An app and a login",
    nextPass: "A digital pass on your phone; nothing to install or print",
  },
  {
    aspect: "What happens after checkout",
    regular: "The relationship ends with the booking",
    nextPass: "The stay can unlock the next one on the same trip",
  },
];
