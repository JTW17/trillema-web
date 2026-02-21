"use client";

import { useEffect, useState } from "react";

const navItems = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#philosophie", label: "Philosophie" },
  { href: "#ueber", label: "Über" },
  { href: "#perspektiven", label: "Perspektiven" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav id="navbar" className={scrolled ? "scrolled" : ""}>
      <a href="#hero" className="nav-logo" aria-label="Trillema Startseite">
        <img src="/brand/logo-white.svg" alt="Trillema" className="logo-white" />
        <img src="/brand/logo-color.svg" alt="Trillema" className="logo-color" />
      </a>

      <div className={`nav-links ${open ? "open" : ""}`}>
        {navItems.map((it) => (
          <a key={it.href} href={it.href} onClick={() => setOpen(false)}>
            {it.label}
          </a>
        ))}
        <a href="#austausch" className="nav-cta" onClick={() => setOpen(false)}>
          Austausch
        </a>
      </div>

      <button
        type="button"
        className="mobile-toggle"
        aria-label="Menü öffnen"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
