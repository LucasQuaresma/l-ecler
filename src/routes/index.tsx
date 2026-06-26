import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { ModulesSection } from "@/components/ModulesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { MethodSection } from "@/components/MethodSection";
import { PricingSection } from "@/components/PricingSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clínica L'ECLER — Agende sua avaliação em Bragança Paulista" },
      { name: "description", content: "Converse com a equipe da L'ECLER e entenda o melhor caminho para cuidar do seu sorriso, da sua face e da sua autoestima com naturalidade e segurança." },
      { property: "og:title", content: "Clínica L'ECLER — Odontologia, HOF e estética avançada" },
      { property: "og:description", content: "Diagnóstico online, avaliação individualizada e plano conduzido pela Dra. Cássia em Bragança Paulista." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ModulesSection />
      <BenefitsSection />
      <MethodSection />
      <PricingSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
