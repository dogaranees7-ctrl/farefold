"use client";

import { useState } from "react";
import { SheetHead } from "@/components/spec/Sheet";
import { structureMap } from "@/components/drawings/structures";
import { specimens } from "@/lib/site-config";

// SHEET 04 — Library.
//
// A specimen wall, not a product grid: full-bleed, hairline-ruled, no cards,
// no gaps, no shadows. Each cell is a real structure drawn as a structure.
//
// Inspection works for pointer and keyboard alike — hover, focus and click
// all set the readout — and each cell carries its whole specification in its
// accessible name, so a screen reader never depends on the visual readout.

export function Library() {
  const [inspected, setInspected] = useState(0);
  const current = specimens[inspected];

  return (
    <section
      id="library"
      className="substrate scroll-mt-24 bg-kraft-pale py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
        <SheetHead
          sheet="04"
          discipline="Library"
          tone="kraft"
          headline={
            <>
              Different food.
              <br />
              Different problems.
              <br />
              <span className="text-crease">Different structure.</span>
            </>
          }
          intro={
            <p>
              Eighteen formats we design, source, print and supply regularly — drawn as
              structures rather than pictures, because the structure is the part
              that decides whether the food arrives intact. Inspect any
              specimen.
            </p>
          }
          meta={[
            ["Specimens", "18"],
            ["Sheet", "6 × 3"],
          ]}
        />

        {/* Inspection readout. */}
        <div className="mt-14 grid gap-6 border-t border-ink/20 pt-6 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="t-tech-sm text-kraft-deep">
              Specimen {current.no} · {current.coord}
            </p>
            <p className="t-display-tight mt-2 text-2xl text-ink">{current.label}</p>
          </div>
          <div>
            <p className="t-tech-sm text-kraft-deep">Form</p>
            <p className="mt-2 text-[0.95rem] leading-6 text-ink-soft">{current.form}</p>
          </div>
          <div>
            <p className="t-tech-sm text-kraft-deep">Typical material</p>
            <p className="mt-2 text-[0.95rem] leading-6 text-ink-soft">
              {current.material}
            </p>
          </div>
          <div>
            <p className="t-tech-sm text-kraft-deep">Decides</p>
            <p className="mt-2 text-[0.95rem] leading-6 text-crease">{current.note}</p>
          </div>
        </div>
      </div>

      {/* The wall itself runs to the trim, edge to edge. */}
      <div className="mt-10 border-y border-ink/20 sm:mt-14">
        <ul className="grid grid-cols-2 gap-px bg-ink/20 sm:grid-cols-3 lg:grid-cols-6">
          {specimens.map((s, i) => {
            const Structure = structureMap[s.structure];
            const isOn = i === inspected;
            return (
              <li key={s.no} className="bg-kraft-pale">
                <button
                  type="button"
                  onMouseEnter={() => setInspected(i)}
                  onFocus={() => setInspected(i)}
                  onClick={() => setInspected(i)}
                  aria-label={`Specimen ${s.no}, ${s.label}. ${s.form}, typically ${s.material}. ${s.note}.`}
                  aria-pressed={isOn}
                  className={`relative flex aspect-square w-full flex-col justify-between p-3 text-left transition-colors duration-300 sm:p-4 ${
                    isOn ? "bg-ink text-kraft-pale" : "text-ink hover:bg-ink/[0.06]"
                  }`}
                >
                  <span className="flex items-start justify-between">
                    <span
                      className={`t-tech-sm ${isOn ? "text-kraft" : "text-kraft-deep"}`}
                    >
                      {s.coord}
                    </span>
                    <span
                      className={`t-tech-sm ${isOn ? "text-paper/50" : "text-ink-mute"}`}
                    >
                      {s.no}
                    </span>
                  </span>

                  <Structure
                    className={`mx-auto w-[74%] max-w-[9rem] transition-colors duration-300 ${
                      isOn ? "text-kraft-pale" : "text-ink/80"
                    }`}
                  />

                  <span
                    className={`t-tech-sm ${isOn ? "text-paper" : "text-ink-soft"}`}
                  >
                    {s.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mx-auto w-full max-w-[112rem] px-5 pt-6 sm:px-8 lg:px-12">
        <p className="t-tech-sm text-kraft-deep">
          Anything not on this sheet gets drawn from zero — see specimen 18
        </p>
      </div>
    </section>
  );
}
