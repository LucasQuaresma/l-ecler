import { useEffect, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { z } from "zod";
import {
  ArrowRight,
  Award,
  Check,
  CheckCircle2,
  ChevronLeft,
  Clock,
  Loader2,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  User,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { N8N_WEBHOOK_URL } from "@/lib/signup-dialog";
import {
  getProfileByScore,
  questions,
  quizIntro,
  transitions,
  type ProfileResult,
  type QuizOption,
  type QuizQuestion,
} from "@/lib/academy-quiz";
import academyLogo from "@/assets/lecler-academy-logo.png";
import leclerLogo from "@/assets/lecler-logo.png";
import leclerSymbol from "@/assets/lecler-symbol.png";
import cassiaHero from "@/assets/cassia-quiz-hero.webp";
import cassiaAuthority from "@/assets/cassia-quiz-authority.webp";
import cassiaWhite from "@/assets/cassia-quiz-white.webp";
import cassiaResult from "@/assets/cassia-quiz-result.webp";
import cassiaPortrait from "@/assets/cassia-quiz-portrait.webp";

export const Route = createFileRoute("/quiz")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Quiz L'ECLER Academy, Avaliação Profissional em Fios Faciais" },
      {
        name: "description",
        content:
          "Responda à avaliação profissional da L'ECLER Academy e descubra seu momento técnico em Fios Faciais com a metodologia da Dra. Cássia Blasques.",
      },
      {
        property: "og:title",
        content: "Quiz L'ECLER Academy, Avaliação Profissional em Fios Faciais",
      },
      {
        property: "og:description",
        content:
          "Identifique seu nível técnico, seus gargalos clínicos e o próximo passo para evoluir com Fios Faciais.",
      },
      { property: "og:image", content: cassiaHero },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://l-ecler.lovable.app/quiz" }],
  }),
  component: QuizPage,
});

type QuizStage = "intro" | "question" | "transition" | "analysis" | "lead" | "result";

type AnswerRecord = {
  questionId: number;
  question: string;
  optionLetter: QuizOption["letter"];
  optionLabel: string;
  score: number;
};

const contactSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome completo.").max(100, "Nome muito longo."),
  professionalArea: z
    .string()
    .trim()
    .min(2, "Informe sua área de atuação.")
    .max(120, "Texto muito longo."),
  email: z.string().trim().email("Informe um e-mail válido.").max(254, "E-mail muito longo."),
  whatsapp: z
    .string()
    .trim()
    .refine((value) => {
      const digits = value.replace(/\D/g, "");
      return digits.length >= 10 && digits.length <= 15;
    }, "Informe um WhatsApp válido."),
});

const transitionMap = new Map(
  transitions.map((transition) => [transition.afterQuestion, transition]),
);

const analysisSteps = [
  "Cruzando suas respostas com critérios técnicos",
  "Avaliando segurança, indicação e planejamento",
  "Identificando seu perfil profissional",
];

const trustPoints = [
  "Odontologia desde 1998",
  "Harmonização Orofacial desde 2012",
  "Metodologia L'ECLER Academy",
];

function maskPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function getWhatsAppUrl(profile: ProfileResult, name: string) {
  const message = encodeURIComponent(
    `Olá, fiz a avaliação profissional da L'ECLER Academy e meu resultado foi: ${profile.name}. Meu nome é ${name}. Quero receber orientação sobre o Programa Online de Fios Faciais.`,
  );

  return `https://api.whatsapp.com/send?phone=5511915633857&text=${message}`;
}

function getScore(answers: AnswerRecord[]) {
  return answers.reduce((total, answer) => total + answer.score, 0);
}

function ProgressBar({ questionIndex }: { questionIndex: number }) {
  const progress = ((questionIndex + 1) / questions.length) * 100;

  return (
    <div className="h-2 overflow-hidden rounded-full bg-primary/10">
      <motion.div
        className="h-full rounded-full bg-gradient-gold"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.35 }}
      />
    </div>
  );
}

function BrandHeader() {
  return (
    <header className="relative z-20 border-b border-gold/20 bg-background/88 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6">
        <a href="/" className="inline-flex items-center gap-3" aria-label="Clínica L'ECLER">
          <img
            src={leclerSymbol}
            alt=""
            aria-hidden="true"
            className="h-7 w-auto opacity-85 sm:h-8"
          />
          <img src={leclerLogo} alt="L'ECLER Saúde e Bem-Estar" className="h-8 w-auto sm:h-9" />
        </a>
        <a
          href="/academy"
          className="hidden rounded-full border border-gold/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary transition-colors hover:bg-gold/10 sm:inline-flex"
        >
          Academy
        </a>
      </div>
    </header>
  );
}

function IntroScreen({ onStart }: { onStart: () => void }) {
  return (
    <section className="relative overflow-hidden px-5 py-10 sm:px-6 lg:min-h-[calc(100vh-73px)] lg:py-14">
      <div className="pointer-events-none absolute inset-0 bg-gradient-hero" />
      <div className="pointer-events-none absolute left-[8%] top-[18%] h-56 w-56 rounded-full bg-gold/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[10%] right-[8%] h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <img src={academyLogo} alt="L'ECLER Academy" className="mb-7 h-20 w-auto sm:h-24" />

          <h1 className="max-w-4xl font-display text-[2.35rem] leading-[0.98] text-foreground sm:text-6xl lg:text-[4.9rem]">
            Avaliação profissional em <span className="text-gradient-gold">Fios Faciais.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {quizIntro.subtitle}
          </p>

          <div className="mt-7 overflow-hidden rounded-[1.75rem] border border-gold/30 bg-card shadow-elegant lg:hidden">
            <div className="relative aspect-[4/3]">
              <img
                src={cassiaHero}
                alt="Dra. Cássia Blasques"
                className="h-full w-full object-cover object-[50%_20%]"
                width={1400}
                height={2100}
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/78 via-primary/10 to-transparent" />
              <div className="absolute bottom-0 p-5 text-primary-foreground">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gold">
                  Dra. Cássia Blasques
                </p>
                <p className="mt-2 max-w-[13rem] font-display text-xl leading-tight">
                  Técnica, segurança e naturalidade em HOF.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              onClick={onStart}
              size="lg"
              className="group h-auto min-h-14 rounded-full bg-gradient-gold px-8 py-4 text-base font-semibold leading-snug text-primary shadow-gold transition-transform hover:scale-[1.02]"
            >
              Começar minha avaliação
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 text-gold" />
              {quizIntro.duration}
            </span>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {trustPoints.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-gold/25 bg-card/70 p-4 shadow-soft backdrop-blur"
              >
                <CheckCircle2 className="h-5 w-5 text-gold" />
                <p className="mt-3 text-sm font-medium leading-snug text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="relative mx-auto hidden w-full max-w-[31rem] lg:block"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] border border-gold/35 bg-card shadow-elegant">
            <img
              src={cassiaHero}
              alt="Dra. Cássia Blasques"
              className="h-full w-full object-cover object-[48%_22%]"
              width={1400}
              height={2100}
              fetchPriority="high"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/85 via-primary/28 to-transparent p-6 pt-28 text-primary-foreground">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Dra. Cássia Blasques
              </p>
              <p className="mt-2 max-w-[15rem] font-display text-2xl leading-tight sm:max-w-[17rem]">
                Técnica, segurança e naturalidade em HOF.
              </p>
            </div>
          </div>

          <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-gold/25 bg-card/95 p-4 shadow-elegant backdrop-blur sm:left-auto sm:right-[-1.5rem] sm:w-64">
            <div className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-gold text-primary">
                <Award className="h-5 w-5" />
              </span>
              <p className="text-sm leading-snug text-muted-foreground">
                Diagnóstico profissional para orientar o próximo passo em Fios Faciais.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function QuestionScreen({
  question,
  questionIndex,
  selected,
  onBack,
  onSelect,
}: {
  question: QuizQuestion;
  questionIndex: number;
  selected?: QuizOption;
  onBack: () => void;
  onSelect: (option: QuizOption) => void;
}) {
  const Icon = question.icon;

  return (
    <section className="px-5 py-8 sm:px-6 lg:py-12">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-start">
        <aside className="hidden lg:block">
          <div className="sticky top-28 overflow-hidden rounded-[2rem] border border-gold/25 bg-card shadow-elegant">
            <div className="relative aspect-[4/5]">
              <img
                src={cassiaAuthority}
                alt="Dra. Cássia Blasques na L'ECLER Academy"
                className="h-full w-full object-cover object-[50%_18%]"
                width={1400}
                height={2100}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-6 text-primary-foreground">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  Avaliação guiada
                </p>
                <p className="mt-3 font-display text-2xl leading-tight">
                  Cada resposta revela um ponto da sua maturidade clínica.
                </p>
              </div>
            </div>
          </div>
        </aside>

        <motion.div
          key={question.id}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.28 }}
          className="rounded-[2rem] border border-gold/25 bg-card p-5 shadow-elegant sm:p-8 lg:p-10"
        >
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Pergunta {questionIndex + 1} de {questions.length}
            </span>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
              Voltar
            </button>
          </div>

          <div className="mt-6">
            <ProgressBar questionIndex={questionIndex} />
          </div>

          <div className="mt-9 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-gold text-primary shadow-gold">
            <Icon className="h-7 w-7" />
          </div>

          <h2 className="mt-6 font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
            {question.question}
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {question.reveals}
          </p>

          <div className="mt-8 grid gap-3">
            {question.options.map((option) => {
              const isSelected = selected?.letter === option.letter;

              return (
                <button
                  key={option.letter}
                  onClick={() => onSelect(option)}
                  className={`group flex items-start gap-4 rounded-2xl border p-4 text-left transition-all sm:p-5 ${
                    isSelected
                      ? "border-gold bg-gold/10 shadow-gold"
                      : "border-border bg-background hover:border-gold/45 hover:bg-gold/5"
                  }`}
                >
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border text-sm font-semibold ${
                      isSelected
                        ? "border-gold bg-gold text-primary"
                        : "border-gold/25 bg-card text-gold"
                    }`}
                  >
                    {isSelected ? <Check className="h-4 w-4" /> : option.letter}
                  </span>
                  <span className="pt-1 text-sm font-medium leading-relaxed text-foreground sm:text-base">
                    {option.label}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TransitionScreen({
  title,
  body,
  onContinue,
}: {
  title: string;
  body: string;
  onContinue: () => void;
}) {
  return (
    <section className="px-5 py-10 sm:px-6 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -24 }}
        transition={{ duration: 0.38 }}
        className="mx-auto grid max-w-6xl overflow-hidden rounded-[2.25rem] border border-gold/25 bg-primary text-primary-foreground shadow-elegant lg:grid-cols-[0.95fr_1.05fr]"
      >
        <div className="relative min-h-[22rem]">
          <img
            src={cassiaWhite}
            alt="Dra. Cássia Blasques"
            className="h-full w-full object-cover object-[50%_18%]"
            width={1400}
            height={2100}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
        </div>

        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-gold text-primary shadow-gold">
            <Sparkles className="h-7 w-7" />
          </div>

          <h2 className="mt-7 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-primary-foreground/78 sm:text-lg">
            {body}
          </p>

          <Button
            onClick={onContinue}
            size="lg"
            className="mt-8 h-auto min-h-13 w-full rounded-full bg-gradient-gold px-7 py-3 text-base font-semibold text-primary shadow-gold transition-transform hover:scale-[1.02] sm:w-fit"
          >
            Continuar avaliação
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}

function AnalysisScreen({ onContinue }: { onContinue: () => void }) {
  return (
    <section className="px-5 py-10 sm:px-6 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.42 }}
        className="mx-auto grid max-w-6xl gap-8 overflow-hidden rounded-[2.25rem] border border-gold/25 bg-card p-5 shadow-elegant sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10"
      >
        <div className="flex flex-col justify-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Avaliação concluída
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Sua resposta mostra muito mais do que uma preferência.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Agora vamos cruzar seus pontos fortes, seus bloqueios técnicos e seu nível de segurança
            para identificar o perfil que melhor representa seu momento com Fios Faciais.
          </p>

          <div className="mt-8 grid gap-3">
            {analysisSteps.map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-3 rounded-2xl border border-gold/20 bg-background p-4"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-gold text-sm font-semibold text-primary">
                  {index + 1}
                </span>
                <span className="text-sm font-medium text-foreground">{step}</span>
              </div>
            ))}
          </div>

          <Button
            onClick={onContinue}
            size="lg"
            className="mt-8 h-auto min-h-13 w-full rounded-full bg-gradient-gold px-8 py-3 text-base font-semibold text-primary shadow-gold transition-transform hover:scale-[1.02] sm:w-fit"
          >
            Ver meu diagnóstico
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="relative min-h-[26rem] overflow-hidden rounded-[1.75rem] border border-gold/25">
          <img
            src={cassiaPortrait}
            alt="Dra. Cássia Blasques"
            className="h-full w-full object-cover object-[51%_18%]"
            width={1400}
            height={2100}
          />
        </div>
      </motion.div>
    </section>
  );
}

function LeadScreen({
  score,
  onBack,
  onSubmit,
}: {
  score: number;
  onBack: () => void;
  onSubmit: (lead: z.infer<typeof contactSchema>) => Promise<void>;
}) {
  const [name, setName] = useState("");
  const [professionalArea, setProfessionalArea] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<
    Partial<Record<keyof z.infer<typeof contactSchema>, string>>
  >({});

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const parsed = contactSchema.safeParse({ name, professionalArea, email, whatsapp });

    if (!parsed.success) {
      const fieldErrors: typeof errors = {};
      for (const issue of parsed.error.issues) {
        fieldErrors[issue.path[0] as keyof typeof fieldErrors] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setLoading(true);
    try {
      await onSubmit(parsed.data);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="px-5 py-10 sm:px-6 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.42 }}
        className="mx-auto grid max-w-6xl overflow-hidden rounded-[2.25rem] border border-gold/25 bg-card shadow-elegant lg:grid-cols-[0.95fr_1.05fr]"
      >
        <div className="relative hidden min-h-[38rem] lg:block">
          <img
            src={cassiaResult}
            alt="Dra. Cássia Blasques"
            className="h-full w-full object-cover object-[51%_18%]"
            width={1400}
            height={2100}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/82 via-primary/10 to-transparent" />
          <div className="absolute bottom-0 p-8 text-primary-foreground">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Resultado pronto
            </p>
            <p className="mt-3 font-display text-3xl leading-tight">
              Receba sua análise e o próximo passo sugerido pela metodologia L'ECLER.
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-10 lg:p-12">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
              Voltar
            </button>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Pontuação calculada
            </span>
          </div>

          <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Seu diagnóstico está pronto.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Para liberar o resultado completo, informe seus dados. A equipe da L'ECLER pode usar
            essas informações para orientar você com mais precisão.
          </p>

          <div className="mt-6 rounded-2xl border border-gold/20 bg-gold/5 p-4">
            <p className="text-sm text-muted-foreground">Sua pontuação técnica parcial</p>
            <p className="mt-1 font-display text-4xl text-foreground">{score}</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="h-4 w-4 text-gold" />
                Nome completo
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Seu nome"
                className="h-12 rounded-xl bg-background"
              />
              {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="professional-area" className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-gold" />
                Área de atuação
              </Label>
              <Input
                id="professional-area"
                value={professionalArea}
                onChange={(event) => setProfessionalArea(event.target.value)}
                placeholder="Ex.: Cirurgiã-dentista, médica, biomédica"
                className="h-12 rounded-xl bg-background"
              />
              {errors.professionalArea && (
                <p className="text-xs text-destructive">{errors.professionalArea}</p>
              )}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gold" />
                  E-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="seu@email.com"
                  className="h-12 rounded-xl bg-background"
                />
                {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gold" />
                  WhatsApp
                </Label>
                <Input
                  id="whatsapp"
                  value={whatsapp}
                  onChange={(event) => setWhatsapp(maskPhone(event.target.value))}
                  placeholder="(11) 99999-9999"
                  className="h-12 rounded-xl bg-background"
                />
                {errors.whatsapp && <p className="text-xs text-destructive">{errors.whatsapp}</p>}
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              size="lg"
              className="h-auto min-h-14 w-full rounded-full bg-gradient-gold px-8 py-4 text-base font-semibold text-primary shadow-gold transition-transform hover:scale-[1.01] disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Liberando resultado
                </>
              ) : (
                <>
                  Liberar meu diagnóstico
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>

            <p className="text-center text-xs leading-relaxed text-muted-foreground">
              Seus dados são usados para retorno da equipe e envio da orientação solicitada.
            </p>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

function ResultScreen({
  profile,
  score,
  name,
  onRestart,
}: {
  profile: ProfileResult;
  score: number;
  name: string;
  onRestart: () => void;
}) {
  return (
    <section className="px-5 py-10 sm:px-6 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.42 }}
        className="mx-auto max-w-7xl"
      >
        <div className="grid overflow-hidden rounded-[2.25rem] border border-gold/25 bg-primary text-primary-foreground shadow-elegant lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative min-h-[32rem]">
            <img
              src={cassiaResult}
              alt="Dra. Cássia Blasques"
              className="h-full w-full object-cover object-[50%_18%]"
              width={1400}
              height={2100}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/88 via-primary/15 to-transparent" />
            <div className="absolute bottom-0 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                L'ECLER Academy
              </p>
              <p className="mt-3 font-display text-2xl leading-tight">
                Orientação profissional com foco em evolução real.
              </p>
            </div>
          </div>

          <div className="p-7 sm:p-10 lg:p-14">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground/80">
                Resultado: {score} pontos
              </span>
              <span className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-primary">
                {profile.name}
              </span>
            </div>

            <h1 className="mt-7 font-display text-3xl leading-tight sm:text-5xl">
              {profile.headline}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-primary-foreground/78 sm:text-lg">
              {profile.description}
            </p>

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              <div className="rounded-2xl border border-primary-foreground/12 bg-primary-foreground/[0.07] p-5">
                <h2 className="font-display text-2xl">Pontos fortes</h2>
                <ul className="mt-4 space-y-3 text-sm text-primary-foreground/78">
                  {profile.strengths.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-primary-foreground/12 bg-primary-foreground/[0.07] p-5">
                <h2 className="font-display text-2xl">O que evoluir</h2>
                <ul className="mt-4 space-y-3 text-sm text-primary-foreground/78">
                  {profile.improvements.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-gold/35 bg-gold/10 p-5">
              <h2 className="font-display text-2xl">Seu próximo passo</h2>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/82">
                {profile.nextStep} {profile.invitation}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={getWhatsAppUrl(profile, name)}
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-gradient-gold px-8 py-4 text-center text-base font-semibold text-primary shadow-gold transition-transform hover:scale-[1.02]"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Quero receber orientação
              </a>
              <button
                onClick={onRestart}
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-primary-foreground/20 px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Refazer avaliação
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function QuizPage() {
  const [stage, setStage] = useState<QuizStage>("intro");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, AnswerRecord>>({});
  const [activeTransitionAfter, setActiveTransitionAfter] = useState<number | null>(null);
  const [profile, setProfile] = useState<ProfileResult | null>(null);
  const [leadName, setLeadName] = useState("");

  const orderedAnswers = useMemo(
    () => Object.values(answers).sort((a, b) => a.questionId - b.questionId),
    [answers],
  );
  const score = useMemo(() => getScore(orderedAnswers), [orderedAnswers]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [stage, questionIndex]);

  function startQuiz() {
    setStage("question");
    setQuestionIndex(0);
  }

  function handleBack() {
    if (stage === "lead") {
      setStage("analysis");
      return;
    }

    if (questionIndex === 0) {
      setStage("intro");
      return;
    }

    setQuestionIndex((current) => current - 1);
    setStage("question");
  }

  function handleSelect(question: QuizQuestion, option: QuizOption) {
    const answer: AnswerRecord = {
      questionId: question.id,
      question: question.question,
      optionLetter: option.letter,
      optionLabel: option.label,
      score: option.score,
    };

    setAnswers((current) => ({ ...current, [question.id]: answer }));

    const transition = transitionMap.get(question.id);
    if (transition && questionIndex < questions.length - 1) {
      setActiveTransitionAfter(question.id);
      setStage("transition");
      return;
    }

    if (questionIndex < questions.length - 1) {
      setQuestionIndex((current) => current + 1);
      return;
    }

    setStage("analysis");
  }

  function continueTransition() {
    setActiveTransitionAfter(null);
    setQuestionIndex((current) => Math.min(current + 1, questions.length - 1));
    setStage("question");
  }

  async function submitLead(lead: z.infer<typeof contactSchema>) {
    const finalProfile = getProfileByScore(score);
    const payload = {
      name: lead.name,
      professionalArea: lead.professionalArea,
      email: lead.email,
      whatsapp: lead.whatsapp,
      source: "quiz-academy-fios",
      quizScore: score,
      quizProfile: finalProfile.name,
      quizAnswers: orderedAnswers,
      createdAt: new Date().toISOString(),
    };

    try {
      const { error } = await supabase.from("leads").insert({
        name: lead.name,
        email: lead.email,
        whatsapp: lead.whatsapp,
        source: "quiz-academy-fios",
      });

      if (error) throw error;

      fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => {});

      setLeadName(lead.name);
      setProfile(finalProfile);
      setStage("result");
    } catch {
      toast.error("Não foi possível liberar seu resultado. Tente novamente.");
    }
  }

  function restart() {
    setStage("intro");
    setQuestionIndex(0);
    setAnswers({});
    setActiveTransitionAfter(null);
    setProfile(null);
    setLeadName("");
  }

  const currentQuestion = questions[questionIndex];
  const selected = answers[currentQuestion?.id];
  const transition = activeTransitionAfter ? transitionMap.get(activeTransitionAfter) : undefined;

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <BrandHeader />

      <main>
        <AnimatePresence mode="wait">
          {stage === "intro" && <IntroScreen key="intro" onStart={startQuiz} />}

          {stage === "question" && currentQuestion && (
            <QuestionScreen
              key={`question-${currentQuestion.id}`}
              question={currentQuestion}
              questionIndex={questionIndex}
              selected={
                selected
                  ? {
                      letter: selected.optionLetter,
                      label: selected.optionLabel,
                      score: selected.score,
                    }
                  : undefined
              }
              onBack={handleBack}
              onSelect={(option) => handleSelect(currentQuestion, option)}
            />
          )}

          {stage === "transition" && transition && (
            <TransitionScreen
              key={`transition-${transition.afterQuestion}`}
              title={transition.title}
              body={transition.body}
              onContinue={continueTransition}
            />
          )}

          {stage === "analysis" && (
            <AnalysisScreen key="analysis" onContinue={() => setStage("lead")} />
          )}

          {stage === "lead" && (
            <LeadScreen key="lead" score={score} onBack={handleBack} onSubmit={submitLead} />
          )}

          {stage === "result" && profile && (
            <ResultScreen
              key="result"
              profile={profile}
              score={score}
              name={leadName}
              onRestart={restart}
            />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
