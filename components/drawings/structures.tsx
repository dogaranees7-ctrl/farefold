// ---------------------------------------------------------------------------
// Structural line drawings.
//
// Eighteen packaging structures, drawn the way a structural designer draws
// them: orthographic or light isometric, solid line for the cut edge, dashed
// vermillion for the crease. These are not icons — each one is the actual
// format the specimen sheet names, which is why a pail, a clamshell and a
// gusseted bag do not share geometry.
//
// All drawings share a 96 × 72 frame so the specimen wall stays on grid.
// ---------------------------------------------------------------------------

import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

function Frame({ children, ...props }: Props & { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 96 72" fill="none" aria-hidden="true" {...props}>
      <g className="dl">{children}</g>
    </svg>
  );
}

/** 01 — Pizza. One-piece corner-lock box, lid folded back, vented. */
export function PizzaBox(props: Props) {
  return (
    <Frame {...props}>
      <path d="M24 30h48v34H24z" />
      <path d="M24 30 28 11h40l4 19" />
      <path className="dl-crease" d="M24 30h48" />
      <path d="M30 64v4M66 64v4" />
      <circle cx="40" cy="20" r="1.6" />
      <circle cx="48" cy="19" r="1.6" />
      <circle cx="56" cy="20" r="1.6" />
      <path d="M24 38l6-4M72 38l-6-4" />
    </Frame>
  );
}

/** 02 — Burger. Hinged clamshell, shown part-open at the hinge. */
export function Clamshell(props: Props) {
  return (
    <Frame {...props}>
      <path d="M20 44h56v18H20z" />
      <path d="M20 44 74 35v-13L20 31z" />
      <path className="dl-crease" d="M20 31v13" />
      <path d="M76 52h5M74 35l6 1" />
      <path d="M20 53h56" />
    </Frame>
  );
}

/** 03 — Chicken. Tapered bucket with rolled rim and domed lid. */
export function Bucket(props: Props) {
  return (
    <Frame {...props}>
      <path d="M28 32 34 64h28l6-32" />
      <ellipse cx="48" cy="32" rx="20" ry="5" />
      <path d="M26 30c0-6 44-6 44 0" />
      <ellipse cx="48" cy="30" rx="22" ry="4.5" />
      <path d="M36 44h24" className="dl-crease" />
    </Frame>
  );
}

/** 04 — BBQ. Aluminium platter with a board lid above it. */
export function Platter(props: Props) {
  return (
    <Frame {...props}>
      <path d="M16 46h64l-8 18H24z" />
      <path d="M22 51h52" />
      <path d="M33 51l-2 13M45 51v13M59 51l1 13" />
      <path d="M20 32h56v8H20z" />
      <path className="dl-crease" d="M20 36h56" />
    </Frame>
  );
}

/** 05 — Shawarma. Rolled wrap held by a printed band. */
export function SleeveWrap(props: Props) {
  return (
    <Frame {...props}>
      <path d="M36 66 42 20M64 66 58 20" />
      <path d="M42 20c2-6 12-6 16 0" />
      <path d="M43 26h14" className="dl-crease" />
      <path d="M38.5 44h23v12h-24z" />
      <path d="M36 66h28" />
    </Frame>
  );
}

/** 06 — Chinese. Folded-top pail with wire handle. */
export function Pail(props: Props) {
  return (
    <Frame {...props}>
      <path d="M30 28 36 64h24l6-36" />
      <path d="M30 28 48 20l18 8" />
      <path className="dl-crease" d="M38 30 41 64M58 30 55 64" />
      <path d="M44 20h8v4h-8z" />
      <path d="M34 26c4-12 24-12 28 0" />
      <path d="M36 52h24" />
    </Frame>
  );
}

/** 07 — Desi / Curry. Round tub with snap-on lid. */
export function RoundTub(props: Props) {
  return (
    <Frame {...props}>
      <path d="M32 38 36 64h24l4-26" />
      <ellipse cx="48" cy="38" rx="16" ry="4" />
      <path d="M28 30h40v6H28z" />
      <ellipse cx="48" cy="30" rx="20" ry="4" />
      <path d="M32 36h32" className="dl-crease" />
    </Frame>
  );
}

/** 08 — Bakery. Window box, front elevation. */
export function WindowBox(props: Props) {
  return (
    <Frame {...props}>
      <path d="M18 26h60v38H18z" />
      <path className="dl-crease" d="M18 34h60" />
      <path d="M28 40h40v18H28z" />
      <path d="M31 43h34v12H31z" />
      <path d="M18 26 24 20h60l-6 6" />
    </Frame>
  );
}

/** 09 — Cake. Tall rigid box, cut carry handle. */
export function CakeBox(props: Props) {
  return (
    <Frame {...props}>
      <path d="M24 28h48v36H24z" />
      <path className="dl-crease" d="M24 36h48M32 28v36M64 28v36" />
      <path d="M40 28v-4a8 8 0 0 1 16 0v4" />
      <path d="M40 24h16" />
    </Frame>
  );
}

/** 10 — Dessert. Cup with a dome lid, contents layered. */
export function DessertCup(props: Props) {
  return (
    <Frame {...props}>
      <path d="M34 42 38 64h20l4-22" />
      <ellipse cx="48" cy="42" rx="14" ry="3.5" />
      <path d="M32 42c0-18 32-18 32 0" />
      <path d="M36 52h24M37 58h22" className="dl-crease" />
      <circle cx="48" cy="24" r="1.6" />
    </Frame>
  );
}

/** 11 — Café. Double-wall hot cup with a brand sleeve. */
export function HotCup(props: Props) {
  return (
    <Frame {...props}>
      <path d="M33 28 38 64h20l5-36" />
      <ellipse cx="48" cy="28" rx="15" ry="4" />
      <path d="M32 22h32l-1 6H33z" />
      <ellipse cx="48" cy="22" rx="16" ry="4" />
      <path d="M40 18h6" />
      <path d="M35.5 42h25l-1.5 14h-22z" />
    </Frame>
  );
}

/** 12 — Beverage. Four-cup carrier, top plate in perspective. */
export function Carrier(props: Props) {
  return (
    <Frame {...props}>
      <path d="M16 40h64l-6 12H22z" />
      <path d="M22 52v10h52V52" />
      <ellipse cx="32" cy="45" rx="6" ry="3" />
      <ellipse cx="48" cy="45" rx="6" ry="3" />
      <ellipse cx="64" cy="45" rx="6" ry="3" />
      <path d="M40 40v-6a8 8 0 0 1 16 0v6" />
      <path className="dl-crease" d="M22 52h52" />
    </Frame>
  );
}

/** 13 — Juice / Shake. Tall PET cup, dome lid, straw. */
export function TallCup(props: Props) {
  return (
    <Frame {...props}>
      <path d="M34 26 40 66h16l6-40" />
      <ellipse cx="48" cy="26" rx="14" ry="3.5" />
      <path d="M33 26c0-16 30-16 30 0" />
      <path d="M48 16v-8" />
      <path d="M48 8h6" />
      <path d="M38 44h20M39 54h18" className="dl-crease" />
    </Frame>
  );
}

/** 14 — Ice Cream. Tub with tamper-evident lid. */
export function IceTub(props: Props) {
  return (
    <Frame {...props}>
      <path d="M30 36 34 64h28l4-28" />
      <ellipse cx="48" cy="36" rx="18" ry="4" />
      <path d="M26 28h44v8H26z" />
      <ellipse cx="48" cy="28" rx="22" ry="4" />
      <path className="dl-crease" d="M28 34h40" />
      <path d="M40 48h16" />
    </Frame>
  );
}

/** 15 — Catering. Large handled box, isometric. */
export function CateringBox(props: Props) {
  return (
    <Frame {...props}>
      <path d="M16 34h48v30H16z" />
      <path d="M64 34 80 24v30L64 64z" />
      <path d="M16 34 32 24h48L64 34z" />
      <path className="dl-crease" d="M64 34v30" />
      <path d="M40 30h12v3H40z" />
      <path d="M16 48h48" />
    </Frame>
  );
}

/** 16 — Cloud Kitchen. A stacked modular set on one shared footprint. */
export function Modular(props: Props) {
  return (
    <Frame {...props}>
      <path d="M24 50h48v14H24zM28 36h40v14H28zM32 22h32v14H32z" />
      <path className="dl-crease" d="M24 54h48M28 40h40M32 26h32" />
      <path d="M80 22v42" />
      <path d="M77 22h6M77 64h6" />
    </Frame>
  );
}

/** 17 — Grocery / Retail. Gusseted kraft carrier bag. */
export function GussetBag(props: Props) {
  return (
    <Frame {...props}>
      <path d="M26 26h40v40H26z" />
      <path d="M66 26 78 19v40l-12 7z" />
      <path className="dl-crease" d="M66 26v40M26 34h40M72 22v40" />
      <path d="M34 26v-5a7 7 0 0 1 14 0v5" />
      <path d="M50 26v-5a7 7 0 0 1 14 0v5" />
    </Frame>
  );
}

/** 18 — Custom. A blank net: every crease drawn, nothing decided yet. */
export function BlankDieline(props: Props) {
  return (
    <Frame {...props}>
      <path d="M34 14h28v12h18v24H62v12H34V50H16V26h18z" />
      <path className="dl-crease" d="M34 26h28M34 50h28M34 26v24M62 26v24" />
      <path d="M16 26 12 30v16l4 4" />
      <path d="M40 38h16M52 34l4 4-4 4" />
    </Frame>
  );
}

export const structureMap: Record<string, (props: Props) => React.JSX.Element> = {
  pizzaBox: PizzaBox,
  clamshell: Clamshell,
  bucket: Bucket,
  platter: Platter,
  sleeveWrap: SleeveWrap,
  pail: Pail,
  roundTub: RoundTub,
  windowBox: WindowBox,
  cakeBox: CakeBox,
  dessertCup: DessertCup,
  hotCup: HotCup,
  carrier: Carrier,
  tallCup: TallCup,
  iceTub: IceTub,
  cateringBox: CateringBox,
  modular: Modular,
  gussetBag: GussetBag,
  blankDieline: BlankDieline,
};
