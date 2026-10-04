/**
 * Multi-city backpacker routes.
 *
 * DEMO DATA — suggested itineraries written as launch content. Journey times
 * are indicative; always check current operator timetables.
 */

export type TransportMode = "train" | "bus" | "ferry" | "flight";

export type RouteStop = {
  destinationSlug: string;
  nights: number;
  /** Why this city earns its place on the route. */
  why: string;
  /** What to do with the time you have there. */
  dontMiss: string;
  onward?: {
    mode: TransportMode;
    duration: string;
    note: string;
  };
};

export type TravelRoute = {
  slug: string;
  name: string;
  region: "spain" | "balkans";
  summary: string;
  image: string;
  alt: string;
  days: number;
  intro: string[];
  bestFor: string[];
  budgetNote: string;
  stops: RouteStop[];
};

export const routes: TravelRoute[] = [
  {
    slug: "spain-east-coast",
    name: "Spain East Coast",
    region: "spain",
    summary: "Barcelona → Valencia → Alicante",
    image:
      "https://images.unsplash.com/photo-1610213989414-acc5773ba2c6?auto=format&fit=crop&w=1600&q=85",
    alt: "People walking along a Mediterranean beach at sunset",
    days: 9,
    intro: [
      "The simplest first trip in Spain: three Mediterranean cities on one train line, each one cheaper and slower than the last.",
      "Fly into Barcelona, work your way south, and fly home from Alicante — no backtracking, no internal flights, and never more than three and a half hours on a train.",
    ],
    bestFor: [
      "First time in Spain",
      "Beach and city in one trip",
      "Travellers who hate long transit days",
    ],
    budgetNote:
      "Dorm beds on this route average €18–29 a night. Booking trains a couple of weeks ahead typically halves the fare compared to walk-up prices.",
    stops: [
      {
        destinationSlug: "barcelona",
        nights: 3,
        why: "The easiest arrival point in Spain, and the one city on this route you should not rush.",
        dontMiss:
          "Sunset from Bunkers del Carmel, a morning in the Gothic Quarter, and one Gaudí building booked in advance.",
        onward: {
          mode: "train",
          duration: "2h 40m",
          note: "Frequent high-speed trains from Barcelona Sants to Valencia Joaquín Sorolla.",
        },
      },
      {
        destinationSlug: "valencia",
        nights: 4,
        why: "The best-value big city on the coast, and the home of the NEXT STOP founding hostels.",
        dontMiss:
          "Cycle the Turia park from the old town to the beach, and eat paella where it was invented.",
        onward: {
          mode: "train",
          duration: "1h 40m",
          note: "Direct trains run several times a day to Alicante Terminal.",
        },
      },
      {
        destinationSlug: "alicante",
        nights: 2,
        why: "A relaxed finish with a castle, a beach and a cheap airport to fly home from.",
        dontMiss:
          "The lift up to Santa Bárbara castle, then the walk back down through the old town.",
      },
    ],
  },
  {
    slug: "classic-spain",
    name: "Classic Spain",
    region: "spain",
    summary: "Barcelona → Madrid → Valencia → Seville",
    image:
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1600&q=85",
    alt: "The Metropolis building at the intersection of Gran Vía in Madrid",
    days: 14,
    intro: [
      "Two weeks and the four cities most people mean when they say they want to see Spain: the coast, the capital, the Mediterranean and Andalusia.",
      "It leans on the high-speed rail network, so the longest single journey is under three hours despite covering most of the country.",
    ],
    bestFor: [
      "A two-week holiday that covers a lot of ground",
      "Art, architecture and food in one trip",
      "Travellers comfortable moving every three or four days",
    ],
    budgetNote:
      "Expect €20–29 a night for dorms. High-speed rail is the biggest single cost — book each leg as soon as your dates are fixed.",
    stops: [
      {
        destinationSlug: "barcelona",
        nights: 4,
        why: "Modernista architecture and a beach, with the best flight connections in the country.",
        dontMiss:
          "Sagrada Família, a day in Gràcia, and an evening swim at Barceloneta.",
        onward: {
          mode: "train",
          duration: "2h 30m",
          note: "AVE high-speed services run hourly from Barcelona Sants to Madrid Atocha.",
        },
      },
      {
        destinationSlug: "madrid",
        nights: 4,
        why: "The art capital of Spain and the hub every other line passes through.",
        dontMiss:
          "The Prado during free evening hours, Sunday vermouth in La Latina, and a late night in Malasaña.",
        onward: {
          mode: "train",
          duration: "1h 45m",
          note: "Direct AVE trains from Madrid Atocha to Valencia Joaquín Sorolla.",
        },
      },
      {
        destinationSlug: "valencia",
        nights: 3,
        why: "A slower, cheaper coastal break in the middle of a busy itinerary.",
        dontMiss:
          "The City of Arts and Sciences at dusk and a long lunch in Ruzafa.",
        onward: {
          mode: "train",
          duration: "4h",
          note: "Valencia to Seville usually routes via Madrid; book it as one through ticket.",
        },
      },
      {
        destinationSlug: "seville",
        nights: 3,
        why: "The most atmospheric city in Andalusia, and a natural place to end.",
        dontMiss:
          "The Real Alcázar in the morning, Plaza de España at dusk, and flamenco in Triana.",
      },
    ],
  },
  {
    slug: "southern-spain",
    name: "Southern Spain",
    region: "spain",
    summary: "Seville → Málaga → Granada",
    image:
      "https://images.unsplash.com/photo-1559386081-325882507af7?auto=format&fit=crop&w=1600&q=85",
    alt: "A bridge over the river in Seville with the city behind",
    days: 10,
    intro: [
      "Andalusia in a tight triangle: a Moorish palace, a beach city and the best free tapas in Spain, all within two hours of each other by bus.",
      "This is the cheapest of the Spanish routes and the one where the food alone justifies the trip.",
    ],
    bestFor: [
      "Travellers on a tight budget",
      "Moorish history and architecture",
      "Anyone who wants warm weather outside of summer",
    ],
    budgetNote:
      "Dorms average €17–21 a night. Buses between these three cities usually cost less than the train and run just as often.",
    stops: [
      {
        destinationSlug: "seville",
        nights: 4,
        why: "The regional capital and the easiest of the three to fly into.",
        dontMiss:
          "The Alcázar, the Giralda climb and an evening walking Calle Betis in Triana.",
        onward: {
          mode: "bus",
          duration: "2h 45m",
          note: "Direct coaches run through the day from Plaza de Armas to Málaga.",
        },
      },
      {
        destinationSlug: "malaga",
        nights: 3,
        why: "A beach, a Moorish fortress and more museums than any city this size needs.",
        dontMiss:
          "The Alcazaba and Gibralfaro walk, espetos on the beach, and the Soho murals.",
        onward: {
          mode: "bus",
          duration: "1h 45m",
          note: "Frequent coaches climb inland from Málaga to Granada.",
        },
      },
      {
        destinationSlug: "granada",
        nights: 3,
        why: "The Alhambra, the Albayzín and free tapas with every drink.",
        dontMiss:
          "The Nasrid Palaces — booked weeks ahead — and sunset at Mirador San Nicolás.",
      },
    ],
  },
  {
    slug: "balkan-backpacker",
    name: "Balkan Backpacker Route",
    region: "balkans",
    summary: "Tirana → Ohrid → Skopje → Belgrade",
    image:
      "https://images.unsplash.com/photo-1618735751653-d221b2436b0e?auto=format&fit=crop&w=1600&q=85",
    alt: "Aerial view of Ohrid town on the hillside above the lake",
    days: 12,
    intro: [
      "The route that started NEXT STOP: four countries' worth of capitals, lakes and bazaars, on the cheapest overland trail in Europe.",
      "Transport here is buses rather than trains, and they are slower than a map suggests. Build in a buffer day and do not plan to cross two borders in one go.",
    ],
    bestFor: [
      "Travellers who want low prices and few crowds",
      "Overland travel and border crossings",
      "A first trip outside the EU rail network",
    ],
    budgetNote:
      "This is the cheapest route on NEXT STOP — dorms average €13–18 a night and a full meal often costs less than a coffee in Barcelona.",
    stops: [
      {
        destinationSlug: "tirana",
        nights: 3,
        why: "Europe's most underrated capital, and the cheapest city in the network.",
        dontMiss:
          "Bunk'Art 2, the Dajti Express cable car, and an evening in Blloku.",
        onward: {
          mode: "bus",
          duration: "4h",
          note: "Buses and furgons cross to Ohrid via the Qafë Thanë border. Take your passport out before you board.",
        },
      },
      {
        destinationSlug: "ohrid",
        nights: 3,
        why: "A three-million-year-old lake and the slowest, most restful stop on the route.",
        dontMiss:
          "The cliffside boardwalk to Kaneo, Samuel's Fortress and a boat to Sveti Naum.",
        onward: {
          mode: "bus",
          duration: "3h",
          note: "Several daily buses climb from Ohrid to Skopje's main station.",
        },
      },
      {
        destinationSlug: "skopje",
        nights: 2,
        why: "An Ottoman bazaar on one riverbank and a marble statue park on the other.",
        dontMiss:
          "The Old Bazaar at breakfast time, Kale Fortress, and a half-day at Canyon Matka.",
        onward: {
          mode: "bus",
          duration: "7h",
          note: "A long leg north to Belgrade. Night buses run, but the daytime service is far more comfortable.",
        },
      },
      {
        destinationSlug: "belgrade",
        nights: 4,
        why: "The loudest, largest city on the route and the easiest place to fly home from.",
        dontMiss:
          "Kalemegdan fortress at sunset, dinner in Skadarlija and one night on a river barge.",
      },
    ],
  },
];

export const routeMap = new Map(routes.map((r) => [r.slug, r]));

export function getRoute(slug: string): TravelRoute | undefined {
  return routeMap.get(slug);
}

export function getRoutes(slugs: string[]): TravelRoute[] {
  return slugs
    .map((slug) => routeMap.get(slug))
    .filter((r): r is TravelRoute => Boolean(r));
}

export function getRoutesForDestination(destinationSlug: string): TravelRoute[] {
  return routes.filter((route) =>
    route.stops.some((stop) => stop.destinationSlug === destinationSlug)
  );
}
