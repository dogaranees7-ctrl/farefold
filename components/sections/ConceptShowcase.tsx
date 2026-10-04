import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ArrowRightIcon } from "@/components/icons";
import { getWhatsappLink } from "@/lib/site-config";

const concepts = [
  {
    no: "01",
    label: "THE TAKEAWAY KIT",
    title: "More than a pizza box.",
    detail: "Keep the pizza level, give fries and sauces their own compartments, and turn the walk from counter to table into a branded moment.",
    className: "bg-page-bg text-page-ink",
    kind: "pizza",
    tags: ["Separate the sides", "Keep sauces upright", "Built for sharing"],
  },
  {
    no: "02",
    label: "THE COFFEE RUN",
    title: "Carry the whole ritual.",
    detail: "Separate cups, protect lids and give a biscuit or add-on its own place — designed for a steadier carry and a more thoughtful coffee run.",
    className: "bg-page-accent text-page-accent-ink",
    kind: "coffee",
    tags: ["Secure cup positions", "Room for a treat", "One-hand carry"],
  },
  {
    no: "03",
    label: "THE MEAL SYSTEM",
    title: "Every part has a place.",
    detail: "Give sauces, toppings and the main meal defined spaces to help reduce spills, keep components organised and make opening the box feel intentional.",
    className: "bg-page-surface text-page-ink",
    kind: "meal",
    tags: ["Keep components apart", "Reduce messy handoffs", "Designed to open well"],
  },
];

function PackageSketch({ kind }: { kind: string }) {
  if (kind === "pizza") {
    return (
      <svg viewBox="0 0 320 220" role="img" aria-label="Illustration of a pizza package concept with separate side compartments" className="h-full w-full">
        <g stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
          <path d="M26 72 174 24 294 72 145 123Z" fill="#c08a4a" />
          <path d="M26 72v90l119 42v-81Z" fill="#e9dabe" />
          <path d="M145 123v81l149-51V72Z" fill="#c08a4a" />
          <path d="M40 82 174 39 278 76 145 115Z" fill="#f7f4ec" />
          <path d="M49 85 174 47 268 79 145 108Z" fill="#c8552e" />
          <path d="M58 86 174 51 259 80 145 103Z" fill="#e9dabe" />
          <path d="M76 88 174 58 240 81 145 99Z" fill="#c08a4a" />
          <path d="M38 128 92 147 92 180 38 161Z" fill="#f7f4ec" />
          <path d="M98 149 140 164 140 194 98 179Z" fill="#f7f4ec" />
          <path d="M38 128 92 147 140 164 86 145Z" fill="#e9dabe" />
          <path d="M156 139 279 97" strokeDasharray="4 5" fill="none" />
          <path d="M157 154 279 112" strokeDasharray="4 5" fill="none" />
          <path d="M157 170 279 128" strokeDasharray="4 5" fill="none" />
        </g>
        <g fill="currentColor" fontSize="9" fontFamily="monospace" letterSpacing="1">
          <text x="168" y="92" textAnchor="middle">FAREFOLD</text>
          <text x="53" y="153" transform="rotate(20 53 153)">SIDES</text>
          <text x="110" y="175" transform="rotate(20 110 175)">SAUCE</text>
        </g>
      </svg>
    );
  }
  if (kind === "coffee") {
    return (
      <svg viewBox="0 0 320 220" role="img" aria-label="Illustration of a coffee carrier concept with cups and a treat compartment" className="h-full w-full">
        <g stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
          <path d="M58 70 160 35 264 70 160 106Z" fill="#c08a4a" />
          <path d="M58 70v105l102 37V106Z" fill="#e9dabe" />
          <path d="M160 106v106l104-37V70Z" fill="#c08a4a" />
          <path d="M94 64 160 42 229 65 160 89Z" fill="#f7f4ec" />
          <path d="M94 64v-23l66-22 69 23v23l-69 24Z" fill="#c08a4a" />
          <path d="M105 53 160 35 217 54 160 73Z" fill="#e9dabe" />
          <path d="M108 79h42v55l-42-15Z" fill="#f7f4ec" />
          <path d="M167 79h42v55l-42 15Z" fill="#f7f4ec" />
          <path d="M115 76h28l-4 44h-20Z" fill="#c08a4a" />
          <path d="M174 76h28l-4 44h-20Z" fill="#c08a4a" />
          <path d="M112 76h34v7h-34ZM171 76h34v7h-34Z" fill="#221d16" />
          <path d="M166 153 237 128v28l-71 25Z" fill="#e9dabe" />
          <path d="M77 145 150 171v27l-73-26Z" fill="#c08a4a" />
        </g>
        <g fill="currentColor" fontSize="9" fontFamily="monospace" letterSpacing="1">
          <text x="160" y="60" textAnchor="middle">COFFEE / TO GO</text>
          <text x="186" y="170" textAnchor="middle" transform="rotate(-19 186 170)">TREAT</text>
        </g>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 320 220" role="img" aria-label="Illustration of a meal box concept with separate compartments" className="h-full w-full">
      <g stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
        <path d="M35 70 161 27 286 70 160 113Z" fill="#c08a4a" />
        <path d="M35 70v94l125 43v-94Z" fill="#e9dabe" />
        <path d="M160 113v94l126-43V70Z" fill="#c08a4a" />
        <path d="M49 75 161 37 272 75 160 106Z" fill="#f7f4ec" />
        <path d="M49 75 160 106v71L49 139Z" fill="#e9dabe" />
        <path d="M160 106 272 75v64l-112 38Z" fill="#f7f4ec" />
        <path d="M160 106v71" fill="none" strokeDasharray="4 4" />
        <path d="M67 81 116 64 146 74 97 91Z" fill="#234d38" />
        <path d="M171 112 220 95 252 104 202 122Z" fill="#234d38" />
        <path d="M70 119 111 131 111 151 70 139Z" fill="#c08a4a" />
        <path d="M175 148 244 124" strokeDasharray="4 5" fill="none" />
      </g>
      <g fill="currentColor" fontSize="9" fontFamily="monospace" letterSpacing="1">
        <text x="161" y="89" textAnchor="middle">FAREFOLD</text>
        <text x="92" y="111" textAnchor="middle">FRESH</text>
        <text x="217" y="143" textAnchor="middle" transform="rotate(-19 217 143)">SEPARATE</text>
      </g>
    </svg>
  );
}

export function ConceptShowcase() {
  return (
    <section aria-labelledby="concept-showcase-title" className="bg-page-bg py-16 text-page-ink sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-col gap-6 border-y border-page-border py-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="t-tech-sm text-page-accent">FareFold / Concept studio</p>
              <h2 id="concept-showcase-title" className="t-display-tight mt-3 max-w-[16ch] text-3xl sm:text-5xl lg:text-6xl">
                Make the package part of the product.
              </h2>
            </div>
            <p className="max-w-[42ch] text-sm leading-6 text-page-ink-soft sm:text-base">
              From smarter compartments to a more memorable unboxing, these concept studies start with a real customer problem. Choose an idea and we’ll explore how it could work for your product and brand.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {concepts.map((concept, index) => (
            <Reveal key={concept.no} delay={index * 90}>
              <article className="group flex h-full flex-col border border-page-border">
                <div className={`relative flex min-h-[16rem] items-center justify-center overflow-hidden p-5 sm:min-h-[19rem] ${concept.className}`}>
                  <span className="absolute left-5 top-5 t-tech-sm opacity-70">{concept.no} / CONCEPT</span>
                  <span className="absolute right-5 top-5 h-2 w-2 rounded-full bg-current opacity-70" aria-hidden="true" />
                  <div className="w-full max-w-[21rem] transition-transform duration-500 group-hover:scale-[1.035]">
                    <PackageSketch kind={concept.kind} />
                  </div>
                  <span className="absolute bottom-4 right-5 t-tech-sm opacity-70">CONCEPT STUDY · NOT FOR SALE</span>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="t-tech-sm text-page-ink-mute">{concept.label}</p>
                  <h3 className="t-display-tight mt-3 text-2xl">{concept.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-page-ink-soft">{concept.detail}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {concept.tags.map((tag) => (
                      <li key={tag} className="border border-page-border px-2.5 py-1 t-tech-sm text-page-ink-mute">{tag}</li>
                    ))}
                  </ul>
                  <Link
                    href={getWhatsappLink(`Hi FareFold — I'd like to discuss a packaging concept inspired by: ${concept.title} ${concept.label}. Please help me explore feasibility, materials and pricing.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-rule mt-7 inline-flex w-fit items-center gap-2 text-sm text-page-ink"
                  >
                    Develop this idea <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-5 max-w-[75ch] text-xs leading-5 text-page-ink-mute">
          Concept illustrations only. Final structure, material, food-contact suitability, production method and pricing must be reviewed for the intended product before anything is offered for supply.
        </p>
      </div>
    </section>
  );
}
