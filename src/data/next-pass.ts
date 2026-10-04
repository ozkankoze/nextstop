/**
 * NEXT PASS product content — shared by the home page, /next-pass,
 * /next-pass/benefits and /how-it-works.
 *
 * PRODUCT MODEL: NEXT PASS is DIGITAL. Each partner hostel has its own
 * NEXT STOP QR code, displayed at reception. A traveller scans it with their
 * phone, NEXT STOP opens on that phone, and a unique digital pass code is
 * generated and shown there. There is no physical card and no
 * membership. The QR carries the partner/referral identifier, so the
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
  /**
   * Turns a phrase inside `description` into a link wherever the step is
   * rendered, so the wording stays in one place.
   */
  descriptionLink?: { text: string; href: string };
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
    description:
      "Stay at a NEXT STOP partner hostel. Whether you booked elsewhere or used your Starter NEXT PASS.",
    descriptionLink: {
      text: "Starter NEXT PASS",
      href: "/next-pass/first-pass",
    },
    detail: [
      "Everything starts with a stay. Book a NEXT STOP partner hostel with a Starter NEXT PASS or however you normally would, arrive, and check in as usual.",
      "There is nothing to sign up for in advance and nothing to arrange before you travel. Being a guest is the only entry requirement.",
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
    description:
      "Scan the NEXT STOP QR code in order to obtain your free NEXT PASS.",
    detail: [
      "Every partner hostel has its own NEXT STOP QR code on display at reception. Point your phone camera at it — that is the whole interaction.",
      "The QR carries that hostel's identifier, which is how the network knows where your journey continued from.",
    ],
    notes: [
      "Your phone camera is all you need",
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
      "Scanning opens NEXT STOP on your phone. A short flow generates a unique NEXT PASS code and shows it on screen straight away.",
      "The pass lives on your phone. Nothing is printed, nothing is handed over, and there is no membership to manage.",
    ],
    notes: [
      "A unique code, shown on your phone",
      "No physical card and no registration to work through",
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
    ],
    notes: [],
  },
  {
    step: 5,
    label: "Book",
    icon: "calendar",
    title: "Unlock your next booking",
    description:
      "Use your NEXT PASS code to unlock the available partner benefit.",
    detail: [
      "Enter your NEXT PASS code when you book. It unlocks the partner's NEXT STOP rate.",
      "Your booking is directly communicated with the hostel and NEXT STOP will not charge a large booking fee. Instead we reward your current hostel with a significant commission and use a small percentage to improve our backpackers eco-system.",
    ],
    notes: ["You see both prices before you commit"],
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
      "Each stay will trigger your NEXT STOP",
      "The hostel whose QR you scanned is rewarded for the onward booking",
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
    description:
      "Ready to move on? Scan the NEXT PASS QR code at the reception with your phone.",
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
    description: "Use the code to unlock the partner rate at your NEXT STOP.",
  },
  {
    step: 5,
    label: "Continue",
    icon: "flag",
    title: "Continue your journey",
    description: "Arrive, scan again, and save at every stop across the network.",
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

export type PartnerPerkIcon =
  | "profit"
  | "globe"
  | "community"
  | "ecosystem";

export type PartnerPerk = {
  icon: PartnerPerkIcon;
  label: string;
};

export const partnerPerks: PartnerPerk[] = [
  { icon: "profit", label: "More profit" },
  { icon: "globe", label: "Global exposure" },
  { icon: "community", label: "Trusted community" },
  { icon: "ecosystem", label: "One connected ecosystem" },
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
  | "phone"
  | "hostels";

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
      "The code unlocks the hostel's own NEXT STOP rate instead of a marketplace rate, so the saving comes out of the booking fee rather than out of the hostel.",
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
    title: "Nothing to carry, nothing to lose",
    description:
      "Scanning the QR code puts the pass straight onto your phone. Nothing to print, nothing to keep in a pocket and nothing to remember at the next desk.",
  },
];

export const networkPoints: ValueItem[] = [
  {
    icon: "hostels",
    title: "Hostels recommend hostels",
    description:
      "Some of our partners know which hostels at the next destination are really worth it. The network is built on those recommendations — and by referring to each other inside our backpacker ecosystem, they get rewarded.",
  },
  {
    icon: "route",
    title: "The journey is the product",
    description:
      "Most booking platforms focus on individual stays. NEXT STOP is built around the way backpackers actually travel: moving from hostel to hostel, discovering new destinations, and making each stop part of a bigger journey.",
  },
  {
    icon: "scan",
    title: "One QR code per hostel",
    description:
      "The QR code at reception links your NEXT PASS to the hostel where you received it, so NEXT STOP can reward the hostels that keep backpackers moving within our community. Our main goal is to save all of us from the extreme booking fees charged by major platforms.",
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
      "You use the code to book the partner hostel's NEXT STOP rate, and travel down the coast.",
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
  "is-it-a-card",
  "how-long-is-it-valid",
];

/* ---------- /next-pass/benefits ---------- */

export const travellerBenefits: ValueItem[] = [
  {
    icon: "euro",
    title: "Better hostel prices",
    description:
      "Partner hostels set a NEXT STOP rate for NEXT PASS holders that sits below the price they have to list on the big booking platforms.",
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
      "The pass lives on your phone. No physical card to lose and no membership to manage.",
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
    regular: "A marketplace charging the hostel a high booking fee",
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
    regular: "A booking reference, and nothing once the stay is over",
    nextPass: "A pass on your phone that already points at the next stop",
  },
  {
    aspect: "What happens after checkout",
    regular: "The relationship ends with the booking",
    nextPass: "The stay can unlock the next one on the same trip",
  },
];
