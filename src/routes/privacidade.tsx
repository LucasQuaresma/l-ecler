import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade, Clínica L'ECLER" },
      { name: "description", content: "Como a Clínica L'ECLER coleta, usa e protege seus dados pessoais, em conformidade com a LGPD." },
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
        <h1 className="mt-6 font-display text-4xl">Política de Privacidade</h1>
        <p className="mt-2 text-sm text-muted-foreground">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

        <div className="prose prose-sm mt-8 max-w-none space-y-6 text-foreground">
          <section>
            <h2 className="font-display text-2xl">1. Quem somos</h2>
            <p className="text-muted-foreground">
              A Clínica L'ECLER ("nós") é a controladora dos dados pessoais coletados nesta página,
              nos termos da Lei Geral de Proteção de Dados Pessoais, Lei nº 13.709/2018 (LGPD).
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl">2. Dados que coletamos</h2>
            <p className="text-muted-foreground">
              Coletamos os dados que você nos fornece voluntariamente nos formulários desta página,
              especificamente: nome completo e número de WhatsApp. Também coletamos dados técnicos
              de navegação (cookies, identificador anônimo) conforme nossa Política de Cookies.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl">3. Finalidades do tratamento</h2>
            <ul className="ml-5 list-disc space-y-1 text-muted-foreground">
              <li>Entrar em contato para apresentar nossos tratamentos;</li>
              <li>Realizar diagnóstico online e direcionamento personalizado;</li>
              <li>Cumprir obrigações legais e regulatórias;</li>
              <li>Melhorar a experiência de navegação na página.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl">4. Base legal</h2>
            <p className="text-muted-foreground">
              Tratamos seus dados com base no consentimento (art. 7º, I, LGPD) e no legítimo
              interesse (art. 7º, IX, LGPD), conforme o caso.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl">5. Compartilhamento</h2>
            <p className="text-muted-foreground">
              Seus dados são acessados apenas pela equipe interna da L'ECLER e por operadores
              técnicos necessários (armazenamento em nuvem e automação de mensagens), todos
              comprometidos com sigilo e proteção dos dados.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl">6. Seus direitos</h2>
            <p className="text-muted-foreground">
              Você pode, a qualquer momento, solicitar: confirmação da existência de tratamento;
              acesso, correção e eliminação dos seus dados; portabilidade; revogação do
              consentimento; e informações sobre compartilhamento. Para exercer esses direitos,
              entre em contato pelo WhatsApp informado.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl">7. Segurança</h2>
            <p className="text-muted-foreground">
              Adotamos medidas técnicas e organizacionais para proteger seus dados contra
              acessos não autorizados, perda ou alteração indevida.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl">8. Retenção</h2>
            <p className="text-muted-foreground">
              Mantemos seus dados pelo tempo necessário às finalidades descritas ou pelo prazo
              exigido por lei. Após esse período, são excluídos com segurança.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl">9. Contato</h2>
            <p className="text-muted-foreground">
              Para dúvidas relacionadas a esta política ou ao tratamento dos seus dados, entre em
              contato com o nosso Encarregado de Dados pelo WhatsApp da clínica.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
