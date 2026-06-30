import { Link } from "@tanstack/react-router";
import leclerLogo from "@/assets/lecler-logo.png";
import leclerSymbol from "@/assets/lecler-symbol.png";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="inline-flex items-center gap-3" aria-label="Clínica L'ECLER">
          <img
            src={leclerSymbol}
            alt=""
            aria-hidden="true"
            width={296}
            height={217}
            className="h-8 w-auto opacity-85 sm:h-9"
          />
          <img
            src={leclerLogo}
            alt="L'ECLER Saúde e Bem-Estar"
            width={408}
            height={178}
            className="h-9 w-auto sm:h-10"
          />
        </Link>
        <nav className="hidden items-center gap-7 text-sm md:flex">
          <a href="/#modulos" className="text-muted-foreground transition-colors hover:text-foreground">
            Tratamentos
          </a>
          <a href="/#beneficios" className="text-muted-foreground transition-colors hover:text-foreground">
            Diferenciais
          </a>
          <a href="/#metodo" className="text-muted-foreground transition-colors hover:text-foreground">
            Como funciona
          </a>
          <Link to="/blog" className="text-muted-foreground transition-colors hover:text-foreground">
            Blog
          </Link>
          <a href="/#cta" className="text-muted-foreground transition-colors hover:text-foreground">
            Contato
          </a>
        </nav>
        <a
          href="/#cta"
          className="hidden rounded-full bg-gradient-gold px-5 py-2 text-sm font-semibold text-primary shadow-soft transition-transform hover:scale-[1.02] sm:inline-flex"
        >
          Agendar avaliação
        </a>
      </div>
    </header>
  );
}
