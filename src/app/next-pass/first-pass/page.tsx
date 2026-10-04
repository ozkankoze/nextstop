import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FirstPassGenerator } from "@/components/sections/FirstPassGenerator";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Misc";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/Icons";
import { vibes } from "@/data/vibes";

export const metadata: Metadata = {
  title: "Get your first NEXT PASS",
  description:
    "Starting your trip? Generate a starter NEXT PASS here so you can make the first booking of your journey, then keep the loop going from reception.",
};



const loop = [
  "Generate your starter pass here and book your first partner hostel.",
  "Check in, and scan the NEXT STOP QR code at that hostel's reception.",
  "A fresh pass appears on your phone for the next destination.",
  "Repeat at every stop — the network follows the journey.",
];

export default function FirstPassPage() {
  return (
    <>
      <PageHero
        eyebrow="Next Pass"
        title="Your first"
        accent="NEXT PASS."
        image={vibes.trailWithBackpacks.src}
        imageAlt="Rooftops of Valencia in the afternoon sun"
        subtitle="A NEXT PASS normally comes from the hostel you are already staying at. If your trip has not started yet, this is where you pick up the first one."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Next Pass", href: "/next-pass" },
          { label: "First pass" },
        ]}
      />

      <section
        aria-labelledby="generate-pass"
        className="container-page pt-12 lg:pt-14"
      >
        <SectionHeading
          id="generate-pass"
          title="Start your"
          accent="journey"
          subtitle="Free, and it takes about ten seconds."
        />
        <FirstPassGenerator />
      </section>

      <section
        aria-labelledby="then-what"
        className="container-page pt-12 lg:pt-14"
      >
        <SectionHeading
          id="then-what"
          title="And then the loop"
          accent="takes over"
        />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {loop.map((step, index) => (
            <li
              key={step}
              className="rounded-xl border border-ink-100 bg-white p-5 shadow-[0_2px_10px_-6px_rgba(6,9,15,0.14)]"
            >
              <span
                aria-hidden
                className="grid h-8 w-8 place-items-center rounded-full bg-brand-500 text-[12px] font-bold text-white"
              >
                {index + 1}
              </span>
              <p className="mt-3 text-[12.5px] leading-relaxed text-ink-600">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section
        aria-labelledby="first-pass-rules"
        className="container-page pt-12 lg:pt-14"
      >
        <SectionHeading
          id="first-pass-rules"
          title="What a starter pass does and does"
          accent="not do"
        />
        <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {[
            "Unlocks the NEXT STOP rate for the first booking of your trip.",
            "Free — there is nothing to buy and no account to create.",
            "Works at any partner hostel in the destination you picked.",
            "After that first stay, your next pass comes from reception.",
          ].map((line) => (
            <li key={line} className="flex gap-2.5">
              <CheckIcon
                aria-hidden
                className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
              />
              <span className="text-[12.5px] leading-relaxed text-ink-600">
                {line}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-page py-14">
        <div className="rounded-2xl bg-ink-950 p-7 sm:p-9 lg:p-11">
          <Badge tone="light">NEXT PASS</Badge>
          <h2 className="mt-4 max-w-[24ch] text-[24px] font-bold text-white sm:text-[27px]">
            Already at a partner hostel?
          </h2>
          <p className="mt-3 max-w-[56ch] text-[13.5px] leading-relaxed text-white/70">
            Then you do not need this page. Scan the NEXT STOP QR code at
            reception and your pass is generated there and then.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/next-pass" variant="primary">
              How NEXT PASS works
              <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </ButtonLink>
            <ButtonLink href="/hostels" variant="light">
              Browse partner hostels
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
