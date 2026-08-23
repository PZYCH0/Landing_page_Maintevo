import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { allPages } from './src/seo/routes';
import { localePath, type Locale } from './src/seo/site';

const BLOG_DIR = join(process.cwd(), 'src/content/blog');

/* The article addresses, read straight off disk.
   src/content/blog/index.ts cannot be reached from here — it uses
   import.meta.glob, which only exists once Vite has transformed a module,
   and this config runs in plain Node before any of that. The runtime loader
   remains the single source of truth for the app; this is only the list of
   addresses to prerender, and the build fails loudly if the two disagree. */
function blogRoutes(): string[] {
  return readdirSync(BLOG_DIR)
    .filter(f => f.endsWith('.md'))
    .map(file => {
      const raw = readFileSync(join(BLOG_DIR, file), 'utf-8');
      const slug = /^slug:\s*["']?(.+?)["']?\s*$/m.exec(raw)?.[1];
      if (!slug) throw new Error(`Blog: "${file}" has no slug in its frontmatter.`);
      const locale = file.replace(/\.md$/, '').split('.').pop() as Locale;
      return localePath(`blog/${slug}`, locale);
    });
}

export default defineConfig({
  plugins: [react(), tailwindcss()],

  ssgOptions: {
    /* Emits /pricing/index.html rather than /pricing.html. Every static host
       — nginx, Apache, S3, GitHub Pages, Netlify, Cloudflare — serves that
       shape at /pricing with no rewrite rule, which is most of why the
       missing SPA fallback stops mattering once this lands. */
    dirStyle: 'nested',
    formatting: 'none',
    script: 'async',

    /* Both language trees, plus every article in both languages. '/404'
       matches the catch-all and gives us a page to rename to dist/404.html,
       the file static hosts serve with a real 404 status. */
    includedRoutes: () => [
      ...allPages().map(({ route, locale }) => localePath(route.path, locale)),
      ...blogRoutes(),
      '/404',
    ],
  },
});
