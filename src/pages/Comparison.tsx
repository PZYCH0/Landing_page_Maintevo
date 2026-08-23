import { Link } from '../components/LocaleLink';
import { useTranslation } from 'react-i18next';
import PageBand from '../components/PageBand';

const OPTIONS = ['r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7'] as const;
const LOCAL = ['p1', 'p2', 'p3', 'p4'] as const;

export default function Comparison() {
  const { t } = useTranslation();

  return (
    <>
      <section className="hero-pad-sm">
        <div className="wrap">
          <h1 className="hero-in" style={{ maxWidth: '20ch' }}>{t('comparison.hero.title')}</h1>
          <p className="lead hero-in hero-in-2" style={{ maxWidth: '64ch', marginTop: '22px' }}>
            {t('comparison.hero.desc')}
          </p>
        </div>
      </section>

      <PageBand src="/images/pages/comparison.webp" quiet />

      <hr className="rule-brand" />

      <section className="section-md">
        <div className="wrap">
          <h2 style={{ marginBottom: '28px' }}>{t('comparison.table.title')}</h2>
          <div className="tbl-scroll">
            <table className="tbl">
              <thead>
                <tr>
                  <th style={{ width: '22%' }}>{t('comparison.table.col_solution')}</th>
                  <th style={{ width: '18%' }}>{t('comparison.table.col_category')}</th>
                  <th style={{ width: '30%' }}>{t('comparison.table.col_strength')}</th>
                  <th style={{ width: '30%' }}>{t('comparison.table.col_weakness')}</th>
                </tr>
              </thead>
              <tbody>
                {OPTIONS.map(r => {
                  const own = r === 'r7';
                  return (
                    <tr key={r}>
                      <td style={own ? { color: 'var(--accent)', fontWeight: 600 } : { color: 'var(--ink)' }}>
                        {t(`comparison.table.${r}_name`)}
                      </td>
                      <td>{t(`comparison.table.${r}_cat`)}</td>
                      <td>{t(`comparison.table.${r}_pro`)}</td>
                      <td>{t(`comparison.table.${r}_con`)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '0.8125rem', marginTop: '16px', maxWidth: '78ch', fontStyle: 'italic' }}>
            {t('comparison.table.note')}
          </p>
        </div>
      </section>

      <hr className="rule-brand" />

      <section className="section-md sunken">
        <div className="wrap">
          <h2 style={{ maxWidth: '24ch', marginBottom: '36px' }}>{t('comparison.local.title')}</h2>
          <div>
            {LOCAL.map(p => (
              <div key={p} className="def-row">
                <div className="def-label">{t(`comparison.local.${p}_title`)}</div>
                <p style={{ fontSize: '0.9375rem' }}>{t(`comparison.local.${p}_desc`)}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '28px' }}>
            <Link to="/pricing" className="link">{t('common.seePricing')} →</Link>
          </p>
        </div>
      </section>

      <hr className="rule-brand" />

      <section className="section-md">
        <div className="wrap">
          <h2 style={{ maxWidth: '22ch' }}>{t('comparison.cta.title')}</h2>
          <p className="measure" style={{ marginTop: '14px' }}>{t('comparison.cta.desc')}</p>
          <div style={{ marginTop: '26px' }}>
            <Link to="/contact" className="btn-p">{t('common.talkToUs')}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
