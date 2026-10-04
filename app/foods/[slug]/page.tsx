import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHead } from "@/components/spec/Sheet";
import { Breadcrumbs } from "@/components/taxonomy/Breadcrumbs";
import { TaxonomyCard } from "@/components/taxonomy/TaxonomyCard";
import { CatalogueEmptyState } from "@/components/taxonomy/CatalogueEmptyState";
import { PageWorld } from "@/components/ui/PageWorld";
import { foodTypes, getNodeBySlug, getChildren, getAncestors, getRelated } from "@/lib/data";

type Params = { slug: string };
type Props = { params: Promise<Params> };

const characteristicLabels: Record<string, string> = {
  aqueous: "Aqueous",
  acidic: "Acidic",
  "oily-fatty": "Oily / fatty",
  dairy: "Dairy",
  beverage: "Beverage",
  bakery: "Bakery",
  dry: "Dry",
  frozen: "Frozen",
  hot: "Typically served hot",
  refrigerated: "Typically refrigerated",
  reheated: "Typically reheated",
};

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return foodTypes.map((food) => ({ slug: food.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const node = getNodeBySlug(foodTypes, slug);
  if (!node) return {};

  const ancestors = getAncestors(foodTypes, node.slug);
  const hierarchy = ancestors.map((ancestor) => ancestor.name).join(" / ");
  const fallbackDescription = hierarchy
    ? `${node.name} — food category within ${hierarchy}. Explore this food category and its subcategories in Farefold's food taxonomy.`
    : `${node.name} — food category. Explore this food category and its subcategories in Farefold's food taxonomy.`;

  return {
    title: node.name,
    description: node.description ?? fallbackDescription
    alternates: { canonical: `/foods/${node.slug}` },
  };
}

export default async function FoodTypePage({ params }: Props) {
  const { slug } = await params;
  const node = getNodeBySlug(foodTypes, slug);
  if (!node) notFound();

  const children = getChildren(foodTypes, node.slug);
  const ancestors = getAncestors(foodTypes, node.slug);
  // Always [] today — see the identical note in app/products/[slug]/page.tsx.
  const related = getRelated("foodType", node.slug);

  return (
    <PageWorld world="foods" className="substrate bg-page-bg py-20 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
        <Breadcrumbs
          items={[
            { name: "Foods", href: "/foods" },
            ...ancestors.map((ancestor) => ({
              name: ancestor.name,
              href: `/foods/${ancestor.slug}`,
            })),
            { name: node.name },
          ]}
        />

        <div className="mt-8">
          <PageHead
            tone="page"
            eyebrow="Food type"
            headline={node.name}
            intro={node.description ? <p>{node.description}</p> : undefined}
            meta={children.length ? [["Related items", String(children.length)]] : undefined}
          />

          {node.characteristics && node.characteristics.length > 0 && (
            <div className="mt-8">
              <p className="t-tech-sm text-page-ink-mute">Classification</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {node.characteristics.map((characteristic) => (
                  <span
                    key={characteristic}
                    className="t-tech-sm border border-page-border px-2.5 py-1 text-page-ink-soft"
                  >
                    {characteristicLabels[characteristic] ?? characteristic}
                  </span>
                ))}
              </div>
              <p className="mt-3 max-w-[54ch] text-[0.85rem] leading-6 text-page-ink-mute">
                General classification only — not a food-safety or packaging-suitability claim.
              </p>
            </div>
          )}
        </div>

        {children.length > 0 ? (
          <ul className="mt-14 grid grid-cols-1 gap-px border border-page-border bg-page-border sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
            {children.map((child) => (
              <TaxonomyCard
                key={child.slug}
                href={`/foods/${child.slug}`}
                name={child.name}
                description={child.description}
              />
            ))}
          </ul>
        ) : (
          <div className="mt-14 sm:mt-20">
            <CatalogueEmptyState categoryName={node.name} />
          </div>
        )}

        {related.length > 0 && (
          <div className="mt-14 border-t border-page-border pt-10 sm:mt-20">
            <p className="t-tech-sm text-page-ink-mute">Related</p>
          </div>
        )}
      </div>
    </PageWorld>
  );
}
