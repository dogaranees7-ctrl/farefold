import type {Metadata} from "next";
export const metadata:Metadata={title:"Packaging Products",description:"Browse Farefold packaging formats across boxes, containers, cups, bags, wrapping, trays, accessories and custom formats."};
import Link from "next/link";
import {PageFrame} from "@/app/components/page-frame";
import {ProductCatalog} from "@/app/components/product-catalog";
import {productFamilies} from "@/lib/data/product-families";

export default function Products(){
 const familyNames=new Map(productFamilies.filter(x=>!x.parentSlug).map(x=>[x.slug,x.name]));
 const items=productFamilies.filter(x=>x.parentSlug).map(x=>({slug:x.slug,name:x.name,parentSlug:x.parentSlug!,parentName:familyNames.get(x.parentSlug!)??x.parentSlug!.replaceAll("-"," ")}));

 return <PageFrame eyebrow="03 / Products" title={<>Browse the formats.<br/><i>Build your system.</i></>}>
  <section className="section">
   <div className="sectionIntro wide"><h2>The product range is <i>being prepared.</i></h2><p>We are preparing the Farefold product range. For now, explore the packaging formats we can discuss and develop with you. We will publish product photographs, verified specifications, order quantities and prices only when those details are confirmed.</p></div>
   <ProductCatalog items={items}/>
  </section>
  <section className="orangeBand"><p className="eyebrow">Not a standard format?</p><h2>Bring the problem.<br/><i>We&apos;ll design the solution.</i></h2><p>Custom boxes, bags, cups, trays, containers, die-cuts and complete restaurant packaging systems.</p><Link className="primary dark" href="/custom">Explore custom packaging <span>→</span></Link></section>
 </PageFrame>
}