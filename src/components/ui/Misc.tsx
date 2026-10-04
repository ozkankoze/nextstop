import type { ComponentType, ReactNode, SVGProps } from "react";
import {
  BedIcon,
  ChartIcon,
  CheckIcon,
  ClockIcon,
  CoffeeIcon,
  CompassIcon,
  EuroIcon,
  FileIcon,
  GlobeIcon,
  HandshakeIcon,
  HostelsIcon,
  KitchenIcon,
  LockIcon,
  LuggageIcon,
  MegaphoneIcon,
  QrCodeIcon,
  ReferralArrowIcon,
  RouteIcon,
  ScanIcon,
  ShieldIcon,
  SmartphoneIcon,
  SnowflakeIcon,
  SparklesIcon,
  SunIcon,
  TicketIcon,
  TrendingUpIcon,
  UsersIcon,
  WashIcon,
  WifiIcon,
} from "@/components/ui/Icons";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

/** String keys used inside `src/data` resolved to real components. */
export const iconRegistry: Record<string, IconComponent> = {
  euro: EuroIcon,
  shield: ShieldIcon,
  compass: CompassIcon,
  sparkles: SparklesIcon,
  ticket: TicketIcon,
  users: UsersIcon,
  route: RouteIcon,
  clock: ClockIcon,
  check: CheckIcon,
  globe: GlobeIcon,
  scan: ScanIcon,
  qr: QrCodeIcon,
  phone: SmartphoneIcon,
  pass: SmartphoneIcon,
  bookings: TrendingUpIcon,
  profit: TrendingUpIcon,
  referral: ReferralArrowIcon,
  handshake: HandshakeIcon,
  hostels: HostelsIcon,
  chart: ChartIcon,
  file: FileIcon,
  megaphone: MegaphoneIcon,
  // Hostel amenities
  wifi: WifiIcon,
  kitchen: KitchenIcon,
  lockers: LockIcon,
  breakfast: CoffeeIcon,
  laundry: WashIcon,
  ac: SnowflakeIcon,
  bar: UsersIcon,
  terrace: SunIcon,
  reception24: ClockIcon,
  linen: BedIcon,
  luggage: LuggageIcon,
  tours: CompassIcon,
};

export function DataIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconRegistry[name] ?? SparklesIcon;
  return <Icon className={className} />;
}

/** Small pill label — "Founding Partner", "Spain", "Coming soon". */
export function Badge({
  children,
  tone = "brand",
  className = "",
}: {
  children: ReactNode;
  tone?: "brand" | "ink" | "muted" | "light" | "open";
  className?: string;
}) {
  const tones = {
    brand: "bg-brand-50 text-brand-600",
    ink: "bg-ink-900 text-white",
    muted: "bg-ink-100 text-ink-600",
    light: "border border-white/25 text-white/90",
    /** "Now open" — the only place the savings green is used as a status. */
    open: "bg-save-bg text-save",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

/** Icon + title + description, the card used across benefit grids. */
export function ValueCard({
  icon,
  title,
  description,
  tone = "light",
}: {
  icon: string;
  title: string;
  description: string;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <article
      className={`h-full rounded-xl border p-5 ${
        isDark
          ? "border-white/10 bg-white/5"
          : "border-ink-100 bg-white shadow-[0_2px_10px_-6px_rgba(6,9,15,0.14)]"
      }`}
    >
      <span
        aria-hidden
        className={`mb-4 grid h-10 w-10 place-items-center rounded-full ${
          isDark ? "bg-brand-500/15 text-brand-400" : "bg-brand-50 text-brand-600"
        }`}
      >
        <DataIcon name={icon} className="h-[18px] w-[18px]" />
      </span>
      <h3
        className={`text-[14px] font-semibold ${
          isDark ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-1.5 text-[12.5px] leading-relaxed ${
          isDark ? "text-white/65" : "text-ink-500"
        }`}
      >
        {description}
      </p>
    </article>
  );
}

/** Shown when a filter combination returns nothing. */
export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-dashed border-ink-200 bg-white px-6 py-14 text-center">
      <p className="text-[15px] font-semibold text-ink-900">{title}</p>
      <p className="mx-auto mt-2 max-w-[46ch] text-[13px] text-ink-500">
        {description}
      </p>
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}

/** Marks illustrative content so demo data is never mistaken for real data. */
export function DemoNote({ children }: { children: ReactNode }) {
  return (
    <p className="mt-6 rounded-lg border border-ink-100 bg-ink-50 px-4 py-3 text-[11.5px] leading-relaxed text-ink-500">
      {children}
    </p>
  );
}

/** Label/value pair used in spec tables and house rules. */
export function SpecRow({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-6 border-b border-ink-100 py-2.5 last:border-b-0">
      <dt className="text-[12.5px] text-ink-500">{label}</dt>
      <dd className="text-right text-[12.5px] font-medium text-ink-900">
        {value}
      </dd>
    </div>
  );
}
