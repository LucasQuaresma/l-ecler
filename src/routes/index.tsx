import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl, CLINIC_JSONLD, jsonLdScript, WEBSITE_JSONLD } from "@/lib/site";
import { HeroSection } from "@/components/HeroSection";
import { ModulesSection } from "@/components/ModulesSection";
import { SignatureCareSection } from "@/components/SignatureCareSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { MethodSection } from "@/components/MethodSection";
import { PricingSection } from "@/components/PricingSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const HOME_TITLE = "Dentista em Bragança Paulista | Clínica L’Ecler";
const HOME_DESCRIPTION =
  "Clínica L'ECLER em Bragança Paulista/SP: odontologia integrada, Invisalign, Airflow, implantes, Harmonização Orofacial e estética natural com a Dra. Cássia Blasques.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: HOME_TITLE },
      { name: "description", content: HOME_DESCRIPTION },
      { property: "og:title", content: HOME_TITLE },
      { property: "og:description", content: HOME_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
    scripts: [jsonLdScript(WEBSITE_JSONLD), jsonLdScript(CLINIC_JSONLD)],
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
