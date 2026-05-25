import React from 'react';
import { motion } from 'motion/react';
import { Factory, Zap, TrendingUp, ShieldCheck, Wrench, FileText, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SectionHeader } from '../components/ui/SectionHeader';
import { PageMeta } from '../components/PageMeta';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  fr: {
    meta: {
      title: "Solutions GMAO par secteur | MAINTevo",
      description: "Découvrez comment notre GMAO est configurée pour répondre aux exigences uniques de l'industrie, de l'énergie, de la santé et de l'agroalimentaire."
    },
    hero: {
      badge: "Solutions sectorielles",
      title: "Adaptée à ",
      titleAccent: "votre réalité.",
      desc: "Parce que maintenir une éolienne n'a rien à voir avec maintenir une salle blanche. Choisissez votre secteur pour découvrir nos solutions expertes."
    },
    cta: "Explorer la solution",
    industries: [
      { id: 'fabrication', name: 'Industrie & Fabrication', desc: "Optimisez le TRS et réduisez les arrêts de ligne non planifiés." },
      { id: 'energie', name: 'Énergie & Utilities', desc: "Pilotez la maintenance préventive des infrastructures critiques." },
      { id: 'automobile', name: 'Automobile', desc: "Fiabilisez la production juste-à-temps avec une GMAO moderne." },
      { id: 'sante', name: 'Santé & Pharma', desc: "Garantissez une conformité stricte et la traçabilité des actifs." },
      { id: 'agroalimentaire', name: 'Agroalimentaire', desc: "Respectez les normes d'hygiène et pilotez le froid industriel." },
      { id: 'immobilier', name: 'Immobilier & Facilities', desc: "Centralisez les demandes d'intervention des locataires." },
      { id: 'transport', name: 'Transport & Logistique', desc: "Maintenez votre flotte et vos centres de tri en marche 24/7." },
      { id: 'mines', name: 'Mines & Extraction', desc: "Maîtrisez l'usure prématurée en environnements difficiles." }
    ]
  },
  ar: {
    meta: { 
      title: "حلول الصيانة حسب القطاع | MAINTevo",
      description: "اكتشف كيف تم تصميم نظام GMAO الخاص بنا لتلبية المتطلبات الفريدة للصناعة والطاقة والصحة والأغذية الزراعية."
    },
    hero: {
      badge: "حلول مهنية",
      title: "متكيف مع ",
      titleAccent: "واقعكم.",
      desc: "لأن صيانة توربينات الرياح لا تتعلق بصيانة المختبرات. اختر قطاعك لرؤية حلولنا المتخصصة."
    },
    cta: "اكتشف الحل",
    industries: [
      { id: 'fabrication', name: 'الصناعة والتصنيع', desc: "حسّن معدل المردودية (TRS) وقلل من فترات توقف الخطوط غير المخطط لها." },
      { id: 'energie', name: 'الطاقة والمرافق', desc: "إدارة الصيانة الوقائية للبنية التحتية الحيوية." },
      { id: 'automobile', name: 'صناعة السيارات', desc: "اجعل الإنتاج الموجه بالطلب أكثر موثوقية مع نظام GMAO حديث." },
      { id: 'sante', name: 'الصحة والأدوية', desc: "ضمان الامتثال الصارم وتتبع المعدات." },
      { id: 'agroalimentaire', name: 'الصناعات الغذائية', desc: "احترم معايير النظافة وقم بإدارة التبريد الصناعي." },
      { id: 'immobilier', name: 'العقارات والمرافق', desc: "قم بتركيز طلبات التدخل الخاصة بالمستأجرين." },
      { id: 'transport', name: 'النقل والخدمات اللوجستية', desc: "حافظ على أسطولك ومراكز الفرز الخاصة بك في جميع الأوقات." },
      { id: 'mines', name: 'المناجم والاستخراج', desc: "إدارة التآكل المبكر في البيئات القاسية." }
    ]
  },
  en: {
    meta: { 
      title: "CMMS Solutions by Industry | MAINTevo",
      description: "Discover how our CMMS is configured to meet the unique requirements of manufacturing, energy, healthcare, and food processing."
    },
    hero: {
      badge: "Industry Solutions",
      title: "Adapted to ",
      titleAccent: "your reality.",
      desc: "Because maintaining a wind turbine is nothing like maintaining a clean room. Choose your sector to see our expert solutions."
    },
    cta: "Explore solution",
    industries: [
      { id: 'fabrication', name: 'Industry & Manufacturing', desc: "Optimize OEE and reduce unplanned line downtime." },
      { id: 'energie', name: 'Energy & Utilities', desc: "Manage preventive maintenance of critical infrastructure." },
      { id: 'automobile', name: 'Automotive', desc: "Reliable Just-in-Time production with a modern CMMS." },
      { id: 'sante', name: 'Health & Pharma', desc: "Ensure strict compliance and asset traceability." },
      { id: 'agroalimentaire', name: 'Food & Beverage', desc: "Respect hygiene standards and manage industrial refrigeration." },
      { id: 'immobilier', name: 'Real Estate & Facilities', desc: "Centralize rental intervention requests." },
      { id: 'transport', name: 'Transport & Logistics', desc: "Keep your fleet and sorting centers running 24/7." },
      { id: 'mines', name: 'Mining & Extraction', desc: "Manage premature wear in harsh environments." }
    ]
  }
};

const industryIcons: Record<string, React.ReactNode> = {
  fabrication: <Factory size={24}/>,
  energie: <Zap size={24}/>,
  automobile: <TrendingUp size={24}/>,
  sante: <ShieldCheck size={24}/>,
  agroalimentaire: <Factory size={24}/>,
  immobilier: <Wrench size={24}/>,
  transport: <FileText size={24}/>,
  mines: <Factory size={24}/>
};

export default function Industries() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div style={{ paddingTop: '52px' }}>
      <PageMeta 
        title={t.meta.title}
        description={t.meta.description}
      />
      
      {/* Hero */}
      <section className="section" style={{ background: 'radial-gradient(ellipse at top, rgba(18,121,223,0.15), var(--color-bg))' }}>
        <div className="container" style={{ textAlign: 'center', direction: language === 'ar' ? 'rtl' : 'ltr' }}>
          <Badge variant="outline" className="mb-6"><span style={{ color: 'var(--color-primary)' }}>{t.hero.badge}</span></Badge>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--color-text)' }}>
             {t.hero.title} <span style={{ color: 'var(--color-primary)' }}>{t.hero.titleAccent}</span>
          </h1>
          <p style={{ color: 'var(--color-muted)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>
            {t.hero.desc}
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {t.industries.map((ind, i) => (
                <motion.div 
                  key={ind.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass-card"
                  style={{ display: 'flex', flexDirection: 'column', height: '100%', textAlign: language === 'ar' ? 'right' : 'left' }}
                >
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    borderRadius: '12px', 
                    background: 'var(--color-primary-glow)', 
                    color: 'var(--color-primary)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    marginBottom: '1.5rem',
                    alignSelf: language === 'ar' ? 'flex-end' : 'flex-start'
                  }}>
                     {industryIcons[ind.id]}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.75rem' }}>{ind.name}</h3>
                  <p style={{ color: 'var(--color-muted)', marginBottom: '2rem', flex: 1 }}>{ind.desc}</p>
                  <Button asLink to={`/industries/${ind.id}`} variant="outline" style={{ width: '100%', justifyContent: 'center' }}>
                    {t.cta} {language === 'ar' ? <ArrowRight size={16} style={{ marginRight: '0.5rem', transform: 'rotate(180deg)' }}/> : <ArrowRight size={16} style={{ marginLeft: '0.5rem' }}/>}
                  </Button>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

    </div>
  );
}

// Inline Badge component for consistency without importing App ones that might be nested
function Badge({ children, variant='outline', className='' }:any) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${className}`} style={{
      border: '1px solid var(--color-primary)',
      background: 'var(--color-primary-glow)',
      color: 'var(--color-text)'
    }}>
      {children}
    </span>
  );
}
