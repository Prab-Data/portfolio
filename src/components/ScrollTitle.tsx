"use client";

import { useEffect } from "react";

/**
 * Prefixes the browser tab title with the page scroll percentage,
 * e.g. "37% · Prabhanjan Sharma — Full Stack Developer & Product Engineer".
 * Renders nothing.
 */
export function ScrollTitle() {
  useEffect(() => {
    // base title from the page metadata (strip any existing "NN% · " prefix)
    const base = document.title.replace(/^\d+%\s·\s/, "");
    let raf = 0;

    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const pct = max > 0 ? Math.round((window.scrollY / max) * 100) : 0;
      document.title = pct > 0 ? `${pct}% · ${base}` : base;
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.title = base;
    };
  }, []);

  return null;
}
