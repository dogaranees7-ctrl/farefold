// ---------------------------------------------------------------------------
// PART 5 — Packaging problems & solutions.
//
// `PackagingProblem` is the taxonomy of things packaging has to solve.
// `PackagingSolution` is the taxonomy of generic engineering approaches
// that address problems. Both are classification nodes describing
// packaging engineering concepts in general — not a recommendation that
// any specific Farefold product solves any specific problem.
//
// The architecture supports the full chain the brief asks for —
// Problem → Solution → Relevant packaging types → Relevant products —
// via the optional `relatedProblemSlugs` field on `PackagingSolution` and
// the optional `productFamilySlug` / `packagingProblemSlugs` fields on
// `ProductAttributes` (see product.ts). Those links are left UNPOPULATED
// here deliberately: wiring a problem to a specific product family before
// real, verified products exist would be hardcoding a recommendation, not
// building the schema for one.
// ---------------------------------------------------------------------------

import type { Slug, TaxonomyNode } from "./types";

export type PackagingProblem = TaxonomyNode;

export const packagingProblems: PackagingProblem[] = [
  // --- Thermal & moisture ------------------------------------------------------
  { slug: "thermal-moisture", name: "Thermal & Moisture" },
  { slug: "heat-retention", name: "Heat Retention", parentSlug: "thermal-moisture" },
  { slug: "crispiness-preservation", name: "Crispiness Preservation", parentSlug: "thermal-moisture" },
  { slug: "moisture-management", name: "Moisture Management", parentSlug: "thermal-moisture" },
  { slug: "temperature-management", name: "Temperature Management", parentSlug: "thermal-moisture" },
  {
    slug: "condensation-control",
    name: "Condensation Control",
    parentSlug: "thermal-moisture",
    description: "Managing moisture that forms on packaging surfaces when temperature differences cause condensation.",
  },

  // --- Containment -------------------------------------------------------------
  { slug: "containment", name: "Containment" },
  { slug: "leak-prevention", name: "Leak Prevention", parentSlug: "containment" },
  { slug: "grease-management", name: "Grease Management", parentSlug: "containment" },
  { slug: "spill-prevention", name: "Spill Prevention", parentSlug: "containment" },
  { slug: "closure", name: "Closure", parentSlug: "containment" },
  { slug: "ventilation", name: "Ventilation", parentSlug: "containment" },
  { slug: "odour-management", name: "Odour Management", parentSlug: "containment" },
  {
    slug: "allergen-cross-contact-risk",
    name: "Allergen Cross-Contact Risk",
    parentSlug: "containment",
    description: "Reducing the risk of allergen cross-contact through separation, handling and clear identification of food items.",
  },

  // --- Structural & logistics -----------------------------------------------------
  { slug: "structural-logistics", name: "Structural & Logistics" },
  { slug: "crush-protection", name: "Crush Protection", parentSlug: "structural-logistics" },
  { slug: "stacking", name: "Stacking", parentSlug: "structural-logistics" },
  { slug: "delivery-protection", name: "Delivery Protection", parentSlug: "structural-logistics" },
  { slug: "transport", name: "Transport", parentSlug: "structural-logistics" },
  { slug: "storage", name: "Storage", parentSlug: "structural-logistics" },

  // --- Commercial & presentation ---------------------------------------------------
  { slug: "commercial-presentation", name: "Commercial & Presentation" },
  { slug: "tamper-evidence", name: "Tamper Evidence", parentSlug: "commercial-presentation" },
  { slug: "presentation", name: "Presentation", parentSlug: "commercial-presentation" },
  { slug: "branding", name: "Branding", parentSlug: "commercial-presentation" },
  { slug: "portion-control", name: "Portion Control", parentSlug: "commercial-presentation" },
  {
    slug: "regulatory-labelling-requirements",
    name: "Regulatory Labelling Requirements",
    parentSlug: "commercial-presentation",
    description: "Identifying the product and market-specific information that applicable rules require on packaging.",
  },

  // --- Supply & sustainability ---------------------------------------------------------
  { slug: "supply-sustainability", name: "Supply & Sustainability" },
  { slug: "shelf-life", name: "Shelf Life", parentSlug: "supply-sustainability" },
  { slug: "sustainability", name: "Sustainability", parentSlug: "supply-sustainability" },
  { slug: "cost-control", name: "Cost Control", parentSlug: "supply-sustainability" },
  { slug: "inventory-management", name: "Inventory Management", parentSlug: "supply-sustainability" },
  {
    slug: "recyclability-end-of-life",
    name: "Recyclability / End-of-Life Handling",
    parentSlug: "supply-sustainability",
    description: "Considering whether packaging can be collected, sorted, reused, recycled or otherwise handled after use in the intended market.",
  },
];

/** A generic engineering approach that addresses one or more problems. */
export interface PackagingSolution extends TaxonomyNode {
  /** Reserved for future use — deliberately left unset on every entry below. */
  relatedProblemSlugs?: Slug[];
}

export const packagingSolutions: PackagingSolution[] = [
  { slug: "venting-perforations", name: "Venting Perforations" },
  { slug: "double-wall-insulation", name: "Double-Wall Insulation" },
  { slug: "grease-resistant-lining", name: "Grease-Resistant Lining" },
  { slug: "barrier-coating", name: "Barrier Coating" },
  { slug: "corner-lock-structure", name: "Corner-Lock Structural Design" },
  { slug: "snap-fit-closure", name: "Snap-Fit Closure" },
  { slug: "heat-seal-closure", name: "Heat-Seal Closure" },
  { slug: "tamper-evident-seal", name: "Tamper-Evident Seal" },
  { slug: "compartmentalisation", name: "Compartmentalisation" },
  { slug: "stack-nesting-geometry", name: "Stack/Nesting Geometry" },
  { slug: "flat-ship-fold-erect", name: "Flat-Ship, Fold-to-Erect Format" },
  { slug: "printed-brand-panel", name: "Printed Brand Panel" },
];
