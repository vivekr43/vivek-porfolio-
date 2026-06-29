"use client";

import { useEffect, useRef, useCallback } from "react";
import type { BeamConfig } from "@/types";
import { createBeam, resetBeam } from "@/lib/utils";

const BEAM_COUNT = 30;

export default function BeamsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const beamsRef = useRef<BeamConfig[]>([]);
  const animRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = canvas.width / (window.devicePixelRatio || 1);
    const h = canvas.height / (window.devicePixelRatio || 1);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const count = beamsRef.current.length;
    beamsRef.current.forEach((beam, i) => {
      beam.y -= beam.speed;
      beam.pulse += beam.pulseSpeed;

      if (beam.y + beam.length < -100) {
        resetBeam(beam, i, count, w, h);
      }

      ctx.save();
      ctx.translate(beam.x, beam.y);
      ctx.rotate((beam.angle * Math.PI) / 180);

      const pulsingOpacity = beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.2);
      const grad = ctx.createLinearGradient(0, 0, 0, beam.length);
      const h_ = beam.hue;

      grad.addColorStop(0, `hsla(${h_}, 85%, 65%, 0)`);
      grad.addColorStop(0.1, `hsla(${h_}, 85%, 65%, ${pulsingOpacity * 0.5})`);
      grad.addColorStop(0.4, `hsla(${h_}, 85%, 65%, ${pulsingOpacity})`);
      grad.addColorStop(0.6, `hsla(${h_}, 85%, 65%, ${pulsingOpacity})`);
      grad.addColorStop(0.9, `hsla(${h_}, 85%, 65%, ${pulsingOpacity * 0.5})`);
      grad.addColorStop(1, `hsla(${h_}, 85%, 65%, 0)`);

      ctx.fillStyle = grad;
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
      ctx.restore();
    });

    animRef.current = requestAnimationFrame(draw);
  }, []);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const { offsetWidth: w, offsetHeight: h } = container;
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 10 : BEAM_COUNT;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.scale(dpr, dpr);

    beamsRef.current = Array.from({ length: count }, () =>
      createBeam(w, h)
    );

    if (animRef.current) cancelAnimationFrame(animRef.current);
    draw();
  }, [draw]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          init();
        } else {
          cancelAnimationFrame(animRef.current);
        }
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    const handleResize = () => init();
    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animRef.current);
    };
  }, [init]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" style={{ filter: "blur(28px)" }} />
      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[var(--bg-surface)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-surface)] via-transparent to-[var(--bg-surface)] opacity-60 pointer-events-none" />
    </div>
  );
}
