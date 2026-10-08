import { describe, expect, test } from "bun:test";
import { services } from "@/lib/services";
import { blogPosts } from "@/lib/blog";
import { dentalPosts } from "@/lib/blog-dental";
import { sitemapPaths } from "@/routes/sitemap[.]xml";

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

  test("unique SEO titles and descriptions", () => {
    const titles = dentalPosts.map((p) => p.seoTitle);
    expect(new Set(titles).size).toBe(titles.length);
    const descs = services.map((s) => s.seoDescription);
    expect(descs.every(Boolean)).toBe(true);
    expect(new Set(descs).size).toBe(15);
  });
});
