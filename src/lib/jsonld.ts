import { SITE, PRODUCTION_URL } from "./constants";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${PRODUCTION_URL}/#business`,
    name: SITE.legalName,
    alternateName: SITE.name,
    description:
      "Top-rated, fast & friendly junk removal and light demolition in San Diego County. Family-owned since 2012.",
    url: PRODUCTION_URL,
    telephone: SITE.phoneRaw,
    email: SITE.email,
    image: `${PRODUCTION_URL}/images/photos/truck/junkmd-truck-san-diego-banner-01.jpg`,
    logo: `${PRODUCTION_URL}/images/logo.jpeg`,
    priceRange: SITE.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      SITE.socials.facebook,
      SITE.socials.instagram,
      SITE.socials.yelp,
      SITE.socials.youtube,
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.reviews.google.rating,
      reviewCount: SITE.reviews.google.count,
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "San Diego County, California",
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function serviceSchema(name: string, description: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    provider: { "@id": `${PRODUCTION_URL}/#business` },
    areaServed: { "@type": "AdministrativeArea", name: "San Diego County, California" },
    name,
    description,
    url: `${PRODUCTION_URL}/${slug}`,
  };
}

export function videoSchema(input: {
  videoId: string;
  name: string;
  description: string;
  uploadDate?: string;
}) {
  const { videoId, name, description, uploadDate = "2026-06-10" } = input;
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}`,
    uploadDate,
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
