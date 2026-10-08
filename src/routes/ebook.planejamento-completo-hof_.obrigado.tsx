import { createFileRoute } from "@tanstack/react-router";
import { EbookThankYouPage } from "@/components/EbookThankYouPage";

export const Route = createFileRoute("/ebook/planejamento-completo-hof_/obrigado")({
  ssr: false,
  head: () => ({
    meta: [{ name: "robots", content: "noindex, follow" }, { title: "Baixe o guia de planejamento completo na HOF | L'ECLER" }],
  }),
  component: PlanningEbookThankYouRoute,
});

function PlanningEbookThankYouRoute() {
  return (
    <EbookThankYouPage
      source="ebook-planejamento-completo-hof"
      title="Como transformar a avaliação em um planejamento completo na HOF"
      downloadHref="/ebooks/guia-planejamento-completo-hof.pdf"
      formPath="/ebook/planejamento-completo-hof"
      variant="light"
    />
  );
}
