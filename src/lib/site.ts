// Canonical public origin and clinic facts used in SEO metadata and structured data.
export const SITE_URL = "https://leclersaude.com.br";
export const SITE_NAME = "Clínica L'ECLER";

export const absoluteUrl = (path: string) => `${SITE_URL}${path === "/" ? "/" : path}`;

export const CLINIC_JSONLD = {
  "@context": "https://schema.org",
  "@type": ["Dentist", "LocalBusiness"],
  "@id": `${SITE_URL}/#clinica`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  telephone: "+55 11 91563-3857",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua José Domingues, 577, Centro",
    addressLocality: "Bragança Paulista",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  areaServed: { "@type": "City", name: "Bragança Paulista" },
  employee: { "@type": "Person", name: "Dra. Cássia Blasques" },
};

export const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  inLanguage: "pt-BR",
};

export const breadcrumbJsonLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: absoluteUrl(it.path),
  })),
});

export const jsonLdScript = (data: unknown) => ({
  type: "application/ld+json",
  children: JSON.stringify(data),
});

/** Canonical + og:url for a page path. */
export const canonicalMeta = (path: string) => ({
  meta: [{ property: "og:url", content: absoluteUrl(path) }],
  links: [{ rel: "canonical", href: absoluteUrl(path) }],
});

// SEO titles/H1 suffix for each treatment page (slug -> local SEO name).
export const SERVICE_SEO_NAMES: Record<string, string> = {
  "odontologia-estetica": "Odontologia Estética",
  implantes: "Implantes Dentários",
  proteses: "Próteses Dentárias",
  "facetas-e-lentes-de-contato": "Facetas e Lentes de Contato",
  "ortodontia-invisalign": "Invisalign",
  endodontia: "Tratamento de Canal",
  "odontologia-preventiva-integrativa": "Odontologia Preventiva",
  "airflow-prevencao-suica": "Limpeza Dentária com Airflow",
  "botox-e-preenchimentos": "Botox e Preenchimento",
  "fios-e-bioestimulo": "Fios de PDO e Bioestimuladores",
  "gerenciamento-dermico": "Gerenciamento Dérmico",
  "laser-co2-e-hipro": "Laser CO2 e HIPRO",
};
