import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

export function Hero({
  badge,
  title,
  subtitle,
  ctaPrimary = { label: "Book now", href: SITE.bookingUrl, external: true },
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
    <section className="relative overflow-hidden hero-mesh">
      <div className="container-x section-hero">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          <div className="max-w-[640px]">
            <span className="pill pill-outline mb-6">
              <span className="text-brand-dark">★</span>
              <span className="text-ink">5.0</span>
              <span className="text-muted">·</span>
              <span className="text-ink-soft">{SITE.reviews.google.count.toLocaleString()} Google reviews</span>
            </span>
            <h1 className="display text-ink">{title}</h1>
            {subtitle && (
              <p className="mt-5 text-[18px] leading-[1.55] text-ink-soft max-w-[560px]">{subtitle}</p>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              {ctaPrimary.external ? (
                <a
                  href={ctaPrimary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent btn-lg"
                >
                  {ctaPrimary.label}
                </a>
              ) : (
                <Link href={ctaPrimary.href} className="btn btn-accent btn-lg">
                  {ctaPrimary.label}
                </Link>
              )}
              <a href={ctaSecondary.href} className="btn btn-ghost btn-lg">
                <Phone className="h-4 w-4" />
                {ctaSecondary.label}
              </a>
            </div>
            <p
              className="mt-6 text-[13px] text-muted"
              style={{ fontFamily: "var(--font-geist-mono), monospace" }}
            >
              $99 minimum · Free estimates · Licensed &amp; insured
              {badge && <> · {badge}</>}
            </p>
          </div>

          <div className="relative aspect-[5/4] w-full card-hero overflow-hidden">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
