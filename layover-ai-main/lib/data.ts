export interface Activity {
  time: "morning" | "afternoon" | "evening";
  label: string;
  cost: number;
}

export interface Day {
  day: number;
  date: string;
  title: string;
  activities: Activity[];
}

export interface BudgetCategory {
  name: string;
  amount: number;
  color: string;
}

export interface Event {
  name: string;
  venue: string;
  date: string;
  price: string;
  tag: "concert" | "festival" | "food" | "cultural";
  emoji: string;
}

export interface Outfit {
  day: number;
  items: string;
  emojis: string;
  weather: string;
  activity: string;
}

export interface BadgeData {
  name: string;
  emoji: string;
  earned: boolean;
  description: string;
}

export interface Destination {
  city: string;
  country: string;
  price: string;
  img: string;
  emoji: string;
}

export interface InfluencerTrip {
  user: string;
  initials: string;
  followers: string;
  destination: string;
  days: number;
  price: number;
  views: string;
  copies: number;
  img: string;
  tags: string[];
}

export interface FeaturedTripDay {
  day: number;
  title: string;
  activities: { time: string; label: string; cost: number }[];
}

export interface FeaturedTrip {
  id: string;
  destination: string;
  country: string;
  emoji: string;
  img: string;
  dates: string;
  days: number;
  price: { min: number; max: number };
  rating: number;
  travelers: number;
  weatherCity: string;
  tags: string[];
  itinerary: FeaturedTripDay[];
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  countries: number;
  trips: number;
  score: number;
  me?: boolean;
}

export interface LanguagePhrase {
  category: string;
  english: string;
  local: string;
  phonetic: string;
  tip: string;
}

export interface LanguagePack {
  language: string;
  flag: string;
  phrases: LanguagePhrase[];
}

// ─── Trip ───────────────────────────────────────────────────────
export const trip = {
  destination: "Rome, Italy",
  days: 7,
  budget: 2000,
  travelers: 2,
  dates: "June 14-21, 2026",
};

// ─── Budget ─────────────────────────────────────────────────────
export const budget: BudgetCategory[] = [
  { name: "Flights", amount: 600, color: "#FF8C42" },
  { name: "Hotels", amount: 560, color: "#FF6B6B" },
  { name: "Food", amount: 400, color: "#06B6D4" },
  { name: "Activities", amount: 200, color: "#10B981" },
  { name: "Buffer", amount: 240, color: "#FBBF24" },
];

// ─── Days ────────────────────────────────────────────────────────
export const days: Day[] = [
  {
    day: 1, date: "June 14, 2026", title: "Arrival & Trastevere",
    activities: [
      { time: "morning", label: "Arrival at Fiumicino Airport", cost: 20 },
      { time: "afternoon", label: "Trastevere neighborhood walk", cost: 0 },
      { time: "evening", label: "Dinner at local trattoria", cost: 60 },
    ],
  },
  {
    day: 2, date: "June 15, 2026", title: "Vatican City",
    activities: [
      { time: "morning", label: "Vatican Museums", cost: 40 },
      { time: "afternoon", label: "St. Peter's Basilica", cost: 0 },
      { time: "evening", label: "Aperitivo at sunset", cost: 50 },
    ],
  },
  {
    day: 3, date: "June 16, 2026", title: "Ancient Rome",
    activities: [
      { time: "morning", label: "Colosseum & Roman Forum", cost: 30 },
      { time: "afternoon", label: "Palatine Hill + lunch", cost: 30 },
      { time: "evening", label: "Dinner in Monti", cost: 50 },
    ],
  },
  {
    day: 4, date: "June 17, 2026", title: "Ostia Antica & Beach",
    activities: [
      { time: "morning", label: "Train to Ostia Antica", cost: 15 },
      { time: "afternoon", label: "Ancient ruins tour", cost: 15 },
      { time: "evening", label: "Beach dinner", cost: 40 },
    ],
  },
  {
    day: 5, date: "June 18, 2026", title: "Art & Gardens",
    activities: [
      { time: "morning", label: "Borghese Gallery", cost: 25 },
      { time: "afternoon", label: "Villa Borghese park", cost: 0 },
      { time: "evening", label: "Piazza del Popolo dinner", cost: 45 },
    ],
  },
  {
    day: 6, date: "June 19, 2026", title: "Tivoli Day Trip",
    activities: [
      { time: "morning", label: "Train to Tivoli", cost: 25 },
      { time: "afternoon", label: "Villa d'Este & Hadrian's Villa", cost: 30 },
      { time: "evening", label: "Traditional dinner", cost: 40 },
    ],
  },
  {
    day: 7, date: "June 21, 2026", title: "Farewell Rome",
    activities: [
      { time: "morning", label: "Campo de' Fiori market", cost: 30 },
      { time: "afternoon", label: "Final gelato", cost: 25 },
      { time: "evening", label: "Departure", cost: 0 },
    ],
  },
];

// ─── Events ──────────────────────────────────────────────────────
export const events: Event[] = [
  { name: "Coldplay World Tour", venue: "Stadio Olimpico", date: "June 15, 2026", price: "€85–150", tag: "concert", emoji: "" },
  { name: "Rome Summer Jazz Festival", venue: "Villa Celimontana", date: "June 16–19, 2026", price: "€20", tag: "festival", emoji: "" },
  { name: "Rome Food & Wine Festival", venue: "Prati neighborhood", date: "June 18, 2026", price: "Free", tag: "food", emoji: "" },
  { name: "Ancient Rome by Night", venue: "Colosseum area", date: "June 20, 2026", price: "€45", tag: "cultural", emoji: "" },
];

// ─── Outfits ─────────────────────────────────────────────────────
export const outfits: Outfit[] = [
  { day: 1, items: "Light linen shirt + chinos + white sneakers", emojis: "", weather: "Hot", activity: "Arrival" },
  { day: 2, items: "Smart casual top + dark jeans + loafers", emojis: "", weather: "Hot", activity: "Sightseeing" },
  { day: 3, items: "Breathable tee + shorts + cap + walking shoes", emojis: "", weather: "Hot", activity: "Walking Tour" },
  { day: 4, items: "Swimwear + coverup + sandals + sunglasses", emojis: "", weather: "Sunny", activity: "Beach" },
  { day: 5, items: "Sundress or polo + light trousers + comfy shoes", emojis: "", weather: "Warm", activity: "Gallery" },
  { day: 6, items: "Hiking-friendly outfit + layers + sneakers", emojis: "", weather: "Variable", activity: "Day Trip" },
  { day: 7, items: "Smart casual + comfortable travel shoes", emojis: "", weather: "Warm", activity: "Market & Travel" },
];

// ─── Badges ──────────────────────────────────────────────────────
export const badges: BadgeData[] = [
  { name: "Budget Hero", emoji: "", earned: true, description: "Stay under budget on a 7+ day trip" },
  { name: "First Trip", emoji: "", earned: true, description: "Plan your first trip" },
  { name: "Europe Explorer", emoji: "", earned: true, description: "Visit 5 European countries" },
  { name: "Night Owl", emoji: "", earned: true, description: "Attend 3 nighttime events" },
  { name: "Foodie", emoji: "", earned: true, description: "Visit 10 restaurants abroad" },
  { name: "Group Planner", emoji: "", earned: true, description: "Plan a trip for 4+ people" },
  { name: "10 Countries", emoji: "", earned: false, description: "Visit 10 countries total" },
  { name: "Round the World", emoji: "", earned: false, description: "Trip spanning 3+ continents" },
  { name: "Solo Adventurer", emoji: "", earned: false, description: "Complete a solo trip" },
  { name: "Festival Fanatic", emoji: "", earned: false, description: "Attend 5 festivals on trips" },
  { name: "Photo Champion", emoji: "", earned: false, description: "Share 100 trip photos" },
  { name: "Local Legend", emoji: "", earned: false, description: "Find 25 hidden local gems" },
  { name: "Speed Packer", emoji: "", earned: false, description: "Plan a trip in under 10 minutes" },
  { name: "Digital Nomad", emoji: "", earned: false, description: "Work from 5 destinations" },
  { name: "Luxury Traveler", emoji: "", earned: false, description: "Book a 5-star stay" },
];

// ─── Destinations ────────────────────────────────────────────────
export const destinations: Destination[] = [
  { city: "Rome", country: "Italy", price: "from $1,800", emoji: "", img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&auto=format&fit=crop" },
  { city: "Bali", country: "Indonesia", price: "from $1,400", emoji: "", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&auto=format&fit=crop" },
  { city: "Santorini", country: "Greece", price: "from $2,100", emoji: "", img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&auto=format&fit=crop" },
  { city: "Paris", country: "France", price: "from $1,900", emoji: "", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&auto=format&fit=crop" },
  { city: "Tokyo", country: "Japan", price: "from $2,400", emoji: "", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&auto=format&fit=crop" },
  { city: "Maldives", country: "Maldives", price: "from $3,200", emoji: "", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&auto=format&fit=crop" },
];

// ─── Influencer Trips ────────────────────────────────────────────
export const influencerTrips: InfluencerTrip[] = [
  {
    user: "@adil", initials: "AD", followers: "91.3K",
    destination: "Paris, France", days: 6, price: 1850,
    views: "520K", copies: 3800,
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop",
    tags: ["romance", "art", "food"],
  },
  {
    user: "@nelle", initials: "NL", followers: "22.1K",
    destination: "Amsterdam, Netherlands", days: 5, price: 1200,
    views: "198K", copies: 1430,
    img: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&auto=format&fit=crop",
    tags: ["canals", "culture", "cycling"],
  },
  {
    user: "@jaxx", initials: "JX", followers: "48.2K",
    destination: "Berlin, Germany", days: 5, price: 1050,
    views: "271K", copies: 1840,
    img: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&auto=format&fit=crop",
    tags: ["history", "nightlife", "food"],
  },
];

// ─── Featured Trips ──────────────────────────────────────────────
export const featuredTrips: FeaturedTrip[] = [
  {
    id: "barcelona",
    destination: "Barcelona",
    country: "Spain",
    emoji: "",
    img: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&auto=format&fit=crop",
    dates: "July 4–11, 2026",
    days: 7,
    price: { min: 1400, max: 1800 },
    rating: 4.9,
    travelers: 2,
    weatherCity: "Barcelona",
    tags: ["beach", "architecture", "culture", "food"],
    itinerary: [
      { day: 1, title: "Arrive Barcelona", activities: [{ time: "afternoon", label: "Las Ramblas walk", cost: 0 }, { time: "evening", label: "Tapas dinner", cost: 45 }] },
      { day: 2, title: "Sagrada Familia & Park Güell", activities: [{ time: "morning", label: "Sagrada Familia", cost: 30 }, { time: "afternoon", label: "Park Güell", cost: 15 }, { time: "evening", label: "Gothic Quarter dinner", cost: 50 }] },
      { day: 3, title: "Gothic Quarter & Beach", activities: [{ time: "morning", label: "Gothic Quarter tour", cost: 20 }, { time: "afternoon", label: "Barceloneta Beach", cost: 0 }, { time: "evening", label: "Beach paella", cost: 40 }] },
      { day: 4, title: "Montjuïc", activities: [{ time: "morning", label: "Montjuïc Cable Car", cost: 25 }, { time: "afternoon", label: "National Museum", cost: 15 }, { time: "evening", label: "Magic Fountain show + dinner", cost: 45 }] },
      { day: 5, title: "Casa Batlló & Shopping", activities: [{ time: "morning", label: "Casa Batlló tour", cost: 25 }, { time: "afternoon", label: "Paseo de Gracia shopping", cost: 0 }, { time: "evening", label: "Fancy dinner", cost: 70 }] },
      { day: 6, title: "Montserrat Day Trip", activities: [{ time: "morning", label: "Train to Montserrat", cost: 20 }, { time: "afternoon", label: "Monastery & hiking", cost: 10 }, { time: "evening", label: "Return, casual dinner", cost: 35 }] },
      { day: 7, title: "Departure", activities: [{ time: "morning", label: "Final stroll & pastry", cost: 20 }, { time: "afternoon", label: "Airport transfer", cost: 30 }, { time: "evening", label: "Fly home", cost: 0 }] },
    ],
  },
  {
    id: "paris",
    destination: "Paris",
    country: "France",
    emoji: "",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop",
    dates: "Sept 12–18, 2026",
    days: 6,
    price: { min: 1700, max: 2200 },
    rating: 4.8,
    travelers: 2,
    weatherCity: "Paris",
    tags: ["romance", "art", "food", "culture"],
    itinerary: [
      { day: 1, title: "Arrive Paris", activities: [{ time: "afternoon", label: "Check in, Marais walk", cost: 0 }, { time: "evening", label: "Dinner at Le Comptoir", cost: 70 }] },
      { day: 2, title: "Louvre & Tuileries", activities: [{ time: "morning", label: "Louvre Museum", cost: 22 }, { time: "afternoon", label: "Tuileries Garden + Orangerie", cost: 15 }, { time: "evening", label: "Seine river walk + bistro", cost: 55 }] },
      { day: 3, title: "Eiffel & Montmartre", activities: [{ time: "morning", label: "Eiffel Tower summit", cost: 29 }, { time: "afternoon", label: "Montmartre & Sacré-Cœur", cost: 0 }, { time: "evening", label: "Wine bar in Le Marais", cost: 45 }] },
      { day: 4, title: "Versailles Day Trip", activities: [{ time: "morning", label: "Train to Versailles", cost: 10 }, { time: "afternoon", label: "Palace & gardens", cost: 20 }, { time: "evening", label: "Return, French onion soup dinner", cost: 50 }] },
      { day: 5, title: "Art & Shopping", activities: [{ time: "morning", label: "Musée d'Orsay", cost: 16 }, { time: "afternoon", label: "Galeries Lafayette + Champs-Élysées", cost: 0 }, { time: "evening", label: "Fine dining farewell", cost: 90 }] },
      { day: 6, title: "Departure", activities: [{ time: "morning", label: "Café breakfast + croissants", cost: 15 }, { time: "afternoon", label: "CDG Airport transfer", cost: 35 }, { time: "evening", label: "Fly home", cost: 0 }] },
    ],
  },
  {
    id: "amsterdam",
    destination: "Amsterdam",
    country: "Netherlands",
    emoji: "",
    img: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&auto=format&fit=crop",
    dates: "Aug 8–13, 2026",
    days: 5,
    price: { min: 1100, max: 1500 },
    rating: 4.7,
    travelers: 2,
    weatherCity: "Amsterdam",
    tags: ["canals", "cycling", "museums", "tulips"],
    itinerary: [
      { day: 1, title: "Arrive Amsterdam", activities: [{ time: "afternoon", label: "Canal cruise", cost: 25 }, { time: "evening", label: "Dinner in Jordaan", cost: 55 }] },
      { day: 2, title: "Museums Day", activities: [{ time: "morning", label: "Rijksmuseum", cost: 22 }, { time: "afternoon", label: "Van Gogh Museum", cost: 22 }, { time: "evening", label: "Craft beer & bitterballen", cost: 35 }] },
      { day: 3, title: "Keukenhof & Haarlem", activities: [{ time: "morning", label: "Keukenhof Gardens", cost: 22 }, { time: "afternoon", label: "Haarlem old town", cost: 0 }, { time: "evening", label: "Back to Amsterdam, stroopwafel tasting", cost: 20 }] },
      { day: 4, title: "Cycling Day", activities: [{ time: "morning", label: "Rent bikes & cycle countryside", cost: 15 }, { time: "afternoon", label: "Windmills at Zaanse Schans", cost: 5 }, { time: "evening", label: "Indonesian rijsttafel dinner", cost: 50 }] },
      { day: 5, title: "Departure", activities: [{ time: "morning", label: "Albert Cuyp Market", cost: 20 }, { time: "afternoon", label: "Schiphol Airport", cost: 20 }, { time: "evening", label: "Fly home", cost: 0 }] },
    ],
  },
];

// ─── Leaderboard ─────────────────────────────────────────────────
export const leaderboard: LeaderboardEntry[] = [
  { rank: 1, name: "Malek", countries: 22, trips: 31, score: 9840 },
  { rank: 2, name: "Oktay", countries: 15, trips: 24, score: 5120 },
  { rank: 3, name: "Jaxx (You)", countries: 7, trips: 12, score: 2840, me: true },
  { rank: 4, name: "Nelle", countries: 6, trips: 9, score: 2104 },
  { rank: 5, name: "Elia", countries: 4, trips: 7, score: 1500 },
  { rank: 6, name: "Adil", countries: 3, trips: 5, score: 980 },
  { rank: 7, name: "Jess", countries: 2, trips: 3, score: 420 },
];

// ─── Language Packs ──────────────────────────────────────────────
export const languagePacks: Record<string, LanguagePack> = {
  Barcelona: {
    language: "Spanish", flag: "🇪🇸",
    phrases: [
      { category: "Greetings", english: "Hello", local: "Hola", phonetic: "OH-lah", tip: "The most common greeting" },
      { category: "Greetings", english: "Good morning", local: "Buenos días", phonetic: "BWEH-nos DEE-ahs", tip: "Use in the morning" },
      { category: "Greetings", english: "Thank you", local: "Gracias", phonetic: "GRAH-thee-ahs", tip: "Add 'muchas' for 'thank you very much'" },
      { category: "Greetings", english: "Please", local: "Por favor", phonetic: "pohr fah-VOR", tip: "Always use when requesting" },
      { category: "Food", english: "The bill, please", local: "La cuenta, por favor", phonetic: "lah KWEN-tah pohr fah-VOR", tip: "Essential in restaurants" },
      { category: "Food", english: "Delicious!", local: "¡Qué delicioso!", phonetic: "keh deh-lee-thee-OH-soh", tip: "Chefs love hearing this" },
      { category: "Food", english: "Water, please", local: "Agua, por favor", phonetic: "AH-wah pohr fah-VOR", tip: "Ask for 'agua con gas' for sparkling" },
      { category: "Transport", english: "Where is...?", local: "¿Dónde está...?", phonetic: "DON-deh es-TAH", tip: "Essential navigation phrase" },
      { category: "Transport", english: "Bus station", local: "Estación de autobús", phonetic: "es-tah-thee-OHN deh ow-toh-BOOS", tip: "Know this to get around" },
      { category: "Emergency", english: "Help!", local: "¡Ayuda!", phonetic: "ah-YOO-dah", tip: "Shout loudly if needed" },
      { category: "Emergency", english: "I need a doctor", local: "Necesito un médico", phonetic: "neh-theh-SEE-toh oon MEH-dee-koh", tip: "Point to yourself while saying" },
      { category: "Greetings", english: "Goodbye", local: "Adiós", phonetic: "ah-thee-OHS", tip: "Formal farewell" },
    ],
  },
  France: {
    language: "French", flag: "🇫🇷",
    phrases: [
      { category: "Greetings", english: "Hello", local: "Bonjour", phonetic: "bon-ZHOOR", tip: "Always say this when entering a shop" },
      { category: "Greetings", english: "Good evening", local: "Bonsoir", phonetic: "bon-SWAHR", tip: "Switch to this after 6pm" },
      { category: "Greetings", english: "Thank you", local: "Merci", phonetic: "mehr-SEE", tip: "Add 'beaucoup' for 'thank you very much'" },
      { category: "Greetings", english: "Please", local: "S'il vous plaît", phonetic: "seel voo PLAY", tip: "Essential — French love politeness" },
      { category: "Food", english: "The bill, please", local: "L'addition, s'il vous plaît", phonetic: "lah-dee-SYOHN", tip: "Wave gently to the waiter" },
      { category: "Food", english: "A coffee please", local: "Un café s'il vous plaît", phonetic: "un kah-FAY", tip: "It comes as an espresso by default" },
      { category: "Food", english: "Very tasty!", local: "C'est délicieux!", phonetic: "say day-lee-SYUH", tip: "Big compliment to any chef" },
      { category: "Transport", english: "Where is the metro?", local: "Où est le métro?", phonetic: "oo eh luh MAY-troh", tip: "Look for the M sign" },
      { category: "Transport", english: "One ticket please", local: "Un billet s'il vous plaît", phonetic: "un bee-YAY", tip: "Buy a carnet (10 pack) for value" },
      { category: "Emergency", english: "Help!", local: "Au secours!", phonetic: "oh seh-KOOR", tip: "Shout loudly" },
      { category: "Emergency", english: "Call the police", local: "Appelez la police", phonetic: "ah-play lah poh-LEES", tip: "Emergency number is 17" },
      { category: "Greetings", english: "Excuse me", local: "Excusez-moi", phonetic: "ex-kyoo-ZAY mwah", tip: "Great for getting attention politely" },
    ],
  },
  Netherlands: {
    language: "Dutch", flag: "🇳🇱",
    phrases: [
      { category: "Greetings", english: "Hello", local: "Hallo", phonetic: "HAH-loh", tip: "Almost like English 'hello'" },
      { category: "Greetings", english: "Good morning", local: "Goedemorgen", phonetic: "KHOO-deh-MOR-khen", tip: "The G is like a throat-clearing sound" },
      { category: "Greetings", english: "Thank you", local: "Dankjewel", phonetic: "DANK-yuh-vel", tip: "Casual — 'dank u wel' is formal" },
      { category: "Greetings", english: "Please", local: "Alsjeblieft", phonetic: "ALS-yuh-bleeft", tip: "Also used when handing something over" },
      { category: "Food", english: "Cheers!", local: "Proost!", phonetic: "prohst", tip: "Make eye contact when clinking!" },
      { category: "Food", english: "The bill please", local: "De rekening graag", phonetic: "duh RAY-keh-ning khraakh", tip: "Graag means 'please' in context" },
      { category: "Food", english: "Delicious", local: "Lekker", phonetic: "LEK-er", tip: "Dutch use 'lekker' for everything good" },
      { category: "Transport", english: "Where is the station?", local: "Waar is het station?", phonetic: "vahr is het stah-SHON", tip: "W sounds like V in Dutch" },
      { category: "Transport", english: "I'd like to rent a bike", local: "Ik wil een fiets huren", phonetic: "ik vil ayn FEETS HEW-ren", tip: "Bikes are the primary transport!" },
      { category: "Emergency", english: "Help!", local: "Help!", phonetic: "help", tip: "Same as English" },
      { category: "Emergency", english: "I need a doctor", local: "Ik heb een dokter nodig", phonetic: "ik hep ayn DOK-ter NO-dikh", tip: "Point to yourself" },
      { category: "Greetings", english: "Goodbye", local: "Doei", phonetic: "doo-EE", tip: "Casual — sounds like 'dooey'" },
    ],
  },
  Italy: {
    language: "Italian", flag: "🇮🇹",
    phrases: [
      { category: "Greetings", english: "Hello / Hi", local: "Ciao", phonetic: "chow", tip: "Used for both hello and goodbye" },
      { category: "Greetings", english: "Good morning", local: "Buongiorno", phonetic: "bwon-JOR-noh", tip: "Use until about 1pm" },
      { category: "Greetings", english: "Thank you", local: "Grazie", phonetic: "GRAHT-syeh", tip: "Add 'mille' for 'a thousand thanks'" },
      { category: "Greetings", english: "Please", local: "Per favore", phonetic: "pehr fah-VOH-reh", tip: "Always appreciated" },
      { category: "Food", english: "The bill, please", local: "Il conto, per favore", phonetic: "eel KON-toh", tip: "You must ask — it won't come automatically" },
      { category: "Food", english: "A table for two", local: "Un tavolo per due", phonetic: "oon TAH-voh-loh pehr DOO-eh", tip: "Useful for restaurants" },
      { category: "Food", english: "Very good!", local: "Molto buono!", phonetic: "MOL-toh BWOH-noh", tip: "Chefs love to hear this" },
      { category: "Transport", english: "Where is...?", local: "Dov'è...?", phonetic: "doh-VEH", tip: "Essential navigation phrase" },
      { category: "Transport", english: "One ticket, please", local: "Un biglietto, per favore", phonetic: "oon beel-YET-toh", tip: "Validate it before boarding!" },
      { category: "Emergency", english: "Help!", local: "Aiuto!", phonetic: "ah-YOO-toh", tip: "Shout clearly" },
      { category: "Emergency", english: "Call an ambulance", local: "Chiamate un'ambulanza", phonetic: "kyah-MAH-teh oon ahm-boo-LAHN-tsah", tip: "Emergency number is 118" },
      { category: "Greetings", english: "Excuse me / Sorry", local: "Scusi", phonetic: "SKOO-zee", tip: "Formal; use 'scusa' with friends" },
    ],
  },
  Japan: {
    language: "Japanese", flag: "🇯🇵",
    phrases: [
      { category: "Greetings", english: "Hello", local: "こんにちは (Konnichiwa)", phonetic: "kon-nee-chee-WAH", tip: "Used during daytime hours" },
      { category: "Greetings", english: "Thank you", local: "ありがとう (Arigatou)", phonetic: "ah-ree-GAH-toh", tip: "Add 'gozaimasu' for formal situations" },
      { category: "Greetings", english: "Excuse me / Sorry", local: "すみません (Sumimasen)", phonetic: "soo-mee-MAH-sen", tip: "Use to get attention or apologize" },
      { category: "Greetings", english: "Please", local: "お願いします (Onegaishimasu)", phonetic: "oh-neh-GAI-shee-mas", tip: "Polite request — always appreciated" },
      { category: "Food", english: "This is delicious!", local: "おいしい！(Oishii!)", phonetic: "oh-ee-SHEE", tip: "One of the most used words in Japan" },
      { category: "Food", english: "The bill please", local: "お会計お願いします", phonetic: "oh-KAI-keh oh-neh-GAI-shee-mas", tip: "Or make an X with your fingers" },
      { category: "Food", english: "No meat please", local: "お肉なしで (Oniku nashi de)", phonetic: "oh-NEE-koo NAH-shee deh", tip: "Useful for vegetarians" },
      { category: "Transport", english: "Where is the station?", local: "駅はどこですか？", phonetic: "EH-kee wah DOH-koh deh-ska", tip: "Show on your phone if unsure" },
      { category: "Transport", english: "One ticket to...", local: "...まで一枚 (...made ichimai)", phonetic: "MAH-deh ee-CHEE-my", tip: "Point to destination on map" },
      { category: "Emergency", english: "Help!", local: "助けて！(Tasukete!)", phonetic: "tah-SOO-keh-teh", tip: "Shout clearly" },
      { category: "Emergency", english: "Please call the police", local: "警察を呼んでください", phonetic: "KEH-sah-tsoo oh YON-deh KU-dah-sai", tip: "Emergency number is 110" },
      { category: "Greetings", english: "Goodbye", local: "さようなら (Sayounara)", phonetic: "sah-YOH-nah-rah", tip: "Fairly formal; 'ja ne' is casual" },
    ],
  },
  Indonesia: {
    language: "Indonesian", flag: "🇮🇩",
    phrases: [
      { category: "Greetings", english: "Hello", local: "Halo", phonetic: "HAH-loh", tip: "Same as English!" },
      { category: "Greetings", english: "Good morning", local: "Selamat pagi", phonetic: "seh-LAH-mat PAH-gee", tip: "Use before 11am" },
      { category: "Greetings", english: "Thank you", local: "Terima kasih", phonetic: "teh-REE-mah KAH-see", tip: "Very widely used and appreciated" },
      { category: "Greetings", english: "Please", local: "Tolong", phonetic: "TOH-long", tip: "Place before the verb" },
      { category: "Food", english: "Delicious!", local: "Enak sekali!", phonetic: "EH-nak seh-KAH-lee", tip: "Locals will beam with pride" },
      { category: "Food", english: "No spicy please", local: "Tidak pedas", phonetic: "TEE-dak PEH-dahs", tip: "Essential in Bali if sensitive to heat" },
      { category: "Food", english: "The bill please", local: "Minta bon", phonetic: "MEEN-tah bon", tip: "Simple and universally understood" },
      { category: "Transport", english: "How much?", local: "Berapa harganya?", phonetic: "beh-RAH-pah har-GAH-nyah", tip: "Always ask before getting in a taxi" },
      { category: "Transport", english: "Too expensive!", local: "Terlalu mahal!", phonetic: "ter-LAH-loo MAH-hal", tip: "Bargaining is expected in markets" },
      { category: "Emergency", english: "Help!", local: "Tolong!", phonetic: "TOH-long", tip: "Shout loudly" },
      { category: "Emergency", english: "Call a doctor", local: "Panggil dokter", phonetic: "PAHNG-gil DOK-ter", tip: "Emergency number is 118" },
      { category: "Greetings", english: "Goodbye", local: "Sampai jumpa", phonetic: "sahm-PIE JOOM-pah", tip: "Means 'until we meet again'" },
    ],
  },
  Greece: {
    language: "Greek", flag: "🇬🇷",
    phrases: [
      { category: "Greetings", english: "Hello", local: "Γεια σου (Yia sou)", phonetic: "YAH-soo", tip: "Informal; 'yia sas' for formal/plural" },
      { category: "Greetings", english: "Good morning", local: "Καλημέρα (Kalimera)", phonetic: "kah-lee-MEH-rah", tip: "Greeks greet everyone they pass" },
      { category: "Greetings", english: "Thank you", local: "Ευχαριστώ (Efcharistó)", phonetic: "ef-hah-rees-TOH", tip: "The 'ch' is a soft throat sound" },
      { category: "Greetings", english: "Please / You're welcome", local: "Παρακαλώ (Parakaló)", phonetic: "pah-rah-kah-LOH", tip: "Works for both 'please' and 'you're welcome'" },
      { category: "Food", english: "Cheers!", local: "Στην υγειά μας! (Stin iyia mas!)", phonetic: "steen ee-YAH mas", tip: "Means 'to our health!'" },
      { category: "Food", english: "The bill please", local: "Τον λογαριασμό παρακαλώ", phonetic: "ton loh-gah-ree-ahz-MOH", tip: "Wave hand shaped like writing" },
      { category: "Food", english: "Very tasty!", local: "Πολύ νόστιμο! (Polý nóstimo!)", phonetic: "poh-LEE NOS-tee-moh", tip: "Huge compliment to Greek cooks" },
      { category: "Transport", english: "Where is the port?", local: "Πού είναι το λιμάνι;", phonetic: "POO EE-neh toh lee-MAH-nee", tip: "Essential for island hopping" },
      { category: "Transport", english: "One ticket please", local: "Ένα εισιτήριο παρακαλώ", phonetic: "EH-nah ee-see-TEE-ree-oh", tip: "Buy ahead for ferries in summer" },
      { category: "Emergency", english: "Help!", local: "Βοήθεια! (Voíthia!)", phonetic: "voh-EE-thyah", tip: "Shout clearly" },
      { category: "Emergency", english: "Call an ambulance", local: "Φωνάξτε ασθενοφόρο", phonetic: "foh-NAX-teh as-theh-noh-FOH-roh", tip: "Emergency number is 166" },
      { category: "Greetings", english: "Goodbye", local: "Αντίο (Andío)", phonetic: "an-DEE-oh", tip: "Or say 'yia' again for casual goodbye" },
    ],
  },
};
