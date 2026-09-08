import { useRef, useState } from "react";
import { z } from "zod";
import { ArrowRight, Check, Loader2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { registerEbookLead, type EbookLeadSource } from "@/lib/ebook-funnel";
import leclerLogo from "@/assets/lecler-logo.png";

type EbookLeadPageProps = {
  source: EbookLeadSource;
  variant: "dark" | "light";
  title: string;
  highlightedTitle: string;
  description: string;
  coverImage: string;
  portraitImage: string;
  thankYouPath: string;
  benefits: string[];
};

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome completo").max(100, "Nome muito longo"),
  email: z.string().trim().email("Informe um e-mail válido").max(254),
  phone: z
    .string()
    .trim()
    .refine((value) => {
      const digits = value.replace(/\D/g, "");
      return digits.length >= 10 && digits.length <= 15;
    }, "Informe um WhatsApp válido"),
  website: z.string().max(0),
});

type FieldErrors = Partial<Record<"name" | "email" | "phone", string>>;

function maskPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function LeadForm({
  source,
  thankYouPath,
  inverted = false,
}: Pick<EbookLeadPageProps, "source" | "thankYouPath"> & { inverted?: boolean }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [loading, setLoading] = useState(false);
  const submittingRef = useRef(false);
  const openedAtRef = useRef(Date.now());

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submittingRef.current) return;

    const parsed = schema.safeParse({ name, email, phone, website });
    if (!parsed.success) {
      const nextErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as keyof FieldErrors;
        if (field !== "website") nextErrors[field] = issue.message;
      }
      setErrors(nextErrors);
      return;
    }

    if (Date.now() - openedAtRef.current < 900) {
      toast.error("Aguarde um instante e envie novamente.");
      return;
    }

    setErrors({});
    setLoading(true);
    submittingRef.current = true;

    try {
      await registerEbookLead({
        name: parsed.data.name,
        email: parsed.data.email,
        whatsapp: parsed.data.phone,
        source,
      });
      window.location.assign(thankYouPath);
    } catch (error) {
      console.error(error);
      toast.error("Não foi possível concluir o cadastro. Tente novamente.");
      submittingRef.current = false;
      setLoading(false);
    }
  }

  const inputClass = inverted
    ? "mt-1.5 h-11 border-white/15 bg-white/[0.07] text-white placeholder:text-white/35 focus-visible:ring-[#d8bc77]"
    : "mt-1.5 h-11 border-[#332924]/15 bg-white text-[#241c18] placeholder:text-[#6d625c]/55 focus-visible:ring-[#8a6c35]";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
      <div
        className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <Label htmlFor={`${source}-website`}>Site</Label>
        <Input
          id={`${source}-website`}
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <Label htmlFor={`${source}-name`} className={inverted ? "text-white/80" : "text-[#332924]"}>
          Nome completo
        </Label>
        <Input
          id={`${source}-name`}
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Seu nome"
          autoComplete="name"
          className={inputClass}
        />
        {errors.name ? <p className="mt-1 text-xs text-red-500">{errors.name}</p> : null}
      </div>

      <div>
        <Label
          htmlFor={`${source}-email`}
          className={inverted ? "text-white/80" : "text-[#332924]"}
        >
          E-mail
        </Label>
        <Input
          id={`${source}-email`}
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="voce@exemplo.com"
          autoComplete="email"
          className={inputClass}
        />
        {errors.email ? <p className="mt-1 text-xs text-red-500">{errors.email}</p> : null}
      </div>

      <div>
        <Label
          htmlFor={`${source}-phone`}
          className={inverted ? "text-white/80" : "text-[#332924]"}
        >
          WhatsApp
        </Label>
        <Input
          id={`${source}-phone`}
          inputMode="tel"
          value={phone}
          onChange={(event) => setPhone(maskPhone(event.target.value))}
          placeholder="(00) 00000-0000"
          autoComplete="tel"
          className={inputClass}
        />
        {errors.phone ? <p className="mt-1 text-xs text-red-500">{errors.phone}</p> : null}
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="h-12 w-full rounded-md bg-[#d8bc77] text-sm font-bold text-[#17120f] hover:bg-[#e3ca8c]"
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Quero receber o e-book"}
        {!loading ? <ArrowRight className="ml-2 h-4 w-4" /> : null}
      </Button>

      <p
        className={
          inverted
            ? "text-center text-[11px] leading-4 text-white/45"
            : "text-center text-[11px] leading-4 text-[#6d625c]"
        }
      >
        Seus dados serão usados para liberar o material e registrar seu interesse. Ao enviar, você
        concorda com a{" "}
        <a href="/privacidade" className="underline underline-offset-2">
          Política de Privacidade
        </a>
        .
      </p>
    </form>
  );
}

export function EbookLeadPage(props: EbookLeadPageProps) {
  if (props.variant === "dark") {
    return (
      <main className="min-h-screen bg-[#0d0c0b] text-white">
        <section className="min-h-screen overflow-hidden border-t-8 border-[#d8bc77]">
          <div className="mx-auto grid min-h-screen max-w-7xl gap-10 px-6 py-8 sm:px-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-start lg:px-14 lg:py-12">
            <div className="max-w-2xl">
              <img
                src="/trafego/brand/lecler-clinica-logo-white.png"
                alt="L'ECLER Saúde e Bem-Estar"
                className="h-auto w-36 object-contain sm:w-44"
              />

              <div className="mt-12 sm:mt-16 lg:mt-20">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d8bc77]">
                  Guia profissional gratuito
                </p>
                <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.03] tracking-[0] sm:text-5xl lg:text-6xl">
                  {props.title} <span className="text-[#d8bc77]">{props.highlightedTitle}</span>
                </h1>
                <p className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
                  {props.description}
                </p>

                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {props.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-sm leading-5 text-white/78"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#d8bc77]" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-5 lg:pt-8">
              <figure className="order-2 h-64 overflow-hidden border border-white/10 bg-[#171411] sm:h-72 lg:order-1 lg:h-80">
                <img
                  src={props.portraitImage}
                  alt="Dra. Cássia Blasques"
                  className="h-full w-full object-cover object-[center_18%]"
                />
              </figure>

              <div className="order-1 w-full border border-white/12 bg-[#171411] p-5 shadow-2xl sm:p-6 lg:order-2">
                <div className="mb-5 flex items-start gap-4">
                  <img
                    src={props.coverImage}
                    alt="Capa do e-book"
                    className="h-24 w-[68px] shrink-0 object-cover shadow-lg"
                  />
                  <div>
                    <h2 className="font-display text-2xl tracking-[0] text-white">
                      Acesse o guia completo
                    </h2>
                    <p className="mt-1 text-sm leading-5 text-white/58">
                      Preencha seus dados e faça o download na próxima página.
                    </p>
                  </div>
                </div>
                <LeadForm source={props.source} thankYouPath={props.thankYouPath} inverted />
              </div>
            </div>

            <p className="text-xs leading-5 text-white/40 lg:col-span-2">
              Conteúdo educativo para profissionais legalmente habilitados. Não substitui formação
              técnica, avaliação clínica ou treinamento supervisionado.
            </p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-[#241c18]">
      <section className="relative min-h-screen overflow-hidden border-t-8 border-[#92763d]">
        <div className="mx-auto grid min-h-screen max-w-7xl gap-10 px-6 py-8 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-14 lg:py-12">
          <div className="flex max-w-xl flex-col">
            <img src={leclerLogo} alt="L'ECLER Saúde e Bem-Estar" className="h-auto w-36 sm:w-44" />

            <div className="my-auto py-12 lg:py-16">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8a6c35]">
                Material para profissionais da HOF
              </p>
              <h1 className="mt-5 font-display text-4xl leading-[1.04] tracking-[0] sm:text-5xl lg:text-6xl">
                {props.title} <span className="text-[#8a6c35]">{props.highlightedTitle}</span>
              </h1>
              <p className="mt-6 text-base leading-7 text-[#635750] sm:text-lg">
                {props.description}
              </p>

              <ul className="mt-7 space-y-3">
                {props.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 text-sm leading-6 text-[#3f3530]"
                  >
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center bg-[#efe5cf] text-[#75591f]">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="mt-9 border-l-2 border-[#b59555] pl-4 text-sm leading-6 text-[#756961]">
                Conteúdo de apoio para transformar avaliação em prioridades, etapas e
                acompanhamento, sem substituir formação ou julgamento clínico.
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:pt-8">
            <figure className="order-2 h-64 overflow-hidden bg-[#f2ede6] sm:h-72 lg:order-1 lg:h-80">
              <img
                src={props.portraitImage}
                alt="Dra. Cássia Blasques"
                className="h-full w-full object-cover object-[center_16%]"
              />
            </figure>

            <div className="order-1 bg-[#faf8f4] p-5 shadow-[0_24px_80px_-28px_rgba(36,28,24,0.35)] sm:p-7 lg:order-2">
              <div className="mb-5 flex items-center justify-between gap-4 border-b border-[#332924]/10 pb-4">
                <div>
                  <h2 className="font-display text-2xl tracking-[0]">Receba o e-book</h2>
                  <p className="mt-1 text-sm text-[#6d625c]">Download liberado após o cadastro.</p>
                </div>
                <img
                  src={props.coverImage}
                  alt="Capa do e-book"
                  className="h-24 w-[68px] shrink-0 object-cover shadow-md"
                />
              </div>
              <LeadForm source={props.source} thankYouPath={props.thankYouPath} />
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs leading-5 text-[#756961] lg:col-span-2">
            <ShieldCheck className="h-4 w-4 shrink-0 text-[#8a6c35]" />
            Seus dados são registrados no ambiente seguro já utilizado pela L’Ecler e não são
            exibidos publicamente.
          </div>
        </div>
      </section>
    </main>
  );
}
