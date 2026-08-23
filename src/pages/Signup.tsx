import { useState } from 'react';
import { Link } from '../components/LocaleLink';
import { useTranslation } from 'react-i18next';
import PageBand from '../components/PageBand';
import { CONTACT_EMAIL } from '../seo/site';

const EMAIL = CONTACT_EMAIL;

/**
 * Onboarding is concierge, so signing up is a start request rather than a
 * self-serve account creation. Deliberately collects no password and no
 * payment details.
 */
export default function Signup() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);

  const steps = ['s1', 's2', 's3'] as const;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [
      `${t('contact.form_company')}: ${f.get('company') || ''}`,
      `${t('signup.form_site')}: ${f.get('site') || ''}`,
      `${t('signup.form_machines')}: ${f.get('machines') || ''}`,
      `${t('contact.form_name')}: ${f.get('name') || ''}`,
      `${t('signup.form_role')}: ${f.get('role') || ''}`,
      `${t('contact.form_email')}: ${f.get('email') || ''}`,
    ].join('\n');
    window.location.href =
      `mailto:${EMAIL}?subject=${encodeURIComponent('Signup request')}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field = (
    id: string,
    labelKey: string,
    extra: React.InputHTMLAttributes<HTMLInputElement> = {},
  ) => (
    <div>
      <label className="form-label" htmlFor={id}>{t(labelKey)}</label>
      <input className="form-input" id={id} name={id} {...extra} />
    </div>
  );

  return (
    <>
      <section className="hero-pad-sm">
        <div className="wrap">
          <h1 className="hero-in" style={{ maxWidth: '16ch' }}>{t('signup.title')}</h1>
          <p className="lead hero-in hero-in-2" style={{ maxWidth: '58ch', marginTop: '22px' }}>
            {t('signup.desc')}
          </p>
        </div>
      </section>

      <PageBand src="/images/pages/signup.webp" quiet />

      <hr className="rule-brand" />

      <section className="section-md">
        <div className="wrap">
          <div
            className="signup-grid"
            style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: '72px', alignItems: 'start' }}
          >
            <div>
              <h2 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{t('signup.steps_title')}</h2>
              <ol className="seq" style={{ listStyle: 'none', marginTop: '24px' }}>
                {steps.map((s, i) => (
                  <li key={s} className="seq-item">
                    <span className="seq-num">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 style={{ marginBottom: '6px' }}>{t(`signup.${s}_title`)}</h3>
                      <p style={{ fontSize: '0.9375rem' }}>{t(`signup.${s}_body`)}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p style={{ marginTop: '26px', fontSize: '0.9375rem' }}>
                {t('signup.alt')}{' '}
                <Link to="/contact" className="link">{t('signup.alt_link')} →</Link>
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', marginBottom: '20px' }}>{t('signup.form_title')}</h2>
              <form onSubmit={onSubmit} style={{ display: 'grid', gap: '16px' }}>
                {field('company', 'contact.form_company', { required: true, autoComplete: 'organization' })}
                {field('site', 'signup.form_site', { autoComplete: 'address-level2' })}
                {field('machines', 'signup.form_machines', { type: 'number', min: 1, inputMode: 'numeric' })}
                {field('name', 'contact.form_name', { required: true, autoComplete: 'name' })}
                {field('role', 'signup.form_role', { autoComplete: 'organization-title' })}
                {field('email', 'contact.form_email', { type: 'email', required: true, autoComplete: 'email' })}
                <div>
                  <button type="submit" className="btn-p">{t('signup.submit')}</button>
                </div>
                <p style={{ fontSize: '0.8125rem' }} aria-live="polite">
                  {sent ? `${t('signup.note')} (${EMAIL})` : t('signup.note')}
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .signup-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </>
  );
}
