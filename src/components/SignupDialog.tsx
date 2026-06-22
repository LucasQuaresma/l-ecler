import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { Loader2, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { SIGNUP_EVENT, N8N_WEBHOOK_URL } from "@/lib/signup-dialog";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome completo").max(100, "Nome muito longo"),
  whatsapp: z
    .string()
    .trim()
    .refine((v) => {
      const digits = v.replace(/\D/g, "");
      return digits.length >= 10 && digits.length <= 15;
    }, "WhatsApp inválido"),
});

function maskPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export function SignupDialog() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [errors, setErrors] = useState<{ name?: string; whatsapp?: string }>({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener(SIGNUP_EVENT, handler);
    return () => window.removeEventListener(SIGNUP_EVENT, handler);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse({ name, whatsapp });
    if (!parsed.success) {
      const f: typeof errors = {};
      for (const issue of parsed.error.issues) {
        f[issue.path[0] as "name" | "whatsapp"] = issue.message;
      }
      setErrors(f);
      return;
    }
    setErrors({});
    setLoading(true);

    const payload = {
      name: parsed.data.name,
      whatsapp: parsed.data.whatsapp,
      source: "landing-page",
      created_at: new Date().toISOString(),
    };

    try {
      const { error } = await supabase.from("leads").insert({
        name: payload.name,
        whatsapp: payload.whatsapp,
        source: payload.source,
      });
      if (error) throw error;

      // Webhook n8n (não bloqueia se falhar)
      fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => {});

      navigate({ to: "/obrigado" });
    } catch (err) {
      console.error(err);
      toast.error("Não foi possível enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md rounded-3xl border-gold/30 bg-card p-0 shadow-elegant">
        <div className="rounded-t-3xl bg-gradient-hero p-6 pt-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
            <Sparkles className="h-3.5 w-3.5" />
            Vagas limitadas
          </div>
          <DialogHeader className="mt-3">
            <DialogTitle className="font-display text-2xl text-foreground">
              Garanta sua vaga na L'ECLER
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Deixe seu contato e nossa equipe vai te chamar no WhatsApp em breve.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 p-6 pt-2">
          <div>
            <Label htmlFor="name">Nome completo</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
              className="mt-1.5"
              autoComplete="name"
            />
            {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
          </div>
          <div>
            <Label htmlFor="whatsapp">WhatsApp</Label>
            <Input
              id="whatsapp"
              inputMode="tel"
              value={whatsapp}
              onChange={(e) => setWhatsapp(maskPhone(e.target.value))}
              placeholder="(00) 00000-0000"
              className="mt-1.5"
              autoComplete="tel"
            />
            {errors.whatsapp && <p className="mt-1 text-xs text-destructive">{errors.whatsapp}</p>}
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="h-12 w-full rounded-full bg-gradient-gold text-base font-semibold text-primary shadow-gold"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Quero minha vaga"}
          </Button>
          <p className="text-center text-[11px] text-muted-foreground">
            Ao enviar, você concorda com nossa{" "}
            <a href="/privacidade" className="underline">Política de Privacidade</a>.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
