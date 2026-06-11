/**
 * Phase B photo registry — wires the optimized client photo selects
 * (committed in 4d29e8a) into the site.
 *
 * Add a service slug here only when there's a hero-grade real photo for it.
 * Slugs not listed render exactly as before — zero regression on the long tail.
 */

export interface ServicePhotos {
  hero: string;
  heroAlt: string;
  cards: { src: string; alt: string }[];
}

const photo = (p: string) => `/images/photos/${p}`;

// ─── Brand-level: team + truck shots used across the site ───
export const BRAND_PHOTOS = {
  truckBanner: photo("truck/junkmd-truck-san-diego-banner-01.jpg"),
  truckBannerAlt:
    "JunkMD+ green junk-removal truck parked along a San Diego coastal road with palm trees overhead",

  truckOnRoad: photo("truck/junkmd-truck-san-diego-02.jpg"),
  truckOnRoadAlt:
    "JunkMD+ truck loaded up after a San Diego junk-removal job, driving past lavender wildflowers",

  truckWithCrew: photo("truck/junkmd-truck-san-diego-03.jpg"),
  truckWithCrewAlt:
    "Three JunkMD+ crew members standing beside the green truck after a San Diego cleanout",

  teamLineup: photo("team/team-junkmd-san-diego-01.jpg"),
  teamLineupAlt:
    "The full JunkMD+ crew lined up in front of two green junk-removal trucks in San Diego",

  teamOnTruck: photo("team/team-junkmd-san-diego-02.jpg"),
  teamOnTruckAlt:
    "JunkMD+ owners and crew posed on and around the green truck under San Diego palm trees",

  teamLeadership: photo("team/team-junkmd-san-diego-03.jpg"),
  teamLeadershipAlt:
    "JunkMD+ owners Clemencia Sandoval and David Leddick with the San Diego crew in a park",

  teamThumbsUp: photo("team/team-junkmd-san-diego-04.jpg"),
  teamThumbsUpAlt:
    "JunkMD+ crew giving a thumbs-up after a successful San Diego junk-removal house call",

  teamHandsIn: photo("team/team-junkmd-san-diego-05.jpg"),
  teamHandsInAlt:
    "JunkMD+ crew in orange shirts joining hands in a circle under San Diego trees",
} as const;

// ─── Service-level: per-slug hero + supporting card grid ───
// Only slugs with at least one strong category photo. Other slugs render unchanged.
export const SERVICE_PHOTOS: Record<string, ServicePhotos> = {
  // —— Appliance ——
  "appliance-removal": {
    hero: photo("appliance-removal/appliance-removal-san-diego-01.jpg"),
    heroAlt:
      "Old refrigerator, window AC unit, and chest freezer set out for JunkMD+ appliance removal in San Diego",
    cards: [
      {
        src: photo("appliance-removal/appliance-removal-san-diego-01.jpg"),
        alt: "Side-of-house appliance pickup — fridge, freezer, and AC unit lined up for JunkMD+ haul-away",
      },
    ],
  },

  // —— Construction Debris ——
  "construction-debris-removal": {
    hero: photo("construction-debris/construction-debris-removal-san-diego-01.jpg"),
    heroAlt:
      "Construction debris pile — cardboard, trash bags, and lumber staged for JunkMD+ pickup in a San Diego loading dock",
    cards: [
      {
        src: photo("construction-debris/construction-debris-removal-san-diego-02.jpg"),
        alt: "JunkMD+ crew member walking past stacked plywood crates on a San Diego construction debris job",
      },
      {
        src: photo("construction-debris/construction-debris-removal-san-diego-03.jpg"),
        alt: "Dumpster cart full of plywood and cardboard at a San Diego commercial cleanout",
      },
      {
        src: photo("construction-debris/construction-debris-removal-san-diego-04.jpg"),
        alt: "Stack of plywood and lumber ready for JunkMD+ construction debris haul-away in San Diego",
      },
      {
        src: photo("construction-debris/construction-debris-removal-san-diego-05.jpg"),
        alt: "Outdoor crate and construction debris loaded for removal under San Diego palm trees",
      },
    ],
  },

  // —— Deck / Playset ——
  "deck-removal": {
    hero: photo("deck-playset-demo/deck-playset-demo-san-diego-02.jpg"),
    heroAlt:
      "Old backyard gazebo structure scheduled for JunkMD+ deck demolition and removal in San Diego",
    cards: [
      {
        src: photo("deck-playset-demo/deck-playset-demo-san-diego-03.jpg"),
        alt: "Weathered wooden adirondack chairs on a San Diego patio before JunkMD+ deck cleanout",
      },
      {
        src: photo("deck-playset-demo/deck-playset-demo-san-diego-02.jpg"),
        alt: "Old gazebo and yard structure tagged for JunkMD+ demolition in a San Diego backyard",
      },
    ],
  },
  "playset-swing-set-removal": {
    hero: photo("deck-playset-demo/deck-playset-demo-san-diego-01.jpg"),
    heroAlt:
      "Wooden two-story backyard playhouse with green slide ready for JunkMD+ playset removal in San Diego",
    cards: [
      {
        src: photo("deck-playset-demo/deck-playset-demo-san-diego-01.jpg"),
        alt: "Backyard wooden playhouse and slide — typical JunkMD+ playset removal job in San Diego",
      },
    ],
  },

  // —— Furniture ——
  "furniture-removal": {
    hero: photo("furniture-cleanout/furniture-cleanout-san-diego-01.jpg"),
    heroAlt:
      "Brown leather couch left curbside for JunkMD+ furniture removal in a San Diego neighborhood",
    cards: [
      {
        src: photo("furniture-cleanout/furniture-cleanout-san-diego-02.jpg"),
        alt: "Office tables and a TV box prepped for JunkMD+ furniture cleanout in San Diego",
      },
      {
        src: photo("furniture-cleanout/furniture-cleanout-san-diego-03.jpg"),
        alt: "Row of office chairs from an apartment furniture cleanout being staged for JunkMD+ pickup in San Diego",
      },
    ],
  },
  "couch-removal": {
    hero: photo("furniture-cleanout/furniture-cleanout-san-diego-01.jpg"),
    heroAlt:
      "Brown leather couch at the curb awaiting JunkMD+ couch removal in San Diego",
    cards: [
      {
        src: photo("furniture-cleanout/furniture-cleanout-san-diego-01.jpg"),
        alt: "Tan leather couch left curbside for JunkMD+ couch pickup in San Diego",
      },
    ],
  },
  "office-cleanouts": {
    hero: photo("furniture-cleanout/furniture-cleanout-san-diego-02.jpg"),
    heroAlt:
      "Folded conference tables and equipment left for JunkMD+ office cleanout in a San Diego workplace",
    cards: [
      {
        src: photo("furniture-cleanout/furniture-cleanout-san-diego-02.jpg"),
        alt: "Office tables, chair, and electronics staged for JunkMD+ office cleanout in San Diego",
      },
      {
        src: photo("furniture-cleanout/furniture-cleanout-san-diego-03.jpg"),
        alt: "Office chair lineup from a San Diego workplace cleanout, ready for JunkMD+ haul-away",
      },
    ],
  },

  // —— Garage ——
  "garage-cleanout": {
    hero: photo("garage-cleanout/garage-cleanout-san-diego-01.jpg"),
    heroAlt:
      "Driveway and garage cleanout in San Diego — boxes, electronics, chairs, and bins staged for JunkMD+ pickup",
    cards: [
      {
        src: photo("garage-cleanout/garage-cleanout-san-diego-02.jpg"),
        alt: "Garage cleanout pile — bags, boxes, and a walker prepped for JunkMD+ haul-away in San Diego",
      },
      {
        src: photo("garage-cleanout/garage-cleanout-san-diego-03.jpg"),
        alt: "Driveway garage cleanout in San Diego — fitness equipment and shelving ready for JunkMD+",
      },
    ],
  },

  // —— In-Home / Full-Home work ——
  // Category has zero hero-eligible originals; use the team lineup as hero, real work as cards.
  "estate-cleanout": {
    hero: BRAND_PHOTOS.teamLineup,
    heroAlt:
      "JunkMD+ crew with two green trucks — the team that handles San Diego estate cleanouts",
    cards: [
      {
        src: photo("in-home-removal/in-home-removal-san-diego-01.jpg"),
        alt: "Living room mid-cleanout — boxes, art, and a ladder staged for JunkMD+ estate cleanout in San Diego",
      },
      {
        src: photo("in-home-removal/in-home-removal-san-diego-02.jpg"),
        alt: "Mountain of packing boxes after a San Diego estate cleanout — JunkMD+ haul-away",
      },
      {
        src: photo("in-home-removal/in-home-removal-san-diego-04.jpg"),
        alt: "Stacked mattresses removed from a bedroom during a JunkMD+ estate cleanout in San Diego",
      },
    ],
  },
  "hoarder-cleanouts": {
    hero: BRAND_PHOTOS.teamLineup,
    heroAlt:
      "The JunkMD+ team — discreet, experienced San Diego hoarder cleanout crew",
    cards: [
      {
        src: photo("in-home-removal/in-home-removal-san-diego-02.jpg"),
        alt: "Cardboard and contents piled in a San Diego living room before JunkMD+ hoarder cleanout",
      },
      {
        src: photo("in-home-removal/in-home-removal-san-diego-03.jpg"),
        alt: "Living room mid-sort during a JunkMD+ hoarder cleanout in San Diego",
      },
    ],
  },
  "property-cleanout": {
    hero: BRAND_PHOTOS.teamLineup,
    heroAlt:
      "JunkMD+ crew ready to handle a San Diego property cleanout from top to bottom",
    cards: [
      {
        src: photo("in-home-removal/in-home-removal-san-diego-01.jpg"),
        alt: "Property cleanout in progress — JunkMD+ crew clearing a San Diego living room",
      },
      {
        src: photo("in-home-removal/in-home-removal-san-diego-04.jpg"),
        alt: "Stacked mattresses removed during a JunkMD+ San Diego property cleanout",
      },
    ],
  },
  "foreclosure-cleanouts": {
    hero: BRAND_PHOTOS.teamLineup,
    heroAlt:
      "JunkMD+ — discreet, fully-insured San Diego foreclosure cleanout crew",
    cards: [
      {
        src: photo("in-home-removal/in-home-removal-san-diego-02.jpg"),
        alt: "Boxes left behind after a tenant move-out — typical JunkMD+ San Diego foreclosure cleanout",
      },
      {
        src: photo("in-home-removal/in-home-removal-san-diego-03.jpg"),
        alt: "Foreclosure cleanout in a San Diego living room — JunkMD+ haul-away",
      },
    ],
  },
  "mattress-disposal": {
    hero: photo("in-home-removal/in-home-removal-san-diego-04.jpg"),
    heroAlt:
      "Stacked mattresses staged for JunkMD+ mattress disposal in a San Diego bedroom",
    cards: [
      {
        src: photo("in-home-removal/in-home-removal-san-diego-04.jpg"),
        alt: "Twin and queen mattresses prepared for JunkMD+ pickup and recycling in San Diego",
      },
    ],
  },

  // —— Yard Waste ——
  // Zero hero-eligible originals; use the truck-on-road shot as hero.
  "yard-waste-removal": {
    hero: BRAND_PHOTOS.truckBanner,
    heroAlt:
      "JunkMD+ green truck — the rig that hauls San Diego yard waste in a single house call",
    cards: [
      {
        src: photo("yard-waste/yard-waste-removal-san-diego-01.jpg"),
        alt: "Yard waste pile at the curb — trunk, chairs, and bags ready for JunkMD+ haul-away in San Diego",
      },
      {
        src: photo("yard-waste/yard-waste-removal-san-diego-02.jpg"),
        alt: "Broken wood and yard debris stacked for JunkMD+ yard waste removal in San Diego",
      },
      {
        src: photo("yard-waste/yard-waste-removal-san-diego-03.jpg"),
        alt: "Trash bags of yard waste lined against a fence after a JunkMD+ San Diego cleanup",
      },
      {
        src: photo("yard-waste/yard-waste-removal-san-diego-04.jpg"),
        alt: "Overgrown backyard before JunkMD+ yard waste removal and cleanup in San Diego",
      },
    ],
  },
};

/**
 * Service slug categories noted in the brief that were checked against
 * src/content/services.ts and have no exact slug match:
 *  - "in-home" → covered by estate-cleanout / hoarder-cleanouts / property-cleanout / foreclosure-cleanouts
 *  - "full-home" → same; no literal "full-home-cleanout" slug exists in services.ts
 * No category is left entirely unmatched.
 */
