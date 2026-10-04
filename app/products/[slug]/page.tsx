import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHead } from "@/components/spec/Sheet";
import { Breadcrumbs } from "@/components/taxonomy/Breadcrumbs";
import { TaxonomyCard } from "@/components/taxonomy/TaxonomyCard";
import { CatalogueEmptyState } from "@/components/taxonomy/CatalogueEmptyState";
import { PageWorld } from "@/components/ui/PageWorld";
import { productFamilies, getNodeBySlug, getChildren, getAncestors, getRelated } from "@/lib/data";

type Params = { slug: string };
type Props = { params: Promise<Params> };

// The taxonomy is closed and fully known at build time — an unlisted slug
// should 404 outright rather than fall back to a dynamic render.
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return productFamilies.map((family) => ({ slug: family.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const node = getNodeBySlug(productFamilies, slug);
  if (!node) return {};

  const ancestors = getAncestors(productFamilies, node.slug);
  const hierarchy = ancestors.map((ancestor) => ancestor.name).join(" / ");
  const fallbackDescription = hierarchy
    ? `${node.name} — packaging product family within ${hierarchy}. Explore this packaging family and its subcategories in Farefold's product taxonomy.`
    : `${node.name} — packaging product family. Explore this packaging family and its subcategories in Farefold's product taxonomy.`;

  return {
    title: node.name,
    description: node.description ?? fallbackDescription
    alternates: { canonical: `/products/${node.slug}` },
  };
}

export default async function ProductFamilyPage({ params }: Props) {
  const { slug } = await params;
  const node = getNodeBySlug(productFamilies, slug);
  if (!node) notFound();

  const children = getChildren(productFamilies, node.slug);
  const ancestors = getAncestors(productFamilies, node.slug);
  // Always [] today — relations.ts is intentionally unpopulated. Wired in
  // now so a later phase can populate relationships without touching the
  // route itself; the section below simply never renders until then.
  const related = getRelated("productFamily", node.slug);

  return (
    <PageWorld world="shop" className="substrate bg-page-bg py-20 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
        <Breadcrumbs
          items={[
            { name: "Products", href: "/products" },
            ...ancestors.map((ancestor) => ({
              name: ancestor.name,
              href: `/products/${ancestor.slug}`,
            })),
            { name: node.name },
          ]}
        />

        <div className="mt-8">
          <PageHead
            tone="page"
            eyebrow="Product family"
            headline={node.name}
            intro={node.description ? <p>{node.description}</p> : undefined}
            meta={children.length ? [["Subcategories", String(children.length)]] : undefined}
          />
        </div>

        {children.length > 0 ? (
          <ul className="mt-14 grid grid-cols-1 gap-px border border-page-border bg-page-border sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
            {children.map((child) => (
              <TaxonomyCard
                key={child.slug}
                href={`/products/${child.slug}`}
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
