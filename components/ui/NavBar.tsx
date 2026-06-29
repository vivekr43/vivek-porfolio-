"use client";

import { useState, useEffect } from "react";
import { SOCIAL_LINKS } from "@/lib/data";

const NAV_LINKS = [
  { href: "#work", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleAnchorClick = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        id="nav"
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 w-full z-50 px-6 h-16 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(10,10,15,0.85)] backdrop-blur-md border-b border-white/8"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="text-accent font-medium text-lg tracking-tight"
          aria-label="Back to top"
        >
          VR
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <button
                onClick={() => handleAnchorClick(href)}
                className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 bg-transparent border-none cursor-pointer"
              >
                {label}
              </button>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="text-[13px] border border-[var(--accent)] text-[var(--accent)] px-5 py-2 rounded-lg hover:bg-[var(--accent-dim)] transition-all duration-200"
            >
              Hire me →
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] cursor-pointer p-1 bg-transparent border-none"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`block w-[22px] h-[2px] bg-[var(--text-primary)] rounded-sm transition-all duration-300 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-[var(--text-primary)] rounded-sm transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-[var(--text-primary)] rounded-sm transition-all duration-300 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 bg-[rgba(10,10,15,0.97)] z-40 flex flex-col items-center justify-center gap-9 md:hidden"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <button
              key={href}
              onClick={() => handleAnchorClick(href)}
              className="text-2xl text-[var(--text-primary)] font-light hover:text-accent transition-colors duration-200 bg-transparent border-none cursor-pointer"
            >
              {label}
            </button>
          ))}
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            onClick={() => setMenuOpen(false)}
            className="mt-4 border border-accent text-accent px-7 py-3 rounded-lg hover:bg-[var(--accent-dim)] transition-all"
          >
            Hire me →
          </a>
        </div>
      )}
    </>
  );
}
