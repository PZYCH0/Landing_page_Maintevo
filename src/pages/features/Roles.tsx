import { useTranslation } from 'react-i18next';
import FeaturePage from '../../components/FeaturePage';

const Check = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true" style={{ flexShrink: 0, marginTop: '5px' }}>
    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Roles() {
  const { t } = useTranslation();

  const roles = [
    { ns: 'roles.manager',    perms: ['p1', 'p2', 'p3', 'p4', 'p5'] },
    { ns: 'roles.technician', perms: ['p1', 'p2', 'p3', 'p4', 'p5'] },
    { ns: 'roles.requester',  perms: ['p1', 'p2', 'p3'] },
    { ns: 'roles.qr',         perms: ['p1', 'p2', 'p3'] },
  ];

  return (
    <FeaturePage ns="roles">
      <section className="section-md">
        <div className="wrap">
          {roles.map(({ ns, perms }) => (
            <div
              key={ns}
              style={{
                display: 'grid',
                gridTemplateColumns: '200px minmax(0,1fr)',
                gap: '32px',
                padding: '36px 0',
                borderTop: '1px solid var(--rule)',
              }}
              className="role-block"
            >
              <div>
                <div style={{
                  fontFamily: 'var(--font-head)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '.08em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                }}>
                  {t(`${ns}.role`)}
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>{t(`${ns}.title`)}</h3>
                <p style={{ fontSize: '0.9375rem', maxWidth: '60ch', marginBottom: '20px' }}>{t(`${ns}.desc`)}</p>
                <ul style={{ listStyle: 'none', display: 'grid', gap: '7px' }}>
                  {perms.map(p => (
                    <li key={p} style={{ display: 'flex', gap: '10px', fontSize: '0.9375rem', color: 'var(--ink)' }}>
                      <span style={{ color: 'var(--ok)' }}><Check /></span>
                      {t(`${ns}.${p}`)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--rule)' }} />
        </div>
      </section>

      <style>{`
        @media (max-width: 720px) {
          .role-block { grid-template-columns: 1fr !important; gap: 12px !important; }
        }
      `}</style>
    </FeaturePage>
  );
}
