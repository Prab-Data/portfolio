"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, profile } from "@/lib/data";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-glass fixed inset-x-0 top-0 z-50 border-b border-border">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={profile.avatar}
            alt="Prabhanjan Sharma"
            className="h-8 w-8 rounded-full object-cover ring-1 ring-border-2"
          />
          <span className="text-sm font-semibold tracking-tight">Prabhanjan</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-3 py-1.5 text-[13px] capitalize text-muted transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={`mailto:${profile.email}`} className="btn-primary hidden md:inline-flex">
          Get in touch
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="cursor-pointer text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <ul className="nav-glass flex flex-col gap-0.5 border-t border-border px-5 py-3 md:hidden">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-2.5 text-[15px] capitalize text-muted hover:bg-white/5 hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${profile.email}`}
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full justify-center"
            >
              Get in touch
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
