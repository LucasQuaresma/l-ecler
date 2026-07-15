import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, ArrowLeft, Calendar, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/obrigadofios")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Inscrição recebida — Curso de Fios Faciais | L'ECLER Academy" },
      {
        name: "description",
        content:
          "Recebemos sua inscrição para o Curso de Fios Faciais. Em breve nossa equipe entrará em contato pelo WhatsApp para confirmar sua vaga.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="min-h-screen bg-[#0e0a08] text-white">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 15% 20%, rgba(201,168,76,0.12) 0%, transparent 55%), radial-gradient(ellipse at 85% 90%, rgba(120,60,30,0.18) 0%, transparent 55%)",
        }}
      />

      <main className="relative mx-auto flex min-h-screen max-w-3xl items-center justify-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 text-center backdrop-blur sm:p-12"
        >
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-to-r from-[#f0d78c] via-[#c9a84c] to-[#8b6f2a] shadow-[0_10px_30px_-10px_rgba(201,168,76,0.6)]">
            <CheckCircle2 className="h-8 w-8 text-[#0e0a08]" />
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.28em] text-[#c9a84c]">
            <Sparkles className="h-3.5 w-3.5" /> Inscrição recebida
          </div>

          <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            Sua vaga no{" "}
            <span className="bg-gradient-to-r from-[#f0d78c] via-[#c9a84c] to-[#8b6f2a] bg-clip-text text-transparent">
              Curso de Fios Faciais
            </span>{" "}
            está reservada!
          </h1>

          <p className="mt-4 text-white/70">
            Obrigada pelo seu interesse. Nossa equipe entrará em contato pelo WhatsApp
            para confirmar sua matrícula com a condição especial de 40% OFF e enviar
            todos os detalhes do curso.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-white/80">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
              <Calendar className="h-4 w-4 text-[#c9a84c]" /> 15 e 16 de Agosto
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
              <MapPin className="h-4 w-4 text-[#c9a84c]" /> Bragança Paulista — SP
            </span>
          </div>

          <div className="mt-8 rounded-2xl border border-[#c9a84c]/30 bg-[#c9a84c]/5 p-5 text-left">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#c9a84c]">
              Próximos passos
            </p>
            <ul className="mt-3 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#c9a84c]" />
                Vamos chamar você no WhatsApp para confirmar sua vaga e tirar dúvidas
                sobre o curso.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#c9a84c]" />
                Você receberá o cronograma completo, materiais inclusos e instruções
                de acesso à L'ECLER Academy.
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#c9a84c]" />
                Prepare-se para uma imersão prática em fios de PDO, PLLA e PLACL —
                incluindo Fios Aptos.
              </li>
            </ul>
          </div>

          <Button
            asChild
            variant="outline"
            className="mt-8 h-11 rounded-full border-[#c9a84c]/40 bg-transparent px-6 text-white hover:bg-[#c9a84c]/10 hover:text-white"
          >
            <Link to="/cursofios">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Voltar para o curso
            </Link>
          </Button>
        </motion.div>
      </main>
    </div>
  );
}
