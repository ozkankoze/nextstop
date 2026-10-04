import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Badge, DemoNote, ValueCard } from "@/components/ui/Misc";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { travellerBenefits, travellerComparison } from "@/data/next-pass";
import { vibes } from "@/data/vibes";

export const metadata: Metadata = {
  title: "NEXT PASS Benefits",
  description:
    "What a digital NEXT PASS gets you: the hostel's NEXT STOP rate, a network vouched for by other hostels, onward suggestions for your next city and nothing to carry between cities.",
};

export default function NextPassBenefitsPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="NEXT PASS"
        title="What the pass"
        accent="gets you"
        image={vibes.beachGroup.src}
        imageAlt={vibes.beachGroup.alt}
        subtitle="One scan at reception changes who you book with, how you choose the next city and what the stay costs."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Next Pass", href: "/next-pass" },
          { label: "Benefits" },
        ]}
      />

      {/* Benefits grid */}
      <section
        aria-labelledby="traveller-benefits"
        className="container-page pt-12 lg:pt-14"
      >
        <SectionHeading
          id="traveller-benefits"
          title="Benefits for"
          accent="travellers"
          subtitle="What a digital pass on your phone is actually worth between cities."
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {travellerBenefits.map((benefit) => (
            <li key={benefit.title}>
              <ValueCard
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            </li>
          ))}
        </ul>
      </section>

      {/* Comparison */}
      <section
        aria-labelledby="pass-comparison"
        className="container-page pt-12 lg:pt-14"
      >
        <SectionHeading
          id="pass-comparison"
          title="Regular booking vs"
          accent="NEXT PASS"
          subtitle="The same trip, seen from both sides."
        />

        {/* Table — tablet and desktop */}
        <div className="hidden overflow-hidden rounded-xl border border-ink-100 bg-white sm:block">
          <table className="w-full table-fixed border-collapse text-left">
            <caption className="sr-only">
              How booking a hostel normally compares with booking it using a
              NEXT PASS, aspect by aspect.
            </caption>
            <thead>
              <tr className="border-b border-ink-100 bg-ink-50">
                <th
                  scope="col"
                  className="w-[26%] px-4 py-3.5 text-[11px] font-semibold tracking-[0.12em] text-ink-500 uppercase"
                >
                  <span className="sr-only">Aspect</span>
                </th>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-[12.5px] font-semibold text-ink-600"
                >
                  Regular booking
                </th>
                <th
                  scope="col"
                  className="bg-brand-50 px-4 py-3.5 text-[12.5px] font-semibold text-brand-600"
                >
                  With NEXT PASS
                </th>
              </tr>
            </thead>
            <tbody>
              {travellerComparison.map((row) => (
                <tr key={row.aspect} className="border-b border-ink-100">
                  <th
                    scope="row"
                    className="px-4 py-4 align-top text-[12.5px] font-semibold text-ink-900"
                  >
                    {row.aspect}
                  </th>
                  <td className="px-4 py-4 align-top text-[13px] leading-relaxed text-ink-500">
                    {row.regular}
                  </td>
                  <td className="bg-brand-50 px-4 py-4 align-top text-[13px] leading-relaxed font-medium text-ink-900">
                    {row.nextPass}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Stacked cards — phones */}
        <ul className="grid gap-4 sm:hidden">
          {travellerComparison.map((row) => (
            <li
              key={row.aspect}
              className="overflow-hidden rounded-xl border border-ink-100 bg-white"
            >
              <h3 className="border-b border-ink-100 bg-ink-50 px-4 py-3 text-[13.5px] font-semibold text-ink-900">
                {row.aspect}
              </h3>
              <dl>
                <div className="px-4 py-3">
                  <dt className="text-[10.5px] tracking-[0.12em] text-ink-400 uppercase">
                    Regular booking
                  </dt>
                  <dd className="mt-1 text-[12.5px] leading-relaxed text-ink-500">
                    {row.regular}
                  </dd>
                </div>
                <div className="bg-brand-50 px-4 py-3">
                  <dt className="text-[10.5px] tracking-[0.12em] text-brand-600 uppercase">
                    With NEXT PASS
                  </dt>
                  <dd className="mt-1 text-[12.5px] leading-relaxed font-medium text-ink-900">
                    {row.nextPass}
                  </dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>

        <DemoNote>
          An honest note on savings: a NEXT PASS unlocks the NEXT STOP rate a
          partner hostel sets for itself, so the exact difference depends on the
          hostel, the room type and the dates you pick. It is always at least 5%
          below the regular price and is often more. Every price on this preview
          build is demo data rather than a live rate, and you always see both
          prices side by side before you book.
        </DemoNote>
      </section>

      {/* CTA */}
      <section aria-labelledby="benefits-cta" className="container-page py-14">
        <div className="rounded-2xl bg-ink-950 p-7 sm:p-9 lg:p-11">
          <Badge tone="light">Scan at any partner hostel</Badge>
          <h2
            id="benefits-cta"
            className="mt-4 max-w-[24ch] text-[24px] font-bold text-white sm:text-[27px]"
          >
            One scan, then the next city.
          </h2>
          <p className="mt-3 max-w-[56ch] text-[13.5px] leading-relaxed text-white/70">
            Read how the pass works end to end, or go straight to the hostels
            currently in the network and pick where this starts.
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
