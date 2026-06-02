import type { MetadataRoute } from "next";
import { PRODUCTION_URL } from "@/lib/constants";
import { SERVICES } from "@/content/services";
import { LOCATIONS } from "@/content/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "about",
    "our-company",
    "why-choose-us",
    "david-leddick",
    "clemencia-sandoval",
    "careers",
    "contact",
    "request-a-quote",
    "book",
    "pricing",
    "faq",
    "blog",
    "junk-removal-services",
    "residential-junk-removal",
    "commercial-junk-removal",
    "demolition-cleanup",
    "eco-friendly-junk-removal",
    "what-we-take",
    "locations",
    "privacy-policy",
    "terms-conditions",
    "ada-standards",
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const r of staticRoutes) {
    entries.push({
      url: `${PRODUCTION_URL}/${r}`.replace(/\/$/, "") || PRODUCTION_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: r === "" ? 1.0 : 0.8,
    });
  }

  for (const s of SERVICES) {
    entries.push({
      url: `${PRODUCTION_URL}/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }
  for (const l of LOCATIONS) {
    entries.push({
      url: `${PRODUCTION_URL}/${l.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return entries;
}
