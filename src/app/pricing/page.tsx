import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { PricingTiers } from "@/components/pricing-tiers";
import { TruckComparison } from "@/components/truck-comparison";
import { FaqAccordion } from "@/components/faq-accordion";

export const metadata: Metadata = {
  title: "Pricing — JunkMD+ San Diego Junk Removal",
  description:
    "Flat-rate junk removal pricing in San Diego. 4 tiers: Single Curbside ($79), Small Load ($197–329), Medium Load ($329–526), Large Load ($526–799). Save $20 first appointment.",
};

const FAQS = [
  { q: "What's included in the price?", a: "Everything. Labor, hauling, disposal/recycling fees, donation drop-off, and post-job sweep-up. The number you see is the number you pay." },
  { q: "Are there any hidden fees?", a: "No. We quote a flat price up-front before we touch a thing. No fuel surcharges, no disposal surcharges, no scheduling fees." },
  { q: "What about heavy stuff like concrete?", a: "Concrete is denser than household junk and is priced by weight. We'll tell you up-front before we start." },
  { q: "How does the $20 first-appointment discount work?", a: "If it's your first time booking JunkMD+, you save $20 on any Small Load or larger. Mention it when booking — or it'll auto-apply during the on-site quote." },
  { q: "Can I get a quote before you arrive?", a: "Yes — text us photos at (858) 869-9448 and we'll send you an estimate range. The final flat price is confirmed on-site." },
];

export default function PricingPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Pricing" }]} />
      <Hero
        badge="Flat-Rate, Up-Front Pricing"
        title="JunkMD+ Pricing — Four Tiers, No Surprises"
        subtitle="We size the job in person and quote a flat price before we touch a thing. Single items start at $79. Full truckloads (≈ 6 pickup trucks worth) up to $799."
        image="/images/junkmd-truck.png"
      />
      <PricingTiers />
      <TruckComparison />
      <FaqAccordion items={FAQS} title="Pricing FAQ" />
      <CtaSection />
    </>
  );
}
