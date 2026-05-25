import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, TrendingDown, ArrowRight, Zap, Target } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { PageMeta } from '../components/PageMeta';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  fr: {
    meta: { title: "Calculateur de ROI | MAINTevo GMAO", description: "Simulez vos économies de maintenance avec la solution MAINTevo." },
    hero: {
      title: "Combien peut ",
      titleAccent: "MAINTevo",
      titlePost: " vous faire économiser ?",
      desc: "La maintenance ne doit pas être une dépense obscure. Utilisez notre simulateur ci-dessous pour estimer votre retour sur investissement."
    },
    form: {
      title: "Vos données actuelles",
      techs: { label: "Techniciens de maintenance", unit: "techs" },
      rate: { label: "Taux horaire moyen (chargé)", unit: "MAD/h" },
      downtime: { label: "Temps d'arrêt de production (par semaine)", unit: "h/semaine" },
      cost: { label: "Coût d'une heure d'arrêt", unit: "MAD/h" }
    },
    results: {
      title: "Économies annuelles estimées",
      currency: "MAD",
      productivity: "Productivité (+15 %)",
      downtime: "Arrêts (-20 %)",
      cta: "Atteindre cet objectif"
    }
  },
  ar: {
    meta: { title: "حاسبة العائد على الاستثمار | MAINTevo", description: "قم بمحاكاة توفير الصيانة مع حل MAINTevo." },
    hero: {
      title: "كم يمكن لـ ",
      titleAccent: "MAINTevo",
      titlePost: " أن يوفر لك ؟",
      desc: "لا يجب أن تكون الصيانة نفقة غامضة. استخدم المحاكي أدناه لتقدير العائد على الاستثمار الخاص بك."
    },
    form: {
      title: "بياناتكم الحالية",
      techs: { label: "فنيو الصيانة", unit: "فني" },
      rate: { label: "متوسط معدل الساعة (شامل التكاليف)", unit: "درهم/ساعة" },
      downtime: { label: "ساعات توقف الإنتاج (في الأسبوع)", unit: "ساعة/أسبوع" },
      cost: { label: "تكلفة ساعة التوقف الواحد", unit: "درهم/ساعة" }
    },
    results: {
      title: "التوفير السنوي المتوقع",
      currency: "درهم",
      productivity: "الإنتاجية (15%+)",
      downtime: "وقت التوقف (20%- )",
      cta: "حقق هذا الهدف"
    }
  },
  en: {
    meta: { title: "ROI Calculator | MAINTevo CMMS", description: "Simulate your maintenance savings with the MAINTevo solution." },
    hero: {
      title: "How much can ",
      titleAccent: "MAINTevo",
      titlePost: " save you?",
      desc: "Maintenance shouldn't be an obscure expense. Use our simulator below to estimate your Return on Investment."
    },
    form: {
      title: "Your current data",
      techs: { label: "Maintenance Technicians", unit: "techs" },
      rate: { label: "Average hourly rate (loaded)", unit: "MAD/h" },
      downtime: { label: "Production downtime (per week)", unit: "h/week" },
      cost: { label: "Cost of one downtime hour", unit: "MAD/h" }
    },
    results: {
      title: "Estimated annual savings",
      currency: "MAD",
      productivity: "Productivity (+15%)",
      downtime: "Downtime (-20%)",
      cta: "Reach this goal"
    }
  }
};

export default function ROICalculator() {
  const [techs, setTechs] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(350); // MAD rate
  const [downtimeHours, setDowntimeHours] = useState(20);
  const [downtimeCost, setDowntimeCost] = useState(50000); // MAD rate
  
  const { language } = useLanguage();
  const t = translations[language];

  // Assumptions for savings
  const EFFICIENCY_GAIN = 0.15; // 15% time saved
  const DOWNTIME_REDUCTION = 0.20; // 20% less downtime

  const totalLaborCost = techs * hourlyRate * 40 * 52;
  const laborSavings = totalLaborCost * EFFICIENCY_GAIN;

  const totalDowntimeCostRaw = downtimeHours * downtimeCost * 52;
  const downtimeSavings = totalDowntimeCostRaw * DOWNTIME_REDUCTION;

  const totalSavings = Math.round(laborSavings + downtimeSavings);

  return (
    <div style={{ paddingTop: '52px', minHeight: '100vh', background: 'var(--color-bg)' }}>
      <PageMeta 
        title={t.meta.title}
        description={t.meta.description}
      />
      
      <section className="section" style={{ background: 'radial-gradient(circle at top, rgba(18,121,223,0.1), var(--color-bg))' }}>
        <div className="container" style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '1rem' }}>
                {t.hero.title} <span style={{ color: 'var(--color-primary)' }}>{t.hero.titleAccent}</span> {t.hero.titlePost}
             </h1>
             <p style={{ color: 'var(--color-muted)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
                {t.hero.desc}
             </p>
          </div>

          <div className="roi-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 1fr) 1fr', gap: '3rem', maxWidth: '1000px', margin: '0 auto', alignItems: 'stretch' }}>
             <style>{`
               @media (max-width: 900px) {
                 .roi-grid { grid-template-columns: 1fr !important; }
               }
             `}</style>
             
             {/* Sliders Form */}
             <div className="glass-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: language === 'ar' ? 'right' : 'left' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text)', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>{t.form.title}</h3>
                
                <div>
                   <label style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text)', fontWeight: 500, marginBottom: '1rem', flexDirection: language === 'ar' ? 'row-reverse' : 'row' }}>
                     {t.form.techs.label}
                     <span style={{ color: 'var(--color-primary)' }}>{techs} {t.form.techs.unit}</span>
                   </label>
                   <input type="range" min="1" max="100" value={techs} onChange={(e) => setTechs(Number(e.target.value))} style={{ width: '100%', accentColor: 'var(--color-primary)' }} />
                </div>

                <div>
                   <label style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text)', fontWeight: 500, marginBottom: '1rem', flexDirection: language === 'ar' ? 'row-reverse' : 'row' }}>
                     {t.form.rate.label}
                     <span style={{ color: 'var(--color-primary)' }}>{hourlyRate} {t.form.rate.unit}</span>
                   </label>
                   <input type="range" min="50" max="1500" value={hourlyRate} onChange={(e) => setHourlyRate(Number(e.target.value))} style={{ width: '100%', accentColor: 'var(--color-primary)' }} />
                </div>

                <div>
                   <label style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text)', fontWeight: 500, marginBottom: '1rem', flexDirection: language === 'ar' ? 'row-reverse' : 'row' }}>
                     {t.form.downtime.label}
                     <span style={{ color: 'var(--color-primary)' }}>{downtimeHours} {t.form.downtime.unit}</span>
                   </label>
                   <input type="range" min="1" max="100" value={downtimeHours} onChange={(e) => setDowntimeHours(Number(e.target.value))} style={{ width: '100%', accentColor: 'var(--color-primary)' }} />
                </div>

                <div>
                   <label style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text)', fontWeight: 500, marginBottom: '1rem', flexDirection: language === 'ar' ? 'row-reverse' : 'row' }}>
                     {t.form.cost.label}
                     <span style={{ color: 'var(--color-primary)' }}>{downtimeCost.toLocaleString(language === 'ar' ? 'ar-MA' : 'fr-FR')} {t.form.cost.unit}</span>
                   </label>
                   <input type="range" min="1000" max="100000" step="1000" value={downtimeCost} onChange={(e) => setDowntimeCost(Number(e.target.value))} style={{ width: '100%', accentColor: 'var(--color-primary)' }} />
                </div>
             </div>

             {/* Results */}
             <div style={{ background: 'var(--color-primary)', borderRadius: '16px', padding: '3rem', color: '#FFF', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: language === 'ar' ? 'right' : 'left' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, opacity: 0.9, marginBottom: '0.5rem' }}>{t.results.title}</h3>
                <motion.div 
                   key={totalSavings}
                   initial={{ scale: 0.9, opacity: 0 }} 
                   animate={{ scale: 1, opacity: 1 }}
                   style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: '2rem', lineHeight: 1 }}
                >
                   {totalSavings.toLocaleString(language === 'ar' ? 'ar-MA' : 'fr-FR')} {t.results.currency}
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '2rem' }}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: language === 'ar' ? 'row-reverse' : 'row' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.9 }}>{language === 'ar' ? <Zap size={18} style={{ transform: 'scaleX(-1)' }}/> : <Zap size={18}/>} {t.results.productivity}</span>
                      <span style={{ fontWeight: 600 }}>{Math.round(laborSavings).toLocaleString(language === 'ar' ? 'ar-MA' : 'fr-FR')} {t.results.currency}</span>
                   </div>
                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: language === 'ar' ? 'row-reverse' : 'row' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.9 }}>{language === 'ar' ? <TrendingDown size={18} style={{ transform: 'scaleX(-1)' }}/> : <TrendingDown size={18}/>} {t.results.downtime}</span>
                      <span style={{ fontWeight: 600 }}>{Math.round(downtimeSavings).toLocaleString(language === 'ar' ? 'ar-MA' : 'fr-FR')} {t.results.currency}</span>
                   </div>
                </div>

                <Button asLink to="/demo" variant="white" style={{ marginTop: '3rem', width: '100%', color: 'var(--color-primary)' }}>
                   {t.results.cta} {language === 'ar' ? <Target style={{ marginRight: '0.5rem' }} size={18} /> : <Target style={{ marginLeft: '0.5rem' }} size={18} />}
                </Button>
             </div>

          </div>
        </div>
      </section>
    </div>
  );
}
