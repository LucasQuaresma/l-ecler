import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openSignupDialog } from "@/lib/signup-dialog";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-cta py-20 sm:py-28">
      <div className="absolute inset-0 opacity-20" style={{
        background: "radial-gradient(circle at 20% 30%, oklch(0.8 0.14 75) 0%, transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.7 0.13 60) 0%, transparent 50%)"
      }} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-3xl px-6 text-center"
      >
        <h2 className="font-display text-3xl text-primary-foreground sm:text-4xl lg:text-5xl">
          Seu rosto e seu sorriso{" "}
          <span className="text-gradient-gold">merecem técnica de verdade.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-primary-foreground/80">
          Garanta sua vaga e converse com a equipe da L'ECLER. Quem cuida de você precisa
          unir saúde, estética e segurança — e é exatamente isso que entregamos.
        </p>
        <Button
          size="lg"
          onClick={openSignupDialog}
          className="group mt-10 h-14 rounded-full bg-gradient-gold px-9 text-base font-semibold text-primary shadow-gold transition-transform hover:scale-[1.02]"
        >
          Garantir minha vaga agora
          <ArrowRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </motion.div>
    </section>
  );
}
