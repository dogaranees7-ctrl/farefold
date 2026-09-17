// ---------------------------------------------------------------------------
// PART 4 — Materials.
//
// A material taxonomy for the packaging substrates the catalogue will
// reference. Grouped by material family (fibre-based, plastics,
// metal/glass, composite/laminated structures, sustainable/emerging).
//
// IMPORTANT — safety distinction: a material name here is NOT a food-
// safety or food-contact claim. "PP" being heat-tolerant as a polymer
// class does not mean any specific PP product on the future catalogue is
// verified for hot-fill use — that suitability must be established per
// real product, with real documentation (see safety-knowledge.ts and the
// `certificationSlugs` / `complianceDocumentSlugs` fields on
// `ProductAttributes` in product.ts). Likewise "Compostable Materials" and
// "Bioplastic" are material classifications, not disposal-outcome or
// certification claims.
// ---------------------------------------------------------------------------

import type { TaxonomyNode } from "./types";

export type Material = TaxonomyNode;

export const materials: Material[] = [
  // --- Fibre-based -----------------------------------------------------------
  { slug: "fibre-based", name: "Fibre-Based" },
  { slug: "paper", name: "Paper", parentSlug: "fibre-based" },
  { slug: "paperboard", name: "Paperboard", parentSlug: "fibre-based" },
  { slug: "kraft-paper", name: "Kraft Paper", parentSlug: "fibre-based" },
  { slug: "corrugated-board", name: "Corrugated Board", parentSlug: "fibre-based" },
  { slug: "coated-paperboard", name: "Coated Paperboard", parentSlug: "fibre-based" },
  { slug: "cardboard", name: "Cardboard", parentSlug: "fibre-based" },
  { slug: "moulded-fibre", name: "Moulded Fibre", parentSlug: "fibre-based" },
  { slug: "bagasse-fibre", name: "Bagasse / Fibre", parentSlug: "fibre-based" },

  // --- Plastics -------------------------------------------------------------------
  { slug: "plastics", name: "Plastics" },
  { slug: "pet", name: "PET", parentSlug: "plastics" },
  { slug: "pp", name: "PP", parentSlug: "plastics" },
  { slug: "pe", name: "PE", parentSlug: "plastics" },
  { slug: "ps", name: "PS", parentSlug: "plastics" },
  { slug: "pla", name: "PLA", parentSlug: "plastics" },
  { slug: "bioplastic", name: "Bioplastic", parentSlug: "plastics" },

  // --- Metal & glass ----------------------------------------------------------------
  { slug: "metal-glass", name: "Metal & Glass" },
  { slug: "aluminium", name: "Aluminium", parentSlug: "metal-glass" },
  { slug: "glass", name: "Glass", parentSlug: "metal-glass" },

  // --- Composite / laminated structures ----------------------------------------------
  { slug: "composite-structures", name: "Composite / Laminated Structures" },
  { slug: "laminated-structures", name: "Laminated Structures", parentSlug: "composite-structures" },
  { slug: "foil-structures", name: "Foil Structures", parentSlug: "composite-structures" },

  // --- Sustainable / emerging ------------------------------------------------------------
  { slug: "sustainable-emerging", name: "Sustainable / Emerging Materials" },
  {
    slug: "compostable-materials",
    name: "Compostable Materials",
    parentSlug: "sustainable-emerging",
    description: "A material classification only — compostability in practice depends on local collection/processing and verified certification, tracked separately.",
  },
];
