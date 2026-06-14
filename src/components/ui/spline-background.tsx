"use client";

import Spline from "@splinetool/react-spline";

/**
 * Interactive 3D Spline scene used as the hero backdrop. The scene layer
 * receives pointer events so the boxes react to the cursor; the hero passes
 * the mouse through everywhere except its actual interactive elements.
 */
export function SplineBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <Spline
        scene="https://prod.spline.design/dJqTIQ-tE3ULUPMi/scene.splinecode"
        style={{ width: "100%", height: "100%" }}
      />
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
