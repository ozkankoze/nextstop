import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GuidesExplorer } from "@/components/sections/GuidesExplorer";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Misc";
import { ArrowRightIcon, CalendarIcon, ClockIcon } from "@/components/ui/Icons";
import { guides } from "@/data/guides";
import { vibes } from "@/data/vibes";

export const metadata: Metadata = {
  title: "Travel Guides",
  description:
    "City guides, budgets, transport and hostel advice for backpacking Spain and the Balkans, written for people travelling the NEXT STOP network.",
};

export default function GuidesPage() {
  const featured = guides[0];
  const categoryCount = new Set(guides.map((guide) => guide.category)).size;

  return (
    <>
      <PageHero
        eyebrow="Travel Guides"
        title="Travel smarter."
        accent="Go further."
        image={vibes.rockyTrailGroup.src}
        imageAlt={vibes.rockyTrailGroup.alt}
        subtitle={
          <>
            {guides.length} guides across {categoryCount} topics — what a day
            costs, which neighbourhood to sleep in, when the train beats the
            bus, and the customs that catch everyone out on a first trip.
          </>
        }
        crumbs={[{ label: "Home", href: "/" }, { label: "Travel Guides" }]}
      />

      {/* Featured guide */}
      {featured ? (
        <section
          aria-labelledby="featured-guide"
          className="container-page pt-12 lg:pt-14"
        >
          <SectionHeading
            id="featured-guide"
            title="Start"
            accent="here"
            subtitle="The guide to read first if you are heading for the founding cities."
          />

          <article className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-[0_2px_10px_-4px_rgba(6,9,15,0.12)] lg:flex">
            <Link
              href={`/guides/${featured.slug}`}
              className="photo-fallback relative block aspect-16/9 overflow-hidden lg:aspect-auto lg:w-[52%] lg:shrink-0"
            >
              <Image
                src={featured.image}
                alt={featured.alt}
                fill
                priority
                sizes="(min-width: 1024px) 620px, 100vw"
                className="object-cover"
              />
            </Link>

            <div className="flex flex-1 flex-col justify-center p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-2.5">
                <Badge>{featured.category}</Badge>
                <span className="inline-flex items-center gap-1 text-[11.5px] text-ink-400">
                  <ClockIcon aria-hidden className="h-3.5 w-3.5" />
                  {featured.readingMinutes} min read
                </span>
                <span className="inline-flex items-center gap-1 text-[11.5px] text-ink-400">
                  <CalendarIcon aria-hidden className="h-3.5 w-3.5" />
                  Updated {featured.updated}
                </span>
              </div>

              <h3 className="mt-4 text-[24px] leading-tight font-bold text-ink-900 sm:text-[28px]">
                <Link
                  href={`/guides/${featured.slug}`}
                  className="transition-colors hover:text-brand-500"
                >
                  {featured.title}
                </Link>
              </h3>

              <p className="mt-3 max-w-[54ch] text-[13.5px] leading-relaxed text-ink-500">
                {featured.excerpt}
              </p>

              <p className="mt-4 max-w-[58ch] text-[13.5px] leading-relaxed text-ink-600">
                {featured.intro[0]}
              </p>

              <div className="mt-6">
                <ButtonLink href={`/guides/${featured.slug}`} variant="dark">
                  Read the guide
                  <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </ButtonLink>
              </div>
            </div>
          </article>
        </section>
      ) : null}

      <Suspense
        fallback={
          <div className="container-page py-16 text-[13px] text-ink-500">
            Loading guides…
          </div>
        }
      >
        <GuidesExplorer />
      </Suspense>
    </>
  );
}
