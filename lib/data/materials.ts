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
  { slug: "paper", name: "Paper", parentSlug: "fibre-based", description: "A fibre-based sheet material used in packaging formats such as bags, wraps and liners. Performance depends on grade, construction and any coatings or treatments." },
  { slug: "paperboard", name: "Paperboard", parentSlug: "fibre-based", description: "A thicker, stiffer paper-based material commonly converted into cartons, sleeves and formed packaging. Strength and moisture behaviour vary by grade and construction." },
  { slug: "kraft-paper", name: "Kraft Paper", parentSlug: "fibre-based", description: "Paper made using the kraft pulping process, often recognised by its natural brown appearance, though bleached grades also exist. Colour alone does not establish strength or food-contact suitability." },
  { slug: "corrugated-board", name: "Corrugated Board", parentSlug: "fibre-based", description: "A board structure with a fluted layer between flat liner sheets. The fluting adds thickness and helps the board resist compression, depending on its grade and design." },
  { slug: "coated-paperboard", name: "Coated Paperboard", parentSlug: "fibre-based", description: "Paperboard with a surface coating or treatment to change properties such as print finish, surface smoothness or resistance to moisture and grease. Exact performance depends on the coating." },
  { slug: "cardboard", name: "Cardboard", parentSlug: "fibre-based", description: "A broad everyday term for heavy paper-based board used in packaging. For specifications, identify the exact board type, thickness and construction rather than relying on this general label." },
  { slug: "moulded-fibre", name: "Moulded Fibre", parentSlug: "fibre-based", description: "Packaging formed by shaping a fibre slurry into a mould and drying it. Common forms include protective inserts and trays; strength and moisture resistance depend on formulation and finish." },
  { slug: "bagasse-fibre", name: "Bagasse / Fibre", parentSlug: "fibre-based", description: "Bagasse is the fibrous residue left after juice is extracted from sugarcane and can be used as a fibre feedstock. Products made with it vary in composition, coatings and end-of-life options." },

  // --- Plastics -------------------------------------------------------------------
  { slug: "plastics", name: "Plastics" },
  { slug: "pet", name: "PET", parentSlug: "plastics", description: "Polyethylene terephthalate, a thermoplastic used in packaging including some clear containers and bottles. The resin name alone does not verify a finished package for a particular food or temperature." },
  { slug: "pp", name: "PP", parentSlug: "plastics", description: "Polypropylene, a thermoplastic used in a range of rigid and flexible packaging formats. Suitability for a specific filling, heating or food-contact use must be confirmed from finished-product documentation." },
  { slug: "pe", name: "PE", parentSlug: "plastics", description: "Polyethylene, a family of plastics used in films, bags, liners and other packaging components. Properties differ by grade and structure, so the abbreviation alone is not a performance specification." },
  { slug: "ps", name: "PS", parentSlug: "plastics", description: "Polystyrene, a plastic used in several forms, including rigid and foamed packaging. Its properties and local collection or recycling options vary by format and location." },
  { slug: "pla", name: "PLA", parentSlug: "plastics", description: "Polylactic acid, a polymer often made from fermented plant-derived sugars. Whether a finished PLA item can be composted depends on its design, certification and available processing infrastructure." },
  { slug: "bioplastic", name: "Bioplastic", parentSlug: "plastics", description: "A broad term for plastics that may be bio-based, biodegradable, or both. These terms are not interchangeable; the material specification and verified claims need to be checked individually." },

  // --- Metal & glass ----------------------------------------------------------------
  { slug: "metal-glass", name: "Metal & Glass" },
  { slug: "aluminium", name: "Aluminium", parentSlug: "metal-glass", description: "A lightweight metal used in packaging such as trays, foil and some containers. Suitability depends on product design, any coatings or laminates, and the intended use." },
  { slug: "glass", name: "Glass", parentSlug: "metal-glass", description: "A rigid, non-porous packaging material used for containers and jars. Weight, breakage risk, closure and transport requirements are important parts of package design." },

  // --- Composite / laminated structures ----------------------------------------------
  { slug: "composite-structures", name: "Composite / Laminated Structures" },
  { slug: "laminated-structures", name: "Laminated Structures", parentSlug: "composite-structures", description: "Structures made by bonding two or more material layers to combine selected properties, such as printability, stiffness or barrier performance. Layer composition affects recyclability and separation." },
  { slug: "foil-structures", name: "Foil Structures", parentSlug: "composite-structures", description: "Packaging structures that include a thin metal foil layer, sometimes combined with paper or plastic. Performance and end-of-life handling depend on the complete layered construction." },

  // --- Sustainable / emerging ------------------------------------------------------------
  { slug: "sustainable-emerging", name: "Sustainable / Emerging Materials" },
  {
    slug: "compostable-materials",
    name: "Compostable Materials",
    parentSlug: "sustainable-emerging",
    description: "A material classification only — compostability in practice depends on local collection/processing and verified certification, tracked separately.",
  },
];
