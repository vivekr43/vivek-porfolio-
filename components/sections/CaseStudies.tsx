"use client";

import dynamic from "next/dynamic";
import SectionReveal from "@/components/layout/SectionReveal";
import CaseCard from "@/components/ui/CaseCard";
import { CASE_STUDIES } from "@/lib/data";

const BeamsBackground = dynamic(
  () => import("@/components/canvas/BeamsBackground"),
  { ssr: false }
);

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      aria-labelledby="case-label"
      className="py-28 md:py-36 bg-[var(--bg-surface)] relative overflow-hidden"
    >
      {/* Animated beams behind the content */}
      <BeamsBackground />

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <SectionReveal>
          <p className="text-[11px] tracking-[0.12em] uppercase text-accent font-normal mb-10" id="case-label">
            Case Studies
          </p>
        </SectionReveal>

        <div className="flex flex-col gap-4">
          {CASE_STUDIES.map((study, i) => (
            <SectionReveal key={study.id} delay={i * 100}>
              <CaseCard study={study} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
