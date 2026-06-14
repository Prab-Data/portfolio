"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, LineChart } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/BrandIcons";
import { profile } from "@/lib/data";

const TICKER = [
  "BTC +2.4%",
  "ETH +1.1%",
  "API_LATENCY -70%",
  "SOL -0.8%",
  "UPTIME 99.9%",
  "NEXT.JS",
  "GO",
  "NODE",
  "WIN_RATE ↑",
  "REACT",
];

function useTypewriter(words: string[], speed = 90, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting ? word.slice(0, t.length - 1) : word.slice(0, t.length + 1)
          );
        },
        deleting ? speed / 2 : speed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIdx, words, speed, pause]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[680px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
        style={{ background: "var(--accent)" }}
      />

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-5 py-24 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 font-mono text-xs text-muted backdrop-blur"
        >
          <span className="pulse-dot h-2 w-2 rounded-full bg-accent" />
          available for work · {profile.location}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl"
        >
          {profile.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 font-mono text-xl text-accent sm:text-3xl"
        >
          <span className="text-muted">{">"} </span>
          {typed}
          <span className="cursor-blink">_</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-xl text-lg text-muted"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#trading"
            className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 font-mono text-sm font-semibold text-[#06120d] transition-transform hover:-translate-y-0.5"
          >
            view trading desk
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-sm text-foreground transition-colors hover:border-accent/50 hover:text-accent"
          >
            see projects
          </a>

          <div className="ml-1 flex items-center gap-4">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-accent"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-accent"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={profile.socials.tradingview}
              target="_blank"
              rel="noreferrer"
              aria-label="TradingView"
              className="text-muted transition-colors hover:text-accent"
            >
              <LineChart size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Ticker tape */}
      <div className="relative border-y border-border bg-surface/50 py-3">
        <div className="flex w-max ticker-track">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span
              key={i}
              className="mx-6 font-mono text-xs text-muted"
            >
              <span className="text-accent">▸</span> {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
