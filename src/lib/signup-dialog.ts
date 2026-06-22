export const SIGNUP_EVENT = "lecler:open-signup";
export function openSignupDialog() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(SIGNUP_EVENT));
  }
}

// Webhook URL — substituir conforme necessário no n8n
export const N8N_WEBHOOK_URL =
  "https://projeto01-n8n.gmxuno.easypanel.host/webhook/SUBSTITUIR-AQUI";
