import { Button } from "@/components/ui/Button";
import { HeroDieline } from "@/components/drawings/HeroDieline";
import { WhatsAppIcon, ArrowRightIcon } from "@/components/icons";
import {
  siteConfig,
  getWhatsappLink,
  getMailtoLink,
  quoteBrief,
  whatsappOpener,
} from "@/lib/site-config";

// The cover sheet. The headline is set across a crease: the sentence folds
// where its meaning turns, and the word below the fold is the one the whole
// business rests on. The drawing behind it is a real net, cropped by the
// viewport because it is drawn larger than the sheet can hold.

const coverSpec: [string, string][] = [
  ["Substrate", "E-flute corrugated"],
  ["Structure", "One-piece corner lock"],
  ["Process", "Flexo, two colour"],
  ["Supply", "Flat-packed, scheduled"],
];

const disciplines = ["Structure", "Material", "Print", "Supply"];

export function Hero() {
  return (
    <section
      id="top"
      className="substrate relative isolate overflow-hidden bg-ink pt-10 text-paper sm:pt-14"
    >
      {/* The net, cropped by the viewport. It runs off the right trim and up
          under the title block, and the display type overlaps it — the
          tension between the drawing and the word is the composition. */}
      <div
        aria-hidden="true"
        className="plot-run pointer-events-none absolute top-0 right-0 h-[58%] w-[72%] text-kraft/30 sm:h-[64%] sm:w-[56%] lg:h-[58%] lg:w-[46%] lg:text-kraft/40 xl:w-[42%]"
      >
        <HeroDieline className="h-full w-full" />
      </div>

      <div className="relative mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
        <div
          className="enter flex items-baseline justify-between gap-6 text-paper/50"
          style={{ ["--enter-i" as string]: 0 }}
        >
          <p className="t-tech-sm">
            Farefold
            <span className="px-2 opacity-40">—</span>
            <span className="hidden sm:inline">
              Packaging design, structure, print &amp; supply
            </span>
            <span className="sm:hidden">Packaging design &amp; supply</span>
          </p>
          <p className="t-tech-sm shrink-0 text-kraft">Sheet 01 / 09</p>
        </div>
        <div className="rule-cut mt-3 text-paper/20" />

        {/* Category line — names the business at a visible scale, between
            the eyebrow and the headline, so it can't be scrolled past. Same
            t-display treatment as "Every box starts" / "Flat.", one size
            down, so it reads as part of that stack rather than a new one. */}
        <p
          className="enter t-display mt-7 text-[clamp(1.15rem,3.6vw,2.5rem)] text-kraft sm:mt-9"
          style={{ ["--enter-i" as string]: 0.5 }}
        >
          Restaurant &amp; food packaging
        </p>
      </div>

      {/* --- The statement ------------------------------------------------ */}
      <h1 className="relative mt-14 sm:mt-20 lg:mt-24">
        <span className="sr-only">
          Every box starts flat. Farefold designs, engineers, prints and
          supplies packaging for food businesses.
        </span>

        <span
          aria-hidden="true"
          className="enter t-display mx-auto block w-full max-w-[112rem] px-5 text-[clamp(2.6rem,8.6vw,8.5rem)] text-paper sm:px-8 lg:px-12"
          style={{ ["--enter-i" as string]: 1 }}
        >
          Every box starts
        </span>

        {/* The crease. A real fold line, labelled the way a dieline labels
            one, running the full width of the sheet through the sentence. */}
        <span
          aria-hidden="true"
          className="enter relative mt-3 mb-1 flex w-full items-center gap-4 px-5 sm:mt-5 sm:mb-2 sm:px-8 lg:px-12"
          style={{ ["--enter-i" as string]: 2 }}
        >
          <span className="rule-crease w-8 shrink-0 text-crease-line sm:w-12" />
          <span className="t-tech-sm shrink-0 text-crease-line">
            Crease · fold 180°
          </span>
          <span className="rule-crease flex-1 text-crease-line" />
        </span>

        <span
          aria-hidden="true"
          className="enter t-display mx-auto block w-full max-w-[112rem] px-5 text-[clamp(4.5rem,25vw,20rem)] text-kraft-pale sm:px-8 lg:px-12"
          style={{ ["--enter-i" as string]: 3 }}
        >
          Flat.
        </span>
      </h1>

      {/* --- Lower sheet: the argument, the actions, the spec ------------- */}
      <div className="relative mx-auto mt-14 w-full max-w-[112rem] px-5 pb-16 sm:px-8 sm:pb-20 lg:mt-20 lg:px-12">
        {/* Trim. The drawing above is cropped at the sheet edge; this is the
            edge, and everything below it is the annotation. */}
        <div aria-hidden="true" className="rule-bleed mb-12 text-paper/25" />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div
            className="enter lg:col-span-6 xl:col-span-5"
            style={{ ["--enter-i" as string]: 4 }}
          >
            <p className="max-w-[46ch] text-[1.0625rem] leading-[1.65] text-paper/70 sm:text-lg">
              Packaging begins as a drawing: one flat sheet, one cut line, and a
              set of folds chosen against the food that has to survive them.
              Farefold designs, engineers, sources, prints and supplies it.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                href={getMailtoLink("Packaging brief — quote request", quoteBrief)}
                variant="light"
                size="lg"
                icon={<ArrowRightIcon className="h-4 w-4" />}
              >
                Request a Quote
              </Button>
              <Button
                href={getWhatsappLink(whatsappOpener)}
                variant="whatsapp"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
                icon={<WhatsAppIcon className="h-4 w-4" />}
              >
                WhatsApp Farefold
              </Button>
            </div>

            {/* Contact fallback — plain, copyable text for anyone whose
                mailto: link doesn't open anything. Same real values already
                shown in Contact/Footer, just surfaced here too. Not a link:
                deliberately inert so it reads as "copy this," not a third
                CTA competing with the two buttons above it. */}
            <p className="t-tech-sm mt-4 text-paper/60">
              {siteConfig.whatsappDisplay} · {siteConfig.email}
            </p>

            {/* Product-category line — a sample of the 18-specimen library
                (Sheet 04), named in plain text so it's legible before a
                visitor ever reaches that section. Secondary to both the
                headline and "Restaurant & food packaging" above: same small
                mono register as the eyebrow, not the display type. */}
            <p className="t-tech-sm mt-5 text-paper/60">
              Packaging for: Pizza · Burger · Chicken · Bakery · Beverage ·
              Catering
            </p>
          </div>

          {/* The spec of the drawing above it — annotation, not decoration. */}
          <div
            className="enter lg:col-span-4 lg:col-start-9"
            style={{ ["--enter-i" as string]: 5 }}
          >
            <p className="t-tech-sm text-paper/50">Drawing shown</p>
            <dl className="mt-4">
              {coverSpec.map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-baseline justify-between gap-4 border-b border-paper/10 py-2.5 last:border-0"
                >
                  <dt className="t-tech-sm text-paper/50">{k}</dt>
                  <dd className="t-tech-sm text-right text-kraft">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Discipline bar — the four things this document specifies. */}
      <div className="relative border-t border-paper/15">
        <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
          <ul className="grid grid-cols-2 sm:grid-cols-4">
            {disciplines.map((d, i) => (
              <li
                key={d}
                className="flex items-baseline gap-3 border-b border-paper/10 py-5 sm:border-b-0 sm:border-l sm:border-paper/10 sm:py-6 sm:pl-5 sm:first:border-l-0 sm:first:pl-0"
              >
                <span className="t-tech-sm text-crease-line">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="t-display-tight text-base text-paper/85 sm:text-lg">
                  {d}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
