import { PROCESS_STEPS } from "@/lib/constants";
import { Calendar, Truck, FileText, ThumbsUp, Smile, Sparkles } from "lucide-react";

const ICONS = [Calendar, Truck, FileText, ThumbsUp, Smile, Sparkles];

export function ProcessSteps() {
  return (
    <section className="py-16 bg-[color:var(--brand-bg-soft)]">
      <div className="container-x">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[color:var(--brand-green-dark)]">
            The JunkMD+ House Call
          </span>
          <h2 className="font-display text-3xl sm:text-4xl uppercase mt-2 mb-3">
            How It Works — 6 Simple Steps
          </h2>
          <p className="text-[color:var(--brand-text)]">
            From booking to "and we're off!" — most jobs are done same-day. You point, we haul.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={step.n}
                className="bg-white border border-[color:var(--brand-border)] rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[color:var(--brand-green)] text-white flex items-center justify-center font-display text-lg">
                    {step.n}
                  </div>
                  <div>
                    <h3 className="font-display text-lg uppercase mb-1 flex items-center gap-2">
                      <Icon className="h-4 w-4 text-[color:var(--brand-green-dark)]" />
                      {step.title}
                    </h3>
                    <p className="text-sm text-[color:var(--brand-text)]">{step.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
