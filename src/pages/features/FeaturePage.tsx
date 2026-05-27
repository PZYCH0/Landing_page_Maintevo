import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { PageMeta } from '../../components/PageMeta';
import { useLanguage } from '../../context/LanguageContext';
import { featureContent, type FeatureId, type Lang } from '../../i18n/features';

interface FeaturePageProps {
  id: FeatureId;
  heroImg?: string;
}

export default function FeaturePage({ id, heroImg }: FeaturePageProps) {
  const { language } = useLanguage();
  const lang = language as Lang;
  const c = featureContent[id][lang];

  return (
    <div style={{ paddingTop: '52px', background: 'var(--color-bg)' }}>
      <PageMeta
        title={`${c.badge} | MAINTevo`}
        description={c.desc}
      />

      {/* Hero */}
      {heroImg ? (
        <section style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '80vh',
          background: 'var(--color-bg)',
        }} className="feature-hero-grid">
          <style>{`
            @media (max-width: 900px) {
              .feature-hero-grid { grid-template-columns: 1fr !important; }
              .feature-hero-img { display: none !important; }
            }
          `}</style>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '4rem',
            textAlign: lang === 'ar' ? 'right' : 'left',
          }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="outline" className="mb-6">
                <span style={{ color: 'var(--color-primary)' }}>{c.badge}</span>
              </Badge>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                marginBottom: '1.5rem',
                color: 'var(--color-text)',
                lineHeight: 1.1,
              }}>
                {c.title.split(' ').slice(0, -1).join(' ')}{' '}
                <span style={{ color: 'var(--color-primary)' }}>
                  {c.title.split(' ').slice(-1)}
                </span>
              </h1>
              <p style={{
                color: 'var(--color-muted)',
                fontSize: '1.2rem',
                marginBottom: '1rem',
                fontWeight: 600,
              }}>
                {c.subtitle}
              </p>
              <p style={{
                color: 'var(--color-muted)',
                fontSize: '1.05rem',
                marginBottom: '2.5rem',
                lineHeight: 1.7,
              }}>
                {c.desc}
              </p>
              <div style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                justifyContent: lang === 'ar' ? 'flex-end' : 'flex-start',
              }}>
                <Button asLink to="/demo" size="lg">
                  {c.cta}
                  {lang === 'ar'
                    ? <ArrowRight size={20} style={{ marginRight: '0.5rem', transform: 'rotate(180deg)' }} />
                    : <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />}
                </Button>
              </div>
            </motion.div>
          </div>
          <div className="feature-hero-img" style={{ position: 'relative', overflow: 'hidden' }}>
            <img
              src={heroImg}
              alt={c.title}
              loading="eager"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: lang === 'ar'
                ? 'linear-gradient(-90deg, var(--color-bg) 0%, transparent 50%)'
                : 'linear-gradient(90deg, var(--color-bg) 0%, transparent 50%)',
            }} />
          </div>
        </section>
      ) : (
        /* Centered hero for pages without a hero image */
        <section style={{
          padding: '8rem 0 5rem',
          textAlign: 'center',
          background: 'radial-gradient(ellipse at top, rgba(25,118,210,0.12), var(--color-bg))',
        }}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="outline" className="mb-6">
                <span style={{ color: 'var(--color-primary)' }}>{c.badge}</span>
              </Badge>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                marginBottom: '1.5rem',
                color: 'var(--color-text)',
                lineHeight: 1.1,
              }}>
                {c.title}
              </h1>
              <p style={{
                color: 'var(--color-muted)',
                fontSize: '1.25rem',
                maxWidth: '650px',
                margin: '0 auto 1.5rem',
                fontWeight: 600,
              }}>
                {c.subtitle}
              </p>
              <p style={{
                color: 'var(--color-muted)',
                fontSize: '1.05rem',
                maxWidth: '700px',
                margin: '0 auto 2.5rem',
                lineHeight: 1.7,
              }}>
                {c.desc}
              </p>
              <Button asLink to="/demo" size="lg">
                {c.cta}
                {lang === 'ar'
                  ? <ArrowRight size={20} style={{ marginRight: '0.5rem', transform: 'rotate(180deg)' }} />
                  : <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />}
              </Button>
            </motion.div>
          </div>
        </section>
      )}

      {/* Benefits Grid */}
      <section className="section" style={{
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
      }}>
        <div className="container">
          <h2 style={{
            textAlign: 'center',
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            color: 'var(--color-text)',
            marginBottom: '3rem',
          }}>
            {lang === 'ar' ? 'الميزات الرئيسية' : lang === 'fr' ? 'Fonctionnalités clés' : 'Key features'}
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            direction: lang === 'ar' ? 'rtl' : 'ltr',
          }}>
            {c.benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card"
                style={{
                  padding: '2rem',
                  borderRadius: 'var(--radius-md)',
                  textAlign: lang === 'ar' ? 'right' : 'left',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
                  <CheckCircle2
                    color="var(--color-primary)"
                    size={24}
                    style={{ flexShrink: 0, marginTop: '2px' }}
                  />
                  <div>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                      {b.title}
                    </h3>
                    <p style={{ color: 'var(--color-muted)', lineHeight: 1.6 }}>{b.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{
        background: 'radial-gradient(circle at center, rgba(25,118,210,0.15), var(--color-bg))',
        textAlign: 'center',
        position: 'relative',
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, var(--color-primary), transparent)' }} />
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            color: 'var(--color-text)',
            marginBottom: '1.5rem',
          }}>
            {lang === 'ar'
              ? 'هل أنت مستعد للبدء؟'
              : lang === 'fr'
              ? 'Prêt à vous lancer ?'
              : 'Ready to get started?'}
          </h2>
          <p style={{ color: 'var(--color-muted)', fontSize: '1.125rem', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            {lang === 'ar'
              ? 'ابدأ تجربتك المجانية لمدة 14 يوماً. لا بطاقة بنكية مطلوبة.'
              : lang === 'fr'
              ? '14 jours d\'essai gratuit. Sans carte bancaire. Annulable à tout moment.'
              : '14-day free trial. No credit card required. Cancel anytime.'}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button asLink to="/demo" size="lg">
              {c.cta}
              {lang === 'ar'
                ? <ArrowRight size={20} style={{ marginRight: '0.5rem', transform: 'rotate(180deg)' }} />
                : <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />}
            </Button>
            <Button asLink to="/contact" size="lg" variant="secondary">
              {lang === 'ar' ? 'تواصل معنا' : lang === 'fr' ? 'Nous contacter' : 'Contact us'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
