"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    toggleMenu?: () => void;
  }
}

function setScrollLock(locked: boolean) {
  const root = document.documentElement;
  const body = document.body;

  if (locked) {
    root.dataset.scrollLock = "true";
    body.dataset.scrollLock = "true";
  } else {
    delete root.dataset.scrollLock;
    delete body.dataset.scrollLock;
  }
}

export default function NavMobileInit() {
  const pathname = usePathname();

  useEffect(() => {
    const nav =
      (document.getElementById("navbar") as HTMLElement | null) ??
      (document.querySelector("nav") as HTMLElement | null);

    const toggle = nav?.querySelector<HTMLElement>(".mobile-toggle") ?? null;
    const links = nav?.querySelector<HTMLElement>(".nav-links") ?? null;

    if (!nav || !toggle || !links) return;

    // Defensive: remove legacy inline onclick to prevent double toggles.
    toggle.removeAttribute("onclick");
    toggle.onclick = null;

    if (!links.id) links.id = "primary-navigation";

    toggle.setAttribute("aria-controls", links.id);
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Menü");

    if (toggle.tagName !== "BUTTON") {
      toggle.setAttribute("role", "button");
      toggle.tabIndex = 0;
    }

    let lastFocus: HTMLElement | null = null;
    let raf = 0;

    const updateNavOffset = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = Math.ceil(nav.getBoundingClientRect().height);
        document.documentElement.style.setProperty("--nav-offset", `${h}px`);
      });
    };

    const isOpen = () => links.classList.contains("open");

    const close = () => {
      if (!isOpen()) return;
      links.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      setScrollLock(false);
      lastFocus?.focus?.();
      updateNavOffset();
    };

    const open = () => {
      if (isOpen()) return;
      lastFocus = document.activeElement as HTMLElement | null;
      links.classList.add("open");
      toggle.classList.add("open");
      toggle.setAttribute("aria-expanded", "true");
      setScrollLock(true);

      const first = links.querySelector<HTMLElement>(
        "a, button, [tabindex]:not([tabindex='-1'])"
      );
      first?.focus?.();

      updateNavOffset();
    };

    const toggleMenu = () => {
      if (isOpen()) close();
      else open();
    };

    window.toggleMenu = toggleMenu;

    const onToggleClick = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      toggleMenu();
    };

    const onToggleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleMenu();
      }
    };

    const onDocKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (!isOpen()) return;
      e.preventDefault();
      close();
    };

    const onDocClick = (e: MouseEvent) => {
      if (!isOpen()) return;
      const target = e.target as Node | null;
      if (target && nav.contains(target)) return;
      close();
    };

    const onLinksClick = (e: MouseEvent) => {
      if (!isOpen()) return;
      const target = e.target as HTMLElement | null;
      const link = target?.closest?.("a");
      if (link) close();
    };

    const mql = window.matchMedia("(min-width: 769px)");
    const onBreakpointChange = () => {
      if (mql.matches) close();
    };

    const t = window.setTimeout(updateNavOffset, 250);
    updateNavOffset();

    toggle.addEventListener("click", onToggleClick);
    toggle.addEventListener("keydown", onToggleKeyDown);
    document.addEventListener("keydown", onDocKeyDown);
    document.addEventListener("click", onDocClick);
    links.addEventListener("click", onLinksClick);

    window.addEventListener("resize", updateNavOffset, { passive: true });
    window.addEventListener("scroll", updateNavOffset, { passive: true });

    if ("addEventListener" in mql) mql.addEventListener("change", onBreakpointChange);
    else (mql as unknown as { addListener: (cb: () => void) => void }).addListener(onBreakpointChange);

    return () => {
      window.clearTimeout(t);

      toggle.removeEventListener("click", onToggleClick);
      toggle.removeEventListener("keydown", onToggleKeyDown);
      document.removeEventListener("keydown", onDocKeyDown);
      document.removeEventListener("click", onDocClick);
      links.removeEventListener("click", onLinksClick);

      window.removeEventListener("resize", updateNavOffset);
      window.removeEventListener("scroll", updateNavOffset);

      if ("removeEventListener" in mql) mql.removeEventListener("change", onBreakpointChange);
      else (mql as unknown as { removeListener: (cb: () => void) => void }).removeListener(onBreakpointChange);

      setScrollLock(false);
      if (window.toggleMenu === toggleMenu) delete window.toggleMenu;
    };
  }, [pathname]);

  return null;
}