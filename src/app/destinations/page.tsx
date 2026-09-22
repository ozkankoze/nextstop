import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { DestinationsExplorer } from "@/components/sections/DestinationsExplorer";
import { destinations } from "@/data/destinations";
import { hostels } from "@/data/hostels";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Every city in the NEXT STOP network, from the Spanish launch cities to the Balkan backpacker trail.",
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Destinations"
        title="Where will you"
        accent="go next?"
        image="https://images.unsplash.com/photo-1721952931546-5156e9deb063?auto=format&fit=crop&w=2000&q=80"
        imageAlt="A cobblestone street lined with white and yellow buildings"
        subtitle={
          <>
            {destinations.length} cities and {hostels.length} partner hostels
            across Spain and the Balkans. Pick a country, or search for the city
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
