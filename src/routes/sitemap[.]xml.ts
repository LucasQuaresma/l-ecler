import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/lib/services";
import { blogPosts } from "@/lib/blog";
import { absoluteUrl } from "@/lib/site";

// Evergreen, indexable pages only. Thank-you pages, dated event/course offers,
// utility pages (linktree, quiz) are intentionally excluded.
const STATIC_PATHS = [
  "/",
  "/blog",
  "/academy",
  "/ebook/10-erros-hof",
  "/ebook/planejamento-completo-hof",
  "/privacidade",
  "/cookies",
];

export function sitemapPaths() {
  const paths = [
    ...STATIC_PATHS,
    ...services.map((s) => `/servicos/${s.slug}`),
    ...blogPosts.map((p) => `/blog/${p.slug}`),
  ];
  return Array.from(new Set(paths));
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const urls = sitemapPaths()
          .map((p) => `  <url><loc>${absoluteUrl(p)}</loc></url>`)
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
