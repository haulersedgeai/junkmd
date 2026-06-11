import { Hero } from "@/components/hero";
import { LeadFormSection } from "@/components/lead-form-section";
import { ValuePillars } from "@/components/value-pillars";
import { ServiceGrid } from "@/components/service-grid";
import { ReviewGrid } from "@/components/review-grid";
import { EcoProcess } from "@/components/eco-process";
import { ServiceAreasStrip } from "@/components/service-areas-strip";
import { PricingTiers } from "@/components/pricing-tiers";
import { ProcessSteps } from "@/components/process-steps";
import { FaqAccordion } from "@/components/faq-accordion";
import { CtaSection } from "@/components/cta-section";
import { YoutubeEmbed } from "@/components/youtube-embed";
import { JsonLd } from "@/components/json-ld";
import { GLOBAL_FAQS } from "@/content/faq";
import { faqSchema } from "@/lib/jsonld";
import { SITE } from "@/lib/constants";
import { Check } from "lucide-react";

const CATEGORIES = [
  {
    href: "/residential-junk-removal",
    title: "Residential junk removal",
    description: "Furniture, appliances, mattresses, garages, attics, yards — anything in or around your home.",
    image: "/images/team/crew-customer-truck.jpg",
  },
  {
    href: "/commercial-junk-removal",
    title: "Commercial junk removal",
    description: "Offices, warehouses, restaurants, retail, property management. After-hours and COI-ready.",
    image: "/images/crew-action.jpeg",
  },
  {
    href: "/demolition-cleanup",
    title: "Light demolition",
    description: "Sheds, decks, fences, concrete, kitchen, bath. Demo and haul in a single house call.",
    image: "/images/team/crew-lifting.jpg",
  },
  {
    href: "/eco-friendly-junk-removal",
    title: "Eco-friendly disposal",
    description: "Donate first, recycle second, landfill last. Less than 15% of a typical haul hits a landfill.",
    image: "/images/team/crew-highfive.jpg",
  },
  {
    href: "/what-we-take",
    title: "What we take",
    description: "Pianos, safes, exercise equipment, hot tubs, cardboard, couches. If you don't want it, we can haul it.",
    image: "/images/team/team-on-truck.jpg",
  },
];

export default function HomePage() {
  return (
    <>
      <span hidden data-page-marker="junkmd-home-v4">{/* page-marker:junkmd-home-v4 */}page-marker:junkmd-home-v4</span>
      <JsonLd id="ld-home-faq" data={faqSchema(GLOBAL_FAQS.slice(0, 6))} />

      <Hero />

      <LeadFormSection />

      <ValuePillars />

      {/* Service categories — photo-led cards */}
      <section className="section bg-bg-soft">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <p className="label" style={{ color: "var(--brand-dark)" }}>What we haul</p>
            <h2 className="mt-3">Whatever needs to go, we&rsquo;ll take it.</h2>
            <p className="mt-4 text-[18px] leading-[1.55] text-ink-soft">
              Residential, commercial, demolition, eco-friendly disposal. Five places to start.
            </p>
          </div>
          <ServiceGrid items={CATEGORIES} />
        </div>
      </section>

      <ReviewGrid limit={6} />

      <EcoProcess />

      <ServiceAreasStrip />

      <PricingTiers />

      <ProcessSteps />

      {/* Video */}
      <section className="section bg-bg">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl">
            <p className="label" style={{ color: "var(--brand-dark)" }}>See it in action</p>
            <h2 className="mt-3">Two minutes inside a JunkMD+ house call.</h2>
            <p className="mt-4 text-[18px] leading-[1.55] text-ink-soft">
              Watch what we haul, how we price, and what makes the JunkMD+ house call different from every other junk-removal company in San Diego.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Family-owned since 2012 · 15,000+ clients served",
                "Eco-friendly: we donate and recycle everything we can",
                "Two-hour arrival windows, Mon–Sat",
                "Flat-rate, up-front pricing — no hidden fees",
              ].map((line) => (
                <li key={line} className="flex gap-3 text-[15px] text-ink-soft">
                  <Check className="h-4 w-4 mt-1 shrink-0 text-brand-dark" strokeWidth={2.5} />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <YoutubeEmbed videoId={SITE.youtube.homeVideoId} title="What is Junk Removal? — JunkMD+" />
        </div>
      </section>

      <FaqAccordion title="Common questions." items={GLOBAL_FAQS.slice(0, 6)} />

      <CtaSection />
    </>
  );
}
