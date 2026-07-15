import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { z } from "zod";
import { Loader2, Sparkles, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { N8N_WEBHOOK_URL } from "@/lib/signup-dialog";
import heroImg from "@/assets/cursofios-cassia-nobg.png.asset.json";

export const Route = createFileRoute("/cursofios")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Curso Fios Faciais — 15 e 16 de Agosto | L'ECLER Academy" },
      {
        name: "description",
        content:
          "Últimas 2 vagas com 40% OFF. Curso presencial de Fios Faciais (PDO, PLLA e PLACL, incluindo Fios Aptos) com a Dra. Cássia Blasques.",
      },
      { property: "og:title", content: "Curso Fios Faciais — 15 e 16 de Agosto" },
      {
        property: "og:description",
        content:
          "Últimas 2 vagas com 40% OFF. Técnica segura, prática e com resultado clínico real.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://l-ecler.lovable.app/cursofios" }],
  }),
  component: CursoFiosPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(254),
  phone: z.string().trim().refine((v) => {
    const d = v.replace(/\D/g, "");
    return d.length >= 10 && d.length <= 15;
  }, "Telefone inválido"),
});

function maskPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

function CursoFiosPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse({ name, email, phone });
    if (!parsed.success) {
      const f: typeof errors = {};
      for (const issue of parsed.error.issues) {
        f[issue.path[0] as "name" | "email" | "phone"] = issue.message;
      }
      setErrors(f);
      return;
    }
    setErrors({});
    setLoading(true);

    const payload = {
      name: parsed.data.name,
      email: parsed.data.email,
      whatsapp: parsed.data.phone,
      source: "cursofios",
      created_at: new Date().toISOString(),
    };

    try {
      const { error } = await supabase.from("leads").insert({
        name: payload.name,
        email: payload.email,
        whatsapp: payload.whatsapp,
        source: payload.source,
      });
      if (error) throw error;

      fetch("https://projeto01-n8n.gmxuno.easypanel.host/webhook/fioagosto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => {});


      navigate({ to: "/obrigado" });
    } catch (err) {
      console.error(err);
      toast.error("Não foi possível enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0e0a08] text-white">
      {/* Ambient background */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 15% 20%, rgba(201,168,76,0.12) 0%, transparent 55%), radial-gradient(ellipse at 85% 90%, rgba(120,60,30,0.18) 0%, transparent 55%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-16">
        {/* Left – hero visual + copy */}
        <div className="relative">
          <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#c9a84c]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#c9a84c]/40 bg-[#c9a84c]/5 px-3 py-1">
              <Sparkles className="h-3.5 w-3.5" /> Curso Presencial
            </span>
            <span className="hidden sm:inline text-white/40">L'ECLER Academy</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl"
          >
            FIOS
            <br />
            <span className="bg-gradient-to-r from-[#f0d78c] via-[#c9a84c] to-[#8b6f2a] bg-clip-text text-transparent">
              FACIAIS
            </span>
          </motion.h1>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/70">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
              <Calendar className="h-4 w-4 text-[#c9a84c]" /> 15 e 16 de Agosto
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
              <MapPin className="h-4 w-4 text-[#c9a84c]" /> São Paulo — Presencial
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mt-8 overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]"
          >
            <img
              src={heroImg.url}
              alt="Curso Fios Faciais com Dra. Cássia Blasques - 15 e 16 de Agosto"
              className="w-full object-cover"
              loading="eager"
            />
          </motion.div>

          <div className="mt-6 rounded-2xl border border-[#c9a84c]/30 bg-[#c9a84c]/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#c9a84c]">
              Últimas 2 vagas
            </p>
            <p className="mt-1 font-display text-2xl">
              40% OFF <span className="text-sm font-sans font-normal text-white/60">— incluindo Fios Aptos</span>
            </p>
            <p className="mt-2 text-sm text-white/70">
              As melhores técnicas com fios de PDO, PLLA e PLACL, aplicadas de forma segura,
              prática e com resultado clínico real.
            </p>
          </div>

          <ul className="mt-6 space-y-2 text-sm text-white/80">
            {[
              "Prática hands-on com pacientes reais",
              "Certificado L'ECLER Academy",
              "Turma reduzida para atendimento individualizado",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#c9a84c]" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Right – form card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:sticky lg:top-8 lg:self-start"
        >
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur">
            <div className="border-b border-white/10 bg-[#c9a84c]/10 px-6 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c9a84c]">
                Garanta sua vaga
              </p>
              <h2 className="mt-1 font-display text-2xl text-white">
                Cadastre-se para receber os detalhes
              </h2>
              <p className="mt-1.5 text-sm text-white/60">
                Nossa equipe entrará em contato para confirmar sua matrícula com a condição especial.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 px-6 py-6">
              <div>
                <Label htmlFor="name" className="text-white/80">Nome completo</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome"
                  autoComplete="name"
                  className="mt-1.5 border-white/15 bg-white/5 text-white placeholder:text-white/30 focus-visible:ring-[#c9a84c]"
                />
                {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
              </div>

              <div>
                <Label htmlFor="email" className="text-white/80">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="voce@exemplo.com"
                  autoComplete="email"
                  className="mt-1.5 border-white/15 bg-white/5 text-white placeholder:text-white/30 focus-visible:ring-[#c9a84c]"
                />
                {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
              </div>

              <div>
                <Label htmlFor="phone" className="text-white/80">Telefone / WhatsApp</Label>
                <Input
                  id="phone"
                  inputMode="tel"
                  value={phone}
                  onChange={(e) => setPhone(maskPhone(e.target.value))}
                  placeholder="(00) 00000-0000"
                  autoComplete="tel"
                  className="mt-1.5 border-white/15 bg-white/5 text-white placeholder:text-white/30 focus-visible:ring-[#c9a84c]"
                />
                {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="h-12 w-full rounded-full bg-gradient-to-r from-[#f0d78c] via-[#c9a84c] to-[#8b6f2a] text-base font-semibold text-[#0e0a08] shadow-[0_10px_30px_-10px_rgba(201,168,76,0.6)] hover:opacity-95"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Quero garantir minha vaga"}
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
        </motion.div>
      </div>
    </div>
  );
}
