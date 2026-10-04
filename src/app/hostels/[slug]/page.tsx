import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HostelCard } from "@/components/cards/HostelCard";
import { HostelGallery } from "@/components/sections/HostelGallery";
import { HostelBookingPanel } from "@/components/sections/HostelBookingPanel";
import { ButtonLink } from "@/components/ui/Button";
import { Badge, DataIcon, DemoNote, SpecRow } from "@/components/ui/Misc";
import { euro } from "@/components/ui/PriceCompare";
import {
  ArrowRightIcon,
  MapPinIcon,
  QuoteIcon,
  StarIcon,
  TicketIcon,
} from "@/components/ui/Icons";
import {
  amenityLabels,
  getHostel,
  getHostelsByDestination,
  getSimilarHostels,
  hostels,
} from "@/data/hostels";
import { getDestination } from "@/data/destinations";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return hostels.map((hostel) => ({ slug: hostel.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const hostel = getHostel(slug);
  if (!hostel) return { title: "Hostel not found" };

  return {
    title: `${hostel.name}, ${hostel.city}`,
    description: hostel.summary,
  };
}

export default async function HostelPage({ params }: Props) {
  const { slug } = await params;
  const hostel = getHostel(slug);
  if (!hostel) notFound();

  const destination = getDestination(hostel.destinationSlug);
  const similar = getSimilarHostels(hostel, 3);
  const sameCityCount = getHostelsByDestination(hostel.destinationSlug).length;
  const savings = hostel.regularPrice - hostel.nextStopPrice;

  return (
    <>
      <PageHero
        size="sm"
        title={hostel.name}
        subtitle={hostel.summary}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Hostels", href: "/hostels" },
          { label: hostel.name },
        ]}
      >
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <p className="inline-flex items-center gap-1.5 rounded-md bg-brand-500 px-2.5 py-1 text-[12.5px] font-semibold text-white">
            <StarIcon aria-hidden className="h-3.5 w-3.5" />
            <span className="sr-only">Guest rating </span>
            {hostel.rating.toFixed(1)}
          </p>
          <p className="text-[12.5px] text-white/70">
            {hostel.reviewCount} guest reviews
          </p>
          <p className="inline-flex items-center gap-1.5 text-[12.5px] text-white/70">
            <MapPinIcon aria-hidden className="h-4 w-4 text-brand-400" />
            {hostel.neighbourhood} ·{" "}
            <Link
              href={`/destinations/${hostel.destinationSlug}`}
              className="underline-offset-2 hover:underline"
            >
              {hostel.city}, {hostel.country}
            </Link>
          </p>
        </div>
      </PageHero>

      <div className="container-page pt-10 lg:pt-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.9fr)_minmax(0,1fr)] lg:gap-10">
          {/* Main column */}
          <div className="min-w-0">
            <HostelGallery
              images={hostel.images}
              alt={hostel.alt}
              name={hostel.name}
            />

            <section aria-labelledby="hostel-about" className="mt-10">
              <SectionHeading id="hostel-about" title="About this" accent="hostel" />
              {hostel.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="max-w-[68ch] text-[14.5px] leading-[1.75] text-ink-600 not-first:mt-4"
                >
                  {paragraph}
                </p>
              ))}
            </section>

            <section aria-labelledby="hostel-amenities" className="mt-10">
              <SectionHeading id="hostel-amenities" title="What's" accent="included" />
              <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                {hostel.amenities.map((amenity) => (
                  <li key={amenity} className="flex items-center gap-2.5">
                    <span
                      aria-hidden
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600"
                    >
                      <DataIcon name={amenity} className="h-4 w-4" />
                    </span>
                    <span className="text-[12.5px] text-ink-600">
                      {amenityLabels[amenity]}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="hostel-rooms" className="mt-10">
              <SectionHeading
                id="hostel-rooms"
                title="Room"
                accent="options"
                subtitle="Prices are per night. The NEXT STOP rate needs a valid NEXT PASS code."
              />
              <ul className="space-y-3">
                {hostel.rooms.map((room) => (
                  <li
                    key={room.name}
                    className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-ink-100 bg-white p-4 shadow-[0_2px_10px_-6px_rgba(6,9,15,0.14)]"
                  >
                    <div className="min-w-0">
                      <p className="text-[14px] font-semibold text-ink-900">
                        {room.name}
                      </p>
                      <p className="mt-0.5 text-[12px] text-ink-500">
                        Price for {room.sleeps}
                      </p>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-[10.5px] text-ink-400">Regular</p>
                        <p className="text-[15px] font-bold text-ink-900">
                          {euro(room.regularPrice)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10.5px] text-ink-400">NEXT STOP</p>
                        <p className="text-[15px] font-bold text-brand-500">
                          {euro(room.nextStopPrice)}
                        </p>
                      </div>
                      <p className="rounded-md bg-save-bg px-2 py-1 text-[10.5px] font-medium text-save">
                        −{euro(room.regularPrice - room.nextStopPrice)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="hostel-location" className="mt-10">
              <SectionHeading id="hostel-location" title="Where you'll" accent="be" />
              <div className="overflow-hidden rounded-xl border border-ink-100 bg-white">
                <div
                  role="img"
                  aria-label={`Map placeholder for ${hostel.name} in ${hostel.neighbourhood}, ${hostel.city}`}
                  className="relative grid h-[220px] place-items-center bg-ink-100 bg-[linear-gradient(to_right,rgba(6,9,15,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,9,15,0.06)_1px,transparent_1px)] bg-[size:28px_28px]"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-500 text-white shadow-lg">
                    <MapPinIcon className="h-5 w-5" />
                  </span>
                </div>
                <div className="border-t border-ink-100 p-4">
                  <p className="text-[13px] font-medium text-ink-900">
                    {hostel.address}
                  </p>
                  <p className="mt-1 text-[11.5px] text-ink-400">
                    An interactive map is not connected in this preview build.
                  </p>
                </div>
              </div>
            </section>

            <section aria-labelledby="hostel-rules" className="mt-10">
              <SectionHeading id="hostel-rules" title="House" accent="rules" />
              <dl className="rounded-xl border border-ink-100 bg-white px-5 py-2 shadow-[0_2px_10px_-6px_rgba(6,9,15,0.14)]">
                {hostel.houseRules.map((rule) => (
                  <SpecRow
                    key={rule.label}
                    label={rule.label}
                    value={rule.value}
                  />
                ))}
              </dl>
            </section>

            <section aria-labelledby="hostel-reviews" className="mt-10">
              <SectionHeading
                id="hostel-reviews"
                title="Guest"
                accent="reviews"
                subtitle={`${hostel.rating.toFixed(1)} average from ${hostel.reviewCount} reviews.`}
              />
              <ul className="grid gap-4 sm:grid-cols-2">
                {hostel.reviews.map((review) => (
                  <li
                    key={review.name + review.month}
                    className="rounded-xl border border-ink-100 bg-white p-5 shadow-[0_2px_10px_-6px_rgba(6,9,15,0.14)]"
                  >
                    <QuoteIcon
                      aria-hidden
                      className="h-5 w-5 text-brand-200"
                    />
                    <p className="mt-3 text-[13px] leading-relaxed text-ink-600">
                      {review.text}
                    </p>
                    <div className="mt-4 flex items-center justify-between gap-3 border-t border-ink-100 pt-3">
                      <p className="text-[12px] font-medium text-ink-900">
                        {review.name}
                        <span className="font-normal text-ink-400">
                          {" "}
                          · {review.country} · {review.month}
                        </span>
                      </p>
                      <p className="inline-flex items-center gap-1 text-[12px] font-semibold text-brand-500">
                        <StarIcon aria-hidden className="h-3 w-3" />
                        {review.rating.toFixed(1)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <DemoNote>
                Reviews, ratings and prices on this page are demo content for the
                NEXT STOP preview. They are illustrative of the product, not real
                guest feedback.
              </DemoNote>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="min-w-0 lg:sticky lg:top-24 lg:self-start">
            <HostelBookingPanel hostel={hostel} />

            <div className="mt-5 rounded-xl border border-ink-100 bg-white p-5 shadow-[0_2px_10px_-6px_rgba(6,9,15,0.14)]">
              <Badge>
                <TicketIcon aria-hidden className="h-3.5 w-3.5" />
                NEXT PASS benefit
              </Badge>
              <p className="mt-3 text-[13px] leading-relaxed text-ink-600">
                Scan the NEXT STOP QR code at the partner hostel you are
                staying at now. The digital pass it puts on your phone unlocks{" "}
                {hostel.name}&apos;s NEXT STOP rate — {euro(savings)} less per night
                than the regular price, because the booking skips the big platforms&rsquo;
                booking fees.
              </p>
              <Link
                href="/next-pass"
                className="mt-3 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-brand-500 hover:underline"
              >
                How it works
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </Link>
            </div>

            {destination ? (
              <div className="mt-5 rounded-xl border border-ink-100 bg-white p-5 shadow-[0_2px_10px_-6px_rgba(6,9,15,0.14)]">
                <h2 className="text-[14px] font-semibold text-ink-900">
                  About {destination.city}
                </h2>
                <p className="mt-2 text-[12.5px] leading-relaxed text-ink-500">
                  {destination.tagline}
                </p>
                <dl className="mt-4">
                  <SpecRow
                    label="Average dorm bed"
                    value={`€${destination.avgDormPrice} / night`}
                  />
                  <SpecRow
                    label="Partner hostels"
                    value={String(sameCityCount)}
                  />
                  <SpecRow
                    label="Best time to go"
                    value={destination.bestMonths}
                  />
                </dl>
                <Link
                  href={`/destinations/${destination.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-brand-500 hover:underline"
                >
                  {destination.city} city guide
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </Link>
              </div>
            ) : null}
          </aside>
        </div>
      </div>

      {/* Similar hostels */}
      <section
        aria-labelledby="similar-hostels"
        className="container-page pt-12 lg:pt-14"
      >
        <SectionHeading
          id="similar-hostels"
          title="Similar"
          accent="hostels"
          action={{ label: "View all hostels", href: "/hostels" }}
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {similar.map((item) => (
            <li key={item.slug}>
              <HostelCard hostel={item} />
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="container-page py-14">
        <div className="rounded-2xl bg-ink-950 p-7 sm:p-9 lg:p-11">
          <Badge tone="light">NEXT PASS</Badge>
          <h2 className="mt-4 max-w-[24ch] text-[24px] font-bold text-white sm:text-[27px]">
            Not staying at a partner hostel yet?
          </h2>
          <p className="mt-3 max-w-[56ch] text-[13.5px] leading-relaxed text-white/70">
            Passes are generated by scanning the QR code at a partner
            hostel&apos;s reception during a stay. Find a partner hostel for
            your current city, and the next one is unlocked from there.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/hostels" variant="primary">
              Browse partner hostels
              <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </ButtonLink>
            <ButtonLink href="/how-it-works" variant="light">
              See how it works
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
