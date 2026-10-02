// ---------------------------------------------------------------------------
// PART 1 — Business types.
//
// The food-business segments Farefold's platform is built to serve.
// Grouped into top-level segments (no parentSlug) with the specific
// business models nested under them (parentSlug pointing at the group).
// This is classification structure for the catalogue and future
// business-type-driven pages — it names no real client, contract or
// supplier and makes no claim about who Farefold currently serves.
// ---------------------------------------------------------------------------

import type { TaxonomyNode } from "./types";

export type BusinessType = TaxonomyNode;

export const businessTypes: BusinessType[] = [
  // --- Restaurants -----------------------------------------------------
  {
    slug: "restaurants",
    name: "Restaurants",
    description: "Sit-down and quick-service dining, grouped by cuisine and format below.",
  },
  { slug: "fast-food-qsr", name: "Fast Food / QSR", parentSlug: "restaurants" },
  { slug: "pizza-restaurant", name: "Pizza", parentSlug: "restaurants" },
  { slug: "burger-restaurant", name: "Burger", parentSlug: "restaurants" },
  { slug: "fried-chicken-restaurant", name: "Fried Chicken", parentSlug: "restaurants" },
  { slug: "bbq-restaurant", name: "BBQ", parentSlug: "restaurants" },
  { slug: "pakistani-desi", name: "Pakistani / Desi", parentSlug: "restaurants", aliases: ["Desi"] },
  { slug: "indian", name: "Indian", parentSlug: "restaurants" },
  { slug: "chinese", name: "Chinese", parentSlug: "restaurants" },
  { slug: "thai", name: "Thai", parentSlug: "restaurants" },
  { slug: "japanese", name: "Japanese", parentSlug: "restaurants" },
  { slug: "korean", name: "Korean", parentSlug: "restaurants" },
  { slug: "middle-eastern", name: "Middle Eastern", parentSlug: "restaurants" },
  { slug: "turkish", name: "Turkish", parentSlug: "restaurants" },
  { slug: "mexican", name: "Mexican", parentSlug: "restaurants" },
  { slug: "italian", name: "Italian", parentSlug: "restaurants" },
  { slug: "seafood", name: "Seafood", parentSlug: "restaurants" },
  { slug: "steakhouse", name: "Steakhouse", parentSlug: "restaurants" },
  { slug: "shawarma", name: "Shawarma", parentSlug: "restaurants" },
  { slug: "kebab", name: "Kebab", parentSlug: "restaurants" },
  { slug: "sandwich-business", name: "Sandwich", parentSlug: "restaurants" },
  { slug: "wrap-business", name: "Wrap", parentSlug: "restaurants" },
  { slug: "breakfast", name: "Breakfast", parentSlug: "restaurants" },
  { slug: "salad-healthy-food", name: "Salad / Healthy Food", parentSlug: "restaurants" },
  {
    slug: "buffet-restaurant",
    name: "Buffet Restaurant",
    parentSlug: "restaurants",
    description: "Food-service operations where customers select food from a shared self-service or staffed buffet.",
  },
  {
    slug: "food-court-vendor",
    name: "Food Court Vendor",
    parentSlug: "restaurants",
    description: "A food business operating from a stall or counter within a shared food-court space.",
  },

  // --- Bakery & Desserts -------------------------------------------------
  {
    slug: "bakery-desserts",
    name: "Bakery & Desserts",
    description: "Bakeries, cake businesses and dessert-led operations.",
  },
  { slug: "bakery-business", name: "Bakery", parentSlug: "bakery-desserts" },
  { slug: "cake-business", name: "Cake Business", parentSlug: "bakery-desserts" },
  { slug: "dessert-shop", name: "Dessert Shop", parentSlug: "bakery-desserts" },
  { slug: "ice-cream-business", name: "Ice Cream", parentSlug: "bakery-desserts" },
  { slug: "sweet-mithai", name: "Sweet / Mithai", parentSlug: "bakery-desserts" },

  // --- Café & Beverage ----------------------------------------------------
  {
    slug: "cafe-beverage",
    name: "Café & Beverage",
    description: "Café, coffee, tea and cold-beverage-led businesses.",
  },
  { slug: "cafe", name: "Café", parentSlug: "cafe-beverage" },
  { slug: "coffee-shop", name: "Coffee Shop", parentSlug: "cafe-beverage" },
  { slug: "tea-shop", name: "Tea Shop", parentSlug: "cafe-beverage" },
  { slug: "juice-smoothie-business", name: "Juice / Smoothie", parentSlug: "cafe-beverage" },

  // --- Delivery-first & home kitchens -------------------------------------
  {
    slug: "delivery-first",
    name: "Delivery-First & Home Kitchens",
    description: "Operations built around delivery rather than a dine-in room.",
  },
  { slug: "cloud-kitchen", name: "Cloud Kitchen", parentSlug: "delivery-first" },
  { slug: "ghost-kitchen", name: "Ghost Kitchen", parentSlug: "delivery-first" },
  { slug: "food-truck", name: "Food Truck", parentSlug: "delivery-first" },
  { slug: "home-based-food-business", name: "Home-Based Food Business", parentSlug: "delivery-first" },
  { slug: "meal-prep", name: "Meal Prep", parentSlug: "delivery-first" },

  // --- Catering & institutional food service ------------------------------
  {
    slug: "catering-institutional",
    name: "Catering & Institutional Food Service",
    description: "Volume feeding for events, workplaces and institutions.",
  },
  { slug: "catering", name: "Catering", parentSlug: "catering-institutional" },
  { slug: "event-catering", name: "Event Catering", parentSlug: "catering-institutional" },
  { slug: "corporate-catering", name: "Corporate Catering", parentSlug: "catering-institutional" },
  { slug: "hotel", name: "Hotel", parentSlug: "catering-institutional" },
  { slug: "school-university-food-service", name: "School / University Food Service", parentSlug: "catering-institutional" },
  { slug: "hospital-institutional-food-service", name: "Hospital / Institutional Food Service", parentSlug: "catering-institutional" },

  // --- Food retail & production --------------------------------------------
  {
    slug: "retail-production",
    name: "Food Retail & Production",
    description: "Businesses that sell or manufacture food for others to prepare or resell.",
  },
  { slug: "grocery-food-retail", name: "Grocery / Food Retail", parentSlug: "retail-production" },
  { slug: "frozen-food-business", name: "Frozen Food", parentSlug: "retail-production" },
  { slug: "ready-meals-business", name: "Ready Meals", parentSlug: "retail-production" },
  { slug: "meat-business", name: "Meat Business", parentSlug: "retail-production" },
  { slug: "food-manufacturer", name: "Food Manufacturer", parentSlug: "retail-production" },
  { slug: "food-processor", name: "Food Processor", parentSlug: "retail-production" },
  {
    slug: "convenience-store-food-service",
    name: "Convenience Store Food Service",
    parentSlug: "retail-production",
    description: "Convenience retailers that prepare or sell ready-to-eat food from an in-store counter.",
  },
];
