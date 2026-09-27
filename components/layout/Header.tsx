"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  MenuIcon,
  CloseIcon,
  WhatsAppIcon,
  ArrowRightIcon,
  CartIcon,
  AccountIcon,
  FoldMark,
} from "@/components/icons";
import {
  siteConfig,
  primaryNav,
  getWhatsappLink,
  getMailtoLink,
  quoteBrief,
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
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="link-rule t-tech-sm whitespace-nowrap text-ink-soft transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-1 sm:gap-2">
              <div className="hidden items-center border-r border-line pr-2 sm:flex sm:mr-1">
                <UtilityAction icon={<CartIcon className="h-5 w-5" />} label="Cart" />
                <UtilityAction icon={<AccountIcon className="h-5 w-5" />} label="Account" />
              </div>

              <div className="hidden items-center gap-2 md:flex">
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
                aria-controls="primary-menu"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer. Kept out of <header> — <header>'s backdrop-blur-md
          creates a containing block for position:fixed descendants, which
          collapses this panel's top-16/bottom-0 sizing against header's own
          ~64px box instead of the viewport. As a sibling of <header>, it
          sizes against the viewport correctly. */}
      <div
        id="primary-menu"
        className={`fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col bg-ink transition-opacity duration-300 sm:top-18 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Primary" className="flex-1 overflow-y-auto px-5 pt-6 sm:px-8">
          <p className="t-tech-sm text-paper/50">Platform</p>
          <ul className="mt-4">
            {primaryNav.map((link, i) => (
              <li
                key={link.href}
                className={`border-b border-paper/12 transition-all duration-300 ${
                  open ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${60 + i * 35}ms` : "0ms" }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-5 py-4"
                >
                  <span className="t-display-tight text-2xl text-paper">{link.label}</span>
                  <ArrowRightIcon className="ml-auto h-5 w-5 shrink-0 self-center text-paper/35" />
                </Link>
              </li>
            ))}
            <li
              className={`border-b border-paper/12 transition-all duration-300 ${
                open ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${60 + primaryNav.length * 35}ms` : "0ms" }}
            >
              <Link
                href="/foods"
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-5 py-4"
              >
                <span className="t-display-tight text-2xl text-paper">Foods</span>
                <ArrowRightIcon className="ml-auto h-5 w-5 shrink-0 self-center text-paper/35" />
              </Link>
            </li>
          </ul>

          <div className="mt-8 flex items-center gap-6 border-t border-paper/15 pt-6">
            <span className="flex items-center gap-2 text-paper/40">
              <CartIcon className="h-5 w-5" aria-hidden="true" />
              <span className="t-tech-sm">Cart — Soon</span>
            </span>
            <span className="flex items-center gap-2 text-paper/40">
              <AccountIcon className="h-5 w-5" aria-hidden="true" />
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
            href={getMailtoLink("Packaging brief — quote request", quoteBrief)}
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
