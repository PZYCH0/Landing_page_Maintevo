import React, { useState } from 'react';
import { PageMeta } from '../components/PageMeta';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  fr: {
    meta: { title: "Centre d'aide | MAINTevo", description: "Trouvez les réponses à vos questions." },
    header: { title: "Comment pouvons-nous vous aider ?", subtitle: "Cherchez dans nos articles d'aide ou contactez notre support." },
    search: "Rechercher (ex : Ajouter un équipement…)",
    cta: { text: "Vous ne trouvez pas votre réponse ?", button: "Contacter le support" },
    categories: [
      {
        title: "Premiers pas",
        items: ["Configuration du compte", "Ajouter des techniciens", "Créer votre premier équipement"]
      },
      {
        title: "Bons de travail",
        items: ["Attribution automatique", "Ajouter des pièces de rechange", "Clôture et signature"]
      }
    ]
  },
  ar: {
    meta: { title: "مركز المساعدة | MAINTevo", description: "جد الإجابات على أسئلتك." },
    header: { title: "كيف يمكننا مساعدتك ؟", subtitle: "ابحث في مقالات المساعدة الخاصة بنا أو اتصل بالدعم الفني." },
    search: "بحث (مثال: إضافة معدات...)",
    cta: { text: "لم تجد إجابتك ؟", button: "الاتصال بالدعم الفني" },
    categories: [
      { 
        title: "خطواتك الأولى", 
        items: ["إعداد الحساب", "إضافة فنيين", "إنشاء أول أصولك"] 
      },
      { 
        title: "أوامر العمل", 
        items: ["التعيين التلقائي", "إضافة قطع الغيار", "الإغلاق والتوقيع"] 
      }
    ]
  },
  en: {
    meta: { title: "Help Center | MAINTevo", description: "Find the answers to your questions." },
    header: { title: "How can we help you?", subtitle: "Search through our help articles or contact our support." },
    search: "Search (e.g., Adding equipment...)",
    cta: { text: "Can't find your answer?", button: "Contact Support" },
    categories: [
      { 
        title: "First Steps", 
        items: ["Account configuration", "Add technicians", "Create your first asset"] 
      },
      { 
        title: "Work Orders", 
        items: ["Automatic assignment", "Add spare parts", "Closing and signature"] 
      }
    ]
  }
};

export default function Help() {
  const { language } = useLanguage();
  const t = translations[language];
  const [query, setQuery] = useState('');

  const filteredCategories = t.categories
    .map(cat => ({
      ...cat,
      items: cat.items.filter(item =>
        item.toLowerCase().includes(query.toLowerCase()) ||
        cat.title.toLowerCase().includes(query.toLowerCase())
      ),
    }))
    .filter(cat => cat.items.length > 0);

  const displayCategories = query.trim() ? filteredCategories : t.categories;

  return (
    <div style={{ paddingTop: '52px', minHeight: '100vh', background: 'var(--color-bg)' }}>
      <PageMeta title={t.meta.title} description={t.meta.description} />
      <section className="section">
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center', direction: language === 'ar' ? 'rtl' : 'ltr' }}>
          <SectionHeader centered title={t.header.title} subtitle={t.header.subtitle} />

          <div style={{ marginTop: '2rem' }}>
            <input
              type="search"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder={t.search}
              aria-label={t.search}
              style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)', fontSize: '1.125rem', textAlign: language === 'ar' ? 'right' : 'left' }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '3rem', textAlign: language === 'ar' ? 'right' : 'left' }}>
            {displayCategories.length > 0 ? displayCategories.map((cat, i) => (
              <div key={i} className="glass-card" style={{ padding: '2rem' }}>
                <h3 style={{ color: 'var(--color-text)', fontWeight: 600, marginBottom: '1rem' }}>{cat.title}</h3>
                <ul style={{ color: 'var(--color-primary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {cat.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            )) : (
              <p style={{ color: 'var(--color-muted)', gridColumn: '1/-1', textAlign: 'center' }}>
                {language === 'ar' ? 'لا توجد نتائج' : language === 'fr' ? 'Aucun résultat' : 'No results found'}
              </p>
            )}
          </div>

          <div style={{ marginTop: '4rem' }}>
            <p style={{ color: 'var(--color-muted)', marginBottom: '1rem' }}>{t.cta.text}</p>
            <Button asLink to="/contact">{t.cta.button}</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
