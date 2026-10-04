import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Badge, DemoNote, ValueCard } from "@/components/ui/Misc";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { partnerBenefits, partnerComparison } from "@/data/partners";
import { vibes } from "@/data/vibes";

export const metadata: Metadata = {
  title: "Partner Benefits",
  description:
    "What a hostel gets from the NEXT STOP network: NEXT STOP bookings it keeps, referrals between partners on the same route, exposure beyond its own city and a reception flow that is one QR code on the desk.",
};

export default function PartnerBenefitsPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="For hostels"
        title="What the network gives"
        accent="you back"
        image={vibes.laughingGroup.src}
        imageAlt={vibes.laughingGroup.alt}
        subtitle="Direct bookings you keep, referrals from hostels one city upstream, and a reception flow that is one QR code on the desk."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Become a Partner", href: "/partners" },
          { label: "Partner Benefits" },
        ]}
      />

      {/* Benefits grid */}
      <section
        aria-labelledby="partner-benefits"
        className="container-page pt-12 lg:pt-14"
      >
        <SectionHeading
          id="partner-benefits"
          title="Benefits for"
          accent="partner hostels"
          subtitle="Six things joining the network is meant to change about how guests reach you."
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {partnerBenefits.map((benefit) => (
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
        aria-labelledby="partner-comparison"
        className="container-page pt-12 lg:pt-14"
      >
        <SectionHeading
          id="partner-comparison"
          title="A booking platform vs"
          accent="NEXT STOP"
          subtitle="The same guest, arriving through two very different routes."
        />

        {/* Table — tablet and desktop */}
        <div className="hidden overflow-hidden rounded-xl border border-ink-100 bg-white sm:block">
          <table className="w-full table-fixed border-collapse text-left">
            <caption className="sr-only">
              How a traditional booking platform compares with the NEXT STOP
              network, aspect by aspect, from a hostel&apos;s point of view.
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
                  Traditional booking platform
                </th>
                <th
                  scope="col"
                  className="bg-brand-50 px-4 py-3.5 text-[12.5px] font-semibold text-brand-600"
                >
                  NEXT STOP
                </th>
              </tr>
            </thead>
            <tbody>
              {partnerComparison.map((row) => (
                <tr key={row.aspect} className="border-b border-ink-100">
                  <th
                    scope="row"
                    className="px-4 py-4 align-top text-[12.5px] font-semibold text-ink-900"
                  >
                    {row.aspect}
                  </th>
                  <td className="px-4 py-4 align-top text-[13px] leading-relaxed text-ink-500">
                    {row.platform}
                  </td>
                  <td className="bg-brand-50 px-4 py-4 align-top text-[13px] leading-relaxed font-medium text-ink-900">
                    {row.nextStop}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Stacked cards — phones */}
        <ul className="grid gap-4 sm:hidden">
          {partnerComparison.map((row) => (
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
                    Traditional booking platform
                  </dt>
                  <dd className="mt-1 text-[12.5px] leading-relaxed text-ink-500">
                    {row.platform}
                  </dd>
                </div>
                <div className="bg-brand-50 px-4 py-3">
                  <dt className="text-[10.5px] tracking-[0.12em] text-brand-600 uppercase">
                    NEXT STOP
                  </dt>
                  <dd className="mt-1 text-[12.5px] leading-relaxed font-medium text-ink-900">
                    {row.nextStop}
                  </dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>

        <DemoNote>
          An honest note on numbers: NEXT STOP is pre-launch, so this page
          publishes no commission rate, no conversion figure and no
          booking-volume claim. None of them exist yet to publish. Commercial
          terms are agreed individually with founding partners while the network
          is being built, and the comparison above describes how the two models
          differ in shape rather than what either one returns.
        </DemoNote>
      </section>

      {/* CTA */}
      <section
        aria-labelledby="partner-benefits-cta"
        className="container-page py-14"
      >
        <div className="rounded-2xl bg-ink-950 p-7 sm:p-9 lg:p-11">
          <Badge tone="light">Founding partners</Badge>
          <h2
            id="partner-benefits-cta"
            className="mt-4 max-w-[24ch] text-[24px] font-bold text-white sm:text-[27px]"
          >
            Put your hostel on the route.
          </h2>
          <p className="mt-3 max-w-[56ch] text-[13.5px] leading-relaxed text-white/70">
            Applications for the founding phase are open. Send us the hostel and
            we will come back with what joining would look like for you — or
            read the reception material first.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/partners#apply" variant="primary">
              Apply as a founding partner
              <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </ButtonLink>
            <ButtonLink href="/partners/resources" variant="light">
              Partner resources
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
