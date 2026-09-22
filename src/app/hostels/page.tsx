import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { HostelsExplorer } from "@/components/sections/HostelsExplorer";
import { hostels } from "@/data/hostels";

export const metadata: Metadata = {
  title: "Hostels",
  description:
    "Every hostel in the NEXT STOP network, with the regular price and the NEXT PASS direct rate side by side.",
};

export default function HostelsPage() {
  const cities = new Set(hostels.map((h) => h.destinationSlug));

  return (
    <>
      <PageHero
        eyebrow="Partner hostels"
        title="Find your next"
        accent="hostel."
        image="https://images.unsplash.com/photo-1630840274967-ece6eaa61dfc?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Leafy hostel courtyard with wooden tables and chairs"
        subtitle={
          <>
            {hostels.length} partner hostels across {cities.size} cities. Every
            one shows the regular price next to the rate a NEXT PASS unlocks.
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
