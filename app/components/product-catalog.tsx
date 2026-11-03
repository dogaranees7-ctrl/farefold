"use client";
import Link from "next/link";
import {useMemo,useState} from "react";

type Item={slug:string;name:string;parentSlug:string;parentName:string;parentDetail:string};
type Category={slug:string;name:string;count:number};

export function ProductCatalog({items,categories}:{items:Item[];categories:Category[]}){
 const [query,setQuery]=useState("");
 const [group,setGroup]=useState("all");
 const filtered=useMemo(()=>items.filter(x=>(group==="all"||x.parentSlug===group)&&x.name.toLowerCase().includes(query.trim().toLowerCase())),[items,group,query]);
 const activeCategory=categories.find(x=>x.slug===group);
 return <div className="productCatalog">
  <div className="catalogBrowseHead"><div><p className="eyebrow">Browse by category</p><h3>Explore the <i>range.</i></h3></div><span>{items.length} formats · {categories.length} categories</span></div>
  <div className="catalogCategoryGrid">
   {categories.map((category,index)=><button type="button" key={category.slug} className={group===category.slug?"catalogCategory active":"catalogCategory"} onClick={()=>setGroup(group===category.slug?"all":category.slug)} aria-pressed={group===category.slug}>
    <span className="catalogCategoryNo">{String(index+1).padStart(2,"0")}</span><strong>{category.name}</strong><small>{category.count} formats <b>↗</b></small>
   </button>)}
  </div>
  <div className="catalogTools">
   <label className="catalogSearch"><span>Search the catalogue</span><input aria-label="Search packaging formats" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Try pizza box, cup, bag, tray, napkin..." /></label>
   <button type="button" className="catalogReset" onClick={()=>{setGroup("all");setQuery("");}}>Reset filters ↺</button>
  </div>
  <div className="catalogResultMeta"><span>{activeCategory?activeCategory.name:"All categories"}</span><strong>{filtered.length} {filtered.length===1?"format":"formats"}</strong> to explore <span className="catalogMetaNote">· Format directory, not live stock</span></div>
  <div className="catalogProductGrid">{filtered.map((x,i)=><Link className="catalogProductCard textOnlyProductCard" href={`/products/${x.slug}`} key={x.slug}>
    <span>{String(i+1).padStart(2,"0")}</span><small>{x.parentName}{x.parentDetail!==x.parentName? ` / ${x.parentDetail}`:""}</small><h3>{x.name}</h3><p>Explore this format <b aria-hidden="true">↗</b></p>
  </Link>)}</div>
  {filtered.length===0&&<div className="catalogEmpty"><h3>No matching format found.</h3><p>Try a different search, clear the filters or send us a custom packaging brief.</p><button type="button" className="catalogReset" onClick={()=>{setGroup("all");setQuery("");}}>Clear search and filters ↺</button><Link className="primary" href="/contact?product=Custom%20packaging%20brief">Start a custom brief <span>→</span></Link></div>}
  <p className="catalogDisclosure">This catalogue maps packaging formats that can be discussed and developed with FareFold. It does not imply every format is currently stocked or available. Product photographs, construction, materials, dimensions, minimum quantities, lead times and prices will be confirmed for each enquiry before an order is accepted.</p>
 </div>;
}
