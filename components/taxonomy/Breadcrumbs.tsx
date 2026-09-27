import Link from "next/link";

export type Crumb = {
  name: string;
  href?: string;
};

/**
 * An accessible breadcrumb trail, independent of URL depth — it renders
 * whatever chain the caller hands it, whether that's a top-level node (one
 * root crumb + the current page) or several levels deep. The last item is
 * always treated as the current page: it renders as plain text with
 * aria-current="page" even if it carries an href, rather than linking to
 * itself.
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="t-tech-sm flex flex-wrap items-center gap-x-2 gap-y-1 text-page-ink-mute">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${item.name}-${i}`} className="flex items-center gap-2">
              {i > 0 && (
                <span aria-hidden="true" className="opacity-40">
                  /
                </span>
              )}
              {item.href && !isLast ? (
                <Link href={item.href} className="link-rule transition-colors hover:text-page-ink">
                  {item.name}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={isLast ? "text-page-ink" : ""}
                >
                  {item.name}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
