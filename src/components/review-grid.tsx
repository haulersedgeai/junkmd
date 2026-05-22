import { REVIEWS } from "@/content/reviews";
import { SITE } from "@/lib/constants";

export function ReviewGrid({ limit }: { limit?: number }) {
  const items = limit ? REVIEWS.slice(0, limit) : REVIEWS;
  return (
    <section className="section bg-paper">
      <div className="container-x">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">Word of mouth, in writing</p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              fontWeight: 500,
            }}
          >
            {SITE.reviews.google.count.toLocaleString()}+ five-star reviews. Here are ten of them.
          </h2>
          <p className="mt-5 text-ink-soft text-[16px] leading-relaxed max-w-xl">
            JunkMD+ is one of the most-reviewed junk removal companies in California. These are real names from the homepage Trustindex widget — paraphrased for length.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {items.map((r) => (
            <article
              key={r.name}
              className="bg-paper-pure border border-border rounded-lg p-7 flex flex-col"
            >
              <p
                aria-hidden="true"
                className="text-brand mb-2"
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontSize: "3rem",
                  lineHeight: 0.6,
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                }}
              >
                &ldquo;
              </p>
              <p className="text-[15px] text-ink leading-relaxed flex-1">
                {r.body}
              </p>
              <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                <div>
                  <p
                    className="text-[12px] uppercase tracking-[0.12em] text-ink"
                    style={{ fontWeight: 600 }}
                  >
                    {r.name}
                  </p>
                  <p className="text-[12px] text-muted mt-0.5">{r.source}</p>
                </div>
                <span className="text-brand text-[13px] tracking-tight">★ ★ ★ ★ ★</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
