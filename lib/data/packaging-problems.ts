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
  { slug: "heat-retention", name: "Heat Retention", parentSlug: "thermal-moisture", description: "Managing how quickly a packed item loses heat between filling and serving. Results depend on the food, package structure, closures, air space and time in transit." },
  { slug: "crispiness-preservation", name: "Crispiness Preservation", parentSlug: "thermal-moisture", description: "Reducing texture loss in foods intended to remain crisp. Trapped steam and moisture migration can soften crisp surfaces, so ventilation and transit time may matter." },
  { slug: "moisture-management", name: "Moisture Management", parentSlug: "thermal-moisture", description: "Managing moisture from food, steam and the surrounding environment so it does not create unwanted sogginess, wet surfaces or damage to the package." },
  { slug: "temperature-management", name: "Temperature Management", parentSlug: "thermal-moisture", description: "Considering the temperature a product experiences during filling, storage and delivery. Packaging alone does not guarantee safe time-and-temperature control." },
  {
    slug: "condensation-control",
    name: "Condensation Control",
    parentSlug: "thermal-moisture",
    description: "Managing moisture that forms on packaging surfaces when temperature differences cause condensation.",
  },

  // --- Containment -------------------------------------------------------------
  { slug: "containment", name: "Containment" },
  { slug: "leak-prevention", name: "Leak Prevention", parentSlug: "containment", description: "Reducing the chance that liquids or semi-liquid foods escape through seams, joints, lids or closures during handling and transport. Performance needs to be checked for the actual package and contents." },
  { slug: "grease-management", name: "Grease Management", parentSlug: "containment", description: "Managing oils and fats that can stain, soften or migrate through packaging. Resistance depends on the substrate, barrier treatment, contact duration and food conditions." },
  { slug: "spill-prevention", name: "Spill Prevention", parentSlug: "containment", description: "Reducing spills caused by movement, tipping or handling. Package shape, fill level, closure design and how the item is carried all contribute to the outcome." },
  { slug: "closure", name: "Closure", parentSlug: "containment", description: "The way a package is closed and kept closed, such as with a lid, fold, seal or fitment. The right approach depends on the format, contents and distribution needs." },
  { slug: "ventilation", name: "Ventilation", parentSlug: "containment", description: "Allowing controlled air and water vapour exchange through a package. Venting may help release steam but can also affect heat loss, moisture exposure and containment." },
  { slug: "odour-management", name: "Odour Management", parentSlug: "containment", description: "Managing unwanted odour transfer into or out of a package during storage and delivery. Results depend on materials, closure, contents and time." },
  {
    slug: "allergen-cross-contact-risk",
    name: "Allergen Cross-Contact Risk",
    parentSlug: "containment",
    description: "Reducing the risk of allergen cross-contact through separation, handling and clear identification of food items.",
  },

  // --- Structural & logistics -----------------------------------------------------
  { slug: "structural-logistics", name: "Structural & Logistics" },
  { slug: "crush-protection", name: "Crush Protection", parentSlug: "structural-logistics", description: "Reducing damage caused by stacking loads, compression or impacts during handling and transit. Protection depends on package geometry, material grade and load conditions." },
  { slug: "stacking", name: "Stacking", parentSlug: "structural-logistics", description: "Designing packages so they can be stacked or nested for storage, transport and service. Stability, load distribution and deformation under load should be considered." },
  { slug: "delivery-protection", name: "Delivery Protection", parentSlug: "structural-logistics", description: "Protecting packed food from movement, compression, spills and unwanted contact during delivery. The required design depends on route, handling and food format." },
  { slug: "transport", name: "Transport", parentSlug: "structural-logistics", description: "Accounting for how packaging is carried, loaded and moved through distribution. Dimensions, weight, closure, stacking and handling conditions can affect transport performance." },
  { slug: "storage", name: "Storage", parentSlug: "structural-logistics", description: "Considering how packages occupy space and withstand expected storage conditions before use. Stack height, humidity, temperature and inventory rotation may all be relevant." },

  // --- Commercial & presentation ---------------------------------------------------
  { slug: "commercial-presentation", name: "Commercial & Presentation" },
  { slug: "tamper-evidence", name: "Tamper Evidence", parentSlug: "commercial-presentation", description: "Making it easier to notice whether a package may have been opened or disturbed after sealing. A tamper-evident feature is not by itself a guarantee against tampering." },
  { slug: "presentation", name: "Presentation", parentSlug: "commercial-presentation", description: "Presenting the product neatly at handoff or point of sale. Shape, visibility, fit, print and how the package opens can influence the customer experience." },
  { slug: "branding", name: "Branding", parentSlug: "commercial-presentation", description: "Using packaging surfaces to display a business name, visual identity, product information or campaign artwork. Print method, artwork, quantity and substrate affect available options." },
  { slug: "portion-control", name: "Portion Control", parentSlug: "commercial-presentation", description: "Using consistent package sizes, compartments or fill guides to support repeatable serving portions. The package alone does not determine the actual portion served." },
  {
    slug: "regulatory-labelling-requirements",
    name: "Regulatory Labelling Requirements",
    parentSlug: "commercial-presentation",
    description: "Identifying the product and market-specific information that applicable rules require on packaging.",
  },

  // --- Supply & sustainability ---------------------------------------------------------
  { slug: "supply-sustainability", name: "Supply & Sustainability" },
  { slug: "shelf-life", name: "Shelf Life", parentSlug: "supply-sustainability", description: "Considering how long a product maintains its intended quality under specified storage conditions. Packaging is one factor among formulation, processing, hygiene and temperature control." },
  { slug: "sustainability", name: "Sustainability", parentSlug: "supply-sustainability", description: "Comparing packaging choices across material sourcing, production, transport, use and end-of-life. A material label alone is not enough to establish overall environmental impact." },
  { slug: "cost-control", name: "Cost Control", parentSlug: "supply-sustainability", description: "Understanding total packaging cost, including unit price, printing, tooling, storage, damage, freight and minimum order quantities rather than comparing unit prices alone." },
  { slug: "inventory-management", name: "Inventory Management", parentSlug: "supply-sustainability", description: "Balancing available packaging stock against demand, storage space, replenishment time and the risk of obsolete printed or custom formats." },
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
