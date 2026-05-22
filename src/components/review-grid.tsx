import { Star } from "lucide-react";
import { REVIEWS } from "@/content/reviews";
import { SITE } from "@/lib/constants";

export function ReviewGrid({ limit }: { limit?: number }) {
  const items = limit ? REVIEWS.slice(0, limit) : REVIEWS;
  return (
    <section className="py-16 bg-[color:var(--brand-bg-soft)]">
      <div className="container-x">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[color:var(--brand-green-dark)]">
            Real Reviews
          </span>
          <h2 className="font-display text-3xl sm:text-4xl uppercase mt-2 mb-2">
            Hey! JunkMD+ Has a Perfect 5-Star Rating
          </h2>
          <p className="text-[color:var(--brand-text)]">
            {SITE.reviews.google.count.toLocaleString()} Google reviews · {SITE.reviews.yelp.count}+ Yelp reviews · {SITE.reviews.clientsServed.toLocaleString()}+ San Diego clients served.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((r) => (
            <article
              key={r.name}
              className="bg-white border border-[color:var(--brand-border)] rounded-xl p-5"
            >
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[color:var(--brand-green)] text-[color:var(--brand-green)]" />
                ))}
              </div>
              <p className="text-sm text-[color:var(--brand-text)] leading-relaxed mb-3">
                "{r.body}"
              </p>
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold uppercase">{r.name}</span>
                <span className="text-[color:var(--brand-muted)]">{r.source}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
