import type { Metadata } from "next";
import { PageHead } from "@/components/spec/Sheet";
import { TaxonomyCard } from "@/components/taxonomy/TaxonomyCard";
import { PageWorld } from "@/components/ui/PageWorld";
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
    <PageWorld world="businesses" className="substrate bg-page-bg py-20 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
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

        <ul className="mt-14 grid grid-cols-1 gap-px border border-page-border bg-page-border sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {segments.map((segment) => (
            <TaxonomyCard
              key={segment.slug}
              href={`/businesses/${segment.slug}`}
              name={segment.name}
              description={segment.description}
            />
          ))}
        </ul>
      </div>
    </PageWorld>
  );
}
