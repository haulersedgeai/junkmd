import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Truck } from "lucide-react";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "That page has moved or no longer exists. Browse JunkMD+ junk removal services, service areas, or request a free quote.",
  robots: { index: false, follow: true },
};

// The root layout already renders AnnouncementBar, Header, Footer and
// MobileStickyCTA around this route, so this file only supplies the body copy.
const LINKS = [
  {
    href: "/junk-removal-services",
    icon: Truck,
    title: "Junk Removal Services",
    body: "Furniture, appliances, estate cleanouts, light demolition and everything in between.",
  },
  {
    href: "/locations",
    icon: MapPin,
    title: "Service Areas",
    body: "Every neighborhood we cover across San Diego County.",
  },
  {
    href: "/request-a-quote",
    icon: ArrowRight,
    title: "Request a Quote",
    body: "Tell us what you need hauled and we'll send a flat, up-front price.",
  },
];

export default function NotFound() {
  return (
    <section className="hero-mesh">
      <div className="container-x section">
        <div className="max-w-2xl">
          <span className="label">404 — Page not found</span>
          <h1 className="display mt-3 mb-4">
            We couldn&apos;t find that{" "}
            <span className="text-brand-on-light">page</span>
          </h1>
          <p className="text-lg text-ink-soft mb-7 max-w-xl">
            The page you were looking for has moved or no longer exists. Everything we
            haul is still one click away — start from the links below.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn btn-accent btn-lg">
              Back to Home
            </Link>
            <a href={`tel:${SITE.phoneRaw}`} className="btn btn-outline btn-lg">
              <Phone className="h-4 w-4" />
              {SITE.phone}
            </a>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3 mt-12">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="card card-hover p-5 transition-colors"
            >
              <l.icon className="h-5 w-5 text-brand-dark mb-3" />
              <h2 className="text-lg mb-1">{l.title}</h2>
              <p className="text-sm text-ink-soft">{l.body}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
