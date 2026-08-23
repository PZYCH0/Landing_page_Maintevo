import { Link } from '../components/LocaleLink';
import { useTranslation } from 'react-i18next';
import PageBand from '../components/PageBand';

export default function Enterprise() {
  const { t } = useTranslation();
  const items = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6'];

  return (
    <>
      <section className="hero-pad-sm">
        <div className="wrap">
          <h1 className="hero-in" style={{ maxWidth: '13ch' }}>{t('enterprise.title')}</h1>
          <p className="lead hero-in hero-in-2" style={{ maxWidth: '62ch', marginTop: '22px' }}>{t('enterprise.desc')}</p>
        </div>
      </section>

      <PageBand src="/images/pages/enterprise.webp" />

      <section className="section-md">
        <div className="wrap">
          {items.map(i => (
            <div key={i} className="def-row">
              <div className="def-label">{t(`enterprise.${i}_title`)}</div>
              <p style={{ fontSize: '0.9375rem' }}>{t(`enterprise.${i}_desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-md sunken ruled-top">
        <div className="wrap">
          <h2 style={{ maxWidth: '20ch' }}>{t('enterprise.cta_title')}</h2>
          <p className="measure" style={{ marginTop: '14px' }}>{t('enterprise.cta_desc')}</p>
          <div style={{ marginTop: '26px' }}>
            <Link to="/contact" className="btn-p">{t('common.talkToUs')}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
