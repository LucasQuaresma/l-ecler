import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  GraduationCap, Sparkles, ArrowRight, Check, Syringe, Layers,
  Wand2, Droplets, Award, Microscope, Users, Globe, Star,
  Calendar, MapPin, Clock, BookOpen, Quote, ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { openSignupDialog } from "@/lib/signup-dialog";
import heroImg from "@/assets/academy-hero.jpg";
import mentorImg from "@/assets/academy-mentor.jpg";
import toolsImg from "@/assets/academy-tools.jpg";
import doctorImg from "@/assets/academy-doctor.jpg";
import academyLogo from "@/assets/lecler-academy-logo.png";

export const Route = createFileRoute("/academy")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "L'ECLER Academy, Formação em Harmonização Orofacial" },
      {
        name: "description",
        content:
          "Habilitação, atualização e Residência Completa em Harmonização Orofacial com a Dra. Cássia Blasques. Prática real com pacientes modelo, ciência aprofundada e mentoria.",
      },
      { property: "og:title", content: "L'ECLER Academy, Formação em Harmonização Orofacial" },
      {
        property: "og:description",
        content:
          "Cursos de habilitação e atualização em HOF, reunidos na Residência Completa. Toxina, BIOFACES, Full Threads, Full Face e LIPS Advanced.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: AcademyPage,
});

const pilares = [
  { n: "01", icon: Syringe, title: "Toxina Botulínica", text: "Domínio das técnicas modernas: doses, pontos seguros e leitura facial dinâmica, do iniciante ao avançado." },
  { n: "02", icon: Microscope, title: "BIOFACES", text: "Bioestimuladores e biorregeneradores: PDRN, polinucleotídeos, peptídeos, exossomos e enzimas recombinantes." },
  { n: "03", icon: Layers, title: "Full Threads", text: "Fios faciais com uma das maiores referências nacionais do Brasil: vetores, planejamento e segurança." },
  { n: "04", icon: Wand2, title: "Full Face", text: "Preenchimentos faciais com leitura de terços, projeção e harmonia global do rosto." },
  { n: "05", icon: Droplets, title: "LIPS Advanced", text: "Tratamentos labiais e periorais, desenho, projeção, função e estética em alta performance." },
];

const trilha = [
  { tag: "Iniciante", title: "Habilitação", text: "Base sólida, técnica e científica para iniciar com segurança em HOF.", price: "Por módulo" },
  { tag: "Atualização", title: "Imersões", text: "Para quem já atua e quer dominar bioestimuladores, peptídeos, fios e novas tecnologias.", price: "Por imersão" },
  { tag: "Residência", title: "Residência Completa", text: "A formação ampla e intensiva que reúne todos os pilares para quem quer dominar a linha inteira.", price: "Condição diferenciada", highlight: true },
];

const cronograma = [
  { fase: "Fase 01", title: "Fundamentos & Anatomia", text: "Anatomia funcional, planos faciais, leitura dinâmica e mecanismos de ação das principais substâncias." },
  { fase: "Fase 02", title: "Teoria com Profundidade", text: "Estudos multicêntricos, indicações, contraindicações, manejo de complicações e protocolos individualizados." },
  { fase: "Fase 03", title: "Demonstração ao Vivo", text: "Você observa cada técnica sendo executada pela Dra. Cássia em paciente modelo, com discussão em tempo real." },
  { fase: "Fase 04", title: "Prática Supervisionada", text: "Você aplica em paciente modelo real, sob mentoria direta. Não é manequim. Não é simulação." },
  { fase: "Fase 05", title: "Mentoria Pós-Curso", text: "Acompanhamento dos seus primeiros casos clínicos depois da formação, você não fica sozinho." },
];

const stats = [
  { v: "Desde 2012", l: "em HOF" },
  { v: "5", l: "pilares técnicos" },
  { v: "100%", l: "prática real" },
  { v: "1:1", l: "mentoria próxima" },
];

const depoimentos = [
  { name: "Dra. Marina P.", role: "Cirurgiã-dentista · SP", text: "Saí do curso aplicando com segurança no consultório na segunda-feira seguinte. A profundidade científica é o que diferencia." },
  { name: "Dr. Rafael T.", role: "HOF · MG", text: "Já tinha feito outros cursos. Aqui foi a primeira vez que entendi o porquê de cada decisão clínica, não só o passo a passo." },
  { name: "Dra. Letícia M.", role: "Dentista · RJ", text: "A turma pequena fez toda a diferença. Dra. Cássia acompanhou cada aplicação minha. Mentoria de verdade." },
];

const faqs = [
  { q: "Tem prática real com paciente?", a: "Sim. A prática é em ambiente clínico em funcionamento, com pacientes modelo reais. Você não sai daqui sem ter aplicado." },
  { q: "Preciso já atuar em HOF para fazer?", a: "Não. Temos a trilha de Habilitação para quem está começando e a de Atualização/Residência para quem já atua." },
  { q: "Quem pode se inscrever?", a: "Cirurgiões-dentistas, médicos e demais profissionais da saúde habilitados a atuar em harmonização facial, dentro do escopo de cada conselho." },
  { q: "Como funciona a Residência Completa?", a: "É a formação ampla que reúne todos os pilares, Toxina, BIOFACES, Full Threads, Full Face e LIPS Advanced, com condição diferenciada em relação aos cursos isolados." },
  { q: "Tem suporte depois que o curso termina?", a: "Sim. Mentoria pós-curso para os primeiros casos é parte da nossa proposta, você não fica sozinho." },
  { q: "As vagas são limitadas?", a: "Sim. Turmas pequenas são parte do método: garantem mentoria próxima e prática individualizada com a Dra. Cássia." },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function AcademyPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-hero pt-10 pb-24 sm:pt-16 sm:pb-32">
        {/* Floating blobs */}
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        />

        <div className="relative mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={academyLogo}
              alt="L'ECLER Academy"
              width={329}
              height={322}
              className="mb-6 h-24 w-auto"
            />
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-cream px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary shadow-soft">
              <GraduationCap className="h-3.5 w-3.5 text-gold" />
              L'ECLER Academy · Vagas limitadas
            </div>

            <h1 className="mt-6 font-display text-[2.5rem] leading-[1.02] sm:text-6xl lg:text-7xl">
              <span className="block">Forme-se em</span>
              <span className="block text-gradient-gold italic">Harmonização</span>
              <span className="block">Orofacial.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Habilitação, atualização e <strong className="text-foreground">Residência Completa</strong> em HOF. Cinco pilares,
              turmas pequenas, prática com paciente modelo dentro de uma clínica
              multidisciplinar em funcionamento real, sob mentoria direta da
              <strong className="text-foreground"> Dra. Cássia Blasques</strong>.
            </p>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <Button
                size="lg"
                onClick={openSignupDialog}
                className="group h-12 rounded-full bg-gradient-gold px-7 text-base font-semibold text-primary shadow-gold hover:scale-[1.02] transition-transform"
              >
                Garantir minha vaga
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo("pilares")}
                className="h-12 rounded-full border-primary/20 bg-transparent px-7 text-base font-medium text-primary hover:bg-secondary"
              >
                Ver os 5 pilares
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
              {stats.map((s) => (
                <div key={s.l} className="border-l-2 border-gold/60 pl-3">
                  <div className="font-display text-2xl text-foreground">{s.v}</div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hero image with floats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-gold/30 shadow-elegant">
              <img src={heroImg} alt="Prática em harmonização orofacial na L'ECLER Academy" className="h-full w-full object-cover" width={1024} height={1536} />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>

            {/* Float: badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -left-5 sm:-left-10 rounded-2xl bg-cream border border-gold/30 px-4 py-3 shadow-elegant"
            >
              <div className="flex items-center gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-gold text-primary">
                  <Award className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-display text-sm text-foreground">Harvard · Yonsei</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Formação internacional</div>
                </div>
              </div>
            </motion.div>

            {/* Float: rating */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 sm:-right-8 rounded-2xl bg-primary text-primary-foreground px-4 py-3 shadow-elegant"
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />)}
                </div>
                <div className="text-xs"><strong>+500</strong> alunos formados</div>
              </div>
            </motion.div>

            {/* Float: live tag */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -right-6 hidden md:flex items-center gap-2 rounded-full bg-cream/95 backdrop-blur px-3 py-1.5 shadow-soft border border-gold/30"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-gold/70" />
                <span className="relative inline-block h-2 w-2 rounded-full bg-gold" />
              </span>
              <span className="text-[11px] font-medium uppercase tracking-wider text-primary">Próxima turma aberta</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== MARQUEE STRIP ===== */}
      <section className="border-y border-gold/20 bg-primary text-primary-foreground overflow-hidden">
        <div className="flex gap-12 py-4 whitespace-nowrap animate-[scroll_30s_linear_infinite] [--tw-translate-x:0]">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex shrink-0 items-center gap-12">
              {["Toxina Botulínica", "BIOFACES", "Full Threads", "Full Face", "LIPS Advanced", "Residência Completa", "Mentoria 1:1", "Paciente Modelo Real"].map((w) => (
                <span key={w} className="flex items-center gap-3 text-sm uppercase tracking-[0.2em]">
                  <Sparkles className="h-3 w-3 text-gold" />
                  {w}
                </span>
              ))}
            </div>
          ))}
        </div>
        <style>{`@keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
      </section>

      {/* ===== TRILHA ===== */}
      <section className="relative py-24 sm:py-32">
        <div className="pointer-events-none absolute top-20 right-10 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Três trilhas, um padrão</div>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl leading-[1.05]">
                Escolha o seu <span className="italic text-gradient-gold">ponto de partida</span>
              </h2>
            </div>
            <p className="max-w-sm text-muted-foreground">
              Da habilitação inicial à Residência Completa, todas com o mesmo nível
              de exigência técnica e científica.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {trilha.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group relative rounded-3xl border p-8 shadow-soft transition-all hover:-translate-y-2 hover:shadow-elegant ${
                  t.highlight
                    ? "border-gold bg-gradient-to-br from-cream to-background shadow-gold"
                    : "border-border bg-card hover:border-gold/40"
                }`}
              >
                {t.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary shadow-gold">
                    Mais completa
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">{t.tag}</span>
                  <Award className="h-5 w-5 text-gold/60" />
                </div>
                <h3 className="mt-6 font-display text-3xl">{t.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t.text}</p>
                <div className="mt-8 pt-6 border-t border-border/60 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">{t.price}</span>
                  <ChevronRight className="h-5 w-5 text-gold transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PILARES (com imagem) ===== */}
      <section id="pilares" className="relative bg-secondary/40 py-24 sm:py-32 overflow-hidden">
        <div className="pointer-events-none absolute -left-20 top-40 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            {/* Image stack */}
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-gold/30 shadow-elegant">
                <img src={toolsImg} alt="Materiais e protocolos do curso" loading="lazy" className="h-full w-full object-cover" width={1280} height={1600} />
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -right-4 sm:-right-12 w-56 rounded-2xl bg-cream border border-gold/30 p-5 shadow-elegant"
              >
                <BookOpen className="h-5 w-5 text-gold" />
                <div className="mt-2 font-display text-lg leading-tight">Material clínico premium incluso</div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">Para todas as práticas</div>
              </motion.div>
              <div className="pointer-events-none absolute -top-6 -left-6 h-24 w-24 rounded-full border border-gold/40" />
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Os 5 pilares</div>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl leading-[1.05]">
                O conteúdo que forma um <span className="italic text-gradient-gold">especialista completo</span>
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Teoria com profundidade científica e prática com paciente modelo em cada pilar.
              </p>

              <div className="mt-10 space-y-3">
                {pilares.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <motion.div
                      key={p.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="group flex items-start gap-5 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:border-gold/50 hover:shadow-elegant hover:-translate-y-0.5"
                    >
                      <div className="font-display text-2xl text-gold/70 w-10">{p.n}</div>
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-gold text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-lg">{p.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CRONOGRAMA / METODOLOGIA ===== */}
      <section className="relative py-24 sm:py-32">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Como funciona</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl leading-[1.05]">
              Cinco fases de uma <span className="italic text-gradient-gold">formação real</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Um percurso desenhado para levar você da teoria à demonstração, da prática supervisionada ao consultório.
            </p>
          </div>

          <div className="mt-16 relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/0 via-gold/50 to-gold/0" />
            <div className="space-y-12">
              {cronograma.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`relative grid gap-6 sm:grid-cols-2 sm:gap-12 items-center ${i % 2 ? "sm:[&>*:first-child]:order-2" : ""}`}
                >
                  <div className={`pl-12 sm:pl-0 ${i % 2 ? "sm:pl-12 sm:text-left" : "sm:pr-12 sm:text-right"}`}>
                    <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold">{c.fase}</div>
                    <h3 className="mt-2 font-display text-2xl sm:text-3xl">{c.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.text}</p>
                  </div>
                  <div className="hidden sm:block" />
                  <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 top-0 grid h-9 w-9 place-items-center rounded-full bg-gradient-gold text-primary font-display text-sm shadow-gold ring-4 ring-background">
                    {i + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== DRA. CÁSSIA (com foto) ===== */}
      <section className="relative bg-gradient-hero py-24 sm:py-32 overflow-hidden">
        <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative">
            <div className="relative aspect-[3/4] max-w-md mx-auto overflow-hidden rounded-[2rem] border border-gold/40 shadow-elegant">
              <img src={doctorImg} alt="Dra. Cássia Blasques" loading="lazy" className="h-full w-full object-cover" width={1024} height={1536} />
            </div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-6 -left-2 sm:-left-8 rounded-2xl bg-cream border border-gold/30 px-4 py-3 shadow-elegant"
            >
              <Quote className="h-4 w-4 text-gold" />
              <div className="mt-1 max-w-[180px] text-xs leading-snug text-foreground">
                "Técnica sem ciência é receita. Ciência sem prática é teoria."
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-8 -right-2 sm:-right-8 rounded-2xl bg-primary text-primary-foreground px-4 py-3 shadow-elegant"
            >
              <div className="text-[10px] uppercase tracking-wider opacity-80">Referência nacional</div>
              <div className="font-display text-base">Fios Faciais · Brasil</div>
            </motion.div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Quem ensina</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl leading-[1.05]">
              Dra. <span className="italic text-gradient-gold">Cássia Blasques</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Cirurgiã-dentista desde 1998, especialista em Harmonização Orofacial desde
              2012 e referência nacional em Fios Faciais no Brasil. Formação
              internacional em Harvard (MARC, Boston), Yonsei University (Coreia do Sul),
              Suíça e Itália. Especialista científica da equipe de Speakers da Vida Bela Med,
              organizadora do primeiro congresso exclusivo de fios faciais do Brasil e
              fundadora da L'ECLER Academy.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { icon: Globe, label: "Harvard · Yonsei · Suíça · Itália" },
                { icon: Star, label: "Referência nacional em Fios Faciais" },
                { icon: Users, label: "Especialista científica internacional" },
                { icon: Award, label: "Fundadora da L'ECLER Academy" },
              ].map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.label} className="flex items-start gap-3 rounded-xl border border-gold/20 bg-card/80 backdrop-blur p-4">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <span className="text-xs text-foreground leading-snug">{c.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPERIÊNCIA NA CLÍNICA (split image) ===== */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Dentro de uma clínica real</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl leading-[1.05]">
              Você aprende <span className="italic text-gradient-gold">onde se atende</span>, não em manequim.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              A L'ECLER Academy acontece dentro de uma clínica multidisciplinar em
              funcionamento real. Você convive com o fluxo clínico, observa decisões em
              tempo real e aplica com paciente modelo sob mentoria direta da Dra. Cássia.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Turmas reduzidas, mentoria 1:1 garantida",
                "Pacientes modelo reais em todas as práticas",
                "Acesso a substâncias e protocolos de ponta",
                "Discussão de casos clínicos em tempo real",
                "Suporte continuado nos seus primeiros atendimentos",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <div className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-gold text-primary">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="text-sm text-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-gold/30 shadow-elegant">
              <img src={mentorImg} alt="Aula prática com a Dra. Cássia" loading="lazy" className="h-full w-full object-cover" width={1536} height={1024} />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent" />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-4 sm:-left-10 rounded-2xl bg-cream border border-gold/30 p-4 shadow-elegant"
            >
              <Users className="h-5 w-5 text-gold" />
              <div className="mt-1 font-display text-lg leading-tight">Turmas<br/>de até 8 alunos</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 right-4 sm:-right-6 rounded-2xl bg-primary text-primary-foreground p-4 shadow-elegant max-w-[200px]"
            >
              <Clock className="h-5 w-5 text-gold" />
              <div className="mt-1 font-display text-base leading-tight">Imersão intensiva, prática real desde o dia 1</div>
            </motion.div>
            <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full border border-gold/40" />
          </div>
        </div>
      </section>

      {/* ===== DEPOIMENTOS ===== */}
      <section className="relative bg-secondary/40 py-24 sm:py-32 overflow-hidden">
        <div className="pointer-events-none absolute -right-20 top-20 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Quem já passou pela Academy</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl leading-[1.05]">
              Profissionais que saíram <span className="italic text-gradient-gold">aplicando de verdade</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {depoimentos.map((d, i) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative rounded-3xl border border-border bg-card p-7 shadow-soft hover:shadow-elegant hover:border-gold/40 transition-all"
              >
                <Quote className="absolute -top-3 left-7 h-8 w-8 text-gold bg-card rounded-full p-1.5 border border-gold/30" />
                <div className="flex">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-3.5 w-3.5 fill-gold text-gold" />)}
                </div>
                <p className="mt-4 text-sm text-foreground leading-relaxed italic">"{d.text}"</p>
                <div className="mt-6 pt-5 border-t border-border/60">
                  <div className="font-display text-base">{d.name}</div>
                  <div className="text-xs text-muted-foreground">{d.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRÓXIMA TURMA ===== */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-gold/30 bg-gradient-hero p-10 sm:p-14 shadow-elegant">
            <div className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
            <div className="relative grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Próxima turma</div>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl leading-tight">
                  Vagas limitadas. <span className="italic text-gradient-gold">Mentoria individualizada garantida.</span>
                </h2>
                <div className="mt-6 flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-gold" /> Próxima turma abrindo</div>
                  <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> Clínica L'ECLER</div>
                  <div className="flex items-center gap-2"><Users className="h-4 w-4 text-gold" /> Até 8 alunos</div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Button
                  size="lg"
                  onClick={openSignupDialog}
                  className="h-12 rounded-full bg-gradient-gold px-7 text-base font-semibold text-primary shadow-gold hover:scale-[1.02] transition-transform"
                >
                  Garantir minha vaga
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Condição de matrícula exclusiva pela página.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-secondary/40 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Dúvidas frequentes</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">
              Antes de garantir sua vaga
            </h2>
          </div>

          <Accordion type="single" collapsible className="mt-12">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
                <AccordionTrigger className="text-left font-medium">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-gold p-12 sm:p-16 shadow-gold">
            <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <Sparkles className="relative mx-auto h-9 w-9 text-primary" />
            <h2 className="relative mt-5 font-display text-3xl text-primary sm:text-5xl leading-tight">
              Próxima turma abrindo agora.
            </h2>
            <p className="relative mt-5 text-primary/80 max-w-xl mx-auto">
              Garanta sua vaga com condição de matrícula exclusiva pela página
              e considere a Residência Completa para sair com domínio integral da linha.
            </p>
            <Button
              size="lg"
              onClick={openSignupDialog}
              className="relative mt-10 h-12 rounded-full bg-primary px-8 text-base font-semibold text-cream hover:bg-primary/90"
            >
              Garantir minha vaga
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <div className="relative mt-6 text-xs text-primary/70">
              <Link to="/" className="underline">Voltar à clínica L'ECLER</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
