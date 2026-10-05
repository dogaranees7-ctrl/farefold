import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Branding",
  description: "Restaurant branding, identity, packaging and customer touchpoints by Farefold.",
  alternates: { canonical: "/branding" },
};

const services = [
  ["01", "Brand strategy", "Find the position, personality and promise that make your restaurant different."],
  ["02", "Visual identity", "Build the logo, colours, type and visual language that people can recognise."],
  ["03", "Packaging identity", "Turn the brand into boxes, bags, cups, containers, wrappers and labels."],
  ["04", "Printed touchpoints", "Menus, napkins, stickers, cards, inserts and the details that complete the experience."],
  ["05", "Launch systems", "For a new restaurant, connect the brand, packaging and launch materials before opening."],
  ["06", "Brand refresh", "Keep what is valuable, fix what is weak and give an existing restaurant a stronger system."],
];

const journeys = [
  ["Starting from zero", "You have the restaurant idea. We help turn it into a brand people can see, feel and remember."],
  ["Already running", "Your food works, but the brand doesn't feel consistent. We find the gaps and rebuild the customer-facing system."],
  ["Packaging problem", "You don't need a full rebrand. We solve the packaging problem and make it belong to your brand."],
];

export default function BrandingPage() {
  return (
    <div className="bg-[#f7f1e7] text-[#171614]">
      <section className="bg-[#b9ff32] px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
        <div className="mx-auto max-w-[120rem]">
          <p className="text-xs uppercase tracking-[0.28em] text-[#315000]">Farefold / Branding</p>
          <div className="mt-8 grid gap-12 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
            <h1 className="max-w-6xl text-[clamp(3.8rem,8vw,8.5rem)] font-semibold leading-[0.87] tracking-[-0.065em]">Build a restaurant brand people remember.</h1>
            <div><p className="text-lg leading-8 text-black/65">Not just a logo. A complete identity that keeps working when it leaves the screen and lands on a box, bag, cup, menu and table.</p><Link href="/contact" className="mt-8 inline-flex items-center gap-3 bg-[#171614] px-6 py-4 text-sm font-semibold text-white">Build my brand <ArrowRightIcon className="h-4 w-4" /></Link></div>
          </div>
        </div>
      </section>

      <section className="bg-[#171614] px-5 py-20 text-[#f7f1e7] sm:px-8 sm:py-28 lg:px-14">
        <div className="mx-auto max-w-[120rem]">
          <p className="text-xs uppercase tracking-[0.28em] text-[#b9ff32]">What branding means here</p>
          <h2 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl">Your customer meets the brand before the first bite.</h2>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60">The box is branding. The sticker is branding. The menu, cup, delivery bag and tiny thank-you card are branding. We design those decisions as one system.</p>
          <div className="mt-14 grid gap-px border border-white/15 bg-white/15 md:grid-cols-2 lg:grid-cols-3">
            {services.map(([no,title,body]) => <article key={no} className="bg-[#171614] p-7 sm:p-9"><span className="text-xs tracking-[0.22em] text-white/35">{no}</span><h3 className="mt-12 text-3xl font-semibold">{title}</h3><p className="mt-4 leading-7 text-white/55">{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#ffd1b8] px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
        <div className="mx-auto max-w-[120rem]">
          <p className="text-xs uppercase tracking-[0.28em] text-[#7b3d20]">Where you are</p>
          <div className="mt-10 grid gap-px border border-black/15 bg-black/15 md:grid-cols-3">
            {journeys.map(([title,body]) => <article key={title} className="bg-[#ffd1b8] p-7 sm:p-9"><h3 className="text-3xl font-semibold tracking-[-0.03em]">{title}</h3><p className="mt-4 leading-7 text-black/60">{body}</p><Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">Talk to Farefold <ArrowRightIcon className="h-4 w-4" /></Link></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#ddd5ff] px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
        <div className="mx-auto grid max-w-[120rem] gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div><p className="text-xs uppercase tracking-[0.28em] text-[#55477e]">The fun part</p><h2 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl">Make the brand show up everywhere.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-black/60">Bring us the restaurant problem. We will find the brand idea, then find the packaging and printed touchpoints that make it real.</p></div>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#171614] px-7 py-5 text-sm font-semibold text-white">Start the conversation <ArrowRightIcon className="h-4 w-4" /></Link>
        </div>
      </section>
    </div>
  );
}