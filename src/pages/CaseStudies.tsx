import React from 'react';
import { PageMeta } from '../components/PageMeta';
import { SectionHeader } from '../components/ui/SectionHeader';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  fr: {
    meta: { title: "Études de cas | MAINTevo", description: "Découvrez comment nos clients améliorent leur maintenance." },
    header: { title: "Ils ont transformé leur maintenance", subtitle: "Études de cas complètes à venir — nous documentons les résultats de notre programme pilote." },
    comingSoon: "Étude complète à venir",
    studies: [
      { title: "Réduction de 35 % des arrêts non planifiés", category: "Industrie", image: "https://images.unsplash.com/photo-1563829986345-0d04b6b61df7?auto=format&fit=crop&q=80&w=600" },
      { title: "Digitalisation complète de la maintenance préventive", category: "Énergie", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=600" },
      { title: "Zéro non-conformité sur les dossiers d'audit", category: "Santé", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600" }
    ]
  },
  ar: {
    meta: { title: "دراسات الحالة | MAINTevo", description: "اكتشف كيف يحسن عملائنا صيانة معداتهم." },
    header: { title: "حوّلوا صيانتهم للأفضل", subtitle: "دراسات الحالة الكاملة قادمة قريباً — نحن نوثق نتائج برنامجنا التجريبي." },
    comingSoon: "الدراسة الكاملة قريباً",
    studies: [
      { title: "تقليل الأعطال غير المخططة بنسبة 35٪", category: "التصنيع", image: "https://images.unsplash.com/photo-1563829986345-0d04b6b61df7?auto=format&fit=crop&q=80&w=600" },
      { title: "رقمنة كاملة للصيانة الوقائية", category: "الطاقة", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=600" },
      { title: "صفر أخطاء في سجلات الصيانة خلال التدقيق", category: "الصحة", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600" }
    ]
  },
  en: {
    meta: { title: "Case Studies | MAINTevo", description: "Discover how our clients improve their maintenance." },
    header: { title: "They Transformed Their Maintenance", subtitle: "Full case studies coming soon — we're documenting our pilot results." },
    comingSoon: "Full study coming soon",
    studies: [
      { title: "35% reduction in unplanned breakdowns", category: "Manufacturing", image: "https://images.unsplash.com/photo-1563829986345-0d04b6b61df7?auto=format&fit=crop&q=80&w=600" },
      { title: "Full digitalization of preventive maintenance", category: "Energy", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=600" },
      { title: "Zero audit findings across maintenance records", category: "Healthcare", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600" }
    ]
  }
};

export default function CaseStudies() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div style={{ paddingTop: '52px', minHeight: '100vh', background: 'var(--color-bg)' }}>
      <PageMeta title={t.meta.title} description={t.meta.description} />
      
      <section className="section">
        <div className="container" style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}>
          <SectionHeader centered title={t.header.title} subtitle={t.header.subtitle} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {t.studies.map((s, i) => (
               <div key={i} className="glass-card" style={{ padding: 0, overflow: 'hidden', textAlign: language === 'ar' ? 'right' : 'left' }}>
                 <img src={s.image} alt={s.title} loading="lazy" width={600} height={200} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                 <div style={{ padding: '2rem' }}>
                    <span style={{ color: 'var(--color-primary)', fontSize: '0.875rem', fontWeight: 600 }}>{s.category}</span>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text)', marginTop: '0.5rem', marginBottom: '1.5rem' }}>{s.title}</h3>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-muted)', border: '1px solid var(--color-border)', borderRadius: '100px', padding: '0.3rem 0.75rem' }}>
                      {t.comingSoon}
                    </span>
                 </div>
               </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
