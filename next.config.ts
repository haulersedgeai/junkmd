import type { NextConfig } from "next";

// Old dumpster product pages — all → /junk-removal-services.
// `source: '/foo'` (no trailing slash) catches both /foo and /foo/ because
// Vercel's built-in trailing-slash normalization fires before redirect rules.
const DUMPSTER_REDIRECTS = [
  "dumpster-rental-services",
  "10-yard-dumpster-rental",
  "30-yard-dumpster-rental",
  "40-yard-dumpster-rental",
  "small-dumpster-rental",
  "residential-dumpster-rentals",
  "dumpster-for-home-cleanout",
  "dumpster-for-junk-removal",
  "dumpster-for-yard-waste",
  "dumpster-for-remodeling",
  "driveway-safe-dumpster",
  "weekend-dumpster-rental",
  "commercial-dumpster-rentals",
  "construction-dumpster-rental",
  "job-site-dumpster-rental",
  "roofing-dumpster-rental",
  "contractor-dumpster-rental",
  "demolition-dumpster-rental",
  "long-term-dumpster-rental",
  "junk-removal-dumpster",
  "debris-removal-dumpster",
  "concrete-dumpster-rental",
  "roofing-shingles-dumpster",
  "yard-debris-dumpster",
  "furniture-removal-dumpster",
  "estate-cleanout-dumpster",
  "spring-cleaning-dumpster",
  "renovation-dumpster-rental",
  "dumpster-for-moving-cleanup",
  "dumpster-sizes-pricing",
  "dumpster-rental-prices",
  "dumpster-rental-cost",
  "how-much-to-rent-a-dumpster",
  "price-for-dumpster-rental",
  "budget-dumpster-rental",
  "book-a-dumpster",
  "dumpster-rentals-near-me",
  // Tier 1 dumpster gaps — slugs missed by the original block.
  "dumpster-rental-city-heights-ca",
  "dumpster-rentals-near-me-in-san-diego",
  "san-diego-dumpster-rentals",
  "specific-use-dumpsters",
];

// Tier 1 location renames — old WP flat city slugs → /junk-removal-<city>.
// Each target slug is confirmed present in src/content/locations.ts.
const LOCATION_RENAMES: Array<[string, string]> = [
  ["4s-ranch", "junk-removal-4s-ranch"],
  ["chula-vista", "junk-removal-chula-vista"],
  ["encinitas", "junk-removal-encinitas"],
  ["hillcrest", "junk-removal-hillcrest"],
  ["imperial-beach", "junk-removal-imperial-beach"],
  ["kearny-mesa", "junk-removal-kearny-mesa"],
  ["mission-valley", "junk-removal-mission-valley"],
  ["national-city", "junk-removal-national-city"],
  ["old-town", "junk-removal-old-town"],
  ["rancho-penasquitos", "junk-removal-rancho-penasquitos"],
  ["rolando", "junk-removal-rolando"],
  ["santee", "junk-removal-santee"],
  ["sorrento-valley", "junk-removal-sorrento-valley"],
  ["south-park", "junk-removal-south-park"],
  ["spring-valley", "junk-removal-spring-valley"],
  ["tierrasanta", "junk-removal-tierrasanta"],
  ["university-city", "junk-removal-university-city"],
  // junk-removal-* slug variants
  ["junk-removal-delmar", "junk-removal-del-mar"],
  ["junk-removal-city-heights-ca", "junk-removal-city-heights"],
  ["junk-removal-la-mesa-ca", "junk-removal-la-mesa"],
  // GSC "Not found (404)" export, 2026-08-16. Old WP flat service-area page;
  // this was the entry whose Google validation attempt failed.
  ["linda-vista", "junk-removal-linda-vista"],
  // Bare-slug backfill (2026-08-16 patch pass). /linda-vista turned up in GSC
  // as a 404 only because it was the one bare city slug anybody had linked to
  // recently — the same gap existed for every other location that never made
  // the original Tier 1 list. Every location in src/content/locations.ts now
  // has a bare /<city> → /junk-removal-<city> entry. Verified at generation
  // time: none of these collide with a live app route, a service slug, a
  // location slug, or an existing redirect source in any block.
  ["allied-gardens", "junk-removal-allied-gardens"],
  ["alpine", "junk-removal-alpine"],
  ["bankers-hill", "junk-removal-bankers-hill"],
  ["bay-park", "junk-removal-bay-park"],
  ["bonita", "junk-removal-bonita"],
  ["carlsbad", "junk-removal-carlsbad"],
  ["carmel-valley", "junk-removal-carmel-valley"],
  ["city-heights", "junk-removal-city-heights"],
  ["clairemont", "junk-removal-clairemont"],
  ["college-area", "junk-removal-college-area"],
  ["coronado", "junk-removal-coronado"],
  ["del-cerro", "junk-removal-del-cerro"],
  ["del-mar", "junk-removal-del-mar"],
  ["eastlake", "junk-removal-eastlake"],
  ["el-cajon", "junk-removal-el-cajon"],
  ["escondido", "junk-removal-escondido"],
  ["fallbrook", "junk-removal-fallbrook"],
  ["la-jolla", "junk-removal-la-jolla"],
  ["la-jolla-shores", "junk-removal-la-jolla-shores"],
  ["la-mesa", "junk-removal-la-mesa"],
  ["lakeside", "junk-removal-lakeside"],
  ["lemon-grove", "junk-removal-lemon-grove"],
  ["mira-mesa", "junk-removal-mira-mesa"],
  ["mission-beach", "junk-removal-mission-beach"],
  ["mission-hills", "junk-removal-mission-hills"],
  ["near-me", "junk-removal-near-me"],
  ["north-park", "junk-removal-north-park"],
  ["ocean-beach", "junk-removal-ocean-beach"],
  ["oceanside", "junk-removal-oceanside"],
  ["otay-mesa", "junk-removal-otay-mesa"],
  ["otay-ranch", "junk-removal-otay-ranch"],
  ["pacific-beach", "junk-removal-pacific-beach"],
  ["pacific-highlands-ranch", "junk-removal-pacific-highlands-ranch"],
  ["point-loma", "junk-removal-point-loma"],
  ["poway", "junk-removal-poway"],
  ["rancho-bernardo", "junk-removal-rancho-bernardo"],
  ["rancho-santa-fe", "junk-removal-rancho-santa-fe"],
  ["san-carlos", "junk-removal-san-carlos"],
  ["san-diego", "junk-removal-san-diego"],
  ["san-marcos", "junk-removal-san-marcos"],
  ["san-ysidro", "junk-removal-san-ysidro"],
  ["scripps-ranch", "junk-removal-scripps-ranch"],
  ["solana-beach", "junk-removal-solana-beach"],
  ["sunset-cliffs", "junk-removal-sunset-cliffs"],
  ["torrey-pines", "junk-removal-torrey-pines"],
  ["vista", "junk-removal-vista"],
];

// Tier 1 misc one-offs.
const ONE_OFF_RENAMES: Array<[string, string]> = [
  ["clementia-sandoval", "clemencia-sandoval"],
  // /about was a new-site-only duplicate of /our-company. /our-company is the
  // canonical About page (legacy /about-junk-md/ already 301s into it and it
  // carries the migrated WP equity), so /about folds into /our-company.
  ["about", "our-company"],
];

// Tier 1.5 — service-keyword redirects from the 2026-06-11 sitemap audit.
// Source: migration-archive/coverage_report.md. Each source slug appeared in the
// live WP sitemap with no redirect and no 1:1 live route. Every target is a
// confirmed slug or app route on the new site.
const SERVICE_KEYWORD_REDIRECTS: Array<[string, string]> = [
  // direct service alias / slug-rename
  ["carpet-removal-company-near-me", "carpet-removal"],
  ["donation-pickup-drop-off", "donation-pickup"],
  ["concrete-removal-2", "concrete-removal"],
  ["light-demolition-services", "demolition-cleanup"],
  ["yard-debris-removal", "yard-waste-removal"],
  ["swing-set-removal", "playset-swing-set-removal"],
  ["storage-unit-cleanout", "storage-unit-cleanouts"],
  ["piano-removal", "large-item-removal"],
  ["playground-removal", "playset-swing-set-removal"],
  ["electronics-removal", "e-waste-disposal"],
  ["television-electronics-disposal", "e-waste-disposal"],
  ["electronic-waste-disposal", "e-waste-disposal"],
  ["renovation-waste-removal", "renovation-waste"],
  ["office-furniture-removal", "office-cleanouts"],
  ["office-furniture-removal-hauling", "office-cleanouts"],
  ["exercise-equipment-san-diego", "exercise-equipment-removal"],
  ["large-item-removal-hauling", "large-item-removal"],
  ["same-day-junk-removal-san-diego", "same-day-junk-removal"],
  ["appliance-removal-san-diego", "appliance-removal"],
  ["mattress-disposal-san-diego", "mattress-disposal"],
  ["garage-clean-out-san-diego-ca", "garage-cleanout"],
  ["coach-removal-san-diego", "couch-removal"], // WP typo: "coach" → "couch"

  // cleanout-flavored URLs → closest live cleanout slug
  ["eviction-cleanout", "foreclosure-cleanouts"],
  ["house-cleanout", "estate-cleanout"],
  ["dorm-cleanout", "estate-cleanout"],
  ["apartment-cleanout", "estate-cleanout"],
  ["assisted-living-cleanout", "estate-cleanout"],

  // generic catch-alls with a clear hub target
  ["debris-removal", "junk-removal-services"],

  // app-route renames
  ["schedule-a-pickup", "book"],
  ["locations-we-serve", "locations"],
  ["about-junk-md", "our-company"],
  ["contact-us", "contact"],

  // Tier 1.5 follow-ups — WP pages with no 1:1 destination on the new site.
  // Mapped to nearest live hub on the cutover-readiness audit (2026-06-30).
  ["curbside-junk-removal", "junk-removal-services"],
  ["christmas-tree-pickup", "recycling-services"],
];

// WP category index pages.
const CATEGORY_REDIRECTS: Array<[string, string]> = [
  ["category/furniture-removal", "furniture-removal"],
  ["category/mattress-removal", "mattress-disposal"],
  ["category/junk-removal", "blog"],
  ["category/junk-removal-service", "blog"],
  ["category/junk-removal-san-diego", "blog"],
];

// Long-title WP blog posts from the pre-cutover sitemap audit. Wired as a
// blanket 301 to /blog as the safe floor; individual posts can be upgraded
// to richer destinations later if GSC shows they still earn traffic.
const BLOG_POST_REDIRECTS = [
  "advantages-of-minimalist-living",
  "affordable-junk-removal-in-san-diego-for-a-clean-space",
  "clean-spaces-made-simple-with-junk-removal-san-diego",
  "clear-out-unwanted-items-with-expert-junk-removal",
  "clear-the-chaos-with-expert-junk-removal-san-diego",
  "clear-your-space-with-expert-junk-removal-san-diego-services",
  "declutter-your-life-with-trusted-junk-removal",
  "discover-top-junk-removal-san-diego-services-today",
  "eco-friendly-junk-removal-in-san-diego-you-can-trust",
  "efficient-and-eco-friendly-junk-removal-san-diego-services",
  "effortless-mattress-removal-san-diego-made-simple-and-fast",
  "fast-and-reliable-junk-removal-in-san-diego-today",
  "fast-and-reliable-junk-removal-san-diego-for-any-space",
  "fast-clutter-cleanup-with-expert-junk-removal-san-diego",
  "fresh-spaces-with-junk-removal-san-diego-made-easy",
  "hassle-free-junk-removal-for-a-clean-environment",
  "homes-gain-space-through-junk-removal-near-me-services",
  "how-junk-removal-can-transform-your-property",
  "junk-removal-made-easy-for-homes-and-businesses",
  "junk-removal-san-diego-experts-for-hassle-free-cleanup",
  "junk-removal-services-for-a-clutter-free-home",
  "local-junk-removal-near-me-services-transform-streets",
  "property-improvements-driven-by-junk-removal-near-me",
  "reclaim-your-space-with-expert-junk-removal-san-diego",
  "reliable-furniture-removal-san-diego-experts-you-can-trust",
  "san-diego-moms-guide-clutter-free-home",
  "simplify-life-today-with-junk-removal-san-diego-team",
  "simplify-your-space-fast-with-junk-removal-san-diego",
  "smart-junk-removal-solutions-in-san-diego-you-will-love",
  "the-benefits-of-professional-junk-removal-san-diego",
  "top-junk-removal-san-diego-services-you-can-trust-today",
  "top-junk-removal-services-in-san-diego-for-your-home",
  "why-junk-removal-san-diego-is-a-local-essential",
  // GSC "Not found (404)" export, 2026-08-16 — five more posts from the same
  // WP content farm that the original sitemap audit missed. No 1:1 live post
  // exists (/blog is an index only), so they take the same /blog floor.
  "neighborhoods-benefit-from-reliable-junk-removal-near-me",
  "junk-removal-near-me-helps-communities-stay-organized",
  "affordable-junk-removal-solutions-in-your-area-today",
  "junk-removal-near-me-reduces-fire-hazards-in-communities",
  "local-junk-removal-experts-for-stress-free-cleanouts",
  // Bare slug for the post whose malformed variant is handled by the
  // `/how-safe-.../:path+` rule below. `:path+` requires at least one trailing
  // segment, so the clean URL was still falling through to a 404.
  "how-safe-is-junk-removal-san-diego-service",
];

// GSC "Not found (404)" export, 2026-08-16 — WP/infra artifacts and malformed
// crawl paths. These need raw `source` strings rather than the `/${slug}`
// mapping used above, either because they contain multiple segments or because
// they use path-to-regexp syntax.
const GSC_404_RAW_REDIRECTS = [
  // WP's RSS endpoint. Nothing serves feeds on the new site; /blog is the
  // closest live equivalent for anything still pointing here.
  { source: "/feed", destination: "/blog", permanent: true },
  // Real old WP post slug that Google keeps crawling with a mangled suffix
  // (".../junkmd.com///youtu.be/_q9ZDyJIFmQ"). `:path+` catches every trailing
  // variant if the platform collapses the repeated slashes. There is no live
  // version of this post, so it lands on /blog.
  {
    source: "/how-safe-is-junk-removal-san-diego-service/:path+",
    destination: "/blog",
    permanent: true,
  },
  // Literal "/*" — crawl garbage from a mis-parsed robots/sitemap entry. The
  // `*` is escaped so path-to-regexp treats it as a character, not a modifier.
  { source: "/\\*", destination: "/", permanent: true },
];

// Security headers applied to every route.
//
// DELIBERATELY OMITTED — do not add these without re-testing the booking flow:
//   - Content-Security-Policy (in any form, including Report-Only)
//   - Trusted Types / require-trusted-types-for
//   - Cross-Origin-Embedder-Policy
//   - COOP set to plain "same-origin"
//
// The site embeds the Housecall Pro booking and lead widgets, which in turn pull
// in Stripe, Google reCAPTCHA, Google Maps, Appcues, Segment, and Braze. A CSP
// or COEP breaks booking and lead capture. Lighthouse will keep reporting CSP
// and Trusted Types as failures under Best Practices — that is expected and
// accepted, not an oversight.
//
// COOP is `same-origin-allow-popups` on purpose: Stripe and reCAPTCHA open popup
// windows that must retain their `window.opener` reference. Plain `same-origin`
// severs that and breaks them.
const SECURITY_HEADERS = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: SECURITY_HEADERS }];
  },

  async redirects() {
    return [
      ...DUMPSTER_REDIRECTS.map((slug) => ({
        source: `/${slug}`,
        destination: "/junk-removal-services",
        permanent: true,
      })),
      ...LOCATION_RENAMES.map(([from, to]) => ({
        source: `/${from}`,
        destination: `/${to}`,
        permanent: true,
      })),
      ...ONE_OFF_RENAMES.map(([from, to]) => ({
        source: `/${from}`,
        destination: `/${to}`,
        permanent: true,
      })),
      ...SERVICE_KEYWORD_REDIRECTS.map(([from, to]) => ({
        source: `/${from}`,
        destination: `/${to}`,
        permanent: true,
      })),
      ...CATEGORY_REDIRECTS.map(([from, to]) => ({
        source: `/${from}`,
        destination: `/${to}`,
        permanent: true,
      })),
      ...BLOG_POST_REDIRECTS.map((slug) => ({
        source: `/${slug}`,
        destination: "/blog",
        permanent: true,
      })),
      ...GSC_404_RAW_REDIRECTS,
    ];
  },
};

export default nextConfig;
