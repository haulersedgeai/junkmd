import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { SITE } from "@/lib/constants";
import { Mail, Phone, DollarSign, TrendingUp, Users, MapPin, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers at JunkMD+ — Join San Diego's Top-Rated Junk Removal Crew",
  description:
    "Looking for a junk removal job in San Diego? JunkMD+ hires hard-working, friendly crew members. Competitive pay, uniformed work, weekends off (Sundays). Apply today.",
};

const PERKS = [
  {
    icon: DollarSign,
    title: "Competitive pay + tips",
    body: "Hourly pay plus on-the-job tips from happy customers. Performance bonuses for crews that hit quality and review targets.",
  },
  {
    icon: TrendingUp,
    title: "Real growth, real fast",
    body: "Crew → lead → dispatch. We promote from inside the truck. A few of our current leads started on day one as helpers.",
  },
  {
    icon: Users,
    title: "Family-owned culture",
    body: "David and Clemencia run the company in person — not from a corporate HQ across the country. Sundays off, every Sunday.",
  },
  {
    icon: MapPin,
    title: "Local, every day",
    body: "We work San Diego County only. You sleep in your own bed every night. Dispatch out of Morena Blvd in Bay Park.",
  },
];

const LOOK_FOR = [
  "Strong, healthy, and able to lift 75+ lbs safely",
  "Clean driving record (some roles require commercial license)",
  "Friendly, customer-facing, comfortable talking to clients",
  "Reliable — on time, every shift",
  "Honest — we work in clients' homes and businesses",
];

const ROLES = [
  { title: "Junk Removal Crew Member", detail: "Full-time, full benefits. Lift, load, haul, sweep — and talk to clients like neighbors." },
  { title: "Driver / Crew Lead", detail: "Clean MVR required. Runs the day, owns the customer experience, mentors the helper." },
  { title: "Customer Care", detail: "Phone, text, dispatch. The first voice every San Diegan hears when they book a JunkMD+ house call." },
];

export default function CareersPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Careers" }]} />

      {/* Photo banner */}
      <section className="relative isolate overflow-hidden bg-ink text-white" style={{ minHeight: 460 }}>
        <Image
          src="/images/team/crew-highfive.jpg"
          alt="JunkMD+ crew celebrating after a finished San Diego junk-removal job"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.55) 45%, rgba(10,10,10,0.85) 100%)",
          }}
          aria-hidden="true"
        />
        <div className="container-x relative flex flex-col items-start justify-end min-h-[400px] md:min-h-[460px] pt-24 pb-12 md:pb-16">
          <span
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm px-3 py-1 text-[13px] mb-5"
            style={{ fontWeight: 500 }}
          >
            <span className="text-brand">★</span>
            <span className="text-white">Now hiring · San Diego</span>
          </span>
          <h1
            className="text-white"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.25rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              fontWeight: 700,
              maxWidth: "720px",
              textShadow: "0 2px 16px rgba(0,0,0,0.55), 0 1px 3px rgba(0,0,0,0.6)",
            }}
          >
            Join the JunkMD+ crew.
          </h1>
          <p
            className="mt-5 max-w-[600px] text-white/90 text-[18px] leading-[1.55]"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.55)" }}
          >
            We hire hard-working, friendly people who treat clients like neighbors. Sundays off,
            real growth, no franchise nonsense.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${SITE.email}?subject=JunkMD%2B%20Careers%20Application`}
              className="btn btn-accent btn-lg"
            >
              <Mail className="h-4 w-4" />
              Email your resume
            </a>
            <a href={`tel:${SITE.phoneRaw}`} className="btn btn-ghost-white btn-lg">
              <Phone className="h-4 w-4" />
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Why work at JunkMD+ */}
      <section className="section bg-bg">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <p className="label" style={{ color: "var(--brand-dark)" }}>Why work here</p>
            <h2 className="mt-3">Local company, real team, room to grow.</h2>
            <p className="mt-4 text-[18px] leading-[1.55] text-ink-soft">
              JunkMD+ has been a family-owned San Diego business since 2012. Three trucks, eight people,
              one home base. We treat our crew like we treat our customers — show up, do good work,
              go home proud.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERKS.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="bg-white border border-[color:var(--brand-border)] rounded-xl p-6"
                >
                  <div className="h-10 w-10 rounded-lg bg-[color:var(--brand-green)]/10 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-[color:var(--brand-green-dark)]" />
                  </div>
                  <h3 className="font-display text-lg uppercase mb-2 leading-tight">{p.title}</h3>
                  <p className="text-sm text-[color:var(--brand-text)] leading-[1.55]">{p.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What we look for + Open roles */}
      <section className="section bg-bg-soft border-y border-border">
        <div className="container-x grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <p className="label" style={{ color: "var(--brand-dark)" }}>What we look for</p>
            <h2 className="mt-3">The kind of person who fits.</h2>
            <ul className="mt-6 space-y-3">
              {LOOK_FOR.map((line) => (
                <li key={line} className="flex gap-3 text-[15px] text-[color:var(--brand-text)] leading-[1.6]">
                  <Check className="h-5 w-5 mt-0.5 shrink-0 text-[color:var(--brand-green-dark)]" strokeWidth={2.5} />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label" style={{ color: "var(--brand-dark)" }}>Open roles</p>
            <h2 className="mt-3">Where we&apos;re hiring right now.</h2>
            <div className="mt-6 space-y-4">
              {ROLES.map((r) => (
                <div
                  key={r.title}
                  className="bg-white border border-[color:var(--brand-border)] rounded-xl p-5"
                >
                  <h3 className="font-display text-lg uppercase leading-tight">{r.title}</h3>
                  <p className="mt-2 text-sm text-[color:var(--brand-text)] leading-[1.55]">{r.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section className="section bg-bg">
        <div className="container-x max-w-3xl mx-auto text-center">
          <p className="label" style={{ color: "var(--brand-dark)" }}>How to apply</p>
          <h2 className="mt-3">Send a resume. We&apos;ll get back fast.</h2>
          <p className="mt-4 text-[18px] leading-[1.55] text-ink-soft">
            Email your resume — or just a short note about yourself — and we&apos;ll set up a call.
            Talk to David or Clemencia directly.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${SITE.email}?subject=JunkMD%2B%20Careers%20Application`}
              className="btn btn-accent btn-lg"
            >
              <Mail className="h-4 w-4" />
              Email {SITE.email}
            </a>
            <a href={`tel:${SITE.phoneRaw}`} className="btn btn-outline btn-lg">
              <Phone className="h-4 w-4" />
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      <CtaSection title="Have questions?" subtitle="Reach out — we'd love to talk." />
    </>
  );
}
