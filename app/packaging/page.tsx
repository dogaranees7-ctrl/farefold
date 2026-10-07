import type {Metadata} from "next";
export const metadata:Metadata={title:"Restaurant Packaging Systems",description:"Restaurant packaging systems for delivery, takeaway, dine-in, beverages, bakery, cloud kitchens, catering and retail food."};
import Link from "next/link";
import {PageFrame} from "@/app/components/page-frame";

const systems=[
  ["Delivery packaging","Boxes, bags, seals, napkins and sauce containers designed around heat, travel, stacking and the handoff.","Delivery"],
  ["Takeaway / QSR system","Fast-service boxes, wraps, bags, trays and accessories built for speed, consistency and recognizable presentation.","Takeaway / QSR"],
  ["Dine-in packaging","Trays, liners, cups and table touchpoints that keep the restaurant identity coherent.","Dine-in"],
  ["Beverage system","Cup, lid, sleeve, carrier, straw and sticker designed as one visual and functional family.","Beverage"],
  ["Bakery & dessert system","Boxes, bags, tissue, stickers and cards that protect delicate products and make the experience travel home.","Bakery / Dessert"],
  ["Cloud kitchen system","Modular containers, labels, bags and inserts that work across a changing delivery menu.","Cloud Kitchen"],
  ["Catering & events","Large-format boxes, trays, carriers and labels designed for volume, transport and presentation.","Catering / Events"],
  ["Retail food system","Pack architecture, labels, sleeves, cartons and transport formats for food products sold beyond the restaurant.","Retail / Food Product"]
];

const steps=[
  ["01 / Map","Understand the menu, portions, service model, customer journey and operational constraints."],
  ["02 / Structure","Choose the right packaging families and decide what needs to work together."],
  ["03 / Brand","Apply the identity with a clear hierarchy so every piece feels part of the same system."],
  ["04 / Prepare","Create the practical artwork and specification direction needed to move into production."]
];

export default function Packaging(){
 return <PageFrame eyebrow="04 / Packaging" title={<>Packaging is how<br/><i>your brand travels.</i></>}>
  <section className="section">
   <div className="sectionIntro wide"><h2>We don&apos;t start with a box.</h2><p>We start with the customer experience, the food and the operating reality — then build the packaging system around them.</p></div>
   <div className="linkCardGrid">{systems.map(([title,text,key],i)=><Link className="linkCard" href={`/contact?product=${encodeURIComponent(key+" packaging system")}`} key={title}><span>{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{text}</p><b>↗</b></Link>)}</div>
  </section>
  <section className="darkBand">
   <p className="eyebrow">Packaging workflow</p>
   <h2>Build the pieces as <i>one system.</i></h2>
   <div className="processGrid">{steps.map(([title,text])=><article key={title}><span>{title}</span><p>{text}</p></article>)}</div>
  </section>
  <section className="band">
   <h2>Need one product?</h2>
   <p>Browse the product families or tell us what you need and we&apos;ll help specify the right format. The commercial catalogue will be populated from verified Farefold products when the range is supplied.</p>
   <Link className="outlineCta" href="/products">Explore products →</Link>
  </section>
 </PageFrame>
}