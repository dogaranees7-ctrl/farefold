"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
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
  primaryNav,
  getWhatsappLink,
  whatsappOpener,
} from "@/lib/site-config";

// The global header. Six real destinations — Products, Custom, Solutions,
// Businesses, Materials, Lab — plus the logo and two utility actions that
// aren't content navigation: Cart and Account. Both are shown as inert,
// disabled controls rather than links, because there is no real cart or
// account route behind them yet — a dead link would be worse than an
// honestly-disabled button.

/** Cart and Account — utility, not primary content navigation. Rendered as
 *  disabled buttons (so they're out of tab order, matching "there is
 *  nothing here yet") with a visible "Soon" label rather than a link to a
 *  route that doesn't exist. */
function UtilityAction({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      disabled
      aria-label={`${label} — coming soon`}
      className="flex h-11 items-center gap-2 px-2 text-ink-mute disabled:cursor-not-allowed"
    >
      {icon}
      <span className="t-tech-sm hidden sm:inline">{label}</span>
      <span className="t-tech-sm text-ink-mute/70" aria-hidden="true">
        Soon
      </span>
    </button>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
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
      <header className="sticky top-0 z-50 border-b border-line bg-paper/92 backdrop-blur-md">
        <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
          <div className="flex h-16 items-center justify-between gap-6 sm:h-18">
            <Link href="/#top" className="group flex shrink-0 items-center gap-3">
              <FoldMark className="h-7 w-7 text-ink transition-colors duration-300 group-hover:text-crease" />
              <span className="t-display-tight text-lg text-ink">Farefold</span>
            </Link>

            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center gap-6 xl:gap-8">
                {primaryNav.map((link) => (
                  </ul>

          <div className="mt-8 flex items-center gap-6 border-t border-paper/15 pt-6">
            <span className="flex items-center gap-2 text-paper/40">
              < className="h-5 w-5" aria-hidden="true" />
              <span className="t-tech-sm">Cart — Soon</span>
            </span>
            <span className="flex items-center gap-2 text-paper/40">
              < className="h-5 w-5" aria-hidden="true" />
              <span className="t-tech-sm">Account — Soon</span>
            </span>
          </div>
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
            href="/contact"
            variant="light"
            size="lg"
            className="w-full"
            icon={<ArrowRightIcon className="h-4 w-4" />}
          >
            Request a Quote
          </Button>

          <p className="t-tech-sm mt-1 text-center text-paper/60">
            {siteConfig.whatsappDisplay} · {siteConfig.email}
          </p>
        </div>
      </div>
    </>
  );
}
