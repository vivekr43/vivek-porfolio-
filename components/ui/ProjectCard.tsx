"use client";

import { useState, useRef, MouseEvent } from "react";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectIcon({ icon, color }: { icon: Project["icon"]; color: string }) {
  if (icon === "pause") {
    return (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <rect x="10" y="10" width="36" height="36" rx="8" fill="none" stroke={color} strokeWidth="2.5" />
        <rect x="18" y="18" width="8" height="20" rx="2" fill={color} />
        <rect x="30" y="18" width="8" height="20" rx="2" fill={color} />
      </svg>
    );
  }
  if (icon === "brain") {
    return (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <ellipse cx="28" cy="22" rx="18" ry="14" fill="none" stroke={color} strokeWidth="2.5" />
        <path d="M16 36 L10 46" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="21" cy="22" r="2.5" fill={color} />
        <circle cx="28" cy="22" r="2.5" fill={color} />
        <circle cx="35" cy="22" r="2.5" fill={color} />
      </svg>
    );
  }
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <rect x="8" y="22" width="40" height="26" rx="4" fill="none" stroke={color} strokeWidth="2.5" />
      <path d="M20 22 V18 C20 14.686 22.686 12 26 12 H30 C33.314 12 36 14.686 36 18 V22" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <rect x="22" y="32" width="12" height="6" rx="2" fill={color} opacity="0.5" />
    </svg>
  );
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;
    const rx = ((cy / rect.height) - 0.5) * -12;
    const ry = ((cx / rect.width) - 0.5) * 12;
    setTilt({ x: rx, y: ry });
    setGlowPos({ x: (cx / rect.width) * 100, y: (cy / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlowPos({ x: 50, y: 50 });
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label={`${project.name} project`}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: tilt.x === 0 ? "transform 0.5s cubic-bezier(0.16,1,0.3,1)" : "none",
        animationDelay: `${index * 0.1}s`,
      }}
      className="bg-[var(--bg-card)] border border-white/8 rounded-xl overflow-hidden cursor-default relative group h-full flex flex-col"
    >
      {/* Mouse glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
        style={{
          background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(201,169,110,0.08) 0%, transparent 60%)`,
          zIndex: 1,
        }}
      />

      {/* Thumb */}
      <div
        className="h-40 relative overflow-hidden flex-shrink-0 bg-[var(--bg-deep)]"
      >
        {project.image ? (
          <>
            {/* Project Mockup Image */}
            <img
              src={project.image}
              alt={`${project.name} preview`}
              className="w-full h-full object-cover opacity-85 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
            />
            {/* Icon Overlay on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center bg-black/20 pointer-events-none z-10">
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${project.iconColor}25 0%, transparent 60%)`,
                }}
              />
              <span className="transform scale-90 group-hover:scale-100 transition-transform duration-300">
                <ProjectIcon icon={project.icon} color={project.iconColor} />
              </span>
            </div>
          </>
        ) : (
          /* Fallback Colored Background & Icon */
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: project.color }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${project.iconColor}22 0%, transparent 60%)`,
              }}
            />
            <span className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
              <ProjectIcon icon={project.icon} color={project.iconColor} />
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none" />
      </div>

      {/* Info */}
      <div className="p-5 relative z-10 flex-grow flex flex-col">
        <p className="text-[15px] font-medium mb-1 text-[var(--text-primary)]">{project.name}</p>
        <p className="text-[13px] text-[var(--text-secondary)] mb-4">{project.role}</p>
        <p className="text-[13px] text-[var(--text-muted)] leading-[1.65] mb-3 flex-grow">{project.description}</p>
        
        {/* Project Links */}
        {(project.gitUrl || project.demoUrl) && (
          <div className="flex items-center gap-3 text-[12px] font-medium text-accent mb-4">
            {project.gitUrl && (
              <a href={project.gitUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                View code →
              </a>
            )}
            {project.gitUrl && project.demoUrl && <span className="text-white/15">|</span>}
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {project.id === "referup" ? "Visit website →" : "View demo →"}
              </a>
            )}
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
