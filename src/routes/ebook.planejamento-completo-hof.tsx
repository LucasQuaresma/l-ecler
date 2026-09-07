import { createFileRoute } from "@tanstack/react-router";
import cassiaPortrait from "@/assets/cassia-quiz-white.webp";
import { EbookLeadPage } from "@/components/EbookLeadPage";

export const Route = createFileRoute("/ebook/planejamento-completo-hof")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Como transformar a avaliação em planejamento completo na HOF | L'ECLER" },
      {
        name: "description",
        content:
          "Guia gratuito para profissionais habilitados sobre prioridades, etapas e acompanhamento no planejamento em Harmonização Orofacial.",
      },
      {
        property: "og:title",
        content: "Transforme a avaliação em um planejamento completo na HOF",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://l-ecler.lovable.app/ebook/planejamento-completo-hof" },
    ],
  }),
  component: PlanningEbookRoute,
});

function PlanningEbookRoute() {
  return (
    <EbookLeadPage
      source="ebook-planejamento-completo-hof"
      variant="light"
      title="Como transformar a avaliação em um"
      highlightedTitle="planejamento completo na HOF"
      description="Organize diagnóstico, prioridades e etapas para apresentar um plano individualizado, compreensível e clinicamente responsável."
      coverImage="/ebooks/capa-planejamento-completo-hof.png"
      portraitImage={cassiaPortrait}
      thankYouPath="/ebook/planejamento-completo-hof/obrigado"
      benefits={[
        "Perguntas para compreender a queixa real do paciente",
        "Critérios para organizar necessidades por prioridade",
        "Estrutura de plano em etapas, acompanhamento e manutenção",
        "Modelo e checklist para uma avaliação mais estratégica",
      ]}
    />
  );
}
