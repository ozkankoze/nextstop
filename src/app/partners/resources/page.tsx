import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Badge, DataIcon, DemoNote } from "@/components/ui/Misc";
import { ArrowRightIcon, MailIcon } from "@/components/ui/Icons";
import { PartnerResourceAction } from "@/components/sections/PartnerResourceAction";
import { partnerResources } from "@/data/partners";
import { vibes } from "@/data/vibes";

export const metadata: Metadata = {
  title: "Partner Resources",
  description:
    "Everything a NEXT STOP partner hostel needs behind the desk: the reception guide, a staff quick guide, the partner FAQ and the material still being prepared.",
};

const availableCount = partnerResources.filter(
  (resource) => resource.status === "available"
).length;

export default function PartnerResourcesPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="Partner resource centre"
        title="Everything you need behind"
        accent="the desk"
        image={vibes.stringLights.src}
        imageAlt={vibes.stringLights.alt}
        subtitle="Your hostel's QR code kit, the reception guide and everything else a partner needs to run the NEXT PASS flow at the desk."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Become a Partner", href: "/partners" },
          { label: "Resources" },
        ]}
      />

      {/* Resource grid */}
      <section
        aria-labelledby="partner-resources"
        className="container-page pt-12 lg:pt-14"
      >
        <SectionHeading
          id="partner-resources"
          title="Partner"
          accent="resources"
          subtitle={`${availableCount} of ${partnerResources.length} are written; the rest are still being prepared.`}
        />

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {partnerResources.map((resource) => (
            <li key={resource.slug}>
              <article className="flex h-full flex-col rounded-xl border border-ink-100 bg-white p-5 shadow-[0_2px_10px_-6px_rgba(6,9,15,0.14)]">
                <span
                  aria-hidden
                  className="mb-4 grid h-10 w-10 place-items-center rounded-full bg-brand-50 text-brand-600"
                >
                  <DataIcon
                    name={resource.icon}
                    className="h-[18px] w-[18px]"
                  />
                </span>

                <h3 className="text-[15px] font-semibold text-ink-900">
                  {resource.title}
                </h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-500">
                  {resource.description}
                </p>

                <p className="mt-4 text-[11px] font-semibold tracking-[0.12em] text-ink-400 uppercase">
                  {resource.format}
                </p>

                <div className="mt-auto">
                  <PartnerResourceAction
                    title={resource.title}
                    status={resource.status}
                  />
                </div>
              </article>
            </li>
          ))}
        </ul>

        <DemoNote>
          This is a preview build, so no files are served from this page yet.
          The material marked as written exists as drafts shared directly with
          founding partners; everything marked coming soon is still being made.
          Nothing here is downloadable until a partner account exists.
        </DemoNote>
      </section>

      {/* Need something else */}
      <section
        aria-labelledby="need-something-else"
        className="container-page pt-12 lg:pt-14"
      >
        <SectionHeading
          id="need-something-else"
          title="Need something"
          accent="else?"
          subtitle="If it is not on this page, it is probably a short conversation away."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <article className="rounded-xl border border-ink-100 bg-white p-6 shadow-[0_2px_10px_-6px_rgba(6,9,15,0.14)]">
            <span
              aria-hidden
              className="mb-4 grid h-10 w-10 place-items-center rounded-full bg-brand-50 text-brand-600"
            >
              <MailIcon className="h-[18px] w-[18px]" />
            </span>
            <h3 className="text-[15px] font-semibold text-ink-900">
              Ask the team directly
            </h3>
            <p className="mt-1.5 max-w-[46ch] text-[12.5px] leading-relaxed text-ink-500">
              Signage in a language we have not covered, a wording change for
              your desk, or a question about how a code is attributed — write to
              us and a person answers.
            </p>
            <div className="mt-5">
              <ButtonLink href="/contact" variant="dark" size="sm">
                Contact us
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </ButtonLink>
            </div>
          </article>

          <article className="rounded-xl border border-ink-100 bg-white p-6 shadow-[0_2px_10px_-6px_rgba(6,9,15,0.14)]">
            <span
              aria-hidden
              className="mb-4 grid h-10 w-10 place-items-center rounded-full bg-brand-50 text-brand-600"
            >
              <DataIcon name="check" className="h-[18px] w-[18px]" />
            </span>
            <h3 className="text-[15px] font-semibold text-ink-900">
              Read the common questions first
            </h3>
            <p className="mt-1.5 max-w-[46ch] text-[12.5px] leading-relaxed text-ink-500">
              How the pass works, how a guest gets one from your QR code, how
              bookings are made and what happens to a code once it has been used
              — answered in one place.
            </p>
            <div className="mt-5">
              <ButtonLink href="/faq" variant="outline" size="sm">
                Read the FAQ
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </ButtonLink>
            </div>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section
        aria-labelledby="partner-resources-cta"
        className="container-page py-14"
      >
        <div className="rounded-2xl bg-ink-950 p-7 sm:p-9 lg:p-11">
          <Badge tone="light">Founding partners</Badge>
          <h2
            id="partner-resources-cta"
            className="mt-4 max-w-[24ch] text-[24px] font-bold text-white sm:text-[27px]"
          >
            Your QR code comes with the welcome email.
          </h2>
          <p className="mt-3 max-w-[56ch] text-[13.5px] leading-relaxed text-white/70">
            Apply as a founding partner and your QR code kit, the reception
            guide and the staff quick guide arrive together — no portal login
            needed to get started.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/partners#apply" variant="primary">
              Become a partner
              <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </ButtonLink>
            <ButtonLink href="/partners/benefits" variant="light">
              Partner benefits
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
