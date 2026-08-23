import { Link } from './LocaleLink';
import { useTranslation } from 'react-i18next';

const col = { display: 'flex', flexDirection: 'column' as const, gap: '9px', listStyle: 'none' };
const head = {
  fontFamily: 'var(--font-head)',
  fontSize: '0.75rem',
  fontWeight: 600,
  letterSpacing: '.08em',
  textTransform: 'uppercase' as const,
  color: 'var(--ink)',
  marginBottom: '14px',
};

export default function Footer() {
  const { t } = useTranslation();

  const link = { fontSize: '0.9375rem', color: 'var(--ink-muted)' };

  return (
    <footer style={{ background: 'var(--bg-sunken)', borderTop: '1px solid var(--rule)', padding: '64px 0 32px' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '40px', marginBottom: '48px' }}>
          <div>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', marginBottom: '12px' }}>
              <img src="/images/logo-maintevo.png" width="24" height="24" className="brand-mark" alt="" />
              <span style={{ fontFamily: 'var(--font-head)', fontSize: '1rem', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--ink)' }}>
                Mainte<span style={{ color: 'var(--accent-2)' }}>Neat</span>
              </span>
            </Link>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.6, maxWidth: '30ch' }}>{t('footer.tagline')}</p>
          </div>

          <div>
            <div style={head}>{t('footer.platform')}</div>
            <ul style={col}>
              <li><Link to="/features/work-orders" className="link" style={link}>{t('nav.features.workOrders')}</Link></li>
              <li><Link to="/features/preventive-maintenance" className="link" style={link}>{t('nav.features.preventive')}</Link></li>
              <li><Link to="/features/equipment" className="link" style={link}>{t('nav.features.equipment')}</Link></li>
              <li><Link to="/features/kpi-dashboard" className="link" style={link}>{t('nav.features.kpi')}</Link></li>
              <li><Link to="/features/inventory" className="link" style={link}>{t('nav.features.inventory')}</Link></li>
            </ul>
          </div>

          <div>
            <div style={head}>{t('footer.company')}</div>
            <ul style={col}>
              <li><Link to="/pricing" className="link" style={link}>{t('nav.pricing')}</Link></li>
              <li><Link to="/comparison" className="link" style={link}>{t('nav.comparison')}</Link></li>
              <li><Link to="/industries" className="link" style={link}>{t('nav.industries')}</Link></li>
              <li><Link to="/enterprise" className="link" style={link}>{t('nav.enterprise')}</Link></li>
              <li><Link to="/resources" className="link" style={link}>{t('nav.resources')}</Link></li>
            </ul>
          </div>

          <div>
            <div style={head}>{t('footer.about')}</div>
            <ul style={col}>
              <li><Link to="/about" className="link" style={link}>{t('footer.company_about')}</Link></li>
              <li><Link to="/contact" className="link" style={link}>{t('footer.company_contact')}</Link></li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--rule)', paddingTop: '24px' }}>
          <p style={{ fontSize: '0.875rem' }}>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
