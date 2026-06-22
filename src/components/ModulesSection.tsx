import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { services } from "@/lib/services";

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

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
