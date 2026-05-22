import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { ValuePillars } from "@/components/value-pillars";
import { TruckComparison } from "@/components/truck-comparison";
import { PricingTiers } from "@/components/pricing-tiers";
import { ProcessSteps } from "@/components/process-steps";
import { ReviewGrid } from "@/components/review-grid";
import { CtaSection } from "@/components/cta-section";
import { FaqAccordion } from "@/components/faq-accordion";
import { ServiceCard } from "@/components/service-card";
import { YoutubeEmbed } from "@/components/youtube-embed";
import { JsonLd } from "@/components/json-ld";
import { GLOBAL_FAQS } from "@/content/faq";
import { faqSchema } from "@/lib/jsonld";
import { SITE } from "@/lib/constants";

const CATEGORY_HUBS = [
  {
    href: "/residential-junk-removal",
    title: "Residential Junk Removal",
    description: "Furniture, appliances, mattresses, garages, attics, basements, yards — anything in or around your home.",
    image: "/images/clear-your-space.jpg",
  },
  {
    href: "/commercial-junk-removal",
    title: "Commercial Junk Removal",
    description: "Offices, warehouses, restaurants, retail, property management. After-hours work, COI-ready, insured.",
    image: "/images/dumpster-truck.jpg",
  },
  {
    href: "/dumpster-rental-services",
    title: "Dumpster Rental",
    description: "10-, 30-, 40-yard dumpsters with driveway-safe pads. Flat-rate published pricing.",
    image: "/images/dumpster-truck.jpg",
  },
  {
    href: "/demolition-cleanup",
    title: "Light Demolition",
    description: "Sheds, decks, fences, concrete, kitchen, bath, flooring. Demo + haul in one house call.",
    image: "/images/renovation-waste.webp",
  },
  {
    href: "/eco-friendly-junk-removal",
    title: "Eco-Friendly Disposal",
    description: "Donate first, recycle second, landfill last. Less than 15% of a typical haul hits a landfill.",
    image: "/images/backyard.webp",
  },
  {
    href: "/what-we-take",
    title: "What We Take",
    description: "Pianos, safes, exercise equipment, hot tubs, cardboard, couches — if you don't want it, we can haul it.",
    image: "/images/crew-action.jpeg",
  },
];

export default function HomePage() {
  return (
    <>
      <span hidden data-page-marker="junkmd-home">page-marker:junkmd-home</span>
      <JsonLd id="ld-home-faq" data={faqSchema(GLOBAL_FAQS.slice(0, 6))} />

      <Hero
        badge="Perfect 5-Star Rating · 1,290+ Google Reviews"
        title={
          <>
            <span className="text-[color:var(--brand-green-dark)]">JunkMD<sup className="text-[color:var(--brand-green)]">+</sup></span>: Top-Rated, Fast &amp; Friendly Junk Removal in San Diego.
          </>
        }
        subtitle={
          <>
            With flawless reviews on Yelp &amp; Google, JunkMD+ is the best choice to remove old furniture, mattresses, appliances, e-waste, construction debris, and more.
            If you don't want it, <strong>we can haul it.</strong>
          </>
        }
        ctaPrimary={{ label: "Book Now — Save $20", href: SITE.bookingUrl, external: true }}
        ctaSecondary={{ label: `Call ${SITE.phone}`, href: `tel:${SITE.phoneRaw}` }}
        image="/images/truck-hero.webp"
        imageAlt="JunkMD+ green junk removal truck in San Diego"
      />

      <ValuePillars />

      <TruckComparison />

      <PricingTiers />

      <ProcessSteps />

      <section className="py-16 bg-white">
        <div className="container-x">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[color:var(--brand-green-dark)]">
              What We Haul
            </span>
            <h2 className="font-display text-3xl sm:text-4xl uppercase mt-2 mb-3">
              Every JunkMD+ House Call, One Page Away
            </h2>
            <p className="text-[color:var(--brand-text)]">
              Residential, commercial, dumpsters, demolition, eco-friendly, and the full "what we take" list — start with the category that fits your job.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATEGORY_HUBS.map((h) => (
              <ServiceCard
                key={h.href}
                href={h.href}
                title={h.title}
                description={h.description}
                image={h.image}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/junk-removal-services" className="btn-outline">
              See All Services
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[color:var(--brand-bg-soft)]">
        <div className="container-x grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[color:var(--brand-green-dark)] mb-2">
              Meet JunkMD+
            </span>
            <h2 className="font-display text-3xl sm:text-4xl uppercase mb-3">
              See What a JunkMD+ House Call Looks Like
            </h2>
            <p className="text-[color:var(--brand-text)] mb-4">
              Watch a quick walk-through of exactly what we haul, how we price, and what makes the JunkMD+ house call different from every other junk-removal company in San Diego.
            </p>
            <ul className="space-y-2 text-sm">
              <li>✓ Family-owned since 2012 — 15,000+ San Diego clients served</li>
              <li>✓ Eco-friendly — we donate &amp; recycle everything we can</li>
              <li>✓ Two-hour arrival windows, Mon–Sat</li>
              <li>✓ Flat-rate, up-front pricing — no hidden fees</li>
            </ul>
          </div>
          <YoutubeEmbed id={SITE.youtube.homeVideoId} title="What is Junk Removal? — JunkMD+" />
        </div>
      </section>

      <ReviewGrid limit={6} />

      <FaqAccordion title="Frequently Asked Questions" items={GLOBAL_FAQS.slice(0, 6)} />

      <CtaSection />
    </>
  );
}
