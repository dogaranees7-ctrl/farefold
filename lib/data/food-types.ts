// ---------------------------------------------------------------------------
// PART 2 — Food types.
//
// A broad food taxonomy, grouped into parent families with specific dishes
// nested under them. `FoodCharacteristic` is kept as a SEPARATE attribute
// (not baked into the hierarchy) because two items in the same category
// can behave completely differently for packaging purposes — e.g. "Soup"
// and "Salads" are both food, but one is hot/aqueous and the other is not.
//
// IMPORTANT: characteristics below are generic, observable classification
// facts (e.g. "soup is served hot and is aqueous"), not packaging-safety
// claims. A food type does NOT determine that any given pack is suitable
// for it — suitability is a property of a verified product, tracked
// separately (see safety-knowledge.ts and product.ts).
// ---------------------------------------------------------------------------

import type { TaxonomyNode } from "./types";

export type FoodCharacteristic =
  | "aqueous"
  | "acidic"
  | "oily-fatty"
  | "dairy"
  | "beverage"
  | "bakery"
  | "dry"
  | "frozen"
  | "hot"
  | "refrigerated"
  | "reheated";

export interface FoodType extends TaxonomyNode {
  /** Optional, generic classification facts — not a safety determination. */
  characteristics?: FoodCharacteristic[];
}

export const foodTypes: FoodType[] = [
  // --- Fast food & fried -------------------------------------------------
  { slug: "fast-food-fried", name: "Fast Food & Fried" },
  { slug: "pizza-food", name: "Pizza", parentSlug: "fast-food-fried", characteristics: ["hot", "oily-fatty"] },
  { slug: "burger-food", name: "Burger", parentSlug: "fast-food-fried", characteristics: ["hot", "oily-fatty"] },
  { slug: "fried-chicken-food", name: "Fried Chicken", parentSlug: "fast-food-fried", characteristics: ["hot", "oily-fatty"] },
  { slug: "chicken-food", name: "Chicken", parentSlug: "fast-food-fried" },
  { slug: "bbq-food", name: "BBQ", parentSlug: "fast-food-fried", characteristics: ["hot", "oily-fatty"] },
  { slug: "shawarma-food", name: "Shawarma", parentSlug: "fast-food-fried", characteristics: ["hot", "oily-fatty"] },
  { slug: "kebab-food", name: "Kebab", parentSlug: "fast-food-fried", characteristics: ["hot"] },
  { slug: "wraps-food", name: "Wraps", parentSlug: "fast-food-fried" },
  { slug: "sandwiches-food", name: "Sandwiches", parentSlug: "fast-food-fried" },
  { slug: "fries-food", name: "Fries", parentSlug: "fast-food-fried", characteristics: ["hot", "oily-fatty"] },
  { slug: "nuggets-food", name: "Nuggets", parentSlug: "fast-food-fried", characteristics: ["hot", "oily-fatty"] },

  // --- Rice & South Asian mains -------------------------------------------
  { slug: "rice-curry", name: "Rice & South Asian Mains" },
  { slug: "rice-food", name: "Rice", parentSlug: "rice-curry", characteristics: ["hot"] },
  { slug: "biryani-food", name: "Biryani", parentSlug: "rice-curry", characteristics: ["hot", "oily-fatty"] },
  { slug: "curry-food", name: "Curry", parentSlug: "rice-curry", characteristics: ["hot", "aqueous", "oily-fatty"] },
  { slug: "daal-food", name: "Daal", parentSlug: "rice-curry", characteristics: ["hot", "aqueous"] },
  { slug: "karahi-food", name: "Karahi", parentSlug: "rice-curry", characteristics: ["hot", "oily-fatty"] },

  // --- Global mains --------------------------------------------------------
  { slug: "global-mains", name: "Global Mains" },
  { slug: "noodles-food", name: "Noodles", parentSlug: "global-mains", characteristics: ["hot"] },
  { slug: "pasta-food", name: "Pasta", parentSlug: "global-mains", characteristics: ["hot"] },
  { slug: "soup-food", name: "Soup", parentSlug: "global-mains", characteristics: ["hot", "aqueous"] },

  // --- Condiments & sauces ---------------------------------------------------
  { slug: "condiments-sauces", name: "Condiments & Sauces" },
  { slug: "sauces-food", name: "Sauces", parentSlug: "condiments-sauces", characteristics: ["aqueous"] },
  { slug: "dips-food", name: "Dips", parentSlug: "condiments-sauces" },

  // --- Fresh & produce -------------------------------------------------------
  { slug: "fresh-produce", name: "Fresh & Produce" },
  { slug: "salads-food", name: "Salads", parentSlug: "fresh-produce", characteristics: ["refrigerated"] },
  { slug: "fruit-food", name: "Fruit", parentSlug: "fresh-produce" },

  // --- Bakery ------------------------------------------------------------------
  { slug: "bakery-food-group", name: "Bakery" },
  { slug: "bakery-food", name: "Bakery", parentSlug: "bakery-food-group", characteristics: ["bakery", "dry"] },
  { slug: "bread-food", name: "Bread", parentSlug: "bakery-food-group", characteristics: ["bakery", "dry"] },
  { slug: "cake-food", name: "Cake", parentSlug: "bakery-food-group", characteristics: ["bakery"] },
  { slug: "pastry-food", name: "Pastry", parentSlug: "bakery-food-group", characteristics: ["bakery"] },
  { slug: "croissant-food", name: "Croissant", parentSlug: "bakery-food-group", characteristics: ["bakery"] },
  { slug: "cookie-food", name: "Cookie", parentSlug: "bakery-food-group", characteristics: ["bakery", "dry"] },
  { slug: "brownie-food", name: "Brownie", parentSlug: "bakery-food-group", characteristics: ["bakery"] },
  { slug: "donut-food", name: "Donut", parentSlug: "bakery-food-group", characteristics: ["bakery", "oily-fatty"] },
  { slug: "cupcake-food", name: "Cupcake", parentSlug: "bakery-food-group", characteristics: ["bakery"] },

  // --- Desserts & sweets --------------------------------------------------------
  { slug: "desserts-sweets", name: "Desserts & Sweets" },
  { slug: "dessert-food", name: "Dessert", parentSlug: "desserts-sweets" },
  { slug: "ice-cream-food", name: "Ice Cream", parentSlug: "desserts-sweets", characteristics: ["frozen", "dairy"] },
  { slug: "chocolate-food", name: "Chocolate", parentSlug: "desserts-sweets" },
  { slug: "mithai-food", name: "Mithai", parentSlug: "desserts-sweets" },

  // --- Beverages ---------------------------------------------------------------
  { slug: "beverages-food", name: "Beverages" },
  { slug: "coffee-food", name: "Coffee", parentSlug: "beverages-food", characteristics: ["beverage", "hot"] },
  { slug: "tea-food", name: "Tea", parentSlug: "beverages-food", characteristics: ["beverage", "hot"] },
  { slug: "juice-food", name: "Juice", parentSlug: "beverages-food", characteristics: ["beverage", "acidic", "refrigerated"] },
  { slug: "smoothie-food", name: "Smoothie", parentSlug: "beverages-food", characteristics: ["beverage", "dairy", "refrigerated"] },
  { slug: "milkshake-food", name: "Milkshake", parentSlug: "beverages-food", characteristics: ["beverage", "dairy", "refrigerated"] },
  { slug: "soft-drinks-food", name: "Soft Drinks", parentSlug: "beverages-food", characteristics: ["beverage", "refrigerated"] },
  { slug: "water-food", name: "Water", parentSlug: "beverages-food", characteristics: ["beverage"] },

  // --- Frozen & ready-to-eat ---------------------------------------------------
  { slug: "frozen-ready", name: "Frozen & Ready-to-Eat" },
  { slug: "frozen-food-type", name: "Frozen Food", parentSlug: "frozen-ready", characteristics: ["frozen"] },
  { slug: "ready-meals-food", name: "Ready Meals", parentSlug: "frozen-ready", characteristics: ["reheated"] },
];
