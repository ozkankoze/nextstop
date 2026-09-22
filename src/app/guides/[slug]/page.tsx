import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Prose } from "@/components/ui/Prose";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { HostelCard } from "@/components/cards/HostelCard";
import { GuideCard } from "@/components/cards/GuideCard";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Misc";
import {
  ArrowRightIcon,
  CalendarIcon,
  ClockIcon,
  UserIcon,
} from "@/components/ui/Icons";
import { getGuide, getGuides, guides } from "@/data/guides";
import { getDestinations } from "@/data/destinations";
import { getHostel, type Hostel } from "@/data/hostels";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return { title: "Guide not found" };

  return {
    title: guide.title,
    description: guide.excerpt,
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const relatedDestinations = getDestinations(guide.relatedDestinations);
  const relatedHostels: Hostel[] = guide.relatedHostels
    .map((hostelSlug) => getHostel(hostelSlug))
    .filter((hostel): hostel is Hostel => Boolean(hostel));
  const relatedGuides = getGuides(guide.relatedGuides).filter(
    (related) => related.slug !== guide.slug
  );

  return (
    <>
      <PageHero
        size="md"
        title={guide.title}
        image={guide.image}
        imageAlt={guide.alt}
        subtitle={guide.excerpt}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Travel Guides", href: "/guides" },
          { label: guide.title },
        ]}
      >
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 text-[12.5px] text-white/70">
          <Badge tone="light">{guide.category}</Badge>
          <span className="inline-flex items-center gap-1.5">
            <ClockIcon aria-hidden className="h-3.5 w-3.5" />
            {guide.readingMinutes} min read
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarIcon aria-hidden className="h-3.5 w-3.5" />
            Updated {guide.updated}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <UserIcon aria-hidden className="h-3.5 w-3.5" />
            {guide.author}
          </span>
        </div>
      </PageHero>

      {/* Article */}
      <section
        aria-labelledby="guide-body"
        className="container-page pt-12 lg:pt-14"
      >
        <div className="grid gap-10 lg:grid-cols-[228px_minmax(0,1fr)] lg:gap-14">
          <nav
            aria-labelledby="guide-toc"
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <h2
              id="guide-toc"
              className="text-[11px] font-semibold tracking-[0.16em] text-ink-500 uppercase"
            >
              On this page
            </h2>
            <ol className="mt-3 space-y-1 border-l border-ink-100 lg:mt-4">
              {guide.sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-[12.5px] leading-snug text-ink-500 transition-colors hover:border-brand-500 hover:text-brand-500"
                  >
                    {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="min-w-0">
            <h2 id="guide-body" className="sr-only">
              {guide.title}
            </h2>

            <Prose>
              {guide.intro.map((paragraph, index) => (
                <p
                  key={index}
                  className={
                    index === 0
                      ? "text-[16px] leading-[1.7] text-ink-700"
                      : undefined
                  }
                >
                  {paragraph}
                </p>
              ))}
            </Prose>

            {guide.sections.map((section) => (
              <section
                key={section.id}
                aria-labelledby={section.id}
                className="mt-10"
              >
                <h2
                  id={section.id}
                  className="scroll-mt-28 text-[19px] font-bold text-ink-900"
                >
                  {section.heading}
                </h2>

                <Prose>
                  {section.body.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}

                  {section.bullets ? (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </Prose>
              </section>
            ))}
          </article>
        </div>
      </section>

      {/* Related destinations */}
      {relatedDestinations.length > 0 ? (
        <section
          aria-labelledby="guide-destinations"
          className="container-page pt-12 lg:pt-14"
        >
          <SectionHeading
            id="guide-destinations"
            title="Cities in this"
            accent="guide"
            action={{ label: "All destinations", href: "/destinations" }}
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedDestinations.map((destination) => (
              <li key={destination.slug}>
                <DestinationCard destination={destination} variant="full" />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* Related hostels */}
      {relatedHostels.length > 0 ? (
        <section
          aria-labelledby="guide-hostels"
          className="container-page pt-12 lg:pt-14"
        >
          <SectionHeading
            id="guide-hostels"
            title="Hostels worth"
            accent="booking"
            subtitle="Partner hostels mentioned in or matching this guide."
            action={{ label: "View all hostels", href: "/hostels" }}
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedHostels.map((hostel) => (
              <li key={hostel.slug}>
                <HostelCard hostel={hostel} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* Related guides */}
      {relatedGuides.length > 0 ? (
        <section
          aria-labelledby="guide-related"
          className="container-page pt-12 lg:pt-14"
        >
          <SectionHeading
            id="guide-related"
            title="Read"
            accent="next"
            action={{ label: "All travel guides", href: "/guides" }}
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedGuides.map((related) => (
              <li key={related.slug}>
                <GuideCard guide={related} />
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
            Ready to turn this into a trip?
          </h2>
          <p className="mt-3 max-w-[56ch] text-[13.5px] leading-relaxed text-white/70">
            Pick a route, or start from a single city. Once you are staying at a
            partner hostel, scan the NEXT STOP QR code at reception and the
            digital pass on your phone unlocks the direct rate at your next one.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/routes" variant="primary">
              Browse routes
              <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </ButtonLink>
            <ButtonLink href="/next-pass" variant="light">
              How NEXT PASS works
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
