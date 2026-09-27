import Link from "next/link";
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

// The cover sheet, painted entirely from the Home page-world's semantic
// --page-* tokens (see components/ui/PageWorld.tsx and its "home" entry in
// lib/design/page-worlds.ts) — never a hardcoded hex.
//
// Hierarchy (Step 7A): positioning and the two commercial actions come
// first, inside the first viewport, ahead of anything else — "Every box
// starts / Flat." is real brand copy but now sits below that block as a
// supporting device, sized down from its previous viewport-filling scale
// rather than removed. The dialogue opener ("What are you packing?") is
// the same question the Matcher section further down actually answers.

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
      className="substrate relative isolate overflow-hidden bg-page-bg pt-10 text-page-ink sm:pt-14"
    >
      {/* The net, cropped by the viewport — decorative context for the
          brand block further down, not competing with the commercial
          block above it. */}
      <div
        aria-hidden="true"
        className="plot-run pointer-events-none absolute top-0 right-0 h-[46%] w-[62%] text-page-ink/15 sm:h-[52%] sm:w-[48%] lg:h-[50%] lg:w-[38%] lg:text-page-ink/20"
      >
        <HeroDieline className="h-full w-full" />
      </div>

      {/* --- Commercial block: positioning, statement, the two paths ----- */}
      <div className="relative mx-auto w-full max-w-[112rem] px-5 pb-14 sm:px-8 sm:pb-16 lg:px-12">
        <div
          className="enter flex items-baseline justify-between gap-6 text-page-ink/60"
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
        </div>
        <div className="rule-cut mt-3 text-page-ink/20" />

        {/* The dialogue opener — an interface prompt, not a slogan. */}
        <p
          className="enter t-tech-sm mt-6 inline-flex items-center gap-2.5 border border-page-ink/25 px-3 py-1.5 text-page-ink sm:mt-8"
          style={{ ["--enter-i" as string]: 0.35 }}
        >
          <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-page-ink" />
          &ldquo;What are you packing?&rdquo;
        </p>

        {/* The actual H1 — the single clearest sentence on the page: who
            this is for. Everything else in the hero supports this line. */}
        <h1
          className="enter t-display mt-5 max-w-[20ch] text-[clamp(2.2rem,6.4vw,4.2rem)] text-page-ink sm:mt-6"
          style={{ ["--enter-i" as string]: 0.6 }}
        >
          Restaurant &amp; food packaging
        </h1>

        <p
          className="enter mt-5 max-w-[46ch] text-[1.05rem] leading-[1.6] text-page-ink/75 sm:mt-6 sm:text-lg"
          style={{ ["--enter-i" as string]: 0.8 }}
        >
          Standard packaging you can order ready-made, and custom packaging built around your
          product. Farefold designs, engineers, sources, prints and supplies both.
        </p>

        <div
          className="enter mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row"
          style={{ ["--enter-i" as string]: 1 }}
        >
          <Button
            href="/products"
            variant="primary"
            size="lg"
            icon={<ArrowRightIcon className="h-4 w-4" />}
          >
            Shop Packaging
          </Button>
          <Button
            href="/custom-packaging"
            variant="outline"
            size="lg"
            icon={<ArrowRightIcon className="h-4 w-4" />}
          >
            Custom Packaging
          </Button>
        </div>

        <p
          className="enter t-tech-sm mt-5 text-page-ink/60"
          style={{ ["--enter-i" as string]: 1.1 }}
        >
          Prefer to talk first?{" "}
          <a
            href={getWhatsappLink(whatsappOpener)}
            target="_blank"
            rel="noopener noreferrer"
            className="link-rule inline-flex items-center gap-1.5 text-page-ink"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" aria-hidden="true" />
            WhatsApp
          </a>{" "}
          or{" "}
          <a
            href={getMailtoLink("Packaging brief — quote request", quoteBrief)}
            className="link-rule text-page-ink"
          >
            email a brief
          </a>
          . {siteConfig.whatsappDisplay} · {siteConfig.email}
        </p>
      </div>

      {/* --- Brand device: "Every box starts flat." — supporting language,
          not the dominant message. Sized well below its previous scale. */}
      <div className="relative border-t border-page-ink/15">
        <div className="mx-auto w-full max-w-[112rem] px-5 pt-12 sm:px-8 sm:pt-16 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <span className="sr-only">Every box starts flat.</span>
              <p
                aria-hidden="true"
                className="t-display text-[clamp(1.8rem,5.2vw,3.6rem)] text-page-ink/85"
              >
                Every box starts
              </p>
              <div
                aria-hidden="true"
                className="relative mt-2 mb-1 flex w-full items-center gap-4"
              >
                <span className="rule-crease w-8 shrink-0 text-page-ink/50 sm:w-12" />
                <span className="t-tech-sm shrink-0 text-page-ink/50">Crease · fold 180°</span>
                <span className="rule-crease flex-1 text-page-ink/50" />
              </div>
              <p
                aria-hidden="true"
                className="t-display text-[clamp(2.6rem,10vw,6.5rem)] text-page-ink/40"
              >
                Flat.
              </p>

              {/* Product-category sample line — real taxonomy, plain text. */}
              <p className="t-tech-sm mt-6 text-page-ink/60">
                Packaging for:{" "}
                <Link href="/foods/pizza-food" className="link-rule text-page-ink">
                  Pizza
                </Link>{" "}
                ·{" "}
                <Link href="/foods/burger-food" className="link-rule text-page-ink">
                  Burger
                </Link>{" "}
                ·{" "}
                <Link href="/foods/bakery-food" className="link-rule text-page-ink">
                  Bakery
                </Link>{" "}
                ·{" "}
                <Link href="/foods/beverages-food" className="link-rule text-page-ink">
                  Beverage
                </Link>{" "}
                — and more in{" "}
                <Link href="/foods" className="link-rule text-page-ink">
                  Foods
                </Link>
                .
              </p>
            </div>

            {/* The spec of the drawing above — annotation, not decoration. */}
            <div className="lg:col-span-4">
              <p className="t-tech-sm text-page-ink/55">Drawing shown</p>
              <dl className="mt-4">
                {coverSpec.map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-baseline justify-between gap-4 border-b border-page-ink/10 py-2.5 last:border-0"
                  >
                    <dt className="t-tech-sm text-page-ink/55">{k}</dt>
                    <dd className="t-tech-sm text-right text-page-ink">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Discipline bar — the four things this document specifies. */}
      <div className="relative mt-10 border-t border-page-ink/15 sm:mt-14">
        <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
          <ul className="grid grid-cols-2 sm:grid-cols-4">
            {disciplines.map((d, i) => (
              <li
                key={d}
                className="flex items-baseline gap-3 border-b border-page-ink/10 py-5 sm:border-b-0 sm:border-l sm:border-page-ink/10 sm:py-6 sm:pl-5 sm:first:border-l-0 sm:first:pl-0"
              >
                <span className="t-tech-sm text-page-ink/55">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="t-display-tight text-base text-page-ink sm:text-lg">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
