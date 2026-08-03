import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import {
  Loader2,
  Sparkles,
  Crown,
  GraduationCap,
  Stethoscope,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  User,
  Mail,
  Phone,
  ChevronLeft,
  Target,
  Clock,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import heroImg from "@/assets/quiz-hero.jpg";
import { N8N_WEBHOOK_URL } from "@/lib/signup-dialog";

export const Route = createFileRoute("/quiz")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Quiz L'ECLER Academy — Descubra o Curso Ideal para Você" },
      {
        name: "description",
        content:
          "Responda o quiz da L'ECLER Academy e descubra qual curso de Harmonização Orofacial e odontologia estética da Dra. Cássia Blasques é ideal para o seu momento profissional.",
      },
      {
        property: "og:title",
        content: "Quiz L'ECLER Academy — Descubra o Curso Ideal para Você",
      },
      {
        property: "og:description",
        content:
          "Qualifique seu perfil e encontre o caminho certo para evoluir na Harmonização Orofacial com a Dra. Cássia Blasques.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://l-ecler.lovable.app/quiz" }],
  }),
  component: QuizPage,
});

const floats = [
  { icon: Sparkles, top: "18%", left: "8%", delay: 0, size: 24 },
  { icon: Crown, top: "28%", right: "10%", delay: 0.6, size: 28 },
  { icon: GraduationCap, top: "62%", left: "6%", delay: 1.2, size: 26 },
  { icon: Stethoscope, top: "74%", right: "8%", delay: 0.9, size: 24 },
  { icon: Target, top: "44%", right: "14%", delay: 1.5, size: 22 },
];

const questions = [
  {
    id: "formacao",
    icon: GraduationCap,
    title: "Qual é a sua formação?",
    options: [
      { value: "dentista", label: "Cirurgião(a)-Dentista" },
      { value: "medico", label: "Médico(a)" },
      { value: "estudante", label: "Estudante de odontologia/medicina" },
      { value: "outro", label: "Outra área da saúde" },
    ],
  },
  {
    id: "experiencia",
    icon: Stethoscope,
    title: "Você já atua com Harmonização Orofacial?",
    options: [
      { value: "experiente", label: "Sim, já tenho experiência e quero me aperfeiçoar" },
      { value: "iniciante", label: "Sim, comecei agora e quero mais segurança" },
      { value: "nao-iniciado", label: "Não, quero fazer minha primeira habilitação" },
      { value: "conhecer", label: "Quero apenas conhecer a área antes de decidir" },
    ],
  },
  {
    id: "objetivo",
    icon: Target,
    title: "Qual é o seu maior objetivo agora?",
    options: [
      { value: "tecnica", label: "Aprender técnicas seguras e atualizadas" },
      { value: "pratica", label: "Praticar em pacientes reais com supervisão" },
      { value: "empreender", label: "Crescer profissionalmente e empreender na área" },
      { value: "resultados", label: "Aperfeiçoar resultados e naturalidade" },
    ],
  },
  {
    id: "formato",
    icon: BookOpen,
    title: "Qual formato de aprendizado te interessa mais?",
    options: [
      { value: "habilitacao", label: "Habilitação teórico-prática em HOF" },
      { value: "imersao", label: "Imersão de fim de semana focada em técnica" },
      { value: "residencia", label: "Residência clínica com acompanhamento contínuo" },
      { value: "fios", label: "Curso específico de Fios Faciais" },
    ],
  },
  {
    id: "tempo",
    icon: Clock,
    title: "Quanto tempo você pode dedicar?",
    options: [
      { value: "fds", label: "Apenas finais de semana" },
      { value: "semana", label: "Uma semana intensiva" },
      { value: "longo", label: "Programa de residência / longo prazo" },
      { value: "flexivel", label: "Flexível, depende da proposta" },
    ],
  },
];

const results: Record<string, { title: string; desc: string; cta: string; message: string }> = {
  residencia: {
    title: "Residência Clínica L'ECLER",
    desc: "Para quem quer aprofundar com segurança, prática supervisionada e acompanhamento contínuo da Dra. Cássia.",
    cta: "Quero saber mais da Residência",
    message:
      "Olá, fiz o quiz da L'ECLER Academy e meu perfil indicou a Residência Clínica. Quero saber mais sobre o programa.",
  },
  habilitacao: {
    title: "Habilitação em Harmonização Orofacial",
    desc: "O ponto de partida ideal para quem quer começar com base sólida, técnica segura e didática clínica.",
    cta: "Quero conhecer a Habilitação",
    message:
      "Olá, fiz o quiz da L'ECLER Academy e meu perfil indicou a Habilitação em HOF. Quero saber mais sobre o curso.",
  },
  imersao: {
    title: "Imersão Prática L'ECLER",
    desc: "Para quem quer evoluir rápido com treinamento intensivo em poucos dias, focado em técnica e resultado.",
    cta: "Quero saber mais da Imersão",
    message:
      "Olá, fiz o quiz da L'ECLER Academy e meu perfil indicou a Imersão Prática. Quero saber mais sobre o próximo módulo.",
  },
  fios: {
    title: "Curso de Fios Faciais",
    desc: "Especialização focada em fios de sustentação, bioestímulo e rejuvenescimento natural com técnica L'ECLER.",
    cta: "Quero saber mais do Curso de Fios",
    message:
      "Olá, fiz o quiz da L'ECLER Academy e meu perfil indicou o Curso de Fios Faciais. Quero saber mais sobre as próximas turmas.",
  },
};

const contactSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome completo").max(100, "Nome muito longo"),
  email: z.string().trim().email("E-mail inválido").max(254, "E-mail muito longo"),
  whatsapp: z
    .string()
    .trim()
    .refine((v) => {
      const digits = v.replace(/\D/g, "");
      return digits.length >= 10 && digits.length <= 15;
    }, "WhatsApp inválido"),
});

function maskPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

function calculateResult(answers: Record<string, string>) {
  const scores: Record<string, number> = { residencia: 0, habilitacao: 0, imersao: 0, fios: 0 };

  if (answers.formato === "residencia" || answers.tempo === "longo") scores.residencia += 3;
  if (answers.formato === "habilitacao" || answers.experiencia === "nao-iniciado") scores.habilitacao += 3;
  if (answers.formato === "imersao" || answers.tempo === "semana" || answers.tempo === "fds") scores.imersao += 3;
  if (answers.formato === "fios") scores.fios += 4;

  if (answers.objetivo === "pratica") scores.residencia += 2;
  if (answers.objetivo === "tecnica") scores.habilitacao += 2;
  if (answers.objetivo === "resultados") scores.imersao += 2;
  if (answers.objetivo === "empreender") scores.fios += 1;

  if (answers.experiencia === "experiente") scores.residencia += 2;
  if (answers.experiencia === "iniciante") scores.habilitacao += 2;

  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}

function QuizPage() {
  const [step, setStep] = useState(-1); // -1 = intro, 0..n = questions, n+1 = contact, n+2 = result
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [direction, setDirection] = useState(1);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; whatsapp?: string }>({});
  const [loading, setLoading] = useState(false);
  const [resultKey, setResultKey] = useState<string | null>(null);

  const totalSteps = questions.length;

  function startQuiz() {
    setDirection(1);
    setStep(0);
  }

  function selectOption(value: string) {
    const currentQuestion = questions[step];
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));

    if (step < totalSteps - 1) {
      setDirection(1);
      setStep((s) => s + 1);
    } else {
      setDirection(1);
      setStep(totalSteps);
    }
  }

  function goBack() {
    if (step > 0) {
      setDirection(-1);
      setStep((s) => s - 1);
    } else {
      setDirection(-1);
      setStep(-1);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = contactSchema.safeParse({ name, email, whatsapp });
    if (!parsed.success) {
      const f: typeof errors = {};
      for (const issue of parsed.error.issues) {
        f[issue.path[0] as "name" | "email" | "whatsapp"] = issue.message;
      }
      setErrors(f);
      return;
    }
    setErrors({});
    setLoading(true);

    const finalResult = calculateResult(answers);
    setResultKey(finalResult);

    const payload = {
      name: parsed.data.name,
      email: parsed.data.email,
      whatsapp: parsed.data.whatsapp,
      source: "quiz",
      quiz_result: finalResult,
      quiz_answers: answers,
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

      fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => {});

      setDirection(1);
      setStep(totalSteps + 1);
    } catch (err) {
      toast.error("Não foi possível enviar seus dados. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  function openWhatsApp() {
    const result = results[resultKey ?? "habilitacao"];
    const text = encodeURIComponent(result.message);
    window.location.href = `https://api.whatsapp.com/send?phone=5511915633857&text=${text}`;
  }

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -40 : 40, opacity: 0 }),
  };

  const isIntro = step === -1;

  return (
    <div className="min-h-screen bg-background">

      <main className="relative flex min-h-screen flex-col">
        {/* Hero / Quiz background */}
        <section className="relative flex flex-1 items-center justify-center overflow-hidden px-6 py-24 md:py-32">
          <div className="pointer-events-none absolute inset-0">
            <img
              src={heroImg}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
          </div>

          {isIntro &&
            floats.map((f, i) => (
              <motion.div
                key={i}
                className="pointer-events-none absolute text-gold/25"
                style={{ top: f.top, left: f.left, right: f.right }}
                animate={{ y: [0, -18, 0], rotate: [0, 4, 0] }}
                transition={{ duration: 6, delay: f.delay, repeat: Infinity, ease: "easeInOut" }}
              >
                <f.icon size={f.size} strokeWidth={1.2} />
              </motion.div>
            ))}

          <div className="relative z-10 mx-auto w-full max-w-3xl">
            <AnimatePresence mode="wait" custom={direction}>
              {isIntro ? (
                <motion.div
                  key="intro"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="text-center"
                >
                  <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-cream/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-soft backdrop-blur-sm">
                    <Crown className="h-3.5 w-3.5 text-gold" />
                    L'ECLER Academy
                  </span>

                  <h1 className="mx-auto mt-8 max-w-4xl font-display text-[2.5rem] leading-[1.05] font-medium text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                    Descubra qual{" "}
                    <span className="text-gradient-gold">curso</span>{" "}
                    <span className="text-gradient-gold">L'ECLER</span> é ideal para você
                  </h1>

                  <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                    Responda 5 perguntas rápidas e receba uma indicação personalizada do caminho de
                    formação da Dra. Cássia Blasques — com base no seu perfil, objetivo e
                    disponibilidade.
                  </p>

                  <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button
                      onClick={startQuiz}
                      size="lg"
                      className="h-14 rounded-full bg-gradient-gold px-10 text-base font-semibold text-primary shadow-gold transition-transform hover:scale-[1.02]"
                    >
                      Iniciar quiz
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <p className="text-sm text-muted-foreground">Leva menos de 2 minutos</p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="quiz-card"
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35 }}
                  className="mx-auto w-full max-w-2xl overflow-hidden rounded-3xl border border-border bg-card/95 p-6 shadow-elegant backdrop-blur-sm md:p-10"
                >
                  {step >= 0 && step < totalSteps && (
                    <>
                      <div className="mb-8 flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                          Pergunta {step + 1} de {totalSteps}
                        </span>
                        <button
                          onClick={goBack}
                          className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <ChevronLeft className="h-4 w-4" />
                          Voltar
                        </button>
                      </div>

                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 text-gold">
                        {(() => {
                          const Icon = questions[step].icon;
                          return <Icon className="h-6 w-6" />;
                        })()}
                      </div>
                      <h2 className="font-display text-2xl font-medium md:text-3xl">
                        {questions[step].title}
                      </h2>

                      <div className="mt-8 space-y-3">
                        {questions[step].options.map((option) => {
                          const selected = answers[questions[step].id] === option.value;
                          return (
                            <button
                              key={option.value}
                              onClick={() => selectOption(option.value)}
                              className={`group flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all md:p-5 ${
                                selected
                                  ? "border-gold bg-gold/10 shadow-gold"
                                  : "border-border bg-background hover:border-gold/40 hover:bg-gold/5"
                              }`}
                            >
                              <span
                                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
                                  selected
                                    ? "border-gold bg-gold text-primary"
                                    : "border-border bg-background"
                                }`}
                              >
                                {selected && <CheckCircle2 className="h-3.5 w-3.5" />}
                              </span>
                              <span className="text-sm font-medium md:text-base">{option.label}</span>
                            </button>
                          );
                        })}
                      </div>

                      <div className="mt-8">
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                          <motion.div
                            className="h-full bg-gradient-gold"
                            initial={{ width: 0 }}
                            animate={{ width: `${((step + 1) / totalSteps) * 100}%` }}
                            transition={{ duration: 0.4 }}
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {step === totalSteps && (
                    <>
                      <button
                        onClick={goBack}
                        className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        Voltar
                      </button>

                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 text-gold">
                        <Sparkles className="h-6 w-6" />
                      </div>
                      <h2 className="font-display text-2xl font-medium md:text-3xl">
                        Quase lá! Receba seu resultado personalizado
                      </h2>
                      <p className="mt-3 text-muted-foreground">
                        Preencha seus dados para revelarmos qual formação da L'ECLER Academy combina
                        com você.
                      </p>

                      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                        <div className="space-y-2">
                          <Label htmlFor="quiz-name" className="flex items-center gap-2 text-sm">
                            <User className="h-4 w-4 text-gold" />
                            Nome completo
                          </Label>
                          <Input
                            id="quiz-name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Seu nome"
                            className="rounded-xl border-border bg-background px-4 py-3"
                          />
                          {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="quiz-email" className="flex items-center gap-2 text-sm">
                            <Mail className="h-4 w-4 text-gold" />
                            E-mail profissional
                          </Label>
                          <Input
                            id="quiz-email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="seu@email.com"
                            className="rounded-xl border-border bg-background px-4 py-3"
                          />
                          {errors.email && (
                            <p className="text-xs text-destructive">{errors.email}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="quiz-whatsapp" className="flex items-center gap-2 text-sm">
                            <Phone className="h-4 w-4 text-gold" />
                            WhatsApp
                          </Label>
                          <Input
                            id="quiz-whatsapp"
                            value={whatsapp}
                            onChange={(e) => setWhatsapp(maskPhone(e.target.value))}
                            placeholder="(11) 99999-9999"
                            className="rounded-xl border-border bg-background px-4 py-3"
                          />
                          {errors.whatsapp && (
                            <p className="text-xs text-destructive">{errors.whatsapp}</p>
                          )}
                        </div>

                        <Button
                          type="submit"
                          disabled={loading}
                          size="lg"
                          className="w-full rounded-full bg-gradient-gold py-6 text-base font-semibold text-primary shadow-gold transition-transform hover:scale-[1.01] disabled:opacity-70"
                        >
                          {loading ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Enviando...
                            </>
                          ) : (
                            <>
                              Ver meu resultado
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>

                        <p className="text-center text-xs text-muted-foreground">
                          Seus dados estão seguros. Entraremos em contato pelo WhatsApp.
                        </p>
                      </form>
                    </>
                  )}

                  {step === totalSteps + 1 && resultKey && (
                    <div className="text-center">
                      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-gold/30 to-gold/10 text-gold">
                        <Crown className="h-10 w-10" />
                      </div>
                      <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-gold">
                        Resultado do seu quiz
                      </p>
                      <h2 className="mt-2 font-display text-2xl font-medium md:text-4xl">
                        {results[resultKey].title}
                      </h2>
                      <p className="mx-auto mt-4 max-w-md text-muted-foreground">
                        {results[resultKey].desc}
                      </p>

                      <div className="mt-8 rounded-2xl border border-gold/20 bg-gold/5 p-6 text-left">
                        <h3 className="font-display text-lg font-medium">Próximo passo</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Fale com nossa equipe no WhatsApp para conhecer a grade, datas,
                          investimento e garantir sua vaga na próxima turma.
                        </p>
                        <Button
                          onClick={openWhatsApp}
                          size="lg"
                          className="mt-5 w-full rounded-full bg-gradient-gold py-6 text-base font-semibold text-primary shadow-gold transition-transform hover:scale-[1.02]"
                        >
                          <MessageCircle className="mr-2 h-5 w-5" />
                          {results[resultKey].cta}
                        </Button>
                      </div>

                      <button
                        onClick={() => {
                          setAnswers({});
                          setName("");
                          setEmail("");
                          setWhatsapp("");
                          setResultKey(null);
                          setStep(-1);
                        }}
                        className="mt-6 text-sm text-muted-foreground underline-offset-4 hover:underline"
                      >
                        Refazer o quiz
                      </button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>

    </div>
  );
}
