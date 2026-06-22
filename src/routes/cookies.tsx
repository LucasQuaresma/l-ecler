import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Política de Cookies — Clínica L'ECLER" },
      { name: "description", content: "Saiba quais cookies usamos e como gerenciar suas preferências." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Voltar
        </Link>
        <h1 className="mt-6 font-display text-4xl">Política de Cookies</h1>
        <p className="mt-2 text-sm text-muted-foreground">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

        <div className="mt-8 space-y-6 text-foreground">
          <section>
            <h2 className="font-display text-2xl">O que são cookies?</h2>
            <p className="text-muted-foreground">
              Cookies são pequenos arquivos armazenados no seu navegador que ajudam o site a
              lembrar de informações sobre sua visita.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl">Tipos de cookies que usamos</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-2xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground">Cookies essenciais</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Necessários para o funcionamento básico do site (ex.: registro da sua escolha
                  no banner de consentimento). Não podem ser desativados.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground">Cookies de preferência</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Armazenam um identificador anônimo de visitante para evitar perguntar sua
                  preferência de cookies a cada visita.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground">Cookies analíticos (opcional)</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Ativados apenas se você aceitar. Ajudam a entender como os visitantes
                  interagem com a página, de forma agregada e anônima.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl">Como gerenciar</h2>
            <p className="text-muted-foreground">
              Você pode aceitar ou recusar cookies no banner exibido ao acessar a página. Também
              é possível limpar os cookies diretamente nas configurações do seu navegador.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl">Mais informações</h2>
            <p className="text-muted-foreground">
              Para detalhes sobre o tratamento dos seus dados, consulte nossa{" "}
              <Link to="/privacidade" className="underline">Política de Privacidade</Link>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
