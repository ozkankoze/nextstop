import { LogoImage } from "@/components/ui/Logo";
import { QrGraphic } from "@/components/ui/QrGraphic";
import { DigitalPassPhone } from "@/components/ui/DigitalPass";
import { ArrowRightIcon, ScanIcon } from "@/components/ui/Icons";
import { samplePass } from "@/data/next-pass";

/**
 * The single most important explanation on the site: what actually happens at
 * a reception desk. Reception QR on the left, the traveller's phone on the
 * right, one arrow between them.
 */
export function ScanFlow({
  hostelName = "Casa Naranja Hostel",
  city = samplePass.issuedCity,
  country = samplePass.issuedCountry,
  seed = "casa-naranja-valencia",
  className = "",
}: {
  hostelName?: string;
  city?: string;
  country?: string;
  seed?: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl bg-ink-950 p-6 sm:p-8 lg:p-10 ${className}`}
    >
      <div className="flex flex-col items-center gap-7 lg:flex-row lg:items-center lg:justify-center lg:gap-10">
        {/* Reception side */}
        <figure className="flex w-full max-w-[300px] flex-col items-center">
          <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
            <LogoImage variant="compact" height={20} className="mx-auto" />
            <p className="mt-3 text-[10px] font-semibold tracking-[0.2em] text-brand-400 uppercase">
              Scan for your NEXT PASS
            </p>

            <div className="mx-auto mt-4 w-[152px] rounded-xl bg-white p-3.5">
              <QrGraphic
                seed={seed}
                className="h-auto w-full text-ink-950"
                title={`Illustration of the NEXT STOP QR code displayed at ${hostelName}`}
              />
            </div>

            <p className="mt-3 inline-flex items-center gap-1.5 text-[11.5px] text-white/60">
              <ScanIcon aria-hidden className="h-3.5 w-3.5" />
              Scan with your phone
            </p>
            <p className="mt-2 text-[11px] text-white/35">
              {hostelName} · {city}, {country}
            </p>
          </div>
          <figcaption className="mt-3 text-[10.5px] font-semibold tracking-[0.18em] text-white/45 uppercase">
            1 · Scan QR
          </figcaption>
        </figure>

        {/* Connector */}
        <div
          aria-hidden
          className="flex shrink-0 items-center justify-center text-brand-500"
        >
          <span className="hidden h-px w-10 bg-gradient-to-r from-transparent to-brand-500 lg:block" />
          <ArrowRightIcon className="h-6 w-6 rotate-90 lg:rotate-0" strokeWidth={2} />
          <span className="hidden h-px w-10 bg-gradient-to-l from-transparent to-brand-500 lg:block" />
        </div>

        {/* Phone side */}
        <figure className="flex flex-col items-center">
          <DigitalPassPhone withActions={false} city={city} country={country} />
          <figcaption className="mt-3 text-[10.5px] font-semibold tracking-[0.18em] text-white/45 uppercase">
            2 · Get digital pass
          </figcaption>
        </figure>
      </div>

      <p className="mt-7 text-center text-[11.5px] text-white/40">
        Illustration. QR codes shown on this site are decorative — real partner
        codes are generated per hostel.
      </p>
    </div>
  );
}
