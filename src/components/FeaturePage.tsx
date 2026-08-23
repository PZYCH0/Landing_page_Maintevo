import { useEffect } from 'react';
import { Link } from './LocaleLink';
import { useTranslation } from 'react-i18next';
import PageBand from './PageBand';

/* Each feature page's band. Named here rather than passed in, so the eight
   pages stay one-line wrappers and a missing entry simply means no picture
   rather than a broken import. */
const BANDS: Record<string, string> = {
  workOrders:            '/images/pages/workorders.webp',
  equipment:             '/images/pages/equipment.webp',
  preventiveMaintenance: '/images/pages/preventive.webp',
  inventory:             '/images/pages/inventory.webp',
  kpi:                   '/images/pages/kpi.webp',
  calendar:              '/images/pages/calendar.webp',
  reporting:             '/images/pages/reporting.webp',
  roles:                 '/images/pages/roles.webp',
};

/**
 * Shared skeleton for the eight feature pages: hero, band, body, close.
 */
export default function FeaturePage({
  ns,
  children,
}: {
  ns: string;
  children: React.ReactNode;
}) {
  const { t } = useTranslation();

  useEffect(() => { window.scrollTo(0, 0); }, [ns]);

  return (
    <>
      <section className="hero-pad-sm">
        <div className="wrap">
          <p style={{ marginBottom: '22px', fontSize: '0.875rem' }}>
            <Link to="/" className="link">← {t('common.back')}</Link>
          </p>
          <h1 className="hero-in" style={{ maxWidth: '19ch' }}>{t(`${ns}.hero.h1`)}</h1>
          <p className="lead hero-in hero-in-2" style={{ maxWidth: '62ch', marginTop: '22px' }}>
            {t(`${ns}.hero.lead`)}
          </p>
        </div>
      </section>

      {BANDS[ns] && <PageBand src={BANDS[ns]} />}

      {children}

      <section className="section-md sunken ruled-top">
        <div className="wrap">
          <h2 style={{ maxWidth: '20ch' }}>{t(`${ns}.cta.title`)}</h2>
          <div className="btn-inline-group" style={{ display: 'flex', gap: '12px', marginTop: '26px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-p">{t('common.requestDemo')}</Link>
            <Link to="/pricing" className="btn-s">{t('common.seePricing')}</Link>
          </div>
        </div>
      </section>
    </>
  );
}

/** Label-left / prose-right rows. Used instead of a card grid. */
export function DefList({ ns, keys }: { ns: string; keys: string[] }) {
  const { t } = useTranslation();
  return (
    <div>
      {keys.map(k => (
        <div key={k} className="def-row">
          <div className="def-label">{t(`${ns}.${k}_title`)}</div>
          <p style={{ fontSize: '0.9375rem' }}>{t(`${ns}.${k}_body`)}</p>
        </div>
      ))}
    </div>
  );
}
