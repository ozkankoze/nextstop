/**
 * Destination catalogue — the single source of truth used by the home page,
 * /destinations, /destinations/[slug], search autocomplete, routes and guides.
 *
 * All content here is demo/launch copy for the NEXT STOP MVP.
 */

export type CountrySlug =
  | "spain"
  | "albania"
  | "north-macedonia"
  | "serbia"
  | "bosnia-herzegovina"
  | "montenegro"
  | "hungary";

export type Country = {
  slug: CountrySlug;
  name: string;
};

export const countries: Country[] = [
  { slug: "spain", name: "Spain" },
  { slug: "albania", name: "Albania" },
  { slug: "north-macedonia", name: "North Macedonia" },
  { slug: "serbia", name: "Serbia" },
  { slug: "bosnia-herzegovina", name: "Bosnia & Herzegovina" },
  { slug: "montenegro", name: "Montenegro" },
  { slug: "hungary", name: "Hungary" },
];

export type Highlight = {
  title: string;
  description: string;
};

export type Destination = {
  slug: string;
  city: string;
  /** Extra spellings the search box should match, e.g. "Malaga" for "Málaga". */
  aliases?: string[];
  country: string;
  countrySlug: CountrySlug;
  region: "spain" | "balkans";
  image: string;
  heroImage: string;
  alt: string;
  tagline: string;
  intro: string[];
  whyVisit: Highlight[];
  thingsToDo: Highlight[];
  backpackerTips: string[];
  avgDormPrice: number;
  avgPrivatePrice: number;
  bestMonths: string;
  /** Slugs of destinations suggested as the traveller's next stop. */
  onward: string[];
  routeSlugs: string[];
  /** Shown in the home page "Popular Destinations" row. */
  featured?: boolean;
  /** Shown as a chip under the home page search bar. */
  popularSearch?: boolean;
};

export const destinations: Destination[] = [
  {
    slug: "valencia",
    city: "Valencia",
    country: "Spain",
    countrySlug: "spain",
    region: "spain",
    image: "/images/valencia-night.jpg",
    heroImage: "/images/valencia-night.jpg",
    alt: "The City of Arts and Sciences in Valencia at blue hour, lit up and reflected in the water with pink light trails running past",
    tagline: "Beach mornings, old-town evenings, and Spain's friendliest pace.",
    intro: [
      "Valencia is the city that convinces backpackers to stay an extra week. Spain's third city packs a medieval old town, nine kilometres of sand and a nine-kilometre park built in a drained riverbed into somewhere you can cross by bike in twenty minutes.",
      "It is also where NEXT STOP starts. The first hostels to join the network are here, which means this is the easiest city in Spain to arrive in with a NEXT PASS in your pocket and a bed already sorted.",
    ],
    whyVisit: [
      {
        title: "Cheaper than Barcelona, warmer than Madrid",
        description:
          "Dorm beds, menú del día lunches and metro fares all cost noticeably less than in Spain's two biggest cities.",
      },
      {
        title: "A park where a river used to be",
        description:
          "The Turia Gardens curve right through the centre, so almost everything worth seeing is a flat, traffic-free cycle away.",
      },
      {
        title: "Paella where it was invented",
        description:
          "Valencia is the birthplace of paella, and lunch in a neighbourhood restaurant still costs less than a sandwich elsewhere.",
      },
    ],
    thingsToDo: [
      {
        title: "City of Arts and Sciences",
        description:
          "Santiago Calatrava's white shells look unreal at golden hour, and walking the complex from outside costs nothing.",
      },
      {
        title: "Mercado Central",
        description:
          "One of Europe's biggest covered markets — go before noon, buy fruit, jamón and a horchata, eat it in the square.",
      },
      {
        title: "El Carmen at night",
        description:
          "The old quarter's narrow streets hold most of the city's bars, live music and street art within a ten-minute walk.",
      },
      {
        title: "Malvarrosa beach",
        description:
          "Tram 4 or a twenty-minute cycle takes you from the cathedral to the sand and the seafood restaurants behind it.",
      },
    ],
    backpackerTips: [
      "Valenbisi day passes cost a couple of euros and cover the whole Turia park route.",
      "Menú del día is served on weekday lunchtimes — three courses and a drink for around €12.",
      "The airport metro runs to the centre in about 25 minutes; skip the taxi.",
      "Book ahead for Las Fallas in March — the city fills and hostel prices climb.",
    ],
    avgDormPrice: 18,
    avgPrivatePrice: 44,
    bestMonths: "April–June and September–October",
    onward: ["alicante", "barcelona", "madrid"],
    routeSlugs: ["spain-east-coast", "classic-spain"],
    featured: true,
    popularSearch: true,
  },
  {
    slug: "barcelona",
    city: "Barcelona",
    country: "Spain",
    countrySlug: "spain",
    region: "spain",
    image:
      "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1400&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1593368858664-a7fe556ab936?auto=format&fit=crop&w=2400&q=85",
    alt: "Aerial view over Barcelona's rooftops towards the sea",
    tagline: "Gaudí, Gothic alleys and a beach at the end of the metro line.",
    intro: [
      "Barcelona is where most Spain trips begin, and for good reason: two airports' worth of cheap flights, a walkable Gothic core, and modernista architecture that turns an ordinary street corner into a reason to stop.",
      "It is busy and it is not the cheapest city on this list, but it connects to everywhere. Trains south to Valencia take under three hours, which makes it the natural first stop on an east-coast run.",
    ],
    whyVisit: [
      {
        title: "Architecture you can walk between",
        description:
          "Sagrada Família, Casa Batlló and Park Güell sit within a few metro stops of one another.",
      },
      {
        title: "City and sea in one day",
        description:
          "You can spend the morning in a medieval alley and the afternoon swimming at Barceloneta.",
      },
      {
        title: "The best transport links in Spain",
        description:
          "High-speed trains, budget flights and night buses all radiate out from here.",
      },
    ],
    thingsToDo: [
      {
        title: "Gothic Quarter wander",
        description:
          "Start at the cathedral and get deliberately lost — the best squares are the ones you do not plan.",
      },
      {
        title: "Bunkers del Carmel",
        description:
          "A free hilltop viewpoint with the whole city laid out below; locals bring a drink and watch the sunset.",
      },
      {
        title: "Park Güell",
        description:
          "Book the monumental zone ahead of time, or walk the free upper park for the same view without a ticket.",
      },
      {
        title: "Sant Antoni market",
        description:
          "Less touristed than La Boqueria, with tapas bars around it that locals actually use.",
      },
    ],
    backpackerTips: [
      "The T-casual travel card covers ten metro journeys and works out far cheaper than singles.",
      "Keep bags zipped and in front of you on Las Ramblas and the L3 metro line.",
      "Many museums are free on the first Sunday of the month and on Sunday afternoons.",
      "Sleeping in Gràcia or Poble Sec is quieter and cheaper than the Gothic Quarter.",
    ],
    avgDormPrice: 26,
    avgPrivatePrice: 62,
    bestMonths: "May–June and September",
    onward: ["valencia", "madrid", "alicante"],
    routeSlugs: ["spain-east-coast", "classic-spain"],
    featured: true,
    popularSearch: true,
  },
  {
    slug: "madrid",
    city: "Madrid",
    country: "Spain",
    countrySlug: "spain",
    region: "spain",
    image:
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1400&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1570698473651-b2de99bae12f?auto=format&fit=crop&w=2400&q=85",
    alt: "The Metropolis building on Gran Vía in Madrid at low sun",
    tagline: "Spain's late-night capital, with world-class art for free.",
    intro: [
      "Madrid does not have a beach and does not care. What it has is the densest run of great art in Europe, neighbourhoods that each feel like their own small town, and a night that genuinely does not start until midnight.",
      "It is also the country's rail hub. From Atocha you can reach almost any Spanish city on this list in a few hours, which makes Madrid a natural pivot point in the middle of a longer route.",
    ],
    whyVisit: [
      {
        title: "The Golden Triangle of art",
        description:
          "The Prado, Reina Sofía and Thyssen all sit on the same boulevard, and all have free evening hours.",
      },
      {
        title: "Neighbourhoods with character",
        description:
          "Malasaña for record shops, La Latina for Sunday vermouth, Lavapiés for the best cheap food in the city.",
      },
      {
        title: "Everything connects here",
        description:
          "High-speed trains reach Seville, Valencia and Barcelona from the centre of the city.",
      },
    ],
    thingsToDo: [
      {
        title: "Prado on a free evening",
        description:
          "Entry costs nothing in the last two hours — arrive early, pick three rooms, do not try to see it all.",
      },
      {
        title: "El Rastro flea market",
        description:
          "Sunday mornings in La Latina, followed by tapas in the bars that spill onto Cava Baja.",
      },
      {
        title: "Retiro Park",
        description:
          "Row a boat, sit by the Crystal Palace, or just escape the afternoon heat under the trees.",
      },
      {
        title: "Mercado de San Fernando",
        description:
          "A Lavapiés market where the food stalls are cheap and the crowd is local rather than touristic.",
      },
    ],
    backpackerTips: [
      "Museum free hours fill up — join the queue twenty minutes before they start.",
      "The airport metro supplement is small but catches people out; buy the right ticket at the machine.",
      "Summer is genuinely hot. Plan indoor afternoons and go out after nine.",
      "Tap water is excellent, so carry a bottle instead of buying them.",
    ],
    avgDormPrice: 23,
    avgPrivatePrice: 55,
    bestMonths: "April–June and September–October",
    onward: ["seville", "valencia", "granada"],
    routeSlugs: ["classic-spain"],
    featured: true,
    popularSearch: true,
  },
  {
    slug: "seville",
    city: "Seville",
    aliases: ["Sevilla"],
    country: "Spain",
    countrySlug: "spain",
    region: "spain",
    image:
      "https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1400&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1661442196003-f2f6eb54bd94?auto=format&fit=crop&w=2400&q=85",
    alt: "The Giralda tower rising above the rooftops of Seville",
    tagline: "Orange trees, flamenco courtyards and Andalusian heat.",
    intro: [
      "Seville is the most atmospheric city in southern Spain: a Moorish palace, a cathedral you can see from half the city, and streets so narrow the buildings shade them all afternoon.",
      "It is compact enough to walk end to end, and it is the obvious starting point for a southern loop through Málaga and Granada.",
    ],
    whyVisit: [
      {
        title: "The Real Alcázar",
        description:
          "A working royal palace with Moorish courtyards and gardens that reward a slow morning.",
      },
      {
        title: "Flamenco that is not a show",
        description:
          "Small peñas in Triana still run late-night sessions for locals rather than tour groups.",
      },
      {
        title: "Free to simply walk",
        description:
          "Plaza de España, the riverside and the Santa Cruz quarter cost nothing and fill a whole day.",
      },
    ],
    thingsToDo: [
      {
        title: "Plaza de España",
        description:
          "A half-circle of tiled bridges and balconies; go early or at dusk to avoid the crowds and the heat.",
      },
      {
        title: "Metropol Parasol",
        description:
          "A wooden lattice above the old town with a rooftop walkway and a view over the whole centre.",
      },
      {
        title: "Triana across the river",
        description:
          "The old ceramics and flamenco quarter, with a market and tapas bars along Calle Betis.",
      },
      {
        title: "Cathedral and Giralda",
        description:
          "Climb the ramped bell tower — it was built for horses, so there are no stairs to speak of.",
      },
    ],
    backpackerTips: [
      "July and August regularly pass 40°C; spring and autumn are far more comfortable.",
      "Book the Alcázar online — walk-up queues can swallow an hour.",
      "Tapas here are ordered one plate at a time; sharing three or four between two people is normal.",
      "Semana Santa and Feria de Abril are spectacular but beds sell out months ahead.",
    ],
    avgDormPrice: 20,
    avgPrivatePrice: 48,
    bestMonths: "March–May and October",
    onward: ["malaga", "granada", "madrid"],
    routeSlugs: ["southern-spain", "classic-spain"],
    featured: true,
    popularSearch: true,
  },
  {
    slug: "malaga",
    city: "Málaga",
    aliases: ["Malaga"],
    country: "Spain",
    countrySlug: "spain",
    region: "spain",
    image:
      "https://images.unsplash.com/photo-1512753360435-329c4535a9a7?auto=format&fit=crop&w=1400&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1653385324919-e413ff41070e?auto=format&fit=crop&w=2400&q=85",
    alt: "View over Málaga's rooftops towards the Mediterranean",
    tagline: "A beach city with a museum habit and 300 days of sun.",
    intro: [
      "Málaga spent years being treated as the airport you pass through on the way to the Costa del Sol. That is over. The old town has been pedestrianised, the port rebuilt, and there are now more museums per street than almost anywhere in Andalusia.",
      "It is also the cheapest of the big southern cities to fly into, which makes it a sensible place to start or end a Spain trip.",
    ],
    whyVisit: [
      {
        title: "City beach, city prices",
        description:
          "La Malagueta is a fifteen-minute walk from the cathedral, not a resort forty minutes away.",
      },
      {
        title: "Picasso's home town",
        description:
          "The Museo Picasso and his birthplace are both in the old centre, a few minutes apart.",
      },
      {
        title: "Warm all year",
        description:
          "Winter daytime temperatures often sit in the high teens, so the season never really closes.",
      },
    ],
    thingsToDo: [
      {
        title: "Alcazaba and Gibralfaro",
        description:
          "A Moorish fortress climbing the hill above the centre, with the best view in the city at the top.",
      },
      {
        title: "Mercado Atarazanas",
        description:
          "A nineteenth-century iron market with a stained-glass window and a row of cheap seafood counters.",
      },
      {
        title: "Soho street art",
        description:
          "The district between the centre and the port is covered in large-scale murals, all free to see.",
      },
      {
        title: "Day trip to Ronda",
        description:
          "Under two hours by train or bus, and the gorge is worth every minute of the journey.",
      },
    ],
    backpackerTips: [
      "The airport train runs to the centre every twenty minutes for a couple of euros.",
      "Espeto — sardines grilled on a boat over an open fire — is a beachfront speciality and cheap.",
      "Many museums drop to free entry on Sunday afternoons.",
      "Granada and Seville are both easy bus rides, so Málaga works well as a southern base.",
    ],
    avgDormPrice: 19,
    avgPrivatePrice: 46,
    bestMonths: "April–June and September–November",
    onward: ["granada", "seville", "alicante"],
    routeSlugs: ["southern-spain"],
    featured: true,
    popularSearch: true,
  },
  {
    slug: "granada",
    city: "Granada",
    country: "Spain",
    countrySlug: "spain",
    region: "spain",
    image:
      "https://images.unsplash.com/photo-1514981184024-f7fea649f6ed?auto=format&fit=crop&w=1400&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1534423839368-1796a4dd1845?auto=format&fit=crop&w=2400&q=85",
    alt: "The Alhambra palace with the Sierra Nevada mountains behind it",
    tagline: "Free tapas, the Alhambra, and snow above the rooftops.",
    intro: [
      "Granada still runs on the old Andalusian rule: order a drink, get a plate of food with it, free. Combine that with a student population and the result is the best-value night out in Spain.",
      "Above it all sits the Alhambra, and behind that the Sierra Nevada — the only place in Europe where you can plausibly ski in the morning and sit on a Mediterranean beach in the afternoon.",
    ],
    whyVisit: [
      {
        title: "Tapas still come free",
        description:
          "Every drink arrives with food. Three rounds is dinner, and it costs less than a restaurant starter.",
      },
      {
        title: "The Alhambra",
        description:
          "The finest Moorish architecture in Europe, and the reason most people come to Granada at all.",
      },
      {
        title: "Mountains on the doorstep",
        description:
          "The Sierra Nevada is under an hour away by bus, with hiking in summer and skiing in winter.",
      },
    ],
    thingsToDo: [
      {
        title: "Alhambra and Generalife",
        description:
          "Book weeks ahead — the Nasrid Palaces have timed entry and sell out constantly.",
      },
      {
        title: "Mirador San Nicolás",
        description:
          "The classic sunset viewpoint over the Alhambra, usually with someone playing guitar.",
      },
      {
        title: "Albayzín and Sacromonte",
        description:
          "Whitewashed lanes above the city, leading up to the cave houses where flamenco took root.",
      },
      {
        title: "A tapas crawl on Calle Elvira",
        description:
          "Start early, move every drink, and let the bars decide what you eat.",
      },
    ],
    backpackerTips: [
      "Alhambra tickets are released months in advance and genuinely sell out. Book before you book your bed.",
      "Take your passport or ID to the Alhambra — the name on the ticket is checked.",
      "The Albayzín is steep and cobbled; wheeled luggage is a bad idea up there.",
      "Buses to Málaga and Seville run hourly and cost less than the train.",
    ],
    avgDormPrice: 17,
    avgPrivatePrice: 42,
    bestMonths: "March–May and September–November",
    onward: ["malaga", "seville", "madrid"],
    routeSlugs: ["southern-spain"],
    featured: true,
    popularSearch: true,
  },
  {
    slug: "alicante",
    city: "Alicante",
    country: "Spain",
    countrySlug: "spain",
    region: "spain",
    image:
      "https://images.unsplash.com/photo-1680537732160-01750bae5217?auto=format&fit=crop&w=1400&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1680537732093-a4cde73479af?auto=format&fit=crop&w=2400&q=85",
    alt: "Alicante seen from above, with the harbour and the castle hill",
    tagline: "A castle on a rock, a palm-lined promenade, and cheap flights.",
    intro: [
      "Alicante is the relaxed end of the east coast: a working Spanish city with a castle on a limestone crag, a marble promenade along the water and a beach right in the centre.",
      "It is also one of the cheapest places in Spain to fly in or out of, which makes it a practical bookend to an east-coast route that starts in Barcelona.",
    ],
    whyVisit: [
      {
        title: "Castle views for free",
        description:
          "A lift inside the rock takes you up to Santa Bárbara castle, and the grounds cost nothing to walk.",
      },
      {
        title: "Beach in the city",
        description:
          "Postiguet beach is a five-minute walk from the old town, with quieter sand a tram ride north.",
      },
      {
        title: "Cheap to reach",
        description:
          "Budget airlines fly here year-round, and the coastal tram links the nearby beach towns.",
      },
    ],
    thingsToDo: [
      {
        title: "Santa Bárbara castle",
        description:
          "Take the lift up, walk the ramparts, then come down through the old town on foot.",
      },
      {
        title: "Barrio de la Santa Cruz",
        description:
          "Steep lanes of blue-and-white houses and flowerpots, right below the castle.",
      },
      {
        title: "Explanada de España",
        description:
          "A wave-patterned marble promenade under the palms — the evening walk the whole city does.",
      },
      {
        title: "Tabarca island",
        description:
          "A short boat ride to a tiny walled island with clear water and one main street.",
      },
    ],
    backpackerTips: [
      "The TRAM line runs up the coast to Benidorm and the Marina Alta beaches for a few euros.",
      "Turrón and horchata are local; buy them in the Mercado Central rather than on the promenade.",
      "Hogueras de San Juan in June fills the city — book early or come another week.",
      "Valencia is under two hours by train, so the two pair naturally.",
    ],
    avgDormPrice: 17,
    avgPrivatePrice: 40,
    bestMonths: "May–June and September–October",
    onward: ["valencia", "malaga", "barcelona"],
    routeSlugs: ["spain-east-coast"],
    popularSearch: true,
  },
  {
    slug: "bilbao",
    city: "Bilbao",
    country: "Spain",
    countrySlug: "spain",
    region: "spain",
    image:
      "https://images.unsplash.com/photo-1662069044442-f7ca8ea67405?auto=format&fit=crop&w=1400&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1636556590144-7e3189066277?auto=format&fit=crop&w=2400&q=85",
    alt: "The titanium curves of the Guggenheim Museum beside the river in Bilbao",
    tagline: "Basque food, industrial grit and a titanium museum on the river.",
    intro: [
      "Bilbao rebuilt itself around a museum and it worked. The Guggenheim turned a shipbuilding city into a design destination, but the old town behind it never stopped being a Basque market town.",
      "Come for the architecture, stay for pintxos — small plates lined up along every bar counter in Casco Viejo.",
    ],
    whyVisit: [
      {
        title: "Pintxo bars by the dozen",
        description:
          "Order one plate and one drink per bar, then move on. It is the cheapest way to eat well in Spain.",
      },
      {
        title: "The Guggenheim effect",
        description:
          "Gehry's building is worth seeing from outside even if you never buy a ticket.",
      },
      {
        title: "Green, not dry",
        description:
          "Northern Spain is wetter and cooler — a genuine relief if you have come up from Andalusia.",
      },
    ],
    thingsToDo: [
      {
        title: "Casco Viejo pintxo crawl",
        description:
          "Seven streets, dozens of bars, and a counter of food at every one of them.",
      },
      {
        title: "Guggenheim Bilbao",
        description:
          "Even the outside is an event; Puppy and the riverside sculptures are free to visit.",
      },
      {
        title: "Mercado de la Ribera",
        description:
          "One of Europe's largest covered markets, right on the river in the old town.",
      },
      {
        title: "Funicular to Artxanda",
        description:
          "Two minutes up the hill for the full view of the city in its valley.",
      },
    ],
    backpackerTips: [
      "Rain is normal here — pack a light jacket even in summer.",
      "Pintxos are paid for per plate; keep track or tell the bartender what you ate.",
      "San Sebastián is an hour away by bus and makes an easy day trip.",
      "The metro is small, clean and covers most of what you need.",
    ],
    avgDormPrice: 24,
    avgPrivatePrice: 58,
    bestMonths: "May–September",
    onward: ["san-sebastian", "madrid", "barcelona"],
    routeSlugs: [],
  },
  {
    slug: "san-sebastian",
    city: "San Sebastián",
    aliases: ["San Sebastian", "Donostia"],
    country: "Spain",
    countrySlug: "spain",
    region: "spain",
    image:
      "https://images.unsplash.com/photo-1553455010-bdb488ac12e5?auto=format&fit=crop&w=1400&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1650894822047-71412dfaf2e4?auto=format&fit=crop&w=2400&q=85",
    alt: "The bay of San Sebastián with boats and the town behind",
    tagline: "A perfect shell-shaped bay and the best food in Spain.",
    intro: [
      "La Concha is the most photographed bay in Spain and it deserves it: a near-perfect curve of sand with a wooded island in the middle and a promenade the whole town walks in the evening.",
      "It is not a budget city, but the pintxo bars of the Parte Vieja mean you can eat extraordinarily well for very little if you stand at the counter like everyone else.",
    ],
    whyVisit: [
      {
        title: "La Concha",
        description:
          "A city beach that genuinely looks like the postcards, sheltered enough to swim most of the summer.",
      },
      {
        title: "Pintxos at the highest level",
        description:
          "The old town has one of the densest concentrations of great small-plate cooking anywhere.",
      },
      {
        title: "Surf on the next beach",
        description:
          "Zurriola, across the river, has consistent waves and board rental by the hour.",
      },
    ],
    thingsToDo: [
      {
        title: "Monte Igueldo",
        description:
          "A wooden funicular up to the viewpoint over the whole bay — the classic San Sebastián photo.",
      },
      {
        title: "Parte Vieja pintxo bars",
        description:
          "Start on Calle 31 de Agosto and work along it; one plate per bar is the rule.",
      },
      {
        title: "Monte Urgull",
        description:
          "A free walk up through the old fortifications to the statue above the harbour.",
      },
      {
        title: "Zurriola beach",
        description:
          "The surf beach, backed by the Kursaal cubes and a younger, louder crowd.",
      },
    ],
    backpackerTips: [
      "Beds are limited and expensive in August — this is the city to book earliest.",
      "Pintxos are cheaper standing at the bar than sitting at a table.",
      "The bus from Bilbao airport comes straight here in about 75 minutes.",
      "Sidrerías outside town pour cider from the barrel and are worth the trip.",
    ],
    avgDormPrice: 29,
    avgPrivatePrice: 70,
    bestMonths: "June–September",
    onward: ["bilbao", "barcelona", "madrid"],
    routeSlugs: [],
  },

  /* ---------- Balkans ---------- */

  {
    slug: "tirana",
    city: "Tirana",
    country: "Albania",
    countrySlug: "albania",
    region: "balkans",
    image:
      "https://images.unsplash.com/photo-1632353913765-9b56b7b4bd55?auto=format&fit=crop&w=1400&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1693562142975-6a5e4b4d9039?auto=format&fit=crop&w=2400&q=85",
    alt: "Skanderbeg Square in Tirana with the clock tower behind",
    tagline: "Painted facades, mountain air and Europe's best-value coffee.",
    intro: [
      "Tirana is the most surprising capital in the Balkans: bunkers turned into museums, communist blocks painted in primary colours, and a cable car to a mountain fifteen minutes from the centre.",
      "Prices are the lowest of any city in the NEXT STOP network, and the café culture is relentless.",
    ],
    whyVisit: [
      {
        title: "Genuinely cheap",
        description:
          "A dorm bed, three meals and a night out still come in under most European lunch budgets.",
      },
      {
        title: "Bunk'Art",
        description:
          "Two enormous former nuclear bunkers turned into museums of Albania's communist decades.",
      },
      {
        title: "Mountains from the city",
        description:
          "The Dajti Express cable car climbs to 1,000m from the edge of town.",
      },
    ],
    thingsToDo: [
      {
        title: "Skanderbeg Square",
        description:
          "The pedestrianised heart of the city, ringed by the mosque, museum and opera house.",
      },
      {
        title: "Blloku district",
        description:
          "Once closed to ordinary Albanians, now the bar and restaurant quarter.",
      },
      {
        title: "The Pyramid",
        description:
          "A former dictator's mausoleum rebuilt as a public space you can climb.",
      },
      {
        title: "Dajti Express",
        description:
          "Fifteen minutes up the mountain for panoramic views and cooler air.",
      },
    ],
    backpackerTips: [
      "Cash is still king in smaller places; keep some lek on you.",
      "Furgon minibuses cover the country cheaply but leave when full, not on a timetable.",
      "Summer buses to Ohrid take around four hours and cross at Qafë Thanë.",
      "Tap water is best avoided; bottled is very cheap.",
    ],
    avgDormPrice: 13,
    avgPrivatePrice: 32,
    bestMonths: "May–June and September–October",
    onward: ["ohrid", "kotor", "skopje"],
    routeSlugs: ["balkan-backpacker"],
  },
  {
    slug: "ohrid",
    city: "Ohrid",
    country: "North Macedonia",
    countrySlug: "north-macedonia",
    region: "balkans",
    image:
      "https://images.unsplash.com/photo-1653389167152-7dbd6d165631?auto=format&fit=crop&w=1400&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1618735751653-d221b2436b0e?auto=format&fit=crop&w=2400&q=85",
    alt: "A church on a cliff above Lake Ohrid",
    tagline: "One of Europe's oldest lakes, with a town built above it.",
    intro: [
      "Lake Ohrid is three million years old and clear enough to see the bottom well out from shore. The town stacked above it holds a fortress, a Roman amphitheatre and a cliff-edge church that appears on every Macedonian postcard.",
      "It is the slowest stop on the Balkan route and most people end up staying longer than planned.",
    ],
    whyVisit: [
      {
        title: "Swimming in a UNESCO lake",
        description:
          "The water is clean, cold and swimmable from June through September.",
      },
      {
        title: "Church of St John at Kaneo",
        description:
          "A small thirteenth-century church on a cliff directly above the water.",
      },
      {
        title: "Very low prices",
        description:
          "Lakeside guesthouses and grilled fish dinners cost a fraction of the Mediterranean equivalent.",
      },
    ],
    thingsToDo: [
      {
        title: "Samuel's Fortress",
        description:
          "Walk the walls for the full view over the old town and the lake beyond.",
      },
      {
        title: "Boat to Sveti Naum",
        description:
          "A monastery at the southern end of the lake, near the springs that feed it.",
      },
      {
        title: "Ancient theatre",
        description:
          "A Hellenistic amphitheatre in the middle of the old town, still used for concerts.",
      },
      {
        title: "The lakeside boardwalk",
        description:
          "A wooden path clinging to the cliffs between the old town and Kaneo beach.",
      },
    ],
    backpackerTips: [
      "The bus from Skopje takes about three hours and runs several times a day.",
      "Ohrid trout is protected; the cheaper farmed alternative is what most places serve.",
      "Summer weekends fill with domestic tourists — midweek is calmer.",
      "Bring a swimming towel; the pebble beaches have little shade.",
    ],
    avgDormPrice: 14,
    avgPrivatePrice: 34,
    bestMonths: "June–September",
    onward: ["skopje", "tirana", "belgrade"],
    routeSlugs: ["balkan-backpacker"],
  },
  {
    slug: "skopje",
    city: "Skopje",
    country: "North Macedonia",
    countrySlug: "north-macedonia",
    region: "balkans",
    image:
      "https://images.unsplash.com/photo-1642291373671-29794831ebce?auto=format&fit=crop&w=1400&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1570654672073-fc434f47e6a4?auto=format&fit=crop&w=2400&q=85",
    alt: "An equestrian statue on the main square of Skopje",
    tagline: "An Ottoman bazaar on one bank, marble statues on the other.",
    intro: [
      "Skopje is two cities separated by a river. On one side, a huge Ottoman bazaar of mosques, caravanserais and grill houses. On the other, a state-funded rebuild of neoclassical facades and enormous statues.",
      "The contrast is strange and genuinely interesting, and the whole centre is walkable in an afternoon.",
    ],
    whyVisit: [
      {
        title: "Old Bazaar",
        description:
          "The largest surviving Ottoman market in the Balkans outside Istanbul, and still a working one.",
      },
      {
        title: "Stone Bridge and the statues",
        description:
          "The rebuilt centre is unlike anywhere else in Europe — love it or not, it is worth seeing.",
      },
      {
        title: "Canyon Matka",
        description:
          "A gorge with kayaks and caves, half an hour from the city by bus.",
      },
    ],
    thingsToDo: [
      {
        title: "Čaršija food crawl",
        description:
          "Kebapi, ajvar and burek across the bazaar for a handful of euros.",
      },
      {
        title: "Kale Fortress",
        description:
          "Free to enter, with views across both halves of the city.",
      },
      {
        title: "Mother Teresa Memorial House",
        description:
          "Small, free and built on the site where she was baptised.",
      },
      {
        title: "Canyon Matka by kayak",
        description:
          "Rent by the hour and paddle into the Vrelo cave at the far end.",
      },
    ],
    backpackerTips: [
      "Buses to Ohrid, Belgrade and Sofia all leave from the main station beside the railway.",
      "The bazaar is quietest in the morning and busiest after work.",
      "Air quality is poor in winter; spring and autumn are much better.",
      "Cards are widely accepted, but bazaar stalls want denar in cash.",
    ],
    avgDormPrice: 13,
    avgPrivatePrice: 31,
    bestMonths: "April–June and September–October",
    onward: ["ohrid", "belgrade", "sarajevo"],
    routeSlugs: ["balkan-backpacker"],
  },
  {
    slug: "belgrade",
    city: "Belgrade",
    aliases: ["Beograd"],
    country: "Serbia",
    countrySlug: "serbia",
    region: "balkans",
    image:
      "https://images.unsplash.com/photo-1613601740367-410ae03b2ec7?auto=format&fit=crop&w=1400&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1706480228561-6e6ba0b5a44b?auto=format&fit=crop&w=2400&q=85",
    alt: "Belgrade's riverfront where the Sava meets the Danube",
    tagline: "Two rivers, river-barge clubs and a fortress above both.",
    intro: [
      "Belgrade has been fought over for two thousand years and it shows: an Austro-Hungarian core, socialist blocks across the river, and a fortress at the point where the Sava joins the Danube.",
      "It also has the loudest nightlife in the Balkans, much of it on splavovi — floating clubs moored along the riverbanks.",
    ],
    whyVisit: [
      {
        title: "Kalemegdan fortress",
        description:
          "A huge park and citadel on the bluff above the confluence, free and open late.",
      },
      {
        title: "Nightlife on the water",
        description:
          "Dozens of barge clubs run from spring to autumn, with music from folk to techno.",
      },
      {
        title: "Great value food",
        description:
          "Grilled meat, bakeries and riverside restaurants at prices well below western Europe.",
      },
    ],
    thingsToDo: [
      {
        title: "Skadarlija",
        description:
          "The cobbled bohemian street of old taverns, still the most atmospheric dinner in town.",
      },
      {
        title: "Zemun and the Danube",
        description:
          "A former Austro-Hungarian town now part of the city, with a hill and a riverside walk.",
      },
      {
        title: "Museum of Yugoslavia",
        description:
          "The clearest place to make sense of the region's twentieth century.",
      },
      {
        title: "Ada Ciganlija",
        description:
          "A river island turned into a city beach, packed all summer.",
      },
    ],
    backpackerTips: [
      "Night buses and trains link Belgrade with Budapest, Sarajevo and Skopje.",
      "Splav clubs run seasonally; check what is open before making plans.",
      "Bureau de change rates in the centre beat airport rates comfortably.",
      "Tap water is safe and good.",
    ],
    avgDormPrice: 15,
    avgPrivatePrice: 36,
    bestMonths: "May–June and September",
    onward: ["sarajevo", "budapest", "skopje"],
    routeSlugs: ["balkan-backpacker"],
  },
  {
    slug: "sarajevo",
    city: "Sarajevo",
    country: "Bosnia & Herzegovina",
    countrySlug: "bosnia-herzegovina",
    region: "balkans",
    image:
      "https://images.unsplash.com/photo-1681006129599-da712304f338?auto=format&fit=crop&w=1400&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1636185560435-a0462ca912bb?auto=format&fit=crop&w=2400&q=85",
    alt: "Sarajevo's rooftops with the surrounding mountains behind",
    tagline: "Where east and west meet, in a valley ringed by mountains.",
    intro: [
      "Walk down one street in Sarajevo and the architecture changes from Ottoman to Austro-Hungarian mid-block — there is even a line in the pavement marking it.",
      "The city carries its recent history openly, and understanding it is part of why people come. It is also cheap, welcoming and surrounded by hikeable mountains.",
    ],
    whyVisit: [
      {
        title: "Baščaršija",
        description:
          "The Ottoman bazaar quarter, with coppersmiths, mosques and the best coffee ritual in Europe.",
      },
      {
        title: "History you can walk",
        description:
          "The Latin Bridge, the Tunnel of Hope and the War Childhood Museum are all reachable on foot or by tram.",
      },
      {
        title: "Mountains on three sides",
        description:
          "The 1984 Olympic peaks are a short bus ride from the centre.",
      },
    ],
    thingsToDo: [
      {
        title: "Tunnel of Hope",
        description:
          "The tunnel under the airport that kept the city supplied during the siege, now a museum.",
      },
      {
        title: "Yellow Fortress at sunset",
        description:
          "A free viewpoint above the old town where the whole city gathers for the evening call to prayer.",
      },
      {
        title: "Trebević cable car",
        description:
          "Up the mountain to the abandoned Olympic bobsleigh track, now covered in graffiti.",
      },
      {
        title: "Bosnian coffee in Baščaršija",
        description:
          "Served with a copper pot, a sugar cube and no hurry whatsoever.",
      },
    ],
    backpackerTips: [
      "Trams run the length of the valley and are the easiest way to cross town.",
      "Mostar is a two-hour train ride south and one of the best rail journeys in the region.",
      "Convertible marks are pegged to the euro; euros are sometimes accepted but at poor rates.",
      "Winters are cold and snowy — pack accordingly.",
    ],
    avgDormPrice: 14,
    avgPrivatePrice: 33,
    bestMonths: "May–June and September–October",
    onward: ["kotor", "belgrade", "budapest"],
    routeSlugs: ["balkan-backpacker"],
  },
  {
    slug: "kotor",
    city: "Kotor",
    country: "Montenegro",
    countrySlug: "montenegro",
    region: "balkans",
    image:
      "https://images.unsplash.com/photo-1664958451522-90ce9fd47b2c?auto=format&fit=crop&w=1400&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1615352916571-99807ec84e29?auto=format&fit=crop&w=2400&q=85",
    alt: "The town of Kotor at the head of its bay, below steep mountains",
    tagline: "A walled town at the head of a fjord-like bay.",
    intro: [
      "Kotor sits where the Bay of Kotor runs out of room, with mountains rising almost vertically behind a Venetian walled town of squares and stone lanes.",
      "The fortress walls climb 1,350 steps up the cliff behind it, and the view from the top is the reason most people's Montenegro photos look the same.",
    ],
    whyVisit: [
      {
        title: "The city walls",
        description:
          "A steep climb above the old town to San Giovanni fortress and the full bay view.",
      },
      {
        title: "A car-free old town",
        description:
          "Small enough to cross in ten minutes and pleasantly confusing to navigate.",
      },
      {
        title: "Swimming in the bay",
        description:
          "Calm, sheltered water with beaches and jetties around the whole shoreline.",
      },
    ],
    thingsToDo: [
      {
        title: "Climb to San Giovanni",
        description:
          "Start early or late — there is no shade on the steps in the middle of the day.",
      },
      {
        title: "Perast and Our Lady of the Rocks",
        description:
          "A baroque village up the bay, with boats out to a church on an artificial island.",
      },
      {
        title: "Kayak the bay",
        description:
          "Rent from the waterfront and paddle along the shore to the quieter villages.",
      },
      {
        title: "Lovćen day trip",
        description:
          "Twenty-five hairpin bends up to the mausoleum above the bay.",
      },
    ],
    backpackerTips: [
      "Cruise ships arrive mid-morning; the old town is far calmer before ten and after six.",
      "Montenegro uses the euro despite not being in the EU.",
      "Buses run along the coast to Budva and north to Dubrovnik and Sarajevo.",
      "Take water for the wall climb — it is sold at the top at a hefty markup.",
    ],
    avgDormPrice: 18,
    avgPrivatePrice: 44,
    bestMonths: "May–June and September",
    onward: ["sarajevo", "tirana", "budapest"],
    routeSlugs: [],
  },
  {
    slug: "budapest",
    city: "Budapest",
    country: "Hungary",
    countrySlug: "hungary",
    region: "balkans",
    image:
      "https://images.unsplash.com/photo-1616432902940-b7a1acbc60b3?auto=format&fit=crop&w=1400&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1558392606-89f76d482685?auto=format&fit=crop&w=2400&q=85",
    alt: "The Hungarian Parliament Building on the banks of the Danube",
    tagline: "Thermal baths, ruin bars and the grandest river in Europe.",
    intro: [
      "Budapest is two cities joined by bridges: hilly, quiet Buda on one bank and flat, busy Pest on the other, with the Danube and the Parliament building between them.",
      "It is the northern anchor of the Balkan route and the easiest city in the region to fly home from.",
    ],
    whyVisit: [
      {
        title: "Thermal baths",
        description:
          "Széchenyi and Gellért are enormous, historic, and open to anyone with a ticket and a towel.",
      },
      {
        title: "Ruin bars",
        description:
          "Derelict courtyard buildings filled with mismatched furniture and very cheap drinks.",
      },
      {
        title: "Grand and walkable",
        description:
          "The whole centre is flat, and trams 2 and 4/6 cover most of what you need.",
      },
    ],
    thingsToDo: [
      {
        title: "Széchenyi Baths",
        description:
          "Outdoor thermal pools that stay warm through winter; go early to beat the crowds.",
      },
      {
        title: "Fisherman's Bastion",
        description:
          "A neo-Gothic terrace on the Buda side with the classic view across to Parliament.",
      },
      {
        title: "Great Market Hall",
        description:
          "Paprika, lángos and cheap lunch on the upper floor.",
      },
      {
        title: "Jewish Quarter ruin bars",
        description:
          "Szimpla Kert is the original; the streets around it are full of alternatives.",
      },
    ],
    backpackerTips: [
      "Buy a 24- or 72-hour transport pass rather than singles — inspectors are common.",
      "Always check you are paid in forint, not euro, when using a card.",
      "Tap water is safe and free everywhere.",
      "Night trains run south to Belgrade, and west to Vienna in under three hours.",
    ],
    avgDormPrice: 16,
    avgPrivatePrice: 40,
    bestMonths: "April–June and September–October",
    onward: ["belgrade", "sarajevo", "barcelona"],
    routeSlugs: ["balkan-backpacker"],
  },
];

/* ---------- Lookups ---------- */

export const destinationMap = new Map(destinations.map((d) => [d.slug, d]));

export function getDestination(slug: string): Destination | undefined {
  return destinationMap.get(slug);
}

export function getDestinations(slugs: string[]): Destination[] {
  return slugs
    .map((slug) => destinationMap.get(slug))
    .filter((d): d is Destination => Boolean(d));
}

export const featuredDestinations = destinations.filter((d) => d.featured);
export const popularSearchDestinations = destinations.filter(
  (d) => d.popularSearch
);

/** Spain first, then the Balkans — the order used across the site. */
export const destinationsByLaunchOrder = [
  ...destinations.filter((d) => d.region === "spain"),
  ...destinations.filter((d) => d.region === "balkans"),
];
