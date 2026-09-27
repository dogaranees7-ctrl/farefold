"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ArrowRightIcon } from "@/components/icons";
import { businessTypes, foodTypes, packagingProblems, getTopLevel } from "@/lib/data";

// The Packaging Matcher entry point — a structured discovery tool, not a
// recommendation engine. lib/data/relationships.ts (`relations`) is
// intentionally empty today, so this component never claims to compute a
// match: the final step honestly says so and hands the visitor real links
// into the taxonomy pages for whatever they picked instead. Every label
// here is a real slug from lib/data/ — nothing is invented, and nothing
// here is a food-safety or suitability claim.

const foodGroups = getTopLevel(foodTypes);
const businessGroups = getTopLevel(businessTypes);
const problemGroups = getTopLevel(packagingProblems);

// Generic journey categories — UI framing, not a data-backed taxonomy file.
// Kept deliberately small and plainly descriptive, matching the language
// already used elsewhere on the site (see lib/site-config.ts `stages`).
const journeys = [
  "Counter / dine-in",
  "Short local delivery",
  "Longer delivery / rider",
  "Shipped / courier",
];

type Context = { kind: "food" | "business"; slug: string; name: string };

const steps = ["What are you packing?", "How does it travel?", "What are you trying to solve?"];

function ChipButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`t-tech-sm border px-3.5 py-2.5 text-left transition-colors duration-200 ${
        active
          ? "border-page-ink bg-page-ink text-page-accent-ink"
          : "border-page-border text-page-ink-soft hover:border-page-ink hover:text-page-ink"
      }`}
    >
      {label}
    </button>
  );
}

export function Matcher() {
  const [context, setContext] = useState<Context | null>(null);
  const [journey, setJourney] = useState<string | null>(null);
  const [problem, setProblem] = useState<{ slug: string; name: string } | null>(null);

  const step = !context ? 0 : !journey ? 1 : !problem ? 2 : 3;

  return (
    <section className="border-t border-page-border bg-page-bg py-20 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <p className="t-tech-sm text-page-ink-mute">Packaging Matcher</p>
          <h2 className="t-display-tight mt-4 max-w-[26ch] text-[clamp(1.9rem,5vw,3.2rem)] text-page-ink">
            Let&apos;s find the structure.
          </h2>
          <p className="mt-4 max-w-[58ch] text-[0.95rem] leading-6 text-page-ink-soft">
            A structured way into the taxonomy — not a recommendation engine yet. Answer three
            questions and we&apos;ll take you straight to the real pages for what you picked.
          </p>
        </Reveal>

        {/* Step indicator */}
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 sm:mt-14">
          {steps.map((label, i) => (
            <p
              key={label}
              className={`t-tech-sm flex items-center gap-2 ${
                i === step ? "text-page-ink" : i < step ? "text-page-ink-mute" : "text-page-ink-mute/50"
              }`}
            >
              <span
                aria-hidden="true"
                className={`flex h-5 w-5 items-center justify-center border text-[0.65rem] ${
                  i <= step ? "border-page-ink" : "border-page-border"
                }`}
              >
                {i < step ? "✓" : i + 1}
              </span>
              {label}
            </p>
          ))}
        </div>

        <div className="mt-8 border border-page-border p-6 sm:mt-10 sm:p-8 lg:p-10">
          {step === 0 && (
            <div>
              <p className="t-tech-sm text-page-ink-mute">&ldquo;What are you packing?&rdquo;</p>
              <p className="mt-2 text-[0.85rem] text-page-ink-soft">
                Pick a food, or the kind of business you run.
              </p>
              <div className="mt-6">
                <p className="t-tech-sm text-page-ink-mute">Food</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {foodGroups.map((food) => (
                    <ChipButton
                      key={food.slug}
                      label={food.name}
                      active={context?.slug === food.slug && context.kind === "food"}
                      onClick={() => setContext({ kind: "food", slug: food.slug, name: food.name })}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <p className="t-tech-sm text-page-ink-mute">Business</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {businessGroups.map((biz) => (
                    <ChipButton
                      key={biz.slug}
                      label={biz.name}
                      active={context?.slug === biz.slug && context.kind === "business"}
                      onClick={() =>
                        setContext({ kind: "business", slug: biz.slug, name: biz.name })
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 1 && context && (
            <div>
              <p className="t-tech-sm text-page-ink-mute">&ldquo;How does it travel?&rdquo;</p>
              <p className="mt-2 text-[0.85rem] text-page-ink-soft">For {context.name.toLowerCase()}.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {journeys.map((j) => (
                  <ChipButton key={j} label={j} active={journey === j} onClick={() => setJourney(j)} />
                ))}
              </div>
              <button
                type="button"
                onClick={() => setContext(null)}
                className="link-rule t-tech-sm mt-6 text-page-ink-mute"
              >
                ← Back
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <p className="t-tech-sm text-page-ink-mute">
                &ldquo;What are you trying to solve?&rdquo;
              </p>
              <p className="mt-2 text-[0.85rem] text-page-ink-soft">
                The problem the packaging has to answer.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {problemGroups.map((p) => (
                  <ChipButton
                    key={p.slug}
                    label={p.name}
                    active={problem?.slug === p.slug}
                    onClick={() => setProblem({ slug: p.slug, name: p.name })}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => setJourney(null)}
                className="link-rule t-tech-sm mt-6 text-page-ink-mute"
              >
                ← Back
              </button>
            </div>
          )}

          {step === 3 && context && problem && (
            <div>
              <p className="t-tech-sm text-page-accent">&ldquo;Show me the packaging.&rdquo;</p>
              <p className="mt-3 max-w-[54ch] text-[0.9rem] leading-6 text-page-ink-soft">
                Honestly: we don&apos;t have automatic matching wired up yet — {context.name},{" "}
                {journey?.toLowerCase()}, and {problem.name.toLowerCase()} aren&apos;t connected
                to a recommendation behind the scenes. What we do have is the real taxonomy for
                each one, linked below.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href={context.kind === "food" ? `/foods/${context.slug}` : `/businesses/${context.slug}`}
                  className="group inline-flex items-center gap-2.5 border border-page-ink px-4 py-3 text-page-ink transition-colors duration-300 hover:bg-page-ink hover:text-page-accent-ink"
                >
                  <span className="t-tech-sm">{context.name}</span>
                  <ArrowRightIcon className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href={`/solutions/${problem.slug}`}
                  className="group inline-flex items-center gap-2.5 border border-page-ink px-4 py-3 text-page-ink transition-colors duration-300 hover:bg-page-ink hover:text-page-accent-ink"
                >
                  <span className="t-tech-sm">{problem.name}</span>
                  <ArrowRightIcon className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/products"
                  className="group inline-flex items-center gap-2.5 border border-page-border px-4 py-3 text-page-ink-soft transition-colors duration-300 hover:border-page-ink hover:text-page-ink"
                >
                  <span className="t-tech-sm">Browse all Products</span>
                  <ArrowRightIcon className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              <button
                type="button"
                onClick={() => {
                  setContext(null);
                  setJourney(null);
                  setProblem(null);
                }}
                className="link-rule t-tech-sm mt-8 text-page-ink-mute"
              >
                Start over
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
