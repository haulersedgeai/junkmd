import { REVIEWS } from "@/content/reviews";

// Neighborhoods are not in the review data; map a small set for visual rhythm
const NEIGHBORHOODS: Record<string, string> = {
  "Hillary Hebert": "La Jolla",
  "Jackie Teague": "Pacific Beach",
  "p bono": "Clairemont",
  "Emily Brandt": "North Park",
  "Sean Yao": "Sorrento Valley",
  "Sharon Minor": "Carmel Valley",
  "Mary Allen": "Mission Valley",
  "Thomas Rutledge": "Poway",
  "Michael Whitebread": "Encinitas",
  "Kiyarha Bryant": "Chula Vista",
};

export function ReviewGrid({ limit }: { limit?: number }) {
  const items = limit ? REVIEWS.slice(0, limit) : REVIEWS;
  return (
    <section className="section bg-bg">
      <div className="container-x">
        <div className="max-w-2xl mb-12">
          <p className="label" style={{ color: "var(--brand-dark)" }}>Reviews</p>
          <h2 className="mt-3">5.0 stars from 1,396+ Google reviews.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((r) => {
            const hood = NEIGHBORHOODS[r.name];
            return (
              <article key={r.name} className="card p-6 bg-bg">
                <p className="text-brand text-[14px] tracking-tight" aria-hidden="true">★ ★ ★ ★ ★</p>
                <p className="mt-3 text-[16px] text-ink-soft leading-[1.6]">{r.body}</p>
                <p className="mt-5 text-[14px]">
                  <span className="text-ink" style={{ fontWeight: 500 }}>{r.name}</span>
                  {hood && (
                    <>
                      <span className="text-muted">, </span>
                      <span className="text-muted">{hood}</span>
                    </>
                  )}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
