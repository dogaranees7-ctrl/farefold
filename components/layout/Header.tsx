"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { MenuIcon, CloseIcon, WhatsAppIcon, ArrowRightIcon, FoldMark } from "@/components/icons";
import { siteConfig, primaryNav, getWhatsappLink, whatsappOpener } from "@/lib/site-config";

export function Header() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f1e7]/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-[120rem] items-center justify-between gap-6 px-5 sm:px-8 lg:px-14">
          <Link href="/#top" className="group flex shrink-0 items-center gap-3">
            <FoldMark className="h-7 w-7 text-[#171614] transition-transform duration-300 group-hover:rotate-3" />
            <span className="text-lg font-extrabold tracking-[-0.04em] text-[#171614]">Farefold</span>
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-5 xl:gap-7">
              {primaryNav.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm font-semibold text-[#171614]/65 transition-colors hover:text-[#171614]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Button href={getWhatsappLink(whatsappOpener)} variant="outline" size="md" target="_blank" rel="noopener noreferrer" icon={<WhatsAppIcon className="h-4 w-4" />}>
              WhatsApp
            </Button>
            <Button href="/contact" variant="primary" size="md">
              Start a project
            </Button>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className="-mr-2 flex h-11 w-11 items-center justify-center text-[#171614] lg:hidden"
            aria-expanded={open}
            aria-controls="primary-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </header>

      <div
        id="primary-menu"
        className={`fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col bg-[#171614] transition-opacity duration-200 lg:hidden ${open ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        <nav aria-label="Mobile primary" className="flex-1 overflow-y-auto px-5 pt-6 sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Explore Farefold</p>
          <ul className="mt-4">
            {primaryNav.map((link, i) => (
              <li key={link.label} className="border-b border-white/10">
                <Link href={link.href} onClick={() => setOpen(false)} className="flex items-center py-4 text-2xl font-semibold tracking-[-0.03em] text-white">
                  {link.label}
                  <ArrowRightIcon className="ml-auto h-5 w-5 text-white/35" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="border-t border-white/10 px-5 py-6 sm:px-8">
          <Button href={getWhatsappLink(whatsappOpener)} variant="whatsapp" size="lg" target="_blank" rel="noopener noreferrer" icon={<WhatsAppIcon className="h-4 w-4" />} className="w-full">
            WhatsApp Farefold
          </Button>
          <Button href="/contact" variant="light" size="lg" className="mt-3 w-full" icon={<ArrowRightIcon className="h-4 w-4" />}>
            Start a project
          </Button>
          <p className="mt-4 text-center text-xs text-white/45">{siteConfig.whatsappDisplay} · {siteConfig.email}</p>
        </div>
      </div>
    </>
  );
}
