import type {Metadata} from "next";
export const metadata:Metadata={title:"Restaurant Branding",description:"Build a recognizable restaurant brand with strategy, identity, packaging identity, menus, social direction and launch systems."};
import Link from "next/link";
import {PageFrame} from "@/app/components/page-frame";

const items=[
  ["Brand strategy","Clarify what the restaurant should stand for."],
  ["Positioning","Find a useful place in the customer's mind."],
  ["Naming direction","Create a direction before visual execution."],
  ["Logo & visual identity","Build a recognizable visual language."],
  ["Colour system & typography","Make every touchpoint feel related."],
  ["Packaging identity","Carry the identity onto packaging."],
  ["Brand guidelines","Document the rules so the brand stays consistent."],
  ["Menu & printed collateral","Menus, cards, stickers and printed details."],
  ["Social identity","Extend the identity to digital and social."],
  ["Restaurant launch identity","Create the launch system around the opening."],
  ["Rebranding","Refresh an existing restaurant without losing its equity."]
];

const process=[
  ["01 / Discover","Concept, audience, menu, service model, competition and the reason the restaurant should exist."],
  ["02 / Define","Positioning, naming direction, personality, verbal direction and the visual territory to own."],
  ["03 / Design","Logo, typography, colour, graphic language and the core identity system."],
  ["04 / Apply","Menus, packaging, print, social and the high-visibility touchpoints customers actually see."],
  ["05 / Document","Brand guidelines and a practical system that can be repeated as the restaurant grows."]
];

export default function Branding(){
 return <PageFrame eyebrow="02 / Branding" title="Build a brand, not just a logo.">
  <section className="section">
   <div className="sectionIntro wide"><h2>The identity should work <i>everywhere.</i></h2><p>For new restaurants, we can build the identity from zero. For existing restaurants, we strengthen what already works and make the experience more recognizable.</p></div>
   <div className="linkCardGrid">{items.map(([title,text],i)=><Link className="linkCard" href={`/contact?product=${encodeURIComponent(title)}`} key={title}><span>{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{text}</p><b>↗</b></Link>)}</div>
  </section>
  <section className="darkBand">
   <p className="eyebrow">How we build the brand</p>
   <h2>Strategy first.<br/><i>Identity second.</i></h2>
   <div className="processGrid">{process.map(([title,text])=><article key={title}><span>{title}</span><p>{text}</p></article>)}</div>
   <Link className="lightCta" href="/packaging">Connect the brand to packaging →</Link>
  </section>
  <section className="band">
   <p className="eyebrow">What comes out of it</p>
   <h2>A brand system that can <i>actually travel.</i></h2>
   <p>Not a logo sitting in a folder. The goal is a usable identity that can move from menu to box, cup, bag, sticker, social post and future locations without losing recognition.</p>
   <Link className="outlineCta" href="/contact?product=Complete%20restaurant%20brand%20system">Discuss a complete brand system →</Link>
  </section>
 </PageFrame>
}