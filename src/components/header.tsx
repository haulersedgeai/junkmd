"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Wordmark } from "@/components/wordmark";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const NAV = [
  {
    label: "About",
    href: "/about",
    items: [
      { label: "About JunkMD+", href: "/about" },
      { label: "Our company", href: "/our-company" },
      { label: "Why choose us", href: "/why-choose-us" },
      { label: "David Leddick — Owner", href: "/david-leddick" },
      { label: "Clemencia Sandoval — Co-Owner", href: "/clemencia-sandoval" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    label: "Services",
    href: "/junk-removal-services",
    items: [
      { label: "Junk Removal", href: "/junk-removal-services" },
      { label: "Demolition", href: "/demolition-cleanup" },
      { label: "Recycling", href: "/recycling-services" },
      { label: "Donations", href: "/donation-pickup" },
      { label: "Scrap Metal", href: "/scrap-metal-removal" },
    ],
  },
  {
    label: "Locations",
    href: "/locations",
    items: [
      { label: "San Diego", href: "/junk-removal-san-diego" },
      { label: "La Jolla", href: "/junk-removal-la-jolla" },
      { label: "Pacific Beach", href: "/junk-removal-pacific-beach" },
      { label: "Carlsbad", href: "/junk-removal-carlsbad" },
      { label: "Chula Vista", href: "/junk-removal-chula-vista" },
      { label: "Coronado", href: "/junk-removal-coronado" },
      { label: "Encinitas", href: "/junk-removal-encinitas" },
      { label: "Poway", href: "/junk-removal-poway" },
      { label: "All locations →", href: "/locations" },
    ],
  },
  { label: "Pricing", href: "/pricing", items: [] },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-bg/90 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <Link href="/" className="shrink-0" aria-label="JunkMD+ home">
          <Wordmark size="lg" />
        </Link>

        {/* Desktop nav — center */}
        <nav className="hidden lg:flex items-center gap-1 text-[14px]">
          {NAV.map((item) =>
            item.items.length > 0 ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 px-3 py-2 text-ink-soft hover:text-ink transition-colors"
                  style={{ fontWeight: 500 }}
                >
                  {item.label}
                  <ChevronDown className="h-3 w-3 opacity-60" />
                </Link>
                <div
                  className={cn(
                    "absolute left-0 top-full pt-2 transition-opacity duration-150",
                    activeMenu === item.label ? "opacity-100 visible" : "opacity-0 invisible",
                  )}
                >
                  <div className="min-w-[260px] rounded-[12px] border border-border bg-bg py-1.5" style={{ boxShadow: "var(--shadow-md)" }}>
                    {item.items.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-2 text-[14px] text-ink-soft hover:bg-bg-soft hover:text-ink transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-ink-soft hover:text-ink transition-colors"
                style={{ fontWeight: 500 }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="inline-flex items-center gap-2 text-[13px] text-ink hover:text-brand-dark transition-colors"
            style={{ fontFamily: "var(--font-geist-mono), monospace", fontWeight: 500 }}
          >
            <Phone className="h-3.5 w-3.5" />
            {SITE.phone}
          </a>
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent"
          >
            Book now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 -mr-2 text-ink"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden border-t border-border bg-bg overflow-hidden transition-[max-height] duration-300",
          open ? "max-h-[85vh] overflow-y-auto" : "max-h-0",
        )}
      >
        <nav className="container-x py-4">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="flex items-center gap-2 py-3 text-ink"
            style={{ fontFamily: "var(--font-geist-mono), monospace", fontWeight: 500 }}
          >
            <Phone className="h-4 w-4" />
            {SITE.phone}
          </a>
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent w-full mb-4"
          >
            Book now
          </a>
          {NAV.map((section) => (
            <details key={section.label} className="border-t border-border py-1 group">
              <summary className="text-[15px] py-3 cursor-pointer list-none flex items-center justify-between text-ink" style={{ fontWeight: 500 }}>
                <Link href={section.href} onClick={() => setOpen(false)}>{section.label}</Link>
                {section.items.length > 0 && <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />}
              </summary>
              {section.items.length > 0 && (
                <div className="pl-3 pb-2">
                  {section.items.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={() => setOpen(false)}
                      className="block py-2 text-[14px] text-ink-soft"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </details>
          ))}
        </nav>
      </div>
    </header>
  );
}
