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
import { YoutubeEmbed } from "@/components/youtube-embed";
import { faqSchema, serviceSchema, breadcrumbSchema, videoSchema } from "@/lib/jsonld";
import { SERVICES, SERVICE_BY_SLUG } from "@/content/services";
import { LOCATIONS, LOCATION_BY_SLUG } from "@/content/locations";
import { SERVICE_PHOTOS, BRAND_PHOTOS } from "@/content/photos";
import { PRODUCTION_URL, SITE } from "@/lib/constants";

type Params = { slug: string };

function toTitle(s: string) {
  return s.replace(/\b\w/g, (c) => c.toUpperCase());
}

const SERVICE_VIDEOS: Record<string, { videoId: string; title: string; description: string; uploadDate: string }> = {
  "estate-cleanout": {
    videoId: "aczlyPwxLpA",
    title: "Stress-Free Property Cleanups Made Simple",
    description:
      "How JunkMD+ runs compassionate, full-service estate and property cleanouts in San Diego — sorting, donating, and hauling so families can focus on what matters.",
    uploadDate: "2026-02-05",
  },
};

export function generateStaticParams() {
  const slugs = new Set<string>();
  SERVICES.forEach((s) => slugs.add(s.slug));
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
  const l = LOCATION_BY_SLUG[slug];
  if (l) {
    const title = l.seoLabel
      ? `Junk Removal ${toTitle(l.seoLabel)} — ${l.name} | JunkMD+`
      : `Junk Removal in ${l.name}, CA — JunkMD+`;
    const description = l.seoLabel
      ? `JunkMD+ provides fast, friendly junk removal ${l.seoLabel} across ${l.name}. Same-day available. Save $20 on your first appointment.`
      : `JunkMD+ provides fast, friendly, full-service junk removal in ${l.name}, San Diego. Save $20 on your first appointment. Same-day available.`;
    return {
      title,
      description,
      alternates: { canonical: `/${slug}` },
    };
  }
  return {};
}

export default async function DynamicSlugPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = SERVICE_BY_SLUG[slug];
  const location = LOCATION_BY_SLUG[slug];

  if (service) return <ServicePage slug={slug} />;
  if (location) return <LocationPage slug={slug} />;
  notFound();
}

// ─────────── SERVICE PAGE ───────────
function ServicePage({ slug }: { slug: string }) {
  const s = SERVICE_BY_SLUG[slug]!;
  const relatedServices = s.related
    .map((r) => SERVICE_BY_SLUG[r])
    .filter(Boolean)
    .slice(0, 4);

  const categoryHubMap: Record<string, { label: string; href: string }> = {
    residential: { label: "Residential", href: "/residential-junk-removal" },
    commercial: { label: "Commercial", href: "/commercial-junk-removal" },
    demolition: { label: "Demolition", href: "/demolition-cleanup" },
    eco: { label: "Eco-Friendly", href: "/eco-friendly-junk-removal" },
    "what-we-take": { label: "What We Take", href: "/what-we-take" },
  };
  const hub = categoryHubMap[s.category];

  const serviceVideo = SERVICE_VIDEOS[slug];
  const photos = SERVICE_PHOTOS[slug];
  const heroImage = photos?.hero ?? s.image;
  const heroAlt = photos?.heroAlt ?? s.title;

  return (
    <>
      <JsonLd id="ld-service" data={serviceSchema(s.title, s.metaDescription, slug)} />
      <JsonLd id="ld-service-faq" data={faqSchema(s.faqs)} />
      <JsonLd id="ld-breadcrumb" data={breadcrumbSchema([
        { name: "Home", url: PRODUCTION_URL },
        { name: hub.label, url: `${PRODUCTION_URL}${hub.href}` },
        { name: s.title, url: `${PRODUCTION_URL}/${slug}` },
      ])} />
      {serviceVideo && (
        <JsonLd
          id="ld-service-video"
          data={videoSchema({
            videoId: serviceVideo.videoId,
            name: serviceVideo.title,
            description: serviceVideo.description,
            uploadDate: serviceVideo.uploadDate,
          })}
        />
      )}

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
              <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                <Calendar className="h-4 w-4" />
                Book Now — Save $20
              </a>
              <a href={`tel:${SITE.phoneRaw}`} className="btn btn-outline">
                <Phone className="h-4 w-4" />
                {SITE.phone}
              </a>
            </div>
          </div>
          {heroImage && (
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
              <Image src={heroImage} alt={heroAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
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
              <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-accent w-full mb-2">
                <Calendar className="h-4 w-4" /> Book Online
              </a>
              <a href={`tel:${SITE.phoneRaw}`} className="btn btn-outline w-full">
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

      {photos && photos.cards.length > 0 && (
        <section className="py-12 bg-white border-t border-[color:var(--brand-border)]">
          <div className="container-x">
            <div className="max-w-2xl mb-8">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[color:var(--brand-green-dark)] mb-2">
                On the job
              </span>
              <h2 className="font-display text-3xl uppercase leading-[1.1]">Real {s.title.toLowerCase()} jobs in San Diego</h2>
            </div>
            <div
              className={
                photos.cards.length === 1
                  ? "grid grid-cols-1 max-w-lg gap-4"
                  : photos.cards.length === 2
                    ? "grid grid-cols-1 sm:grid-cols-2 gap-4"
                    : photos.cards.length === 3
                      ? "grid grid-cols-1 sm:grid-cols-3 gap-4"
                      : "grid grid-cols-2 lg:grid-cols-4 gap-4"
              }
            >
              {photos.cards.map((c) => (
                <div
                  key={c.src}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[color:var(--brand-bg-muted)] border border-[color:var(--brand-border)]"
                >
                  <Image
                    src={c.src}
                    alt={c.alt}
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {serviceVideo && (
        <section className="py-14 bg-[color:var(--brand-bg-soft)] border-y border-[color:var(--brand-border)]">
          <div className="container-x grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
            <YoutubeEmbed videoId={serviceVideo.videoId} title={serviceVideo.title} />
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[color:var(--brand-green-dark)] mb-2">
                See it in action
              </span>
              <h2 className="font-display text-3xl md:text-4xl uppercase mb-3 leading-[1.1]">
                {serviceVideo.title}
              </h2>
              <p className="text-[17px] text-[color:var(--brand-text)] leading-[1.55]">
                Watch how the JunkMD+ crew handles a full property cleanout — discreetly,
                respectfully, and on a timeline that works for your family.
              </p>
            </div>
          </div>
        </section>
      )}

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
                  image={r!.image}
                  icon={r!.icon}
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
    { slug: "same-day-junk-removal", title: "Same-Day Service" },
  ];

  const isSanDiego = l.name === "San Diego";
  const zipList = l.zips?.join(", ") ?? "";
  const locationFaqs = [
    {
      q: `Do you serve all of ${l.name}?`,
      a: `Yes — JunkMD+ serves every street in ${l.name}${isSanDiego ? "" : ", San Diego County"}.${zipList ? ` Common zip codes we cover: ${zipList}.` : ""} Two-hour arrival windows are available Monday through Saturday.`,
    },
    {
      q: `How fast can you arrive in ${l.name}?`,
      a: `Most weekdays we offer same-day or next-day service in ${l.name}. Call before noon for the best chance of same-day; next-day is almost always available. Text photos to (858) 869-9448 for the fastest quote.`,
    },
    {
      q: `What's the most popular service in ${l.name}?`,
      a: `Furniture removal, garage cleanouts, and mattress disposal are our most-requested services in ${l.name}. We also handle estate cleanouts, hoarder cleanouts, and light demolition.`,
    },
    {
      q: `Are you insured for work in ${l.name}?`,
      a: `Yes — JunkMD+ is fully insured statewide, including ${l.name} and the rest of San Diego County. We provide a Certificate of Insurance to landlords, HOAs, and property managers on request.`,
    },
    {
      q: `Do you offer the $20 first-appointment discount in ${l.name}?`,
      a: `Yes — every first-time JunkMD+ booking in ${l.name} earns $20 off any Small Load or larger. Mention it when booking or it applies automatically during the on-site quote.`,
    },
  ];
  const faqs = l.faqOverrides ?? locationFaqs;

  return (
    <>
      <JsonLd id="ld-faq" data={faqSchema(faqs)} />
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
              {l.seoLabel ? (
                <>Junk Removal <span className="text-[color:var(--brand-green-dark)]">{toTitle(l.seoLabel)}</span> in {l.name}</>
              ) : (
                <>Junk Removal in <span className="text-[color:var(--brand-green-dark)]">{l.name}</span></>
              )}
            </h1>
            <p className="text-lg text-[color:var(--brand-text)] mb-5">{l.intro}</p>
            <div className="flex flex-wrap gap-3">
              <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                <Calendar className="h-4 w-4" /> Book Now — Save $20
              </a>
              <a href={`tel:${SITE.phoneRaw}`} className="btn btn-outline">
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
            <Image src={BRAND_PHOTOS.truckBanner} alt={`JunkMD+ green junk-removal truck on a ${l.name}, San Diego route`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-x grid lg:grid-cols-[2fr_1fr] gap-10">
          <div className="prose-brand max-w-none">
            <h2>Why {isSanDiego ? "San Diego" : `${l.name} Residents`} Pick JunkMD+</h2>
            <p>
              {l.name} {isSanDiego ? "is our home base — we're located right on Morena Blvd in Bay Park. Locals" : "residents"} trust JunkMD+ because we treat every house call like the only one we're
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
            <p>Anything in or around your home or business that you no longer want. Furniture, mattresses, appliances, hot tubs, exercise equipment, estate contents, garage clutter, yard waste, construction debris, demolition material — if you don't want it, we can probably haul it.</p>

            <h2>Same-Day &amp; Next-Day Service in {l.name}</h2>
            <p>Most weekdays we have a {l.name} route running. Call us before noon for the best shot at same-day; next-day is almost always available. Two-hour arrival windows Mon–Sat.</p>

            <h2>The {l.name} House Call</h2>
            <p>Schedule a two-hour arrival window. Two uniformed pros pull up in a green JunkMD+ truck. We size the job in person, give you a flat up-front price, do all the lifting, and leave the space cleaner than we found it. We donate or recycle as much as possible before anything heads to the landfill.</p>

            <h2>Save $20 on Your First {l.name} House Call</h2>
            <p>First-time JunkMD+ customers in {l.name} save $20 on any Small Load or larger. Mention it when booking or it'll apply automatically.</p>

            {l.localSections?.map((section) => (
              <div key={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </div>
            ))}
          </div>

          <aside className="lg:sticky lg:top-24 self-start space-y-4">
            <div className="bg-[color:var(--brand-bg-soft)] border border-[color:var(--brand-border)] rounded-xl p-5">
              <h3 className="font-display text-xl uppercase mb-2">Book in {l.name}</h3>
              <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-accent w-full mb-2">
                <Calendar className="h-4 w-4" /> Book Online
              </a>
              <a href={`tel:${SITE.phoneRaw}`} className="btn btn-outline w-full">
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
              <p className="text-xs text-[color:var(--brand-muted)] mt-3 text-center">
                Same-day &amp; next-day · 2-hr windows · Save $20 first appt
              </p>
            </div>
            {l.zips && l.zips.length > 0 && (
              <div className="bg-white border border-[color:var(--brand-border)] rounded-xl p-5">
                <h3 className="font-display text-lg uppercase mb-2">Zip Codes We Serve</h3>
                <p className="text-sm text-[color:var(--brand-text)] mb-3">
                  {l.zips.join(" · ")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {l.zips.map((z) => (
                    <span
                      key={z}
                      className="inline-block text-xs font-bold px-2.5 py-1 rounded bg-[color:var(--brand-green)]/10 text-[color:var(--brand-green-dark)] border border-[color:var(--brand-green)]/30"
                    >
                      {z}
                    </span>
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

      <FaqAccordion title={`FAQ — Junk Removal in ${l.name}`} items={faqs} />

      <ReviewGrid limit={3} />

      <CtaSection title={`Book Your ${l.name} House Call`} subtitle="Same-day & next-day appointments. Save $20 on your first booking." />
    </>
  );
}
