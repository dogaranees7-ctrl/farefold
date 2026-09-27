import Link from "next/link";

type TaxonomyCardProps = {
  href: string;
  name: string;
  description?: string;
};

/**
 * One repeatable tile in a taxonomy listing grid. Deliberately not paired
 * with a generic "Grid" wrapper component — each page composes its own
 * grid classes around a list of these, the way Library.tsx and
 * Materials.tsx already compose their own specimen/swatch walls, rather
 * than adding an abstraction the rest of the codebase doesn't use.
 */
export function TaxonomyCard({ href, name, description }: TaxonomyCardProps) {
  return (
    <li className="bg-page-bg">
      <Link
        href={href}
        className="group flex h-full min-h-[9rem] flex-col gap-3 p-5 transition-colors duration-300 hover:bg-page-accent sm:p-6"
      >
        <span className="t-display-tight text-lg text-page-ink transition-colors duration-300 group-hover:text-page-accent-ink sm:text-xl">
          {name}
        </span>
        {description && (
          <span className="max-w-[32ch] text-[0.85rem] leading-5 text-page-ink-soft transition-colors duration-300 group-hover:text-page-accent-ink/70">
            {description}
          </span>
        )}
        <span
          aria-hidden="true"
          className="t-tech-sm mt-auto text-page-ink-mute transition-colors duration-300 group-hover:text-page-accent-ink"
        >
          View →
        </span>
      </Link>
    </li>
  );
}
