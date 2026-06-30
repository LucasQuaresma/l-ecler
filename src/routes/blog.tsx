import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Clock, MessageCircle, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { blogPosts, featuredBlogPost } from "@/lib/blog";
import { WHATSAPP_URL } from "@/lib/signup-dialog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog L'ECLER, Sorriso, face, pele e bem-estar" },
      {
        name: "description",
        content:
          "Conteúdos da Clínica L'ECLER sobre odontologia integrada, harmonização orofacial, estética avançada e cuidados para resultados naturais.",
      },
      { property: "og:title", content: "Blog L'ECLER" },
      {
        property: "og:description",
        content:
          "Orientações para quem deseja cuidar do sorriso, da face e da autoestima com segurança.",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const posts = blogPosts.filter((post) => post.slug !== featuredBlogPost.slug);

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-hero py-20 sm:py-28">
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-card px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold shadow-soft">
              <Sparkles className="h-3.5 w-3.5" />
              Blog L'ECLER
            </span>
            <h1 className="mt-6 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Conteúdo para você chegar à consulta{" "}
              <span className="text-gradient-gold">mais segura sobre o que deseja.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Guias claros sobre sorriso, face, pele e planejamento estético. Leia,
              entenda possibilidades e, quando fizer sentido, converse com a equipe
              para transformar dúvida em avaliação.
            </p>
            <Button
              size="lg"
              onClick={() => window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer")}
              className="group mt-8 h-auto min-h-12 max-w-full whitespace-normal rounded-full bg-gradient-gold px-6 py-3 text-center text-base font-semibold leading-snug text-primary shadow-gold transition-transform hover:scale-[1.02] sm:px-7"
            >
              Falar com o atendimento no WhatsApp
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Link
            to="/blog/$slug"
            params={{ slug: featuredBlogPost.slug }}
            className="group grid overflow-hidden rounded-[2rem] bg-card shadow-elegant ring-1 ring-gold/30 transition-all hover:-translate-y-1 hover:shadow-gold lg:grid-cols-[1.05fr_0.95fr]"
          >
            <div className="relative min-h-[22rem] overflow-hidden">
              <img
                src={featuredBlogPost.image}
                alt={featuredBlogPost.imageAlt}
                width={1200}
                height={1500}
                loading="eager"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent" />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Artigo em destaque
              </span>
              <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
                {featuredBlogPost.title}
              </h2>
              <p className="mt-4 text-muted-foreground">{featuredBlogPost.description}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <span>{featuredBlogPost.category}</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-gold" />
                  {featuredBlogPost.readTime}
                </span>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                Ler artigo <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="bg-secondary/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Guias para decidir melhor
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl">
                Artigos recentes
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Conteúdos pensados para aproximar você da clínica com mais clareza,
              menos medo e mais segurança na decisão.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.07 }}
                className="overflow-hidden rounded-2xl bg-card shadow-soft ring-1 ring-border/70 transition-all hover:-translate-y-1 hover:ring-gold/40"
              >
                <Link to="/blog/$slug" params={{ slug: post.slug }} className="group block h-full">
                  <div className="aspect-[16/11] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      width={900}
                      height={620}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                      <span>{post.category}</span>
                    </div>
                    <h3 className="mt-3 font-display text-2xl leading-tight text-foreground">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {post.description}
                    </p>
                    <div className="mt-5 flex items-center justify-between gap-4 text-xs text-muted-foreground">
                      <span>{post.dateLabel}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-gold" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-cta p-8 text-center shadow-elegant sm:p-12">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/20 blur-3xl" />
            <div className="relative">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-gradient-gold text-primary shadow-gold">
                <MessageCircle className="h-5 w-5" />
              </div>
              <h2 className="mt-5 font-display text-3xl text-primary-foreground sm:text-4xl">
                Leu e pensou: "talvez seja para mim"?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
                Esse é o melhor momento para conversar. A equipe da L'ECLER ajuda você a
                entender se o tema do artigo faz sentido para o seu caso.
              </p>
              <Button
                size="lg"
                onClick={() => window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer")}
                className="mt-8 h-12 rounded-full bg-gradient-gold px-7 text-base font-semibold text-primary shadow-gold"
              >
                Falar com o atendimento
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
