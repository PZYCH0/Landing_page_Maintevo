import { useState } from 'react';
import { Link } from '../components/LocaleLink';
import { useTranslation } from 'react-i18next';
import PageBand from '../components/PageBand';

const Check = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true" style={{ flexShrink: 0, marginTop: '5px' }}>
    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Pricing() {
  const { t } = useTranslation();
  const [open, setOpen] = useState<string | null>(null);

  const plans = [
    { ns: 'pricing.starter',      featured: false, limits: ['f1_val', 'f2_val'], feats: ['f3', 'f4', 'f5'] },
    { ns: 'pricing.professional', featured: true,  limits: ['f1_val', 'f2_val'], feats: ['f3', 'f4', 'f5'] },
    { ns: 'pricing.enterprise',   featured: false, limits: ['f1_val', 'f2_val'], feats: ['f3', 'f4', 'f5'] },
  ];

  const rows: [string, boolean, boolean, boolean][] = [
    ['pricing.compare.r_equip', true,  true,  true],
    ['pricing.compare.r_di',    true,  true,  true],
    ['pricing.compare.r_wo',    true,  true,  true],
    ['pricing.compare.r_cal',   true,  true,  true],
    ['pricing.compare.r_pm',    false, true,  true],
    ['pricing.compare.r_inv',   false, true,  true],
    ['pricing.compare.r_buy',   false, true,  true],
    ['pricing.compare.r_rep',   false, true,  true],
    ['pricing.compare.r_multi', false, false, true],
    ['pricing.compare.r_api',   false, false, true],
  ];

  const faqs = ['q1', 'q2', 'q3', 'q4'];

  return (
    <>
      <section className="hero-pad-sm">
        <div className="wrap">
          <h1 className="hero-in" style={{ maxWidth: '16ch' }}>{t('pricing.hero.title')}</h1>
          <p className="lead hero-in hero-in-2" style={{ maxWidth: '56ch', marginTop: '22px' }}>{t('pricing.hero.desc')}</p>
        </div>
      </section>

      <PageBand src="/images/pages/pricing.webp" quiet />

      <section style={{ paddingBottom: 'var(--pad-md)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '20px' }}>
            {plans.map(({ ns, featured, limits, feats }) => (
              <div key={ns} className={`price-card${featured ? ' featured' : ''}`}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '10px' }}>
                  <h2 style={{ fontSize: '1.125rem' }}>{t(`${ns}.title`)}</h2>
                  {featured && (
                    <span style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                      {t('pricing.professional.badge')}
                    </span>
                  )}
                </div>

                <p style={{ fontSize: '0.9375rem', marginTop: '8px', minHeight: '3em' }}>{t(`${ns}.desc`)}</p>

                {/* "On request" is set at body scale: a quote is not a number. */}
                <div style={{ margin: '18px 0', display: 'flex', alignItems: 'baseline', gap: '5px', minHeight: '2.4rem' }}>
                  <span style={{
                    fontFamily: 'var(--font-head)',
                    fontSize: t(`${ns}.per`) ? '2rem' : '1.125rem',
                    fontWeight: 700,
                    letterSpacing: '-0.03em',
                    color: t(`${ns}.per`) ? 'var(--ink)' : 'var(--ink-muted)',
                  }}>
                    {t(`${ns}.price`)}
                  </span>
                  <span style={{ fontSize: '0.875rem', color: 'var(--ink-muted)' }}>{t(`${ns}.per`)}</span>
                </div>

                <ul style={{ listStyle: 'none', display: 'grid', gap: '8px', paddingTop: '18px', borderTop: '1px solid var(--rule)', marginBottom: '24px' }}>
                  {limits.map(l => (
                    <li key={l} style={{ display: 'flex', gap: '9px', fontSize: '0.9375rem', color: 'var(--ink)' }}>
                      <span style={{ color: 'var(--ok)' }}><Check /></span>{t(`${ns}.${l}`)}
                    </li>
                  ))}
                  {feats.map(f => (
                    <li key={f} style={{ display: 'flex', gap: '9px', fontSize: '0.9375rem', color: 'var(--ink)' }}>
                      <span style={{ color: 'var(--ok)' }}><Check /></span>{t(`${ns}.${f}`)}
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className={featured ? 'btn-p' : 'btn-s'} style={{ marginTop: 'auto', justifyContent: 'center' }}>
                  {t(`${ns}.cta`)}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-md sunken">
        <div className="wrap">
          <h2 style={{ marginBottom: '28px' }}>{t('pricing.compare.title')}</h2>
          <div className="tbl-scroll">
            <table className="tbl tbl-stack tbl-stack--marks">
              <thead>
                <tr>
                  <th style={{ width: '40%' }}>{t('pricing.compare.col_feature')}</th>
                  <th>{t('pricing.compare.col_starter')}</th>
                  <th>{t('pricing.compare.col_pro')}</th>
                  <th>{t('pricing.compare.col_ent')}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([label, a, b, c]) => (
                  <tr key={label}>
                    <td>{t(label)}</td>
                    {([[a, 'col_starter'], [b, 'col_pro'], [c, 'col_ent']] as const).map(([on, col], i) => (
                      /* data-label is what the row carries into the stacked
                         card layout on a phone, where the header row is gone. */
                      <td key={i} data-label={t(`pricing.compare.${col}`)}>
                        {on
                          ? <span className="mark-yes"><Check /></span>
                          : <span className="mark-no" aria-label="No">—</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Setup fee ────────────────────────────────────────── */}
      <section className="section-md">
        <div className="wrap">
          <h2 style={{ maxWidth: '22ch' }}>{t('pricing.onboarding.title')}</h2>
          <p className="measure" style={{ marginTop: '14px' }}>{t('pricing.onboarding.desc')}</p>
          <p style={{ marginTop: '14px', fontSize: '0.8125rem', fontStyle: 'italic' }}>
            {t('pricing.onboarding.note')}
          </p>
        </div>
      </section>

      <section className="section-md">
        <div className="wrap">
          <h2 style={{ marginBottom: '20px' }}>{t('pricing.faq.title')}</h2>
          <div style={{ maxWidth: '720px', borderTop: '1px solid var(--rule)' }}>
              {faqs.map(q => {
                const on = open === q;
                return (
                  <div key={q} className="faq-item">
                    <button className="faq-btn" onClick={() => setOpen(on ? null : q)} aria-expanded={on}>
                      {t(`pricing.faq.${q}`)}
                      <svg className={`faq-icon${on ? ' open' : ''}`} width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <div className={`faq-body${on ? ' open' : ''}`}>
                      <div>
                        <p style={{ fontSize: '0.9375rem', maxWidth: '62ch' }}>{t(`pricing.faq.a${q.slice(1)}`)}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          <p style={{ marginTop: '28px', fontSize: '0.9375rem' }}>
            {t('pricing.bottom.text')} <Link to="/contact" className="link">{t('pricing.bottom.link')} →</Link>
          </p>
        </div>
      </section>
    </>
  );
}
