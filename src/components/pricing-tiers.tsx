import { Check } from "lucide-react";
import { PRICING_TIERS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const POPULAR = "medium-load";

export function PricingTiers() {
  return (
    <section id="pricing" className="section bg-cream">
      <div className="container-x">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">Pricing</p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              fontWeight: 500,
            }}
          >
            Four flat-rate tiers. No surprises. One trip in our truck.
          </h2>
          <p className="mt-5 text-ink-soft text-[16px] leading-relaxed max-w-xl">
            We size the job in person and quote a flat price before we touch a thing. Our biggest truckload equals about six pickup truck loads — meaning one of our trips replaces a weekend of yours.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRICING_TIERS.map((tier) => {
            const isPopular = tier.slug === POPULAR;
            return (
              <article
                key={tier.slug}
                className={cn(
                  "relative bg-paper-pure rounded-lg flex flex-col p-7",
                  isPopular ? "border-2 border-ink" : "border border-border",
                )}
              >
                {isPopular && (
                  <span
                    className="absolute -top-2.5 left-7 px-2.5 py-0.5 bg-paper-pure text-brand-dark text-[11px]"
                    style={{
                      fontFamily: "var(--font-fraunces), serif",
                      fontStyle: "italic",
                      fontWeight: 500,
                    }}
                  >
                    Most chosen
                  </span>
                )}
                <p className="eyebrow mb-3">{tier.short}</p>
                <h3
                  style={{
                    fontFamily: "var(--font-fraunces), serif",
                    fontSize: "1.5rem",
                    fontWeight: 500,
                    letterSpacing: "-0.015em",
                    lineHeight: 1.1,
                  }}
                >
                  {tier.name}
                </h3>
                <p className="mt-1 text-[13px] text-muted">{tier.fraction}</p>

                <p
                  className="mt-6 mb-1"
                  style={{
                    fontFamily: "var(--font-fraunces), serif",
                    fontSize: "2.5rem",
                    fontWeight: 600,
                    letterSpacing: "-0.025em",
                    lineHeight: 1,
                    color: "var(--ink)",
                  }}
                >
                  {tier.priceDisplay}
                </p>
                <p className="text-[13px] text-muted mb-6">starting</p>

                <p className="text-[14px] text-ink-soft leading-relaxed mb-6">{tier.description}</p>

                <ul className="space-y-2.5 mb-7 flex-1">
                  {tier.includes.map((i) => (
                    <li key={i} className="flex gap-2.5 text-[14px] text-ink-soft">
                      <Check className="h-4 w-4 mt-0.5 shrink-0 text-brand-dark" strokeWidth={2.5} />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={SITE.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn("btn w-full", isPopular ? "btn-primary" : "btn-ghost")}
                >
                  Book this size
                </a>
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-[13px] text-muted max-w-2xl">
          Prices shown are starting rates. Final flat price is confirmed on site before work begins.
          The $20 first-appointment discount applies to Small Load and up.
        </p>
      </div>
    </section>
  );
}
