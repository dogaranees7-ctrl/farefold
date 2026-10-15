"use client";
import Link from "next/link";
import {useMemo,useState} from "react";

type Item={slug:string;name:string;parentSlug:string;parentName:string};

type PhotoReference={image:string;source:string;href:string;label:string};

const referenceImages:Record<string,PhotoReference>={
 burger:{
  image:"https://images.pexels.com/photos/212303/pexels-photo-212303.jpeg?cs=srgb&dl=pexels-digitalbuggu-212303.jpg&fm=jpg",
  source:"Pexels · Digital Buggu",
  href:"https://www.pexels.com/photo/fries-and-burger-box-212303/",
  label:"Burger & fast-food packaging"
 },
 fries:{
  image:"https://images.pexels.com/photos/31609724/pexels-photo-31609724.jpeg?cs=srgb&dl=pexels-markus-winkler-1430818-31609724.jpg&fm=jpg",
  source:"Pexels · Markus Winkler",
  href:"https://www.pexels.com/photo/crispy-golden-french-fries-in-a-takeaway-box-31609724/",
  label:"Fries carton"
 },
 cups:{
  image:"https://images.pexels.com/photos/7318858/pexels-photo-7318858.jpeg?cs=srgb&dl=pexels-angela-roma-7318858.jpg&fm=jpg",
  source:"Pexels · Angela Roma",
  href:"https://www.pexels.com/photo/cloe-up-shot-of-disposable-cups-7318858/",
  label:"Cup and carrier packaging"
 },
 containers:{
  image:"https://images.pexels.com/photos/32424228/pexels-photo-32424228.jpeg?cs=srgb&dl=pexels-zehra-k-710717493-32424228.jpg&fm=jpg",
  source:"Pexels · Zehra K.",
  href:"https://www.pexels.com/photo/stack-of-labeled-brown-paper-food-containers-32424228/",
  label:"Paper food containers"
 },
 boxes:{
  image:"https://images.pexels.com/photos/8015739/pexels-photo-8015739.jpeg?cs=srgb&dl=pexels-cup-of-couple-8015739.jpg&fm=jpg",
  source:"Pexels · Cup of Couple",
  href:"https://www.pexels.com/photo/paper-takeout-cups-and-paper-box-8015739/",
  label:"Takeaway boxes"
 }
};

function referenceFor(name:string):PhotoReference{
 const lower=name.toLowerCase();
 if(lower.includes("fries")||lower.includes("snack")||lower.includes("cone")) return referenceImages.fries;
 if(lower.includes("burger")||lower.includes("chicken")||lower.includes("sandwich")) return referenceImages.burger;
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
  <div className="catalogProductGrid">{filtered.map((x,i)=>{const photo=referenceFor(x.name);return <Link className="catalogProductCard" href={`/products/${x.slug}`} key={x.slug}>
    <div className="catalogProductImage" style={{backgroundImage:`url("${photo.image}")`}} role="img" aria-label={photo.label}><span>PHOTO REFERENCE</span></div>
    <div className="catalogProductBody"><span>{String(i+1).padStart(2,"0")}</span><small>{x.parentName}</small><h3>{x.name}</h3><p>Explore format →</p><small className="catalogPhotoCredit">Photo: <span>{photo.source}</span></small></div>
  </Link>})}</div>
  {filtered.length===0&&<div className="catalogEmpty"><h3>No format found.</h3><p>Try another packaging term or start a custom brief.</p><Link className="primary" href="/contact?product=Custom%20packaging%20brief">Start a custom brief <span>→</span></Link></div>}
 </div>;
}
