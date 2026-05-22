import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Hero } from "@/components/hero";
import { CtaSection } from "@/components/cta-section";
import { LOCATIONS } from "@/content/locations";

export const metadata: Metadata = {
  title: "JunkMD+ Service Area — All San Diego County Locations",
  description:
    "JunkMD+ serves all of San Diego County — from La Jolla to Chula Vista, Carlsbad to Coronado. 60+ neighborhoods covered. Same-week service across the region.",
};

export default function LocationsHub() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Locations" }]} />
      <Hero
        title="JunkMD+ Service Area"
        subtitle="San Diego County, coast to mountains, north county to South Bay. 60+ neighborhoods. Wherever you are, our green truck is nearby."
        image="/images/truck-hero.webp"
      />
      <section className="py-12 bg-white">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {LOCATIONS.map((l) => (
              <Link
                key={l.slug}
                href={`/${l.slug}`}
                className="flex items-center gap-2 p-3 rounded-lg border border-[color:var(--brand-border)] bg-white hover:border-[color:var(--brand-green)] hover:bg-[color:var(--brand-bg-soft)] transition-colors"
              >
                <MapPin className="h-4 w-4 text-[color:var(--brand-green)] shrink-0" />
                <span className="font-bold text-sm text-[color:var(--brand-ink)]">{l.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
