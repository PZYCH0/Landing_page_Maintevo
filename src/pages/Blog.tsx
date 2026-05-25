import React from 'react';
import { PageMeta } from '../components/PageMeta';
import { SectionHeader } from '../components/ui/SectionHeader';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  fr: {
    meta: { title: "Blog Maintenance | MAINTevo", description: "Actualités et meilleures pratiques en GMAO." },
    header: { title: "Le Blog Maintenance", subtitle: "Découvrez nos derniers articles et analyses du secteur." },
    posts: [
      { title: "Comment réussir l'intégration d'une nouvelle GMAO ?", date: "15 mai 2026", cat: "Guides" },
      { title: "Les 5 KPI de maintenance à suivre absolument", date: "02 mai 2026", cat: "Analytique" },
      { title: "Les tendances Industrie 4.0 en maintenance", date: "20 avr. 2026", cat: "Tech" }
    ]
  },
  ar: {
    meta: { title: "مدونة الصيانة | MAINTevo", description: "آخر الأخبار وأفضل الممارسات في نظام GMAO." },
    header: { title: "مدونة الصيانة", subtitle: "اكتشف أحدث مقالاتنا ورؤى الصناعة." },
    posts: [
      { title: "كيف تنجح في دمج نظام GMAO جديد؟", date: "15 مايو 2026", cat: "أدلة" },
      { title: "أهم 5 مؤشرات أداء (KPI) للصيانة يجب عليك متابعتها", date: "02 مايو 2026", cat: "تحليلات" },
      { title: "اتجاهات الصناعة 4.0 في مجال الصيانة", date: "20 أبريل 2026", cat: "تقنية" }
    ]
  },
  en: {
    meta: { title: "Maintenance Blog | MAINTevo", description: "Latest news and best practices in CMMS." },
    header: { title: "The Maintenance Blog", subtitle: "Discover our latest articles and industry insights." },
    posts: [
      { title: "How to successfully integrate a new CMMS?", date: "May 15, 2026", cat: "Guides" },
      { title: "The 5 maintenance KPIs you should follow", date: "May 02, 2026", cat: "Analytics" },
      { title: "Industry 4.0 trends in maintenance", date: "Apr 20, 2026", cat: "Tech" }
    ]
  }
};

export default function Blog() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div style={{ paddingTop: '52px', minHeight: '100vh', background: 'var(--color-bg)' }}>
      <PageMeta title={t.meta.title} description={t.meta.description} />
      <section className="section">
        <div className="container" style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}>
          <SectionHeader centered title={t.header.title} subtitle={t.header.subtitle} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
             {t.posts.map((p, i) => (
                <div key={i} className="glass-card" style={{ padding: '2rem', textAlign: language === 'ar' ? 'right' : 'left' }}>
                   <span style={{ color: 'var(--color-primary)', fontSize: '0.875rem' }}>{p.cat}</span>
                   <h3 style={{ color: 'var(--color-text)', fontSize: '1.25rem', fontWeight: 600, marginTop: '0.5rem', marginBottom: '1rem' }}>{p.title}</h3>
                   <span style={{ color: 'var(--color-muted)', fontSize: '0.875rem' }}>{p.date}</span>
                </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
