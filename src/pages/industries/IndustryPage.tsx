import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { PageMeta } from '../../components/PageMeta';
import { useLanguage } from '../../context/LanguageContext';
import { industryContent, industryLabels, type IndustryId, type Lang } from '../../i18n/industries';

interface IndustryPageProps {
  id: IndustryId;
  heroImg: string;
}

export default function IndustryPage({ id, heroImg }: IndustryPageProps) {
  const { language } = useLanguage();
  const lang = language as Lang;
  const c = industryContent[id][lang];
  const l = industryLabels[lang];

  return (
    <div style={{ paddingTop: '52px' }}>
      <PageMeta
        title={l.metaTitle(c.name)}
        description={l.metaDesc(c.name, c.subtitle)}
      />

      {/* Hero */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '80vh', background: 'var(--color-bg)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '4rem', zIndex: 10, textAlign: lang === 'ar' ? 'right' : 'left' }}>
          <Badge variant="outline" className="mb-6"><span style={{ color: 'var(--color-primary)' }}>{l.sector}</span> {c.name}</Badge>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--color-text)', lineHeight: 1.1 }}>
            {l.h1Prefix} <span style={{ color: 'var(--color-primary)' }}>{c.name}</span>.
          </h1>
          <p style={{ color: 'var(--color-muted)', fontSize: '1.25rem', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            {c.subtitle}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: lang === 'ar' ? 'flex-end' : 'flex-start' }}>
            <Button asLink to="/demo" size="lg">
              {l.demo}
              {lang === 'ar'
                ? <ArrowRight size={20} style={{ marginRight: '0.5rem', transform: 'rotate(180deg)' }} />
                : <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />}
            </Button>
          </div>
        </div>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <img src={heroImg} alt={c.name} loading="lazy" width={800} height={600} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: lang === 'ar' ? 'linear-gradient(-90deg, var(--color-bg) 0%, transparent 50%)' : 'linear-gradient(90deg, var(--color-bg) 0%, transparent 50%)' }} />
        </div>
      </section>

      {/* Benefits */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container industry-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 1fr) 1fr', gap: '4rem', alignItems: 'center', direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
          <style>{`
            @media (max-width: 900px) {
              .industry-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
          <div style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '1.5rem' }}>{l.challenges}</h2>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {c.benefits.map((b, i) => (
                <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', color: 'var(--color-text)' }}>
                  <CheckCircle2 color="var(--color-primary)" size={24} style={{ flexShrink: 0, marginTop: '4px' }} />
                  <span style={{ fontSize: '1.125rem', lineHeight: 1.6 }}>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: 'var(--color-surface-2)', padding: '3rem', borderRadius: '16px', border: '1px solid var(--color-border)', textAlign: lang === 'ar' ? 'right' : 'left' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text)', marginBottom: '1.5rem', fontWeight: 600 }}>{l.testimonial}</h3>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text)', fontStyle: 'italic', marginBottom: '2rem', lineHeight: 1.6 }}>"{c.testimonial.quote}"</p>
            <div>
              <p style={{ color: 'var(--color-text)', fontWeight: 600 }}>{c.testimonial.author}</p>
              <p style={{ color: 'var(--color-muted)', fontSize: '0.875rem' }}>{c.testimonial.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Row */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2rem', fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '3rem' }}>{l.keyFeatures} {c.name}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
            {c.featuresRow.map((f, i) => (
              <div key={i} className="glass-card" style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '1rem' }}>{f.title}</h3>
                <p style={{ color: 'var(--color-muted)' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--color-surface)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '1.5rem' }}>{l.ready}</h2>
          <Button asLink to="/demo" size="lg">{l.discover}</Button>
        </div>
      </section>
    </div>
  );
}
