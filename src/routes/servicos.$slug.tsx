import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getServiceBySlug, services, type Service } from "@/lib/services";
import { openSignupDialog } from "@/lib/signup-dialog";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import seniorSmileImg from "@/assets/smile-senior-natural.jpg";
import implantSmileImg from "@/assets/smile-implants-clean.jpg";
import digitalScanImg from "@/assets/clinic-digital-scan.jpg";
import consultationImg from "@/assets/home-consultation.jpg";
import heroSmileImg from "@/assets/hero-smile.jpg";
import leclerSymbolImg from "@/assets/lecler-symbol.png";
import airflowImg from "@/assets/airflow-prophylaxis-master.jpg";
import invisalignHeroImg from "@/assets/invisalign-aligners-hero.webp";
import invisalignLogoImg from "@/assets/invisalign-logo-aligner.jpeg";
import invisalignSmileBlueImg from "@/assets/invisalign-smile-blue.jpeg";
import invisalignDoctorAlignerImg from "@/assets/invisalign-doctor-aligner.jpeg";

export const Route = createFileRoute("/servicos/$slug")({
  head: ({ params }) => {
    const s = getServiceBySlug(params.slug);
    const title = s ? `${s.title} — Clínica L'ECLER` : "Tratamento — Clínica L'ECLER";
    const description = s?.hero ?? "Tratamento na Clínica L'ECLER.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ServicePage,
});

const dentalProofs = [
  {
    image: seniorSmileImg,
    title: "Sorrisos que devolvem segurança",
    text: "Estética, função e conforto pensados para a vida real, não só para a foto.",
  },
  {
    image: implantSmileImg,
    title: "Reabilitação e implantes",
    text: "Função, estética e segurança para quem quer voltar a sorrir e mastigar com confiança.",
  },
  {
    image: digitalScanImg,
    title: "Planejamento digital",
    text: "Fotos, escaneamento e simulação ajudam a visualizar possibilidades com mais clareza.",
  },
];

const aestheticProofs = [
  {
    image: heroSmileImg,
    title: "Naturalidade como direção",
    text: "O rosto é avaliado em proporção, expressão e identidade antes de qualquer indicação.",
  },
  {
    image: consultationImg,
    title: "Conversa técnica",
    text: "A Dra. Cássia explica prioridades, limites e caminhos possíveis para cada caso.",
  },
  {
    image: seniorSmileImg,
    title: "Resultado elegante",
    text: "O objetivo é que o cuidado apareça como leveza, saúde e segurança ao sorrir.",
  },
];

const invisalignProofs = [
  {
    image: invisalignSmileBlueImg,
    title: "Alinhadores transparentes",
    text: "Uma solução discreta para alinhar o sorriso sem comprometer rotina, fala ou imagem profissional.",
  },
  {
    image: invisalignDoctorAlignerImg,
    title: "Planejamento acompanhado",
    text: "O caso é conduzido com avaliação técnica, sequência de alinhadores e ajustes de acompanhamento.",
  },
  {
    image: invisalignLogoImg,
    title: "Invisalign Doctor",
    text: "A L'ECLER é uma clínica credenciada para planejar casos com a tecnologia Invisalign.",
  },
  {
    image: invisalignHeroImg,
    title: "Uso no dia a dia",
    text: "Os alinhadores são removíveis, o que facilita alimentação, higiene e rotina social.",
  },
];

const treatmentHeroVisuals: Record<
  string,
  { image: string; alt: string; objectPosition?: string }
> = {
  "odontologia-estetica": {
    image: seniorSmileImg,
    alt: "Sorriso natural em destaque para odontologia estética",
    objectPosition: "center",
  },
  implantes: {
    image: implantSmileImg,
    alt: "Sorriso reabilitado simbolizando tratamento com implantes",
    objectPosition: "center 35%",
  },
  proteses: {
    image: seniorSmileImg,
    alt: "Sorriso maduro e natural simbolizando próteses odontológicas",
    objectPosition: "center",
  },
  "facetas-e-lentes-de-contato": {
    image: seniorSmileImg,
    alt: "Sorriso harmônico simbolizando facetas e lentes de contato dental",
    objectPosition: "center",
  },
  "ortodontia-invisalign": {
    image: invisalignSmileBlueImg,
    alt: "Alinhador transparente Invisalign no sorriso",
    objectPosition: "center",
  },
  endodontia: {
    image: digitalScanImg,
    alt: "Tecnologia odontológica simbolizando endodontia",
    objectPosition: "center",
  },
  "odontologia-preventiva-integrativa": {
    image: airflowImg,
    alt: "Tecnologia de prevenção odontológica Airflow",
    objectPosition: "center",
  },
  "airflow-prevencao-suica": {
    image: airflowImg,
    alt: "Airflow Prophylaxis Master para prevenção suíça",
    objectPosition: "center",
  },
  "botox-e-preenchimentos": {
    image: consultationImg,
    alt: "Avaliação facial simbolizando botox, preenchimentos e reestruturação",
    objectPosition: "center 35%",
  },
  "fios-e-bioestimulo": {
    image: heroSmileImg,
    alt: "Rosto natural simbolizando lifting com fios faciais",
    objectPosition: "center 35%",
  },
  "gerenciamento-dermico": {
    image: consultationImg,
    alt: "Consulta estética simbolizando biorregeneração e bioestimulação",
    objectPosition: "center 35%",
  },
  "laser-co2-e-hipro": {
    image: heroSmileImg,
    alt: "Rosto com aparência natural simbolizando tecnologias de rejuvenescimento",
    objectPosition: "center 35%",
  },
};

function TreatmentProofSection({ service }: { service: Service }) {
  const isDental = service.category === "Odontologia";
  const isInvisalign = service.slug === "ortodontia-invisalign";
  const proofItems = isInvisalign ? invisalignProofs : isDental ? dentalProofs : aestheticProofs;
  const proofTitle = isInvisalign
    ? "Invisalign, simulação e evolução do sorriso"
    : isDental
      ? "Sorrisos, antes/depois e planejamento"
      : "Registros, naturalidade e plano";
  const proofText = isInvisalign
    ? "Em Invisalign, a conversa precisa mostrar mais do que a promessa de dentes alinhados. A equipe apresenta imagens, planejamento digital, referências e etapas para você entender se o alinhador faz sentido para o seu caso."
    : `Em ${service.title}, a conversa não fica só na explicação técnica. A equipe usa fotos, referências, diagnóstico e registros autorizados para mostrar caminhos possíveis com mais clareza.`;

  return (
    <section id="prova-visual" className="bg-secondary/35 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Prova visual
            </span>
            <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
              {proofTitle}{" "}
              <span className="text-gradient-gold">antes da decisão</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              {proofText}
            </p>
            <div className="relative mt-7 overflow-hidden rounded-[1.5rem] border border-gold/30 bg-card p-5 shadow-soft">
              <img
                src={leclerSymbolImg}
                alt=""
                aria-hidden="true"
                className="absolute -right-5 -top-5 h-28 w-auto opacity-10"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                Antes/depois reais, quando autorizados
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Casos clínicos de pacientes não são usados como promessa de resultado igual.
                Eles servem para orientar a conversa, comparar situações semelhantes e ajudar
                você a entender o padrão de cuidado da L'ECLER.
              </p>
            </div>
          </div>

          <div className={isInvisalign ? "grid gap-4 sm:grid-cols-2" : "grid gap-4 sm:grid-cols-3"}>
            {proofItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-soft"
              >
                <div className={isInvisalign ? "aspect-[16/10] overflow-hidden bg-cream" : "aspect-[4/5] overflow-hidden bg-cream"}>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    width={isInvisalign ? 1200 : 800}
                    height={isInvisalign ? 750 : 1000}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg leading-tight">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {isInvisalign && (
          <div className="mt-8 overflow-hidden rounded-[2rem] border border-gold/25 bg-card shadow-elegant lg:grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="aspect-[16/9] overflow-hidden bg-cream lg:aspect-auto">
              <img
                src={invisalignHeroImg}
                alt="Alinhador transparente Invisalign sendo encaixado no sorriso"
                loading="lazy"
                width={1600}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                Clínica credenciada Invisalign Doctor
              </p>
              <h3 className="mt-3 font-display text-2xl leading-tight sm:text-3xl">
                Alinhe o sorriso com discrição, previsibilidade e acompanhamento próximo.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                A avaliação mostra se o seu caso pode ser conduzido com alinhadores
                transparentes, qual sequência faz sentido e como o tratamento conversa com
                estética, mordida e saúde bucal.
              </p>
              <button
                onClick={() => openSignupDialog()}
                className="mt-6 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-primary shadow-gold transition-transform hover:scale-[1.02]"
              >
                Quero avaliar meu caso <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        <div className="relative mt-8 grid gap-4 overflow-hidden rounded-[2rem] border border-gold/25 bg-primary p-5 text-primary-foreground shadow-elegant sm:grid-cols-3 lg:p-7">
          <img
            src={leclerSymbolImg}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 h-40 w-auto opacity-10"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          {[
            ["01", "Ponto de partida", "O que incomoda, o que precisa ser tratado antes e quais limites o caso apresenta."],
            ["02", "Simulação e referências", "Fotos, mock-up ou planejamento digital ajudam a enxergar proporção e naturalidade."],
            ["03", "Plano seguro", "A decisão considera estética, função, saúde bucal e manutenção do resultado."],
          ].map(([number, title, text]) => (
            <div key={number} className="rounded-[1.25rem] border border-primary-foreground/12 bg-primary-foreground/[0.06] p-5">
              <div className="font-display text-3xl text-gold">{number}</div>
              <h3 className="mt-2 font-display text-xl">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/72">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicePage() {
  const { slug } = Route.useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex min-h-[70vh] items-center justify-center px-6 text-center">
          <div>
            <h1 className="font-display text-4xl">Tratamento não encontrado</h1>
            <p className="mt-3 text-sm text-muted-foreground">
              O link acessado não corresponde a um tratamento disponível.
            </p>
            <Link to="/" className="mt-6 inline-block text-gold underline">
              Voltar à home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const treatmentVisual =
    treatmentHeroVisuals[service.slug] ?? treatmentHeroVisuals["odontologia-estetica"];
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-secondary/40 via-background to-background" />
        <div className="absolute -top-32 -right-32 -z-10 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex rounded-full border border-gold/30 bg-card px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                {service.category}
              </span>
            </div>
            <h1 className="mt-5 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              {service.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-gradient-gold">
                {service.title.split(" ").slice(-1)}
              </span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">{service.hero}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => openSignupDialog()}
                className="inline-flex max-w-full items-center justify-center gap-2 whitespace-normal rounded-full bg-gradient-gold px-6 py-3 text-center text-sm font-semibold leading-snug text-primary shadow-gold transition-transform hover:scale-[1.02] sm:px-7"
              >
                Quero conversar sobre este tratamento <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="#beneficios"
                className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:border-gold/40"
              >
                Ver benefícios
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-card p-10 shadow-gold">
              <div className="relative h-28 w-28 overflow-hidden rounded-2xl border border-gold/35 bg-secondary shadow-elegant">
                <img
                  src={treatmentVisual.image}
                  alt={treatmentVisual.alt}
                  width={420}
                  height={420}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: treatmentVisual.objectPosition ?? "center" }}
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/35" />
              </div>
              <p className="mt-6 font-display text-2xl leading-snug text-foreground">
                "{service.tagline}"
              </p>
              <div className="mt-6 border-t border-border/60 pt-5 text-sm text-muted-foreground">
                A indicação certa começa na conversa, não em um protocolo pronto.
              </div>
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-gold/10 blur-3xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Sobre o tratamento
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              Entenda como funciona{" "}
              <span className="text-gradient-gold">na L'ECLER</span>
            </h2>
          </div>
          <div className="space-y-5 text-muted-foreground">
            {service.longDescription.map((p, i) => (
              <p key={i} className="leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </section>

      <TreatmentProofSection service={service} />

      {/* INDICAÇÕES */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Para quem é
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              Indicações
            </h2>
            <p className="mt-3 text-muted-foreground">
              Este tratamento costuma ser indicado para os seguintes perfis. A equipe avalia
              cada caso individualmente e orienta o melhor próximo passo.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {service.indications.map((ind) => (
              <div
                key={ind}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-soft"
              >
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-gradient-gold text-primary">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm text-foreground">{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section id="beneficios" className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Benefícios
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              Por que escolher{" "}
              <span className="text-gradient-gold">{service.title}</span> na L'ECLER
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.07 }}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-gold"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-gold text-primary">
                  <Check className="h-5 w-5" strokeWidth={2.5} />
                </div>
                <h3 className="font-display text-lg">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Método L'ECLER
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              Passo a passo do{" "}
              <span className="text-gradient-gold">seu atendimento</span>
            </h2>
          </div>
          <ol className="mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
            {service.process.map((step, i) => (
              <li
                key={step.title}
                className="relative rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <div className="font-display text-3xl text-gradient-gold">
                  0{i + 1}
                </div>
                <h3 className="mt-2 font-display text-base">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* DIFERENCIAIS + RESULTADOS */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Diferenciais
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              O padrão <span className="text-gradient-gold">L'ECLER</span>
            </h2>
            <ul className="mt-6 space-y-4">
              {service.differentials.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm text-foreground">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-gradient-gold text-primary">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Resultados esperados
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              O que você pode <span className="text-gradient-gold">esperar</span>
            </h2>
            <ul className="mt-6 space-y-4">
              {service.results.map((r) => (
                <li key={r} className="flex items-start gap-3 text-sm text-foreground">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-gradient-gold text-primary">
                    <Sparkles className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <span className="leading-relaxed">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Perguntas frequentes
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              Tudo o que você quer saber sobre{" "}
              <span className="text-gradient-gold">{service.title}</span>
            </h2>
          </div>
          <Accordion type="single" collapsible className="mt-10">
            {service.faq.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-display text-base hover:text-gold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-card via-card to-secondary p-10 text-center shadow-gold sm:p-14">
            <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-background px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Agendamento orientado
            </span>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl">
              Quer saber se{" "}
              <span className="text-gradient-gold">{service.title}</span> é para você?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Fale com nosso time, conte o que te incomoda e receba um direcionamento inicial
              antes de avançar para a avaliação presencial.
            </p>
            <button
              onClick={() => openSignupDialog()}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-8 py-3 text-sm font-semibold text-primary shadow-gold transition-transform hover:scale-[1.02]"
            >
              Quero orientação <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* OUTROS TRATAMENTOS */}
      <section className="border-t border-border/60 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between gap-4">
            <h3 className="font-display text-2xl">Outros tratamentos</h3>
            <Link to="/" className="text-sm text-gold hover:underline">
              Ver todos →
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => {
              const OIcon = s.icon;
              return (
                <Link
                  key={s.slug}
                  to="/servicos/$slug"
                  params={{ slug: s.slug }}
                  className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-gold"
                >
                  <div className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gradient-gold text-primary">
                    <OIcon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h4 className="font-display text-base text-foreground">{s.title}</h4>
                    <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{s.tagline}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
