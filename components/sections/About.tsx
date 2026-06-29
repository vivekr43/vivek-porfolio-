// @ts-nocheck
"use client";

import SectionReveal from "@/components/layout/SectionReveal";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-label"
      className="py-28 md:py-36 bg-[var(--bg-surface)]"
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <SectionReveal>
          <p className="text-[11px] tracking-[0.12em] uppercase text-accent font-normal mb-10" id="about-label">
            About
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Bio */}
          <SectionReveal delay={100} className="text-[15px] text-[var(--text-secondary)] leading-[1.85] space-y-5 text-left">
            <p>
              I&apos;m Vivek, a Computer Science student at Nagindas Khandwala College, Mumbai, and the Co-Founder of ReferUp, a performance-based Shopify referral SaaS.
              I build web apps, AI-powered tools, and browser extensions — usually working
              end-to-end from idea to deployment, using an AI-assisted workflow: Cursor for
              implementation, Claude for UI and logic review, the Groq API for the AI layer,
              GitHub for version control, and Vercel for hosting.
            </p>
            <p>
              My approach is to find the smallest version of an idea that actually works,
              build it, ship it, then go back and strengthen the parts that need it. I stay
              close to Mumbai&apos;s developer and AI community to keep my sense of what&apos;s
              actually shipping versus what&apos;s just being talked about.
            </p>
            <p>
              Currently looking for Software Engineering / SDE internships — I&apos;m comfortable
              across the stack, but most interested in frontend systems, AI-integrated
              products, and anything that ends in something real getting deployed.
            </p>
          </SectionReveal>

          {/* Skills */}
          <SectionReveal delay={200} className="space-y-6 text-left">
            <p className="text-[11px] tracking-[0.12em] uppercase text-[var(--text-muted)] mb-5">
              Skills & Expertise
            </p>
            
            <div className="space-y-5">
              <div className="border-l-2 border-accent/30 pl-4 py-0.5">
                <p className="text-[12.5px] font-semibold text-[var(--text-primary)] mb-1">Strategy & Growth</p>
                <p className="text-[13.5px] text-[var(--text-secondary)] leading-relaxed">
                  Product Strategy, Growth Design, Pricing Modeling, B2B Pitching
                </p>
              </div>
              <div className="border-l-2 border-accent/30 pl-4 py-0.5">
                <p className="text-[12.5px] font-semibold text-[var(--text-primary)] mb-1">Languages & Core</p>
                <p className="text-[13.5px] text-[var(--text-secondary)] leading-relaxed">
                  HTML / CSS / JavaScript, Python, SQL
                </p>
              </div>
              <div className="border-l-2 border-accent/30 pl-4 py-0.5">
                <p className="text-[12.5px] font-semibold text-[var(--text-primary)] mb-1">AI-Assisted Workflow</p>
                <p className="text-[13.5px] text-[var(--text-secondary)] leading-relaxed">
                  Cursor, Claude, Groq API
                </p>
              </div>
              <div className="border-l-2 border-accent/30 pl-4 py-0.5">
                <p className="text-[12.5px] font-semibold text-[var(--text-primary)] mb-1">Infrastructure</p>
                <p className="text-[13.5px] text-[var(--text-secondary)] leading-relaxed">
                  GitHub, Vercel
                </p>
              </div>
              <div className="border-l-2 border-accent/30 pl-4 py-0.5">
                <p className="text-[12.5px] font-semibold text-[var(--text-primary)] mb-1">Design</p>
                <p className="text-[13.5px] text-[var(--text-secondary)] leading-relaxed">
                  Canva, CapCut
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
