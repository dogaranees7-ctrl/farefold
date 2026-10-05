import type { Metadata } from "next";
import { TaxonomyCard } from "@/components/taxonomy/TaxonomyCard";
import { businessTypes, getTopLevel } from "@/lib/data";

export const metadata: Metadata = {
  title: "Businesses",
  description:
    "The food-business segments Farefold's packaging platform is built to serve, from restaurants and bakeries to cloud kitchens and catering.",
  alternates: { canonical: "/businesses" },
};

export default function BusinessesIndexPage() {
  const segments = getTopLevel(businessTypes);

  return (
    <div className="bg-[#eee7dc] text-[#171614]">
      <section className="bg-[#4a214e] px-5 py-20 text-[#f4eadc] sm:px-8 sm:py-28 lg:px-14">
        <div className="mx-auto max-w-[120rem]">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c7ff42]">Farefold / Businesses</p>
          <h1 className="mt-7 max-w-6xl text-[clamp(3.5rem,8vw,8rem)] font-extrabold leading-[0.88] tracking-[-0.06em]">Start with the kind of restaurant you are building.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">Choose your business and find the branding, packaging and practical problems we can help you solve.</p>
        </div>
      </section>
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-14"><div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
        <PageHead
          tone="page"
          eyebrow="Businesses"
          headline={
            <>
              Packaging, organised
              <br />
              by <span className="text-page-accent">how you operate.</span>
            </>
          }
          intro={
            <p>
              A bakery, a cloud kitchen and a catering operation hand packaging a different job
              even when they sell similar food. Find your segment to see the taxonomy Farefold
              classifies it under.
            </p>
          }
          meta={[["Segments", String(segments.length)]]}
        />

        <ul className="mt-14 grid grid-cols-1 gap-px border border-black/15 bg-page-border sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {segments.map((segment) => (
            <TaxonomyCard
              key={segment.slug}
              href={`/businesses/${segment.slug}`}
              name={segment.name}
              description={segment.description}
            />
          ))}
        </ul>
      </div></section></div>
  );
}
