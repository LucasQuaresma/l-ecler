import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/obrigado")({
  head: () => ({
    meta: [
      { title: "Obrigado — Clínica L'ECLER" },
      { name: "description", content: "Recebemos seu contato. Em breve nossa equipe falará com você no WhatsApp." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-hero">
      <main className="flex flex-1 items-center justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-lg rounded-3xl bg-card p-8 text-center shadow-elegant ring-1 ring-gold/30 sm:p-12"
        >
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-gold shadow-gold">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>
          <h1 className="mt-6 font-display text-3xl sm:text-4xl">
            Recebemos seu <span className="text-gradient-gold">contato</span>!
          </h1>
          <p className="mt-4 text-muted-foreground">
            Obrigada por escolher a L'ECLER. Em instantes nossa equipe vai te chamar no WhatsApp
            para conversar sobre seu plano personalizado.
          </p>

          <div className="mt-8 rounded-2xl bg-secondary/60 p-5 text-left">
            <p className="text-xs font-semibold uppercase tracking-wider text-gold">
              Próximos passos
            </p>
            <ul className="mt-3 space-y-2 text-sm text-foreground">
              <li className="flex items-start gap-2">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                Vamos te chamar no WhatsApp em até 1 dia útil.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                Você fará seu Diagnóstico Online antes mesmo de visitar a clínica.
              </li>
            </ul>
          </div>

          <Button
            asChild
            variant="outline"
            className="mt-8 h-11 rounded-full border-primary/20 px-6"
          >
            <Link to="/">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Voltar à home
            </Link>
          </Button>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
