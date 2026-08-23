import { forwardRef } from 'react';
import { Link as RouterLink, useLocation, type LinkProps } from 'react-router-dom';
import { localePath, splitLocale, type Locale } from '../seo/site';

/** The locale the current URL is in. The URL is the only source of truth. */
export function useLocale(): Locale {
  const { pathname } = useLocation();
  return splitLocale(pathname).locale;
}

/** The current path stripped of its locale prefix — what the language
    switcher needs to offer the same page in the other language. */
export function useCanonicalPath(): string {
  const { pathname } = useLocation();
  return splitLocale(pathname).path;
}

/** Prefix a canonical path for the current locale. For the raw-string cases
    a component cannot cover: navigate(), hreflang, the sitemap. */
export function useLocalePath(): (to: string) => string {
  const locale = useLocale();
  return (to: string) => localePath(to, locale);
}

/**
 * A drop-in replacement for react-router's `Link` that keeps the current
 * locale.
 *
 * Deliberately named `Link`, so a page adopts it by changing its *import*
 * rather than every `to=` attribute it holds — a dozen edits instead of
 * forty, and every page written afterwards is correct without anyone having
 * to remember. The cost is that a file's import line is now the only thing
 * that says whether its links are locale-aware, so the check lives in the
 * verification pass: nothing outside this file may import `Link` from
 * react-router-dom.
 *
 * Only absolute in-app paths are prefixed. A hash, a mailto, or an external
 * URL passes through untouched.
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  function LocaleLink({ to, ...rest }, ref) {
    const locale = useLocale();
    const href = typeof to === 'string' && to.startsWith('/') ? localePath(to, locale) : to;
    return <RouterLink ref={ref} to={href} {...rest} />;
  },
);
