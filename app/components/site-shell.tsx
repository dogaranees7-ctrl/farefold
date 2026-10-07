"use client";
import Link from "next/link";
import {ReactNode,useState} from "react";

const links=[
  ["Businesses","/businesses"],["Branding","/branding"],["Products","/products"],
  ["Packaging","/packaging"],["Custom","/custom"],["Guidelines","/guidelines"],["Contact","/contact"]
];

export function SiteShell({children}:{children:ReactNode}){
  const [open,setOpen]=useState(false);
  return <div className="site">
    <header className="nav">
      <Link className="logo" href="/" onClick={()=>setOpen(false)} aria-label="Farefold home">farefold<span>®</span></Link>
      <nav aria-label="Primary navigation">{links.map(([label,href])=><Link href={href} key={href}>{label}</Link>)}</nav>
      <div className="navActions">
        <Link className="navCta" href="/contact" onClick={()=>setOpen(false)}>Start a project <b>↗</b></Link>
        <button className="menuButton" aria-label="Toggle navigation" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?"Close":"Menu"}</button>
      </div>
    </header>
    {open&&<div className="mobileMenu">{links.map(([label,href])=><Link href={href} onClick={()=>setOpen(false)} key={href}>{label}<span>↗</span></Link>)}<Link className="mobileStart" href="/contact" onClick={()=>setOpen(false)}>Start a project <span>→</span></Link></div>}
    {children}
    <footer>
      <div className="footerTop">
        <Link className="logo" href="/">farefold<span>®</span></Link>
        <p>Restaurant brands, packaging &amp; launch systems.<br/>Pakistan first.</p>
        <Link className="footerCta" href="/contact">Tell us what you&apos;re building →</Link>
      </div>
      <div className="footerLinks">{links.map(([label,href])=><Link href={href} key={href}>{label}</Link>)}</div>
      <div className="footerBottom"><span>© 2026 Farefold</span><span>Branding · Packaging · Products · Custom</span><span>Made for restaurants</span></div>
    </footer>
  </div>
}