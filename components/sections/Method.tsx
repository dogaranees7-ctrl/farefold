import { SheetHead } from "@/components/spec/Sheet";
import { Reveal } from "@/components/Reveal";
import { questions } from "@/lib/site-config";

// SHEET 02 — Method.
//
// The eight questions that get answered before a line is drawn. Rows are
// separated by crease rules rather than borders, so the list reads as one
// sheet of folds: one decision per panel. Each row steps further right as
// the specification narrows.

export function Method() {
  return (
    <section
      id="thinking"
      className="substrate scroll-mt-24 bg-paper py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
        <SheetHead
          sheet="02"
          discipline="Method"
          headline={
            <>
              Packaging isn&apos;t decoration.
              <br />
              <span className="text-crease">It&apos;s a specification.</span>
            </>
          }
          intro={
            <p>
              Eight questions get answered before anything is drawn. Each one
              closes off options, and each one has a physical consequence
              further down the line. There is no secret tenth step — this is
              the method, and it is the reason the packaging works when it
              arrives.
            </p>
          }
          meta={[
            ["Inputs", "8"],
            ["Output", "One frozen spec"],
          ]}
        />

        <ol className="mt-16 sm:mt-24">
          {questions.map((q, i) => (
            <li key={q.ask}>
              <div className="rule-crease text-crease-line/45" />
              <Reveal delay={i < 3 ? i * 70 : 0}>
                <div
                  className="group grid grid-cols-1 gap-x-8 gap-y-3 py-7 transition-[padding] duration-500 lg:grid-cols-12 lg:py-8"
                  style={{ ["--step" as string]: `${i * 0.85}rem` }}
                >
                  <div className="flex items-baseline gap-4 lg:col-span-6 lg:pl-[var(--step)]">
                    <span className="t-tech-sm shrink-0 pt-1 text-ink-mute">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="t-display-tight max-w-[20ch] text-[1.6rem] text-ink sm:text-[2.1rem] lg:text-[2.4rem]">
                      {q.ask}
                    </h3>
                  </div>

                  <div className="lg:col-span-2 lg:pt-2">
                    <p className="t-tech-sm text-ink-mute">Determines</p>
                    <p className="t-tech mt-1 text-crease">{q.determines}</p>
                  </div>

                  <p className="max-w-[46ch] text-[0.95rem] leading-[1.7] text-ink-soft lg:col-span-4 lg:pt-1.5">
                    {q.detail}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
          <li aria-hidden="true">
            <div className="rule-cut text-ink/25" />
          </li>
        </ol>

        <Reveal>
          <p className="t-tech mt-8 text-ink-mute">
            Answers in
            <span className="px-2 text-crease">→</span>
            structure out
          </p>
        </Reveal>
      </div>
    </section>
  );
}
