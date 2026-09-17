// ---------------------------------------------------------------------------
// Farefold platform data model — shared foundations.
//
// Every taxonomy in lib/data/ (business types, food types, product
// families, materials, packaging problems, safety knowledge) is built from
// the same primitive below, so a new domain can be added without a
// different shape per file, and so any node can be referenced from another
// taxonomy — or from a future real product record — by a stable `slug`
// instead of a free-text label that drifts.
//
// None of the files in lib/data/ contain real SKUs, prices, stock, MOQs,
// suppliers or certifications. They are classification structure only —
// the shelves the catalogue will sit on once verified product data exists.
// ---------------------------------------------------------------------------

/** Stable, URL-safe identifier for a taxonomy node (kebab-case). */
export type Slug = string;

/**
 * A single entry in any taxonomy tree.
 *
 * `parentSlug` is how hierarchy is expressed — a node with no `parentSlug`
 * is a top-level group; a node whose `parentSlug` matches another node's
 * `slug` is nested under it. Consumers walk the flat array and build a
 * tree (or not) as needed; the data itself stays a flat, easy-to-diff list
 * that can grow to hundreds of entries without restructuring.
 */
export interface TaxonomyNode {
  slug: Slug;
  name: string;
  /** slug of the parent node, if this entry is a child in the hierarchy */
  parentSlug?: Slug;
  /** short, factual explanation of what the node covers */
  description?: string;
  /** alternate names/spellings this node should also match on search */
  aliases?: string[];
}
