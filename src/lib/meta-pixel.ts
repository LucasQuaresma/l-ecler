type MetaPixelPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    fbq?: (command: string, event: string, payload?: MetaPixelPayload) => void;
    __metaPixelLastEvents?: Record<string, number>;
  }
}

const MAX_ATTEMPTS = 20;
const RETRY_DELAY_MS = 250;
const DEDUPE_WINDOW_MS = 3000;

export function trackMetaLead(payload?: MetaPixelPayload, attempt = 0) {
  if (typeof window === "undefined") return;

  if (typeof window.fbq === "function") {
    const eventKey = `Lead:${JSON.stringify(payload ?? {})}`;
    const lastEvents = window.__metaPixelLastEvents ?? {};
    const lastTrackedAt = lastEvents[eventKey] ?? 0;
    const now = Date.now();

    if (now - lastTrackedAt < DEDUPE_WINDOW_MS) return;

    window.__metaPixelLastEvents = {
      ...lastEvents,
      [eventKey]: now,
    };

    window.fbq("track", "Lead", payload);
    return;
  }

  if (attempt >= MAX_ATTEMPTS) return;

  window.setTimeout(() => {
    trackMetaLead(payload, attempt + 1);
  }, RETRY_DELAY_MS);
}
