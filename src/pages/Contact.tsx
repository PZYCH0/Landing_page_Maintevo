import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PageBand from '../components/PageBand';
import { CONTACT_EMAIL } from '../seo/site';

const EMAIL = CONTACT_EMAIL;
const LINKEDIN = 'https://www.linkedin.com/company/mainteneat';

export default function Contact() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);

  const routes = [
    { label: 'contact.general_label', sub: 'contact.general_sub', subject: 'Question' },
    { label: 'contact.sales_label',   sub: 'contact.sales_sub',   subject: 'Demo request' },
    { label: 'contact.support_label', sub: 'contact.support_sub', subject: 'Support' },
  ];

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `${f.get('message') || ''}\n\n— ${f.get('name') || ''}, ${f.get('company') || ''}\n${f.get('email') || ''}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Website enquiry')}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <section className="hero-pad-sm">
        <div className="wrap">
          <h1 className="hero-in">{t('contact.title')}</h1>
          <p className="lead hero-in hero-in-2" style={{ maxWidth: '52ch', marginTop: '22px' }}>{t('contact.desc')}</p>
        </div>
      </section>

      <PageBand src="/images/pages/contact.webp" quiet />

      <section className="section-md">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: '72px', alignItems: 'start' }} className="contact-grid">

            <div>
              {routes.map(r => (
                <div key={r.label} style={{ padding: '20px 0', borderTop: '1px solid var(--rule)' }}>
                  <div style={{ fontFamily: 'var(--font-head)', fontWeight: 600, fontSize: '0.9375rem', marginBottom: '3px' }}>
                    {t(r.label)}
                  </div>
                  <p style={{ fontSize: '0.9375rem', marginBottom: '7px' }}>{t(r.sub)}</p>
                  <a className="link" style={{ fontSize: '0.9375rem' }} href={`mailto:${EMAIL}?subject=${encodeURIComponent(r.subject)}`}>
                    {EMAIL}
                  </a>
                </div>
              ))}
              <div style={{ padding: '20px 0', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
                <div style={{ fontFamily: 'var(--font-head)', fontWeight: 600, fontSize: '0.9375rem', marginBottom: '7px' }}>LinkedIn</div>
                <a className="link" style={{ fontSize: '0.9375rem' }} href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                  linkedin.com/company/mainteneat
                </a>
              </div>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', marginBottom: '20px' }}>{t('contact.form_title')}</h2>
              <form onSubmit={onSubmit} style={{ display: 'grid', gap: '16px' }}>
                <div>
                  <label className="form-label" htmlFor="c-name">{t('contact.form_name')}</label>
                  <input className="form-input" id="c-name" name="name" required autoComplete="name" />
                </div>
                <div>
                  <label className="form-label" htmlFor="c-email">{t('contact.form_email')}</label>
                  <input className="form-input" id="c-email" name="email" type="email" required autoComplete="email" />
                </div>
                <div>
                  <label className="form-label" htmlFor="c-company">{t('contact.form_company')}</label>
                  <input className="form-input" id="c-company" name="company" autoComplete="organization" />
                </div>
                <div>
                  <label className="form-label" htmlFor="c-message">{t('contact.form_message')}</label>
                  <textarea className="form-input" id="c-message" name="message" rows={5} required />
                </div>
                <div>
                  <button type="submit" className="btn-p">{t('contact.form_submit')}</button>
                </div>
                <p style={{ fontSize: '0.8125rem' }} aria-live="polite">
                  {sent ? `${t('contact.form_note')} (${EMAIL})` : t('contact.form_note')}
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </>
  );
}
