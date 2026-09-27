import type { ReactNode } from "react";
import { pageWorlds, type PageWorldKey } from "@/lib/design/page-worlds";

type PageWorldProps = {
  world: PageWorldKey;
  className?: string;
  children: ReactNode;
};

/**
 * Puts a route inside one of the fourteen locked page-palette scopes: a
 * data-page-world attribute matching a [data-page-world="…"] block in
 * app/globals.css, which is what actually resolves --page-bg, --page-ink,
 * --page-accent and the rest for every semantic-token-consuming component
 * underneath it. Renders its own element rather than wrapping children in
 * an extra one, so it drops straight in for the div each route already
 * returns as its root.
 *
 * Also stamps data-tone from that world's registry entry — the registry is
 * the only place a world's light/dark tone is decided; this component just
 * carries that decision into the DOM. app/globals.css keys the global
 * --status-* tokens off data-tone, so a page world's own declared tone
 * picks the right status palette, not the visitor's OS preference.
 */
export function PageWorld({ world, className = "", children }: PageWorldProps) {
  return (
    <div data-page-world={world} data-tone={pageWorlds[world].tone} className={className}>
      {children}
    </div>
  );
}
