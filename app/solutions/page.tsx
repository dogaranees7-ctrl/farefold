import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "@/components/spec/Sheet";
import { TaxonomyCard } from "@/components/taxonomy/TaxonomyCard";
import { PageWorld } from "@/components/ui/PageWorld";
import { packagingProblems, packagingSolutions, getTopLevel } from "@/lib/data";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Packaging problems Farefold specifies against — thermal & moisture, containment, structural & logistics, commercial & presentation, and supply & sustainability — organised by category.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsIndexPage() {
  const groups = getTopLevel(packagingProblems);

  return (
    <PageWorld world="solutions" className="substrate bg-page-bg py-20 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
        <PageHead
          tone="page"
          eyebrow="Solutions"
          headline={
            <>
              What are you
              <br />
              <span className="text-page-accent">trying to solve?</span>
            </>
          }
          intro={
            <p>
              Packaging engineering starts from the problem, not the product. Open a category to
              see the specific problems Farefold classifies under it — this is the engineering
              vocabulary we specify against, not a claim that any particular pack solves any
              particular problem for you yet.
            </p>
          }
          meta={[["Categories", String(groups.length)]]}
        />

        <ul className="mt-14 grid grid-cols-1 gap-px border border-page-border bg-page-border sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <TaxonomyCard
              key={group.slug}
              href={`/solutions/${group.slug}`}
              name={group.name}
              description={group.description}
            />
          ))}
        </ul>

        {/* Generic engineering approaches — packagingSolutions is a flat
            list (no hierarchy, no detail routes), so it's shown here as
            reference vocabulary rather than as its own taxonomy section.
            Not tied to any specific problem above yet — relations.ts is
            intentionally unpopulated; see CatalogueEmptyState for the same
            honesty pattern used elsewhere. */}
        <div className="mt-16 border-t border-page-border pt-10 sm:mt-24 sm:pt-14">
          <p className="t-tech-sm text-page-ink-mute">Generic engineering approaches</p>
          <p className="mt-3 max-w-[58ch] text-[0.95rem] leading-6 text-page-ink-soft">
            Structural and material approaches that address problems like the ones above — named
            here as vocabulary, not yet linked to specific problems or products.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {packagingSolutions.map((solution) => (
              <li
                key={solution.slug}
                className="t-tech-sm border border-page-border px-2.5 py-1.5 text-page-ink-soft"
              >
                {solution.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 border-t border-page-border pt-8 sm:mt-20">
          <p className="max-w-[54ch] text-[0.9rem] leading-6 text-page-ink-mute">
            Looking for the packaging itself rather than the problem it solves? Browse{" "}
            <Link href="/products" className="link-rule text-page-ink">
              Products
            </Link>{" "}
            or{" "}
            <Link href="/materials" className="link-rule text-page-ink">
              Materials
            </Link>
            .
          </p>
        </div>
      </div>
    </PageWorld>
  );
}
