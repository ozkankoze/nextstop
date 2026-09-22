import type { ReactNode } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { ProseSection } from "@/components/ui/Prose";
import { ButtonLink } from "@/components/ui/Button";
import { ShieldIcon } from "@/components/ui/Icons";

export type LegalSection = {
  id: string;
  heading: string;
  body: ReactNode;
};

type LegalPageLayoutProps = {
  /** Plain leading words of the hero heading. */
  title: string;
  /** Words rendered in the brand pink. */
  accent?: string;
  eyebrow: string;
  subtitle: string;
  /** Final breadcrumb label, also used as the accessible name of the content. */
  crumbLabel: string;
  lastUpdated: string;
  sections: LegalSection[];
};

/**
 * Shared shell for /privacy and /terms: flat ink hero, sticky table of
 * contents and Prose sections. Plain anchors — no scroll-spy.
 */
export function LegalPageLayout({
  title,
  accent,
  eyebrow,
  subtitle,
  crumbLabel,
  lastUpdated,
  sections,
}: LegalPageLayoutProps) {
  return (
    <>
      <PageHero
        size="sm"
        eyebrow={eyebrow}
        title={title}
        accent={accent}
        subtitle={subtitle}
        crumbs={[{ label: "Home", href: "/" }, { label: crumbLabel }]}
      >
        <p className="text-[12.5px] text-white/60">
          Last updated{" "}
          <span className="font-medium text-white/85">{lastUpdated}</span>
        </p>
      </PageHero>

      <section aria-labelledby="legal-content" className="container-page py-14">
        <h2 id="legal-content" className="sr-only">
          {crumbLabel}
        </h2>

        <div className="grid gap-8 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-12">
          {/* Table of contents */}
          <div className="min-w-0">
            <nav
              aria-label="On this page"
              className="lg:sticky lg:top-28 lg:self-start"
            >
              <p className="mb-3 hidden text-[11px] font-semibold tracking-[0.16em] text-ink-400 uppercase lg:block">
                On this page
              </p>
              <ul className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:-mx-7 sm:px-7 lg:mx-0 lg:flex-col lg:gap-1.5 lg:overflow-visible lg:px-0">
                {sections.map((section, index) => (
                  <li key={section.id} className="shrink-0 lg:shrink">
                    <a
                      href={`#${section.id}`}
                      className="flex items-center gap-2.5 rounded-full border border-ink-200 bg-white px-3.5 py-2 text-[12.5px] font-medium whitespace-nowrap text-ink-600 transition-colors hover:border-brand-200 hover:text-brand-500 lg:rounded-lg lg:whitespace-normal"
                    >
                      <span aria-hidden className="text-[11px] text-ink-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Policy body */}
          <div className="min-w-0">
            <div className="rounded-xl border border-brand-100 bg-brand-50 p-5">
              <h3 className="flex items-center gap-2 text-[14px] font-semibold text-brand-700">
                <ShieldIcon aria-hidden className="h-4 w-4" />
                Draft copy, not legal advice
              </h3>
              <p className="mt-2 max-w-[68ch] text-[12.5px] leading-relaxed text-ink-600">
                NEXT STOP is a pre-launch preview. This page is draft product
                copy written to describe how the service is intended to work —
                it is not legal advice, and it is not a finished agreement. It
                will be reviewed by a qualified adviser and replaced before
                bookings open, and the version live at that point is the one
                that counts.
              </p>
            </div>

            {sections.map((section) => (
              <ProseSection
                key={section.id}
                id={section.id}
                heading={section.heading}
              >
                {section.body}
              </ProseSection>
            ))}

            <div className="mt-12 rounded-xl border border-ink-100 bg-white p-5 shadow-[0_2px_10px_-6px_rgba(6,9,15,0.14)] sm:p-6">
              <h3 className="text-[15px] font-semibold text-ink-900">
                Something here unclear?
              </h3>
              <p className="mt-1.5 max-w-[60ch] text-[12.5px] leading-relaxed text-ink-500">
                Questions about this page, or about what NEXT STOP does with a
                booking, go through the contact form. Say which section you are
                asking about so we can answer precisely.
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                <ButtonLink href="/contact" variant="dark" size="sm">
                  Contact us
                </ButtonLink>
                <ButtonLink href="/faq" variant="outline" size="sm">
                  Read the FAQ
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
