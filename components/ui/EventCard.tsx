"use client";

import type { Event } from "@/types";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <article
      className="bg-[var(--bg-card)] border border-white/8 border-l-[3px] border-l-accent rounded-none rounded-r-xl p-6 md:p-7 group transition-all duration-300 hover:border-t-white/18 hover:border-r-white/18 hover:border-b-white/18 hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)] relative overflow-hidden"
      aria-label={`Event: ${event.name}`}
    >
      {/* Left accent glow */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <h3 className="text-[16px] font-medium text-[var(--text-primary)] mb-1.5">
        {event.name}
      </h3>
      <p className="text-[13px] text-accent mb-3">{event.venue}</p>
      <p className="text-[14px] text-[var(--text-secondary)] leading-[1.7] mb-2">
        <strong className="text-[var(--text-primary)] font-medium">Topic: </strong>
        {event.topic}
      </p>
      <p className="text-[13px] text-[var(--text-muted)] leading-[1.65] mb-4">
        <strong className="text-[var(--text-primary)] font-medium">Highlights: </strong>
        {event.highlights}
      </p>
      <blockquote className="italic text-[var(--text-secondary)] text-[13.5px] border-l-2 border-[var(--accent-dim)] pl-3.5 mb-4 leading-[1.7]">
        {event.takeaway}
      </blockquote>
      <div className="flex flex-wrap gap-1.5">
        {event.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
