import { useTranslation } from 'react-i18next';
import FeaturePage, { DefList } from '../../components/FeaturePage';

export default function Equipment() {
  const { t } = useTranslation();

  const levels = [
    { key: 'l1', swatch: 'var(--rule-strong)' },
    { key: 'l2', swatch: 'var(--accent)' },
    { key: 'l3', swatch: 'var(--warn)' },
    { key: 'l4', swatch: 'var(--crit)' },
  ];

  return (
    <FeaturePage ns="equipment">
      <section className="section-md sunken">
        <div className="wrap">
          <h2>{t('equipment.criticality.title')}</h2>
          <p className="measure" style={{ marginTop: '12px', marginBottom: '32px' }}>
            {t('equipment.criticality.lead')}
          </p>
          <div style={{ maxWidth: '640px' }}>
            {levels.map(({ key, swatch }, i) => (
              <div key={key} className="crit-row">
                <span className="crit-swatch" style={{ background: swatch }} aria-hidden="true" />
                <span className="crit-name">
                  <span style={{ color: 'var(--ink-muted)', fontVariantNumeric: 'tabular-nums' }}>{i + 1} </span>
                  {t(`equipment.criticality.${key}_name`)}
                </span>
                <span style={{ fontSize: '0.9375rem', color: 'var(--ink-muted)' }}>
                  {t(`equipment.criticality.${key}_desc`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-md">
        <div className="wrap">
          <DefList ns="equipment.benefits" keys={['b1', 'b2', 'b3']} />
        </div>
      </section>
    </FeaturePage>
  );
}
