import { Button } from "@/components/ui/Button";
import { WhatsAppIcon, ArrowRightIcon } from "@/components/icons";
import { getWhatsappLink, whatsappOpener } from "@/lib/site-config";

/**
 * A short, decisive closer between the compact Discovery index and the
 * fuller Contact/work-order section below — the last commercial decision
 * point before the visitor reaches contact details, not another full-height
 * section. Deliberately three buttons and one line, nothing else.
 */
export function FinalCta() {
  return (
    <section className="border-t border-page-border bg-page-accent py-12 text-page-accent-ink sm:py-16">
      <div className="mx-auto flex w-full max-w-[112rem] flex-col items-start gap-6 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <p className="t-display-tight text-[clamp(1.4rem,3.2vw,2rem)]">
          Standard or custom — pick a path.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/products" variant="light" size="md" icon={<ArrowRightIcon className="h-4 w-4" />}>
            Shop Packaging
          </Button>
          <Button
            href="/custom-packaging"
            variant="outlineLight"
            size="md"
            icon={<ArrowRightIcon className="h-4 w-4" />}
          >
            Custom Packaging
          </Button>
          <Button
            href={getWhatsappLink(whatsappOpener)}
            variant="whatsapp"
            size="md"
            target="_blank"
            rel="noopener noreferrer"
            icon={<WhatsAppIcon className="h-4 w-4" />}
          >
            WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
