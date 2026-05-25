import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  fr: {
    meta: { title: "Contact | MAINTevo", description: "Contactez notre équipe support et commerciale." },
    hero: {
      title: "Contactez-nous",
      desc: "Nos équipes sont basées au Maroc et disponibles pour répondre à toutes vos questions sur MAINTevo."
    },
    info: {
      title: "Informations directes",
      support: { title: "Support technique", desc: "Pour nos clients, réponse en moins de 2 heures." },
      sales: { title: "Commercial & Déploiements", desc: "Demandes de devis et appels d'offres." },
      hq: { title: "Bureaux", desc: "Technopark Casablanca\nRoute de Nouaceur, BP 16447\nCasablanca, Maroc" }
    },
    form: {
      title: "Envoyer un message",
      success: { title: "Message envoyé", desc: "Nous reviendrons vers vous dès que possible.", redo: "Nouveau message" },
      fields: {
        firstName: "Prénom",
        lastName: "Nom",
        email: "E-mail professionnel",
        subject: { label: "Sujet", placeholder: "Choisissez un sujet…", options: ["Question commerciale", "Aide technique", "Presse & Partenariats", "Autre"] },
        message: "Message",
        submit: "Envoyer le message",
        submitting: "Envoi en cours…"
      }
    }
  },
  ar: {
    meta: { title: "اتصل بنا | MAINTevo", description: "اتصل بفريق الدعم والمبيعات لدينا." },
    hero: {
      title: "اتصل بنا",
      desc: "فرقنا متواجدة في المغرب ومتاحة للإجابة على جميع أسئلتكم حول MAINTevo."
    },
    info: {
      title: "معلومات مباشرة",
      support: { title: "الدعم الفني", desc: "لعملائنا، الرد في أقل من ساعتين." },
      sales: { title: "المبيعات والانتشار", desc: "طلبات عروض الأسعار والمناقصات." },
      hq: { title: "المكاتب", desc: "تكنوبارك الدار البيضاء\nطريق النواصر، ص.ب 16447\nالدار البيضاء، المغرب" }
    },
    form: {
      title: "أرسل رسالة",
      success: { title: "تم إرسال الرسالة", desc: "سنرد عليك في أقرب وقت ممكن.", redo: "رسالة جديدة" },
      fields: {
        firstName: "الاسم الشخصي",
        lastName: "الاسم العائلي",
        email: "البريد الإلكتروني المهني",
        subject: { label: "الموضوع", placeholder: "اختر موضوعاً...", options: ["سؤال تجاري", "حاجة لمساعدة تقنية", "الصحافة والشراكات", "آخر"] },
        message: "الرسالة",
        submit: "إرسال الرسالة",
        submitting: "جاري الإرسال..."
      }
    }
  },
  en: {
    meta: { title: "Contact | MAINTevo", description: "Contact our support and sales team." },
    hero: {
      title: "Contact Us",
      desc: "Our teams are based in Morocco and available to answer all your questions about MAINTevo."
    },
    info: {
      title: "Direct Information",
      support: { title: "Technical Support", desc: "For our customers, response in under 2 hours." },
      sales: { title: "Sales & Deployments", desc: "Quote requests and tenders." },
      hq: { title: "Offices", desc: "Technopark Casablanca\nRoute de Nouaceur, BP 16447\nCasablanca, Morocco" }
    },
    form: {
      title: "Send a Message",
      success: { title: "Message sent", desc: "We will get back to you as soon as possible.", redo: "New message" },
      fields: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Professional Email",
        subject: { label: "Subject", placeholder: "Select a subject...", options: ["Sales question", "Technical help", "Press & Partnerships", "Other"] },
        message: "Message",
        submit: "Send Message",
        submitting: "Sending..."
      }
    }
  }
};

export default function Contact() {
  const scrollAnim = useScrollAnimation();
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const { language } = useLanguage();
  const t = translations[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div style={{ background: 'var(--color-bg)', paddingTop: '52px' }}>
      <PageMeta title={t.meta.title} description={t.meta.description} />
      <section className="section" style={{ padding: '8rem 0', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: 'var(--color-text)', marginBottom: '1rem', fontFamily: 'var(--font-display)', fontWeight: 700 }}>
              {t.hero.title}
            </h1>
            <p style={{ color: 'var(--color-muted)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
              {t.hero.desc}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
            
            {/* Information */}
            <motion.div {...scrollAnim}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--color-text)' }}>
                {t.info.title}
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ background: 'var(--color-primary-glow)', width: 48, height: 48, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', flexShrink: 0 }}>
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.25rem', fontSize: '1.125rem' }}>{t.info.support.title}</h4>
                    <p style={{ color: 'var(--color-muted)', marginBottom: '0.5rem' }}>{t.info.support.desc}</p>
                    <a href="mailto:support@maintevo.com" style={{ color: 'var(--color-primary)', fontWeight: 500 }}>support@maintevo.com</a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ background: 'var(--color-primary-glow)', width: 48, height: 48, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', flexShrink: 0 }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.25rem', fontSize: '1.125rem' }}>{t.info.sales.title}</h4>
                    <p style={{ color: 'var(--color-muted)', marginBottom: '0.5rem' }}>{t.info.sales.desc}</p>
                    <a href="mailto:sales@maintevo.com" style={{ color: 'var(--color-primary)', fontWeight: 500 }}>sales@maintevo.com</a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ background: 'var(--color-primary-glow)', width: 48, height: 48, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', flexShrink: 0 }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.25rem', fontSize: '1.125rem' }}>{t.info.hq.title}</h4>
                    <pre style={{ color: 'var(--color-muted)', lineHeight: 1.6, fontFamily: 'inherit', whiteSpace: 'pre-line' }}>
                      {t.info.hq.desc}
                    </pre>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div {...scrollAnim} transition={{ delay: 0.2 }}>
              <div className="glass-card" style={{ padding: '3rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--color-text)' }}>
                  {t.form.title}
                </h3>
                
                {formStatus === 'success' ? (
                  <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                    <div style={{ width: 64, height: 64, background: '#D1FAE5', color: '#10B981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                      ✓
                    </div>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem' }}>{t.form.success.title}</h4>
                    <p style={{ color: 'var(--color-muted)' }}>{t.form.success.desc}</p>
                    <Button onClick={() => setFormStatus('idle')} variant="outline" style={{ marginTop: '2rem' }}>{t.form.success.redo}</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text)' }}>{t.form.fields.firstName}</label>
                        <input type="text" required style={inputStyle} />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text)' }}>{t.form.fields.lastName}</label>
                        <input type="text" required style={inputStyle} />
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text)' }}>{t.form.fields.email}</label>
                      <input type="email" required style={inputStyle} />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text)' }}>{t.form.fields.subject.label}</label>
                      <select style={inputStyle} required>
                        <option value="">{t.form.fields.subject.placeholder}</option>
                        {t.form.fields.subject.options.map((opt, i) => (
                           <option key={i} value={i}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text)' }}>{t.form.fields.message}</label>
                      <textarea rows={5} required style={{...inputStyle, resize: 'vertical'}}></textarea>
                    </div>

                    <Button type="submit" size="lg" disabled={formStatus === 'submitting'} style={{ width: '100%' }}>
                      {formStatus === 'submitting' ? t.form.fields.submitting : t.form.fields.submit}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.75rem 1rem',
  borderRadius: '8px',
  border: '1px solid var(--color-border)',
  background: 'var(--color-bg)',
  fontSize: '1rem',
  color: 'var(--color-text)',
  outline: 'none',
  transition: 'all 0.2s'
};
