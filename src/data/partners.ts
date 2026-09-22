/**
 * Partner-facing content for /partners, /partners/benefits and
 * /partners/resources.
 *
 * PRODUCT MODEL: each partner hostel gets ONE NEXT STOP QR code to display at
 * reception. Guests scan it with their own phone and a digital NEXT PASS is
 * generated for them. Nothing is printed per guest, no codes are created by
 * hand and there is no software for staff to log into. The QR carries the
 * hostel's partner/referral identifier, so onward bookings are attributed
 * automatically.
 *
 * DEMO DATA — draft product copy. Deliberately contains no commission rates,
 * conversion percentages or booking-volume claims, because none have been
 * measured yet.
 */

import type { IconKey } from "./next-pass";

export type PartnerValue = {
  icon:
    | IconKey
    | "globe"
    | "bookings"
    | "handshake"
    | "chart"
    | "file"
    | "megaphone";
  title: string;
  description: string;
};

export const whyJoin: PartnerValue[] = [
  {
    icon: "bookings",
    title: "More direct bookings",
    description:
      "Guests arriving with a NEXT PASS book with you rather than through a marketplace, so the reservation lands in your system on your terms.",
  },
  {
    icon: "handshake",
    title: "Traveller referrals between hostels",
    description:
      "Every guest who scans your QR code carries your hostel's identifier onward — and every partner is doing the same back towards you.",
  },
  {
    icon: "globe",
    title: "Exposure beyond your own city",
    description:
      "Your hostel appears on destination pages, routes and guides that travellers read while planning the leg before yours.",
  },
  {
    icon: "scan",
    title: "One QR code, nothing to run",
    description:
      "You display a single code at reception. The guest's own phone does the rest — no per-guest printing, no codes to type, no new system to learn.",
  },
];

export type FlowStep = {
  step: number;
  title: string;
  description: string;
  /** Who does this part — useful for showing how little lands on the desk. */
  actor: "hostel" | "traveller" | "network";
};

export const partnerFlow: FlowStep[] = [
  {
    step: 1,
    title: "Traveller checks in",
    description:
      "A guest arrives and checks in exactly as they do today. Nothing about your existing process changes.",
    actor: "traveller",
  },
  {
    step: 2,
    title: "Reception points at the QR code",
    description:
      "One sentence while handing over the key: your next stop starts with that code on the desk.",
    actor: "hostel",
  },
  {
    step: 3,
    title: "The guest scans it with their phone",
    description:
      "The QR opens a NEXT STOP page in their browser. No app to install and nothing for your staff to operate.",
    actor: "traveller",
  },
  {
    step: 4,
    title: "A digital NEXT PASS is generated",
    description:
      "A unique code is created and shown on the guest's phone, carrying the identifier from your QR code.",
    actor: "network",
  },
  {
    step: 5,
    title: "They book the next partner hostel",
    description:
      "The code unlocks the direct rate at their next stop, so the onward booking goes straight to another partner.",
    actor: "traveller",
  },
  {
    step: 6,
    title: "The referral is attributed to you",
    description:
      "Because the pass records where it was generated, the onward booking is credited to your hostel automatically.",
    actor: "network",
  },
];

/** The three things that actually happen at the desk. */
export const receptionDeskSteps = [
  {
    title: "Point at the code",
    description: "One line during a check-in you are already doing.",
  },
  {
    title: "The guest scans",
    description: "Their phone camera opens the NEXT STOP page.",
  },
  {
    title: "Done",
    description: "The pass is on their phone. Nothing comes back to the desk.",
  },
];

export const foundingProgram: PartnerValue[] = [
  {
    icon: "sparkles",
    title: "Shape the product",
    description:
      "Founding partners help decide how the QR flow, the pass and the listing pages actually work before the network scales.",
  },
  {
    icon: "check",
    title: "Founding Partner badge",
    description:
      "Your listing is marked as one of the hostels that started the network, on your page and in search results.",
  },
  {
    icon: "route",
    title: "Priority placement on launch routes",
    description:
      "The first routes we publish are built around the cities where founding partners operate.",
  },
  {
    icon: "users",
    title: "Direct line to the team",
    description:
      "A named contact rather than a support queue, for as long as the founding phase runs.",
  },
];

export const partnerBenefits: PartnerValue[] = [
  {
    icon: "bookings",
    title: "More direct bookings",
    description:
      "A NEXT PASS booking is a direct booking. You keep the guest relationship, the data and control over the rate you offer.",
  },
  {
    icon: "handshake",
    title: "Traveller referrals",
    description:
      "Backpackers move in predictable corridors. The network turns that movement into a referral loop between hostels on the same route.",
  },
  {
    icon: "globe",
    title: "Global exposure",
    description:
      "Listings, destination pages, routes and guides put your hostel in front of travellers who are still deciding where to go.",
  },
  {
    icon: "scan",
    title: "Low-friction reception flow",
    description:
      "Display one QR code and point at it. No per-guest printing, no manual codes, no dashboard anyone has to keep open during a busy shift.",
  },
  {
    icon: "chart",
    title: "Referral tracking built into the code",
    description:
      "Your QR carries your hostel's identifier, so every pass generated from it records where it came from and onward bookings are attributed without manual work.",
  },
  {
    icon: "sparkles",
    title: "Founding partner advantages",
    description:
      "Hostels joining during launch help define the product and are listed as founding partners of the network.",
  },
];

export type PartnerComparisonRow = {
  aspect: string;
  platform: string;
  nextStop: string;
};

export const partnerComparison: PartnerComparisonRow[] = [
  {
    aspect: "Booking relationship",
    platform: "The platform owns the guest and the data",
    nextStop: "The booking is direct; the guest is yours",
  },
  {
    aspect: "How guests find you",
    platform: "Ranked search, influenced by paid placement",
    nextStop: "Referred by another hostel the traveller already trusts",
  },
  {
    aspect: "When the traveller decides",
    platform: "Browsing at home, comparing dozens of listings",
    nextStop: "At a reception desk, one city before yours",
  },
  {
    aspect: "What reception has to do",
    platform: "Inventory and rate management across channels",
    nextStop: "Display one QR code and point guests at it",
  },
  {
    aspect: "What happens after checkout",
    platform: "The relationship ends",
    nextStop: "Your guest carries a pass that points at another partner",
  },
  {
    aspect: "Commercial terms",
    platform: "Published commission rates",
    nextStop: "Agreed individually with founding partners during launch",
  },
];

export type PartnerResource = {
  slug: string;
  title: string;
  description: string;
  format: string;
  icon: "file" | "ticket" | "users" | "check" | "megaphone" | "sparkles" | "route" | "scan";
  /** Whether the file is ready to hand out yet. */
  status: "available" | "coming-soon";
};

export const partnerResources: PartnerResource[] = [
  {
    slug: "qr-code-kit",
    title: "Your QR Code Kit",
    description:
      "Your hostel's NEXT STOP QR code as print-ready reception signage, a desk stand and a sticker, in the sizes that actually fit a check-in desk.",
    format: "PDF + PNG · print pack",
    icon: "scan",
    status: "available",
  },
  {
    slug: "reception-guide",
    title: "Reception Guide",
    description:
      "The full flow at the desk, from where to place the QR code to the one sentence that gets a guest to scan it.",
    format: "PDF · 6 pages",
    icon: "file",
    status: "available",
  },
  {
    slug: "how-next-pass-works",
    title: "How NEXT PASS Works",
    description:
      "A one-page explainer of the network model, written for owners and managers rather than travellers.",
    format: "PDF · 1 page",
    icon: "ticket",
    status: "available",
  },
  {
    slug: "staff-quick-guide",
    title: "Staff Quick Guide",
    description:
      "A printable card for behind the desk: what to say, where the code lives, and what to do if a guest asks a question you cannot answer.",
    format: "PDF · A5 card",
    icon: "users",
    status: "available",
  },
  {
    slug: "partner-faq",
    title: "Partner FAQ",
    description:
      "The questions hostels ask most often about QR codes, referrals, rates and how bookings are attributed.",
    format: "Web page",
    icon: "check",
    status: "available",
  },
  {
    slug: "marketing-materials",
    title: "Marketing Materials",
    description:
      "Reception signage, table cards and social templates you can print or post as-is.",
    format: "ZIP · print + digital",
    icon: "megaphone",
    status: "coming-soon",
  },
  {
    slug: "branding",
    title: "NEXT STOP Branding",
    description:
      "Logo files, colour values and the short version of how the brand should and should not be used.",
    format: "ZIP · logos + guidelines",
    icon: "sparkles",
    status: "coming-soon",
  },
  {
    slug: "referral-guide",
    title: "Referral Guide",
    description:
      "How your QR identifier maps to passes, how onward bookings are attributed, and how to read your referral activity.",
    format: "PDF · 4 pages",
    icon: "route",
    status: "coming-soon",
  },
];

export const bedRanges = [
  "Under 20 beds",
  "20–49 beds",
  "50–99 beds",
  "100+ beds",
];
