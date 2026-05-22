import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

export function Hero({
  badge,
  title,
  subtitle,
  ctaPrimary = { label: "Book online", href: SITE.bookingUrl, external: true },
  ctaSecondary = { label: `Call ${SITE.phone}`, href: `tel:${SITE.phoneRaw}` },
  image = "/images/truck-hero.webp",
  imageAlt = "JunkMD+ green junk removal truck in San Diego",
}: {
  badge?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  ctaPrimary?: { label: string; href: string; external?: boolean };
  ctaSecondary?: { label: string; href: string };
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-paper">
      {/* Background image with ink overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt=""
          aria-hidden="true"
          fill
          priority
          className="object-cover img-soft"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(14,26,14,0.45) 0%, rgba(14,26,14,0.35) 40%, rgba(14,26,14,0.75) 100%)",
          }}
        />
      </div>

      <div className="container-x relative min-h-[78vh] md:min-h-[640px] flex flex-col justify-end pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-3xl">
          {badge && (
            <p className="eyebrow eyebrow-on-dark mb-6">{badge}</p>
          )}
          <h1
            className="text-paper"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.75rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.025em",
              fontWeight: 600,
              fontVariationSettings: "'opsz' 144, 'SOFT' 60",
              maxWidth: "20ch",
            }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className="mt-6 max-w-2xl text-paper/85"
              style={{ fontSize: "1.125rem", lineHeight: 1.55 }}
            >
              {subtitle}
            </p>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            {ctaPrimary.external ? (
              <a
                href={ctaPrimary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-on-dark"
              >
                {ctaPrimary.label}
              </a>
            ) : (
              <Link href={ctaPrimary.href} className="btn btn-on-dark">
                {ctaPrimary.label}
              </Link>
            )}
            <a href={ctaSecondary.href} className="btn btn-ghost-on-dark">
              <Phone className="h-4 w-4" />
              {ctaSecondary.label}
            </a>
          </div>
          <p className="mt-6 text-[13px] text-paper/65">
            <span className="text-brand">★★★★★</span>{" "}
            {SITE.reviews.google.count.toLocaleString()}+ reviews on Google
            <span className="mx-2">·</span>
            {SITE.reviews.yelp.count}+ on Yelp
            <span className="mx-2">·</span>
            Family-owned since 2012
          </p>
        </div>
      </div>
    </section>
  );
}
