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
      { title: "Clínica L'ECLER — Odontologia Integrada e Harmonização Orofacial" },
      { name: "description", content: "Saúde e estética que parecem naturais. Odontologia integrada e HOF com a Dra. Cássia. Plano individualizado, técnico e seguro. Vagas limitadas." },
      { property: "og:title", content: "Clínica L'ECLER — Odontologia e Harmonização Orofacial" },
      { property: "og:description", content: "Tratamentos individualizados com a Dra. Cássia. 26+ anos de odontologia e 14+ de HOF." },
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
