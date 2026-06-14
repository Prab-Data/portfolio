"use client";

import { useEffect, useRef } from "react";
import {
  createChart,
  CandlestickSeries,
  ColorType,
  type CandlestickData,
  type Time,
} from "lightweight-charts";

/** Deterministic pseudo-random so SSR/CSR stay in sync and it looks like a real chart. */
function generateCandles(count = 120): CandlestickData<Time>[] {
  let price = 2400;
  let seed = 42;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  const data: CandlestickData<Time>[] = [];
  const start = Math.floor(Date.now() / 1000) - count * 86400;

  for (let i = 0; i < count; i++) {
    const drift = (rand() - 0.45) * 60;
    const open = price;
    const close = Math.max(50, open + drift);
    const high = Math.max(open, close) + rand() * 25;
    const low = Math.min(open, close) - rand() * 25;
    price = close;
    data.push({
      time: (start + i * 86400) as Time,
      open: +open.toFixed(2),
      high: +high.toFixed(2),
      low: +low.toFixed(2),
      close: +close.toFixed(2),
    });
  }
  return data;
}

export function CandleChart() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const chart = createChart(ref.current, {
      layout: {
        background: { type: ColorType.Solid, color: "transparent" },
        textColor: "#8b909a",
        fontFamily: "var(--font-jetbrains), monospace",
      },
      grid: {
        vertLines: { color: "rgba(255,255,255,0.04)" },
        horzLines: { color: "rgba(255,255,255,0.04)" },
      },
      rightPriceScale: { borderColor: "#1f232e" },
      timeScale: { borderColor: "#1f232e", timeVisible: false },
      crosshair: { mode: 1 },
      autoSize: true,
    });

    const series = chart.addSeries(CandlestickSeries, {
      upColor: "#00e58c",
      downColor: "#ff5468",
      borderUpColor: "#00e58c",
      borderDownColor: "#ff5468",
      wickUpColor: "#00e58c",
      wickDownColor: "#ff5468",
    });

    series.setData(generateCandles());
    chart.timeScale().fitContent();

    return () => chart.remove();
  }, []);

  return <div ref={ref} className="h-[320px] w-full sm:h-[400px]" />;
}
