// @ts-nocheck
"use client";

import SectionReveal from "@/components/layout/SectionReveal";
import { EVENTS } from "@/lib/data";

export default function Events() {
  return (
    <section
      id="events"
      aria-labelledby="events-label"
      className="py-20 md:py-24 bg-[var(--bg-deep)]"
    >
      <div className="max-w-[800px] mx-auto px-6">
        <SectionReveal>
          <p className="text-[11px] tracking-[0.12em] uppercase text-accent font-normal mb-6" id="events-label">
            Events & Community
          </p>
        </SectionReveal>

        <SectionReveal delay={100}>
          <p className="text-[15px] text-[var(--text-secondary)] mb-8 leading-[1.7]">
            Staying close to what&apos;s actually being built in Mumbai&apos;s AI and dev community.
          </p>
        </SectionReveal>

        <div className="space-y-6 text-[14px] text-[var(--text-secondary)] leading-[1.7] text-left">
          {EVENTS.map((event, i) => (
            <SectionReveal key={event.id} delay={i * 100 + 150} className="flex items-start gap-3">
              <span className="text-accent flex-shrink-0">—</span>
              <p>{event.text}</p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
