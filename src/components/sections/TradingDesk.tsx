"use client";

import dynamic from "next/dynamic";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { trading } from "@/lib/data";

const CandleChart = dynamic(
  () => import("@/components/CandleChart").then((m) => m.CandleChart),
  { ssr: false, loading: () => <div className="h-[320px] w-full animate-pulse rounded-lg bg-surface-2 sm:h-[400px]" /> }
);

export function TradingDesk() {
  return (
    <Section id="trading">
      <SectionHeading
        index="03"
        title="trading desk"
        subtitle="Where the engineering meets the markets. This is what sets the work apart."
      />

      <Reveal>
        <div className="overflow-hidden rounded-xl border border-border bg-surface">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-surface-2 px-5 py-3">
            <div className="flex items-center gap-3">
              <span className="pulse-dot h-2 w-2 rounded-full bg-accent" />
              <span className="font-mono text-sm font-semibold text-foreground">
                ETH/USD
              </span>
              <span className="font-mono text-xs text-muted">· 1D</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {trading.markets.map((m) => (
                <span
                  key={m}
                  className="rounded border border-border px-2 py-0.5 font-mono text-xs text-muted"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div className="px-3 py-4 sm:px-5">
            <CandleChart />
          </div>
        </div>
      </Reveal>

      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {trading.stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06}>
            <div className="rounded-xl border border-border bg-surface p-5">
              <div className="font-mono text-2xl font-bold text-accent">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-muted">{s.label}</div>
              {s.note && (
                <div className="mt-1 font-mono text-[10px] text-amber/70">
                  {s.note}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-6 font-mono text-xs text-muted">
          <span className="text-amber">note:</span> chart is illustrative —
          wire it to a live exchange feed (Delta / Binance websocket) for
          real-time data.
        </p>
      </Reveal>
    </Section>
  );
}
