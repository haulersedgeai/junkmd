import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FEATURED = [
  { name: "San Diego", slug: "junk-removal-san-diego" },
  { name: "La Jolla", slug: "junk-removal-la-jolla" },
  { name: "Pacific Beach", slug: "junk-removal-pacific-beach" },
  { name: "Carlsbad", slug: "junk-removal-carlsbad" },
  { name: "Chula Vista", slug: "junk-removal-chula-vista" },
  { name: "Coronado", slug: "junk-removal-coronado" },
  { name: "Encinitas", slug: "junk-removal-encinitas" },
  { name: "Poway", slug: "junk-removal-poway" },
  { name: "El Cajon", slug: "junk-removal-el-cajon" },
  { name: "Mission Valley", slug: "junk-removal-mission-valley" },
  { name: "Point Loma", slug: "junk-removal-point-loma" },
  { name: "Ocean Beach", slug: "junk-removal-ocean-beach" },
];

export function ServiceAreasStrip() {
  return (
    <section className="section bg-bg-soft">
      <div className="container-x">
        <div className="max-w-2xl mb-10">
          <p className="label" style={{ color: "var(--brand-dark)" }}>Service areas</p>
          <h2 className="mt-3">We cover every city in San Diego County.</h2>
          <p className="mt-4 text-[18px] leading-[1.55] text-ink-soft">
            From La Jolla cliffs to Chula Vista, Carlsbad to Coronado — JunkMD+ trucks run every neighborhood, every day.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 items-center">
          {FEATURED.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className="inline-flex items-center rounded-full border border-border bg-bg px-4 py-2 text-[14px] text-ink-soft hover:bg-ink hover:text-white hover:border-ink transition-colors"
              style={{ fontWeight: 500 }}
            >
              {c.name}
            </Link>
          ))}
          <Link
            href="/locations"
            className="inline-flex items-center gap-1 px-4 py-2 text-[14px] text-ink"
            style={{ fontWeight: 500 }}
          >
            View all locations
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
