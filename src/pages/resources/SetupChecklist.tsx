import { useTranslation } from 'react-i18next';
import { Link } from '../../components/LocaleLink';
import PageBand from '../../components/PageBand';

export default function SetupChecklist() {
  const { t } = useTranslation();
  const items = [1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      <section className="hero-pad-sm">
        <div className="wrap">
          <p style={{ marginBottom: '22px', fontSize: '0.875rem' }}>
            <Link to="/resources" className="link">← {t('resources.index_title')}</Link>
          </p>
          <h1 className="hero-in" style={{ maxWidth: '18ch' }}>{t('resources.check_title')}</h1>
          <p className="lead hero-in hero-in-2" style={{ maxWidth: '62ch', marginTop: '22px' }}>
            {t('resources.check_desc')}
          </p>
        </div>
      </section>

      <PageBand src="/images/pages/setup-checklist.webp" quiet />

      <section className="section-md">
        <div className="wrap">
          {/* The numbered sequence, because these genuinely run in order:
              nothing attaches to a machine that is not on the list yet. */}
          <ol className="seq" style={{ listStyle: 'none' }}>
            {items.map(n => (
              <li key={n} className="seq-item">
                <span className="seq-num">{String(n).padStart(2, '0')}</span>
                <div>
                  <h3 style={{ marginBottom: '7px' }}>{t(`resources.check.t${n}`)}</h3>
                  <p style={{ fontSize: '0.9375rem' }}>{t(`resources.check.d${n}`)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-md sunken ruled-top">
        <div className="wrap">
          <p className="measure">{t('resources.check_note')}</p>
          <div style={{ marginTop: '26px' }}>
            <Link to="/contact" className="btn-p">{t('common.requestDemo')}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
