import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { HostelsExplorer } from "@/components/sections/HostelsExplorer";
import { hostels } from "@/data/hostels";
import { vibes } from "@/data/vibes";

export const metadata: Metadata = {
  title: "Hostels",
  description:
    "Every hostel in the NEXT STOP network, with the regular price and the rate a free NEXT PASS unlocks side by side.",
};

export default function HostelsPage() {
  const cities = new Set(hostels.map((h) => h.destinationSlug));

  return (
    <>
      <PageHero
        eyebrow="Partner hostels"
        title="Find your"
        accent="next hostel."
        image={vibes.commonRoom.src}
        imageAlt={vibes.commonRoom.alt}
        subtitle={
          <>
            {hostels.length} partner hostels across {cities.size}{" "}
            destinations. Every hostel shows the regular price next to the rate
            a free NEXT PASS unlocks.
          </>
        }
        crumbs={[{ label: "Home", href: "/" }, { label: "Hostels" }]}
      />

      <Suspense
        fallback={
          <div className="container-page py-16 text-[13px] text-ink-500">
            Loading hostels…
          </div>
        }
      >
        <HostelsExplorer />
      </Suspense>
    </>
  );
}
