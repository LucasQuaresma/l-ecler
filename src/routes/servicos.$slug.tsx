import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import { getServiceBySlug, services } from "@/lib/services";
import { openSignupDialog } from "@/lib/signup-dialog";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/servicos/$slug")({
  head: ({ params }) => {
    const s = getServiceBySlug(params.slug);
    const title = s ? `${s.title} — Clínica L'ECLER` : "Serviço — Clínica L'ECLER";
    const description = s?.description ?? "Tratamento na Clínica L'ECLER.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link to="/" className="font-display text-xl">
            Clínica <span className="text-gradient-gold">L'ECLER</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar
          </Link>
        </div>
      </header>

      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-gold text-primary shadow-gold">
              <Icon className="h-8 w-8" strokeWidth={1.8} />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Tratamento
            </span>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">{service.description}</p>
          </motion.div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {service.benefits.map((b: string) => (
              <div
                key={b}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-soft"
              >
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-gradient-gold text-primary">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm text-foreground">{b}</span>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-gold/30 bg-card p-8 text-center shadow-gold">
            <h2 className="font-display text-2xl sm:text-3xl">
              Pronta para o seu <span className="text-gradient-gold">Diagnóstico Online</span>?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Fale com nosso time e receba um direcionamento personalizado para o seu caso.
            </p>
            <button
              onClick={() => openSignupDialog(service.title)}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-gold px-7 py-3 text-sm font-semibold text-primary shadow-gold transition-transform hover:scale-[1.02]"
            >
              Garantir minha vaga
            </button>
          </div>

          <div className="mt-16">
            <h3 className="font-display text-xl">Outros tratamentos</h3>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {services
                .filter((s) => s.slug !== service.slug)
                .slice(0, 6)
                .map((s) => (
                  <Link
                    key={s.slug}
                    to="/servicos/$slug"
                    params={{ slug: s.slug }}
                    className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground transition-colors hover:border-gold/40"
                  >
                    {s.title}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
