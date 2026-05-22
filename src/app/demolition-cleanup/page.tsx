import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Hero } from "@/components/hero";
import { ServiceCard } from "@/components/service-card";
import { CtaSection } from "@/components/cta-section";
import { servicesByCategory } from "@/content/services";

export const metadata: Metadata = {
  title: "Light Demolition & Cleanup San Diego — JunkMD+",
  description:
    "Light demolition + haul-away in one house call. Sheds, decks, fences, concrete, kitchen, bath, flooring, drywall. Insured, flat-rate pricing.",
};

export default function DemolitionHub() {
  const items = servicesByCategory("demolition");
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Demolition & Cleanup" }]} />
      <Hero
        title="Light Demolition &amp; Cleanup"
        subtitle="We tear it down. We haul it away. One house call. One flat price. Sheds, decks, fences, concrete, kitchen, bath."
        image="/images/renovation-waste.webp"
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
