import Image from "next/image";

export function TruckComparison() {
  return (
    <section className="section bg-paper">
      <div className="container-x">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">The math on the truck</p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              fontWeight: 500,
            }}
          >
            One JunkMD+ truck. Six pickup truck loads.
          </h2>
          <p className="mt-5 text-ink-soft text-[16px] leading-relaxed max-w-xl">
            One trip with us versus six trips with a buddy and a borrowed bed. The size of our truck is the size of your weekend back.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1.6fr] items-center gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Single JunkMD+ truck */}
          <figure className="text-center">
            <div className="relative aspect-[5/3] w-full rounded-lg overflow-hidden bg-cream">
              <Image
                src="/images/truck-hero.webp"
                alt="JunkMD+ truck"
                fill
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover img-soft"
              />
            </div>
            <figcaption
              className="mt-5"
              style={{
                fontFamily: "var(--font-fraunces), serif",
                fontSize: "1.125rem",
                fontWeight: 500,
                letterSpacing: "-0.01em",
              }}
            >
              1 JunkMD+ truck
            </figcaption>
            <p className="text-[13px] text-muted mt-1">≈ 15 cubic yards</p>
          </figure>

          {/* Equals */}
          <div
            className="text-center text-ink-soft hidden lg:block"
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontSize: "4rem",
              fontWeight: 300,
              lineHeight: 1,
            }}
          >
            =
          </div>
          <div
            className="lg:hidden text-center text-ink-soft"
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontSize: "2rem",
              fontWeight: 300,
            }}
          >
            equals
          </div>

          {/* 6 pickup trucks */}
          <figure className="text-center">
            <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="relative aspect-square rounded bg-cream border border-border overflow-hidden">
                  <Image
                    src="/images/pickup-truck.png"
                    alt={`Pickup truck ${i + 1}`}
                    fill
                    sizes="120px"
                    className="object-contain p-2"
                  />
                </div>
              ))}
            </div>
            <figcaption
              className="mt-5"
              style={{
                fontFamily: "var(--font-fraunces), serif",
                fontSize: "1.125rem",
                fontWeight: 500,
                letterSpacing: "-0.01em",
              }}
            >
              6 pickup truck loads
            </figcaption>
            <p className="text-[13px] text-muted mt-1">≈ 2.5 cubic yards each</p>
          </figure>
        </div>
      </div>
    </section>
  );
}
