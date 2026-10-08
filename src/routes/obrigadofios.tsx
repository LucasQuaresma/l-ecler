import { createFileRoute } from "@tanstack/react-router";
import { CourseThankYouPage } from "@/components/CourseThankYouPage";

export const Route = createFileRoute("/obrigadofios")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Cadastro recebido | Curso de Fios Faciais | L'ECLER Academy" },
      { name: "description", content: "Fale com a equipe da L'ECLER Academy sobre o Curso de Fios Faciais." },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: () => <CourseThankYouPage courseName="Curso de Fios Faciais" coursePath="/cursofios" />,
});
