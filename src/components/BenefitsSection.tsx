import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, HeartHandshake, Microscope, Gem, Globe2 } from "lucide-react";
import differentialsImg from "@/assets/home-differentials.jpg";

const benefits = [
  { icon: ShieldCheck, title: "Segurança antes da estética", text: "Toda indicação considera saúde bucal, anatomia, função e histórico clínico." },
  { icon: UserCheck, title: "Plano feito para o seu rosto", text: "Sem pacote pronto. O plano parte do que você deseja e do que seu caso permite." },
  { icon: HeartHandshake, title: "Equipe que acolhe e orienta", text: "Você não precisa chegar sabendo o procedimento. A equipe te ajuda a entender o caminho." },
  { icon: Microscope, title: "Tecnologia para prever melhor", text: "Recursos digitais e equipamentos modernos apoiam diagnóstico, conforto e precisão." },
  { icon: Gem, title: "Naturalidade como assinatura", text: "O objetivo é melhorar sem apagar sua identidade ou deixar aparência artificial." },
  { icon: Globe2, title: "Começo pelo WhatsApp", text: "O primeiro direcionamento pode acontecer antes da visita presencial." },
];

export function BenefitsSection() {
  return (
    <section id="beneficios" className="relative bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Por que a L'ECLER
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">
            Você sente quando está em{" "}
            <span className="text-gradient-gold">boas mãos</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Desde a primeira mensagem, a experiência precisa transmitir clareza:
            o que pode ser feito, o que deve ser evitado e qual resultado realmente
            combina com você.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-elegant ring-1 ring-gold/30">
              <img
                src={differentialsImg}
                alt="Dra. Cássia Blasques na Clínica L'ECLER"
                loading="lazy"
                width={1200}
                height={1500}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-5 left-5 right-5 rounded-2xl bg-card/95 p-4 shadow-elegant ring-1 ring-gold/30 backdrop-blur">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                Técnica com sensibilidade
              </div>
              <p className="mt-1 text-sm leading-relaxed text-foreground">
                A estética só encanta quando respeita saúde, proporção e identidade.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
                  className="flex gap-4 rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border/60"
                >
                  <div className="shrink-0">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-gold/15 text-gold">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground">{b.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
