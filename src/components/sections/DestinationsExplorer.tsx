"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { SearchIcon } from "@/components/ui/Icons";
import { EmptyState } from "@/components/ui/Misc";
import { Button } from "@/components/ui/Button";
import {
  countries,
  destinationsByLaunchOrder,
  type CountrySlug,
} from "@/data/destinations";
import { normalise } from "@/lib/search";

type Filter = CountrySlug | "all";

export function DestinationsExplorer() {
  const params = useSearchParams();
  const initialCountry = (params.get("country") as Filter | null) ?? "all";
  const initialQuery = params.get("q") ?? "";

  const [country, setCountry] = useState<Filter>(
    countries.some((c) => c.slug === initialCountry) ? initialCountry : "all"
  );
  const [query, setQuery] = useState(initialQuery);

  const results = useMemo(() => {
    const q = normalise(query);
    return destinationsByLaunchOrder.filter((destination) => {
      const matchesCountry =
        country === "all" || destination.countrySlug === country;
      if (!matchesCountry) return false;
      if (!q) return true;
      return [destination.city, destination.country, ...(destination.aliases ?? [])]
        .map(normalise)
        .some((term) => term.includes(q));
    });
  }, [country, query]);

  // Only offer filters for countries that actually have destinations.
  const availableCountries = countries.filter((c) =>
    destinationsByLaunchOrder.some((d) => d.countrySlug === c.slug)
  );

  return (
    <div className="container-page pt-10 pb-14 lg:pt-12">
      <div className="flex flex-col gap-5">
        <div className="relative max-w-md">
          <label htmlFor="destination-filter" className="sr-only">
            Search destinations
          </label>
          <SearchIcon
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-ink-400"
          />
          <input
            id="destination-filter"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by city or country"
            className="w-full rounded-lg border border-ink-200 bg-white py-2.5 pr-3.5 pl-10 text-[13.5px] text-ink-900 outline-none transition-colors placeholder:text-ink-400 focus:border-brand-500"
          />
        </div>

        <div>
          <h2 className="sr-only">Filter by country</h2>
          <ul className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
            {[{ slug: "all" as const, name: "All" }, ...availableCountries].map(
              (option) => {
                const active = country === option.slug;
                return (
                  <li key={option.slug}>
                    <button
                      type="button"
                      onClick={() => setCountry(option.slug as Filter)}
                      aria-pressed={active}
                      className={`rounded-full border px-4 py-1.5 text-[12.5px] whitespace-nowrap transition-colors ${
                        active
                          ? "border-brand-500 bg-brand-500 font-semibold text-white"
                          : "border-ink-200 bg-white text-ink-600 hover:border-ink-300 hover:text-ink-900"
                      }`}
                    >
                      {option.name}
                    </button>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </div>

      <p className="mt-6 text-[12.5px] text-ink-500" role="status">
        {results.length} {results.length === 1 ? "destination" : "destinations"}
      </p>

      {results.length > 0 ? (
        <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {results.map((destination) => (
            <li key={destination.slug}>
              <DestinationCard destination={destination} variant="full" />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-4">
          <EmptyState
            title="No destinations match those filters"
            description="NEXT STOP is launching across Spain and the Balkans. Try another city, or clear the filters to see the whole network."
            action={
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setQuery("");
                  setCountry("all");
                }}
              >
                Clear filters
              </Button>
            }
          />
        </div>
      )}
    </div>
  );
}
