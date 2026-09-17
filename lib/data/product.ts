// ---------------------------------------------------------------------------
// PART 7 — Product attribute model.
//
// The reusable record shape a future real product/SKU will use. Every
// field beyond `id`, `name` and `status` is OPTIONAL BY DESIGN — a lid and
// a cutlery set do not share dimensions, a quote-only line does not have a
// shelf price yet, and most fields will stay unset until a real SKU with
// verified data is added. Consumers must render conditionally and never
// assume a field is populated.
//
// This file defines the SHAPE ONLY. It exports no sample/mock records —
// see the note in index.ts for why no fake SKUs are seeded here.
//
// Safety-related fields (`certificationSlugs`, `complianceDocumentSlugs`)
// are references to evidence that must exist before they are set on a
// real product; storing a slug here is not itself a safety claim (see
// safety-knowledge.ts).
// ---------------------------------------------------------------------------

import type { Slug } from "./types";

export type ProductStatus = "draft" | "active" | "discontinued" | "coming-soon";
export type PriceStatus = "not-set" | "quote-only" | "list-price" | "tiered";
export type Availability = "in-stock" | "made-to-order" | "pre-order" | "out-of-stock" | "unknown";
export type SourceType = "in-house-manufactured" | "contract-manufactured" | "imported" | "distributed" | "unknown";
export type ClosureType = "none" | "hinged" | "snap-lock" | "tuck-lock" | "friction-lid" | "heat-seal" | "tape" | "other";
export type LidType = "none" | "flat" | "dome" | "sip" | "straw-slot" | "vented" | "other";
export type ProductShape = "round" | "square" | "rectangular" | "oval" | "triangular" | "custom" | "other";

export interface ProductDimensions {
  length?: number;
  width?: number;
  height?: number;
  diameter?: number;
  unit?: "mm" | "cm" | "in";
}

export interface ProductCapacity {
  value?: number;
  unit?: "ml" | "l" | "oz" | "g" | "kg";
}

export interface ProductAttributes {
  id: string;
  name: string;
  status: ProductStatus;

  sku?: string;
  description?: string;

  // Classification — references into the taxonomies in this directory.
  productFamilySlug?: Slug;
  categorySlug?: Slug;
  subcategorySlug?: Slug;
  businessTypeSlugs?: Slug[];
  foodTypeSlugs?: Slug[];
  materialSlug?: Slug;
  packagingProblemSlugs?: Slug[];

  // Physical spec
  dimensions?: ProductDimensions;
  capacity?: ProductCapacity;
  shape?: ProductShape;
  colour?: string;

  // Print & finishing
  printOptions?: string[];
  finishing?: string[];
  closure?: ClosureType;
  lidType?: LidType;

  // Use conditions — classification attributes, not safety certifications.
  temperatureConditions?: string[];
  foodContactConditions?: string[];
  greaseResistant?: boolean;
  leakResistant?: boolean;
  ventilated?: boolean;
  stackable?: boolean;

  // Customization & ordering
  customizable?: boolean;
  moq?: number;
  packQuantity?: number;
  caseQuantity?: number;
  unit?: string;

  // Commercial
  price?: number;
  priceStatus?: PriceStatus;
  availability?: Availability;
  leadTimeDays?: number;
  sourceType?: SourceType;
  supplier?: string;

  // Trust & evidence — a slug here means a corresponding documented topic
  // is on file for this product; it is a pointer to evidence, not a claim
  // in itself. See the hard rule in safety-knowledge.ts.
  certificationSlugs?: Slug[];
  complianceDocumentSlugs?: Slug[];

  // Media
  images?: string[];
  specSheetUrl?: string;
}
