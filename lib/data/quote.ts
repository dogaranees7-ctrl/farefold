// ---------------------------------------------------------------------------
// PART 8 — Quote / order model.
//
// Supports the flow: Browse Product → Add to Quote → Specify Quantity →
// Specify Customization → Submit Quote, plus the repeat-supply/reorder
// workflow. Submission channels cover the form, WhatsApp and email
// inquiry paths already used on the current site (see lib/site-config.ts
// for the existing WhatsApp/mailto helpers this model is meant to sit
// alongside, not replace).
//
// No payment or ecommerce checkout is modelled here — deliberately out of
// scope for this phase.
// ---------------------------------------------------------------------------

import type { Slug } from "./types";

export type InquiryChannel = "quote-form" | "whatsapp" | "email";
export type QuoteRequestStatus = "draft" | "submitted" | "in-review" | "quoted" | "closed";

export interface QuoteLineItem {
  productId: string;
  quantity: number;
  sizeNote?: string;
  materialSlug?: Slug;
  printNote?: string;
  customRequirements?: string;
  notes?: string;
}

export interface QuoteRequest {
  id: string;
  status: QuoteRequestStatus;
  channel: InquiryChannel;
  items: QuoteLineItem[];

  businessName?: string;
  businessTypeSlug?: Slug;
  contactName?: string;
  contactEmail?: string;
  contactPhone?: string;
  city?: string;
  notes?: string;
  createdAt?: string;
}

/**
 * A returning customer's standing order — lets a reorder be resubmitted
 * against an already-approved spec without re-briefing every item.
 */
export interface ReorderProfile {
  id: string;
  businessName: string;
  lastQuoteRequestId?: string;
  standingItems: QuoteLineItem[];
  reorderCycleDays?: number;
}
