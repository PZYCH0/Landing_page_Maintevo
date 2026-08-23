import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Head } from 'vite-react-ssg';
import { localesFor, routeForPath } from '../seo/routes';
import {
  DEFAULT_LOCALE, HTML_LANG, LOCALE_ROUTES_LIVE, LOCALES, OG_LOCALE, SITE_NAME, SITE_URL,
  localeUrl, splitLocale, type Locale,
} from '../seo/site';
import { findPost, translationOf } from '../content/blog/index';

/**
 * Per-route head tags.
 *
 * Declarative rather than imperative on purpose: these have to exist in the
 * HTML the build writes, and an effect never runs during a static render —
 * which is exactly how a prerendered English page ends up carrying the French
 * title while the build still reports success.
 *
 * Rendered once from the layout and driven by the matched route, so the
 * eighteen page components stay untouched.
 */
export default function Seo() {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const { locale, path } = splitLocale(pathname);
  const route = routeForPath(path);

  /* Articles are not in the route manifest — their address differs per
     language and comes from the content files — so they are looked up
     separately and bring their own title and description. */
  const slug = /^blog\/(.+)$/.exec(path)?.[1];
  const post = slug ? findPost(locale, slug) : undefined;

  /* An unknown path is a 404: its own title, and deliberately no canonical
     and no alternates. Pointing either at a URL that does not resolve is
     worse than leaving them out. */
  const key = route ? route.id : 'notFound';
  const title = post ? `${post.title} — ${SITE_NAME}` : t(`seo.${key}.title`);
  const description = post ? post.description : t(`seo.${key}.description`);

  const canonical = post
    ? localeUrl(`blog/${post.slug}`, locale)
    : route
      ? localeUrl(route.path, locale)
      : null;

  /* For an article the alternate is the translation's *real* address, not
     this one with a different prefix. The build guarantees a translation
     exists, so this cannot silently drop a language. */
  const alternates: Array<{ locale: Locale; href: string }> = !LOCALE_ROUTES_LIVE
    ? []
    : post
      ? LOCALES.flatMap(l => {
          const twin = translationOf(post, l);
          return twin ? [{ locale: l, href: localeUrl(`blog/${twin.slug}`, l) }] : [];
        })
      : route
        ? localesFor(route).map(l => ({ locale: l, href: localeUrl(route.path, l) }))
        : [];

  const defaultAlternate = alternates.find(a => a.locale === DEFAULT_LOCALE);

  return (
    <Head htmlAttributes={{ lang: HTML_LANG[locale] }}>
      <title>{title}</title>
      <meta name="description" content={description} />

      {canonical && <link rel="canonical" href={canonical} />}

      {/* Each alternate points at its own locale's URL, including a
          self-reference, which Google expects. The English page's canonical
          is its own English URL; aiming it at the French one is the usual way
          half a bilingual site quietly leaves the index. */}
      {alternates.map(a => (
        <link key={a.locale} rel="alternate" hrefLang={HTML_LANG[a.locale]} href={a.href} />
      ))}
      {defaultAlternate && (
        <link rel="alternate" hrefLang="x-default" href={defaultAlternate.href} />
      )}

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content={OG_LOCALE[locale]} />
      {canonical && <meta property="og:url" content={canonical} />}
      {(route || post) && (
        <meta property="og:type" content={route?.id === 'home' ? 'website' : 'article'} />
      )}
      {alternates
        .filter(a => a.locale !== locale)
        .map(a => <meta key={a.locale} property="og:locale:alternate" content={OG_LOCALE[a.locale]} />)}

      {/* Pointed at an asset that actually resolves. A dedicated 1200x630
          card does not exist yet, and a broken og:image is worse than a
          small one. */}
      <meta property="og:image" content={`${SITE_URL}/images/logo-maintevo.png`} />
      <meta property="og:image:alt" content={SITE_NAME} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
}
