import Link from "next/link";
import {notFound} from "next/navigation";
import type {Metadata} from "next";
import {PageFrame} from "@/app/components/page-frame";
import {productFamilies} from "@/lib/data/product-families";
import {getWhatsappLink} from "@/lib/site-config";

export function generateStaticParams(){
 return productFamilies.filter(x=>x.parentSlug).map(x=>({slug:x.slug}));
}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params;
 const item=productFamilies.find(x=>x.slug===slug && x.parentSlug);
 if(!item)return {};
 return {title:item.name,description:`Explore the ${item.name.toLowerCase()} format in FareFold's packaging catalogue. Discuss structure, branding and project requirements with our team.`};
}

function getAncestors(slug:string){
 const path:typeof productFamilies=[];
 const seen=new Set<string>();
 let current=productFamilies.find(x=>x.slug===slug);
 while(current && !seen.has(current.slug)){
  seen.add(current.slug);
  path.unshift(current);
  current=current.parentSlug?productFamilies.find(x=>x.slug===current?.parentSlug):undefined;
 }
 return path;
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

 const ancestors=getAncestors(slug);
 const root=ancestors[0];
 const parent=ancestors.length>1?ancestors[ancestors.length-2]:undefined;
 const siblings=productFamilies.filter(x=>x.parentSlug===(parent?.slug??root?.slug) && x.slug!==item.slug).slice(0,8);
 const uses=getUseCases(item.name);
 const enquiryMessage=`Hi FareFold — I would like a quotation for ${item.name}.\\n\\nBusiness name: \\nCity / delivery location: \\nApproximate quantity: \\nFood / product being packed: \\nBrand artwork available: Yes / No\\nRequired timeline: \\nAdditional details: `;
 const whatsappHref=getWhatsappLink(enquiryMessage);

 return <PageFrame eyebrow={`Products / ${root?.name??"Packaging"} / ${item.name}`} title={<>{item.name}.<br/><i>Designed around your business.</i></>}>
  <section className="section productBreadcrumbs" aria-label="Catalogue breadcrumb">
   <Link href="/products">All formats</Link>
   {ancestors.slice(0,-1).map(node=><span key={node.slug}>/ <span>{node.name}</span></span>)}
   <span>/ <strong>{item.name}</strong></span>
  </section>

  <section className="productDetail productDetailTextOnly">
   <div className="formatStatement">
    <p className="eyebrow">Packaging format · {root?.name??"Packaging"}</p>
    <span className="formatIndex">FAREFOLD / FORMAT DIRECTORY</span>
    <h2>{item.name}</h2>
    <p>A starting point for developing the right packaging structure, material, print approach and quantity for your food business.</p>
    <span className="formatStatus">Project-based specification · Details confirmed on enquiry</span>
   </div>
   <div>
    <p className="eyebrow">Product enquiry</p>
    <h2>Specify it. <i>Brand it. Quote it.</i></h2>
    <p>This page describes a packaging format, not a confirmed stock item. We will develop and confirm the construction, dimensions, materials, printing, minimum order quantity, production lead time and price against your requirements before quoting.</p>
    <div className="detailActions"><a className="primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">Enquire about {item.name} on WhatsApp <span>→</span></a><Link className="outlineCta" href="/products">Back to formats</Link></div>
   </div>
  </section>

  <section className="section productSpecGuide">
   <div className="sectionIntro wide"><p className="eyebrow">What we confirm with you</p><h2>The right format.<br/><i>For the real job.</i></h2><p>We do not publish unverified product specifications. These are the details we establish with you before recommending or quoting a solution.</p></div>
   <div className="catalogGrid">
    <article className="catalogGroup"><div><p className="eyebrow">01 / Fit</p><h3>Food & portion</h3><p>What the packaging needs to hold, protect and present.</p></div></article>
    <article className="catalogGroup"><div><p className="eyebrow">02 / Structure</p><h3>Dimensions & material</h3><p>Suitable construction, dimensions, closure and material options.</p></div></article>
    <article className="catalogGroup"><div><p className="eyebrow">03 / Branding</p><h3>Print & finish</h3><p>Artwork, print coverage, colour and finishing options for the format.</p></div></article>
    <article className="catalogGroup"><div><p className="eyebrow">04 / Order</p><h3>Quantity & timing</h3><p>Minimum order, pack quantity, production lead time and price.</p></div></article>
   </div>
   <div className="detailUseCases"><p className="eyebrow">Potential applications to discuss</p><div className="miniGrid">{uses.map(use=><div key={use}><span>{use}</span></div>)}</div></div>
  </section>

  {siblings.length>0&&<section className="section related"><div className="sectionIntro"><p className="eyebrow">Related formats · {parent?.name??root?.name}</p><h2>Explore this <i>family.</i></h2></div><div className="miniGrid">{siblings.map(x=><Link href={`/products/${x.slug}`} key={x.slug}><span>{x.name}</span><b>↗</b></Link>)}</div></section>}

  <section className="orangeBand"><p className="eyebrow">Start a product enquiry</p><h2>Tell us what you need.<br/><i>We&apos;ll help specify it.</i></h2><p>Share the food product, approximate quantity, city and any existing brand artwork. FareFold will develop a suitable solution and confirm the commercial details before you order.</p><a className="primary dark" href={whatsappHref} target="_blank" rel="noopener noreferrer">Start a WhatsApp enquiry <span>→</span></a></section>
 </PageFrame>;
}
