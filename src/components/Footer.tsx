import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Mail, Phone } from "lucide-react";
import { services } from "@/lib/services";
import { WHATSAPP_URL } from "@/lib/signup-dialog";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="font-display text-2xl">
              Clínica <span className="text-gradient-gold">L'ECLER</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Odontologia integrada, harmonização orofacial e estética avançada para quem busca
              resultado natural, saúde e segurança.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.instagram.com/lecler_clinica/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-gold/40 hover:text-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Tratamentos
            </h4>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/servicos/$slug"
                    params={{ slug: s.slug }}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Contato
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-gold" />
                <span>R. José Domingues, 577 - Centro, Bragança Paulista - SP</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 flex-none text-gold" />
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-foreground">
                  WhatsApp para agendamento
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 flex-none text-gold" />
                <span>contato@clinicalecler.com.br</span>
              </li>
            </ul>
            <h4 className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Institucional
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="text-muted-foreground hover:text-foreground">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-muted-foreground hover:text-foreground">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Clínica L'ECLER — Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
