import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Hero } from "@/components/hero";
import { ServiceCard } from "@/components/service-card";
import { CtaSection } from "@/components/cta-section";
import { servicesByCategory } from "@/content/services";

export const metadata: Metadata = {
  title: "Commercial Junk Removal San Diego — JunkMD+",
  description:
    "Commercial junk removal in San Diego — office cleanouts, warehouse cleanouts, restaurants, retail, construction debris, property management. COI-ready, insured.",
};

export default function CommercialHub() {
  const items = servicesByCategory("commercial");
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Junk Removal", href: "/junk-removal-services" }, { label: "Commercial" }]} />
      <Hero
        title="Commercial Junk Removal"
        subtitle="Offices, warehouses, retail, restaurants, property management. After-hours scheduling, COI-ready, insured."
        image="/images/truck-hero.webp"
      />
      <section className="py-12 bg-white">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((s) => (
            <ServiceCard key={s.slug} href={`/${s.slug}`} title={s.title} description={s.hero} image={s.image} />
          ))}
        </div>
      </section>
      <CtaSection />
    </>
  );
}
