"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { HostelCard } from "@/components/cards/HostelCard";
import { Button } from "@/components/ui/Button";
import { Field, Select, TextInput } from "@/components/ui/Field";
import { EmptyState } from "@/components/ui/Misc";
import { SlidersIcon } from "@/components/ui/Icons";
import {
  countries,
  destinationsByLaunchOrder,
  type CountrySlug,
} from "@/data/destinations";
import { hostels } from "@/data/hostels";

type SortKey =
  | "recommended"
  | "price-asc"
  | "price-desc"
  | "rating-desc"
  | "centre-asc"
  | "beach-asc";

const PRICE_MAX = 35;

export function HostelsExplorer() {
  const params = useSearchParams();
  const initialDestination = params.get("destination") ?? "all";

  const initialCity = destinationsByLaunchOrder.find(
    (d) => d.slug === initialDestination
  );
  const [country, setCountry] = useState<CountrySlug | "all">(
    initialCity ? initialCity.countrySlug : "all"
  );
  const [destination, setDestination] = useState(
    initialCity ? initialCity.slug : "all"
  );
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1");
  const [maxPrice, setMaxPrice] = useState(PRICE_MAX);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState<SortKey>("recommended");

  // Only offer places that actually have partner hostels.
  const placesWithHostels = destinationsByLaunchOrder.filter((d) =>
    hostels.some((h) => h.destinationSlug === d.slug)
  );
  const countryOptions = countries.filter((c) =>
    placesWithHostels.some((d) => d.countrySlug === c.slug)
  );
  const cityOptions =
    country === "all"
      ? placesWithHostels
      : placesWithHostels.filter((d) => d.countrySlug === country);

  // Picking a country narrows the destination list, so clear a stale choice.
  const handleCountryChange = (next: CountrySlug | "all") => {
    setCountry(next);
    if (next !== "all") {
      const stillValid = placesWithHostels.some(
        (d) => d.slug === destination && d.countrySlug === next
      );
      if (!stillValid) setDestination("all");
    }
  };

  const results = useMemo(() => {
    const allowedSlugs = new Set(
      (country === "all"
        ? placesWithHostels
        : placesWithHostels.filter((d) => d.countrySlug === country)
      ).map((d) => d.slug)
    );

    const filtered = hostels.filter((hostel) => {
      if (destination !== "all") {
        if (hostel.destinationSlug !== destination) return false;
      } else if (!allowedSlugs.has(hostel.destinationSlug)) {
        return false;
      }
      if (hostel.nextStopPrice > maxPrice) return false;
      if (hostel.rating < minRating) return false;
      return true;
    });

    switch (sort) {
      case "price-asc":
        return [...filtered].sort((a, b) => a.nextStopPrice - b.nextStopPrice);
      case "price-desc":
        return [...filtered].sort((a, b) => b.nextStopPrice - a.nextStopPrice);
      case "rating-desc":
        return [...filtered].sort((a, b) => b.rating - a.rating);
      case "centre-asc":
        return [...filtered].sort(
          (a, b) => a.distanceToCentreKm - b.distanceToCentreKm
        );
      case "beach-asc":
        // Inland hostels have no beach, so they sort to the bottom.
        return [...filtered].sort(
          (a, b) =>
            (a.distanceToBeachKm ?? Infinity) - (b.distanceToBeachKm ?? Infinity)
        );
      default:
        return filtered;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country, destination, maxPrice, minRating, sort]);

  const reset = () => {
    setCountry("all");
    setDestination("all");
    setCheckIn("");
    setCheckOut("");
    setGuests("1");
    setMaxPrice(PRICE_MAX);
    setMinRating(0);
    setSort("recommended");
  };

  const nights = countNights(checkIn, checkOut);

  return (
    <section
      aria-labelledby="hostel-results"
      className="container-page pt-10 pb-14 lg:pt-12"
    >
      <h2 id="hostel-results" className="sr-only">
        Search partner hostels
      </h2>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="rounded-xl border border-ink-100 bg-white p-4 shadow-[0_2px_10px_-6px_rgba(6,9,15,0.14)] sm:p-5"
      >
        <p className="mb-4 flex items-center gap-2 text-[12.5px] font-semibold text-ink-900">
          <SlidersIcon aria-hidden className="h-4 w-4 text-brand-500" />
          Filter hostels
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Field label="Country" htmlFor="filter-country">
            <Select
              id="filter-country"
              value={country}
              onChange={(e) =>
                handleCountryChange(e.target.value as CountrySlug | "all")
              }
            >
              <option value="all">All countries</option>
              {countryOptions.map((option) => (
                <option key={option.slug} value={option.slug}>
                  {option.name}
                </option>
              ))}
            </Select>
          </Field>

          <Field
            label="Destination"
            htmlFor="filter-destination"
            hint={
              country === "all"
                ? undefined
                : `${cityOptions.length} in this country`
            }
          >
            <Select
              id="filter-destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option value="all">All destinations</option>
              {cityOptions.map((city) => (
                <option key={city.slug} value={city.slug}>
                  {city.city}
                </option>
              ))}
            </Select>
          </Field>

          <Field label="Check-in" htmlFor="filter-checkin">
            <TextInput
              id="filter-checkin"
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </Field>

          <Field label="Check-out" htmlFor="filter-checkout">
            <TextInput
              id="filter-checkout"
              type="date"
              min={checkIn || undefined}
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </Field>

          <Field label="Guests" htmlFor="filter-guests">
            <Select
              id="filter-guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={String(n)}>
                  {n} {n === 1 ? "Guest" : "Guests"}
                </option>
              ))}
            </Select>
          </Field>

          <Field
            label={`Max NEXT STOP price — €${maxPrice}`}
            htmlFor="filter-price"
            className="sm:col-span-2"
          >
            <input
              id="filter-price"
              type="range"
              min={10}
              max={PRICE_MAX}
              step={1}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-ink-100 accent-brand-500"
            />
          </Field>

          <Field label="Minimum rating" htmlFor="filter-rating">
            <Select
              id="filter-rating"
              value={String(minRating)}
              onChange={(e) => setMinRating(Number(e.target.value))}
            >
              <option value="0">Any rating</option>
              <option value="8">8.0+</option>
              <option value="8.5">8.5+</option>
              <option value="9">9.0+</option>
            </Select>
          </Field>

          <Field label="Sort by" htmlFor="filter-sort">
            <Select
              id="filter-sort"
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
            >
              <option value="recommended">Recommended</option>
              <option value="price-asc">Price: low to high</option>
              <option value="price-desc">Price: high to low</option>
              <option value="rating-desc">Rating: high to low</option>
              <option value="centre-asc">Distance from the centre</option>
              <option value="beach-asc">Distance from the beach</option>
            </Select>
          </Field>
        </div>
      </form>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-[12.5px] text-ink-500" role="status">
          {results.length} {results.length === 1 ? "hostel" : "hostels"}
          {nights ? ` · ${nights} ${nights === 1 ? "night" : "nights"}` : ""}
          {guests !== "1" ? ` · ${guests} guests` : ""}
        </p>
        <Button variant="ghost" size="sm" onClick={reset} type="button">
          Reset filters
        </Button>
      </div>

      {results.length > 0 ? (
        <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {results.map((hostel) => (
            <li key={hostel.slug}>
              <HostelCard hostel={hostel} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-4">
          <EmptyState
            title="No hostels match those filters"
            description="Try widening the price range or picking a different city. The network is small on purpose — every hostel here was recommended by another partner."
            action={
              <Button variant="outline" size="sm" onClick={reset} type="button">
                Reset filters
              </Button>
            }
          />
        </div>
      )}
    </section>
  );
}

function countNights(checkIn: string, checkOut: string): number | null {
  if (!checkIn || !checkOut) return null;
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diff = Math.round((end.getTime() - start.getTime()) / 86_400_000);
  return diff > 0 ? diff : null;
}
