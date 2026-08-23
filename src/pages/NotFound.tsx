import { useTranslation } from 'react-i18next';
import { Link } from '../components/LocaleLink';

/**
 * A real 404.
 *
 * Until now an unknown URL rendered the navbar, an empty `<main>` and the
 * footer at HTTP 200 — a soft-404, which search engines treat as a quality
 * problem rather than a missing page. This page is also what gets written
 * to `dist/404.html`, the file every static host reaches for to return a
 * genuine 404 status.
 */
export default function NotFound() {
  const { t } = useTranslation();

  return (
    <section className="hero-pad-sm">
      <div className="wrap">
        <p style={{ fontFamily: 'var(--font-head)', fontWeight: 600, color: 'var(--ink-muted)' }}>
          404
        </p>
        <h1 style={{ marginTop: '10px', maxWidth: '18ch' }}>{t('notFound.title')}</h1>
        <p className="lead" style={{ maxWidth: '54ch', marginTop: '18px' }}>
          {t('notFound.desc')}
        </p>
        <div style={{ display: 'flex', gap: '12px', marginTop: '28px', flexWrap: 'wrap' }}>
          <Link to="/" className="btn-p">{t('notFound.home')}</Link>
          <Link to="/contact" className="btn-s">{t('notFound.contact')}</Link>
        </div>
      </div>
    </section>
  );
}
