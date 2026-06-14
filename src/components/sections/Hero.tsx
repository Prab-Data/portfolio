"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, LineChart } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/BrandIcons";
import { profile } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[92vh] max-w-5xl flex-col justify-center px-6 pb-16 pt-28 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="flex items-center gap-3 eyebrow"
      >
        <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-accent" />
        available for work · {profile.location}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.08 }}
        className="mt-8 font-serif text-[15vw] font-light leading-[0.92] tracking-tight sm:text-[8.5rem]"
      >
        Prabhanjan
        <br />
        <span className="text-muted">Sharma</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.2 }}
        className="mt-10 grid gap-8 border-t border-border pt-8 sm:grid-cols-[1fr_auto] sm:items-end"
      >
        <div>
          <p className="max-w-md text-lg leading-relaxed text-muted">
            {profile.tagline}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm">
            <span className="text-foreground">Full Stack Developer</span>
            <span className="text-accent">/</span>
            <span className="text-foreground">Active Markets Trader</span>
          </div>
        </div>

        <div className="flex flex-col items-start gap-5 sm:items-end">
          <a
            href="#trading"
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
          >
            <span className="link-underline pb-0.5">explore the work</span>
            <ArrowDownRight
              size={16}
              className="text-accent transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            />
          </a>
          <div className="flex items-center gap-5">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-accent"
            >
              <Github size={19} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-accent"
            >
              <Linkedin size={19} />
            </a>
            <a
              href={profile.socials.tradingview}
              target="_blank"
              rel="noreferrer"
              aria-label="TradingView"
              className="text-muted transition-colors hover:text-accent"
            >
              <LineChart size={19} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
