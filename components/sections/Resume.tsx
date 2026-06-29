// @ts-nocheck
"use client";

import SectionReveal from "@/components/layout/SectionReveal";
import BorderGlow from "@/components/ui/BorderGlow";
import { SOCIAL_LINKS } from "@/lib/data";

export default function Resume() {
  return (
    <section
      id="resume"
      aria-labelledby="resume-label"
      className="py-28 md:py-36 bg-[var(--bg-deep)]"
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <SectionReveal>
          <p className="text-[11px] tracking-[0.12em] uppercase text-accent font-normal mb-10" id="resume-label">
            Resume
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Timeline columns */}
          <div className="lg:col-span-8 space-y-14">
            {/* Experience */}
            <div>
              <SectionReveal delay={100}>
                <h3 className="text-[14px] tracking-[0.1em] uppercase text-[var(--text-primary)] font-semibold mb-8 border-b border-white/8 pb-3">
                  Experience
                </h3>
              </SectionReveal>

              <div className="space-y-10 pl-2 border-l border-white/8">
                {/* Job 0 (Co-Founder - ReferUp) */}
                <SectionReveal delay={150} className="relative pl-6">
                  <div className="absolute -left-4 top-1.5 w-2 h-2 rounded-full bg-accent border-4 border-[var(--bg-deep)] outline outline-1 outline-accent/40" />
                  <div className="flex flex-wrap justify-between items-baseline mb-2 gap-2">
                    <h4 className="text-[15px] font-medium text-[var(--text-primary)]">
                      Co-Founder · Product Strategy & Growth Design
                    </h4>
                    <span className="text-[12px] text-[var(--text-muted)] font-mono">
                      2025 — Present
                    </span>
                  </div>
                  <p className="text-[13px] text-accent font-medium mb-3">
                    ReferUp · Mumbai
                  </p>
                  <ul className="text-[13px] text-[var(--text-secondary)] space-y-2 list-disc pl-4 leading-[1.65] text-left">
                    <li>Led go-to-market positioning for a performance-based Shopify referral SaaS, conducting competitive analysis against direct competitors (ReferRush, SATHI) to define a defensible pricing differentiator.</li>
                    <li>Modeled and validated a tiered, usage-based pricing structure (3–5% success fee on referral order value) by building revenue projections against real order-volume and AOV scenarios, surfacing and addressing gaps between order-volume tiers and actual referral-conversion revenue.</li>
                    <li>Designed and built interactive UI mockups (HTML/CSS) for core dashboard features, including a trigger-based campaign system (automated referral prompts based on reviews, order value, and repeat purchases) with strict data-integrity rules (idempotency, rate-limiting, fraud-safe triggers).</li>
                    <li>Authored a comprehensive B2B partnership proposal and presentation deck for outreach to major Indian D2C brands (e.g., boAt), translating internal pricing logic into an external commercial pitch.</li>
                    <li>Audited and rebuilt website copy and UX messaging hierarchy around the product&apos;s zero-upfront-cost model to close a core positioning gap identified in user testing.</li>
                    <li>Drafted technical implementation specs for engineering handoff, covering webhook idempotency, rate-limiting, and fraud-surface mitigation.</li>
                  </ul>
                </SectionReveal>

                {/* Job 1 (Leadership - now leads!) */}
                <SectionReveal delay={200} className="relative pl-6">
                  <div className="absolute -left-4 top-1.5 w-2 h-2 rounded-full bg-accent border-4 border-[var(--bg-deep)] outline outline-1 outline-accent/40" />
                  <div className="flex flex-wrap justify-between items-baseline mb-2 gap-2">
                    <h4 className="text-[15px] font-medium text-[var(--text-primary)]">
                      Event & Operations Leader
                    </h4>
                    <span className="text-[12px] text-[var(--text-muted)] font-mono">
                      June 2023 — 2026
                    </span>
                  </div>
                  <p className="text-[13px] text-accent font-medium mb-3">
                    College Department · Nagindas Khandwala College (NKC) · Mumbai
                  </p>
                  <ul className="text-[13px] text-[var(--text-secondary)] space-y-2 list-disc pl-4 leading-[1.65] text-left">
                    <li>Led a 200+ member student team across large-scale college fests and departmental events, owning sponsorship outreach and registration systems end-to-end.</li>
                    <li>Coordinated cross-functional teams (gaming, social media) and delivered live pitches to audiences of 500+.</li>
                    <li>Brought structured planning to events with multiple moving parts and tight timelines — a habit that now shows up in how I scope and ship side projects.</li>
                  </ul>
                </SectionReveal>

                {/* Job 2 (Internship) */}
                <SectionReveal delay={250} className="relative pl-6">
                  <div className="absolute -left-4 top-1.5 w-2 h-2 rounded-full bg-accent border-4 border-[var(--bg-deep)] outline outline-1 outline-accent/40" />
                  <div className="flex flex-wrap justify-between items-baseline mb-2 gap-2">
                    <h4 className="text-[15px] font-medium text-[var(--text-primary)]">
                      Assistant Intern
                    </h4>
                    <span className="text-[12px] text-[var(--text-muted)] font-mono">
                      May 2024 — July 2024
                    </span>
                  </div>
                  <p className="text-[13px] text-accent font-medium mb-3">
                    Helsing Office · Mumbai
                  </p>
                  <ul className="text-[13px] text-[var(--text-secondary)] space-y-2 list-disc pl-4 leading-[1.65] text-left">
                    <li>Built and maintained structured reporting workflows, replacing ad-hoc tracking with a consistent, auditable process.</li>
                    <li>Worked directly with senior management to translate raw data into clear summaries for decision-making.</li>
                  </ul>
                </SectionReveal>
              </div>
            </div>

            {/* Education */}
            <div>
              <SectionReveal delay={300}>
                <h3 className="text-[14px] tracking-[0.1em] uppercase text-[var(--text-primary)] font-semibold mb-8 border-b border-white/8 pb-3">
                  Education
                </h3>
              </SectionReveal>

              <div className="space-y-10 pl-2 border-l border-white/8">
                {/* Ed 1 */}
                <SectionReveal delay={350} className="relative pl-6">
                  <div className="absolute -left-4 top-1.5 w-2 h-2 rounded-full bg-accent border-4 border-[var(--bg-deep)] outline outline-1 outline-accent/40" />
                  <div className="flex flex-wrap justify-between items-baseline mb-2 gap-2">
                    <h4 className="text-[15px] font-medium text-[var(--text-primary)]">
                      B.Sc. in Computer Science
                    </h4>
                    <span className="text-[12px] text-[var(--text-muted)] font-mono">
                      Jul 2023 — 2026
                    </span>
                  </div>
                  <p className="text-[13px] text-accent font-medium">
                    Nagindas Khandwala College (NKC) · Mumbai
                  </p>
                </SectionReveal>

                {/* Ed 2 */}
                <SectionReveal delay={400} className="relative pl-6">
                  <div className="absolute -left-4 top-1.5 w-2 h-2 rounded-full bg-accent border-4 border-[var(--bg-deep)] outline outline-1 outline-accent/40" />
                  <div className="flex flex-wrap justify-between items-baseline mb-2 gap-2">
                    <h4 className="text-[15px] font-medium text-[var(--text-primary)]">
                      Higher Secondary Certificate (HSC)
                    </h4>
                    <span className="text-[12px] text-[var(--text-muted)] font-mono">
                      Jul 2021 — 2023
                    </span>
                  </div>
                  <p className="text-[13px] text-accent font-medium">
                    Sardar Vallabhbhai Patel College · Mumbai
                  </p>
                </SectionReveal>

                {/* Ed 3 */}
                <SectionReveal delay={450} className="relative pl-6">
                  <div className="absolute -left-4 top-1.5 w-2 h-2 rounded-full bg-accent border-4 border-[var(--bg-deep)] outline outline-1 outline-accent/40" />
                  <div className="flex flex-wrap justify-between items-baseline mb-2 gap-2">
                    <h4 className="text-[15px] font-medium text-[var(--text-primary)]">
                      Secondary School Certificate (SSC)
                    </h4>
                    <span className="text-[12px] text-[var(--text-muted)] font-mono">
                      Completed 2020
                    </span>
                  </div>
                  <p className="text-[13px] text-accent font-medium">
                    Madhusudhan High School
                  </p>
                </SectionReveal>
              </div>
            </div>
          </div>

          {/* Download & Sidebar */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24 text-left">
            <SectionReveal delay={200}>
              <BorderGlow
                edgeSensitivity={25}
                glowColor="43 80 75"
                backgroundColor="rgba(15, 15, 22, 0.4)"
                borderRadius={16}
                glowRadius={35}
                glowIntensity={1.0}
                colors={['#c9a96e', '#7850c8', '#38bdf8']}
                className="p-6 border border-white/5 backdrop-blur-md flex flex-col items-center text-center"
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-4">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <h4 className="text-[15px] font-medium text-[var(--text-primary)] mb-2">
                  Official Resume PDF
                </h4>
                <p className="text-[12px] text-[var(--text-secondary)] mb-6 leading-relaxed">
                  View, download, or print the complete, formatted resume.
                </p>
                <a
                  href={SOCIAL_LINKS.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center border border-accent text-accent px-6 py-2.5 rounded-lg text-[13px] hover:bg-[var(--accent-dim)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  Download PDF
                </a>
              </BorderGlow>
            </SectionReveal>

            {/* Technical & Strategy Skills summary */}
            <SectionReveal delay={300} className="bg-[var(--bg-card)] border border-white/8 rounded-xl p-6">
              <h4 className="text-[13px] tracking-[0.08em] uppercase text-[var(--text-primary)] font-semibold mb-4">
                Skills & Expertise
              </h4>
              <p className="text-[13.5px] text-[var(--text-secondary)] leading-[1.6] mb-4">
                <strong className="text-[var(--text-primary)]">Strategy & Growth:</strong> Product Strategy, Growth Design, Pricing Modeling, B2B Pitching, UX Auditing
              </p>
              <p className="text-[13.5px] text-[var(--text-secondary)] leading-[1.6]">
                <strong className="text-[var(--text-primary)]">Technical & Tools:</strong> HTML / CSS / JavaScript, Python, SQL, Cursor, Claude, Groq API, Git, Vercel
              </p>
            </SectionReveal>

            {/* Soft Skills summary */}
            <SectionReveal delay={400} className="bg-[var(--bg-card)] border border-white/8 rounded-xl p-6">
              <h4 className="text-[13px] tracking-[0.08em] uppercase text-[var(--text-primary)] font-semibold mb-4">
                Soft Skills
              </h4>
              <p className="text-[13.5px] text-[var(--text-secondary)] leading-[1.6]">
                Leadership, Public Speaking, Cross-Team Coordination, Communication
              </p>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
