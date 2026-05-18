import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CheckCircle2, Factory } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  fr: {
    meta: { title: "Demander une démo | MAINTevo", description: "Voyez MAINTevo en action lors d'une démonstration en direct." },
    hero: {
      badge: "Démonstration gratuite",
      title: "Voyez MAINTevo en action",
      desc: "Pendant ce call de 30 minutes, nous couvrirons :",
      items: [
        "Création et attribution de bons de travail en temps réel.",
        "Configuration de vos plans de maintenance préventive.",
        "Gestion des stocks et alertes de seuils critiques.",
        "Session de questions/réponses adaptée à vos cas d'usage industriels."
      ]
    },
    pilotLabel: "Actuellement en phase pilote avec des early adopters au Maroc — Casablanca, Tanger, Kénitra.",
    widget: {
      title: "Choisir un créneau",
      desc: "Sélectionnez une date et une heure pour notre démo."
    }
  },
  ar: {
    meta: { title: "اطلب عرضاً توضيحياً | MAINTevo", description: "اكتشف MAINTevo مباشرة خلال عرض توضيحي." },
    hero: {
      badge: "عرض توضيحي مجاني",
      title: "اكتشف MAINTevo في الواقع",
      desc: "خلال هذه المكالمة التي مدتها 30 دقيقة، سنتطرق إلى:",
      items: [
        "إنشاء وتعيين أوامر العمل في الوقت الفعلي.",
        "تكوين خطط الصيانة الوقائية الخاصة بك.",
        "إدارة المخزون وتنبيهات مستويات المخزون الحرجة.",
        "جلسة أسئلة وأجوبة مصممة لحالات الاستخدام الصناعي الخاصة بك."
      ]
    },
    pilotLabel: "حالياً في مرحلة الاختبار مع مستخدمين أوائل في المغرب — الدار البيضاء، طنجة، القنيطرة.",
    widget: {
      title: "اختر موعداً",
      desc: "اختر التاريخ والوقت المناسبين لعرضنا."
    }
  },
  en: {
    meta: { title: "Request a Demo | MAINTevo", description: "See MAINTevo in action during a live demonstration." },
    hero: {
      badge: "Free Demonstration",
      title: "See MAINTevo in Action",
      desc: "During this 30-minute call, we will cover:",
      items: [
        "Real-time work order creation and assignment.",
        "Setting up your preventive maintenance plans.",
        "Inventory management and critical threshold alerts.",
        "Q&A session tailored to your industrial use cases."
      ]
    },
    pilotLabel: "Currently in pilot phase with early adopters across Morocco — Casablanca, Tangier, Kenitra.",
    widget: {
      title: "Schedule a Time",
      desc: "Select a date and time for our demo."
    }
  }
};

export default function Demo() {
  const scrollAnim = useScrollAnimation();
  const calendlyRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    // Load Calendly widget
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ background: 'var(--color-bg)', paddingTop: '52px' }}>
      <PageMeta title={t.meta.title} description={t.meta.description} />
      <section className="section" style={{ padding: '8rem 0', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'flex-start' }}>
            
            {/* Left */}
            <motion.div {...scrollAnim}>
              <Badge variant="outline" className="mb-4"><span style={{ color: 'var(--color-primary)' }}>{t.hero.badge}</span></Badge>
              <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '1.5rem', fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)', lineHeight: 1.1 }}>
                {t.hero.title}
              </h1>
              <p style={{ color: 'var(--color-muted)', fontSize: '1.125rem', marginBottom: '2rem', lineHeight: 1.6 }}>
                {t.hero.desc}
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
                {t.hero.items.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--color-text)' }}>
                    <CheckCircle2 color="var(--color-primary)" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '1.05rem', fontWeight: 500 }}>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '2rem', textAlign: language === 'ar' ? 'right' : 'left', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <Factory size={28} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <p style={{ fontSize: '0.95rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>{t.pilotLabel}</p>
              </div>
            </motion.div>

            {/* Right: Calendly Inline Widget */}
            <motion.div {...scrollAnim} transition={{ delay: 0.2 }}>
              <div className="glass-card" style={{ padding: 0, overflow: 'hidden', minHeight: '650px', background: 'var(--color-surface)' }}>
                 <div style={{ padding: '2rem 2rem 0 2rem', background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)', textAlign: language === 'ar' ? 'right' : 'left' }}>
                    <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem' }}>{t.widget.title}</h3>
                    <p style={{ color: 'var(--color-muted)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>{t.widget.desc}</p>
                 </div>
                 {/* Calendly injects iframe here */}
                 <div 
                   ref={calendlyRef}
                   className="calendly-inline-widget" 
                   data-url="https://calendly.com/your-demo-link?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=0f1422&text_color=f1f5f9&primary_color=1279df" 
                   style={{ minWidth: '320px', height: '600px', width: '100%' }}
                 ></div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
