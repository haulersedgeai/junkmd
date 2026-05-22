"use client";

import * as Accordion from "@radix-ui/react-accordion";

export interface FaqItem {
  q: string;
  a: string;
}

function ToggleGlyph() {
  return (
    <span
      aria-hidden="true"
      className="relative h-4 w-4 shrink-0 text-ink transition-transform duration-200 group-data-[state=open]:rotate-45"
    >
      <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1.5px] bg-current rounded-full" />
      <span className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1.5px] bg-current rounded-full" />
    </span>
  );
}

export function FaqAccordion({ items, title }: { items: FaqItem[]; title?: string }) {
  return (
    <section className="section bg-paper-pure border-y border-border">
      <div className="container-x max-w-4xl mx-auto">
        {title && (
          <div className="mb-12">
            <p className="eyebrow mb-4">Questions, answered</p>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                fontWeight: 500,
              }}
            >
              {title}
            </h2>
          </div>
        )}
        <Accordion.Root type="single" collapsible className="border-t border-border">
          {items.map((item, i) => (
            <Accordion.Item
              key={i}
              value={String(i)}
              className="border-b border-border group"
            >
              <Accordion.Header>
                <Accordion.Trigger
                  className="group flex w-full items-center justify-between gap-6 py-6 text-left transition-colors"
                  style={{ cursor: "pointer" }}
                >
                  <span
                    className="text-ink text-[17px]"
                    style={{ fontWeight: 500, letterSpacing: "-0.005em" }}
                  >
                    {item.q}
                  </span>
                  <ToggleGlyph />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="pb-6 pr-10 text-ink-soft text-[16px] leading-relaxed">
                {item.a}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
