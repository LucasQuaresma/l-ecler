import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { services } from "@/lib/services";
import consultationImg from "@/assets/home-consultation.jpg";

const treatmentHighlights = [
  {
    title: "Avaliação conduzida de perto",
    text: "A primeira leitura combina queixa, função, estética e histórico clínico.",
  },
  {
    title: "Plano integrado",
    text: "Sorriso, face e saúde oral entram no mesmo raciocínio técnico.",
  },
  {
    title: "Resultado sem exagero",
    text: "Cada indicação busca naturalidade, segurança e coerência com o seu rosto.",
  },
];

export function ModulesSection() {
  return (
    <section id="modulos" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Tratamentos
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">
            Tudo o que seu rosto e seu sorriso precisam,{" "}
            <span className="text-gradient-gold">em um só lugar.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Odontologia integrada e Harmonização Orofacial conduzidas com domínio técnico,
            sensibilidade estética e equipe multidisciplinar.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative min-h-[24rem] overflow-hidden rounded-[2rem] shadow-elegant ring-1 ring-gold/30"
          >
            <img
              src={consultationImg}
              alt="Consulta individualizada com a Dra. Cássia"
              loading="lazy"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 max-w-xs rounded-2xl bg-card/95 p-4 shadow-elegant ring-1 ring-gold/30 backdrop-blur">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                Consulta personalizada
              </div>
              <p className="mt-1 text-sm leading-relaxed text-foreground">
                A decisão estética nasce de uma avaliação clínica completa.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {treatmentHighlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border/70"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  0{i + 1}
                </div>
                <h3 className="mt-3 font-display text-2xl text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              >
                <Link
                  to="/servicos/$slug"
                  params={{ slug: m.slug }}
                  className="group relative block h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-gold"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold text-primary shadow-soft">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display text-xl text-foreground">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                  <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-gold opacity-0 transition-opacity group-hover:opacity-100">
                    Saiba mais →
                  </span>
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gold/10 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
