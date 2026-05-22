import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Hero } from "@/components/hero";
import { ServiceCard } from "@/components/service-card";
import { CtaSection } from "@/components/cta-section";
import { dumpstersByCategory } from "@/content/dumpsters";

export const metadata: Metadata = {
  title: "Dumpster Rental San Diego — 10, 30, 40 Yard | JunkMD+",
  description:
    "JunkMD+ dumpster rental in San Diego — 10-, 30-, 40-yard sizes. Driveway-safe, flat-rate pricing, same-week delivery. Residential & commercial.",
};

export default function DumpsterHub() {
  const sizes = dumpstersByCategory("size");
  const residential = dumpstersByCategory("residential");
  const commercial = dumpstersByCategory("commercial");
  const pricing = dumpstersByCategory("pricing");
  const specific = dumpstersByCategory("specific");

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Dumpster Rental" }]} />
      <Hero
        title="JunkMD+ Dumpster Rental"
        subtitle="10-, 30-, 40-yard dumpsters. Driveway-safe pads. Flat-rate published pricing. Same-week delivery across San Diego County."
        image="/images/dumpster-truck.jpg"
      />

      <section className="py-12 bg-white">
        <div className="container-x">
          <h2 className="font-display text-3xl uppercase mb-2">Dumpster Sizes</h2>
          <p className="text-[color:var(--brand-text)] mb-6">Three sizes — most projects fit one of them. Click for full details and pricing.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {sizes.map((d) => (
              <ServiceCard key={d.slug} href={`/${d.slug}`} title={d.title} description={d.hero} image="/images/dumpster-truck.jpg" />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[color:var(--brand-bg-soft)]">
        <div className="container-x">
          <h2 className="font-display text-3xl uppercase mb-2">Residential Dumpster Rentals</h2>
          <p className="text-[color:var(--brand-text)] mb-6">Home cleanouts, remodels, yard work — sized for driveways.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {residential.map((d) => (
              <ServiceCard key={d.slug} href={`/${d.slug}`} title={d.title} description={d.hero} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-x">
          <h2 className="font-display text-3xl uppercase mb-2">Commercial &amp; Contractor</h2>
          <p className="text-[color:var(--brand-text)] mb-6">Job sites, construction, roofing, demolition. Net-30 invoicing available.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {commercial.map((d) => (
              <ServiceCard key={d.slug} href={`/${d.slug}`} title={d.title} description={d.hero} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[color:var(--brand-bg-soft)]">
        <div className="container-x">
          <h2 className="font-display text-3xl uppercase mb-2">Sizing &amp; Pricing</h2>
          <p className="text-[color:var(--brand-text)] mb-6">Flat-rate published pricing across all sizes.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pricing.map((d) => (
              <ServiceCard key={d.slug} href={`/${d.slug}`} title={d.title} description={d.hero} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-x">
          <h2 className="font-display text-3xl uppercase mb-2">Specific Uses</h2>
          <p className="text-[color:var(--brand-text)] mb-6">Yard waste, concrete, roofing, furniture, estate, spring cleaning — sized for the job.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {specific.map((d) => (
              <ServiceCard key={d.slug} href={`/${d.slug}`} title={d.title} description={d.hero} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
