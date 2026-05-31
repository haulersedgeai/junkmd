export const SITE = {
  name: "JunkMD+",
  legalName: "JunkMD Inc",
  tagline: "Top-Rated, Fast & Friendly Junk Removal in San Diego",
  mission: "Make Space for What Matters.",
  phone: "(858) 869-9448",
  phoneRaw: "+18588699448",
  email: "support@junkmd.com",
  address: {
    street: "4901 Morena Blvd #105",
    city: "San Diego",
    state: "CA",
    zip: "92117",
    country: "US",
  },
  geo: { lat: 32.8274, lng: -117.2297 },
  hours: "Mon–Sat, 2-hour arrival windows",
  hoursMachine: ["Mo-Sa 08:00-18:00"],
  priceRange: "$99–$659",
  bookingUrl:
    "https://book.housecallpro.com/book/JunkMD/cbbc4ed5b59a42f8803b491591c78555",
  socials: {
    facebook: "https://facebook.com/junkmd",
    instagram: "https://instagram.com/thejunkmd",
    yelp: "https://yelp.com/biz/junkmd-san-diego-2",
    youtube: "https://youtube.com/c/JunkMD",
    google:
      "https://www.google.com/maps/place/?q=place_id:JunkMD+San+Diego",
  },
  reviews: {
    google: { count: 1396, rating: "5.0" },
    yelp: { count: 221 },
    facebook: { count: 67 },
    totalDisplay: "1,680+",
    totalLabel: "reviews across Google, Yelp & Facebook",
    yearsServing: 13,
    clientsServed: 15000,
  },
  partners: [
    { name: "NetVendor Partner", logo: "/images/partners/netvendor.png" },
    { name: "NARPM San Diego Chapter", logo: "/images/partners/narpm.png" },
    { name: "Local Junkers", logo: "/images/partners/local-junkers.png" },
  ],
  youtube: {
    homeVideoId: "QTe8gUBzODg", // "What is Junk Removal? San Diego, CA"
    secondVideoId: "3rvDnoEUsQE", // "What we remove"
    ids: [
      "QTe8gUBzODg",
      "3rvDnoEUsQE",
      "_b5MvBwmhvA",
      "oSx68JRe8U4",
      "PDz4qUAFoGs",
      "rOuwGC4OL3c",
      "znjM7s_75tI",
    ],
  },
};

// DEMO MODE: pointed at the Vercel preview alias so canonical, og:url, og:image,
// and metadataBase resolve correctly while the prospect reviews the demo.
// SWAP BACK TO "https://junkmd.com" when DNS cuts over to the new site.
export const PRODUCTION_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://junkmd.vercel.app";

export const PRICING_TIERS = [
  {
    slug: "single-curbside",
    name: "Single Curbside Pickup",
    short: "1 Item",
    priceFrom: 99,
    priceDisplay: "$99",
    fraction: "Single item",
    image: "/images/pricing/tier-1-curbside.webp",
    description:
      "Perfect for one bulky item set out at the curb — a mattress, a couch, a refrigerator. We pull up, lift it, and it's gone in minutes.",
    includes: [
      "1 single item curbside",
      "Heavy lifting included",
      "Eco-friendly disposal",
      "Same-day or next-day service",
    ],
  },
  {
    slug: "small-load",
    name: "Small Load",
    short: "1/6 Truck",
    priceFrom: 199,
    priceDisplay: "$199+",
    fraction: "Up to 1/6 of our truck",
    image: "/images/pricing/tier-2-small.webp",
    description:
      "A few large items or a packed closet's worth of junk. Equal to a full pickup truck bed.",
    includes: [
      "Up to 1/6 truck volume",
      "All heavy lifting from anywhere on your property",
      "Sweep-up of work area",
      "Recycling & donation drop-off",
    ],
  },
  {
    slug: "medium-load",
    name: "Medium Load",
    short: "1/2 Truck",
    priceFrom: 379,
    priceDisplay: "$379+",
    fraction: "Up to 1/2 of our truck",
    image: "/images/pricing/tier-3-medium.webp",
    description:
      "Half a truckload — a garage cleanout, a packed shed, a large room's furniture. Equal to about three pickup truck loads.",
    includes: [
      "Up to 1/2 truck volume",
      "Two-person crew, full service",
      "Disassembly of furniture if needed",
      "Recycling & donation drop-off",
    ],
  },
  {
    slug: "large-load",
    name: "Large Load",
    short: "Full Truck",
    priceFrom: 659,
    priceDisplay: "$659+",
    fraction: "Full truckload (≈ 6 pickup trucks)",
    image: "/images/pricing/tier-4-large.webp",
    description:
      "Full truckload — equal to six pickup truck loads. Estate cleanout, hoarder cleanout, whole-house clear-out.",
    includes: [
      "Up to full truck (≈ 6 pickup loads)",
      "Two-person crew, full service",
      "Whole-property cleanout capable",
      "Recycling & donation drop-off",
    ],
  },
] as const;

export const PROCESS_STEPS = [
  { n: 1, title: "Schedule A Time", body: "Book online or text us pictures. We pick a two-hour arrival window that works for you, Mon–Sat." },
  { n: 2, title: "We're On Our Way", body: "Two uniformed pros roll up in a green JunkMD+ truck. We call before we arrive." },
  { n: 3, title: "Free Estimate", body: "We size up the job in person and give you a flat, up-front price. No surprises." },
  { n: 4, title: "Your Approval", body: "You give us the green light. We do the work — you don't lift a finger." },
  { n: 5, title: "Review Our Work", body: "We sweep up, walk you through, and make sure you're 100% happy." },
  { n: 6, title: "...And We're Off!", body: "We donate, recycle, and properly dispose of everything. Make space for what matters." },
] as const;

export const VALUE_PILLARS = [
  {
    title: "Full Service Removal",
    body: "This isn't dumpster rental. We handle all the heavy lifting, removal, hauling, and disposal for you.",
    icon: "Truck",
  },
  {
    title: "Junk Removal Experts",
    body: "Professional, uniformed, trained. Insured & background-checked crews you can trust in your home.",
    icon: "ShieldCheck",
  },
  {
    title: "Clear & Up-Front Pricing",
    body: "Free, no-obligation estimate every time. Flat-rate pricing. No hidden fees or added charges.",
    icon: "BadgeDollarSign",
  },
  {
    title: "Same/Next-Day Service",
    body: "Call us today and we'll be on site within 24 hours. Two-hour arrival windows Monday through Saturday.",
    icon: "Zap",
  },
] as const;
