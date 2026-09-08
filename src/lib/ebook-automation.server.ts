import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const sourceSchema = z.enum(["ebook-10-erros-hof", "ebook-planejamento-completo-hof"]);

const inputSchema = z.object({
  eventId: z.string().uuid(),
  occurredAt: z.string().datetime(),
  source: sourceSchema,
  contact: z.object({
    name: z.string().trim().min(2).max(100),
    email: z.string().trim().email().max(254),
    whatsapp: z.string().trim().min(8).max(30),
  }),
});

const ebookBySource = {
  "ebook-10-erros-hof": {
    slug: "10-erros-hof",
    title: "Os 10 erros que impedem profissionais de alcançar resultados naturais na HOF",
    webhookUrl:
      "https://projeto01-n8n.gmxuno.easypanel.host/webhook/lecler-ebook-10-erros-hof-2f08917fa3a2",
  },
  "ebook-planejamento-completo-hof": {
    slug: "planejamento-completo-hof",
    title: "Como transformar a avaliação em um planejamento completo na HOF",
    webhookUrl:
      "https://projeto01-n8n.gmxuno.easypanel.host/webhook/lecler-ebook-planejamento-completo-hof-2d24586ba1f3",
  },
} as const;

const ackSchema = z
  .object({
    received: z.literal(true),
    queued: z.boolean(),
    dov_accepted: z.literal(true),
    dov_synced: z.literal(false),
    persistence_status: z.enum(["pending_confirmation", "previously_accepted"]),
    duplicate: z.boolean(),
    eventId: z.string().uuid(),
    source: sourceSchema,
  })
  .passthrough()
  .superRefine((ack, context) => {
    const firstAcceptance =
      ack.queued && !ack.duplicate && ack.persistence_status === "pending_confirmation";
    const acceptedRetry =
      !ack.queued && ack.duplicate && ack.persistence_status === "previously_accepted";

    if (!firstAcceptance && !acceptedRetry) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: "ACK de automação inconsistente.",
      });
    }
  });

export const enqueueEbookLead = createServerFn({ method: "POST" }).handler(async ({ data }) => {
  const input = inputSchema.parse(data);
  const ebook = ebookBySource[input.source];
  const webhookSecret = process.env.EBOOK_WEBHOOK_SECRET;

  if (!webhookSecret) {
    throw new Error("Integração de cadastro indisponível.");
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);

  try {
    const response = await fetch(ebook.webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Lecler-Ebook-Key": webhookSecret,
      },
      body: JSON.stringify({
        eventId: input.eventId,
        eventType: "ebook.lead.created",
        occurredAt: input.occurredAt,
        source: input.source,
        ebook: {
          slug: ebook.slug,
          title: ebook.title,
        },
        contact: input.contact,
        tags: ["ebook"],
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error("A automação recusou o cadastro.");
    }

    const parsedAck = ackSchema.safeParse(await response.json());
    if (
      !parsedAck.success ||
      parsedAck.data.eventId !== input.eventId ||
      parsedAck.data.source !== input.source
    ) {
      throw new Error("A automação não confirmou o cadastro.");
    }

    return {
      queued: true as const,
      eventId: parsedAck.data.eventId,
      source: parsedAck.data.source,
    };
  } catch (error) {
    console.error("Falha ao enfileirar lead de e-book", {
      source: input.source,
      eventId: input.eventId,
      cause: error instanceof Error ? error.message : "erro desconhecido",
    });
    throw new Error("Não foi possível confirmar a automação do cadastro.");
  } finally {
    clearTimeout(timeout);
  }
});
