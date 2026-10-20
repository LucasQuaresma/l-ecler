import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { absoluteUrl } from "@/lib/site";
import academyLogo from "@/assets/lecler-academy-logo.png";

const REDIRECT_SECONDS = 30;
const WHATSAPP_URL = `https://wa.me/5511915633857?${new URLSearchParams({
  text: "Olá! Tenho interesse em informações sobre o curso FULL FACE da L’Ecler Academy.",
})}`;

export const Route = createFileRoute("/academy-contato")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Contato | Curso FULL FACE | L’Ecler Academy" },
      {
        name: "description",
        content:
          "Converse com a equipe da L’Ecler Academy pelo WhatsApp sobre o curso FULL FACE com a Dra. Cássia Blasques.",
      },
      { name: "robots", content: "noindex, follow" },
      { property: "og:title", content: "Fale com a L’Ecler Academy" },
      {
        property: "og:description",
        content: "Informações sobre o curso FULL FACE pelo WhatsApp: +55 11 91563-3857.",
      },
      { property: "og:url", content: absoluteUrl("/academy-contato") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/academy-contato") }],
  }),
  component: AcademyContactPage,
});

function AcademyContactPage() {
  const [seconds, setSeconds] = useState(REDIRECT_SECONDS);

  useEffect(() => {
    const deadline = Date.now() + REDIRECT_SECONDS * 1000;
    const ticker = window.setInterval(() => {
      setSeconds(Math.max(0, Math.ceil((deadline - Date.now()) / 1000)));
    }, 1000);
    const redirect = window.setTimeout(() => {
      window.location.replace(WHATSAPP_URL);
    }, REDIRECT_SECONDS * 1000);

    return () => {
      window.clearInterval(ticker);
      window.clearTimeout(redirect);
    };
  }, []);

  return (
    <main className="flex min-h-svh items-center justify-center bg-white px-6 py-10 text-[#282828] [letter-spacing:0]">
      <div className="mx-auto flex w-full max-w-lg flex-col items-center text-center">
        <img
          src={academyLogo}
          alt="L’Ecler Academy"
          width={942}
          height={923}
          className="mb-9 h-32 w-36 object-contain sm:h-36 sm:w-40"
        />
        <p className="mb-3 text-sm font-semibold text-[#73613b]">Com a Dra. Cássia Blasques</p>
        <h1 className="font-display text-3xl leading-tight sm:text-4xl">Curso FULL FACE</h1>
        <p className="mt-5 max-w-sm text-base leading-relaxed text-[#5c5c5c]">
          Fale com a equipe da L’Ecler Academy para conhecer a programação, os pré-requisitos e a
          disponibilidade de vagas.
        </p>
        <a
          href={WHATSAPP_URL}
          className="mt-8 inline-flex min-h-14 w-full max-w-sm items-center justify-center gap-3 rounded-lg bg-[#176b4b] px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-[#115137] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#176b4b]"
        >
          <MessageCircle aria-hidden="true" className="h-5 w-5 shrink-0" />
          Entre em contato
        </a>
        <p className="mt-4 text-sm text-[#5c5c5c]">WhatsApp: +55 11 91563-3857</p>
        <div className="mt-8 min-h-14 text-sm leading-relaxed text-[#686868]">
          <p>
            O WhatsApp será aberto automaticamente em {seconds}{" "}
            {seconds === 1 ? "segundo" : "segundos"}.
          </p>
          <p>Se preferir, entre em contato agora pelo botão acima.</p>
        </div>
        <p className="mt-8 text-xs text-[#737373]">L’Ecler Academy · Bragança Paulista/SP</p>
      </div>
    </main>
  );
}
