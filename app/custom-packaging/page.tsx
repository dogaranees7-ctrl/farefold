import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "@/components/spec/Sheet";
import { PageWorld } from "@/components/ui/PageWorld";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon, ArrowRightIcon } from "@/components/icons";
import {
  getWhatsappLink,
  getMailtoLink,
  quoteBrief,
  whatsappOpener,
} from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Custom Packaging",
  description:
    "How Farefold's custom packaging process works, from first brief to production supply — explore, configure, consult, quote, approve, produce, deliver.",
  alternates: { canonical: "/custom-packaging" },
};

type Stage = { no: string; label: string; body: string };

const stages: Stage[] = [
  {
    no: "01",
    label: "Explore",
    body: "Start from what you serve, how it travels and what's failing about your current packaging — browse Products, Materials or Solutions for the vocabulary, or come straight to us with the problem.",
  },
  {
    no: "02",
    label: "Configure",
    body: "Structure, material, size and finish get chosen against your food and your volume — not picked from a generic size chart.",
  },
  {
    no: "03",
    label: "Upload / design",
    body: "Bring existing artwork or a logo, or start from nothing — brand application gets fitted to the panels that actually face your customer.",
  },
  {
    no: "04",
    label: "Consultation",
    body: "A real conversation about the brief above, over WhatsApp or email, before anything is drawn.",
  },
  {
    no: "05",
    label: "Quote",
    body: "A price against your actual spec and volume — not a published list price, because custom work doesn't have one.",
  },
  {
    no: "06",
    label: "Approval",
    body: "You see and sign off the spec — the dieline, material and print — before production starts.",
  },
  {
    no: "07",
    label: "Payment / order",
    body: "Confirmed against the approved spec. This step isn't live on the site yet — it happens directly with us while that capability is built.",
  },
  {
    no: "08",
    label: "Production",
    body: "Your packaging gets made against the spec you approved, not a guess at it.",
  },
  {
    no: "09",
    label: "Delivery",
    body: "Flat-packed to your storeroom, on a schedule — and reorders run off the same approved spec.",
  },
];

export default function CustomPackagingPage() {
  return (
    <PageWorld world="custom" className="substrate bg-page-bg py-20 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
        <PageHead
          tone="page"
          eyebrow="Custom Packaging"
          headline={
            <>
              Packaging built
              <br />
              <span className="text-page-accent">around your product.</span>
            </>
          }
          intro={
            <p>
              Custom packaging isn&apos;t an instant checkout — it&apos;s a real process with a
              real person on the other end of it. Here&apos;s how it actually runs, stage by
              stage. Ordering and payment aren&apos;t live on the site yet; everything through
              approval already works today, over WhatsApp or email.
            </p>
          }
          meta={[["Stages", String(stages.length)]]}
        />

        <ol className="mt-14 grid grid-cols-1 gap-px border border-page-border bg-page-border sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {stages.map((stage) => (
            <li key={stage.no} className="flex flex-col gap-3 bg-page-bg p-6 sm:p-7">
              <span className="t-tech-sm text-page-accent">{stage.no}</span>
              <h2 className="t-display-tight text-lg text-page-ink">{stage.label}</h2>
              <p className="text-[0.9rem] leading-6 text-page-ink-soft">{stage.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 max-w-[64ch] border-t border-page-border pt-8 sm:mt-20">
          <p className="t-tech-sm text-page-ink-mute">Starting points</p>
          <p className="mt-3 text-[0.95rem] leading-6 text-page-ink-soft">
            Not sure where to start? Browse{" "}
            <Link href="/products/branding-custom" className="link-rule text-page-ink">
              printed &amp; branded formats
            </Link>{" "}
            for a sense of what&apos;s possible, or{" "}
            <Link href="/materials" className="link-rule text-page-ink">
              Materials
            </Link>{" "}
            for what the structure can be made from.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button
            href={getWhatsappLink(whatsappOpener)}
            variant="whatsapp"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
            icon={<WhatsAppIcon className="h-4 w-4" />}
          >
            WhatsApp about custom packaging
          </Button>
          <Button
            href={getMailtoLink("Custom packaging brief", quoteBrief)}
            variant="primary"
            size="lg"
            icon={<ArrowRightIcon className="h-4 w-4" />}
          >
            Email a brief
          </Button>
        </div>
      </div>
    </PageWorld>
  );
}
