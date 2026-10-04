/**
 * FAQ content for /faq and the preview block on /next-pass.
 *
 * PRODUCT MODEL: NEXT PASS is digital — generated on the traveller's phone
 * after scanning a partner hostel's NEXT STOP QR code at reception. No
 * physical card, no membership.
 *
 * DEMO DATA — draft product answers for the MVP.
 */

export type FaqItem = {
  id: string;
  question: string;
  answer: string[];
};

export type FaqCategory = {
  slug: string;
  title: string;
  items: FaqItem[];
};

export const faqCategories: FaqCategory[] = [
  {
    slug: "next-pass",
    title: "NEXT PASS",
    items: [
      {
        id: "what-is-next-pass",
        question: "What is a NEXT PASS?",
        answer: [
          "A NEXT PASS is a digital travel pass that connects you to your next stay in the NEXT STOP network. It is a unique code, generated on your phone, that identifies you as someone travelling through the network.",
          "Entering that code when you book your next destination unlocks the partner hostel's NEXT STOP rate — the price they can offer when they are not paying a big booking platform's fees.",
        ],
      },
      {
        id: "how-do-i-get-one",
        question: "How do I get a NEXT PASS?",
        answer: [
          "Scan the NEXT STOP QR code at the reception of the partner hostel you are staying at. Your phone camera is enough.",
          "Scanning opens NEXT STOP on your phone, a short flow generates your unique pass code, and it appears on screen straight away.",
        ],
      },
      {
        id: "is-it-a-card",
        question: "Is a NEXT PASS a physical card?",
        answer: [
          "No. Nothing is printed and nothing is handed over at reception. The pass is digital and lives on your phone.",
          "The hostel's only part in it is displaying its NEXT STOP QR code where guests can see it.",
        ],
      },
      {
        id: "how-long-is-it-valid",
        question: "How long is my NEXT PASS valid?",
        answer: [
          "A pass is intended for the next leg of your trip rather than for indefinite use. The validity period is shown on the pass itself when it is generated.",
          "Exact terms are being finalised with the founding partners and will be published here before the network opens to bookings.",
        ],
      },
      {
        id: "another-country",
        question: "Can I use it in another country?",
        answer: [
          "Yes. The network is not limited by country — a pass generated in Valencia works at any partner hostel, including those in the Balkans.",
        ],
      },
      {
        id: "lost-pass",
        question: "What if I lose access to my pass?",
        answer: [
          "The pass is a code on your phone, so the simplest fix is to save it: screenshot it, or save the pass when you are offered the option.",
          "If you lose it entirely while still at the hostel, scan the same QR code again.",
        ],
      },
    ],
  },
  {
    slug: "booking",
    title: "Booking",
    items: [
      {
        id: "how-bookings-work",
        question: "How do hostel bookings work?",
        answer: [
          "You choose a partner hostel, enter your NEXT PASS code, and the NEXT STOP rate is shown next to the regular rate so you can see the difference before committing.",
          "The booking is made with the hostel itself. NEXT STOP connects the two of you rather than sitting in the middle of the transaction.",
        ],
      },
      {
        id: "do-i-need-an-account",
        question: "Do I need an account?",
        answer: [
          "No. A NEXT PASS code is not tied to an account, and you can browse destinations, hostels, routes and guides without signing up for anything.",
        ],
      },
      {
        id: "cancel-a-booking",
        question: "Can I cancel a booking?",
        answer: [
          "Cancellation terms are set by each hostel and shown on the hostel's page before you book. Most partners offer free cancellation up to 48 hours before arrival.",
          "Because the booking is made directly with the hostel, cancellations are handled by them.",
        ],
      },
      {
        id: "booking-for-friends",
        question: "Can I book for more than one person?",
        answer: [
          "Yes. Choose the number of guests when you search, and the hostel page will show which rooms can take your group.",
        ],
      },
    ],
  },
  {
    slug: "hostels",
    title: "Hostels",
    items: [
      {
        id: "which-hostels-accept",
        question: "Which hostels accept NEXT PASS?",
        answer: [
          "Every hostel listed on NEXT STOP is a network partner and accepts a valid pass. The network is launching in Spain, with Valencia first, and extends into the Balkan cities on our routes.",
        ],
      },
      {
        id: "where-is-the-qr",
        question: "Where do I find the QR code in a hostel?",
        answer: [
          "At reception — on the desk, behind it, or on a sign in the entrance. Partner hostels are given their QR code as signage to put somewhere guests will see it during check-in.",
          "If you cannot spot it, ask at the desk.",
        ],
      },
      {
        id: "how-are-hostels-chosen",
        question: "How are hostels chosen?",
        answer: [
          "Hostels join the network by recommendation from an existing partner, and are reviewed before being listed. The intention is a small, trusted network rather than an exhaustive directory.",
        ],
      },
      {
        id: "hostel-not-listed",
        question: "My favourite hostel is not listed — can I suggest it?",
        answer: [
          "Please do. Send it through the contact form and we will reach out to them, or point them at the partner application form directly.",
        ],
      },
    ],
  },
  {
    slug: "payments",
    title: "Payments",
    items: [
      {
        id: "what-does-a-pass-cost",
        question: "What does a NEXT PASS cost?",
        answer: [
          "Nothing. A NEXT PASS is free — scanning the hostel's QR code generates it on your phone, and there is nothing to buy at reception.",
          "You only ever pay the hostel for the stay you book, at the rate shown before you confirm.",
        ],
      },
      {
        id: "how-do-i-pay",
        question: "How do I pay for my stay?",
        answer: [
          "Payment is handled by the hostel under its own terms — some take payment at check-in, others take a deposit at the time of booking.",
          "The payment flow is not live yet. This site is currently a preview of the NEXT STOP network.",
        ],
      },
      {
        id: "currency",
        question: "What currency are prices shown in?",
        answer: [
          "Prices across the site are shown in euros. Hostels in countries outside the eurozone may charge in local currency at the point of payment.",
        ],
      },
    ],
  },
  {
    slug: "partners",
    title: "Partners",
    items: [
      {
        id: "how-to-become-partner",
        question: "How does a hostel join the network?",
        answer: [
          "Through the application form on the partner page. We review each application and speak to every hostel before listing it.",
          "Hostels joining during the launch phase are onboarded as Founding Partners.",
        ],
      },
      {
        id: "what-does-hostel-need",
        question: "What does a hostel actually have to do?",
        answer: [
          "Display its NEXT STOP QR code at reception and point guests towards it. That is the operational part.",
          "There is nothing to print per guest, no codes to create by hand and no software for staff to log into.",
        ],
      },
      {
        id: "what-does-it-cost-hostels",
        question: "What does it cost a hostel?",
        answer: [
          "Commercial terms are being agreed individually with founding partners during the launch phase. We are not publishing rates or commission figures until those conversations are complete.",
        ],
      },
      {
        id: "reception-effort",
        question: "How much work is this for reception staff?",
        answer: [
          "One sentence during a check-in that is already happening: point the guest at the QR code. The guest's phone does the rest.",
        ],
      },
      {
        id: "how-referrals-tracked",
        question: "How are referrals attributed to my hostel?",
        answer: [
          "Your QR code carries your hostel's identifier. Any pass generated from it records where it came from, so the onward booking is attributed to you without anyone typing anything in.",
        ],
      },
    ],
  },
  {
    slug: "travel",
    title: "Travel",
    items: [
      {
        id: "where-does-network-operate",
        question: "Where does the network operate?",
        answer: [
          "The launch market is Spain, starting in Valencia and expanding along the east coast and into Andalusia. The Balkan cities on our routes are part of the same network.",
        ],
      },
      {
        id: "is-info-reliable",
        question: "How reliable is the destination information?",
        answer: [
          "Destination pages, routes and guides are written as editorial content and updated periodically. Journey times, prices and opening details are indicative — always check current timetables and tickets before travelling.",
        ],
      },
      {
        id: "solo-travel",
        question: "Is NEXT STOP useful if I am travelling solo?",
        answer: [
          "That is who it is built for. The network is designed around the way independent travellers actually move: a few nights at a time, deciding the next city once they have arrived in the current one.",
        ],
      },
    ],
  },
];

export const allFaqItems: FaqItem[] = faqCategories.flatMap((c) => c.items);

export function getFaqItems(ids: string[]): FaqItem[] {
  return ids
    .map((id) => allFaqItems.find((item) => item.id === id))
    .filter((item): item is FaqItem => Boolean(item));
}
