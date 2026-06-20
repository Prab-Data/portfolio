"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { HeroCard } from "@/components/HeroCard";
import { LinkedInBadge } from "@/components/LinkedInBadge";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { profile } from "@/lib/data";

const headlineSpring = { type: "spring", stiffness: 200, damping: 22 } as const;

const ease = [0.16, 1, 0.3, 1] as const;
const up = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease, delay },
});

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-28 sm:px-8 sm:pt-32">
      {/* lightweight ambient glow — pure CSS, no WebGL */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 z-0 h-[520px] w-[820px] -translate-x-1/2 opacity-70"
        style={{
          background:
            "radial-gradient(closest-side, rgba(124,108,255,0.22), transparent)",
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-x-16">
        {/* left — headline + tagline */}
        <div className="lg:text-right">
          <h1 className="headline-xl text-4xl sm:text-5xl lg:text-6xl">
            <span className="flex flex-wrap items-baseline gap-x-[0.28em] lg:justify-end">
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.06}
                staggerFrom="first"
                transition={{ ...headlineSpring, delay: 0.1 }}
              >
                I build
              </VerticalCutReveal>
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.06}
                staggerFrom="first"
                elementLevelClassName="text-gradient"
                transition={{ ...headlineSpring, delay: 0.28 }}
              >
                products
              </VerticalCutReveal>
            </span>
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.06}
              staggerFrom="first"
              containerClassName="lg:justify-end"
              transition={{ ...headlineSpring, delay: 0.42 }}
            >
              that ship.
            </VerticalCutReveal>
          </h1>

          <motion.p
            {...up(0.16)}
            className="mt-6 max-w-md text-lg leading-relaxed text-muted lg:ml-auto"
          >
            {profile.tagline}
          </motion.p>
        </div>

        {/* center — the main character */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
          className="flex justify-center"
        >
          <HeroCard />
        </motion.div>

        {/* right — actions + meta */}
        <div className="flex flex-col items-start gap-7">
          <motion.div {...up(0.24)} className="flex flex-col items-start gap-3">
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
            className="flex flex-col gap-2 text-sm text-muted"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} /> {profile.location}
            </span>
            <LinkedInBadge />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
