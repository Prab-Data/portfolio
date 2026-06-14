"use client";

import { motion } from "framer-motion";
import {
  Check,
  GitCommitHorizontal,
  Mail,
  ShieldCheck,
  Zap,
  Flame,
  Play,
  SkipBack,
  SkipForward,
  Mail as MailIcon,
  Briefcase,
  Map,
  CreditCard,
  KeyRound,
  Activity,
  MapPin,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/Section";
import { profile, integrations } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

const iconMap: Record<string, typeof Mail> = {
  Mail: MailIcon,
  Briefcase,
  Flame,
  Map,
  CreditCard,
  KeyRound,
};

function Cell({
  i,
  className = "",
  children,
}: {
  i: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: i * 0.05, ease }}
      className={`min-h-[190px] overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function Craft() {
  return (
    <section id="craft" className="mx-auto w-full max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading
        eyebrow="Craft"
        title="Product sense, in the details."
        subtitle="The little interfaces and systems behind shipping real products — built, not mocked."
      />

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[210px] lg:grid-cols-4">
        {/* 1 — Deploy (wide, dark) */}
        <Cell i={0} className="card card-hover p-6 sm:col-span-2">
          <div className="flex items-center justify-between">
            <span className="eyebrow">
              <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-green" />
              Production
            </span>
            <span className="chip">vercel · 2m ago</span>
          </div>
          <div className="mt-5 flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-green/15 text-green">
              <Check size={18} />
            </span>
            <div>
              <div className="font-semibold">Deployment ready</div>
              <div className="text-sm text-muted">Build · Lint · Deploy — all passed</div>
            </div>
          </div>
          <div className="mt-auto flex items-center gap-2 pt-5 text-sm text-muted">
            <GitCommitHorizontal size={16} className="text-violet" />
            <span className="font-mono text-[13px]">feat: ship launchverse cms</span>
            <span className="ml-auto font-mono text-[12px] text-muted-2">a1f9c2e</span>
          </div>
        </Cell>

        {/* 2 — Auth (dark, blue glow) */}
        <Cell i={1} className="card card-hover ring-glow p-6">
          <span className="eyebrow">
            <ShieldCheck size={15} className="text-cyan" /> Auth
          </span>
          <div className="mt-5 flex items-center gap-3 rounded-xl border border-border bg-background/60 px-3 py-2.5">
            <Mail size={16} className="text-cyan" />
            <span className="text-sm text-muted">Magic link sent</span>
          </div>
          <div className="mt-3 flex items-center gap-2 text-sm text-green">
            <Check size={16} /> Verified · signed in
          </div>
          <div className="mt-auto pt-4 text-xs text-muted-2">JWT · OAuth · Magic Link</div>
        </Cell>

        {/* 3 — Performance metric (dark) */}
        <Cell i={2} className="card card-hover p-6">
          <span className="eyebrow">
            <Zap size={15} className="text-violet" /> Performance
          </span>
          <div className="text-gradient mt-3 text-5xl font-bold tracking-tight">~70%</div>
          <div className="mt-1 text-sm text-muted">faster API responses</div>
          <div className="mt-auto flex items-end gap-1.5 pt-4">
            {[40, 55, 48, 70, 62, 88, 95].map((h, k) => (
              <span
                key={k}
                className="flex-1 rounded-sm bg-gradient-to-t from-indigo/40 to-violet"
                style={{ height: `${h * 0.42}px` }}
              />
            ))}
          </div>
        </Cell>

        {/* 4 — Integrations (wide, dark) */}
        <Cell i={3} className="card card-hover p-6 sm:col-span-2">
          <span className="eyebrow">
            <Activity size={15} className="text-green" /> Integrations wired in
          </span>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {integrations.map((it) => {
              const Icon = iconMap[it.icon] ?? Mail;
              return (
                <div
                  key={it.name}
                  className="flex items-center gap-2 rounded-xl border border-border bg-background/50 px-3 py-2.5 text-sm text-muted transition-colors hover:border-border-2 hover:text-foreground"
                >
                  <Icon size={16} className="text-violet" />
                  {it.name}
                </div>
              );
            })}
          </div>
        </Cell>

        {/* 5 — Now Playing (wide, LIGHT) */}
        <Cell i={4} className="rounded-[1.25rem] bg-paper p-6 text-ink sm:col-span-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-ink/60">Now playing — while shipping</span>
            <span className="text-ink/40">♪</span>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div
              className="h-16 w-16 flex-shrink-0 rounded-xl"
              style={{ background: "linear-gradient(135deg,#6366f1,#a855f7,#22d3ee)" }}
            />
            <div className="min-w-0 flex-1">
              <div className="truncate text-lg font-semibold">Focus Flow</div>
              <div className="text-sm text-ink/50">Lo-Fi Beats</div>
              <div className="mt-2.5 h-1 w-full rounded-full bg-ink/10">
                <div className="h-1 w-1/3 rounded-full bg-ink/70" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-ink">
              <SkipBack size={18} className="opacity-60" />
              <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-paper">
                <Play size={16} fill="currentColor" />
              </span>
              <SkipForward size={18} className="opacity-60" />
            </div>
          </div>
        </Cell>

        {/* 6 — Shipping streak (dark) */}
        <Cell i={5} className="card card-hover p-6">
          <div className="flex items-center justify-between">
            <span className="eyebrow">
              <Flame size={15} className="text-pink" /> Shipping
            </span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-4xl font-bold tracking-tight">12+</span>
            <span className="text-sm text-muted">builds live</span>
          </div>
          <div className="mt-auto grid grid-cols-7 gap-1.5 pt-4">
            {Array.from({ length: 21 }).map((_, k) => (
              <span
                key={k}
                className="aspect-square rounded-[3px]"
                style={{
                  background:
                    k % 5 === 3 || k % 7 === 6
                      ? "rgba(255,255,255,0.08)"
                      : "linear-gradient(135deg,#6366f1,#a855f7)",
                }}
              />
            ))}
          </div>
        </Cell>

        {/* 7 — Profile / avatar (dark) */}
        <Cell i={6} className="card card-hover flex flex-col p-6">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={profile.avatar}
              alt="Prabhanjan"
              className="h-11 w-11 rounded-full object-cover ring-1 ring-border-2"
            />
            <div>
              <div className="text-sm font-semibold">@prab002</div>
              <div className="text-xs text-muted">Prabhanjan Sharma</div>
            </div>
          </div>
          <div className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-green/15 px-2.5 py-1 text-xs text-green">
            <span className="h-1.5 w-1.5 rounded-full bg-green" /> Open to work
          </div>
          <div className="mt-auto flex items-center gap-1.5 pt-4 text-xs text-muted-2">
            <MapPin size={13} /> {profile.location}
          </div>
        </Cell>

        {/* 8 — System status (wide, LIGHT) */}
        <Cell i={7} className="rounded-[1.25rem] bg-paper p-6 text-ink sm:col-span-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold">System status</span>
            <span className="inline-flex items-center gap-1.5 text-sm text-emerald-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500 pulse-dot" />
              All systems operational
            </span>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              { v: "99.98%", l: "uptime" },
              { v: "<40ms", l: "latency" },
              { v: "1.2k+", l: "deploys" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl bg-ink/[0.04] px-3 py-3">
                <div className="text-xl font-bold tracking-tight">{s.v}</div>
                <div className="text-xs text-ink/50">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-1">
            {Array.from({ length: 32 }).map((_, k) => (
              <span
                key={k}
                className="h-4 flex-1 rounded-[2px]"
                style={{ background: k === 19 ? "#f59e0b" : "#10b981", opacity: 0.85 }}
              />
            ))}
          </div>
        </Cell>
      </div>
    </section>
  );
}
