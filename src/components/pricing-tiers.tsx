import Image from "next/image";
import { Check, ChevronRight } from "lucide-react";
import { PRICING_TIERS, SITE } from "@/lib/constants";

export function PricingTiers() {
  return (
    <section id="pricing" className="py-16 bg-[color:var(--brand-bg-soft)]">
      <div className="container-x">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[color:var(--brand-green-dark)]">
            Up-Front Pricing
          </span>
          <h2 className="font-display text-3xl sm:text-4xl uppercase mt-2 mb-3">
            Four Tiers. Flat-Rate Pricing. No Surprises.
          </h2>
          <p className="text-[color:var(--brand-text)]">
            We size the job in person and quote a flat price before we touch a thing. Our biggest truckload equals about six pickup truck loads.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.slug}
              className="bg-white border border-[color:var(--brand-border)] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="relative aspect-[4/3] bg-[color:var(--brand-bg-muted)]">
                <Image
                  src={tier.image}
                  alt={`${tier.name} — ${tier.fraction}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 px-2 py-1 bg-[color:var(--brand-green)] text-white text-xs font-bold uppercase rounded">
                  {tier.short}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display text-xl uppercase">{tier.name}</h3>
                <p className="text-xs text-[color:var(--brand-muted)] mb-2">{tier.fraction}</p>
                <p className="text-2xl font-bold text-[color:var(--brand-green-dark)] mb-3">
                  {tier.priceDisplay}
                </p>
                <p className="text-sm text-[color:var(--brand-text)] mb-4">{tier.description}</p>
                <ul className="space-y-1.5 text-sm mb-5 flex-1">
                  {tier.includes.map((inc) => (
                    <li key={inc} className="flex gap-2">
                      <Check className="h-4 w-4 text-[color:var(--brand-green)] shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={SITE.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm w-full"
                >
                  Book This Size
                  <ChevronRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-[color:var(--brand-muted)] text-center mt-6">
          Prices shown are starting rates. Final price quoted on-site before we begin work.
          First-appointment discount of $20 applies to Small Load and up.
        </p>
      </div>
    </section>
  );
}
