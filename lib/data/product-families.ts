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
    description: "Cone-format packaging used for servings such as ice cream, fries and other snacks.",
  },
  { slug: "ice-cream-cones", name: "Ice Cream Cones", parentSlug: "cones" },
  { slug: "fries-cones", name: "Fries Cones", parentSlug: "cones" },
  { slug: "snack-cones", name: "Snack Cones", parentSlug: "cones" },

  // --- Buckets (research addition — Horizon Foods exposes chicken buckets) ---
  {
    slug: "buckets",
    name: "Buckets",
    description: "Tapered packaging formats used for bucket-sized servings, including chicken and snacks.",
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

  // --- Disposable tableware -------------------------------------------------
  { slug: "tableware", name: "Tableware" },
  { slug: "paper-plates", name: "Paper Plates", parentSlug: "tableware" },
  { slug: "plastic-plates", name: "Plastic Plates", parentSlug: "tableware" },
  { slug: "compartment-plates", name: "Compartment Plates", parentSlug: "tableware" },
  { slug: "paper-bowls", name: "Paper Bowls", parentSlug: "tableware" },
  { slug: "plastic-bowls", name: "Plastic Bowls", parentSlug: "tableware" },
  { slug: "compartment-bowls", name: "Compartment Bowls", parentSlug: "tableware" },
  { slug: "serving-plates", name: "Serving Plates", parentSlug: "tableware" },
  { slug: "serving-bowls", name: "Serving Bowls", parentSlug: "tableware" },
  { slug: "dessert-plates", name: "Dessert Plates", parentSlug: "tableware" },
  { slug: "portion-cups", name: "Portion Cups", parentSlug: "tableware" },

  // --- Food-to-go formats ---------------------------------------------------
  { slug: "clamshells", name: "Clamshells" },
  { slug: "burger-clamshells", name: "Burger Clamshells", parentSlug: "clamshells" },
  { slug: "chicken-clamshells", name: "Chicken Clamshells", parentSlug: "clamshells" },
  { slug: "sandwich-clamshells", name: "Sandwich Clamshells", parentSlug: "clamshells" },
  { slug: "bakery-clamshells", name: "Bakery Clamshells", parentSlug: "clamshells" },
  { slug: "dessert-clamshells", name: "Dessert Clamshells", parentSlug: "clamshells" },
  { slug: "hinged-food-boxes", name: "Hinged Food Boxes", parentSlug: "clamshells" },
  { slug: "food-pails", name: "Food Pails", parentSlug: "boxes" },
  { slug: "food-scoops", name: "Food Scoops", parentSlug: "boxes" },
  { slug: "food-boats", name: "Food Boats", parentSlug: "boxes" },
  { slug: "pizza-slice-boxes", name: "Pizza Slice Boxes", parentSlug: "boxes" },
  { slug: "fries-boxes", name: "Fries Boxes", parentSlug: "boxes" },
  { slug: "donut-boxes", name: "Donut Boxes", parentSlug: "boxes" },
  { slug: "macaron-boxes", name: "Macaron Boxes", parentSlug: "boxes" },
  { slug: "pastry-boxes", name: "Pastry Boxes", parentSlug: "boxes" },
  { slug: "cookie-boxes", name: "Cookie Boxes", parentSlug: "boxes" },
  { slug: "cupcake-boxes", name: "Cupcake Boxes", parentSlug: "boxes" },
  { slug: "chocolate-boxes", name: "Chocolate Boxes", parentSlug: "boxes" },
  { slug: "sweet-boxes", name: "Sweet / Mithai Boxes", parentSlug: "boxes" },

  // --- Bottles, jars and beverage packaging -------------------------------
  { slug: "bottles", name: "Bottles" },
  { slug: "water-bottles", name: "Water Bottles", parentSlug: "bottles" },
  { slug: "juice-bottles", name: "Juice Bottles", parentSlug: "bottles" },
  { slug: "sauce-bottles", name: "Sauce Bottles", parentSlug: "bottles" },
  { slug: "syrup-bottles", name: "Syrup Bottles", parentSlug: "bottles" },
  { slug: "oil-bottles", name: "Oil Bottles", parentSlug: "bottles" },
  { slug: "drink-bottles", name: "Drink Bottles", parentSlug: "bottles" },
  { slug: "jars", name: "Jars" },
  { slug: "sauce-jars", name: "Sauce Jars", parentSlug: "jars" },
  { slug: "pickle-jars", name: "Pickle Jars", parentSlug: "jars" },
  { slug: "dessert-jars", name: "Dessert Jars", parentSlug: "jars" },
  { slug: "food-jars", name: "Food Jars", parentSlug: "jars" },
  { slug: "bottle-labels", name: "Bottle Labels", parentSlug: "branding-custom" },
  { slug: "jar-labels", name: "Jar Labels", parentSlug: "branding-custom" },

  // --- Pouches and flexible packaging --------------------------------------
  { slug: "pouches", name: "Pouches" },
  { slug: "stand-up-pouches", name: "Stand-Up Pouches", parentSlug: "pouches" },
  { slug: "flat-pouches", name: "Flat Pouches", parentSlug: "pouches" },
  { slug: "zip-pouches", name: "Zip Pouches", parentSlug: "pouches" },
  { slug: "window-pouches", name: "Window Pouches", parentSlug: "pouches" },
  { slug: "paper-pouches", name: "Paper Pouches", parentSlug: "pouches" },
  { slug: "snack-pouches", name: "Snack Pouches", parentSlug: "pouches" },
  { slug: "bakery-pouches", name: "Bakery Pouches", parentSlug: "pouches" },
  { slug: "sauce-pouches", name: "Sauce Pouches", parentSlug: "pouches" },
  { slug: "sachets", name: "Sachets" },
  { slug: "sauce-sachets", name: "Sauce Sachets", parentSlug: "sachets" },
  { slug: "ketchup-sachets", name: "Ketchup Sachets", parentSlug: "sachets" },
  { slug: "seasoning-sachets", name: "Seasoning Sachets", parentSlug: "sachets" },
  { slug: "sugar-sachets", name: "Sugar Sachets", parentSlug: "sachets" },
  { slug: "wet-wipe-sachets", name: "Wet Wipe Sachets", parentSlug: "sachets" },

  // --- Food service accessories --------------------------------------------
  { slug: "food-service-accessories", name: "Food Service Accessories" },
  { slug: "straw-wrappers", name: "Straw Wrappers", parentSlug: "food-service-accessories" },
  { slug: "cutlery-pouches", name: "Cutlery Pouches", parentSlug: "food-service-accessories" },
  { slug: "cutlery-sets", name: "Cutlery Sets", parentSlug: "food-service-accessories" },
  { slug: "portion-spoons", name: "Portion Spoons", parentSlug: "food-service-accessories" },
  { slug: "sauce-cups", name: "Sauce Cups", parentSlug: "food-service-accessories" },
  { slug: "sauce-cup-lids", name: "Sauce Cup Lids", parentSlug: "food-service-accessories" },
  { slug: "cup-sleeves", name: "Cup Sleeves", parentSlug: "food-service-accessories" },
  { slug: "cup-holders", name: "Cup Holders", parentSlug: "food-service-accessories" },
  { slug: "meal-carriers", name: "Meal Carriers", parentSlug: "food-service-accessories" },
  { slug: "pizza-carriers", name: "Pizza Carriers", parentSlug: "food-service-accessories" },
  { slug: "delivery-seals", name: "Delivery Seals", parentSlug: "food-service-accessories" },
  { slug: "tamper-evident-seals", name: "Tamper-Evident Seals", parentSlug: "food-service-accessories" },

  // --- Delivery and catering ------------------------------------------------
  { slug: "delivery-packaging", name: "Delivery Packaging" },
  { slug: "delivery-boxes", name: "Delivery Boxes", parentSlug: "delivery-packaging" },
  { slug: "insulated-delivery-bags", name: "Insulated Delivery Bags", parentSlug: "delivery-packaging" },
  { slug: "food-delivery-seals", name: "Food Delivery Seals", parentSlug: "delivery-packaging" },
  { slug: "catering-disposables", name: "Catering Disposables", parentSlug: "delivery-packaging" },
  { slug: "serving-platters", name: "Serving Platters", parentSlug: "delivery-packaging" },
  { slug: "chafing-trays", name: "Chafing Trays", parentSlug: "delivery-packaging" },

  // --- Printed paper and restaurant collateral ----------------------------
  { slug: "printed-paper-products", name: "Printed Paper Products" },
  { slug: "printed-napkins", name: "Printed Napkins", parentSlug: "printed-paper-products" },
  { slug: "printed-tissues", name: "Printed Tissues", parentSlug: "printed-paper-products" },
  { slug: "printed-placemats", name: "Printed Placemats", parentSlug: "printed-paper-products" },
  { slug: "printed-table-covers", name: "Printed Table Covers", parentSlug: "printed-paper-products" },
  { slug: "food-paper-sheets", name: "Printed Food Paper Sheets", parentSlug: "printed-paper-products" },
  { slug: "printed-bowl-liners", name: "Printed Bowl Liners", parentSlug: "printed-paper-products" },
  { slug: "printed-tray-liners", name: "Printed Tray Liners", parentSlug: "printed-paper-products" },
  { slug: "menu-cards", name: "Menu Cards", parentSlug: "printed-paper-products" },
  { slug: "table-tents", name: "Table Tents", parentSlug: "printed-paper-products" },
  { slug: "receipt-paper", name: "Receipt / Thermal Paper", parentSlug: "printed-paper-products" },
  { slug: "loyalty-cards", name: "Loyalty Cards", parentSlug: "printed-paper-products" },
  { slug: "business-cards", name: "Business Cards", parentSlug: "printed-paper-products" },
  { slug: "promotional-flyers", name: "Promotional Flyers", parentSlug: "printed-paper-products" },
  { slug: "paper-coupons", name: "Paper Coupons", parentSlug: "printed-paper-products" },

  // --- Labels, stickers and closures ---------------------------------------
  { slug: "labels-stickers", name: "Labels & Stickers" },
  { slug: "product-labels", name: "Product Labels", parentSlug: "labels-stickers" },
  { slug: "nutrition-labels", name: "Nutrition Labels", parentSlug: "labels-stickers" },
  { slug: "ingredient-labels", name: "Ingredient Labels", parentSlug: "labels-stickers" },
  { slug: "date-labels", name: "Date Labels", parentSlug: "labels-stickers" },
  { slug: "flavour-labels", name: "Flavour Labels", parentSlug: "labels-stickers" },
  { slug: "seal-stickers", name: "Seal Stickers", parentSlug: "labels-stickers" },
  { slug: "tamper-stickers", name: "Tamper Stickers", parentSlug: "labels-stickers" },
  { slug: "logo-stickers", name: "Logo Stickers", parentSlug: "labels-stickers" },
  { slug: "qr-stickers", name: "QR Stickers", parentSlug: "labels-stickers" },
  { slug: "die-cut-stickers", name: "Die-Cut Stickers", parentSlug: "labels-stickers" },
  { slug: "roll-labels", name: "Roll Labels", parentSlug: "labels-stickers" },

  // --- Custom print and finishing ------------------------------------------
  { slug: "print-finishing", name: "Print & Finishing" },
  { slug: "spot-uv-packaging", name: "Spot UV Packaging", parentSlug: "print-finishing" },
  { slug: "foil-stamped-packaging", name: "Foil-Stamped Packaging", parentSlug: "print-finishing" },
  { slug: "embossed-packaging", name: "Embossed Packaging", parentSlug: "print-finishing" },
  { slug: "debossed-packaging", name: "Debossed Packaging", parentSlug: "print-finishing" },
  { slug: "matte-finish-packaging", name: "Matte-Finish Packaging", parentSlug: "print-finishing" },
  { slug: "gloss-finish-packaging", name: "Gloss-Finish Packaging", parentSlug: "print-finishing" },
  { slug: "custom-die-cutting", name: "Custom Die-Cutting", parentSlug: "print-finishing" },
  { slug: "printed-inserts", name: "Printed Inserts", parentSlug: "print-finishing" },
  { slug: "printed-thank-you-cards", name: "Printed Thank-You Cards", parentSlug: "print-finishing" },
  { slug: "loyalty-pack-inserts", name: "Loyalty / Promotional Inserts", parentSlug: "print-finishing" },

];
