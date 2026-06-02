import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
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
        <div className="container-x grid lg:grid-cols-2 gap-10">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[color:var(--brand-green-dark)] mb-2">Contact Us</span>
            <h1 className="font-display text-4xl uppercase mb-3">Schedule a JunkMD+ House Call</h1>
            <p className="text-[color:var(--brand-text)] mb-6 leading-relaxed">
              The fastest way to book a JunkMD+ house call is online or by phone. We respond to texts
              with pictures within minutes during business hours.
            </p>

            <div className="space-y-4">
              <a href={`tel:${SITE.phoneRaw}`} className="flex items-start gap-3 p-4 rounded-lg border border-[color:var(--brand-border)] hover:border-[color:var(--brand-green)] transition-colors">
                <Phone className="h-5 w-5 text-[color:var(--brand-green)] mt-0.5" />
                <div>
                  <p className="font-bold text-[color:var(--brand-ink)]">Call or Text</p>
                  <p className="text-sm">{SITE.phone}</p>
                  <p className="text-xs text-[color:var(--brand-muted)]">Text photos for an instant quote</p>
                </div>
              </a>
              <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-4 rounded-lg border border-[color:var(--brand-border)] hover:border-[color:var(--brand-green)] transition-colors">
                <MessageCircle className="h-5 w-5 text-[color:var(--brand-green)] mt-0.5" />
                <div>
                  <p className="font-bold text-[color:var(--brand-ink)]">Book Online</p>
                  <p className="text-sm">Pick a 2-hour arrival window</p>
                  <p className="text-xs text-[color:var(--brand-muted)]">Save $20 on your first appointment</p>
                </div>
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-start gap-3 p-4 rounded-lg border border-[color:var(--brand-border)] hover:border-[color:var(--brand-green)] transition-colors">
                <Mail className="h-5 w-5 text-[color:var(--brand-green)] mt-0.5" />
                <div>
                  <p className="font-bold text-[color:var(--brand-ink)]">Email</p>
                  <p className="text-sm">{SITE.email}</p>
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
                  <p className="text-xs text-[color:var(--brand-muted)]">2-hour arrival windows</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form
              action="https://formspree.io/f/your-formspree-id"
              method="POST"
              className="bg-[color:var(--brand-bg-soft)] border border-[color:var(--brand-border)] rounded-xl p-6 space-y-4"
            >
              <h2 className="font-display text-2xl uppercase">Send Us a Message</h2>
              <p className="text-sm text-[color:var(--brand-text)]">
                Tell us about your job. Include photos if you have them.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <label className="block">
                  <span className="text-sm font-bold text-[color:var(--brand-ink)]">First Name</span>
                  <input required type="text" name="first_name" className="mt-1 w-full px-3 py-2 rounded-md border border-[color:var(--brand-border)] focus:outline-none focus:border-[color:var(--brand-green)]" />
                </label>
                <label className="block">
                  <span className="text-sm font-bold text-[color:var(--brand-ink)]">Last Name</span>
                  <input required type="text" name="last_name" className="mt-1 w-full px-3 py-2 rounded-md border border-[color:var(--brand-border)] focus:outline-none focus:border-[color:var(--brand-green)]" />
                </label>
              </div>
              <label className="block">
                <span className="text-sm font-bold text-[color:var(--brand-ink)]">Email</span>
                <input required type="email" name="email" className="mt-1 w-full px-3 py-2 rounded-md border border-[color:var(--brand-border)] focus:outline-none focus:border-[color:var(--brand-green)]" />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-[color:var(--brand-ink)]">Phone</span>
                <input required type="tel" name="phone" className="mt-1 w-full px-3 py-2 rounded-md border border-[color:var(--brand-border)] focus:outline-none focus:border-[color:var(--brand-green)]" />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-[color:var(--brand-ink)]">What do you need hauled?</span>
                <textarea name="message" rows={5} required className="mt-1 w-full px-3 py-2 rounded-md border border-[color:var(--brand-border)] focus:outline-none focus:border-[color:var(--brand-green)]" placeholder="A few sentences. Include rough size or item list if you can." />
              </label>
              <input type="hidden" name="_subject" value="New JunkMD+ contact form submission" />
              <button type="submit" className="btn-primary w-full">Send Message</button>
              <p className="text-xs text-[color:var(--brand-muted)]">
                For fastest response, text photos to <a href={`tel:${SITE.phoneRaw}`} className="underline">{SITE.phone}</a> or
                <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="underline ml-1">book online</a>.
              </p>
            </form>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
