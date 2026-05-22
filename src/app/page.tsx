import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Hero } from "@/components/hero";
import { LogoStrip } from "@/components/logo-strip";
import { ValuePillars } from "@/components/value-pillars";
import { ServiceGrid } from "@/components/service-grid";
import { PricingTiers } from "@/components/pricing-tiers";
import { TruckComparison } from "@/components/truck-comparison";
import { ProcessSteps } from "@/components/process-steps";
import { ReviewGrid } from "@/components/review-grid";
import { FaqAccordion } from "@/components/faq-accordion";
import { CtaSection } from "@/components/cta-section";
import { YoutubeEmbed } from "@/components/youtube-embed";
import { JsonLd } from "@/components/json-ld";
import { GLOBAL_FAQS } from "@/content/faq";
import { faqSchema } from "@/lib/jsonld";
import { SITE } from "@/lib/constants";

const CATEGORIES = [
  {
    href: "/residential-junk-removal",
    title: "Residential junk removal",
    description: "Furniture, appliances, mattresses, garages, attics, yards — anything in or around your home.",
    image: "/images/clear-your-space.jpg",
  },
  {
    href: "/commercial-junk-removal",
    title: "Commercial junk removal",
    description: "Offices, warehouses, restaurants, retail, property management. After-hours and COI-ready.",
    image: "/images/dumpster-truck.jpg",
  },
  {
    href: "/dumpster-rental-services",
    title: "Dumpster rental",
    description: "10-, 30-, 40-yard dumpsters. Driveway-safe pads. Flat-rate published pricing.",
    image: "/images/truck-parked.webp",
  },
  {
    href: "/demolition-cleanup",
    title: "Light demolition",
    description: "Sheds, decks, fences, concrete, kitchen, bath. Demo and haul in a single house call.",
    image: "/images/renovation-waste.webp",
  },
  {
    href: "/eco-friendly-junk-removal",
    title: "Eco-friendly disposal",
    description: "Donate first, recycle second, landfill last. Less than 15% of a typical haul hits a landfill.",
    image: "/images/backyard.webp",
  },
  {
    href: "/what-we-take",
    title: "What we take",
    description: "Pianos, safes, exercise equipment, hot tubs, cardboard, couches. If you don't want it, we can haul it.",
    image: "/images/crew-action.jpeg",
  },
];

export default function HomePage() {
  return (
    <>
      <span hidden data-page-marker="junkmd-home-v3">{/* page-marker:junkmd-home-v3 */}page-marker:junkmd-home-v3</span>
      <JsonLd id="ld-home-faq" data={faqSchema(GLOBAL_FAQS.slice(0, 6))} />

      <Hero
        title={<>Top-rated junk removal in San Diego.</>}
        subtitle={
          <>
            JunkMD+ is the house-call approach to junk removal. Two uniformed pros, a flat price quoted on site, everything you don&rsquo;t want — gone the same day.
          </>
        }
        ctaPrimary={{ label: "Book now", href: SITE.bookingUrl, external: true }}
        ctaSecondary={{ label: `Call ${SITE.phone}`, href: `tel:${SITE.phoneRaw}` }}
        image="/images/truck-hero.webp"
        imageAlt="JunkMD+ green junk removal truck on a San Diego street"
      />

      <LogoStrip />

      <ValuePillars />

      {/* Service category grid */}
      <section className="section bg-bg-soft">
        <div className="container-x">
          <div className="max-w-2xl mb-12 flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="label mb-3">What we haul</p>
              <h2>Every JunkMD+ house call, one page away.</h2>
            </div>
            <Link href="/junk-removal-services" className="inline-flex items-center gap-1 text-[14px] text-ink" style={{ fontWeight: 500 }}>
              See every service
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ServiceGrid items={CATEGORIES} />
        </div>
      </section>

      <PricingTiers />

      <TruckComparison />

      <ProcessSteps />

      {/* Video */}
      <section className="section bg-bg">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl">
            <p className="label mb-3">Meet JunkMD+</p>
            <h2>See the JunkMD+ house call.</h2>
            <p className="mt-4 text-[18px] leading-[1.55] text-ink-soft">
              A two-minute look at what we haul, how we price, and what makes the JunkMD+ house call different.
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
          <YoutubeEmbed id={SITE.youtube.homeVideoId} title="What is Junk Removal? — JunkMD+" />
        </div>
      </section>

      <ReviewGrid limit={6} />

      <FaqAccordion title="Frequently asked." items={GLOBAL_FAQS.slice(0, 6)} />

      <CtaSection />
    </>
  );
}
