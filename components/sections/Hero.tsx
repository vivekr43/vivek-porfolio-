"use client";

import dynamic from "next/dynamic";
import SectionReveal from "@/components/layout/SectionReveal";
import { SOCIAL_LINKS } from "@/lib/data";
import BorderGlow from "@/components/ui/BorderGlow";

const HeroScene = dynamic(() => import("@/components/canvas/HeroScene"), {
  ssr: false,
});
const ParticleField = dynamic(() => import("@/components/canvas/ParticleField"), {
  ssr: false,
});

export default function Hero() {
  const handleScrollToWork = () => {
    const target = document.querySelector("#work");
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Hero section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* 3D Hyperspeed background */}
      <HeroScene />

      {/* Ambient particle overlay */}
      <ParticleField />

      {/* Gradient orbs */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600, height: 600,
          background: "radial-gradient(circle, rgba(201,169,110,0.07) 0%, transparent 70%)",
          top: -200, left: -100, zIndex: 2,
          animation: "pulse 8s ease-in-out infinite",
          borderRadius: "50%",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600, height: 600,
          background: "radial-gradient(circle, rgba(120,80,200,0.06) 0%, transparent 70%)",
          right: -150, top: 100, zIndex: 2,
          animation: "pulse 12s ease-in-out infinite 4s",
          borderRadius: "50%",
        }}
        aria-hidden="true"
      />

      {/* Fade to next section */}
      <div
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{
          height: "30%",
          background: "linear-gradient(to bottom, transparent 0%, #0a0a0f 100%)",
          zIndex: 3,
        }}
        aria-hidden="true"
      />

      {/* Hero content */}
      <div className="relative z-10 text-center max-w-[780px] px-6 w-full flex flex-col items-center">
        <SectionReveal delay={100}>
          <span className="block text-[11px] tracking-[0.14em] uppercase text-accent mb-6">
            CO-FOUNDER REFERUP · CS STUDENT · MUMBAI · SHIPS PRODUCTION CODE
          </span>
        </SectionReveal>

        <SectionReveal delay={200}>
          <h1 className="font-inter font-light text-[clamp(2.8rem,6vw,5rem)] tracking-[-0.02em] text-[var(--text-primary)] leading-[1.1] mb-8">
            Vivek Ribadiya
          </h1>
        </SectionReveal>

        <SectionReveal delay={300} className="w-full max-w-[640px] mb-8">
          <BorderGlow
            edgeSensitivity={30}
            glowColor="43 80 75"
            backgroundColor="rgba(10, 10, 15, 0.45)"
            borderRadius={20}
            glowRadius={40}
            glowIntensity={1.2}
            coneSpread={25}
            animated={true}
            colors={['#c9a96e', '#7850c8', '#38bdf8']}
            className="p-6 md:p-8 border border-white/5 backdrop-blur-md text-center"
          >
            <p className="font-playfair italic text-[clamp(1.1rem,2.2vw,1.45rem)] text-[var(--text-secondary)] mb-4 leading-[1.4]">
              &quot;Small team of one. Full-stack output.&quot;
            </p>
            <p className="text-[14.5px] text-[var(--text-secondary)] leading-[1.7] max-w-[520px] mx-auto">
              Comfortable working solo from a blank repo to a shipped product. Currently looking for SDE / Software Engineering internships.
            </p>
          </BorderGlow>
        </SectionReveal>

        <SectionReveal delay={500}>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              id="hero-cta-contact"
              className="border border-accent text-accent px-7 py-3 rounded-lg bg-transparent text-[14px] hover:bg-[var(--accent-dim)] hover:-translate-y-0.5 transition-all duration-200 inline-block"
            >
              Get in touch →
            </a>
            <button
              id="hero-cta-work"
              onClick={handleScrollToWork}
              className="border border-white/18 text-[var(--text-secondary)] px-7 py-3 rounded-lg bg-transparent text-[14px] hover:text-[var(--text-primary)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              See my projects ↓
            </button>
          </div>
        </SectionReveal>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-[var(--text-muted)] text-[11px] tracking-[0.1em] uppercase"
        aria-hidden="true"
      >
        <div
          className="w-5 h-5 border-r border-b border-[var(--text-muted)] mt-1"
          style={{
            transform: "rotate(45deg)",
            animation: "bounce3d 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}
