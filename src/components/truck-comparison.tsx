import Image from "next/image";

function PickupSilhouette() {
  return (
    <svg viewBox="0 0 80 32" width="80" height="32" aria-hidden="true">
      {/* Cab: roof, A-pillar slope, and door body */}
      <path
        d="M10 22 V14 Q10 12 12 12 L22 12 L28 6 L40 6 Q42 6 42 8 V22 Z"
        fill="var(--ink-soft)"
        opacity="0.7"
      />
      {/* Open bed: lower box with visible bed walls */}
      <path
        d="M42 22 V10 L72 10 Q74 10 74 12 V22 Z"
        fill="none"
        stroke="var(--ink-soft)"
        strokeWidth="2"
        strokeLinejoin="round"
        opacity="0.7"
      />
      {/* Cab window cutout */}
      <path
        d="M24 12 L28 8 L38 8 Q39 8 39 9 V12 Z"
        fill="#ffffff"
        opacity="0.9"
      />
      {/* Chassis bar tying cab + bed */}
      <rect x="10" y="22" width="64" height="2" fill="var(--ink-soft)" opacity="0.7" />
      {/* Wheel wells (arches) */}
      <path d="M14 24 a6 6 0 0 1 12 0" fill="none" stroke="var(--ink-soft)" strokeWidth="1.5" opacity="0.7" />
      <path d="M54 24 a6 6 0 0 1 12 0" fill="none" stroke="var(--ink-soft)" strokeWidth="1.5" opacity="0.7" />
      {/* Wheels */}
      <circle cx="20" cy="25" r="4" fill="var(--ink)" />
      <circle cx="60" cy="25" r="4" fill="var(--ink)" />
      <circle cx="20" cy="25" r="1.5" fill="#ffffff" />
      <circle cx="60" cy="25" r="1.5" fill="#ffffff" />
    </svg>
  );
}

export function TruckComparison() {
  return (
    <section className="section bg-bg">
      <div className="container-x">
        <div className="max-w-2xl mb-14">
          <p className="label mb-3">The math on the truck</p>
          <h2>One trip with us. Six trips without.</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-10 lg:gap-16 max-w-5xl mx-auto">
          <figure className="text-center">
            <div className="relative aspect-[5/3] w-full rounded-[10px] overflow-hidden border border-border bg-bg-muted">
              <Image src="/images/photos/truck/junkmd-truck-san-diego-banner-01.jpg" alt="JunkMD+ truck" fill sizes="(max-width: 1024px) 100vw, 380px" className="object-cover" />
            </div>
            <figcaption
              className="mt-4 text-ink"
              style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 13, letterSpacing: "0.04em", textTransform: "uppercase" }}
            >
              1 JunkMD+ truck · ≈ 15 yd³
            </figcaption>
          </figure>

          <div
            className="text-muted text-center"
            style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 64, lineHeight: 1, fontWeight: 400 }}
          >
            =
          </div>

          <figure className="text-center">
            <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-square rounded-[8px] border border-border bg-bg-muted flex items-center justify-center">
                  <PickupSilhouette />
                </div>
              ))}
            </div>
            <figcaption
              className="mt-4 text-ink"
              style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 13, letterSpacing: "0.04em", textTransform: "uppercase" }}
            >
              6 pickup loads · ≈ 2.5 yd³ each
            </figcaption>
          </figure>
        </div>

        <p className="mt-12 text-[16px] text-muted text-center max-w-[480px] mx-auto">
          One JunkMD+ truck load equals six average pickup truck loads. One trip with us replaces a weekend with a borrowed bed.
        </p>
      </div>
    </section>
  );
}
