import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { z } from "zod";
import { CalendarDays, CheckCircle2, Clock3, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { trackCourseMetaLead, trackMetaLead } from "@/lib/meta-pixel";
import { CoursePixelTracker } from "@/components/CoursePixelTracker";

const ROUTE = "/aula-enzimas-recombinantes";
const THANK_YOU_ROUTE = "/aula-enzimas-recombinantes/obrigado";
const SOURCE = "aula-enzimas-recombinantes-22-09";
const EVENT_NAME = "Aula gratuita de Enzimas Recombinantes — 22/09 às 20h";
const DOV_AREA = "cursos";
const DOV_TAGS = ["live yt"] as const;
const AUTOMATION_ENDPOINT =
  "https://projeto01-n8n.gmxuno.easypanel.host/webhook/lecler-live-enzimas-22-09-2026-7f4c9a";
const REGISTRATION_ENABLED = Boolean(AUTOMATION_ENDPOINT);

export const Route = createFileRoute("/aula-enzimas-recombinantes")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Aula gratuita de Enzimas Recombinantes | L'ECLER Academy" },
      {
        name: "description",
        content:
          "Inscreva-se na aula gratuita sobre enzimas recombinantes com a Dra. Cássia Blasques, em 22 de setembro, às 20h.",
      },
      {
        property: "og:title",
        content: "Aula gratuita de Enzimas Recombinantes | L'ECLER Academy",
      },
      {
        property: "og:description",
        content:
          "Conheça um novo caminho da estética facial. Aula gratuita em 22 de setembro, às 20h, com vagas limitadas.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `https://l-ecler.lovable.app${ROUTE}` }],
  }),
  component: EnzimasRecombinantesPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(254),
  phone: z
    .string()
    .trim()
    .refine((value) => {
      const digits = value.replace(/\D/g, "");
      return digits.length >= 10 && digits.length <= 15;
    }, "Telefone inválido"),
});

function maskPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function EnzimasRecombinantesPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!REGISTRATION_ENABLED) {
      toast.info("As inscrições serão liberadas em instantes.");
      return;
    }

    const parsed = schema.safeParse({ name, email, phone });

    if (!parsed.success) {
      const fieldErrors: typeof errors = {};
      for (const issue of parsed.error.issues) {
        fieldErrors[issue.path[0] as "name" | "email" | "phone"] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    const payload = {
      name: parsed.data.name,
      email: parsed.data.email,
      whatsapp: parsed.data.phone,
      source: SOURCE,
      event: EVENT_NAME,
      area: DOV_AREA,
      tags: DOV_TAGS,
      created_at: new Date().toISOString(),
    };

    try {
      const automationResponse = await fetch(AUTOMATION_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!automationResponse.ok) {
        throw new Error("A automação do cadastro recusou o envio.");
      }

      const { error: archiveError } = await supabase.from("leads").insert({
        name: payload.name,
        email: payload.email,
        whatsapp: payload.whatsapp,
        source: payload.source,
      });
      if (archiveError) {
        console.error("Falha ao arquivar o lead no Supabase:", archiveError);
      }

      const eventPayload = {
        content_name: EVENT_NAME,
        content_category: "L'ECLER Academy",
        source: payload.source,
      };
      trackMetaLead(eventPayload);
      trackCourseMetaLead(eventPayload);

      await navigate({ to: THANK_YOU_ROUTE });
    } catch (error) {
      console.error(error);
      toast.error("Não foi possível enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0e0a08] text-white">
      <CoursePixelTracker route={ROUTE} />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse at 15% 15%, rgba(201,168,76,0.14) 0%, transparent 55%), radial-gradient(ellipse at 85% 90%, rgba(120,60,30,0.2) 0%, transparent 55%)",
        }}
      />

      <main className="relative mx-auto grid max-w-6xl gap-10 px-6 py-10 lg:min-h-screen lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16 lg:py-16">
        <section>
          <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#c9a84c]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#c9a84c]/40 bg-[#c9a84c]/5 px-3 py-1">
              <Sparkles className="h-3.5 w-3.5" /> Aula gratuita e especial
            </span>
            <span className="hidden text-white/40 sm:inline">L'ECLER Academy</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl leading-[1.02] text-white sm:text-5xl lg:text-6xl"
          >
            Enzimas Recombinantes: a nova fronteira da{" "}
            <span className="bg-gradient-to-r from-[#f0d78c] via-[#c9a84c] to-[#8b6f2a] bg-clip-text text-transparent">
              estética facial
            </span>
          </motion.h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Para profissionais da harmonização facial que querem sair do lugar comum, conhecer uma
            nova tecnologia e se posicionar à frente do mercado.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-2xl border border-[#c9a84c]/30 bg-[#c9a84c]/5 px-4 py-4">
              <CalendarDays className="h-5 w-5 shrink-0 text-[#c9a84c]" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/45">Data</p>
                <p className="mt-0.5 font-display text-xl">22 de setembro</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-[#c9a84c]/30 bg-[#c9a84c]/5 px-4 py-4">
              <Clock3 className="h-5 w-5 shrink-0 text-[#c9a84c]" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/45">Horário</p>
                <p className="mt-0.5 font-display text-xl">20 horas</p>
              </div>
            </div>
          </div>

          <ul className="mt-7 space-y-3 text-sm text-white/80 sm:text-base">
            {[
              "Entenda por que as enzimas recombinantes apontam um novo caminho na estética facial",
              "Amplie seu repertório além dos procedimentos que o mercado já oferece",
              "Conheça uma tecnologia com potencial para diferenciar sua atuação profissional",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#c9a84c]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:sticky lg:top-8 lg:self-center"
        >
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] backdrop-blur">
            <div className="border-b border-white/10 bg-[#c9a84c]/10 px-6 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c9a84c]">
                Vagas limitadas
              </p>
              <h2 className="mt-1 font-display text-2xl text-white">Inscreva-se gratuitamente</h2>
              <p className="mt-1.5 text-sm text-white/60">
                Preencha seus dados para receber as informações da aula de 22 de setembro, às 20h.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 px-6 py-6">
              {!REGISTRATION_ENABLED && (
                <div className="rounded-2xl border border-[#c9a84c]/35 bg-[#c9a84c]/10 px-4 py-3 text-sm text-[#f0d78c]">
                  Inscrições em ativação. Volte em instantes para garantir sua vaga.
                </div>
              )}
              <div>
                <Label htmlFor="name" className="text-white/80">
                  Nome completo
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                    if (errors.name) setErrors((current) => ({ ...current, name: undefined }));
                  }}
                  placeholder="Seu nome"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="mt-1.5 border-white/15 bg-white/5 text-white placeholder:text-white/30 focus-visible:ring-[#c9a84c]"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-xs text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="text-white/80">
                  E-mail
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (errors.email) setErrors((current) => ({ ...current, email: undefined }));
                  }}
                  placeholder="voce@exemplo.com"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="mt-1.5 border-white/15 bg-white/5 text-white placeholder:text-white/30 focus-visible:ring-[#c9a84c]"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="phone" className="text-white/80">
                  Telefone / WhatsApp
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  inputMode="tel"
                  value={phone}
                  onChange={(event) => {
                    setPhone(maskPhone(event.target.value));
                    if (errors.phone) setErrors((current) => ({ ...current, phone: undefined }));
                  }}
                  placeholder="(00) 00000-0000"
                  autoComplete="tel"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  className="mt-1.5 border-white/15 bg-white/5 text-white placeholder:text-white/30 focus-visible:ring-[#c9a84c]"
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1 text-xs text-red-400">
                    {errors.phone}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={loading || !REGISTRATION_ENABLED}
                className="h-12 w-full rounded-full bg-gradient-to-r from-[#f0d78c] via-[#c9a84c] to-[#8b6f2a] text-base font-semibold text-[#0e0a08] shadow-[0_10px_30px_-10px_rgba(201,168,76,0.6)] hover:opacity-95"
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : !REGISTRATION_ENABLED ? (
                  "Inscrições em ativação"
                ) : (
                  "Quero participar da aula"
                )}
              </Button>

              <p className="text-center text-[11px] text-white/40">
                Ao enviar, você concorda com nossa{" "}
                <a href="/privacidade" className="underline hover:text-white/70">
                  Política de Privacidade
                </a>
                .
              </p>
            </form>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
