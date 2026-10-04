import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHead } from "@/components/spec/Sheet";
import { Breadcrumbs } from "@/components/taxonomy/Breadcrumbs";
import { TaxonomyCard } from "@/components/taxonomy/TaxonomyCard";
import { CatalogueEmptyState } from "@/components/taxonomy/CatalogueEmptyState";
import { PageWorld } from "@/components/ui/PageWorld";
import { materials, getNodeBySlug, getChildren, getAncestors, getRelated } from "@/lib/data";

type Params = { slug: string };
type Props = { params: Promise<Params> };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return materials.map((material) => ({ slug: material.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const node = getNodeBySlug(materials, slug);
  if (!node) return {};

  const ancestors = getAncestors(materials, node.slug);
  const hierarchy = ancestors.map((ancestor) => ancestor.name).join(" / ");
  const fallbackDescription = hierarchy
    ? `${node.name} — packaging material within ${hierarchy}. Explore its place in Farefold's material taxonomy.`
    : `${node.name} — packaging material. Explore its place in Farefold's material taxonomy.`;

  return {
    title: node.name,
    description: node.description ?? fallbackDescription,
    alternates: { canonical: `/materials/${node.slug}` },
  };
}

export default async function MaterialPage({ params }: Props) {
  const { slug } = await params;
  const node = getNodeBySlug(materials, slug);
  if (!node) notFound();

  const children = getChildren(materials, node.slug);
  const ancestors = getAncestors(materials, node.slug);
  // Always [] today — relations.ts is intentionally unpopulated; see the
  // identical note in app/products/[slug]/page.tsx.
  const related = getRelated("material", node.slug);

  return (
    <PageWorld world="materials" className="substrate bg-page-bg py-20 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
        <Breadcrumbs
          items={[
            { name: "Materials", href: "/materials" },
            ...ancestors.map((ancestor) => ({
              name: ancestor.name,
              href: `/materials/${ancestor.slug}`,
            })),
            { name: node.name },
          ]}
        />

        <div className="mt-8">
          <PageHead
            tone="page"
            eyebrow="Material"
            headline={node.name}
            intro={node.description ? <p>{node.description}</p> : undefined}
            meta={children.length ? [["Related materials", String(children.length)]] : undefined}
          />
        </div>

        {children.length > 0 ? (
          <ul className="mt-14 grid grid-cols-1 gap-px border border-page-border bg-page-border sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
            {children.map((child) => (
              <TaxonomyCard
                key={child.slug}
                href={`/materials/${child.slug}`}
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
