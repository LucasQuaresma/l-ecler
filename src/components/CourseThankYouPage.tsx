import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, MessageCircle } from "lucide-react";
import { getCourseWhatsappUrl } from "@/lib/course-registration";

type CourseThankYouPageProps = {
  courseName: string;
  coursePath: "/cursofullface" | "/cursotoxina" | "/cursofios";
};

export function CourseThankYouPage({ courseName, coursePath }: CourseThankYouPageProps) {
  const whatsappUrl = getCourseWhatsappUrl(courseName);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      window.location.replace(whatsappUrl);
    }, 5000);

    return () => window.clearTimeout(timeoutId);
  }, [whatsappUrl]);

  return (
    <main className="min-h-svh bg-[#121212] px-6 py-10 text-white sm:py-16">
      <div className="mx-auto flex min-h-[75svh] max-w-xl flex-col items-center justify-center text-center">
        <img
          src="/trafego/brand/lecler-academy-logo-white.png"
          alt="L'ECLER Academy"
          width={240}
          height={120}
          className="mb-10 h-24 w-60 object-contain"
        />
        <CheckCircle2 aria-hidden="true" className="mb-6 h-12 w-12 text-[#c9a84c]" />
        <p className="mb-3 text-sm font-medium text-[#e0c778]">{courseName}</p>
        <h1 className="font-display text-3xl leading-tight sm:text-4xl">Cadastro recebido!</h1>
        <p className="mt-5 max-w-md leading-relaxed text-white/80">
          Obrigado pelo seu interesse. Fale com a equipe da L'ECLER Academy para receber
          os detalhes do curso e tirar suas dúvidas.
        </p>
        <p className="mt-6 text-sm leading-relaxed text-white/65">
          Você será direcionado ao WhatsApp em 5 segundos.
          <br />
          Se ele não abrir, use o botão abaixo.
        </p>
        <a
          href={whatsappUrl}
          className="mt-6 inline-flex min-h-14 w-full max-w-sm items-center justify-center gap-3 rounded-lg bg-[#c9a84c] px-5 py-3 text-base font-semibold text-[#121212] transition-colors hover:bg-[#e0c778] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e0c778]"
        >
          <MessageCircle aria-hidden="true" className="h-5 w-5 shrink-0" />
          Entrar em contato
        </a>
        <Link
          to={coursePath}
          className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm text-white/70 underline-offset-4 hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Voltar para o curso
        </Link>
      </div>
    </main>
  );
}
