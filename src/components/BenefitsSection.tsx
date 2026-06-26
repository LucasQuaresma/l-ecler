import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, HeartHandshake, Microscope, Gem, Globe2 } from "lucide-react";
import differentialsImg from "@/assets/home-differentials.jpg";

const benefits = [
  { icon: ShieldCheck, title: "Segurança técnica rara", text: "26 anos de odontologia + 14 em HOF — base de oclusão, anatomia e função." },
  { icon: UserCheck, title: "Plano individualizado", text: "Sem protocolo padrão. Cada rosto recebe um projeto técnico próprio." },
  { icon: HeartHandshake, title: "Equipe selecionada", text: "Time multidisciplinar formado dentro do mesmo padrão da Dra. Cássia." },
  { icon: Microscope, title: "Tecnologia de ponta", text: "Equipamentos e tecnologias de última geração em odontologia e HOF." },
  { icon: Gem, title: "Resultado natural", text: "Sorriso e rosto que melhoram — sem parecer 'feito'." },
  { icon: Globe2, title: "Diagnóstico online", text: "Direcionamento personalizado antes mesmo da primeira visita." },
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
            A diferença está em quem{" "}
            <span className="text-gradient-gold">conduz</span> seu tratamento.
          </h2>
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
                26+ anos de odontologia
              </div>
              <p className="mt-1 text-sm leading-relaxed text-foreground">
                Experiência clínica por trás de cada decisão estética.
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
