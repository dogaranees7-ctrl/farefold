import type { ComponentType, SVGProps } from "react";
import {
  StatusSuccessIcon,
  StatusErrorIcon,
  StatusWarningIcon,
  StatusInfoIcon,
  StatusNeutralIcon,
} from "@/components/icons";

/**
 * The four global semantic categories, plus "neutral" for lifecycle states
 * that aren't success/error/warning/info — out-of-stock chief among them.
 * Neutral deliberately doesn't read from --status-* at all: it uses the
 * current page world's own ink/border, since it communicates absence
 * rather than a judgement about good or bad.
 */
export type StatusKind = "success" | "error" | "warning" | "info" | "neutral";

type StatusProps = {
  kind: StatusKind;
  /** The visible word. Status never communicates by colour or glyph alone,
   *  so this is required — pass whatever the lifecycle actually calls it
   *  ("Confirmed", "Out of stock", "Documented") rather than the kind name
   *  itself. */
  label: string;
  className?: string;
};

const glyphs: Record<StatusKind, ComponentType<SVGProps<SVGSVGElement>>> = {
  success: StatusSuccessIcon,
  error: StatusErrorIcon,
  warning: StatusWarningIcon,
  info: StatusInfoIcon,
  neutral: StatusNeutralIcon,
};

const toneClasses: Record<StatusKind, string> = {
  success: "border-status-success-ink text-status-success-ink bg-status-success-surface",
  error: "border-status-error-ink text-status-error-ink bg-status-error-surface",
  warning: "border-status-warning-ink text-status-warning-ink bg-status-warning-surface",
  info: "border-status-info-ink text-status-info-ink bg-status-info-surface",
  neutral: "border-page-border-strong text-page-ink-mute bg-page-surface",
};

/**
 * A status is a rectangular, bordered tag — no pill shape, consistent with
 * the rest of the system's no-pill button and card language — carrying a
 * glyph whose silhouette alone distinguishes the category, plus the word
 * itself. Colour is the last of the three signals, never the only one.
 */
export function Status({ kind, label, className = "" }: StatusProps) {
  const Glyph = glyphs[kind];

  return (
    <span
      className={`t-tech-sm inline-flex items-center gap-1.5 border px-2 py-1 ${toneClasses[kind]} ${className}`}
    >
      <Glyph aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
      <span>{label}</span>
    </span>
  );
}
