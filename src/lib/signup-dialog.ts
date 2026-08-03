export const SIGNUP_EVENT = "lecler:open-signup";

export interface SignupConfig {
  webhookUrl?: string;
  source?: string;
  whatsappUrl?: string;
  redirectTo?: string;
  title?: string;
  description?: string;
  ctaText?: string;
}

export function openSignupDialog(config?: SignupConfig) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent<SignupConfig | undefined>(SIGNUP_EVENT, { detail: config })
    );
  }
}

export const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5511915633857&text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20L'ECLER%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.";

// Webhook URL padrão da landing page
export const N8N_WEBHOOK_URL =
  "https://projeto01-n8n.gmxuno.easypanel.host/webhook/SUBSTITUIR-AQUI";

// Beauty Week
export const BEAUTYWEEK_WEBHOOK_URL =
  "https://projeto01-n8n.gmxuno.easypanel.host/webhook/BEAUTYWEEK";

export const BEAUTYWEEK_WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5511960578741&text=Ol%C3%A1%2C%20vim%20pela%20Beauty%20Week%20da%20L'ECLER%20e%20quero%20reservar%20minha%20vaga.";

export const BEAUTYWEEK_SIGNUP_CONFIG: SignupConfig = {
  webhookUrl: BEAUTYWEEK_WEBHOOK_URL,
  source: "beauty-week",
  whatsappUrl: BEAUTYWEEK_WHATSAPP_URL,
  title: "Reservar minha vaga na Beauty Week",
  description:
    "Deixe seu contato e a equipe da L'ECLER chama você no WhatsApp para confirmar seu horário na semana de 24 a 30 de agosto.",
  ctaText: "Quero reservar minha vaga",
};
