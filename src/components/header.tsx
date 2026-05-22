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
      { label: "Our Company", href: "/our-company" },
      { label: "Why Choose Us", href: "/why-choose-us" },
      { label: "David Leddick — Owner", href: "/david-leddick" },
      { label: "Clemencia Sandoval — Co-Owner", href: "/clemencia-sandoval" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    label: "Junk Removal",
    href: "/junk-removal-services",
    items: [
      { label: "Residential", href: "/residential-junk-removal" },
      { label: "Commercial", href: "/commercial-junk-removal" },
      { label: "Furniture Removal", href: "/furniture-removal" },
      { label: "Appliance Removal", href: "/appliance-removal" },
      { label: "Mattress Disposal", href: "/mattress-disposal" },
      { label: "Estate Cleanout", href: "/estate-cleanout" },
      { label: "Hoarder Cleanouts", href: "/hoarder-cleanouts" },
      { label: "Garage Cleanout", href: "/garage-cleanout" },
      { label: "Yard Waste Removal", href: "/yard-waste-removal" },
      { label: "Hot Tub Removal", href: "/hot-tub-removal" },
      { label: "What We Take →", href: "/what-we-take" },
    ],
  },
  {
    label: "Dumpsters",
    href: "/dumpster-rental-services",
    items: [
      { label: "Sizes & Pricing", href: "/dumpster-sizes-pricing" },
      { label: "10-Yard Dumpster", href: "/10-yard-dumpster-rental" },
      { label: "30-Yard Dumpster", href: "/30-yard-dumpster-rental" },
      { label: "40-Yard Dumpster", href: "/40-yard-dumpster-rental" },
      { label: "Residential Dumpsters", href: "/residential-dumpster-rentals" },
      { label: "Commercial Dumpsters", href: "/commercial-dumpster-rentals" },
      { label: "Construction Dumpsters", href: "/construction-dumpster-rental" },
      { label: "Book a Dumpster →", href: "/book-a-dumpster" },
    ],
  },
  {
    label: "Demolition",
    href: "/demolition-cleanup",
    items: [
      { label: "Light Demolition", href: "/demolition-cleanup" },
      { label: "Shed Demolition", href: "/shed-demolition" },
      { label: "Deck Removal", href: "/deck-removal" },
      { label: "Fence Removal", href: "/fence-removal" },
      { label: "Concrete Removal", href: "/concrete-removal" },
      { label: "Kitchen Demolition", href: "/kitchen-demolition" },
      { label: "Bathroom Demolition", href: "/bathroom-demolition" },
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
      { label: "All Locations →", href: "/locations" },
    ],
  },
  { label: "Pricing", href: "/pricing", items: [] },
  { label: "Contact", href: "/contact", items: [] },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-paper/95 backdrop-blur">
      <div className="container-x flex h-[72px] items-center justify-between gap-6">
        <Link href="/" className="shrink-0" aria-label="JunkMD+ home">
          <Wordmark size="lg" />
        </Link>

        {/* Desktop nav */}
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
                  className="inline-flex items-center gap-1 px-3 py-2 font-medium text-ink hover:text-brand-dark transition-colors"
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                </Link>
                <div
                  className={cn(
                    "absolute left-0 top-full pt-1 transition-opacity duration-150",
                    activeMenu === item.label ? "opacity-100 visible" : "opacity-0 invisible",
                  )}
                >
                  <div className="min-w-[260px] rounded-lg border border-border bg-paper-pure shadow-xl py-2">
                    {item.items.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-2 text-[14px] text-ink-soft hover:bg-cream hover:text-ink transition-colors"
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
                className="px-3 py-2 font-medium text-ink hover:text-brand-dark transition-colors"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        {/* Right CTAs */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="inline-flex items-center gap-2 text-[14px] text-ink hover:text-brand-dark"
            style={{ fontWeight: 500 }}
          >
            <Phone className="h-4 w-4" />
            {SITE.phone}
          </a>
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Book online
          </a>
        </div>

        {/* Mobile menu button */}
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
          "lg:hidden border-t border-border bg-paper-pure overflow-hidden transition-[max-height] duration-300",
          open ? "max-h-[85vh] overflow-y-auto" : "max-h-0",
        )}
      >
        <nav className="container-x py-4">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="flex items-center gap-2 py-3 font-medium text-ink"
          >
            <Phone className="h-4 w-4" />
            {SITE.phone}
          </a>
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full mb-4"
          >
            Book online
          </a>
          {NAV.map((section) => (
            <details key={section.label} className="border-t border-border py-2 group">
              <summary className="font-medium text-[15px] py-2 cursor-pointer list-none flex items-center justify-between text-ink">
                <Link href={section.href} onClick={() => setOpen(false)}>{section.label}</Link>
                {section.items.length > 0 && <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />}
              </summary>
              {section.items.length > 0 && (
                <div className="pl-3 py-1">
                  {section.items.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={() => setOpen(false)}
                      className="block py-1.5 text-[14px] text-ink-soft"
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
