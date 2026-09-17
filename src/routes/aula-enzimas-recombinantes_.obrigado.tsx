import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, CalendarDays, CheckCircle2, Clock3, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCourseWhatsappUrl } from "@/lib/course-registration";

const EVENT_NAME = "Aula gratuita de Enzimas Recombinantes — 22/09 às 20h";

export const Route = createFileRoute("/aula-enzimas-recombinantes_/obrigado")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Inscrição confirmada | Aula de Enzimas Recombinantes | L'ECLER Academy" },
      {
        name: "description",
        content:
          "Sua inscrição para a aula gratuita de Enzimas Recombinantes, em 22 de setembro, às 20h, foi confirmada.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: EnzimasRecombinantesThankYouPage,
});

function EnzimasRecombinantesThankYouPage() {
  return (
    <div className="min-h-screen bg-[#0e0a08] text-white">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse at 15% 15%, rgba(201,168,76,0.14) 0%, transparent 55%), radial-gradient(ellipse at 85% 90%, rgba(120,60,30,0.2) 0%, transparent 55%)",
        }}
      />

      <main className="relative mx-auto flex min-h-screen max-w-3xl items-center justify-center px-6 py-12 sm:py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-7 text-center backdrop-blur sm:p-12"
        >
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-to-r from-[#f0d78c] via-[#c9a84c] to-[#8b6f2a] shadow-[0_10px_30px_-10px_rgba(201,168,76,0.6)]">
            <CheckCircle2 className="h-8 w-8 text-[#0e0a08]" />
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#c9a84c]">
            Inscrição confirmada
          </p>
          <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
            Sua vaga na aula está garantida!
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Obrigada por se inscrever. Fique de olho no seu e-mail e WhatsApp para receber as
            informações de acesso.
          </p>

          <div className="mx-auto mt-8 grid max-w-xl gap-3 text-left sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-2xl border border-[#c9a84c]/30 bg-[#c9a84c]/5 px-4 py-4">
              <CalendarDays className="h-5 w-5 shrink-0 text-[#c9a84c]" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/45">Data</p>
                <p className="mt-0.5 font-display text-xl">22 de setembro</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-[#c9a84c]/30 bg-[#c9a84c]/5 px-4 py-4">
              <Clock3 className="h-5 w-5 shrink-0 text-[#c9a84c]" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/45">Horário</p>
                <p className="mt-0.5 font-display text-xl">20 horas</p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a84c]">
              Próximos passos
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Salve a data e acompanhe nossas mensagens. Se tiver alguma dúvida, fale com a equipe
              da L'ECLER Academy pelo WhatsApp.
            </p>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              asChild
              className="h-11 rounded-full bg-gradient-to-r from-[#f0d78c] via-[#c9a84c] to-[#8b6f2a] px-6 font-semibold text-[#0e0a08] hover:opacity-95"
            >
              <a href={getCourseWhatsappUrl(EVENT_NAME)} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-1 h-4 w-4" />
                Falar com a equipe
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-full border-[#c9a84c]/40 bg-transparent px-6 text-white hover:bg-[#c9a84c]/10 hover:text-white"
            >
              <Link to="/aula-enzimas-recombinantes">
                <ArrowLeft className="mr-1 h-4 w-4" />
                Voltar para a página
              </Link>
            </Button>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
