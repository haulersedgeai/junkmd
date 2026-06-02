import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Truck } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { LOCATIONS } from "@/content/locations";

export const metadata: Metadata = {
  title: "JunkMD+ Service Area — All San Diego County Locations",
  description:
    "JunkMD+ serves all of San Diego County — from La Jolla to Chula Vista, Carlsbad to Coronado. 60+ neighborhoods covered. Same-week service across the region.",
};

type Region = {
  key: string;
  title: string;
  description: string;
  slugs: ReadonlySet<string>;
};

const CENTRAL = new Set<string>([
  "junk-removal-san-diego",
  "junk-removal-hillcrest",
  "junk-removal-north-park",
  "junk-removal-south-park",
  "junk-removal-mission-hills",
  "junk-removal-bankers-hill",
  "junk-removal-city-heights",
  "junk-removal-mission-valley",
  "junk-removal-old-town",
  "junk-removal-linda-vista",
  "junk-removal-bay-park",
  "junk-removal-clairemont",
  "junk-removal-kearny-mesa",
  "junk-removal-mira-mesa",
  "junk-removal-sorrento-valley",
  "junk-removal-tierrasanta",
]);

const COASTAL = new Set<string>([
  "junk-removal-la-jolla",
  "junk-removal-la-jolla-shores",
  "junk-removal-pacific-beach",
  "junk-removal-mission-beach",
  "junk-removal-ocean-beach",
  "junk-removal-sunset-cliffs",
  "junk-removal-point-loma",
  "junk-removal-coronado",
  "junk-removal-imperial-beach",
  "junk-removal-del-mar",
  "junk-removal-solana-beach",
  "junk-removal-encinitas",
  "junk-removal-carlsbad",
  "junk-removal-oceanside",
  "junk-removal-torrey-pines",
  "junk-removal-carmel-valley",
  "junk-removal-pacific-highlands-ranch",
  "junk-removal-university-city",
]);

const NORTH_COUNTY = new Set<string>([
  "junk-removal-rancho-santa-fe",
  "junk-removal-rancho-bernardo",
  "junk-removal-rancho-penasquitos",
  "junk-removal-4s-ranch",
  "junk-removal-scripps-ranch",
  "junk-removal-poway",
  "junk-removal-san-marcos",
  "junk-removal-vista",
  "junk-removal-escondido",
  "junk-removal-fallbrook",
]);

const EAST_COUNTY = new Set<string>([
  "junk-removal-el-cajon",
  "junk-removal-la-mesa",
  "junk-removal-santee",
  "junk-removal-spring-valley",
  "junk-removal-lemon-grove",
  "junk-removal-lakeside",
  "junk-removal-alpine",
  "junk-removal-san-carlos",
  "junk-removal-allied-gardens",
  "junk-removal-del-cerro",
  "junk-removal-college-area",
  "junk-removal-rolando",
]);

const SOUTH_BAY = new Set<string>([
  "junk-removal-chula-vista",
  "junk-removal-bonita",
  "junk-removal-national-city",
  "junk-removal-san-ysidro",
  "junk-removal-otay-mesa",
  "junk-removal-otay-ranch",
  "junk-removal-eastlake",
]);

const REGIONS: Region[] = [
  {
    key: "central",
    title: "Central San Diego",
    description: "Mid-city neighborhoods, Mission Valley, and the inner urban core — where we dispatch from.",
    slugs: CENTRAL,
  },
  {
    key: "coastal",
    title: "Coastal & Beach Communities",
    description: "From Imperial Beach to Oceanside — every beach town along the San Diego County coast.",
    slugs: COASTAL,
  },
  {
    key: "north-county",
    title: "North County Inland",
    description: "Ranchos, Poway, San Marcos, Vista, Escondido, Fallbrook — inland north of the 56.",
    slugs: NORTH_COUNTY,
  },
  {
    key: "east-county",
    title: "East County",
    description: "El Cajon, La Mesa, Santee, the foothills east of the 805 — out to Alpine.",
    slugs: EAST_COUNTY,
  },
  {
    key: "south-bay",
    title: "South Bay",
    description: "Chula Vista, Bonita, National City, San Ysidro, Otay Mesa — everything south of I-8.",
    slugs: SOUTH_BAY,
  },
];

const NEAR_ME_SLUG = "junk-removal-near-me";

export default function LocationsHub() {
  const nearMe = LOCATIONS.find((l) => l.slug === NEAR_ME_SLUG);
  const grouped = REGIONS.map((r) => ({
    region: r,
    cities: LOCATIONS.filter((l) => r.slugs.has(l.slug)),
  }));
  const totalGrouped = grouped.reduce((acc, g) => acc + g.cities.length, 0);

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Locations" }]} />

      {/* Photo banner */}
      <section className="relative isolate overflow-hidden bg-ink text-white" style={{ minHeight: 440 }}>
        <Image
          src="/images/truck-hero.webp"
          alt="JunkMD+ green junk-removal truck on a San Diego street"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.55) 45%, rgba(10,10,10,0.85) 100%)",
          }}
          aria-hidden="true"
        />
        <div className="container-x relative flex flex-col items-start justify-end min-h-[380px] md:min-h-[440px] pt-24 pb-12 md:pb-16">
          <span
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm px-3 py-1 text-[13px] mb-5"
            style={{ fontWeight: 500 }}
          >
            <MapPin className="h-3.5 w-3.5 text-brand" />
            <span className="text-white">Serving all of San Diego County</span>
          </span>
          <h1
            className="text-white"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.25rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              fontWeight: 700,
              maxWidth: "720px",
              textShadow: "0 2px 16px rgba(0,0,0,0.55), 0 1px 3px rgba(0,0,0,0.6)",
            }}
          >
            Wherever you are, the green truck is nearby.
          </h1>
          <p
            className="mt-5 max-w-[600px] text-white/90 text-[18px] leading-[1.55]"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.55)" }}
          >
            We dispatch from Morena Blvd in Bay Park and run trucks across every corner of San Diego
            County, every day. Two-hour arrival windows, same-day on most weekdays.
          </p>
        </div>
      </section>

      {/* Coverage stat band */}
      <section className="py-8 bg-[color:var(--brand-bg-soft)] border-y border-[color:var(--brand-border)]">
        <div className="container-x grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-[color:var(--brand-green)]/10 flex items-center justify-center shrink-0">
              <MapPin className="h-5 w-5 text-[color:var(--brand-green-dark)]" />
            </div>
            <div>
              <p className="font-display text-2xl leading-none text-[color:var(--brand-ink)]">{totalGrouped}+</p>
              <p className="text-xs uppercase font-bold tracking-wide text-[color:var(--brand-muted)] mt-1">Cities &amp; neighborhoods</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-[color:var(--brand-green)]/10 flex items-center justify-center shrink-0">
              <Truck className="h-5 w-5 text-[color:var(--brand-green-dark)]" />
            </div>
            <div>
              <p className="font-display text-2xl leading-none text-[color:var(--brand-ink)]">3</p>
              <p className="text-xs uppercase font-bold tracking-wide text-[color:var(--brand-muted)] mt-1">Trucks running every day</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-[color:var(--brand-green)]/10 flex items-center justify-center shrink-0">
              <Clock className="h-5 w-5 text-[color:var(--brand-green-dark)]" />
            </div>
            <div>
              <p className="font-display text-2xl leading-none text-[color:var(--brand-ink)]">2 hr</p>
              <p className="text-xs uppercase font-bold tracking-wide text-[color:var(--brand-muted)] mt-1">Arrival windows · Mon–Sat</p>
            </div>
          </div>
        </div>
      </section>

      {/* Near-me umbrella callout */}
      {nearMe && (
        <section className="py-8 bg-white">
          <div className="container-x">
            <Link
              href={`/${nearMe.slug}`}
              className="block bg-[color:var(--brand-bg-soft)] border-2 border-[color:var(--brand-green)]/40 rounded-xl p-6 hover:border-[color:var(--brand-green)] transition-colors"
            >
              <p className="label" style={{ color: "var(--brand-green-dark)" }}>Not sure which list you&apos;re in?</p>
              <h2 className="font-display text-2xl md:text-3xl uppercase mt-2 leading-tight">
                Junk removal near me →
              </h2>
              <p className="mt-2 text-[15px] text-[color:var(--brand-text)]">
                The county-wide umbrella page — same flat-rate house call, wherever you are in San Diego.
              </p>
            </Link>
          </div>
        </section>
      )}

      {/* Region groups */}
      <section className="py-12 bg-white">
        <div className="container-x space-y-14">
          {grouped.map(({ region, cities }) => (
            <div key={region.key}>
              <div className="mb-6 max-w-2xl">
                <p className="label" style={{ color: "var(--brand-dark)" }}>
                  {region.title}
                </p>
                <h2 className="font-display text-2xl md:text-3xl uppercase mt-2 leading-tight">
                  {cities.length} {cities.length === 1 ? "area" : "areas"} we serve
                </h2>
                <p className="mt-3 text-[15px] text-[color:var(--brand-text)] leading-[1.6]">
                  {region.description}
                </p>
              </div>
              <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {cities.map((l) => {
                  const isDeepened = !!l.localSections && l.localSections.length > 0;
                  return (
                    <li key={l.slug}>
                      <Link
                        href={`/${l.slug}`}
                        className="flex items-center gap-2 p-3 rounded-lg border border-[color:var(--brand-border)] bg-white hover:border-[color:var(--brand-green)] hover:bg-[color:var(--brand-bg-soft)] transition-colors"
                      >
                        <MapPin className="h-4 w-4 text-[color:var(--brand-green)] shrink-0" />
                        <span className="font-bold text-sm text-[color:var(--brand-ink)] truncate">{l.name}</span>
                        {isDeepened && (
                          <span
                            aria-label="Local guide available"
                            title="Local guide available"
                            className="ml-auto h-1.5 w-1.5 rounded-full bg-[color:var(--brand-green)] shrink-0"
                          />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          <p className="text-[13px] text-[color:var(--brand-muted)] mt-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--brand-green)] align-middle mr-1.5" />
            Green dot = neighborhood has a full local guide.
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
