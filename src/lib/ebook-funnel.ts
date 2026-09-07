import { supabase } from "@/integrations/supabase/client";
import { enqueueEbookLead } from "@/lib/ebook-automation.server";

export type EbookLeadSource = "ebook-10-erros-hof" | "ebook-planejamento-completo-hof";

type EbookLeadInput = {
  name: string;
  email: string;
  whatsapp: string;
  source: EbookLeadSource;
};

type EbookReceipt = {
  leadId: string;
  source: EbookLeadSource;
  confirmedAt: string;
};

const PENDING_PREFIX = "lecler:ebook-lead:pending:";
const RECEIPT_PREFIX = "lecler:ebook-lead:receipt:";
const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const RECEIPT_TTL_MS = 24 * 60 * 60 * 1000;

function getSessionStorage() {
  return typeof window === "undefined" ? undefined : window.sessionStorage;
}

function getPendingKey(source: EbookLeadSource) {
  return `${PENDING_PREFIX}${source}`;
}

function getReceiptKey(source: EbookLeadSource) {
  return `${RECEIPT_PREFIX}${source}`;
}

function getOrCreateLeadId(source: EbookLeadSource) {
  const storage = getSessionStorage();
  const existing = storage?.getItem(getPendingKey(source));

  if (existing && UUID_PATTERN.test(existing)) return existing;

  const leadId = crypto.randomUUID();
  storage?.setItem(getPendingKey(source), leadId);
  return leadId;
}

function saveReceipt(receipt: EbookReceipt) {
  getSessionStorage()?.setItem(getReceiptKey(receipt.source), JSON.stringify(receipt));
}

export async function registerEbookLead(input: EbookLeadInput) {
  const leadId = getOrCreateLeadId(input.source);
  const occurredAt = new Date().toISOString();
  const { error } = await supabase.from("leads").insert({
    id: leadId,
    name: input.name,
    email: input.email,
    whatsapp: input.whatsapp,
    source: input.source,
  });

  // A retry with the same client-generated UUID means the first insert was already accepted.
  if (error && error.code !== "23505") throw error;

  await enqueueEbookLead({
    data: {
      eventId: leadId,
      occurredAt,
      source: input.source,
      contact: {
        name: input.name,
        email: input.email,
        whatsapp: input.whatsapp,
      },
    },
  });

  saveReceipt({
    leadId,
    source: input.source,
    confirmedAt: new Date().toISOString(),
  });

  return leadId;
}

export function hasConfirmedEbookLead(source: EbookLeadSource) {
  const rawReceipt = getSessionStorage()?.getItem(getReceiptKey(source));
  if (!rawReceipt) return false;

  try {
    const receipt = JSON.parse(rawReceipt) as Partial<EbookReceipt>;
    const confirmedAt = Date.parse(receipt.confirmedAt ?? "");

    return (
      receipt.source === source &&
      typeof receipt.leadId === "string" &&
      UUID_PATTERN.test(receipt.leadId) &&
      Number.isFinite(confirmedAt) &&
      Date.now() - confirmedAt <= RECEIPT_TTL_MS
    );
  } catch {
    return false;
  }
}
