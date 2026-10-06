import { createFileRoute } from "@tanstack/react-router";
import { CourseThankYouPage } from "@/components/CourseThankYouPage";

export const Route = createFileRoute("/obrigadotoxina")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Cadastro recebido | Curso Toxina Botulínica | L'ECLER Academy" },
      { name: "description", content: "Fale com a equipe da L'ECLER Academy sobre o Curso Toxina Botulínica." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => <CourseThankYouPage courseName="Curso Toxina Botulínica" coursePath="/cursotoxina" />,
});
