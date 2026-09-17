// ---------------------------------------------------------------------------
// PART 6 — Packaging safety / knowledge taxonomy.
//
// This file is a KNOWLEDGE taxonomy: it names the topics a packaging
// specifier has to consider (regulatory concepts, use conditions, hygiene,
// materials of concern, documentation types). It does NOT make any safety
// claim about Farefold or any product.
//
// HARD RULE — do not violate this when this file is extended:
// Never add a field, value or description here (or anywhere claim text is
// rendered) asserting "food safe", "microwave safe", "oven safe",
// "compostable", "biodegradable", "certified", etc. for Farefold or a
// specific product UNLESS that specific product has real, verified
// documentation on file supporting the claim. This file stores the
// *shape* evidence takes (see `SafetyTopic.description`, which explains
// what the topic IS in general terms, and the `certificationSlugs` /
// `complianceDocumentSlugs` fields on `ProductAttributes` in product.ts,
// which point at that evidence once it exists) — it never stores the
// evidence itself and never asserts a product meets it.
// ---------------------------------------------------------------------------

import type { TaxonomyNode } from "./types";

export type SafetyTopic = TaxonomyNode;

export const safetyTopics: SafetyTopic[] = [
  // --- Regulatory framework -----------------------------------------------------
  { slug: "regulatory-framework", name: "Regulatory Framework" },
  {
    slug: "food-contact-materials",
    name: "Food Contact Materials",
    parentSlug: "regulatory-framework",
    description: "Materials intended to be in contact with food, the regulatory category packaging substrates fall under.",
  },
  {
    slug: "food-contact-substances",
    name: "Food Contact Substances",
    parentSlug: "regulatory-framework",
    description: "Specific substances (inks, adhesives, coatings, resins) that may be present in a food contact material.",
  },
  {
    slug: "intended-use",
    name: "Intended Use",
    parentSlug: "regulatory-framework",
    description: "The specific food type and contact scenario a material or article is evaluated against.",
  },
  {
    slug: "conditions-of-use",
    name: "Conditions of Use",
    parentSlug: "regulatory-framework",
    description: "Time, temperature and food-type conditions under which a food contact material's suitability is assessed.",
  },

  // --- Migration & exposure conditions -------------------------------------------------
  { slug: "migration-exposure", name: "Migration & Exposure Conditions" },
  {
    slug: "migration",
    name: "Migration",
    parentSlug: "migration-exposure",
    description: "The transfer of a substance from a packaging material into food, the core concept food-contact testing evaluates.",
  },
  { slug: "food-acidity", name: "Food Acidity", parentSlug: "migration-exposure" },
  { slug: "fat-oil-contact", name: "Fat / Oil Contact", parentSlug: "migration-exposure" },
  { slug: "dry-food-contact", name: "Dry Food", parentSlug: "migration-exposure" },
  { slug: "beverage-contact", name: "Beverage Contact", parentSlug: "migration-exposure" },
  { slug: "dairy-contact", name: "Dairy", parentSlug: "migration-exposure" },
  { slug: "bakery-contact-conditions", name: "Bakery", parentSlug: "migration-exposure" },

  // --- Thermal conditions -------------------------------------------------------------
  { slug: "thermal-conditions", name: "Thermal Conditions" },
  { slug: "temperature-condition", name: "Temperature", parentSlug: "thermal-conditions" },
  { slug: "hot-fill", name: "Hot Fill", parentSlug: "thermal-conditions" },
  { slug: "refrigeration-condition", name: "Refrigeration", parentSlug: "thermal-conditions" },
  { slug: "freezing-condition", name: "Freezing", parentSlug: "thermal-conditions" },
  { slug: "reheating-condition", name: "Reheating", parentSlug: "thermal-conditions" },
  { slug: "microwave-condition", name: "Microwave", parentSlug: "thermal-conditions" },
  { slug: "oven-condition", name: "Oven", parentSlug: "thermal-conditions" },

  // --- Hygiene & handling ---------------------------------------------------------------
  { slug: "hygiene-handling", name: "Hygiene & Handling" },
  { slug: "hygiene", name: "Hygiene", parentSlug: "hygiene-handling" },
  { slug: "handling", name: "Handling", parentSlug: "hygiene-handling" },
  { slug: "storage-condition", name: "Storage", parentSlug: "hygiene-handling" },
  { slug: "transportation-condition", name: "Transportation", parentSlug: "hygiene-handling" },
  { slug: "contamination-prevention", name: "Contamination Prevention", parentSlug: "hygiene-handling" },

  // --- Materials & additives of concern ---------------------------------------------------
  { slug: "materials-of-concern", name: "Materials & Additives of Concern" },
  { slug: "printing-inks", name: "Printing Inks", parentSlug: "materials-of-concern" },
  { slug: "adhesives", name: "Adhesives", parentSlug: "materials-of-concern" },
  { slug: "coatings", name: "Coatings", parentSlug: "materials-of-concern" },
  { slug: "laminations", name: "Laminations", parentSlug: "materials-of-concern" },
  { slug: "recycled-materials-knowledge", name: "Recycled Materials", parentSlug: "materials-of-concern" },
  { slug: "bpa", name: "BPA", parentSlug: "materials-of-concern" },
  { slug: "pfas", name: "PFAS", parentSlug: "materials-of-concern" },
  { slug: "phthalates", name: "Phthalates", parentSlug: "materials-of-concern" },

  // --- Documentation & compliance -----------------------------------------------------------
  { slug: "documentation-compliance", name: "Documentation & Compliance" },
  { slug: "documentation", name: "Documentation", parentSlug: "documentation-compliance" },
  { slug: "traceability", name: "Traceability", parentSlug: "documentation-compliance" },
  {
    slug: "declarations-compliance-documentation",
    name: "Declarations / Compliance Documentation",
    parentSlug: "documentation-compliance",
  },
  { slug: "supplier-specifications", name: "Supplier Specifications", parentSlug: "documentation-compliance" },
  { slug: "testing", name: "Testing", parentSlug: "documentation-compliance" },
  {
    slug: "certifications-knowledge",
    name: "Certifications",
    parentSlug: "documentation-compliance",
    description: "The category of formal third-party attestation — naming this topic is not a claim that any product holds one.",
  },
  { slug: "gmp", name: "GMP", parentSlug: "documentation-compliance" },
];
