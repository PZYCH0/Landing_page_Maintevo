import { useTranslation } from 'react-i18next';
import FeaturePage, { DefList } from '../../components/FeaturePage';

export default function Inventory() {
  const { t } = useTranslation();

  return (
    <FeaturePage ns="inventory">
      <section className="section-md">
        <div className="wrap">
          <DefList ns="inventory.benefits" keys={['b1', 'b2', 'b3', 'b4']} />
        </div>
      </section>

      {/* The section this page was missing: the benefits list said what it is
          good for, and nothing said how it actually works. */}
      <section className="section-md sunken ruled-top">
        <div className="wrap">
          <h2 style={{ maxWidth: '22ch' }}>{t('inventory.detail.title')}</h2>
          <p className="measure" style={{ marginTop: '14px', marginBottom: '36px' }}>{t('inventory.detail.lead')}</p>
          <ol className="seq" style={{ listStyle: 'none' }}>
            {[1, 2, 3, 4].map(n => (
              <li key={n} className="seq-item">
                <span className="seq-num">{String(n).padStart(2, '0')}</span>
                <div>
                  <h3 style={{ marginBottom: '7px' }}>{t(`inventory.detail.t${n}`)}</h3>
                  <p style={{ fontSize: '0.9375rem' }}>{t(`inventory.detail.d${n}`)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </FeaturePage>
  );
}
