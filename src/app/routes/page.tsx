import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RouteCard } from "@/components/cards/RouteCard";
import { ScanFlow } from "@/components/sections/ScanFlow";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Misc";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { routes } from "@/data/routes";
import { getDestination } from "@/data/destinations";

export const metadata: Metadata = {
  title: "Routes",
  description:
    "Multi-city backpacker routes through Spain and the Balkans, with the stops, journey times and partner hostels already worked out.",
};

const howToUse = [
  {
    title: "Stay at the first stop",
    description:
      "Book the opening hostel on the route however you normally would, arrive, and check in as usual. Being a guest is the only entry requirement — there is nothing to sign up for before you travel.",
  },
  {
    title: "Scan the QR code at reception",
    description:
      "Every partner hostel has its own NEXT STOP QR code on display. Point your phone camera at it, a NEXT STOP page opens in your browser, and a unique digital pass code appears on your phone.",
  },
  {
    title: "Book your next stop with the code",
    description:
      "Enter the code when you book the next partner hostel on the route to unlock its direct rate. At that reception you scan again, and the route carries on city by city.",
  },
];

export default function RoutesPage() {
  const heroDestination = getDestination("seville");
  const cityCount = new Set(
    routes.flatMap((route) => route.stops.map((stop) => stop.destinationSlug))
  ).size;

  return (
    <>
      <PageHero
        eyebrow="Routes"
        title="Your next stop"
        accent="starts here."
        image={heroDestination?.heroImage}
        imageAlt={heroDestination?.alt}
        subtitle={
          <>
            {routes.length} multi-city backpacker routes across {cityCount}{" "}
            cities in Spain and the Balkans. Each one lists the stops in order,
            how long to stay, how to get between them and which partner hostels
            are waiting at the other end.
          </>
        }
        crumbs={[{ label: "Home", href: "/" }, { label: "Routes" }]}
      />

      {/* All routes */}
      <section
        aria-labelledby="all-routes"
        className="container-page pt-12 lg:pt-14"
      >
        <SectionHeading
          id="all-routes"
          title="Pick a"
          accent="route"
          subtitle="Linear trips designed to be travelled overland, without doubling back."
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map((route) => (
            <li key={route.slug}>
              <RouteCard route={route} />
            </li>
          ))}
        </ul>
      </section>

      {/* How a route works with a NEXT PASS */}
      <section
        aria-labelledby="routes-next-pass"
        className="container-page pt-12 lg:pt-14"
      >
        <SectionHeading
          id="routes-next-pass"
          title="How to travel a route with a"
          accent="NEXT PASS"
          subtitle="Scan the QR code at reception, get a pass on your phone, and use it to unlock the partner rate at your next city. No app, nothing printed."
          action={{ label: "How NEXT PASS works", href: "/next-pass" }}
        />
        <ol className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {howToUse.map((item, index) => (
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

        <ScanFlow className="mt-8" />
      </section>

      {/* CTA */}
      <section className="container-page py-14">
        <div className="rounded-2xl bg-ink-950 p-7 sm:p-9 lg:p-11">
          <Badge tone="light">NEXT PASS</Badge>
          <h2 className="mt-4 max-w-[22ch] text-[24px] font-bold text-white sm:text-[27px]">
            Not sure which route is yours?
          </h2>
          <p className="mt-3 max-w-[56ch] text-[13.5px] leading-relaxed text-white/70">
            Start from a city instead. Every destination page shows what a bed
            costs, which partner hostels are there and where travellers usually
            head next.
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
