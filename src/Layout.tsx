import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Seo from './components/Seo';
import { i18nFor } from './i18n/index';
import { splitLocale } from './seo/site';

function Loader() {
  return <div style={{ minHeight: '60vh' }} aria-busy="true" />;
}

/**
 * The shell both language trees share.
 *
 * The locale is read off the URL and used to pick the i18n instance, so a
 * page is in the language its own address names — during the static build as
 * much as in the browser — and nothing has to be told about a language
 * change separately.
 */
export default function Layout() {
  const { locale } = splitLocale(useLocation().pathname);

  return (
    <I18nextProvider i18n={i18nFor(locale)}>
      <Seo />
      <Navbar />
      <main>
        {/* Kept even though routes now resolve at build time: it still covers
            the chunk fetch on a client-side navigation, and without it a route
            change collapses the page height. */}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </I18nextProvider>
  );
}
