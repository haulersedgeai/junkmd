import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
    title: "Residential junk removal",
    description: "Furniture, appliances, mattresses, garages, attics, basements, yards. Anything in or around your home.",
    image: "/images/clear-your-space.jpg",
  },
  {
    href: "/commercial-junk-removal",
    title: "Commercial junk removal",
    description: "Offices, warehouses, restaurants, retail, property management. After-hours work, COI-ready, fully insured.",
    image: "/images/dumpster-truck.jpg",
  },
  {
    href: "/dumpster-rental-services",
    title: "Dumpster rental",
    description: "10-, 30-, and 40-yard dumpsters with driveway-safe pads. Flat-rate published pricing.",
    image: "/images/truck-parked.webp",
  },
  {
    href: "/demolition-cleanup",
    title: "Light demolition",
    description: "Sheds, decks, fences, concrete, kitchens, bathrooms, flooring. Demo and haul in a single house call.",
    image: "/images/renovation-waste.webp",
  },
  {
    href: "/eco-friendly-junk-removal",
    title: "Eco-friendly disposal",
    description: "Donate first, recycle second, landfill last. Less than 15% of a typical haul reaches a landfill.",
    image: "/images/backyard.webp",
  },
  {
    href: "/what-we-take",
    title: "What we take",
    description: "Pianos, safes, exercise equipment, hot tubs, cardboard, couches. If you don't want it, we can probably haul it.",
    image: "/images/crew-action.jpeg",
  },
];

export default function HomePage() {
  return (
    <>
      <span hidden data-page-marker="junkmd-home-v2">{/* page-marker:junkmd-home-v2 */}page-marker:junkmd-home-v2</span>
      <JsonLd id="ld-home-faq" data={faqSchema(GLOBAL_FAQS.slice(0, 6))} />

      <Hero
        badge="San Diego · Since 2012"
        title={
          <>
            Top-rated, fast, and friendly junk removal in San Diego.
          </>
        }
        subtitle={
          <>
            JunkMD+ is the house-call approach to junk removal. Two uniformed pros, a clean green truck, a flat price quoted on site, and everything you don&rsquo;t want — gone the same day.
          </>
        }
        ctaPrimary={{ label: "Book online", href: SITE.bookingUrl, external: true }}
        ctaSecondary={{ label: `Call ${SITE.phone}`, href: `tel:${SITE.phoneRaw}` }}
        image="/images/truck-hero.webp"
        imageAlt="JunkMD+ green junk removal truck on a San Diego street"
      />

      <ValuePillars />

      {/* Service category grid */}
      <section className="section bg-cream">
        <div className="container-x">
          <div className="max-w-2xl mb-16">
            <p className="eyebrow mb-4">What we haul</p>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                fontWeight: 500,
              }}
            >
              Every JunkMD+ house call, one page away.
            </h2>
            <p className="mt-5 text-ink-soft text-[16px] leading-relaxed max-w-xl">
              Residential, commercial, dumpsters, demolition, eco-friendly, and the full &ldquo;what we take&rdquo; list. Start with the category that fits your job.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
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

          <div className="mt-10">
            <Link
              href="/junk-removal-services"
              className="inline-flex items-center gap-1 text-ink"
              style={{ fontWeight: 500 }}
            >
              See every service
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <PricingTiers />

      <TruckComparison />

      <ProcessSteps />

      {/* Video + copy */}
      <section className="section bg-paper">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">Meet JunkMD+</p>
            <h2
              style={{
                fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                fontWeight: 500,
              }}
            >
              See what a JunkMD+ house call looks like.
            </h2>
            <p className="mt-5 text-ink-soft text-[16px] leading-relaxed">
              A two-minute look at exactly what we haul, how we price, and what makes the JunkMD+ house call different from every other junk-removal company in San Diego.
            </p>
            <ul className="mt-7 space-y-2.5 text-[15px] text-ink-soft">
              <li className="flex gap-3"><span className="text-brand mt-1">—</span> Family-owned since 2012 · 15,000+ clients served</li>
              <li className="flex gap-3"><span className="text-brand mt-1">—</span> Eco-friendly: we donate and recycle everything we can</li>
              <li className="flex gap-3"><span className="text-brand mt-1">—</span> Two-hour arrival windows, Mon–Sat</li>
              <li className="flex gap-3"><span className="text-brand mt-1">—</span> Flat-rate, up-front pricing — no hidden fees</li>
            </ul>
          </div>
          <YoutubeEmbed id={SITE.youtube.homeVideoId} title="What is Junk Removal? — JunkMD+" />
        </div>
      </section>

      <ReviewGrid limit={6} />

      <FaqAccordion title="Frequently asked." items={GLOBAL_FAQS.slice(0, 6)} />

      <CtaSection />
    </>
  );
}
