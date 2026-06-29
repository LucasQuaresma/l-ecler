import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openSignupDialog } from "@/lib/signup-dialog";
import heroImg from "@/assets/hero-smile.jpg";

function scrollToModules() {
  document.getElementById("modulos")?.scrollIntoView({ behavior: "smooth" });
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-10 pb-20 sm:pt-16 sm:pb-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 text-center lg:text-left"
        >
          <div className="inline-flex items-center rounded-full border border-gold/35 bg-card/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-primary shadow-soft backdrop-blur">
            Clínica L'ECLER | Saúde e bem-estar
          </div>

          <h1 className="mt-6 font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            Odontologia integrada, estética natural e{" "}
            <span className="text-gradient-gold">bem-estar</span> em um só plano.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg lg:mx-0">
            A L'ECLER é uma clínica de saúde e bem-estar com foco em odontologia
            integrada e especializada. Sorriso, face e pele são avaliados em conjunto
            para construir um resultado natural, seguro e fiel à sua identidade.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button
              size="lg"
              onClick={openSignupDialog}
              className="group h-12 rounded-full bg-gradient-gold px-7 text-base font-semibold text-primary shadow-gold transition-transform hover:scale-[1.02]"
            >
              Quero conversar e agendar
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToModules}
              className="h-12 rounded-full border-primary/20 bg-card/40 px-7 text-base font-medium text-primary hover:bg-secondary"
            >
              Conhecer tratamentos
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-muted-foreground sm:text-sm lg:justify-start">
            <div><strong className="text-foreground">26+</strong> anos em odontologia</div>
            <div className="hidden h-4 w-px bg-border sm:block" />
            <div><strong className="text-foreground">14+</strong> anos em HOF</div>
            <div className="hidden h-4 w-px bg-border sm:block" />
            <div><strong className="text-foreground">Clínica</strong> multidisciplinar</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] border border-gold/20" />
          <div className="absolute -right-6 top-10 hidden h-40 w-px bg-gradient-to-b from-transparent via-gold/70 to-transparent sm:block" />
          <div className="absolute -left-6 bottom-12 hidden h-32 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent sm:block" />

          <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-elegant ring-1 ring-gold/30">
            <img
              src={heroImg}
              alt="Dra. Cássia - Clínica L'ECLER"
              width={1024}
              height={1536}
              loading="eager"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-transparent" />
            <div className="absolute left-5 top-5 rounded-full border border-gold/35 bg-card/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary shadow-soft backdrop-blur">
              Naturalidade como assinatura
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -bottom-5 left-1/2 z-20 w-[88%] -translate-x-1/2 rounded-2xl border border-gold/25 bg-card/95 px-5 py-4 shadow-elegant backdrop-blur sm:left-6 sm:w-auto sm:translate-x-0"
          >
            <div className="flex items-center gap-4">
              <div className="h-10 w-px bg-gradient-to-b from-transparent via-gold to-transparent" />
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Dra. Cássia Blasques</div>
                <div className="text-sm font-medium text-foreground">Cirurgiã-dentista | HOF | CRO 67279</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
