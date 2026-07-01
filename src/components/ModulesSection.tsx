import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services";
import { openSignupDialog } from "@/lib/signup-dialog";
import consultationImg from "@/assets/home-consultation.jpg";

const treatmentHighlights = [
  {
    title: "Odontologia integrada como base",
    text: "Saúde bucal, função, estética dental e prevenção orientam o plano antes de qualquer decisão estética.",
  },
  {
    title: "Sorriso, face e pele em conjunto",
    text: "A indicação parte da sua história, da análise facial, da mordida e do resultado desejado.",
  },
  {
    title: "Tecnologia com critério clínico",
    text: "Airflow, Invisalign, planejamento digital e Harmonização Orofacial entram quando agregam ao caso.",
  },
];

const serviceDisplayOrder = [
  "odontologia-estetica",
  "facetas-e-lentes-de-contato",
  "ortodontia-invisalign",
  "airflow-prevencao-suica",
  "implantes",
  "proteses",
  "endodontia",
  "odontologia-preventiva-integrativa",
  "fios-e-bioestimulo",
  "gerenciamento-dermico",
  "botox-e-preenchimentos",
  "laser-co2-e-hipro",
];

export function ModulesSection() {
  const orderedServices = [...services].sort(
    (a, b) => serviceDisplayOrder.indexOf(a.slug) - serviceDisplayOrder.indexOf(b.slug),
  );

  return (
    <section id="modulos" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Especialidades
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">
            Odontologia especializada, Harmonização Orofacial e tecnologias{" "}
            <span className="text-gradient-gold">no mesmo cuidado.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Na Clínica L'ECLER, a odontologia integrada é o carro-chefe. A clínica
            reúne especialidades como estética dental, implantes, próteses, facetas,
            lentes, Invisalign, canal e prevenção, com Harmonização Orofacial como
            extensão natural desse cuidado.
          </p>
        </div>

        <div className="mt-8 grid gap-3 lg:hidden">
          {orderedServices.map((m) => {
            const Icon = m.icon;
            return (
              <Link
                key={m.slug}
                to="/servicos/$slug"
                params={{ slug: m.slug }}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card px-4 py-3 text-left shadow-soft transition-colors hover:border-gold/40"
              >
                <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-gradient-gold text-primary shadow-soft">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">
                    {m.category}
                  </span>
                  <span className="mt-0.5 block font-display text-lg leading-tight text-foreground">
                    {m.title}
                  </span>
                </span>
                <ArrowRight className="h-4 w-4 flex-none text-gold transition-transform group-hover:translate-x-1" />
              </Link>
            );
          })}
        </div>

        <div className="mt-14 hidden gap-6 lg:grid lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
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
                Diagnóstico antes de procedimento
              </div>
              <p className="mt-1 text-sm leading-relaxed text-foreground">
                A melhor indicação começa quando a equipe entende o que você quer sentir ao sorrir e se olhar.
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

        <div className="mt-10 hidden grid-cols-1 gap-5 sm:grid-cols-2 lg:grid lg:grid-cols-3">
          {orderedServices.map((m, i) => {
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
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                    {m.category}
                  </p>
                  <h3 className="font-display text-xl text-foreground">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                  <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-gold opacity-0 transition-opacity group-hover:opacity-100">
                    Ver detalhes →
                  </span>
                  <div className="pointer-events-none absolute -right-12 -top-12 hidden h-32 w-32 rounded-full bg-gold/10 opacity-0 transition-opacity group-hover:opacity-100 lg:block" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="mb-3 text-sm font-medium text-muted-foreground">
            Não sei por onde começar.
          </p>
          <Button
            size="lg"
            onClick={openSignupDialog}
            className="group h-12 max-w-full rounded-full bg-gradient-gold px-8 text-center text-base font-semibold text-primary shadow-gold transition-transform hover:scale-[1.02]"
          >
            Quero orientação
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
