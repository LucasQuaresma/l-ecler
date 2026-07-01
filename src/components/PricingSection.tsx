import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openSignupDialog } from "@/lib/signup-dialog";

const inclusos = [
  "Nossa equipe chama você no WhatsApp",
  "Você conta o que incomoda e o que deseja melhorar",
  "Você recebe um direcionamento inicial para o seu caso",
  "Você entende os tratamentos que podem fazer sentido",
  "Você agenda a avaliação presencial quando estiver pronta para avançar",
];

export function PricingSection() {
  return (
    <section className="relative bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-card p-8 shadow-elegant ring-1 ring-gold/30 sm:p-12"
        >
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/15 blur-3xl" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
              <Sparkles className="h-3.5 w-3.5" />
              Agendamento guiado
            </div>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl">
              Quer entender o que faz sentido{" "}
              <span className="text-gradient-gold">para o seu caso?</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Você não precisa chegar sabendo o nome do procedimento. Deixe seu contato,
              converse com a equipe da L'ECLER e descubra o caminho mais seguro para cuidar
              do seu sorriso, da sua face e da sua autoestima.
            </p>

            <ul className="mt-8 space-y-3">
              {inclusos.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-gold text-primary">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              onClick={openSignupDialog}
              className="mt-10 h-12 w-full rounded-full bg-gradient-gold px-7 text-base font-semibold text-primary shadow-gold transition-transform hover:scale-[1.01] sm:w-auto"
            >
              Quero conversar com a equipe
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
