"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    showField?: (field: string) => void;
    showFieldFromModel?: (field: string) => void;
  }
}

export function LegacyInit() {
  useEffect(() => {
    // Reveal on scroll
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) e.target.classList.add("visible");
        }
      },
      { threshold: 0.12 }
    );

    revealElements.forEach((el) => observer.observe(el));

    // Spannungsfeld filter (ported from legacy HTML)
    let activeField: string | null = null;

    window.showField = (field: string) => {
      const tabs = document.querySelectorAll<HTMLElement>(".sf-tab");
      const panels = document.querySelectorAll<HTMLElement>(".sf-panel");
      const instruction = document.getElementById("sf-instruction");
      const dots = document.querySelectorAll<SVGCircleElement>(".sf-dot");
      const fieldNames: Record<string, string> = { wachstum: "Wachstum", stabilitaet: "Stabilität", erneuerung: "Erneuerung" };
      const defaultText = "Wählen Sie ein Spannungsfeld";

      // Toggle off if clicking the same field
      if (activeField === field) {
        activeField = null;
        tabs.forEach((t) => t.classList.remove("active"));
        panels.forEach((p) => p.classList.remove("active"));
        dots.forEach((d) => {
          d.setAttribute("r", "40");
          d.classList.remove("active-dot");
          d.removeAttribute("stroke");
          d.removeAttribute("stroke-width");
          d.removeAttribute("stroke-opacity");
        });
        if (instruction) {
          instruction.classList.remove("has-active");
          const p = instruction.querySelector("p");
          if (p) p.innerHTML = defaultText;
        }
        return;
      }

      activeField = field;

      // Update instruction text
      if (instruction) {
        instruction.classList.add("has-active");
        const p = instruction.querySelector("p");
        if (p) {
          p.innerHTML =
            '<span style="font-size:0.7rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--gray-400);font-weight:600;">Im Fokus:</span> <strong>' +
            (fieldNames[field] || field) +
            "</strong>";
        }
      }

      // Update tabs
      tabs.forEach((t) => t.classList.toggle("active", t.dataset.field === field));

      // Update SVG dots
      dots.forEach((d) => {
        const dotField = d.id.replace("dot-", "");
        if (dotField === field) {
          d.setAttribute("r", "44");
          d.classList.add("active-dot");
          d.setAttribute("stroke", "white");
          d.setAttribute("stroke-width", "2");
          d.setAttribute("stroke-opacity", "0.4");
        } else {
          d.setAttribute("r", "40");
          d.classList.remove("active-dot");
          d.removeAttribute("stroke");
          d.removeAttribute("stroke-width");
          d.removeAttribute("stroke-opacity");
        }
      });

      // Update panels
      panels.forEach((p) => p.classList.remove("active"));
      const targetPanel = document.getElementById("panel-" + field);
      if (targetPanel) {
        targetPanel.classList.add("active");
        // restart animation
        (targetPanel as any).style.animation = "none";
        void (targetPanel as any).offsetHeight;
        (targetPanel as any).style.animation = null;
      }
    };

    window.showFieldFromModel = (field: string) => {
      window.showField?.(field);
      // Scroll to instruction/panels block (legacy HTML had a missing anchor)
      const target = document.getElementById("sf-instruction") || document.getElementById("panel-" + field);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return () => {
      observer.disconnect();
      // keep window functions (harmless), but remove if you prefer:
      // delete window.showField; delete window.showFieldFromModel;
    };
  }, []);

  return null;
}
