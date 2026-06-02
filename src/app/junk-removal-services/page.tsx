import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Hero } from "@/components/hero";
import { ServiceCard } from "@/components/service-card";
import { CtaSection } from "@/components/cta-section";
import { servicesByCategory } from "@/content/services";

export const metadata: Metadata = {
  title: "Junk Removal Services — JunkMD+ San Diego",
  description:
    "Full-service junk removal in San Diego. Furniture, appliances, mattresses, estate cleanouts, hoarder cleanouts, demolition — JunkMD+ does it all.",
};

export default function JunkRemovalHub() {
  const residential = servicesByCategory("residential");
  const commercial = servicesByCategory("commercial");
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Junk Removal Services" }]} />
      <Hero
        title="JunkMD+ Junk Removal Services"
        subtitle="Residential and commercial junk removal across San Diego County. Same-day & next-day appointments. Save $20 on your first house call."
        image="/images/truck-hero.webp"
      />

      <section className="py-12 bg-white">
        <div className="container-x">
          <h2 className="font-display text-3xl uppercase mb-2">Residential Junk Removal</h2>
          <p className="text-[color:var(--brand-text)] mb-6">Anything in or around your home — furniture, appliances, mattresses, garage cleanouts, estate cleanouts, yard waste, and more.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {residential.map((s) => (
              <ServiceCard key={s.slug} href={`/${s.slug}`} title={s.title} description={s.hero} image={s.image} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[color:var(--brand-bg-soft)]">
        <div className="container-x">
          <h2 className="font-display text-3xl uppercase mb-2">Commercial Junk Removal</h2>
          <p className="text-[color:var(--brand-text)] mb-6">Offices, warehouses, restaurants, retail, and property management partners. After-hours service, COI-ready.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {commercial.map((s) => (
              <ServiceCard key={s.slug} href={`/${s.slug}`} title={s.title} description={s.hero} image={s.image} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
