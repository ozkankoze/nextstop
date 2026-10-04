import type { ReactNode } from "react";
import { LogoImage } from "@/components/ui/Logo";
import { QrGraphic } from "@/components/ui/QrGraphic";
import { ScanIcon } from "@/components/ui/Icons";
import { samplePass } from "@/data/next-pass";

/**
 * The NEXT PASS wordmark, set in the brand's display face:
 * pink NEXT, white PASS.
 */
export function PassWordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display leading-none font-extrabold tracking-[-0.01em] ${className}`}
    >
      <span className="text-brand-500">NEXT</span>
      <span className="text-white">PASS</span>
    </span>
  );
}

/**
 * The perforated divider that makes a panel read as a torn-off ticket.
 * `notchClass` must match the surface the ticket sits on, because the two
 * notches are punched out in that colour.
 */
export function Perforation({
  notchClass = "bg-ink-950",
  notches = true,
}: {
  notchClass?: string;
  /** Punch the two side notches — only right when the ticket has edges. */
  notches?: boolean;
}) {
  return (
    <div aria-hidden className="relative my-5 h-px">
      {notches ? (
        <>
          <span
            className={`absolute top-1/2 -left-[26px] h-5 w-5 -translate-y-1/2 rounded-full border border-white/12 ${notchClass}`}
          />
          <span
            className={`absolute top-1/2 -right-[26px] h-5 w-5 -translate-y-1/2 rounded-full border border-white/12 ${notchClass}`}
          />
        </>
      ) : null}
      <span className="block border-t border-dashed border-white/25" />
    </div>
  );
}

type PassTicketProps = {
  hostelName?: string;
  city?: string;
  country?: string;
  seed?: string;
  /** Colour of the surface behind the ticket, used to punch the notches. */
  notchClass?: string;
  className?: string;
  children?: ReactNode;
};

/**
 * The reception-desk ticket: a partner hostel's NEXT STOP QR code, presented
 * as something a traveller would want to scan. The QR itself is decorative —
 * real partner codes are generated per hostel.
 */
export function PassTicket({
  hostelName = "Casa Naranja Hostel",
  city = samplePass.issuedCity,
  country = samplePass.issuedCountry,
  seed = "casa-naranja-valencia",
  notchClass = "bg-ink-950",
  className = "",
}: PassTicketProps) {
  return (
    <div
      className={`relative w-full max-w-[300px] rounded-[26px] border border-white/12 bg-ink-900 px-6 pt-6 pb-7 text-center shadow-[0_24px_60px_-28px_rgba(0,0,0,0.9)] ${className}`}
    >
      <LogoImage variant="compact" height={22} className="mx-auto" />

      <p className="mt-4 text-[10.5px] font-semibold tracking-[0.22em] text-brand-500 uppercase">
        Scan for your NEXT PASS
      </p>

      <div className="mx-auto mt-4 w-[168px] rounded-2xl bg-white p-3.5">
        <QrGraphic
          seed={seed}
          className="h-auto w-full text-ink-950"
          title={`Illustration of the NEXT STOP QR code displayed at ${hostelName}`}
        />
      </div>

      <p className="mt-3.5 inline-flex items-center gap-1.5 text-[12px] text-white/70">
        <ScanIcon aria-hidden className="h-4 w-4" />
        Scan with your phone
      </p>

      <Perforation notchClass={notchClass} />

      <PassWordmark className="text-[30px]" />

      <p className="mt-3 text-[12.5px] font-semibold text-white">
        {hostelName}
      </p>
      <p className="mt-0.5 text-[11.5px] text-white/50">
        {city}, {country}
      </p>
    </div>
  );
}
