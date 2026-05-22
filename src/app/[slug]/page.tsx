import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Check, Phone, Calendar } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";
import { ServiceCard } from "@/components/service-card";
import { ProcessSteps } from "@/components/process-steps";
import { ReviewGrid } from "@/components/review-grid";
import { faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/jsonld";
import { SERVICES, SERVICE_BY_SLUG } from "@/content/services";
import { DUMPSTERS, DUMPSTER_BY_SLUG } from "@/content/dumpsters";
import { LOCATIONS, LOCATION_BY_SLUG } from "@/content/locations";
import { PRODUCTION_URL, SITE } from "@/lib/constants";

type Params = { slug: string };

export function generateStaticParams() {
  const slugs = new Set<string>();
  SERVICES.forEach((s) => slugs.add(s.slug));
  DUMPSTERS.forEach((d) => slugs.add(d.slug));
  LOCATIONS.forEach((l) => slugs.add(l.slug));
  return Array.from(slugs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICE_BY_SLUG[slug];
  if (s)
    return {
      title: s.metaTitle,
      description: s.metaDescription,
      alternates: { canonical: `/${slug}` },
    };
  const d = DUMPSTER_BY_SLUG[slug];
  if (d)
    return {
      title: d.metaTitle,
      description: d.metaDescription,
      alternates: { canonical: `/${slug}` },
    };
  const l = LOCATION_BY_SLUG[slug];
  if (l)
    return {
      title: `Junk Removal in ${l.name}, CA — JunkMD+`,
      description: `JunkMD+ provides fast, friendly, full-service junk removal in ${l.name}, San Diego. Save $20 on your first appointment. Same-day available.`,
      alternates: { canonical: `/${slug}` },
    };
  return {};
}

export default async function DynamicSlugPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = SERVICE_BY_SLUG[slug];
  const dumpster = DUMPSTER_BY_SLUG[slug];
  const location = LOCATION_BY_SLUG[slug];

  if (service) return <ServicePage slug={slug} />;
  if (dumpster) return <DumpsterPage slug={slug} />;
  if (location) return <LocationPage slug={slug} />;
  notFound();
}

// ─────────── SERVICE PAGE ───────────
function ServicePage({ slug }: { slug: string }) {
  const s = SERVICE_BY_SLUG[slug]!;
  const relatedServices = s.related
    .map((r) => SERVICE_BY_SLUG[r] || DUMPSTER_BY_SLUG[r])
    .filter(Boolean)
    .slice(0, 4);

  const categoryHubMap: Record<string, { label: string; href: string }> = {
    residential: { label: "Residential", href: "/residential-junk-removal" },
    commercial: { label: "Commercial", href: "/commercial-junk-removal" },
    dumpster: { label: "Dumpster Rental", href: "/dumpster-rental-services" },
    demolition: { label: "Demolition", href: "/demolition-cleanup" },
    eco: { label: "Eco-Friendly", href: "/eco-friendly-junk-removal" },
    "what-we-take": { label: "What We Take", href: "/what-we-take" },
  };
  const hub = categoryHubMap[s.category];

  return (
    <>
      <JsonLd id="ld-service" data={serviceSchema(s.title, s.metaDescription, slug)} />
      <JsonLd id="ld-service-faq" data={faqSchema(s.faqs)} />
      <JsonLd id="ld-breadcrumb" data={breadcrumbSchema([
        { name: "Home", url: PRODUCTION_URL },
        { name: hub.label, url: `${PRODUCTION_URL}${hub.href}` },
        { name: s.title, url: `${PRODUCTION_URL}/${slug}` },
      ])} />

      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: hub.label, href: hub.href },
        { label: s.title },
      ]} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[color:var(--brand-bg-soft)] to-white">
        <div className="container-x py-10 md:py-14 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[color:var(--brand-green-dark)] mb-2">
              {hub.label} Junk Removal · San Diego
            </span>
            <h1 className="font-display text-4xl md:text-5xl uppercase mb-3 leading-[1.05]">
              {s.h1 ?? s.title} <span className="text-[color:var(--brand-green-dark)]">San Diego</span>
            </h1>
            <p className="text-lg text-[color:var(--brand-text)] mb-5 max-w-xl">{s.hero}</p>
            <div className="flex flex-wrap gap-3">
              <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Calendar className="h-4 w-4" />
                Book Now — Save $20
              </a>
              <a href={`tel:${SITE.phoneRaw}`} className="btn-outline">
                <Phone className="h-4 w-4" />
                {SITE.phone}
              </a>
            </div>
          </div>
          {s.image && (
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
              <Image src={s.image} alt={s.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
            </div>
          )}
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="container-x grid lg:grid-cols-[2fr_1fr] gap-10">
          <div className="prose-brand max-w-none">
            <p className="text-lg">{s.intro}</p>
            {s.whyJunkMd && (
              <>
                <h2>Why JunkMD+ for {s.title}?</h2>
                <p>{s.whyJunkMd}</p>
              </>
            )}
            <h2>What's Included</h2>
            <ul>
              {s.includes.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            {s.pricing && (
              <>
                <h2>Pricing</h2>
                <p>{s.pricing}</p>
                <p className="text-sm text-[color:var(--brand-muted)]">First-appointment discount of $20 applies to Small Load and up.</p>
              </>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 self-start space-y-4">
            <div className="bg-[color:var(--brand-bg-soft)] border border-[color:var(--brand-border)] rounded-xl p-5">
              <h3 className="font-display text-xl uppercase mb-3">Ready to Book?</h3>
              <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full mb-2">
                <Calendar className="h-4 w-4" /> Book Online
              </a>
              <a href={`tel:${SITE.phoneRaw}`} className="btn-outline w-full">
                <Phone className="h-4 w-4" /> Call {SITE.phone}
              </a>
              <p className="text-xs text-[color:var(--brand-muted)] mt-3 text-center">
                Same-day &amp; next-day · Mon–Sat · Save $20 first appointment
              </p>
            </div>
            <div className="bg-white border border-[color:var(--brand-border)] rounded-xl p-5">
              <h3 className="font-display text-lg uppercase mb-2">Service Areas</h3>
              <p className="text-sm text-[color:var(--brand-text)] mb-3">JunkMD+ services all of San Diego County:</p>
              <div className="flex flex-wrap gap-1.5">
                {["San Diego", "La Jolla", "Carlsbad", "Encinitas", "Chula Vista", "Poway", "El Cajon", "Coronado"].map((c) => (
                  <Link key={c} href={`/junk-removal-${c.toLowerCase().replace(" ", "-")}`} className="text-xs px-2 py-1 rounded bg-[color:var(--brand-bg-muted)] hover:bg-[color:var(--brand-green)] hover:text-white transition-colors">
                    {c}
                  </Link>
                ))}
                <Link href="/locations" className="text-xs px-2 py-1 rounded bg-[color:var(--brand-green)] text-white">All →</Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <ProcessSteps />

      <FaqAccordion title={`FAQ — ${s.title}`} items={s.faqs} />

      {/* Related */}
      {relatedServices.length > 0 && (
        <section className="py-12 bg-[color:var(--brand-bg-soft)]">
          <div className="container-x">
            <h2 className="font-display text-3xl uppercase mb-6">Related Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedServices.map((r) => (
                <ServiceCard
                  key={r!.slug}
                  href={`/${r!.slug}`}
                  title={r!.title}
                  description={r!.hero}
                  image={("image" in r! ? (r as { image?: string }).image : undefined) as string | undefined}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <ReviewGrid limit={3} />

      <CtaSection title={`Ready for Your ${s.title}?`} subtitle="Same-day & next-day appointments. Save $20 on your first booking." />
    </>
  );
}

// ─────────── DUMPSTER PAGE ───────────
function DumpsterPage({ slug }: { slug: string }) {
  const d = DUMPSTER_BY_SLUG[slug]!;
  const related = d.related
    .map((r) => DUMPSTER_BY_SLUG[r] || SERVICE_BY_SLUG[r])
    .filter(Boolean)
    .slice(0, 4);

  return (
    <>
      <JsonLd id="ld-svc" data={serviceSchema(d.title, d.metaDescription, slug)} />
      <JsonLd id="ld-faq" data={faqSchema(d.faqs)} />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Dumpster Rental", href: "/dumpster-rental-services" },
        { label: d.title },
      ]} />

      <section className="bg-gradient-to-b from-[color:var(--brand-bg-soft)] to-white">
        <div className="container-x py-10 md:py-14 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[color:var(--brand-green-dark)] mb-2">
              Dumpster Rental · San Diego
            </span>
            <h1 className="font-display text-4xl md:text-5xl uppercase mb-3 leading-[1.05]">
              {d.title} <span className="text-[color:var(--brand-green-dark)]">San Diego</span>
            </h1>
            <p className="text-lg text-[color:var(--brand-text)] mb-5">{d.hero}</p>
            <div className="flex flex-wrap gap-3">
              <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Calendar className="h-4 w-4" /> Book a Dumpster
              </a>
              <a href={`tel:${SITE.phoneRaw}`} className="btn-outline">
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
            <Image src="/images/dumpster-truck.jpg" alt={d.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-x grid lg:grid-cols-[2fr_1fr] gap-10">
          <div className="prose-brand max-w-none">
            <p className="text-lg">{d.intro}</p>
            <h2>Best For</h2>
            <ul>
              {d.bestFor.map((b) => (<li key={b}>{b}</li>))}
            </ul>
            {d.notIncluded && (
              <>
                <h2>What Can't Go In</h2>
                <ul>{d.notIncluded.map((n) => <li key={n}>{n}</li>)}</ul>
              </>
            )}
            {d.pricing && (
              <>
                <h2>Pricing</h2>
                <p>{d.pricing}</p>
              </>
            )}
          </div>
          <aside className="lg:sticky lg:top-24 self-start">
            <div className="bg-[color:var(--brand-bg-soft)] border border-[color:var(--brand-border)] rounded-xl p-5">
              <h3 className="font-display text-xl uppercase mb-3">Quick Quote</h3>
              <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full mb-2">
                <Calendar className="h-4 w-4" /> Book Online
              </a>
              <a href={`tel:${SITE.phoneRaw}`} className="btn-outline w-full">
                <Phone className="h-4 w-4" /> Call {SITE.phone}
              </a>
              <ul className="text-sm mt-4 space-y-1.5">
                <li className="flex gap-2"><Check className="h-4 w-4 text-[color:var(--brand-green)] shrink-0 mt-0.5" /> Driveway-safe pads included</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-[color:var(--brand-green)] shrink-0 mt-0.5" /> Flat-rate published pricing</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-[color:var(--brand-green)] shrink-0 mt-0.5" /> Same-week delivery</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-[color:var(--brand-green)] shrink-0 mt-0.5" /> 7-day standard rental</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <FaqAccordion title="Dumpster Rental FAQ" items={d.faqs} />

      {related.length > 0 && (
        <section className="py-12 bg-[color:var(--brand-bg-soft)]">
          <div className="container-x">
            <h2 className="font-display text-3xl uppercase mb-6">Related</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map((r) => (
                <ServiceCard
                  key={r!.slug}
                  href={`/${r!.slug}`}
                  title={r!.title}
                  description={r!.hero}
                  image={("image" in r! ? (r as { image?: string }).image : undefined) as string | undefined}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaSection title="Ready to Book a Dumpster?" subtitle="Driveway-safe delivery. Flat-rate pricing. Save $20 on your first appointment." />
    </>
  );
}

// ─────────── LOCATION PAGE ───────────
function LocationPage({ slug }: { slug: string }) {
  const l = LOCATION_BY_SLUG[slug]!;

  const services = [
    { slug: "furniture-removal", title: "Furniture Removal" },
    { slug: "appliance-removal", title: "Appliance Removal" },
    { slug: "mattress-disposal", title: "Mattress Disposal" },
    { slug: "estate-cleanout", title: "Estate Cleanout" },
    { slug: "hoarder-cleanouts", title: "Hoarder Cleanouts" },
    { slug: "garage-cleanout", title: "Garage Cleanout" },
    { slug: "yard-waste-removal", title: "Yard Waste Removal" },
    { slug: "hot-tub-removal", title: "Hot Tub Removal" },
    { slug: "office-cleanouts", title: "Office Cleanouts" },
    { slug: "demolition-cleanup", title: "Light Demolition" },
    { slug: "dumpster-rental-services", title: "Dumpster Rental" },
    { slug: "same-day-junk-removal", title: "Same-Day Service" },
  ];

  const locationFaqs = [
    { q: `Do you serve all of ${l.name}?`, a: `Yes — JunkMD+ serves every street in ${l.name}, San Diego. ${l.zips ? `Common zip codes: ${l.zips.join(", ")}.` : ""} Two-hour arrival windows Mon–Sat.` },
    { q: `How fast can you arrive in ${l.name}?`, a: `Most weekdays we offer same-day or next-day service in ${l.name}. Call before noon for best chance of same-day.` },
    { q: `What's the most popular service in ${l.name}?`, a: `Furniture removal, garage cleanouts, and mattress disposal are our most-requested in ${l.name}. We also handle estate cleanouts, demolition, and dumpster rentals.` },
    { q: `Are you insured in ${l.name}?`, a: `Yes — fully insured statewide, including ${l.name} and all of San Diego County. We provide COI to landlords and property managers on request.` },
    { q: `Do you offer the $20 first-appointment discount in ${l.name}?`, a: `Yes — every first-time JunkMD+ booking in ${l.name} earns $20 off any Small Load or larger.` },
  ];

  return (
    <>
      <JsonLd id="ld-faq" data={faqSchema(locationFaqs)} />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Locations", href: "/locations" },
        { label: l.name },
      ]} />

      <section className="bg-gradient-to-b from-[color:var(--brand-bg-soft)] to-white">
        <div className="container-x py-10 md:py-14 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[color:var(--brand-green-dark)] mb-2">
              Junk Removal in {l.name}
            </span>
            <h1 className="font-display text-4xl md:text-5xl uppercase mb-3 leading-[1.05]">
              Junk Removal &amp; Dumpster Rental in <span className="text-[color:var(--brand-green-dark)]">{l.name}</span>
            </h1>
            <p className="text-lg text-[color:var(--brand-text)] mb-5">{l.intro}</p>
            <div className="flex flex-wrap gap-3">
              <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Calendar className="h-4 w-4" /> Book Now — Save $20
              </a>
              <a href={`tel:${SITE.phoneRaw}`} className="btn-outline">
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
            <Image src="/images/truck-hero.webp" alt={`JunkMD+ truck in ${l.name}`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-x grid lg:grid-cols-[2fr_1fr] gap-10">
          <div className="prose-brand max-w-none">
            <h2>Why San Diegans in {l.name} Pick JunkMD+</h2>
            <p>
              {l.name} residents trust JunkMD+ because we treat every house call like the only one we're
              doing that day. We arrive uniformed, on time, and ready to quote a flat rate before we touch
              your stuff. Whether you're clearing a garage in {l.neighborhoods?.[0] ?? l.name} or hauling
              an old fridge out of a {l.name} rental, we make the process easy.
            </p>

            {l.neighborhoods && l.neighborhoods.length > 0 && (
              <>
                <h2>Neighborhoods We Serve in {l.name}</h2>
                <ul>{l.neighborhoods.map((n) => <li key={n}>{n}</li>)}</ul>
              </>
            )}

            {l.landmarks && l.landmarks.length > 0 && (
              <>
                <h2>Familiar Landmarks Near Our {l.name} Routes</h2>
                <p>Our trucks regularly pass {l.landmarks.join(", ")} on the way to {l.name} house calls.</p>
              </>
            )}

            {l.highways && l.highways.length > 0 && (
              <>
                <h2>How We Get to {l.name}</h2>
                <p>JunkMD+ trucks reach {l.name} via {l.highways.join(", ")}. Most jobs in {l.name} are within 30 minutes of our Morena Blvd home base.</p>
              </>
            )}

            <h2>What We Haul in {l.name}</h2>
            <p>Anything in or around your home or business that you no longer want. Furniture, mattresses, appliances, hot tubs, exercise equipment, estate contents, garage clutter, yard waste, construction debris, demolition material — if you don't want it, we can probably haul it. We also offer dumpster rentals in {l.name} for self-service projects.</p>

            <h2>Same-Day &amp; Next-Day Service in {l.name}</h2>
            <p>Most weekdays we have a {l.name} route running. Call us before noon for the best shot at same-day; next-day is almost always available. Two-hour arrival windows Mon–Sat.</p>

            <h2>The {l.name} House Call</h2>
            <p>Schedule a two-hour arrival window. Two uniformed pros pull up in a green JunkMD+ truck. We size the job in person, give you a flat up-front price, do all the lifting, and leave the space cleaner than we found it. We donate or recycle as much as possible before anything heads to the landfill.</p>

            <h2>Save $20 on Your First {l.name} House Call</h2>
            <p>First-time JunkMD+ customers in {l.name} save $20 on any Small Load or larger. Mention it when booking or it'll apply automatically.</p>
          </div>

          <aside className="lg:sticky lg:top-24 self-start space-y-4">
            <div className="bg-[color:var(--brand-bg-soft)] border border-[color:var(--brand-border)] rounded-xl p-5">
              <h3 className="font-display text-xl uppercase mb-2">Book in {l.name}</h3>
              <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full mb-2">
                <Calendar className="h-4 w-4" /> Book Online
              </a>
              <a href={`tel:${SITE.phoneRaw}`} className="btn-outline w-full">
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
              <p className="text-xs text-[color:var(--brand-muted)] mt-3 text-center">
                Same-day &amp; next-day · 2-hr windows · Save $20 first appt
              </p>
            </div>
            {l.zips && (
              <div className="bg-white border border-[color:var(--brand-border)] rounded-xl p-5">
                <h3 className="font-display text-lg uppercase mb-2">Zip Codes We Serve</h3>
                <div className="flex flex-wrap gap-1.5">
                  {l.zips.map((z) => (
                    <span key={z} className="text-xs px-2 py-1 rounded bg-[color:var(--brand-bg-muted)]">{z}</span>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>

      <section className="py-12 bg-[color:var(--brand-bg-soft)]">
        <div className="container-x">
          <h2 className="font-display text-3xl uppercase mb-2">Services in {l.name}</h2>
          <p className="text-[color:var(--brand-text)] mb-6">Every JunkMD+ service is available in {l.name}. Pick what you need:</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="flex items-center gap-2 p-3 rounded-lg bg-white border border-[color:var(--brand-border)] hover:border-[color:var(--brand-green)] transition-colors"
              >
                <ChevronRight className="h-4 w-4 text-[color:var(--brand-green)]" />
                <span className="text-sm font-bold text-[color:var(--brand-ink)]">{s.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion title={`FAQ — Junk Removal in ${l.name}`} items={locationFaqs} />

      <ReviewGrid limit={3} />

      <CtaSection title={`Book Your ${l.name} House Call`} subtitle="Same-day & next-day appointments. Save $20 on your first booking." />
    </>
  );
}
