import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Clínica L'ECLER — Todos os direitos reservados.</p>
        <nav className="flex gap-6">
          <Link to="/privacidade" className="transition-colors hover:text-foreground">
            Privacidade
          </Link>
          <Link to="/cookies" className="transition-colors hover:text-foreground">
            Cookies
          </Link>
        </nav>
      </div>
    </footer>
  );
}
