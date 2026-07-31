import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Sparkles,
  Crown,
  Gem,
  Star,
  Calendar,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  MessageCircle,
  Heart,
  ShieldCheck,
  ScanFace,
  Smile,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { openSignupDialog } from "@/lib/signup-dialog";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import heroImg from "@/assets/beautyweek-hero.jpg";
import cassiaWhite from "@/assets/cassia-white-suit.jpg.asset.json";
import cassiaBlack from "@/assets/cassia-black-portrait.jpg.asset.json";
import cassiaLounge from "@/assets/cassia-lounge.jpg.asset.json";
import cassiaSmile from "@/assets/cassia-smile.jpg.asset.json";
import clinicaRecepcao from "@/assets/clinica-recepcao.jpg.asset.json";
import clinicaEspera from "@/assets/clinica-espera.jpg.asset.json";
import clinicaConsultorio1 from "@/assets/clinica-consultorio1.jpg.asset.json";
import clinicaConsultorio2 from "@/assets/clinica-consultorio2.jpg.asset.json";

export const Route = createFileRoute("/beauty-week")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Beauty Week Aniversário L'ECLER — Tecnologias Exclusivas em Bragança Paulista" },
      {
        name: "description",
        content:
          "Última semana de agosto na Clínica L'ECLER. Clareamento + AIRFLOW em valores especiais de aniversário, HIPRO, Rádiofrequência Microagulhada Robótica e Laser de CO2 Híbrido. Reserve sua vaga para lotar a agenda.",
      },
      {
        property: "og:title",
        content: "Beauty Week Aniversário L'ECLER — Tecnologias Exclusivas",
      },
      {
        property: "og:description",
        content:
          "Última semana de agosto na Clínica L'ECLER. Clareamento + AIRFLOW em valores especiais de aniversário e as 3 tecnologias de ponta em harmonização e rejuvenescimento.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://l-ecler.lovable.app/beauty-week" }],
  }),
  component: BeautyWeekPage,
});

const floats = [
  { icon: Sparkles, top: "12%", left: "8%", delay: 0, size: 28 },
  { icon: Crown, top: "22%", right: "10%", delay: 0.6, size: 32 },
  { icon: Gem, top: "55%", left: "5%", delay: 1.2, size: 24 },
  { icon: Star, top: "70%", right: "8%", delay: 0.9, size: 26 },
  { icon: Heart, top: "38%", right: "18%", delay: 1.5, size: 22 },
  { icon: ShieldCheck, top: "82%", left: "12%", delay: 0.3, size: 28 },
];

const experiences = [
  {
    day: "Sorriso",
    title: "Clareamento + AIRFLOW",
    desc: "Avaliação odontológica completa com valores exclusivos de aniversário para clareamento dental e limpeza Airflow suíça.",
    icon: Smile,
  },
  {
    day: "Pele",
    title: "Rejuvenescimento",
    desc: "Botox, preenchimentos, fios e bioestímulo com foco em naturalidade, equilíbrio e resultado sem exageros.",
    icon: ScanFace,
  },
  {
    day: "Tecnologia",
    title: "Equipamentos de Ponta",
    desc: "HIPRO, Rádiofrequência Microagulhada Robótica e Laser de CO2 Híbrido disponíveis na clínica por tempo limitado.",
    icon: Gem,
  },
];

const highlights = [
  {
    title: "Clareamento Dental",
    desc: "Sorriso mais luminoso com valores exclusivos de aniversário e acompanhamento clínico completo.",
    icon: Smile,
  },
  {
    title: "AIRFLOW Suíço",
    desc: "Limpeza e prevenção confortável com tecnologia suíça de propilaxia para manter a saúde bucal.",
    icon: Sparkles,
  },
  {
    title: "Botox & Preenchimentos",
    desc: "Harmonização com toxina e preenchimentos para rejuvenescimento natural e equilibrado.",
    icon: ScanFace,
  },
  {
    title: "HIPRO",
    desc: "Tecnologia de ultrassom microfocado para lifting não cirúrgico e definição.",
    icon: Gem,
  },
  {
    title: "Rádiofrequência Microagulhada Robótica",
    desc: "Precisão robótica para estimular colágeno, melhorar textura e firmeza da pele.",
    icon: ShieldCheck,
  },
  {
    title: "Laser de CO2 Híbrido",
    desc: "Laser fracionado para rejuvenescimento, textura e tratamentos com recuperação controlada.",
    icon: Star,
  },
];

const benefits = [
  "Reserva da vaga para direcionar seu tratamento",
  "Clareamento dental + AIRFLOW em valores exclusivos de aniversário",
  "3 tecnologias exclusivas: HIPRO, RF Microagulhada Robótica e Laser CO2 Híbrido",
  "Atendimento com time selecionado pela Dra. Cássia",
  "Diagnóstico Online incluído para otimizar sua visita",
  "Ambiente premium e acolhedor em Bragança Paulista",
];

const schedule = [
  { time: "Passo 1", event: "Reserva pelo lead ou Diagnóstico Online" },
  { time: "Passo 2", event: "Triagem com o especialista certo para seu caso" },
  { time: "Passo 3", event: "Planejamento personalizado de sorriso, pele ou face" },
  { time: "Passo 4", event: "Aplicação do tratamento na semana de 24 a 30 de agosto" },
  { time: "Passo 5", event: "Acompanhamento pós-procedimento e próximos passos" },
];

const testimonials = [
  {
    name: "Ana Paula M.",
    role: "Paciente L'ECLER",
    text: "Saí com um plano completo para sorriso, pele e face. A equipe entendeu exatamente o que eu queria sem forçar nada.",
  },
  {
    name: "Fernanda R.",
    role: "Paciente L'ECLER",
    text: "A Beauty Week foi um presente. Atendimento delicado, ambiente lindo e resultados que superaram minha expectativa.",
  },
  {
    name: "Juliana C.",
    role: "Paciente L'ECLER",
    text: "Finalmente encontrei um lugar que entende naturalidade. Nada exagerado, só rejuvenescimento na medida certa.",
  },
];

const packages = [
  {
    name: "Sorriso",
    price: "valores especiais de aniversário",
    badge: "Mais procurado",
    items: ["Clareamento dental", "AIRFLOW suíço", "Avaliação odontológica completa", "Planejamento digital do sorriso"],
  },
  {
    name: "Pele & Contorno",
    price: "valores especiais de aniversário",
    badge: "Tecnologias exclusivas",
    items: ["Botox e preenchimentos", "HIPRO", "RF Microagulhada Robótica", "Laser de CO2 Híbrido"],
  },
];

const faq = [
  {
    q: "O que é a Beauty Week de Aniversário L'ECLER?",
    a: "É uma semana exclusiva de 24 a 30 de agosto de 2026 em comemoração ao aniversário da clínica. Teremos valores especiais de aniversário para clareamento dental + AIRFLOW e as 3 tecnologias de rejuvenescimento disponíveis na clínica, com vagas limitadas por dia.",
  },
  {
    q: "Como funciona a reserva de vaga?",
    a: "Você deixa seu contato pelo formulário ou Diagnóstico Online. Nossa equipe entra em contato para entender seu caso, apresentar as valores exclusivos de aniversário e confirmar seu horário na semana de 24 a 30 de agosto.",
  },
  {
    q: "Quais tecnologias estarão disponíveis?",
    a: "HIPRO, Rádiofrequência Microagulhada Robótica e Laser de CO2 Híbrido. As três estarão na clínica durante a semana de 24 a 30 de agosto para avaliações e aplicações.",
  },
  {
    q: "O Diagnóstico Online realmente funciona?",
    a: "Sim. Você envia fotos e preenche um formulário. Nossa equipe direciona sua visita para que o tempo na clínica seja 100% produtivo.",
  },
  {
    q: "Quem pode participar?",
    a: "Qualquer pessoa que busca cuidado multidisciplinar para sorriso, pele e face com naturalidade, segurança e tecnologia de ponta.",
  },
  {
    q: "Onde acontece o evento?",
    a: "Na Clínica L'ECLER, em Bragança Paulista — SP. Endereço completo é enviado após a confirmação da reserva.",
  },
];

function BeautyWeekPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Header />

      {/* HERO */}
      <section className="relative flex min-h-[92vh] items-center bg-gradient-to-br from-[#1a0f14] via-primary to-[#2d161f]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 20% 30%, rgba(201,168,76,0.25) 0%, transparent 45%), radial-gradient(circle at 80% 80%, rgba(212,175,55,0.18) 0%, transparent 50%)",
          }}
        />

        {floats.map((f, i) => (
          <motion.div
            key={i}
            className="pointer-events-none absolute z-10 hidden text-gold/60 md:block"
            style={{ top: f.top, left: f.left, right: f.right }}
            animate={{ y: [-8, 8, -8], rotate: [-4, 4, -4] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: f.delay }}
          >
            <f.icon size={f.size} strokeWidth={1.4} />
          </motion.div>
        ))}

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-24 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              <Sparkles className="h-3.5 w-3.5" /> Aniversário L'ECLER · 24 a 30 de agosto
            </span>

            <h1 className="mt-6 font-display text-5xl leading-[0.95] text-primary-foreground sm:text-6xl lg:text-7xl">
              BEAUTY
              <br />
              <span className="text-gradient-gold">WEEK</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-primary-foreground/80">
              Em comemoração ao aniversário da Clínica L'ECLER, preparamos uma semana exclusiva com
              clareamento dental + AIRFLOW em valores especiais de aniversário e as 3 tecnologias
              de harmonização e rejuvenescimento que estão mudando o mercado. Vagas limitadas por dia.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                onClick={openSignupDialog}
                className="group h-14 rounded-full bg-gradient-gold px-8 text-base font-semibold text-primary shadow-gold transition-transform hover:scale-[1.02]"
              >
                Quero reservar minha vaga
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <a href="#tratamentos">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 rounded-full border-primary-foreground/30 bg-transparent px-8 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Ver tratamentos
                </Button>
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 text-sm text-primary-foreground/70">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
                <Calendar className="h-4 w-4 text-gold" /> 24 a 30 de agosto de 2026
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
                <MapPin className="h-4 w-4 text-gold" /> Bragança Paulista — SP
              </span>
            </div>

            <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-gold/30 bg-gold/10 px-5 py-3 backdrop-blur-sm">
              <Calendar className="h-5 w-5 flex-none text-gold" />
              <p className="text-sm font-medium text-gold">
                Atenção: evento acontece exclusivamente na semana de <span className="font-bold">24 a 30 de agosto</span>. Vagas limitadas por dia.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-gold/20 via-transparent to-gold/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-elegant ring-1 ring-gold/30">
              <img
                src={heroImg}
                alt="Experiência Beauty Week na Clínica L'ECLER"
                width={1536}
                height={1024}
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            </div>

            <motion.div
              className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-gold/30 bg-primary/90 p-4 shadow-gold lg:block"
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/70">Vagas disponíveis</p>
                  <p className="font-display text-lg text-primary-foreground">Apenas 20 por dia</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="sobre" className="relative bg-secondary py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">A semana do aniversário</p>
            <h2 className="mt-3 font-display text-4xl text-primary sm:text-5xl">
              Uma semana para cuidar do sorriso, da pele e do <span className="text-gradient-gold">bem-estar</span>.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              A Beauty Week de Aniversário L'ECLER é para quem quer resultado sem abrir mão da naturalidade.
              De <strong>24 a 30 de agosto de 2026</strong>, nosso time multidisciplinar estará disponível para avaliar
              seu sorriso, sua pele e seu contorno — tudo em um só lugar, com tecnologia de ponta e
              valores especiais de aniversário.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              A entrada é a reserva da vaga. A partir dela, você entende quais tratamentos fazem sentido
              para o seu caso e agenda o que precisa para lotar a semana com resultados reais.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-gold/20 to-transparent blur-xl" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-elegant ring-1 ring-gold/20">
              <img
                src={cassiaLounge.url}
                alt="Dra. Cássia Blasques na Clínica L'ECLER"
                width={1280}
                height={1280}
                loading="lazy"
                className="aspect-square w-full object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* A CLÍNICA */}
      <section id="clinica" className="relative overflow-hidden bg-background py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">O espaço</p>
            <h2 className="mt-3 font-display text-4xl text-primary sm:text-5xl">
              Conheça a <span className="text-gradient-gold">Clínica L'ECLER</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Um ambiente pensado para o seu conforto em Bragança Paulista: recepção acolhedora,
              lounge de espera, salas privativas e consultórios equipados com tecnologia de ponta.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: clinicaRecepcao.url, alt: "Recepção e lounge da Clínica L'ECLER", label: "Recepção", span: "", ratio: "aspect-[4/3]" },
              { src: clinicaEspera.url, alt: "Área de atendimento e espera privativa", label: "Espaços privativos", span: "", ratio: "aspect-[4/3]" },
              { src: clinicaConsultorio1.url, alt: "Consultório odontológico da Clínica L'ECLER", label: "Consultório", span: "", ratio: "aspect-[4/3]" },
              { src: clinicaConsultorio2.url, alt: "Consultório com equipamentos de última geração", label: "Tecnologia de ponta", span: "", ratio: "aspect-[4/3]" },
            ].map((img, i) => (
              <motion.figure
                key={img.src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`group relative overflow-hidden rounded-[1.75rem] shadow-elegant ring-1 ring-gold/20 ${img.span}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className={`h-full w-full ${img.ratio} object-cover transition-transform duration-700 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                <figcaption className="absolute bottom-4 left-5 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground">
                  {img.label}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* DRA CÁSSIA */}
      <section className="relative overflow-hidden bg-background py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Quem conduz</p>
            <h2 className="mt-3 font-display text-4xl text-primary sm:text-5xl">
              Dra. <span className="text-gradient-gold">Cássia Blasques</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Referência em odontologia estética e harmonização em Bragança Paulista, a Dra. Cássia
              lidera o padrão técnico de todo o time da L'ECLER — e é ela quem supervisiona cada plano da
              Beauty Week.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {[
              { src: cassiaWhite.url, alt: "Dra. Cássia Blasques em terno branco" },
              { src: cassiaBlack.url, alt: "Retrato da Dra. Cássia Blasques" },
              { src: cassiaSmile.url, alt: "Dra. Cássia Blasques sorrindo" },
            ].map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative overflow-hidden rounded-[1.75rem] shadow-elegant ring-1 ring-gold/20"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* EXPERIENCES */}
      <section id="experiencias" className="relative bg-background py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Tratamentos da semana</p>
            <h2 className="mt-3 font-display text-4xl text-primary sm:text-5xl">Sorriso, pele e tecnologia</h2>
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-gold/15 bg-secondary p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-gold"
              >
                <div className="absolute right-4 top-4 text-gold/20 group-hover:text-gold/40">
                  <exp.icon size={64} strokeWidth={1} />
                </div>
                <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
                  {exp.day}
                </span>
                <h3 className="mt-4 font-display text-2xl text-primary">{exp.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section id="tratamentos" className="relative bg-primary py-24 text-primary-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.25) 0%, transparent 45%), radial-gradient(circle at 20% 90%, rgba(201,168,76,0.15) 0%, transparent 45%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">O que está incluso</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Tratamentos e tecnologias exclusivas</h2>
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-3xl border border-gold/20 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                  <h.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="beneficios" className="bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Por que participar</p>
              <h2 className="mt-3 font-display text-4xl text-primary sm:text-5xl">
                Reserva de vaga para lotar a agenda de <span className="text-gradient-gold">resultados reais</span>.
              </h2>
              <Button
                size="lg"
                onClick={openSignupDialog}
                className="group mt-8 h-13 rounded-full bg-gradient-gold px-8 text-base font-semibold text-primary shadow-gold transition-transform hover:scale-[1.02]"
              >
                Quero minha vaga
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-4"
            >
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-4 rounded-2xl border border-gold/10 bg-background p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                  <p className="text-base text-foreground">{b}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="agenda" className="relative bg-background py-24">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Como funciona</p>
            <h2 className="mt-3 font-display text-4xl text-primary sm:text-5xl">Da reserva ao resultado</h2>
          </motion.div>

          <div className="mt-14 space-y-0">
            {schedule.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative flex gap-6 border-l-2 border-gold/30 pb-10 pl-8 last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-gold bg-background" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
                  <span className="min-w-[4rem] font-display text-xl text-gold">{s.time}</span>
                  <p className="text-base text-foreground">{s.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Depoimentos</p>
            <h2 className="mt-3 font-display text-4xl text-primary sm:text-5xl">O que dizem nossos pacientes</h2>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-3xl border border-gold/10 bg-background p-7 shadow-soft"
              >
                <div className="flex gap-1 text-gold">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-gold" />
                  ))}
                </div>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">"{t.text}"</p>
                <div className="mt-6 border-t border-gold/10 pt-4">
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="investimento" className="relative bg-primary py-24 text-primary-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(201,168,76,0.25) 0%, transparent 45%), radial-gradient(circle at 70% 80%, rgba(201,168,76,0.15) 0%, transparent 45%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">valores especiais de aniversário</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Escolha seu foco na Beauty Week</h2>
          </motion.div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative overflow-hidden rounded-3xl border p-8 ${
                  pkg.name === "Sorriso"
                    ? "border-gold bg-gradient-to-b from-gold/20 to-gold/5 shadow-gold"
                    : "border-gold/20 bg-white/5"
                }`}
              >
                {pkg.name === "Sorriso" && (
                  <span className="absolute right-0 top-0 rounded-bl-2xl bg-gold px-4 py-1 text-xs font-semibold text-primary">
                    {pkg.badge}
                  </span>
                )}
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">{pkg.name}</p>
                <p className="mt-2 font-display text-4xl text-primary-foreground">{pkg.price}</p>
                <p className="text-xs text-primary-foreground/60">valores exclusivos de aniversário</p>
                <ul className="mt-6 space-y-3">
                  {pkg.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-primary-foreground/80">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={openSignupDialog}
                  className={`mt-8 h-12 w-full rounded-full font-semibold transition-transform hover:scale-[1.02] ${
                    pkg.name === "Sorriso"
                      ? "bg-gradient-gold text-primary shadow-gold"
                      : "border border-gold/40 bg-transparent text-gold hover:bg-gold/10"
                  }`}
                >
                  Quero reservar
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-secondary py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Tire suas dúvidas</p>
            <h2 className="mt-3 font-display text-4xl text-primary sm:text-5xl">Perguntas frequentes</h2>
          </motion.div>

          <div className="mt-14 space-y-4">
            {faq.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="overflow-hidden rounded-2xl border border-gold/10 bg-background"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <span className="font-display text-lg text-primary">{item.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-gold transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-base leading-relaxed text-muted-foreground">{item.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-gradient-cta py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(circle at 20% 30%, oklch(0.8 0.14 75) 0%, transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.7 0.13 60) 0%, transparent 50%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-4xl text-primary-foreground sm:text-5xl">
              Sua vaga na <span className="text-gradient-gold">Beauty Week</span> está esperando.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-primary-foreground/80">
              Vagas limitadas para a última semana de agosto. Reserve sua vaga agora e garanta seu
              lugar na agenda de aniversário da Clínica L'ECLER.
            </p>
            <Button
              size="lg"
              onClick={openSignupDialog}
              className="group mt-10 h-14 rounded-full bg-gradient-gold px-10 text-base font-semibold text-primary shadow-gold transition-transform hover:scale-[1.02]"
            >
              Quero reservar minha vaga
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-primary-foreground/70">
              <MessageCircle className="h-4 w-4" /> Nossa equipe entrará em contato pelo WhatsApp em até 24h.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
