import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Packaging",
  description: "Explore restaurant packaging by the job it needs to do: boxes, containers, cups, bags, trays, wraps, labels and printed touchpoints.",
  alternates: { canonical: "/packaging" },
};

const groups = [
  ["Boxes", "Pizza, burger, meal, bakery, dessert, catering and custom carton formats.", "/products/boxes"],
  ["Containers", "Hot food, curry, soup, sauce, compartment and deli formats.", "/products/containers"],
  ["Cups & carriers", "Hot and cold drinks, lids, sleeves, carriers and beverage systems.", "/products/cups"],
  ["Bags", "Takeaway, bakery, delivery, retail and branded carry formats.", "/products/bags"],
  ["Trays & serving", "Sharing trays, presentation structures and transport-ready formats.", "/products/trays"],
  ["Wraps & sleeves", "Greaseproof wraps, bands, sandwich sleeves and brand-forward paper pieces.", "/products/branding-custom"],
  ["Labels & printed touchpoints", "Stickers, labels, inserts, menus, napkins and other pieces that complete the experience.", "/products/branding-custom"],
  ["Custom", "When an existing format does not solve the food, journey or brand problem.", "/custom-packaging"],
];

export default function PackagingPage() {
  return <div className="bg-[#f6f0e6] text-[#171614]">
    <section className="bg-[#7d4b35] px-5 py-20 text-[#fff8ec] sm:px-8 sm:py-28 lg:px-14">
      <div className="mx-auto max-w-[120rem]">
        <p className="text-xs uppercase tracking-[0.28em] text-[#ffd2b8]">Farefold / Packaging</p>
        <h1 className="mt-8 max-w-6xl text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.88] tracking-[-0.06em]">Packaging is part of the brand.</h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">Start with what the food needs to survive, then make the format feel unmistakably yours. Explore the system by packaging job or take a problem to Farefold.</p>
      </div>
    </section>
    <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
      <div className="mx-auto max-w-[120rem]">
        <div className="grid gap-px border border-black/15 bg-black/15 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map(([title,body,href]) => <Link key={title} href={href} className="bg-[#f6f0e6] p-7 hover:bg-white sm:p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-black/40">Packaging</p>
            <h2 className="mt-8 text-2xl font-semibold tracking-[-0.03em]">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-black/60">{body}</p>
            <span className="mt-7 inline-block text-sm font-semibold">Explore →</span>
          </Link>)}
        </div>
        <div className="mt-16 grid gap-8 border-t border-black/15 pt-10 lg:grid-cols-3">
          <div><p className="text-xs uppercase tracking-[0.22em] text-[#7d4b35]">01 / Food first</p><p className="mt-3 leading-7 text-black/60">Heat, grease, moisture, portion, shape and travel decide the starting format.</p></div>
          <div><p className="text-xs uppercase tracking-[0.22em] text-[#7d4b35]">02 / Brand second</p><p className="mt-3 leading-7 text-black/60">The identity then travels across the panels, lids, sleeves, labels and printed pieces customers actually see.</p></div>
          <div><p className="text-xs uppercase tracking-[0.22em] text-[#7d4b35]">03 / Problem solving</p><p className="mt-3 leading-7 text-black/60">If the catalogue does not fit, start a custom project instead of forcing the wrong format.</p></div>
        </div>
      </div>
    </section>
  </div>;
}