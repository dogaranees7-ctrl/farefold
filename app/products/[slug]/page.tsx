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
 return {title:item.name,description:`Explore FareFold ${item.name.toLowerCase()} packaging design and manufacturing options for businesses across Pakistan. Discuss structure, branding and project requirements with our team.`};
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

function getFormatDescription(slug:string,name:string,rootName:string){
 const descriptions:Record<string,string>={
  "pizza-boxes":"A branded box concept for carrying pizza from oven to customer, with structure and presentation considered together.",
  "burger-boxes":"A packaging direction for burgers and assembled meals, planned around fit, handling and the customer handoff.",
  "coffee-cups":"A branded beverage cup direction for cafés and coffee service, considered alongside compatible lids and sleeves.",
  "paper-bags":"A carry format that connects the takeaway experience to the restaurant identity, with handle and size requirements defined per brief.",
  "food-wrapping-paper":"A branded or functional food wrap direction developed around the item being served and the required handling experience.",
  "meal-containers":"A container direction for complete meals, with portion layout, closure and delivery journey considered together.",
  "sauce-containers":"A small-format container direction for sauces and condiments, with portion, closure and bundle requirements confirmed per project.",
  "chicken-boxes":"A takeaway format for fried chicken and hot food, considered around portion fit, handling, ventilation and the wider meal bundle.",
  "snack-boxes":"A flexible format for sides, bites and snack portions, developed around serving size, handling and takeaway presentation.",
  "meal-boxes":"A meal packaging direction planned around the menu, portion layout, carrying and the customer opening experience.",
  "hot-cups":"A branded hot-drink cup direction considered with the beverage, lid fit, sleeve requirements and service flow.",
  "cold-cups":"A cold-beverage cup direction planned with drink type, lid compatibility, carrying and visual identity in mind.",
  "cake-boxes":"A presentation and carrying format for cakes, with dimensions, support and opening experience considered during development.",
  "bakery-boxes":"A bakery packaging direction developed around product shape, protection, presentation and the way customers carry it home.",
  "grease-resistant-paper":"A food-contact wrap or liner direction considered around the menu item, handling and intended service use.",
  "printed-boxes":"A branded box format where the structure and artwork are developed together around the product and customer experience.",
  "napkins":"A service accessory that can carry the brand identity consistently across dine-in and takeaway touchpoints.",
  "custom-packaging":"A project starting point for a packaging structure developed around a specific product, service journey or brand requirement."
 };
 if(descriptions[slug])return descriptions[slug];
 const familyCopy:Record<string,string>={
  "Boxes":"A purpose-developed box format for food presentation, protection and transport. FareFold can develop the dimensions, opening style, structure and branded artwork around the product and service journey.",
  "Containers":"A practical container format developed around the food, portion, closure and delivery requirements. Construction, dimensions, material options and compatibility are confirmed against the project brief.",
  "Cups":"A beverage or dessert cup format planned around the serving, customer handling and brand experience. Capacity, material, print treatment and compatible accessories are specified for each project.",
  "Lids":"A closure component selected to work with the relevant cup or container. Fit, opening style, use conditions and compatibility are confirmed with the matching packaging format.",
  "Bags":"A carry format developed around the items being packed, expected handling and brand presentation. Size, paper or other suitable material options, handle style and print requirements are agreed per brief.",
  "Wrapping":"A wrap, liner or sleeve format considered around the food item, serving method and presentation. The intended application and material requirements are reviewed before specification.",
  "Trays":"A serving or transport tray format developed around product layout, portion arrangement and handling. Dimensions, compartments, construction and finishing are confirmed for the intended use.",
  "Cones":"A shaped serving format for handheld snacks or desserts, designed around portion size, grip, presentation and the customer experience.",
  "Buckets":"A larger serving and carry format developed around the menu, portion size, stacking and takeaway handling. Structure, dimensions and branding are agreed for the application.",
  "Accessories":"A supporting packaging or service component designed to work as part of a consistent customer experience. Size, material, presentation and compatibility are confirmed for the intended use.",
  "Branding / Custom":"A custom-branded packaging component developed to connect the physical format with the wider brand identity. FareFold can discuss artwork, structure, print treatment and production requirements as one project."
 };
 return (familyCopy[rootName]??"A packaging format developed around your product, brand and service requirements.")+" FareFold works with businesses across Pakistan to develop packaging briefs and confirm practical production details before an order is placed.";
}

function getDesignDirections(rootName:string,name:string){
 const lower=name.toLowerCase();
 if(rootName==="Boxes"){
  if(lower.includes("pizza"))return ["Classic delivery box with considered ventilation","Slice-friendly or serving-convertible structure","Distinctive die-cut shape with bold exterior branding"];
  if(lower.includes("cake")||lower.includes("cupcake")||lower.includes("pastry"))return ["Presentation box with a secure product fit","Window-led display that reveals the product","Gift-style opening with coordinated inserts"];
  if(lower.includes("burger")||lower.includes("chicken")||lower.includes("snack"))return ["Quick-service tuck-top format","Compartments for sides, dips or meal combinations","Custom die-cut silhouette and printed interior"];
  return ["Clean folding carton with a strong brand panel","Window or reveal feature for product presentation","Custom insert or compartment layout"];
 }
 if(rootName==="Containers")return ["Portion-led shape and closure options","Multi-compartment layout for separated items","Clear, printed or label-led brand presentation"];
 if(rootName==="Cups")return ["Minimal identity with a strong repeat pattern","Full-wrap colour and graphic treatment","Coordinated cup, lid and sleeve family"];
 if(rootName==="Lids")return ["Coordinated fit and finish with the matching vessel","Branded or colour-coded identification","Opening and closure details suited to the serving"];
 if(rootName==="Bags")return ["Premium kraft look with restrained print","Bold full-panel brand graphics","Distinctive handle, gusset or base details"];
 if(rootName==="Wrapping")return ["Repeat-pattern branded wrap","Minimal one-colour food-service liner","Coordinated wrap, sleeve and seal system"];
 if(rootName==="Trays")return ["Simple open tray for quick service","Compartment layout for meal combinations","Printed tray with coordinated liner"];
 if(rootName==="Cones")return ["Bold wraparound print for handheld service","Folded rim and grip-focused presentation","Coordinated cone and serving accessory"];
 if(rootName==="Buckets")return ["Stackable takeaway presentation","Large-format repeat branding","Coordinated lid and carry details"];
 if(rootName==="Accessories")return ["Minimal brand mark for everyday service","Colour and pattern matched to the main pack","Coordinated multi-piece service kit"];
 if(rootName==="Branding / Custom")return ["Distinctive structural or die-cut direction","Consistent identity across a packaging family","Special opening, insert or unboxing detail"];
 return ["Brand-led visual direction","Practical structure shaped around the product","Coordinated details across the customer experience"];
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
 const designDirections=getDesignDirections(root?.name??"Packaging",item.name);
 const enquiryMessage=`Hi FareFold — I would like a quotation for ${item.name}.\n\nBusiness name: \nCity / delivery location: \nApproximate quantity: \nFood / product being packed: \nBrand artwork available: Yes / No\nRequired timeline: \nAdditional details: `;
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
    <div className="catalogPackVisual productFormatVisual" data-family={root?.slug??"boxes"} aria-hidden="true"><span className="catalogPackMark">F / F</span><i className="catalogPackShape"/><small>FAREFOLD · FORMAT STUDY</small></div>
    <span className="formatIndex">FAREFOLD / FORMAT DIRECTORY</span>
    <h2>{item.name}</h2>
    <p>{getFormatDescription(item.slug,item.name,root?.name??"Packaging")}</p>
    <span className="formatStatus">Project-based specification · Details confirmed on enquiry</span>
   </div>
   <div>
    <p className="eyebrow">Product enquiry</p>
    <h2>Specify it. <i>Brand it. Quote it.</i></h2>
    <p>FareFold develops packaging around each business, product and brand. Share a reference, sketch or brief and our team can discuss the structure, dimensions, suitable materials, printing and finishing, order quantity, production timeline and delivery requirements before preparing a quotation.</p>
    <div className="detailActions"><a className="primary" href={whatsappHref} target="_blank" rel="noopener noreferrer">Enquire about {item.name} on WhatsApp <span>→</span></a><Link className="outlineCta" href="/products">Back to formats</Link></div>
   </div>
  </section>

  <section className="section productDesignDirections">
   <div className="sectionIntro wide"><p className="eyebrow">Design development</p><h2>Make the format <i>feel like your brand.</i></h2><p>These are creative directions to explore with FareFold. We can adapt the visual treatment and develop a physical sample around your product, brand and production brief.</p></div>
   <div className="miniGrid">{designDirections.map((direction,index)=><div key={direction}><span>{String(index+1).padStart(2,"0")} / {direction}</span></div>)}</div>
  </section>
  <section className="section productSpecGuide">
   <div className="sectionIntro wide"><p className="eyebrow">What we confirm with you</p><h2>The right format.<br/><i>For the real job.</i></h2><p>Every project is reviewed against its intended use. We confirm the details that matter before production so the finished packaging is fit for the product and the customer journey.</p></div>
   <div className="catalogGrid">
    <article className="catalogGroup"><div><p className="eyebrow">01 / Fit</p><h3>Food & portion</h3><p>What the packaging needs to hold, protect and present.</p></div></article>
    <article className="catalogGroup"><div><p className="eyebrow">02 / Structure</p><h3>Dimensions & material</h3><p>Suitable construction, dimensions, closure and material options.</p></div></article>
    <article className="catalogGroup"><div><p className="eyebrow">03 / Branding</p><h3>Print & finish</h3><p>Artwork, print coverage, colour and finishing options for the format.</p></div></article>
    <article className="catalogGroup"><div><p className="eyebrow">04 / Order</p><h3>Quantity & timing</h3><p>Minimum order, pack quantity, production lead time and price.</p></div></article>
   </div>
   <div className="detailUseCases"><p className="eyebrow">Potential applications to discuss</p><div className="miniGrid">{uses.map(use=><div key={use}><span>{use}</span></div>)}</div></div>
  </section>

  {siblings.length>0&&<section className="section related"><div className="sectionIntro"><p className="eyebrow">Related formats · {parent?.name??root?.name}</p><h2>Explore this <i>family.</i></h2></div><div className="miniGrid">{siblings.map(x=><Link href={`/products/${x.slug}`} key={x.slug}><span>{x.name}</span><b>↗</b></Link>)}</div></section>}

  <section className="orangeBand"><p className="eyebrow">Start a product enquiry</p><h2>Tell us what you need.<br/><i>We&apos;ll help specify it.</i></h2><p>Share the food product, approximate quantity, city and any existing brand artwork. FareFold works with food businesses across Pakistan to develop a suitable packaging solution and confirm the commercial details before production.</p><a className="primary dark" href={whatsappHref} target="_blank" rel="noopener noreferrer">Start a WhatsApp enquiry <span>→</span></a></section>
 </PageFrame>;
}
