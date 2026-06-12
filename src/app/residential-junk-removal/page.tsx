import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Hero } from "@/components/hero";
import { ServiceCard } from "@/components/service-card";
import { CtaSection } from "@/components/cta-section";
import { ProcessSteps } from "@/components/process-steps";
import { servicesByCategory } from "@/content/services";

export const metadata: Metadata = {
  title: "Residential Junk Removal San Diego — JunkMD+",
  description:
    "Residential junk removal in San Diego — furniture, appliances, mattresses, estate cleanouts, garage cleanouts, yard waste, hot tub removal. Same-day available.",
};

export default function ResidentialHub() {
  const items = servicesByCategory("residential");
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Junk Removal", href: "/junk-removal-services" }, { label: "Residential" }]} />
      <Hero
        title="Residential Junk Removal"
        subtitle="Furniture, appliances, mattresses, estates, garages, attics, basements, yards. Anything in or around your home — gone today."
        image="/images/clear-your-space.jpg"
      />
      <section className="py-12 bg-white">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((s) => (
            <ServiceCard key={s.slug} href={`/${s.slug}`} title={s.title} description={s.hero} image={s.image} icon={s.icon} />
          ))}
        </div>
      </section>
      <ProcessSteps />
      <CtaSection />
    </>
  );
}
