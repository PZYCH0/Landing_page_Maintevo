import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FeaturePage from '../../components/FeaturePage';

const CATS = ['cat1', 'cat2', 'cat3', 'cat4'] as const;
const KPIS = ['kpi1', 'kpi2', 'kpi3', 'kpi4', 'kpi5'] as const;

export default function KpiDashboard() {
  const { t } = useTranslation();
  const [active, setActive] = useState<(typeof CATS)[number]>('cat1');

  return (
    <FeaturePage ns="kpi">
      <section className="section-md">
        <div className="wrap">
          <h2>{t('kpi.categories.title')}</h2>
          <p className="measure" style={{ marginTop: '12px', marginBottom: '32px' }}>
            {t('kpi.categories.lead')}
          </p>

          <div
            role="tablist"
            aria-label={t('kpi.categories.title')}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', borderBottom: '1px solid var(--rule)', marginBottom: '8px' }}
          >
            {CATS.map(c => {
              const on = c === active;
              return (
                <button
                  key={c}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActive(c)}
                  style={{
                    background: 'none',
                    border: 'none',
                    borderBottom: `2px solid ${on ? 'var(--accent)' : 'transparent'}`,
                    marginBottom: '-1px',
                    padding: '11px 14px',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-head)',
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    color: on ? 'var(--ink)' : 'var(--ink-muted)',
                    transition: 'color .18s ease, border-color .18s ease',
                  }}
                >
                  {t(`kpi.categories.${c}_label`)}
                </button>
              );
            })}
          </div>

          <p className="measure" style={{ padding: '22px 0 8px', fontSize: '0.9375rem' }}>
            {t(`kpi.categories.${active}_desc`)}
          </p>

          <div>
            {KPIS.map(k => (
              <div key={k} className="def-row">
                <div className="def-label">{t(`kpi.categories.${active}_${k}_label`)}</div>
                <p style={{ fontSize: '0.9375rem' }}>
                  {t(`kpi.categories.${active}_${k}_body`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FeaturePage>
  );
}
