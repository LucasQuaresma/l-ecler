export const SIGNUP_EVENT = "lecler:open-signup";
export function openSignupDialog() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(SIGNUP_EVENT));
  }
}

export const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5511915633857&text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20L'ECLER%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.";

// Webhook URL — substituir conforme necessário no n8n
export const N8N_WEBHOOK_URL =
  "https://projeto01-n8n.gmxuno.easypanel.host/webhook/SUBSTITUIR-AQUI";
