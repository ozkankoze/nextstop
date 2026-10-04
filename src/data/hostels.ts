/**
 * Hostel catalogue.
 *
 * DEMO DATA — these hostels, prices, ratings and reviews are illustrative
 * content for the NEXT STOP MVP. None of them is a real signed partner, and
 * no price here reflects a live rate. Replace this file once real partner
 * agreements and rates exist.
 */

export type AmenityKey =
  | "wifi"
  | "kitchen"
  | "lockers"
  | "breakfast"
  | "laundry"
  | "ac"
  | "bar"
  | "terrace"
  | "reception24"
  | "linen"
  | "luggage"
  | "tours";

export const amenityLabels: Record<AmenityKey, string> = {
  wifi: "Free Wi-Fi",
  kitchen: "Guest kitchen",
  lockers: "In-room lockers",
  breakfast: "Breakfast available",
  laundry: "Laundry",
  ac: "Air conditioning",
  bar: "Bar / common room",
  terrace: "Terrace or patio",
  reception24: "24h reception",
  linen: "Linen included",
  luggage: "Luggage storage",
  tours: "Walking tours",
};

export type RoomOption = {
  name: string;
  sleeps: string;
  regularPrice: number;
  nextStopPrice: number;
};

export type HostelReview = {
  name: string;
  country: string;
  rating: number;
  month: string;
  text: string;
};

export type Hostel = {
  slug: string;
  name: string;
  destinationSlug: string;
  city: string;
  country: string;
  neighbourhood: string;
  address: string;
  rating: number;
  reviewCount: number;
  /** Nightly dorm price shown as the "regular" comparison, in EUR. */
  regularPrice: number;
  /** Nightly dorm price unlocked with a NEXT PASS, in EUR. */
  nextStopPrice: number;
  /** Walking distance to the city/town centre, in km. */
  distanceToCentreKm: number;
  /** Distance to the nearest beach or lakeshore, in km; null when inland. */
  distanceToBeachKm: number | null;
  images: string[];
  alt: string;
  summary: string;
  description: string[];
  amenities: AmenityKey[];
  rooms: RoomOption[];
  houseRules: { label: string; value: string }[];
  reviews: HostelReview[];
  /** Shown in the home page "Founding Partner Hostels" carousel. */
  featured?: boolean;
};

const img = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

/** Shared interior shots used to round out each gallery. */
const gallery = {
  courtyard: img("photo-1630840274967-ece6eaa61dfc"),
  stringLights: img("photo-1752491027824-e9006cd14046"),
  patioBar: img("photo-1785486250446-b048054c8484"),
  brickCommon: img("photo-1789175095779-631b03bccdc8"),
  rooftop: img("photo-1773162845612-41803ae79fc2"),
  outdoorLounge: img("photo-1775733923991-e7223f9f44bc"),
  woodTables: img("photo-1599579134532-b31b619b0905"),
  sunlitDorm: img("photo-1768289269971-6171457bed13"),
  palmShelf: img("photo-1629922416128-f1df4f499637"),
  poolTables: img("photo-1626279484248-59d4cc4ab19f"),
  umbrellas: img("photo-1777113310184-140ff530f4dd"),
  greenRoof: img("photo-1785486249823-02fbb298c918"),
  bunkWindow: img("photo-1709805619372-40de3f158e83"),
  bookshelf: img("photo-1718711621245-9c18514277cc"),
  wicker: img("photo-1564137799581-baca1aa17f5d"),
  diners: img("photo-1695606453510-dc0cf8377836"),
  foosball: img("photo-1650408417545-46e720319368"),
  deskLamp: img("photo-1730096081994-73f1fa5f189a"),
};

const standardRules = [
  { label: "Check-in", value: "From 14:00" },
  { label: "Check-out", value: "Until 11:00" },
  { label: "Quiet hours", value: "23:00 – 08:00 in dorms" },
  { label: "Age policy", value: "18+ in shared dorms" },
  { label: "Cancellation", value: "Free up to 48h before arrival" },
];

export const hostels: Hostel[] = [
  {
    slug: "casa-naranja-valencia",
    name: "Casa Naranja Hostel",
    destinationSlug: "valencia",
    city: "Valencia",
    country: "Spain",
    neighbourhood: "El Carmen",
    address: "Carrer dels Cavallers, El Carmen, Valencia",
    rating: 9.2,
    reviewCount: 412,
    regularPrice: 20,
    nextStopPrice: 17,
    distanceToCentreKm: 0.4,
    distanceToBeachKm: 4.2,
    images: [gallery.courtyard, gallery.brickCommon, gallery.sunlitDorm, gallery.woodTables],
    alt: "Leafy hostel courtyard with wooden tables and orange trees",
    summary:
      "A restored townhouse around an orange-tree courtyard, two minutes from the Torres de Quart.",
    description: [
      "Casa Naranja occupies a nineteenth-century house in the middle of El Carmen, built around the kind of tiled courtyard that most Valencian buildings hide behind their front doors. Breakfast is served out there, and most evenings end there too.",
      "Dorms are on the upper two floors, away from the courtyard noise, with proper mattresses, reading lights and full-height lockers. The kitchen is open all day and the staff run a free tapas walk three nights a week.",
    ],
    amenities: ["wifi", "kitchen", "lockers", "breakfast", "ac", "terrace", "laundry", "tours", "linen", "luggage"],
    rooms: [
      { name: "6-bed mixed dorm", sleeps: "1 guest", regularPrice: 20, nextStopPrice: 17 },
      { name: "4-bed female dorm", sleeps: "1 guest", regularPrice: 24, nextStopPrice: 21 },
      { name: "Private double", sleeps: "2 guests", regularPrice: 58, nextStopPrice: 51 },
    ],
    houseRules: standardRules,
    reviews: [
      {
        name: "Lina",
        country: "Germany",
        rating: 9.5,
        month: "August",
        text: "The courtyard is the whole point. I came for two nights and left after five, mostly because of the people I met at breakfast.",
      },
      {
        name: "Tom",
        country: "United Kingdom",
        rating: 9.0,
        month: "July",
        text: "Spotless, quiet dorms and a great location for walking everywhere. The tapas walk was a good way to meet people on the first night.",
      },
      {
        name: "Marta",
        country: "Poland",
        rating: 9.3,
        month: "June",
        text: "Staff lent me a bike for free and drew a route through the Turia park on a paper map. Small thing, made the trip.",
      },
    ],
    featured: true,
  },
  {
    slug: "turia-riverbed-valencia",
    name: "Turia Riverbed Hostel",
    destinationSlug: "valencia",
    city: "Valencia",
    country: "Spain",
    neighbourhood: "Ruzafa",
    address: "Carrer de Cadis, Ruzafa, Valencia",
    rating: 9.0,
    reviewCount: 287,
    regularPrice: 19,
    nextStopPrice: 16,
    distanceToCentreKm: 1.2,
    distanceToBeachKm: 3.8,
    images: [gallery.stringLights, gallery.woodTables, gallery.sunlitDorm, gallery.patioBar],
    alt: "Cosy hostel lounge with string lights above a shared dining area",
    summary:
      "A social hostel in Ruzafa with bikes included and the Turia park at the end of the street.",
    description: [
      "Ruzafa is Valencia's food and bar neighbourhood, and Turia Riverbed sits in the middle of it. The ground-floor lounge runs from breakfast through to late evening, with long shared tables and a record player nobody ever turns off.",
      "Every bed comes with bike access at no extra cost, which is the sensible way to use Valencia — the park path reaches the beach in about twenty-five minutes.",
    ],
    amenities: ["wifi", "kitchen", "lockers", "ac", "bar", "laundry", "linen", "luggage", "tours"],
    rooms: [
      { name: "8-bed mixed dorm", sleeps: "1 guest", regularPrice: 19, nextStopPrice: 16 },
      { name: "6-bed mixed dorm", sleeps: "1 guest", regularPrice: 22, nextStopPrice: 19 },
      { name: "Private twin", sleeps: "2 guests", regularPrice: 54, nextStopPrice: 47 },
    ],
    houseRules: standardRules,
    reviews: [
      {
        name: "Sofie",
        country: "Belgium",
        rating: 9.2,
        month: "September",
        text: "Free bikes made the whole stay. Cycled to the beach every morning before it got hot.",
      },
      {
        name: "Diego",
        country: "Argentina",
        rating: 8.8,
        month: "May",
        text: "Ruzafa is the right place to stay in Valencia. Good kitchen, easy people, quiet at night despite the bars outside.",
      },
    ],
    featured: true,
  },
  {
    slug: "malvarrosa-beach-valencia",
    name: "Malvarrosa Beach Hostel",
    destinationSlug: "valencia",
    city: "Valencia",
    country: "Spain",
    neighbourhood: "Cabanyal",
    address: "Carrer de la Reina, Cabanyal, Valencia",
    rating: 8.9,
    reviewCount: 233,
    regularPrice: 21,
    nextStopPrice: 18,
    distanceToCentreKm: 3.6,
    distanceToBeachKm: 0.2,
    images: [gallery.patioBar, gallery.outdoorLounge, gallery.umbrellas, gallery.sunlitDorm],
    alt: "Sunlit hostel patio with tables, chairs and a small bar",
    summary:
      "Two streets from Malvarrosa beach, in the tiled fishermen's quarter of Cabanyal.",
    description: [
      "Cabanyal is the old fishing neighbourhood behind the beach, all low houses with painted tile facades. Malvarrosa Beach Hostel is one of them, converted around a long back patio with a bar, hammocks and a surfboard rack.",
      "The tram reaches the city centre in fifteen minutes, but most guests end up spending their days between the sand and the seafood restaurants on the next street.",
    ],
    amenities: ["wifi", "kitchen", "lockers", "ac", "bar", "terrace", "linen", "luggage"],
    rooms: [
      { name: "10-bed mixed dorm", sleeps: "1 guest", regularPrice: 21, nextStopPrice: 18 },
      { name: "4-bed mixed dorm", sleeps: "1 guest", regularPrice: 26, nextStopPrice: 23 },
      { name: "Private double with balcony", sleeps: "2 guests", regularPrice: 62, nextStopPrice: 55 },
    ],
    houseRules: standardRules,
    reviews: [
      {
        name: "Nina",
        country: "Netherlands",
        rating: 9.1,
        month: "July",
        text: "Woke up, walked to the beach in three minutes, came back for lunch. Did that four days in a row.",
      },
      {
        name: "Callum",
        country: "Ireland",
        rating: 8.6,
        month: "August",
        text: "The patio bar is good fun and never gets out of hand. Dorm was cool even in the August heat.",
      },
    ],
    featured: true,
  },
  {
    slug: "el-carmen-backpackers-valencia",
    name: "El Carmen Backpackers",
    destinationSlug: "valencia",
    city: "Valencia",
    country: "Spain",
    neighbourhood: "El Carmen",
    address: "Plaça del Tossal, El Carmen, Valencia",
    rating: 8.7,
    reviewCount: 356,
    regularPrice: 18,
    nextStopPrice: 15,
    distanceToCentreKm: 0.3,
    distanceToBeachKm: 4.5,
    images: [gallery.brickCommon, gallery.woodTables, gallery.bunkWindow, gallery.courtyard],
    alt: "Long wooden table and black chairs in a brick-walled common room",
    summary:
      "The cheapest bed in the old town, right on Plaça del Tossal and its street art.",
    description: [
      "El Carmen Backpackers is a straightforward, well-run hostel that puts its money into the things that matter: good mattresses, hot showers and a kitchen big enough to actually cook in.",
      "It sits on one of the busiest squares in the old town, which means everything is on the doorstep and the dorms facing the street are noisier. Ask for a courtyard-facing bed if you are a light sleeper.",
    ],
    amenities: ["wifi", "kitchen", "lockers", "ac", "laundry", "linen", "luggage", "reception24"],
    rooms: [
      { name: "12-bed mixed dorm", sleeps: "1 guest", regularPrice: 18, nextStopPrice: 15 },
      { name: "6-bed female dorm", sleeps: "1 guest", regularPrice: 22, nextStopPrice: 19 },
      { name: "Private single", sleeps: "1 guest", regularPrice: 42, nextStopPrice: 37 },
    ],
    houseRules: standardRules,
    reviews: [
      {
        name: "Yuki",
        country: "Japan",
        rating: 8.9,
        month: "October",
        text: "Best value in Valencia. The kitchen is properly equipped, which saved me a lot over a week.",
      },
      {
        name: "Paul",
        country: "France",
        rating: 8.4,
        month: "June",
        text: "Central and cheap. Take a bed at the back — the square is loud until late on weekends.",
      },
    ],
    featured: true,
  },
  {
    slug: "gracia-rooftop-barcelona",
    name: "Gràcia Rooftop Hostel",
    destinationSlug: "barcelona",
    city: "Barcelona",
    country: "Spain",
    neighbourhood: "Gràcia",
    address: "Carrer de Verdi, Gràcia, Barcelona",
    rating: 9.1,
    reviewCount: 521,
    regularPrice: 29,
    nextStopPrice: 25,
    distanceToCentreKm: 2.4,
    distanceToBeachKm: 4.0,
    images: [gallery.rooftop, gallery.outdoorLounge, gallery.sunlitDorm, gallery.woodTables],
    alt: "Rooftop terrace lounge looking out over the city at dusk",
    summary:
      "A rooftop with a view of the Sagrada Família, in Barcelona's most village-like neighbourhood.",
    description: [
      "Gràcia was a separate town until the city grew around it, and it still feels like one: small squares, independent shops, and far fewer tour groups than the Gothic Quarter.",
      "The hostel's roof terrace is the main event, open until midnight with the Sagrada Família visible over the rooftops. Dorms are below, with air conditioning and blackout curtains.",
    ],
    amenities: ["wifi", "kitchen", "lockers", "breakfast", "ac", "terrace", "bar", "linen", "luggage", "tours"],
    rooms: [
      { name: "8-bed mixed dorm", sleeps: "1 guest", regularPrice: 29, nextStopPrice: 25 },
      { name: "4-bed mixed dorm", sleeps: "1 guest", regularPrice: 34, nextStopPrice: 30 },
      { name: "Private double", sleeps: "2 guests", regularPrice: 78, nextStopPrice: 69 },
    ],
    houseRules: standardRules,
    reviews: [
      {
        name: "Erin",
        country: "Canada",
        rating: 9.4,
        month: "September",
        text: "Worth staying outside the centre for. The roof at sunset is something I still think about.",
      },
      {
        name: "Mateo",
        country: "Chile",
        rating: 8.8,
        month: "April",
        text: "Gràcia is full of good cheap restaurants and the metro gets you anywhere in fifteen minutes.",
      },
    ],
    featured: true,
  },
  {
    slug: "raval-social-barcelona",
    name: "Raval Social Hostel",
    destinationSlug: "barcelona",
    city: "Barcelona",
    country: "Spain",
    neighbourhood: "El Raval",
    address: "Carrer del Carme, El Raval, Barcelona",
    rating: 8.6,
    reviewCount: 604,
    regularPrice: 26,
    nextStopPrice: 22,
    distanceToCentreKm: 0.6,
    distanceToBeachKm: 1.6,
    images: [gallery.outdoorLounge, gallery.patioBar, gallery.bunkWindow, gallery.brickCommon],
    alt: "Modern outdoor lounge area with a bar and hanging plants",
    summary: "A loud, friendly hostel five minutes from Las Ramblas and the MACBA.",
    description: [
      "Raval Social is built for people who came to Barcelona to meet other people. There is a bar, a courtyard, a pub-quiz night and a pancake breakfast, and the staff will happily tell you where to go afterwards.",
      "El Raval is central, diverse and busy at all hours. It is not the quietest neighbourhood in the city, and the hostel does not pretend otherwise.",
    ],
    amenities: ["wifi", "kitchen", "lockers", "breakfast", "ac", "bar", "terrace", "reception24", "linen", "luggage"],
    rooms: [
      { name: "12-bed mixed dorm", sleeps: "1 guest", regularPrice: 26, nextStopPrice: 22 },
      { name: "6-bed female dorm", sleeps: "1 guest", regularPrice: 31, nextStopPrice: 27 },
      { name: "Private twin", sleeps: "2 guests", regularPrice: 72, nextStopPrice: 64 },
    ],
    houseRules: standardRules,
    reviews: [
      {
        name: "Jonas",
        country: "Denmark",
        rating: 8.9,
        month: "July",
        text: "If you want to meet people on day one, stay here. If you want to sleep by eleven, do not.",
      },
      {
        name: "Aisha",
        country: "United Kingdom",
        rating: 8.3,
        month: "May",
        text: "Great staff and a good breakfast. Earplugs recommended — they hand them out at reception, which tells you something.",
      },
    ],
  },
  {
    slug: "malasana-house-madrid",
    name: "Malasaña House",
    destinationSlug: "madrid",
    city: "Madrid",
    country: "Spain",
    neighbourhood: "Malasaña",
    address: "Calle del Espíritu Santo, Malasaña, Madrid",
    rating: 9.0,
    reviewCount: 318,
    regularPrice: 25,
    nextStopPrice: 21,
    distanceToCentreKm: 1.1,
    distanceToBeachKm: null,
    images: [gallery.woodTables, gallery.brickCommon, gallery.sunlitDorm, gallery.deskLamp],
    alt: "Bright hostel common room with a long wooden table and chairs",
    summary:
      "A calm, design-led hostel in Madrid's record-shop district, ten minutes from Gran Vía.",
    description: [
      "Malasaña House is the quieter kind of hostel: good coffee, plants, a proper reading corner and a no-parties policy that it actually enforces.",
      "It is still surrounded by Madrid's best bars — they are simply on the street rather than in the building. The Prado is four metro stops away and Gran Vía is a ten-minute walk.",
    ],
    amenities: ["wifi", "kitchen", "lockers", "breakfast", "ac", "laundry", "linen", "luggage", "tours"],
    rooms: [
      { name: "6-bed mixed dorm", sleeps: "1 guest", regularPrice: 25, nextStopPrice: 21 },
      { name: "4-bed female dorm", sleeps: "1 guest", regularPrice: 29, nextStopPrice: 25 },
      { name: "Private double", sleeps: "2 guests", regularPrice: 68, nextStopPrice: 60 },
    ],
    houseRules: standardRules,
    reviews: [
      {
        name: "Hannah",
        country: "Australia",
        rating: 9.2,
        month: "October",
        text: "Finally a hostel where you can go to bed at a normal hour and still meet people at breakfast.",
      },
      {
        name: "Luca",
        country: "Italy",
        rating: 8.7,
        month: "March",
        text: "Perfect base for the museums. Staff gave me the free-entry times written on a card.",
      },
    ],
  },
  {
    slug: "lavapies-hostel-madrid",
    name: "Lavapiés Hostel",
    destinationSlug: "madrid",
    city: "Madrid",
    country: "Spain",
    neighbourhood: "Lavapiés",
    address: "Calle de Argumosa, Lavapiés, Madrid",
    rating: 8.5,
    reviewCount: 241,
    regularPrice: 22,
    nextStopPrice: 19,
    distanceToCentreKm: 1.4,
    distanceToBeachKm: null,
    images: [gallery.sunlitDorm, gallery.foosball, gallery.woodTables, gallery.bookshelf],
    alt: "Bunk beds in a bright dormitory with sunlight coming through the window",
    summary:
      "Simple, cheap and right beside the Reina Sofía, in Madrid's most multicultural barrio.",
    description: [
      "Lavapiés is where Madrid eats best for the least money, and this hostel puts you in the middle of it. Expect a plain, well-kept building rather than a designed one.",
      "The Reina Sofía is two streets away, the Sunday Rastro flea market is a ten-minute walk, and the terrace bars on Calle Argumosa run until late.",
    ],
    amenities: ["wifi", "kitchen", "lockers", "ac", "laundry", "linen", "luggage"],
    rooms: [
      { name: "10-bed mixed dorm", sleeps: "1 guest", regularPrice: 22, nextStopPrice: 19 },
      { name: "6-bed mixed dorm", sleeps: "1 guest", regularPrice: 26, nextStopPrice: 22 },
      { name: "Private single", sleeps: "1 guest", regularPrice: 46, nextStopPrice: 40 },
    ],
    houseRules: standardRules,
    reviews: [
      {
        name: "Bea",
        country: "Portugal",
        rating: 8.6,
        month: "June",
        text: "Nothing fancy, everything works, and the neighbourhood is the real reason to stay here.",
      },
      {
        name: "Sam",
        country: "United States",
        rating: 8.2,
        month: "November",
        text: "Cheap, clean and two minutes from the Reina Sofía. Kitchen gets busy around eight.",
      },
    ],
  },
  {
    slug: "triana-patio-seville",
    name: "Triana Patio Hostel",
    destinationSlug: "seville",
    city: "Seville",
    country: "Spain",
    neighbourhood: "Triana",
    address: "Calle Betis, Triana, Seville",
    rating: 9.1,
    reviewCount: 274,
    regularPrice: 21,
    nextStopPrice: 18,
    distanceToCentreKm: 1.3,
    distanceToBeachKm: null,
    images: [gallery.palmShelf, gallery.courtyard, gallery.umbrellas, gallery.woodTables],
    alt: "Shaded hostel patio with palms and tiled walls",
    summary:
      "Across the river in Triana, with a tiled patio and flamenco bars on the same street.",
    description: [
      "Triana was the ceramics and flamenco quarter and still has the tile workshops to prove it. This hostel is built around a classic Andalusian patio that stays cool through the afternoon.",
      "Calle Betis, along the river, is a five-minute walk and has the best evening view of the cathedral in the city.",
    ],
    amenities: ["wifi", "kitchen", "lockers", "breakfast", "ac", "terrace", "linen", "luggage", "tours"],
    rooms: [
      { name: "8-bed mixed dorm", sleeps: "1 guest", regularPrice: 21, nextStopPrice: 18 },
      { name: "4-bed female dorm", sleeps: "1 guest", regularPrice: 25, nextStopPrice: 22 },
      { name: "Private double", sleeps: "2 guests", regularPrice: 60, nextStopPrice: 53 },
    ],
    houseRules: standardRules,
    reviews: [
      {
        name: "Greta",
        country: "Lithuania",
        rating: 9.3,
        month: "April",
        text: "The patio saved me in the Seville heat. Also the staff got us into a tiny flamenco peña with no tourists.",
      },
      {
        name: "Ryan",
        country: "New Zealand",
        rating: 8.9,
        month: "October",
        text: "Staying in Triana is better than staying in the centre. Ten minutes over the bridge and much more relaxed.",
      },
    ],
  },
  {
    slug: "malagueta-surf-malaga",
    name: "Malagueta Surf Hostel",
    destinationSlug: "malaga",
    city: "Málaga",
    country: "Spain",
    neighbourhood: "La Malagueta",
    address: "Paseo de Reding, La Malagueta, Málaga",
    rating: 8.8,
    reviewCount: 196,
    regularPrice: 20,
    nextStopPrice: 17,
    distanceToCentreKm: 1.0,
    distanceToBeachKm: 0.3,
    images: [gallery.poolTables, gallery.patioBar, gallery.outdoorLounge, gallery.sunlitDorm],
    alt: "Hostel terrace with wooden tables and chairs beside a small pool",
    summary: "A short walk from both the city beach and the Alcazaba, with a small pool.",
    description: [
      "Malagueta Surf sits on the strip between the old town and the beach, which in Málaga is only about fifteen minutes of walking. The small pool on the terrace is a genuine luxury in August.",
      "Boards and bikes are available to rent, and the staff run a weekly trip to the surf beaches west of the city when the swell is right.",
    ],
    amenities: ["wifi", "kitchen", "lockers", "ac", "bar", "terrace", "laundry", "linen", "luggage"],
    rooms: [
      { name: "8-bed mixed dorm", sleeps: "1 guest", regularPrice: 20, nextStopPrice: 17 },
      { name: "6-bed mixed dorm", sleeps: "1 guest", regularPrice: 24, nextStopPrice: 21 },
      { name: "Private double", sleeps: "2 guests", regularPrice: 58, nextStopPrice: 51 },
    ],
    houseRules: standardRules,
    reviews: [
      {
        name: "Freya",
        country: "Germany",
        rating: 9.0,
        month: "August",
        text: "A pool at a hostel this price is unheard of. Beach one way, old town the other.",
      },
      {
        name: "Andrés",
        country: "Colombia",
        rating: 8.5,
        month: "September",
        text: "Good spot to base yourself for Granada and Ronda day trips. Bus station is easy to reach.",
      },
    ],
  },
  {
    slug: "albayzin-view-granada",
    name: "Albayzín View Hostel",
    destinationSlug: "granada",
    city: "Granada",
    country: "Spain",
    neighbourhood: "Albayzín",
    address: "Cuesta de San Gregorio, Albayzín, Granada",
    rating: 9.3,
    reviewCount: 389,
    regularPrice: 19,
    nextStopPrice: 16,
    distanceToCentreKm: 1.1,
    distanceToBeachKm: null,
    images: [gallery.umbrellas, gallery.greenRoof, gallery.courtyard, gallery.bunkWindow],
    alt: "Rooftop patio with tables, chairs and umbrellas overlooking the town",
    summary:
      "A rooftop facing the Alhambra, halfway up the Albayzín's whitewashed lanes.",
    description: [
      "There is a reason this one books out first: the terrace looks straight across the valley at the Alhambra, and it is open to guests from breakfast until midnight.",
      "The climb up from the centre is steep and cobbled — leave the wheeled suitcase behind — but the reward is the quietest, oldest part of Granada right outside the door.",
    ],
    amenities: ["wifi", "kitchen", "lockers", "breakfast", "terrace", "ac", "linen", "luggage", "tours"],
    rooms: [
      { name: "6-bed mixed dorm", sleeps: "1 guest", regularPrice: 19, nextStopPrice: 16 },
      { name: "4-bed mixed dorm", sleeps: "1 guest", regularPrice: 23, nextStopPrice: 20 },
      { name: "Private double with view", sleeps: "2 guests", regularPrice: 64, nextStopPrice: 56 },
    ],
    houseRules: standardRules,
    reviews: [
      {
        name: "Elif",
        country: "Türkiye",
        rating: 9.6,
        month: "May",
        text: "I watched the sun set on the Alhambra from the roof every night. Book the Alhambra tickets before you book anything else, though.",
      },
      {
        name: "Nils",
        country: "Sweden",
        rating: 9.0,
        month: "March",
        text: "The walk up is no joke with a big pack, but it is completely worth it.",
      },
    ],
    featured: true,
  },
  {
    slug: "santa-barbara-alicante",
    name: "Santa Bárbara Hostel",
    destinationSlug: "alicante",
    city: "Alicante",
    country: "Spain",
    neighbourhood: "Casco Antiguo",
    address: "Carrer Major, Casco Antiguo, Alicante",
    rating: 8.6,
    reviewCount: 164,
    regularPrice: 18,
    nextStopPrice: 15,
    distanceToCentreKm: 0.3,
    distanceToBeachKm: 0.25,
    images: [gallery.greenRoof, gallery.patioBar, gallery.woodTables, gallery.sunlitDorm],
    alt: "Rooftop terrace overlooking the old town rooftops",
    summary:
      "In the old town below the castle, three minutes from Postiguet beach.",
    description: [
      "Santa Bárbara is a small, family-run hostel in the Casco Antiguo, with a roof terrace under the castle rock and a kitchen everyone actually uses.",
      "The beach, the Explanada promenade and the lift up to the castle are all within a few minutes' walk, and the TRAM to the northern beaches leaves nearby.",
    ],
    amenities: ["wifi", "kitchen", "lockers", "ac", "terrace", "linen", "luggage"],
    rooms: [
      { name: "8-bed mixed dorm", sleeps: "1 guest", regularPrice: 18, nextStopPrice: 15 },
      { name: "4-bed mixed dorm", sleeps: "1 guest", regularPrice: 22, nextStopPrice: 19 },
      { name: "Private twin", sleeps: "2 guests", regularPrice: 52, nextStopPrice: 46 },
    ],
    houseRules: standardRules,
    reviews: [
      {
        name: "Marc",
        country: "Switzerland",
        rating: 8.8,
        month: "June",
        text: "Small and friendly. The owner walked me to the tram stop and explained the whole coast line.",
      },
      {
        name: "Ivy",
        country: "United States",
        rating: 8.4,
        month: "September",
        text: "Good stop between Valencia and the south. Beach really is three minutes away.",
      },
    ],
  },
  {
    slug: "golden-age-ohrid",
    name: "Golden Age Hostel",
    destinationSlug: "ohrid",
    city: "Ohrid",
    country: "North Macedonia",
    neighbourhood: "Old Town",
    address: "Ulica Car Samoil, Old Town, Ohrid",
    rating: 9.2,
    reviewCount: 208,
    regularPrice: 16,
    nextStopPrice: 13,
    distanceToCentreKm: 0.2,
    distanceToBeachKm: 0.3,
    images: [gallery.bunkWindow, gallery.courtyard, gallery.woodTables, gallery.wicker],
    alt: "Dormitory with bunk beds beside a large window overlooking the lake",
    summary: "A stone house in the old town with lake views from the upper dorms.",
    description: [
      "Golden Age is built into the slope of Ohrid's old town, which means the top-floor dorms look straight out over the lake. Breakfast is on the terrace, weather permitting, which in summer it always is.",
      "The fortress, the amphitheatre and the lakeside boardwalk are all within a ten-minute walk downhill.",
    ],
    amenities: ["wifi", "kitchen", "lockers", "breakfast", "terrace", "linen", "luggage", "tours"],
    rooms: [
      { name: "6-bed mixed dorm", sleeps: "1 guest", regularPrice: 16, nextStopPrice: 13 },
      { name: "4-bed lake-view dorm", sleeps: "1 guest", regularPrice: 20, nextStopPrice: 17 },
      { name: "Private double", sleeps: "2 guests", regularPrice: 44, nextStopPrice: 38 },
    ],
    houseRules: standardRules,
    reviews: [
      {
        name: "Katrin",
        country: "Austria",
        rating: 9.4,
        month: "July",
        text: "Waking up to that lake through the window is not something a photo covers.",
      },
      {
        name: "Bojan",
        country: "Croatia",
        rating: 9.0,
        month: "August",
        text: "Great base for the boat trip to Sveti Naum. Host arranged it for us at a better price than the pier.",
      },
    ],
  },
  {
    slug: "hostel-42-belgrade",
    name: "Hostel 42",
    destinationSlug: "belgrade",
    city: "Belgrade",
    country: "Serbia",
    neighbourhood: "Dorćol",
    address: "Cara Dušana, Dorćol, Belgrade",
    rating: 8.8,
    reviewCount: 447,
    regularPrice: 18,
    nextStopPrice: 15,
    distanceToCentreKm: 1.0,
    distanceToBeachKm: 2.8,
    images: [gallery.bookshelf, gallery.brickCommon, gallery.woodTables, gallery.foosball],
    alt: "Reading corner with an armchair and a bookshelf in a hostel common room",
    summary:
      "A quiet, book-lined hostel in Dorćol, ten minutes from Kalemegdan and the river barges.",
    description: [
      "Hostel 42 takes the opposite approach to most Belgrade hostels: a library instead of a bar, filter coffee instead of rakija shots, and a genuinely early quiet hour.",
      "The nightlife is still fifteen minutes away on foot — the hostel just does not bring it home with you. Staff keep a hand-drawn map of which barges are actually good.",
    ],
    amenities: ["wifi", "kitchen", "lockers", "breakfast", "ac", "laundry", "linen", "luggage", "reception24"],
    rooms: [
      { name: "8-bed mixed dorm", sleeps: "1 guest", regularPrice: 18, nextStopPrice: 15 },
      { name: "4-bed mixed dorm", sleeps: "1 guest", regularPrice: 22, nextStopPrice: 19 },
      { name: "Private double", sleeps: "2 guests", regularPrice: 48, nextStopPrice: 42 },
    ],
    houseRules: standardRules,
    reviews: [
      {
        name: "Ana",
        country: "Slovenia",
        rating: 9.0,
        month: "September",
        text: "Calm, clean and well located. The staff map of the splav clubs was better than anything online.",
      },
      {
        name: "Ben",
        country: "United Kingdom",
        rating: 8.5,
        month: "June",
        text: "Dorćol is a great neighbourhood. Easy walk to the fortress and plenty of cheap food nearby.",
      },
    ],
  },
  {
    slug: "balkan-soul-sarajevo",
    name: "Balkan Soul Hostel",
    destinationSlug: "sarajevo",
    city: "Sarajevo",
    country: "Bosnia & Herzegovina",
    neighbourhood: "Baščaršija",
    address: "Mula Mustafe Bašeskije, Baščaršija, Sarajevo",
    rating: 9.1,
    reviewCount: 362,
    regularPrice: 16,
    nextStopPrice: 13,
    distanceToCentreKm: 0.3,
    distanceToBeachKm: null,
    images: [gallery.wicker, gallery.diners, gallery.woodTables, gallery.bunkWindow],
    alt: "Hostel lounge with wicker armchairs and low tables",
    summary:
      "On the edge of the Ottoman bazaar, with free Bosnian coffee and a walking tour every morning.",
    description: [
      "Balkan Soul is a few doors from Baščaršija's coppersmith street. The owner runs a free morning walk that covers the Latin Bridge, the Ottoman and Austro-Hungarian divide, and the siege years, and it is one of the better ones in the city.",
      "Coffee is served the proper way — copper pot, sugar cube, no rush — in the lounge all day.",
    ],
    amenities: ["wifi", "kitchen", "lockers", "breakfast", "ac", "tours", "linen", "luggage", "reception24"],
    rooms: [
      { name: "8-bed mixed dorm", sleeps: "1 guest", regularPrice: 16, nextStopPrice: 13 },
      { name: "6-bed female dorm", sleeps: "1 guest", regularPrice: 19, nextStopPrice: 16 },
      { name: "Private double", sleeps: "2 guests", regularPrice: 44, nextStopPrice: 39 },
    ],
    houseRules: standardRules,
    reviews: [
      {
        name: "Clara",
        country: "France",
        rating: 9.3,
        month: "May",
        text: "The morning walking tour completely changed how I understood the city. Do it on your first day.",
      },
      {
        name: "Ollie",
        country: "Australia",
        rating: 8.9,
        month: "October",
        text: "Right in the bazaar, so you wake up to the call to prayer and the coppersmiths starting work.",
      },
    ],
  },
  {
    slug: "tirana-backpacker",
    name: "Tirana Backpacker",
    destinationSlug: "tirana",
    city: "Tirana",
    country: "Albania",
    neighbourhood: "Blloku",
    address: "Rruga Papa Gjon Pali II, Blloku, Tirana",
    rating: 9.0,
    reviewCount: 298,
    regularPrice: 14,
    nextStopPrice: 11,
    distanceToCentreKm: 1.3,
    distanceToBeachKm: null,
    images: [gallery.diners, gallery.courtyard, gallery.patioBar, gallery.sunlitDorm],
    alt: "Guests eating together at long tables in a colourful hostel common room",
    summary:
      "Albania's original backpacker hostel, with a garden bar and cheap beds in Blloku.",
    description: [
      "Tirana Backpacker has been putting travellers up since long before Albania was on most itineraries, and the garden is still where half the city's backpackers end up on a summer evening.",
      "Blloku, once closed to ordinary Albanians, is now the nightlife district — and it starts at the end of the street.",
    ],
    amenities: ["wifi", "kitchen", "lockers", "breakfast", "bar", "terrace", "laundry", "linen", "luggage", "tours"],
    rooms: [
      { name: "10-bed mixed dorm", sleeps: "1 guest", regularPrice: 14, nextStopPrice: 11 },
      { name: "6-bed mixed dorm", sleeps: "1 guest", regularPrice: 17, nextStopPrice: 14 },
      { name: "Private double", sleeps: "2 guests", regularPrice: 38, nextStopPrice: 33 },
    ],
    houseRules: standardRules,
    reviews: [
      {
        name: "Milan",
        country: "Czechia",
        rating: 9.1,
        month: "August",
        text: "Cheapest good hostel I stayed in all summer. The garden is where the trip actually happens.",
      },
      {
        name: "Jade",
        country: "Netherlands",
        rating: 8.8,
        month: "June",
        text: "Staff sorted my furgon to Ohrid and told me exactly where to stand. Would have been lost otherwise.",
      },
    ],
  },
];

/* ---------- Lookups ---------- */

export const hostelMap = new Map(hostels.map((h) => [h.slug, h]));

export function getHostel(slug: string): Hostel | undefined {
  return hostelMap.get(slug);
}

export function getHostelsByDestination(destinationSlug: string): Hostel[] {
  return hostels.filter((h) => h.destinationSlug === destinationSlug);
}

export function countHostelsByDestination(destinationSlug: string): number {
  return getHostelsByDestination(destinationSlug).length;
}

export function getSimilarHostels(hostel: Hostel, limit = 3): Hostel[] {
  const sameCity = hostels.filter(
    (h) => h.destinationSlug === hostel.destinationSlug && h.slug !== hostel.slug
  );
  const elsewhere = hostels.filter(
    (h) => h.destinationSlug !== hostel.destinationSlug
  );
  return [...sameCity, ...elsewhere].slice(0, limit);
}

export const featuredHostels = hostels.filter((h) => h.featured);

export function savings(hostel: Pick<Hostel, "regularPrice" | "nextStopPrice">) {
  return hostel.regularPrice - hostel.nextStopPrice;
}
