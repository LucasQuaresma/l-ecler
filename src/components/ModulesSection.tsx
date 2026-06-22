import { motion } from "framer-motion";
import {
  Smile, Anchor, Sparkles, Layers, AlignCenter, Activity,
  Leaf, Syringe, Wand2, Droplets, Flame, Zap,
} from "lucide-react";

const modules = [
  { icon: Smile, title: "Odontologia Estética", text: "Sorrisos naturais, harmônicos e fiéis ao seu rosto." },
  { icon: Anchor, title: "Implantes", text: "Reabilitação completa com precisão técnica e conforto." },
  { icon: Layers, title: "Próteses", text: "Soluções funcionais e estéticas, planejadas individualmente." },
  { icon: Sparkles, title: "Facetas e Lentes de Contato", text: "Design de sorriso minimamente invasivo." },
  { icon: AlignCenter, title: "Ortodontia / Invisalign", text: "Alinhamento discreto, previsível e eficiente." },
  { icon: Activity, title: "Endodontia (Canal)", text: "Tratamento de canal com tecnologia e mínimo desconforto." },
  { icon: Leaf, title: "Odontologia Preventiva e Integrativa", text: "Saúde bucal aliada ao bem-estar do corpo todo." },
  { icon: Syringe, title: "Botox & Preenchimentos", text: "Suavização de linhas e reposição de volumes com naturalidade." },
  { icon: Wand2, title: "Fios e Bioestímulo", text: "Lifting, sustentação e produção de colágeno." },
  { icon: Droplets, title: "Gerenciamento Dérmico", text: "Peelings, peptídeos e protocolos contínuos de pele." },
  { icon: Flame, title: "Laser CO₂ e HIPRO", text: "Tecnologias de última geração para resultados duradouros." },
  { icon: Zap, title: "Emagrecimento Facial", text: "Biorreguladores e protocolos para definição do rosto." },
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

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-gold"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold text-primary shadow-soft">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-xl text-foreground">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gold/10 opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
