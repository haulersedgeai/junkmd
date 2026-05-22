import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Wordmark } from "@/components/wordmark";
import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-x py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Wordmark size="sm" variant="paper" />
          <p className="mt-4 text-[14px] text-white/60 leading-[1.6] max-w-sm">
            San Diego&rsquo;s house-call junk removal company. Family-owned since 2012.
            <br />Make space for what matters.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[13px] text-white/50" style={{ fontWeight: 500 }}>
            <a href={SITE.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a>
            <a href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
            <a href={SITE.socials.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-white">YouTube</a>
            <a href={SITE.socials.yelp} target="_blank" rel="noopener noreferrer" className="hover:text-white">Yelp</a>
          </div>
        </div>

        <div className="lg:col-span-2">
          <p className="label text-white/60 mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>Services</p>
          <ul className="space-y-2 text-[14px]">
            <li><Link href="/junk-removal-services" className="text-white/75 hover:text-white">Junk removal</Link></li>
            <li><Link href="/residential-junk-removal" className="text-white/75 hover:text-white">Residential</Link></li>
            <li><Link href="/commercial-junk-removal" className="text-white/75 hover:text-white">Commercial</Link></li>
            <li><Link href="/dumpster-rental-services" className="text-white/75 hover:text-white">Dumpsters</Link></li>
            <li><Link href="/demolition-cleanup" className="text-white/75 hover:text-white">Demolition</Link></li>
            <li><Link href="/eco-friendly-junk-removal" className="text-white/75 hover:text-white">Eco-friendly</Link></li>
            <li><Link href="/what-we-take" className="text-white/75 hover:text-white">What we take</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="label text-white/60 mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>Company</p>
          <ul className="space-y-2 text-[14px]">
            <li><Link href="/about" className="text-white/75 hover:text-white">About</Link></li>
            <li><Link href="/our-company" className="text-white/75 hover:text-white">Our company</Link></li>
            <li><Link href="/why-choose-us" className="text-white/75 hover:text-white">Why choose us</Link></li>
            <li><Link href="/david-leddick" className="text-white/75 hover:text-white">David Leddick</Link></li>
            <li><Link href="/clemencia-sandoval" className="text-white/75 hover:text-white">Clemencia Sandoval</Link></li>
            <li><Link href="/locations" className="text-white/75 hover:text-white">Locations</Link></li>
            <li><Link href="/blog" className="text-white/75 hover:text-white">Journal</Link></li>
            <li><Link href="/faq" className="text-white/75 hover:text-white">FAQ</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="label text-white/60 mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>Contact</p>
          <ul className="space-y-3 text-[14px] text-white/75">
            <li className="flex items-start gap-2.5">
              <Phone className="h-4 w-4 mt-0.5 shrink-0 text-brand" />
              <a href={`tel:${SITE.phoneRaw}`} className="hover:text-white" style={{ fontFamily: "var(--font-geist-mono), monospace", fontWeight: 500 }}>{SITE.phone}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="h-4 w-4 mt-0.5 shrink-0 text-brand" />
              <a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-brand" />
              <span>{SITE.address.street}<br />{SITE.address.city}, {SITE.address.state} {SITE.address.zip}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="h-4 w-4 mt-0.5 shrink-0 text-brand" />
              <span>{SITE.hours}</span>
            </li>
          </ul>
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent mt-5 w-full"
          >
            Book online
          </a>
        </div>
      </div>

      {/* Partner row */}
      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-30">
          {SITE.partners.map((p) => (
            <Image
              key={p.name}
              src={p.logo}
              alt={p.name}
              width={90}
              height={36}
              className="h-7 w-auto object-contain"
            />
          ))}
        </div>
      </div>

      {/* © */}
      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-wrap items-center justify-between gap-2 text-[12px] text-white/50">
          <p>© {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-white">Privacy</Link>
            <Link href="/terms-conditions" className="hover:text-white">Terms</Link>
            <Link href="/ada-standards" className="hover:text-white">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
