// ---------------------------------------------------------------------------
// Taxonomy query layer.
//
// The only place application code should walk the flat, parentSlug-linked
// arrays in lib/data/. Routes and components call these instead of
// filtering a taxonomy array directly, so tree-walking logic — and its
// edge cases (missing parents, cycles) — exists in exactly one place.
//
// Every helper is generic over TaxonomyNode, so one implementation serves
// every taxonomy in this directory (business types, food types, product
// families, and later materials and safety topics) without a bespoke
// version per file. Callers should always pass one taxonomy's own array
// (e.g. `getNodeBySlug(businessTypes, slug)`) rather than mixing arrays
// from different taxonomies through these generic helpers.
// ---------------------------------------------------------------------------

import type { Slug, TaxonomyNode } from "./types";
import type { RelationKind, TaxonomyName, TaxonomyRelation } from "./relationships";
import { relations } from "./relationships";

/** Nodes with no parent — the entry points of a taxonomy. */
export function getTopLevel<T extends TaxonomyNode>(nodes: T[]): T[] {
  return nodes.filter((node) => !node.parentSlug);
}

/** Direct children of a given slug, regardless of how deep it sits. */
export function getChildren<T extends TaxonomyNode>(nodes: T[], parentSlug: Slug): T[] {
  return nodes.filter((node) => node.parentSlug === parentSlug);
}

/** A single node by slug, or undefined if it doesn't exist in this taxonomy. */
export function getNodeBySlug<T extends TaxonomyNode>(nodes: T[], slug: Slug): T | undefined {
  return nodes.find((node) => node.slug === slug);
}

/**
 * The ancestor chain for a node, root-first, not including the node
 * itself — what a breadcrumb trail renders between the taxonomy root and
 * the current page. Returns an empty array for a top-level node, and the
 * full chain for a node several levels deep (e.g. Forks -> Cutlery ->
 * Accessories). Stops safely rather than looping forever if a
 * `parentSlug` points at a node that isn't in the array, or if that ever
 * produced a cycle.
 */
export function getAncestors<T extends TaxonomyNode>(nodes: T[], slug: Slug): T[] {
  const bySlug = new Map(nodes.map((node) => [node.slug, node]));
  const chain: T[] = [];
  const visited = new Set<Slug>([slug]);

  let current = bySlug.get(slug);
  while (current?.parentSlug) {
    const parent = bySlug.get(current.parentSlug);
    if (!parent || visited.has(parent.slug)) break;
    chain.unshift(parent);
    visited.add(parent.slug);
    current = parent;
  }

  return chain;
}

/**
 * Edges out of `relations` for a given taxonomy node. Returns an empty
 * array today because `relations` is intentionally unpopulated (see
 * relationships.ts) — callers should treat that as "nothing to show
 * yet" and render no related section at all, never a placeholder.
 */
export function getRelated(
  fromType: TaxonomyName,
  fromSlug: Slug,
  kind?: RelationKind,
): TaxonomyRelation[] {
  return relations.filter(
    (relation) =>
      relation.fromType === fromType &&
      relation.fromSlug === fromSlug &&
      (!kind || relation.kind === kind),
  );
}
