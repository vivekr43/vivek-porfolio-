"use client";

import SectionReveal from "@/components/layout/SectionReveal";
import { SOCIAL_LINKS } from "@/lib/data";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-label"
      className="bg-[var(--bg-surface)] pt-28 pb-16 md:pt-36 md:pb-16 text-center relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(201,169,110,0.05) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <SectionReveal>
          <h2
            id="contact-label"
            className="font-playfair italic text-[clamp(2rem,4vw,3rem)] text-[var(--text-primary)] mb-4 leading-[1.2]"
          >
            Let&apos;s build something.
          </h2>
        </SectionReveal>

        <SectionReveal delay={100}>
          <p className="text-[15px] text-[var(--text-secondary)] mb-10">
            Open to Software Engineering internships and collaborative builds.
          </p>
        </SectionReveal>

        <SectionReveal delay={200}>
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            id="contact-email-btn"
            className="inline-block mb-12 border border-accent text-accent px-8 py-3.5 rounded-lg hover:bg-[var(--accent-dim)] hover:-translate-y-0.5 transition-all duration-200 text-[15px]"
          >
            {SOCIAL_LINKS.email}
          </a>
        </SectionReveal>

        <SectionReveal delay={300}>
          <div className="flex items-center justify-center gap-4 mb-16">
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="linkedin-link"
              className="text-[14px] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-200"
            >
              LinkedIn
            </a>
            <span className="text-[var(--text-muted)]">·</span>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              id="github-link"
              className="text-[14px] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-200"
            >
              GitHub
            </a>
          </div>
        </SectionReveal>

        <SectionReveal delay={400}>
          <p className="text-[13px] text-[var(--text-muted)] border-t border-white/8 pt-7">
            © 2026 Vivek Ribadiya · Mumbai
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
