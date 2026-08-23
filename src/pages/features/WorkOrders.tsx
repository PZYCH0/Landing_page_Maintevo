import { useTranslation } from 'react-i18next';
import FeaturePage, { DefList } from '../../components/FeaturePage';

export default function WorkOrders() {
  const { t } = useTranslation();
  const states = ['s1', 's2', 's3', 's4'] as const;

  return (
    <FeaturePage ns="workOrders">
      <section className="section-md">
        <div className="wrap">
          <DefList ns="workOrders.benefits" keys={['b1', 'b2', 'b3', 'b4']} />
        </div>
      </section>

      <section className="section-md sunken">
        <div className="wrap">
          <h2 style={{ marginBottom: '36px' }}>{t('workOrders.flow.title')}</h2>
          <ol className="seq" style={{ listStyle: 'none', maxWidth: '760px' }}>
            {states.map((s, i) => (
              <li key={s} className="seq-item">
                <span className="seq-num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 style={{ marginBottom: '6px' }}>{t(`workOrders.flow.${s}_title`)}</h3>
                  <p style={{ fontSize: '0.9375rem' }}>{t(`workOrders.flow.${s}_desc`)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </FeaturePage>
  );
}
