import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  MessageCircle,
  GraduationCap,
  Sparkles,
  Gift,
  Home,
  Stethoscope,
  MapPin,
} from "lucide-react";
import leclerLogo from "@/assets/lecler-logo.png";

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
];

function LinktreePage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-hidden bg-gradient-to-b from-background to-cream px-4 py-12">
      {/* Wavy watermark background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-40">
        <svg
          className="absolute -left-1/4 -top-1/4 h-[150%] w-[150%] animate-spin-slow text-gold/10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="wavePattern" width="100" height="20" patternUnits="userSpaceOnUse">
              <path
                d="M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#wavePattern)" />
        </svg>
        <svg
          className="absolute -right-1/4 bottom-0 h-[120%] w-[120%] animate-spin-slow text-gold/8"
          style={{ animationDirection: "reverse", animationDuration: "60s" }}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="wavePattern2" width="100" height="16" patternUnits="userSpaceOnUse">
              <path
                d="M0 8 Q 12.5 0, 25 8 T 50 8 T 75 8 T 100 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.4"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#wavePattern2)" />
        </svg>
      </div>

      {/* Decorative glows */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-rose/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex w-full max-w-sm flex-col items-center"
      >
        {/* Logo */}
        <div className="relative">
          <div className="absolute inset-0 rounded-2xl bg-gradient-gold blur-md" />
          <div className="relative flex h-24 w-56 items-center justify-center rounded-2xl border-2 border-gold/30 bg-card px-6 shadow-elegant">
            <img
              src={leclerLogo}
              alt="L'ECLER"
              className="h-16 w-auto object-contain"
            />
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
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
                "shine-border group relative flex items-center gap-4 overflow-hidden rounded-2xl border px-5 py-4 text-sm font-medium shadow-soft transition-all",
                "hover:scale-[1.02] hover:shadow-elegant active:scale-[0.99]",
                link.highlight
                  ? "border-gold/40 bg-gradient-gold text-primary-foreground"
                  : "border-border bg-card text-foreground hover:border-gold/30 hover:bg-cream/50",
              ].join(" ")}
            >
              <span className="shine-border-glow" aria-hidden="true" />
              <span
                className={[
                  "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                  link.highlight ? "bg-primary-foreground/20" : "bg-gold/10 text-gold",
                ].join(" ")}
              >
                <link.icon className="h-5 w-5" />
              </span>
              <span className="relative z-10 flex-1">{link.label}</span>
              <span
                className={[
                  "relative z-10 h-2 w-2 rounded-full",
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

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 45s linear infinite;
        }

        .shine-border {
          isolation: isolate;
        }
        .shine-border-glow {
          position: absolute;
          inset: -50%;
          z-index: 0;
          border-radius: inherit;
          opacity: 0;
          background: conic-gradient(
            from 0deg,
            transparent 0%,
            transparent 20%,
            oklch(0.85 0.13 85 / 0.9) 45%,
            oklch(0.78 0.14 78 / 0.95) 50%,
            oklch(0.85 0.13 85 / 0.9) 55%,
            transparent 80%,
            transparent 100%
          );
          transform: scale(0.6) rotate(0deg);
          transition: opacity 0.4s ease;
          pointer-events: none;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          padding: 2px;
        }
        .shine-border:hover .shine-border-glow {
          opacity: 1;
          animation: shine-rotate 1.6s linear infinite;
        }
        @keyframes shine-rotate {
          from { transform: scale(0.6) rotate(0deg); }
          to { transform: scale(0.6) rotate(360deg); }
        }
      `}</style>
    </main>
  );
}

