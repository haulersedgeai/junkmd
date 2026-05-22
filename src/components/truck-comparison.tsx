import Image from "next/image";

function PickupSilhouette() {
  return (
    <svg viewBox="0 0 80 32" width="80" height="32" aria-hidden="true">
      <path
        d="M2 24 V14 L20 14 L26 6 L48 6 L52 14 L72 14 L78 18 V24 H68 a4 4 0 1 1 -8 0 H22 a4 4 0 1 1 -8 0 H2 Z"
        fill="var(--ink-soft)"
        opacity="0.55"
      />
      <circle cx="18" cy="24" r="3.5" fill="var(--ink)" />
      <circle cx="64" cy="24" r="3.5" fill="var(--ink)" />
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
              <Image src="/images/truck-hero.webp" alt="JunkMD+ truck" fill sizes="(max-width: 1024px) 100vw, 380px" className="object-cover" />
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
