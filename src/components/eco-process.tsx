const STEPS = [
  {
    n: "01",
    title: "Donations first",
    body: "Furniture, clothing, working appliances — we deliver everything that has life left to Goodwill, the Salvation Army, and local San Diego charities.",
  },
  {
    n: "02",
    title: "Recycle everything possible",
    body: "Metal, electronics, mattresses, cardboard, concrete, and clean wood get routed to certified recyclers — never the landfill.",
  },
  {
    n: "03",
    title: "Responsible disposal",
    body: "Less than 15% of a typical JunkMD+ haul actually ends up in a landfill. The rest finds a second home or a new life.",
  },
];

export function EcoProcess() {
  return (
    <section className="section bg-bg-soft">
      <div className="container-x">
        <div className="max-w-2xl mb-14">
          <p className="label" style={{ color: "var(--brand-dark)" }}>How we dispose</p>
          <h2 className="mt-3">Donate. Recycle. Dispose.</h2>
          <p className="mt-4 text-[18px] leading-[1.55] text-ink-soft">
            Eco-friendly isn&rsquo;t a sticker on the truck. It&rsquo;s how we sort every load.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {STEPS.map((s) => (
            <div key={s.n}>
              <p
                className="text-brand-dark tnum"
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: 40,
                  fontWeight: 500,
                  lineHeight: 1,
                  letterSpacing: "-0.025em",
                }}
              >
                {s.n}
              </p>
              <h3 className="mt-4" style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.01em" }}>
                {s.title}
              </h3>
              <p className="mt-2 text-[15px] text-ink-soft leading-[1.6]">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
