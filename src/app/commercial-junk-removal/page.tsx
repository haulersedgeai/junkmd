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
        image="/images/photos/truck/junkmd-truck-san-diego-banner-01.jpg"
      />
      <section className="py-12 bg-white">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((s) => (
            <ServiceCard key={s.slug} href={`/${s.slug}`} title={s.title} description={s.hero} image={s.image} icon={s.icon} />
          ))}
        </div>
      </section>
      <section className="py-12 bg-[color:var(--brand-bg-soft)]">
        <div className="container-x prose-brand max-w-3xl mx-auto">
          <h2>Who We Serve</h2>
          <p>
            Beyond offices and storefronts, JunkMD+ partners with San Diego communities that need cleanouts handled on a schedule and with care.
          </p>
          <h3>Senior Assisted Living</h3>
          <p>
            Move-ins, downsizing, and resident transitions generate more than a family can carry out. We clear units and rooms with discretion, work respectfully around residents and staff, and keep turnovers on the facility&apos;s timeline so the next resident can move in without delay.
          </p>
          <h3>Retirement Communities</h3>
          <p>
            From individual downsizing to unit turnovers and common-area refreshes, we&apos;re an on-call removal partner for San Diego retirement communities. Scheduled, low-disruption visits, insured crews, and COI on file for facility requirements.
          </p>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
