import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/taxonomy/Breadcrumbs";
import { TaxonomyCard } from "@/components/taxonomy/TaxonomyCard";
import { CatalogueEmptyState } from "@/components/taxonomy/CatalogueEmptyState";
import { businessTypes, getNodeBySlug, getChildren, getAncestors } from "@/lib/data";

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
  return <div className="bg-[#eee7dc] text-[#171614]"><div className="mx-auto w-full max-w-[120rem] px-5 py-16 sm:px-8 sm:py-24 lg:px-14"><Breadcrumbs items={[{name:"Businesses",href:"/businesses"},...ancestors.map(a=>({name:a.name,href:`/businesses/${a.slug}`})),{name:node.name}]} /><div className="mt-10 border-b border-black/15 pb-10"><p className="text-xs uppercase tracking-[0.24em] text-[#7d4b35]">Business type</p><h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.05em] sm:text-7xl">{node.name}</h1>{node.description && <p className="mt-6 max-w-3xl text-lg leading-8 text-black/60">{node.description}</p>}</div>
  {children.length>0 ? <ul className="mt-10 grid gap-px border border-black/15 bg-black/15 sm:grid-cols-2 lg:grid-cols-3">{children.map(child=><TaxonomyCard key={child.slug} href={`/businesses/${child.slug}`} name={child.name} description={child.description}/>)}</ul> : <div className="mt-10"><CatalogueEmptyState categoryName={node.name}/></div>}
  <div className="mt-14 grid gap-4 border-t border-black/15 pt-8 sm:grid-cols-3"><Link href="/branding" className="border border-black/15 p-5 hover:bg-white/50"><span className="text-xs uppercase tracking-[0.2em] text-black/40">Branding</span><strong className="mt-3 block text-xl">Build the identity</strong><span className="mt-2 block text-sm text-black/60">Strategy, visual direction and a system that travels onto packaging.</span></Link><Link href="/products" className="border border-black/15 p-5 hover:bg-white/50"><span className="text-xs uppercase tracking-[0.2em] text-black/40">Packaging</span><strong className="mt-3 block text-xl">Find the formats</strong><span className="mt-2 block text-sm text-black/60">Boxes, cups, bags, containers, trays and branded pieces.</span></Link><Link href="/contact" className="border border-black/15 p-5 hover:bg-white/50"><span className="text-xs uppercase tracking-[0.2em] text-black/40">Project</span><strong className="mt-3 block text-xl">Solve the problem</strong><span className="mt-2 block text-sm text-black/60">Tell us what the restaurant needs to do better.</span></Link></div>
  </div></div>;
}