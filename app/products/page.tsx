import {PageFrame,LinkCards} from "@/app/components/page-frame";
const groups=[
["Boxes","Pizza boxes, burger boxes, chicken boxes, meal boxes, takeaway boxes, bakery and cake boxes, window, folding and custom structures."],
["Containers","Food, meal, deli, hinged, soup, sauce, salad, dessert and compartment formats."],
["Cups & Lids","Hot and cold cups, coffee, juice, shake, smoothie and dessert formats with matching lids."],
["Bags","Paper, kraft, takeaway, bakery, bread, retail, delivery, bottle and printed bags."],
["Wrapping","Food paper, grease-resistant paper, burger, sandwich, shawarma, deli, bakery paper, sleeves and bands."],
["Trays & Buckets","Food, chicken, bakery, catering, paperboard, plastic, aluminium trays and bucket formats."],
["Accessories","Cutlery, chopsticks, straws, stirrers, napkins, tissue, toothpicks, carriers and food picks."],
["Branding Products","Printed boxes, bags, cups, wrappers, sleeves, stickers, labels, seals, inserts and thank-you cards."]
];
export default function Products(){return <PageFrame eyebrow="03 / Products" title={<>Browse the formats.<br/><i>Build your system.</i></>}><section className="section"><div className="sectionIntro wide"><h2>Everything you need to <i>put the brand into the hand.</i></h2><p>Products are the building blocks. The right combination becomes your delivery, dine-in, beverage, bakery or retail system.</p></div><LinkCards items={groups.map(([title,text])=>({title,text,href:"/contact"}))}/></section></PageFrame>}
