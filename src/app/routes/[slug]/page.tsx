import type { Metadata } from "next";
import type { ComponentType, SVGProps } from "react";
import { Photo } from "@/components/ui/Photo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HostelCard } from "@/components/cards/HostelCard";
import { RouteCard } from "@/components/cards/RouteCard";
import { ButtonLink } from "@/components/ui/Button";
import { Badge, DemoNote } from "@/components/ui/Misc";
import {
  ArrowRightIcon,
  BusIcon,
  CheckIcon,
  EuroIcon,
  FerryIcon,
  PlaneIcon,
  SparklesIcon,
  TrainIcon,
} from "@/components/ui/Icons";
import {
  getRoute,
  routes,
  type RouteStop,
  type TransportMode,
} from "@/data/routes";
import { getDestination, type Destination } from "@/data/destinations";
import { getHostelsByDestination, type Hostel } from "@/data/hostels";

type Props = { params: Promise<{ slug: string }> };

type ResolvedStop = { stop: RouteStop; destination: Destination };

const transportIcons: Record<
  TransportMode,
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  train: TrainIcon,
  bus: BusIcon,
  ferry: FerryIcon,
  flight: PlaneIcon,
};

const transportLabels: Record<TransportMode, string> = {
  train: "Train",
  bus: "Bus",
  ferry: "Ferry",
  flight: "Flight",
};

export function generateStaticParams() {
  return routes.map((route) => ({ slug: route.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const route = getRoute(slug);
  if (!route) return { title: "Route not found" };

  return {
    title: route.name,
    description: `${route.summary} — a ${route.days}-day backpacker route with ${route.stops.length} stops, journey times and partner hostels.`,
  };
}

export default async function RoutePage({ params }: Props) {
  const { slug } = await params;
  const route = getRoute(slug);
  if (!route) notFound();

  const stops: ResolvedStop[] = route.stops.flatMap((stop) => {
    const destination = getDestination(stop.destinationSlug);
    return destination ? [{ stop, destination }] : [];
  });

  const countries = [
    ...new Set(stops.map(({ destination }) => destination.country)),
  ];

  const routeHostels: Hostel[] = stops
    .flatMap(({ destination }) => getHostelsByDestination(destination.slug))
    .filter(
      (hostel, index, all) =>
        all.findIndex((h) => h.slug === hostel.slug) === index
    )
    .slice(0, 8);

  const otherRoutes = routes.filter((other) => other.slug !== route.slug);

  return (
    <>
      <PageHero
        size="lg"
        eyebrow="Route"
        title={route.name}
        image={route.image}
        imageAlt={route.alt}
        subtitle={route.summary}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Routes", href: "/routes" },
          { label: route.name },
        ]}
      >
        <dl className="flex flex-wrap gap-x-10 gap-y-4">
          <div>
            <dt className="text-[11.5px] text-white/55">Suggested length</dt>
            <dd className="mt-1 text-[19px] font-bold text-white">
              {route.days}
              <span className="text-[12px] font-normal text-white/60"> days</span>
            </dd>
          </div>
          <div>
            <dt className="text-[11.5px] text-white/55">Stops</dt>
            <dd className="mt-1 text-[19px] font-bold text-white">
              {stops.length}
            </dd>
          </div>
          <div>
            <dt className="text-[11.5px] text-white/55">Countries covered</dt>
            <dd className="mt-1 text-[14px] font-semibold text-white">
              {countries.join(" · ")}
            </dd>
          </div>
          <div>
            <dt className="text-[11.5px] text-white/55">Partner hostels</dt>
            <dd className="mt-1 text-[19px] font-bold text-white">
              {routeHostels.length}
            </dd>
          </div>
        </dl>
      </PageHero>

      {/* Introduction */}
      <section className="container-page pt-12 lg:pt-14">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
          <div>
            <SectionHeading title="The route in" accent="short" />
            {route.intro.map((paragraph, index) => (
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
              Best for
            </h2>
            <ul className="mt-4 space-y-3">
              {route.bestFor.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <CheckIcon
                    aria-hidden
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                  />
                  <span className="text-[12.5px] leading-relaxed text-ink-600">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-5 rounded-lg border border-brand-100 bg-brand-50 p-4">
              <h3 className="flex items-center gap-2 text-[12.5px] font-semibold text-brand-700">
                <EuroIcon aria-hidden className="h-4 w-4" />
                What it costs
              </h3>
              <p className="mt-2 text-[12.5px] leading-relaxed text-ink-600">
                {route.budgetNote}
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Itinerary timeline */}
      <section
        aria-labelledby="itinerary"
        className="container-page pt-12 lg:pt-14"
      >
        <SectionHeading
          id="itinerary"
          title="Stop by"
          accent="stop"
          subtitle={`${stops.length} cities over roughly ${route.days} days, in the order they work best.`}
        />

        <ol className="mt-2">
          {stops.map(({ stop, destination }, index) => {
            const isLast = index === stops.length - 1;
            const nextStop = stops[index + 1];
            const cityHostels = getHostelsByDestination(destination.slug);
            const shown = cityHostels.slice(0, 2);
            const remaining = cityHostels.length - shown.length;
            const OnwardIcon = stop.onward
              ? transportIcons[stop.onward.mode]
              : null;

            return (
              <li
                key={`${stop.destinationSlug}-${index}`}
                className="relative flex gap-4 pb-8 last:pb-0 sm:gap-5"
              >
                {!isLast ? (
                  <span
                    aria-hidden
                    className="absolute top-12 bottom-0 left-[19px] border-l-2 border-dashed border-brand-200"
                  />
                ) : null}

                <span
                  aria-hidden
                  className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-500 text-[13px] font-bold text-white"
                >
                  {index + 1}
                </span>

                <div className="min-w-0 flex-1">
                  <article className="overflow-hidden rounded-xl border border-ink-100 bg-white shadow-[0_2px_10px_-6px_rgba(6,9,15,0.14)] sm:flex">
                    <div className="photo-fallback relative aspect-16/9 sm:aspect-auto sm:w-[220px] sm:shrink-0 lg:w-[248px]">
                      <Photo
                        src={destination.image}
                        alt={destination.alt}
                        fill
                        sizes="(min-width: 1024px) 248px, (min-width: 640px) 220px, 90vw"
                        className="object-cover"
                      />
                    </div>

                    <div className="min-w-0 flex-1 p-5">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <h3 className="text-[17px] font-semibold text-ink-900">
                          <Link
                            href={`/destinations/${destination.slug}`}
                            className="transition-colors hover:text-brand-500"
                          >
                            {destination.city}
                          </Link>
                        </h3>
                        <span className="text-[12px] text-ink-500">
                          {destination.country}
                        </span>
                        <Badge>
                          {stop.nights}{" "}
                          {stop.nights === 1 ? "night" : "nights"}
                        </Badge>
                      </div>

                      <p className="mt-3 max-w-[60ch] text-[13.5px] leading-relaxed text-ink-600">
                        {stop.why}
                      </p>

                      <p className="mt-3 flex gap-2.5 text-[12.5px] leading-relaxed text-ink-500">
                        <SparklesIcon
                          aria-hidden
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                        />
                        <span>
                          <span className="font-semibold text-ink-900">
                            Don&apos;t miss:{" "}
                          </span>
                          {stop.dontMiss}
                        </span>
                      </p>

                      {shown.length > 0 ? (
                        <div className="mt-4 rounded-lg border border-ink-100 bg-ink-50 p-3.5">
                          <h4 className="text-[11px] font-semibold tracking-[0.14em] text-ink-500 uppercase">
                            Partner hostels in {destination.city}
                          </h4>
                          <ul className="mt-2.5 space-y-2">
                            {shown.map((hostel) => (
                              <li
                                key={hostel.slug}
                                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
                              >
                                <Link
                                  href={`/hostels/${hostel.slug}`}
                                  className="text-[12.5px] font-medium text-ink-900 transition-colors hover:text-brand-500"
                                >
                                  {hostel.name}
                                </Link>
                                <span className="text-[11.5px] text-ink-500">
                                  €{hostel.nextStopPrice} a night with a NEXT
                                  PASS
                                </span>
                              </li>
                            ))}
                          </ul>
                          {remaining > 0 ? (
                            <p className="mt-2.5 text-[11.5px] text-ink-500">
                              <Link
                                href={`/destinations/${destination.slug}`}
                                className="font-medium text-brand-500 hover:underline"
                              >
                                +{remaining} more in {destination.city}
                              </Link>
                            </p>
                          ) : null}
                        </div>
                      ) : null}

                      <Link
                        href={`/destinations/${destination.slug}`}
                        className="group mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-brand-500"
                      >
                        {destination.city} city guide
                        <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </article>

                  {stop.onward && OnwardIcon ? (
                    <div className="mt-4 flex gap-3 rounded-lg border border-dashed border-brand-200 bg-brand-50 px-4 py-3">
                      <span
                        aria-hidden
                        className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-brand-600"
                      >
                        <OnwardIcon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[12.5px] font-semibold text-ink-900">
                          {transportLabels[stop.onward.mode]} to{" "}
                          {nextStop
                            ? nextStop.destination.city
                            : "the next stop"}
                          <span className="font-normal text-ink-500">
                            {" "}
                            · {stop.onward.duration}
                          </span>
                        </p>
                        <p className="mt-1 max-w-[58ch] text-[12px] leading-relaxed text-ink-500">
                          {stop.onward.note}
                        </p>
                      </div>
                    </div>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ol>

        <DemoNote>
          Journey times on this route are indicative. Operators change
          timetables by season, so check the current schedule before you commit
          to a travel day.
        </DemoNote>
      </section>

      {/* Hostels along the route */}
      {routeHostels.length > 0 ? (
        <section
          aria-labelledby="route-hostels"
          className="container-page pt-12 lg:pt-14"
        >
          <SectionHeading
            id="route-hostels"
            title="Where to stay on"
            accent="this route"
            subtitle="Partner hostels in the cities above, bookable at the NEXT STOP rate with a NEXT PASS."
            action={{ label: "View all hostels", href: "/hostels" }}
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {routeHostels.map((hostel) => (
              <li key={hostel.slug}>
                <HostelCard hostel={hostel} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* Other routes */}
      {otherRoutes.length > 0 ? (
        <section
          aria-labelledby="other-routes"
          className="container-page pt-12 lg:pt-14"
        >
          <SectionHeading
            id="other-routes"
            title="Other"
            accent="routes"
            action={{ label: "All routes", href: "/routes" }}
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherRoutes.map((other) => (
              <li key={other.slug}>
                <RouteCard route={other} />
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
            Travel {route.name} through the network
          </h2>
          <p className="mt-3 max-w-[56ch] text-[13.5px] leading-relaxed text-white/70">
            Check into a partner hostel in{" "}
            {stops[0] ? stops[0].destination.city : "your first city"} and scan
            the NEXT STOP QR code at reception. A digital pass appears on your
            phone, and the code unlocks the NEXT STOP rate at the next hostel on
            this route.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/next-pass" variant="primary">
              How NEXT PASS works
              <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </ButtonLink>
            <ButtonLink href="/destinations" variant="light">
              Browse destinations
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
