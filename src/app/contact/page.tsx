import type { Metadata } from "next";
import type { ComponentType, ReactNode, SVGProps } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Misc";
import { ContactForm } from "@/components/sections/ContactForm";
import {
  ArrowRightIcon,
  ClockIcon,
  HandshakeIcon,
  MailIcon,
  MegaphoneIcon,
} from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with NEXT STOP about a booking, a NEXT PASS, joining the network as a hostel, or anything else. One form, routed by subject.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="Contact"
        title="Talk to"
        accent="NEXT STOP."
        subtitle="Travellers, hostel owners and the merely curious all end up in the same inbox. Pick a subject, tell us what you need, and the message goes to whoever can actually answer it."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      {/* Form + channels */}
      <section
        aria-labelledby="contact-form"
        className="container-page pt-12 lg:pt-14"
      >
        <SectionHeading
          id="contact-form"
          title="Send us a"
          accent="message"
          subtitle="One form for everything. The subject you choose decides where it lands."
        />

        <div className="grid gap-8 lg:grid-cols-[1.55fr_1fr] lg:gap-12">
          <div className="min-w-0">
            <ContactForm />
          </div>

          <aside
            aria-labelledby="contact-channels"
            className="min-w-0 space-y-5"
          >
            <h3
              id="contact-channels"
              className="text-[15px] font-semibold text-ink-900"
            >
              Who you are writing to
            </h3>

            <ChannelCard
              icon={MailIcon}
              title="Traveler support"
              description="A QR code at reception that would not scan, a NEXT PASS code that will not apply, a booking with a partner hostel, or how the network works on the road. Choose “Traveler Support”, “Booking Question” or “NEXT PASS” as the subject and describe the city and hostel involved."
            />

            <ChannelCard
              icon={HandshakeIcon}
              title="Hostel partnership"
              description="If you run a hostel and want to join the network, the partner page covers what joining involves and takes the details we need in one go. You can also write here with the subject “Hostel Partnership” if you would rather ask first."
              action={
                <ButtonLink href="/partners#apply" variant="dark" size="sm">
                  Apply to partner
                  <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </ButtonLink>
              }
            />

            <ChannelCard
              icon={MegaphoneIcon}
              title="Press & everything else"
              description="Media questions, partnership ideas that are not a hostel, feedback on the site or anything the other subjects do not cover. Use “Other” and say up front what you are working on."
            />

            <div className="rounded-xl border border-ink-100 bg-ink-50 p-5">
              <h4 className="flex items-center gap-2 text-[14px] font-semibold text-ink-900">
                <ClockIcon aria-hidden className="h-4 w-4 text-brand-500" />
                Before you write
              </h4>
              <p className="mt-2 text-[12.5px] leading-relaxed text-ink-600">
                NEXT STOP is in pre-launch, so there is no phone line and no
                support desk yet, and published email addresses go live with the
                network rather than before it. The form above is the channel.
                Most common questions — how a pass is generated, how long a code
                lasts, who sets the room price — are already answered on the FAQ
                page.
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                <ButtonLink href="/faq" variant="outline" size="sm">
                  Read the FAQ
                </ButtonLink>
                <ButtonLink href="/next-pass" variant="ghost" size="sm">
                  How NEXT PASS works
                </ButtonLink>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Partner enquiry band */}
      <section aria-labelledby="contact-partner" className="container-page py-14">
        <div className="rounded-2xl bg-ink-950 p-7 sm:p-9 lg:p-11">
          <Badge tone="light">For hostels</Badge>
          <h2
            id="contact-partner"
            className="mt-4 max-w-[24ch] text-[24px] font-bold text-white sm:text-[27px]"
          >
            Running a hostel? Skip the form.
          </h2>
          <p className="mt-3 max-w-[56ch] text-[13.5px] leading-relaxed text-white/70">
            The partner page explains how the network works from your side of
            the reception desk — NEXT STOP bookings, credit for the guests you send
            on, and pricing you keep control of — and the application asks for
            everything we need in one pass.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/partners" variant="primary">
              Become a partner
              <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </ButtonLink>
            <ButtonLink href="/how-it-works" variant="light">
              How the network works
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

function ChannelCard({
  icon: Icon,
  title,
  description,
  action,
}: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <article className="rounded-xl border border-ink-100 bg-white p-5 shadow-[0_2px_10px_-6px_rgba(6,9,15,0.14)]">
      <span
        aria-hidden
        className="mb-4 grid h-10 w-10 place-items-center rounded-full bg-brand-50 text-brand-600"
      >
        <Icon className="h-[18px] w-[18px]" />
      </span>
      <h4 className="text-[15px] font-semibold text-ink-900">{title}</h4>
      <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-500">
        {description}
      </p>
      {action ? <div className="mt-4">{action}</div> : null}
    </article>
  );
}
