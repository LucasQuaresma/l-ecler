import { useEffect, useState } from "react";
import { ArrowLeft, CheckCircle2, Download, FileText, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hasConfirmedEbookLead, type EbookLeadSource } from "@/lib/ebook-funnel";
import leclerLogo from "@/assets/lecler-logo.png";

type EbookThankYouPageProps = {
  source: EbookLeadSource;
  title: string;
  downloadHref: string;
  formPath: string;
  variant: "dark" | "light";
};

export function EbookThankYouPage({
  source,
  title,
  downloadHref,
  formPath,
  variant,
}: EbookThankYouPageProps) {
  const [confirmed, setConfirmed] = useState<boolean | null>(null);

  useEffect(() => {
    setConfirmed(hasConfirmedEbookLead(source));
  }, [source]);

  const dark = variant === "dark";

  return (
    <main
      className={
        dark ? "min-h-screen bg-[#0d0c0b] text-white" : "min-h-screen bg-[#f5f1e9] text-[#241c18]"
      }
    >
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col px-6 py-8 sm:px-10 sm:py-12">
        <img
          src={dark ? "/trafego/brand/lecler-clinica-logo-white.png" : leclerLogo}
          alt="L'ECLER Saúde e Bem-Estar"
          className="h-auto w-36 sm:w-44"
        />

        <div className="my-auto py-12">
          {confirmed === null ? (
            <div className="flex items-center gap-3 text-sm opacity-70">
              <Loader2 className="h-5 w-5 animate-spin" />
              Confirmando seu cadastro...
            </div>
          ) : confirmed ? (
            <section
              className={
                dark
                  ? "border border-white/12 bg-[#171411] p-7 sm:p-10"
                  : "border border-[#332924]/12 bg-white p-7 shadow-xl sm:p-10"
              }
            >
              <CheckCircle2 className="h-11 w-11 text-[#b99750]" />
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#b99750]">
                Cadastro recebido
              </p>
              <h1 className="mt-3 font-display text-4xl leading-tight tracking-[0] sm:text-5xl">
                Seu material está pronto.
              </h1>
              <p
                className={
                  dark
                    ? "mt-5 max-w-2xl leading-7 text-white/65"
                    : "mt-5 max-w-2xl leading-7 text-[#6d625c]"
                }
              >
                Recebemos seu interesse em <strong>{title}</strong>. Use o botão abaixo para baixar
                o PDF.
              </p>

              <Button
                asChild
                className="mt-8 h-12 rounded-md bg-[#d8bc77] px-6 font-bold text-[#17120f] hover:bg-[#e3ca8c]"
              >
                <a href={downloadHref} download>
                  <Download className="mr-2 h-4 w-4" /> Baixar e-book em PDF
                </a>
              </Button>

              <div
                className={
                  dark
                    ? "mt-7 flex gap-3 border-t border-white/10 pt-5 text-sm text-white/48"
                    : "mt-7 flex gap-3 border-t border-[#332924]/10 pt-5 text-sm text-[#756961]"
                }
              >
                <FileText className="mt-0.5 h-4 w-4 shrink-0" />O arquivo também pode ser aberto
                diretamente no navegador. O material tem caráter educativo e é direcionado a
                profissionais habilitados.
              </div>
            </section>
          ) : (
            <section
              className={
                dark
                  ? "border border-white/12 bg-[#171411] p-7 sm:p-10"
                  : "border border-[#332924]/12 bg-white p-7 shadow-xl sm:p-10"
              }
            >
              <FileText className="h-11 w-11 text-[#b99750]" />
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#b99750]">
                Cadastro não identificado
              </p>
              <h1 className="mt-3 font-display text-4xl leading-tight tracking-[0] sm:text-5xl">
                Conclua o cadastro para liberar o material.
              </h1>
              <p
                className={
                  dark
                    ? "mt-5 max-w-2xl leading-7 text-white/65"
                    : "mt-5 max-w-2xl leading-7 text-[#6d625c]"
                }
              >
                Esta página foi aberta sem uma confirmação de gravação nesta sessão. Volte ao
                formulário e envie seus dados para acessar o e-book.
              </p>
              <Button
                asChild
                variant="outline"
                className={
                  dark
                    ? "mt-8 h-12 rounded-md border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                    : "mt-8 h-12 rounded-md border-[#332924]/20 bg-transparent"
                }
              >
                <a href={formPath}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Voltar ao cadastro
                </a>
              </Button>
            </section>
          )}
        </div>

        <p
          className={dark ? "text-xs leading-5 text-white/35" : "text-xs leading-5 text-[#756961]"}
        >
          L’Ecler Saúde e Bem-Estar · Conteúdo educacional em Harmonização Orofacial
        </p>
      </div>
    </main>
  );
}
