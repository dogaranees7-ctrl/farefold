import { SheetHead } from "@/components/spec/Sheet";
import { Reveal } from "@/components/Reveal";
import { processSteps } from "@/lib/site-config";

// SHEET 08 — Production.
//
// Drawn as a closed path, because that is what it is: most of what Farefold
// supplies is recurring, so the eighth stage is physically connected back to
// the first. "Repeat" is not a word at the end of a row here — it is the
// left-hand bend that returns the line to where it started.

const LOOP = "M200 10H800A200 200 0 0 1 800 410H200A200 200 0 0 1 200 10Z";

// Stations, clockwise from the top-left of the straight.
const stations = [
  { x: 300, y: 10, anchor: "middle", nY: -44, lY: -18 },
  { x: 500, y: 10, anchor: "middle", nY: -44, lY: -18 },
  { x: 700, y: 10, anchor: "middle", nY: -44, lY: -18 },
  { x: 1000, y: 210, anchor: "start", dx: 26, nY: -8, lY: 18 },
  { x: 700, y: 410, anchor: "middle", nY: 34, lY: 60 },
  { x: 500, y: 410, anchor: "middle", nY: 34, lY: 60 },
  { x: 300, y: 410, anchor: "middle", nY: 34, lY: 60 },
  { x: 0, y: 210, anchor: "end", dx: -26, nY: -8, lY: 18 },
] as const;

export function Process() {
  return (
    <section
      id="process"
      className="substrate scroll-mt-24 bg-ink py-24 text-paper sm:py-32 lg:py-40"
    >
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
        <SheetHead
          sheet="08"
          discipline="Production"
          tone="ink"
          headline={
            <>
              It ends where
              <br />
              it starts.
            </>
          }
          intro={
            <p>
              Eight stages, and the eighth one is the first one. Most of what we
              supply repeats, so the end of a project is the start of the next
              order — running off a spec that is already approved and a drawing
              nobody has to redraw.
            </p>
          }
          meta={[
            ["Stages", "8"],
            ["Closes at", "01"],
          ]}
        />

        {/* Desktop: the closed loop. */}
        <Reveal mode="plot" className="mt-20 hidden lg:block">
          <svg
            viewBox="-190 -90 1380 620"
            fill="none"
            className="w-full"
            role="img"
            aria-label="The eight production stages drawn as a closed loop: consult, design, source, print, sample, approve, supply, repeat — and repeat returns to consult."
          >
            <path d={LOOP} stroke="currentColor" strokeWidth="1" className="text-paper/25" />
            <path
              d={LOOP}
              className="loop-travel text-kraft"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Direction of travel, marked on the return bend. */}
            <path
              d="M-14 250l14 22 14-22"
              stroke="var(--color-crease-line)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <text
              x="-40"
              y="300"
              textAnchor="end"
              className="font-mono"
              fill="var(--color-crease-line)"
              fontSize="13"
              letterSpacing="2"
            >
              RETURNS TO 01
            </text>

            {stations.map((st, i) => {
              const step = processSteps[i];
              const dx = "dx" in st ? st.dx : 0;
              return (
                <g key={step.no}>
                  <circle cx={st.x} cy={st.y} r="7" fill="var(--color-ink)" />
                  <circle
                    cx={st.x}
                    cy={st.y}
                    r="7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-kraft"
                  />
                  <text
                    x={st.x + dx}
                    y={st.y + st.nY}
                    textAnchor={st.anchor}
                    className="font-mono"
                    fill="var(--color-crease-line)"
                    fontSize="13"
                    letterSpacing="2.4"
                  >
                    {step.no}
                  </text>
                  <text
                    x={st.x + dx}
                    y={st.y + st.lY}
                    textAnchor={st.anchor}
                    fill="currentColor"
                    className="fill-paper"
                    fontSize="27"
                    fontFamily="var(--font-display)"
                    fontWeight="700"
                    letterSpacing="-0.4"
                  >
                    {step.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </Reveal>

        {/* Mobile and tablet: the same loop as a sequence that bends back. */}
        <ol className="mt-14 lg:hidden">
          {processSteps.map((step, i) => (
            <li key={step.no} className="relative border-l border-dashed border-paper/25 pb-8 pl-8 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full bg-kraft"
              />
              <Reveal delay={i < 4 ? i * 60 : 0}>
                <p className="t-tech-sm text-crease-line">{step.no}</p>
                <h3 className="t-display-tight mt-1.5 text-xl text-paper">{step.label}</h3>
                <p className="mt-1.5 max-w-[42ch] text-[0.95rem] leading-6 text-paper/60">
                  {step.blurb}
                </p>
              </Reveal>
            </li>
          ))}
          <li className="relative pl-8">
            <svg
              viewBox="0 0 40 60"
              fill="none"
              aria-hidden="true"
              className="absolute -left-[9px] top-0 h-14 w-10 text-crease-line"
            >
              <path
                d="M9 0v34a12 12 0 0 0 12 12h12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
              <path
                d="M29 42l5 4-5 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="t-tech-sm pt-12 pl-8 text-crease-line">Returns to 01</p>
          </li>
        </ol>

        {/* Notes, keyed to the station numbers on the drawing. */}
        <div className="mt-16 hidden border-t border-paper/20 pt-8 lg:block">
          <ul className="grid grid-cols-4 gap-x-8 gap-y-7">
            {processSteps.map((step) => (
              <li key={step.no} className="flex gap-3">
                <span className="t-tech-sm shrink-0 text-crease-line">{step.no}</span>
                <span className="text-[0.9rem] leading-6 text-paper/60">{step.blurb}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
