export type ServiceCategory =
  | "residential"
  | "commercial"
  | "demolition"
  | "eco"
  | "what-we-take";

export interface Service {
  slug: string;
  category: ServiceCategory;
  title: string;
  h1?: string;
  metaTitle: string;
  metaDescription: string;
  hero: string;          // 1-2 sentence hero copy
  intro: string;         // 2-3 paragraphs
  includes: string[];    // what's included / what we take
  process?: string;      // optional how-it-works paragraph
  whyJunkMd?: string;    // why choose JunkMD+ for this service
  pricing?: string;      // pricing note
  faqs: { q: string; a: string }[];
  related: string[];     // slugs of related services
  image?: string;
}

const houseCallParagraph =
  "The JunkMD+ house call is simple: schedule a two-hour arrival window, we show up in a uniformed crew with a green truck, we size the job up, we give you a flat up-front price, and we do all the lifting. You point — we haul. Most jobs are done in under an hour, and we donate or recycle everything we can.";

const trustParagraph =
  "Family-owned since 2012, JunkMD+ has served more than 15,000 San Diego households and businesses. Our crews are uniformed, background-checked, and fully insured. Our trucks are clean, green, and equipped to handle anything from a single curbside pickup to a full estate cleanout.";

export const SERVICES: Service[] = [
  // ───────── RESIDENTIAL ─────────
  {
    slug: "furniture-removal",
    category: "residential",
    title: "Furniture Removal",
    metaTitle: "Furniture Removal San Diego — Couches, Beds, Dressers Hauled Away",
    metaDescription:
      "Fast, friendly furniture removal in San Diego. Couches, sectionals, beds, dressers, dining sets — gone today. Flat-rate, eco-friendly, save $20 on your first appointment.",
    hero: "Couches, sectionals, beds, dressers, dining tables — the JunkMD+ house call hauls it all away for one flat rate.",
    intro:
      "Old furniture is heavy, awkward, and full of memories you no longer need. JunkMD+ takes the awkward out: we lift it, we carry it, we load it, and we make sure as much of it as possible finds a second home through Goodwill or the Salvation Army before anything heads to the landfill. " +
      houseCallParagraph +
      " Whether it's one tired recliner blocking the garage or an entire living room you're swapping out, we'll be there same-day or next-day, every time.",
    includes: [
      "Couches, loveseats, sectionals, sleeper sofas",
      "Mattresses, box springs, bed frames, headboards",
      "Dressers, nightstands, armoires, wardrobes",
      "Dining tables, chairs, hutches, buffets",
      "Recliners, ottomans, futons, bean bags",
      "Office furniture: desks, filing cabinets, bookcases",
      "Patio furniture and umbrellas",
      "Cribs, changing tables, kids' bedroom sets",
    ],
    pricing:
      "Single-item curbside pickups start at $79. Most full living-room hauls fall in the Small ($197–329) or Medium ($329–526) load tier.",
    whyJunkMd:
      "We're not a dumpster — we're a full-service crew. You don't lift, drag, dismantle, or sweep. We arrive on time, we name the price before we touch a thing, and we leave the space cleaner than we found it.",
    faqs: [
      { q: "Do I have to move the furniture outside?", a: "No. We do all the heavy lifting — upstairs, downstairs, basement, attic, second story, anywhere on your property." },
      { q: "Will you donate items that are still in good shape?", a: "Yes. We work with Goodwill, the Salvation Army, and other local charities. If it has life left, we'll find it a home." },
      { q: "How fast can you come?", a: "Most weekdays we have same-day or next-day windows. Book online or text us pictures at (858) 869-9448." },
      { q: "What does it cost?", a: "We give you a flat, up-front price the moment we see the load. No hidden fees. Single curbside items start at $79." },
    ],
    related: ["mattress-disposal", "couch-removal", "estate-cleanout", "appliance-removal"],
    image: "/images/clear-your-space.jpg",
  },
  {
    slug: "appliance-removal",
    category: "residential",
    title: "Appliance Removal",
    metaTitle: "Appliance Removal San Diego — Fridges, Washers, Dryers Hauled Away",
    metaDescription:
      "Refrigerators, washers, dryers, dishwashers, ovens, water heaters — JunkMD+ hauls dead appliances out of any room, today. Eco-friendly disposal & EPA-compliant freon recovery.",
    hero: "Refrigerators, washers, dryers, water heaters — out of your laundry room, garage, or kitchen and gone today.",
    intro:
      "Appliances are heavy, sharp-edged, and a lot of them contain refrigerants that have to be recovered properly. The JunkMD+ crew shows up with a dolly, straps, and the experience to walk a 300-pound side-by-side fridge down a flight of stairs without scuffing a wall. " +
      houseCallParagraph +
      " We take everything to certified recyclers — freon is recovered, metals are salvaged, and only what truly can't be reused ends up in the landfill.",
    includes: [
      "Refrigerators, freezers, mini-fridges, wine coolers",
      "Washing machines and dryers (stacked or separate)",
      "Dishwashers, garbage disposals, range hoods",
      "Stoves, ovens, ranges, cooktops, microwaves",
      "Water heaters (gas or electric)",
      "AC window units and portable AC units",
      "Trash compactors, ice makers",
      "Commercial-grade appliances (call for sizing)",
    ],
    pricing:
      "Single appliance curbside pickup starts at $79. Multi-appliance hauls (e.g., full kitchen swap) typically fall in the Small or Medium load tier.",
    whyJunkMd:
      "We handle EPA-regulated refrigerants properly, we don't damage your floors or doorframes, and we know how to disconnect a stuck washer or a corroded water heater without flooding your laundry room.",
    faqs: [
      { q: "Do you disconnect appliances?", a: "Yes — we can disconnect washers, dryers, and most plug-in appliances. For hard-plumbed water heaters we work with your plumber or recommend one." },
      { q: "What about the freon in old fridges?", a: "All refrigerant-containing appliances go to certified recyclers. We do not dump freon." },
      { q: "Can you take it down stairs?", a: "Yes. Fridges, washers, water heaters — we'll handle stairs, basements, and tight hallways." },
      { q: "Will the city or hauler take it?", a: "Curbside city bulky pickup has limits and long waits. We're typically same-day or next-day with no scheduling games." },
    ],
    related: ["refrigerator-freezer-disposal", "commercial-appliance-removal", "furniture-removal", "garage-cleanout"],
    image: "/images/truck-hero.webp",
  },
  {
    slug: "mattress-disposal",
    category: "residential",
    title: "Mattress Disposal",
    metaTitle: "Mattress Disposal San Diego — Old Mattresses & Box Springs Hauled",
    metaDescription:
      "Mattresses, box springs, bed frames — JunkMD+ hauls them away the same day and recycles foam and steel where possible. Single curbside pickup starts at $79.",
    hero: "Mattresses, box springs, and bed frames — out of the bedroom and gone today. Foam and steel recycled where possible.",
    intro:
      "Mattresses are bulky, awkward, and California won't let you put one in the regular trash. JunkMD+ takes them off your hands, properly. We strip them down at certified recyclers so the foam, fabric, springs, and wood frames can each go to the right place. " +
      houseCallParagraph,
    includes: [
      "Queen, king, full, twin, and California king mattresses",
      "Box springs and split box springs",
      "Bed frames, headboards, footboards, slats",
      "Bunk beds and trundle beds",
      "Crib mattresses",
      "Adjustable bed bases (we can disconnect)",
      "Old pillows and bedding included free",
    ],
    pricing: "Single curbside mattress pickup starts at $79. Mattress + box spring + frame combos usually fit in the Small Load tier ($197–329).",
    whyJunkMd:
      "Mattress hauling is one of our most-requested services. We're fast, we don't tear up your stairwells, and we send mattresses to recycling centers — not the canyon.",
    faqs: [
      { q: "Why can't I just put my mattress in the dumpster?", a: "California Senate Bill 254 requires mattresses to be recycled, not landfilled. Putting one in regular trash can trigger fines." },
      { q: "Do you take stained or wet mattresses?", a: "In almost all cases yes. Heavily biohazard-soiled mattresses we'll discuss case by case." },
      { q: "Can I keep my bed frame?", a: "Of course. Tell the crew what's staying." },
    ],
    related: ["furniture-removal", "estate-cleanout", "couch-removal", "hoarder-cleanouts"],
    image: "/images/clear-your-space.jpg",
  },
  {
    slug: "hot-tub-removal",
    category: "residential",
    title: "Hot Tub Removal",
    metaTitle: "Hot Tub Removal San Diego — Spa Demolition & Disposal",
    metaDescription:
      "Hot tubs and spas are heavy, ugly to disassemble, and a nightmare to dispose of. JunkMD+ drains, cuts apart, and hauls away your old hot tub — all in one house call.",
    hero: "Hot tubs and spas are heavy, ugly to disassemble, and a nightmare to dispose of. We handle the whole job in one house call.",
    intro:
      "An old hot tub is one of the worst DIY removal projects you can take on — they're packed with fiberglass, foam insulation, plumbing, and electrical. JunkMD+ shows up, drains it (if you haven't), cuts it down into manageable pieces with the right saws and PPE, and hauls every piece away. " +
      houseCallParagraph,
    includes: [
      "In-ground or above-ground hot tubs",
      "Acrylic, fiberglass, and wooden tubs",
      "Hot tub covers and lifters",
      "Spa pumps, heaters, and control panels",
      "Disconnect from existing power (we'll cap off — please have your electrician finalize)",
      "Removal through gates, side yards, or over fences if needed",
    ],
    pricing:
      "Hot tub removal is custom-quoted based on access, size, and whether disassembly is required. Most jobs land in the Medium or Large load tier.",
    whyJunkMd:
      "We've removed hundreds of hot tubs across San Diego. We bring the saws, the sawzalls, the dollies, and the muscle. We don't damage your decking, fence, or pavers on the way out.",
    faqs: [
      { q: "Do I need to drain it first?", a: "If it's full, drain it the night before if possible. If you can't, we can pump it." },
      { q: "How long does it take?", a: "Typical hot tub removal is 1–3 hours on site." },
      { q: "Will I need to repair my deck after?", a: "We're careful, but a hot tub leaves a footprint — sealed planks, stained concrete, or settled pavers. We'll point that out before we start." },
    ],
    related: ["shed-removal", "deck-removal", "playset-swing-set-removal", "concrete-removal"],
    image: "/images/backyard.webp",
  },
  {
    slug: "estate-cleanout",
    category: "residential",
    title: "Estate Cleanout",
    metaTitle: "Estate Cleanout San Diego — Whole-House Clearing After Loss or Move",
    metaDescription:
      "Compassionate, fast, full-service estate cleanouts in San Diego. We sort, donate, and haul so you can focus on the family. Same-week scheduling, flat-rate pricing.",
    hero: "Compassionate, fast, full-service estate cleanouts. We sort, donate, and haul so you can focus on the family.",
    intro:
      "Clearing out a home after a loved one passes — or preparing a long-time family home for sale — is overwhelming. JunkMD+ has spent more than a decade helping San Diego families handle estate cleanouts with care, speed, and respect. We separate keepsakes, donations, recyclables, and true junk. We coordinate with realtors, executors, and family members across timezones. " +
      houseCallParagraph,
    includes: [
      "Whole-house clearing room by room",
      "Furniture, appliances, and household goods",
      "Garage, attic, basement, shed contents",
      "Donation handling (Goodwill, Salvation Army, local charities)",
      "Document shredding coordination (optional)",
      "Realtor and executor coordination",
      "Final-clean staging for sale (optional)",
    ],
    pricing:
      "Most full-estate jobs are Large Load ($526–799) or multi-truck. We quote on-site and you approve before we touch a thing.",
    whyJunkMd:
      "Family-owned, fully insured, and known for treating every estate like our own grandmother's. We've earned 1,396+ five-star Google reviews doing exactly this work.",
    faqs: [
      { q: "Can family members pull keepsakes first?", a: "Absolutely — and we'll happily set anything aside on the day of so you don't have to do it alone." },
      { q: "Do you donate or just dump?", a: "We donate everything that has life left. Goodwill, Salvation Army, and other local charities. Less than 15% of a typical estate truly hits the landfill." },
      { q: "Can you work with the realtor?", a: "Yes. We've worked with dozens of San Diego realtors and probate attorneys." },
    ],
    related: ["hoarder-cleanouts", "foreclosure-cleanouts", "house-cleanout", "donation-pickup"],
    image: "/images/crew-action.jpeg",
  },
  {
    slug: "hoarder-cleanouts",
    category: "residential",
    title: "Hoarder Cleanouts",
    metaTitle: "Hoarder Cleanout San Diego — Discreet, Compassionate, Thorough",
    metaDescription:
      "Hoarder cleanouts handled with discretion and compassion. JunkMD+ has cleared thousands of cubic feet for San Diego families. Free on-site quote, flat-rate pricing.",
    hero: "Discreet. Compassionate. Thorough. We've helped hundreds of San Diego families clear hoarder homes.",
    intro:
      "Hoarder cleanouts are emotional, physical, and logistical work — and they don't get easier alone. JunkMD+ approaches every hoarder home with discretion, judgment-free, and a plan. We bring extra crew, extra trucks, dust masks, gloves, and the experience to spot keepsakes inside the chaos. We work alongside family, social workers, property managers, and mental-health professionals when needed. " +
      houseCallParagraph,
    includes: [
      "Multi-room or whole-house clearing",
      "Furniture, clothing, paper, magazines, food waste, and surface debris",
      "Hazardous-item flagging (we coordinate, we don't haul HHW)",
      "Sharp-object handling",
      "Sorting of keepsakes / mail / documents on request",
      "Multiple-truck capacity",
      "Discreet unmarked-arrival option on request",
    ],
    pricing:
      "Hoarder jobs are custom-quoted on site. Most multi-room jobs run multi-Large-Load. Multi-day scheduling is common.",
    whyJunkMd:
      "We do this work every week and we do it without judgment. Many of our clients are children of an elderly parent, executors, or property managers — we know how to keep the dignity intact.",
    faqs: [
      { q: "Will you sort or just haul?", a: "We can do either. Most clients want us to sort keepsakes, donations, and trash. Some just want it gone — fast." },
      { q: "Can you come unmarked?", a: "Yes, on request we use unbranded vehicles." },
      { q: "Is this confidential?", a: "Always. We don't post photos or names without explicit written permission." },
    ],
    related: ["estate-cleanout", "foreclosure-cleanouts", "house-cleanout", "garage-cleanout"],
    image: "/images/crew-action.jpeg",
  },
  {
    slug: "foreclosure-cleanouts",
    category: "residential",
    title: "Foreclosure Cleanouts",
    metaTitle: "Foreclosure Cleanout San Diego — Realtor & Lender Trusted",
    metaDescription:
      "Trash-outs, eviction cleanouts, and bank-owned property clearings across San Diego. Same-week service, photo documentation, flat-rate pricing for realtors & lenders.",
    hero: "Trash-outs, post-eviction cleanouts, and bank-owned property clearings — fast, documented, ready for re-list.",
    intro:
      "Realtors, asset managers, and lenders need a hauler who shows up, photographs the work, and turns a property fast. JunkMD+ is that hauler. We handle full trash-outs, abandoned-property contents, and eviction cleanouts across San Diego County — typically scheduled within 24–72 hours of your call. " +
      houseCallParagraph,
    includes: [
      "Full interior and exterior clearing",
      "Photo documentation pre/post (provided digitally)",
      "Refrigerator and food-waste handling",
      "Mattress, furniture, and household debris",
      "Yard waste and exterior junk",
      "Coordination with locksmith / property preservation vendor",
    ],
    pricing:
      "Per-property quoting. Volume / portfolio discounts available for asset managers handling multiple properties per month.",
    whyJunkMd:
      "Insured, on time, and willing to be on-site within 24 hours when you need a property turned over the weekend.",
    faqs: [
      { q: "Can you bill the lender or LLC directly?", a: "Yes. We invoice on net terms for repeat realtor/lender clients." },
      { q: "Do you provide before/after photos?", a: "Always — photo documentation is standard on all foreclosure work." },
    ],
    related: ["estate-cleanout", "property-management-cleanouts", "house-cleanout", "hoarder-cleanouts"],
    image: "/images/crew-hero.jpg",
  },
  {
    slug: "garage-cleanout",
    category: "residential",
    title: "Garage Cleanout",
    metaTitle: "Garage Cleanout San Diego — Reclaim Your Garage in One House Call",
    metaDescription:
      "Reclaim your garage. JunkMD+ hauls out years of stored junk in one house call — furniture, boxes, bikes, tools, exercise equipment. Flat-rate, same-day available.",
    hero: "Reclaim your garage. Years of stored junk gone in one house call.",
    intro:
      "Most San Diego garages haven't fit a car in years. JunkMD+ comes in, you point, we haul. We move heavy boxes, lift exercise equipment, break down rusty shelves, and sweep up so you can finally park inside again. " +
      houseCallParagraph,
    includes: [
      "Cardboard boxes (sealed or unsealed)",
      "Old furniture and household goods",
      "Bikes, kids' toys, sports equipment",
      "Exercise equipment, treadmills, weight benches",
      "Workbenches, shelving units, pegboards",
      "Paint cans (empty/dried — full HHW we'll coordinate)",
      "Lawn equipment, hoses, pots",
    ],
    pricing:
      "Most garage cleanouts fall in Small ($197–329) or Medium ($329–526) load tier. Large overflowing garages reach Large Load.",
    whyJunkMd:
      "We've cleared thousands of garages. We bring brooms — every job ends with the floor swept clean.",
    faqs: [
      { q: "What if I haven't sorted anything yet?", a: "Perfect — we sort with you. Just point at what stays and what goes." },
      { q: "Can you handle exercise equipment?", a: "Yes. Treadmills, ellipticals, weight benches, racks — we disassemble and haul." },
    ],
    related: ["attic-cleanouts", "basement-cleanouts", "shed-removal", "exercise-equipment-removal"],
    image: "/images/clear-your-space.jpg",
  },
  {
    slug: "attic-cleanouts",
    category: "residential",
    title: "Attic Cleanouts",
    metaTitle: "Attic Cleanout San Diego — Decades of Storage Hauled Safely",
    metaDescription:
      "Old insulation, boxes, broken furniture, holiday decorations — JunkMD+ clears attics safely, including hard-to-reach pull-down access. Same-week scheduling.",
    hero: "Decades of attic storage — gone in one house call, including hard-to-reach pull-down stairs.",
    intro:
      "Attics in San Diego homes collect everything: holiday decorations, baby clothes, old electronics, broken furniture. They're also tight, hot, and dangerous to clear alone. JunkMD+ crews handle attic work safely — proper ladders, headlamps, and the muscle to lower heavy items down without dropping them through your ceiling. " +
      houseCallParagraph,
    includes: [
      "Boxes, holiday decorations, old clothes",
      "Broken furniture and unwanted storage items",
      "Old insulation (loose-fill or batt) — case by case",
      "Damaged or rodent-affected items (we wear PPE)",
      "Hard-to-reach pull-down attic access",
    ],
    pricing: "Typical attic cleanouts are Small or Medium load. Decades-of-storage attics can reach Large.",
    whyJunkMd:
      "We carry the right ladders and the right respirators. We're insured for in-ceiling work. We won't ding your drywall.",
    faqs: [
      { q: "Do you handle rodent-contaminated items?", a: "Yes, with full PPE. We coordinate with pest control where helpful." },
      { q: "Can you remove old insulation?", a: "Loose-fill removal is case by case — depends on type and access. Tell us during the quote." },
    ],
    related: ["basement-cleanouts", "garage-cleanout", "house-cleanout", "hoarder-cleanouts"],
    image: "/images/clear-your-space.jpg",
  },
  {
    slug: "basement-cleanouts",
    category: "residential",
    title: "Basement Cleanouts",
    metaTitle: "Basement Cleanout San Diego — Bulk Items & Storage Hauled",
    metaDescription:
      "Old furniture, water-damaged boxes, broken appliances — JunkMD+ clears San Diego basements with care, climbing stairs and tight corners so you don't have to.",
    hero: "Old furniture, water-damaged boxes, dead appliances — out of the basement and gone today.",
    intro:
      "Basements are tough — narrow stairs, low ceilings, and decades of accumulated stuff. JunkMD+ crews are trained on stair work and bring the right straps and dollies to bring even the heaviest items up safely. " +
      houseCallParagraph,
    includes: [
      "Furniture and mattresses",
      "Water-damaged boxes and cardboard",
      "Old appliances (washer, dryer, water heater, dehumidifier)",
      "Stored construction materials",
      "Holiday decorations and seasonal storage",
      "Workshop tools and benches",
    ],
    pricing: "Basement cleanouts most often fall in Medium or Large load tier.",
    whyJunkMd:
      "Stair work is a specialty. We don't damage walls or banisters and we won't refuse the heaviest piece down there.",
    faqs: [
      { q: "Is mold a problem?", a: "We can haul lightly mildewed items in PPE. Active mold remediation requires a specialist — we'll point you to one." },
      { q: "What about water-damaged carpet?", a: "We remove carpet and pad — see our carpet removal service." },
    ],
    related: ["garage-cleanout", "attic-cleanouts", "carpet-removal", "house-cleanout"],
    image: "/images/clear-your-space.jpg",
  },
  {
    slug: "yard-waste-removal",
    category: "residential",
    title: "Yard Waste Removal",
    metaTitle: "Yard Waste Removal San Diego — Branches, Leaves, Sod Hauled",
    metaDescription:
      "Branches, palm fronds, sod, leaves, grass clippings — JunkMD+ hauls yard debris fast across San Diego. Eco-friendly green-waste recycling. Flat-rate pricing.",
    hero: "Branches, palm fronds, sod, leaves, dead plants — hauled away and green-recycled.",
    intro:
      "After a big trim or a storm, San Diego yards fill up fast. Green waste bins fill up faster. JunkMD+ scoops up the whole pile in one trip and delivers it to certified green-waste facilities where it becomes compost or mulch. " +
      houseCallParagraph,
    includes: [
      "Tree branches and palm fronds",
      "Sod, dirt, and rolled-up turf",
      "Leaves, grass clippings, hedge trimmings",
      "Dead plants and shrubs",
      "Stumps (small to medium)",
      "Bagged or unbagged debris",
    ],
    pricing: "Small loads start at $199. Big tree-trim jobs often land in Medium tier.",
    whyJunkMd:
      "Green waste is one of our most-requested services. We deliver loads to certified green-waste recyclers, not landfills.",
    faqs: [
      { q: "Do you do tree removal?", a: "We haul what's been trimmed — but we don't climb trees or operate chainsaws on live wood." },
      { q: "Will you take it bagged?", a: "Bagged is great. Loose is fine too." },
    ],
    related: ["shed-removal", "deck-removal", "concrete-removal", "fence-removal"],
    image: "/images/backyard.webp",
  },
  {
    slug: "shed-removal",
    category: "residential",
    title: "Shed Removal",
    metaTitle: "Shed Removal San Diego — Demolition & Haul-Away in One Visit",
    metaDescription:
      "Wooden, metal, or plastic — JunkMD+ tears down and hauls away your old shed in one house call. Light demolition included. Flat-rate, same-week scheduling.",
    hero: "Wooden, metal, or plastic — your old shed torn down and hauled away in one visit.",
    intro:
      "An old backyard shed is half-rotted, half-rusted, and impossible to drag through a side gate intact. JunkMD+ brings the saws, sledgehammers, and sawzalls to break it down on the spot and haul every piece away. " +
      houseCallParagraph,
    includes: [
      "Wood, metal, vinyl, and plastic sheds",
      "Tuff Shed, Rubbermaid, Suncast, and similar brands",
      "Disassembly of contents (if requested)",
      "Foundation pad removal (if concrete — see concrete removal)",
      "Cleanup and sweep of the footprint",
    ],
    pricing: "Most shed demos land in the Medium or Large load tier depending on size and access.",
    whyJunkMd:
      "Demolition + haul-away in one visit. No separate contractors. We bring all the tools.",
    faqs: [
      { q: "Can you handle a concrete pad?", a: "Yes — we offer concrete removal as an add-on. See our concrete removal service." },
      { q: "What if it has stuff in it?", a: "We'll empty it first. Just tell us what's keepsake and what's not." },
    ],
    related: ["shed-demolition", "deck-removal", "fence-removal", "concrete-removal"],
    image: "/images/backyard.webp",
  },
  {
    slug: "carpet-removal",
    category: "residential",
    title: "Carpet Removal",
    metaTitle: "Carpet Removal San Diego — Rip-Up & Haul-Away Service",
    metaDescription:
      "Pulling new floors? JunkMD+ rips up old carpet, pad, and tack strip and hauls it all away in one visit. Eco-friendly disposal where possible.",
    hero: "Pulling new floors in? We rip up the old carpet, pad, and tack strip in one visit.",
    intro:
      "Carpet removal is dusty, sweaty, and one of those jobs nobody wants to do twice. JunkMD+ comes in, rolls and cuts the old carpet, pulls the pad, pries the tack strip, and hauls every staple, scrap, and strip out the door. " +
      houseCallParagraph,
    includes: [
      "Carpet and underlayment pad",
      "Tack strips and staples",
      "Vinyl, laminate, and linoleum (see flooring removal)",
      "Carpet from stairs and closets",
      "Pet-soiled or water-damaged carpet (we wear PPE)",
    ],
    pricing: "Typical single-room or hallway runs are Small Load. Whole-house carpet pulls can reach Medium or Large.",
    whyJunkMd:
      "We bring the utility knives, pry bars, and dust masks. You don't have to lift a roll.",
    faqs: [
      { q: "Do you do the new floor too?", a: "We don't install — we tear out and haul, so your installer walks into a clean subfloor." },
      { q: "What about pet stains?", a: "We've seen everything. PPE and disposal both included." },
    ],
    related: ["flooring-removal", "basement-cleanouts", "house-cleanout", "renovation-waste"],
    image: "/images/renovation-waste.webp",
  },
  {
    slug: "tv-electronics-disposal",
    category: "residential",
    title: "TV & Electronics Disposal",
    metaTitle: "TV & Electronics Disposal San Diego — E-Waste Recycling",
    metaDescription:
      "Old TVs, monitors, computers, printers — JunkMD+ picks up e-waste and routes it to certified electronics recyclers. California-compliant disposal.",
    hero: "Old TVs, monitors, computers, printers — picked up today and routed to certified e-waste recyclers.",
    intro:
      "California treats electronic waste as hazardous, which means you can't legally throw it in the trash. JunkMD+ takes old electronics to certified e-waste recyclers where they're dismantled and the metals, plastics, and glass are properly recovered. " +
      houseCallParagraph,
    includes: [
      "CRT and flat-panel TVs (any size)",
      "Computer monitors, towers, all-in-ones",
      "Printers, copiers, scanners",
      "Cables, keyboards, mice, hubs",
      "Stereos, receivers, speakers",
      "Old phones and tablets",
      "Server gear and small office equipment",
    ],
    pricing: "Single-item TV/electronics pickups start at $79. Office-clearing e-waste batches fall in Small or Medium load.",
    whyJunkMd:
      "We follow California e-waste regulations end-to-end. Your old TV doesn't end up in a canyon.",
    faqs: [
      { q: "Are TVs free to recycle?", a: "California recyclers accept TVs at no extra fee in most cases. Our pickup fee covers the labor and transport." },
      { q: "What about data on hard drives?", a: "We can wipe or destroy drives on request. Tell us during booking." },
    ],
    related: ["e-waste-disposal", "office-cleanouts", "appliance-removal", "scrap-metal-removal"],
    image: "/images/truck-hero.webp",
  },
  {
    slug: "refrigerator-freezer-disposal",
    category: "residential",
    title: "Refrigerator & Freezer Disposal",
    metaTitle: "Refrigerator & Freezer Disposal San Diego — EPA-Compliant Freon Recovery",
    metaDescription:
      "Old fridges, freezers, mini-fridges, wine coolers — JunkMD+ hauls them out and routes freon to EPA-compliant recovery. Single curbside pickup starts at $79.",
    hero: "Old fridges, freezers, mini-fridges — hauled out today with EPA-compliant freon recovery.",
    intro:
      "Refrigerators and freezers contain refrigerant gases that have to be recovered by certified technicians before disposal. JunkMD+ ensures every fridge we haul gets routed to a certified recycler — never dumped, never illegally vented. " +
      houseCallParagraph,
    includes: [
      "Full-size refrigerators (top freezer, bottom freezer, side-by-side, French door)",
      "Stand-alone freezers (upright and chest)",
      "Mini-fridges and dorm refrigerators",
      "Wine coolers and beverage centers",
      "Commercial refrigeration (call for sizing)",
    ],
    pricing: "Single curbside fridge pickup starts at $79. Multi-appliance hauls bundle into Small or Medium load.",
    whyJunkMd:
      "We don't cut corners on refrigerant. Every fridge goes to a certified recycler — never the canyon, never the curb.",
    faqs: [
      { q: "Does it have to be empty?", a: "Please empty food and water — pictures inside the fridge are a hint we'll find any forgotten lunch." },
      { q: "Will you take from upstairs?", a: "Yes — stairs, side yards, anywhere. That's the JunkMD+ house call." },
    ],
    related: ["appliance-removal", "commercial-appliance-removal", "e-waste-disposal", "scrap-metal-removal"],
    image: "/images/truck-hero.webp",
  },

  // ───────── COMMERCIAL ─────────
  {
    slug: "office-cleanouts",
    category: "commercial",
    title: "Office Cleanouts",
    metaTitle: "Office Cleanout San Diego — Furniture, Cubicles, Electronics Hauled",
    metaDescription:
      "Closing, moving, or right-sizing your office? JunkMD+ hauls desks, chairs, cubicles, filing cabinets, and e-waste. Weekend & after-hours scheduling available.",
    hero: "Closing, moving, or right-sizing — JunkMD+ clears your San Diego office on your schedule.",
    intro:
      "Office cleanouts have to happen on someone else's clock — landlords, leases, and remodelers. JunkMD+ runs weekend and after-hours crews so you can keep the workday running while we empty the floor. " +
      trustParagraph,
    includes: [
      "Desks, conference tables, executive office sets",
      "Cubicles and modular furniture (we disassemble)",
      "Office chairs, guest chairs, lounge furniture",
      "Filing cabinets (lateral and vertical)",
      "Bookshelves, lockers, whiteboards",
      "Server racks, network gear, monitors (see e-waste)",
      "Break-room appliances",
    ],
    pricing: "Office cleanouts are quoted on-site. Volume discounts available for property managers and corporate clients.",
    whyJunkMd:
      "Insured, COI-friendly, badge-friendly for high-security buildings. We've worked downtown high-rises and tech-park campuses.",
    faqs: [
      { q: "Can you work after hours?", a: "Yes — we routinely run nights and weekends for office clients." },
      { q: "Can you provide a Certificate of Insurance?", a: "Yes. We send COIs to building management before the job." },
    ],
    related: ["commercial-junk-removal", "warehouse-cleanouts", "storage-unit-cleanouts", "tv-electronics-disposal"],
    image: "/images/crew-action.jpeg",
  },
  {
    slug: "storage-unit-cleanouts",
    category: "commercial",
    title: "Storage Unit Cleanouts",
    metaTitle: "Storage Unit Cleanout San Diego — Empty the Unit & Stop Paying Rent",
    metaDescription:
      "Stop paying rent on a storage unit you don't need. JunkMD+ empties storage units of any size, donates what's usable, and hauls the rest. Same-week scheduling.",
    hero: "Stop paying rent on a storage unit you'll never empty. We do it in one visit.",
    intro:
      "Storage units have a way of becoming permanent. JunkMD+ shows up at your unit, sorts keepsakes from junk on the spot if you want, and loads everything else out in one trip. " +
      houseCallParagraph,
    includes: [
      "Furniture and household goods",
      "Boxes (sealed or unsealed)",
      "Appliances and electronics",
      "Sporting goods and seasonal items",
      "Damaged or water-damaged contents",
    ],
    pricing: "Most 5×10 and 10×10 units fit in a Small or Medium load. Larger units (10×20+) approach Large.",
    whyJunkMd:
      "We've cleared hundreds of storage units across San Diego. We know the facilities and we know the loading-dock rules.",
    faqs: [
      { q: "Can you meet me at the facility?", a: "Yes — we coordinate directly with the unit address and access code." },
      { q: "Do I have to sort first?", a: "No. We can sort on-site with you or just haul it all." },
    ],
    related: ["estate-cleanout", "house-cleanout", "office-cleanouts", "warehouse-cleanouts"],
    image: "/images/crew-hero.jpg",
  },
  {
    slug: "warehouse-cleanouts",
    category: "commercial",
    title: "Warehouse Cleanouts",
    metaTitle: "Warehouse Cleanout San Diego — Pallets, Racking, Inventory Hauled",
    metaDescription:
      "Closing, downsizing, or moving warehouse space? JunkMD+ hauls pallets, racking, equipment, and obsolete inventory. Multi-truck capacity, weekend scheduling.",
    hero: "Pallets, racking, obsolete inventory — multi-truck capacity for warehouse turnover.",
    intro:
      "Warehouse cleanouts are volume work. JunkMD+ rolls multiple trucks, dispatches a larger crew, and clears the floor on the timeline your landlord or operations team needs. " +
      trustParagraph,
    includes: [
      "Industrial pallet racking (we can disassemble)",
      "Wooden and plastic pallets",
      "Obsolete inventory and packaging",
      "Forklift attachments and tools (non-hazardous)",
      "Office areas inside the warehouse",
    ],
    pricing: "Custom-quoted by truckload. Volume discounts kick in past one full Large Load.",
    whyJunkMd:
      "Multi-truck capacity, insured for industrial sites, and willing to work overnight when production can't pause.",
    faqs: [
      { q: "Do you do scrap metal buyback?", a: "We work with scrap recyclers — sometimes we can credit against the haul fee." },
      { q: "Can you remove racking?", a: "Yes — heavy-duty pallet racking disassembly is part of warehouse work." },
    ],
    related: ["office-cleanouts", "commercial-junk-removal", "construction-debris-removal", "scrap-metal-removal"],
    image: "/images/truck-hero.webp",
  },
  {
    slug: "restaurant-junk-removal",
    category: "commercial",
    title: "Restaurant Junk Removal",
    metaTitle: "Restaurant Junk Removal San Diego — Equipment, Furniture, Closeouts",
    metaDescription:
      "Closing, remodeling, or refreshing a restaurant? JunkMD+ hauls commercial appliances, booths, tables, signage, and grease-impacted equipment. Insured & COI-ready.",
    hero: "Closing, remodeling, or refreshing — JunkMD+ handles restaurant closeouts end to end.",
    intro:
      "Restaurant cleanouts have unique challenges: commercial-grade equipment, grease-impacted surfaces, signage, and tight turnaround between leases. JunkMD+ handles it all. " +
      trustParagraph,
    includes: [
      "Commercial fryers, grills, ovens, ranges, hood vents",
      "Walk-in coolers and prep tables",
      "Booths, tables, chairs, bar stools",
      "Signage and exterior fixtures",
      "Mixers, slicers, prep equipment",
      "POS systems and small electronics",
    ],
    pricing: "Quoted on-site. Most full restaurant closeouts are multiple Large Loads.",
    whyJunkMd:
      "Insured for kitchen environments, experienced with grease and walk-ins, and willing to run overnight to meet a landlord deadline.",
    faqs: [
      { q: "Can you remove a walk-in cooler?", a: "Yes. We've removed many — they disassemble in panels." },
      { q: "What about grease and fryer oil?", a: "We coordinate grease pickup with a certified hauler. We don't transport grease ourselves." },
    ],
    related: ["commercial-junk-removal", "commercial-appliance-removal", "office-cleanouts", "demolition-cleanup"],
    image: "/images/crew-action.jpeg",
  },
  {
    slug: "retail-store-junk-removal",
    category: "commercial",
    title: "Retail Store Junk Removal",
    metaTitle: "Retail Store Cleanout San Diego — Fixtures, Shelving, Signage",
    metaDescription:
      "Closing, rebranding, or remodeling? JunkMD+ hauls retail fixtures, shelving, racks, mannequins, and signage. After-hours work to keep your store open daytime.",
    hero: "Fixtures, shelving, mannequins, signage — handled after hours so your store stays open.",
    intro:
      "Retail spaces turn over fast. Whether you're closing, rebranding, or refreshing, JunkMD+ runs after-hours crews to clear the sales floor without interrupting business. " +
      trustParagraph,
    includes: [
      "Slatwall, gridwall, gondola shelving",
      "Display tables and pedestals",
      "Mannequins and forms",
      "Fitting room fixtures and signage",
      "POS counters and back-of-house storage",
    ],
    pricing: "Quoted on-site. Most full-store closeouts are multiple Large Loads.",
    whyJunkMd:
      "Insured, COI-friendly, and used to working in retail centers with strict landlord rules.",
    faqs: [
      { q: "Can you provide a COI to the mall?", a: "Yes. We coordinate with landlords and property managers regularly." },
      { q: "Can you work overnight?", a: "Yes — common for retail." },
    ],
    related: ["commercial-junk-removal", "office-cleanouts", "warehouse-cleanouts", "demolition-cleanup"],
    image: "/images/crew-hero.jpg",
  },
  {
    slug: "construction-debris-removal",
    category: "commercial",
    title: "Construction Debris Removal",
    metaTitle: "Construction Debris Removal San Diego — Job-Site Hauling",
    metaDescription:
      "Drywall, framing scrap, flooring, fixtures, packaging — JunkMD+ hauls construction debris from job sites across San Diego. On-call same-week pickups available.",
    hero: "Drywall, framing scrap, flooring, fixtures, packaging — hauled fast so your job site stays moving.",
    intro:
      "Construction generates debris faster than most dumpsters can handle. JunkMD+ supplements your dumpster strategy with on-call truck pickups, including jobs where a dumpster won't fit. " +
      trustParagraph,
    includes: [
      "Drywall scrap and dust-bagged debris",
      "Framing lumber and trim",
      "Flooring (carpet, tile, vinyl, wood)",
      "Old fixtures and cabinetry",
      "Packaging and pallets",
      "Light demolition debris",
    ],
    pricing: "Per-load or recurring contract pricing for active job sites. Quoted on-site.",
    whyJunkMd:
      "We work on insured, COI-ready, and willing to fit your contractor schedule. Same-day calls are normal for us.",
    faqs: [
      { q: "Do you take concrete?", a: "Yes — see concrete removal. Note: concrete is dense and may run a higher fee per load." },
      { q: "Can you bring a dumpster?", a: "No — JunkMD+ doesn't rent dumpsters. We're a full-service crew: we bring the truck and haul the debris ourselves." },
    ],
    related: ["demolition-cleanup", "renovation-waste", "concrete-removal"],
    image: "/images/renovation-waste.webp",
  },
  {
    slug: "property-management-cleanouts",
    category: "commercial",
    title: "Property Management Cleanouts",
    metaTitle: "Property Management Cleanouts San Diego — Turnovers Made Easy",
    metaDescription:
      "Tenant turnovers, evictions, abandoned units — JunkMD+ partners with San Diego property managers for fast, photo-documented unit clearings. Net terms available.",
    hero: "Tenant turnovers, evictions, and abandoned units — JunkMD+ is your on-call cleanout partner.",
    intro:
      "Property managers need a hauler who shows up on the day, photographs the work, and turns a unit on the timeline. JunkMD+ is a trusted partner for NARPM-affiliated San Diego property managers. " +
      trustParagraph,
    includes: [
      "Full unit cleanouts (apartment, condo, house)",
      "Furniture, appliances, food waste",
      "Abandoned mattresses and personal items",
      "Yard waste and exterior debris",
      "Photo documentation pre/post",
      "COI and net terms available",
    ],
    pricing: "Per-unit quoting. Portfolio discounts for repeat managers (5+ units/month).",
    whyJunkMd:
      "We're a NARPM San Diego Chapter partner. Insured, fast, and used to net-30 invoicing.",
    faqs: [
      { q: "Can you bill on net terms?", a: "Yes — net-30 standard for verified property management clients." },
      { q: "Do you handle hoarder units?", a: "Yes — see our hoarder cleanouts service." },
    ],
    related: ["foreclosure-cleanouts", "hoarder-cleanouts", "estate-cleanout", "commercial-junk-removal"],
    image: "/images/crew-hero.jpg",
  },
  {
    slug: "dumpster-overflow-cleanup",
    category: "commercial",
    title: "Dumpster Overflow Cleanup",
    metaTitle: "Dumpster Overflow Cleanup San Diego — Apartment & HOA Junk Hauling",
    metaDescription:
      "Apartment complexes and HOAs — JunkMD+ clears illegal dumping and dumpster overflow same-week. Recurring contracts available. Photo documentation included.",
    hero: "Apartment dumpster overflowing? Illegal dumping out back? We clear it same-week.",
    intro:
      "Apartment complexes and HOAs deal with dumpster overflow and illegal dumping constantly. JunkMD+ offers same-week response and recurring-contract pricing to keep your trash enclosures and back-of-building areas clear. " +
      trustParagraph,
    includes: [
      "Bulky items left next to dumpsters",
      "Illegal dumping (mattresses, furniture, appliances)",
      "Construction debris dumped by contractors",
      "Photo documentation",
      "Recurring weekly/monthly contracts",
    ],
    pricing: "Per-pickup or monthly recurring. Quoted by complex.",
    whyJunkMd:
      "We respond same-week, document the work, and partner with property management firms across San Diego.",
    faqs: [
      { q: "Can we set up a recurring schedule?", a: "Yes — weekly, biweekly, or monthly. Many of our HOA partners are on auto-pickup." },
      { q: "Do you document for the board?", a: "Yes — pre/post photos delivered digitally with each invoice." },
    ],
    related: ["property-management-cleanouts", "commercial-junk-removal", "yard-waste-removal", "construction-debris-removal"],
    image: "/images/crew-action.jpeg",
  },
  {
    slug: "commercial-appliance-removal",
    category: "commercial",
    title: "Commercial Appliance Removal",
    metaTitle: "Commercial Appliance Removal San Diego — Walk-Ins, Reach-Ins, Ranges",
    metaDescription:
      "Walk-in coolers, reach-in refrigerators, commercial ranges, mixers, dishwashers — JunkMD+ hauls heavy commercial appliances. EPA-compliant freon recovery.",
    hero: "Walk-ins, reach-ins, commercial ranges, mixers — heavy commercial appliances hauled safely.",
    intro:
      "Commercial appliances are bigger, heavier, and harder to move than residential. JunkMD+ has the dollies, the straps, the disassembly skills, and the insurance to handle commercial kitchens, walk-in coolers, and full restaurant closeouts. " +
      trustParagraph,
    includes: [
      "Walk-in coolers and freezers (panel disassembly)",
      "Reach-in commercial refrigerators",
      "Commercial ranges, ovens, fryers, grills",
      "Hood vents and grease traps (we coordinate)",
      "Mixers, slicers, prep equipment",
      "Commercial dishwashers",
    ],
    pricing: "Quoted on-site. Most single-unit pickups fit in Medium load; full kitchens are Large Load or multi-truck.",
    whyJunkMd:
      "We do this work routinely for restaurants, schools, hospitals, and break rooms in commercial buildings.",
    faqs: [
      { q: "Can you handle walk-in cooler disassembly?", a: "Yes — they come apart in insulated panels." },
      { q: "What about hard-plumbed gas lines?", a: "We disconnect what we can; gas line capping should be handled by a licensed plumber." },
    ],
    related: ["restaurant-junk-removal", "office-cleanouts", "appliance-removal", "warehouse-cleanouts"],
    image: "/images/truck-hero.webp",
  },

  // ───────── DEMOLITION ─────────
  {
    slug: "shed-demolition",
    category: "demolition",
    title: "Shed Demolition",
    metaTitle: "Shed Demolition San Diego — Tear-Down & Haul-Away in One Visit",
    metaDescription:
      "Wood, metal, plastic sheds — JunkMD+ demolishes and hauls in one house call. Light demolition crews and proper tools. Concrete pad removal available.",
    hero: "We tear it down. We haul it away. One house call. One flat price.",
    intro:
      "Old backyard sheds rarely come apart cleanly. JunkMD+ brings the sledgehammers, sawzalls, and pry bars to take a shed apart on the spot. " +
      houseCallParagraph,
    includes: [
      "Wooden, metal, vinyl, and plastic sheds",
      "Roofing material disposal",
      "Anchor/foundation removal",
      "Optional concrete pad removal",
      "Cleanup and sweep of the footprint",
    ],
    pricing: "Most shed demos are Medium or Large load tier depending on size and access.",
    whyJunkMd: "Demo + haul in one trip. No separate contractors. No second appointments.",
    faqs: [
      { q: "Concrete pad included?", a: "Yes, as an add-on. See concrete removal." },
      { q: "How long does it take?", a: "Typical shed demo: 1–3 hours." },
    ],
    related: ["shed-removal", "deck-removal", "fence-removal", "concrete-removal"],
    image: "/images/backyard.webp",
  },
  {
    slug: "deck-removal",
    category: "demolition",
    title: "Deck Removal",
    metaTitle: "Deck Removal San Diego — Wooden & Composite Deck Demolition",
    metaDescription:
      "Wooden and composite decks dismantled and hauled away. JunkMD+ handles railings, footings, and surface boards. Light demo crews & flat-rate pricing.",
    hero: "Old wooden or composite decks dismantled and hauled — all in one house call.",
    intro:
      "Decks rot, warp, and become unsafe. JunkMD+ disassembles decks board by board, pulls railings, breaks down framing, and hauls every nail-laden piece away. " +
      houseCallParagraph,
    includes: [
      "Wooden, composite, and Trex decks",
      "Railings, balusters, and stair runs",
      "Footings and post bases (concrete handled as add-on)",
      "Adjacent yard waste / sod regrade prep",
    ],
    pricing: "Quoted by deck square footage and access. Most home decks fall in Medium or Large load tier.",
    whyJunkMd: "Demo + haul, no separate contractors needed.",
    faqs: [
      { q: "Will you remove the concrete footings?", a: "Yes — we can pop most footings out as part of the job." },
      { q: "Will the lawn underneath be okay?", a: "It's usually compacted and pale — we leave it as bare dirt, ready for landscaping." },
    ],
    related: ["shed-removal", "fence-removal", "concrete-removal", "playset-swing-set-removal"],
    image: "/images/backyard.webp",
  },
  {
    slug: "fence-removal",
    category: "demolition",
    title: "Fence Removal",
    metaTitle: "Fence Removal San Diego — Wood, Vinyl, Chain-Link Demolition",
    metaDescription:
      "Wood, vinyl, chain-link, wrought-iron — JunkMD+ tears out old fences and hauls every panel and post in one house call. Concrete footing removal available.",
    hero: "Wood, vinyl, chain-link, wrought-iron — old fences torn out and hauled in one visit.",
    intro:
      "Replacing a fence? Get the old one out first, cleanly. JunkMD+ pulls fence panels, dig-outs posts, and hauls every nail-and-staple piece away. " +
      houseCallParagraph,
    includes: [
      "Wood, vinyl, chain-link, wrought-iron fencing",
      "Posts and concrete footings",
      "Gates and gate hardware",
      "Adjacent landscaping debris",
    ],
    pricing: "Quoted by linear footage. Most residential fence pulls are Medium or Large load.",
    whyJunkMd: "Demo + haul, one crew, one trip.",
    faqs: [
      { q: "Will you remove the concrete footings?", a: "Yes — included or available as an add-on depending on size." },
      { q: "Do you install new fence?", a: "We don't install — we tear out and haul, so your fence contractor walks into a clean prep." },
    ],
    related: ["deck-removal", "shed-removal", "concrete-removal", "yard-waste-removal"],
    image: "/images/backyard.webp",
  },
  {
    slug: "playset-swing-set-removal",
    category: "demolition",
    title: "Playset & Swing Set Removal",
    metaTitle: "Playset & Swing Set Removal San Diego — Kids Outgrew It? We Haul It",
    metaDescription:
      "Wooden swing sets, metal playsets, trampolines, basketball hoops — JunkMD+ disassembles and hauls in one house call. Eco-friendly disposal.",
    hero: "Kids outgrew it? We disassemble and haul the whole playset in one house call.",
    intro:
      "Backyard playsets are heavy, anchored, and a pain to disassemble alone. JunkMD+ handles wooden swing sets, metal climb-frames, trampolines, and basketball hoops in one visit. " +
      houseCallParagraph,
    includes: [
      "Wooden swing sets (Rainbow, Cedar Summit, custom)",
      "Metal playsets",
      "Trampolines and trampoline enclosures",
      "Basketball hoops (portable and in-ground)",
      "Sandboxes and playhouses",
    ],
    pricing: "Quoted by size. Most playsets fit in Small or Medium load tier.",
    whyJunkMd: "Disassembly + haul in one trip. No tools needed on your end.",
    faqs: [
      { q: "What about in-ground basketball hoops?", a: "Yes — we can cut at the base or extract depending on access." },
      { q: "Will you donate?", a: "If the playset is in good shape, we'll try to find it a home." },
    ],
    related: ["shed-removal", "deck-removal", "yard-waste-removal", "exercise-equipment-removal"],
    image: "/images/backyard.webp",
  },
  {
    slug: "concrete-removal",
    category: "demolition",
    title: "Concrete Removal",
    metaTitle: "Concrete Removal San Diego — Slab & Driveway Demolition",
    metaDescription:
      "Old concrete slabs, walkways, driveways, footings, patios — JunkMD+ breaks up and hauls concrete in one house call. Eco-friendly disposal at certified concrete recyclers.",
    hero: "Old slabs, walkways, footings, patios — broken up and hauled in one house call.",
    intro:
      "Concrete is heavy, dense, and most haulers won't touch it. JunkMD+ has the breakers, the trucks, and the disposal relationships to take old concrete to certified recyclers where it's crushed into new road base. " +
      houseCallParagraph,
    includes: [
      "Slab patios and walkways",
      "Driveway sections",
      "Footings (deck, shed, fence)",
      "Curb fragments",
      "Sidewalk panels",
    ],
    pricing: "Concrete is dense; pricing is by cubic yard / weight. Quoted on-site.",
    whyJunkMd: "We recycle concrete at certified crushers, not landfills.",
    faqs: [
      { q: "Can you break up a driveway?", a: "Yes — we bring jackhammers / electric breakers for residential-scale work. For major commercial demo we partner with heavy-equipment crews." },
      { q: "Will you damage adjacent landscaping?", a: "We're careful, but concrete demo is loud and dusty. We tarp adjacent areas where possible." },
    ],
    related: ["deck-removal", "shed-removal", "fence-removal", "demolition-cleanup"],
    image: "/images/renovation-waste.webp",
  },
  {
    slug: "kitchen-demolition",
    category: "demolition",
    title: "Kitchen Demolition",
    metaTitle: "Kitchen Demolition San Diego — Cabinets, Countertops, Tile, Appliances",
    metaDescription:
      "Renovating? JunkMD+ rips out kitchen cabinets, countertops, tile, flooring, and appliances in one visit so your contractor walks into a clean shell.",
    hero: "Cabinets, countertops, tile, flooring, appliances — torn out and hauled so your remodeler walks into a clean shell.",
    intro:
      "Kitchen demo is messy. JunkMD+ removes cabinets, countertops, tile backsplash, vinyl/tile flooring, and disconnects appliances. We deliver a stripped kitchen ready for your contractor. " +
      houseCallParagraph,
    includes: [
      "Upper and lower cabinets",
      "Countertops (laminate, granite, quartz, tile)",
      "Tile backsplash and floor tile",
      "Appliances (we disconnect plug-in / standard hookups)",
      "Sink, faucet, garbage disposal (water lines should be capped by a plumber)",
    ],
    pricing: "Most full kitchen demos are Large Load tier or multi-load.",
    whyJunkMd: "We're not a demo crew that leaves a mess. We sweep, we haul, we leave a clean kitchen shell.",
    faqs: [
      { q: "Do you handle plumbing?", a: "We disconnect basic plumbing but won't cap gas / water lines — leave that to your licensed plumber." },
      { q: "Will you take the appliances?", a: "Yes — see our appliance removal service." },
    ],
    related: ["bathroom-demolition", "flooring-removal", "drywall-removal", "renovation-waste"],
    image: "/images/renovation-waste.webp",
  },
  {
    slug: "bathroom-demolition",
    category: "demolition",
    title: "Bathroom Demolition",
    metaTitle: "Bathroom Demolition San Diego — Tile, Tubs, Vanities, Toilets",
    metaDescription:
      "Tile, tubs, vanities, toilets, mirrors — JunkMD+ rips out a bathroom in one visit so your remodeler can start fresh. Insured, flat-rate pricing.",
    hero: "Tile, tubs, vanities, toilets, mirrors — torn out and hauled so your remodeler can start fresh.",
    intro:
      "Bathroom demo is tile, tubs, and tight spaces. JunkMD+ comes in, removes the fixtures and finishes, and hauls every shard, sheetrock chunk, and old vanity drawer to the truck. " +
      houseCallParagraph,
    includes: [
      "Tile (floor and shower)",
      "Tubs and shower surrounds (acrylic, fiberglass, cast iron)",
      "Vanities and mirrors",
      "Toilets and sinks",
      "Medicine cabinets",
    ],
    pricing: "Most bathroom demos are Medium or Large load tier depending on size and fixtures.",
    whyJunkMd: "Insured for water-line areas, careful around adjacent rooms, clean exit.",
    faqs: [
      { q: "Do you handle plumbing disconnect?", a: "Basic disconnect yes; gas / shutoff capping requires a plumber." },
      { q: "What about an old cast-iron tub?", a: "Yes — we've removed plenty. They're heavy and require two crew, but we handle them." },
    ],
    related: ["kitchen-demolition", "flooring-removal", "drywall-removal", "renovation-waste"],
    image: "/images/renovation-waste.webp",
  },
  {
    slug: "flooring-removal",
    category: "demolition",
    title: "Flooring Removal",
    metaTitle: "Flooring Removal San Diego — Tile, Vinyl, Laminate, Hardwood Ripped Up",
    metaDescription:
      "Tile, vinyl, laminate, hardwood — JunkMD+ rips up old flooring and hauls every staple, nail, and tack strip. Subfloor ready for your installer.",
    hero: "Tile, vinyl, laminate, hardwood — old flooring ripped up and hauled, subfloor ready for install.",
    intro:
      "Old flooring is glued, nailed, stapled, and mortared down. JunkMD+ brings the chisels, scrapers, jackhammers, and pry bars to get it up cleanly. " +
      houseCallParagraph,
    includes: [
      "Tile floors (with thinset scrape-down available)",
      "Vinyl and linoleum (sheet and tile)",
      "Laminate and engineered wood",
      "Hardwood (nailed and floating)",
      "Cork, bamboo, and specialty floors",
    ],
    pricing: "Quoted by square footage. Most home flooring jobs fall in Medium or Large load.",
    whyJunkMd: "We get the floor down to subfloor — not just the top layer.",
    faqs: [
      { q: "Will you scrape the thinset?", a: "Yes — for an additional fee depending on adhesion. Some thinset is light, some is brutal." },
      { q: "Do you handle asbestos VAT tile?", a: "No — VAT (vinyl asbestos tile) requires a licensed abatement contractor. We'll point you to one." },
    ],
    related: ["carpet-removal", "kitchen-demolition", "bathroom-demolition", "renovation-waste"],
    image: "/images/renovation-waste.webp",
  },
  {
    slug: "drywall-removal",
    category: "demolition",
    title: "Drywall Removal",
    metaTitle: "Drywall Removal San Diego — Demo & Debris Haul-Away",
    metaDescription:
      "Renovating? JunkMD+ tears out old drywall and hauls every sheet, screw, and dust pile. Insured and ready to coordinate with your contractor.",
    hero: "Old drywall torn out — sheets, screws, joint compound, and dust hauled cleanly.",
    intro:
      "Drywall demo creates a mountain of debris fast. JunkMD+ tears out walls, bags the debris, and hauls it all in one trip — leaving studs exposed and ready for new work. " +
      houseCallParagraph,
    includes: [
      "Drywall sheets and joint compound",
      "Insulation behind walls (case by case)",
      "Trim and baseboards adjacent to demo",
      "Bagging and on-site debris control",
    ],
    pricing: "Quoted by square footage. Single-room demo typically Medium load.",
    whyJunkMd: "Clean, contained demo — we tarp the rest of the house and clean up before we leave.",
    faqs: [
      { q: "Asbestos drywall — what's the protocol?", a: "Pre-1980 homes may have asbestos in joint compound. If suspected, we recommend testing first; we don't do abatement." },
      { q: "Can you frame the new wall?", a: "We're demo + haul. Framing is your contractor." },
    ],
    related: ["kitchen-demolition", "bathroom-demolition", "renovation-waste", "construction-debris-removal"],
    image: "/images/renovation-waste.webp",
  },

  // ───────── ECO ─────────
  {
    slug: "recycling-services",
    category: "eco",
    title: "Recycling Services",
    metaTitle: "Recycling Services San Diego — Eco-Friendly Junk Recycling",
    metaDescription:
      "JunkMD+ recycles everything we possibly can — metal, electronics, cardboard, mattresses. We route to certified San Diego recyclers, not landfills.",
    hero: "We route everything we can to certified recyclers — metal, electronics, cardboard, mattresses, wood.",
    intro:
      "Eco-friendly isn't a sticker we slap on the truck — it's how we sort every job. JunkMD+ routes recyclable material to certified San Diego recyclers before anything goes to a landfill. Most of what we haul finds a second life. " +
      houseCallParagraph,
    includes: [
      "Metals (steel, aluminum, copper, scrap)",
      "Electronics (TVs, monitors, computers — see e-waste)",
      "Cardboard and clean paper",
      "Mattresses (foam, fabric, springs, frames recycled separately)",
      "Wood (clean wood goes to chippers / reuse)",
      "Concrete (crushed for road base — see concrete removal)",
      "Plastics (rigid plastics where accepted)",
    ],
    pricing: "Recycling is bundled into our flat-rate haul pricing. You pay one fee — we route to the right facility.",
    whyJunkMd: "Less than 15% of a typical haul actually hits the landfill. The rest gets reused, recycled, or donated.",
    faqs: [
      { q: "Will you take just recyclables?", a: "We can — minimum pickup applies." },
      { q: "What gets recycled vs trashed?", a: "We separate at our yard. Metal, electronics, wood, mattresses, and cardboard go to recyclers. Mixed contaminated waste goes to landfill." },
    ],
    related: ["eco-friendly-junk-removal", "scrap-metal-removal", "e-waste-disposal", "donation-pickup"],
    image: "/images/truck-hero.webp",
  },
  {
    slug: "donation-pickup",
    category: "eco",
    title: "Donation Pickup & Drop-Off",
    metaTitle: "Donation Pickup San Diego — Goodwill & Salvation Army Drop-Off",
    metaDescription:
      "Got furniture, clothes, or appliances still in good shape? JunkMD+ picks them up and drops them off at Goodwill, Salvation Army, or local charities — free with any haul.",
    hero: "Got items still in good shape? We pick them up and drop them off at Goodwill, Salvation Army, or a local charity.",
    intro:
      "When items have life left, they don't belong in the landfill. JunkMD+ delivers usable items to Goodwill, the Salvation Army, and other local San Diego charities. " +
      houseCallParagraph,
    includes: [
      "Furniture in usable condition",
      "Clothing and textiles",
      "Working appliances",
      "Books and media",
      "Kitchenware and small electronics",
      "Sporting goods and toys",
    ],
    pricing: "Donation drop-off is bundled into our haul fee at no extra cost.",
    whyJunkMd: "We have running relationships with multiple local charities and know what each accepts.",
    faqs: [
      { q: "Can you bring a donation receipt?", a: "Yes — we deliver receipts when the charity issues one." },
      { q: "What if no charity wants it?", a: "Then it gets recycled or, last resort, landfilled. We try every option." },
    ],
    related: ["recycling-services", "eco-friendly-junk-removal", "estate-cleanout", "furniture-removal"],
    image: "/images/crew-action.jpeg",
  },
  {
    slug: "e-waste-disposal",
    category: "eco",
    title: "E-Waste Disposal",
    metaTitle: "E-Waste Disposal San Diego — Certified Electronics Recycling",
    metaDescription:
      "Old TVs, computers, monitors, printers, phones — JunkMD+ routes all e-waste to California-certified recyclers. Data-destruction available on request.",
    hero: "TVs, computers, monitors, printers — routed to California-certified e-waste recyclers.",
    intro:
      "California treats electronics as hazardous waste — you can't put them in the regular trash. JunkMD+ takes them all to certified e-waste recyclers where they're dismantled and the materials are recovered properly. " +
      houseCallParagraph,
    includes: [
      "All TVs (CRT and flat-panel)",
      "Computers, monitors, laptops",
      "Printers, scanners, copiers",
      "Phones, tablets, small electronics",
      "Cables, keyboards, mice, hubs",
      "Server gear and network equipment",
      "Data destruction on request",
    ],
    pricing: "Single-item TV/electronics pickup starts at $79. Office e-waste batches fit in Small or Medium load.",
    whyJunkMd: "California-compliant from pickup through recycler delivery.",
    faqs: [
      { q: "Do you wipe data?", a: "Yes — drive wipe or physical destruction available." },
      { q: "Are CRT TVs free?", a: "California recyclers accept CRTs at no extra fee. Our pickup fee covers labor and transport." },
    ],
    related: ["tv-electronics-disposal", "recycling-services", "scrap-metal-removal", "office-cleanouts"],
    image: "/images/truck-hero.webp",
  },
  {
    slug: "scrap-metal-removal",
    category: "eco",
    title: "Scrap Metal Removal",
    metaTitle: "Scrap Metal Removal San Diego — Steel, Aluminum, Copper Hauled",
    metaDescription:
      "Steel, aluminum, copper, brass — JunkMD+ hauls scrap metal to certified recyclers. Job-site cleanup, appliance metal, and home cleanouts.",
    hero: "Steel, aluminum, copper, brass — hauled to certified recyclers.",
    intro:
      "Scrap metal is dense, sometimes valuable, and always recyclable. JunkMD+ hauls residential and commercial scrap to certified recyclers where it goes back into the supply chain. " +
      houseCallParagraph,
    includes: [
      "Steel (rebar, framing, fencing)",
      "Aluminum (siding, screens, gutters)",
      "Copper (wire, pipe)",
      "Brass and bronze fixtures",
      "Old appliances (steel + copper recovered)",
      "Catalytic converters / car parts (case by case)",
    ],
    pricing: "Bundled into haul pricing. Large industrial scrap can sometimes credit against the haul fee — ask during the quote.",
    whyJunkMd: "We have running relationships with San Diego scrap yards and know which metals fetch credits.",
    faqs: [
      { q: "Can I get paid for my scrap?", a: "On large enough loads, yes — credits offset the haul fee. We never pretend you owe more than market." },
      { q: "Do you take car parts?", a: "Yes for most car parts, no for fluid-containing systems (those need a body shop)." },
    ],
    related: ["recycling-services", "e-waste-disposal", "appliance-removal", "construction-debris-removal"],
    image: "/images/truck-hero.webp",
  },

  // ───────── WHAT WE TAKE ─────────
  {
    slug: "large-item-removal",
    category: "what-we-take",
    title: "Large Item Removal & Hauling",
    metaTitle: "Large Item Removal San Diego — Pianos, Safes, Pool Tables, Hot Tubs",
    metaDescription:
      "Pianos, safes, pool tables, hot tubs, exercise equipment — JunkMD+ hauls the heavy and awkward stuff most haulers won't touch. Insured, flat-rate.",
    hero: "Pianos, safes, pool tables, hot tubs, exercise equipment — we haul the heavy stuff most haulers won't.",
    intro:
      "Some items break a one-person hauler's back. Pianos. Safes. Pool tables. Hot tubs. JunkMD+ brings crew, dollies, and the experience to move them safely without damaging your floors or walls. " +
      houseCallParagraph,
    includes: [
      "Upright and grand pianos",
      "Gun safes and floor safes (we'll need access)",
      "Pool tables (with disassembly)",
      "Hot tubs (see hot tub removal)",
      "Treadmills, ellipticals, weight benches",
      "Industrial workshop equipment",
    ],
    pricing: "Custom-quoted by weight, access, and complexity. Most large-item jobs start in Medium load tier.",
    whyJunkMd: "We bring extra crew for heavy work. No surprise upcharge when we arrive.",
    faqs: [
      { q: "Can you take a piano upstairs?", a: "Down, usually. Up, sometimes — depends on stairs and piano type." },
      { q: "Do you donate pianos?", a: "When possible — many pianos no longer have a donation home, sadly. We'll discuss during the quote." },
    ],
    related: ["furniture-removal", "exercise-equipment-removal", "hot-tub-removal", "appliance-removal"],
    image: "/images/clear-your-space.jpg",
  },
  {
    slug: "renovation-waste",
    category: "what-we-take",
    title: "Renovation Waste Removal",
    metaTitle: "Renovation Waste Removal San Diego — Drywall, Flooring, Cabinets Hauled",
    metaDescription:
      "Drywall, flooring, cabinets, fixtures, packaging — JunkMD+ hauls renovation debris from active job sites. On-call same-week pickup.",
    hero: "Active renovation? We're on-call for same-week debris pickup so your contractor keeps moving.",
    intro:
      "Big renovations create big piles. JunkMD+ supplements your dumpster strategy with on-call pickups — perfect for jobs where the dumpster filled up faster than expected. " +
      trustParagraph,
    includes: [
      "Drywall, framing scrap, insulation",
      "Flooring (carpet, vinyl, tile, wood)",
      "Cabinets and countertops",
      "Bathtubs, sinks, toilets",
      "Packaging, pallets, jobsite waste",
    ],
    pricing: "Per-load pricing. Recurring contracts available for active job sites.",
    whyJunkMd: "Insured, COI-ready, willing to work on contractor schedules.",
    faqs: [
      { q: "Same-day pickup?", a: "Often yes — call early in the day." },
      { q: "Do you handle concrete?", a: "Yes — see concrete removal. (Note: concrete pricing is by weight.)" },
    ],
    related: ["construction-debris-removal", "demolition-cleanup", "drywall-removal", "flooring-removal"],
    image: "/images/renovation-waste.webp",
  },
  {
    slug: "exercise-equipment-removal",
    category: "what-we-take",
    title: "Exercise Equipment Removal",
    metaTitle: "Exercise Equipment Removal San Diego — Treadmills, Weights, Ellipticals",
    metaDescription:
      "Treadmills, ellipticals, Peloton bikes, weight benches, Bowflex, racks — JunkMD+ disassembles and hauls home gym equipment in one house call.",
    hero: "Treadmills, ellipticals, Pelotons, weight benches, racks — disassembled and hauled in one house call.",
    intro:
      "Home gym equipment is heavy and most haulers won't touch a 300-pound treadmill. JunkMD+ disassembles, lifts, and hauls everything in one visit — including from upstairs bedrooms and basements. " +
      houseCallParagraph,
    includes: [
      "Treadmills (folding and non-folding)",
      "Ellipticals and stair climbers",
      "Stationary bikes and Pelotons",
      "Weight benches, Bowflex, Total Gym",
      "Weight racks, dumbbells, plates, kettlebells",
      "Rowing machines",
    ],
    pricing: "Single-item curbside pickup starts at $79. Multi-piece home gyms typically Small or Medium load.",
    whyJunkMd: "We disassemble on-site. Stairs are not a problem.",
    faqs: [
      { q: "Will you donate working equipment?", a: "Yes — Goodwill and local fitness charities take a lot of it." },
      { q: "Pelotons specifically?", a: "Yes. We've hauled hundreds." },
    ],
    related: ["furniture-removal", "garage-cleanout", "large-item-removal", "appliance-removal"],
    image: "/images/clear-your-space.jpg",
  },
  {
    slug: "cardboard-removal",
    category: "what-we-take",
    title: "Cardboard Removal",
    metaTitle: "Cardboard Removal San Diego — Moving Box & Packaging Haul-Away",
    metaDescription:
      "Just moved in? Just had a big shipment? JunkMD+ hauls flattened moving boxes, shipping cardboard, and packaging — all recycled.",
    hero: "Just moved in or just had a big shipment? We haul stacks of cardboard — all recycled.",
    intro:
      "Cardboard piles up fast — moving boxes, big appliance boxes, online order packaging. JunkMD+ hauls every flattened sheet and routes it to recycling. " +
      houseCallParagraph,
    includes: [
      "Moving boxes (flattened or unflattened)",
      "Appliance and furniture cardboard",
      "Shipping packaging",
      "Office cardboard",
      "Bubble wrap and packing foam (recycled where possible)",
    ],
    pricing: "Small Load tier ($197–329) typically covers a household worth of moving boxes.",
    whyJunkMd: "We flatten on-site if you didn't, and everything goes to a recycler.",
    faqs: [
      { q: "Will you take it if it's not flattened?", a: "Yes — we'll flatten on-site." },
      { q: "What about packing peanuts?", a: "Yes — we bag and dispose. Some can be recycled, some can't." },
    ],
    related: ["recycling-services", "office-cleanouts", "house-cleanout", "yard-waste-removal"],
    image: "/images/crew-action.jpeg",
  },
  {
    slug: "pallet-removal",
    category: "what-we-take",
    title: "Pallet Removal",
    metaTitle: "Pallet Removal San Diego — Wooden Pallet Pickup & Recycling",
    metaDescription:
      "Old wooden pallets piling up at your warehouse, business, or job site? JunkMD+ hauls them for recycling or chip-and-mulch. Recurring pickups available.",
    hero: "Old wooden pallets piling up? We haul them for recycling or chip-and-mulch.",
    intro:
      "Pallets accumulate fast at warehouses, retail back rooms, and active job sites. JunkMD+ hauls them by the load and routes them to chip-and-mulch facilities or pallet recyclers. " +
      trustParagraph,
    includes: [
      "Wood pallets (standard sizes)",
      "Plastic pallets",
      "Broken or splintered pallets",
      "Pallet shrink wrap",
      "Pallet collars and pallet boxes",
    ],
    pricing: "Per-load pricing or recurring monthly contracts for active warehouses.",
    whyJunkMd: "We can come weekly if needed.",
    faqs: [
      { q: "Can you do weekly pickups?", a: "Yes — many of our warehouse partners are on weekly auto-pickup." },
      { q: "Will you bring back empties?", a: "Generally no — we recycle, we don't operate a pallet exchange." },
    ],
    related: ["warehouse-cleanouts", "construction-debris-removal", "recycling-services", "cardboard-removal"],
    image: "/images/truck-hero.webp",
  },
  {
    slug: "property-cleanout",
    category: "what-we-take",
    title: "Property Cleanout",
    metaTitle: "Property Cleanout San Diego — Whole-Property Clearing",
    metaDescription:
      "Whole-property clearing — house, yard, garage, shed, attic, basement. JunkMD+ handles every room in one coordinated multi-day cleanout if needed.",
    hero: "Whole-property clearing — house, yard, garage, shed, attic, basement — coordinated in one project.",
    intro:
      "When the whole property needs to come out — for sale, for probate, for a tenant turnover — JunkMD+ runs multi-day, multi-truck cleanouts as one coordinated project. " +
      trustParagraph,
    includes: [
      "Full interior cleanout (every room)",
      "Garage, shed, attic, basement",
      "Yard waste and exterior debris",
      "Appliances and furniture",
      "Donation handling",
      "Photo documentation",
    ],
    pricing: "Multi-truck, multi-day quoted on-site.",
    whyJunkMd: "We run the whole project — no juggling vendors.",
    faqs: [
      { q: "How many days?", a: "Typical full-property: 1–3 days." },
      { q: "Same crew throughout?", a: "Whenever possible — continuity matters." },
    ],
    related: ["estate-cleanout", "hoarder-cleanouts", "foreclosure-cleanouts", "house-cleanout"],
    image: "/images/crew-hero.jpg",
  },
  {
    slug: "same-day-junk-removal",
    category: "what-we-take",
    title: "Same-Day Junk Removal",
    metaTitle: "Same-Day Junk Removal San Diego — On Site Within Hours",
    metaDescription:
      "Need it gone today? JunkMD+ runs same-day junk removal across San Diego — on site within hours. Call early, book online, save $20 on your first appointment.",
    hero: "Need it gone today? Call early. We're on site within hours.",
    intro:
      "Same-day junk removal is what we're known for. Call us before noon and we'll usually have a crew at your door before dinner. " +
      houseCallParagraph,
    includes: [
      "Furniture and mattresses",
      "Appliances and electronics",
      "Yard waste",
      "Garage and storage contents",
      "Just about anything legal to haul",
    ],
    pricing: "Same flat-rate tier pricing — no rush surcharge.",
    whyJunkMd: "Same-day, no rush fee. Our trucks are out every day.",
    faqs: [
      { q: "How early should I call?", a: "Morning is best. Mid-afternoon same-day is sometimes still possible." },
      { q: "Saturdays?", a: "Yes — Mon-Sat, same-day available." },
    ],
    related: ["furniture-removal", "appliance-removal", "yard-waste-removal", "garage-cleanout"],
    image: "/images/truck-hero.webp",
  },
  {
    slug: "couch-removal",
    category: "what-we-take",
    title: "Couch Removal",
    metaTitle: "Couch Removal San Diego — Sofas & Sectionals Hauled (Starting $85)",
    metaDescription:
      "Couches, sectionals, sleeper sofas, loveseats — JunkMD+ hauls them out of any room. Starting at $85 for single curbside. Save $20 on first appointment.",
    hero: "Couches, sectionals, sleeper sofas — out of the living room and gone today. Starting at $85.",
    intro:
      "Old couches are heavy, awkward through doorways, and a pain to dispose of. JunkMD+ shows up, lifts, hauls, and disposes — including sleeper sofas with steel frames. " +
      houseCallParagraph,
    includes: [
      "Sofas, loveseats, sectionals",
      "Sleeper sofas (with steel frame removal)",
      "Recliners and lift chairs",
      "Futons and convertible beds",
      "Couch cushions and frames",
    ],
    pricing: "Single couch curbside pickup starts at $85. Sectionals and sleeper sofas typically Small Load.",
    whyJunkMd: "We get couches through tight doorways without dinging your walls.",
    faqs: [
      { q: "What if it won't fit through the door?", a: "We can sometimes disassemble or remove a door. We've handled tougher than you think." },
      { q: "Bedbugs?", a: "We'll discuss — wrap and haul protocols apply." },
    ],
    related: ["furniture-removal", "mattress-disposal", "estate-cleanout", "house-cleanout"],
    image: "/images/clear-your-space.jpg",
  },
];

export const SERVICE_BY_SLUG = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s] as const),
);

export function servicesByCategory(cat: ServiceCategory) {
  return SERVICES.filter((s) => s.category === cat);
}
