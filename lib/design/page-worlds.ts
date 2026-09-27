// ---------------------------------------------------------------------------
// Page worlds — the thirteen locked palettes from the Farefold design-system
// specification, one per page of the eventual platform. This file is the
// single TypeScript source of truth for which keys exist and which two
// locked hex values each one carries; the actual semantic tokens those two
// values resolve to (--page-bg, --page-ink, --page-accent, etc.) live in
// app/globals.css under "PAGE WORLDS" and must be kept in step with this
// list — the color derivation itself only exists in CSS, since it depends
// on color-mix() the way this codebase already derives .flute and similar
// utilities.
//
// A page world is applied to a route by attaching data-page-world to that
// route's root element — see components/ui/PageWorld.tsx — which puts the
// matching [data-page-world="…"] block in globals.css into scope for every
// semantic --page-* token underneath it.
//
// Each world also declares a `tone`. This is a specification decision, not
// something derived from the two locked hex values at runtime — a page can
// be built from a pale primary and still read as a "dark" world overall, so
// tone is stated here explicitly and is the single source of truth for it.
// PageWorld reads it from this registry and exposes it as data-tone, which
// app/globals.css uses to select the global --status-* tokens (see "GLOBAL
// STATUS TOKENS"). Tone never changes a page's own --page-* values — those
// still come solely from that world's [data-page-world] block.
// ---------------------------------------------------------------------------

export type PageWorldKey =
  | "home"
  | "shop"
  | "product"
  | "custom"
  | "solutions"
  | "businesses"
  | "foods"
  | "materials"
  | "lab"
  | "safety"
  | "cart"
  | "checkout"
  | "account";

export type PageWorldTone = "light" | "dark";

export type PageWorld = {
  key: PageWorldKey;
  label: string;
  /** Locked spec values, in the order the specification lists them. Never
   *  edit these — if the specification changes a hex, that is a new
   *  decision, not a correction to make here. */
  primary: string;
  secondary: string;
  /** The world's declared tone — see the note above. A specification
   *  decision, not something computed from primary/secondary. */
  tone: PageWorldTone;
};

export const pageWorlds: Record<PageWorldKey, PageWorld> = {
  home: { key: "home", label: "Home", primary: "#21F1A8", secondary: "#171717", tone: "dark" },
  shop: {
    key: "shop",
    label: "Products / Shop",
    primary: "#E4FD97",
    secondary: "#2D3E2C",
    tone: "dark",
  },
  product: {
    key: "product",
    label: "Product Details",
    primary: "#EA2E00",
    secondary: "#F0E7D6",
    tone: "light",
  },
  custom: {
    key: "custom",
    label: "Custom Packaging",
    primary: "#FFAA40",
    secondary: "#007279",
    tone: "dark",
  },
  solutions: {
    key: "solutions",
    label: "Solutions",
    primary: "#013E37",
    secondary: "#FFEFB4",
    tone: "dark",
  },
  businesses: {
    key: "businesses",
    label: "Businesses",
    primary: "#3C1A47",
    secondary: "#B6FF00",
    tone: "dark",
  },
  foods: {
    key: "foods",
    label: "Foods",
    primary: "#3A241A",
    secondary: "#FFD6A0",
    tone: "dark",
  },
  materials: {
    key: "materials",
    label: "Materials",
    primary: "#FFC6A8",
    secondary: "#741A2F",
    tone: "light",
  },
  lab: {
    key: "lab",
    label: "Packaging Lab",
    primary: "#FFD662",
    secondary: "#422057",
    tone: "dark",
  },
  safety: {
    key: "safety",
    label: "Safety",
    primary: "#FCF6F5",
    secondary: "#990011",
    tone: "light",
  },
  cart: { key: "cart", label: "Cart", primary: "#004741", secondary: "#F0EDE4", tone: "dark" },
  checkout: {
    key: "checkout",
    label: "Checkout",
    primary: "#FFFDF1",
    secondary: "#59C749",
    tone: "light",
  },
  account: {
    key: "account",
    label: "Account / Packaging Management",
    primary: "#FF4103",
    secondary: "#001621",
    tone: "dark",
  },
};
