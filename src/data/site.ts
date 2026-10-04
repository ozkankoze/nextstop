export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "Hostels", href: "/hostels" },
  { label: "Next Pass", href: "/next-pass" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Become a Partner", href: "/partners" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export type FooterColumn = {
  title: string;
  links: NavLink[];
};

export const footerColumns: FooterColumn[] = [
  {
    title: "Explore",
    links: [
      { label: "Destinations", href: "/destinations" },
      { label: "Hostels", href: "/hostels" },
      { label: "Routes", href: "/routes" },
      { label: "Travel Guides", href: "/guides" },
    ],
  },
  {
    title: "Next Pass",
    links: [
      { label: "What is NEXT PASS?", href: "/next-pass" },
      { label: "Get your first pass", href: "/next-pass/first-pass" },
      { label: "How it Works", href: "/how-it-works" },
      { label: "Benefits", href: "/next-pass/benefits" },
      { label: "FAQs", href: "/faq" },
    ],
  },
  {
    title: "Partners",
    links: [
      { label: "Become a Partner", href: "/partners" },
      { label: "Partner Benefits", href: "/partners/benefits" },
      { label: "Resources", href: "/partners/resources" },
      { label: "Partner Login", href: "/partners/login" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];

export type SocialLink = {
  label: string;
  href: string;
  icon: "instagram" | "facebook" | "tiktok" | "youtube";
};

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { label: "TikTok", href: "https://tiktok.com", icon: "tiktok" },
  { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
];

export const contactSubjects = [
  "Traveler Support",
  "Hostel Partnership",
  "Booking Question",
  "NEXT PASS",
  "Other",
];

export const siteTagline = "The booking platform that benefits everyone.";
