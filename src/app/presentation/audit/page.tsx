import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Phone } from "lucide-react";
import { Wordmark } from "@/components/wordmark";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "JunkMD+ — Rebuild proposal",
  description: "Private rebuild proposal for JunkMD+. A site as sharp as your service.",
  robots: { index: false, follow: false },
};

const STAYS = [
  "The JunkMD+ name and brand identity",
  "The doctor metaphor — house calls, the green +",
  "David Leddick's owner bio (since 2012)",
  "Clemencia Sandoval's co-owner bio (since 2018)",
  "Your HouseCall Pro booking system — every CTA links to it",
  "Your phone number (858) 869-9448",
  "Your $20 first-appointment offer",
  "Your green color as an accent",
  "Your 4-tier load pricing",
  "Your 1,396+ Google + 221+ Yelp reviews",
  "NetVendor, NARPM, Local Junkers partnerships",
  "Your Morena Blvd address",
];

const NEW = [
  "Refreshed wordmark with a proper medical-cross +",
  "Geist sans-serif typography (the standard for premium tech brands)",
  "Geist Mono for prices, phone numbers, and technical metadata",
  "Modern card system inspired by Linear and Stripe",
  "Content depth: 800–1,200 word service pages, FAQ schema",
  "Mobile-first design with sticky CTA bar",
  "Generous whitespace — premium feel comes from breathing room",
];

const ENGINEERING = [
  "Mobile PageSpeed target: 95+",
  "Single canonical LocalBusiness, Service, FAQPage, BreadcrumbList schema",
  "175 indexed pages in sitemap.xml — every one with original copy",
  "next-sitemap.xml + robots.txt auto-generated",
  "WCAG AA target accessibility throughout",
  "$0/month hosting on Vercel free tier",
];

const STAT_CARDS = [
  { from: "300–500", to: "800–1,200", caption: "Words per service page. Genuine local content, every page." },
  { from: "WordPress", to: "Next.js", caption: "Modern stack on Vercel. No plugins to patch." },
  { from: "60–80", to: "175", caption: "Pages indexed. Hub-and-spoke architecture." },
];

export default function AuditPage() {
  return (
    <div className="bg-bg text-ink">
      {/* Cover */}
      <section className="hero-mesh">
        <div className="container-x section-hero max-w-5xl mx-auto">
          <div className="mb-8">
            <Wordmark size="lg" />
          </div>
          <p className="label mb-5">A private proposal · for David and Clemencia</p>
          <h1 className="display">A site as sharp as your service.</h1>
          <p className="mt-6 max-w-2xl text-[18px] leading-[1.55] text-ink-soft">
            Same JunkMD+. Same trucks. Same +20 years of San Diego trust. Built like a 2026 product.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/" className="btn btn-accent btn-lg">
              Open the live site
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={`tel:${SITE.phoneRaw}`} className="btn btn-ghost btn-lg">
              <Phone className="h-4 w-4" />
              Discuss the proposal
            </a>
          </div>
        </div>
      </section>

      {/* Side-by-side placeholders */}
      <section className="section bg-bg">
        <div className="container-x max-w-6xl mx-auto">
          <p className="label mb-3">Visual side-by-side</p>
          <h2 className="max-w-3xl mb-10">The same brand, presented like a 2026 product.</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <figure>
              <div className="aspect-[4/3] card flex items-center justify-center bg-bg-soft">
                <div className="text-center px-6">
                  <p className="label mb-2">Today</p>
                  <p className="text-[14px] text-muted">[Drop today.junkmd.com screenshot here]</p>
                </div>
              </div>
              <figcaption className="mt-3 text-[14px] text-muted" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
                Today — WordPress + Beaver Builder
              </figcaption>
            </figure>

            <figure>
              <div className="relative aspect-[4/3] card-hero overflow-hidden bg-ink">
                <Image
                  src="/images/photos/truck/junkmd-truck-san-diego-banner-01.jpg"
                  alt="JunkMD+ rebuild preview"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-90"
                />
                <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-ink/85 via-ink/30 to-transparent">
                  <Wordmark size="lg" variant="paper" />
                  <p className="text-white mt-3 text-[24px] font-semibold" style={{ letterSpacing: "-0.02em", lineHeight: 1.15 }}>
                    Top-rated junk removal in San Diego.
                  </p>
                </div>
              </div>
              <figcaption className="mt-3 text-[14px] text-muted" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
                Proposed — Next.js on Vercel
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Stat cards */}
      <section className="section bg-bg-soft">
        <div className="container-x max-w-6xl mx-auto">
          <p className="label mb-3">The receipts</p>
          <h2 className="max-w-3xl mb-10">Three numbers that change.</h2>

          <div className="grid sm:grid-cols-3 gap-5">
            {STAT_CARDS.map((s, i) => (
              <div key={i} className="card p-6 flex flex-col bg-bg">
                <p className="label mb-4">From</p>
                <p
                  className="text-muted tnum"
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: 28,
                    fontWeight: 500,
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {s.from}
                </p>
                <div className="hairline my-5" />
                <p className="label mb-4" style={{ color: "var(--brand-dark)" }}>To</p>
                <p
                  className="text-ink tnum"
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: 36,
                    fontWeight: 500,
                    lineHeight: 1,
                    letterSpacing: "-0.025em",
                  }}
                >
                  {s.to}
                </p>
                <p className="mt-5 text-[14px] text-muted leading-[1.55]">{s.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What stays */}
      <section className="section bg-bg">
        <div className="container-x max-w-5xl mx-auto">
          <p className="label mb-3">What stays the same</p>
          <h2 className="max-w-3xl mb-3">Your brand DNA — preserved.</h2>
          <p className="text-[16px] text-ink-soft leading-[1.6] max-w-2xl mb-10">
            You&rsquo;ve built something that works. We aren&rsquo;t touching what works. Every customer-recognizable detail stays exactly where it is.
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-3">
            {STAYS.map((s) => (
              <li key={s} className="flex gap-3 items-start text-[15px] text-ink-soft">
                <Check className="h-4 w-4 mt-1 shrink-0 text-brand-dark" strokeWidth={2.5} />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What's new */}
      <section className="section bg-bg-soft">
        <div className="container-x max-w-5xl mx-auto">
          <p className="label mb-3">What&rsquo;s new</p>
          <h2 className="max-w-3xl mb-3">A visual layer worthy of the trust you&rsquo;ve already earned.</h2>
          <p className="text-[16px] text-ink-soft leading-[1.6] max-w-2xl mb-10">
            Upgrades that don&rsquo;t change the booking flow, the phone number, or your brand recognition. They change how the site <em>feels.</em>
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-3">
            {NEW.map((n) => (
              <li key={n} className="flex gap-3 items-start text-[15px] text-ink-soft">
                <Check className="h-4 w-4 mt-1 shrink-0 text-brand-dark" strokeWidth={2.5} />
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Engineering */}
      <section className="section bg-bg">
        <div className="container-x max-w-5xl mx-auto">
          <p className="label mb-3">Engineering quality</p>
          <h2 className="max-w-3xl mb-10">Built like the product it is.</h2>
          <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-3">
            {ENGINEERING.map((e) => (
              <li key={e} className="flex gap-3 items-start text-[15px] text-ink-soft">
                <Check className="h-4 w-4 mt-1 shrink-0 text-brand-dark" strokeWidth={2.5} />
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Investment placeholder */}
      <section className="section bg-bg-soft">
        <div className="container-x max-w-3xl mx-auto text-center">
          <p className="label mb-3">Investment &amp; next steps</p>
          <h2 className="mb-6">What it takes to make this live.</h2>
          <div className="card p-10 bg-bg text-left">
            <p className="text-[15px] text-muted leading-[1.6]">
              [Justin to fill: project investment, payment schedule, timeline to launch, ongoing partnership]
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a href={`tel:${SITE.phoneRaw}`} className="btn btn-primary btn-lg">
              <Phone className="h-4 w-4" />
              Call to discuss
            </a>
            <Link href="/" className="btn btn-ghost btn-lg">
              Tour the live demo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
