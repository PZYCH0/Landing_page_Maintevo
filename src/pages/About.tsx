import React from 'react';
import { motion } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { PageMeta } from '../components/PageMeta';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  fr: {
    meta: { title: "À propos | MAINTevo", description: "L'histoire et la mission derrière MAINTevo." },
    hero: {
      title: "Redonner le pouvoir ",
      titleLine2: "aux ",
      titleAccent: "équipes terrain.",
      desc: "Nous avons créé MAINTevo parce que nous en avions assez de voir d'excellents techniciens perdre des heures sur des logiciels dépassés ou des fichiers Excel à n'en plus finir."
    },
    story: {
      title: "Notre histoire",
      p1: "L'histoire de MAINTevo commence par un paradoxe. Notre fondateur, ancien professeur d'anglais devenu développeur par passion, a passé des années à observer les défis du terrain industriel marocain.",
      p2: "En visitant des usines à Casablanca et Tanger, il a fait un constat frappant : alors que le Maroc devenait un hub automobile mondial, les techniciens utilisaient encore des cahiers papier et des fichiers Excel pour maintenir des lignes de production high-tech.",
      p3: "MAINTevo a été conçu pour combler ce fossé.",
      p3Post: " En combinant une connaissance approfondie des processus de maintenance (AMDEC, préventif) avec une obsession de la simplicité, nous avons créé la première GMAO réellement adaptée au contexte local.",
      quote: "\"Un outil conçu par des gens du terrain, pour les gens du terrain.\""
    },
    values: {
      title: "Nos valeurs fondamentales",
      items: [
        { title: "Simplicité radicale", desc: "Si une fonctionnalité demande 3 heures de formation, c'est qu'elle est mal conçue. Nous visons l'immédiateté." },
        { title: "Mobile d'abord", desc: "La maintenance se fait au pied de la machine, pas derrière un bureau. L'expérience mobile doit être irréprochable." },
        { title: "Obsession client", desc: "Votre production ne s'arrête jamais, notre support non plus. Nous construisons avec vos retours." }
      ]
    }
  },
  ar: {
    meta: { title: "حولنا | MAINTevo", description: "القصة والمهمة وراء MAINTevo." },
    hero: {
      title: "إعادة القوة ",
      titleLine2: "إلى ",
      titleAccent: "الفرق الميدانية.",
      desc: "لقد بنينا MAINTevo لأننا تعبنا من رؤية فنيين ممتازين يضيعون ساعات على برامج قديمة أو ملفات إكسيل لا نهاية لها."
    },
    story: {
      title: "قصتنا",
      p1: "تبدأ قصة MAINTevo بمفارقة. مؤسسنا، الذي كان مدرس لغة إنجليزية وأصبح مطوراً بشغف، قضى سنوات في مراقبة تحديات الميدان الصناعي المغربي.",
      p2: "أثناء زيارته للمصانع في الدار البيضاء وطنجة، لاحظ شيئاً لافتاً: بينما كان المغرب يصبح مركزاً عالمياً لصناعة السيارات، كان الفنيون لا يزالون يستخدمون الدفاتر الورقية وملفات إكسيل لصيانة خطوط إنتاج عالية التكنولوجيا.",
      p3: "تم تصميم MAINTevo لسد هذه الفجوة.",
      p3Post: " من خلال الجمع بين المعرفة العميقة لعمليات الصيانة (AMDEC، الوقائية) والهاجس بالبساطة، أنشأنا أول نظام GMAO مكيف حقاً مع السياق المحلي.",
      quote: "\"أداة صممها أهل الميدان، من أجل أهل الميدان.\""
    },
    values: {
      title: "قيمنا الأساسية",
      items: [
        { title: "بساطة جذريّة", desc: "إذا كانت الميزة تتطلب 3 ساعات من التدريب، فهذا يعني أنها سيئة التصميم. نحن نهدف إلى الفورية." },
        { title: "الهاتف أولاً", desc: "تتم الصيانة عند قدم الماكينة، وليس خلف المكتب. يجب أن تكون تجربة الهاتف مثالية." },
        { title: "هوس العملاء", desc: "إنتاجكم لا يتوقف أبداً، ولا يتوقف دعمنا أيضاً. نحن نبني بناءً على ملاحظاتكم." }
      ]
    }
  },
  en: {
    meta: { title: "About | MAINTevo", description: "The story and mission behind MAINTevo." },
    hero: {
      title: "Giving power back ",
      titleLine2: "to ",
      titleAccent: "field teams.",
      desc: "We built MAINTevo because we were tired of seeing excellent technicians wasting hours on outdated software or endless Excel files."
    },
    story: {
      title: "Our Story",
      p1: "The MAINTevo story begins with a paradox. Our founder, once an English teacher turned developer by passion, spent years observing the challenges of the Moroccan industrial field.",
      p2: "While visiting factories in Casablanca and Tangier, he made a striking observation: as Morocco was becoming a global automotive hub, technicians were still using paper notebooks and Excel files to maintain high-tech production lines.",
      p3: "MAINTevo was designed to bridge this gap.",
      p3Post: " By combining deep knowledge of maintenance processes (FMEA, preventive) with an obsession for simplicity, we created the first CMMS truly adapted to the local context.",
      quote: "\"A tool designed by people from the field, for the people in the field.\""
    },
    values: {
      title: "Our Core Values",
      items: [
        { title: "Radical Simplicity", desc: "If a feature requires 3 hours of training, it's poorly designed. We aim for immediacy." },
        { title: "Mobile First", desc: "Maintenance happens at the machine, not behind a desk. The mobile experience must be irreproachable." },
        { title: "Customer Obsession", desc: "Your production never stops, and neither does our support. We build with your feedback." }
      ]
    }
  }
};

export default function About() {
  const scrollAnim = useScrollAnimation();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div style={{ background: 'var(--color-bg)', paddingTop: '52px' }}>
      <PageMeta title={t.meta.title} description={t.meta.description} />
      {/* HERO */}
      <section className="section" style={{
        padding: '8rem 0 6rem 0',
        textAlign: 'center',
        background: 'radial-gradient(ellipse at top, rgba(18, 121, 223, 0.15), var(--color-bg))',
      }}>
        <div className="container" style={{ maxWidth: '800px', direction: language === 'ar' ? 'rtl' : 'ltr' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '1.5rem', color: 'var(--color-text)', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              {t.hero.title} <br/>{t.hero.titleLine2} <span style={{ color: 'var(--color-primary)' }}>{t.hero.titleAccent}</span>
            </h1>
            <p style={{ color: 'var(--color-muted)', fontSize: '1.25rem', lineHeight: 1.6 }}>
              {t.hero.desc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* STORY */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            <motion.div {...scrollAnim}>
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-text)', fontFamily: 'var(--font-display)', fontWeight: 700 }}>
                {t.story.title}
              </h2>
              <div style={{ color: 'var(--color-muted)', fontSize: '1.125rem', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p>
                  {t.story.p1}
                </p>
                <p>
                  {t.story.p2}
                </p>
                <p>
                  <strong style={{ color: 'var(--color-text)' }}>{t.story.p3}</strong>{t.story.p3Post}
                </p>
              </div>
            </motion.div>
            
            <motion.div {...scrollAnim} transition={{ delay: 0.2 }} style={{ position: 'relative' }}>
               <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800" alt="Engineers working" loading="lazy" width={800} height={534} style={{ width: '100%', borderRadius: '24px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', border: '1px solid var(--color-border)' }} />
               <div style={{ 
                  position: 'absolute', 
                  bottom: '-2rem', 
                  [language === 'ar' ? 'right' : 'left']: '-2rem', 
                  background: 'var(--color-surface-2)', 
                  padding: '2rem', 
                  borderRadius: '16px', 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.5)', 
                  border: '1px solid var(--color-border)', 
                  maxWidth: '300px' 
               }}>
                 <p style={{ color: 'var(--color-text)', fontStyle: 'italic', fontWeight: 500, lineHeight: 1.5 }}>{t.story.quote}</p>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container" style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}>
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem', color: 'var(--color-text)', fontFamily: 'var(--font-display)', fontWeight: 700 }}>
            {t.values.title}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
            {t.values.items.map((v, i) => (
              <motion.div key={i} {...scrollAnim} transition={{ delay: i * 0.1 }} className="glass-card" style={{ padding: '2.5rem', textAlign: language === 'ar' ? 'right' : 'left' }}>
                <span style={{ fontSize: '3rem', color: 'var(--color-primary)', fontFamily: 'var(--font-display)', fontWeight: '800', opacity: 0.3, lineHeight: 1, display: 'block', marginBottom: '1rem' }}>
                  0{i + 1}.
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '1rem' }}>{v.title}</h3>
                <p style={{ color: 'var(--color-muted)', lineHeight: 1.6 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
