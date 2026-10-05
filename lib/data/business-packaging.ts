import type { TaxonomyRelation } from "./relationships";

export const businessPackagingRelations: TaxonomyRelation[] = [
  { fromType: "businessType", fromSlug: "pizza-restaurant", toType: "productFamily", toSlug: "pizza-boxes", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "pizza-restaurant", toType: "productFamily", toSlug: "food-trays", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "pizza-restaurant", toType: "productFamily", toSlug: "sauce-containers", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "pizza-restaurant", toType: "productFamily", toSlug: "takeaway-bags", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "pizza-restaurant", toType: "productFamily", toSlug: "grease-resistant-paper", kind: "typically-uses" },

  { fromType: "businessType", fromSlug: "burger-restaurant", toType: "productFamily", toSlug: "burger-boxes", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "burger-restaurant", toType: "productFamily", toSlug: "snack-boxes", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "burger-restaurant", toType: "productFamily", toSlug: "burger-paper", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "burger-restaurant", toType: "productFamily", toSlug: "sauce-containers", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "burger-restaurant", toType: "productFamily", toSlug: "takeaway-bags", kind: "typically-uses" },

  { fromType: "businessType", fromSlug: "fried-chicken-restaurant", toType: "productFamily", toSlug: "chicken-boxes", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "fried-chicken-restaurant", toType: "productFamily", toSlug: "chicken-trays", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "fried-chicken-restaurant", toType: "productFamily", toSlug: "chicken-buckets", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "fried-chicken-restaurant", toType: "productFamily", toSlug: "sauce-containers", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "fried-chicken-restaurant", toType: "productFamily", toSlug: "takeaway-bags", kind: "typically-uses" },

  { fromType: "businessType", fromSlug: "cafe", toType: "productFamily", toSlug: "hot-cups", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "cafe", toType: "productFamily", toSlug: "cold-cups", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "cafe", toType: "productFamily", toSlug: "cup-carriers", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "cafe", toType: "productFamily", toSlug: "bakery-bags", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "coffee-shop", toType: "productFamily", toSlug: "coffee-cups", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "coffee-shop", toType: "productFamily", toSlug: "hot-cups", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "coffee-shop", toType: "productFamily", toSlug: "cup-carriers", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "tea-shop", toType: "productFamily", toSlug: "hot-cups", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "tea-shop", toType: "productFamily", toSlug: "cup-carriers", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "juice-smoothie-business", toType: "productFamily", toSlug: "juice-cups", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "juice-smoothie-business", toType: "productFamily", toSlug: "shake-cups", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "juice-smoothie-business", toType: "productFamily", toSlug: "dome-lids", kind: "typically-uses" },

  { fromType: "businessType", fromSlug: "bakery-business", toType: "productFamily", toSlug: "bakery-boxes", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "bakery-business", toType: "productFamily", toSlug: "window-boxes", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "bakery-business", toType: "productFamily", toSlug: "bakery-bags", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "bakery-business", toType: "productFamily", toSlug: "bakery-paper", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "cake-business", toType: "productFamily", toSlug: "cake-boxes", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "cake-business", toType: "productFamily", toSlug: "window-boxes", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "dessert-shop", toType: "productFamily", toSlug: "dessert-boxes", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "dessert-shop", toType: "productFamily", toSlug: "dessert-cups", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "ice-cream-business", toType: "productFamily", toSlug: "ice-cream-cups", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "ice-cream-business", toType: "productFamily", toSlug: "ice-cream-containers", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "ice-cream-business", toType: "productFamily", toSlug: "ice-cream-cones", kind: "typically-uses" },

  { fromType: "businessType", fromSlug: "japanese", toType: "productFamily", toSlug: "food-containers", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "japanese", toType: "productFamily", toSlug: "food-trays", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "japanese", toType: "productFamily", toSlug: "sauce-containers", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "chinese", toType: "productFamily", toSlug: "noodle-boxes", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "chinese", toType: "productFamily", toSlug: "meal-containers", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "chinese", toType: "productFamily", toSlug: "soup-containers", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "thai", toType: "productFamily", toSlug: "noodle-boxes", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "thai", toType: "productFamily", toSlug: "meal-containers", kind: "typically-uses" },

  { fromType: "businessType", fromSlug: "pakistani-desi", toType: "productFamily", toSlug: "meal-boxes", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "pakistani-desi", toType: "productFamily", toSlug: "food-containers", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "pakistani-desi", toType: "productFamily", toSlug: "sauce-containers", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "shawarma", toType: "productFamily", toSlug: "sandwich-boxes", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "shawarma", toType: "productFamily", toSlug: "sleeves", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "shawarma", toType: "productFamily", toSlug: "grease-resistant-paper", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "kebab", toType: "productFamily", toSlug: "meal-boxes", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "kebab", toType: "productFamily", toSlug: "food-trays", kind: "typically-uses" },

  { fromType: "businessType", fromSlug: "sandwich-business", toType: "productFamily", toSlug: "sandwich-boxes", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "sandwich-business", toType: "productFamily", toSlug: "sleeves", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "wrap-business", toType: "productFamily", toSlug: "sleeves", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "wrap-business", toType: "productFamily", toSlug: "sandwich-paper", kind: "typically-uses" },

  { fromType: "businessType", fromSlug: "cloud-kitchen", toType: "productFamily", toSlug: "takeaway-boxes", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "cloud-kitchen", toType: "productFamily", toSlug: "meal-boxes", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "cloud-kitchen", toType: "productFamily", toSlug: "takeaway-bags", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "meal-prep", toType: "productFamily", toSlug: "meal-containers", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "meal-prep", toType: "productFamily", toSlug: "compartment-containers", kind: "typically-uses" },

  { fromType: "businessType", fromSlug: "catering", toType: "productFamily", toSlug: "catering-boxes", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "catering", toType: "productFamily", toSlug: "catering-trays", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "event-catering", toType: "productFamily", toSlug: "catering-trays", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "corporate-catering", toType: "productFamily", toSlug: "catering-boxes", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "hotel", toType: "productFamily", toSlug: "food-containers", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "hotel", toType: "productFamily", toSlug: "catering-trays", kind: "typically-uses" },

  { fromType: "businessType", fromSlug: "grocery-food-retail", toType: "productFamily", toSlug: "retail-boxes", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "grocery-food-retail", toType: "productFamily", toSlug: "retail-bags", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "ready-meals-business", toType: "productFamily", toSlug: "meal-containers", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "ready-meals-business", toType: "productFamily", toSlug: "compartment-containers", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "frozen-food-business", toType: "productFamily", toSlug: "food-containers", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "food-manufacturer", toType: "productFamily", toSlug: "retail-boxes", kind: "typically-uses" },
  { fromType: "businessType", fromSlug: "food-manufacturer", toType: "productFamily", toSlug: "custom-boxes", kind: "typically-uses" },
];

export function getPackagingFamiliesForBusiness(businessSlug: string): string[] {
  return businessPackagingRelations
    .filter((relation) => relation.fromType === "businessType" && relation.fromSlug === businessSlug)
    .map((relation) => relation.toSlug);
}
