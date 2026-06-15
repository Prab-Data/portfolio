"use client";

import { useRef } from "react";
import { Linkedin } from "@/components/ui/BrandIcons";
import { profile } from "@/lib/data";

const SCRIPT_SRC = "https://platform.linkedin.com/badges/js/profile.js";

/**
 * LinkedIn profile chip. The official LinkedIn badge is lazy-loaded on first
 * hover/focus (zero cost on page load) and revealed in a popover. The chip
 * itself is a link straight to the profile.
 */
export function LinkedInBadge() {
  const loaded = useRef(false);

  const ensureBadge = () => {
    const w = window as unknown as { LIRenderAll?: () => void };
    if (loaded.current || document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      w.LIRenderAll?.();
      return;
    }
    loaded.current = true;
    const s = document.createElement("script");
    s.src = SCRIPT_SRC;
    s.async = true;
    s.defer = true;
    s.type = "text/javascript";
    s.onload = () => w.LIRenderAll?.();
    document.body.appendChild(s);
  };

  return (
    <div
      className="group relative inline-flex w-fit"
      onMouseEnter={ensureBadge}
      onFocusCapture={ensureBadge}
    >
      {/* trigger — links straight to the profile */}
      <a
        href={profile.socials.linkedin}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
      >
        <Linkedin size={15} /> Prabhanjan Sharma
        <span className="text-muted-2">· LinkedIn</span>
      </a>

      {/* official badge — revealed on hover (loaded on first hover) */}
      <div className="pointer-events-none absolute bottom-full left-0 z-30 mb-3 w-[300px] translate-y-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <div
          className="badge-base LI-profile-badge"
          data-locale="en_US"
          data-size="medium"
          data-theme="dark"
          data-type="VERTICAL"
          data-vanity="prabhanjan-sharma-38a48a221"
          data-version="v1"
        >
          <a
            className="badge-base__link LI-simple-link"
            href="https://in.linkedin.com/in/prabhanjan-sharma-38a48a221?trk=profile-badge"
            target="_blank"
            rel="noreferrer"
          >
            Prabhanjan Sharma
          </a>
        </div>
      </div>
    </div>
  );
}
