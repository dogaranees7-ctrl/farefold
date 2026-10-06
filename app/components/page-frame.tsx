import Link from "next/link";
import type { ReactNode } from "react";
import {SiteShell} from "./site-shell";

export function PageFrame({eyebrow,title,children,cta=true}:{eyebrow:string,title:ReactNode,children:React.ReactNode,cta?:boolean}){
 return <SiteShell><main>
  <section className="pageHero"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{cta&&<Link className="primary" href="/contact">Tell us what you’re building <span>→</span></Link>}</section>
  {children}
 </main></SiteShell>
}
export function LinkCards({items}:{items:{title:string,text:string,href?:string}[]}){
 return <div className="linkCardGrid">{items.map((x,i)=><Link className="linkCard" href={x.href||"/contact"} key={x.title}><span>0{i+1}</span><h3>{x.title}</h3><p>{x.text}</p><b>↗</b></Link>)}</div>
}
