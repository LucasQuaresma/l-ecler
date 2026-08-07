import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Calendar,
  GraduationCap,
  Sparkles,
  Gift,
  Home,
  Stethoscope,
  Instagram,
  MapPin,
} from "lucide-react";
import leclerSymbol from "@/assets/lecler-symbol.png";

export const Route = createFileRoute("/linktree")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "L'ECLER | Links" },
      {
        name: "description",
        content:
          "Todos os links da Clínica L'ECLER em um só lugar. Agende sua avaliação, conheça nossos cursos e acompanhe nossas redes.",
      },
      { property: "og:title", content: "L'ECLER | Links" },
      {
        property: "og:description",
        content: "Todos os links da Clínica L'ECLER em um só lugar.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://l-ecler.lovable.app/linktree" }],
  }),
  component: LinktreePage,
});

const links = [
  {
    label: "Agendar avaliação no WhatsApp",
    href: "https://api.whatsapp.com/send?phone=5511915633857&text=Ol%C3%A1%2C%20vim%20pelo%20link%20da%20L'ECLER%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.",
    icon: MessageCircle,
    highlight: true,
  },
  {
    label: "Beauty Week de Aniversário",
    href: "/beauty-week",
    icon: Sparkles,
    highlight: false,
  },
  {
    label: "Gift Voucher L'ECLER",
    href: "/gift-voucher",
    icon: Gift,
    highlight: false,
  },
  {
    label: "Cursos e treinamentos",
    href: "/academy",
    icon: GraduationCap,
    highlight: false,
  },
  {
    label: "Curso de Fios Faciais",
    href: "/cursofios",
    icon: Stethoscope,
    highlight: false,
  },
  {
    label: "Conheça a clínica",
    href: "/",
    icon: Home,
    highlight: false,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/lecler",
    icon: Instagram,
    highlight: false,
  },
];

function LinktreePage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-hidden bg-gradient-to-b from-background to-cream px-4 py-12">
      {/* Decorative glows */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-rose/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex w-full max-w-sm flex-col items-center"
      >
        {/* Avatar / Logo */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-gold blur-md" />
          <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-2 border-gold/30 bg-card shadow-elegant">
            <img
              src={leclerSymbol}
              alt="L'ECLER"
              className="h-14 w-auto opacity-90"
            />
          </div>
        </div>

        <h1 className="mt-6 text-center font-display text-3xl font-semibold text-foreground">
          Clínica L'ECLER
        </h1>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Saúde, estética e bem-estar multiprofissional
        </p>

        <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
          <MapPin className="h-3.5 w-3.5" />
          Bragança Paulista — SP
        </div>

        {/* Links */}
        <nav className="mt-10 flex w-full flex-col gap-3" aria-label="Links da clínica">
          {links.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.07 }}
              className={[
                "group flex items-center gap-4 rounded-2xl border px-5 py-4 text-sm font-medium shadow-soft transition-all",
                "hover:scale-[1.02] hover:shadow-elegant active:scale-[0.99]",
                link.highlight
                  ? "border-gold/40 bg-gradient-gold text-primary-foreground"
                  : "border-border bg-card text-foreground hover:border-gold/30 hover:bg-cream/50",
              ].join(" ")}
            >
              <span
                className={[
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                  link.highlight ? "bg-primary-foreground/20" : "bg-gold/10 text-gold",
                ].join(" ")}
              >
                <link.icon className="h-5 w-5" />
              </span>
              <span className="flex-1">{link.label}</span>
              <span
                className={[
                  "h-2 w-2 rounded-full",
                  link.highlight ? "bg-primary-foreground/60" : "bg-gold/60",
                ].join(" ")}
              />
            </motion.a>
          ))}
        </nav>

        {/* Footer note */}
        <p className="mt-10 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Clínica L'ECLER · Todos os direitos reservados
        </p>
      </motion.div>
    </main>
  );
}
