import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { ModulesSection } from "@/components/ModulesSection";
import { SignatureCareSection } from "@/components/SignatureCareSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { MethodSection } from "@/components/MethodSection";
import { PricingSection } from "@/components/PricingSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clínica L'ECLER, saúde, bem-estar e odontologia integrada" },
      {
        name: "description",
        content:
          "Clínica L'ECLER em Bragança Paulista: saúde e bem-estar multiprofissional, odontologia integrada, Invisalign, Airflow, Harmonização Orofacial e estética natural com a Dra. Cássia Blasques.",
      },
      { property: "og:title", content: "Clínica L'ECLER, saúde, bem-estar e odontologia integrada" },
      {
        property: "og:description",
        content: "Sorriso, face e pele avaliados em conjunto para resultados naturais, seguros e sofisticados.",
      },
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
      <SignatureCareSection />
      <BenefitsSection />
      <MethodSection />
      <PricingSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
