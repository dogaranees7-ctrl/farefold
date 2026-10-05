import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { TaxonomyCard } from "@/components/taxonomy/TaxonomyCard";
import { productFamilies, getTopLevel } from "@/lib/data";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore Farefold's restaurant packaging catalogue by format, from boxes and containers to cups, bags, trays, wrapping, tableware and custom printed pieces.",
  alternates: { canonical: "/products" },
};

const principles = [
  ["Food first", "Heat, grease, moisture, portion, shape and travel determine the starting format."],
  ["Brand everywhere", "The identity should work on the panel, lid, sleeve, bag, label and printed piece the customer actually sees."],
  ["Built to the job", "If an existing format does not solve the food or the customer journey, take the problem to Custom."],
];

export default function ProductsIndexPage() {
  const families = getTopLevel(productFamilies);

  return <div className="bg-[#f3efe6] text-[#171614]">
    <section className="bg-[#171614] px-5 py-20 text-[#f3efe6] sm:px-8 sm:py-28 lg:px-14">
      <div className="mx-auto max-w-[120rem]">
        <p className="text-xs uppercase tracking-[0.28em] text-[#c8ff3d]">Farefold / Products</p>
        <h1 className="mt-8 max-w-6xl text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.88] tracking-[-0.06em]">Packaging organised around the way food moves.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60">Browse the complete packaging taxonomy by format. These are product directions and families, not invented photographed SKUs. When you have a real product or reference sample, we can place it into the right system.</p>
      </div>
    </section>

    <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
      <div className="mx-auto max-w-[120rem]">
        <div className="flex flex-col justify-between gap-6 border-b border-black/15 pb-8 lg:flex-row lg:items-end">
          <div><p className="text-xs uppercase tracking-[0.24em] text-[#7d4b35]">Packaging catalogue</p><h2 className="mt-4 text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">Choose a format.</h2></div>
          <Link href="/packaging" className="inline-flex items-center gap-2 text-sm font-semibold">See packaging by job <ArrowRightIcon className="h-4 w-4" /></Link>
        </div>

        <ul className="mt-10 grid gap-px border border-black/15 bg-black/15 sm:grid-cols-2 lg:grid-cols-3">
          {families.map((family) => <TaxonomyCard key={family.slug} href={`/products/${family.slug}`} name={family.name} description={family.description} />)}
        </ul>
      </div>
    </section>

    <section className="bg-[#e9ffb0] px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
      <div className="mx-auto max-w-[120rem]">
        <p className="text-xs uppercase tracking-[0.24em] text-[#426000]">How we think about it</p>
        <div className="mt-10 grid gap-px border border-black/15 bg-black/15 md:grid-cols-3">
          {principles.map(([title,body],i) => <article key={title} className="bg-[#e9ffb0] p-7 sm:p-9"><span className="text-xs tracking-[0.2em] text-black/35">0{i+1}</span><h3 className="mt-12 text-3xl font-semibold tracking-[-0.03em]">{title}</h3><p className="mt-4 leading-7 text-black/60">{body}</p></article>)}
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/businesses" className="inline-flex items-center justify-center gap-3 bg-[#171614] px-6 py-4 text-sm font-semibold text-white">Shop by business <ArrowRightIcon className="h-4 w-4" /></Link>
          <Link href="/custom-packaging" className="inline-flex items-center justify-center gap-3 border border-black/20 px-6 py-4 text-sm font-semibold">Bring a packaging problem <ArrowRightIcon className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  </div>;
}