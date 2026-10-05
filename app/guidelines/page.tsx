import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = { title: "Guidelines", description: "Practical restaurant branding, packaging and launch guides from Farefold.", alternates: { canonical: "/guidelines" } };

const guides = [
  ["Brand", "A restaurant brand is the whole experience, not just the logo.", ["Start with the customer you want to attract.","Choose a personality you can repeat across every touchpoint.","Make the identity work on packaging at real size."]],
  ["Packaging", "Choose packaging around the food, the journey and the customer.", ["Start with heat, grease, moisture, shape and portion.","Think about stacking, carrying, delivery and opening.","Then make the format look unmistakably yours."]],
  ["Printing", "Printed details are small, but they make the system feel complete.", ["Keep colours, type and artwork consistent.","Use stickers, labels, sleeves, menus and inserts with purpose.","Design for production, not just a screen mockup."]],
  ["New restaurant", "Build the brand system before you start ordering everything separately.", ["Define the concept and customer.","Create the identity and packaging direction together.","Prepare the launch touchpoints as one connected set."]],
  ["Rebrand", "Improve the parts that are holding the restaurant back without losing recognition.", ["Keep the equity customers already understand.","Fix inconsistent identity and weak touchpoints.","Roll the new system into packaging and print in stages."]],
  ["Delivery", "The package is often the only physical part of the restaurant a delivery customer receives.", ["Protect the food first.","Make opening and carrying simple.","Use the delivery moment to reinforce the brand."]],
];

export default function GuidelinesPage() {
  return <div className="bg-[#f4eee4] text-[#171614]"><section className="bg-[#171614] px-5 py-20 text-[#f4eee4] sm:px-8 sm:py-28 lg:px-14"><div className="mx-auto max-w-[120rem]"><p className="text-xs uppercase tracking-[0.28em] text-[#b9ff32]">Farefold / Guidelines</p><h1 className="mt-8 max-w-6xl text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.88] tracking-[-0.06em]">Useful ideas for building better restaurant brands.</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">Simple guides for the decisions that sit between a good restaurant idea and a memorable customer experience.</p></div></section><section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-14"><div className="mx-auto max-w-[120rem]"><div className="grid gap-px border border-black/15 bg-black/15 md:grid-cols-2 lg:grid-cols-3">{guides.map(([title,body,points]) => <article key={title} className="bg-[#f4eee4] p-7 sm:p-9"><p className="text-xs uppercase tracking-[0.22em] text-black/40">Guide</p><h2 className="mt-8 text-3xl font-semibold tracking-[-0.03em]">{title}</h2><p className="mt-4 leading-7 text-black/60">{body}</p><ul className="mt-6 space-y-2 border-t border-black/10 pt-5">{points.map((point) => <li key={point} className="text-sm leading-6 text-black/65">→ {point}</li>)}</ul><Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">Work on this with Farefold <ArrowRightIcon className="h-4 w-4" /></Link></article>)}</div></div></section></div>;
}