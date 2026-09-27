import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHead } from "@/components/spec/Sheet";
import { Breadcrumbs } from "@/components/taxonomy/Breadcrumbs";
import { TaxonomyCard } from "@/components/taxonomy/TaxonomyCard";
import { CatalogueEmptyState } from "@/components/taxonomy/CatalogueEmptyState";
import { PageWorld } from "@/components/ui/PageWorld";
import { businessTypes, getNodeBySlug, getChildren, getAncestors, getRelated } from "@/lib/data";

type Params = { slug: string };
type Props = { params: Promise<Params> };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return businessTypes.map((type) => ({ slug: type.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const node = getNodeBySlug(businessTypes, slug);
  if (!node) return {};

  return {
    title: node.name,
    description:
      node.description ??
      `${node.name} — a business segment Farefold's packaging platform classifies for. Browse related categories or talk to us about what you need.`,
    alternates: { canonical: `/businesses/${node.slug}` },
  };
}

export default async function BusinessTypePage({ params }: Props) {
  const { slug } = await params;
  const node = getNodeBySlug(businessTypes, slug);
  if (!node) notFound();

  const children = getChildren(businessTypes, node.slug);
  const ancestors = getAncestors(businessTypes, node.slug);
  // Always [] today — see the identical note in app/products/[slug]/page.tsx.
  const related = getRelated("businessType", node.slug);

  return (
    <PageWorld world="businesses" className="substrate bg-page-bg py-20 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
        <Breadcrumbs
          items={[
            { name: "Businesses", href: "/businesses" },
            ...ancestors.map((ancestor) => ({
              name: ancestor.name,
              href: `/businesses/${ancestor.slug}`,
            })),
            { name: node.name },
          ]}
        />

        <div className="mt-8">
          <PageHead
            tone="page"
            eyebrow="Business type"
            headline={node.name}
            intro={node.description ? <p>{node.description}</p> : undefined}
            meta={children.length ? [["Related segments", String(children.length)]] : undefined}
          />
        </div>

        {children.length > 0 ? (
          <ul className="mt-14 grid grid-cols-1 gap-px border border-page-border bg-page-border sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
            {children.map((child) => (
              <TaxonomyCard
                key={child.slug}
                href={`/businesses/${child.slug}`}
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
