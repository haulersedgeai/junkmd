import { REVIEWS } from "@/content/reviews";
import { SITE } from "@/lib/constants";

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase() || "JM";
}

export function ReviewGrid({ limit }: { limit?: number }) {
  const items = limit ? REVIEWS.slice(0, limit) : REVIEWS;
  return (
    <section className="section bg-bg">
      <div className="container-x">
        <div className="max-w-2xl mb-12">
          <p className="label mb-3">Customer stories</p>
          <h2>{SITE.reviews.google.count.toLocaleString()}+ five-star reviews. Here&rsquo;s a few.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((r) => (
            <article key={r.name} className="card p-5 flex flex-col">
              <p className="text-brand text-[14px] tracking-tight" aria-hidden="true">★ ★ ★ ★ ★</p>
              <p className="mt-3 text-[15px] text-ink-soft leading-[1.55] flex-1">{r.body}</p>
              <div className="mt-5 pt-4 border-t border-border flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className="h-8 w-8 rounded-full bg-brand-faint text-ink flex items-center justify-center"
                    style={{ fontSize: 12, fontWeight: 600, letterSpacing: "-0.01em" }}
                  >
                    {initials(r.name)}
                  </div>
                  <p className="text-[13px] text-ink" style={{ fontWeight: 500 }}>{r.name}</p>
                </div>
                <span className="pill pill-neutral">{r.source}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
