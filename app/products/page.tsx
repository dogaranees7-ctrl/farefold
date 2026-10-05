import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "@/components/spec/Sheet";
import { TaxonomyCard } from "@/components/taxonomy/TaxonomyCard";
import { PageWorld } from "@/components/ui/PageWorld";
import { catalogProducts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Farefold packaging products and concept-led formats for food, beverage, takeaway and retail brands.",
  alternates: { canonical: "/products" },
};

const families = [
  { name: "Boxes", href: "/products/boxes", text: "Pizza, meal, bakery, takeaway and custom box formats." },
  { name: "Containers", href: "/products/containers", text: "Food, meal, sauce and compartment container formats." },
  { name: "Cups & carriers", href: "/products/cups", text: "Hot and cold cups plus carry systems for drinks." },
  { name: "Bags", href: "/products/bags", text: "Takeaway, bakery, retail and delivery carry formats." },
  { name: "Trays", href: "/products/trays", text: "Serving and presentation-led tray structures." },
  { name: "Branding / custom", href: "/products/branding-custom", text: "Printed packaging, labels, sleeves, inserts and custom work." },
];

function ProductVisual({ visual, index }: { visual: (typeof catalogProducts)[number]["visual"]; index: number }) {
  const labels = {
    pizza: ["PIZZA", "SIDES", "SAUCE"],
    coffee: ["CUP 01", "CUP 02", "BAKERY"],
    meal: ["MAIN", "SIDE", "DIP"],
    sauce: ["CLASSIC", "GARLIC", "BBQ"],
    bottle: ["DRINK", "BRAND", "LABEL"],
    sushi: ["MAIN", "ROLL", "DIP"],
    bag: ["CARRY", "BRAND", "HANDLE"],
    bakery: ["BAKERY", "WINDOW", "BRAND"],
  } as const;
  const items = labels[visual];

  return (
    <div className="relative flex min-h-[19rem] items-center justify-center overflow-hidden border-b border-page-border bg-page-surface p-7">
      <span className="absolute left-5 top-5 t-tech-sm text-page-ink-mute">PRODUCT / {String(index + 1).padStart(2, "0")}</span>
      <span className="absolute right-5 top-5 t-tech-sm text-page-accent">FAREFOLD</span>
      <div className="relative w-full max-w-[19rem]">
        <div className="grid grid-cols-3 gap-2">
          {items.map((item, i) => (
            <div
              key={item}
              className={[
                "flex aspect-square items-center justify-center border border-page-ink px-2 text-center",
                i === 0 ? "bg-page-ink text-page-bg" : "text-page-ink",
              ].join(" ")}
            >
              <span className="t-tech-sm">{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-2 h-2 w-2/3 border border-page-ink" />
        <div className="mt-1 h-2 w-1/2 border border-page-ink" />
      </div>
    </div>
  );
}

export default function ProductsIndexPage() {
  return (
    <PageWorld world="shop" className="substrate bg-page-bg py-20 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
        <PageHead
          tone="page"
          eyebrow="Products / Packaging catalogue"
          headline={
            <>
              Packaging that
              <br />
              <span className="text-page-accent">does more.</span>
            </>
          }
          intro={
            <p>
              Start with a real packaging direction. Farefold products are built around the food,
              the journey and the brand — not just a generic box on a shelf. Specifications,
              materials, print, quantity and pricing are confirmed for each brief.
            </p>
          }
          meta={[
            ["Product directions", String(catalogProducts.length)],
            ["Built for", "Food / beverage / retail"],
          ]}
        />

        <section aria-labelledby="catalog-heading" className="mt-14 sm:mt-20">
          <div className="flex flex-col gap-4 border-y border-page-border py-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="t-tech-sm text-page-accent">Featured catalogue / 01—08</p>
              <h2 id="catalog-heading" className="t-display-tight mt-2 text-2xl text-page-ink sm:text-4xl">
                Choose the problem to solve
              </h2>
            </div>
            <p className="max-w-[46ch] text-sm leading-6 text-page-ink-soft">
              These are Farefold product directions. Open one to see what it is designed to solve,
              then take the specification to a quote.
            </p>
          </div>

          <ul className="mt-px grid grid-cols-1 gap-px border-x border-b border-page-border bg-page-border sm:grid-cols-2 xl:grid-cols-4">
            {catalogProducts.map((product, index) => (
              <li key={product.id} className="flex min-w-0 flex-col bg-page-bg">
                <ProductVisual visual={product.visual} index={index} />
                <div className="flex flex-1 flex-col p-6">
                  <p className="t-tech-sm text-page-ink-mute">{product.eyebrow}</p>
                  <h3 className="t-display-tight mt-3 text-xl text-page-ink">{product.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-page-ink-soft">{product.description}</p>
                  <p className="mt-4 border-l-2 border-page-accent pl-3 text-xs leading-5 text-page-ink-mute">
                    {product.solution}
                  </p>
                  <Link href={`/products/item/${product.slug}`} className="link-rule mt-auto inline-flex w-fit pt-6 text-sm text-page-ink">
                    View product <span aria-hidden="true" className="ml-2">↗</span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="families-heading" className="mt-20 sm:mt-28">
          <div className="flex flex-col gap-4 border-y border-page-border py-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="t-tech-sm text-page-accent">Browse the range</p>
              <h2 id="families-heading" className="t-display-tight mt-2 text-2xl text-page-ink sm:text-4xl">
                Shop by packaging family
              </h2>
            </div>
            <p className="max-w-[44ch] text-sm leading-6 text-page-ink-soft">
              Need a different structure? Start with the family and we will narrow it around your product.
            </p>
          </div>
          <ul className="mt-px grid grid-cols-1 gap-px border-x border-b border-page-border sm:grid-cols-2 lg:grid-cols-3">
            {families.map((family) => (
              <li key={family.href} className="bg-page-bg">
                <TaxonomyCard href={family.href} name={family.name} description={family.text} />
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-20 border border-page-border bg-page-ink p-7 text-page-bg sm:mt-28 sm:p-10">
          <p className="t-tech-sm text-page-accent">Need something that is not here?</p>
          <div className="mt-3 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="t-display-tight max-w-[20ch] text-3xl sm:text-5xl">
              Tell us what the packaging needs to do.
            </h2>
            <Link href="/contact" className="link-rule w-fit border border-page-bg px-5 py-4 text-sm">
              Start a packaging brief ↗
            </Link>
          </div>
        </section>
      </div>
    </PageWorld>
  );
}
