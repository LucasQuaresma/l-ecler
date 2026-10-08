<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- SEO origin and clinic structured data live in src/lib/site.ts (SITE_URL); all canonicals/og:url/sitemap use it so the domain changes in one place.
- /sitemap.xml is a server route with an explicit evergreen list; dated offers and thank-you pages stay out (thank-you pages use noindex, follow).
- Blog articles live in src/lib/blog.ts (legacy) and src/lib/blog-dental.ts; body strings support '- ', '### ', **bold**, [link](/path) via RichText, and relatedServices/relatedPosts drive cross-links — keeps content as simple data.
