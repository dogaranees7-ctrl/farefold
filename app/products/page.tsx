import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "@/components/spec/Sheet";
import { TaxonomyCard } from "@/components/taxonomy/TaxonomyCard";
import { PageWorld } from "@/components/ui/PageWorld";
import { productFamilies, getTopLevel } from "@/lib/data";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore food packaging concepts and product families — pizza boxes, coffee carriers, meal trays, sauce packs, beverage bottles and sushi kits.",
  alternates: { canonical: "/products" },
};

const featuredProducts = [
  {
    number: "01",
    name: "Pizza + sides box",
    type: "PIZZA / TAKEAWAY",
    description:
      "A carry-ready pizza box concept with a separate fries and sauce section, designed to bring the full order together.",
    href: "/products/pizza-boxes",
    family: "Pizza boxes",
    shape: "pizza",
  },
  {
    number: "02",
    name: "Coffee carry kit",
    type: "COFFEE / BAKERY",
    description:
      "A handled carrier for multiple hot drinks, with room for a small bakery item and space for your brand.",
    href: "/products/paper-cups",
    family: "Cups",
    shape: "coffee",
  },
  {
    number: "03",
    name: "Compartment meal box",
    type: "MEALS / DELIVERY",
    description:
      "A meal tray concept that keeps mains, sides and dips organised in one considered presentation.",
    href: "/products/meal-boxes",
    family: "Meal boxes",
    shape: "meal",
  },
  {
    number: "04",
    name: "Sauce portion system",
    type: "CONDIMENTS / QSR",
    description:
      "Portion-led sauce packaging ideas for takeaway meals, combo boxes and quick-service counters.",
    href: "/products/sauce-containers",
    family: "Sauce containers",
    shape: "sauce",
  },
  {
    number: "05",
    name: "Beverage bottle pack",
    type: "DRINKS / RETAIL",
    description:
      "A distinctive bottle and label direction for dairy, date drinks and other chilled beverages.",
    href: "/products/food-containers",
    family: "Food containers",
    shape: "bottle",
  },
  {
    number: "06",
    name: "Sushi presentation kit",
    type: "FRESH FOOD / RETAIL",
    description:
      "A presentation-led tray concept with separated spaces for the main item, accompaniments and condiments.",
    href: "/products/food-trays",
    family: "Food trays",
    shape: "sushi",
  },
] as const;

function ProductSpecimen({ shape }: { shape: (typeof featuredProducts)[number]["shape"] }) {
  return (
    <div aria-hidden="true" className="relative flex h-52 items-center justify-center overflow-hidden border-b border-page-border bg-page-surface p-6 sm:h-60">
      <span className="absolute left-4 top-4 t-tech-sm text-page-ink-mute">CONCEPT / STUDY</span>
      <span className="absolute bottom-4 right-4 t-tech-sm text-page-ink-mute">FF—{shape === "pizza" ? "01" : shape === "coffee" ? "02" : shape === "meal" ? "03" : shape === "sauce" ? "04" : shape === "bottle" ? "05" : "06"}</span>
      {shape === "pizza" && (
        <svg viewBox="0 0 240 145" className="h-full w-full max-w-64 text-page-ink" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 48 116 15 216 49 120 84 20 48Z" fill="currentColor" fillOpacity=".06" />
          <path d="M20 48v57l100 28V84M216 49v57l-96 27M20 105l96-35 100 36" />
          <path d="m40 45 76-26 76 27-76 27-76-28Z" strokeDasharray="4 4" />
          <path d="M46 91v-24l19-7 17 7v24M46 67l18 7 18-7M64 74v22" />
          <circle cx="135" cy="51" r="19" /><circle cx="135" cy="51" r="12" strokeDasharray="3 3" />
          <path d="m129 46 12 10m0-10-12 10" />
        </svg>
      )}
      {shape === "coffee" && (
        <svg viewBox="0 0 240 145" className="h-full w-full max-w-64 text-page-ink" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M46 54h148l-8 63H54l-8-63Z" fill="currentColor" fillOpacity=".06" />
          <path d="M38 49h164v10H38zM54 117h132M64 60l4 49m108-49-4 49" />
          <path d="M72 49V25h96v24M83 25V16h74v9" />
          <path d="M87 77h25v25H87zM128 77h25v25h-25z" />
          <path d="M99 77v25m41-25v25" strokeDasharray="3 3" />
        </svg>
      )}
      {shape === "meal" && (
        <svg viewBox="0 0 240 145" className="h-full w-full max-w-64 text-page-ink" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="m28 42 90-22 94 24-91 25-93-27Z" fill="currentColor" fillOpacity=".06" />
          <path d="M28 42v57l93 28V69M212 44v56l-91 27M28 99l91-28 93 29" />
          <path d="m43 47 74-18 76 18-73 21-77-21Z" strokeDasharray="4 3" />
          <path d="M43 47v37l40 12V58M83 58l37 11M120 69v37l39-12V58M159 58l34-11" />
          <circle cx="65" cy="67" r="9" /><path d="M61 67h8m-4-4v8" />
          <circle cx="151" cy="48" r="8" />
        </svg>
      )}
      {shape === "sauce" && (
        <svg viewBox="0 0 240 145" className="h-full w-full max-w-64 text-page-ink" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M25 54h190v53H25z" fill="currentColor" fillOpacity=".06" />
          <path d="M25 54 43 38h154l18 16M25 107l18 15h154l18-15" />
          <path d="M48 58h34v43H48zM103 58h34v43h-34zM158 58h34v43h-34z" />
          <path d="M53 58v-9h24v9m31 0v-9h24v9m31 0v-9h24v9" />
          <path d="M56 77h18m-18 7h18m37-7h18m-18 7h18m37-7h18m-18 7h18" strokeDasharray="2 3" />
        </svg>
      )}
      {shape === "bottle" && (
        <svg viewBox="0 0 240 145" className="h-full w-full max-w-64 text-page-ink" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M78 35h22V20h40v15h22l9 17v68q-1 9-12 9H81q-12 0-12-10V52l9-17Z" fill="currentColor" fillOpacity=".06" />
          <path d="M78 35h22V20h40v15h22l9 17v68q-1 9-12 9H81q-12 0-12-10V52l9-17Z" />
          <path d="M100 20V12h40v8M91 64h58v35H91z" />
          <path d="M101 76h38m-38 8h27" strokeDasharray="3 3" />
          <path d="M108 35v14m24-14v14" />
        </svg>
      )}
      {shape === "sushi" && (
        <svg viewBox="0 0 240 145" className="h-full w-full max-w-64 text-page-ink" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="m20 47 100-27 100 27-100 29L20 47Z" fill="currentColor" fillOpacity=".06" />
          <path d="M20 47v50l100 29 100-29V47M20 97l100-28 100 28M120 69v57" />
          <path d="m39 48 81-22 81 22-81 23-81-23Z" strokeDasharray="4 3" />
          <ellipse cx="77" cy="56" rx="18" ry="9" /><ellipse cx="77" cy="56" rx="10" ry="4" />
          <rect x="111" y="42" width="27" height="18" rx="2" /><circle cx="170" cy="49" r="9" />
        </svg>
      )}
    </div>
  );
}

export default function ProductsIndexPage() {
  const families = getTopLevel(productFamilies);

  return (
    <PageWorld world="shop" className="substrate bg-page-bg py-20 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
        <PageHead
          tone="page"
          eyebrow="Products / Packaging concepts"
          headline={
            <>
              Packaging built
              <br />
              around <span className="text-page-accent">the product.</span>
            </>
          }
          intro={
            <p>
              Start with the format you need. These concept studies take inspiration from real
              food-service packaging ideas — from pizza combo boxes and coffee carriers to
              compartment meals and branded beverage packs. Final specifications are confirmed
              around your product, material, quantity and budget.
            </p>
          }
          meta={[["Concept directions", String(featuredProducts.length)], ["Product families", String(families.length)]]}
        />

        <section aria-labelledby="featured-products-heading" className="mt-14 sm:mt-20">
          <div className="flex flex-col gap-4 border-y border-page-border py-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="t-tech-sm text-page-accent">Selected directions / 01—06</p>
              <h2 id="featured-products-heading" className="t-display-tight mt-2 text-2xl text-page-ink sm:text-4xl">
                Start with a product
              </h2>
            </div>
            <p className="max-w-[44ch] text-sm leading-6 text-page-ink-soft">
              Visual concept directions, not stocked SKUs. Open a family to explore formats and request a specification or quote.
            </p>
          </div>

          <ul className="mt-px grid grid-cols-1 gap-px border-x border-b border-page-border bg-page-border sm:grid-cols-2 xl:grid-cols-3">
            {featuredProducts.map((product) => (
              <li key={product.number} className="flex min-w-0 flex-col bg-page-bg">
                <ProductSpecimen shape={product.shape} />
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="t-tech-sm text-page-ink-mute">{product.number} / {product.type}</p>
                  <h3 className="t-display-tight mt-4 text-2xl text-page-ink">{product.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-page-ink-soft">{product.description}</p>
                  <Link
                    href={product.href}
                    className="link-rule mt-7 inline-flex w-fit items-center gap-3 text-sm text-page-ink"
                  >
                    Explore {product.family} <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="product-families-heading" className="mt-20 sm:mt-28">
          <div className="flex flex-col gap-4 border-y border-page-border py-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="t-tech-sm text-page-accent">Full range / taxonomy</p>
              <h2 id="product-families-heading" className="t-display-tight mt-2 text-2xl text-page-ink sm:text-4xl">
                Browse by family
              </h2>
            </div>
            <p className="max-w-[44ch] text-sm leading-6 text-page-ink-soft">
              Explore the wider range of packaging formats, from boxes and containers to cups, bags, wrapping, trays and accessories.
            </p>
          </div>

          <ul className="mt-px grid grid-cols-1 gap-px border-x border-b border-page-border bg-page-border sm:grid-cols-2 lg:grid-cols-3">
            {families.map((family) => (
              <TaxonomyCard
                key={family.slug}
                href={`/products/${family.slug}`}
                name={family.name}
                description={family.description}
              />
            ))}
          </ul>
        </section>
      </div>
    </PageWorld>
  );
}
