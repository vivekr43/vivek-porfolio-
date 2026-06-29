export type ProjectIcon = "pause" | "brain" | "briefcase";

export interface Project {
  id: string;
  name: string;
  role: string;
  description: string;
  tags: readonly string[];
  color: string;
  iconColor: string;
  icon: ProjectIcon;
  gitUrl?: string;
  demoUrl?: string;
  image?: string;
}

export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  year: string;
  summary: string;
  tags: readonly string[];
}

export interface Event {
  id: string;
  name: string;
  venue: string;
  topic: string;
  highlights: string;
  takeaway: string;
  tags: readonly string[];
}

export interface BeamConfig {
  x: number;
  y: number;
  width: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  hue: number;
  pulse: number;
  pulseSpeed: number;
}
