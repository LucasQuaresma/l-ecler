import {
  Smile, Anchor, Sparkles, Layers, AlignCenter, Activity,
  Leaf, Syringe, Wand2, Droplets, Flame, Zap,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  text: string;
  description: string;
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "odontologia-estetica",
    icon: Smile,
    title: "Odontologia Estética",
    text: "Sorrisos naturais, harmônicos e fiéis ao seu rosto.",
    description:
      "Planejamento de sorriso personalizado, respeitando proporções faciais, traços e personalidade de cada paciente. Tecnologia digital aliada a sensibilidade estética para resultados naturais e duradouros.",
    benefits: [
      "Digital Smile Design (DSD)",
      "Clareamento dental de alto padrão",
      "Restaurações estéticas indetectáveis",
      "Resultados naturais e harmônicos",
    ],
  },
  {
    slug: "implantes",
    icon: Anchor,
    title: "Implantes",
    text: "Reabilitação completa com precisão técnica e conforto.",
    description:
      "Reabilitação oral com implantes dentários de última geração, planejamento digital guiado e equipe multidisciplinar para devolver função, estética e autoestima.",
    benefits: [
      "Cirurgia guiada por computador",
      "Implantes unitários, múltiplos e totais",
      "Carga imediata quando indicada",
      "Acompanhamento contínuo",
    ],
  },
  {
    slug: "proteses",
    icon: Layers,
    title: "Próteses",
    text: "Soluções funcionais e estéticas, planejadas individualmente.",
    description:
      "Próteses fixas, removíveis e sobre implantes desenvolvidas com materiais nobres e tecnologia CAD/CAM para máxima precisão, conforto e estética.",
    benefits: [
      "Próteses em zircônia e dissilicato",
      "Tecnologia CAD/CAM",
      "Adaptação confortável",
      "Estética altamente natural",
    ],
  },
  {
    slug: "facetas-e-lentes-de-contato",
    icon: Sparkles,
    title: "Facetas e Lentes de Contato",
    text: "Design de sorriso minimamente invasivo.",
    description:
      "Facetas e lentes de contato dental ultrafinas em cerâmica, com mínimo desgaste, para corrigir forma, cor e proporção do sorriso de forma duradoura.",
    benefits: [
      "Mock-up e prévia do resultado",
      "Mínimo desgaste dental",
      "Cerâmicas de alta translucidez",
      "Sorriso harmônico e natural",
    ],
  },
  {
    slug: "ortodontia-invisalign",
    icon: AlignCenter,
    title: "Ortodontia / Invisalign",
    text: "Alinhamento discreto, previsível e eficiente.",
    description:
      "Tratamento ortodôntico com alinhadores invisíveis Invisalign e aparelhos estéticos, planejamento digital 3D e acompanhamento próximo em cada etapa.",
    benefits: [
      "Alinhadores invisíveis Invisalign",
      "Planejamento digital 3D",
      "Maior conforto e discrição",
      "Previsibilidade do resultado",
    ],
  },
  {
    slug: "endodontia",
    icon: Activity,
    title: "Endodontia (Canal)",
    text: "Tratamento de canal com tecnologia e mínimo desconforto.",
    description:
      "Tratamentos endodônticos com microscopia, instrumentação rotatória e protocolos modernos para preservar o dente natural com segurança e conforto.",
    benefits: [
      "Microscopia operatória",
      "Instrumentação rotatória",
      "Sessões otimizadas",
      "Mínimo desconforto pós-operatório",
    ],
  },
  {
    slug: "odontologia-preventiva-integrativa",
    icon: Leaf,
    title: "Odontologia Preventiva e Integrativa",
    text: "Saúde bucal aliada ao bem-estar do corpo todo.",
    description:
      "Visão integrativa que conecta saúde bucal e bem-estar sistêmico, com protocolos preventivos personalizados para manter sorriso e saúde em equilíbrio.",
    benefits: [
      "Avaliação integrativa",
      "Protocolos preventivos personalizados",
      "Higienização profissional",
      "Acompanhamento contínuo",
    ],
  },
  {
    slug: "botox-e-preenchimentos",
    icon: Syringe,
    title: "Botox & Preenchimentos",
    text: "Suavização de linhas e reposição de volumes com naturalidade.",
    description:
      "Toxina botulínica e preenchimentos com ácido hialurônico aplicados com técnica refinada para suavizar linhas e devolver volumes preservando expressão e naturalidade.",
    benefits: [
      "Toxina botulínica de alta qualidade",
      "Preenchimento com ácido hialurônico",
      "Resultados naturais",
      "Plano personalizado",
    ],
  },
  {
    slug: "fios-e-bioestimulo",
    icon: Wand2,
    title: "Fios e Bioestímulo",
    text: "Lifting, sustentação e produção de colágeno.",
    description:
      "Fios de PDO e bioestimuladores de colágeno para lifting, firmeza e qualidade da pele a médio e longo prazo, com efeito progressivo e natural.",
    benefits: [
      "Fios de sustentação PDO",
      "Bioestimuladores de colágeno",
      "Efeito lifting natural",
      "Melhora da qualidade da pele",
    ],
  },
  {
    slug: "gerenciamento-dermico",
    icon: Droplets,
    title: "Gerenciamento Dérmico",
    text: "Peelings, peptídeos e protocolos contínuos de pele.",
    description:
      "Protocolos contínuos com peelings, peptídeos e ativos de alta performance para tratar manchas, textura, viço e saúde da pele de forma progressiva.",
    benefits: [
      "Peelings personalizados",
      "Peptídeos e ativos avançados",
      "Skincare profissional",
      "Resultados progressivos",
    ],
  },
  {
    slug: "laser-co2-e-hipro",
    icon: Flame,
    title: "Laser CO₂ e HIPRO",
    text: "Tecnologias de última geração para resultados duradouros.",
    description:
      "Laser de CO₂ fracionado e ultrassom microfocado HIPRO para rejuvenescimento, firmeza e renovação da pele com tecnologia de ponta.",
    benefits: [
      "Laser de CO₂ fracionado",
      "Ultrassom microfocado HIPRO",
      "Estímulo profundo de colágeno",
      "Resultados duradouros",
    ],
  },
  {
    slug: "emagrecimento-facial",
    icon: Zap,
    title: "Emagrecimento Facial",
    text: "Biorreguladores e protocolos para definição do rosto.",
    description:
      "Protocolos de emagrecimento facial com biorreguladores e técnicas combinadas para afinar contornos, definir mandíbula e harmonizar o rosto.",
    benefits: [
      "Biorreguladores faciais",
      "Definição de contorno",
      "Redução de gordura localizada",
      "Resultado harmônico",
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);
