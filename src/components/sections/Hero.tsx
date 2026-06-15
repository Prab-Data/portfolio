"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { HeroCard } from "@/components/HeroCard";
import { LinkedInBadge } from "@/components/LinkedInBadge";
import { profile } from "@/lib/data";

// 3D Spline scene — client-only (no SSR), so it never blocks the page render.
const SplineBackground = dynamic(
  () => import("@/components/ui/spline-background").then((m) => m.SplineBackground),
  { ssr: false, loading: () => null }
);

const ease = [0.16, 1, 0.3, 1] as const;
const up = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease, delay },
});

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-28 sm:px-8 sm:pt-32">
      {/* fallback glow (shows before the 3D scene loads) */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 z-0 h-[520px] w-[820px] -translate-x-1/2 opacity-70"
        style={{
          background:
            "radial-gradient(closest-side, rgba(124,108,255,0.22), transparent)",
        }}
      />

      {/* interactive 3D Spline backdrop */}
      <SplineBackground />

      <div className="pointer-events-none relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* left — copy */}
        <div>
          <motion.h1
            {...up(0.08)}
            className="headline-xl mt-6 text-5xl sm:text-6xl lg:text-7xl"
          >
            I build <span className="text-gradient">products</span>
            <br />
            that ship.
          </motion.h1>

          <motion.p
            {...up(0.16)}
            className="mt-6 max-w-lg text-lg leading-relaxed text-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            {...up(0.24)}
            className="pointer-events-auto mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#work" className="btn-primary cursor-pointer">
              View my work
              <ArrowRight size={16} />
            </a>
            <a href={`mailto:${profile.email}`} className="btn-ghost cursor-pointer">
              Get in touch
            </a>
          </motion.div>

          <motion.div
            {...up(0.32)}
            className="pointer-events-auto mt-8 flex w-fit flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} /> {profile.location}
            </span>
            <LinkedInBadge />
          </motion.div>
        </div>

        {/* right — the main character */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
          className="pointer-events-auto"
        >
          <HeroCard />
        </motion.div>
      </div>
    </section>
  );
}
