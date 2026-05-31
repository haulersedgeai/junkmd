export interface Location {
  slug: string;            // URL slug (matches existing junkmd.com where possible)
  name: string;            // display name
  zips?: string[];
  neighborhoods?: string[];
  landmarks?: string[];
  highways?: string[];
  intro: string;
  localSections?: { heading: string; body: string }[];
  faqOverrides?: { q: string; a: string }[];
}

const SD_LANDMARKS = ["Balboa Park", "San Diego Zoo", "USS Midway", "Petco Park", "Mission Bay"];
const COASTAL_LANDMARKS = ["Sunset Cliffs", "La Jolla Cove", "Pacific Beach Pier", "Cabrillo National Monument"];

export const LOCATIONS: Location[] = [
  // ───── Existing 42 (rebuilt) ─────
  { slug: "junk-removal-san-diego", name: "San Diego", zips: ["92101", "92103", "92104", "92106"], neighborhoods: ["Downtown", "Gaslamp", "East Village", "Hillcrest", "Bankers Hill"], landmarks: SD_LANDMARKS, highways: ["I-5", "I-805", "CA-163"], intro: "San Diego — JunkMD+'s home base. From downtown high-rises to Hillcrest condos to single-family homes in Bankers Hill, we've cleared just about every kind of property in the city." },
  {
    slug: "junk-removal-la-jolla",
    name: "La Jolla",
    zips: ["92037"],
    neighborhoods: ["La Jolla Village", "La Jolla Shores", "Bird Rock", "Mount Soledad", "Windansea"],
    landmarks: ["La Jolla Cove", "Scripps Pier", "Torrey Pines"],
    highways: ["I-5", "La Jolla Village Dr"],
    intro: "La Jolla jobs run an unusual range — oceanfront estates above Windansea, mid-century homes on Mount Soledad, condos packed into The Village. We've hauled here long enough to know the quirks: narrow streets, short steep driveways, and a lot of work sitting behind HOA gates or in buildings with freight-elevator rules. We plan for that before the truck shows up.",
    localSections: [
      {
        heading: "Getting a truck into La Jolla",
        body: "Coastal La Jolla isn't built for big trucks. Around The Village and the Shores, parking is tight and time-limited, so we scout the approach and bring the right-size vehicle rather than block a lane for an hour. On the hillside lots near Mount Soledad and Bird Rock, the challenge is driveway grade and carry distance — we'd rather send a third crew member than risk a scrape on a tight turn. In a gated community or a condo tower, tell us the gate code and elevator situation when you book and we'll handle the building's COI or reservation paperwork ahead of time.",
      },
      {
        heading: "The work we do most here",
        body: "A lot of our La Jolla jobs come through realtors and property managers prepping a home for sale, and from families clearing an estate. Both deserve a careful hand: we set keepsakes aside, document before-and-after, and donate what still has life through Goodwill and the Salvation Army rather than defaulting to the landfill. Whether it's one oceanview condo's worth of old furniture or a full multi-level estate, you get a flat quote up front and a crew that leaves the place swept.",
      },
    ],
    faqOverrides: [
      { q: "Can you handle pickups in gated La Jolla communities and condo buildings?", a: "Yes, regularly. Share the gate code, building access rules, and any elevator or COI requirements when you book, and we'll have the paperwork sorted before we arrive." },
      { q: "Do you charge extra for the tight streets and steep driveways?", a: "No surprise surcharges. Pricing is volume-based — what you pay depends on how much we haul, not how tricky the access is. You approve the flat quote before we start." },
      { q: "I'm a realtor on a tight listing timeline — how fast can you come?", a: "Often same or next day. A big share of our La Jolla work is listing prep and estate clear-outs on deadline. Text photos for a quick quote and we'll usually get you a 2-hour arrival window fast." },
      { q: "What happens to items removed from a La Jolla home?", a: "We donate anything reusable to local charities, recycle what we can, and dispose of the rest responsibly. Most jobs here are furniture and household goods that are easy to rehome." },
    ],
  },
  {
    slug: "junk-removal-pacific-beach",
    name: "Pacific Beach",
    zips: ["92109"],
    neighborhoods: ["North PB", "Crown Point", "Mission Beach", "Sail Bay"],
    landmarks: ["PB Pier", "Crystal Pier", "Mission Bay"],
    highways: ["I-5", "Mission Bay Dr"],
    intro: "Pacific Beach runs on turnover — vacation rentals flipping between guests, students moving in and out near Garnet, beach cottages getting cleared for the next tenant. Most of the work here happens in tight alleys and up narrow cottage stairwells, with street parking that's gone by mid-morning. We bring the right-size truck and know which alleys we can actually fit down.",
    localSections: [
      { heading: "Working PB's alleys and rentals", body: "Most Pacific Beach homes load from the alley, not the street, and a lot of them are duplexes and triplexes with units stacked up narrow exterior stairs. We're set up for it — smaller trucks that fit the alley, crews that don't mind the stairs, and timing that works around PB's mid-morning parking crunch. For landlords and property managers turning a unit between tenants, we can do same-week cleanouts and send before-and-after photos for your records." },
      { heading: "Rental turnovers and student moves", body: "A big share of our PB jobs are end-of-lease cleanouts — furniture a tenant left behind, mattresses, the contents of a garage nobody dealt with. We donate what's reusable through Goodwill and the Salvation Army and recycle what we can, so a move-out doesn't just become a dumpster run. Flat quote up front, and you only pay for the volume we actually haul." },
    ],
    faqOverrides: [
      { q: "Can you get a truck down the alley to my PB place?", a: "Almost always — we run trucks sized for Pacific Beach's alleys and know which ones are too tight. Tell us the cross streets when you book and we'll confirm the approach." },
      { q: "Do you do rental turnovers for landlords and property managers?", a: "Yes, regularly. We handle end-of-tenancy cleanouts on short notice and can send before-and-after photos for your records. A lot of our PB work is exactly this." },
      { q: "I'm on a second-floor beach cottage — can you carry it all down?", a: "Yes. Stair carries are routine here. Pricing is volume-based, not by effort or floor, so the stairs don't change your quote — you approve a flat price before we start." },
      { q: "What happens to the stuff after pickup?", a: "We donate anything reusable to local charities, recycle what we can, and dispose of the rest responsibly. Most PB jobs are furniture and household goods that are easy to rehome." },
    ],
  },
  { slug: "junk-removal-ocean-beach", name: "Ocean Beach", zips: ["92107"], neighborhoods: ["OB Village", "Sunset Cliffs"], landmarks: ["OB Pier", "Sunset Cliffs Natural Park"], highways: ["I-8", "Sunset Cliffs Blvd"], intro: "OB's narrow streets and beach cottages need a hauler who knows how to maneuver. JunkMD+ trucks fit where bigger trucks won't." },
  {
    slug: "junk-removal-point-loma",
    name: "Point Loma",
    zips: ["92106"],
    neighborhoods: ["La Playa", "Roseville", "Wooded Area"],
    landmarks: ["Cabrillo National Monument", "Liberty Station"],
    highways: ["I-5", "Catalina Blvd"],
    intro: "Point Loma homes tend to be older, larger, and built into the hillside — La Playa down by the water, Roseville, the Wooded Area up the slope. That means stair work and long carries are the norm here, not the exception. We staff and plan for it before the truck arrives so a hillside job doesn't turn into an all-day ordeal.",
    localSections: [
      { heading: "Hillside homes and stair carries", body: "A lot of Point Loma's character comes from being built up a hill, which is great for the views and hard on a junk haul. Long stair runs, split-level layouts, and homes set well above or below the street are routine for us. We'll send the crew size the job actually needs rather than undermanning it, and we protect floors and walls on the way out. If access is genuinely tricky, tell us when you book and we'll plan the approach." },
      { heading: "Older homes, garages, and estates", body: "Point Loma's established homes often mean decades of accumulation — a garage that hasn't been cleared in years, an estate that needs emptying, a remodel's worth of old fixtures and debris. We handle the full range, set keepsakes aside on estate jobs, and donate what still has life rather than defaulting to the landfill. You get a flat quote up front and a crew that leaves the place swept." },
    ],
    faqOverrides: [
      { q: "My Point Loma home is up a long flight of stairs — is that a problem?", a: "No — hillside stair carries are the norm here and we staff for them. Pricing is volume-based, so the stairs and carry distance don't change your quote. You approve a flat price before we start." },
      { q: "Can you clear out a full garage or estate?", a: "Yes, that's a lot of our Point Loma work. We handle everything from a single garage to a full multi-level estate, set aside keepsakes, and donate what's reusable." },
      { q: "How fast can you get to Point Loma?", a: "Often same or next day. Text photos of what needs to go for a quick quote and we'll usually get you a 2-hour arrival window fast." },
      { q: "Do you donate or just dump?", a: "We donate everything that still has life through Goodwill, the Salvation Army, and other local charities, and recycle what we can. Only what's genuinely unusable hits the landfill." },
    ],
  },
  {
    slug: "junk-removal-del-mar",
    name: "Del Mar",
    zips: ["92014"],
    neighborhoods: ["Del Mar Village", "Del Mar Heights", "Del Mar Mesa"],
    landmarks: ["Del Mar Racetrack", "Del Mar Fairgrounds"],
    highways: ["I-5", "Camino Del Mar"],
    intro: "Del Mar jobs lean toward larger coastal homes, hillside lots with ocean views, and a steady stream of realtor and property-manager work prepping homes to sell. Access is often a steep driveway or a gated entrance, and timelines are frequently tight around a listing. We quote flat, plan the access, and move fast when a sale's on the clock.",
    localSections: [
      { heading: "Hillside lots and gated entrances", body: "A lot of Del Mar's homes sit on slopes for the view, which means steep driveways, long carries, and the occasional gated entrance or HOA rule. We plan the approach before the truck arrives and send the crew the job actually needs. If there's a gate code, a tight turnaround, or an HOA that needs notice, tell us when you book and we'll handle it ahead of time." },
      { heading: "Listing prep on a deadline", body: "Much of our Del Mar work comes through realtors and property managers who need a home cleared and camera-ready fast. We move on your timeline — often same or next day — set keepsakes aside on estate and downsizing jobs, and donate what still has life through Goodwill and the Salvation Army. Flat quote up front, photos for your records, and a swept space when we're done." },
    ],
    faqOverrides: [
      { q: "My Del Mar home has a steep driveway and a gate — can you still do it?", a: "Yes — hillside lots and gated entrances are routine here. Share the gate code and any HOA notice requirements when you book and we'll plan the access. Pricing is volume-based, so a tricky driveway doesn't change your quote." },
      { q: "I'm a realtor with a listing on a deadline — how fast can you come?", a: "Often same or next day. A big share of our Del Mar work is listing prep on the clock. Text photos for a quick quote and we'll get you a tight arrival window." },
      { q: "Can you set aside items the family wants to keep?", a: "Always. On estate and downsizing jobs we set keepsakes aside first and only haul what you've confirmed. You do a walkthrough before we pull away." },
      { q: "Do you donate the items you remove?", a: "Yes — we donate everything reusable through Goodwill, the Salvation Army, and other local charities, and recycle what we can. Only what's genuinely unusable goes to the landfill." },
    ],
  },
  { slug: "junk-removal-solana-beach", name: "Solana Beach", zips: ["92075"], neighborhoods: ["Cedros Design District"], landmarks: ["Fletcher Cove"], highways: ["I-5", "Hwy 101"], intro: "Solana Beach properties range from coastal condos to estate homes near Fletcher Cove. We've handled both." },
  { slug: "junk-removal-encinitas", name: "Encinitas", zips: ["92024"], neighborhoods: ["Leucadia", "Cardiff", "Olivenhain", "Old Encinitas"], landmarks: ["Moonlight Beach", "Self-Realization Fellowship"], highways: ["I-5", "Hwy 101", "Encinitas Blvd"], intro: "Encinitas cleanouts span historic Old Town craftsman homes, Leucadia surf shacks, and Olivenhain ranch properties. We come prepared for all of it." },
  { slug: "junk-removal-carlsbad", name: "Carlsbad", zips: ["92008", "92009", "92010", "92011"], neighborhoods: ["Carlsbad Village", "La Costa", "Aviara", "Olde Carlsbad"], landmarks: ["LEGOLAND", "Carlsbad Flower Fields"], highways: ["I-5", "Palomar Airport Rd"], intro: "Carlsbad is one of our busiest North County markets — from beach-side condos to La Costa estates and Aviara golf communities." },
  { slug: "junk-removal-rancho-santa-fe", name: "Rancho Santa Fe", zips: ["92067"], neighborhoods: ["The Covenant", "The Crosby", "Fairbanks Ranch"], landmarks: ["RSF Golf Club"], highways: ["I-5", "Del Dios Hwy"], intro: "RSF estates need a hauler who's quiet, careful, COI-ready, and comfortable on long private drives. That's us." },
  { slug: "junk-removal-poway", name: "Poway", zips: ["92064"], neighborhoods: ["Old Poway", "Green Valley", "Bridlewood"], landmarks: ["Lake Poway", "Old Poway Park"], highways: ["I-15", "Poway Rd"], intro: "Poway homes are bigger, often on larger lots with sheds, RVs, and full garages. We bring the truck space and the crew size to handle it." },
  { slug: "junk-removal-rancho-bernardo", name: "Rancho Bernardo", zips: ["92127", "92128"], neighborhoods: ["Westwood", "The Trails"], landmarks: ["Rancho Bernardo Inn"], highways: ["I-15", "Rancho Bernardo Rd"], intro: "RB cleanouts often involve longtime homeowners downsizing — full-house, multi-day projects we handle as one coordinated cleanout." },
  { slug: "junk-removal-el-cajon", name: "El Cajon", zips: ["92019", "92020", "92021"], neighborhoods: ["Bostonia", "Fletcher Hills", "Granite Hills"], landmarks: ["Cajon Speedway", "Parkway Plaza"], highways: ["I-8", "CA-67"], intro: "El Cajon junk removal — from established Fletcher Hills neighborhoods to newer Bostonia subdivisions. Same-day available." },
  { slug: "junk-removal-la-mesa", name: "La Mesa", zips: ["91941", "91942"], neighborhoods: ["Mt Helix", "Lake Murray", "Downtown La Mesa"], landmarks: ["Mt Helix Cross"], highways: ["I-8", "CA-94"], intro: "La Mesa cleanouts span Mt Helix hilltop estates, Lake Murray lakefronts, and Downtown La Mesa condos." },
  { slug: "junk-removal-city-heights", name: "City Heights", zips: ["92105", "92115"], neighborhoods: ["Cherokee Point", "Castle", "Fairmount Village"], highways: ["I-15", "I-805", "El Cajon Blvd"], intro: "City Heights — fast turnover, multi-family properties, and apartment cleanouts. We're a property-management partner across the neighborhood." },
  { slug: "junk-removal-linda-vista", name: "Linda Vista", zips: ["92111"], neighborhoods: ["Birdland", "Tecolote Canyon"], landmarks: ["USD"], highways: ["I-805", "Linda Vista Rd"], intro: "Linda Vista — USD-adjacent rental turnover, family homes, and post-storm yard work. We're here for it." },
  { slug: "junk-removal-bay-park", name: "Bay Park", zips: ["92110"], neighborhoods: ["Bay Park Heights"], landmarks: ["Mission Bay"], highways: ["I-5", "I-8"], intro: "Bay Park — the neighborhood directly north of Mission Bay where we're based on Morena Blvd. We're literally minutes from your front door." },
  { slug: "junk-removal-clairemont", name: "Clairemont", zips: ["92117"], neighborhoods: ["Clairemont Mesa East", "North Clairemont", "Bay Ho", "Bay Park"], landmarks: ["Clairemont Square"], highways: ["I-5", "I-805", "CA-52"], intro: "Clairemont is JunkMD+'s home neighborhood — we're located here on Morena Blvd. Same-day pickup is always on the table." },
  { slug: "junk-removal-north-park", name: "North Park", zips: ["92104"], neighborhoods: ["Burlingame", "Altadena"], landmarks: ["North Park Theatre", "Morley Field"], highways: ["I-805", "University Ave"], intro: "North Park bungalows, craftsman homes, and apartment buildings. Tight alleys, on-street parking — we know the playbook." },
  { slug: "junk-removal-south-park", name: "South Park", zips: ["92102"], neighborhoods: ["South Park Village"], landmarks: ["Balboa Park (south)"], highways: ["I-5", "CA-94"], intro: "South Park's historic craftsman homes and walkable streets need a hauler that respects the neighborhood character. JunkMD+ does." },
  { slug: "junk-removal-san-carlos", name: "San Carlos", zips: ["92119"], neighborhoods: ["Cowles Mountain area"], landmarks: ["Cowles Mountain", "Lake Murray"], highways: ["I-8", "Navajo Rd"], intro: "San Carlos — east of Mission Trails — has lots of original-owner homes ready for major cleanouts. We handle decades of accumulated stuff routinely." },
  { slug: "junk-removal-carmel-valley", name: "Carmel Valley", zips: ["92130"], neighborhoods: ["Pacific Highlands Ranch", "Del Mar Heights"], landmarks: ["One Paseo"], highways: ["I-5", "CA-56"], intro: "Carmel Valley families call us during home sales, garage cleanouts, and home gym swaps. We respect HOA rules and gated entry." },
  { slug: "junk-removal-torrey-pines", name: "Torrey Pines", zips: ["92037"], neighborhoods: ["Torrey Pines area"], landmarks: ["Torrey Pines State Reserve", "Torrey Pines Golf Course"], highways: ["I-5", "N Torrey Pines Rd"], intro: "Torrey Pines cliff-side homes and condos — we handle the gated communities and the strict HOA rules with COIs ready to go." },
  { slug: "junk-removal-sorrento-valley", name: "Sorrento Valley", zips: ["92121"], landmarks: ["Sorrento Valley Business Park"], highways: ["I-5", "I-805", "Carmel Mountain Rd"], intro: "Sorrento Valley business park cleanouts — biotech, tech, R&D office turnovers. After-hours work, COI-ready." },
  { slug: "junk-removal-mission-valley", name: "Mission Valley", zips: ["92108", "92120"], neighborhoods: ["Mission Valley West", "Mission Valley East"], landmarks: ["Fashion Valley", "Westfield Mission Valley", "USD"], highways: ["I-8", "I-15"], intro: "Mission Valley — condos, apartments, and shopping center turnovers. We handle the high-rise loading docks and the strict HOA rules." },
  { slug: "junk-removal-kearny-mesa", name: "Kearny Mesa", zips: ["92111", "92123"], landmarks: ["Convoy District", "Aero Dr corridor"], highways: ["I-15", "CA-52", "CA-163"], intro: "Kearny Mesa office-park cleanouts and Convoy District restaurant closeouts — JunkMD+ handles them after hours, on weekends, on the building schedule." },
  { slug: "junk-removal-tierrasanta", name: "Tierrasanta", zips: ["92124"], landmarks: ["Mission Trails Regional Park"], highways: ["I-15", "CA-52"], intro: "Tierrasanta — the 'island in the hills' — single-family homes ready for cleanouts. We're nearby." },
  { slug: "junk-removal-rancho-penasquitos", name: "Rancho Peñasquitos", zips: ["92129"], landmarks: ["PQ Town Center", "Black Mountain Open Space"], highways: ["I-15", "CA-56"], intro: "PQ family-home cleanouts — we're a regular here, handling everything from garage sweeps to estate cleanouts." },
  { slug: "junk-removal-4s-ranch", name: "4S Ranch", zips: ["92127"], landmarks: ["4S Commons"], highways: ["I-15", "Camino Del Norte"], intro: "4S Ranch's planned-community homes mean garages, sheds, and well-organized cleanouts. We know the area." },
  { slug: "junk-removal-university-city", name: "University City", zips: ["92122"], neighborhoods: ["Golden Triangle", "UTC"], landmarks: ["UTC Westfield", "UCSD"], highways: ["I-5", "I-805", "Genesee Ave"], intro: "UTC and UC — condos, towers, family homes near UCSD. We coordinate with strict HOAs and high-rise loading docks." },
  { slug: "junk-removal-santee", name: "Santee", zips: ["92071"], landmarks: ["Santee Lakes"], highways: ["CA-52", "CA-67"], intro: "Santee homes are spacious with full garages, sheds, and big yards. We bring the truck space." },
  { slug: "junk-removal-spring-valley", name: "Spring Valley", zips: ["91977", "91978"], highways: ["CA-94", "I-805"], intro: "Spring Valley — east-county family homes and yard work. We're here." },
  { slug: "junk-removal-national-city", name: "National City", zips: ["91950"], landmarks: ["Westfield Plaza Bonita"], highways: ["I-5", "I-805"], intro: "National City cleanouts — residential, commercial, and post-eviction. We handle volume work for property managers in the area." },
  { slug: "junk-removal-chula-vista", name: "Chula Vista", zips: ["91910", "91911", "91913", "91914", "91915"], neighborhoods: ["Eastlake", "Otay Ranch", "Bonita-adjacent"], landmarks: ["Otay Ranch Town Center"], highways: ["I-5", "I-805", "CA-125"], intro: "Chula Vista — South County's largest city — covers Eastlake master-planned homes, Otay Ranch developments, and older neighborhoods. We're regulars in all of them." },
  { slug: "junk-removal-imperial-beach", name: "Imperial Beach", zips: ["91932"], landmarks: ["IB Pier"], highways: ["I-5", "Palm Ave"], intro: "Imperial Beach cottages and rentals — we're here for the turnover work." },
  { slug: "junk-removal-rolando", name: "Rolando", zips: ["92115"], landmarks: ["SDSU"], highways: ["I-8", "El Cajon Blvd"], intro: "Rolando — SDSU-adjacent, family homes, rentals. We handle the turnover season." },
  { slug: "junk-removal-old-town", name: "Old Town", zips: ["92110"], landmarks: ["Old Town State Park"], highways: ["I-5", "I-8"], intro: "Old Town historic district — small commercial properties, restaurants, residences. We're nearby." },
  { slug: "junk-removal-hillcrest", name: "Hillcrest", zips: ["92103"], landmarks: ["Balboa Park", "UC San Diego Medical Center"], highways: ["I-5", "CA-163"], intro: "Hillcrest condos, lofts, and apartments — we handle the tight street parking and high-rise loading docks." },
  { slug: "junk-removal-mission-beach", name: "Mission Beach", zips: ["92109"], landmarks: ["Belmont Park", "Mission Bay"], highways: ["I-5", "Mission Bay Dr"], intro: "Mission Beach — alleys, beach cottages, vacation rentals. We know the boardwalk rules and the alley access." },
  {
    slug: "junk-removal-coronado",
    name: "Coronado",
    zips: ["92118"],
    landmarks: ["Hotel del Coronado", "Coronado Bridge"],
    highways: ["CA-75"],
    intro: "Coronado work means crossing the bridge and dealing with island logistics — historic homes near Orange Avenue, condos along the Strand, and a fair amount of estate and listing-prep work. Parking and access are tighter than the wide streets suggest, and some buildings have their own rules. We plan the trip and the paperwork before we head over.",
    localSections: [
      { heading: "Island access and building rules", body: "Getting to Coronado is half the job — we plan around bridge traffic and the island's parking limits so we arrive in your window and don't tie up a space all afternoon. For condos along the Strand and newer buildings, there are often elevator reservations or certificate-of-insurance requirements; tell us the building when you book and we'll have that handled before we show up. Historic homes near Orange Avenue get a careful hand on the way out." },
      { heading: "Estates, listings, and downsizing", body: "A lot of our Coronado jobs come through families clearing an estate or realtors prepping a home to list. Both deserve patience — we set keepsakes aside, document before-and-after, and donate what still has life through Goodwill and the Salvation Army instead of defaulting to the landfill. Whether it's a single condo's worth of furniture or a full home, you get a flat quote up front and a swept space when we leave." },
    ],
    faqOverrides: [
      { q: "Do you serve Coronado even though it's across the bridge?", a: "Yes, regularly. We plan around bridge traffic and island parking so we still hit your 2-hour arrival window. The crossing doesn't add a surcharge — pricing is volume-based." },
      { q: "My Coronado condo building needs a COI or elevator reservation — can you handle that?", a: "Yes. Tell us the building when you book and we'll sort the certificate of insurance and any elevator or access reservation before we arrive." },
      { q: "Can you help with an estate or a home I'm listing?", a: "Absolutely — that's a big share of our Coronado work. We set keepsakes aside, work to your timeline, and donate what's reusable. Listing-prep cleanouts are routine for us." },
      { q: "What happens to the items you remove?", a: "We donate anything reusable to local charities, recycle what we can, and responsibly dispose of the rest. Most jobs here are furniture and household goods that are easy to rehome." },
    ],
  },
  { slug: "junk-removal-bonita", name: "Bonita", zips: ["91902"], landmarks: ["Bonita Golf Club"], highways: ["I-805", "CA-54"], intro: "Bonita — semi-rural homes with horses, sheds, and big yards. We come prepared for the larger lots." },
  { slug: "junk-removal-lemon-grove", name: "Lemon Grove", zips: ["91945"], highways: ["CA-94", "Federal Blvd"], intro: "Lemon Grove cleanouts — affordable single-family homes ready for major yard and garage work." },
  // ───── Expansion ─────
  { slug: "junk-removal-mira-mesa", name: "Mira Mesa", zips: ["92126"], landmarks: ["Miramar Marine Corps Air Station"], highways: ["I-15", "I-805", "CA-805"], intro: "Mira Mesa — family neighborhoods near MCAS Miramar. We handle PCS moves, garage cleanouts, and rental turnovers." },
  { slug: "junk-removal-scripps-ranch", name: "Scripps Ranch", zips: ["92131"], landmarks: ["Lake Miramar"], highways: ["I-15"], intro: "Scripps Ranch — established neighborhood with big lots, full garages, and longtime owners ready for major cleanouts." },
  { slug: "junk-removal-allied-gardens", name: "Allied Gardens", zips: ["92120"], landmarks: ["Mission Trails Regional Park"], highways: ["I-8", "I-15"], intro: "Allied Gardens — original-owner family homes east of Mission Valley. Decades of accumulated stuff is our specialty." },
  { slug: "junk-removal-del-cerro", name: "Del Cerro", zips: ["92120"], landmarks: ["Lake Murray", "SDSU"], highways: ["I-8"], intro: "Del Cerro hillside homes — we handle the long stair runs and tight driveways." },
  { slug: "junk-removal-college-area", name: "College Area", zips: ["92115"], landmarks: ["SDSU"], highways: ["I-8", "I-15"], intro: "College Area — SDSU-adjacent rentals, lots of turnover, lots of mattresses. We're a regular here." },
  { slug: "junk-removal-pacific-highlands-ranch", name: "Pacific Highlands Ranch", zips: ["92130"], highways: ["CA-56"], intro: "PHR — Carmel Valley's newer extension. Family homes, garage cleanouts, gym-equipment hauls." },
  { slug: "junk-removal-mission-hills", name: "Mission Hills", zips: ["92103"], landmarks: ["Presidio Park"], highways: ["I-5", "I-8"], intro: "Mission Hills' historic Spanish-style homes need a hauler who's careful with original details. JunkMD+ is." },
  { slug: "junk-removal-bankers-hill", name: "Bankers Hill", zips: ["92103"], landmarks: ["Balboa Park"], highways: ["I-5"], intro: "Bankers Hill condos, towers, and historic homes between Hillcrest and Downtown. We coordinate with high-rise loading docks." },
  { slug: "junk-removal-la-jolla-shores", name: "La Jolla Shores", zips: ["92037"], landmarks: ["La Jolla Shores Beach", "Scripps Pier"], highways: ["I-5"], intro: "La Jolla Shores — beach-adjacent homes with strict gated-entry rules. We coordinate access." },
  { slug: "junk-removal-sunset-cliffs", name: "Sunset Cliffs", zips: ["92107"], landmarks: ["Sunset Cliffs Natural Park"], highways: ["I-5", "I-8"], intro: "Sunset Cliffs — cliff-edge homes with tight access. We bring the right truck for the right driveway." },
  { slug: "junk-removal-eastlake", name: "Eastlake (Chula Vista)", zips: ["91914", "91915"], landmarks: ["Eastlake Trails"], highways: ["I-805", "CA-125"], intro: "Eastlake's master-planned communities — we know the streets, the HOAs, and the loading rules." },
  { slug: "junk-removal-otay-ranch", name: "Otay Ranch", zips: ["91913", "91914"], landmarks: ["Otay Ranch Town Center"], highways: ["I-805", "CA-125"], intro: "Otay Ranch — Chula Vista's biggest planned community. Family homes ready for garage, attic, and shed cleanouts." },
  { slug: "junk-removal-san-ysidro", name: "San Ysidro", zips: ["92173"], landmarks: ["San Ysidro Port of Entry"], highways: ["I-5", "I-805"], intro: "San Ysidro — the southernmost San Diego neighborhood. We come down regularly for cleanouts and commercial work." },
  { slug: "junk-removal-otay-mesa", name: "Otay Mesa", zips: ["92154"], landmarks: ["Brown Field Airport"], highways: ["CA-905", "CA-125"], intro: "Otay Mesa — industrial parks and family neighborhoods. We're set up for both residential and commercial work down south." },
  { slug: "junk-removal-escondido", name: "Escondido", zips: ["92025", "92026", "92027", "92029"], landmarks: ["San Diego Zoo Safari Park", "Lake Hodges"], highways: ["I-15", "CA-78"], intro: "Escondido North County — established neighborhoods with large lots, sheds, and accumulated yard work. We make the drive." },
  { slug: "junk-removal-san-marcos", name: "San Marcos", zips: ["92069", "92078"], landmarks: ["Cal State San Marcos"], highways: ["CA-78", "I-15"], intro: "San Marcos — university town with family neighborhoods and student rentals. Turnover work is steady." },
  { slug: "junk-removal-vista", name: "Vista", zips: ["92081", "92083", "92084"], highways: ["CA-78"], intro: "Vista North County cleanouts — JunkMD+ services the area on a same-week schedule." },
  { slug: "junk-removal-oceanside", name: "Oceanside", zips: ["92054", "92056", "92057"], landmarks: ["Oceanside Pier", "Camp Pendleton"], highways: ["I-5", "CA-78"], intro: "Oceanside — military-adjacent, family neighborhoods, beach rentals. We handle PCS moves and seasonal turnover." },
  { slug: "junk-removal-fallbrook", name: "Fallbrook", zips: ["92028"], highways: ["I-15", "CA-76"], intro: "Fallbrook — semi-rural North County with avocado groves and big lots. We make the trip out." },
  { slug: "junk-removal-lakeside", name: "Lakeside", zips: ["92040"], landmarks: ["Lindo Lake"], highways: ["CA-67", "I-8"], intro: "Lakeside — east-county semi-rural neighborhoods with sheds, RVs, and big yard work." },
  { slug: "junk-removal-alpine", name: "Alpine", zips: ["91901"], highways: ["I-8"], intro: "Alpine — mountain-foothill homes with bigger lots and yard work. We service it on a scheduled basis." },
  { slug: "junk-removal-near-me", name: "San Diego County (Near Me)", neighborhoods: ["All San Diego County zip codes"], landmarks: SD_LANDMARKS.concat(COASTAL_LANDMARKS), highways: ["I-5", "I-8", "I-15", "I-805", "CA-52", "CA-56", "CA-78", "CA-163", "CA-125", "CA-94", "CA-67"], intro: "JunkMD+ services all of San Diego County — coast to mountains, north county to South Bay. Wherever you are, our green truck is nearby." },
];

export const LOCATION_BY_SLUG = Object.fromEntries(
  LOCATIONS.map((l) => [l.slug, l] as const),
);
