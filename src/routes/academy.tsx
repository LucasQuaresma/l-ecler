import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  GraduationCap, Sparkles, ArrowRight, Check, Syringe, Layers,
  Wand2, Droplets, Award, Microscope, Users, Globe, Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { openSignupDialog } from "@/lib/signup-dialog";

export const Route = createFileRoute("/academy")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "L'ECLER Academy — Formação em Harmonização Orofacial" },
      {
        name: "description",
        content:
          "Habilitação, atualização e Residência Completa em Harmonização Orofacial com a Dra. Cássia Blasques. Prática real com pacientes modelo, ciência aprofundada e mentoria.",
      },
      { property: "og:title", content: "L'ECLER Academy — Formação em Harmonização Orofacial" },
      {
        property: "og:description",
        content:
          "Cursos de habilitação e atualização em HOF, reunidos na Residência Completa. Toxina, BIOFACES, Full Threads, Full Face e LIPS Advanced.",
      },
    ],
  }),
  component: AcademyPage,
});

const pilares = [
  {
    icon: Syringe,
    title: "Toxina Botulínica",
    text: "Domínio das técnicas modernas de aplicação, doses, pontos seguros e leitura facial dinâmica — do iniciante ao avançado.",
  },
  {
    icon: Microscope,
    title: "BIOFACES",
    text: "Bioestimuladores e biorregeneradores: PDRN, polinucleotídeos, peptídeos, exossomos, células-tronco e enzimas recombinantes.",
  },
  {
    icon: Layers,
    title: "Full Threads",
    text: "Fios faciais com a maior referência nacional do Brasil — técnica, vetores, planejamento e segurança.",
  },
  {
    icon: Wand2,
    title: "Full Face",
    text: "Preenchimentos faciais estratégicos com leitura de terços, projeção e harmonia global do rosto.",
  },
  {
    icon: Droplets,
    title: "LIPS Advanced",
    text: "Tratamentos labiais e periorais avançados — desenho, projeção, função e estética em alta performance.",
  },
];

const publico = [
  "Cirurgiões-dentistas que querem entrar na HOF com segurança",
  "Médicos buscando aprofundamento técnico e científico",
  "Farmacêuticos e biomédicos esteticistas (dentro do escopo do conselho)",
  "Profissionais que já atuam e querem se atualizar nas novas tecnologias",
  "Quem busca dominar toda a linha com a Residência Completa",
];

const diferenciais = [
  { title: "Prática real, com paciente modelo", text: "Você aplica de verdade, em ambiente clínico em funcionamento — não em manequim." },
  { title: "Ciência de profundidade", text: "Mecanismo de ação, estudos, dados multicêntricos. Você sai entendendo o porquê de cada decisão." },
  { title: "Turmas reduzidas", text: "Mentoria próxima da Dra. Cássia. Cada aluno é acompanhado individualmente." },
  { title: "Tecnologias de ponta", text: "Acesso às substâncias e protocolos mais recentes, antes mesmo de chegarem ao mercado em geral." },
  { title: "Suporte pós-curso", text: "Você não fica sozinho depois da formação — mentoria continuada para os primeiros casos." },
  { title: "Residência Completa", text: "A opção mais ampla: domínio integral da linha de harmonização facial, do básico ao avançado." },
];

const trilha = [
  { title: "Habilitação", text: "Para quem está começando. Base sólida, técnica e científica para iniciar com segurança em HOF." },
  { title: "Atualização", text: "Para quem já atua e quer se manter à frente: bioestimuladores, peptídeos, fios e novas tecnologias." },
  { title: "Residência Completa", text: "A formação ampla e intensiva que reúne todos os pilares — para quem quer dominar a linha inteira." },
];

const faqs = [
  { q: "Tem prática real com paciente?", a: "Sim. A prática é em ambiente clínico em funcionamento, com pacientes modelo reais. Você não sai daqui sem ter aplicado." },
  { q: "Preciso já atuar em HOF para fazer?", a: "Não. Temos a trilha de Habilitação para quem está começando e a de Atualização/Residência para quem já atua." },
  { q: "Quem pode se inscrever?", a: "Cirurgiões-dentistas, médicos e demais profissionais da saúde habilitados a atuar em harmonização facial, dentro do escopo de cada conselho." },
  { q: "Como funciona a Residência Completa?", a: "É a formação ampla que reúne todos os pilares — Toxina, BIOFACES, Full Threads, Full Face e LIPS Advanced — com condição diferenciada em relação aos cursos isolados." },
  { q: "Tem suporte depois que o curso termina?", a: "Sim. Mentoria pós-curso para os primeiros casos é parte da nossa proposta — você não fica sozinho." },
  { q: "As vagas são limitadas?", a: "Sim. Turmas pequenas são parte do método: garantem mentoria próxima e prática individualizada com a Dra. Cássia." },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function AcademyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero pt-12 pb-20 sm:pt-20 sm:pb-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-cream px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary shadow-soft">
              <GraduationCap className="h-3.5 w-3.5 text-gold" />
              L'ECLER Academy · Vagas limitadas por turma
            </div>

            <h1 className="mt-6 font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              Formação em <span className="text-gradient-gold">Harmonização Orofacial</span>
              <br className="hidden sm:block" />
              com profundidade científica e prática real.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Habilitação, atualização e Residência Completa em HOF. Cinco pilares,
              turmas pequenas, prática com paciente modelo dentro de uma clínica
              multidisciplinar em funcionamento real — sob mentoria direta da
              Dra. Cássia Blasques.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-muted-foreground sm:text-sm">
              <div><strong className="text-foreground">14+</strong> anos em HOF</div>
              <div className="h-4 w-px bg-border" />
              <div><strong className="text-foreground">5</strong> pilares técnicos</div>
              <div className="h-4 w-px bg-border" />
              <div><strong className="text-foreground">100%</strong> prática real</div>
              <div className="h-4 w-px bg-border" />
              <div><strong className="text-foreground">Harvard</strong> · Yonsei · Suíça · Itália</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRILHA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-wider text-gold">Três trilhas, um padrão</div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">Escolha o seu ponto de partida</h2>
            <p className="mt-4 text-muted-foreground">
              Da habilitação inicial à Residência Completa — todas com o mesmo nível
              de exigência técnica e científica.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {trilha.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-2xl border border-border bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant hover:border-gold/40"
              >
                {i === 2 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary shadow-gold">
                    Mais completa
                  </div>
                )}
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-primary">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-2xl">{t.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section id="pilares" className="bg-secondary/30 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-wider text-gold">Os 5 pilares</div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              O conteúdo que forma um especialista <span className="text-gradient-gold">completo</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Teoria com profundidade científica e prática com paciente modelo em cada um dos pilares.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pilares.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-elegant"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARA QUEM */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-gold">Para quem é</div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              Formação para profissionais que <span className="text-gradient-gold">não aceitam</span> raso
            </h2>
            <p className="mt-4 text-muted-foreground">
              Se você teme investir tempo e dinheiro num curso só teórico, sem prática real
              e sem suporte depois da aula — a L'ECLER Academy foi desenhada exatamente
              como resposta a isso.
            </p>
          </div>
          <ul className="space-y-3">
            {publico.map((p) => (
              <li key={p} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-soft">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span className="text-sm text-foreground">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="bg-secondary/30 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-wider text-gold">Por que a L'ECLER Academy</div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              O método que substitui o medo do raso por <span className="text-gradient-gold">segurança técnica</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {diferenciais.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <Sparkles className="h-5 w-5 text-gold" />
                <h3 className="mt-4 font-display text-lg">{d.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DRA CÁSSIA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl border border-gold/30 bg-gradient-hero p-8 shadow-elegant sm:p-12">
            <div className="text-xs font-semibold uppercase tracking-wider text-gold">Quem ensina</div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">Dra. Cássia Blasques</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Cirurgiã-dentista há 26 anos, especialista em Harmonização Orofacial há mais
              de 14 anos e referência nacional em Fios Faciais no Brasil. Formação
              internacional em Harvard (MARC, Boston), Yonsei University (Coreia do Sul),
              Suíça e Itália. Professora e palestrante com trabalhos desenvolvidos em
              Odontopartners, I-Thread, Rennova (Fios Croquis) e atualmente especialista
              científica da equipe de Speakers da Vida Bela Med. Organizadora do primeiro
              congresso exclusivo de fios faciais do Brasil e fundadora da L'ECLER Academy.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Globe, label: "Harvard · Yonsei · Suíça · Itália" },
                { icon: Star, label: "Referência nacional em Fios Faciais" },
                { icon: Users, label: "Especialista científica internacional" },
                { icon: Award, label: "Fundadora da L'ECLER Academy" },
              ].map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.label} className="flex items-start gap-3 rounded-xl border border-border bg-card/80 p-4 backdrop-blur">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <span className="text-xs text-foreground leading-snug">{c.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/30 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-wider text-gold">Dúvidas frequentes</div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              Antes de garantir sua vaga
            </h2>
          </div>

          <Accordion type="single" collapsible className="mt-10">
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

      {/* CTA FINAL */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="rounded-3xl bg-gradient-gold p-10 shadow-gold sm:p-14">
            <Sparkles className="mx-auto h-8 w-8 text-primary" />
            <h2 className="mt-4 font-display text-3xl text-primary sm:text-4xl">
              Vagas limitadas. Próxima turma abrindo agora.
            </h2>
            <p className="mt-4 text-primary/80">
              Garanta sua vaga com condição de matrícula exclusiva pela página
              e considere a Residência Completa para sair com domínio integral da linha.
            </p>
            <Button
              size="lg"
              onClick={openSignupDialog}
              className="mt-8 h-12 rounded-full bg-primary px-8 text-base font-semibold text-cream hover:bg-primary/90"
            >
              Garantir minha vaga
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <div className="mt-6 text-xs text-primary/70">
              <Link to="/" className="underline">Voltar à clínica L'ECLER</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
