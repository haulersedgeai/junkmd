import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react";
import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[color:var(--brand-ink)] text-white mt-20">
      <div className="container-x py-12 grid md:grid-cols-4 gap-8">
        <div>
          <Image
            src="/images/logo.jpeg"
            alt="JunkMD+ logo"
            width={170}
            height={56}
            className="h-14 w-auto object-contain bg-white rounded p-1 mb-4"
          />
          <p className="text-sm opacity-90 leading-relaxed mb-4">
            San Diego's top-rated junk removal & dumpster rental. Family-owned since 2012.
            Make Space for What Matters.
          </p>
          <div className="flex flex-wrap gap-3 text-sm font-bold uppercase">
            <a href={SITE.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--brand-green)] flex items-center gap-1.5"><Globe className="h-4 w-4" /> Facebook</a>
            <a href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--brand-green)]">Instagram</a>
            <a href={SITE.socials.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--brand-green)]">YouTube</a>
            <a href={SITE.socials.yelp} target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--brand-green)]">Yelp</a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg text-white mb-3 uppercase tracking-wide">Services</h3>
          <ul className="text-sm space-y-1.5 opacity-90">
            <li><Link href="/junk-removal-services" className="hover:text-[color:var(--brand-green)]">Junk Removal</Link></li>
            <li><Link href="/residential-junk-removal" className="hover:text-[color:var(--brand-green)]">Residential</Link></li>
            <li><Link href="/commercial-junk-removal" className="hover:text-[color:var(--brand-green)]">Commercial</Link></li>
            <li><Link href="/dumpster-rental-services" className="hover:text-[color:var(--brand-green)]">Dumpster Rental</Link></li>
            <li><Link href="/demolition-cleanup" className="hover:text-[color:var(--brand-green)]">Demolition</Link></li>
            <li><Link href="/eco-friendly-junk-removal" className="hover:text-[color:var(--brand-green)]">Eco-Friendly</Link></li>
            <li><Link href="/what-we-take" className="hover:text-[color:var(--brand-green)]">What We Take</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-white mb-3 uppercase tracking-wide">Company</h3>
          <ul className="text-sm space-y-1.5 opacity-90">
            <li><Link href="/about" className="hover:text-[color:var(--brand-green)]">About JunkMD+</Link></li>
            <li><Link href="/our-company" className="hover:text-[color:var(--brand-green)]">Our Company</Link></li>
            <li><Link href="/why-choose-us" className="hover:text-[color:var(--brand-green)]">Why Choose Us</Link></li>
            <li><Link href="/david-leddick" className="hover:text-[color:var(--brand-green)]">David Leddick</Link></li>
            <li><Link href="/clemencia-sandoval" className="hover:text-[color:var(--brand-green)]">Clemencia Sandoval</Link></li>
            <li><Link href="/locations" className="hover:text-[color:var(--brand-green)]">Locations</Link></li>
            <li><Link href="/blog" className="hover:text-[color:var(--brand-green)]">Blog</Link></li>
            <li><Link href="/careers" className="hover:text-[color:var(--brand-green)]">Careers</Link></li>
            <li><Link href="/faq" className="hover:text-[color:var(--brand-green)]">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-white mb-3 uppercase tracking-wide">Get in Touch</h3>
          <ul className="text-sm space-y-2 opacity-90">
            <li className="flex gap-2">
              <Phone className="h-4 w-4 text-[color:var(--brand-green)] shrink-0 mt-0.5" />
              <a href={`tel:${SITE.phoneRaw}`} className="hover:text-[color:var(--brand-green)] font-bold">{SITE.phone}</a>
            </li>
            <li className="flex gap-2">
              <Mail className="h-4 w-4 text-[color:var(--brand-green)] shrink-0 mt-0.5" />
              <a href={`mailto:${SITE.email}`} className="hover:text-[color:var(--brand-green)]">{SITE.email}</a>
            </li>
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 text-[color:var(--brand-green)] shrink-0 mt-0.5" />
              <span>{SITE.address.street}<br />{SITE.address.city}, {SITE.address.state} {SITE.address.zip}</span>
            </li>
            <li className="flex gap-2">
              <Clock className="h-4 w-4 text-[color:var(--brand-green)] shrink-0 mt-0.5" />
              <span>{SITE.hours}</span>
            </li>
          </ul>

          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4 w-full"
          >
            Book Online — Save $20
          </a>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-x py-6 flex flex-wrap items-center justify-center gap-6 opacity-80">
          {SITE.partners.map((p) => (
            <Image key={p.name} src={p.logo} alt={p.name} width={80} height={80} className="h-12 w-auto object-contain bg-white/5 rounded p-1" />
          ))}
        </div>
      </div>

      <div className="border-t border-white/15 text-xs opacity-70">
        <div className="container-x py-4 flex flex-wrap items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-[color:var(--brand-green)]">Privacy</Link>
            <Link href="/terms-conditions" className="hover:text-[color:var(--brand-green)]">Terms</Link>
            <Link href="/ada-standards" className="hover:text-[color:var(--brand-green)]">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
