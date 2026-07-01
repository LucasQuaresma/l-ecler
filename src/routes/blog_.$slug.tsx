import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, MessageCircle, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog";
import { WHATSAPP_URL } from "@/lib/signup-dialog";

export const Route = createFileRoute("/blog_/$slug")({
  head: ({ params }) => {
    const post = getBlogPostBySlug(params.slug);
    const title = post ? `${post.title}, Blog L'ECLER` : "Artigo, Blog L'ECLER";
    const description = post?.description ?? "Conteúdo da Clínica L'ECLER.";

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: BlogArticlePage,
});

function BlogArticlePage() {
  const { slug } = Route.useParams();
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <section className="flex min-h-[70vh] items-center justify-center px-6 text-center">
          <div className="max-w-md">
            <h1 className="font-display text-4xl">Artigo não encontrado</h1>
            <p className="mt-3 text-sm text-muted-foreground">
              O conteúdo que você procura não está disponível.
            </p>
            <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-gold hover:underline">
              <ArrowLeft className="h-4 w-4" />
              Voltar ao blog
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <article>
        <section className="relative overflow-hidden bg-gradient-hero py-16 sm:py-24">
          <div className="absolute -right-24 top-16 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline">
                <ArrowLeft className="h-4 w-4" />
                Voltar ao blog
              </Link>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                <span>{post.category}</span>
                <span className="text-muted-foreground">•</span>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-3.5 w-3.5 text-gold" />
                  {post.readTime}
                </span>
              </div>
              <h1 className="mt-5 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
                {post.title}
              </h1>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {post.description}
              </p>
              <Button
                size="lg"
                asChild
                className="group mt-8 h-12 rounded-full bg-gradient-gold px-7 text-base font-semibold text-primary shadow-gold transition-transform hover:scale-[1.02]"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  Falar com o atendimento
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative overflow-hidden rounded-[2rem] shadow-elegant ring-1 ring-gold/30"
            >
              <img
                src={post.image}
                alt={post.imageAlt}
                width={1200}
                height={900}
                loading="eager"
                className="aspect-[4/3] w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            </motion.div>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
            <div className="mx-auto max-w-3xl">
              <p className="font-display text-2xl leading-snug text-foreground sm:text-3xl">
                {post.intro}
              </p>

              <div className="mt-10 space-y-10">
                {post.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="font-display text-3xl text-foreground">{section.heading}</h2>
                    <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
                      {section.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              <div className="mt-12 rounded-3xl bg-secondary/60 p-6 shadow-soft ring-1 ring-border/70 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-gold text-primary shadow-soft">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl">{post.ctaTitle}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {post.ctaText}
                    </p>
                    <Button
                      asChild
                      className="mt-5 rounded-full bg-gradient-gold px-6 font-semibold text-primary shadow-gold"
                    >
                      <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                        {post.ctaButtonLabel}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl bg-card p-5 shadow-soft ring-1 ring-border/70">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  <Sparkles className="h-3.5 w-3.5" />
                  Próximo passo
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  O artigo ajuda a entender, mas a indicação certa depende de avaliação individual.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gradient-gold px-4 py-2.5 text-sm font-semibold text-primary shadow-soft transition-transform hover:scale-[1.02]"
                >
                  Falar com atendimento
                </a>
              </div>
            </aside>
          </div>
        </section>
      </article>

      <section className="border-t border-border/60 bg-secondary/40 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Continue lendo
              </span>
              <h2 className="mt-3 font-display text-3xl">Artigos relacionados</h2>
            </div>
            <Link to="/blog" className="text-sm font-semibold text-gold hover:underline">
              Ver todos
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                to="/blog/$slug"
                params={{ slug: item.slug }}
                className="group overflow-hidden rounded-2xl bg-card shadow-soft ring-1 ring-border/70 transition-all hover:-translate-y-1 hover:ring-gold/40"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                    {item.category}
                  </p>
                  <h3 className="mt-2 font-display text-xl leading-tight">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
