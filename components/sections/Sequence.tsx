"use client";

import { useState } from "react";
import { SheetHead } from "@/components/spec/Sheet";
import { SequenceDrawing } from "@/components/drawings/SequenceDrawing";
import { stages } from "@/lib/site-config";

// SHEET 03 — Development.
//
// One packaging system taken through seven stages. The drawing accumulates
// rather than resets, which is the actual point: a carton design is a stack
// of decisions, and each one constrains the next.
//
// Interaction is plain buttons with aria-pressed rather than a tab widget —
// a tablist would owe the user arrow-key navigation, and buttons keep every
// stage reachable by Tab with no roving-focus machinery to get wrong.

export function Sequence() {
  const [active, setActive] = useState(0);
  const stage = stages[active];

  return (
    <section
      id="sequence"
      className="substrate scroll-mt-24 bg-paper-2 py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
        <SheetHead
          sheet="03"
          discipline="Development"
          headline={
            <>
              A box is a stack of
              <br />
              decisions, in order.
            </>
          }
          intro={
            <p>
              Follow one system from the menu item to the delivery note. The
              drawing never restarts — every stage adds a layer to the same
              sheet, and every layer is constrained by the one before it. Step
              through it.
            </p>
          }
          meta={[
            ["Stages", "7"],
            ["Subject", "12in pizza carton"],
          ]}
        />

        {/* Stage track. */}
        <div className="mt-14 sm:mt-20">
          <div className="rule-cut text-ink/20" />
          <ol className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7">
            {stages.map((s, i) => {
              const isActive = i === active;
              const isDone = i < active;
              return (
                <li key={s.key} className="border-b border-ink/10 lg:border-b-0">
                  <button
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActive(i)}
                    className={`group flex w-full flex-col items-start gap-2 px-1 py-4 text-left transition-colors duration-300 sm:px-3 lg:py-5 ${
                      isActive ? "bg-ink text-paper" : "hover:bg-ink/[0.05]"
                    }`}
                  >
                    <span
                      className={`t-tech-sm ${
                        isActive
                          ? "text-kraft"
                          : isDone
                            ? "text-crease"
                            : "text-ink-mute"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`t-display-tight text-base sm:text-lg ${
                        isActive ? "text-paper" : "text-ink"
                      }`}
                    >
                      {s.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
          <div className="rule-cut text-ink/20" />
        </div>

        {/* Drawing + readout. */}
        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <div className="relative border border-ink/15 bg-paper p-4 text-ink sm:p-8">
              <p className="t-tech-sm absolute top-4 left-4 text-ink-mute sm:top-6 sm:left-6">
                Dwg. FF-03 · Scale NTS
              </p>
              <p className="t-tech-sm absolute top-4 right-4 text-crease sm:top-6 sm:right-6">
                Layer {String(active + 1).padStart(2, "0")}/07
              </p>
              <SequenceDrawing stage={active} className="mt-8 w-full sm:mt-6" />
            </div>
          </div>

          <div className="lg:col-span-5">
            {/* Politeness set low: the panel updates on deliberate user
                action, so it should be announced but never interrupt. */}
            <div aria-live="polite">
              <p className="t-tech text-crease">
                {String(active + 1).padStart(2, "0")} · {stage.label}
              </p>
              <h3 className="t-display-tight mt-4 max-w-[16ch] text-[1.75rem] text-ink sm:text-[2.25rem]">
                {stage.headline}
              </h3>
              <p className="mt-5 max-w-[46ch] text-[1.0625rem] leading-[1.65] text-ink-soft">
                {stage.body}
              </p>

              <dl className="mt-9">
                {stage.spec.map(([k, v], i) => (
                  <div
                    key={`${k}-${i}`}
                    className="flex items-baseline justify-between gap-6 border-t border-ink/12 py-3"
                  >
                    <dt className="t-tech-sm text-ink-mute">{k}</dt>
                    <dd className="t-tech-sm text-right text-ink">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-8 flex gap-3">
              <button
                type="button"
                onClick={() => setActive((v) => Math.max(0, v - 1))}
                disabled={active === 0}
                className="t-tech border border-ink/25 px-5 py-3 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper disabled:pointer-events-none disabled:opacity-30"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={() => setActive((v) => Math.min(stages.length - 1, v + 1))}
                disabled={active === stages.length - 1}
                className="t-tech border border-ink bg-ink px-5 py-3 text-paper transition-colors hover:bg-crease hover:border-crease disabled:pointer-events-none disabled:opacity-30"
              >
                Next stage
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
