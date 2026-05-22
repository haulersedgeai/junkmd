import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Hero } from "@/components/hero";
import { ServiceCard } from "@/components/service-card";
import { CtaSection } from "@/components/cta-section";
import { SERVICES } from "@/content/services";

export const metadata: Metadata = {
  title: "What We Take — JunkMD+ San Diego",
  description:
    "Pianos, safes, exercise equipment, hot tubs, cardboard, renovation debris, couches — if you don't want it, JunkMD+ can probably haul it. Same-day available.",
};

export default function WhatWeTakePage() {
  const items = SERVICES.filter((s) => s.category === "what-we-take");
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "What We Take" }]} />
      <Hero
        title="What We Take"
        subtitle="Pianos, safes, exercise equipment, hot tubs, cardboard, couches, renovation debris. If you don't want it, we can probably haul it."
        image="/images/clear-your-space.jpg"
      />
      <section className="py-12 bg-white">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((s) => (
            <ServiceCard key={s.slug} href={`/${s.slug}`} title={s.title} description={s.hero} image={s.image} />
          ))}
        </div>
      </section>
      <section className="py-10 bg-[color:var(--brand-bg-soft)]">
        <div className="container-x prose-brand max-w-3xl mx-auto">
          <h2>What We Don't Take</h2>
          <p>To keep things safe and legal, we don't haul:</p>
          <ul>
            <li>Hazardous waste — paint, motor oil, batteries, propane tanks</li>
            <li>Asbestos or known asbestos-containing materials</li>
            <li>Medical waste / sharps</li>
            <li>Tires (in most cases — call to confirm)</li>
            <li>Wet concrete (cured concrete is fine — see concrete removal)</li>
          </ul>
          <p>For HHW (household hazardous waste), we can point you to the San Diego County HHW drop-off.</p>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
