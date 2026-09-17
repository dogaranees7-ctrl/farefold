import { SheetHead } from "@/components/spec/Sheet";
import { Reveal } from "@/components/Reveal";
import { touchpoints } from "@/lib/site-config";

// SHEET 07 — Brand.
//
// A brand system expanding across physical touchpoints, threaded on one
// continuous line. Each vignette draws the same mark at a different scale and
// in a different context, ending where it actually ends: the inside of an
// opened box, which is the only view your customer ever gets.

const vig = {
  className: "dl",
  stroke: "currentColor",
};

function V({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="h-16 w-16">
      <g {...vig}>{children}</g>
    </svg>
  );
}

const vignettes = [
  // 01 Logo — the mark, drawn and dimensioned.
  <V key="1">
    <path d="M20 18h16l8 8v20H20z" />
    <path className="dl-crease" d="M36 18v8h8" />
    <path d="M25 36h14M25 41h8" strokeWidth="1" />
    <path className="dl-dim" d="M20 52h24M20 50v4M44 50v4" />
  </V>,
  // 02 Colour — specified as ink, stacked.
  <V key="2">
    <rect x="14" y="16" width="36" height="9" fill="var(--color-ink)" stroke="none" />
    <rect x="14" y="28" width="36" height="9" fill="var(--color-kraft)" stroke="none" />
    <rect
      x="14"
      y="40"
      width="36"
      height="9"
      fill="var(--color-crease-line)"
      stroke="none"
    />
    <path className="dl-dim" d="M52 16v33" />
  </V>,
  // 03 Pattern — the mark, repeated to a tile.
  <V key="3">
    <path d="M14 14h36v36H14z" strokeWidth="1" opacity="0.5" />
    <path
      d="M20 22h6l2 2v6h-8zM32 22h6l2 2v6h-8zM20 34h6l2 2v6h-8zM32 34h6l2 2v6h-8z"
      strokeWidth="1"
    />
  </V>,
  // 04 Packaging — applied to the panel that faces out.
  <V key="4">
    <path d="M12 20h40v28H12z" />
    <path className="dl-crease" d="M12 26h40" />
    <path d="M20 32h10l3 3v7H20z" strokeWidth="1" />
    <path className="dl-dim" d="M12 54h40" />
  </V>,
  // 05 Table — top view; the pack as furniture, briefly.
  <V key="5">
    <path d="M10 44h44" strokeWidth="1" opacity="0.5" />
    <path d="M14 22h22v20H14z" />
    <circle cx="46" cy="28" r="6" />
    <path d="M40 42h12" strokeWidth="1" opacity="0.6" />
    <path d="M20 30h8l2 2v6h-10z" strokeWidth="1" />
  </V>,
  // 06 Delivery — sealed, stacked, carried.
  <V key="6">
    <path d="M18 22h28v30H18z" />
    <path className="dl-crease" d="M18 28h28" />
    <path d="M25 22v-4a7 7 0 0 1 14 0v4" strokeWidth="1" />
    <path d="M26 36h10l2 2v5H26z" strokeWidth="1" />
  </V>,
  // 07 Customer — the opened box, seen from above. The only view they get.
  <V key="7">
    <path d="M22 22h20v20H22z" />
    <path d="M22 22 12 12h40L42 22M22 42 12 52h40L42 42" strokeWidth="1" />
    <path className="dl-crease" d="M22 22v20M42 22v20" />
    <circle cx="32" cy="32" r="6" strokeWidth="1" />
  </V>,
];

export function BrandSystem() {
  return (
    <section
      id="brand"
      className="substrate scroll-mt-24 bg-brand py-24 text-paper sm:py-32 lg:py-40"
    >
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
        <SheetHead
          sheet="07"
          discipline="Brand"
          tone="brand"
          headline={
            <>
              Your brand doesn&apos;t
              <br />
              stop at the logo.
            </>
          }
          intro={
            <p>
              Most food brands are designed on a screen and then meet the world
              as a printed box in somebody&apos;s hands, in a stairwell, in the
              rain. Seven places an identity has to keep working — and only the
              last one counts.
            </p>
          }
          meta={[
            ["Touchpoints", "7"],
            ["Owned by", "You"],
          ]}
        />

        <ol className="mt-16 grid gap-y-10 sm:mt-24 sm:grid-cols-2 lg:grid-cols-7 lg:gap-y-0">
          {touchpoints.map((t, i) => (
            <li key={t.no} className="relative pl-10 lg:px-3 lg:pl-3">
              {/* The thread. Vertical while stacked, horizontal once the
                  system spreads across the row. */}
              <span
                aria-hidden="true"
                className={`absolute top-0 left-[7px] h-full w-px bg-brand-pale/25 lg:top-8 lg:left-0 lg:h-px lg:w-full ${
                  i === 0 ? "lg:left-1/2 lg:w-1/2" : ""
                } ${i === touchpoints.length - 1 ? "lg:w-1/2" : ""}`}
              />
              <span
                aria-hidden="true"
                className="absolute top-7 left-1 h-2.5 w-2.5 rounded-full bg-kraft lg:top-[27px] lg:left-1/2 lg:-translate-x-1/2"
              />

              <Reveal delay={i * 60}>
                <div className="relative lg:pt-16">
                  <p className="t-tech-sm text-kraft">{t.no}</p>
                  <div className="mt-3 text-brand-pale/80">{vignettes[i]}</div>
                  <h3 className="t-display-tight mt-4 text-xl text-paper">{t.label}</h3>
                  <p className="mt-2 max-w-[34ch] text-[0.9rem] leading-6 text-brand-pale/70">
                    {t.line}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal>
          <p className="t-editorial mt-16 max-w-[26ch] text-[1.9rem] leading-[1.15] text-paper sm:text-[2.6rem] lg:mt-20">
            Packaging is where your brand meets the real world — usually while
            it&apos;s still warm.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
