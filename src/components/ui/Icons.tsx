import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/**
 * Shared props for the stroke-based icon set.
 * Icons are decorative by default (`aria-hidden`), so the surrounding
 * element is responsible for providing an accessible name.
 */
function base(props: IconProps) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    focusable: false,
    ...props,
  };
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

export function CalendarCheckIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18m-9.5 6 1.75 1.75L16 14.5" />
    </svg>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="11" cy="11" r="7.5" />
      <path d="m20.5 20.5-4.2-4.2" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 12h15m-6-7 7 7-7 7" />
    </svg>
  );
}

export function HeartIcon({
  filled = false,
  ...props
}: IconProps & { filled?: boolean }) {
  return (
    <svg {...base(props)} fill={filled ? "currentColor" : "none"}>
      <path d="M19.3 13.6c1.4-1.4 2.7-3 2.7-5.1A5.2 5.2 0 0 0 16.8 3c-1.7 0-3 .6-4.8 2.3C10.2 3.6 8.9 3 7.2 3A5.2 5.2 0 0 0 2 8.5c0 2.1 1.3 3.7 2.7 5.1L12 21Z" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor" stroke="none">
      <path d="m12 2.6 2.9 5.9 6.5.9-4.7 4.6 1.1 6.4-5.8-3-5.8 3 1.1-6.4L2.6 9.4l6.5-.9z" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export function BackpackIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
      <path d="M9 6V4.5A2.5 2.5 0 0 1 11.5 2h1A2.5 2.5 0 0 1 15 4.5V6" />
      <path d="M8 20v-6.5A3.5 3.5 0 0 1 11.5 10h1a3.5 3.5 0 0 1 3.5 3.5V20" />
      <path d="M8 14h8" />
    </svg>
  );
}

export function TicketIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M2 9.5a2.5 2.5 0 0 1 0 5V17a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2.5a2.5 2.5 0 0 1 0-5V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2m0 4v2m0 4v2" />
    </svg>
  );
}

export function FlagIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V4s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <path d="M4 22V4" />
    </svg>
  );
}

export function TrendingUpIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m22 7-8.5 8.5-5-5L2 17" />
      <path d="M16 7h6v6" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor" stroke="none">
      <path d="M13.5 22v-8h2.7l.5-3.2h-3.2V8.7c0-.9.3-1.6 1.6-1.6H17V4.2c-.3 0-1.3-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v2.5H7.5V14h2.8v8z" />
    </svg>
  );
}

export function TikTokIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor" stroke="none">
      <path d="M16.9 2h-3.2v13.3a2.5 2.5 0 1 1-2.1-2.5V9.5a5.8 5.8 0 1 0 5.3 5.8V8.6a6.6 6.6 0 0 0 4 1.3V6.7a3.6 3.6 0 0 1-2.9-1.4 3.5 3.5 0 0 1-1.1-2.4z" />
    </svg>
  );
}

export function YouTubeIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor" stroke="none">
      <path d="M22.6 7.2a2.8 2.8 0 0 0-1.9-2C19 4.7 12 4.7 12 4.7s-7 0-8.7.5a2.8 2.8 0 0 0-1.9 2A29.3 29.3 0 0 0 1 12a29.3 29.3 0 0 0 .4 4.8 2.8 2.8 0 0 0 1.9 2c1.7.4 8.7.4 8.7.4s7 0 8.7-.4a2.8 2.8 0 0 0 1.9-2A29.3 29.3 0 0 0 23 12a29.3 29.3 0 0 0-.4-4.8ZM9.8 15.3V8.7l5.7 3.3z" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="m8.5 12.2 2.4 2.4 4.6-4.9" />
    </svg>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function MinusIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 12h14" />
    </svg>
  );
}

export function ArrowLeftIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M20 12H5m7-7-7 7 7 7" />
    </svg>
  );
}

export function EuroIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M18 7.4a6.6 6.6 0 1 0 0 9.2" />
      <path d="M4.2 10.6h9.6M4.2 13.6h9.6" />
    </svg>
  );
}

/** Two hostels side by side — the referral between partners. */
export function HostelsIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M2.5 20.5V10L7 6.5 11.5 10v10.5" />
      <path d="M12.5 20.5V13L17 9.5l4.5 3.5v7.5" />
      <path d="M1.5 20.5h21" />
      <path d="M6 13.5h2M6 17h2M16 16h2" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 22s8-4 8-10V5.5L12 2 4 5.5V12c0 6 8 10 8 10Z" />
    </svg>
  );
}

export function CompassIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="m15.5 8.5-2 5.2-5.2 2 2-5.2z" />
    </svg>
  );
}

export function SparklesIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m12 3 1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9z" />
      <path d="M18.5 16.5 19.3 18.4 21.2 19.2 19.3 20 18.5 21.9 17.7 20 15.8 19.2 17.7 18.4z" />
    </svg>
  );
}

export function RouteIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="6" cy="18.5" r="2.5" />
      <circle cx="18" cy="5.5" r="2.5" />
      <path d="M15.5 5.5H10a3.5 3.5 0 0 0 0 7h4a3.5 3.5 0 0 1 0 7H8.5" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M12 6.8V12l3.4 2" />
    </svg>
  );
}

export function HandshakeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m11 17 2 2a1.6 1.6 0 0 0 2.3 0l4.2-4.3a1.6 1.6 0 0 0 0-2.3L15 7.5H9.8L7 10" />
      <path d="M3 9.5 6.2 6.3h4.3M4 14.2l3 3M7 11.2l3 3" />
    </svg>
  );
}

export function ChartIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 20V4M4 20h16" />
      <path d="M8 20v-6M13 20V8M18 20v-9" />
    </svg>
  );
}

export function FileIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M14 2.5H7.5A1.5 1.5 0 0 0 6 4v16a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 20V6.5z" />
      <path d="M14 2.5V6a.5.5 0 0 0 .5.5H18M9 13h6M9 16.5h4" />
    </svg>
  );
}

export function MegaphoneIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 11v2a2 2 0 0 0 2 2h2l9 4.5V6.5L7 11H5a2 2 0 0 0-2 0Z" />
      <path d="M19 9.5a3 3 0 0 1 0 5M7 15v4.5h3" />
    </svg>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3.5v11m0 0 4-4m-4 4-4-4" />
      <path d="M4.5 17v1.5A2 2 0 0 0 6.5 20.5h11a2 2 0 0 0 2-2V17" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="m3 6 9 6.5L21 6" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5L16 12l4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3 5.2 2 2 0 0 1 5 3z" />
    </svg>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

export function EyeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function EyeOffIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M10 5.7A8.7 8.7 0 0 1 12 5.5c6 0 9.5 6.5 9.5 6.5a17 17 0 0 1-3.2 4M6.4 6.5A17 17 0 0 0 2.5 12S6 18.5 12 18.5a8.9 8.9 0 0 0 3.7-.8" />
      <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2M3 3l18 18" />
    </svg>
  );
}

export function SlidersIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 7h10M18 7h2M4 17h4M12 17h8" />
      <circle cx="16" cy="7" r="2" />
      <circle cx="10" cy="17" r="2" />
    </svg>
  );
}

export function BedIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 18V7M3 12h18v6M3 18h18" />
      <path d="M7.5 12V9.5h5a3 3 0 0 1 3 2.5" />
    </svg>
  );
}

export function KitchenIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 3v7a2.5 2.5 0 0 0 5 0V3M8.5 12.5V21" />
      <path d="M17 3c-1.4 1.6-2 3.4-2 5.5 0 1.7.7 2.8 2 3.2V21" />
    </svg>
  );
}

export function WifiIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M2.5 9a15 15 0 0 1 19 0M5.5 12.5a10.5 10.5 0 0 1 13 0M8.5 16a6 6 0 0 1 7 0" />
      <path d="M12 19.5h.01" />
    </svg>
  );
}

export function SnowflakeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3v18M4 7.5l16 9M20 7.5l-16 9" />
      <path d="M9.5 4.8 12 7l2.5-2.2M9.5 19.2 12 17l2.5 2.2" />
    </svg>
  );
}

export function CoffeeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 8h12v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" />
      <path d="M16 9.5h1.5a2.5 2.5 0 0 1 0 5H16M6 3v2M10 3v2M14 3v2" />
    </svg>
  );
}

export function WashIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="4.5" y="2.5" width="15" height="19" rx="2" />
      <circle cx="12" cy="14" r="4.5" />
      <path d="M8 6h.01M11 6h.01" />
    </svg>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8 6 18M18 6l1.8-1.8" />
    </svg>
  );
}

export function LuggageIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="5" y="7" width="14" height="13" rx="2" />
      <path d="M9 7V4.5A1.5 1.5 0 0 1 10.5 3h3A1.5 1.5 0 0 1 15 4.5V7M8 20v1.5M16 20v1.5" />
    </svg>
  );
}

export function TrainIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="5" y="3" width="14" height="13" rx="3" />
      <path d="M5 10h14M8.5 19.5 6.5 22M15.5 19.5 17.5 22M9 16h6" />
      <path d="M9 6.5h.01M15 6.5h.01" />
    </svg>
  );
}

export function BusIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="4" y="3.5" width="16" height="13" rx="2" />
      <path d="M4 10h16M7 20.5V17M17 20.5V17" />
      <path d="M7.5 13.5h.01M16.5 13.5h.01" />
    </svg>
  );
}

export function FerryIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 18.5c1.6 0 1.6 1.5 3.2 1.5s1.6-1.5 3.3-1.5 1.6 1.5 3.3 1.5 1.6-1.5 3.2-1.5 1.7 1.5 3.3 1.5" />
      <path d="M4.5 16 6 10.5h12L19.5 16M9 10.5V7h6v3.5M12 3.5V7" />
    </svg>
  );
}

export function PlaneIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M10.5 3.2a1.6 1.6 0 0 1 3 0L15 9.5l6 3.3v2l-6-1.5-1 4.4 2 1.6v1.5l-3.5-1-3.5 1v-1.5l2-1.6-1-4.4L4 14.8v-2l6-3.3z" />
    </svg>
  );
}

export function QuoteIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor" stroke="none">
      <path d="M9.5 5C6.5 6.6 5 9.2 5 12.9V19h6.2v-6.4H8.4c0-2.3.9-4 2.7-5.2zm9 0c-3 1.6-4.5 4.2-4.5 7.9V19h6.2v-6.4h-2.8c0-2.3.9-4 2.7-5.2z" />
    </svg>
  );
}

export function FilterIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3.5 5.5h17l-6.5 7.6V20l-4 1.5v-8.4z" />
    </svg>
  );
}

export function MapIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9 4 3.5 6v14L9 18l6 2 5.5-2V4L15 6z" />
      <path d="M9 4v14M15 6v14" />
    </svg>
  );
}

export function ScanIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 8V5.5A2.5 2.5 0 0 1 5.5 3H8M16 3h2.5A2.5 2.5 0 0 1 21 5.5V8M21 16v2.5a2.5 2.5 0 0 1-2.5 2.5H16M8 21H5.5A2.5 2.5 0 0 1 3 18.5V16" />
      <path d="M3 12h18" />
    </svg>
  );
}

export function QrCodeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <path d="M14 14h3v3h-3zM20.5 14v3M14 20.5h3M20.5 20.5h.01" />
    </svg>
  );
}

/**
 * A forward-curving arrow, used where something is passed on from one hostel
 * to the next (referrals). Deliberately unmistakable as an arrow.
 */
export function ReferralArrowIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3.5 19c.8-7.3 5.6-11 14.5-11" />
      <path d="M13.5 3.5 19 8l-5.5 4.5" />
    </svg>
  );
}

export function SmartphoneIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
      <path d="M10.5 18.5h3" />
    </svg>
  );
}

export function WalletIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3.5 7.5A2 2 0 0 1 5.5 5.5H18a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5.5a2 2 0 0 1-2-2Z" />
      <path d="M3.5 9.5h13a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-13" />
      <path d="M15.5 12h.01" />
    </svg>
  );
}

export function NetworkIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="4.5" r="2.2" />
      <circle cx="4.8" cy="17" r="2.2" />
      <circle cx="19.2" cy="17" r="2.2" />
      <path d="M10.5 6.4 6.3 15.1M13.5 6.4l4.2 8.7M7 17h10" />
    </svg>
  );
}

export function BedSingleIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 19v-8.5A2.5 2.5 0 0 1 6.5 8h11a2.5 2.5 0 0 1 2.5 2.5V19" />
      <path d="M4 15h16M4 19h16" />
      <path d="M8.5 8V6.5h7V8" />
    </svg>
  );
}

export function BedDoubleIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 19v-8.5A2.5 2.5 0 0 1 5.5 8h13a2.5 2.5 0 0 1 2.5 2.5V19" />
      <path d="M3 15h18M3 19h18M12 8v7" />
      <path d="M6.5 8V6.5h4V8M13.5 8V6.5h4V8" />
    </svg>
  );
}

/** A hand-drawn curving arrow that points up out of its box. */
export function DoodleArrow({
  className,
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 96 68"
      fill="none"
      aria-hidden
      focusable="false"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        d="M90 64C64 62 34 50 24 12"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <path
        d="M24 9 12 27M24 9l15 12"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
