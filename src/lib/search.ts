import { countries, destinations, type Destination } from "@/data/destinations";

export type SearchResult = {
  /** Stable key for React lists and keyboard navigation. */
  key: string;
  type: "country" | "destination";
  label: string;
  sublabel: string;
  href: string;
  /** What to write into the search input when this result is chosen. */
  value: string;
};

/** Lower-cases and strips accents so "malaga" matches "Málaga". */
export function normalise(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();
}

function destinationResult(destination: Destination): SearchResult {
  return {
    key: `destination:${destination.slug}`,
    type: "destination",
    label: destination.city,
    sublabel: destination.country,
    href: `/destinations/${destination.slug}`,
    value: `${destination.city}, ${destination.country}`,
  };
}

/** Every string a destination should be findable by. */
function destinationTerms(destination: Destination): string[] {
  return [
    destination.city,
    destination.country,
    ...(destination.aliases ?? []),
  ].map(normalise);
}

/**
 * Autocomplete over the destination catalogue.
 *
 * Matching rules:
 * - A country name ("spain", "spa") surfaces the country itself plus its cities.
 * - A city name, alias or accent-free spelling surfaces that city.
 * - Results that start with the query rank above results that merely contain it.
 */
export function searchDestinations(query: string, limit = 7): SearchResult[] {
  const q = normalise(query);
  if (!q) return [];

  const results: SearchResult[] = [];
  const seen = new Set<string>();

  const push = (result: SearchResult) => {
    if (seen.has(result.key)) return;
    seen.add(result.key);
    results.push(result);
  };

  // 1. Countries whose name starts with the query.
  const matchedCountries = countries.filter((country) =>
    normalise(country.name).startsWith(q)
  );

  for (const country of matchedCountries) {
    const cities = destinations.filter((d) => d.countrySlug === country.slug);
    if (cities.length === 0) continue;

    push({
      key: `country:${country.slug}`,
      type: "country",
      label: country.name,
      sublabel: `${cities.length} ${cities.length === 1 ? "destination" : "destinations"}`,
      href: `/destinations?country=${country.slug}`,
      value: country.name,
    });

    for (const city of cities) push(destinationResult(city));
  }

  // 2. Destinations whose city, alias or country starts with the query.
  for (const destination of destinations) {
    if (destinationTerms(destination).some((term) => term.startsWith(q))) {
      push(destinationResult(destination));
    }
  }

  // 3. Looser contains-matches, to catch mid-word typing.
  for (const destination of destinations) {
    if (destinationTerms(destination).some((term) => term.includes(q))) {
      push(destinationResult(destination));
    }
  }

  return results.slice(0, limit);
}

/**
 * Resolves whatever is in the search box to a destination page.
 * Falls back to the filtered destinations index when nothing matches exactly.
 */
export function resolveSearchHref(query: string): string {
  const q = normalise(query);
  if (!q) return "/destinations";

  const exactCity = destinations.find((destination) =>
    destinationTerms(destination).some((term) => term === q)
  );
  if (exactCity) return `/destinations/${exactCity.slug}`;

  const country = countries.find((c) => normalise(c.name) === q);
  if (country) return `/destinations?country=${country.slug}`;

  const [first] = searchDestinations(query, 1);
  if (first) return first.href;

  return `/destinations?q=${encodeURIComponent(query.trim())}`;
}
