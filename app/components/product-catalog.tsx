"use client";
import Link from "next/link";
import {useMemo,useState} from "react";

type Item={slug:string;name:string;parentSlug:string;parentName:string};

const referenceImages={
 cups:"https://images.pexels.com/photos/7318858/pexels-photo-7318858.jpeg?cs=srgb&dl=pexels-angela-roma-7318858.jpg&fm=jpg",
 containers:"https://images.pexels.com/photos/32424228/pexels-photo-32424228.jpeg?cs=srgb&dl=pexels-zehra-k-710717493-32424228.jpg&fm=jpg",
 boxes:"https://images.pexels.com/photos/8015739/pexels-photo-8015739.jpeg?cs=srgb&dl=pexels-cup-of-couple-8015739.jpg&fm=jpg"
} as const;

function referenceImageFor(name:string){
 const lower=name.toLowerCase();
 if(lower.includes("cup")||lower.includes("lid")||lower.includes("straw")||lower.includes("carrier")) return referenceImages.cups;
 if(lower.includes("container")||lower.includes("pot")||lower.includes("bowl")||lower.includes("tub")) return referenceImages.containers;
 return referenceImages.boxes;
}

export function ProductCatalog({items}:{items:Item[]}){
 const groups=useMemo(()=>Array.from(new Map(items.map(x=>[x.parentSlug,x.parentName])).entries()),[items]);
 const [query,setQuery]=useState("");
 const [group,setGroup]=useState("all");
 const filtered=items.filter(x=>(group==="all"||x.parentSlug===group)&&x.name.toLowerCase().includes(query.toLowerCase()));

 return <div className="productCatalog">
  <div className="catalogTools">
   <label className="catalogSearch"><span>Search the catalogue</span><input aria-label="Search packaging formats" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search boxes, cups, bags, trays..." /></label>
   <div className="filterChips" aria-label="Filter product families">
    <button type="button" className={group==="all"?"active":""} onClick={()=>setGroup("all")}>All</button>
    {groups.map(([slug,name])=><button type="button" className={group===slug?"active":""} onClick={()=>setGroup(slug)} key={slug}>{name}</button>)}
   </div>
  </div>
  <div className="catalogResultMeta">{filtered.length} packaging formats{query||group!=="all"?" matching your selection":""}</div>
  <div className="catalogProductGrid">{filtered.map((x,i)=><Link className="catalogProductCard" href={`/products/${x.slug}`} key={x.slug}>
    <div className="catalogProductImage" style={{backgroundImage:`url("${referenceImageFor(x.name)}")`}} aria-hidden="true"><span>REFERENCE</span></div>
    <div className="catalogProductBody"><span>{String(i+1).padStart(2,"0")}</span><small>{x.parentName}</small><h3>{x.name}</h3><p>Explore format →</p></div>
  </Link>)}</div>
  {filtered.length===0&&<div className="catalogEmpty"><h3>No format found.</h3><p>Try another packaging term or start a custom brief.</p><Link className="primary" href="/contact?product=Custom%20packaging%20brief">Start a custom brief <span>→</span></Link></div>}
 </div>;
}
