import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, HeartHandshake, Microscope, Gem, Globe2 } from "lucide-react";

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
    <section className="relative bg-secondary/40 py-20 sm:py-28">
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

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
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
    </section>
  );
}
