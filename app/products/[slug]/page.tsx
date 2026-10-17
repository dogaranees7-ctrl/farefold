import Link from "next/link";
import {notFound} from "next/navigation";
import type {Metadata} from "next";
import {PageFrame} from "@/app/components/page-frame";
import {productFamilies} from "@/lib/data/product-families";

export function generateStaticParams(){
 return productFamilies.filter(x=>x.parentSlug).map(x=>({slug:x.slug}));
}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params;
 const item=productFamilies.find(x=>x.slug===slug && x.parentSlug);
 if(!item)return {};
 return {title:item.name,description:`Explore ${item.name.toLowerCase()} as part of the Farefold restaurant packaging catalogue.`};
}

const referenceImages={
 burger:"https://images.pexels.com/photos/33673831/pexels-photo-33673831.jpeg?auto=compress&cs=tinysrgb&w=1800",
 fries:"https://images.pexels.com/photos/33673831/pexels-photo-33673831.jpeg?auto=compress&cs=tinysrgb&w=1400",
 cups:"https://images.pexels.com/photos/7318858/pexels-photo-7318858.jpeg?cs=srgb&dl=pexels-angela-roma-7318858.jpg&fm=jpg",
 containers:"https://images.pexels.com/photos/32424228/pexels-photo-32424228.jpeg?cs=srgb&dl=pexels-zehra-k-710717493-32424228.jpg&fm=jpg",
 boxes:"https://images.pexels.com/photos/8015739/pexels-photo-8015739.jpeg?cs=srgb&dl=pexels-cup-of-couple-8015739.jpg&fm=jpg"
} as const;

function referenceImageFor(name:string){
 const lower=name.toLowerCase();
 if(lower.includes("pizza")||lower.includes("burger")||lower.includes("chicken")||lower.includes("sandwich")) return lower.includes("fries") ? referenceImages.fries : referenceImages.burger;
 if(lower.includes("fries")||lower.includes("snack")||lower.includes("cone")) return referenceImages.fries;
 if(lower.includes("cup")||lower.includes("lid")||lower.includes("straw")||lower.includes("carrier")) return referenceImages.cups;
 if(lower.includes("container")||lower.includes("pot")||lower.includes("bowl")||lower.includes("tub")) return referenceImages.containers;
 return referenceImages.boxes;
}

function familyFor(slug:string){
 const item=productFamilies.find(x=>x.slug===slug && x.parentSlug);
 return item?.parentSlug ? productFamilies.find(x=>x.slug===item.parentSlug) : undefined;
}

function getUseCases(name:string){
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
 const uses=getUseCases(item.name);

 return <PageFrame eyebrow={`Products / ${item.name}`} title={<>{item.name}.<br/><i>Ready for your brand.</i></>}>
  <section className="productDetail">
   <div>
    <div className="routeTrail"><Link href="/products">Products</Link><span>/</span>{parent?.name??"Packaging"}<span>/</span>{item.name}</div>
    <div className="detailVisualPhoto" aria-label={`${item.name} reference packaging photograph`}>
     <img className="detailPhotoImg" src={referenceImageFor(item.name)} alt={`${item.name} packaging reference photograph`} />
     <span className="detailPhotoTag">MADE FOR YOUR BRAND</span>
     <div className="detailPhotoCaption"><strong>{item.name}</strong><small>Designed around your brand, menu and service needs.</small></div>
    </div>
   </div>
   <div>
    <p className="eyebrow">Product family</p>
    <h2>Specify it. <i>Brand it. Quote it.</i></h2>
    <p>Packaging made to work as hard as your brand. Choose a format, then shape the structure, print and finish around your menu and customer experience.</p>
    <div className="detailActions"><Link className="primary" href={`/contact?product=${encodeURIComponent(item.name)}`}>Request a quote <span>→</span></Link><Link className="outlineCta" href="/products">Back to products</Link></div>
   </div>
  </section>

  <section className="section productSpecGuide">
   <div className="sectionIntro wide"><p className="eyebrow">Built around your brief</p><h2>Considered design.<br/><i>Made for service.</i></h2><p>We develop packaging around your product, brand identity and day-to-day service requirements. Share the format and quantity you need and we will help shape the right solution.</p></div>
   <div className="catalogGrid">
    <article className="catalogGroup"><div><p className="eyebrow">01 / Product</p><h3>Product format</h3><p>Choose a packaging style that suits the menu item, service flow and customer experience.</p></div></article>
    <article className="catalogGroup"><div><p className="eyebrow">02 / Specification</p><h3>Specifications</h3><p>Discuss dimensions, construction, print options and order quantities for your packaging brief.</p></div></article>
    <article className="catalogGroup"><div><p className="eyebrow">03 / Fit</p><h3>Performance</h3><p>Plan packaging around holding, carrying, takeaway and delivery needs.</p></div></article>
    <article className="catalogGroup"><div><p className="eyebrow">04 / Project</p><h3>Brand identity</h3><p>Bring your logo, colours and visual identity into a consistent packaging system.</p></div></article>
   </div>
   <div className="detailUseCases"><p className="eyebrow">Typical use cases</p><div className="miniGrid">{uses.map(use=><div key={use}><span>{use}</span></div>)}</div></div>
  </section>

  {siblings.length>0&&<section className="section related"><div className="sectionIntro"><p className="eyebrow">Related</p><h2>More in this <i>family.</i></h2></div><div className="miniGrid">{siblings.map(x=><Link href={`/products/${x.slug}`} key={x.slug}><span>{x.name}</span><b>↗</b></Link>)}</div></section>}

  <section className="orangeBand"><p className="eyebrow">Need this format for your restaurant?</p><h2>Tell us the product.<br/><i>We&apos;ll shape the system.</i></h2><p>Send the format, approximate quantity, city and any existing artwork or brand direction. We&apos;ll take it from there.</p><Link className="primary dark" href={`/contact?product=${encodeURIComponent(item.name)}`}>Start a product brief <span>→</span></Link></section>
 </PageFrame>;
}
