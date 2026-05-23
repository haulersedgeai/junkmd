import Image from "next/image";
import { Check } from "lucide-react";
import { PRICING_TIERS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const POPULAR = "medium-load";

export function PricingTiers() {
  return (
    <section id="pricing" className="section bg-bg-soft">
      <div className="container-x">
        <div className="max-w-2xl mb-12">
          <p className="label" style={{ color: "var(--brand-dark)" }}>Honest pricing</p>
          <h2 className="mt-3">Four flat-rate tiers. No surprises.</h2>
          <p className="mt-4 text-[18px] leading-[1.55] text-ink-soft">
            We size the job in person and quote a flat price before we touch a thing. Save $20 on your first appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRICING_TIERS.map((tier) => {
            const isPopular = tier.slug === POPULAR;
            return (
              <article
                key={tier.slug}
                className={cn(
                  "card flex flex-col bg-bg overflow-hidden relative",
                  isPopular && "border-brand",
                )}
                style={isPopular ? { borderWidth: 2 } : undefined}
              >
                {isPopular && (
                  <span className="pill pill-success absolute top-3 left-3 z-10 backdrop-blur-sm">Most chosen</span>
                )}
                <div className="relative aspect-[16/9] bg-bg-muted">
                  <Image
                    src={tier.image}
                    alt={`${tier.name} — ${tier.fraction}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p
                    className="text-[13px] text-muted uppercase tracking-[0.04em]"
                    style={{ fontWeight: 500 }}
                  >
                    {tier.short}
                  </p>
                  <h3 className="mt-1" style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.01em" }}>
                    {tier.name}
                  </h3>

                  <p
                    className="mt-4 text-ink tnum"
                    style={{
                      fontFamily: "var(--font-geist-mono), monospace",
                      fontSize: 32,
                      lineHeight: 1,
                      fontWeight: 500,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {tier.priceDisplay}
                  </p>
                  <p className="mt-1.5 text-[13px] text-muted">{tier.fraction}</p>

                  <div className="hairline my-5" />

                  <ul className="space-y-2 flex-1 mb-6">
                    {tier.includes.map((i) => (
                      <li key={i} className="flex gap-2 text-[14px] text-ink-soft">
                        <Check className="h-4 w-4 mt-0.5 shrink-0 text-brand-dark" strokeWidth={2.5} />
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={SITE.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn("btn w-full", isPopular ? "btn-accent" : "btn-ghost-soft")}
                  >
                    Book this load
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-6 text-[13px] text-muted max-w-2xl" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
          Prices shown are starting rates · final flat price confirmed on site · $20 first-appointment discount applies to Small Load and up
        </p>
      </div>
    </section>
  );
}
