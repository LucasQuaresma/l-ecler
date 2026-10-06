import { createFileRoute } from "@tanstack/react-router";
import { CourseThankYouPage } from "@/components/CourseThankYouPage";

export const Route = createFileRoute("/obrigadofullface")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Cadastro recebido | Curso Full Face | L'ECLER Academy" },
      { name: "description", content: "Fale com a equipe da L'ECLER Academy sobre o Curso Full Face." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => <CourseThankYouPage courseName="Curso Full Face" coursePath="/cursofullface" />,
});
