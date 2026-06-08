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
];

// Tier 1 misc one-offs.
const ONE_OFF_RENAMES: Array<[string, string]> = [
  ["clementia-sandoval", "clemencia-sandoval"],
];

// ──────────────────────────────────────────────────────────────────────
// TIER 2 — PENDING GSC TRAFFIC DATA. Do NOT wire until we see which of
// these old URLs still earn impressions/clicks. Leaving here so they are
// not lost from the migration backlog.
//
// Long-title WP blog posts (likely → /blog or 410):
//   /advantages-of-minimalist-living/
//   /affordable-junk-removal-in-san-diego-for-a-clean-space/
//   /clean-spaces-made-simple-with-junk-removal-san-diego/
//   /clear-out-unwanted-items-with-expert-junk-removal/
//   /clear-the-chaos-with-expert-junk-removal-san-diego/
//   /clear-your-space-with-expert-junk-removal-san-diego-services/
//   /declutter-your-life-with-trusted-junk-removal/
//   /discover-top-junk-removal-san-diego-services-today/
//   /eco-friendly-junk-removal-in-san-diego-you-can-trust/
//   /efficient-and-eco-friendly-junk-removal-san-diego-services/
//   /effortless-mattress-removal-san-diego-made-simple-and-fast/
//   /fast-and-reliable-junk-removal-in-san-diego-today/
//   /fast-and-reliable-junk-removal-san-diego-for-any-space/
//   /fast-clutter-cleanup-with-expert-junk-removal-san-diego/
//   /fresh-spaces-with-junk-removal-san-diego-made-easy/
//   /hassle-free-junk-removal-for-a-clean-environment/
//   /homes-gain-space-through-junk-removal-near-me-services/
//   /how-junk-removal-can-transform-your-property/
//   /junk-removal-made-easy-for-homes-and-businesses/
//   /junk-removal-san-diego-experts-for-hassle-free-cleanup/
//   /junk-removal-services-for-a-clutter-free-home/
//   /local-junk-removal-near-me-services-transform-streets/
//   /property-improvements-driven-by-junk-removal-near-me/
//   /reclaim-your-space-with-expert-junk-removal-san-diego/
//   /reliable-furniture-removal-san-diego-experts-you-can-trust/
//   /san-diego-moms-guide-clutter-free-home/
//   /simplify-life-today-with-junk-removal-san-diego-team/
//   /simplify-your-space-fast-with-junk-removal-san-diego/
//   /smart-junk-removal-solutions-in-san-diego-you-will-love/
//   /the-benefits-of-professional-junk-removal-san-diego/
//   /top-junk-removal-san-diego-services-you-can-trust-today/
//   /top-junk-removal-services-in-san-diego-for-your-home/
//   /why-junk-removal-san-diego-is-a-local-essential/
//
// Low-confidence intent (need GSC + human review):
//   /coach-removal-san-diego/      — likely WP typo for "couch"; verify before mapping
//   /christmas-tree-pickup/        — seasonal; no obvious target
// ──────────────────────────────────────────────────────────────────────

const nextConfig: NextConfig = {
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
    ];
  },
};

export default nextConfig;
