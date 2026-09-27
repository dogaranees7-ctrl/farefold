import type { Metadata } from "next";
import { PageHead } from "@/components/spec/Sheet";
import { TaxonomyCard } from "@/components/taxonomy/TaxonomyCard";
import { PageWorld } from "@/components/ui/PageWorld";
import { foodTypes, getTopLevel } from "@/lib/data";

export const metadata: Metadata = {
  title: "Foods",
  description:
    "The food taxonomy Farefold's packaging platform is organised against — from fast food and rice mains to bakery, desserts and beverages.",
  alternates: { canonical: "/foods" },
};

export default function FoodsIndexPage() {
  const groups = getTopLevel(foodTypes);

  return (
    <PageWorld world="foods" className="substrate bg-page-bg py-20 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
        <PageHead
          tone="page"
          eyebrow="Foods"
          headline={
            <>
              What you serve decides
              <br />
              <span className="text-page-accent">packaging structure first.</span>
            </>
          }
          intro={
            <p>
              A pizza, a bowl of daal and a milkshake have nothing in common structurally. Find
              what you serve to see the food taxonomy Farefold designs packaging against.
            </p>
          }
          meta={[["Groups", String(groups.length)]]}
        />

        <ul className="mt-14 grid grid-cols-1 gap-px border border-page-border bg-page-border sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <TaxonomyCard
              key={group.slug}
              href={`/foods/${group.slug}`}
              name={group.name}
              description={group.description}
            />
          ))}
        </ul>
      </div>
    </PageWorld>
  );
}
