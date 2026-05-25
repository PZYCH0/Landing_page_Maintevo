import React from 'react';
import { PageMeta } from '../components/PageMeta';
import { SectionHeader } from '../components/ui/SectionHeader';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  fr: {
    meta: { title: "Intégrations | MAINTevo", description: "Connectez MAINTevo à vos outils préférés." },
    header: { title: "Connectez votre écosystème", subtitle: "MAINTevo s'intègre nativement à plus de 50 solutions industrielles et ERP." },
    types: {
      erp: "ERP",
      monitoring: "Supervision",
      analytics: "Analytique",
      comm: "Communication",
      fleet: "Gestion de flotte"
    }
  },
  ar: {
    meta: { title: "التكاملات | MAINTevo", description: "اربط MAINTevo بأدواتك المفضلة." },
    header: { title: "اربط نظامك المتكامل", subtitle: "MAINTevo يتكامل بشكل طبيعي مع أكثر من 50 حلاً صناعياً ونظام ERP." },
    types: {
      erp: "تخطيط موارد المؤسسات (ERP)",
      monitoring: "المراقبة",
      analytics: "التحليلات",
      comm: "التواصل",
      fleet: "إدارة الأسطول"
    }
  },
  en: {
    meta: { title: "Integrations | MAINTevo", description: "Connect MAINTevo to your favorite tools." },
    header: { title: "Connect Your Ecosystem", subtitle: "MAINTevo integrates natively with more than 50 industrial solutions and ERPs." },
    types: {
      erp: "ERP",
      monitoring: "Monitoring",
      analytics: "Analytics",
      comm: "Communication",
      fleet: "Fleet Management"
    }
  }
};

export default function Integrations() {
  const { language } = useLanguage();
  const t = translations[language];

  const integrations = [
    { name: "SAP", type: t.types.erp },
    { name: "Microsoft Dynamics", type: t.types.erp },
    { name: "Sensors IoT", type: t.types.monitoring },
    { name: "Power BI", type: t.types.analytics },
    { name: "Slack", type: t.types.comm },
    { name: "Samsara", type: t.types.fleet }
  ];

  return (
    <div style={{ paddingTop: '52px', minHeight: '100vh', background: 'var(--color-bg)' }}>
      <PageMeta title={t.meta.title} description={t.meta.description} />
      <section className="section">
        <div className="container" style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}>
          <SectionHeader centered title={t.header.title} subtitle={t.header.subtitle} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
             {integrations.map((int, i) => (
                <div key={i} className="glass-card" style={{ textAlign: 'center', padding: '2rem' }}>
                   <div style={{ width: '60px', height: '60px', background: 'var(--color-surface-2)', borderRadius: '12px', margin: '0 auto 1rem auto' }} />
                   <h3 style={{ color: 'var(--color-text)', fontWeight: 600 }}>{int.name}</h3>
                   <p style={{ color: 'var(--color-muted)', fontSize: '0.875rem' }}>{int.type}</p>
                </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
