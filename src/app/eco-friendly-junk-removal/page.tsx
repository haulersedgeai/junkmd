import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Hero } from "@/components/hero";
import { ServiceCard } from "@/components/service-card";
import { CtaSection } from "@/components/cta-section";
import { servicesByCategory } from "@/content/services";

export const metadata: Metadata = {
  title: "Eco-Friendly Junk Removal San Diego — JunkMD+",
  description:
    "JunkMD+ donates and recycles everything we can. Goodwill, Salvation Army, certified e-waste recyclers, scrap yards, green-waste facilities. Less than 15% to landfill.",
};

export default function EcoHub() {
  const items = servicesByCategory("eco");
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Eco-Friendly" }]} />
      <Hero
        title="Eco-Friendly Junk Removal"
        subtitle="Donate first. Recycle second. Landfill last. Less than 15% of a typical JunkMD+ haul ends up in the ground."
        image="/images/backyard.webp"
      />
      <section className="py-12 bg-white">
        <div className="container-x prose-brand max-w-3xl mx-auto">
          <h2>How We Sort Every Job</h2>
          <p>
            Eco-friendly isn't a sticker we slap on the truck. Every JunkMD+ load gets sorted at our
            yard before it's routed:
          </p>
          <ul>
            <li><strong>Donate.</strong> Furniture, clothes, working appliances, books, toys — to Goodwill, Salvation Army, and local charities.</li>
            <li><strong>Recycle metal.</strong> Steel, aluminum, copper, brass — to certified scrap yards.</li>
            <li><strong>Recycle e-waste.</strong> TVs, computers, monitors, phones — to California-certified e-waste recyclers.</li>
            <li><strong>Recycle mattresses.</strong> Foam, fabric, springs, frames — each component goes to the right facility.</li>
            <li><strong>Recycle concrete.</strong> Slabs, footings, sidewalk — crushed for new road base.</li>
            <li><strong>Recycle green waste.</strong> Branches, sod, leaves — composted at certified green-waste facilities.</li>
            <li><strong>Landfill — last resort.</strong> Less than 15% of a typical haul.</li>
          </ul>
        </div>
      </section>
      <section className="py-12 bg-[color:var(--brand-bg-soft)]">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((s) => (
            <ServiceCard key={s.slug} href={`/${s.slug}`} title={s.title} description={s.hero} image={s.image} icon={s.icon} />
          ))}
        </div>
      </section>
      <CtaSection />
    </>
  );
}
