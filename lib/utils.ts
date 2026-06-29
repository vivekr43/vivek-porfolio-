import type { BeamConfig } from "@/types";

export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function createBeam(width: number, height: number): BeamConfig {
  const angle = -35 + Math.random() * 10;
  return {
    x: Math.random() * width * 1.5 - width * 0.25,
    y: Math.random() * height * 1.5 - height * 0.25,
    width: 40 + Math.random() * 80,
    length: height * 2.5,
    angle,
    speed: 0.6 + Math.random() * 1.2,
    opacity: 0.2 + Math.random() * 0.2,
    hue: 190 + Math.random() * 70,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.02 + Math.random() * 0.03,
  };
}

export function resetBeam(
  beam: BeamConfig,
  index: number,
  totalBeams: number,
  width: number,
  height: number
): BeamConfig {
  const column = index % 3;
  const spacing = width / 3;
  beam.y = height + 100;
  beam.x =
    column * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.5;
  beam.width = 100 + Math.random() * 100;
  beam.speed = 0.5 + Math.random() * 0.4;
  beam.hue = 190 + (index * 70) / totalBeams;
  beam.opacity = 0.25 + Math.random() * 0.2;
  return beam;
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}
