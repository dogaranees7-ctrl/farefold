import type { Metadata } from "next";
import Link from "next/link";

import { TaxonomyCard } from "@/components/taxonomy/TaxonomyCard";

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


export default function ProductsIndexPage() {
  return (
    <div className="bg-[#f3efe6] text-[#171614]"><div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
        <div className="border-b border-black/15 pb-10"><p className="text-xs uppercase tracking-[0.24em] text-[#567000]">Products / Packaging catalogue</p><h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.05em] sm:text-7xl">Packaging directions built around the food.</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-black/60">Explore formats designed around the food, the journey and the brand. Specifications, materials, print, quantity and pricing are confirmed for each brief.</p></div>

        <section aria-labelledby="catalog-heading" className="mt-14 sm:mt-20">
          <div className="flex flex-col gap-4 border-y border-black/15 py-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="t-tech-sm text-[#567000]">Featured catalogue / 01—08</p>
              <h2 id="catalog-heading" className="t-display-tight mt-2 text-2xl text-[#171614] sm:text-4xl">
                Choose the problem to solve
              </h2>
            </div>
            <p className="max-w-[46ch] text-sm leading-6 text-black/60">
              These are Farefold product directions. Open one to see what it is designed to solve,
              then take the specification to a quote.
            </p>
          </div>

          <ul className="mt-px grid grid-cols-1 gap-px border-x border-b border-black/15 bg-black/15 sm:grid-cols-2 xl:grid-cols-4">
            {catalogProducts.map((product, index) => (
              <li key={product.id} className="flex min-w-0 flex-col bg-[#f3efe6]">
                <div className="flex flex-1 flex-col p-6">
                  <p className="t-tech-sm text-[#171614]-mute">{product.eyebrow}</p>
                  <h3 className="t-display-tight mt-3 text-xl text-[#171614]">{product.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#171614]-soft">{product.description}</p>
                  <p className="mt-4 border-l-2 border-page-accent pl-3 text-xs leading-5 text-[#171614]-mute">
                    {product.solution}
                  </p>
                  <Link href={`/products/item/${product.slug}`} className="link-rule mt-auto inline-flex w-fit pt-6 text-sm text-[#171614]">
                    View product <span aria-hidden="true" className="ml-2">↗</span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="families-heading" className="mt-20 sm:mt-28">
          <div className="flex flex-col gap-4 border-y border-black/15 py-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="t-tech-sm text-[#567000]">Browse the range</p>
              <h2 id="families-heading" className="t-display-tight mt-2 text-2xl text-[#171614] sm:text-4xl">
                Shop by packaging family
              </h2>
            </div>
            <p className="max-w-[44ch] text-sm leading-6 text-[#171614]-soft">
              Need a different structure? Start with the family and we will narrow it around your product.
            </p>
          </div>
          <ul className="mt-px grid grid-cols-1 gap-px border-x border-b border-black/15 sm:grid-cols-2 lg:grid-cols-3">
            {families.map((family) => (
              <li key={family.href} className="bg-[#f3efe6]">
                <TaxonomyCard href={family.href} name={family.name} description={family.text} />
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-20 border border-black/15 bg-[#171614] p-7 text-[#f3efe6] sm:mt-28 sm:p-10">
          <p className="t-tech-sm text-[#567000]">Need something that is not here?</p>
          <div className="mt-3 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="t-display-tight max-w-[20ch] text-3xl sm:text-5xl">
              Tell us what the packaging needs to do.
            </h2>
            <Link href="/contact" className="link-rule w-fit border border-[#f3efe6] px-5 py-4 text-sm">
              Start a packaging brief ↗
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
