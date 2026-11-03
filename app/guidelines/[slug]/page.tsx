import Link from "next/link";
import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {PageFrame} from "@/app/components/page-frame";

type GuideSection={heading:string;body:string;points:string[]};
type Guide={title:string;intro:string;sections:GuideSection[];checklist:string[]};

const guides={
 "how-to-build-a-restaurant-brand":{
  title:"How to build a restaurant brand",
  intro:"A strong restaurant brand is more than a logo. It is the clear idea customers remember, expressed consistently in the menu, service, space, packaging and digital experience.",
  sections:[
   {heading:"01 / Start with the restaurant itself",body:"Before choosing colours or designing a mark, define what the restaurant is, who it serves and why someone should choose it. A useful position is specific enough to guide decisions without limiting the business unnecessarily.",points:["Describe the food, service style and atmosphere in plain language.","Identify the main customer and the occasions when they buy.","List the qualities you want people to remember after the meal.","Look at nearby alternatives and decide what should feel distinct."]},
   {heading:"02 / Build a visual identity with a job to do",body:"The identity should make the positioning visible. It needs to work at a glance on a sign, a menu, a small label and a packaging surface. Consistency matters more than adding more decorative elements.",points:["Set a clear logo and supporting mark hierarchy.","Choose a focused colour palette and readable type styles.","Create a small set of graphic elements, patterns or image rules.","Check legibility at both large and small sizes."]},
   {heading:"03 / Carry the identity into the customer journey",body:"Customers experience the brand across a sequence of touchpoints. Prioritise the ones they use most, then make the details feel like parts of one system.",points:["Connect menu layout, packaging and printed pieces.","Consider ordering, collection, delivery and unboxing moments.","Keep social and digital layouts recognisably related.","Write simple rules so future pieces stay consistent."]}
  ],
  checklist:["A one-sentence brand position","A defined primary audience and customer occasion","A usable logo, colour and typography system","A menu and packaging touchpoint plan","A short reference guide for consistent future use"]
 },
 "choosing-restaurant-colours":{
  title:"Choosing restaurant colours",
  intro:"Colour can make a restaurant easier to recognise, but it should support the food, positioning and customer experience rather than follow a passing trend.",
  sections:[
   {heading:"01 / Translate personality into a direction",body:"Start with the feeling the restaurant wants to create. A family dining concept, a specialist coffee bar and a lively takeaway brand may need very different visual energy.",points:["Choose three or four brand attributes to guide the mood.","Review the food, interior and existing visual environment.","Decide whether the identity should feel calm, energetic, refined or playful.","Avoid choosing a palette only because a competitor uses it."]},
   {heading:"02 / Create a practical palette",body:"A useful palette has roles. One colour can lead, another can support, and neutrals can give layouts room to breathe. A simple system is easier to apply consistently across many formats.",points:["Define primary, secondary and neutral colours.","Set guidance for backgrounds, text and accent use.","Check text contrast and small-size legibility.","Keep enough flexibility for photography and seasonal campaigns."]},
   {heading:"03 / Test colour in real contexts",body:"A colour that looks good on a screen may behave differently in print or against a particular surface. Review the palette in the places customers will actually see it.",points:["Preview colours on menus, cups, boxes and labels.","Check how the palette works with food photography.","Review colour contrast in bright and low-light settings.","Approve production colour references before a print run."]}
  ],
  checklist:["A short list of brand attributes","Primary, supporting and neutral colour roles","Readable text/background combinations","Examples across print and digital touchpoints","A documented colour reference for future work"]
 },
 "how-to-choose-the-right-box":{
  title:"How to choose the right box",
  intro:"The right box starts with the food and the journey it takes. Shape, portion, temperature, handling and the opening experience should guide the format before artwork is considered.",
  sections:[
   {heading:"01 / Understand what goes inside",body:"A box should suit the actual menu item, not just look right in a catalogue. Think about the food as served, including sides, sauces and any arrangement that must stay intact.",points:["Record the food dimensions and typical portion.","Consider height, shape, toppings and delicate components.","Decide whether items need separation or compartments.","Check whether the box is for one item, a meal or a bundle."]},
   {heading:"02 / Think through the journey",body:"Food packaging moves through a kitchen, a counter or rider handoff, transport and opening. Each stage creates different requirements that should be discussed before a structure is chosen.",points:["Consider heat, steam, moisture and grease.","Review stacking, carrying and movement during delivery.","Check how the box closes and whether it stays secure.","Think about storage space and packing speed in the kitchen."]},
   {heading:"03 / Make the customer experience work",body:"The box should be intuitive to pack, carry and open. Once the practical format is understood, the brand can be applied in a way that makes the experience recognisable.",points:["Check how the customer opens and handles the pack.","Decide where the logo and key information should appear.","Keep important artwork away from folds or closure areas.","Review the physical sample before approving production."]}
  ],
  checklist:["Food and portion details","Delivery or service journey","Closure, stacking and storage considerations","Artwork placement and brand hierarchy","A reviewed sample before production approval"]
 },
 "packaging-for-delivery":{
  title:"Packaging for delivery",
  intro:"Delivery packaging has to work beyond the kitchen counter. It should support food quality, organised handoff, clear identification and a satisfying opening experience.",
  sections:[
   {heading:"01 / Map the complete handoff",body:"Look at the order from preparation to the customer's door. Packaging decisions become clearer when the route, handling and number of components are understood.",points:["List the stages from packing to handoff and delivery.","Identify which items travel together and which should stay separate.","Consider rider handling, stacking and carrying.","Note where orders need labels or customer instructions."]},
   {heading:"02 / Separate needs within the order",body:"A single order may include hot, cold, wet, crisp or fragile items. The packaging system should account for those differences rather than forcing every item into the same format.",points:["Identify items that need separation or extra support.","Consider steam, condensation, grease and sauce leakage.","Plan suitable containers, wraps, bags and secondary packaging.","Check that lids, closures and seals suit the intended use."]},
   {heading:"03 / Test and improve the system",body:"A delivery pack should be reviewed as a complete order, not as isolated pieces. Realistic packing and transport checks can reveal problems before a wider rollout.",points:["Run a representative order through the packing process.","Review the pack after a realistic journey.","Ask staff where packing is slow or confusing.","Use customer feedback to refine the system over time."]}
  ],
  checklist:["A mapped delivery journey","A list of hot, cold, wet and fragile items","A packaging component plan for common orders","A realistic packing and transport review","A process for collecting feedback and improving"]
 },
 "new-restaurant-branding-checklist":{
  title:"New restaurant branding checklist",
  intro:"A new restaurant benefits from making its brand and packaging decisions in a sensible order. This checklist helps connect the concept to the materials customers will encounter at launch.",
  sections:[
   {heading:"01 / Define the foundation",body:"The brand direction should reflect the actual concept and business model. Resolve the fundamentals before committing to a large set of visual materials.",points:["Confirm the restaurant name and concept description.","Define the audience, menu focus and service model.","Write down the intended brand personality and point of difference.","List the main competitors and visual territory to avoid copying."]},
   {heading:"02 / Prepare the core identity",body:"Build a flexible identity that can be applied consistently across the places customers discover, order from and interact with the restaurant.",points:["Approve the logo and supporting identity elements.","Set colours, typography and graphic style.","Prepare menu, signage and essential printed layouts.","Plan core social and digital launch assets."]},
   {heading:"03 / Plan packaging before launch",body:"Packaging should follow the menu and operating model. A clear component list helps avoid ordering attractive pieces that do not work together in practice.",points:["Map menu items to boxes, containers, cups, bags and accessories.","Identify the formats used most often.","Check food fit, storage, packing and delivery requirements.","Confirm artwork, specifications, quantities and timing before approval."]}
  ],
  checklist:["Concept, audience and service model","Approved identity direction","Menu and launch collateral","Menu-to-packaging component list","Confirmed specifications, quantities and production schedule"]
 },
 "opening-a-cafe-bakery-cloud-kitchen":{
  title:"Opening a café / bakery / cloud kitchen",
  intro:"A café, bakery and cloud kitchen may all sell food, but their customer journeys and packaging needs are different. Start with the service model rather than choosing formats by habit.",
  sections:[
   {heading:"01 / Café: design for the cup and the counter",body:"A café often has a mix of dine-in, takeaway and delivery moments. The identity should work on cups and menus while the packaging system supports carrying multiple items.",points:["Separate hot and cold beverage needs.","Consider compatible lids, sleeves and cup carriers.","Plan pastry or snack packaging alongside drinks.","Connect the cup identity to menus, counter and signage."]},
   {heading:"02 / Bakery: protect and present",body:"Bakery products vary widely in shape, fragility and presentation. The pack should protect the product while making takeaway, gifting and display feel considered.",points:["Group products by shape, size and fragility.","Consider cake boxes, bakery boxes, bags and liners.","Plan windows or presentation details only where useful.","Connect labels, seals and gift details to the identity."]},
   {heading:"03 / Cloud kitchen: make delivery repeatable",body:"A delivery-first kitchen needs packaging that supports efficient assembly and a consistent experience across orders. The system should reflect the actual menu and delivery journey.",points:["Map each menu item to a suitable primary pack.","Plan sauces, sides, seals and outer bags.","Make order identification easy for the team.","Review packing speed, stacking and customer feedback."]}
  ],
  checklist:["A defined service model and customer journey","A menu-based list of packaging components","A priority list of high-use formats","Brand applications for the main touchpoints","A practical launch and replenishment plan"]
 },
 "how-to-plan-packaging-quantities":{
  title:"How to plan packaging quantities",
  intro:"Quantity planning should follow menu mix, expected demand and reorder rhythm. A clear estimate is more useful than choosing a quantity without understanding how each format will be used.",
  sections:[
   {heading:"01 / Start with menu mix and order patterns",body:"Different menu items consume different packaging components. Estimate usage by order type rather than applying one average to the entire menu.",points:["Group menu items into practical order categories.","Estimate the share of orders for each category.","Identify which orders use more than one packaging component.","Separate everyday formats from occasional or seasonal ones."]},
   {heading:"02 / Build a component calculation",body:"Translate the menu estimate into packaging use. The calculation should be easy to update when menu mix or sales volume changes.",points:["Map each menu item to its box, cup, bag, liner or accessory.","Estimate units used per order for each component.","Multiply by the expected number of orders in the planning period.","Keep assumptions visible so the estimate can be reviewed."]},
   {heading:"03 / Set a review and reorder rhythm",body:"The first estimate is a starting point. Actual consumption, delivery patterns and menu changes will show where the plan needs adjustment.",points:["Track opening quantities and weekly consumption.","Identify a practical reorder trigger for each key format.","Allow time for artwork approval and production planning.","Review usage after promotions, menu changes or seasonal peaks."]}
  ],
  checklist:["Expected orders by menu category","Packaging component map","Units per order for each component","Visible assumptions and planning period","Consumption tracking and reorder trigger"]
 },
 "how-to-make-packaging-feel-premium":{
  title:"How to make packaging feel premium",
  intro:"Premium packaging is not simply more decoration or a more expensive-looking finish. It comes from a coherent identity, thoughtful structure and a physical experience that feels intentional.",
  sections:[
   {heading:"01 / Use restraint and hierarchy",body:"A confident pack makes the important information easy to find. Too many competing elements can make even a well-designed identity feel less considered.",points:["Give the logo and product information clear roles.","Use a limited set of type styles and graphic elements.","Create space around key messages.","Keep the design consistent across the packaging family."]},
   {heading:"02 / Match the physical format to the brand",body:"The structure, proportions and handling details contribute to how a pack feels. These decisions should suit the product and the brand promise together.",points:["Choose a format that fits and presents the product well.","Consider closure, opening and carrying details.","Discuss materials and finishes against the intended use.","Avoid decorative choices that interfere with function or readability."]},
   {heading:"03 / Make every touchpoint feel connected",body:"A premium experience is easier to recognise when the details work as a system. Small pieces should feel related to the main pack rather than like unrelated add-ons.",points:["Carry the same visual language into bags and accessories.","Keep labels, seals and inserts consistent.","Review the full order or gift set as one experience.","Approve samples and artwork together before production."]}
  ],
  checklist:["A clear visual hierarchy","Consistent typography, colour and graphic language","A structure suited to the product and use","Connected bags, labels and accessories","A reviewed sample of the complete experience"]
 }
} as const;

type GuideSlug=keyof typeof guides;
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;if(!(slug in guides))return {};const guide=guides[slug as GuideSlug];return {title:guide.title,description:guide.intro};}
export function generateStaticParams(){return Object.keys(guides).map(slug=>({slug}));}
export default async function GuidePage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;
 if(!(slug in guides))notFound();
 const guide=guides[slug as GuideSlug];
 return <PageFrame eyebrow="06 / Guidelines" title={guide.title}>
  <article className="guideArticle section">
   <div className="guideArticleIntro"><p>{guide.intro}</p></div>
   <div className="guideContentSections">{guide.sections.map((section)=><section className="guideContentSection" key={section.heading}><p className="eyebrow">{section.heading}</p><p>{section.body}</p><ul>{section.points.map(point=><li key={point}>{point}</li>)}</ul></section>)}</div>
   <section className="guideChecklist"><p className="eyebrow">A quick working checklist</p><h2>Before you move <i>forward.</i></h2><ul>{guide.checklist.map(item=><li key={item}>{item}</li>)}</ul></section>
   <div className="guideArticleCta"><h2>Want help applying this to <i>your business?</i></h2><p>Tell FareFold what you&apos;re building and we can discuss a practical brand and packaging direction around your menu and service model.</p><div><Link className="primary" href={`/contact?product=${encodeURIComponent(guide.title)}`}>Talk to FareFold <span>→</span></Link><Link className="secondary" href="/guidelines">Back to guidelines</Link></div></div>
  </article>
 </PageFrame>;
}
