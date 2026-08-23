/* ── Site identity ────────────────────────────────────────────────────
   Everything that has to be an absolute URL — canonicals, hreflang, the
   sitemap, robots.txt, Open Graph — resolves through here, so the origin
   is stated once and cannot drift between them.

   Overridable at build time with VITE_SITE_URL, for a staging origin. A
   wrong canonical is worse than no canonical, so the fallback is the real
   production origin rather than a placeholder. */
/* Optional chaining is load-bearing: this module is imported by vite.config
   as well as by the app, and inside the config it runs in plain Node where
   import.meta.env does not exist at all. */
const ENV_SITE_URL = (import.meta as ImportMeta & {
  env?: Record<string, string | undefined>;
}).env?.VITE_SITE_URL;

export const SITE_URL = (ENV_SITE_URL || 'https://mainteneat.com').replace(/\/$/, '');

/* The product renamed from MaintEvo during the project. Every visible
   string says MainteNeat. */
export const SITE_NAME = 'MainteNeat';

/* The one address the site hands out. Declared here rather than in each
   page, because Contact and Signup each held their own copy and two copies
   of an address are two chances to change only one of them. */
export const CONTACT_EMAIL = 'younes.abouseir123@gmail.com';

export type Locale = 'fr' | 'en';

/* /en/* resolves, so alternates are safe to emit. Kept as a named constant
   rather than deleted: an alternate aimed at a URL that 404s does not merely
   fail, it invalidates the whole language cluster, so any future locale gets
   added here only once its routes actually exist. */
export const LOCALE_ROUTES_LIVE = true;

/* French is the market and the default, so it holds the unprefixed paths.
   English lives under /en. There is deliberately no /fr — introducing one
   would duplicate every French page against itself. */
export const DEFAULT_LOCALE: Locale = 'fr';
export const LOCALES: Locale[] = ['fr', 'en'];

/* What each locale is called in a lang attribute and in og:locale. Plain
   `fr` rather than `fr-MA`: it covers Morocco while still catching French
   and Belgian traffic, and there are no country-specific variants to
   justify narrowing it. */
export const HTML_LANG: Record<Locale, string> = { fr: 'fr', en: 'en' };
export const OG_LOCALE: Record<Locale, string> = { fr: 'fr_MA', en: 'en_US' };

/**
 * The path a route lives at in a given locale.
 *
 * `path` is always the canonical unprefixed form ('' for home, 'pricing',
 * 'features/inventory'). Prefixing happens here and nowhere else, which is
 * what keeps the no-/fr rule enforceable in one place instead of at every
 * call site.
 */
export function localePath(path: string, locale: Locale): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  return clean ? `${prefix}/${clean}` : prefix || '/';
}

/** The same thing, absolute. Used for canonical, hreflang and the sitemap. */
export function localeUrl(path: string, locale: Locale): string {
  const p = localePath(path, locale);
  return `${SITE_URL}${p === '/' ? '' : p}` || SITE_URL;
}

/**
 * Split a live pathname into its locale and its canonical unprefixed path.
 * The inverse of `localePath`, used to read the current locale off the URL
 * and to point the language switcher at the same page in the other one.
 */
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  const clean = pathname.replace(/^\/+|\/+$/g, '');
  const [first, ...rest] = clean.split('/');
  if (first === 'en') return { locale: 'en', path: rest.join('/') };
  return { locale: DEFAULT_LOCALE, path: clean };
}
