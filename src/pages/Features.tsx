import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { SectionHeader } from '../components/ui/SectionHeader';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CheckCircle2, Calendar, Package, BarChart2, Smartphone, Link as LinkIcon, Wrench, ShieldCheck, Zap } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { Badge } from '../components/ui/Badge';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  fr: {
    meta: { title: "Fonctionnalités | MAINTevo", description: "Toutes les fonctionnalités de notre GMAO" },
    hero: {
      title: "Une plateforme, ",
      titleAccent: "infinies.",
      titleLine2: "des possibilités ",
      desc: "Oubliez les logiciels complexes des années 2000. MAINTevo propose une suite complète d'outils de maintenance, dans une interface que votre équipe adorera vraiment utiliser.",
      cta: "Essayer gratuitement"
    },
    overview: [
      { title: "Bons de travail", desc: "Création, attribution et suivi en temps réel des BT, signatures électroniques incluses." },
      { title: "Préventif", desc: "Planifiez les interventions selon les compteurs ou le calendrier, fini les oublis." },
      { title: "Gestion des stocks", desc: "Suivi des pièces, alertes seuil minimum et inventaire flash mobile." },
      { title: "App mobile", desc: "Accès hors ligne, scan QR code et capture photo intégrée pour les techniciens terrain." },
      { title: "Rapports & KPI", desc: "Tableaux de bord visuels pour analyser votre TRS, MTBF et coûts réels." },
      { title: "Connecteurs API", desc: "Intégration facile avec les ERP (SAP, Dynamics…) et vos compteurs/capteurs IoT." }
    ],
    details: [
      {
        id: "bons-de-travail",
        title: "Simplifiez vos bons de travail",
        subtitle: "De la demande à la clôture",
        content: "Recevez les demandes d'opérateurs équipés de l'app ou du portail, approuvez en 1 clic. Le technicien reçoit une notification, consulte les plans liés, prend une photo de la panne, scanne la pièce changée et fait signer l'opérateur sur l'écran.",
        bullets: ["Portail demandeur sans login", "Routage automatique par spécialité", "Pièces jointes PDF (manuels techniques)"],
        widget: { title: "BT-4509 clôturé", desc: "Moteur convoyeur réparé (0h45)" }
      },
      {
        id: "preventive",
        title: "Anticipez 80 % de vos pannes",
        subtitle: "Planification préventive intelligente",
        content: "Ne laissez plus vos machines dicter votre planning. Mettez en place des tournées périodiques ou des interventions basées sur les relevés de compteurs saisis par les opérateurs ou récupérés automatiquement depuis les automates.",
        bullets: ["Modèles de gammes de maintenance", "Calendrier dynamique en glisser-déposer", "Prévision de charge des équipes"]
      },
      {
        id: "stocks",
        title: "Le bon coût, au bon moment",
        subtitle: "Gestion des stocks et des achats",
        content: "Stoppez les commandes d'urgence onéreuses. Maintenez un niveau de stock optimal, ne commandez qu'au besoin et suivez la valeur dormante de votre magasin de pièces.",
        bullets: ["Alertes stock minimum", "Génération automatique de bons de commande", "Scan code-barres des entrées/sorties"]
      }
    ],
    ctaStrip: {
      title: "Conçue pour l'industrie, ",
      titleLine2: "pensée pour vous.",
      desc: "Découvrez pourquoi les équipes qui passent à MAINTevo ne reviennent jamais en arrière. Démarrez les 14 jours d'essai, invitez votre équipe et constatez la différence.",
      btnPrimary: "Démarrer gratuitement",
      btnSecondary: "Planifier une démo"
    }
  },
  ar: {
    meta: { title: "الميزات | MAINTevo", description: "جميع ميزات GMAO الخاص بنا" },
    hero: {
      title: "منصة واحدة، ",
      titleAccent: "لا حدود لها.",
      titleLine2: "إمكانيات ",
      desc: "انس البرامج المعقدة من عام 2000. يوفر MAINTevo مجموعة كاملة من أدوات الصيانة، في واجهة سيحب فريقك استخدامها حقاً.",
      cta: "جرب مجاناً"
    },
    overview: [
      { title: "أوامر العمل", desc: "إنشاء وتعيين ومتابعة أوامر العمل في الوقت الفعلي، بما في ذلك التوقيعات الإلكترونية." },
      { title: "الصيانة الوقائية", desc: "تخطيط التدخلات وفقاً للعدادات أو التقويم، لا مزيد من النسيان." },
      { title: "إدارة المخزون", desc: "متابعة قطع الغيار، تنبيهات المستوى الأدنى وجرد سريع عبر الهاتف المحمول." },
      { title: "تطبيق الهاتف", desc: "وصول بدون إنترنت، مسح رموز QR، والتقاط صور مدمجة للفنيين الميدانيين." },
      { title: "التقارير و KPI", desc: "لوحات قيادة مرئية لتحليل TRS و MTBF وتكاليفك الفعلية." },
      { title: "موصلات API", desc: "تكامل سهل مع ERP (SAP، Dynamics...) وعداداتك/مستشعرات IoT." }
    ],
    details: [
      {
        id: "bons-de-travail",
        title: "بسط أوامر العمل الخاصة بك",
        subtitle: "من الطلب إلى الإغلاق",
        content: "استقبل الطلبات من المشغلين المجهزين بالتطبيق أو البوابة، واعتمدها بنقرة واحدة. يتلقى الفني إشعاراً، ويطلع على الخطط المرتبطة، ويلتقط صورة للعطل، ويمسح القطعة المستبدلة ويجعل المشغل يوقع على الشاشة.",
        bullets: ["بوابة طالب الخدمة بدون تسجيل دخول", "توجيه تلقائي حسب التخصص", "إضافة أدلة فنية PDF"],
        widget: { title: "إغلاق BT-4509", desc: "تم إصلاح محرك الناقل (0س45)" }
      },
      {
        id: "preventive",
        title: "توقع 80٪ من أعطالك",
        subtitle: "تخطيط وقائي ذكي",
        content: "لا تدع أجهزتك تملي عليك جدولك الزمني. قم بإعداد جولات دورية أو تدخلات بناءً على قراءات العدادات التي يدخلها المشغلون أو يتم استرجاعها تلقائياً.",
        bullets: ["نماذج نطاقات الصيانة", "تقويم ديناميكي (سحب وإفلات)", "توقعات عبء عمل الفريق"]
      },
      {
        id: "stocks",
        title: "التكلفة الصحيحة، في الوقت الصحيح",
        subtitle: "إدارة المخزون والمشتريات",
        content: "أوقف طلبات الطوارئ المكلفة. حافظ على مستوى مخزون مثالي، واطلب فقط عند الضرورة، وتتبع قيمة مخزون قطع الغيار الخاص بك.",
        bullets: ["تنبيهات الحد الأدنى للمخزون", "توليد تلقائي لأوامر الشراء", "مسح الباركود للقطع الواردة والخارجة"]
      }
    ],
    ctaStrip: {
      title: "بني للصناعة، ",
      titleLine2: "وصمم لك.",
      desc: "اكتشف لماذا لا تعود الفرق التي تنتقل إلى MAINTevo إلى الوراء أبداً. ابدأ التجربة لمدة 14 يوماً، وادع فريقك، وشاهد الفرق.",
      btnPrimary: "ابدأ مجاناً",
      btnSecondary: "خطط لعرض تجريبي"
    }
  },
  en: {
    meta: { title: "Features | MAINTevo", description: "All the features of our CMMS" },
    hero: {
      title: "One platform, ",
      titleAccent: "possibilities.",
      titleLine2: "endless ",
      desc: "Forget the complex software of the 2000s. MAINTevo offers a complete suite of maintenance tools, in an interface your team will actually love to use.",
      cta: "Try for Free"
    },
    overview: [
      { title: "Work Orders", desc: "Real-time creation, assignment and tracking of WOs, including electronic signatures." },
      { title: "Preventive", desc: "Schedule interventions based on meters or calendar, no more forgotten tasks." },
      { title: "Inventory Management", desc: "Spare parts tracking, minimum level alerts, and flash mobile inventory." },
      { title: "Mobile App", desc: "Offline access, QR code scanning, and integrated photo capture for field technicians." },
      { title: "Reports & KPIs", desc: "Visual dashboards to analyze your OEE, MTBF, and actual costs." },
      { title: "API Connectors", desc: "Easy integration with ERPs (SAP, Dynamics...) and your IoT meters/sensors." }
    ],
    details: [
      {
        id: "bons-de-travail",
        title: "Simplify your work orders",
        subtitle: "From request to closure",
        content: "Receive requests from operators equipped with the app or portal, approve in 1 click. The technician receives a notification, consults linked plans, takes a photo of the failure, scans the changed part, and has the operator sign on the screen.",
        bullets: ["Requester portal without login", "Automatic routing by specialty", "PDF technical manual attachments"],
        widget: { title: "WO-4509 Closed", desc: "Conveyor motor repaired (0h45)" }
      },
      {
        id: "preventive",
        title: "Anticipate 80% of your failures",
        subtitle: "Smart preventive planning",
        content: "Don't let your machines dictate your schedule. Set up periodic rounds or interventions based on meter readings entered by operators or automatically pulled from PLCs.",
        bullets: ["Maintenance range templates", "Dynamic drag-and-drop calendar", "Team workload forecasting"]
      },
      {
        id: "stocks",
        title: "The right cost, at the right time",
        subtitle: "Inventory and purchasing management",
        content: "Stop expensive emergency orders. Maintain an optimal inventory level, order only when necessary, and track the dormant value of your spare parts store.",
        bullets: ["Minimum stock alerts", "Automatic purchase order generation", "Barcode scanning of incoming/outgoing parts"]
      }
    ],
    ctaStrip: {
      title: "Built for industry, ",
      titleLine2: "designed for you.",
      desc: "Find out why teams that switch to MAINTevo never go back. Start the 14-day trial, invite your team, and see the difference.",
      btnPrimary: "Start for Free",
      btnSecondary: "Schedule a Demo"
    }
  }
};

export default function Features() {
  const scrollAnim = useScrollAnimation();
  const { language } = useLanguage();
  const t = translations[language];

  const icons = [<Wrench size={24}/>, <Calendar size={24}/>, <Package size={24}/>, <Smartphone size={24}/>, <BarChart2 size={24}/>, <LinkIcon size={24}/>];
  const detailImages = [
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <div style={{ background: 'var(--color-bg)', paddingTop: '52px' }}>
      <PageMeta title={t.meta.title} description={t.meta.description} />
      {/* HERO */}
      <section className="section" style={{
        padding: '10rem 0 6rem 0',
        textAlign: 'center',
        background: 'radial-gradient(ellipse at top, rgba(18, 121, 223, 0.15), var(--color-bg))',
      }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1.5rem', color: 'var(--color-text)', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              {t.hero.title} <br/>{t.hero.titleLine2} <span style={{ color: 'var(--color-primary)', textShadow: '0 0 20px rgba(18,121,223,0.3)' }}>{t.hero.titleAccent}</span>
            </h1>
            <p style={{ color: 'var(--color-muted)', fontSize: '1.25rem', maxWidth: '650px', margin: '0 auto 3rem auto', lineHeight: 1.6 }}>
              {t.hero.desc}
            </p>
            <Button asLink to="/demo" size="lg" className="cta-glow" style={{ fontSize: '1.125rem', padding: '1rem 2.5rem' }}>{t.hero.cta}</Button>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW GRID */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {t.overview.map((f, i) => (
              <motion.div key={i} {...scrollAnim} transition={{ delay: i * 0.1 }}>
                <Card className="glass-card" style={{ height: '100%', padding: '2rem' }}>
                  <div style={{ background: 'var(--color-primary-glow)', width: 48, height: 48, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
                    {icons[i]}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem' }}>{f.title}</h3>
                  <p style={{ color: 'var(--color-muted)', lineHeight: 1.6 }}>{f.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DEEP DIVE SECTIONS */}
      {t.details.map((section, idx) => (
        <section key={section.id} id={section.id} className="section" style={{ background: idx % 2 === 1 ? 'var(--color-surface-2)' : 'var(--color-bg)', borderTop: idx > 0 ? '1px solid var(--color-border)' : 'none' }}>
          <div className="container">
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem', flexDirection: idx % 2 === 1 ? 'row-reverse' : 'row' }}>
              <motion.div {...scrollAnim} style={{ flex: '1 1 min(100%, 400px)' }}>
                <Badge variant="outline" className="mb-4"><span style={{ color: 'var(--color-primary)' }}>{section.subtitle}</span></Badge>
                <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', color: 'var(--color-text)', marginBottom: '1.5rem', fontFamily: 'var(--font-display)', fontWeight: 700, lineHeight: 1.2 }}>{section.title}</h2>
                <p style={{ color: 'var(--color-muted)', fontSize: '1.125rem', marginBottom: '2rem', lineHeight: 1.6 }}>{section.content}</p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                  {section.bullets.map((bullet, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-text)', fontWeight: 500 }}>
                      <CheckCircle2 color="var(--color-primary)" size={18} /> {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div {...scrollAnim} transition={{ delay: 0.1 }} style={{ flex: '1 1 min(100%, 400px)', position: 'relative' }}>
                <div style={{ position: 'relative', borderRadius: '24px', overflow: 'visible' }}>
                  <img src={detailImages[idx]} alt={section.title} loading="lazy" width={800} height={400} style={{ width: '100%', borderRadius: '24px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', height: '400px', objectFit: 'cover', border: '1px solid var(--color-border)' }} />
                  {section.widget && (
                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} style={{ position: 'absolute', bottom: '-20px', left: '-20px', background: 'var(--color-surface)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--color-primary)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <CheckCircle2 color="var(--color-success)" size={32} />
                        <div>
                          <p style={{ fontWeight: 600, color: 'var(--color-text)' }}>{section.widget.title}</p>
                          <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)' }}>{section.widget.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA STRIP */}
      <section className="section" style={{ padding: '8rem 0', background: 'radial-gradient(circle at center, rgba(18,121,223,0.2), var(--color-surface))', color: 'var(--color-text)', textAlign: 'center', position: 'relative' }}>
         <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, var(--color-primary), transparent)' }} />
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '1.5rem', color: 'var(--color-text)', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            {t.ctaStrip.title} <br/>{t.ctaStrip.titleLine2}
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-muted)', marginBottom: '3rem', lineHeight: 1.6 }}>
            {t.ctaStrip.desc}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
             <Button asLink to="/demo" size="lg" className="cta-glow" style={{ fontSize: '1.125rem', padding: '1rem 2.5rem' }}>
               {t.ctaStrip.btnPrimary}
             </Button>
             <Button asLink to="/contact" size="lg" variant="secondary" style={{ fontSize: '1.125rem', padding: '1rem 2.5rem' }}>
               {t.ctaStrip.btnSecondary}
             </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
