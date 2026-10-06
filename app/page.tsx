import Link from "next/link";

const businesses = ["Pizza","Burger","Fried Chicken","Café","Bakery","Dessert","Ice Cream","Juice & Shakes","Sushi / Japanese","Chinese","Pakistani / Desi","BBQ","Shawarma","Kebab","Sandwich","Fine Dining","Fast Food","Cloud Kitchen","Catering"];

const systems = [
  {title:"Delivery packaging", text:"Boxes, bags, seals, napkins and sauce containers working as one recognizable system."},
  {title:"Dine-in packaging", text:"Trays, liners, cups and table touchpoints designed to feel like the same brand."},
  {title:"Beverage systems", text:"Cup, lid, sleeve, carrier, straw and sticker — designed together."},
  {title:"Bakery systems", text:"Boxes, bags, tissue, stickers and thank-you cards that carry the experience home."}
];

const products = [
  ["01","Pizza Boxes","Built for heat, steam and stacking."],
  ["02","Burger Boxes","Fast-service formats with room for the brand."],
  ["03","Coffee Cups","Cups, lids and sleeves as one identity."],
  ["04","Paper Bags","The walking billboard customers carry."],
  ["05","Sauce Containers","Small touchpoint, consistent brand."],
  ["06","Custom Packaging","When the right structure needs to be created."]
];

export default function Home(){
 return <div className="site">
  <header className="nav">
   <Link className="logo" href="/">farefold<span>®</span></Link>
   <nav><Link href="/businesses">Businesses</Link><Link href="/branding">Branding</Link><Link href="/products">Products</Link><Link href="/packaging">Packaging</Link><Link href="/custom">Custom</Link><Link href="/guidelines">Guidelines</Link></nav>
   <Link className="navCta" href="/contact">Start a project <b>↗</b></Link>
  </header>

  <main id="main">
   <section className="hero">
    <div className="heroCopy">
      <p className="eyebrow">Restaurant branding + packaging · Pakistan</p>
      <h1>Build a restaurant brand people <i>remember.</i></h1>
      <p className="lead">From the first idea to the packaging in the customer's hands, Farefold helps restaurants build a clear, recognizable brand.</p>
      <div className="actions"><Link className="primary" href="#contact">Tell us what you're building <span>→</span></Link><Link className="secondary" href="#businesses">Explore by business</Link></div>
    </div>
    <div className="heroVisual"><div className="stamp">BRAND<br/>THE<br/><em>WHOLE</em><br/>EXPERIENCE</div><div className="boxMock"><div>F</div></div><div className="heroNote">Identity / Packaging / Print / Launch</div></div>
   </section>

   <section className="marquee"><div>BRANDING <span>✳</span> PACKAGING <span>✳</span> PRINT <span>✳</span> RESTAURANT LAUNCH <span>✳</span> PAKISTAN FIRST <span>✳</span></div></section>

   <section id="businesses" className="section business">
    <div className="sectionIntro"><p className="eyebrow">01 / Businesses</p><h2>Start with what<br/><i>you’re building.</i></h2><p>Whether you're opening a new restaurant or strengthening one that's already running, we build around the business first.</p></div>
    <div className="businessGrid">{businesses.map((b,i)=><Link href="#contact" className="businessCard" key={b}><span>0{i+1}</span><strong>{b}</strong><b>↗</b></Link>)}</div>
   </section>

   <section id="branding" className="brandSection">
    <div className="brandStatement"><p className="eyebrow">02 / Branding</p><h2>Build a brand,<br/><i>not just a logo.</i></h2><p>Your identity should survive the menu, the box, the cup, the bag, the sticker and the customer's phone camera.</p><Link className="lightCta" href="#contact">Build my brand →</Link></div>
    <div className="brandList">{["Brand strategy","Positioning","Naming direction","Logo & visual identity","Colour system & typography","Packaging identity","Brand guidelines","Menu & printed collateral","Social identity","Restaurant launch identity","Rebranding"].map((x,i)=><div key={x}><span>0{i+1}</span>{x}<b>+</b></div>)}</div>
   </section>

   <section id="packaging" className="section systems"><div className="sectionIntro wide"><p className="eyebrow">03 / Packaging systems</p><h2>Packaging is how<br/><i>your brand travels.</i></h2><p>We don't start with a box. We start with the customer experience and build the pieces that make it consistent.</p></div><div className="systemGrid">{systems.map((s,i)=><article key={s.title}><span>0{i+1}</span><h3>{s.title}</h3><p>{s.text}</p><Link href="#contact">Build this system →</Link></article>)}</div></section>

   <section id="products" className="section products"><div className="sectionIntro wide"><p className="eyebrow">04 / Products</p><h2>Useful products.<br/><i>Distinctive brands.</i></h2><p>Browse the formats restaurants actually need — then turn the right ones into your own packaging system.</p></div><div className="productGrid">{products.map(([n,t,d])=><article key={t}><div className="productArt"><span>{n}</span><div className="shape"/></div><h3>{t}</h3><p>{d}</p><Link href="#contact">View details →</Link></article>)}</div><Link className="outlineCta" href="#contact">Explore all products →</Link></section>

   <section id="custom" className="custom"><div><p className="eyebrow">05 / Custom</p><h2>Nothing fits?<br/><i>We create it.</i></h2></div><div><p>Custom boxes, bags, cups, trays, containers, die-cuts, custom printed packaging and complete restaurant launch packages.</p><Link className="primary" href="#contact">Start something custom <span>→</span></Link></div></section>

   <section id="guides" className="section guides"><div className="sectionIntro wide"><p className="eyebrow">06 / Guidelines</p><h2>Helpful before<br/><i>you buy anything.</i></h2><p>Practical guidance for restaurant owners — from choosing packaging to preparing a new brand for launch.</p></div><div className="guideGrid">{["How to build a restaurant brand","Choosing restaurant colours","How to choose the right box","Packaging for delivery","New restaurant branding checklist","Opening a café / bakery / cloud kitchen"].map((x,i)=><Link href="#contact" key={x}><span>Guide 0{i+1}</span><strong>{x}</strong><b>↗</b></Link>)}</div></section>

   <section id="contact" className="contact"><div><p className="eyebrow">07 / Start here</p><h2>Tell us what<br/><i>you’re building.</i></h2><p>Opening a restaurant? Already running one? Need branding, packaging, or the complete system? Start with the idea — we’ll help shape the rest.</p></div><form><label>Your name<input placeholder="Your name"/></label><label>Business name<input placeholder="Restaurant / business name"/></label><label>What are you building?<select defaultValue=""><option value="" disabled>Select one</option><option>I’m opening a restaurant</option><option>I already have a restaurant</option><option>I need packaging</option><option>I need branding</option><option>I need complete brand + packaging system</option></select></label><label>Tell us a little<textarea placeholder="What are you working on?"/></label><Link className="primary" href="/contact">Send project brief <span>→</span></Link></form></section>
  </main>
  <footer><div className="footerTop"><Link className="logo" href="/">farefold<span>®</span></Link><p>Restaurant brands, packaging & launch systems.<br/>Pakistan first.</p><Link className="footerCta" href="#contact">Tell us what you're building →</Link></div><div className="footerBottom"><span>© 2026 Farefold</span><span>Branding · Packaging · Products · Custom</span><span>Made for restaurants</span></div></footer>
 </div>
}