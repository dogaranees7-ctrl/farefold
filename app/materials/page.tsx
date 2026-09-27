import type { Metadata } from "next";
import { PageHead } from "@/components/spec/Sheet";
import { TaxonomyCard } from "@/components/taxonomy/TaxonomyCard";
import { PageWorld } from "@/components/ui/PageWorld";
import { materials, getTopLevel } from "@/lib/data";

export const metadata: Metadata = {
  title: "Materials",
  description:
    "The packaging substrates Farefold specifies against — fibre-based, plastics, metal & glass, composite/laminated structures and sustainable/emerging materials, organised by family.",
  alternates: { canonical: "/materials" },
};

export default function MaterialsIndexPage() {
  const families = getTopLevel(materials);

  return (
    <PageWorld world="materials" className="substrate bg-page-bg py-20 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
        <PageHead
          tone="page"
          eyebrow="Materials"
          headline={
            <>
              The substrate decides
              <br />
              what the structure <span className="text-page-accent">can do.</span>
            </>
          }
          intro={
            <p>
              Board, plastic, metal, glass and laminated structures each behave differently
              against heat, grease and moisture. Open a family to see what sits inside it —
              material choice here is classification, not a suitability or safety claim for any
              specific product.
            </p>
          }
          meta={[["Families", String(families.length)]]}
        />

        <ul className="mt-14 grid grid-cols-1 gap-px border border-page-border bg-page-border sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {families.map((family) => (
            <TaxonomyCard
              key={family.slug}
              href={`/materials/${family.slug}`}
              name={family.name}
              description={family.description}
            />
          ))}
        </ul>
      </div>
    </PageWorld>
  );
}
