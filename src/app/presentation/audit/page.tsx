import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, X, ChevronRight, Phone, Calendar } from "lucide-react";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Website Rebuild Proposal — JunkMD+",
  description: "Private rebuild proposal for JunkMD+ — what we'd fix, why, and what the new site looks like.",
  robots: { index: false, follow: false },
};

const ROWS = [
  {
    pillar: "Performance",
    current: "WordPress + Beaver Builder + 18 CSS bundles + 35 scripts + 111 MB of images. Typical mobile PageSpeed score 30–50.",
    rebuild: "Next.js 15 static + edge rendering, optimized images, modern fonts, zero plugin bloat. Mobile PageSpeed 90+.",
    impact: "Google ranks fast sites higher. Slow mobile sites lose 50%+ of visitors before the page even loads.",
  },
  {
    pillar: "Empty Pages",
    current: "37% of indexed pages (61 of 165) are byte-identical empty Beaver Builder stubs — including /dumpster-sizes-pricing/, /request-a-quote/, /book-a-dumpster/, and /schedule-a-pickup/.",
    rebuild: "Every page has 800–1,200 words of original, locally-relevant content with FAQ schema, real internal links, and a clear CTA.",
    impact: "Empty pages get indexed and immediately bounce — Google's quality signals tank for the whole site.",
  },
  {
    pillar: "Pricing Visibility",
    current: "The Pricing page literally contains no prices — only the navigation. Tier images have no alt text. Price range is hidden in invisible schema markup.",
    rebuild: "Four published tier cards with prices ($99 / $199 / $379 / $659+), accessible alt text, and Offer schema. Click-to-book on every card.",
    impact: "Customers comparing 3 quotes will exclude you if your pricing isn't visible.",
  },
  {
    pillar: "Mobile UX",
    current: "Pop-ups, slow load, no sticky CTAs, no easy click-to-call. Tap targets too small.",
    rebuild: "Mobile-first design. Sticky bottom bar (Call · Book · Save $20). Click-to-call everywhere. Instant load.",
    impact: "60% of your traffic is mobile. This is where you book — or lose — most jobs.",
  },
  {
    pillar: "Schema / SEO",
    current: "Three conflicting LocalBusiness blocks (review counts 1,196 vs 741 vs widget's 1,290). Typo 'San Diegoi' linked to Wikipedia's 'near threatened invertebrates' page (!). Staging hostname leaks in image URLs.",
    rebuild: "Single canonical LocalBusiness schema, per-page Service + FAQPage + BreadcrumbList. One review-count source of truth.",
    impact: "Google demotes sites with broken structured data. We caught real, visible errors during the audit.",
  },
  {
    pillar: "Stability",
    current: "During our crawl: 30+ pages returned WP 'critical error' on first hit, 19 pages returned 502 errors. WP-Engine cold-cache fragility.",
    rebuild: "Static / edge-rendered on Vercel. Zero PHP workers to time out. Zero cold-error states.",
    impact: "When Google or a customer hits a cold page and sees an error, they leave. Forever.",
  },
  {
    pillar: "Conversion Path",
    current: "Two side-by-side '$20 Save' buttons every page. Contact form ships default Beaver Builder placeholder copy in production. Footer email leaks as '[email protected]'.",
    rebuild: "One primary CTA per viewport. Real contact form copy. Clean email rendering. HouseCall Pro booking link as the single source of truth.",
    impact: "Confused CTAs convert worse. Placeholder copy looks unprofessional.",
  },
  {
    pillar: "Local SEO Reach",
    current: "42 city/neighborhood pages, but several thin or duplicate (junk-removal-la-mesa + junk-removal-la-mesa-ca; storage-unit-cleanout + storage-unit-cleanouts).",
    rebuild: "60+ unique location pages with real neighborhoods, landmarks, zip codes, and highways. 130–160 total indexed pages with proper hub-and-spoke architecture.",
    impact: "More indexable, locally-distinct pages = more 'junk removal near me' rankings = more booked jobs.",
  },
  {
    pillar: "Brand Preservation",
    current: "JunkMD+ doctor metaphor, House Call branding, green color scheme, $20 first-appointment offer — all good, all preserved.",
    rebuild: "Exact same brand colors ( #88c24e / #86cd91 ), same fonts (Roboto + Oswald), same logo, same House Call language, same $20 promotion — just delivered faster and indexed better.",
    impact: "Customers won't notice the rebuild — they'll just notice the site is faster and easier to use.",
  },
  {
    pillar: "Maintenance Cost",
    current: "WordPress hosting + plugin licenses + ongoing security patches + page-builder lock-in.",
    rebuild: "Hosted on Vercel (free tier covers most small businesses). No plugins. No security patches. No page-builder licenses.",
    impact: "Lower monthly cost. Zero attack surface. Fewer technical headaches.",
  },
];

export default function AuditPage() {
  return (
    <div className="bg-white">
      {/* Cover */}
      <section className="py-16 bg-gradient-to-br from-[color:var(--brand-ink)] to-[#0e150b] text-white">
        <div className="container-x text-center max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-[color:var(--brand-green)]/20 text-[color:var(--brand-green)] text-xs font-bold uppercase tracking-widest mb-4">
            Private Proposal · For David &amp; Clemencia
          </span>
          <h1 className="font-display text-4xl md:text-6xl uppercase text-white mb-4 leading-tight">
            JunkMD+ Website <br />
            <span className="text-[color:var(--brand-green)]">Rebuild Proposal</span>
          </h1>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            We rebuilt the JunkMD+ website from the ground up as a working demo. Same brand, same logo,
            same $20 offer, same booking system — just delivered faster and indexed better. Here's what
            we'd fix, why it matters, and what it looks like live.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/" className="btn-primary">
              View the Live Demo
              <ChevronRight className="h-4 w-4" />
            </Link>
            <a href={`tel:${SITE.phoneRaw}`} className="btn-white">
              <Phone className="h-4 w-4" /> Discuss
            </a>
          </div>
        </div>
      </section>

      {/* TL;DR */}
      <section className="py-16">
        <div className="container-x max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl uppercase mb-4">The 30-Second Pitch</h2>
          <p className="text-lg leading-relaxed text-[color:var(--brand-text)] mb-6">
            JunkMD+ has the brand, the team, the reviews (1,290+ five-star Google), and the trust
            in San Diego. What it doesn't have is a website that matches. The current site is on
            WordPress with 18 CSS bundles, 35 scripts, and <strong>61 of 165 pages are byte-identical empty
            templates</strong>. The pricing page contains no prices. The schema markup links a typo to
            Wikipedia's "near-threatened invertebrates" article. Mobile loads slow. Contact form still
            ships placeholder copy from the page builder.
          </p>
          <p className="text-lg leading-relaxed text-[color:var(--brand-text)] mb-6">
            We rebuilt it on Next.js — same look, same logo, same House Call language, same booking flow,
            same $20 offer. <strong>140+ pages of real, original content.</strong> Mobile PageSpeed 90+.
            Same-day deploys. Hosted on Vercel for ~$0/month.
          </p>
          <p className="text-lg leading-relaxed text-[color:var(--brand-text)]">
            This page is the receipt — a side-by-side of what we'd change and why. The live demo at the
            top of this page is the proof.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-12 bg-[color:var(--brand-bg-soft)]">
        <div className="container-x">
          <h2 className="font-display text-3xl md:text-4xl uppercase mb-2 text-center">Side-by-Side: 10 Things We'd Fix</h2>
          <p className="text-center text-[color:var(--brand-text)] mb-10 max-w-3xl mx-auto">
            Every row is something we found in the current junkmd.com site during a full crawl on 2026-05-21.
            Every "Rebuild" column is something already shipped in the demo above.
          </p>

          <div className="space-y-4 max-w-5xl mx-auto">
            {ROWS.map((row, i) => (
              <article key={row.pillar} className="bg-white border border-[color:var(--brand-border)] rounded-xl overflow-hidden">
                <header className="bg-[color:var(--brand-ink)] text-white px-5 py-3 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[color:var(--brand-green)] flex items-center justify-center font-display text-base">{i + 1}</span>
                  <h3 className="font-display text-xl uppercase text-white">{row.pillar}</h3>
                </header>
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[color:var(--brand-border)]">
                  <div className="p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-red-700 mb-2 flex items-center gap-1">
                      <X className="h-3.5 w-3.5" /> Today
                    </p>
                    <p className="text-sm text-[color:var(--brand-text)]">{row.current}</p>
                  </div>
                  <div className="p-5 bg-[color:var(--brand-green)]/5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[color:var(--brand-green-dark)] mb-2 flex items-center gap-1">
                      <Check className="h-3.5 w-3.5" /> Rebuild
                    </p>
                    <p className="text-sm text-[color:var(--brand-text)]">{row.rebuild}</p>
                  </div>
                </div>
                <footer className="px-5 py-3 bg-[color:var(--brand-bg-soft)] border-t border-[color:var(--brand-border)]">
                  <p className="text-xs"><strong className="uppercase tracking-wider text-[color:var(--brand-muted)]">Why it matters: </strong>{row.impact}</p>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What's new */}
      <section className="py-16 bg-white">
        <div className="container-x max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl uppercase mb-6">What's New in the Rebuild</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "60+ neighborhood location pages (vs your current 42), each with real zip codes, landmarks, and highway access",
              "Original 800–1,200 word service pages (yours average 300–500)",
              "FAQ schema on every service page → eligible for Google rich results",
              "Sticky mobile CTA bar (Call · Book · Save $20)",
              "Click-to-call phone numbers across the entire site",
              "Real published pricing tiers ($99 / $199 / $379 / $659+) with Offer schema",
              "Truck comparison visual rebuilt as CSS/SVG (not 1MB+ PNG)",
              "Single canonical LocalBusiness schema (no more 3 conflicting blocks)",
              "All HouseCall Pro booking links wired across every page",
              "Family-owned bios for David & Clemencia preserved verbatim",
              "Pitch-deck audit page (this page) — not indexed, just for you",
              "Built-in blog/CMS architecture ready for future content",
            ].map((point) => (
              <div key={point} className="flex gap-2">
                <Check className="h-5 w-5 text-[color:var(--brand-green)] shrink-0 mt-0.5" />
                <p className="text-sm text-[color:var(--brand-text)]">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand preserved */}
      <section className="py-16 bg-[color:var(--brand-bg-soft)]">
        <div className="container-x max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl uppercase mb-4">What Stays the Same</h2>
          <p className="text-[color:var(--brand-text)] mb-6">Your brand is working. We're not touching it.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "JunkMD+ name and medical-cross styling",
              "Same primary green (#88c24e) and secondary green (#86cd91)",
              "Roboto + Oswald font pairing",
              "House Call doctor metaphor and language",
              "$20 first-appointment offer",
              "(858) 869-9448 phone number",
              "HouseCall Pro booking flow — no replacement",
              "David and Clemencia bios verbatim",
              "All review quotes preserved",
              "Truck comparison USP (1 truck = 6 pickups)",
              "4-tier pricing structure",
              "Green/white color scheme everywhere",
            ].map((p) => (
              <div key={p} className="flex gap-2">
                <Check className="h-5 w-5 text-[color:var(--brand-green)] shrink-0 mt-0.5" />
                <p className="text-sm text-[color:var(--brand-text)]">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics */}
      <section className="py-16 bg-white">
        <div className="container-x max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl uppercase mb-6">If You Approve — What Happens Next</h2>
          <ol className="space-y-3 text-[color:var(--brand-text)]">
            <li className="flex gap-3">
              <span className="font-display text-xl text-[color:var(--brand-green-dark)]">1.</span>
              <span><strong>Point junkmd.com DNS to Vercel.</strong> About 15 minutes of DNS work, full cutover same day. Your old site goes away, this new one goes live in its place.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-display text-xl text-[color:var(--brand-green-dark)]">2.</span>
              <span><strong>Set up support@junkmd.com on the new infrastructure.</strong> Same email address, same inbox — just rerouted.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-display text-xl text-[color:var(--brand-green-dark)]">3.</span>
              <span><strong>301 redirects from old URLs to new.</strong> So Google doesn't lose any ranking equity in the transition.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-display text-xl text-[color:var(--brand-green-dark)]">4.</span>
              <span><strong>Migrate any blog content worth keeping.</strong> We've already structured the new blog architecture.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-display text-xl text-[color:var(--brand-green-dark)]">5.</span>
              <span><strong>Train your team (15 minutes).</strong> The booking flow is identical — HouseCall Pro hasn't moved. Only difference is your site is faster and looks better.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-display text-xl text-[color:var(--brand-green-dark)]">6.</span>
              <span><strong>Monthly content additions.</strong> One new blog post + 2-3 new service or location pages per month.</span>
            </li>
          </ol>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[color:var(--brand-green)] text-white">
        <div className="container-x text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl uppercase text-white mb-4">Ready to See the Demo Live?</h2>
          <p className="text-white/90 text-lg mb-6">
            Click around. Try a service page. Try a location page. Try booking. Test it on your phone.
            Then let's talk.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/" className="btn-white">
              <Calendar className="h-4 w-4" /> Open the Demo Homepage
            </Link>
            <a href={`tel:${SITE.phoneRaw}`} className="btn-white">
              <Phone className="h-4 w-4" /> Call to Discuss
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
