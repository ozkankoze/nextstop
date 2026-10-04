/**
 * Travel guides.
 *
 * DEMO DATA — editorial content written for the NEXT STOP MVP. Prices and
 * opening details are indicative and should be verified before travel.
 */

export type GuideSection = {
  id: string;
  heading: string;
  body: string[];
  bullets?: string[];
};

export type Guide = {
  slug: string;
  title: string;
  category: "City guide" | "Budget" | "Hostels" | "Nightlife" | "Transport" | "Planning";
  excerpt: string;
  image: string;
  alt: string;
  readingMinutes: number;
  updated: string;
  author: string;
  intro: string[];
  sections: GuideSection[];
  relatedDestinations: string[];
  relatedHostels: string[];
  relatedGuides: string[];
};

const img = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const guides: Guide[] = [
  {
    slug: "valencia-backpacker-guide",
    title: "Valencia Backpacker Guide",
    category: "City guide",
    excerpt:
      "Where to sleep, what a day actually costs, and how to use the park that runs through the middle of the city.",
    image: img("photo-1529686398651-b8112f4bb98c"),
    alt: "Shoppers walking inside Valencia's covered central market",
    readingMinutes: 8,
    updated: "September 2026",
    author: "NEXT STOP Editorial",
    intro: [
      "Valencia is the easiest city in Spain to travel well on very little. It is flat, it is compact, it has a beach, and almost nothing worth seeing is more than a twenty-minute cycle from anything else.",
      "This guide covers the practical version of the city: what things cost, which neighbourhood to sleep in, and how to spend three days without booking a single tour.",
    ],
    sections: [
      {
        id: "getting-in",
        heading: "Getting in and getting around",
        body: [
          "Valencia airport connects to the centre by metro lines 3 and 5 in about 25 minutes. Buy a ticket at the machine, keep it for the exit barrier, and ignore the taxi rank unless you are arriving after midnight.",
          "Once you are in, the city bike scheme is the single best purchase of your trip. The Turia park — a nine-kilometre garden built in a drained riverbed — runs from the old town all the way to the sea, entirely away from traffic.",
        ],
        bullets: [
          "Airport metro: around €5 including the airport supplement",
          "Valenbisi day pass: a couple of euros for unlimited short rides",
          "Tram 4 or 6 reaches Malvarrosa beach from the north of the centre",
        ],
      },
      {
        id: "where-to-stay",
        heading: "Which neighbourhood to sleep in",
        body: [
          "El Carmen is the old town: medieval streets, street art, and most of the nightlife. It is the most central choice and the loudest one at weekends.",
          "Ruzafa is the food and bar neighbourhood just south of the station, quieter at night than El Carmen but with better restaurants. Cabanyal, behind the beach, is the calmest and cheapest option and still only fifteen minutes from the centre by tram.",
        ],
      },
      {
        id: "what-it-costs",
        heading: "What a day costs",
        body: [
          "Valencia is meaningfully cheaper than Barcelona or Madrid, and the gap shows up most at lunchtime. The menú del día — three courses and a drink on a weekday — is the single best-value meal in Spain.",
        ],
        bullets: [
          "Dorm bed: €15–22 a night depending on season",
          "Menú del día lunch: around €12",
          "Coffee and pastry: €3–4",
          "Museum entry: €2–8, with several free on Sundays",
        ],
      },
      {
        id: "three-days",
        heading: "Three days without a tour booking",
        body: [
          "Day one: walk the old town from the Torres de Serranos to the cathedral, climb the Micalet bell tower, then eat in the Mercado Central before it closes at three.",
          "Day two: rent a bike and follow the Turia park east to the City of Arts and Sciences, then keep going to Malvarrosa for a swim and a late lunch.",
          "Day three: take the metro out to the Albufera lagoon for the rice fields and a boat at sunset, or stay in the city and spend the afternoon in Ruzafa.",
        ],
      },
    ],
    relatedDestinations: ["valencia", "alicante", "barcelona"],
    relatedHostels: ["casa-naranja-valencia", "turia-riverbed-valencia", "malvarrosa-beach-valencia"],
    relatedGuides: ["best-hostels-in-valencia", "valencia-nightlife-guide", "spain-on-a-budget"],
  },
  {
    slug: "barcelona-backpacker-guide",
    title: "Barcelona Backpacker Guide",
    category: "City guide",
    excerpt:
      "How to see the city without spending a fortune, and which neighbourhoods are worth sleeping in.",
    image: img("photo-1534001265532-393289eb8ed3"),
    alt: "Palm trees casting long shadows on a promenade beside a sunny beach",
    readingMinutes: 9,
    updated: "September 2026",
    author: "NEXT STOP Editorial",
    intro: [
      "Barcelona is the most visited city in Spain, which means two things: everything is easy to reach, and everything near Las Ramblas is overpriced.",
      "The trick is to stay slightly out of the centre, buy the right transport card, and book the famous buildings before you arrive.",
    ],
    sections: [
      {
        id: "transport",
        heading: "Buy the right ticket",
        body: [
          "Single metro tickets are poor value. The T-casual card covers ten journeys and can be used across metro, bus and the urban rail network, working out at roughly half the single fare.",
          "The airport metro line L9 Sud needs its own supplement, so check before you tap. The Aerobús is faster to Plaça Catalunya but costs more.",
        ],
      },
      {
        id: "free-barcelona",
        heading: "What you can see for nothing",
        body: [
          "A surprising amount of Barcelona is free if you plan around it. Museums across the city open their doors at no charge on the first Sunday of every month, and many again on Sunday afternoons.",
        ],
        bullets: [
          "Bunkers del Carmel — the best free viewpoint in the city",
          "The upper, non-monumental zone of Park Güell",
          "Barceloneta and Bogatell beaches",
          "The Gothic Quarter, which is simply a walk",
        ],
      },
      {
        id: "neighbourhoods",
        heading: "Where to sleep",
        body: [
          "Gràcia feels like a village that the city grew around — small squares, independent shops, and metro connections to everywhere. Poble Sec sits below Montjuïc and has the best cheap tapas street in the city.",
          "El Raval is central and cheap but busy at all hours. The Gothic Quarter is the most convenient and the most expensive, and the one place where pickpocketing is a genuine daily risk.",
        ],
      },
      {
        id: "booking-ahead",
        heading: "Book these before you fly",
        body: [
          "Three things sell out consistently and cannot be fixed on arrival: Sagrada Família, the monumental zone of Park Güell, and Casa Batlló. Buy timed tickets online as soon as your dates are fixed.",
        ],
      },
    ],
    relatedDestinations: ["barcelona", "valencia", "madrid"],
    relatedHostels: ["gracia-rooftop-barcelona", "raval-social-barcelona"],
    relatedGuides: ["spain-on-a-budget", "how-to-travel-spain-by-train", "first-time-in-spain"],
  },
  {
    slug: "spain-on-a-budget",
    title: "Spain on a Budget",
    category: "Budget",
    excerpt:
      "Realistic daily costs by city, plus the habits that make the difference between €40 and €70 a day.",
    image: img("photo-1721952931546-5156e9deb063"),
    alt: "A cobblestone street lined with white and yellow buildings",
    readingMinutes: 7,
    updated: "September 2026",
    author: "NEXT STOP Editorial",
    intro: [
      "Spain is not the cheapest country in Europe any more, but it is still one of the best-value ones — provided you eat when Spaniards eat and sleep where they do not.",
      "These are realistic numbers rather than survival ones: enough to eat properly, go out, and see the things you came for.",
    ],
    sections: [
      {
        id: "daily-costs",
        heading: "What a day actually costs",
        body: [
          "The gap between cities is real. Andalusia and the east coast run noticeably cheaper than Barcelona and the Basque country.",
        ],
        bullets: [
          "Granada, Alicante, Valencia: €40–50 a day",
          "Seville, Málaga, Madrid: €45–60 a day",
          "Barcelona: €55–70 a day",
          "San Sebastián: €65–85 a day",
        ],
      },
      {
        id: "eating",
        heading: "Eat at Spanish times",
        body: [
          "The menú del día is a legal fixture of Spanish weekday lunches: a starter, a main, a dessert and a drink for a fixed price, usually between €11 and €14. Eating your main meal at lunch and having tapas in the evening is both cheaper and more Spanish than the reverse.",
          "In Granada, tapas still arrive free with every drink. In León and parts of Andalusia the same custom survives. Elsewhere, expect to pay per plate.",
        ],
      },
      {
        id: "transport",
        heading: "Trains versus buses",
        body: [
          "High-speed rail is fast and expensive at short notice, and often cheap two or three weeks out. Buses cost less and take longer but are far more forgiving of last-minute plans.",
          "For anything under three hours, compare both. For Seville–Málaga–Granada, the bus usually wins on price and frequency.",
        ],
      },
      {
        id: "beds",
        heading: "Where the bed money goes",
        body: [
          "Dorm prices swing hard by season and by festival. The same bed in Valencia can be €15 in November and €35 during Las Fallas. If your dates are flexible, shoulder season — April to June, September to October — is the sweet spot for both price and weather.",
          "A NEXT PASS from a partner hostel unlocks the NEXT STOP rate at the next partner, which is where the network saves you money on a multi-city trip rather than a single stay.",
        ],
      },
    ],
    relatedDestinations: ["valencia", "granada", "alicante"],
    relatedHostels: ["el-carmen-backpackers-valencia", "albayzin-view-granada", "santa-barbara-alicante"],
    relatedGuides: ["how-to-travel-spain-by-train", "backpacking-spain", "valencia-backpacker-guide"],
  },
  {
    slug: "best-hostels-in-valencia",
    title: "Best Hostels in Valencia",
    category: "Hostels",
    excerpt:
      "Which neighbourhood suits which kind of trip, and what to look for before you book a bed.",
    image: img("photo-1768289269971-6171457bed13"),
    alt: "Bunk beds in a bright dormitory with sunlight coming through the window",
    readingMinutes: 6,
    updated: "September 2026",
    author: "NEXT STOP Editorial",
    intro: [
      "Valencia's hostel scene is small enough that the choice really comes down to neighbourhood and atmosphere rather than price — most beds sit within a few euros of each other.",
      "Here is how to pick, and what the founding NEXT STOP partners in the city offer.",
    ],
    sections: [
      {
        id: "by-neighbourhood",
        heading: "Pick the neighbourhood first",
        body: [
          "El Carmen puts you inside the old town, which is ideal for a short trip and loud at weekends. Ruzafa trades ten minutes of walking for better food and quieter nights. Cabanyal is the beach option and the cheapest of the three.",
        ],
        bullets: [
          "El Carmen — central, historic, busy after midnight",
          "Ruzafa — restaurants, bars, calmer dorms",
          "Cabanyal — beach, tiled houses, best value",
        ],
      },
      {
        id: "what-to-check",
        heading: "Five things worth checking before booking",
        body: [
          "Hostel listings rarely make these obvious, and all five affect how the stay actually feels.",
        ],
        bullets: [
          "Air conditioning in the dorm, not just the common room — Valencia summers are humid",
          "Lockers large enough for a full backpack, not just a daypack",
          "Whether the kitchen is open all day or only at set hours",
          "Which side of the building the dorm faces, if the hostel is on a bar street",
          "Whether bikes are included or charged by the day",
        ],
      },
      {
        id: "founding-partners",
        heading: "The founding partners in Valencia",
        body: [
          "The first hostels to join the NEXT STOP network are all in Valencia, spread across the three neighbourhoods above. Arriving with a NEXT PASS from any partner hostel unlocks the NEXT STOP rate at each of them.",
        ],
      },
    ],
    relatedDestinations: ["valencia"],
    relatedHostels: [
      "casa-naranja-valencia",
      "turia-riverbed-valencia",
      "malvarrosa-beach-valencia",
      "el-carmen-backpackers-valencia",
    ],
    relatedGuides: ["valencia-backpacker-guide", "valencia-nightlife-guide", "spain-on-a-budget"],
  },
  {
    slug: "valencia-nightlife-guide",
    title: "Valencia Nightlife Guide",
    category: "Nightlife",
    excerpt:
      "El Carmen, Ruzafa and the beach — what happens where, and what time anything actually starts.",
    image: img("photo-1692455129272-60299bc2b1a8"),
    alt: "A dimly lit bar with rows of bottles behind the counter",
    readingMinutes: 6,
    updated: "September 2026",
    author: "NEXT STOP Editorial",
    intro: [
      "Valencia goes out late, even by Spanish standards. Bars fill around midnight, clubs after two, and the beach chiringuitos keep going until the sun comes up in summer.",
      "Three areas cover almost everything, and they suit very different nights.",
    ],
    sections: [
      {
        id: "el-carmen",
        heading: "El Carmen — the old town",
        body: [
          "Narrow streets, street art and the highest bar density in the city. Plaça del Tossal and the streets around it are the centre of gravity, and it is entirely walkable, which is why most hostel crawls start here.",
          "Expect a mixed crowd of students, travellers and locals, and expect it to be busy on Thursday as well as the weekend.",
        ],
      },
      {
        id: "ruzafa",
        heading: "Ruzafa — the grown-up option",
        body: [
          "South of the station, Ruzafa is where Valencia goes for cocktails and good food rather than shots. Terraces stay busy until late and the walk home is quieter.",
        ],
      },
      {
        id: "beach",
        heading: "The beach in summer",
        body: [
          "From June to September the action moves to Malvarrosa and the port. Open-air clubs run along the sand, and the night bus back into the centre runs through until morning.",
        ],
      },
      {
        id: "practical",
        heading: "Practical notes",
        body: [
          "A few things worth knowing before your first night out here.",
        ],
        bullets: [
          "Nothing gets busy before midnight — eat at ten, go out at twelve",
          "Agua de Valencia is stronger than it tastes; it is mostly cava",
          "Night buses run roughly hourly after 23:00",
          "Many clubs have a drink-included entry rather than a flat cover",
        ],
      },
    ],
    relatedDestinations: ["valencia", "barcelona", "madrid"],
    relatedHostels: ["turia-riverbed-valencia", "el-carmen-backpackers-valencia"],
    relatedGuides: ["valencia-backpacker-guide", "best-hostels-in-valencia", "backpacking-spain"],
  },
  {
    slug: "how-to-travel-spain-by-train",
    title: "How to Travel Spain by Train",
    category: "Transport",
    excerpt:
      "Which lines are fast, when to book, and when the bus is genuinely the better choice.",
    image: img("photo-1641384732186-17a8439075aa"),
    alt: "A silver high-speed train at a station platform",
    readingMinutes: 7,
    updated: "September 2026",
    author: "NEXT STOP Editorial",
    intro: [
      "Spain has the longest high-speed rail network in Europe, and for a backpacker that is both good news and a trap: the trains are excellent, and the walk-up fares are brutal.",
      "Book early and the train beats the bus on almost every route. Book late and it often does not.",
    ],
    sections: [
      {
        id: "network",
        heading: "How the network is shaped",
        body: [
          "Almost everything radiates from Madrid. Barcelona, Valencia, Seville and Málaga all connect to the capital in under three hours, but connections between two non-Madrid cities are patchier and sometimes route back through it.",
          "The Barcelona–Valencia–Alicante corridor is the exception: a proper coastal line that does not touch Madrid at all, which is why the east coast route works so well.",
        ],
      },
      {
        id: "booking",
        heading: "When to book",
        body: [
          "Tickets typically open around two to three months ahead. The cheapest fares appear immediately and disappear as the date approaches — the difference between booking three weeks out and booking on the day can easily be double.",
          "Competing operators run the same high-speed corridors, so check more than one before you buy.",
        ],
        bullets: [
          "Book 2–4 weeks ahead for the best fares",
          "Compare operators on the same route before buying",
          "Cheapest fares are usually non-refundable — check before committing",
        ],
      },
      {
        id: "bus-instead",
        heading: "When to take the bus instead",
        body: [
          "For Seville–Málaga–Granada, buses are cheaper, more frequent and barely slower. The same is true for most journeys under two hours in Andalusia, and for reaching smaller coastal towns that the high-speed network skips.",
        ],
      },
      {
        id: "at-the-station",
        heading: "At the station",
        body: [
          "Spanish stations screen bags before boarding on high-speed services, so arrive twenty minutes early rather than five. Seat reservations are compulsory on those trains — there is no hopping on with a flexible ticket.",
        ],
      },
    ],
    relatedDestinations: ["madrid", "barcelona", "seville"],
    relatedHostels: ["malasana-house-madrid", "gracia-rooftop-barcelona"],
    relatedGuides: ["spain-on-a-budget", "backpacking-spain", "first-time-in-spain"],
  },
  {
    slug: "backpacking-spain",
    title: "Backpacking Spain",
    category: "Planning",
    excerpt:
      "How long to spend, what to pack for a country with four climates, and how to shape a route.",
    image: img("photo-1614090829484-984ba8968cb6"),
    alt: "A traveller with a backpack standing in a train station",
    readingMinutes: 8,
    updated: "September 2026",
    author: "NEXT STOP Editorial",
    intro: [
      "Spain is bigger and more varied than most first-time visitors expect. The north is green and rainy, the south is North African in its heat, and the middle is a high plateau that freezes in winter and bakes in August.",
      "This is how to plan a trip that does not involve crossing the country twice.",
    ],
    sections: [
      {
        id: "how-long",
        heading: "How long you need",
        body: [
          "Ten days covers one region properly. Two weeks covers two. Three weeks lets you cross the country without spending every third day on a train.",
          "The most common mistake is trying to combine Barcelona, Andalusia and the Basque country in ten days. Pick a corner and go deep.",
        ],
        bullets: [
          "7–10 days: the east coast, or Andalusia",
          "2 weeks: Barcelona to Seville via Madrid and Valencia",
          "3 weeks+: add the north, or slow down everywhere",
        ],
      },
      {
        id: "when-to-go",
        heading: "When to go",
        body: [
          "April to June and September to October are the best months almost everywhere: warm, swimmable on the coast, and far cheaper than the July–August peak.",
          "August is the hottest and busiest month, and it is also when many small businesses in the cities close while their owners go to the coast.",
        ],
      },
      {
        id: "packing",
        heading: "What to pack",
        body: [
          "For a summer trip on the coast, less than you think. For anything crossing regions or seasons, layers matter more than volume.",
        ],
        bullets: [
          "A padlock — most hostel lockers do not include one",
          "A reusable bottle; tap water is safe nationwide",
          "Shoes that survive cobbles, especially in Granada and Toledo",
          "A light rain jacket if you are going north of Madrid",
          "A power bank for long bus and train days",
        ],
      },
      {
        id: "shaping-a-route",
        heading: "Shaping the route",
        body: [
          "The cleanest routes are linear: fly into one end, fly out of the other, never double back. Spain's budget airports make this easy — Barcelona and Alicante, or Madrid and Málaga, both work.",
          "If you are travelling the network, plan the first two stops and leave the rest open. Picking the next city from a partner hostel's reception is generally better information than anything you will find online.",
        ],
      },
    ],
    relatedDestinations: ["barcelona", "valencia", "seville"],
    relatedHostels: ["casa-naranja-valencia", "triana-patio-seville", "gracia-rooftop-barcelona"],
    relatedGuides: ["spain-on-a-budget", "how-to-travel-spain-by-train", "first-time-in-spain"],
  },
  {
    slug: "first-time-in-spain",
    title: "First Time in Spain",
    category: "Planning",
    excerpt:
      "Meal times, siesta reality, tipping, and the handful of customs that catch everyone out.",
    image: img("photo-1556798542-13bfa5d6d01e"),
    alt: "People walking along a sunlit street in a Spanish city",
    readingMinutes: 5,
    updated: "September 2026",
    author: "NEXT STOP Editorial",
    intro: [
      "Most of what goes wrong on a first trip to Spain is timing. The country runs two or three hours later than northern Europe, and nothing about that is negotiable.",
      "Get the clock right and everything else follows.",
    ],
    sections: [
      {
        id: "the-clock",
        heading: "The Spanish clock",
        body: [
          "Lunch is the main meal and runs from roughly 14:00 to 16:00. Dinner starts at 21:00 and many kitchens do not open before then. Turning up at a restaurant at seven means either an empty room or a tourist menu.",
          "The siesta is real in smaller towns, where shops close from around two until five. In big cities it mostly is not.",
        ],
      },
      {
        id: "eating",
        heading: "How to order",
        body: [
          "Tapas are small plates, raciones are large ones meant for sharing, and a pincho is a single bite on bread. In most of the country you pay for all of them; in Granada, tapas come free with drinks.",
          "Tipping is modest — rounding up, or leaving a euro or two for a good meal, is normal. Fifteen or twenty per cent is not expected.",
        ],
      },
      {
        id: "practical",
        heading: "Small things that help",
        body: [
          "A handful of practical habits that make a first trip easier.",
        ],
        bullets: [
          "Carry ID — hostels and museums ask for it, and it is a legal requirement",
          "Cards work almost everywhere, but markets and small bars may want cash",
          "Sunday closes a lot of things outside the big cities",
          "Learn five words of Spanish; it changes how people respond to you",
          "Keep bags in front of you on busy metro lines and tourist streets",
        ],
      },
    ],
    relatedDestinations: ["madrid", "seville", "valencia"],
    relatedHostels: ["malasana-house-madrid", "triana-patio-seville"],
    relatedGuides: ["backpacking-spain", "spain-on-a-budget", "barcelona-backpacker-guide"],
  },
];

export const guideMap = new Map(guides.map((g) => [g.slug, g]));

export function getGuide(slug: string): Guide | undefined {
  return guideMap.get(slug);
}

export function getGuides(slugs: string[]): Guide[] {
  return slugs
    .map((slug) => guideMap.get(slug))
    .filter((g): g is Guide => Boolean(g));
}

export function getGuidesForDestination(destinationSlug: string): Guide[] {
  return guides.filter((g) => g.relatedDestinations.includes(destinationSlug));
}
