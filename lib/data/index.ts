// ---------------------------------------------------------------------------
// Farefold platform data layer — barrel export.
//
// This directory (lib/data/) is the master taxonomy/data architecture for
// the future products + packaging platform: business types, food types,
// product families, materials, packaging problems/solutions and safety
// knowledge, plus the product/quote schemas and the cross-taxonomy
// relationship model that ties them together.
//
// It deliberately contains NO product records, prices, stock, MOQs,
// suppliers, certifications or safety claims. Those require verified,
// real data and get added later, against the schemas defined here — the
// goal of this phase is to build shelves the catalogue can eventually
// hold hundreds or thousands of real SKUs on without a rebuild, not to
// stock them.
//
// This is a separate content layer from lib/site-config.ts, which remains
// the existing homepage's content model (Fixes #1-#10) and is untouched.
// ---------------------------------------------------------------------------

export * from "./types";
export * from "./business-types";
export * from "./food-types";
export * from "./product-families";
export * from "./materials";
export * from "./packaging-problems";
export * from "./safety-knowledge";
export * from "./product";
export * from "./catalog-products";
export * from "./quote";
export * from "./relationships";
export * from "./query";
