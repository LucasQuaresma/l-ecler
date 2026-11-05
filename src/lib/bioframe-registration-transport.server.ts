import { z } from "zod";
import { BIOFRAME_SOURCE, BIOFRAME_TAGS, bioframeRequestSchema } from "./bioframe-registration";

const WEBHOOK_URL =
  "https://projeto01-n8n.gmxuno.easypanel.host/webhook/lecler-live-bioframe-lift-2026-11-30";
const acknowledgementSchema = z.object({
  ok: z.literal(true),
  eventId: z.string().uuid(),
  source: z.literal(BIOFRAME_SOURCE),
  sheet_saved: z.literal(true),
  dov_synced: z.literal(true),
  duplicate: z.boolean(),
});

export async function deliverBioframeRegistration(
  rawInput: unknown,
  options: { secret?: string; fetcher?: typeof fetch } = {},
) {
  const input = bioframeRequestSchema.parse(rawInput);
  if (!options.secret) throw new Error("Integração de inscrição indisponível.");
  const response = await (options.fetcher || fetch)(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Lecler-Ebook-Key": options.secret },
    body: JSON.stringify({
      eventId: input.requestId,
      occurredAt: new Date().toISOString(),
      source: BIOFRAME_SOURCE,
      contact: { name: input.name, email: input.email, whatsapp: input.whatsapp },
      consent: input.consent,
      consent_version: "bioframe-live-v1",
      attribution: input.attribution,
      tags: BIOFRAME_TAGS,
    }),
    signal: AbortSignal.timeout(25_000),
    redirect: "error",
  });
  if (!response.ok) throw new Error("Não foi possível confirmar sua inscrição. Tente novamente.");
  const acknowledgement = acknowledgementSchema.safeParse(await response.json());
  if (!acknowledgement.success || acknowledgement.data.eventId !== input.requestId) {
    throw new Error("A inscrição ainda não foi confirmada. Tente novamente.");
  }
  return { confirmed: true as const, duplicate: acknowledgement.data.duplicate };
}
