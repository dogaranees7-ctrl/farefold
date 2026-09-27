import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { ArrowRightIcon } from "@/components/icons";

export type PathwayItem = { name: string; href?: string };

type PathwayProps = {
  no: string;
  /** The dialogue-style prompt shown as a small spoken tag, e.g.
   *  "Start with the food." */
  prompt: string;
  heading: ReactNode;
  body: string;
  /** Real taxonomy labels, each linking to its own route where one exists.
   *  Never fabricated — every entry here traces back to lib/data/. */
  items: PathwayItem[];
  href: string;
  cta: string;
};

/**
 * One reusable homepage "pathway" band — a dialogue prompt, a short honest
 * framing, a set of real taxonomy chips and a link into the full route.
 * Used five times (Foods, Businesses, Solutions, Materials, Lab) so the
 * five discovery pathways read as one consistent interface language rather
 * than five bespoke sections.
 */
export function Pathway({ no, prompt, heading, body, items, href, cta }: PathwayProps) {
  return (
    <section className="border-t border-page-border bg-page-bg py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex items-baseline justify-between gap-4">
            <p className="t-tech-sm text-page-ink-mute">
              <span className="text-page-accent">{no}</span>
              <span className="px-2 opacity-40">/</span>
              &ldquo;{prompt}&rdquo;
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal delay={60} className="lg:col-span-5">
            <h2 className="t-display-tight text-[clamp(1.7rem,4vw,2.7rem)] text-page-ink">
              {heading}
            </h2>
            <p className="mt-4 max-w-[46ch] text-[0.95rem] leading-6 text-page-ink-soft">
              {body}
            </p>
            <Link
              href={href}
              className="group mt-6 inline-flex items-center gap-2.5 text-page-ink"
            >
              <span className="link-rule t-tech-sm">{cta}</span>
              <ArrowRightIcon className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <ul className="flex flex-wrap gap-2">
              {items.map((item) =>
                item.href ? (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="t-tech-sm inline-block border border-page-border px-3 py-2 text-page-ink-soft transition-colors hover:border-page-ink hover:text-page-ink"
                    >
                      {item.name}
                    </Link>
                  </li>
                ) : (
                  <li
                    key={item.name}
                    className="t-tech-sm inline-block border border-page-border px-3 py-2 text-page-ink-soft"
                  >
                    {item.name}
                  </li>
                ),
              )}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
