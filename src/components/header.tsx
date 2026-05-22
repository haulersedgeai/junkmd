"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
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
      { label: "Residential Junk Removal", href: "/residential-junk-removal" },
      { label: "Commercial Junk Removal", href: "/commercial-junk-removal" },
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
    label: "Dumpster Rental",
    href: "/dumpster-rental-services",
    items: [
      { label: "Sizes & Pricing", href: "/dumpster-sizes-pricing" },
      { label: "10-Yard Dumpster", href: "/10-yard-dumpster-rental" },
      { label: "30-Yard Dumpster", href: "/30-yard-dumpster-rental" },
      { label: "40-Yard Dumpster", href: "/40-yard-dumpster-rental" },
      { label: "Residential Dumpsters", href: "/residential-dumpster-rentals" },
      { label: "Commercial Dumpsters", href: "/commercial-dumpster-rentals" },
      { label: "Construction Dumpsters", href: "/construction-dumpster-rental" },
      { label: "Driveway-Safe", href: "/driveway-safe-dumpster" },
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
      { label: "Flooring Removal", href: "/flooring-removal" },
      { label: "Drywall Removal", href: "/drywall-removal" },
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
    <header className="sticky top-0 z-40 bg-white border-b border-[color:var(--brand-border)] shadow-sm">
      <div className="container-x flex items-center justify-between gap-4 py-3">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo.jpeg"
            alt="JunkMD+ logo"
            width={170}
            height={56}
            priority
            className="h-12 sm:h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-semibold uppercase tracking-wide">
          {NAV.map((item) =>
            item.items.length > 0 ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  type="button"
                  className="px-3 py-2 inline-flex items-center gap-1 text-[color:var(--brand-ink)] hover:text-[color:var(--brand-green-dark)]"
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                {activeMenu === item.label && (
                  <div className="absolute left-0 top-full pt-1">
                    <div className="bg-white rounded-md shadow-lg border border-[color:var(--brand-border)] min-w-[240px] py-1">
                      {item.items.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-4 py-2 text-sm normal-case font-medium text-[color:var(--brand-text)] hover:bg-[color:var(--brand-bg-muted)] hover:text-[color:var(--brand-green-dark)]"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-[color:var(--brand-ink)] hover:text-[color:var(--brand-green-dark)]"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        {/* Right CTAs */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-[color:var(--brand-ink)] hover:text-[color:var(--brand-green-dark)]"
          >
            <Phone className="h-4 w-4 text-[color:var(--brand-green)]" />
            {SITE.phone}
          </a>
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2 px-4"
          >
            Book Now
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 -mr-2 text-[color:var(--brand-ink)]"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden border-t border-[color:var(--brand-border)] bg-white overflow-hidden transition-[max-height] duration-300",
          open ? "max-h-[80vh] overflow-y-auto" : "max-h-0",
        )}
      >
        <nav className="container-x py-3">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="flex items-center gap-2 py-3 font-bold text-[color:var(--brand-ink)]"
          >
            <Phone className="h-4 w-4 text-[color:var(--brand-green)]" />
            {SITE.phone}
          </a>
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full mb-3"
          >
            Book Now
          </a>
          {NAV.map((section) => (
            <details key={section.label} className="border-t border-[color:var(--brand-border)] py-2">
              <summary className="font-bold uppercase text-sm py-2 cursor-pointer list-none flex items-center justify-between text-[color:var(--brand-ink)]">
                <Link href={section.href} onClick={() => setOpen(false)}>{section.label}</Link>
                {section.items.length > 0 && <ChevronDown className="h-4 w-4" />}
              </summary>
              {section.items.length > 0 && (
                <div className="pl-3 py-1">
                  {section.items.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={() => setOpen(false)}
                      className="block py-1.5 text-sm text-[color:var(--brand-text)]"
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
