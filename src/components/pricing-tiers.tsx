import Image from "next/image";
import { PRICING_TIERS, SITE } from "@/lib/constants";

export function PricingTiers() {
  return (
    <section id="pricing" className="section bg-bg-soft">
      <div className="container-x">
        <div className="max-w-2xl mb-12">
          <p className="label" style={{ color: "var(--brand-dark)" }}>Honest pricing</p>
          <h2 className="mt-3">Nine load sizes — you only pay for the space you use.</h2>
          <p className="mt-4 text-[18px] leading-[1.55] text-ink-soft">
            You only pay for the space you use — no hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRICING_TIERS.map((tier) => (
            <article
              key={tier.slug}
              className="card flex flex-col bg-bg overflow-hidden relative"
            >
              <div className="relative aspect-[16/9] bg-bg-muted">
                <Image
                  src={tier.image}
                  alt={`${tier.name} — ${tier.description}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
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

                <div className="hairline my-5" />

                <p className="text-[14px] text-ink-soft flex-1 mb-6">{tier.description}</p>

                <a
                  href={SITE.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent w-full"
                >
                  Book this load
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-[13px] text-muted max-w-2xl" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
          Flat per-size pricing · final flat price confirmed on site · $20 first-appointment discount applies to any pickup
        </p>
      </div>
    </section>
  );
}
