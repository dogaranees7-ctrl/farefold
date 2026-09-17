import { SheetHead } from "@/components/spec/Sheet";
import { Reveal } from "@/components/Reveal";
import { segments } from "@/lib/site-config";

// SHEET 05 — Industries.
//
// A typographic map rather than a set of cards. Sixteen segments, each paired
// with what its food actually demands of packaging — which is the only
// interesting thing about a segment list.
//
// The row type is set on Archivo's width axis and widens on hover. That is
// the one place on this site where a micro-interaction is literal: the
// packaging problem expands as you look at it.

export function Industries() {
  return (
    <section
      id="industries"
      className="substrate scroll-mt-24 bg-ink py-24 text-paper sm:py-32 lg:py-40"
    >
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
        <SheetHead
          sheet="05"
          discipline="Industries"
          tone="ink"
          width="wide"
          headline={
            <>
              One menu.
              <br />
              <span className="text-kraft">A hundred</span> packaging problems.
            </>
          }
          intro={
            <p>
              Farefold is not a pizza-box company. A bakery, a shawarma counter
              and a catering kitchen each hand packaging a different job, and
              the job is what we design against. Sixteen segments, and what
              each one actually asks of the pack.
            </p>
          }
          meta={[
            ["Segments", "16"],
            ["Read as", "Problem, not category"],
          ]}
        />

        <dl className="mt-14 sm:mt-20">
          <div aria-hidden="true" className="rule-cut text-paper/25" />
          {segments.map((s, i) => (
            <Reveal key={s.label} delay={i < 4 ? i * 60 : 0}>
              <div className="group grid grid-cols-1 items-baseline gap-x-8 gap-y-2 py-5 lg:grid-cols-12 lg:py-6">
                <dt className="flex items-baseline gap-4 lg:col-span-6">
                  <span className="t-tech-sm shrink-0 text-crease-line">{s.no}</span>
                  <span className="seg-name text-[1.5rem] leading-[1.05] text-paper group-hover:text-kraft-pale sm:text-[2rem] lg:text-[2.4rem]">
                    {s.label}
                  </span>
                </dt>
                <dd className="lg:col-span-6 lg:pl-4">
                  <ul className="flex flex-wrap gap-x-5 gap-y-1.5">
                    {s.needs.map((need) => (
                      <li
                        key={need}
                        className="t-tech-sm flex items-center gap-2 text-paper/50 transition-colors duration-500 group-hover:text-paper/80"
                      >
                        <span
                          aria-hidden="true"
                          className="h-px w-3 bg-kraft/60 transition-[width] duration-500 group-hover:w-5"
                        />
                        {need}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div aria-hidden="true" className="rule-bleed text-paper/20" />
            </Reveal>
          ))}
        </dl>

        <Reveal>
          <p className="mt-10 max-w-[40ch] text-paper/55">
            <span className="t-editorial text-[1.6rem] text-paper sm:text-[2rem]">
              If your menu is on that list, so is the problem.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
