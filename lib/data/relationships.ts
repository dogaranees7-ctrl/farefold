// ---------------------------------------------------------------------------
// PART 9 — Relationship model.
//
// A generic edge between two taxonomy nodes, namespaced by taxonomy so the
// same slug can exist safely in more than one taxonomy (e.g. "bakery"
// naming both a business type and a food-type group) without ambiguity.
// This one shape supports every relationship chain the brief describes —
// Business Type → Food Types → Product Categories → Products → Materials
// → Problems/Solutions → Safety Knowledge — as a walk over edges, without
// a bespoke join table per pair of taxonomies.
//
// Example chain this shape is built to carry (illustrative only, NOT
// stored below): a pizza restaurant serves pizza, which typically uses
// pizza boxes, typically made from kraft/paperboard, addressing heat and
// ventilation problems, informed by thermal-conditions safety knowledge.
//
// `relations` is intentionally EMPTY. Populating it now — even with
// generic, "obviously true" links like pizza → pizza boxes — would mean
// hardcoding product/category recommendations before real SKUs, verified
// materials and verified safety documentation exist for Farefold's actual
// catalogue. The array exists so a future admin tool or curated dataset
// can populate it against this schema, not so the example above ships as
// data today.
// ---------------------------------------------------------------------------

import type { Slug } from "./types";

export type TaxonomyName =
  | "businessType"
  | "foodType"
  | "productFamily"
  | "material"
  | "packagingProblem"
  | "packagingSolution"
  | "safetyTopic";

export type RelationKind =
  | "serves" // businessType -> foodType
  | "typically-uses" // foodType | businessType -> productFamily
  | "made-from" // productFamily -> material
  | "addresses" // packagingSolution -> packagingProblem
  | "informed-by" // productFamily | material -> safetyTopic
  | "related-to";

export interface TaxonomyRelation {
  fromType: TaxonomyName;
  fromSlug: Slug;
  toType: TaxonomyName;
  toSlug: Slug;
  kind: RelationKind;
  note?: string;
}

export const relations: TaxonomyRelation[] = [];
