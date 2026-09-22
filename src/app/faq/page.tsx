import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Misc";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { faqCategories } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about the digital NEXT PASS and the QR code at reception, booking with partner hostels, payments, joining the network as a hostel and where NEXT STOP operates.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="Help centre"
        title="Questions,"
        accent="answered."
        subtitle="Everything we are asked most often about the digital NEXT PASS, booking with partner hostels and how the network is put together."
        crumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />

      {/* Categories */}
      <section
        aria-labelledby="faq-index"
        className="container-page pt-12 lg:pt-14"
      >
        <h2 id="faq-index" className="sr-only">
          All questions by category
        </h2>

        <div className="grid gap-8 lg:grid-cols-[210px_minmax(0,1fr)] lg:gap-12">
          {/* Category navigation */}
          <div className="min-w-0">
            <nav
              aria-label="FAQ categories"
              className="lg:sticky lg:top-28 lg:self-start"
            >
              <p className="mb-3 hidden text-[11px] font-semibold tracking-[0.16em] text-ink-400 uppercase lg:block">
                Categories
              </p>
              <ul className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:-mx-7 sm:px-7 lg:mx-0 lg:flex-col lg:gap-1.5 lg:overflow-visible lg:px-0">
                {faqCategories.map((category) => (
                  <li key={category.slug} className="shrink-0 lg:shrink">
                    <a
                      href={`#${category.slug}`}
                      className="flex items-center justify-between gap-3 rounded-full border border-ink-200 bg-white px-3.5 py-2 text-[12.5px] font-medium whitespace-nowrap text-ink-600 transition-colors hover:border-brand-200 hover:text-brand-500 lg:rounded-lg"
                    >
                      {category.title}
                      <span
                        aria-hidden
                        className="hidden text-[11px] text-ink-400 lg:inline"
                      >
                        {category.items.length}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Answers */}
          <div className="min-w-0">
            {faqCategories.map((category) => (
              <section
                key={category.slug}
                id={category.slug}
                aria-labelledby={`faq-${category.slug}`}
                className="scroll-mt-28 not-first:mt-12"
              >
                <SectionHeading
                  id={`faq-${category.slug}`}
                  title={category.title}
                  subtitle={`${category.items.length} question${
                    category.items.length === 1 ? "" : "s"
                  }`}
                />
                <Accordion items={category.items} />
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* Still need help */}
      <section aria-labelledby="faq-help" className="container-page py-14">
        <div className="rounded-2xl bg-ink-950 p-7 sm:p-9 lg:p-11">
          <Badge tone="light">Still need help?</Badge>
          <h2
            id="faq-help"
            className="mt-4 max-w-[24ch] text-[24px] font-bold text-white sm:text-[27px]"
          >
            Not covered above? Ask us directly.
          </h2>
          <p className="mt-3 max-w-[56ch] text-[13.5px] leading-relaxed text-white/70">
            Travellers, hostels and anyone curious about how the network is put
            together are all welcome to get in touch. If you run a hostel and
            want to join, the partner page is the faster route.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="primary">
              Contact us
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
