import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact JunkMD+ — San Diego Junk Removal",
  description:
    "Get in touch with JunkMD+. Call (858) 869-9448, text us pictures of your junk, or book online. Same-day & next-day appointments across San Diego County.",
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

      <section className="py-12 bg-white">
        <div className="container-x">
          <div className="max-w-2xl mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[color:var(--brand-green-dark)] mb-2">Contact Us</span>
            <h1 className="font-display text-4xl uppercase mb-3">Schedule a JunkMD+ House Call</h1>
            <p className="text-[color:var(--brand-text)] leading-relaxed">
              The fastest way to book a JunkMD+ house call is online or by phone. We respond to texts
              with pictures within minutes during business hours.
            </p>
            <div className="mt-6">
              <Link href="/request-a-quote" className="btn btn-primary btn-lg inline-flex items-center gap-2">
                Get a fast quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href={`tel:${SITE.phoneRaw}`} className="flex items-start gap-3 p-4 rounded-lg border border-[color:var(--brand-border)] hover:border-[color:var(--brand-green)] transition-colors">
              <Phone className="h-5 w-5 text-[color:var(--brand-green)] mt-0.5" />
              <div>
                <p className="font-bold text-[color:var(--brand-ink)]">Call</p>
                <p className="text-sm">{SITE.phone}</p>
                <p className="text-xs text-[color:var(--brand-muted)]">We answer Mon–Sat.</p>
              </div>
            </a>
            <a href={`sms:${SITE.phoneRaw}`} className="flex items-start gap-3 p-4 rounded-lg border border-[color:var(--brand-border)] hover:border-[color:var(--brand-green)] transition-colors">
              <MessageCircle className="h-5 w-5 text-[color:var(--brand-green)] mt-0.5" />
              <div>
                <p className="font-bold text-[color:var(--brand-ink)]">Text</p>
                <p className="text-sm">{SITE.phone}</p>
                <p className="text-xs text-[color:var(--brand-muted)]">Text photos for an instant quote.</p>
              </div>
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-start gap-3 p-4 rounded-lg border border-[color:var(--brand-border)] hover:border-[color:var(--brand-green)] transition-colors">
              <Mail className="h-5 w-5 text-[color:var(--brand-green)] mt-0.5" />
              <div>
                <p className="font-bold text-[color:var(--brand-ink)]">Email</p>
                <p className="text-sm break-all">{SITE.email}</p>
              </div>
            </a>
            <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-4 rounded-lg border border-[color:var(--brand-border)] hover:border-[color:var(--brand-green)] transition-colors">
              <MessageCircle className="h-5 w-5 text-[color:var(--brand-green)] mt-0.5" />
              <div>
                <p className="font-bold text-[color:var(--brand-ink)]">Book Online</p>
                <p className="text-sm">Pick a 2-hour arrival window</p>
                <p className="text-xs text-[color:var(--brand-muted)]">Save $20 on your first appointment.</p>
              </div>
            </a>
            <div className="flex items-start gap-3 p-4 rounded-lg border border-[color:var(--brand-border)]">
              <MapPin className="h-5 w-5 text-[color:var(--brand-green)] mt-0.5" />
              <div>
                <p className="font-bold text-[color:var(--brand-ink)]">Visit</p>
                <p className="text-sm">{SITE.address.street}<br />{SITE.address.city}, {SITE.address.state} {SITE.address.zip}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg border border-[color:var(--brand-border)]">
              <Clock className="h-5 w-5 text-[color:var(--brand-green)] mt-0.5" />
              <div>
                <p className="font-bold text-[color:var(--brand-ink)]">Hours</p>
                <p className="text-sm">{SITE.hours}</p>
                <p className="text-xs text-[color:var(--brand-muted)]">2-hour arrival windows.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
