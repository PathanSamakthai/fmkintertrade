"use client";

import { useEffect } from "react";

/**
 * Subtle fade-up on section entry (brief §17). Observes every `.reveal`
 * element and reveals it once in view. Honours reduced-motion (globals.css
 * shows them immediately) and reveals everything after a safety timeout so
 * content never stays hidden if the observer misfires.
 */
export function RevealObserver() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));

    const timer = window.setTimeout(
      () => els.forEach((el) => el.classList.add("is-visible")),
      1800,
    );

    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  return null;
}
