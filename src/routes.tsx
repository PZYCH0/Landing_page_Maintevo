import type { RouteRecord } from 'vite-react-ssg';
import Layout from './Layout';
import NotFound from './pages/NotFound';
import { ROUTES, localesFor } from './seo/routes';
import { DEFAULT_LOCALE, LOCALES, type Locale } from './seo/site';

/* Vite needs a literal glob to know what to code-split, so the page modules
   are collected once here and looked up by the manifest's importPath. Adding
   a page stays a one-line edit in src/seo/routes.ts. */
const PAGES = import.meta.glob('./pages/**/*.tsx');

/* react-router's `lazy` wants a module exporting `Component`; these pages
   export a default. Adapting here keeps the pages themselves untouched —
   which matters, since several were rebuilt recently.

   This is also the line that decides whether prerendering works at all. With
   React.lazy inside the element instead, every generated file would contain
   the Suspense fallback rather than the page, and the build would still
   report success. */
function lazyPage(importPath: string) {
  const load = PAGES[`${importPath}.tsx`];
  if (!load) throw new Error(`Route manifest points at a missing page: ${importPath}`);
  return async () => {
    const mod = (await load()) as { default: React.ComponentType };
    return { Component: mod.default };
  };
}

function childrenFor(locale: Locale): RouteRecord[] {
  const pages = ROUTES.filter(r => localesFor(r).includes(locale)).map(r =>
    r.path === ''
      ? ({ index: true, lazy: lazyPage(r.importPath) } as RouteRecord)
      : ({ path: r.path, lazy: lazyPage(r.importPath) } as RouteRecord),
  );

  /* Articles live at their own per-language address, so the slug is a
     parameter rather than eighteen more manifest entries. Every one is
     still prerendered — vite.config expands them from the same content
     glob the pages read. */
  const article: RouteRecord = { path: 'blog/:slug', lazy: lazyPage('./pages/BlogPost') };

  /* Per tree, so /en/nonsense is an English 404 rather than a French one. */
  return [...pages, article, { path: '*', element: <NotFound /> }];
}

/* French holds the unprefixed root; English sits under /en. The two trees are
   the same manifest rendered twice — there is no second list to keep in sync. */
export const routes: RouteRecord[] = LOCALES.map(locale => ({
  path: locale === DEFAULT_LOCALE ? '/' : `/${locale}`,
  element: <Layout />,
  children: childrenFor(locale),
}));

export default routes;
