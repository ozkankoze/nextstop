import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HostelCard } from "@/components/cards/HostelCard";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { RouteCard } from "@/components/cards/RouteCard";
import { GuideCard } from "@/components/cards/GuideCard";
import { ButtonLink } from "@/components/ui/Button";
import { Badge, DemoNote, EmptyState } from "@/components/ui/Misc";
import {
  ArrowRightIcon,
  CheckIcon,
  CompassIcon,
  SparklesIcon,
  SunIcon,
} from "@/components/ui/Icons";
import {
  destinations,
  getDestination,
  getDestinations,
} from "@/data/destinations";
import { getHostelsByDestination } from "@/data/hostels";
import { getRoutes, getRoutesForDestination } from "@/data/routes";
import { getGuidesForDestination } from "@/data/guides";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) return { title: "Destination not found" };

  return {
    title: `${destination.city}, ${destination.country}`,
    description: destination.tagline,
  };
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) notFound();

  const cityHostels = getHostelsByDestination(destination.slug);
  const onward = getDestinations(destination.onward);
  const routes = [
    ...getRoutes(destination.routeSlugs),
    ...getRoutesForDestination(destination.slug),
  ].filter((route, index, all) => all.findIndex((r) => r.slug === route.slug) === index);
  const guides = getGuidesForDestination(destination.slug).slice(0, 3);
  const averageSaving = cityHostels.length
    ? Math.round(
        cityHostels.reduce((sum, h) => sum + (h.regularPrice - h.nextStopPrice), 0) /
          cityHostels.length
      )
    : 0;

  return (
    <>
      <PageHero
        size="lg"
        eyebrow={destination.country}
        title={destination.city}
        image={destination.heroImage}
        imageAlt={destination.alt}
        subtitle={destination.tagline}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Destinations", href: "/destinations" },
          { label: destination.city },
        ]}
      >
        <dl className="flex flex-wrap gap-x-10 gap-y-4">
          <div>
            <dt className="text-[11.5px] text-white/55">Average dorm bed</dt>
            <dd className="mt-1 text-[19px] font-bold text-white">
              €{destination.avgDormPrice}
              <span className="text-[12px] font-normal text-white/60">
                {" "}
                / night
              </span>
            </dd>
          </div>
          <div>
            <dt className="text-[11.5px] text-white/55">Average private room</dt>
            <dd className="mt-1 text-[19px] font-bold text-white">
              €{destination.avgPrivatePrice}
              <span className="text-[12px] font-normal text-white/60">
                {" "}
                / night
              </span>
            </dd>
          </div>
          <div>
            <dt className="text-[11.5px] text-white/55">Partner hostels</dt>
            <dd className="mt-1 text-[19px] font-bold text-white">
              {cityHostels.length}
            </dd>
          </div>
          <div>
            <dt className="text-[11.5px] text-white/55">Best time to go</dt>
            <dd className="mt-1 text-[14px] font-semibold text-white">
              {destination.bestMonths}
            </dd>
          </div>
        </dl>
      </PageHero>

      {/* Introduction */}
      <section className="container-page pt-12 lg:pt-14">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
          <div>
            <SectionHeading
              title={`${destination.city} in`}
              accent="short"
            />
            {destination.intro.map((paragraph, index) => (
              <p
                key={index}
                className="max-w-[68ch] text-[14.5px] leading-[1.75] text-ink-600 not-first:mt-4"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <aside className="rounded-xl border border-ink-100 bg-white p-5 shadow-[0_2px_10px_-6px_rgba(6,9,15,0.14)]">
            <h2 className="flex items-center gap-2 text-[14px] font-semibold text-ink-900">
              <SparklesIcon aria-hidden className="h-4 w-4 text-brand-500" />
              Backpacker tips
            </h2>
            <ul className="mt-4 space-y-3">
              {destination.backpackerTips.map((tip) => (
                <li key={tip} className="flex gap-2.5">
                  <CheckIcon
                    aria-hidden
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                  />
                  <span className="text-[12.5px] leading-relaxed text-ink-600">
                    {tip}
                  </span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* Partner hostels */}
      <section
        aria-labelledby="city-hostels"
        className="container-page pt-12 lg:pt-14"
      >
        <SectionHeading
          id="city-hostels"
          title="Founding Partner Hostels in"
          accent={destination.city}
          subtitle="Book any of these with a NEXT PASS to unlock the hostel's direct rate."
          action={{ label: "View all hostels", href: "/hostels" }}
        />

        {cityHostels.length > 0 ? (
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cityHostels.map((hostel) => (
              <li key={hostel.slug}>
                <HostelCard hostel={hostel} />
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState
            title={`No partner hostels in ${destination.city} yet`}
            description="This city is on the network map but has no confirmed partners so far. Browse the hostels we do have, or tell us about one you rate."
            action={
              <ButtonLink href="/hostels" variant="dark" size="sm">
                Browse hostels
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </ButtonLink>
            }
          />
        )}
      </section>

      {/* Why visit */}
      <section
        aria-labelledby="why-visit"
        className="container-page pt-12 lg:pt-14"
      >
        <SectionHeading
          id="why-visit"
          title="Why visit"
          accent={`${destination.city}?`}
        />
        <ul className="grid gap-5 md:grid-cols-3">
          {destination.whyVisit.map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-ink-100 bg-white p-5 shadow-[0_2px_10px_-6px_rgba(6,9,15,0.14)]"
            >
              <span
                aria-hidden
                className="mb-4 grid h-10 w-10 place-items-center rounded-full bg-brand-50 text-brand-600"
              >
                <CompassIcon className="h-[18px] w-[18px]" />
              </span>
              <h3 className="text-[14px] font-semibold text-ink-900">
                {item.title}
              </h3>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-500">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Things to do */}
      <section
        aria-labelledby="things-to-do"
        className="container-page pt-12 lg:pt-14"
      >
        <SectionHeading id="things-to-do" title="Things to" accent="do" />
        <ol className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {destination.thingsToDo.map((item, index) => (
            <li key={item.title} className="flex gap-4">
              <span
                aria-hidden
                className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink-900 text-[12px] font-bold text-white"
              >
                {index + 1}
              </span>
              <div>
                <h3 className="text-[14px] font-semibold text-ink-900">
                  {item.title}
                </h3>
                <p className="mt-1 max-w-[52ch] text-[12.5px] leading-relaxed text-ink-500">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Prices */}
      <section
        aria-labelledby="city-prices"
        className="container-page pt-12 lg:pt-14"
      >
        <SectionHeading
          id="city-prices"
          title="What a bed costs in"
          accent={destination.city}
        />
        <div className="grid gap-5 sm:grid-cols-3">
          <PriceStat
            label="Dorm bed"
            value={`€${destination.avgDormPrice}`}
            note="Average across partner hostels, per night"
          />
          <PriceStat
            label="Private room"
            value={`€${destination.avgPrivatePrice}`}
            note="Two people sharing, per night"
          />
          <PriceStat
            label="Average NEXT PASS saving"
            value={averageSaving > 0 ? `€${averageSaving}` : "—"}
            note={
              averageSaving > 0
                ? "Per night, versus the regular rate at partner hostels here"
                : "No partner hostels in this city yet"
            }
            highlight
          />
        </div>
        <DemoNote>
          Prices shown across NEXT STOP are demo figures for this preview build.
          They illustrate the intended model rather than live availability, and
          will be replaced with rates from partner hostels before booking opens.
        </DemoNote>
      </section>

      {/* Onward */}
      {onward.length > 0 ? (
        <section
          aria-labelledby="onward"
          className="container-page pt-12 lg:pt-14"
        >
          <SectionHeading
            id="onward"
            title="Suggested"
            accent="next stops"
            subtitle={`Where travellers usually head after ${destination.city}.`}
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {onward.map((item) => (
              <li key={item.slug}>
                <DestinationCard destination={item} variant="full" />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* Routes */}
      {routes.length > 0 ? (
        <section
          aria-labelledby="city-routes"
          className="container-page pt-12 lg:pt-14"
        >
          <SectionHeading
            id="city-routes"
            title="Routes through"
            accent={destination.city}
            action={{ label: "View all routes", href: "/routes" }}
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {routes.map((route) => (
              <li key={route.slug}>
                <RouteCard route={route} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* Guides */}
      {guides.length > 0 ? (
        <section
          aria-labelledby="city-guides"
          className="container-page pt-12 lg:pt-14"
        >
          <SectionHeading
            id="city-guides"
            title="Read before you"
            accent="go"
            action={{ label: "All travel guides", href: "/guides" }}
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <li key={guide.slug}>
                <GuideCard guide={guide} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* CTA */}
      <section className="container-page py-14">
        <div className="rounded-2xl bg-ink-950 p-7 sm:p-9 lg:p-11">
          <Badge tone="light">NEXT PASS</Badge>
          <h2 className="mt-4 max-w-[22ch] text-[24px] font-bold text-white sm:text-[27px]">
            Already staying at a partner hostel?
          </h2>
          <p className="mt-3 max-w-[56ch] text-[13.5px] leading-relaxed text-white/70">
            Scan the NEXT STOP QR code at reception. Your digital NEXT PASS
            appears on your phone, and the code unlocks direct booking at any
            partner hostel in {destination.city}.
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

function PriceStat({
  label,
  value,
  note,
  highlight = false,
}: {
  label: string;
  value: string;
  note: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-5 ${
        highlight
          ? "border-brand-200 bg-brand-50"
          : "border-ink-100 bg-white shadow-[0_2px_10px_-6px_rgba(6,9,15,0.14)]"
      }`}
    >
      <p className="flex items-center gap-2 text-[12px] text-ink-500">
        <SunIcon aria-hidden className="h-4 w-4 text-brand-500" />
        {label}
      </p>
      <p
        className={`mt-2 text-[28px] leading-none font-bold ${
          highlight ? "text-brand-600" : "text-ink-900"
        }`}
      >
        {value}
      </p>
      <p className="mt-2 text-[11.5px] text-ink-500">{note}</p>
    </div>
  );
}
