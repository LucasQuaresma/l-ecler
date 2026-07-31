import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { z } from "zod";
import {
  Loader2,
  Sparkles,
  Gift,
  CheckCircle2,
  ArrowRight,
  Heart,
  Calendar,
  MessageCircle,
  Crown,
  Gem,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import heroImg from "@/assets/gift-voucher-hero.jpg";

export const Route = createFileRoute("/gift-voucher")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Gift Voucher L'ECLER — Presenteie com Saúde e Bem-Estar" },
      {
        name: "description",
        content:
          "Presenteie quem você ama com experiências L'ECLER: odontologia estética, harmonização e bem-estar em Bragança Paulista. Cadastre-se e receba as opções de voucher.",
      },
      { property: "og:title", content: "Gift Voucher L'ECLER — Presenteie com Saúde e Bem-Estar" },
      {
        property: "og:description",
        content:
          "Voucher exclusivo para tratamentos de odontologia estética, harmonização e bem-estar na Clínica L'ECLER.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://l-ecler.lovable.app/gift-voucher" }],
  }),
  component: GiftVoucherPage,
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

const floats = [
  { icon: Sparkles, top: "12%", left: "8%", delay: 0, size: 24 },
  { icon: Heart, top: "25%", right: "10%", delay: 0.6, size: 26 },
  { icon: Crown, top: "55%", left: "5%", delay: 1.2, size: 28 },
  { icon: Gem, top: "70%", right: "8%", delay: 0.9, size: 22 },
  { icon: Star, top: "38%", right: "18%", delay: 1.5, size: 24 },
];

const benefits = [
  "Presente exclusivo e memorável",
  "Válido para odontologia estética, harmonização e bem-estar",
  "Experiência personalizada na Clínica L'ECLER",
  "Acompanhamento do time selecionado pela Dra. Cássia",
  "Ambiente premium e acolhedor em Bragança Paulista",
];

const steps = [
  {
    title: "Cadastre-se",
    desc: "Preencha seu nome, e-mail e WhatsApp para receber as opções de voucher.",
    icon: MessageCircle,
  },
  {
    title: "Escolha a experiência",
    desc: "Nossa equipe entra em contato para apresentar os vouchers disponíveis.",
    icon: Gift,
  },
  {
    title: "Presenteie",
    desc: "Receba o voucher personalizado e presenteie quem você ama com cuidado L'ECLER.",
    icon: Heart,
  },
];

const faq = [
  {
    q: "O que é o Gift Voucher L'ECLER?",
    a: "É um presente em forma de voucher para experiências de saúde, estética e bem-estar na Clínica L'ECLER, em Bragança Paulista.",
  },
  {
    q: "Para quais tratamentos o voucher pode ser usado?",
    a: "O voucher pode ser utilizado para tratamentos de odontologia estética, harmonização, rejuvenescimento e bem-estar oferecidos pela clínica.",
  },
  {
    q: "Como recebo o voucher após o cadastro?",
    a: "Após o cadastro, nossa equipe entra em contato pelo WhatsApp para entender sua necessidade e enviar as opções de voucher personalizadas.",
  },
  {
    q: "O voucher tem validade?",
    a: "Sim. A validade e as condições de uso são informadas no momento da escolha do voucher.",
  },
];

function GiftVoucherPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
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
      source: "gift-voucher",
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

      fetch("https://projeto01-n8n.gmxuno.easypanel.host/webhook/giftvoucher", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => {});

      navigate({ to: "/obrigadogift" });
    } catch (err) {
      console.error(err);
      toast.error("Não foi possível enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0e0a08] text-white">
      {/* Ambient background */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 15% 20%, rgba(201,168,76,0.12) 0%, transparent 55%), radial-gradient(ellipse at 85% 90%, rgba(120,60,30,0.18) 0%, transparent 55%)",
        }}
      />

      {/* HERO */}
      <section className="relative flex min-h-screen items-center">
        {floats.map((f, i) => (
          <motion.div
            key={i}
            className="pointer-events-none absolute z-10 hidden text-[#c9a84c]/50 md:block"
            style={{ top: f.top, left: f.left, right: f.right }}
            animate={{ y: [-8, 8, -8], rotate: [-4, 4, -4] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: f.delay }}
          >
            <f.icon size={f.size} strokeWidth={1.4} />
          </motion.div>
        ))}

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left – copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#c9a84c]/40 bg-[#c9a84c]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#c9a84c]">
              <Gift className="h-3.5 w-3.5" /> Presente L'ECLER
            </span>

            <h1 className="mt-6 font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
              PRESENTEIE COM
              <br />
              <span className="bg-gradient-to-r from-[#f0d78c] via-[#c9a84c] to-[#8b6f2a] bg-clip-text text-transparent">
                EXPERIÊNCIA
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
              O Gift Voucher L'ECLER é a forma mais elegante de presentear quem você ama: saúde,
              bem-estar, sorriso e cuidado em uma experiência premium na Clínica L'ECLER.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-white/80">
              {benefits.slice(0, 3).map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#c9a84c]" />
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/70">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
                <Calendar className="h-4 w-4 text-[#c9a84c]" /> Voucher sob consulta
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
                <Gift className="h-4 w-4 text-[#c9a84c]" /> Bragança Paulista — SP
              </span>
            </div>
          </motion.div>

          {/* Right – form + hero image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:sticky lg:top-8 lg:self-start"
          >
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur">
              <div className="relative h-48 sm:h-56">
                <img
                  src={heroImg}
                  alt="Gift Voucher L'ECLER com caixa de presente dourada e detalhes de luxo"
                  width={1536}
                  height={1024}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0a08] via-[#0e0a08]/40 to-transparent" />
              </div>

              <div className="px-6 pb-6 pt-2">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c9a84c]">
                  Receba as opções de voucher
                </p>
                <h2 className="mt-1 font-display text-2xl text-white">
                  Cadastre-se para presentear
                </h2>
                <p className="mt-1.5 text-sm text-white/60">
                  Nossa equipe entrará em contato pelo WhatsApp com as opções de Gift Voucher
                  personalizadas.
                </p>

                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-white/80">
                      Nome completo
                    </Label>
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
                    <Label htmlFor="email" className="text-white/80">
                      E-mail
                    </Label>
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
                    <Label htmlFor="phone" className="text-white/80">
                      Telefone / WhatsApp
                    </Label>
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
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        Quero opções de voucher
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="relative bg-[#130c0b] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c9a84c]">
              Por que presentear
            </p>
            <h2 className="mt-3 font-display text-4xl text-white sm:text-5xl">
              Um presente que <span className="text-gradient-gold">transforma</span>
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Exclusivo", desc: "Voucher personalizado para uma experiência premium na clínica.", icon: Crown },
              { title: "Flexível", desc: "Válido para diversos tratamentos de odontologia e harmonização.", icon: Gift },
              { title: "Memorável", desc: "Presenteie com cuidado, saúde e bem-estar de verdade.", icon: Heart },
              { title: "Acompanhado", desc: "Atendimento pelo time selecionado pela Dra. Cássia.", icon: Star },
              { title: "Premium", desc: "Ambiente sofisticado e acolhedor em Bragança Paulista.", icon: Gem },
              { title: "Seguro", desc: "Tecnologias avançadas e protocolos com foco na saúde.", icon: CheckCircle2 },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#c9a84c]/15 text-[#c9a84c]">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-xl text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative py-24">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c9a84c]">
              Como funciona
            </p>
            <h2 className="mt-3 font-display text-4xl text-white sm:text-5xl">
              Do cadastro ao <span className="text-gradient-gold">presente</span>
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/10 text-[#c9a84c]">
                  <step.icon className="h-6 w-6" />
                </div>
                <div className="mt-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#c9a84c]/20 text-xs font-semibold text-[#c9a84c]">
                  {i + 1}
                </div>
                <h3 className="mt-3 font-display text-xl text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative bg-[#130c0b] py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c9a84c]">
              Dúvidas comuns
            </p>
            <h2 className="mt-3 font-display text-4xl text-white sm:text-5xl">
              Perguntas <span className="text-gradient-gold">frequentes</span>
            </h2>
          </motion.div>

          <div className="mt-12 space-y-3">
            {faq.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                >
                  <span className="font-display text-lg text-white">{item.q}</span>
                  <ChevronIcon open={openFaq === i} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-sm leading-relaxed text-white/70">{item.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-white/10 bg-[#0e0a08] py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} Clínica L'ECLER. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/50">
              <a href="/privacidade" className="underline hover:text-white/80">
                Privacidade
              </a>
              <a href="/cookies" className="underline hover:text-white/80">
                Cookies
              </a>
              <a href="/" className="underline hover:text-white/80">
                Site institucional
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`ml-3 flex-shrink-0 text-[#c9a84c] transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
