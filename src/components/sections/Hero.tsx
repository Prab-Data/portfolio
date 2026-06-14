"use client";

import { motion } from "framer-motion";
import { ChevronRight, ChevronDown } from "lucide-react";
import { profile } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;
const up = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease, delay },
});

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-6 text-center">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[70vh]"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(41,151,255,0.16), transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <motion.span
          {...up(0)}
          className="mb-5 text-base font-semibold tracking-wide text-blue-bright sm:text-lg"
        >
          Engineer. Trader. Builder.
        </motion.span>

        <motion.h1
          {...up(0.08)}
          className="headline-xl max-w-4xl text-6xl text-on-dark sm:text-8xl"
        >
          Prabhanjan Sharma
        </motion.h1>

        <motion.p
          {...up(0.18)}
          className="mt-6 max-w-2xl text-xl leading-relaxed text-on-dark-muted sm:text-2xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          {...up(0.28)}
          className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-4"
        >
          <a href="#trading" className="btn-primary cursor-pointer">
            View the work
          </a>
          <a href="#contact" className="btn-link cursor-pointer">
            Get in touch
            <ChevronRight className="chev" size={16} />
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 z-10 cursor-pointer text-on-dark-muted transition-colors hover:text-on-dark"
      >
        <motion.span
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ChevronDown size={26} />
        </motion.span>
      </motion.a>
    </section>
  );
}
