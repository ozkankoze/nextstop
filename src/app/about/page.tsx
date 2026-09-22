import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Badge, DemoNote, SpecRow, ValueCard } from "@/components/ui/Misc";
import { ScanFlow } from "@/components/sections/ScanFlow";
import {
  ArrowRightIcon,
  CheckIcon,
  HandshakeIcon,
  SparklesIcon,
} from "@/components/ui/Icons";
import { destinations, getDestination } from "@/data/destinations";
import { hostels } from "@/data/hostels";
import { nextPassSteps } from "@/data/next-pass";
import { siteTagline } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why NEXT STOP exists: a hostel-to-hostel network that keeps bookings direct, keeps commission out of the room rate, and follows the traveller from one city to the next.",
};

/* Counts are derived from the catalogue so the page never drifts from the data. */
const totalDestinations = destinations.length;
const spainDestinations = destinations.filter(
  (destination) => destination.region === "spain"
).length;
const balkanDestinations = totalDestinations - spainDestinations;
const partnerHostels = hostels.length;
const hostelCities = new Set(hostels.map((hostel) => hostel.destinationSlug))
  .size;

const heroDestination = getDestination("valencia");
const missionDestination = getDestination("granada");

const travellerBenefits = [
  {
    icon: "euro",
    title: "The hostel's own price",
    description:
      "A pass code unlocks the direct rate a hostel sets when it is not handing a commission to a marketplace. The saving comes out of the fee, not out of the hostel.",
  },
  {
    icon: "shield",
    title: "A bed vouched for by a bed",
    description:
      "Every partner was recommended by another partner on the same route. That is a sharper filter than a star rating from strangers you will never meet.",
  },
  {
    icon: "compass",
    title: "The next city, already scoped",
    description:
      "Destination pages carry onward suggestions, realistic bed prices and travel times, so deciding where to go after tomorrow takes minutes rather than an evening.",
  },
  {
    icon: "phone",
    title: "Nothing to join, nothing to install",
    description:
      "Scan the QR code at reception and the pass appears on your phone. No app, no membership, no account to create and nothing that renews once you fly home.",
  },
];

const hostelBenefits = [
  {
    icon: "bookings",
    title: "Bookings that arrive direct",
    description:
      "A guest who books with a pass code books with you. There is no marketplace sitting between the reservation and your reception desk.",
  },
  {
    icon: "qr",
    title: "Credit for the recommendation",
    description:
      "Your QR code carries your hostel's identifier. When a guest scans it and books onward, that booking is recorded against you instead of the recommendation disappearing.",
  },
  {
    icon: "route",
    title: "Guests from the hostels beside you",
    description:
      "Demand arrives from partners one or two stops up the route, which is exactly where your next arrivals are already sleeping tonight.",
  },
  {
    icon: "euro",
    title: "Pricing you still control",
    description:
      "You set the direct rate and your own house rules. NEXT STOP lists the hostel and passes the guest along; it does not take over your inventory.",
  },
];

const launchStats = [
  { label: "Destinations listed", value: String(totalDestinations) },
  { label: "Cities in Spain", value: String(spainDestinations) },
  { label: "Cities on the Balkan trail", value: String(balkanDestinations) },
  { label: "Founding partner hostels", value: String(partnerHostels) },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        size="lg"
        eyebrow="About NEXT STOP"
        title="Travel shouldn't end at"
        accent="checkout."
        image={heroDestination?.heroImage}
        imageAlt={heroDestination?.alt ?? ""}
        subtitle={`${siteTagline} NEXT STOP is a hostel-to-hostel network: you stay somewhere good, reception points you at the next place that is just as good, and the booking stays between you and the hostel.`}
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/next-pass" variant="primary">
            How NEXT PASS works
            <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </ButtonLink>
          <ButtonLink href="/partners" variant="light">
            Become a partner
          </ButtonLink>
        </div>
      </PageHero>

      {/* Our story */}
      <section aria-labelledby="story" className="container-page pt-12 lg:pt-14">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
          <div>
            <SectionHeading id="story" title="Our" accent="story" />
            <p className="max-w-[68ch] text-[14.5px] leading-[1.75] text-ink-600">
              Independent travellers do not take one holiday a year. They move
              city to city every few nights, deciding the next stop somewhere
              between a bus station and a common room, usually with a
              half-charged phone. Booking platforms are not built for that. Each
              stay is treated as an isolated transaction, the search starts from
              zero every time, and the hostel pays a commission for a guest it
              often could have taken directly.
            </p>
            <p className="mt-4 max-w-[68ch] text-[14.5px] leading-[1.75] text-ink-600">
              The idea started on the Balkan backpacker trail, where the same
              conversation happens at every reception desk: where are you going
              next, and who should you stay with when you get there. The answer
              was almost always a specific hostel, given by someone who had sent
              guests there before. That recommendation was doing real work and
              nobody was capturing it — not the traveller who still paid the
              marketplace price, and not the hostel that gave it away for free.
            </p>
            <p className="mt-4 max-w-[68ch] text-[14.5px] leading-[1.75] text-ink-600">
              NEXT STOP turns that conversation into a booking. We are launching
              in Spain, where the coastal and Andalusian routes are dense enough
              that a traveller can stay inside the network for weeks, and the
              Balkan cities the idea came from are mapped for the next phase.
              This site is a pre-launch preview: the model is real, the listings
              and prices in it are demo content until partners are signed.
            </p>
          </div>

          <aside className="h-fit rounded-xl border border-ink-100 bg-white p-5 shadow-[0_2px_10px_-6px_rgba(6,9,15,0.14)]">
            <h3 className="flex items-center gap-2 text-[14px] font-semibold text-ink-900">
              <SparklesIcon aria-hidden className="h-4 w-4 text-brand-500" />
              Where the project stands
            </h3>
            <dl className="mt-4">
              <SpecRow label="Stage" value="Pre-launch preview" />
              <SpecRow label="First market" value="Spain" />
              <SpecRow label="Destinations listed" value={totalDestinations} />
              <SpecRow label="Partner hostels" value={partnerHostels} />
              <SpecRow label="How you get a pass" value="Scan a partner QR" />
              <SpecRow label="App required" value="None" />
              <SpecRow label="Commission on bookings" value="None" />
            </dl>
          </aside>
        </div>
      </section>

      {/* Our mission */}
      <section
        aria-labelledby="mission"
        className="container-page pt-12 lg:pt-14"
      >
        <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          <div>
            <SectionHeading id="mission" title="Our" accent="mission" />
            <p className="max-w-[68ch] text-[14.5px] leading-[1.75] text-ink-600">
              We want to connect hostels and travellers into one network that
              follows the journey instead of ending at checkout. A stay should
              be able to open the next stay, in the next city, with a place the
              people who hosted you would actually send their own friends to.
            </p>
            <p className="mt-4 max-w-[68ch] text-[14.5px] leading-[1.75] text-ink-600">
              That means keeping bookings direct. The reservation belongs to the
              hostel and the guest, not to a middle layer that rewrites the
              price on the way through. NEXT STOP introduces the two and then
              gets out of the way.
            </p>
            <p className="mt-4 max-w-[68ch] text-[14.5px] leading-[1.75] text-ink-600">
              And it means keeping the value with the people who host. Money
              that currently leaves a small hostel as commission should stay in
              the building — in the beds, the breakfast and the staff who give
              the recommendations in the first place.
            </p>
          </div>

          {missionDestination ? (
            <figure className="overflow-hidden rounded-xl border border-ink-100 bg-white">
              <div className="photo-fallback relative aspect-[4/3] w-full">
                <Image
                  src={missionDestination.image}
                  alt={missionDestination.alt}
                  fill
                  sizes="(min-width: 1024px) 460px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-5 py-4 text-[12.5px] leading-relaxed text-ink-500">
                {missionDestination.city} is one of {totalDestinations} cities
                mapped for the network. The route between them is the product —
                not any single night in it.
              </figcaption>
            </figure>
          ) : null}
        </div>
      </section>

      {/* Why hostels */}
      <section
        aria-labelledby="why-hostels"
        className="container-page pt-12 lg:pt-14"
      >
        <SectionHeading
          id="why-hostels"
          title="Why"
          accent="hostels"
          subtitle="The recommendation network already exists. It just has no way to turn into a booking."
        />
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <div>
            <p className="max-w-[68ch] text-[14.5px] leading-[1.75] text-ink-600">
              Hostels already do the recommending. Ask at any reception desk
              which city to go to next, which night bus is bearable and where to
              sleep when you arrive, and you will get a real answer in under a
              minute. Reception desks are the most trusted travel-advice channel
              there is, because the person answering has no listing to promote
              and will see you at breakfast tomorrow.
            </p>
            <p className="mt-4 max-w-[68ch] text-[14.5px] leading-[1.75] text-ink-600">
              Independent hostels are also the ones squeezed hardest by
              commission. A twenty-bed place in an old-town building has no
              revenue team, no negotiated rate and little room to absorb a
              double-digit fee on every reservation — so the fee ends up in the
              bed price, and the guest pays it without ever seeing it.
            </p>
            <p className="mt-4 max-w-[68ch] text-[14.5px] leading-[1.75] text-ink-600">
              Both problems have the same fix. If the recommendation a hostel
              already gives can carry a booking directly to the hostel it
              recommends, the advice gets paid for and the commission stops
              being a cost of doing business.
            </p>
          </div>

          <ul className="space-y-3">
            {[
              "Reception already answers the “where next” question, dozens of times a week.",
              "The recommendation is specific — a named hostel, not a search result page.",
              "Small independents carry the commission that big chains negotiate down.",
              "Hostels on the same route are not really competitors; they are the next night.",
            ].map((point) => (
              <li
                key={point}
                className="flex gap-2.5 rounded-xl border border-ink-100 bg-white p-4 shadow-[0_2px_10px_-6px_rgba(6,9,15,0.14)]"
              >
                <CheckIcon
                  aria-hidden
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                />
                <span className="text-[12.5px] leading-relaxed text-ink-600">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why NEXT STOP */}
      <section
        aria-labelledby="why-next-stop"
        className="container-page pt-12 lg:pt-14"
      >
        <SectionHeading
          id="why-next-stop"
          title="Why"
          accent="NEXT STOP"
          subtitle="The model in plain words, before any of the marketing language."
          action={{ label: "Full NEXT PASS explainer", href: "/next-pass" }}
        />
        <p className="max-w-[68ch] text-[14.5px] leading-[1.75] text-ink-600">
          Every partner hostel has its own NEXT STOP QR code on display at
          reception. You point your phone camera at it, a NEXT STOP page opens
          in your browser — no app to install — and a short flow generates a
          unique NEXT PASS code that lives on your phone. Enter that code when
          you book your next partner hostel and it unlocks the direct rate: the
          price the hostel sets when no commission is coming off the top.
        </p>
        <p className="mt-4 max-w-[68ch] text-[14.5px] leading-[1.75] text-ink-600">
          The QR you scanned carries that hostel&rsquo;s identifier, so the
          pass records where your journey continued from and the hostel is
          credited for the onward booking. Then you arrive, scan the QR code at
          that reception, and the loop starts again. Nothing is printed, nothing
          is handed over and there is no membership to manage.
        </p>

        <ScanFlow className="mt-7" />

        <ol className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {nextPassSteps.map((step) => (
            <li key={step.step} className="flex gap-4">
              <span
                aria-hidden
                className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink-900 text-[12px] font-bold text-white"
              >
                {step.step}
              </span>
              <div>
                <h3 className="text-[14px] font-semibold text-ink-900">
                  {step.title}
                </h3>
                <p className="mt-1 max-w-[52ch] text-[12.5px] leading-relaxed text-ink-500">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* For travellers */}
      <section
        aria-labelledby="for-travelers"
        className="container-page pt-12 lg:pt-14"
      >
        <SectionHeading
          id="for-travelers"
          title="For"
          accent="travellers"
          subtitle="What a code on your phone is actually worth on a moving trip."
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {travellerBenefits.map((benefit) => (
            <li key={benefit.title}>
              <ValueCard
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            </li>
          ))}
        </ul>
      </section>

      {/* For hostels */}
      <section
        aria-labelledby="for-hostels"
        className="container-page pt-12 lg:pt-14"
      >
        <SectionHeading
          id="for-hostels"
          title="For"
          accent="hostels"
          subtitle="What joining the network is meant to be worth to a twenty-bed independent."
          action={{ label: "Become a partner", href: "/partners" }}
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {hostelBenefits.map((benefit) => (
            <li key={benefit.title}>
              <ValueCard
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            </li>
          ))}
        </ul>
      </section>

      {/* Where we are launching */}
      <section
        aria-labelledby="launching"
        className="container-page pt-12 lg:pt-14"
      >
        <SectionHeading
          id="launching"
          title="Where we are"
          accent="launching"
          subtitle="Spain first, then the Balkan route the idea came from."
          action={{ label: "All destinations", href: "/destinations" }}
        />
        <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-[0_2px_10px_-6px_rgba(6,9,15,0.14)] sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Spain first</Badge>
            <Badge tone="muted">
              <HandshakeIcon aria-hidden className="h-3.5 w-3.5" />
              {partnerHostels} founding partners
            </Badge>
          </div>
          <p className="mt-4 max-w-[68ch] text-[13.5px] leading-relaxed text-ink-600">
            The first cities are in Spain, chosen because the coastal and
            Andalusian routes are short hops apart — close enough that a pass
            generated at one reception is genuinely useful two days later. The
            Balkan cities are mapped and listed, and open as partners there sign
            up. Right now the network covers {partnerHostels} hostels across{" "}
            {hostelCities} {hostelCities === 1 ? "city" : "cities"}, inside{" "}
            {totalDestinations} destinations listed on the site.
          </p>
          <dl className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {launchStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-ink-100 bg-canvas p-5"
              >
                <dt className="text-[12px] text-ink-500">{stat.label}</dt>
                <dd className="mt-2 text-[28px] leading-none font-bold text-ink-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
          <DemoNote>
            These counts come from the destinations and hostels listed in this
            preview build. The hostels shown are illustrative partners rather
            than signed agreements, and the figures will change as real partners
            join before launch.
          </DemoNote>
        </div>
      </section>

      {/* CTA */}
      <section aria-labelledby="about-cta" className="container-page py-14">
        <div className="rounded-2xl bg-ink-950 p-7 sm:p-9 lg:p-11">
          <Badge tone="light">Join the network</Badge>
          <h2
            id="about-cta"
            className="mt-4 max-w-[24ch] text-[24px] font-bold text-white sm:text-[27px]"
          >
            One scan, one code, and a trip that keeps going.
          </h2>
          <p className="mt-3 max-w-[56ch] text-[13.5px] leading-relaxed text-white/70">
            If you are travelling, the pass is the part that matters: scan the
            QR code at reception, get your code, unlock the direct rate in the
            next city. If you run a hostel, the partner page explains what
            joining involves and what it is meant to be worth to you.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/next-pass" variant="primary">
              How NEXT PASS works
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
