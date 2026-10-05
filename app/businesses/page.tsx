import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { TaxonomyCard } from "@/components/taxonomy/TaxonomyCard";
import { businessTypes, getTopLevel } from "@/lib/data";

export const metadata: Metadata = {
  title: "Businesses",
  description: "Explore restaurant and food-business types and the branding, packaging and practical problems Farefold can solve.",
  alternates: { canonical: "/businesses" },
};

export default function BusinessesIndexPage() {
  const segments = getTopLevel(businessTypes);
  return <div className="bg-[#eee7dc] text-[#171614]">
    <section className="bg-[#4a214e] px-5 py-20 text-[#f4eadc] sm:px-8 sm:py-28 lg:px-14">
      <div className="mx-auto max-w-[120rem]">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c7ff42]">Farefold / Businesses</p>
        <h1 className="mt-7 max-w-6xl text-[clamp(3.5rem,8vw,8rem)] font-extrabold leading-[0.88] tracking-[-0.06em]">Start with the kind of restaurant you are building.</h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">Choose your business and find the branding, packaging and practical problems we can help you solve.</p>
      </div>
    </section>
    <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
      <div className="mx-auto max-w-[120rem]">
        <div className="flex flex-col justify-between gap-5 border-b border-black/15 pb-8 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#7d4b35]">Business taxonomy</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">Find your lane.</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-black/60">Every segment leads into its subcategories, then into the packaging, branding and custom routes that can solve the real business problem.</p>
        </div>
        <ul className="mt-10 grid gap-px border border-black/15 bg-black/15 sm:grid-cols-2 lg:grid-cols-3">
          {segments.map((segment) => <TaxonomyCard key={segment.slug} href={`/businesses/${segment.slug}`} name={segment.name} description={segment.description} />)}
        </ul>
        <div className="mt-14 grid gap-4 border-t border-black/15 pt-8 sm:grid-cols-2">
          <Link href="/packaging" className="border border-black/15 p-6 hover:bg-white/50"><p className="text-xs uppercase tracking-[0.2em] text-black/40">Packaging</p><h3 className="mt-3 text-2xl font-semibold">Browse by format <ArrowRightIcon className="ml-2 inline h-4 w-4" /></h3></Link>
          <Link href="/branding" className="border border-black/15 p-6 hover:bg-white/50"><p className="text-xs uppercase tracking-[0.2em] text-black/40">Branding</p><h3 className="mt-3 text-2xl font-semibold">Build the restaurant brand <ArrowRightIcon className="ml-2 inline h-4 w-4" /></h3></Link>
        </div>
      </div>
    </section>
  </div>;
}