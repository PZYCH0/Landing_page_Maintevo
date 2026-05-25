import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { SectionHeader } from '../components/ui/SectionHeader';
import { CheckCircle2, ChevronDown, Check, Minus } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { PageMeta } from '../components/PageMeta';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  fr: {
    meta: { title: "Tarifs | MAINTevo", description: "Tarification transparente pour les équipes de toutes tailles" },
    hero: {
      title: "Simple, transparent. ",
      titleLine2: "Aucun frais caché.",
      desc: "Commencez par l'essentiel, évoluez quand vous êtes prêt. Tous les plans incluent 14 jours d'essai gratuit."
    },
    billing: {
      monthly: "Mensuel",
      annual: "Annuel",
      discount: "-20 %"
    },
    plans: [
      {
        name: "Starter",
        price: (isAnnual: boolean) => isAnnual ? "390" : "490",
        period: "MAD / mois / utilisateur",
        desc: "L'essentiel pour digitaliser vos bons de travail et éliminer le papier.",
        features: ["Bons de travail en temps réel", "Interface FR / AR (Darija)", "Application mobile hors ligne", "Scan QR Code des équipements", "Support local à Casablanca"],
        recommended: false,
        cta: "Démarrer l'essai gratuit",
        includedHeader: "Inclus :"
      },
      {
        name: "Premium",
        price: (isAnnual: boolean) => isAnnual ? "890" : "1090",
        period: "MAD / mois / utilisateur",
        desc: "Notre solution pour l'automobile. Préventif et audits ISO 9001 inclus.",
        features: ["Tout Starter inclus", "Plans de maintenance préventive", "Gestion complète du stock", "AMDEC natif", "Tableaux de bord (MTTR, MTBF)", "Formation sur site incluse"],
        recommended: true,
        recommendedLabel: "Le plus populaire",
        cta: "Démarrer l'essai gratuit",
        includedHeader: "Inclus :"
      },
      {
        name: "Enterprise",
        price: () => "Sur devis",
        period: "Multi-sites & Intégrations",
        desc: "Pour les usines exigeant des intégrations ERP et une traçabilité totale.",
        features: ["Tout Premium inclus", "Intégration ERP (SAP, Sage, etc.)", "Capteurs IoT prédictifs", "Piste d'audit inviolable", "Sauvegarde redondante en Europe", "SLA garanti 99,9 %"],
        recommended: false,
        cta: "Démarrer l'essai gratuit",
        includedHeader: "Inclus :"
      }
    ],
    comparison: {
      title: "Comparez en détail",
      subtitle: "Trouvez exactement ce qui convient à votre équipe.",
      headers: ["Starter", "Premium", "Enterprise"],
      rows: [
        { feature: "Nombre d'utilisateurs", starter: "Jusqu'à 15", premium: "Illimité", entreprise: "Illimité" },
        { feature: "Bons de travail & Chat", starter: true, premium: true, entreprise: true },
        { feature: "Application mobile (hors ligne)", starter: true, premium: true, entreprise: true },
        { feature: "Préventif & Audits", starter: false, premium: true, entreprise: true },
        { feature: "Stock & Pièces de rechange", starter: false, premium: true, entreprise: true },
        { feature: "API ouverte & Webhooks", starter: false, premium: "Option", entreprise: true },
        { feature: "Connecteurs IoT & ERP", starter: false, premium: false, entreprise: true },
        { feature: "SSO SAML", starter: false, premium: false, entreprise: true },
      ]
    },
    faqs: {
      title: "Questions fréquentes",
      items: [
        { q: "Qu'est-ce qui compte comme un utilisateur ?", a: "Un utilisateur est toute personne ayant besoin d'accéder à MAINTevo pour créer, consulter ou clôturer des bons de travail. Les demandeurs (opérateurs scannant un QR code pour signaler une panne) sont illimités et gratuits sur tous les plans." },
        { q: "Puis-je changer ou résilier mon plan ?", a: "Oui, vous pouvez ajuster le nombre de licences à tout moment. En plan mensuel, vous pouvez résilier sans frais supplémentaires. Les plans annuels sont engagés sur 12 mois." },
        { q: "Accompagnez-vous les clients pendant l'onboarding ?", a: "Absolument ! Le pack d'onboarding de base est inclus dans le plan Premium. Pour les déploiements Enterprise complexes, nous assignons un Customer Success Manager dédié qui se déplace sur site." }
      ]
    }
  },
  ar: {
    meta: { title: "الأسعار | MAINTevo", description: "أسعار شفافة لجميع أحجام الفرق" },
    hero: {
      title: "بسيطة، شفافة. ",
      titleLine2: "لا رسوم خفية.",
      desc: "ابدأ بالأساسيات، وتطور عندما تكون جاهزاً. جميع خططنا تشمل تجربة مجانية لمدة 14 يوماً."
    },
    billing: {
      monthly: "شهري",
      annual: "سنوي",
      discount: "20%-"
    },
    plans: [
      {
        name: "Starter (البداية)",
        price: (isAnnual: boolean) => isAnnual ? "390" : "490",
        period: "درهم / شهر / مستخدم",
        desc: "الأساسيات لرقمنة أوامر العمل الخاصة بك والتخلص من الورق.",
        features: ["أوامر عمل في الوقت الفعلي", "واجهة FR / AR (Darija)", "تطبيق جوال بدون إنترنت", "مسح رموز QR للآلات", "دعم محلي بالدار البيضاء"],
        recommended: false,
        cta: "ابدأ التجربة المجانية",
        includedHeader: "يشمل :"
      },
      {
        name: "Premium (المميز)",
        price: (isAnnual: boolean) => isAnnual ? "890" : "1090",
        period: "درهم / شهر / مستخدم",
        desc: "حلنا لقطاع السيارات. الصيانة الوقائية وعمليات التدقيق ISO 9001 مشمولة.",
        features: ["كل ما في باقة Starter", "خطط الصيانة الوقائية", "إدارة كاملة للمخزون", "نظام AMDEC / FMEA أصلي", "لوحات قيادة (MTTR، MTBF)", "يشمل التدريب في الموقع"],
        recommended: true,
        recommendedLabel: "الأكثر شعبية",
        cta: "ابدأ التجربة المجانية",
        includedHeader: "يشمل :"
      },
      {
        name: "Entreprise (المؤسسات)",
        price: () => "حسب الطلب",
        period: "مواقع متعددة وتكاملات",
        desc: "للمصانع التي تتطلب تكامل ERP وتتبعاً كاملاً.",
        features: ["كل ما في باقة Premium", "تكامل ERP (SAP، Sage، Sage 100...)", "مستشعرات IoT تنبؤية", "مسار تدقيق غير قابل للتلاعب", "نسخ احتياطي في أوروبا", "SLA مضمون 99.9٪"],
        recommended: false,
        cta: "ابدأ التجربة المجانية",
        includedHeader: "يشمل :"
      }
    ],
    comparison: {
      title: "قارن بالتفصيل",
      subtitle: "جد بالضبط ما يناسب فريقك.",
      headers: ["Starter", "Premium", "Entreprise"],
      rows: [
        { feature: "عدد المستخدمين", starter: "حتى 15", premium: "غير محدود", entreprise: "غير محدود" },
        { feature: "أوامر العمل والدردشة", starter: true, premium: true, entreprise: true },
        { feature: "تطبيق الهاتف (أوفلاين)", starter: true, premium: true, entreprise: true },
        { feature: "صيانة وقائية وجودات", starter: false, premium: true, entreprise: true },
        { feature: "إدارة المخزون والقطع", starter: false, premium: true, entreprise: true },
        { feature: "Open API & Webhooks", starter: false, premium: "إضافة", entreprise: true },
        { feature: "مستشعرات IoT وتكامل ERP", starter: false, premium: false, entreprise: true },
        { feature: "SAML SSO", starter: false, premium: false, entreprise: true },
      ]
    },
    faqs: {
      title: "الأسئلة المتكررة",
      items: [
        { q: "من الذي يعتبر مستخدماً ؟", a: "المستخدم هو أي شخص يحتاج إلى الوصول إلى MAINTevo لإنشاء أو قراءة أو إكمال أوامر العمل. طالبو الخدمة (المشغلون الذين يمسحون رمز QR للإبلاغ عن عطل) غير محدودين ومجانيين في جميع الباقات." },
        { q: "هل يمكنني تغيير أو إلغاء باقتي ؟", a: "نعم، يمكنك تعديل عدد التراخيص في أي وقت. إذا كنت على باقة شهرية، يمكنك الإلغاء بدون رسوم إضافية. الباقات السنوية ملزمة لمدة 12 شهراً." },
        { q: "هل ترافقون عملاءكم في عملية الإدماج (Onboarding) ؟", a: "بالتأكيد ! باقة الإدماج الأساسية مشمولة في الباقة المميزة (Premium). بالنسبة لعمليات النشر المعقدة (المؤسسات)، نقوم بتعيين مدير نجاح عملاء مخصص ينتقل إلى الموقع." }
      ]
    }
  },
  en: {
    meta: { title: "Pricing | MAINTevo", description: "Transparent pricing for teams of all sizes" },
    hero: {
      title: "Simple, transparent. ",
      titleLine2: "No hidden fees.",
      desc: "Start with the essentials, scale when you're ready. All plans include a 14-day free trial."
    },
    billing: {
      monthly: "Monthly",
      annual: "Annual",
      discount: "-20%"
    },
    plans: [
      {
        name: "Starter",
        price: (isAnnual: boolean) => isAnnual ? "390" : "490",
        period: "MAD / month / user",
        desc: "The essentials to digitize your work orders and eliminate paper.",
        features: ["Real-time work orders", "FR / AR (Darija) interface", "Offline mobile app", "Asset QR Code scanning", "Local Casablanca support"],
        recommended: false,
        cta: "Start Free Trial",
        includedHeader: "Includes:"
      },
      {
        name: "Premium",
        price: (isAnnual: boolean) => isAnnual ? "890" : "1090",
        period: "MAD / month / user",
        desc: "Our solution for automotive. Preventive and ISO 9001 audits included.",
        features: ["Everything in Starter", "Preventive maintenance plans", "Full inventory management", "Native FMEA", "Dashboards (MTTR, MTBF)", "On-site training included"],
        recommended: true,
        recommendedLabel: "Most Popular",
        cta: "Start Free Trial",
        includedHeader: "Includes:"
      },
      {
        name: "Enterprise",
        price: () => "Contact Us",
        period: "Multi-site & Integrations",
        desc: "For factories requiring ERP integrations and total traceability.",
        features: ["Everything in Premium", "ERP Integration (SAP, Sage, etc.)", "Predictive IoT sensors", "Inviolable audit trail", "Redundant Europe backup", "99.9% guaranteed SLA"],
        recommended: false,
        cta: "Start Free Trial",
        includedHeader: "Includes:"
      }
    ],
    comparison: {
      title: "Compare details",
      subtitle: "Find exactly what suits your team.",
      headers: ["Starter", "Premium", "Enterprise"],
      rows: [
        { feature: "Number of users", starter: "Up to 15", premium: "Unlimited", entreprise: "Unlimited" },
        { feature: "Work Orders & Chat", starter: true, premium: true, entreprise: true },
        { feature: "Mobile App (Offline)", starter: true, premium: true, entreprise: true },
        { feature: "Preventive & Audits", starter: false, premium: true, entreprise: true },
        { feature: "Inventory & Spare Parts", starter: false, premium: true, entreprise: true },
        { feature: "Open API & Webhooks", starter: false, premium: "Add-on", entreprise: true },
        { feature: "IoT & ERP Connectors", starter: false, premium: false, entreprise: true },
        { feature: "SAML SSO", starter: false, premium: false, entreprise: true },
      ]
    },
    faqs: {
      title: "Frequently Asked Questions",
      items: [
        { q: "What counts as a user?", a: "A user is anyone requiring access to MAINTevo to create, read, or complete work orders. Requesters (operators scanning a QR code to report a failure) are unlimited and free on all plans." },
        { q: "Can I change or cancel my plan?", a: "Yes, you can adjust the number of licenses at any time. If you're on a monthly plan, you can cancel without additional fees. Annual plans are for a 12-month commitment." },
        { q: "Do you support customers during onboarding?", a: "Absolutely! The basic onboarding pack is included in the Premium plan. For complex Enterprise deployments, we assign a dedicated Customer Success Manager who works on-site." }
      ]
    }
  }
};

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const scrollAnim = useScrollAnimation();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div style={{ background: 'var(--color-bg)', paddingTop: '52px' }}>
      <PageMeta title={t.meta.title} description={t.meta.description} />
      {/* HERO & PRICING CARDS */}
      <section className="section" style={{
        padding: '8rem 0 4rem 0',
        textAlign: 'center',
        background: 'radial-gradient(ellipse at top, rgba(18, 121, 223, 0.15), var(--color-bg))',
      }}>
        <div className="container" style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1.5rem', color: 'var(--color-text)', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              {t.hero.title} <br/>{t.hero.titleLine2}
            </h1>
            <p style={{ color: 'var(--color-muted)', fontSize: '1.25rem', maxWidth: '650px', margin: '0 auto 3rem auto', lineHeight: 1.6 }}>
              {t.hero.desc}
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', background: 'var(--color-surface)', padding: '0.5rem 1rem', borderRadius: '100px', marginBottom: '4rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.5)', border: '1px solid var(--color-border)' }}>
              <button 
                onClick={() => setIsAnnual(false)}
                style={{ padding: '0.5rem 1.5rem', borderRadius: '100px', fontWeight: 600, transition: 'all 0.2s', background: !isAnnual ? 'var(--color-text)' : 'transparent', color: !isAnnual ? 'var(--color-bg)' : 'var(--color-text)' }}
              >
                {t.billing.monthly}
              </button>
              <button 
                onClick={() => setIsAnnual(true)}
                style={{ padding: '0.5rem 1.5rem', borderRadius: '100px', fontWeight: 600, transition: 'all 0.2s', background: isAnnual ? 'var(--color-text)' : 'transparent', color: isAnnual ? 'var(--color-bg)' : 'var(--color-text)' }}
              >
                {t.billing.annual} <span style={{ color: isAnnual ? '#22C55E' : 'var(--color-primary)', fontSize: '0.875rem', marginLeft: '0.25rem' }}>{t.billing.discount}</span>
              </button>
            </div>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'stretch', maxWidth: '1200px', margin: '0 auto' }}>
            {t.plans.map((plan, i) => (
              <motion.div key={i} {...scrollAnim} transition={{ delay: i * 0.1 }} style={{ height: '100%' }}>
                <div className={`glass-card ${plan.recommended ? 'pricing-card-recommended' : ''}`} style={{ 
                  height: '100%', 
                  padding: '3rem 2rem', 
                  borderRadius: '24px', 
                  background: 'var(--color-surface-2)', 
                  border: plan.recommended ? '2px solid var(--color-primary)' : '1px solid var(--color-border)', 
                  boxShadow: plan.recommended ? '0 25px 50px -12px rgba(18,121,223,0.3)' : 'none',
                  display: 'flex', 
                  flexDirection: 'column', 
                  textAlign: language === 'ar' ? 'right' : 'left',
                  position: 'relative',
                  transform: plan.recommended ? 'scale(1.05)' : 'scale(1)',
                  zIndex: plan.recommended ? 10 : 1
                }}>
                  {plan.recommended && (
                    <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)' }}>
                      <span style={{ background: 'var(--color-primary)', color: '#FFFFFF', padding: '0.5rem 1rem', borderRadius: '100px', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.5)' }}>
                        {plan.recommendedLabel}
                      </span>
                    </div>
                  )}
                  <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', fontWeight: 700, color: 'var(--color-text)', fontFamily: 'var(--font-display)' }}>{plan.name}</h3>
                  <p style={{ color: 'var(--color-muted)', marginBottom: '1.5rem', minHeight: '48px', fontSize: '1rem', lineHeight: 1.5 }}>{plan.desc}</p>
                  
                  <div style={{ marginBottom: '2rem' }}>
                    <span style={{ fontSize: '3.5rem', fontWeight: '800', fontFamily: 'var(--font-display)', color: 'var(--color-text)', letterSpacing: '-0.02em' }}>
                      {plan.price(isAnnual)}
                    </span>
                    <span style={{ color: 'var(--color-muted)', fontWeight: 500, fontSize: '0.875rem', display: 'block', marginTop: '0.25rem' }}>{plan.period}</span>
                  </div>

                  <Button asLink to="/contact" variant={plan.recommended ? 'primary' : 'outline'} size="lg" style={{ width: '100%', marginBottom: '2.5rem', fontSize: '1.125rem', padding: '1rem', background: !plan.recommended ? 'transparent' : undefined }}>
                    {plan.cta}
                  </Button>

                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', flex: 1 }}>
                    <li style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text)', letterSpacing: '0.05em', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>{plan.includedHeader}</li>
                    {plan.features.map((f, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--color-text)', fontSize: '0.95rem' }}>
                        <CheckCircle2 size={20} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                        <span style={{ fontWeight: 500 }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <style>{`
            @media (max-width: 900px) {
              .pricing-card-recommended { transform: scale(1) !important; margin-bottom: 2rem !important; }
            }
          `}</style>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: '1000px', overflowX: 'auto', direction: language === 'ar' ? 'rtl' : 'ltr' }}>
          <SectionHeader centered title={t.comparison.title} subtitle={t.comparison.subtitle} />
          <table style={{ width: '100%', minWidth: '600px', marginTop: '3rem', borderCollapse: 'collapse', color: 'var(--color-text)' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                <th style={{ padding: '1.5rem', textAlign: language === 'ar' ? 'right' : 'left', width: '40%' }}></th>
                {t.comparison.headers.map(h => (
                  <th key={h} style={{ padding: '1.5rem', textAlign: 'center', color: h === 'Premium' ? 'var(--color-primary)' : 'var(--color-text)', fontSize: '1.25rem', fontWeight: 700 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.comparison.rows.map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '1.5rem', fontWeight: 500 }}>{row.feature}</td>
                  <td style={{ padding: '1.5rem', textAlign: 'center' }}>
                    {typeof row.starter === 'boolean' ? (row.starter ? <Check color="var(--color-primary)" style={{ margin: '0 auto' }}/> : <Minus color="var(--color-muted)" style={{ margin: '0 auto' }}/>) : <span style={{ color: 'var(--color-muted)' }}>{row.starter}</span>}
                  </td>
                  <td style={{ padding: '1.5rem', textAlign: 'center' }}>
                    {typeof row.premium === 'boolean' ? (row.premium ? <Check color="var(--color-primary)" style={{ margin: '0 auto' }}/> : <Minus color="var(--color-muted)" style={{ margin: '0 auto' }}/>) : <span style={{ color: 'var(--color-muted)' }}>{row.premium}</span>}
                  </td>
                  <td style={{ padding: '1.5rem', textAlign: 'center' }}>
                    {typeof row.entreprise === 'boolean' ? (row.entreprise ? <Check color="var(--color-primary)" style={{ margin: '0 auto' }}/> : <Minus color="var(--color-muted)" style={{ margin: '0 auto' }}/>) : <span style={{ color: 'var(--color-muted)' }}>{row.entreprise}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--color-bg)', borderTop: '1px solid var(--color-border)', paddingBottom: '6rem' }}>
        <div className="container" style={{ maxWidth: '800px', direction: language === 'ar' ? 'rtl' : 'ltr' }}>
          <SectionHeader centered title={t.faqs.title} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
            {t.faqs.items.map((faq, i) => (
              <FaqItem key={i} question={faq.q} answer={faq.a} language={language} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function FaqItem({ question, answer, language }: { question: string, answer: string, language: string, key?: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ border: '1px solid var(--color-border)', borderRadius: '16px', background: 'var(--color-surface)', overflow: 'hidden' }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{ width: '100%', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: language === 'ar' ? 'right' : 'left', color: 'var(--color-text)' }}
      >
        <span style={{ fontSize: '1.125rem', fontWeight: 600 }}>{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
           <ChevronDown color={isOpen ? "var(--color-primary)" : "var(--color-muted)"} size={24} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
