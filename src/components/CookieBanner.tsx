import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "lecler-cookie-consent";
const VISITOR_KEY = "lecler-visitor-id";

function getVisitorId() {
  let id = localStorage.getItem(VISITOR_KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(VISITOR_KEY, id);
  }
  return id;
}

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => setShow(true), 1500);
    return () => clearTimeout(t);
  }, []);

  async function handle(accepted: boolean) {
    localStorage.setItem(STORAGE_KEY, accepted ? "accepted" : "declined");
    setShow(false);
    try {
      await supabase.from("cookie_consents").insert({
        visitor_id: getVisitorId(),
        accepted,
      });
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 right-4 z-50 w-[calc(100%-2rem)] max-w-sm rounded-2xl border border-border bg-card p-4 shadow-elegant"
        >
          <div className="flex items-start gap-3">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
              <Cookie className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-foreground">
                Usamos cookies para melhorar sua experiência. Veja nossa{" "}
                <a href="/cookies" className="underline">Política de Cookies</a>.
              </p>
              <div className="mt-3 flex gap-2">
                <Button
                  size="sm"
                  onClick={() => handle(true)}
                  className="h-8 rounded-full bg-gradient-gold text-xs font-semibold text-primary"
                >
                  Aceitar
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handle(false)}
                  className="h-8 rounded-full text-xs"
                >
                  Recusar
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
