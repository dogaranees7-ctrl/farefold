import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/taxonomy/Breadcrumbs";
import { TaxonomyCard } from "@/components/taxonomy/TaxonomyCard";
import { CatalogueEmptyState } from "@/components/taxonomy/CatalogueEmptyState";
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

  const ancestors = getAncestors(businessTypes, node.slug);
  const hierarchy = ancestors.map((ancestor) => ancestor.name).join(" / ");
  const fallbackDescription = hierarchy
    ? `${node.name} — food-business segment within ${hierarchy}. Explore this business segment and its subcategories in Farefold's business taxonomy.`
    : `${node.name} — food-business segment. Explore this business segment and its subcategories in Farefold's business taxonomy.`;

  return {
    title: node.name,
    description: node.description ?? fallbackDescription,
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
    <div className="bg-[#eee7dc] text-[#171614]">
      <div className="mx-auto w-full max-w-[120rem] px-5 py-16 sm:px-8 sm:py-24 lg:px-14">
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
          <ul className="mt-14 grid grid-cols-1 gap-px border border-black/15 bg-black/15 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
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

        <div className="mt-14 border-t border-black/15 pt-8 sm:mt-20">
          <p className="max-w-[54ch] text-[0.9rem] leading-6 text-[#171614]-mute">
            Explore other parts of the packaging taxonomy: <Link href="/products" className="link-rule text-[#171614]">Products</Link> or <Link href="/foods" className="link-rule text-[#171614]">Foods</Link>.
          </p>
        </div>

        {related.length > 0 && (
          <div className="mt-14 border-t border-black/15 pt-10 sm:mt-20">
            <p className="t-tech-sm text-[#171614]-mute">Related</p>
          </div>
        )}
      </div>
    </div>
  );
}
