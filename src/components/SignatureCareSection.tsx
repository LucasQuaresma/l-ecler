import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openSignupDialog } from "@/lib/signup-dialog";
import loungeImg from "@/assets/clinic-lounge.jpg";
import digitalScanImg from "@/assets/clinic-digital-scan.jpg";
import airflowImg from "@/assets/airflow-prophylaxis-master.jpg";

const carePillars = [
  "Odontologia integrada e especializada",
  "Invisalign Doctor",
  "Airflow suíço para prevenção",
  "Facetas, lentes, implantes e próteses",
];

const showcase = [
  {
    image: digitalScanImg,
    title: "Planejamento digital do sorriso",
    text: "Tecnologia intraoral para alinhar, restaurar e planejar tratamentos com mais previsibilidade.",
  },
  {
    image: airflowImg,
    title: "Airflow Prophylaxis Master",
    text: "Tecnologia suíça de prevenção para uma profilaxia mais confortável, precisa e sofisticada.",
  },
  {
    image: loungeImg,
    title: "Experiência de clínica premium",
    text: "Ambiente acolhedor, equipe multidisciplinar e atendimento pensado para quem valoriza cuidado integral.",
  },
];

export function SignatureCareSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Odontologia integrada
            </span>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
              O sorriso é o ponto de partida de um plano mais completo.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-primary-foreground/75 sm:text-base">
              A L'ECLER une saúde bucal, função, estética dental e harmonização orofacial.
              Antes de falar em facetas, Invisalign, implantes ou fios faciais, a equipe
              entende a base: gengiva, mordida, estrutura, expressão e o que precisa parecer
              naturalmente seu.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {carePillars.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-primary-foreground/85">
                  <CheckCircle2 className="h-4 w-4 flex-none text-gold" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-gold/25 bg-primary-foreground/[0.06] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Casos reais e antes/depois
              </p>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">
                A clínica trabalha com registros autorizados de pacientes. Eles podem ser
                apresentados na avaliação para mostrar possibilidades reais, sem prometer
                um resultado padronizado.
              </p>
            </div>

            <Button
              size="lg"
              onClick={openSignupDialog}
              className="group mt-8 h-auto min-h-12 max-w-full whitespace-normal rounded-full bg-gradient-gold px-6 py-3 text-center text-base font-semibold leading-snug text-primary shadow-gold transition-transform hover:scale-[1.02] sm:px-7"
            >
              Quero avaliar meu sorriso
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-3 lg:gap-5">
            {showcase.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="overflow-hidden rounded-2xl border border-gold/20 bg-primary-foreground/[0.07] shadow-elegant backdrop-blur"
              >
                <div className="aspect-[4/5] overflow-hidden bg-primary-foreground/90">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl text-primary-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                    {item.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
