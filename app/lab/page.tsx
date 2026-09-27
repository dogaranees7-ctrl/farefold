import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "@/components/spec/Sheet";
import { PageWorld } from "@/components/ui/PageWorld";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/icons";
import { materials, packagingProblems, safetyTopics, getTopLevel } from "@/lib/data";

export const metadata: Metadata = {
  title: "Packaging Lab",
  description:
    "The Farefold reference environment for understanding packaging — materials, problems and safety topics, organised for reading and comparison rather than as a chronological blog.",
  alternates: { canonical: "/lab" },
};

const topicGroups = [
  {
    label: "Materials",
    href: "/materials",
    items: getTopLevel(materials).map((m) => m.name),
  },
  {
    label: "Packaging problems",
    href: "/solutions",
    items: getTopLevel(packagingProblems).map((p) => p.name),
  },
  {
    label: "Safety & regulatory topics",
    href: undefined,
    items: getTopLevel(safetyTopics).map((s) => s.name),
  },
];

export default function LabPage() {
  return (
    <PageWorld world="lab" className="substrate bg-page-bg py-20 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
        <PageHead
          tone="page"
          eyebrow="Packaging Lab"
          headline={
            <>
              Understand
              <br />
              <span className="text-page-accent">the packaging.</span>
            </>
          }
          intro={
            <p>
              The Lab is a reference environment, not a blog — material behaviour, packaging
              problems and the regulatory vocabulary around food-contact packaging, organised for
              reading and comparison. It&apos;s early: the topic map below is real, the write-ups
              for each topic are still being built, and nothing here is a substitute for a
              physical sample or a conversation about your specific product.
            </p>
          }
        />

        <div className="mt-14 grid gap-px border border-page-border bg-page-border sm:mt-20 sm:grid-cols-3">
          {topicGroups.map((group) => (
            <div key={group.label} className="flex flex-col gap-4 bg-page-bg p-6 sm:p-7">
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="t-display-tight text-lg text-page-ink">{group.label}</h2>
                {group.href && (
                  <Link
                    href={group.href}
                    className="link-rule t-tech-sm shrink-0 text-page-ink-mute transition-colors hover:text-page-ink"
                  >
                    Browse
                  </Link>
                )}
              </div>
              <ul className="flex flex-col gap-1.5">
                {group.items.map((item) => (
                  <li key={item} className="text-[0.9rem] leading-6 text-page-ink-soft">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 max-w-[64ch] border-t border-page-border pt-8 sm:mt-20">
          <p className="t-tech-sm text-page-ink-mute">What&apos;s not here yet</p>
          <p className="mt-3 text-[0.95rem] leading-6 text-page-ink-soft">
            Individual explainers, comparisons and guides for each topic above — none exist yet,
            and this page won&apos;t claim otherwise with placeholder posts. If there&apos;s a
            specific material or problem you need documentation on now, ask directly and
            we&apos;ll answer from what we actually know.
          </p>
          <div className="mt-7">
            <Button href="/#contact" variant="outline" size="md" icon={<ArrowRightIcon className="h-4 w-4" />}>
              Ask a question
            </Button>
          </div>
        </div>
      </div>
    </PageWorld>
  );
}
