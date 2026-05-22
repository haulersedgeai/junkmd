import Image from "next/image";

export function TruckComparison() {
  return (
    <section className="py-16 bg-white">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[color:var(--brand-green-dark)]">
            Our Unfair Advantage
          </span>
          <h2 className="font-display text-3xl sm:text-4xl uppercase mt-2 mb-3">
            One JunkMD+ Truck Load = <span className="text-[color:var(--brand-green-dark)]">Six Pickup Truck Loads</span>
          </h2>
          <p className="text-[color:var(--brand-text)]">
            One trip with us. Six trips with a buddy and a borrowed truck. The math's on the truck.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_auto_2fr] items-center gap-6 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="relative aspect-square max-w-[180px] mx-auto">
              <Image src="/images/junkmd-truck.png" alt="JunkMD+ truck" fill className="object-contain" sizes="180px" />
            </div>
            <p className="font-display text-lg uppercase mt-2">1 JunkMD+ Truck</p>
            <p className="text-sm text-[color:var(--brand-muted)]">≈ 15 cubic yards</p>
          </div>

          <div className="text-center">
            <span className="font-display text-5xl text-[color:var(--brand-green)]">=</span>
          </div>

          <div className="text-center">
            <div className="grid grid-cols-3 gap-2 max-w-[420px] mx-auto">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="relative aspect-square">
                  <Image
                    src="/images/pickup-truck.png"
                    alt={`Pickup truck ${i}`}
                    fill
                    className="object-contain"
                    sizes="140px"
                  />
                </div>
              ))}
            </div>
            <p className="font-display text-lg uppercase mt-2">6 Pickup Truck Loads</p>
            <p className="text-sm text-[color:var(--brand-muted)]">≈ 2.5 cubic yards each</p>
          </div>
        </div>
      </div>
    </section>
  );
}
