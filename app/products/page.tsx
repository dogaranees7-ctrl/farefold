import type { Metadata } from "next";
import { PageHead } from "@/components/spec/Sheet";
import { TaxonomyCard } from "@/components/taxonomy/TaxonomyCard";
import { PageWorld } from "@/components/ui/PageWorld";
import { productFamilies, getTopLevel } from "@/lib/data";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Every packaging family Farefold designs, sources, prints and supplies against — boxes, containers, cups, lids, bags, wrapping, trays and accessories, organised by category.",
  alternates: { canonical: "/products" },
};

export default function ProductsIndexPage() {
  const families = getTopLevel(productFamilies);

  return (
    <PageWorld world="shop" className="substrate bg-page-bg py-20 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
        <PageHead
          tone="page"
          eyebrow="Products"
          headline={
            <>
              Packaging, organised
              <br />
              by <span className="text-page-accent">what it&apos;s for.</span>
            </>
          }
          intro={
            <p>
              Every format Farefold designs, sources, prints and supplies against falls into one
              of these families. Open a category to see what sits inside it — and where the
              catalogue still has gaps we&apos;re filling honestly rather than papering over.
            </p>
          }
          meta={[["Families", String(families.length)]]}
        />

        <ul className="mt-14 grid grid-cols-1 gap-px border border-page-border bg-page-border sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {families.map((family) => (
            <TaxonomyCard
              key={family.slug}
              href={`/products/${family.slug}`}
              name={family.name}
              description={family.description}
            />
          ))}
        </ul>
      </div>
    </PageWorld>
  );
}
