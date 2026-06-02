import type { Metadata } from "next";
import Image from "next/image";
import { Check, X } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { TruckComparison } from "@/components/truck-comparison";
import { ReviewGrid } from "@/components/review-grid";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Why Choose JunkMD+ — Top-Rated San Diego Junk Removal",
  description: `Why JunkMD+? Family-owned since 2012, ${SITE.reviews.totalDisplay} 5-star reviews, flat-rate pricing, eco-friendly disposal, and a full-service house-call model. Save $20 first appointment.`,
};

const PILLARS = [
  {
    title: "Full-service, not dumpster rental",
    body: "We bring the truck, the crew, and the labor. You point — we lift, load, sweep, and haul. No dumpster to permit, fill, or wait on.",
  },
  {
    title: "Flat-rate, up-front pricing",
    body: "We size the job in person and quote a flat price before we touch a thing. No fuel surcharges, disposal add-ons, or surprise upcharges. Save $20 on your first booking.",
  },
  {
    title: "Eco-first disposal",
    body: "Donate to Goodwill / Salvation Army first. Recycle metal, e-waste, mattresses, cardboard, green waste second. Less than 15% of a typical haul actually hits the landfill.",
  },
  {
    title: "Family-owned since 2012",
    body: "Same owners — David and Clemencia — running the business since day one. Three trucks, eight people, headquartered on Morena Blvd in Bay Park.",
  },
  {
    title: "Insured & COI-ready",
    body: "Fully insured, background-checked, uniformed crew. We provide Certificates of Insurance to property managers, HOAs, and landlords on request.",
  },
  {
    title: "Two-hour arrival windows",
    body: "Same-day available most weekdays. Two-hour windows Monday through Saturday, with a courtesy call before we roll up. We respect your time.",
  },
];

function PlusGlyph() {
  return (
    <svg viewBox="0 0 16 16" width="18" height="18" aria-hidden="true">
      <line x1="8" y1="2" x2="8" y2="14" stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="2" y1="8" x2="14" y2="8" stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

const COMPARISON = [
  {
    title: "The JunkMD+ house call",
    tone: "good" as const,
    points: [
      "Two-person uniformed crew arrives in a two-hour window",
      "Flat-rate quote before any lifting starts",
      "We do all the labor — anywhere on the property",
      "Donation drop-off, recycling, and post-job sweep included",
      "Same-day or next-day on most weekdays",
    ],
  },
  {
    title: "Doing it yourself",
    tone: "bad" as const,
    points: [
      "Borrow or rent a truck, hope it fits",
      "Lift, drag, and haul on your own time",
      "Find a transfer station that takes what you have",
      "Pay per ton on top of the rental and your gas",
      "Repeat trips for anything bigger than a small load",
    ],
  },
  {
    title: "Renting a dumpster",
    tone: "bad" as const,
    points: [
      "Schedule delivery and a permit if street-side",
      "Lift and load it yourself — every piece, by hand",
      "Pay overage fees if you guessed the size wrong",
      "Wait days or weeks for pickup on your driveway",
      "No donation routing — everything goes one place",
    ],
  },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Why Choose Us" }]} />

      {/* Photo banner */}
      <section className="relative isolate overflow-hidden bg-ink text-white" style={{ minHeight: 460 }}>
        <Image
          src="/images/team/crew-lifting.jpg"
          alt="JunkMD+ crew loading a couch into the truck during a San Diego house call"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.55) 45%, rgba(10,10,10,0.85) 100%)",
          }}
          aria-hidden="true"
        />
        <div className="container-x relative flex flex-col items-start justify-end min-h-[400px] md:min-h-[460px] pt-24 pb-12 md:pb-16">
          <span
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm px-3 py-1 text-[13px] mb-5"
            style={{ fontWeight: 500 }}
          >
            <span className="text-brand">★</span>
            <span className="text-white">5.0</span>
            <span className="text-white/50">·</span>
            <span className="text-white/90">{SITE.reviews.totalDisplay} {SITE.reviews.totalLabel}</span>
          </span>
          <h1
            className="text-white"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.25rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              fontWeight: 700,
              maxWidth: "740px",
              textShadow: "0 2px 16px rgba(0,0,0,0.55), 0 1px 3px rgba(0,0,0,0.6)",
            }}
          >
            Why San Diego picks JunkMD+.
          </h1>
          <p
            className="mt-5 max-w-[600px] text-white/90 text-[18px] leading-[1.55]"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.55)" }}
          >
            Six concrete reasons families, property managers, and contractors keep calling the
            green truck.
          </p>
        </div>
      </section>

      {/* 6 pillars */}
      <section className="section bg-bg">
        <div className="container-x">
          <div className="max-w-2xl mb-14">
            <p className="label" style={{ color: "var(--brand-dark)" }}>The differentiators</p>
            <h2 className="mt-3">What makes a JunkMD+ house call different.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {PILLARS.map((p) => (
              <div key={p.title}>
                <div className="mb-4"><PlusGlyph /></div>
                <h3 className="mb-2" style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.3 }}>{p.title}</h3>
                <p className="text-[14px] text-muted leading-[1.6]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison band */}
      <section className="section bg-bg-soft border-y border-border">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <p className="label" style={{ color: "var(--brand-dark)" }}>The honest comparison</p>
            <h2 className="mt-3">Three ways to clear a space. We&apos;re biased — but here&apos;s the trade-off.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {COMPARISON.map((c) => {
              const isGood = c.tone === "good";
              return (
                <article
                  key={c.title}
                  className={
                    "card flex flex-col bg-bg overflow-hidden p-6 " +
                    (isGood ? "border-brand" : "")
                  }
                  style={isGood ? { borderWidth: 2 } : undefined}
                >
                  <h3
                    className="font-display text-xl uppercase mb-4"
                    style={{ color: isGood ? "var(--brand-dark)" : "var(--ink)" }}
                  >
                    {c.title}
                  </h3>
                  <ul className="space-y-3 flex-1">
                    {c.points.map((pt) => (
                      <li key={pt} className="flex gap-2.5 text-[14px] text-ink-soft leading-[1.55]">
                        {isGood ? (
                          <Check className="h-4 w-4 mt-0.5 shrink-0 text-brand-dark" strokeWidth={2.5} />
                        ) : (
                          <X className="h-4 w-4 mt-0.5 shrink-0 text-muted" strokeWidth={2.5} />
                        )}
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <TruckComparison />

      <ReviewGrid limit={6} />

      <CtaSection />
    </>
  );
}
