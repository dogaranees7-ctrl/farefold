import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ArrowRightIcon } from "@/components/icons";

// Two commercial journeys, one page. The two locked Home colours swap sides
// — Standard sits on the light mint field, Custom inverts to the dark ink
// field — so the split reads instantly without adding a third hue neither
// is supposed to have.

type Path = {
  word: string;
  tagline: string;
  points: string[];
  href: string;
  cta: string;
  invert?: boolean;
};

const paths: Path[] = [
  {
    word: "Standard",
    tagline: "Ready-to-order packaging",
    points: [
      "Fixed formats, browsable today",
      "Boxes, cups, containers, bags, trays and more",
      "Order once you know what fits",
    ],
    href: "/products",
    cta: "Shop Products",
  },
  {
    word: "Custom",
    tagline: "Packaging built around your product",
    points: [
      "Structure and material chosen with you",
      "Your brand applied to the panels that get seen",
      "A quoted, approved spec — not an instant checkout",
    ],
    href: "/custom-packaging",
    cta: "Start Custom Packaging",
    invert: true,
  },
];

export function StandardVsCustom() {
  return (
    <section className="bg-page-bg py-20 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <p className="t-tech-sm text-page-ink-mute">&ldquo;Standard or custom?&rdquo;</p>
          <div className="rule-cut mt-3 text-page-border-strong" />
        </Reveal>

        <div className="mt-10 grid gap-px overflow-hidden border border-page-border bg-page-border sm:mt-14 sm:grid-cols-2">
          {paths.map((path, i) => (
            <Reveal key={path.word} delay={i * 100}>
              <div
                className={`flex h-full flex-col gap-6 p-8 sm:p-10 lg:p-14 ${
                  path.invert ? "bg-page-accent text-page-accent-ink" : "bg-page-bg text-page-ink"
                }`}
              >
                <div>
                  <p
                    className={`t-tech-sm ${
                      path.invert ? "text-page-accent-ink/60" : "text-page-ink/55"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")} · {path.tagline}
                  </p>
                  <h2 className="t-display mt-4 text-[clamp(2.4rem,7vw,5rem)]">{path.word}</h2>
                </div>

                <ul className="flex flex-col gap-2.5">
                  {path.points.map((point) => (
                    <li
                      key={point}
                      className={`flex items-baseline gap-3 text-[0.95rem] leading-6 ${
                        path.invert ? "text-page-accent-ink/85" : "text-page-ink/80"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`h-px w-3 shrink-0 translate-y-[-4px] ${
                          path.invert ? "bg-page-accent-ink/50" : "bg-page-ink/40"
                        }`}
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                <Link
                  href={path.href}
                  className={`group mt-auto inline-flex w-fit items-center gap-3 border px-5 py-3.5 transition-colors duration-300 ${
                    path.invert
                      ? "border-page-accent-ink text-page-accent-ink hover:bg-page-accent-ink hover:text-page-accent"
                      : "border-page-ink text-page-ink hover:bg-page-ink hover:text-page-accent-ink"
                  }`}
                >
                  <span className="t-tech-sm">{path.cta}</span>
                  <ArrowRightIcon className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
