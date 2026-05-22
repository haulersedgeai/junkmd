import { VALUE_PILLARS } from "@/lib/constants";
import { Truck, ShieldCheck, BadgeDollarSign, Zap } from "lucide-react";

const ICONS = { Truck, ShieldCheck, BadgeDollarSign, Zap } as const;

export function ValuePillars() {
  return (
    <section className="py-16 bg-white">
      <div className="container-x">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[color:var(--brand-green-dark)]">
            Why JunkMD+
          </span>
          <h2 className="font-display text-3xl sm:text-4xl uppercase mt-2 mb-3">
            Four Reasons San Diego Picks Us
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUE_PILLARS.map((pillar) => {
            const Icon = ICONS[pillar.icon as keyof typeof ICONS];
            return (
              <div
                key={pillar.title}
                className="text-center p-6 rounded-xl bg-[color:var(--brand-bg-soft)] border border-[color:var(--brand-border)]"
              >
                <div className="w-14 h-14 rounded-full bg-[color:var(--brand-green)] text-white mx-auto flex items-center justify-center mb-3">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-lg uppercase mb-2">{pillar.title}</h3>
                <p className="text-sm text-[color:var(--brand-text)]">{pillar.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
