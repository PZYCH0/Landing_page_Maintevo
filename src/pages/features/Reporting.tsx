import { useTranslation } from 'react-i18next';
import FeaturePage, { DefList } from '../../components/FeaturePage';

export default function Reporting() {
  const { t } = useTranslation();
  const events = ['e1', 'e2', 'e3', 'e4', 'e5'] as const;

  return (
    <FeaturePage ns="reporting">
      <section className="section-md">
        <div className="wrap">
          <DefList ns="reporting.benefits" keys={['b1', 'b2', 'b3', 'b4']} />
        </div>
      </section>

      <section className="section-md sunken">
        <div className="wrap">
          <h2 style={{ marginBottom: '32px' }}>{t('reporting.audit.title')}</h2>
          <div style={{ maxWidth: '720px' }}>
            {events.map(e => (
              <div key={e} className="def-row">
                <div className="def-label">{t(`reporting.audit.${e}_title`)}</div>
                <p style={{ fontSize: '0.9375rem' }}>{t(`reporting.audit.${e}_sub`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FeaturePage>
  );
}
