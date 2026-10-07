"use client";

import {FormEvent,useState} from "react";
import {siteConfig} from "@/lib/site-config";

export function ContactForm({product=""}:{product?:string}){
 const [sent,setSent]=useState(false);

 function submit(e:FormEvent<HTMLFormElement>){
  e.preventDefault();
  const data=new FormData(e.currentTarget);
  const body=[
   `Name: ${data.get("name")}`,
   `Business: ${data.get("business")}`,
   `Project stage: ${data.get("stage")}`,
   `Need: ${data.get("need")}`,
   `Product / format: ${data.get("product")||"Not specified"}`,
   `What you serve: ${data.get("serve")||"Not specified"}`,
   `Approximate monthly volume: ${data.get("volume")||"Not specified"}`,
   `Timeline: ${data.get("timeline")||"Not specified"}`,
   `City: ${data.get("city")||"Not specified"}`,
   `Brief: ${data.get("brief")}`
  ].join("\n");
  window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hi Farefold — I’d like to start a project.\n\n"+body)}`,"_blank","noopener,noreferrer");
  setSent(true);
 }

 return <form className="contactForm" onSubmit={submit}>
  <label>Your name<input required name="name" autoComplete="name" placeholder="Your name"/></label>
  <label>Business name<input required name="business" autoComplete="organization" placeholder="Restaurant / business name"/></label>
  <label>Where are you in the journey?<select required name="stage" defaultValue=""><option value="" disabled>Select one</option><option>Planning a new restaurant</option><option>Launching soon</option><option>Already operating</option><option>Rebranding / refreshing</option><option>Adding a new product or location</option></select></label>
  <label>What do you need?<select required name="need" defaultValue=""><option value="" disabled>Select one</option><option>Full brand from zero</option><option>Branding for an existing restaurant</option><option>Packaging only</option><option>Brand + packaging system</option><option>Custom packaging</option><option>Restaurant launch system</option></select></label>
  <label>Product / format<input name="product" defaultValue={product} placeholder="Optional product or packaging format"/></label>
  <label>What do you serve?<input name="serve" placeholder="Pizza, burgers, desserts, beverages, etc."/></label>
  <label>Approximate monthly volume<input name="volume" placeholder="Optional — orders or pieces per month"/></label>
  <label>Timeline<select name="timeline" defaultValue=""><option value="">Optional — when do you need it?</option><option>As soon as possible</option><option>Within 2–4 weeks</option><option>Within 1–2 months</option><option>Planning ahead</option></select></label>
  <label>City<input name="city" autoComplete="address-level2" placeholder="City / delivery location"/></label>
  <label>Tell us a little<textarea required name="brief" placeholder="What are you building, what do you serve, and what do you need?"/></label>
  <button type="submit">Send project brief <span>→</span></button>
  {sent&&<p className="formSuccess">Your brief is ready in WhatsApp. Send it there to start the conversation.</p>}
 </form>;
}