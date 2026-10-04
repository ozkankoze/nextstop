"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Field, Select, TextInput } from "@/components/ui/Field";
import { DigitalPassPhone } from "@/components/ui/DigitalPass";
import { DemoNote } from "@/components/ui/Misc";
import { ArrowRightIcon, SparklesIcon } from "@/components/ui/Icons";
import { destinationsByLaunchOrder, getDestination } from "@/data/destinations";
import { hostels } from "@/data/hostels";

/** Short city codes used in pass codes; anything unlisted is derived below. */
const cityCodes: Record<string, string> = {
  valencia: "VLC",
  barcelona: "BCN",
  madrid: "MAD",
  seville: "SVQ",
  malaga: "AGP",
  granada: "GRX",
  alicante: "ALC",
  bilbao: "BIO",
  "san-sebastian": "EAS",
  tirana: "TIA",
  ohrid: "OHD",
  skopje: "SKP",
  belgrade: "BEG",
  sarajevo: "SJJ",
  kotor: "TIV",
  budapest: "BUD",
};

function codeForCity(slug: string, city: string) {
  if (cityCodes[slug]) return cityCodes[slug];
  const letters = city.toUpperCase().replace(/[^A-Z]/g, "");
  return (letters.slice(0, 1) + letters.slice(1).replace(/[AEIOU]/g, "")).slice(
    0,
    3
  );
}

/** Ambiguous characters are left out so a code is easy to read off a screen. */
const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

function randomSuffix() {
  let out = "";
  for (let i = 0; i < 4; i += 1) {
    out += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
  }
  return out;
}

/** Only offer places that actually have a partner hostel to book. */
const startOptions = destinationsByLaunchOrder.filter((d) =>
  hostels.some((h) => h.destinationSlug === d.slug)
);

export function FirstPassGenerator() {
  const [name, setName] = useState("");
  const [citySlug, setCitySlug] = useState(startOptions[0]?.slug ?? "valencia");
  const [pass, setPass] = useState<{
    code: string;
    city: string;
    country: string;
  } | null>(null);

  // Demo only — nothing is issued, stored or validated. A real pass will come
  // from the NEXT STOP API once the network goes live.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const destination = getDestination(citySlug);
    if (!destination) return;
    setPass({
      code: `NS-${codeForCity(destination.slug, destination.city)}-${randomSuffix()}`,
      city: destination.city,
      country: destination.country,
    });
  };

  if (pass) {
    return (
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-14">
        <div>
          <p className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-semibold text-brand-600">
            <SparklesIcon aria-hidden className="h-3.5 w-3.5" />
            Your starter pass
          </p>
          <h2 className="mt-4 text-[22px] font-bold text-ink-900 sm:text-[26px]">
            {name ? `${name}, your` : "Your"} first{" "}
            <span className="text-brand-500">NEXT PASS</span> is ready
          </h2>
          <p className="mt-3 max-w-[60ch] text-[14px] leading-relaxed text-ink-600">
            Use this code when you book your first partner hostel in {pass.city}
            . From then on the loop takes over: scan the QR code at that
            hostel&apos;s reception and your next pass appears on your phone.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink
              href={`/hostels?destination=${citySlug}`}
              variant="primary"
            >
              Find a hostel in {pass.city}
              <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </ButtonLink>
            <Button
              type="button"
              variant="outline"
              onClick={() => setPass(null)}
            >
              Start again
            </Button>
          </div>

          <DemoNote>
            This is a preview build. The code above is generated in your browser
            for illustration only — nothing has been issued, saved or checked,
            and it will not unlock a booking yet.
          </DemoNote>
        </div>

        <div className="flex justify-center lg:justify-end">
          <DigitalPassPhone
            code={pass.code}
            city={pass.city}
            country={pass.country}
            label="Screenshot it, or come back to this page."
            labelTone="onLight"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-14">
      <form
        onSubmit={handleSubmit}
        className="rounded-xl border border-ink-100 bg-white p-6 shadow-[0_2px_14px_-8px_rgba(6,9,15,0.3)]"
      >
        <h2 className="text-[16px] font-semibold text-ink-900">
          Generate your starter pass
        </h2>
        <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-500">
          Two questions, and the pass appears on this page.
        </p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <Field
            label="Your first name"
            htmlFor="first-pass-name"
            hint="Only used to greet you on this page."
          >
            <TextInput
              id="first-pass-name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Alex"
              autoComplete="given-name"
            />
          </Field>

          <Field
            label="Where does your trip start?"
            htmlFor="first-pass-city"
            required
          >
            <Select
              id="first-pass-city"
              name="city"
              value={citySlug}
              onChange={(e) => setCitySlug(e.target.value)}
            >
              {startOptions.map((option) => (
                <option key={option.slug} value={option.slug}>
                  {option.city}, {option.country}
                </option>
              ))}
            </Select>
          </Field>
        </div>

        <Button type="submit" size="lg" className="mt-5 w-full sm:w-auto">
          Generate my NEXT PASS
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </Button>

        <p className="mt-4 text-[11.5px] leading-relaxed text-ink-400">
          No account, no payment. Already staying at a partner hostel? Scan the
          QR code at reception instead —{" "}
          <Link
            href="/next-pass"
            className="font-medium text-brand-500 hover:underline"
          >
            here is how that works
          </Link>
          .
        </p>
      </form>

      <div className="flex justify-center lg:justify-end">
        <DigitalPassPhone
          code="NS-•••-••••"
          withActions={false}
          label="Your pass will look like this."
          labelTone="onLight"
        />
      </div>
    </div>
  );
}
