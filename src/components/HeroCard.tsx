"use client";

import { useState, useEffect } from "react";
import { Plus, Copy, Check, Clock, Zap } from "lucide-react";
import { profile } from "@/lib/data";

export function HeroCard() {
  const [time, setTime] = useState("");
  const [available, setAvailable] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const TZ = "Asia/Kolkata"; // IST
    const update = () => {
      const now = new Date();
      setTime(
        now
          .toLocaleTimeString("en-US", {
            timeZone: TZ,
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })
          .replace(" ", "") + " IST"
      );
      // working hours: 11:00–20:00 IST
      const hour = Number(
        new Intl.DateTimeFormat("en-US", {
          timeZone: TZ,
          hour: "2-digit",
          hourCycle: "h23",
        }).format(now)
      );
      setAvailable(hour >= 11 && hour < 20);
    };
    update();
    const id = setInterval(update, 20000);
    return () => clearInterval(id);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  const btn =
    "inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/[0.14] px-4 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-md transition-colors hover:bg-white/[0.2] cursor-pointer";

  return (
    <div className="relative mx-auto mb-10 w-full max-w-sm">
      {/* violet bar BEHIND the glass — glows up THROUGH the card and peeks out below */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-3 top-[84%] -bottom-9 z-0 rounded-[26px] bg-violet"
        style={{ boxShadow: "0 30px 70px -8px rgba(168,85,247,0.7)" }}
      />
      {/* status text riding on the peeking bar */}
      <div className="absolute inset-x-0 -bottom-9 z-0 flex items-center justify-center gap-2 py-3 text-sm font-semibold text-black">
        <Zap size={15} fill="currentColor" />
        Currently building cool products
      </div>

      {/* glass card — translucent so the bar behind glows through the bottom */}
      <div className="relative z-10 overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.05] p-5 pb-10 shadow-xl shadow-black/40 backdrop-blur-2xl">
        {/* status row */}
        <div className="flex items-center justify-between px-1 py-0.5 text-sm text-muted">
          <span className="inline-flex items-center gap-2">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{
                background: available ? "var(--violet)" : "var(--muted-2)",
                boxShadow: available ? "0 0 8px rgba(168,85,247,0.85)" : "none",
              }}
            />
            {available ? "Available for work" : "Away · 11am–8pm IST"}
          </span>
          <span className="inline-flex items-center gap-1.5 tabular-nums">
            <Clock size={15} />
            {time || "—"}
          </span>
        </div>

        {/* photo */}
        <div className="mt-3 overflow-hidden rounded-2xl ring-1 ring-white/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={profile.photo}
            alt="Prabhanjan Sharma"
            className="aspect-[4/3] w-full object-cover"
            style={{ objectPosition: "58% 26%" }}
          />
        </div>

        {/* name + role */}
        <div className="mt-5 text-center">
          <h3 className="text-2xl font-bold tracking-tight text-white">
            Prabhanjan Sharma
          </h3>
          <p className="mt-1 text-sm text-muted">Full Stack Developer</p>
        </div>

        {/* actions */}
        <div className="relative z-10 mt-5 grid grid-cols-2 gap-3">
          <a href={`mailto:${profile.email}`} className={btn}>
            <Plus size={16} />
            Hire Me
          </a>
          <button type="button" onClick={copyEmail} className={btn}>
            {copied ? <Check size={16} className="text-green" /> : <Copy size={16} />}
            {copied ? "Copied!" : "Copy Email"}
          </button>
        </div>
      </div>
    </div>
  );
}
