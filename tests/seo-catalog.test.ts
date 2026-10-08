import { describe, expect, test } from "bun:test";
import { services } from "@/lib/services";
import { blogPosts } from "@/lib/blog";
import { dentalPosts } from "@/lib/blog-dental";
import { sitemapPaths } from "@/routes/sitemap[.]xml";
import { readFileSync, readdirSync } from "node:fs";

const src = (f: string) => readFileSync(`src/routes/${f}`, "utf8");
const between = (t: string, a: string, b: string) => t.slice(t.indexOf(a), t.indexOf(b));

const serviceSlugs = new Set(services.map((s) => s.slug));
const postSlugs = new Set(blogPosts.map((p) => p.slug));
const allText = (p: (typeof blogPosts)[number]) =>
  [p.intro, ...(p.introExtra ?? []), ...p.sections.flatMap((s) => [s.heading, ...s.body]), p.ctaText].join("\n");

describe("SEO catalog", () => {
  test("15 treatments, 14 articles", () => {
    expect(services.length).toBe(15);
    expect(blogPosts.length).toBe(14);
    expect(postSlugs.size).toBe(14);
  });

  test("new treatments exist", () => {
    for (const s of ["clareamento-dental", "facetas-de-resina", "extracao-dentaria"]) {
      expect(serviceSlugs.has(s)).toBe(true);
    }
  });

  test("sitemap has 36 unique URLs and no thank-you/campaign pages", () => {
    const paths = sitemapPaths();
    expect(paths.length).toBe(36);
    expect(new Set(paths).size).toBe(36);
    expect(paths.some((p) => /obrigado|curso|beauty|gift|quiz|linktree/.test(p))).toBe(false);
  });

  test("internal links in articles point to existing pages", () => {
    for (const p of blogPosts) {
      for (const [, href] of allText(p).matchAll(/\]\((\/[^)]*)\)/g)) {
        const svc = href.match(/^\/servicos\/(.+)$/);
        const post = href.match(/^\/blog\/(.+)$/);
        if (svc) expect(serviceSlugs.has(svc[1])).toBe(true);
        else if (post) expect(postSlugs.has(post[1])).toBe(true);
        else throw new Error(`unexpected internal link ${href} in ${p.slug}`);
      }
    }
  });

  test("each new article is linked from at least one treatment page", () => {
    for (const p of dentalPosts) {
      expect(p.relatedServices?.length).toBeGreaterThan(0);
      for (const s of p.relatedServices ?? []) expect(serviceSlugs.has(s)).toBe(true);
      for (const r of p.relatedPosts ?? []) expect(postSlugs.has(r)).toBe(true);
    }
  });

  test("no internal editorial blocks leaked into articles", () => {
    for (const p of dentalPosts) {
      const t = allText(p);
      expect(t).not.toMatch(/Pendências|Status:|Palavra-chave|Imagem de capa|inventário local|improviso|\/#cta/);
      expect(t).not.toMatch(/Cássia/);
    }
  });

  test("extraction emergency guidance sends severe symptoms to an emergency room", () => {
    const post = dentalPosts.find((p) => p.slug === "extracao-dentaria-braganca-paulista");
    expect(post).toBeDefined();
    const text = post ? allText(post) : "";
    expect(text).toContain("Dificuldade para respirar, falar ou engolir, ou inchaço importante");
    expect(text).toContain("atendimento imediato em um pronto-socorro");
  });

  test("unique SEO titles and descriptions", () => {
    const titles = dentalPosts.map((p) => p.seoTitle);
    expect(new Set(titles).size).toBe(titles.length);
    const descs = services.map((s) => s.seoDescription);
    expect(descs.every(Boolean)).toBe(true);
    expect(new Set(descs).size).toBe(15);
  });

  test("expired event pages render an archive without forms or conversions", () => {
    for (const [file, archive, legacy] of [
      ["beauty-week.tsx", "function BeautyWeekArchive", "function BeautyWeekLegacyPage"],
      ["aula-enzimas-recombinantes.tsx", "function EnzimasArchive", "function EnzimasRegistrationPage"],
    ]) {
      const t = src(file);
      expect(t).toContain("const EVENT_CLOSED = true;");
      expect(t).toContain('content: "noindex, follow"');
      const a = between(t, archive, legacy);
      expect(a).toContain("Inscrições encerradas");
      expect(a).not.toMatch(/<form|openSignupDialog|fetch\(|track[A-Z]|PixelTracker|vagas|24h/i);
    }
    expect(between(src("beauty-week.tsx"), "function BeautyWeekArchive", "function BeautyWeekLegacyPage")).toMatch(/\/#modulos[\s\S]*\/#cta/);
    expect(between(src("aula-enzimas-recombinantes.tsx"), "function EnzimasArchive", "function EnzimasRegistrationPage")).toContain('href="/academy"');
  });

  test("sitemap excludes archived events and every thank-you page is noindex", () => {
    const paths = sitemapPaths();
    expect(paths).not.toContain("/beauty-week");
    expect(paths).not.toContain("/aula-enzimas-recombinantes");
    const thanks = readdirSync("src/routes").filter((f) => /obrigado/.test(f));
    expect(thanks.length).toBe(10);
    for (const f of thanks) expect(src(f)).toMatch(/noindex, ?follow/);
  });

  test("linktree links: treatments and blog, no Beauty Week, visible H1", () => {
    const t = src("linktree.tsx");
    expect(t).not.toContain('"/beauty-week"');
    expect(t).toContain('label: "Conheça nossos tratamentos",\n    href: "/#modulos"');
    expect(t).toContain('label: "Conteúdos de saúde e estética",\n    href: "/blog"');
    expect(t).toMatch(/<h1[^>]*>\s*Clínica L'ECLER em Bragança Paulista/);
  });

  test("articles show organization byline and truthful dates", () => {
    const t = src("blog_.$slug.tsx");
    expect(t).toContain("Publicado pela Clínica L'ECLER");
    expect(t).not.toMatch(/revisad|CRO/i);
    for (const p of blogPosts) expect(p.datePublished).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    const old = blogPosts.filter((p) => !dentalPosts.includes(p));
    expect(old.every((p) => p.datePublished === "2026-06-26" && p.dateModified === "2026-10-08")).toBe(true);
    expect(dentalPosts.every((p) => !p.dateModified)).toBe(true);
  });

  test("old articles link contextually to their treatments in the body", () => {
    const expected: Record<string, string[]> = {
      "harmonizacao-orofacial-natural": ["/servicos/botox-e-preenchimentos", "/servicos/fios-e-bioestimulo"],
      "sorriso-bonito-tambem-e-saude": ["/servicos/odontologia-preventiva-integrativa", "/servicos/odontologia-estetica"],
      "facetas-lentes-de-contato-quando-vale-a-pena": ["/servicos/facetas-e-lentes-de-contato", "/servicos/facetas-de-resina", "/blog/resina-ou-lentes-de-contato-dental"],
      "botox-preenchimento-sem-exagero": ["/servicos/botox-e-preenchimentos"],
      "implantes-dentarios-voltar-a-sorrir": ["/servicos/implantes", "/servicos/proteses", "/blog/implante-protese-sobre-implante-ou-dentadura"],
      "gerenciamento-dermico-pele-bonita": ["/servicos/gerenciamento-dermico", "/servicos/laser-co2-e-hipro"],
    };
    for (const [slug, hrefs] of Object.entries(expected)) {
      const p = blogPosts.find((x) => x.slug === slug)!;
      const body = p.sections.flatMap((s) => s.body).join("\n");
      for (const h of hrefs) expect(body).toContain(`](${h})`);
    }
  });

  test("veneers page has no depreciating or absolute claims", () => {
    const s = services.find((x) => x.slug === "facetas-e-lentes-de-contato")!;
    const t = JSON.stringify(s);
    expect(t).not.toMatch(/não envelhece como resina|não mancha como resina|sem desgaste\)|nenhum desgaste\. |máxima naturalidade/);
    expect(t).toContain("](/servicos/facetas-de-resina)");
  });
});
