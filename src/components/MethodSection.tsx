import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  MessageCircle,
  ClipboardList,
  Stethoscope,
  Sparkles,
  Calendar,
  Camera,
  ShieldCheck,
} from "lucide-react";
import methodImg from "@/assets/home-method.jpg";
import seniorSmileImg from "@/assets/smile-senior-natural.jpg";
import implantSmileImg from "@/assets/smile-implants-clean-wide.jpg";
import digitalScanImg from "@/assets/clinic-digital-scan.jpg";
import leclerSymbolImg from "@/assets/lecler-symbol.png";

const steps = [
  {
    icon: MessageCircle,
    title: "Primeira conversa",
    text: "Você deixa seu contato, conta o que deseja melhorar e a equipe entende seu momento com cuidado.",
    gradient: "linear-gradient(135deg, oklch(0.85 0.12 80), oklch(0.65 0.13 60))",
  },
  {
    icon: ClipboardList,
    title: "Diagnóstico online",
    text: "Receba um primeiro direcionamento e entenda quais caminhos podem fazer sentido antes da consulta.",
    gradient: "linear-gradient(135deg, oklch(0.82 0.1 50), oklch(0.6 0.12 30))",
  },
  {
    icon: Stethoscope,
    title: "Avaliação na clínica",
    text: "A Dra. Cássia avalia sorriso, face, função e saúde para confirmar o plano com segurança.",
    gradient: "linear-gradient(135deg, oklch(0.86 0.08 25), oklch(0.55 0.12 20))",
  },
  {
    icon: Sparkles,
    title: "Plano com prioridades",
    text: "Você entende etapas, tempo, investimento e o que deve vir primeiro para chegar ao melhor resultado.",
    gradient: "linear-gradient(135deg, oklch(0.88 0.1 90), oklch(0.62 0.14 70))",
  },
  {
    icon: Calendar,
    title: "Execução e acompanhamento",
    text: "O tratamento é conduzido com tecnologia, conforto e retornos para preservar o resultado.",
    gradient: "linear-gradient(135deg, oklch(0.83 0.1 70), oklch(0.55 0.11 40))",
  },
];

const smileProofs = [
  {
    image: implantSmileImg,
    title: "Implantes e segurança",
    text: "Referência visual para casos em que mastigação, estabilidade e sorriso precisam caminhar juntos.",
  },
  {
    image: digitalScanImg,
    title: "Planejamento digital do sorriso",
    text: "Escaneamento, fotos e simulações ajudam a enxergar o caminho antes de começar.",
  },
];

export function MethodSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="metodo" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Como funciona
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">
            <span className="lg:block">Do primeiro contato à cadeira da clínica,</span>{" "}
            <span className="text-gradient-gold lg:block">você sabe o próximo passo.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Nada de escolher procedimento no escuro. A jornada foi pensada para transformar
            dúvida em clareza e vontade em plano.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative mt-12 overflow-hidden rounded-[2rem] shadow-elegant ring-1 ring-gold/30"
        >
          <img
            src={methodImg}
            alt="Planejamento individualizado com a Dra. Cássia"
            loading="lazy"
            width={1600}
            height={1000}
            className="aspect-[16/10] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 max-w-sm rounded-2xl bg-card/95 p-4 shadow-elegant ring-1 ring-gold/30 backdrop-blur">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Plano antes de procedimento
            </div>
            <p className="mt-1 text-sm leading-relaxed text-foreground">
              O encantamento começa quando você entende o que faz sentido para o seu caso.
            </p>
          </div>
        </motion.div>

        <div id="casos-e-sorrisos" className="mt-8 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-gold/25 bg-primary shadow-elegant"
          >
            <img
              src={seniorSmileImg}
              alt="Sorriso natural em destaque"
              loading="lazy"
              width={1600}
              height={900}
              className="h-full min-h-[360px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent" />
            <img
              src={leclerSymbolImg}
              alt=""
              aria-hidden="true"
              className="absolute right-6 top-6 h-16 w-auto opacity-70 drop-shadow-sm sm:h-20"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/35 bg-primary/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold backdrop-blur">
                <Camera className="h-3.5 w-3.5" />
                Sorrisos em alta definição
              </div>
              <h3 className="mt-4 max-w-xl font-display text-3xl leading-tight sm:text-4xl">
                A transformação precisa ser vista, entendida e desejada antes de começar.
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-primary-foreground/78">
                Fotos, simulações e referências de casos ajudam a mostrar proporção, cor,
                alinhamento e naturalidade sem tratar o sorriso como um modelo pronto.
              </p>
            </div>
          </motion.article>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {smileProofs.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-soft"
              >
                <div className="aspect-[16/9] overflow-hidden bg-secondary">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    width={900}
                    height={520}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mt-5 grid gap-5 rounded-[2rem] border border-gold/25 bg-card p-5 shadow-elegant lg:grid-cols-[0.85fr_1.15fr] lg:p-7"
        >
          <div className="rounded-[1.5rem] bg-primary p-6 text-primary-foreground">
            <div className="flex items-center justify-between gap-4">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold text-primary shadow-gold">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <img
                src={leclerSymbolImg}
                alt=""
                aria-hidden="true"
                className="h-10 w-auto opacity-55"
              />
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Antes e depois autorizados
            </p>
            <h3 className="mt-2 font-display text-2xl leading-tight">
              Casos reais entram como conversa, não como promessa.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/72">
              A L'ECLER pode apresentar registros autorizados durante a avaliação para
              comparar ponto de partida, plano e evolução possível em casos semelhantes.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.25rem] border border-border bg-secondary/50 p-5">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Antes
              </span>
              <h4 className="mt-2 font-display text-xl">O incômodo é documentado</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Forma, cor, alinhamento, função, gengiva e expectativa são avaliados com
                fotos e diagnóstico individual.
              </p>
            </div>
            <div className="rounded-[1.25rem] border border-gold/35 bg-gradient-to-br from-cream to-card p-5 shadow-soft">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                Depois
              </span>
              <h4 className="mt-2 font-display text-xl">O resultado segue um plano</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                O objetivo é chegar a um sorriso natural, proporcional ao rosto e seguro
                para a saúde bucal no longo prazo.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Mobile stacked */}
        <div className="mt-14 space-y-5 lg:hidden">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft"
              >
                <div className="relative shrink-0">
                  <div
                    className="grid h-14 w-14 place-items-center rounded-xl text-primary shadow-soft"
                    style={{ background: s.gradient }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="absolute -top-1 -right-1 grid h-6 w-6 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {i + 1}
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-lg">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop alternating timeline */}
        <div ref={ref} className="relative mx-auto mt-16 hidden max-w-4xl lg:block">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-gold via-gold to-primary"
          />

          {steps.map((s, i) => {
            const Icon = s.icon;
            const isLeft = i % 2 === 0;
            return (
              <div key={s.title} className="relative mb-16 grid grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={isLeft ? "col-start-1 pr-12 text-right" : "col-start-2 pl-12"}
                >
                  <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                      Etapa {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 font-display text-2xl">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="absolute left-1/2 top-6 -translate-x-1/2"
                >
                  <div
                    className="grid h-14 w-14 place-items-center rounded-full text-primary shadow-elegant ring-4 ring-background"
                    style={{ background: s.gradient }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
