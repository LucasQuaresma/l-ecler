import { z } from "zod";

export const BIOFRAME_SOURCE = "live-bioframe-lift-2026-11-30" as const;
export const BIOFRAME_TAGS = ["live", "Bioframe Lift", "Vida Bela"] as const;

export function normalizeBioframePhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length === 10 || digits.length === 11 ? `55${digits}` : digits;
}

export const bioframeRegistrationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe seu nome completo.")
    .max(100, "Use até 100 caracteres.")
    .refine((value) => /\p{L}/u.test(value), "Informe seu nome completo.")
    .transform((value) => value.replace(/\s+/g, " ")),
  email: z
    .string()
    .trim()
    .email("Informe um e-mail válido.")
    .max(254)
    .transform((value) => value.toLowerCase()),
  whatsapp: z
    .string()
    .trim()
    .max(30)
    .transform(normalizeBioframePhone)
    .refine(
      (value) => /^55[1-9]{2}(?:9\d{8}|[2-5]\d{7})$/.test(value),
      "Informe um WhatsApp brasileiro com DDD.",
    ),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Autorize o uso dos dados para sua inscrição." }),
  }),
  website: z.string().max(0, "Não foi possível validar o cadastro."),
});

const attributionKeys = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "utm_id",
  "gclid",
  "fbclid",
] as const;
const optionalAttribution = z.string().max(500).optional();
export const bioframeAttributionSchema = z.object({
  utm_source: optionalAttribution,
  utm_medium: optionalAttribution,
  utm_campaign: optionalAttribution,
  utm_content: optionalAttribution,
  utm_term: optionalAttribution,
  utm_id: optionalAttribution,
  gclid: optionalAttribution,
  fbclid: optionalAttribution,
  landing_page: z.string().max(2048).optional(),
  referrer: z.string().max(2048).optional(),
});
export type BioframeAttribution = z.infer<typeof bioframeAttributionSchema>;

export const bioframeRequestSchema = bioframeRegistrationSchema.extend({
  requestId: z.string().uuid(),
  attribution: bioframeAttributionSchema,
});

// Store campaign context only. Contact information is never written to browser storage.
export function collectBioframeAttribution(): BioframeAttribution {
  if (typeof window === "undefined") return {};
  const key = `${BIOFRAME_SOURCE}:attribution`;
  let previous: BioframeAttribution = {};
  try {
    const stored = JSON.parse(window.sessionStorage.getItem(key) || "{}");
    previous = bioframeAttributionSchema.parse(stored);
  } catch {
    /* Storage can be unavailable in private browsing. */
  }
  const url = new URL(window.location.href);
  const campaign: BioframeAttribution = {};
  const safeQuery = new URLSearchParams();
  for (const name of attributionKeys) {
    const value = url.searchParams.get(name)?.slice(0, 500);
    if (value) {
      campaign[name] = value;
      safeQuery.set(name, value);
    }
  }
  let referrer = "";
  try {
    const referringUrl = new URL(document.referrer);
    referrer = `${referringUrl.origin}${referringUrl.pathname}`.slice(0, 2048);
  } catch {
    /* A direct visit has no referrer. */
  }
  const currentLanding =
    `${url.origin}${url.pathname}${safeQuery.size ? `?${safeQuery}` : ""}`.slice(0, 2048);
  const hasCampaign = Object.keys(campaign).length > 0;
  const result: BioframeAttribution = {
    ...(hasCampaign ? {} : previous),
    ...campaign,
    landing_page: hasCampaign ? currentLanding : previous.landing_page || currentLanding,
    referrer: hasCampaign ? referrer : previous.referrer || referrer,
  };
  try {
    window.sessionStorage.setItem(key, JSON.stringify(result));
  } catch {
    /* Best effort attribution only. */
  }
  return result;
}
