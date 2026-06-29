"use client";

import type { CaseStudy } from "@/types";

interface CaseCardProps {
  study: CaseStudy;
}

export default function CaseCard({ study }: CaseCardProps) {
  return (
    <article
      className="bg-[var(--bg-card)] border border-white/8 rounded-xl p-5 sm:p-7 md:p-8 flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 items-start group transition-all duration-300 hover:border-white/18 hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)] relative overflow-hidden"
      aria-label={`Case study: ${study.title}`}
    >
      {/* Subtle gradient glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(201,169,110,0.04)] via-transparent to-transparent" />
      </div>

      <div
        className="font-playfair italic text-2xl md:text-4xl text-accent flex-shrink-0 leading-none mt-1 w-8 md:w-10 relative z-10"
        aria-hidden="true"
      >
        {study.number}
      </div>

      <div className="flex-1 relative z-10">
        <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
          <h3 className="text-[16px] font-medium text-[var(--text-primary)]">
            {study.title}
          </h3>
          <span className="text-[12px] text-[var(--text-muted)] border border-white/8 rounded px-2.5 py-0.5 flex-shrink-0">
            {study.year}
          </span>
        </div>
        <p className="text-[14px] text-[var(--text-secondary)] leading-[1.7] mb-4">
          {study.summary}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {study.tags.map((tag) => (
            <span key={tag} className="tag-neutral">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
