import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/taxonomy/Breadcrumbs";
import { TaxonomyCard } from "@/components/taxonomy/TaxonomyCard";

import { businessTypes, productFamilies, getNodeBySlug, getChildren, getAncestors } from "@/lib/data";

type Params = { slug: string };
type Props = { params: Promise<Params> };
export const dynamicParams = false;
export function generateStaticParams(): Params[] { return businessTypes.map((type) => ({ slug: type.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; const node = getNodeBySlug(businessTypes, slug); if (!node) return {};
  return { title: node.name, description: node.description ?? `${node.name} — explore the brand, packaging and print considerations for this food-business type.`, alternates: { canonical: `/businesses/${node.slug}` } };
}

export default async function BusinessTypePage({ params }: Props) {
  const { slug } = await params; const node = getNodeBySlug(businessTypes, slug); if (!node) notFound();
  const children = getChildren(businessTypes, node.slug); const ancestors = getAncestors(businessTypes, node.slug);
  const solutionSets: Record<string, string[]> = {
    "pizza-restaurant": ["pizza-boxes","pizza-slice-boxes","takeaway-bags","stickers","sauce-containers"],
    "burger-restaurant": ["burger-boxes","burger-clamshells","fries-boxes","grease-resistant-paper","takeaway-bags"],
    "cafe-beverage": ["coffee-cups","cup-lids","cup-carriers","kraft-bags","printed-sleeves"],
    "bakery-desserts": ["bakery-boxes","window-boxes","pastry-boxes","dessert-cups","bakery-bags"],
    "pakistani-desi": ["meal-boxes","round-containers","compartment-containers","sauce-containers","takeaway-bags"],
    "cloud-kitchen": ["meal-boxes","food-containers","sauce-containers","delivery-bags","stickers"],
    "shawarma": ["shawarma-paper","food-boats","sauce-containers","takeaway-bags","labels"],
    "fried-chicken": ["chicken-boxes","chicken-buckets","chicken-trays","sauce-containers","delivery-bags"],
    "ice-cream": ["ice-cream-cups","ice-cream-containers","spoons","takeaway-bags","stickers"],
  };
  const solutionSlugs = solutionSets[node.slug] ?? ["meal-boxes","food-containers","takeaway-bags","stickers","custom-packaging"];
  const solutionNodes = solutionSlugs.map(slug => productFamilies.find(p => p.slug === slug)).filter(Boolean);
  return <div className="bg-[#eee7dc] text-[#171614]"><div className="mx-auto w-full max-w-[120rem] px-5 py-16 sm:px-8 sm:py-24 lg:px-14"><Breadcrumbs items={[{name:"Businesses",href:"/businesses"},...ancestors.map(a=>({name:a.name,href:`/businesses/${a.slug}`})),{name:node.name}]} /><div className="mt-10 border-b border-black/15 pb-10"><p className="text-xs uppercase tracking-[0.24em] text-[#7d4b35]">Business type</p><h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.05em] sm:text-7xl">{node.name}</h1>{node.description && <p className="mt-6 max-w-3xl text-lg leading-8 text-black/60">{node.description}</p>}</div>
  {children.length>0 ? <ul className="mt-10 grid gap-px border border-black/15 bg-black/15 sm:grid-cols-2 lg:grid-cols-3">{children.map(child=><TaxonomyCard key={child.slug} href={`/businesses/${child.slug}`} name={child.name} description={child.description}/>)}</ul> : null}
  <section className="mt-14 border-t border-black/15 pt-10"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-xs uppercase tracking-[0.22em] text-[#7d4b35]">Recommended starting points</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">Packaging for {node.name}.</h2></div><Link href="/products" className="text-sm font-semibold">See all formats →</Link></div><ul className="mt-7 grid gap-px border border-black/15 bg-black/15 sm:grid-cols-2 lg:grid-cols-5">{solutionNodes.map(product=><li key={product!.slug}><Link href={`/products/${product!.slug}`} className="block bg-[#eee7dc] p-5 hover:bg-white"><span className="text-xs uppercase tracking-[0.18em] text-black/35">Format</span><strong className="mt-8 block text-lg font-semibold">{product!.name}</strong><span className="mt-2 block text-sm text-black/55">Explore this packaging direction.</span></Link></li>)}</ul></section>
  <div className="mt-14 grid gap-4 border-t border-black/15 pt-8 sm:grid-cols-3"><Link href="/branding" className="border border-black/15 p-5 hover:bg-white/50"><span className="text-xs uppercase tracking-[0.2em] text-black/40">Branding</span><strong className="mt-3 block text-xl">Build the identity</strong><span className="mt-2 block text-sm text-black/60">Strategy, visual direction and a system that travels onto packaging.</span></Link><Link href="/products" className="border border-black/15 p-5 hover:bg-white/50"><span className="text-xs uppercase tracking-[0.2em] text-black/40">Packaging</span><strong className="mt-3 block text-xl">Find the formats</strong><span className="mt-2 block text-sm text-black/60">Boxes, cups, bags, containers, trays and branded pieces.</span></Link><Link href="/contact" className="border border-black/15 p-5 hover:bg-white/50"><span className="text-xs uppercase tracking-[0.2em] text-black/40">Project</span><strong className="mt-3 block text-xl">Solve the problem</strong><span className="mt-2 block text-sm text-black/60">Tell us what the restaurant needs to do better.</span></Link></div>
  </div></div>;
}