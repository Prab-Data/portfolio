"use client";

import dynamic from "next/dynamic";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { trading } from "@/lib/data";

const CandleChart = dynamic(
  () => import("@/components/CandleChart").then((m) => m.CandleChart),
  {
    ssr: false,
    loading: () => (
      <div className="h-[320px] w-full animate-pulse rounded-lg bg-surface-2 sm:h-[420px]" />
    ),
  }
);

export function TradingDesk() {
  return (
    <Section id="trading">
      <SectionHeading
        index="03"
        title="Trading Desk"
        subtitle="Where the engineering meets the markets — the edge that sets this work apart."
      />

      <Reveal>
        <div className="overflow-hidden rounded-2xl border border-border bg-surface">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="pulse-dot h-2 w-2 rounded-full bg-accent" />
              <span className="text-sm font-medium text-foreground">
                ETH / USD
              </span>
              <span className="eyebrow">1D · {trading.style}</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              {trading.markets.map((m) => (
                <span key={m} className="font-mono text-xs text-muted">
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div className="px-4 py-6 sm:px-6">
            <CandleChart />
          </div>
        </div>
      </Reveal>

      <div className="mt-px grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
        {trading.stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06}>
            <div className="h-full bg-background p-6">
              <div className="font-serif text-3xl font-light text-accent">
                {s.value}
              </div>
              <div className="mt-1.5 text-sm text-muted">{s.label}</div>
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
        <p className="mt-6 text-xs text-muted">
          <span className="text-amber">Note —</span> chart is illustrative; wire
          it to a live exchange feed (Delta / Binance websocket) for real-time
          data.
        </p>
      </Reveal>
    </Section>
  );
}
