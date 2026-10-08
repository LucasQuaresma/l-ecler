import { createFileRoute } from "@tanstack/react-router";
import { EbookThankYouPage } from "@/components/EbookThankYouPage";

export const Route = createFileRoute("/ebook/10-erros-hof_/obrigado")({
  ssr: false,
  head: () => ({
    meta: [{ name: "robots", content: "noindex, follow" }, { title: "Baixe o guia de resultados naturais na HOF | L'ECLER" }],
  }),
  component: TenErrorsEbookThankYouRoute,
});

function TenErrorsEbookThankYouRoute() {
  return (
    <EbookThankYouPage
      source="ebook-10-erros-hof"
      title="Os 10 erros que impedem profissionais de alcançar resultados naturais na HOF"
      downloadHref="/ebooks/guia-10-erros-resultados-naturais-hof.pdf"
      formPath="/ebook/10-erros-hof"
      variant="dark"
    />
  );
}
