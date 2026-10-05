import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { FoldMark, ArrowRightIcon } from "@/components/icons";

const businessPaths = [
  ["Pizza", "Build a memorable pizza brand from the box out."],
  ["Burger & QSR", "Make the handoff look as strong as the meal."],
  ["Café & Coffee", "Turn cups, carriers and bags into brand assets."],
  ["Bakery & Dessert", "Make every box, sleeve and sticker feel intentional."],
  ["Desi, BBQ & Shawarma", "Solve heat, grease, sauces and delivery without losing identity."],
  ["Cloud Kitchen", "Create a complete delivery brand around the food."],
];

const brandServices = [
  ["01", "Brand direction", "Positioning, personality, visual direction and the decisions that make a restaurant recognisable."],
  ["02", "Packaging system", "Choose and shape boxes, cups, bags, containers, wraps and every customer-facing format."],
  ["03", "Print & touchpoints", "Menus, napkins, stickers, labels, inserts, cards and the small things customers remember."],
  ["04", "Launch or refresh", "Starting from zero or fixing a tired brand — one joined-up system instead of disconnected pieces."],
];

const problemCards = [
  ["Your food is good. Your packaging isn't.", "We turn a forgettable handoff into a branded customer moment."],
  ["You have a logo. You don't have a brand system.", "We carry the identity from the storefront to the box, bag, cup and receipt."],
  ["You are opening from zero.", "We help shape the brand, packaging and printed essentials before the first customer arrives."],
];

export default function Home() {
  return (
    <div id="top" className="bg-[#f6f0e6] text-[#171614]">
      <section className="border-b border-black/15 bg-[#f6f0e6]">
        <div className="mx-auto grid min-h-[78vh] max-w-[120rem] lg:grid-cols-[1.35fr_.65fr]">
          <div className="flex flex-col justify-between border-r border-black/15 px-5 py-10 sm:px-8 lg:px-14 lg:py-14">
            <div className="flex items-center gap-3"><FoldMark className="h-7 w-7" /><span className="text-lg font-semibold">Farefold</span></div>
            <div className="max-w-5xl py-16">
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-[#7d4b35]">Restaurant branding × packaging</p>
              <h1 className="max-w-5xl text-[clamp(3.8rem,8vw,8.8rem)] font-semibold leading-[0.88] tracking-[-0.065em]">Make your food<br /><span className="text-[#7d4b35]">look unforgettable.</span></h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-black/65 sm:text-xl">We build restaurant brands through identity, packaging, print and clever ideas — from the first concept to the package your customer carries home.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#171614] px-6 py-4 text-sm font-semibold text-white hover:-translate-y-0.5">Start a brand <ArrowRightIcon className="h-4 w-4" /></Link>
                <Link href="/businesses" className="inline-flex items-center justify-center gap-3 border border-black/20 px-6 py-4 text-sm font-semibold hover:bg-white/60">Find your restaurant type</Link>
              </div>
            </div>
            <p className="text-xs uppercase tracking-[0.22em] text-black/45">Pakistan first · built for food businesses</p>
          </div>
          <div className="grid grid-rows-2">
            <Link href="/branding" className="group flex flex-col justify-end bg-[#c8ff3d] p-7 hover:bg-[#b8ef2b] sm:p-10">
              <span className="text-xs uppercase tracking-[0.24em]">01 / Branding</span>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">A brand is more than a logo.</h2>
              <p className="mt-3 max-w-md text-black/65">Give your restaurant a personality that survives every box, bag, cup and customer touchpoint.</p>
              <span className="mt-8 flex items-center gap-2 text-sm font-semibold">Build the brand <ArrowRightIcon className="h-4 w-4" /></span>
            </Link>
            <Link href="/products" className="group flex flex-col justify-end bg-[#7d4b35] p-7 text-[#fff8ec] hover:bg-[#6e402e] sm:p-10">
              <span className="text-xs uppercase tracking-[0.24em] text-[#fff8ec]/65">02 / Packaging</span>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">Packaging that does a job.</h2>
              <p className="mt-3 max-w-md text-[#fff8ec]/70">Find the right box, cup, bag, container, label or printed piece for the way your food actually moves.</p>
              <span className="mt-8 flex items-center gap-2 text-sm font-semibold">Explore packaging <ArrowRightIcon className="h-4 w-4" /></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#171614] px-5 py-20 text-[#f6f0e6] sm:px-8 sm:py-28 lg:px-14">
        <div className="mx-auto max-w-[120rem]">
          <p className="text-xs uppercase tracking-[0.28em] text-[#c8ff3d]">The Farefold idea</p>
          <div className="mt-8 grid gap-12 lg:grid-cols-[1.15fr_.85fr]">
            <h2 className="max-w-5xl text-5xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-7xl">We don't just put your logo on a box. We solve the brand problem behind the box.</h2>
            <div className="space-y-6 text-lg leading-8 text-white/65"><p>Good packaging protects the food. Great packaging also tells people who made it, what to expect and why they should remember you.</p><p>That's why branding, structure, print and supply belong in the same conversation.</p></div>
          </div>
          <div className="mt-16 grid gap-px border border-white/15 bg-white/15 sm:grid-cols-3">
            {problemCards.map(([title, body]) => <div key={title} className="bg-[#171614] p-7 sm:p-8"><h3 className="text-2xl font-semibold leading-tight">{title}</h3><p className="mt-4 text-sm leading-6 text-white/55">{body}</p></div>)}
          </div>
        </div>
      </section>

      <section className="bg-[#e9ffb0] px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
        <div className="mx-auto max-w-[120rem]">
          <div className="flex flex-col justify-between gap-6 border-b border-black/15 pb-8 lg:flex-row lg:items-end">
            <div><p className="text-xs uppercase tracking-[0.28em] text-[#426000]">What we build</p><h2 className="mt-4 text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">One brand. Many touchpoints.</h2></div>
            <Link href="/branding" className="flex items-center gap-2 text-sm font-semibold">See branding services <ArrowRightIcon className="h-4 w-4" /></Link>
          </div>
          <div className="mt-10 grid gap-px border border-black/15 bg-black/15 md:grid-cols-2">
            {brandServices.map(([no, title, body]) => <div key={no} className="bg-[#e9ffb0] p-7 sm:p-9"><span className="text-xs tracking-[0.22em] text-black/40">{no}</span><h3 className="mt-12 text-3xl font-semibold tracking-[-0.035em]">{title}</h3><p className="mt-4 max-w-xl leading-7 text-black/60">{body}</p></div>)}
          </div>
        </div>
      </section>

      <section className="bg-[#ffd2b8] px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
        <div className="mx-auto max-w-[120rem]">
          <p className="text-xs uppercase tracking-[0.28em] text-[#763b1f]">Built around your business</p>
          <div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><h2 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl">Start with what you sell.</h2><p className="max-w-md leading-7 text-black/60">Choose your restaurant type and discover the brand, packaging and print problems we can solve together.</p></div>
          <div className="mt-12 grid gap-px border border-black/15 bg-black/15 sm:grid-cols-2 lg:grid-cols-3">
            {businessPaths.map(([name, body]) => <Link key={name} href="/businesses" className="group bg-[#ffd2b8] p-7 hover:bg-[#fff0e5] sm:p-8"><span className="text-xs uppercase tracking-[0.22em] text-black/40">Business</span><h3 className="mt-8 text-3xl font-semibold tracking-[-0.035em]">{name}</h3><p className="mt-3 text-black/60">{body}</p><span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">Explore <ArrowRightIcon className="h-4 w-4" /></span></Link>)}
          </div>
        </div>
      </section>

      <section className="bg-[#d9d1ff] px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
        <div className="mx-auto grid max-w-[120rem] gap-12 lg:grid-cols-[1fr_.8fr]">
          <div><p className="text-xs uppercase tracking-[0.28em] text-[#51447f]">New restaurant?</p><h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl">Let's build it from the first idea.</h2></div>
          <div className="flex flex-col justify-end"><p className="text-lg leading-8 text-black/65">Name, identity, packaging, menus, printed pieces, launch direction — bring us the idea and we'll turn the scattered decisions into one brand system.</p><Link href="/contact" className="mt-8 inline-flex w-fit items-center gap-3 bg-[#171614] px-6 py-4 text-sm font-semibold text-white">Tell us what you're building <ArrowRightIcon className="h-4 w-4" /></Link></div>
        </div>
      </section>

      <section id="contact" className="bg-[#f6f0e6] px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
        <div className="mx-auto max-w-[120rem] border-t border-black/15 pt-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="text-xs uppercase tracking-[0.28em] text-black/45">Farefold / Pakistan</p><h2 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl">Have a restaurant problem? Let's make something fun out of it.</h2></div><Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#171614] px-7 py-5 text-sm font-semibold text-white">Start a conversation <ArrowRightIcon className="h-4 w-4" /></Link></div>
          <p className="mt-12 text-sm text-black/45">{siteConfig.email} · {siteConfig.whatsappDisplay}</p>
        </div>
      </section>
    </div>
  );
}