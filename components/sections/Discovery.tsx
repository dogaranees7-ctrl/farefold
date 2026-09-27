import { Reveal } from "@/components/Reveal";
import { TaxonomyCard } from "@/components/taxonomy/TaxonomyCard";

export type DiscoveryEntry = {
  name: string;
  description: string;
  href: string;
};

type DiscoveryProps = {
  entries: DiscoveryEntry[];
};

/**
 * The compact replacement for the five large Pathway sections. Same
 * purpose — reach /foods, /businesses, /solutions, /materials, /lab — as
 * one tight index instead of five full-width sections, reusing the exact
 * card/grid language already proven on /products, /businesses and /foods
 * (see components/taxonomy/TaxonomyCard.tsx) rather than inventing a new
 * visual system. No new taxonomy data: each description is a real count or
 * label already computed from lib/data/ by the caller.
 */
export function Discovery({ entries }: DiscoveryProps) {
  return (
    <section className="border-t border-page-border bg-page-bg py-14 sm:py-20">
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex items-baseline justify-between gap-4">
            <p className="t-tech-sm text-page-ink-mute">&ldquo;Show me the platform.&rdquo;</p>
          </div>
          <div className="rule-cut mt-3 text-page-border-strong" />
        </Reveal>

        <Reveal delay={60}>
          <ul className="mt-8 grid grid-cols-1 gap-px border border-page-border bg-page-border sm:grid-cols-3 lg:grid-cols-5">
            {entries.map((entry) => (
              <TaxonomyCard
                key={entry.href}
                href={entry.href}
                name={entry.name}
                description={entry.description}
              />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
