import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";
import { GLOBAL_FAQS } from "@/content/faq";
import { faqSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "FAQ — JunkMD+ Junk Removal San Diego",
  description: "Frequently asked questions about JunkMD+ junk removal — pricing, scheduling, what we take, recycling, the $20 first-appointment discount.",
};

export default function FaqPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
      <JsonLd id="ld-faq" data={faqSchema(GLOBAL_FAQS)} />
      <Hero
        title="Frequently Asked Questions"
        subtitle="Everything you might want to know about JunkMD+ — pricing, scheduling, what we take, and where we send it."
        image="/images/crew-action.jpeg"
      />
      <FaqAccordion items={GLOBAL_FAQS} />
      <CtaSection />
    </>
  );
}
