import Link from "next/link";
import { Phone, Check } from "lucide-react";
import { HeroCarousel } from "@/components/hero-carousel";
import { SITE } from "@/lib/constants";

const VALUE_BITS = [
  "Same-day available",
  "Flat-rate pricing",
  "Fully insured",
  "Donations & recycling first",
];

export function Hero({
  title,
  subtitle,
  ctaPrimary = { label: "Book now", href: SITE.bookingUrl, external: true },
  ctaSecondary = { label: SITE.phone, href: `tel:${SITE.phoneRaw}` },
}: {
  badge?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  ctaPrimary?: { label: string; href: string; external?: boolean };
  ctaSecondary?: { label: string; href: string };
  image?: string;
  imageAlt?: string;
}) {
  const heading = title ?? <>Top-rated junk removal in San Diego.</>;
  const sub = subtitle ?? (
    <>
      Same-day house calls across San Diego County. Flat-rate up-front pricing. We do the lifting — you save $20 when you book online.
    </>
  );

  return (
    <section
      className="relative isolate overflow-hidden bg-ink text-white"
      style={{ minHeight: "640px" }}
    >
      <HeroCarousel />

      <div className="container-x relative flex flex-col items-start justify-end min-h-[560px] md:min-h-[640px] pt-32 pb-14 md:pb-20">
        {/* Trust pill */}
        <span
          className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm px-3 py-1 text-[13px] mb-6"
          style={{ fontWeight: 500 }}
        >
          <span className="text-brand">★</span>
          <span className="text-white">5.0</span>
          <span className="text-white/50">·</span>
          <span className="text-white/90">{SITE.reviews.totalDisplay} {SITE.reviews.totalLabel}</span>
          <span className="text-white/50">·</span>
          <span className="text-white/90">Family-owned since 2012</span>
        </span>

        <h1
          className="text-white"
          style={{
            fontSize: "clamp(2.5rem, 5.5vw, 3.5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            fontWeight: 600,
            maxWidth: "720px",
          }}
        >
          {heading}
        </h1>

        <p className="mt-5 max-w-[560px] text-white/85 text-[18px] leading-[1.55]">
          {sub}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {ctaPrimary.external ? (
            <a href={ctaPrimary.href} target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-lg">
              {ctaPrimary.label}
            </a>
          ) : (
            <Link href={ctaPrimary.href} className="btn btn-accent btn-lg">{ctaPrimary.label}</Link>
          )}
          <a href={ctaSecondary.href} className="btn btn-ghost-white btn-lg">
            <Phone className="h-4 w-4" />
            {ctaSecondary.label}
          </a>
        </div>

        <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px] text-white/90">
          {VALUE_BITS.map((v) => (
            <li key={v} className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-brand" strokeWidth={3} />
              <span>{v}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
