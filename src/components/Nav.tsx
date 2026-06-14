"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, profile } from "@/lib/data";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-glass fixed inset-x-0 top-0 z-50 border-b border-white/10">
      <nav className="mx-auto flex h-12 max-w-6xl items-center justify-between px-6">
        <a
          href="#"
          className="text-sm font-semibold tracking-tight text-on-dark transition-opacity hover:opacity-70"
        >
          Prabhanjan&nbsp;Sharma
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-[13px] capitalize text-on-dark/80 transition-colors hover:text-on-dark"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${profile.email}`}
          className="hidden text-[13px] text-blue-bright transition-opacity hover:opacity-80 md:inline"
        >
          Get in touch
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="cursor-pointer text-on-dark md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <ul className="nav-glass flex flex-col gap-0.5 border-t border-white/10 px-6 py-3 md:hidden">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-2.5 text-[15px] capitalize text-on-dark/80 hover:bg-white/5 hover:text-on-dark"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${profile.email}`}
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-lg px-2 py-2.5 text-[15px] text-blue-bright"
            >
              Get in touch
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
