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

export const trip = {
  destination: "Rome, Italy",
  days: 7,
  budget: 2000,
  travelers: 2,
  dates: "June 14-21, 2026",
};

export const budget: BudgetCategory[] = [
  { name: "Flights", amount: 600, color: "#7C3AED" },
  { name: "Hotels", amount: 560, color: "#EC4899" },
  { name: "Food", amount: 400, color: "#0EA5E9" },
  { name: "Activities", amount: 200, color: "#10B981" },
  { name: "Buffer", amount: 240, color: "#F59E0B" },
];

export const days: Day[] = [
  {
    day: 1,
    date: "June 14, 2026",
    title: "Arrival & Trastevere",
    activities: [
      { time: "morning", label: "Arrival at Fiumicino Airport", cost: 20 },
      { time: "afternoon", label: "Trastevere neighborhood walk", cost: 0 },
      { time: "evening", label: "Dinner at local trattoria", cost: 60 },
    ],
  },
  {
    day: 2,
    date: "June 15, 2026",
    title: "Vatican City",
    activities: [
      { time: "morning", label: "Vatican Museums", cost: 40 },
      { time: "afternoon", label: "St. Peter's Basilica", cost: 0 },
      { time: "evening", label: "Aperitivo at sunset", cost: 50 },
    ],
  },
  {
    day: 3,
    date: "June 16, 2026",
    title: "Ancient Rome",
    activities: [
      { time: "morning", label: "Colosseum & Roman Forum", cost: 30 },
      { time: "afternoon", label: "Palatine Hill + lunch", cost: 30 },
      { time: "evening", label: "Dinner in Monti", cost: 50 },
    ],
  },
  {
    day: 4,
    date: "June 17, 2026",
    title: "Ostia Antica & Beach",
    activities: [
      { time: "morning", label: "Train to Ostia Antica", cost: 15 },
      { time: "afternoon", label: "Ancient ruins tour", cost: 15 },
      { time: "evening", label: "Beach dinner", cost: 40 },
    ],
  },
  {
    day: 5,
    date: "June 18, 2026",
    title: "Art & Gardens",
    activities: [
      { time: "morning", label: "Borghese Gallery", cost: 25 },
      { time: "afternoon", label: "Villa Borghese park", cost: 0 },
      { time: "evening", label: "Piazza del Popolo dinner", cost: 45 },
    ],
  },
  {
    day: 6,
    date: "June 19, 2026",
    title: "Tivoli Day Trip",
    activities: [
      { time: "morning", label: "Train to Tivoli", cost: 25 },
      { time: "afternoon", label: "Villa d'Este & Hadrian's Villa", cost: 30 },
      { time: "evening", label: "Traditional dinner", cost: 40 },
    ],
  },
  {
    day: 7,
    date: "June 21, 2026",
    title: "Farewell Rome",
    activities: [
      { time: "morning", label: "Campo de' Fiori market", cost: 30 },
      { time: "afternoon", label: "Final gelato", cost: 25 },
      { time: "evening", label: "Departure", cost: 0 },
    ],
  },
];

export const events: Event[] = [
  {
    name: "Coldplay World Tour",
    venue: "Stadio Olimpico",
    date: "June 15, 2026",
    price: "€85–150",
    tag: "concert",
    emoji: "🎵",
  },
  {
    name: "Rome Summer Jazz Festival",
    venue: "Villa Celimontana",
    date: "June 16–19, 2026",
    price: "€20",
    tag: "festival",
    emoji: "🎷",
  },
  {
    name: "Rome Food & Wine Festival",
    venue: "Prati neighborhood",
    date: "June 18, 2026",
    price: "Free",
    tag: "food",
    emoji: "🍷",
  },
  {
    name: "Ancient Rome by Night",
    venue: "Colosseum area",
    date: "June 20, 2026",
    price: "€45",
    tag: "cultural",
    emoji: "🏛️",
  },
];

export const outfits: Outfit[] = [
  { day: 1, items: "Light linen shirt + chinos + white sneakers", emojis: "👕👖👟", weather: "Hot", activity: "Arrival" },
  { day: 2, items: "Smart casual top + dark jeans + loafers", emojis: "👔👖🥿", weather: "Hot", activity: "Sightseeing" },
  { day: 3, items: "Breathable tee + shorts + cap + walking shoes", emojis: "👕🩳🧢👟", weather: "Hot", activity: "Walking Tour" },
  { day: 4, items: "Swimwear + coverup + sandals + sunglasses", emojis: "👙🩴🕶️", weather: "Sunny", activity: "Beach" },
  { day: 5, items: "Sundress or polo + light trousers + comfy shoes", emojis: "👗👞", weather: "Warm", activity: "Gallery" },
  { day: 6, items: "Hiking-friendly outfit + layers + sneakers", emojis: "🧥👟🎒", weather: "Variable", activity: "Day Trip" },
  { day: 7, items: "Smart casual + comfortable travel shoes", emojis: "👕👖👟", weather: "Warm", activity: "Market & Travel" },
];

export const badges: BadgeData[] = [
  { name: "Budget Hero", emoji: "💰", earned: true, description: "Stay under budget on a 7+ day trip" },
  { name: "First Trip", emoji: "🎉", earned: true, description: "Plan your first trip" },
  { name: "Europe Explorer", emoji: "🇪🇺", earned: true, description: "Visit 5 European countries" },
  { name: "Night Owl", emoji: "🌙", earned: true, description: "Attend 3 nighttime events" },
  { name: "Foodie", emoji: "🍝", earned: true, description: "Visit 10 restaurants abroad" },
  { name: "Group Planner", emoji: "👥", earned: true, description: "Plan a trip for 4+ people" },
  { name: "10 Countries", emoji: "🌍", earned: false, description: "Visit 10 countries total" },
  { name: "Round the World", emoji: "🗺️", earned: false, description: "Trip spanning 3+ continents" },
  { name: "Solo Adventurer", emoji: "🧳", earned: false, description: "Complete a solo trip" },
  { name: "Festival Fanatic", emoji: "🎪", earned: false, description: "Attend 5 festivals on trips" },
  { name: "Photo Champion", emoji: "📸", earned: false, description: "Share 100 trip photos" },
  { name: "Local Legend", emoji: "🏛️", earned: false, description: "Find 25 hidden local gems" },
  { name: "Speed Packer", emoji: "⚡", earned: false, description: "Plan a trip in under 10 minutes" },
  { name: "Digital Nomad", emoji: "💻", earned: false, description: "Work from 5 destinations" },
  { name: "Luxury Traveler", emoji: "✨", earned: false, description: "Book a 5-star stay" },
];
