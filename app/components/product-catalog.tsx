"use client";
import Link from "next/link";
import {useMemo,useState} from "react";

type Item={slug:string;name:string;parentSlug:string;parentName:string;parentDetail:string};
type Category={slug:string;name:string;count:number};

export function ProductCatalog({items,categories}:{items:Item[];categories:Category[]}){
 const [query,setQuery]=useState("");
 const [group,setGroup]=useState("all");
 const searchAliases:Record<string,string[]>={
  "pizza-boxes":["pizza","pizzeria","delivery box","pizza carton"],
  "burger-boxes":["hamburger","burger","burger carton"],
  "chicken-boxes":["fried chicken","broast","wings","chicken takeaway"],
  "snack-boxes":["fries","finger food","snacks","side box"],
  "meal-boxes":["lunch box","meal packaging","food box","meal carton"],
  "takeaway-boxes":["carryout","take out","to-go","takeaway packaging"],
  "pasta-boxes":["macaroni","pasta takeaway"],
  "noodle-boxes":["asian food","chinese takeaway","noodle carton"],
  "bakery-boxes":["pastry","bread","baked goods","bakery packaging"],
  "cake-boxes":["cake packaging","cake carrier","cake carton"],
  "dessert-boxes":["sweets","pudding","dessert packaging"],
  "sandwich-boxes":["wrap sandwich","sub","sandwich carton"],
  "catering-boxes":["event catering","food service boxes"],
  "gift-boxes":["presentation box","gift packaging","rigid gift"],
  "retail-boxes":["shelf packaging","product carton"],
  "window-boxes":["display window","clear window carton"],
  "folding-cartons":["carton","folding box","paperboard carton"],
  "die-cut-boxes":["custom shape","diecut","special shape carton"],
  "popcorn-boxes":["popcorn tub","cinema snacks"],
  "hot-dog-boxes":["hotdog","hot dog takeaway"],
  "taco-boxes":["taco holder","mexican takeaway"],
  "sushi-boxes":["sushi takeaway","japanese food packaging"],
  "cupcake-boxes":["muffin box","cupcake carrier"],
  "donut-boxes":["doughnut box","donut carton"],
  "macaron-boxes":["macaroon box","confectionery box"],
  "food-containers":["clamshell","meal tub","takeaway tub"],
  "meal-containers":["lunch container","meal prep tub"],
  "deli-containers":["cold food tub","deli tub"],
  "hinged-containers":["clamshell container","flip top tub"],
  "soup-containers":["soup tubs","hot soup pot"],
  "sauce-containers":["dip cups","condiment cups","sauce pots"],
  "salad-containers":["salad bowls","fresh food tub"],
  "dessert-containers":["pudding tub","sweet containers"],
  "ice-cream-containers":["gelato tubs","ice cream tubs"],
  "round-containers":["circular food tub"],
  "rectangular-containers":["square food tub","rectangular food tub"],
  "compartment-containers":["divided meal tray","sectioned container"],
  "pet-containers":["pet plastic","clear plastic food container"],
  "pp-containers":["polypropylene tub","microwave food tub"],
  "aluminium-containers":["foil food container","aluminum food tray"],
  "paper-bowls":["soup bowl","salad bowl","paper food bowl"],
  "noodle-containers":["noodle tubs","wok box"],
  "portion-cups":["dip pots","sample cups","condiment pots"],
  "microwaveable-containers":["microwave safe tub","reheat container"],
  "hot-cups":["hot drink cups","tea cups","disposable hot cups"],
  "cold-cups":["cold drink cups","iced drink cups"],
  "coffee-cups":["hot drinks","cafe cups","takeaway coffee"],
  "juice-cups":["beverage cups","drink cups","juice containers"],
  "shake-cups":["milkshake","shakes","thick shake cups"],
  "smoothie-cups":["smoothies","blended drinks"],
  "dessert-cups":["pudding cups","layered dessert"],
  "ice-cream-cups":["gelato cups","frozen dessert"],
  "paper-cups":["disposable paper drink cups"],
  "plastic-cups":["clear drink cups","disposable plastic cups"],
  "flat-lids":["flat cup cover"],
  "dome-lids":["dome cup cover","whipped cream lid"],
  "sip-lids":["coffee sip lid","drinking lid"],
  "straw-lids":["straw opening lid"],
  "soup-lids":["soup container cover"],
  "container-lids":["food tub covers"],
  "cup-lids":["drink cup covers"],
  "paper-bags":["shopping bags","carry bags","paper carrier"],
  "kraft-bags":["brown paper bags","natural kraft carrier"],
  "takeaway-bags":["delivery bags","food bags","restaurant carrier"],
  "bakery-bags":["bread bags","pastry bags"],
  "bread-bags":["loaf bags","bakery bread packaging"],
  "retail-bags":["shopper bags","store carrier"],
  "delivery-bags":["food delivery carrier","takeout bags"],
  "bottle-bags":["wine carrier","drink bottle carrier"],
  "bakery-carrier-bags":["bakery takeaway carrier"],
  "handled-paper-bags":["paper carrier with handles"],
  "custom-printed-bags":["branded bags","logo printed carrier"],
  "food-wrapping-paper":["food paper","liners","printed food wrap"],
  "grease-resistant-paper":["greaseproof","burger liner","oil resistant paper"],
  "burger-paper":["burger wrap","hamburger liner"],
  "sandwich-paper":["sandwich wrap","deli wrap"],
  "shawarma-paper":["kebab wrap","roll wrap"],
  "deli-paper":["food basket liner","deli wrap"],
  "basket-liners":["tray liner","food basket paper"],
  "parchment-paper":["baking paper","oven paper"],
  "bakery-paper":["pastry liner","baking liner"],
  "sleeves":["food sleeves","cup sleeve","wrap sleeve"],
  "bands":["paper bands","belly bands","packaging band"],
  "foil":["aluminium foil","aluminum foil","food foil"],
  "food-trays":["takeaway tray","serving tray"],
  "chicken-trays":["fried chicken tray","broast tray"],
  "bakery-trays":["pastry tray","bakery display tray"],
  "catering-trays":["event food tray","serving platter"],
  "paperboard-trays":["cardboard tray","paper tray"],
  "plastic-trays":["food plastic tray"],
  "aluminium-trays":["foil tray","aluminum tray"],
  "compartment-trays":["divided tray","sectioned serving tray"],
  "sushi-trays":["sashimi tray","japanese food tray"],
  "ice-cream-cones":["waffle cone","dessert cone"],
  "fries-cones":["french fries holder","chips cone"],
  "snack-cones":["popcorn cone","snack holder"],
  "chicken-buckets":["fried chicken bucket","broast bucket"],
  "snack-buckets":["fries bucket","popcorn bucket"],
  "ice-buckets":["ice pail"],
  "cutlery":["disposable utensils","tableware"],
  "forks":["disposable fork","food fork"],
  "knives":["disposable knife","cutlery knife"],
  "spoons":["disposable spoon","dessert spoon"],
  "chopsticks":["asian utensils","sushi sticks"],
  "straws":["drinking straws","juice straws"],
  "stirrers":["coffee stir sticks","drink stirrer"],
  "napkins":["serviettes","paper napkins"],
  "tissue":["facial tissue","paper tissue"],
  "toothpicks":["cocktail picks","wooden picks"],
  "cup-carriers":["drink carriers","coffee cup holder"],
  "cup-sleeves":["coffee sleeves","cup jackets"],
  "portion-cutlery-kits":["cutlery set","utensil kit"],
  "straw-pouches":["straw wrapper","straw sleeve"],
  "food-picks":["cocktail picks","appetizer picks"],
  "printed-boxes":["branded boxes","custom printed carton"],
  "printed-bags":["branded bags","logo bags"],
  "printed-cups":["branded cups","logo coffee cups"],
  "printed-wrappers":["branded food wrap","printed deli paper"],
  "printed-sleeves":["branded sleeves","printed cup sleeve"],
  "stickers":["brand stickers","seals","labels"],
  "labels":["product labels","packaging labels"],
  "seals":["tamper seals","closure stickers"],
  "inserts":["box inserts","packaging dividers"],
  "thank-you-cards":["thank you notes","order inserts"],
  "custom-packaging":["bespoke packaging","made to order","special shape"]
 };
 const filtered=useMemo(()=>items.filter(x=>{
  const terms=query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const searchable=[x.name,x.slug.replace(/-/g," "),x.parentName,x.parentDetail,...(searchAliases[x.slug]??[])].join(" ").toLowerCase();
  return (group==="all"||x.parentSlug===group)&&terms.every(term=>searchable.includes(term));
 }),[items,group,query]);
 const activeCategory=categories.find(x=>x.slug===group);
 return <div className="productCatalog">
  <div className="catalogBrowseHead"><div><p className="eyebrow">Browse by category</p><h3>Explore the <i>range.</i></h3></div><span>{items.length} formats · {categories.length} categories</span></div>
  <div className="catalogCategoryGrid" aria-label="Packaging categories">
   {categories.map((category,index)=><button type="button" key={category.slug} className={group===category.slug?"catalogCategory active":"catalogCategory"} onClick={()=>setGroup(group===category.slug?"all":category.slug)} aria-pressed={group===category.slug}>
    <span className="catalogCategoryNo">{String(index+1).padStart(2,"0")}</span><strong>{category.name}</strong><small>{category.count} formats <b>↗</b></small>
   </button>)}
  </div>
  <div className="catalogTools">
   <label className="catalogSearch"><span>Search the catalogue</span><input type="search" aria-label="Search packaging formats" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Try pizza box, cup, bag, tray, napkin..." /></label>
   <button type="button" className="catalogReset" onClick={()=>{setGroup("all");setQuery("");}}>Reset filters ↺</button>
  </div>
  <div className="catalogResultMeta" role="status" aria-live="polite"><span>{activeCategory?activeCategory.name:"All categories"}</span><strong>{filtered.length} {filtered.length===1?"format":"formats"}</strong> to explore <span className="catalogMetaNote">· Format directory, not live stock</span></div>
  <div className="catalogProductGrid">{filtered.map((x,i)=><Link className="catalogProductCard textOnlyProductCard" href={`/products/${x.slug}`} key={x.slug}>
    <span>{String(i+1).padStart(2,"0")}</span><small>{x.parentName}{x.parentDetail!==x.parentName? ` / ${x.parentDetail}`:""}</small><h3>{x.name}</h3><p>Explore this format <b aria-hidden="true">↗</b></p>
  </Link>)}</div>
  {filtered.length===0&&<div className="catalogEmpty"><h3>No matching format found.</h3><p>Try a different search, clear the filters or send us a custom packaging brief.</p><button type="button" className="catalogReset" onClick={()=>{setGroup("all");setQuery("");}}>Clear search and filters ↺</button><Link className="primary" href="/contact?product=Custom%20packaging%20brief">Start a custom brief <span>→</span></Link></div>}
  <p className="catalogDisclosure">This catalogue maps packaging formats that can be discussed and developed with FareFold. It does not imply every format is currently stocked or available. Product photographs, construction, materials, dimensions, minimum quantities, lead times and prices will be confirmed for each enquiry before an order is accepted.</p>
 </div>;
}
