"use client";

import SectionReveal from "@/components/layout/SectionReveal";
import ProjectCard from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/lib/data";

export default function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-label"
      className="py-28 md:py-36 bg-[var(--bg-deep)]"
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <SectionReveal>
          <p className="text-[11px] tracking-[0.12em] uppercase text-accent font-normal mb-10" id="work-label">
            Projects
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((project, i) => (
            <SectionReveal key={project.id} delay={i * 100} className="h-full">
              <ProjectCard project={project} index={i} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
