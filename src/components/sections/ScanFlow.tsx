import { FirstPassNote } from "@/components/sections/FirstPassNote";
import { PassTicket } from "@/components/ui/PassTicket";
import { DigitalPassPhone } from "@/components/ui/DigitalPass";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { samplePass } from "@/data/next-pass";

/**
 * The single most important explanation on the site: what actually happens at
 * a reception desk. The hostel's QR ticket on the left, the traveller's phone
 * on the right, one arrow between them.
 */
export function ScanFlow({
  hostelName = "Casa Naranja Hostel",
  city = samplePass.issuedCity,
  country = samplePass.issuedCountry,
  seed = "casa-naranja-valencia",
  /** Adds the "no partner hostel yet?" pointer under the diagram. */
  withFirstPassNote = false,
  className = "",
}: {
  hostelName?: string;
  city?: string;
  country?: string;
  seed?: string;
  withFirstPassNote?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl bg-ink-950 p-6 sm:p-8 lg:p-10 ${className}`}
    >
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-center lg:gap-10">
        <figure className="flex flex-col items-center">
          <PassTicket
            hostelName={hostelName}
            city={city}
            country={country}
            seed={seed}
          />
          <figcaption className="mt-4 text-[10.5px] font-semibold tracking-[0.18em] text-white/45 uppercase">
            1 · Scan QR
          </figcaption>
        </figure>

        <div
          aria-hidden
          className="flex shrink-0 items-center justify-center text-brand-500"
        >
          <span className="hidden h-px w-10 bg-gradient-to-r from-transparent to-brand-500 lg:block" />
          <ArrowRightIcon
            className="h-6 w-6 rotate-90 lg:rotate-0"
            strokeWidth={2}
          />
          <span className="hidden h-px w-10 bg-gradient-to-l from-transparent to-brand-500 lg:block" />
        </div>

        <figure className="flex flex-col items-center">
          <DigitalPassPhone withActions={false} city={city} country={country} />
          <figcaption className="mt-4 text-[10.5px] font-semibold tracking-[0.18em] text-white/45 uppercase">
            2 · Get digital pass
          </figcaption>
        </figure>
      </div>

      <p className="mt-8 text-center text-[11.5px] text-white/40">
        Illustration. QR codes shown on this site are decorative — real partner
        codes are generated per hostel.
      </p>

      {withFirstPassNote ? <FirstPassNote className="mt-6" /> : null}
    </div>
  );
}
