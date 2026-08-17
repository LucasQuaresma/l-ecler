type MetaPixelPayload = Record<string, string | number | boolean | undefined>;
type MetaPixelFunction = {
  (command: string, event: string, payload?: MetaPixelPayload): void;
  callMethod?: (...args: unknown[]) => void;
  loaded?: boolean;
  push?: MetaPixelFunction;
  queue?: unknown[][];
  version?: string;
};

declare global {
  interface Window {
    _fbq?: MetaPixelFunction;
    fbq?: MetaPixelFunction;
    __metaPixelLastEvents?: Record<string, number>;
  }
}

const META_PIXEL_ID = "4520973931556677";
const MAX_ATTEMPTS = 20;
const RETRY_DELAY_MS = 250;
const DEDUPE_WINDOW_MS = 3000;

function ensureMetaPixel() {
  if (typeof window === "undefined" || typeof document === "undefined") return false;
  if (typeof window.fbq === "function") return true;

  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) {
      fbq.callMethod(...args);
      return;
    }

    fbq.queue?.push(args);
  } as MetaPixelFunction;

  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.queue = [];

  window.fbq = fbq;
  if (!window._fbq) window._fbq = fbq;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";

  const firstScript = document.getElementsByTagName("script")[0];
  if (firstScript?.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript);
  } else {
    document.head.appendChild(script);
  }

  window.fbq("init", META_PIXEL_ID);
  return true;
}

export function trackMetaLead(payload?: MetaPixelPayload, attempt = 0) {
  if (typeof window === "undefined") return;

  if (ensureMetaPixel() && typeof window.fbq === "function") {
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
