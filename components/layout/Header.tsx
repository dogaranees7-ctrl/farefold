"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  MenuIcon,
  CloseIcon,
  WhatsAppIcon,
  ArrowRightIcon,
  FoldMark,
} from "@/components/icons";
import {
  siteConfig,
  navLinks,
  sheets,
  getWhatsappLink,
  getMailtoLink,
  quoteBrief,
  whatsappOpener,
} from "@/lib/site-config";

// The title block.
//
// An engineering drawing carries a title block that says which sheet of the
// set you are looking at. So does this: the bar tracks which sheet is on
// screen and draws a progress rule along its lower edge, which is both the
// concept and an honest piece of navigation.

export function Header() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [current, setCurrent] = useState(sheets[0]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Scroll progress, read once per frame.
  useEffect(() => {
    let frame = 0;
    const read = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(read);
    };
    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Which sheet is on screen.
  useEffect(() => {
    const targets = sheets
      .map((s) => {
        const id = s.href.replace("#", "");
        const el = document.getElementById(id);
        return el ? { sheet: s, el } : null;
      })
      .filter((v): v is { sheet: (typeof sheets)[number]; el: HTMLElement } => !!v);

    if (!targets.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (!hit) return;
        const match = targets.find((t) => t.el === hit.target);
        if (match) setCurrent(match.sheet);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );

    targets.forEach((t) => observer.observe(t.el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
    <header className="sticky top-0 z-50 bg-paper/92 backdrop-blur-md">
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between gap-6 sm:h-18">
          <a href="#top" className="group flex items-center gap-3">
            <FoldMark className="h-7 w-7 text-ink transition-colors duration-300 group-hover:text-crease" />
            <span className="t-display-tight text-lg text-ink">Farefold</span>
          </a>

          <nav aria-label="Primary" className="hidden lg:block">
            {/* gap-2 xl:gap-8 — the nav's natural gap-8 rhythm only fits
                once there's room for it (measured: fine from 1280px up).
                Below that, down to the 1024px lg: breakpoint where this
                nav first appears, the row has no spare width (measured
                deficit ~55px at 1024px), so the gap tightens there and
                only there. whitespace-nowrap stops "How we work" — the
                only multi-word label — from wrapping to absorb that
                deficit itself, the way it did with the default gap. */}
            <ul className="flex items-center gap-2 xl:gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-rule t-tech-sm whitespace-nowrap text-ink-soft transition-colors hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <p
              aria-hidden="true"
              className="t-tech-sm hidden text-ink-mute xl:block"
            >
              Sheet <span className="text-crease">{current.no}</span>
              <span className="px-1 opacity-40">/</span>
              {sheets.length.toString().padStart(2, "0")}
            </p>
            <div className="hidden items-center gap-2 sm:flex">
              <Button
                href={getWhatsappLink(whatsappOpener)}
                variant="outline"
                size="md"
                target="_blank"
                rel="noopener noreferrer"
                icon={<WhatsAppIcon className="h-4 w-4" />}
              >
                WhatsApp
              </Button>
              <Button
                href={getMailtoLink("Packaging brief — quote request", quoteBrief)}
                variant="primary"
                size="md"
              >
                Request a Quote
              </Button>
            </div>

            <button
              type="button"
              className="-mr-2 flex h-11 w-11 items-center justify-center text-ink lg:hidden"
              aria-expanded={open}
              aria-controls="sheet-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Contact fallback — plain, copyable text for anyone whose
            mailto: link doesn't open anything. Kept off the main row
            entirely (that row is edge-to-edge at 1024px, with zero spare
            width once nav and the CTA pair are both present) and shown
            only from the same breakpoint the CTA pair itself appears at,
            so it never competes with nav or the buttons for space. */}
        <div className="hidden justify-end pb-2 sm:flex">
          <p className="t-tech-sm text-ink-mute">
            {siteConfig.whatsappDisplay} · {siteConfig.email}
          </p>
        </div>
      </div>

      {/* Progress along the lower edge — how far through the set you are. */}
      <div className="relative h-px bg-line">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 origin-left bg-crease"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </header>

    {/* Mobile: the sheet index. Kept out of <header> — <header>'s
        backdrop-blur-md creates a containing block for position:fixed
        descendants, which collapsed this panel's top-16/bottom-0 sizing
        against header's own ~64px box instead of the viewport. As a
        sibling of <header>, it sizes against the viewport correctly. */}
    <div
      id="sheet-menu"
      className={`fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col bg-ink transition-opacity duration-300 sm:top-18 lg:hidden ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <nav aria-label="Sheet index" className="flex-1 overflow-y-auto px-5 pt-6 sm:px-8">
        <p className="t-tech-sm text-paper/50">Contents</p>
        <ul className="mt-4">
          {sheets.map((s, i) => (
            <li
              key={s.href}
              className={`border-b border-paper/12 transition-all duration-300 ${
                open ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${60 + i * 35}ms` : "0ms" }}
            >
              <a
                href={s.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-5 py-4"
              >
                <span className="t-tech-sm shrink-0 text-crease-line">{s.no}</span>
                <span className="t-display-tight text-2xl text-paper">{s.title}</span>
                <ArrowRightIcon className="ml-auto h-5 w-5 shrink-0 self-center text-paper/35" />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-col gap-3 border-t border-paper/15 px-5 py-6 sm:px-8">
        <Button
          href={getWhatsappLink(whatsappOpener)}
          variant="whatsapp"
          size="lg"
          target="_blank"
          rel="noopener noreferrer"
          icon={<WhatsAppIcon className="h-4 w-4" />}
          className="w-full"
        >
          WhatsApp Farefold
        </Button>
        <Button
          href={getMailtoLink("Packaging brief — quote request", quoteBrief)}
          variant="light"
          size="lg"
          className="w-full"
          icon={<ArrowRightIcon className="h-4 w-4" />}
        >
          Request a Quote
        </Button>

        {/* Same contact fallback as the desktop bar, and as Hero — plain,
            copyable text beneath the buttons it backs up. */}
        <p className="t-tech-sm mt-1 text-center text-paper/60">
          {siteConfig.whatsappDisplay} · {siteConfig.email}
        </p>
      </div>
    </div>
    </>
  );
}
