import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openSignupDialog } from "@/lib/signup-dialog";
import heroImg from "@/assets/hero-smile.jpg";
import floatTooth from "@/assets/float-tooth.png";
import floatSyringe from "@/assets/float-syringe.png";
import floatSparkle from "@/assets/float-sparkle.png";
import floatPetal from "@/assets/float-petal.png";
import floatDropper from "@/assets/float-dropper.png";

const floats = [
  { src: floatTooth, alt: "Dente", className: "top-[8%] left-[-4%] w-16 sm:w-20", delay: 0 },
  { src: floatSyringe, alt: "Seringa", className: "top-[28%] right-[-6%] w-16 sm:w-24", delay: 0.8 },
  { src: floatSparkle, alt: "Brilho", className: "top-[55%] left-[-2%] w-12 sm:w-16", delay: 1.4 },
  { src: floatPetal, alt: "Pétala", className: "bottom-[10%] right-[-2%] w-14 sm:w-20", delay: 0.4 },
  { src: floatDropper, alt: "Sérum", className: "top-[2%] right-[18%] w-12 sm:w-16", delay: 1.1 },
];

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
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-cream px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary shadow-soft">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            Diagnóstico online + clínica em Bragança
          </div>

          <h1 className="mt-6 font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            Imagine se olhar no espelho <br className="hidden sm:block" />
            e gostar ainda{" "}
            <span className="text-gradient-gold">mais</span>{" "}<br className="hidden sm:block" />
            do que vê.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg lg:mx-0">
            Na L'ECLER, a Dra. Cássia une odontologia, harmonização orofacial e
            estética avançada para planejar, com você, uma mudança natural,
            segura e possível. Conte o que te incomoda e receba um primeiro
            direcionamento pelo WhatsApp.
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
              className="h-12 rounded-full border-primary/20 bg-transparent px-7 text-base font-medium text-primary hover:bg-secondary"
            >
              Conhecer tratamentos
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-muted-foreground sm:text-sm lg:justify-start">
            <div><strong className="text-foreground">26+</strong> anos cuidando de sorrisos</div>
            <div className="h-4 w-px bg-border" />
            <div><strong className="text-foreground">14+</strong> anos em HOF</div>
            <div className="h-4 w-px bg-border" />
            <div><strong className="text-foreground">1º</strong> passo online</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-elegant ring-1 ring-gold/30">
            <img
              src={heroImg}
              alt="Dra. Cássia — Clínica L'ECLER"
              width={1024}
              height={1536}
              loading="eager"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-transparent" />
          </div>

          {/* badge flutuante */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -bottom-5 left-1/2 z-20 w-[88%] -translate-x-1/2 rounded-2xl bg-card/95 p-4 shadow-elegant ring-1 ring-gold/30 backdrop-blur sm:left-6 sm:w-auto sm:translate-x-0"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-gold">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-gold">Dra. Cássia Blasques</div>
                <div className="text-sm font-medium text-foreground">Odontologia · HOF · estética</div>
              </div>
            </div>
          </motion.div>

          {/* floats */}
          {floats.map((f, i) => (
            <motion.img
              key={i}
              src={f.src}
              alt={f.alt}
              loading="lazy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 + f.delay * 0.2 }}
              style={{ animationDelay: `${f.delay}s` }}
              className={`pointer-events-none absolute z-10 drop-shadow-[0_8px_20px_rgba(150,100,40,0.25)] animate-float-slow ${f.className}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
