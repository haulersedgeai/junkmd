"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export interface FaqItem {
  q: string;
  a: string;
}

export function FaqAccordion({ items, title }: { items: FaqItem[]; title?: string }) {
  return (
    <section className="py-16 bg-white">
      <div className="container-x max-w-3xl">
        {title && (
          <h2 className="font-display text-3xl sm:text-4xl uppercase mb-6 text-center">{title}</h2>
        )}
        <Accordion.Root type="single" collapsible className="space-y-2">
          {items.map((item, i) => (
            <Accordion.Item
              key={i}
              value={String(i)}
              className="border border-[color:var(--brand-border)] rounded-lg bg-[color:var(--brand-bg-soft)] overflow-hidden"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between p-4 text-left font-bold text-[color:var(--brand-ink)] hover:bg-[color:var(--brand-bg-muted)] transition-colors">
                  <span>{item.q}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 transition-transform group-data-[state=open]:rotate-180 text-[color:var(--brand-green-dark)]" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-4 pb-4 text-[color:var(--brand-text)] leading-relaxed">
                {item.a}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
