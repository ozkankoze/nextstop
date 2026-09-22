import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { Badge, DemoNote, ValueCard } from "@/components/ui/Misc";
import { DigitalPassPhone } from "@/components/ui/DigitalPass";
import { ScanFlow } from "@/components/sections/ScanFlow";
import {
  ArrowRightIcon,
  CheckIcon,
  MapPinIcon,
  ScanIcon,
} from "@/components/ui/Icons";
import { euro } from "@/components/ui/PriceCompare";
import { getFaqItems } from "@/data/faq";
import { getDestination } from "@/data/destinations";
import { getHostel } from "@/data/hostels";
import {
  exampleJourney,
  faqPreviewIds,
  loopLabels,
  networkPoints,
  nextPassSteps,
  savingsExample,
  travellerReasons,
} from "@/data/next-pass";

export const metadata: Metadata = {
  title: "NEXT PASS",
  description:
    "NEXT PASS is a digital travel pass. Scan the QR code at a partner hostel's reception and a unique code appears on your phone — no app, no card, no sign-up.",
};

const heroDestination = getDestination("valencia");

const savingsRows = savingsExample
  .map((row) => {
    const hostel = getHostel(row.hostelSlug);
    if (!hostel) return null;
    const regularTotal = hostel.regularPrice * row.nights;
    const nextStopTotal = hostel.nextStopPrice * row.nights;
    return {
      slug: hostel.slug,
      name: hostel.name,
      city: hostel.city,
      nights: row.nights,
      regularTotal,
      nextStopTotal,
      saving: regularTotal - nextStopTotal,
    };
  })
  .filter((row): row is NonNullable<typeof row> => row !== null);

const savingsTotals = savingsRows.reduce(
  (acc, row) => ({
    nights: acc.nights + row.nights,
    regularTotal: acc.regularTotal + row.regularTotal,
    nextStopTotal: acc.nextStopTotal + row.nextStopTotal,
    saving: acc.saving + row.saving,
  }),
  { nights: 0, regularTotal: 0, nextStopTotal: 0, saving: 0 }
);

const quickFacts = [
  "Your phone camera is enough — scanning opens a web page, not an app store",
  "The pass is generated on the spot and stays on your phone",
  "No physical card, no account, nothing handed over at reception",
];

export default function NextPassPage() {
  const faqItems = getFaqItems(faqPreviewIds);

  return (
    <>
      <PageHero
        size="lg"
        eyebrow="NEXT PASS"
        title="One pass."
        accent={"More adventures."}
        image={heroDestination?.heroImage}
        imageAlt={heroDestination?.alt ?? ""}
        subtitle="Scan the QR code at your hostel's reception and a digital NEXT PASS appears on your phone — the code that unlocks the partner rate at your next stop."
        crumbs={[{ label: "Home", href: "/" }, { label: "Next Pass" }]}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/hostels" variant="primary">
            Find a partner hostel
            <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </ButtonLink>
          <ButtonLink href="/how-it-works" variant="light">
            See how it works
          </ButtonLink>
        </div>
      </PageHero>

      {/* What is NEXT PASS? */}
      <section
        aria-labelledby="what-is-next-pass"
        className="container-page pt-12 lg:pt-14"
      >
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <div>
            <SectionHeading
              id="what-is-next-pass"
              title="What is a"
              accent="NEXT PASS"
              titleAfter="?"
            />
            <p className="max-w-[68ch] text-[14.5px] leading-[1.75] text-ink-600">
              A NEXT PASS is a digital travel pass that connects the hostel
              you are in tonight to the one you sleep in next. It is a unique
              code, generated on your phone, that marks you as someone moving
              through the NEXT STOP network.
            </p>
            <p className="mt-4 max-w-[68ch] text-[14.5px] leading-[1.75] text-ink-600">
              Getting one takes a single scan. Every partner hostel has its own
              NEXT STOP QR code on display at reception; point your camera at
              it, a NEXT STOP page opens in your browser, and your pass appears
              on screen. It stays on your phone from there.
            </p>
            <p className="mt-4 max-w-[68ch] text-[14.5px] leading-[1.75] text-ink-600">
              When you book your next destination, that code unlocks the partner
              hostel&apos;s direct rate — the price a hostel can offer when it
              is not paying a booking platform a commission. You book with the
              hostel; NEXT STOP simply connects the two of you.
            </p>

            <ul className="mt-6 space-y-3">
              {quickFacts.map((fact) => (
                <li key={fact} className="flex gap-2.5">
                  <CheckIcon
                    aria-hidden
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                  />
                  <span className="text-[12.5px] leading-relaxed text-ink-600">
                    {fact}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center lg:justify-end">
            <DigitalPassPhone label="Your pass, on your phone." />
          </div>
        </div>
      </section>

      {/* The scan */}
      <section
        aria-labelledby="scan-at-reception"
        className="container-page pt-12 lg:pt-14"
      >
        <SectionHeading
          id="scan-at-reception"
          title="Scan at reception,"
          accent="and go"
          subtitle="The whole product, in one interaction: a QR code on the desk and a pass on your phone."
        />

        <ScanFlow />

        <div className="mt-5 rounded-xl border border-ink-100 bg-white px-5 py-4">
          <p className="text-[10.5px] font-semibold tracking-[0.18em] text-ink-400 uppercase">
            The loop
          </p>
          <ul className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
            {loopLabels.map((label, index) => (
              <li key={label} className="flex items-center gap-3">
                <span className="text-[11.5px] font-semibold tracking-[0.16em] text-ink-700 uppercase">
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
        </div>
      </section>

      {/* Why travellers use it */}
      <section
        aria-labelledby="why-travellers"
        className="container-page pt-12 lg:pt-14"
      >
        <SectionHeading
          id="why-travellers"
          title="Why travellers"
          accent="use it"
          subtitle="Four reasons one scan ends up mattering more than it sounds."
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {travellerReasons.map((reason) => (
            <li key={reason.title}>
              <ValueCard
                icon={reason.icon}
                title={reason.title}
                description={reason.description}
              />
            </li>
          ))}
        </ul>
      </section>

      {/* How the network works */}
      <section
        aria-labelledby="network-works"
        className="container-page pt-12 lg:pt-14"
      >
        <SectionHeading
          id="network-works"
          title="How the"
          accent="network"
          titleAfter="works"
          subtitle="Hostels bring in hostels, and the pass is what carries a traveller between them."
        />
        <ul className="grid gap-5 md:grid-cols-3">
          {networkPoints.map((point) => (
            <li key={point.title}>
              <ValueCard
                icon={point.icon}
                title={point.title}
                description={point.description}
              />
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-xl border border-ink-100 bg-white p-5 shadow-[0_2px_10px_-6px_rgba(6,9,15,0.14)] sm:p-6">
          <h3 className="flex items-center gap-2 text-[15px] font-semibold text-ink-900">
            <ScanIcon aria-hidden className="h-4 w-4 text-brand-500" />
            The loop, in six steps
          </h3>
          <ol className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {nextPassSteps.map((step) => (
              <li key={step.step} className="flex gap-3.5">
                <span
                  aria-hidden
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-50 text-[11.5px] font-bold text-brand-600"
                >
                  {String(step.step).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <p className="text-[10.5px] font-semibold tracking-[0.16em] text-brand-500 uppercase">
                    {step.label}
                  </p>
                  <h4 className="mt-1 text-[13.5px] font-semibold text-ink-900">
                    <span className="sr-only">Step {step.step}: </span>
                    {step.title}
                  </h4>
                  <p className="mt-1 text-[12px] leading-relaxed text-ink-500">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <Link
            href="/how-it-works"
            className="group mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-600 transition-colors hover:text-brand-500"
          >
            Read each step in detail
            <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      {/* Example journey */}
      <section
        aria-labelledby="example-journey"
        className="container-page pt-12 lg:pt-14"
      >
        <SectionHeading
          id="example-journey"
          title="An example"
          accent="journey"
          subtitle="One scan in Valencia, and where it can lead over a couple of weeks."
        />
        <ol className="mt-8 grid gap-8 lg:grid-cols-4 lg:gap-4">
          {exampleJourney.map((stop, index) => {
            const isLast = index === exampleJourney.length - 1;
            return (
              <li
                key={stop.city}
                className="relative flex gap-4 lg:flex-col lg:items-center lg:gap-0 lg:text-center"
              >
                {!isLast ? (
                  <>
                    <span
                      aria-hidden
                      className="absolute top-12 left-[21px] h-[calc(100%+2rem-3rem)] border-l-2 border-dashed border-brand-200 lg:hidden"
                    />
                    <span
                      aria-hidden
                      className="absolute top-[21px] right-[calc(-50%+1.75rem)] left-[calc(50%+1.75rem)] hidden border-t-2 border-dashed border-brand-200 lg:block"
                    />
                  </>
                ) : null}

                <div className="relative shrink-0">
                  <span
                    aria-hidden
                    className="absolute -top-1 -left-1.5 z-10 grid h-5 w-5 place-items-center rounded-full bg-brand-500 text-[10.5px] font-bold text-white"
                  >
                    {index + 1}
                  </span>
                  <span
                    aria-hidden
                    className="grid h-11 w-11 place-items-center rounded-full bg-brand-50 text-ink-900"
                  >
                    <MapPinIcon className="h-5 w-5" />
                  </span>
                </div>

                <div className="lg:mt-4">
                  <h3 className="text-[15px] font-semibold text-ink-900">
                    <span className="sr-only">Stop {index + 1}: </span>
                    {stop.city}
                  </h3>
                  <p className="mt-0.5 text-[11.5px] tracking-[0.12em] text-ink-400 uppercase">
                    {stop.country}
                  </p>
                  <p className="mt-2 max-w-[34ch] text-[12.5px] leading-relaxed text-ink-500 lg:mx-auto">
                    {stop.action}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      {/* Savings example */}
      <section
        aria-labelledby="savings-example"
        className="container-page pt-12 lg:pt-14"
      >
        <SectionHeading
          id="savings-example"
          title="What that looks like in"
          accent="numbers"
          subtitle="The same three stays, priced with and without a pass."
        />

        {/* Table — tablet and desktop */}
        <div className="hidden overflow-hidden rounded-xl border border-ink-100 bg-white sm:block">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">
              Demo comparison of regular and NEXT STOP dorm totals for three
              partner hostels.
            </caption>
            <thead>
              <tr className="border-b border-ink-100 bg-ink-50">
                <th
                  scope="col"
                  className="px-4 py-3 text-[11px] font-semibold tracking-[0.12em] text-ink-500 uppercase"
                >
                  Hostel
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-right text-[11px] font-semibold tracking-[0.12em] text-ink-500 uppercase"
                >
                  Nights
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-right text-[11px] font-semibold tracking-[0.12em] text-ink-500 uppercase"
                >
                  Regular total
                </th>
                <th
                  scope="col"
                  className="bg-brand-50 px-4 py-3 text-right text-[11px] font-semibold tracking-[0.12em] text-brand-600 uppercase"
                >
                  NEXT STOP total
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-right text-[11px] font-semibold tracking-[0.12em] text-ink-500 uppercase"
                >
                  You save
                </th>
              </tr>
            </thead>
            <tbody>
              {savingsRows.map((row) => (
                <tr key={row.slug} className="border-b border-ink-100">
                  <th scope="row" className="px-4 py-3.5 font-normal">
                    <span className="block text-[13.5px] font-semibold text-ink-900">
                      {row.name}
                    </span>
                    <span className="mt-0.5 block text-[11.5px] text-ink-400">
                      {row.city} · dorm bed
                    </span>
                  </th>
                  <td className="px-4 py-3.5 text-right text-[13px] text-ink-600">
                    {row.nights}
                  </td>
                  <td className="px-4 py-3.5 text-right text-[13px] text-ink-600">
                    {euro(row.regularTotal)}
                  </td>
                  <td className="bg-brand-50 px-4 py-3.5 text-right text-[13px] font-semibold text-brand-600">
                    {euro(row.nextStopTotal)}
                  </td>
                  <td className="px-4 py-3.5 text-right text-[13px] font-medium text-save">
                    {euro(row.saving)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-ink-50">
                <th
                  scope="row"
                  className="px-4 py-3.5 text-[13.5px] font-semibold text-ink-900"
                >
                  Total
                </th>
                <td className="px-4 py-3.5 text-right text-[13px] font-semibold text-ink-900">
                  {savingsTotals.nights}
                </td>
                <td className="px-4 py-3.5 text-right text-[13px] font-semibold text-ink-900">
                  {euro(savingsTotals.regularTotal)}
                </td>
                <td className="bg-brand-50 px-4 py-3.5 text-right text-[13px] font-bold text-brand-600">
                  {euro(savingsTotals.nextStopTotal)}
                </td>
                <td className="px-4 py-3.5 text-right text-[13px] font-bold text-save">
                  {euro(savingsTotals.saving)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Stacked cards — phones */}
        <ul className="grid gap-4 sm:hidden">
          {savingsRows.map((row) => (
            <li
              key={row.slug}
              className="rounded-xl border border-ink-100 bg-white p-4"
            >
              <p className="text-[14px] font-semibold text-ink-900">
                {row.name}
              </p>
              <p className="mt-0.5 text-[11.5px] text-ink-400">
                {row.city} · {row.nights} nights in a dorm
              </p>
              <dl className="mt-3 grid grid-cols-2 gap-3 border-t border-ink-100 pt-3">
                <div>
                  <dt className="text-[10.5px] text-ink-400">Regular total</dt>
                  <dd className="mt-1 text-[17px] leading-none font-bold text-ink-900">
                    {euro(row.regularTotal)}
                  </dd>
                </div>
                <div className="rounded-lg bg-brand-50 px-3 py-2">
                  <dt className="text-[10.5px] text-brand-600">
                    NEXT STOP total
                  </dt>
                  <dd className="mt-1 text-[17px] leading-none font-bold text-brand-600">
                    {euro(row.nextStopTotal)}
                  </dd>
                </div>
              </dl>
              <p className="mt-3 inline-flex w-fit rounded-md bg-save-bg px-2 py-1 text-[10.5px] font-medium text-save">
                You save {euro(row.saving)}
              </p>
            </li>
          ))}
          <li className="rounded-xl border border-ink-200 bg-ink-50 p-4">
            <p className="text-[14px] font-semibold text-ink-900">
              Total across {savingsTotals.nights} nights
            </p>
            <dl className="mt-3 grid grid-cols-2 gap-3">
              <div>
                <dt className="text-[10.5px] text-ink-400">Regular</dt>
                <dd className="mt-1 text-[17px] leading-none font-bold text-ink-900">
                  {euro(savingsTotals.regularTotal)}
                </dd>
              </div>
              <div>
                <dt className="text-[10.5px] text-ink-400">With NEXT PASS</dt>
                <dd className="mt-1 text-[17px] leading-none font-bold text-brand-600">
                  {euro(savingsTotals.nextStopTotal)}
                </dd>
              </div>
            </dl>
            <p className="mt-3 inline-flex w-fit rounded-md bg-save-bg px-2 py-1 text-[10.5px] font-medium text-save">
              You save {euro(savingsTotals.saving)}
            </p>
          </li>
        </ul>

        <DemoNote>
          These are demo prices from this preview build, not live rates. The
          totals above are calculated from the dorm prices listed on each
          hostel&apos;s page and assume one bed per night. What you actually
          save depends on the hostel, the room and the dates — a NEXT PASS
          unlocks the hostel&apos;s own direct rate rather than a fixed
          discount.
        </DemoNote>
      </section>

      {/* FAQ preview */}
      <section
        aria-labelledby="next-pass-faq"
        className="container-page pt-12 lg:pt-14"
      >
        <SectionHeading
          id="next-pass-faq"
          title="Questions about the"
          accent="pass"
          action={{ label: "All questions", href: "/faq" }}
        />
        <Accordion items={faqItems} defaultOpenId={faqPreviewIds[0]} />
        <p className="mt-4 text-[12.5px] text-ink-500">
          Booking, payments and partner questions are answered on the{" "}
          <Link
            href="/faq"
            className="font-medium text-brand-500 hover:underline"
          >
            full FAQ page
          </Link>
          .
        </p>
      </section>

      {/* CTA */}
      <section aria-labelledby="next-pass-cta" className="container-page py-14">
        <div className="rounded-2xl bg-ink-950 p-7 sm:p-9 lg:p-11">
          <Badge tone="light">Scan at any partner hostel</Badge>
          <h2
            id="next-pass-cta"
            className="mt-4 max-w-[24ch] text-[24px] font-bold text-white sm:text-[27px]"
          >
            Get your NEXT PASS at a partner hostel.
          </h2>
          <p className="mt-3 max-w-[56ch] text-[13.5px] leading-relaxed text-white/70">
            Find a hostel in the network, stay a night, and scan the QR code at
            reception. That is the whole process — and if you run a hostel, this
            is how you join the other side of it.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/hostels" variant="primary">
              Browse partner hostels
              <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </ButtonLink>
            <ButtonLink href="/partners" variant="light">
              Become a partner
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
