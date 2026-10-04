import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Misc";
import { FirstPassNote } from "@/components/sections/FirstPassNote";
import { TextWithLink } from "@/components/ui/TextWithLink";
import {
  ArrowRightIcon,
  BackpackIcon,
  CalendarCheckIcon,
  CheckIcon,
  FlagIcon,
  MapPinIcon,
  QrCodeIcon,
  ScanIcon,
  SmartphoneIcon,
} from "@/components/ui/Icons";
import { loopLabels, nextPassSteps, type StepIcon } from "@/data/next-pass";
import { vibes } from "@/data/vibes";

export const metadata: Metadata = {
  title: "How it Works",
  description:
    "The six steps behind NEXT STOP: stay at a partner hostel, scan the QR code at reception, get a digital NEXT PASS on your phone, pick your next city, book the partner rate and keep going.",
};

const stepIcons: Record<StepIcon, ComponentType<SVGProps<SVGSVGElement>>> = {
  backpack: BackpackIcon,
  scan: ScanIcon,
  pass: SmartphoneIcon,
  pin: MapPinIcon,
  calendar: CalendarCheckIcon,
  flag: FlagIcon,
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        size="lg"
        eyebrow="NEXT PASS"
        title="How"
        accent="it works"
        image={vibes.armsAroundShoulders.src}
        imageAlt={vibes.armsAroundShoulders.alt}
        subtitle="Six steps, start to finish: what you scan at reception, what lands on your phone, and how one stay turns into the next."
        crumbs={[{ label: "Home", href: "/" }, { label: "How It Works" }]}
      >
        <ul className="flex flex-wrap items-center gap-x-3 gap-y-2">
          {loopLabels.map((label, index) => (
            <li key={label} className="flex items-center gap-3">
              <span className="text-[11.5px] font-semibold tracking-[0.16em] text-white/80 uppercase">
                {label}
              </span>
              {index < loopLabels.length - 1 ? (
                <ArrowRightIcon
                  aria-hidden
                  className="h-3 w-3 shrink-0 text-brand-500"
                />
              ) : null}
            </li>
          ))}
        </ul>
      </PageHero>

      {/* The six steps */}
      <section
        aria-labelledby="the-six-steps"
        className="container-page pt-12 lg:pt-14"
      >
        <SectionHeading
          id="the-six-steps"
          title="How it works,"
          accent="step by step"
          subtitle="The same six steps as on the home page, with the detail that would not fit there."
        />

        <ol className="mt-8 space-y-10 lg:mt-12 lg:space-y-16">
          {nextPassSteps.map((step, index) => {
            const Icon = stepIcons[step.icon];
            const isLast = index === nextPassSteps.length - 1;
            const onRight = index % 2 === 1;

            return (
              <li
                key={step.step}
                className="relative flex gap-5 lg:grid lg:grid-cols-[1fr_7rem_1fr] lg:gap-0"
              >
                {/* Dashed connector — vertical on mobile, down the centre on desktop */}
                {!isLast ? (
                  <>
                    <span
                      aria-hidden
                      className="absolute top-16 left-[27px] h-[calc(100%-2rem)] border-l-2 border-dashed border-brand-200 lg:hidden"
                    />
                    <span
                      aria-hidden
                      className="absolute top-16 left-1/2 hidden h-[calc(100%-0.5rem)] -translate-x-1/2 border-l-2 border-dashed border-brand-200 lg:block"
                    />
                  </>
                ) : null}

                {/* Numbered marker */}
                <div className="relative shrink-0 lg:col-start-2 lg:row-start-1 lg:justify-self-center">
                  <span
                    aria-hidden
                    className="absolute -top-1 -left-1.5 z-10 grid h-6 w-6 place-items-center rounded-full bg-brand-500 text-[11px] font-bold text-white"
                  >
                    {step.step}
                  </span>
                  <span
                    aria-hidden
                    className="grid h-14 w-14 place-items-center rounded-full bg-brand-50 text-ink-900"
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                </div>

                {/* Content */}
                <article
                  className={`min-w-0 rounded-xl border border-ink-100 bg-white p-5 shadow-[0_2px_10px_-6px_rgba(6,9,15,0.14)] sm:p-6 lg:row-start-1 ${
                    onRight ? "lg:col-start-3" : "lg:col-start-1"
                  }`}
                >
                  <Badge tone="muted">
                    {String(step.step).padStart(2, "0")} ·{" "}
                    <span className="tracking-[0.12em] uppercase">
                      {step.label}
                    </span>
                  </Badge>
                  <h3 className="mt-3 text-[15px] font-semibold text-ink-900 sm:text-[17px]">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed font-medium text-brand-600">
                    <TextWithLink
                      text={step.description}
                      link={step.descriptionLink}
                      linkClassName="font-semibold underline underline-offset-2 transition-colors hover:text-brand-700"
                    />
                  </p>

                  {step.detail.map((paragraph, paragraphIndex) => (
                    <p
                      key={paragraphIndex}
                      className="mt-3 max-w-[62ch] text-[13.5px] leading-[1.75] text-ink-600"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {step.notes.length > 0 ? (
                    <ul className="mt-4 space-y-2.5 border-t border-ink-100 pt-4">
                      {step.notes.map((note) => (
                        <li key={note} className="flex gap-2.5">
                          <CheckIcon
                            aria-hidden
                            className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                          />
                          <span className="text-[12.5px] leading-relaxed text-ink-500">
                            {note}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              </li>
            );
          })}
        </ol>
      </section>

      {/* Keep reading */}
      <section
        aria-labelledby="keep-reading"
        className="container-page pt-12 lg:pt-14"
      >
        <SectionHeading id="keep-reading" title="Keep" accent="reading" />
        <ul className="grid gap-5 sm:grid-cols-2">
          <li>
            <Link
              href="/next-pass"
              className="group block h-full rounded-xl border border-ink-100 bg-white p-5 shadow-[0_2px_10px_-6px_rgba(6,9,15,0.14)] transition-colors hover:border-ink-200 sm:p-6"
            >
              <span
                aria-hidden
                className="mb-4 grid h-10 w-10 place-items-center rounded-full bg-brand-50 text-brand-600"
              >
                <QrCodeIcon className="h-[18px] w-[18px]" />
              </span>
              <h3 className="flex items-center gap-1.5 text-[15px] font-semibold text-ink-900">
                What is a NEXT PASS?
                <ArrowRightIcon
                  aria-hidden
                  className="h-3.5 w-3.5 text-brand-500 transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </h3>
              <p className="mt-1.5 max-w-[46ch] text-[12.5px] leading-relaxed text-ink-500">
                The digital pass itself, why travellers use it, an example
                journey and a worked savings example from the demo prices.
              </p>
            </Link>
          </li>
          <li>
            <Link
              href="/faq"
              className="group block h-full rounded-xl border border-ink-100 bg-white p-5 shadow-[0_2px_10px_-6px_rgba(6,9,15,0.14)] transition-colors hover:border-ink-200 sm:p-6"
            >
              <span
                aria-hidden
                className="mb-4 grid h-10 w-10 place-items-center rounded-full bg-brand-50 text-brand-600"
              >
                <MapPinIcon className="h-[18px] w-[18px]" />
              </span>
              <h3 className="flex items-center gap-1.5 text-[15px] font-semibold text-ink-900">
                Frequently asked questions
                <ArrowRightIcon
                  aria-hidden
                  className="h-3.5 w-3.5 text-brand-500 transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </h3>
              <p className="mt-1.5 max-w-[46ch] text-[12.5px] leading-relaxed text-ink-500">
                Where the QR code lives, what happens if you lose your pass,
                cancellations, payments and how hostels join the network.
              </p>
            </Link>
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section
        aria-labelledby="how-it-works-cta"
        className="container-page py-14"
      >
        <div className="rounded-2xl bg-ink-950 p-7 sm:p-9 lg:p-11">
          <Badge tone="light">Step one</Badge>
          <h2
            id="how-it-works-cta"
            className="mt-4 max-w-[24ch] text-[24px] font-bold text-white sm:text-[27px]"
          >
            It starts with one night in the network.
          </h2>
          <p className="mt-3 max-w-[56ch] text-[13.5px] leading-relaxed text-white/70">
            Pick a partner hostel, check in, and scan the QR code at reception.
            Everything after that is just the loop repeating.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/hostels" variant="primary">
              Browse partner hostels
              <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </ButtonLink>
            <ButtonLink href="/next-pass/benefits" variant="light">
              See the benefits
            </ButtonLink>
          </div>

          <FirstPassNote className="mt-7 max-w-[46ch]" />
        </div>
      </section>
    </>
  );
}
