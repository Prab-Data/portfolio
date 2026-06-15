"use client";

import { useEffect, useRef, useState } from "react";
import Spline from "@splinetool/react-spline";

/**
 * Interactive 3D Spline scene used as the hero backdrop.
 *
 * Perf: the WebGL scene only mounts while the hero is on screen. Once you
 * scroll past it, it unmounts — freeing the GPU/render loop so the rest of
 * the page scrolls smoothly. It re-mounts when you scroll back to the top.
 */
export function SplineBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: "150px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 z-0 overflow-hidden">
      {active && (
        <Spline
          scene="https://prod.spline.design/dJqTIQ-tE3ULUPMi/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      )}
      {/* readability gradient over the 3D scene (must not block the cursor) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(8,8,11,0.82), transparent 22%, transparent 78%, rgba(8,8,11,0.82)), linear-gradient(to bottom, rgba(8,8,11,0.35) 0%, transparent 42%, rgba(8,8,11,0.6) 74%, rgba(8,8,11,0.98) 100%)",
        }}
      />
    </div>
  );
}
