import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Guidelines",
  description: "Practical restaurant branding, packaging and launch guides from Farefold.",
  alternates: { canonical: "/guidelines" },
};

const guides = [
  ["Brand", "How to make a restaurant identity work beyond the logo."],
  ["Packaging", "How to choose formats around food, travel, storage and service."],
  ["Printing", "How to turn boxes, bags, cups and paper touchpoints into a consistent system."],
  ["New restaurant", "A practical path from restaurant idea to brand and customer-ready packaging."],
  ["Rebrand", "How to improve an existing restaurant without losing what customers already know."],
  ["Delivery", "How to make the delivery journey feel like part of the brand."],
];

export default function GuidelinesPage() {
  return (
    <div className="bg-[#f4eee4] text-[#171614]">
      <section className="bg-[#171614] px-5 py-20 text-[#f4eee4] sm:px-8 sm:py-28 lg:px-14">
        <div className="mx-auto max-w-[120rem]">
          <p className="text-xs uppercase tracking-[0.28em] text-[#b9ff32]">Farefold / Guidelines</p>
          <h1 className="mt-8 max-w-6xl text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.88] tracking-[-0.06em]">Useful ideas for building better restaurant brands.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">Simple guides for the decisions that sit between a good restaurant idea and a memorable customer experience.</p>
        </div>
      </section>
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
        <div className="mx-auto max-w-[120rem]">
          <div className="grid gap-px border border-black/15 bg-black/15 md:grid-cols-2 lg:grid-cols-3">
            {guides.map(([title,body]) => <article key={title} className="bg-[#f4eee4] p-7 sm:p-9"><p className="text-xs uppercase tracking-[0.22em] text-black/40">Guide</p><h2 className="mt-10 text-3xl font-semibold tracking-[-0.03em]">{title}</h2><p className="mt-4 leading-7 text-black/60">{body}</p><Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">Talk to us <ArrowRightIcon className="h-4 w-4" /></Link></article>)}
          </div>
        </div>
      </section>
    </div>
  );
}