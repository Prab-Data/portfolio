"use client";

import * as React from "react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, animate, motion, useMotionValue } from "framer-motion";
import { ChevronRight, QrCode } from "lucide-react";
import { cn } from "@/lib/utils";

export interface IdBadgeCardProps {
  /** Portrait photo (rendered grayscale) */
  image: string;
  imagePosition?: string;
  /** Full name — the NOME value on the front */
  name: string;
  /** Availability shown on the front */
  statusLabel?: string;
  statusActive?: boolean;
  /** Role — title on the details (back) card */
  role: string;
  /** Brand wordmark, e.g. "prab" + ".dev" */
  brandName?: string;
  brandTld?: string;
  /** Single-letter logo mark */
  markChar?: string;
  /** Detail fields (shown on the back / popup) */
  unit?: string;
  idNo?: string;
  serial?: string;
  /** Vertical wordmark on the violet card behind */
  backBrand?: string;
  className?: string;
}

/**
 * Dark lanyard ID badge. Front shows only name + availability; the violet card
 * behind holds the details (role, fields, QR). Tap the front to swing it; tap
 * the back card to zoom the details into a popup (tap anywhere to dismiss).
 */
export function IdBadgeCard({
  image,
  imagePosition = "50% 22%",
  name,
  statusLabel = "Available",
  statusActive = true,
  role,
  brandName = "prab",
  brandTld = ".dev",
  markChar = "P",
  unit = "01",
  idNo = "PRAB-002",
  serial = "001599951",
  backBrand = "prab",
  className,
}: IdBadgeCardProps) {
  const rotate = useMotionValue(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  // SSR-safe client flag (no setState-in-effect) so the portal only renders
  // on the client.
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  // ESC to close + lock scroll while the popup is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Tap/click the front → pendulum swing from the clip
  const swing = (e: React.PointerEvent<HTMLDivElement>) => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    let n = (e.clientX - cx) / (rect.width / 2);
    if (Math.abs(n) < 0.2) n = n >= 0 ? 0.5 : -0.5;
    n = Math.max(-1, Math.min(1, n));
    animate(rotate, 0, {
      type: "spring",
      stiffness: 65,
      damping: 5,
      mass: 1.1,
      velocity: n * 850,
    });
  };

  const brand = (
    <>
      {brandName}
      <span className="text-violet">{brandTld}</span>
    </>
  );

  return (
    <>
      <div className={cn("relative mx-auto w-[250px]", className)}>
        {/* lanyard — two straps rising from above (behind the header) and
            clipped by the section overflow, so they read as coming from the
            top rather than starting mid-banner. Static: only the card swings. */}
        <div className="pointer-events-none absolute bottom-full left-1/2 -z-10 flex h-screen w-28 -translate-x-1/2 justify-center">
          <div className="absolute bottom-0 left-1/2 h-full w-9 origin-bottom -translate-x-1/2 rotate-[6deg] bg-gradient-to-b from-[#9a5cff] to-violet shadow-[inset_2px_0_0_rgba(255,255,255,0.2),inset_-2px_0_0_rgba(0,0,0,0.25)]">
            <span className="absolute bottom-28 left-1/2 -translate-x-1/2 -rotate-[6deg] text-[8px] font-bold uppercase tracking-tight text-white/25">
              {backBrand}
            </span>
          </div>
          <div className="absolute bottom-0 left-1/2 h-full w-9 origin-bottom -translate-x-1/2 -rotate-[6deg] bg-gradient-to-b from-[#9a5cff] to-violet shadow-[inset_2px_0_0_rgba(255,255,255,0.2),inset_-2px_0_0_rgba(0,0,0,0.25)]">
            <span className="absolute bottom-28 left-1/2 -translate-x-1/2 rotate-[6deg] text-[8px] font-bold uppercase tracking-tight text-white/25">
              {backBrand}
            </span>
          </div>
          {/* metal connector at the clip joint */}
          <div className="absolute bottom-0 left-1/2 h-4 w-4 -translate-x-1/2 translate-y-1 rounded-full bg-gradient-to-b from-zinc-200 to-zinc-600 shadow-[0_2px_3px_rgba(0,0,0,0.5)] ring-2 ring-black/40" />
        </div>

        <div className="badge-sway">
          <motion.div
            ref={wrapRef}
            onPointerDown={swing}
            style={{ rotate, transformOrigin: "top center" }}
            className="flex cursor-pointer touch-manipulation select-none flex-col items-center"
          >
            {/* metallic swivel clip */}
            <svg
              width="34"
              height="60"
              viewBox="0 0 34 60"
              className="relative z-20 -mb-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]"
              aria-hidden
            >
              <defs>
                <linearGradient id="badge-metal" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#f1f5f9" />
                  <stop offset="0.45" stopColor="#9aa6b6" />
                  <stop offset="0.75" stopColor="#5b6675" />
                  <stop offset="1" stopColor="#3b424d" />
                </linearGradient>
              </defs>
              <circle cx="17" cy="8" r="6" fill="none" stroke="url(#badge-metal)" strokeWidth="3" />
              <circle cx="17" cy="18" r="3.2" fill="url(#badge-metal)" />
              <rect x="9" y="16" width="16" height="40" rx="8" fill="url(#badge-metal)" />
              <path d="M22 26 q3.5 6 0 13" fill="none" stroke="#2b313a" strokeWidth="1.4" strokeLinecap="round" />
              <rect x="13.5" y="40" width="7" height="11" rx="3.5" fill="#0b0b10" opacity="0.55" />
            </svg>

            {/* cards */}
            <div className="relative">
              {/* back violet card — peeks a preview of the details; click to open */}
              <div
                role="button"
                tabIndex={0}
                aria-label="Show badge details"
                onPointerDown={(e) => {
                  e.stopPropagation();
                  setOpen(true);
                }}
                className="absolute -left-14 -top-1 -z-10 h-[98%] w-full -rotate-[8deg] cursor-pointer overflow-hidden rounded-[22px] bg-gradient-to-br from-violet to-[#7c3aed] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)] ring-1 ring-white/10"
              >
                {/* faint wordmark filling the card */}
                <span className="absolute left-1/2 top-1/2 origin-center -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-[46px] font-bold tracking-tight text-white/15">
                  {backBrand}
                </span>

                {/* preview band on the peeking left edge */}
                <div className="pointer-events-none absolute inset-y-0 left-0 flex w-[52px] flex-col items-center justify-between py-5">
                  {/* mini QR */}
                  <div className="rounded-md bg-white p-1 shadow-sm">
                    <QrCode size={22} className="text-zinc-900" strokeWidth={1.6} />
                  </div>
                  {/* role, read vertically */}
                  <div className="-rotate-90 whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.18em] text-white/85">
                    {role}
                  </div>
                  {/* tap hint */}
                  <div className="flex flex-col items-center text-white">
                    <span className="text-[7px] font-semibold uppercase tracking-wider">
                      Tap
                    </span>
                    <ChevronRight size={13} strokeWidth={2.5} />
                  </div>
                </div>
              </div>

              {/* front dark card */}
              <div className="relative w-[240px] overflow-hidden rounded-[20px] bg-gradient-to-b from-zinc-900 to-black pb-3 shadow-[0_35px_70px_-20px_rgba(0,0,0,0.85)] ring-1 ring-white/10">
                <div className="mx-auto mb-1 mt-2 h-1.5 w-12 rounded-full bg-white/15" />

                {/* brand header */}
                <div className="flex items-center justify-between px-4 pb-3 pt-2">
                  <span className="text-[15px] font-semibold tracking-tight text-white">
                    {brand}
                  </span>
                  <span className="text-xl font-black leading-none text-violet">
                    {markChar}
                  </span>
                </div>

                {/* portrait over topographic texture — full colour (no filters) */}
                <div className="relative mx-3 overflow-hidden rounded-xl bg-black">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "repeating-radial-gradient(circle at 50% 44%, transparent 0 9px, rgba(255,255,255,0.06) 9px 10px)",
                      maskImage:
                        "radial-gradient(circle at 50% 46%, black 50%, transparent 82%)",
                      WebkitMaskImage:
                        "radial-gradient(circle at 50% 46%, black 50%, transparent 82%)",
                    }}
                  />
                  <div className="relative mx-auto w-[84%] py-3.5">
                    <div className="overflow-hidden rounded-lg ring-1 ring-white/10">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={image}
                        alt={name}
                        className="aspect-[4/5] w-full object-cover"
                        style={{ objectPosition: imagePosition }}
                      />
                    </div>
                  </div>
                </div>

                {/* minimal panel — name + availability */}
                <div className="mx-3 mt-3 rounded-lg bg-zinc-100 px-4 py-3 text-zinc-900">
                  <div className="text-[8px] font-medium uppercase tracking-widest text-zinc-400">
                    Nome
                  </div>
                  <div className="text-[14px] font-bold uppercase leading-tight tracking-tight">
                    {name}
                  </div>
                  <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-full bg-white px-2 py-1 text-[10px] font-semibold text-zinc-700 ring-1 ring-zinc-200">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{
                        background: statusActive ? "#22c55e" : "#9ca3af",
                        boxShadow: statusActive
                          ? "0 0 6px rgba(34,197,94,0.8)"
                          : "none",
                      }}
                    />
                    {statusLabel}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* details popup */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
                onPointerDown={() => setOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  onPointerDown={(e) => e.stopPropagation()}
                  initial={{ scale: 0.82, opacity: 0, y: 12 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.85, opacity: 0, y: 8 }}
                  transition={{ type: "spring", stiffness: 260, damping: 24 }}
                  className="w-[320px] overflow-hidden rounded-[24px] bg-gradient-to-b from-zinc-900 to-black p-3 shadow-2xl ring-1 ring-white/10"
                >
                  {/* header */}
                  <div className="flex items-center justify-between px-2 pb-3 pt-1.5">
                    <span className="text-[16px] font-semibold tracking-tight text-white">
                      {brand}
                    </span>
                    <span className="text-2xl font-black leading-none text-violet">
                      {markChar}
                    </span>
                  </div>

                  {/* light detail panel */}
                  <div className="rounded-[16px] bg-zinc-100 px-4 py-4 text-zinc-900">
                    <div className="flex items-start justify-between">
                      <div className="text-[15px] font-bold uppercase leading-tight tracking-tight">
                        {role}
                      </div>
                      <div className="text-[8px] font-medium uppercase tracking-widest text-zinc-400">
                        Código
                      </div>
                    </div>

                    <div className="mt-3 flex items-end justify-between gap-3 border-t border-zinc-300 pt-3">
                      <div className="grid min-w-0 grid-cols-2 gap-x-4 gap-y-2.5">
                        <Field label="Nome" value={name} className="col-span-2" />
                        <Field label="Setor" value={unit} />
                        <Field label="Matrícula" value={idNo} />
                        <Field label="Serial" value={serial} className="col-span-2" />
                      </div>
                      <QrCode className="h-16 w-16 shrink-0 text-zinc-900" strokeWidth={1.4} />
                    </div>
                  </div>

                  <div className="px-2 pb-1 pt-3 text-center text-[10px] font-medium uppercase tracking-widest text-white/40">
                    Tap anywhere to close
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}

function Field({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={cn("min-w-0", className)}>
      <div className="text-[8px] font-medium uppercase tracking-widest text-zinc-400">
        {label}
      </div>
      <div className="truncate text-[12px] font-semibold uppercase tracking-tight text-zinc-800">
        {value}
      </div>
    </div>
  );
}
