import { Link } from '../components/LocaleLink';
import { useTranslation } from 'react-i18next';
import PageBand from '../components/PageBand';

export default function About() {
  const { t } = useTranslation();
  const values = ['reliability', 'simplicity', 'partnership'];

  return (
    <>
      <section className="hero-pad-sm">
        <div className="wrap">
          <h1 className="hero-in" style={{ maxWidth: '14ch' }}>{t('about.mission.title')}</h1>
          <div className="hero-in hero-in-2" style={{ maxWidth: '64ch', marginTop: '26px', display: 'grid', gap: '18px' }}>
            <p className="lead">{t('about.mission.p1')}</p>
            <p className="lead">{t('about.mission.p2')}</p>
          </div>
        </div>
      </section>

      <PageBand src="/images/pages/about.webp" />

      <section className="section-md sunken">
        <div className="wrap">
          <h2 style={{ marginBottom: '36px' }}>{t('about.values.title')}</h2>
          <div>
            {values.map(v => (
              <div key={v} className="def-row">
                <div className="def-label">{t(`about.values.${v}_title`)}</div>
                <p style={{ fontSize: '0.9375rem' }}>{t(`about.values.${v}_desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-md">
        <div className="wrap">
          <h2 style={{ marginBottom: '36px' }}>{t('about.team.title')}</h2>
          <div>
            {(['m1', 'm2'] as const).map(m => (
              <div key={m} className="def-row">
                <div>
                  <div className="def-label">{t(`about.team.${m}_name`)}</div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--accent)', marginTop: '2px' }}>
                    {t(`about.team.${m}_role`)}
                  </div>
                </div>
                <p style={{ fontSize: '0.9375rem' }}>{t(`about.team.${m}_bio`)}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '28px', fontSize: '0.875rem' }}>{t('about.team.company')}</p>
        </div>
      </section>

      <section className="section-md sunken ruled-top">
        <div className="wrap">
          <h2 style={{ maxWidth: '18ch' }}>{t('about.cta.title')}</h2>
          <p className="measure" style={{ marginTop: '14px' }}>{t('about.cta.desc')}</p>
          <div style={{ marginTop: '26px' }}>
            <Link to="/contact" className="btn-p">{t('about.cta.button')}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
