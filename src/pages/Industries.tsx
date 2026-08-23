import { Link } from '../components/LocaleLink';
import { useTranslation } from 'react-i18next';

/* One photograph per sector, in the order the copy names them. A single band
   above six different industries showed one of them and implied the rest —
   these were already produced and sitting unused. */
const SECTORS = [
  { key: 'i1', image: '/images/pages/food.webp' },
  { key: 'i2', image: '/images/pages/textiles.webp' },
  { key: 'i3', image: '/images/pages/chemicals.webp' },
  { key: 'i4', image: '/images/pages/automotive.webp' },
  { key: 'i5', image: '/images/pages/buildings.webp' },
  { key: 'i6', image: '/images/pages/logistics.webp' },
];

export default function Industries() {
  const { t } = useTranslation();

  return (
    <>
      <section className="hero-pad-sm">
        <div className="wrap">
          <h1 className="hero-in" style={{ maxWidth: '15ch' }}>{t('industries.title')}</h1>
          <p className="lead hero-in hero-in-2" style={{ maxWidth: '62ch', marginTop: '22px' }}>{t('industries.desc')}</p>
        </div>
      </section>

      <section className="section-md">
        <div className="wrap">
          <ul className="sector-list">
            {SECTORS.map(({ key, image }, i) => (
              <li key={key} className="sector" data-flip={i % 2 === 1 ? 'true' : undefined}>
                {/* Decorative: the sector is named in the heading beside it. */}
                <img className="sector-photo" src={image} alt="" loading="lazy" decoding="async" />
                <div className="sector-body">
                  <h2 className="sector-title">{t(`industries.${key}_title`)}</h2>
                  <p className="sector-text">{t(`industries.${key}_desc`)}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-md sunken ruled-top">
        <div className="wrap">
          <h2 style={{ maxWidth: '18ch' }}>{t('industries.cta_title')}</h2>
          <p className="measure" style={{ marginTop: '14px' }}>{t('industries.cta_desc')}</p>
          <div style={{ marginTop: '26px' }}>
            <Link to="/contact" className="btn-p">{t('common.requestDemo')}</Link>
          </div>
        </div>
      </section>

      <style>{`
        /* Alternating sides, as on the blog listing — six identical rows
           would read as a template, and the design system rules out the
           identical-card grid as a page scaffold. */
        .sector-list { list-style: none; margin: 0; padding: 0; }
        .sector-list > li + li { margin-top: 20px; }
        .sector {
          display: grid;
          grid-template-columns: minmax(0, 38%) minmax(0, 1fr);
          align-items: stretch;
          border: 1px solid var(--rule);
          border-radius: var(--r);
          overflow: hidden;
          background: var(--bg);
        }
        .sector[data-flip] { grid-template-columns: minmax(0, 1fr) minmax(0, 38%); }
        .sector[data-flip] .sector-photo { order: 2; }
        .sector-photo {
          width: 100%;
          height: 100%;
          min-height: 190px;
          object-fit: cover;
          display: block;
        }
        .sector-body { padding: 26px 28px; text-align: left; min-width: 0; }
        .sector-title { font-size: 1.1875rem; margin: 0 0 10px; }
        .sector-title::before {
          content: '';
          display: block;
          width: 34px;
          height: 2px;
          background: var(--accent);
          margin-bottom: 14px;
        }
        .sector-text {
          font-size: .9375rem;
          line-height: 1.65;
          color: var(--ink-muted);
          margin: 0;
          max-width: 62ch;
        }
        @media (max-width: 720px) {
          .sector, .sector[data-flip] { grid-template-columns: 1fr; }
          .sector[data-flip] .sector-photo { order: 0; }
          .sector-photo { min-height: 0; aspect-ratio: 16 / 9; }
          .sector-body { padding: 22px 20px; }
        }
      `}</style>
    </>
  );
}
