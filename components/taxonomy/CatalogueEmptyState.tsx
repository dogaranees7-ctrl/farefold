import { Button } from "@/components/ui/Button";
import { WhatsAppIcon, ArrowRightIcon } from "@/components/icons";
import {
  getWhatsappLink,
  getMailtoLink,
  getCategoryWhatsappOpener,
  quoteBrief,
} from "@/lib/site-config";

/**
 * The honest state for a taxonomy node with nothing further to browse to
 * today: there are zero real product records anywhere in the repository,
 * so this never invents one. It still leaves the visitor a real next
 * step — the same WhatsApp/email channels the rest of the site already
 * uses, pre-filled with this category's name so they don't have to
 * re-explain what page they were on.
 */
export function CatalogueEmptyState({ categoryName }: { categoryName: string }) {
  const opener = getCategoryWhatsappOpener(categoryName);

  return (
    <div className="border border-page-border bg-page-surface px-6 py-10 sm:px-10 sm:py-12">
      <p className="t-tech-sm text-page-accent">Catalogue status</p>
      <h3 className="t-display-tight mt-3 max-w-[26ch] text-2xl text-page-ink sm:text-3xl">
        This category&apos;s catalogue is being prepared.
      </h3>
      <p className="mt-4 max-w-[54ch] text-[0.95rem] leading-6 text-page-ink-soft">
        We&apos;re documenting real specifications, materials and photography for{" "}
        <strong className="text-page-ink">{categoryName}</strong> before publishing a single SKU
        — not before. Tell us what you serve and we&apos;ll spec it directly.
      </p>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Button
          href={getWhatsappLink(opener)}
          variant="whatsapp"
          size="lg"
          target="_blank"
          rel="noopener noreferrer"
          icon={<WhatsAppIcon className="h-4 w-4" />}
          aria-label={`WhatsApp Farefold about ${categoryName}`}
        >
          WhatsApp about this category
        </Button>
        <Button
          href={getMailtoLink(`Packaging brief — ${categoryName}`, quoteBrief)}
          variant="primary"
          size="lg"
          icon={<ArrowRightIcon className="h-4 w-4" />}
          aria-label={`Email Farefold about ${categoryName}`}
        >
          Email a brief
        </Button>
      </div>

      <p className="t-tech-sm mt-6 text-page-ink-mute">
        Looking for something not listed here, or fully custom? Same two buttons above — just say
        so.
      </p>
    </div>
  );
}
