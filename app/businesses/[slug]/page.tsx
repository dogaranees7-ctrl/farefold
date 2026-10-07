import Link from "next/link";
import {notFound} from "next/navigation";
import type {Metadata} from "next";
import {PageFrame} from "@/app/components/page-frame";
import {businessTypes} from "@/lib/data/business-types";

const businessSolutions:Record<string,{promise:string;packaging:string[];touchpoints:string[]}> = {
  "restaurants":{promise:"A connected restaurant brand from menu to handoff.",packaging:["Takeaway boxes","Bags and carry systems","Cups and beverage formats","Sauce and accessory formats"],touchpoints:["Menu + print","Packaging identity","Table / counter touchpoints","Launch system"]},
  "bakery-desserts":{promise:"Packaging that protects delicate products and carries the bakery experience home.",packaging:["Cake and bakery boxes","Window and presentation formats","Bags and tissue","Stickers, cards and seals"],touchpoints:["Brand identity","Box architecture","Labels + stickers","Gift / takeaway experience"]},
  "cafe-beverage":{promise:"A beverage-led identity designed to travel in the customer's hand.",packaging:["Hot and cold cups","Lids and sleeves","Carriers","Bags and takeaway pieces"],touchpoints:["Cup identity","Menu + signage","Social launch identity","Takeaway system"]},
  "delivery-first":{promise:"A delivery system designed around the real journey from kitchen to customer.",packaging:["Meal containers","Delivery bags","Seals and labels","Sauce and accessory formats"],touchpoints:["Delivery brand experience","Order architecture","Packaging hierarchy","Repeatable operating system"]},
  "catering-institutional":{promise:"A practical brand and packaging system that works at volume.",packaging:["Large-format trays and boxes","Catering carriers","Labels and identification","Service and presentation pieces"],touchpoints:["Brand architecture","Event / service collateral","Packaging standards","Volume-ready system"]},
  "retail-production":{promise:"Packaging that turns a food product into a recognizable shelf-ready brand.",packaging:["Retail boxes and pouches","Labels and sleeves","Transport formats","Gift / promotional packaging"],touchpoints:["Brand positioning","Pack architecture","Label system","Launch / range identity"]}
};

function solutionFor(item:{parentSlug?:string;name:string}) {
  const parent=item.parentSlug||"";
  const base=businessSolutions[parent]||businessSolutions.restaurants;
  const lower=item.name.toLowerCase();
  if(lower.includes("pizza")) return {...base,promise:"A pizza brand system built around heat, delivery and the box customers see first.",packaging:["Pizza boxes","Slice / side formats","Bags and seals","Sauce and accessory formats"]};
  if(lower.includes("burger")) return {...base,promise:"A burger brand system that keeps the identity strong from wrapper to delivery bag.",packaging:["Burger boxes","Wraps and liners","Bags and seals","Sauce and accessory formats"]};
  if(lower.includes("coffee")||lower.includes("café")) return {...businessSolutions["cafe-beverage"],promise:"A café identity designed to be recognized across every cup, counter and takeaway moment."};
  if(lower.includes("ice cream")||lower.includes("dessert")) return {...businessSolutions["bakery-desserts"],promise:"A dessert experience designed for presentation, carrying and the moment the pack is opened."};
  if(lower.includes("cloud")||lower.includes("ghost")||lower.includes("meal prep")) return {...businessSolutions["delivery-first"],promise:"A delivery-first system that makes a changing menu feel like one dependable brand."};
  return base;
}

export function generateStaticParams(){return businessTypes.filter(x=>x.parentSlug).map(x=>({slug:x.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const item=businessTypes.find(x=>x.slug===slug&&x.parentSlug);if(!item)return {};return {title:`${item.name} branding & packaging`,description:`Farefold builds branding, packaging and custom systems for ${item.name.toLowerCase()} businesses.`};}

export default async function BusinessPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params; const item=businessTypes.find(x=>x.slug===slug&&x.parentSlug); if(!item)notFound();
 const solution=solutionFor(item);
 return <PageFrame eyebrow={`Businesses / ${item.name}`} title={<>A brand built for<br/><i>{item.name}.</i></>}>
  <section className="businessSolution">
   <div><div className="routeTrail"><Link href="/businesses">Businesses</Link><span>/</span>{item.name}</div><p className="eyebrow">The complete solution</p><h2>{solution.promise}</h2><p>Farefold does more than print packaging. We build the brand first, then connect the identity to the packaging, printed touchpoints and custom formats your business actually needs.</p><div className="solutionColumns"><div><h3>Packaging system</h3><ul>{solution.packaging.map(x=><li key={x}>{x}</li>)}</ul></div><div><h3>Brand touchpoints</h3><ul>{solution.touchpoints.map(x=><li key={x}>{x}</li>)}</ul></div></div></div>
   <aside><p className="eyebrow">Build the whole system</p><h3>Brand + packaging + custom.</h3><p>Start with your concept, existing restaurant or packaging problem. We will help shape the right route.</p><Link className="primary" href={`/contact?product=${encodeURIComponent(item.name+" brand + packaging system")}`}>Start a project <span>→</span></Link><Link className="outlineCta" href="/products">Browse packaging formats</Link></aside>
  </section>
  <section className="section businessJourney"><div className="sectionIntro wide"><p className="eyebrow">How we build it</p><h2>One idea. <i>Carried all the way through.</i></h2></div><div className="journeyGrid">{["01 / Understand","02 / Build the brand","03 / Design the packaging","04 / Prepare the launch"].map((x,i)=><article key={x}><span>{x}</span><p>{["Concept, menu, audience, service model and operating reality.","Positioning, naming direction, identity, colour, typography and visual language.","Choose formats, define the packaging hierarchy and create custom pieces where needed.","Menus, print, social identity, packaging artwork and a practical system ready for production."][i]}</p></article>)}</div></section>
  <section className="orangeBand"><p className="eyebrow">Next step</p><h2>Tell us what you&apos;re building.<br/><i>We&apos;ll build the system around it.</i></h2><Link className="primary dark" href="/contact">Start your project <span>→</span></Link></section>
 </PageFrame>
}