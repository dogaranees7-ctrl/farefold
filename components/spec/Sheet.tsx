// ---------------------------------------------------------------------------
// Sheet primitives.
//
// Every section of the site is a numbered sheet in one specification. They
// share a header block, a registration mark set and a rule language, so the
// page reads as a single document rather than a stack of sections.
// ---------------------------------------------------------------------------

import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export type Tone = "paper" | "ink" | "kraft" | "brand";

const toneClasses: Record<
  Tone,
  { body: string; meta: string; rule: string; accent: string; heading: string }
> = {
  paper: {
    body: "text-ink-soft",
    meta: "text-ink-mute",
    rule: "text-line",
    accent: "text-crease",
    heading: "text-ink",
  },
  ink: {
    body: "text-paper/65",
    meta: "text-paper/50",
    rule: "text-paper/20",
    accent: "text-kraft",
    heading: "text-paper",
  },
  kraft: {
    body: "text-ink-soft",
    meta: "text-kraft-deep",
    rule: "text-kraft-deep/30",
    accent: "text-crease",
    heading: "text-ink",
  },
  brand: {
    body: "text-brand-pale/75",
    meta: "text-brand-pale/50",
    rule: "text-brand-pale/25",
    accent: "text-kraft",
    heading: "text-paper",
  },
};

/** A print registration mark. Sits at the trim corners of a sheet. */
export function RegMark({
  className = "",
  rotate = 0,
}: {
  className?: string;
  rotate?: number;
}) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <path d="M0 10h7M10 0v7" stroke="currentColor" strokeWidth="1" />
      <circle cx="10" cy="10" r="4.5" stroke="currentColor" strokeWidth="0.75" fill="none" />
    </svg>
  );
}

/** The four trim marks of a sheet. */
export function TrimMarks({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${className}`}>
      <RegMark className="absolute -top-2.5 -left-2.5" />
      <RegMark className="absolute -top-2.5 -right-2.5" rotate={90} />
      <RegMark className="absolute -bottom-2.5 -right-2.5" rotate={180} />
      <RegMark className="absolute -bottom-2.5 -left-2.5" rotate={270} />
    </div>
  );
}

type SheetHeadProps = {
  sheet: string;
  discipline: string;
  headline: ReactNode;
  intro?: ReactNode;
  meta?: [string, string][];
  tone?: Tone;
  /** Headline measure. Narrow keeps a statement tight; wide lets it run. */
  width?: "narrow" | "wide";
};

export function SheetHead({
  sheet,
  discipline,
  headline,
  intro,
  meta,
  tone = "paper",
  width = "narrow",
}: SheetHeadProps) {
  const t = toneClasses[tone];

  return (
    <header>
      <Reveal>
        <div className={`flex items-baseline justify-between gap-4 ${t.meta}`}>
          <p className="t-tech-sm">
            <span className={t.accent}>Sheet {sheet}</span>
            <span className="px-2 opacity-40">/</span>
            {discipline}
          </p>
          <p className="t-tech-sm shrink-0">Rev A</p>
        </div>
        <div className={`rule-cut mt-3 ${t.rule}`} />
      </Reveal>

      <Reveal delay={60}>
        <h2
          className={`t-display mt-8 text-[clamp(2.1rem,6.2vw,4.5rem)] ${t.heading} ${
            width === "narrow" ? "max-w-[18ch]" : "max-w-[24ch]"
          }`}
        >
          {headline}
        </h2>
      </Reveal>

      {intro && (
        <Reveal delay={120}>
          <div className={`mt-7 max-w-[54ch] text-[1.0625rem] leading-[1.65] ${t.body}`}>
            {intro}
          </div>
        </Reveal>
      )}

      {meta && (
        <Reveal delay={180}>
          <dl className={`mt-8 flex flex-wrap gap-x-10 gap-y-3 ${t.meta}`}>
            {meta.map(([k, v]) => (
              <div key={k} className="t-tech-sm">
                <dt className="inline opacity-60">{k}</dt>
                <dd className={`ml-2 inline ${t.accent}`}>{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      )}
    </header>
  );
}

export { toneClasses };
