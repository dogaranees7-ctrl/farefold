import Link from "next/link";
import {SiteShell} from "@/app/components/site-shell";
import {ConceptPackagingWall} from "@/app/components/concept-packaging-wall";

const businesses=[
  ["Pizza","pizza-restaurant"],["Burger","burger-restaurant"],["Fried Chicken","fried-chicken-restaurant"],["Café","cafe"],
  ["Bakery","bakery-business"],["Dessert","dessert-shop"],["Ice Cream","ice-cream-business"],["Juice & Shakes","juice-smoothie-business"],
  ["Japanese","japanese"],["Chinese","chinese"],["Pakistani / Desi","pakistani-desi"],["BBQ","bbq-restaurant"],
  ["Shawarma","shawarma"],["Kebab","kebab"],["Sandwich","sandwich-business"],["Italian","italian"],
  ["Steakhouse","steakhouse"],["Fast Food","fast-food-qsr"],["Cloud Kitchen","cloud-kitchen"],["Catering","catering"]
];

const systems=[
  {number:"01",title:"Delivery",tag:"Built for the journey",text:"Boxes, bags, seals, napkins and sauces designed to arrive looking like the brand.",items:["Food boxes","Paper bags","Seals & stickers","Sauce cups"]},
  {number:"02",title:"Dine-in",tag:"Built for the table",text:"Trays, liners, cups and printed touchpoints that make the in-store experience feel considered.",items:["Trays & liners","Cups","Table print","Take-home pieces"]},
  {number:"03",title:"Beverage",tag:"Built as a family",text:"Cup, lid, sleeve, carrier and sticker designed together instead of one piece at a time.",items:["Hot cups","Cold cups","Lids & sleeves","Carriers"]},
  {number:"04",title:"Bakery",tag:"Built to travel home",text:"Boxes, bags, tissue, stickers and cards that keep the bakery experience intact after checkout.",items:["Cake boxes","Bread bags","Tissue","Thank-you cards"]}
];

const products=[
  ["Pizza boxes","Heat, steam and stacking.","pizza-boxes","01"],
  ["Burger boxes","Fast-service formats.","burger-boxes","02"],
  ["Coffee cups","Cup, lid and sleeve.","coffee-cups","03"],
  ["Paper bags","The brand customers carry.","paper-bags","04"],
  ["Sauce containers","Small piece. Big consistency.","sauce-containers","05"],
  ["Custom packaging","When standard is not enough.","custom-packaging","06"]
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
    <main id="main" className="home">
      <section className="homeHero">
        <div className="homeHeroCopy">
          <div className="homeKicker"><span>01</span> Restaurant branding + packaging <b>Pakistan first</b></div>
          <h1>Make your<br/><em>food brand</em><br/>impossible to forget.</h1>
          <p>Farefold builds recognizable restaurant brands from the first idea to the packaging that reaches the customer.</p>
          <div className="homeActions">
            <Link className="homeButton homeButtonOrange" href="/contact">Start your brand <span>↗</span></Link>
            <Link className="homeTextLink" href="#businesses">Explore businesses <span>↓</span></Link>
          </div>
        </div>
        <div className="heroComposition" aria-label="Farefold packaging and brand composition">
          <div className="heroGridLabel">FAREFOLD / BRAND SYSTEM 01</div>
          <div className="heroCircle"><span>F</span></div>
          <div className="heroBox heroBoxOne"><small>FOLD / 01</small><strong>YOUR<br/>BRAND</strong><i>PACKAGING</i></div>
          <div className="heroBox heroBoxTwo"><span>F</span></div>
          <div className="heroSticker">BUILT<br/><b>TO BE<br/>SEEN.</b></div>
          <div className="heroCaption">Identity · Packaging · Print · Launch</div>
        </div>
      </section>

      <section className="homeRibbon">
        <div>BRANDING</div><span>✳</span><div>PACKAGING</div><span>✳</span><div>PRODUCTS</div><span>✳</span><div>CUSTOM</div><span>✳</span><div>RESTAURANT LAUNCH</div><span>✳</span><div>PAKISTAN FIRST</div>
      </section>

      <section className="homeIntro section">
        <div className="homeSectionNo">02 / WHY FAREFOLD</div>
        <div>
          <h2>A restaurant is a brand<br/><em>before it is a box.</em></h2>
          <p>We help food businesses make the whole experience feel like one idea — the name, identity, menu, packaging, printed details and launch.</p>
        </div>
        <div className="homeStats"><div><strong>01</strong><span>Brand identity</span></div><div><strong>02</strong><span>Packaging system</span></div><div><strong>03</strong><span>Launch touchpoints</span></div></div>
      </section>

      <section id="businesses" className="homeBusinesses section">
        <div className="homeSectionHead">
          <div><div className="homeSectionNo">03 / BUSINESSES</div><h2>Start with<br/><em>what you&apos;re building.</em></h2></div>
          <p>New restaurant, established chain, café, bakery or delivery-first kitchen — the business changes the solution.</p>
        </div>
        <div className="businessMosaic">
          {businesses.map(([name,slug],i)=><Link href={`/businesses/${slug}`} key={slug}><span>{String(i+1).padStart(2,"0")}</span><strong>{name}</strong><b>↗</b></Link>)}
        </div>
        <Link className="homeOutline" href="/businesses">View all business types <span>→</span></Link>
      </section>

      <section className="homeBranding">
        <div className="homeBrandingVisual">
          <div className="brandPoster"><span>FAREFOLD</span><strong>NOT<br/><i>JUST</i><br/>A LOGO.</strong><small>BRAND SYSTEM / 02</small></div>
          <div className="brandCard">IDENTITY<br/><b>THAT<br/>TRAVELS.</b></div>
        </div>
        <div className="homeBrandingCopy">
          <div className="homeSectionNo">04 / BRANDING</div>
          <h2>Build a brand,<br/><em>not just a logo.</em></h2>
          <p>Your identity should survive the menu, the box, the cup, the bag, the sticker and the customer&apos;s phone camera.</p>
          <div className="serviceRows">{["Strategy + positioning","Naming direction","Logo + visual identity","Colour + typography","Packaging identity","Menus + social identity","Brand guidelines","Restaurant launch identity"].map((x,i)=><div key={x}><span>{String(i+1).padStart(2,"0")}</span>{x}<b>+</b></div>)}</div>
          <Link className="homeLightLink" href="/branding">Explore branding <span>↗</span></Link>
        </div>
      </section>

      <section id="packaging" className="homeSystems section">
        <div className="homeSectionHead">
          <div><div className="homeSectionNo">05 / PACKAGING SYSTEMS</div><h2>Packaging is how<br/><em>your brand travels.</em></h2></div>
          <p>We design the pieces as a system, so the customer sees the same brand whether they are ordering, carrying or opening it.</p>
        </div>
        <div className="systemCards">
          {systems.map(s=><article key={s.title}><div className="systemTop"><span>{s.number}</span><small>{s.tag}</small></div><h3>{s.title}</h3><p>{s.text}</p><ul>{s.items.map(item=><li key={item}>{item}</li>)}</ul><Link href={`/contact?product=${encodeURIComponent(s.title+" packaging system")}`}>Build this system <span>↗</span></Link></article>)}
        </div>
        <Link className="homeOutline" href="/packaging">Explore packaging systems <span>→</span></Link>
      </section>

      <section id="products" className="homeProducts section">
        <div className="homeSectionHead">
          <div><div className="homeSectionNo">06 / PRODUCTS</div><h2>Useful formats.<br/><em>Distinctive brands.</em></h2></div>
          <p>Browse the actual packaging formats restaurants use. Choose the right pieces, then make them yours.</p>
        </div>
        <ConceptPackagingWall/>
        <div className="homeProductGrid">
          {products.map(([title,text,slug,n],i)=><Link href={`/products/${slug}`} className={`homeProduct p${i+1}`} key={slug}><div className="productNumber">{n}</div><div className="productShape"><span>{i===0?"P":i===1?"B":i===2?"F":"F"}</span></div><div className="productMeta"><h3>{title}</h3><p>{text}</p><b>View format ↗</b></div></Link>)}
        </div>
        <Link className="homeOutline" href="/products">Browse all products <span>→</span></Link>
      </section>

      <section id="custom" className="homeCustom">
        <div className="customNumber">07 / CUSTOM</div>
        <div className="customHeadline"><span>Nothing</span><em>fits?</em><strong>We create it.</strong></div>
        <div className="customCopy"><p>Custom boxes, bags, cups, trays, containers, die-cuts, printed packaging and complete restaurant launch packages.</p><Link className="homeButton homeButtonDark" href="/custom">Explore custom work <span>↗</span></Link></div>
      </section>

      <section id="guides" className="homeGuides section">
        <div className="homeSectionHead">
          <div><div className="homeSectionNo">08 / GUIDELINES</div><h2>Helpful before<br/><em>you buy anything.</em></h2></div>
          <p>Practical guidance for owners making decisions about brands, packaging and restaurant launches.</p>
        </div>
        <div className="guideRows">{guides.map(([title,slug],i)=><Link href={`/guidelines/${slug}`} key={slug}><span>Guide {String(i+1).padStart(2,"0")}</span><strong>{title}</strong><b>↗</b></Link>)}</div>
        <Link className="homeOutline" href="/guidelines">Open knowledge centre <span>→</span></Link>
      </section>

      <section id="contact" className="homeContact">
        <div className="contactIndex">09 / START HERE</div>
        <div><h2>Tell us what<br/><em>you&apos;re building.</em></h2><p>Opening a restaurant? Already running one? Need branding, packaging, custom work, or the complete system?</p></div>
        <div className="contactAction"><span>Start with the idea.</span><Link className="homeButton homeButtonOrange" href="/contact">Send project brief <span>↗</span></Link><small>WhatsApp · Email · Project brief</small></div>
      </section>
    </main>
  </SiteShell>
}