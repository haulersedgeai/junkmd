import Image from "next/image";
import Link from "next/link";
import { Phone, Star, ChevronRight } from "lucide-react";
import { SITE } from "@/lib/constants";

export function Hero({
  badge,
  title,
  subtitle,
  ctaPrimary = { label: "Book Now — Save $20", href: SITE.bookingUrl, external: true },
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
    <section className="relative bg-gradient-to-b from-[color:var(--brand-bg-soft)] to-white overflow-hidden">
      <div className="container-x py-10 md:py-16 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          {badge && (
            <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-[color:var(--brand-green)]/15 text-[color:var(--brand-green-dark)] text-xs font-bold uppercase tracking-wider">
              <Star className="h-3.5 w-3.5 fill-current" />
              {badge}
            </span>
          )}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.05] text-[color:var(--brand-ink)]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg text-[color:var(--brand-text)] leading-relaxed max-w-xl">
              {subtitle}
            </p>
          )}
          <div className="mt-6 flex flex-wrap gap-3">
            {ctaPrimary.external ? (
              <a
                href={ctaPrimary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base"
              >
                {ctaPrimary.label}
                <ChevronRight className="h-4 w-4" />
              </a>
            ) : (
              <Link href={ctaPrimary.href} className="btn-primary text-base">
                {ctaPrimary.label}
                <ChevronRight className="h-4 w-4" />
              </Link>
            )}
            <a href={ctaSecondary.href} className="btn-outline text-base">
              <Phone className="h-4 w-4" />
              {ctaSecondary.label}
            </a>
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm text-[color:var(--brand-text)]">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-[color:var(--brand-green)] text-[color:var(--brand-green)]" />
              ))}
            </div>
            <span className="font-bold">5-star</span>
            <span>· {SITE.reviews.google.count.toLocaleString()} Google reviews · {SITE.reviews.yelp.count}+ Yelp reviews</span>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-xl">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
