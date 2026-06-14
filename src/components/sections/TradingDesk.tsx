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
      <div className="h-[320px] w-full animate-pulse rounded-2xl bg-white/5 sm:h-[420px]" />
    ),
  }
);

export function TradingDesk() {
  return (
    <Section id="trading" theme="cloud">
      <SectionHeading
        eyebrow="Markets"
        title="I trade the markets I build for."
        subtitle="Discretionary and systematic, derivatives-focused — the edge that sets this work apart."
      />

      <Reveal delay={0.1}>
        <div className="mt-14 overflow-hidden rounded-[28px] bg-black p-5 shadow-2xl shadow-black/20 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5">
            <div className="flex items-baseline gap-3">
              <span className="text-lg font-semibold text-on-dark">ETH / USD</span>
              <span className="text-sm text-green">▲ +2.41%</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              {trading.markets.map((m) => (
                <span key={m} className="text-xs text-on-dark-muted">
                  {m}
                </span>
              ))}
            </div>
          </div>
          <CandleChart />
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-16 grid grid-cols-2 gap-y-12 lg:grid-cols-4">
          {trading.stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="headline-xl text-4xl text-on-light sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-3 text-sm text-on-light-muted">{s.label}</div>
              {s.note && (
                <div className="mt-1 text-xs text-on-light-muted/70">{s.note}</div>
              )}
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="mt-12 text-center text-xs text-on-light-muted/80">
          Chart is illustrative — wire to a live exchange feed (Delta / Binance
          websocket) for real-time data.
        </p>
      </Reveal>
    </Section>
  );
}
