import React from 'react';
import { PageMeta } from '../components/PageMeta';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  fr: {
    meta: { title: "Sécurité & Conformité | MAINTevo", description: "Comment nous protégeons vos données industrielles." },
    header: { title: "Sécurité de niveau bancaire", subtitle: "Vos données sont critiques. Notre sécurité l'est tout autant." },
    card: {
      title: "Certifications",
      desc: "Nous sommes certifiés ISO 27001 et conformes au RGPD. Toutes vos données sont hébergées dans des datacenters Tier III ultra-sécurisés en France.",
      listHeader: "Fonctionnalités incluses :",
      items: [
        "Single Sign-On (SSO) via SAML ou OAuth",
        "Contrôle d'accès strict par rôle (RBAC)",
        "Journaux d'audit complets pour la conformité FDA/ISO",
        "Chiffrement de bout en bout (AES-256)"
      ]
    }
  },
  ar: {
    meta: { title: "الأمن والامتثال | MAINTevo", description: "كيف نحمي بياناتكم الصناعية." },
    header: { title: "أمن بمستوى بنكي", subtitle: "بياناتكم حساسة. أمننا كذلك." },
    card: {
      title: "الشهادات",
      desc: "نحن معتمدون بشهادة ISO 27001 ومتوافقون مع RGPD. يتم استضافة جميع بياناتكم في مراكز بيانات من المستوى الثالث (Tier III) فائقة الأمان في فرنسا.",
      listHeader: "الميزات المشمولة :",
      items: [
        "تسجيل الدخول الموحد (SSO) عبر SAML أو OAuth",
        "التحكم الصارم في الوصول القائم على الأدوار (RBAC)",
        "سجلات تدقيق كاملة للامتثال للمعايير الدولية (ISO)",
        "تشفير شامل (AES-256)"
      ]
    }
  },
  en: {
    meta: { title: "Security & Compliance | MAINTevo", description: "How we protect your industrial data." },
    header: { title: "Bank-level Security", subtitle: "Your data is critical. So is our security." },
    card: {
      title: "Certifications",
      desc: "We are ISO 27001 certified and GDPR compliant. All your data is hosted in ultra-secure Tier III data centers in France.",
      listHeader: "Included features:",
      items: [
        "Single Sign-On (SSO) via SAML or OAuth",
        "Strict Role-Based Access Control (RBAC)",
        "Full audit logs for FDA/ISO compliance",
        "End-to-end encryption (AES-256)"
      ]
    }
  }
};

export default function Security() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div style={{ paddingTop: '52px', minHeight: '100vh', background: 'var(--color-bg)' }}>
      <PageMeta title={t.meta.title} description={t.meta.description} />
      <section className="section">
        <div className="container" style={{ maxWidth: '800px', direction: language === 'ar' ? 'rtl' : 'ltr' }}>
          <SectionHeader centered title={t.header.title} subtitle={t.header.subtitle} />
          
          <div className="glass-card" style={{ marginTop: '3rem', padding: '3rem', textAlign: language === 'ar' ? 'right' : 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', justifyContent: language === 'ar' ? 'flex-start' : 'flex-start' }}>
               <ShieldCheck size={32} color="var(--color-primary)" />
               <h2 style={{ fontSize: '1.5rem', color: 'var(--color-text)', fontWeight: 600 }}>{t.card.title}</h2>
            </div>
            <p style={{ color: 'var(--color-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
              {t.card.desc}
            </p>

            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text)', fontWeight: 600, marginBottom: '1rem' }}>{t.card.listHeader}</h3>
            <ul style={{ 
                color: 'var(--color-muted)', 
                paddingLeft: language === 'ar' ? '0' : '1.5rem', 
                paddingRight: language === 'ar' ? '1.5rem' : '0', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '0.5rem', 
                listStyle: 'disc',
                textAlign: language === 'ar' ? 'right' : 'left' 
            }}>
               {t.card.items.map((item, i) => (
                 <li key={i}>{item}</li>
               ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
