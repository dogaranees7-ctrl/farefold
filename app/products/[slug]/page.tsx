import Link from "next/link";
import {notFound} from "next/navigation";
import type {Metadata} from "next";
import {PageFrame} from "@/app/components/page-frame";
import {productFamilies} from "@/lib/data/product-families";
import {ConceptPackagingWall} from "@/app/components/concept-packaging-wall";

export function generateStaticParams(){
 return productFamilies.filter(x=>x.parentSlug).map(x=>({slug:x.slug}));
}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params;
 const item=productFamilies.find(x=>x.slug===slug && x.parentSlug);
 if(!item)return {};
 return {title:item.name,description:`Explore ${item.name.toLowerCase()} as part of the Farefold restaurant packaging catalogue.`};
}

function familyFor(slug:string){
 const item=productFamilies.find(x=>x.slug===slug && x.parentSlug);
 return item?.parentSlug ? productFamilies.find(x=>x.slug===item.parentSlug) : undefined;
}

function useCases(name:string){
 const lower=name.toLowerCase();
 if(lower.includes("pizza")) return ["Pizza delivery","Takeaway","Delivery bundles"];
 if(lower.includes("burger")) return ["Burger service","Takeaway","Delivery"];
 if(lower.includes("cup")||lower.includes("lid")||lower.includes("straw")||lower.includes("carrier")) return ["Cafés","Coffee shops","Juice & beverage service","Dessert service"];
 if(lower.includes("bakery")||lower.includes("cake")||lower.includes("dessert")) return ["Bakery takeaway","Cake / dessert presentation","Gift and takeaway"];
 if(lower.includes("sauce")) return ["Sauces and condiments","Meal bundles","Delivery orders"];
 if(lower.includes("bag")) return ["Takeaway","Delivery handoff","Retail / carry-out"];
 if(lower.includes("tray")||lower.includes("container")||lower.includes("box")) return ["Takeaway","Delivery","Dine-in / service"];
 return ["Restaurant service","Takeaway","Delivery","Custom brand systems"];
}

export default async function ProductFamilyPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;
 const item=productFamilies.find(x=>x.slug===slug && x.parentSlug);
 if(!item)notFound();

 const parent=familyFor(slug);
 const siblings=productFamilies.filter(x=>x.parentSlug===item.parentSlug && x.slug!==item.slug).slice(0,8);
 const uses=useCases(item.name);

 return <PageFrame eyebrow={`Products / ${item.name}`} title={<>{item.name}.<br/><i>Ready for your brand.</i></>}>
  <section className="productDetail">
   <div>
    <div className="routeTrail"><Link href="/products">Products</Link><span>/</span>{parent?.name??"Packaging"}<span>/</span>{item.name}</div>
    <div className="detailVisual" aria-label={`${item.name} packaging concept visual`}><span>CONCEPT / CUSTOM FORMAT</span><strong>{item.name}</strong><div className="detailShape"><i>F</i></div><small>Example visual — final structure, artwork and specifications are developed to order.</small></div>
   </div>
   <div>
    <p className="eyebrow">Product family</p>
    <h2>Specify it. <i>Brand it. Quote it.</i></h2>
    <p>This is a catalogue-ready product family page. The verified Farefold product range will be added here with real photography, dimensions, specifications, pack quantities and commercial details once the catalogue is supplied.</p>
    <div className="detailActions"><Link className="primary" href={`/contact?product=${encodeURIComponent(item.name)}`}>Request a quote <span>→</span></Link><Link className="outlineCta" href="/products">Back to products</Link></div>
   </div>
  </section>

  <section className="section"><div className="sectionIntro wide"><p className="eyebrow">Visual direction</p><h2>See the format.<br/><i>Then make it yours.</i></h2><p>These visuals communicate packaging possibilities before a physical sample exists. They are concept examples, not claims of current stock.</p></div><ConceptPackagingWall/></section>

  <section className="section productSpecGuide">
   <div className="sectionIntro wide"><p className="eyebrow">What we will show when the catalogue is loaded</p><h2>Useful product information.<br/><i>No guessed specifications.</i></h2><p>Every real product can be presented with the information needed to make a buying decision. Until the verified range is supplied, the site deliberately avoids invented sizes, materials, MOQs or prices.</p></div>
   <div className="catalogGrid">
    <article className="catalogGroup"><div><p className="eyebrow">01 / Product</p><h3>Photography</h3><p>Real product photographs, detail shots and branded examples supplied or approved by Farefold.</p></div></article>
    <article className="catalogGroup"><div><p className="eyebrow">02 / Specification</p><h3>Details</h3><p>Verified size, capacity, construction, printing, pack quantity and other relevant specifications.</p></div></article>
    <article className="catalogGroup"><div><p className="eyebrow">03 / Fit</p><h3>Use cases</h3><p>Clear guidance about the restaurant formats and menu situations the product is suited to.</p></div></article>
    <article className="catalogGroup"><div><p className="eyebrow">04 / Project</p><h3>Branding</h3><p>How the format can be branded, customized or connected to the wider restaurant packaging system.</p></div></article>
   </div>
   <div className="detailUseCases"><p className="eyebrow">Typical use cases</p><div className="miniGrid">{uses.map(use=><div key={use}><span>{use}</span></div>)}</div></div>
  </section>

  {siblings.length>0&&<section className="section related"><div className="sectionIntro"><p className="eyebrow">Related</p><h2>More in this <i>family.</i></h2></div><div className="miniGrid">{siblings.map(x=><Link href={`/products/${x.slug}`} key={x.slug}><span>{x.name}</span><b>↗</b></Link>)}</div></section>}

  <section className="orangeBand"><p className="eyebrow">Need this format for your restaurant?</p><h2>Tell us the product.<br/><i>We&apos;ll shape the system.</i></h2><p>Send the format, approximate quantity, city and any existing artwork or brand direction. We&apos;ll take it from there.</p><Link className="primary dark" href={`/contact?product=${encodeURIComponent(item.name)}`}>Start a product brief <span>→</span></Link></section>
 </PageFrame>;
}