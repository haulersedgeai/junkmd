import type { NextConfig } from "next";

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
];

const nextConfig: NextConfig = {
  async redirects() {
    return DUMPSTER_REDIRECTS.map((slug) => ({
      source: `/${slug}`,
      destination: "/junk-removal-services",
      permanent: true,
    }));
  },
};

export default nextConfig;
