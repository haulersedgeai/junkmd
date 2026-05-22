import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check, Phone } from "lucide-react";
import { Wordmark } from "@/components/wordmark";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "JunkMD+, evolved — Rebuild proposal",
  description:
    "Private rebuild proposal for JunkMD+. Same brand, same trucks, same trust. A site that finally matches.",
  robots: { index: false, follow: false },
};

const STAYS = [
  "The JunkMD+ name and wordmark heritage",
  "The doctor metaphor — house calls, the green +",
  "David Leddick's owner bio (since 2012)",
  "Clemencia Sandoval's co-owner bio (since 2018)",
  "Your HouseCall Pro booking system — every CTA links straight to it",
  "Your phone number (858) 869-9448",
  "Your $20 first-appointment offer",
  "Your green color (kept as accent, used with restraint)",
  "Your 4-tier load pricing",
  "Your 1,290+ five-star Google reviews and 150+ Yelp reviews",
  "Your NetVendor / NARPM / Local Junkers partnerships",
  "Your address on Morena Blvd",
];

const NEW = [
  {
    title: "Refreshed wordmark",
    body: "JunkMD set in Fraunces — a contemporary serif with optical-size scaling. The + becomes a refined medical cross instead of a casual punctuation mark. Same idea, sharper execution.",
  },
  {
    title: "Editorial typography",
    body: "Fraunces (display) paired with Inter (body). The same pairing trusted by premium service brands and modern design publications.",
  },
  {
    title: "Clinical green palette",
    body: "Your green stays, used as an accent. A deeper forest green carries depth on CTAs, footer, and quiet moments. The site feels calm, considered, and confidently medical — not loud.",
  },
  {
    title: "Generous whitespace",
    body: "Premium feels like breathing room. Section padding doubled. 1,280-pixel container. Editorial spacing throughout. The site reads like a brochure, not a flyer.",
  },
  {
    title: "Real photography treatment",
    body: "Hero, services, and reviews use your existing photography but with subtle contrast and saturation tuning. No more washed-out PNG screenshots in the layout.",
  },
];

const STATS = [
  { from: "300–500 words per service page", to: "800–1,200 words per service page", caption: "Genuine local content, every page." },
  { from: "WordPress + Beaver Builder", to: "Next.js on Vercel", caption: "Modern stack. No plugins to patch." },
  { from: "Mobile PageSpeed 30–50", to: "Mobile PageSpeed 95+ (target)", caption: "Faster loads, better rankings." },
];

export default function AuditPage() {
  return (
    <div className="bg-paper text-ink">
      {/* Cover */}
      <section className="bg-paper-pure border-b border-border">
        <div className="container-x py-24 md:py-32 max-w-5xl mx-auto">
          <div className="mb-8">
            <Wordmark size="lg" />
          </div>
          <p className="eyebrow mb-6">A private proposal for David and Clemencia</p>
          <h1
            style={{
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              fontWeight: 600,
              fontVariationSettings: "'opsz' 144, 'SOFT' 60",
            }}
          >
            JunkMD+, evolved.
          </h1>
          <p
            className="mt-6 max-w-2xl text-ink-soft"
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontStyle: "italic",
              fontSize: "1.5rem",
              lineHeight: 1.35,
              fontWeight: 300,
            }}
          >
            Same brand. Same trucks. Same +20 years of trust. A site that finally matches.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/" className="btn btn-primary">
              Open the live site
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a href={`tel:${SITE.phoneRaw}`} className="btn btn-ghost">
              <Phone className="h-4 w-4" />
              Discuss the proposal
            </a>
          </div>
        </div>
      </section>

      {/* Side-by-side */}
      <section className="section bg-paper">
        <div className="container-x max-w-6xl mx-auto">
          <p className="eyebrow mb-4">Visual side-by-side</p>
          <h2
            className="max-w-3xl mb-10"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              fontWeight: 500,
            }}
          >
            The same brand, presented like a 2026 home-service company instead of a 2018 WordPress site.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <figure>
              <div className="aspect-[4/3] bg-cream border border-border rounded-md flex items-center justify-center">
                <p className="text-muted text-[14px] text-center px-6">
                  [Today — junkmd.com screenshot]<br />
                  <span className="text-[12px]">Drop screenshot here before the meeting</span>
                </p>
              </div>
              <figcaption
                className="mt-4 text-ink"
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontStyle: "italic",
                  fontSize: "1.125rem",
                }}
              >
                Today
              </figcaption>
              <p className="text-[14px] text-muted mt-1">WordPress + Beaver Builder, ca. 2018</p>
            </figure>

            <figure>
              <div className="relative aspect-[4/3] bg-ink rounded-md overflow-hidden">
                <Image
                  src="/images/truck-hero.webp"
                  alt="JunkMD+ rebuild preview"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <Wordmark size="lg" variant="paper" />
                  <p
                    className="text-paper mt-3"
                    style={{
                      fontFamily: "var(--font-fraunces), serif",
                      fontSize: "1.5rem",
                      fontWeight: 500,
                      lineHeight: 1.1,
                      letterSpacing: "-0.015em",
                    }}
                  >
                    Top-rated, fast, and friendly junk removal in San Diego.
                  </p>
                </div>
              </div>
              <figcaption
                className="mt-4 text-ink"
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontStyle: "italic",
                  fontSize: "1.125rem",
                }}
              >
                Proposed
              </figcaption>
              <p className="text-[14px] text-muted mt-1">JunkMD+, evolved · Next.js on Vercel</p>
            </figure>
          </div>
        </div>
      </section>

      {/* What stays the same */}
      <section className="section bg-cream">
        <div className="container-x max-w-5xl mx-auto">
          <p className="eyebrow mb-4">What stays the same</p>
          <h2
            className="max-w-3xl mb-3"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              fontWeight: 500,
            }}
          >
            Your brand DNA — preserved.
          </h2>
          <p className="text-ink-soft text-[16px] leading-relaxed max-w-2xl mb-12">
            You&rsquo;ve built something that works. We&rsquo;re not touching what works. Every customer-recognizable detail of JunkMD+ stays exactly where it is.
          </p>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-3">
            {STAYS.map((s) => (
              <div key={s} className="flex gap-3 items-start">
                <Check className="h-5 w-5 mt-0.5 shrink-0 text-brand-dark" strokeWidth={2.5} />
                <p className="text-[15px] text-ink-soft">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's new */}
      <section className="section bg-paper">
        <div className="container-x max-w-5xl mx-auto">
          <p className="eyebrow mb-4">What&rsquo;s new</p>
          <h2
            className="max-w-3xl mb-3"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              fontWeight: 500,
            }}
          >
            A visual layer worthy of the trust you&rsquo;ve already earned.
          </h2>
          <p className="text-ink-soft text-[16px] leading-relaxed max-w-2xl mb-12">
            Five upgrades, none of which change the booking flow, the phone number, or the brand recognition. They change how the site <em>feels.</em>
          </p>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {NEW.map((n) => (
              <div key={n.title}>
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-fraunces), serif",
                    fontSize: "1.5rem",
                    fontWeight: 500,
                    letterSpacing: "-0.015em",
                  }}
                >
                  {n.title}
                </h3>
                <p className="text-[15px] text-ink-soft leading-relaxed">{n.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical wins */}
      <section className="section bg-cream">
        <div className="container-x max-w-5xl mx-auto">
          <p className="eyebrow mb-4">Supporting evidence</p>
          <h2
            className="max-w-3xl mb-3"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              fontWeight: 500,
            }}
          >
            The technical wins, in three numbers.
          </h2>
          <p className="text-ink-soft text-[16px] leading-relaxed max-w-2xl mb-12">
            Aesthetics is the lead argument. These are the receipts.
          </p>

          <div className="grid sm:grid-cols-3 gap-5">
            {STATS.map((s) => (
              <div key={s.from} className="bg-paper-pure border border-border rounded-lg p-7">
                <p className="text-[13px] text-muted mb-3" style={{ fontWeight: 500 }}>From</p>
                <p
                  className="text-ink mb-6"
                  style={{
                    fontFamily: "var(--font-fraunces), serif",
                    fontSize: "1.25rem",
                    fontWeight: 500,
                    lineHeight: 1.2,
                  }}
                >
                  {s.from}
                </p>
                <p className="text-[13px] text-brand-dark mb-3" style={{ fontWeight: 500 }}>To</p>
                <p
                  className="text-ink mb-6"
                  style={{
                    fontFamily: "var(--font-fraunces), serif",
                    fontSize: "1.25rem",
                    fontWeight: 500,
                    lineHeight: 1.2,
                  }}
                >
                  {s.to}
                </p>
                <p className="text-[13px] text-muted leading-relaxed">{s.caption}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid sm:grid-cols-4 gap-8 pt-8 border-t border-border">
            <div>
              <p
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontSize: "2.5rem",
                  fontWeight: 600,
                  letterSpacing: "-0.025em",
                  lineHeight: 1,
                  color: "var(--ink)",
                }}
              >
                175
              </p>
              <p className="text-[13px] text-muted mt-2">pages indexed (vs ~165 today, 37% of which are empty stubs)</p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontSize: "2.5rem",
                  fontWeight: 600,
                  letterSpacing: "-0.025em",
                  lineHeight: 1,
                  color: "var(--ink)",
                }}
              >
                60+
              </p>
              <p className="text-[13px] text-muted mt-2">San Diego neighborhood pages (up from 42)</p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontSize: "2.5rem",
                  fontWeight: 600,
                  letterSpacing: "-0.025em",
                  lineHeight: 1,
                  color: "var(--ink)",
                }}
              >
                0
              </p>
              <p className="text-[13px] text-muted mt-2">WordPress plugins to patch, ever again</p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontSize: "2.5rem",
                  fontWeight: 600,
                  letterSpacing: "-0.025em",
                  lineHeight: 1,
                  color: "var(--ink)",
                }}
              >
                $0
              </p>
              <p className="text-[13px] text-muted mt-2">monthly hosting (Vercel free tier covers it)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment & next steps placeholder */}
      <section className="section bg-paper">
        <div className="container-x max-w-3xl mx-auto">
          <p className="eyebrow mb-4">Investment &amp; next steps</p>
          <h2
            className="mb-6"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              fontWeight: 500,
            }}
          >
            What it takes to make this live.
          </h2>
          <div className="bg-cream border border-border rounded-lg p-10 text-center">
            <p className="text-ink-soft text-[15px] leading-relaxed">
              [Justin to fill: project investment, payment schedule, timeline to launch, ongoing partnership]
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <a href={`tel:${SITE.phoneRaw}`} className="btn btn-primary">
              <Phone className="h-4 w-4" />
              Call Justin to discuss
            </a>
            <Link href="/" className="btn btn-ghost">
              Tour the live demo
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
