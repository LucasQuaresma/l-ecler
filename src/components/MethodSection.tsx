import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, ClipboardList, Stethoscope, Sparkles, Calendar } from "lucide-react";
import methodImg from "@/assets/home-method.jpg";

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
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Como funciona
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">
            Do primeiro contato à cadeira da clínica,{" "}
            <span className="text-gradient-gold">você sabe o próximo passo.</span>
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
