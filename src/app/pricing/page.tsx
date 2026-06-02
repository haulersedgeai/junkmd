import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { PricingTiers } from "@/components/pricing-tiers";
import { TruckComparison } from "@/components/truck-comparison";
import { FaqAccordion } from "@/components/faq-accordion";
import { SITE } from "@/lib/constants";
import { Calendar, Tag } from "lucide-react";

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

const PRICING_STEPS = [
  {
    n: 1,
    title: "We size it on-site",
    body: "Two-person crew rolls up in a two-hour window. We walk the job, measure what fits in the truck, and weigh anything dense.",
  },
  {
    n: 2,
    title: "Flat quote before we touch a thing",
    body: "You see the number first. It's the number you pay — labor, hauling, disposal, donation drop-off, sweep-up all included.",
  },
  {
    n: 3,
    title: "You approve, we haul",
    body: "Green light from you, then we lift, load, and leave the space cleaner than we found it. Same-day on most weekdays.",
  },
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

      {/* $20-off callout band */}
      <section className="py-6 bg-[color:var(--brand-green-dark)] text-white">
        <div className="container-x flex flex-wrap items-center justify-between gap-5">
          <div className="flex items-center gap-4 min-w-0">
            <div className="hidden sm:flex h-12 w-12 shrink-0 rounded-full bg-white/15 items-center justify-center">
              <Tag className="h-5 w-5 text-white" />
            </div>
            <div className="min-w-0">
              <p className="font-display text-xl md:text-2xl uppercase leading-tight">
                Save $20 on your first appointment
              </p>
              <p className="text-sm text-white/85 mt-1">
                Applies automatically to any Small Load or larger. No code needed.
              </p>
            </div>
          </div>
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent shrink-0"
          >
            <Calendar className="h-4 w-4" />
            Book online
          </a>
        </div>
      </section>

      <PricingTiers />

      {/* How pricing works — 3-step flow mirroring process-steps grammar */}
      <section className="section bg-bg-soft border-y border-border">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <p className="label" style={{ color: "var(--brand-dark)" }}>How pricing works</p>
            <h2 className="mt-3">No surprises. Ever.</h2>
            <p className="mt-4 text-[18px] leading-[1.55] text-ink-soft">
              The price you see on-site is the price you pay. Three steps from the truck pulling up to the truck pulling away.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-0 right-0 top-[18px] h-px bg-border" aria-hidden="true" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-10 gap-x-8">
              {PRICING_STEPS.map((step) => (
                <div key={step.n} className="relative">
                  <p
                    className="text-muted tnum"
                    style={{
                      fontFamily: "var(--font-geist-mono), monospace",
                      fontSize: 32,
                      lineHeight: 1,
                      fontWeight: 500,
                      letterSpacing: "-0.02em",
                      background: "var(--bg-soft)",
                      paddingRight: 12,
                      display: "inline-block",
                    }}
                  >
                    {String(step.n).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-[18px] font-semibold leading-snug text-ink" style={{ letterSpacing: "-0.005em" }}>
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14px] text-muted leading-[1.6]">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TruckComparison />

      <FaqAccordion items={FAQS} title="Pricing FAQ" />

      <CtaSection />
    </>
  );
}
