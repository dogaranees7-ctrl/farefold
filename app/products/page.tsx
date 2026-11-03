import type {Metadata} from "next";
export const metadata:Metadata={title:"Packaging Catalogue",description:"Explore FareFold's packaging catalogue across boxes, containers, cups, lids, bags, wrapping, trays, cones, buckets, accessories and custom branding."};
import Link from "next/link";
import {PageFrame} from "@/app/components/page-frame";
import {ProductCatalog} from "@/app/components/product-catalog";
import {productFamilies} from "@/lib/data/product-families";

export default function Products(){
 const roots=productFamilies.filter(x=>!x.parentSlug);
 const rootBySlug=new Map(roots.map(x=>[x.slug,x]));
 const parentBySlug=new Map(productFamilies.map(x=>[x.slug,x]));
 const getRoot=(slug:string):string=>{
  let current=parentBySlug.get(slug);
  const seen=new Set<string>();
  while(current?.parentSlug&&!seen.has(current.slug)){
   seen.add(current.slug);
   current=parentBySlug.get(current.parentSlug);
  }
  return current?.slug??slug;
 };
 const items=productFamilies.filter(x=>x.parentSlug).map(x=>{
  const rootSlug=getRoot(x.slug);
  const root=rootBySlug.get(rootSlug);
  const parent=parentBySlug.get(x.parentSlug!);
  return {slug:x.slug,name:x.name,parentSlug:rootSlug,parentName:root?.name??"Other formats",parentDetail:parent?.name??root?.name??"Packaging"};
 });
 const categories=roots.map(x=>({slug:x.slug,name:x.name,count:items.filter(item=>item.parentSlug===x.slug).length}));
 return <PageFrame eyebrow="03 / Products" title={<>The packaging catalogue.<br/><i>Every format. One place.</i></>}>
  <section className="section">
   <div className="sectionIntro wide"><h2>Find the right format for <i>your business.</i></h2><p>Explore the full range of packaging families, from food boxes and containers to cups, bags, wrapping, service accessories and custom-branded formats. Select a category or search by product name to find a starting point for your project.</p></div>
   <ProductCatalog items={items} categories={categories}/>
  </section>
  <section className="orangeBand"><p className="eyebrow">A format you cannot find?</p><h2>Bring the problem.<br/><i>We&apos;ll design the solution.</i></h2><p>Tell us what you serve, how it travels and what your brand needs. We can discuss a custom packaging format or a complete restaurant packaging system.</p><Link className="primary dark" href="/custom">Explore custom packaging <span>→</span></Link></section>
 </PageFrame>;
}
