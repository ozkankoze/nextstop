import { DestinationCard } from "@/components/cards/DestinationCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredDestinations } from "@/data/destinations";

export function PopularDestinations() {
  return (
    <section
      aria-labelledby="popular-destinations"
      className="container-page pt-12 lg:pt-14"
    >
      <SectionHeading
        id="popular-destinations"
        title="Popular"
        accent="Destinations"
        action={{ label: "View all destinations", href: "/destinations" }}
      />

      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {featuredDestinations.map((destination) => (
          <li key={destination.slug}>
            <DestinationCard destination={destination} />
          </li>
        ))}
      </ul>
    </section>
  );
}
