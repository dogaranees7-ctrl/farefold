import Link from "next/link";
import {SiteShell} from "@/app/components/site-shell";

const businesses=[
  ["Pizza","pizza-restaurant"],["Burger","burger-restaurant"],["Fried Chicken","fried-chicken-restaurant"],["Café","cafe"],["Bakery","bakery"],["Dessert","dessert-shop"],["Ice Cream","ice-cream-shop"],["Juice & Shakes","juice-smoothie-shop"],["Sushi / Japanese","japanese-restaurant"],["Chinese","chinese-restaurant"],["Pakistani / Desi","pakistani-desi-restaurant"],["BBQ","bbq-restaurant"],["Shawarma","shawarma-restaurant"],["Kebab","kebab-restaurant"],["Sandwich","sandwich-restaurant"],["Fine Dining","fine-dining-restaurant"],["Fast Food","fast-food-qsr"],["Cloud Kitchen","cloud-kitchen"],["Catering","catering"]
];

const systems=[
  {title:"Delivery packaging",text:"Boxes, bags, seals, napkins and sauce containers working as one recognizable system."},
  {title:"Dine-in packaging",text:"Trays, liners, cups and table touchpoints designed to feel like the same brand."},
  {title:"Beverage systems",text:"Cup, lid, sleeve, carrier, straw and sticker — designed together."},
  {title:"Bakery systems",text:"Boxes, bags, tissue, stickers and thank-you cards that carry the experience home."}
];

const products=[
  ["01","Pizza Boxes","Built for heat, steam and stacking.","pizza-boxes"],
  ["02","Burger Boxes","Fast-service formats with room for the brand.","burger-boxes"],
  ["03","Coffee Cups","Cups, lids and sleeves as one identity.","coffee-cups"],
  ["04","Paper Bags","The walking billboard customers carry.","paper-bags"],
  ["05","Sauce Containers","Small touchpoint, consistent brand.","sauce-containers"],
  ["06","Custom Packaging","When the right structure needs to be created.","custom-packaging"]
];

const guides=[
  ["How to build a restaurant brand","how-to-build-a-restaurant-brand"],
  ["Choosing restaurant colours","choosing-restaurant-colours"],
  ["How to choose the right box","how-to-choose-the-right-box"],
  ["Packaging for delivery","packaging-for-delivery"],
  ["New restaurant branding checklist","new-restaurant-branding-checklist"],
  ["Opening a café / bakery / cloud kitchen","opening-a-cafe-bakery-cloud-kitchen"]
];

export default function Home(){
 return <SiteShell>
  <main id="main">
   <section className="hero">
    <div className="heroCopy">
      <p className="eyebrow">Restaurant branding + packaging · Pakistan</p>
      <h1>Build a restaurant brand people <i>remember.</i></h1>
      <p className="lead">From the first idea to the packaging in the customer&apos;s hands, Farefold helps restaurants build a clear, recognizable brand.</p>
      <div className="actions"><Link className="primary" href="#contact">Tell us what you&apos;re building <span>→</span></Link><Link className="secondary" href="#businesses">Explore by business</Link></div>
    </div>
    <div className="heroVisual"><div className="stamp">BRAND<br/>THE<br/><em>WHOLE</em><br/>EXPERIENCE</div><div className="boxMock"><div>F</div></div><div className="heroNote">Identity / Packaging / Print / Launch</div></div>
   </section>

   <section className="marquee"><div>BRANDING <span>✳</span> PACKAGING <span>✳</span> PRINT <span>✳</span> RESTAURANT LAUNCH <span>✳</span> PAKISTAN FIRST <span>✳</span></div></section>

   <section id="businesses" className="section business">
    <div className="sectionIntro"><p className="eyebrow">01 / Businesses</p><h2>Start with what<br/><i>you&apos;re building.</i></h2><p>Whether you&apos;re opening a new restaurant or strengthening one that&apos;s already running, we build around the business first.</p></div>
    <div className="businessGrid">{businesses.map(([name,slug],i)=><Link href={`/businesses/${slug}`} className="businessCard" key={slug}><span>{String(i+1).padStart(2,"0")}</span><strong>{name}</strong><b>↗</b></Link>)}</div>
   </section>

   <section id="branding" className="brandSection">
    <div className="brandStatement"><p className="eyebrow">02 / Branding</p><h2>Build a brand,<br/><i>not just a logo.</i></h2><p>Your identity should survive the menu, the box, the cup, the bag, the sticker and the customer&apos;s phone camera.</p><Link className="lightCta" href="/branding">Explore branding →</Link></div>
    <div className="brandList">{["Brand strategy","Positioning","Naming direction","Logo & visual identity","Colour system & typography","Packaging identity","Brand guidelines","Menu & printed collateral","Social identity","Restaurant launch identity","Rebranding"].map((x,i)=><div key={x}><span>{String(i+1).padStart(2,"0")}</span>{x}<b>+</b></div>)}</div>
   </section>

   <section id="packaging" className="section systems"><div className="sectionIntro wide"><p className="eyebrow">03 / Packaging systems</p><h2>Packaging is how<br/><i>your brand travels.</i></h2><p>We don&apos;t start with a box. We start with the customer experience and build the pieces that make it consistent.</p></div><div className="systemGrid">{systems.map((s,i)=><article key={s.title}><span>{String(i+1).padStart(2,"0")}</span><h3>{s.title}</h3><p>{s.text}</p><Link href={`/contact?product=${encodeURIComponent(s.title+" system")}`}>Build this system →</Link></article>)}</div><Link className="outlineCta" href="/packaging">Explore packaging systems →</Link></section>

   <section id="products" className="section products"><div className="sectionIntro wide"><p className="eyebrow">04 / Products</p><h2>Useful products.<br/><i>Distinctive brands.</i></h2><p>Browse the formats restaurants actually need — then turn the right ones into your own packaging system.</p></div><div className="productGrid">{products.map(([n,t,d,slug])=><article key={slug}><Link href={`/products/${slug}`} className="productArt"><span>{n}</span><div className="shape"/></Link><h3>{t}</h3><p>{d}</p><Link href={`/products/${slug}`}>View details →</Link></article>)}</div><Link className="outlineCta" href="/products">Explore all products →</Link></section>

   <section id="custom" className="custom"><div><p className="eyebrow">05 / Custom</p><h2>Nothing fits?<br/><i>We create it.</i></h2></div><div><p>Custom boxes, bags, cups, trays, containers, die-cuts, custom printed packaging and complete restaurant launch packages.</p><Link className="primary" href="/custom">Explore custom work <span>→</span></Link></div></section>

   <section id="guides" className="section guides"><div className="sectionIntro wide"><p className="eyebrow">06 / Guidelines</p><h2>Helpful before<br/><i>you buy anything.</i></h2><p>Practical guidance for restaurant owners — from choosing packaging to preparing a new brand for launch.</p></div><div className="guideGrid">{guides.map(([title,slug],i)=><Link href={`/guidelines/${slug}`} key={slug}><span>Guide {String(i+1).padStart(2,"0")}</span><strong>{title}</strong><b>↗</b></Link>)}</div><Link className="outlineCta" href="/guidelines">Open the knowledge centre →</Link></section>

   <section id="contact" className="contact"><div><p className="eyebrow">07 / Start here</p><h2>Tell us what<br/><i>you&apos;re building.</i></h2><p>Opening a restaurant? Already running one? Need branding, packaging, or the complete system? Start with the idea — we&apos;ll help shape the rest.</p></div><div className="contactPrompt"><p>Opening a restaurant? Already running one? Need branding, packaging, or the complete system? Start with the idea and send us the brief.</p><Link className="primary" href="/contact">Send project brief <span>→</span></Link></div></section>
  </main>
 </SiteShell>
}