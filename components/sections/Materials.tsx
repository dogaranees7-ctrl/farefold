"use client";

import { useState } from "react";
import { SheetHead } from "@/components/spec/Sheet";
import { materials } from "@/lib/site-config";

// SHEET 06 — Materials.
//
// A swatch wall with a datasheet readout, the way a materials library
// actually works. The ratings are declared as indicative on the sheet itself
// and the limits are stated as plainly as the strengths — including the one
// about compostable disposal, which is a claim nobody should make on a
// website on a customer's behalf.

const ratingRows: [keyof (typeof materials)[0]["ratings"], string][] = [
  ["grease", "Grease"],
  ["heat", "Heat"],
  ["moisture", "Moisture"],
  ["print", "Print"],
];

function RatingBar({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="t-tech-sm w-20 shrink-0 text-ink-mute">{label}</span>
      <span className="flex gap-1" aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={`h-2 w-7 ${i < value ? "bg-crease" : "bg-ink/12"}`}
          />
        ))}
      </span>
      <span className="sr-only">{value} of 3</span>
    </div>
  );
}

export function Materials() {
  const [active, setActive] = useState(0);
  const m = materials[active];

  return (
    <section
      id="materials"
      className="substrate scroll-mt-24 bg-paper py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
        <SheetHead
          sheet="06"
          discipline="Materials"
          headline={
            <>
              The board decides
              <br />
              more than the artwork.
            </>
          }
          intro={
            <p>
              Ten substrates we specify regularly, with what each one is good
              at and where it stops. Caliper, coating and grade move all of
              this, so treat the ratings as a starting point for a conversation
              rather than a datasheet.
            </p>
          }
          meta={[
            ["Substrates", "10"],
            ["Ratings", "Indicative"],
          ]}
        />

        <div className="mt-14 grid gap-12 sm:mt-20 lg:grid-cols-12 lg:gap-14">
          {/* Swatch wall. */}
          <div className="lg:col-span-5">
            <ul className="grid grid-cols-2 gap-px bg-ink/15">
              {materials.map((mat, i) => {
                const isOn = i === active;
                return (
                  <li key={mat.code} className="bg-paper">
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      aria-pressed={isOn}
                      className={`flex w-full flex-col gap-3 p-3 text-left transition-colors duration-300 sm:p-4 ${
                        isOn ? "bg-ink" : "hover:bg-ink/[0.05]"
                      }`}
                    >
                      <span
                        className={`sw sw-${mat.swatch} block aspect-[5/3] w-full ${
                          isOn ? "ring-2 ring-crease ring-offset-2 ring-offset-ink" : ""
                        }`}
                        aria-hidden="true"
                      />
                      <span>
                        <span
                          className={`t-tech-sm block ${isOn ? "text-kraft" : "text-ink-mute"}`}
                        >
                          {mat.code}
                        </span>
                        <span
                          className={`t-display-tight mt-1 block text-[0.95rem] ${
                            isOn ? "text-paper" : "text-ink"
                          }`}
                        >
                          {mat.name}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Datasheet. */}
          <div className="lg:col-span-7" aria-live="polite">
            <div className="flex items-baseline justify-between gap-4">
              <p className="t-tech text-crease">{m.code}</p>
              <p className="t-tech-sm text-ink-mute">Material datasheet</p>
            </div>
            <div className="rule-cut mt-3 text-ink/25" />

            <h3 className="t-display mt-7 text-[clamp(1.8rem,4vw,2.9rem)] text-ink">
              {m.name}
            </h3>
            <p className="mt-4 max-w-[52ch] text-[1.0625rem] leading-[1.65] text-ink-soft">
              {m.summary}
            </p>

            <div className="mt-9 grid gap-9 sm:grid-cols-2">
              <div>
                <p className="t-tech-sm text-ink-mute">Typical applications</p>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {m.uses.map((u) => (
                    <li key={u} className="flex items-baseline gap-3 text-[0.95rem] text-ink">
                      <span aria-hidden="true" className="h-px w-3 shrink-0 bg-kraft" />
                      {u}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="t-tech-sm text-ink-mute">Typical performance</p>
                <div className="mt-3 flex flex-col gap-2">
                  {ratingRows.map(([key, label]) => (
                    <RatingBar key={key} value={m.ratings[key]} label={label} />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-9 border-t border-line pt-6">
              <p className="t-tech-sm text-ink-mute">Print</p>
              <p className="mt-2 max-w-[56ch] text-[0.95rem] leading-6 text-ink-soft">
                {m.print}
              </p>
            </div>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <p className="t-tech-sm text-ink-mute">Good for</p>
                <ul className="mt-3 flex flex-col gap-2">
                  {m.strengths.map((s) => (
                    <li key={s} className="text-[0.95rem] leading-6 text-ink">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="t-tech-sm text-crease">Where it stops</p>
                <ul className="mt-3 flex flex-col gap-2">
                  {m.limits.map((l) => (
                    <li key={l} className="text-[0.95rem] leading-6 text-ink-soft">
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="t-tech-sm mt-12 max-w-[70ch] border-t border-line pt-6 text-ink-mute">
          Ratings are indicative and describe typical grades. Real performance
          depends on caliper, coating and treatment, and gets confirmed on a
          physical sample before anything is ordered.
        </p>
      </div>
    </section>
  );
}
