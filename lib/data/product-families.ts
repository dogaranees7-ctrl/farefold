// ---------------------------------------------------------------------------
// PART 3 — Product families.
//
// The master category/subcategory taxonomy the future catalogue hangs
// products on. Structured as family groups (BOXES, CONTAINERS, CUPS, ...)
// with specific product families nested under them via `parentSlug`, and
// one extra level of nesting where a natural sub-group exists (e.g.
// Cutlery under Accessories). This is a starting taxonomy per the brief —
// designed to be extended with more families/subcategories, not a limit
// on what the catalogue can eventually hold (hundreds/thousands of SKUs
// per Horizon Foods' ~265-product and A1 Traders' 5,000+ SKU ranges).
//
// These are CATEGORY nodes, not products: no SKU, price, stock, MOQ or
// supplier data lives here. Real products will reference a family slug
// from this file via `productFamilySlug` on a `ProductAttributes` record
// (see product.ts).
// ---------------------------------------------------------------------------

import type { TaxonomyNode } from "./types";

export type ProductFamily = TaxonomyNode;

export const productFamilies: ProductFamily[] = [
  // --- Boxes ---------------------------------------------------------------
  { slug: "boxes", name: "Boxes" },
  { slug: "pizza-boxes", name: "Pizza Boxes", parentSlug: "boxes" },
  { slug: "burger-boxes", name: "Burger Boxes", parentSlug: "boxes" },
  { slug: "chicken-boxes", name: "Chicken Boxes", parentSlug: "boxes" },
  { slug: "snack-boxes", name: "Snack Boxes", parentSlug: "boxes" },
  { slug: "meal-boxes", name: "Meal Boxes", parentSlug: "boxes" },
  { slug: "takeaway-boxes", name: "Takeaway Boxes", parentSlug: "boxes" },
  { slug: "pasta-boxes", name: "Pasta Boxes", parentSlug: "boxes" },
  { slug: "noodle-boxes", name: "Noodle Boxes", parentSlug: "boxes" },
  { slug: "bakery-boxes", name: "Bakery Boxes", parentSlug: "boxes" },
  { slug: "cake-boxes", name: "Cake Boxes", parentSlug: "boxes" },
  { slug: "dessert-boxes", name: "Dessert Boxes", parentSlug: "boxes" },
  { slug: "sandwich-boxes", name: "Sandwich Boxes", parentSlug: "boxes" },
  { slug: "catering-boxes", name: "Catering Boxes", parentSlug: "boxes" },
  { slug: "gift-boxes", name: "Gift Boxes", parentSlug: "boxes" },
  { slug: "retail-boxes", name: "Retail Boxes", parentSlug: "boxes" },
  { slug: "window-boxes", name: "Window Boxes", parentSlug: "boxes" },
  { slug: "folding-cartons", name: "Folding Cartons", parentSlug: "boxes" },
  { slug: "die-cut-boxes", name: "Die-Cut Boxes", parentSlug: "boxes" },
  { slug: "custom-boxes", name: "Custom Boxes", parentSlug: "boxes" },

  // --- Containers ------------------------------------------------------------
  { slug: "containers", name: "Containers" },
  { slug: "food-containers", name: "Food Containers", parentSlug: "containers" },
  { slug: "meal-containers", name: "Meal Containers", parentSlug: "containers" },
  { slug: "deli-containers", name: "Deli Containers", parentSlug: "containers" },
  { slug: "hinged-containers", name: "Hinged Containers", parentSlug: "containers" },
  { slug: "soup-containers", name: "Soup Containers", parentSlug: "containers" },
  { slug: "sauce-containers", name: "Sauce Containers", parentSlug: "containers" },
  { slug: "salad-containers", name: "Salad Containers", parentSlug: "containers" },
  { slug: "dessert-containers", name: "Dessert Containers", parentSlug: "containers" },
  { slug: "ice-cream-containers", name: "Ice Cream Containers", parentSlug: "containers" },
  { slug: "round-containers", name: "Round Containers", parentSlug: "containers" },
  { slug: "rectangular-containers", name: "Rectangular Containers", parentSlug: "containers" },
  { slug: "compartment-containers", name: "Compartment Containers", parentSlug: "containers" },
  { slug: "pet-containers", name: "PET Containers", parentSlug: "containers" },
  { slug: "pp-containers", name: "PP Containers", parentSlug: "containers" },
  { slug: "aluminium-containers", name: "Aluminium Containers", parentSlug: "containers" },

  // --- Cups --------------------------------------------------------------------
  { slug: "cups", name: "Cups" },
  { slug: "hot-cups", name: "Hot Cups", parentSlug: "cups" },
  { slug: "cold-cups", name: "Cold Cups", parentSlug: "cups" },
  { slug: "coffee-cups", name: "Coffee Cups", parentSlug: "cups" },
  { slug: "juice-cups", name: "Juice Cups", parentSlug: "cups" },
  { slug: "shake-cups", name: "Shake Cups", parentSlug: "cups" },
  { slug: "smoothie-cups", name: "Smoothie Cups", parentSlug: "cups" },
  { slug: "dessert-cups", name: "Dessert Cups", parentSlug: "cups" },
  { slug: "ice-cream-cups", name: "Ice Cream Cups", parentSlug: "cups" },
  { slug: "paper-cups", name: "Paper Cups", parentSlug: "cups" },
  { slug: "plastic-cups", name: "Plastic Cups", parentSlug: "cups" },

  // --- Lids -------------------------------------------------------------------
  { slug: "lids", name: "Lids" },
  { slug: "flat-lids", name: "Flat Lids", parentSlug: "lids" },
  { slug: "dome-lids", name: "Dome Lids", parentSlug: "lids" },
  { slug: "sip-lids", name: "Sip Lids", parentSlug: "lids" },
  { slug: "straw-lids", name: "Straw Lids", parentSlug: "lids" },
  { slug: "soup-lids", name: "Soup Lids", parentSlug: "lids" },
  { slug: "container-lids", name: "Container Lids", parentSlug: "lids" },
  { slug: "cup-lids", name: "Cup Lids", parentSlug: "lids" },

  // --- Bags -------------------------------------------------------------------
  { slug: "bags", name: "Bags" },
  { slug: "paper-bags", name: "Paper Bags", parentSlug: "bags" },
  { slug: "kraft-bags", name: "Kraft Bags", parentSlug: "bags" },
  { slug: "takeaway-bags", name: "Takeaway Bags", parentSlug: "bags" },
  { slug: "bakery-bags", name: "Bakery Bags", parentSlug: "bags" },
  { slug: "bread-bags", name: "Bread Bags", parentSlug: "bags" },
  { slug: "retail-bags", name: "Retail Bags", parentSlug: "bags" },
  { slug: "delivery-bags", name: "Delivery Bags", parentSlug: "bags" },
  { slug: "bottle-bags", name: "Bottle Bags", parentSlug: "bags" },
  { slug: "custom-printed-bags", name: "Custom Printed Bags", parentSlug: "bags" },

  // --- Wrapping ----------------------------------------------------------------
  { slug: "wrapping", name: "Wrapping" },
  { slug: "food-wrapping-paper", name: "Food Wrapping Paper", parentSlug: "wrapping" },
  { slug: "grease-resistant-paper", name: "Grease-Resistant Paper", parentSlug: "wrapping" },
  { slug: "burger-paper", name: "Burger Paper", parentSlug: "wrapping" },
  { slug: "sandwich-paper", name: "Sandwich Paper", parentSlug: "wrapping" },
  { slug: "shawarma-paper", name: "Shawarma Paper", parentSlug: "wrapping" },
  { slug: "deli-paper", name: "Deli Paper", parentSlug: "wrapping" },
  { slug: "bakery-paper", name: "Bakery Paper", parentSlug: "wrapping" },
  { slug: "sleeves", name: "Sleeves", parentSlug: "wrapping" },
  { slug: "bands", name: "Bands", parentSlug: "wrapping" },
  { slug: "foil", name: "Foil", parentSlug: "wrapping" },

  // --- Trays -------------------------------------------------------------------
  { slug: "trays", name: "Trays" },
  { slug: "food-trays", name: "Food Trays", parentSlug: "trays" },
  { slug: "chicken-trays", name: "Chicken Trays", parentSlug: "trays" },
  { slug: "bakery-trays", name: "Bakery Trays", parentSlug: "trays" },
  { slug: "catering-trays", name: "Catering Trays", parentSlug: "trays" },
  { slug: "paperboard-trays", name: "Paperboard Trays", parentSlug: "trays" },
  { slug: "plastic-trays", name: "Plastic Trays", parentSlug: "trays" },
  { slug: "aluminium-trays", name: "Aluminium Trays", parentSlug: "trays" },

  // --- Cones (research addition — Horizon Foods exposes cups/cones/straws) ---
  {
    slug: "cones",
    name: "Cones",
    description: "Research addition — cone-format packaging for scoop/fried snack formats.",
  },
  { slug: "ice-cream-cones", name: "Ice Cream Cones", parentSlug: "cones" },
  { slug: "fries-cones", name: "Fries Cones", parentSlug: "cones" },
  { slug: "snack-cones", name: "Snack Cones", parentSlug: "cones" },

  // --- Buckets (research addition — Horizon Foods exposes chicken buckets) ---
  {
    slug: "buckets",
    name: "Buckets",
    description: "Research addition — tapered bucket formats, chicken being the common case.",
  },
  { slug: "chicken-buckets", name: "Chicken Buckets", parentSlug: "buckets" },
  { slug: "snack-buckets", name: "Snack Buckets", parentSlug: "buckets" },
  { slug: "ice-buckets", name: "Ice Buckets", parentSlug: "buckets" },

  // --- Accessories -----------------------------------------------------------
  { slug: "accessories", name: "Accessories" },
  { slug: "cutlery", name: "Cutlery", parentSlug: "accessories" },
  { slug: "forks", name: "Forks", parentSlug: "cutlery" },
  { slug: "knives", name: "Knives", parentSlug: "cutlery" },
  { slug: "spoons", name: "Spoons", parentSlug: "cutlery" },
  { slug: "chopsticks", name: "Chopsticks", parentSlug: "cutlery" },
  { slug: "straws", name: "Straws", parentSlug: "accessories" },
  { slug: "stirrers", name: "Stirrers", parentSlug: "accessories" },
  { slug: "napkins", name: "Napkins", parentSlug: "accessories" },
  { slug: "tissue", name: "Tissue", parentSlug: "accessories" },
  { slug: "toothpicks", name: "Toothpicks", parentSlug: "accessories" },
  { slug: "cup-carriers", name: "Cup Carriers", parentSlug: "accessories" },
  { slug: "food-picks", name: "Food Picks", parentSlug: "accessories" },

  // --- Branding / custom ---------------------------------------------------
  { slug: "branding-custom", name: "Branding / Custom" },
  { slug: "printed-boxes", name: "Printed Boxes", parentSlug: "branding-custom" },
  { slug: "printed-bags", name: "Printed Bags", parentSlug: "branding-custom" },
  { slug: "printed-cups", name: "Printed Cups", parentSlug: "branding-custom" },
  { slug: "printed-wrappers", name: "Printed Wrappers", parentSlug: "branding-custom" },
  { slug: "printed-sleeves", name: "Printed Sleeves", parentSlug: "branding-custom" },
  { slug: "stickers", name: "Stickers", parentSlug: "branding-custom" },
  { slug: "labels", name: "Labels", parentSlug: "branding-custom" },
  { slug: "seals", name: "Seals", parentSlug: "branding-custom" },
  { slug: "inserts", name: "Inserts", parentSlug: "branding-custom" },
  { slug: "thank-you-cards", name: "Thank-You Cards", parentSlug: "branding-custom" },
  { slug: "custom-packaging", name: "Custom Packaging", parentSlug: "branding-custom" },
];
