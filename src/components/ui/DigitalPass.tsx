import Link from "next/link";
import type { ReactNode } from "react";
import { LogoImage } from "@/components/ui/Logo";
import { PassWordmark, Perforation } from "@/components/ui/PassTicket";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  MapPinIcon,
  WalletIcon,
} from "@/components/ui/Icons";
import { samplePass } from "@/data/next-pass";

/**
 * A phone shell. Everything NEXT PASS is shown inside one of these so it
 * always reads as something on a screen, never as a printed card.
 */
export function PhoneFrame({
  children,
  className = "",
  label,
  labelTone = "onDark",
}: {
  children: ReactNode;
  className?: string;
  label?: string;
  /** Pick the caption colour for the surface the phone sits on. */
  labelTone?: "onDark" | "onLight";
}) {
  return (
    <div
      className={`relative w-[252px] rounded-[2.1rem] border border-white/12 bg-ink-800 p-2.5 shadow-[0_28px_60px_-28px_rgba(6,9,15,0.85)] ${className}`}
    >
      <span
        aria-hidden
        className="absolute top-3 left-1/2 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/20"
      />
      <div className="overflow-hidden rounded-[1.6rem] bg-ink-950 pt-7 pb-4">
        {children}
      </div>
      {label ? (
        <p
          className={`mt-3 text-center text-[11px] ${
            labelTone === "onLight" ? "text-ink-400" : "text-white/45"
          }`}
        >
          {label}
        </p>
      ) : null}
    </div>
  );
}

type DigitalPassProps = {
  code?: string;
  city?: string;
  country?: string;
  status?: string;
  /** Show the pass actions — hide them where the pass is purely illustrative. */
  withActions?: boolean;
};

/**
 * The NEXT PASS itself, styled as a ticket stub so it matches the QR ticket at
 * reception. Always render it inside a `PhoneFrame`.
 */
export function DigitalPassScreen({
  code = samplePass.code,
  city = samplePass.issuedCity,
  country = samplePass.issuedCountry,
  status = samplePass.status,
  withActions = true,
}: DigitalPassProps) {
  return (
    <div className="px-5">
      <div className="flex items-center justify-between">
        <LogoImage variant="compact" height={18} />
        <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-semibold tracking-[0.12em] text-white uppercase">
          <CheckCircleIcon aria-hidden className="h-3 w-3 text-brand-500" />
          {status}
        </span>
      </div>

      <div className="mt-5 text-center">
        <PassWordmark className="text-[26px]" />
      </div>

      <Perforation notches={false} />

      <p className="text-center text-[10px] tracking-[0.22em] text-white/40 uppercase">
        Your code
      </p>
      <p className="mt-1.5 text-center font-display text-[21px] leading-none font-extrabold tracking-[0.04em] text-white">
        {code}
      </p>

      <div className="mt-4 rounded-lg bg-white/5 px-3 py-2.5 text-center">
        <p className="text-[9.5px] tracking-[0.16em] text-white/40 uppercase">
          Issued from
        </p>
        <p className="mt-1 inline-flex items-center gap-1.5 text-[12px] font-medium text-white">
          <MapPinIcon aria-hidden className="h-3.5 w-3.5 text-brand-500" />
          {city}, {country}
        </p>
      </div>

      {withActions ? (
        <div className="mt-4">
          <Link
            href="/destinations"
            className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-brand-500 px-3 py-2.5 text-[12px] font-semibold text-white transition-colors hover:bg-brand-600"
          >
            Explore next stops
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </Link>
          <p className="mt-2 flex items-center justify-center gap-1.5 text-[11px] text-white/45">
            <WalletIcon aria-hidden className="h-3.5 w-3.5" />
            Save pass to your phone
          </p>
        </div>
      ) : (
        <p className="mt-4 text-center text-[11.5px] text-white/55">
          Your next stop awaits.
        </p>
      )}
    </div>
  );
}

/** Convenience wrapper: the pass, already on a phone. */
export function DigitalPassPhone({
  className = "",
  label,
  labelTone,
  ...pass
}: DigitalPassProps & {
  className?: string;
  label?: string;
  labelTone?: "onDark" | "onLight";
}) {
  return (
    <PhoneFrame className={className} label={label} labelTone={labelTone}>
      <DigitalPassScreen {...pass} />
    </PhoneFrame>
  );
}
