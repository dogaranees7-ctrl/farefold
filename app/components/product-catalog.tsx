"use client";
import Link from "next/link";
import {useMemo,useState} from "react";

type Item={slug:string;name:string;parentSlug:string;parentName:string};

export function ProductCatalog({items}:{items:Item[]}){
 const groups=useMemo(()=>Array.from(new Map(items.map(x=>[x.parentSlug,x.parentName])).entries()),[items]);
 const [query,setQuery]=useState("");
 const [group,setGroup]=useState("all");
 const filtered=items.filter(x=>(group==="all"||x.parentSlug===group)&&x.name.toLowerCase().includes(query.toLowerCase()));

 return <div className="productCatalog">
  <div className="catalogTools">
   <label className="catalogSearch"><span>Find a packaging format</span><input aria-label="Search packaging formats" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search boxes, cups, bags, trays..." /></label>
   <div className="filterChips" aria-label="Filter packaging families">
    <button type="button" className={group==="all"?"active":""} onClick={()=>setGroup("all")}>All formats</button>
    {groups.map(([slug,name])=><button type="button" className={group===slug?"active":""} onClick={()=>setGroup(slug)} key={slug}>{name}</button>)}
   </div>
  </div>
  <div className="catalogResultMeta">{filtered.length} packaging formats to explore · Not an in-stock product listing</div>
  <div className="catalogProductGrid">{filtered.map((x,i)=><Link className="catalogProductCard textOnlyProductCard" href={`/products/${x.slug}`} key={x.slug}>
    <span>{String(i+1).padStart(2,"0")}</span>
    <small>{x.parentName}</small>
    <h3>{x.name}</h3>
    <p>Discuss this format <b aria-hidden="true">↗</b></p>
  </Link>)}</div>
  {filtered.length===0&&<div className="catalogEmpty"><h3>No format found.</h3><p>Try another packaging term or tell us what you need.</p><Link className="primary" href="/contact?product=Custom%20packaging%20brief">Start a custom brief <span>→</span></Link></div>}
  <p className="catalogDisclosure">This is a format directory, not a live stock catalogue. Product photographs, specifications, minimum quantities, availability and prices will be published only after they are confirmed by Farefold.</p>
 </div>;
}
