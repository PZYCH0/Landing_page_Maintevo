import { useTranslation } from 'react-i18next';
import { Link } from '../../components/LocaleLink';
import PageBand from '../../components/PageBand';

/* The twelve measures the product's four report views actually produce,
   named in PRODUCT.md. This page defines them; it does not add any. */
const GROUPS = [
  { id: 'equip', rows: 6 },
  { id: 'stock', rows: 6 },
];

export default function KpiDefinitions() {
  const { t } = useTranslation();

  return (
    <>
      <section className="hero-pad-sm">
        <div className="wrap">
          <p style={{ marginBottom: '22px', fontSize: '0.875rem' }}>
            <Link to="/resources" className="link">← {t('resources.index_title')}</Link>
          </p>
          <h1 className="hero-in" style={{ maxWidth: '18ch' }}>{t('resources.kpi_title')}</h1>
          <p className="lead hero-in hero-in-2" style={{ maxWidth: '62ch', marginTop: '22px' }}>
            {t('resources.kpi_desc')}
          </p>
        </div>
      </section>

      <PageBand src="/images/pages/kpi-definitions.webp" quiet />

      {GROUPS.map(({ id, rows }) => (
        <section key={id} className="section-md">
          <div className="wrap">
            <h2 style={{ maxWidth: '20ch' }}>{t(`resources.kpi.${id}.title`)}</h2>
            <div style={{ marginTop: '28px' }}>
              {Array.from({ length: rows }, (_, i) => i + 1).map(n => (
                <div key={n} className="def-row">
                  <div className="def-label">{t(`resources.kpi.${id}.t${n}`)}</div>
                  <p style={{ fontSize: '0.9375rem' }}>{t(`resources.kpi.${id}.d${n}`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section-md sunken ruled-top">
        <div className="wrap">
          <p className="measure">{t('resources.kpi_note')}</p>
          <div style={{ marginTop: '26px' }}>
            <Link to="/features/kpi-dashboard" className="btn-s">{t('common.learnMore')}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
