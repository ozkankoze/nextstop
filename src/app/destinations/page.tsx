import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { DestinationsExplorer } from "@/components/sections/DestinationsExplorer";
import { destinations } from "@/data/destinations";
import { hostels } from "@/data/hostels";
import { vibes } from "@/data/vibes";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Every destination in the NEXT STOP network across Europe, from the Spanish launch cities to the Balkan backpacker trail.",
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Destinations"
        title="Where will you"
        accent="go next?"
        image={vibes.whiteSandGroup.src}
        imageAlt={vibes.whiteSandGroup.alt}
        subtitle={
          <>
            {destinations.length} destinations and {hostels.length} partner
            hostels across Europe. Pick a country, or search for the NEXT STOP
            you already have in mind.
          </>
        }
        crumbs={[{ label: "Home", href: "/" }, { label: "Destinations" }]}
      />

      <Suspense
        fallback={
          <div className="container-page py-16 text-[13px] text-ink-500">
            Loading destinations…
          </div>
        }
      >
        <DestinationsExplorer />
      </Suspense>
    </>
  );
}
