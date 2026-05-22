import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Wordmark } from "@/components/wordmark";
import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-forest text-paper mt-0">
      <div className="container-x py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-12">
        {/* Brand + tagline + social */}
        <div className="lg:col-span-4">
          <Wordmark size="lg" variant="paper" />
          <p
            className="mt-5 max-w-sm text-paper/80 leading-relaxed"
            style={{ fontSize: "0.9375rem" }}
          >
            San Diego's house-call junk removal company. Family-owned since 2012.
          </p>
          <p
            className="mt-3 max-w-sm text-paper/60"
            style={{ fontFamily: "var(--font-fraunces), serif", fontStyle: "italic", fontSize: "1rem" }}
          >
            Make space for what matters.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-[13px]" style={{ fontWeight: 500 }}>
            <a href={SITE.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-paper/75 hover:text-paper">Facebook</a>
            <a href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-paper/75 hover:text-paper">Instagram</a>
            <a href={SITE.socials.youtube} target="_blank" rel="noopener noreferrer" className="text-paper/75 hover:text-paper">YouTube</a>
            <a href={SITE.socials.yelp} target="_blank" rel="noopener noreferrer" className="text-paper/75 hover:text-paper">Yelp</a>
          </div>
        </div>

        {/* Services */}
        <div className="lg:col-span-2">
          <h3 className="eyebrow eyebrow-on-dark mb-4">Services</h3>
          <ul className="space-y-2.5 text-[14px]">
            <li><Link href="/junk-removal-services" className="text-paper/80 hover:text-paper">Junk removal</Link></li>
            <li><Link href="/residential-junk-removal" className="text-paper/80 hover:text-paper">Residential</Link></li>
            <li><Link href="/commercial-junk-removal" className="text-paper/80 hover:text-paper">Commercial</Link></li>
            <li><Link href="/dumpster-rental-services" className="text-paper/80 hover:text-paper">Dumpster rental</Link></li>
            <li><Link href="/demolition-cleanup" className="text-paper/80 hover:text-paper">Demolition</Link></li>
            <li><Link href="/eco-friendly-junk-removal" className="text-paper/80 hover:text-paper">Eco-friendly</Link></li>
            <li><Link href="/what-we-take" className="text-paper/80 hover:text-paper">What we take</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div className="lg:col-span-2">
          <h3 className="eyebrow eyebrow-on-dark mb-4">Company</h3>
          <ul className="space-y-2.5 text-[14px]">
            <li><Link href="/about" className="text-paper/80 hover:text-paper">About</Link></li>
            <li><Link href="/our-company" className="text-paper/80 hover:text-paper">Our company</Link></li>
            <li><Link href="/why-choose-us" className="text-paper/80 hover:text-paper">Why choose us</Link></li>
            <li><Link href="/david-leddick" className="text-paper/80 hover:text-paper">David Leddick</Link></li>
            <li><Link href="/clemencia-sandoval" className="text-paper/80 hover:text-paper">Clemencia Sandoval</Link></li>
            <li><Link href="/locations" className="text-paper/80 hover:text-paper">Locations</Link></li>
            <li><Link href="/blog" className="text-paper/80 hover:text-paper">Journal</Link></li>
            <li><Link href="/faq" className="text-paper/80 hover:text-paper">FAQ</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-4">
          <h3 className="eyebrow eyebrow-on-dark mb-4">Get in touch</h3>
          <ul className="space-y-3 text-[14px] text-paper/85">
            <li className="flex gap-3 items-start">
              <Phone className="h-4 w-4 mt-0.5 shrink-0 text-brand" />
              <a href={`tel:${SITE.phoneRaw}`} className="hover:text-paper">{SITE.phone}</a>
            </li>
            <li className="flex gap-3 items-start">
              <Mail className="h-4 w-4 mt-0.5 shrink-0 text-brand" />
              <a href={`mailto:${SITE.email}`} className="hover:text-paper">{SITE.email}</a>
            </li>
            <li className="flex gap-3 items-start">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-brand" />
              <span>{SITE.address.street}<br />{SITE.address.city}, {SITE.address.state} {SITE.address.zip}</span>
            </li>
            <li className="flex gap-3 items-start">
              <Clock className="h-4 w-4 mt-0.5 shrink-0 text-brand" />
              <span>{SITE.hours}</span>
            </li>
          </ul>
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent mt-6 w-full sm:w-auto"
          >
            Book online — Save $20
          </a>
        </div>
      </div>

      {/* Partner row */}
      <div className="border-t border-paper/10">
        <div className="container-x py-8 flex flex-wrap items-center justify-center gap-8">
          {SITE.partners.map((p) => (
            <Image
              key={p.name}
              src={p.logo}
              alt={p.name}
              width={80}
              height={80}
              className="h-12 w-auto object-contain opacity-50 hover:opacity-90 transition-opacity"
            />
          ))}
        </div>
      </div>

      {/* © */}
      <div className="border-t border-paper/10">
        <div className="container-x py-6 flex flex-wrap items-center justify-between gap-2 text-[13px] text-paper/55">
          <p>© {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-paper">Privacy</Link>
            <Link href="/terms-conditions" className="hover:text-paper">Terms</Link>
            <Link href="/ada-standards" className="hover:text-paper">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
