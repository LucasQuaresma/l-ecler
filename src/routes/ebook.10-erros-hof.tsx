import { createFileRoute } from "@tanstack/react-router";
import cassiaPortrait from "@/assets/cassia-quiz-authority.webp";
import { EbookLeadPage } from "@/components/EbookLeadPage";

export const Route = createFileRoute("/ebook/10-erros-hof")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "10 erros que comprometem resultados naturais na HOF | L'ECLER" },
      {
        name: "description",
        content:
          "Guia gratuito para profissionais habilitados sobre avaliação, planejamento e decisões clínicas na Harmonização Orofacial.",
      },
      { property: "og:title", content: "Os 10 erros que impedem resultados naturais na HOF" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://l-ecler.lovable.app/ebook/10-erros-hof" }],
  }),
  component: TenErrorsEbookRoute,
});

function TenErrorsEbookRoute() {
  return (
    <EbookLeadPage
      source="ebook-10-erros-hof"
      variant="dark"
      title="Os 10 erros que impedem profissionais de alcançar"
      highlightedTitle="resultados naturais na HOF"
      description="Um guia direto para revisar avaliação, diagnóstico, escolha da técnica e planejamento antes do procedimento."
      coverImage="/ebooks/capa-10-erros-hof.png"
      portraitImage={cassiaPortrait}
      thankYouPath="/ebook/10-erros-hof/obrigado"
      benefits={[
        "Os erros que mais comprometem naturalidade e equilíbrio",
        "Os cinco pilares de um resultado verdadeiramente natural",
        "Checklist prático antes de realizar um procedimento de HOF",
        "Leitura clínica da face em repouso e em movimento",
      ]}
    />
  );
}
