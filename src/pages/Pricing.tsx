import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CheckIcon = ({ color = '#22c55e' }: { color?: string }) => (
  <svg style={{width:'18px',height:'18px',color,flexShrink:0}} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const ChevronIcon = () => (
  <svg className="faq-icon w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

export default function Pricing() {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const toggleFaq = (i: number) => setOpenFaq(prev => prev === i ? null : i);

  const faqs = [
    { qKey: 'pricing.faq.q1', aKey: 'pricing.faq.a1', defaultOpen: true },
    { qKey: 'pricing.faq.q2', aKey: 'pricing.faq.a2', defaultOpen: false },
    { qKey: 'pricing.faq.q3', aKey: 'pricing.faq.a3', defaultOpen: false },
  ];

  return (
    <>
      {/* Hero */}
      <section style={{background:'#050b16',paddingTop:'112px',paddingBottom:'32px'}}>
        <div className="max-w-screen-xl px-6 mx-auto text-center">
          <h1 style={{fontSize:'clamp(2rem,4vw,3rem)',fontWeight:900,letterSpacing:'-.03em',color:'#fff',marginBottom:'14px'}}>{t('pricing.hero.title')}</h1>
          <p style={{color:'#94a3b8',fontSize:'1.05rem'}}>{t('pricing.hero.desc')}</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section style={{background:'#050b16',paddingBottom:'64px'}}>
        <div className="max-w-screen-xl px-6 mx-auto">
          <div className="space-y-6 lg:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0">

            {/* Starter */}
            <div className="price-card">
              <h3 style={{fontSize:'1.4rem',fontWeight:700,color:'#fff',marginBottom:'10px'}}>{t('pricing.starter.title')}</h3>
              <p style={{color:'#94a3b8',marginBottom:'24px'}}>{t('pricing.starter.desc')}</p>
              <div style={{display:'flex',alignItems:'baseline',marginBottom:'28px'}}>
                <span style={{fontSize:'3rem',fontWeight:900,color:'#fff',marginRight:'6px'}}>{t('pricing.starter.price')}</span>
                <span style={{color:'#64748b'}}>{t('pricing.starter.per')}</span>
              </div>
              <ul style={{display:'flex',flexDirection:'column',gap:'12px',marginBottom:'28px',listStyle:'none',padding:0}}>
                <li style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'.9rem',color:'#94a3b8'}}><CheckIcon />{t('pricing.starter.f1')} <strong style={{color:'#fff'}}>{t('pricing.starter.f1_val')}</strong></li>
                <li style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'.9rem',color:'#94a3b8'}}><CheckIcon />{t('pricing.starter.f1')} <strong style={{color:'#fff'}}>{t('pricing.starter.f2_val')}</strong></li>
                <li style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'.9rem',color:'#94a3b8'}}><CheckIcon />{t('pricing.starter.f3')}</li>
                <li style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'.9rem',color:'#94a3b8'}}><CheckIcon />{t('pricing.starter.f4')}</li>
                <li style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'.9rem',color:'#94a3b8'}}><CheckIcon />{t('pricing.starter.f5')}</li>
              </ul>
              <Link to="/contact" className="btn-p" style={{width:'100%',justifyContent:'center',padding:'12px'}}>{t('pricing.starter.cta')}</Link>
            </div>

            {/* Professional */}
            <div className="price-card featured">
              <div style={{display:'inline-flex',alignItems:'center',gap:'6px',background:'rgba(59,130,246,.2)',border:'1px solid rgba(59,130,246,.35)',borderRadius:'100px',padding:'4px 12px',fontSize:'12px',fontWeight:600,color:'#60a5fa',marginBottom:'14px'}}>{t('pricing.professional.badge')}</div>
              <h3 style={{fontSize:'1.4rem',fontWeight:700,color:'#fff',marginBottom:'10px'}}>{t('pricing.professional.title')}</h3>
              <p style={{color:'#94a3b8',marginBottom:'24px'}}>{t('pricing.professional.desc')}</p>
              <div style={{display:'flex',alignItems:'baseline',marginBottom:'28px'}}>
                <span style={{fontSize:'3rem',fontWeight:900,color:'#fff',marginRight:'6px'}}>{t('pricing.professional.price')}</span>
                <span style={{color:'#64748b'}}>{t('pricing.professional.per')}</span>
              </div>
              <ul style={{display:'flex',flexDirection:'column',gap:'12px',marginBottom:'28px',listStyle:'none',padding:0}}>
                <li style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'.9rem',color:'#94a3b8'}}><CheckIcon color="#60a5fa" />{t('pricing.starter.f1')} <strong style={{color:'#fff'}}>{t('pricing.professional.f1_val')}</strong></li>
                <li style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'.9rem',color:'#94a3b8'}}><CheckIcon color="#60a5fa" />{t('pricing.starter.f1')} <strong style={{color:'#fff'}}>{t('pricing.professional.f2_val')}</strong></li>
                <li style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'.9rem',color:'#94a3b8'}}><CheckIcon color="#60a5fa" />{t('pricing.professional.f3')}</li>
                <li style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'.9rem',color:'#94a3b8'}}><CheckIcon color="#60a5fa" />{t('pricing.professional.f4')}</li>
                <li style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'.9rem',color:'#94a3b8'}}><CheckIcon color="#60a5fa" />{t('pricing.professional.f5')}</li>
              </ul>
              <Link to="/contact" className="btn-p" style={{width:'100%',justifyContent:'center',padding:'12px'}}>{t('pricing.professional.cta')}</Link>
            </div>

            {/* Enterprise */}
            <div className="price-card">
              <h3 style={{fontSize:'1.4rem',fontWeight:700,color:'#fff',marginBottom:'10px'}}>{t('pricing.enterprise.title')}</h3>
              <p style={{color:'#94a3b8',marginBottom:'24px'}}>{t('pricing.enterprise.desc')}</p>
              <div style={{display:'flex',alignItems:'baseline',marginBottom:'28px'}}>
                <span style={{fontSize:'3rem',fontWeight:900,color:'#fff',marginRight:'6px'}}>{t('pricing.enterprise.price')}</span>
                <span style={{color:'#64748b'}}>{t('pricing.enterprise.per')}</span>
              </div>
              <ul style={{display:'flex',flexDirection:'column',gap:'12px',marginBottom:'28px',listStyle:'none',padding:0}}>
                <li style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'.9rem',color:'#94a3b8'}}><CheckIcon /><strong style={{color:'#fff'}}>{t('pricing.enterprise.f1')}</strong> {t('pricing.enterprise.f1_label')}</li>
                <li style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'.9rem',color:'#94a3b8'}}><CheckIcon /><strong style={{color:'#fff'}}>{t('pricing.enterprise.f1')}</strong> {t('pricing.enterprise.f2_label')}</li>
                <li style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'.9rem',color:'#94a3b8'}}><CheckIcon />{t('pricing.enterprise.f3')}</li>
                <li style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'.9rem',color:'#94a3b8'}}><CheckIcon />{t('pricing.enterprise.f4')}</li>
                <li style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'.9rem',color:'#94a3b8'}}><CheckIcon />{t('pricing.enterprise.f5')}</li>
              </ul>
              <Link to="/contact" className="btn-p" style={{width:'100%',justifyContent:'center',padding:'12px'}}>{t('pricing.enterprise.cta')}</Link>
            </div>

          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section style={{background:'#080f1e',padding:'64px 0'}}>
        <div className="max-w-screen-xl px-6 mx-auto">
          <h2 style={{fontSize:'clamp(1.5rem,2.5vw,2rem)',fontWeight:900,textAlign:'center',color:'#fff',marginBottom:'32px',letterSpacing:'-.03em'}}>{t('pricing.compare.title')}</h2>
          <div className="table-scroll" style={{overflowX:'auto'}}>
            <table style={{width:'100%',borderCollapse:'collapse',fontSize:'.9rem',minWidth:'520px'}}>
              <thead>
                <tr style={{borderBottom:'1px solid rgba(255,255,255,.08)'}}>
                  <th style={{padding:'14px 16px',textAlign:'left',color:'#94a3b8',fontWeight:600,fontSize:'.8rem',textTransform:'uppercase',letterSpacing:'.06em'}}>{t('pricing.compare.col_feature')}</th>
                  <th style={{padding:'14px 16px',textAlign:'center',color:'#94a3b8',fontWeight:600,fontSize:'.8rem',textTransform:'uppercase',letterSpacing:'.06em'}}>{t('pricing.compare.col_starter')}</th>
                  <th style={{padding:'14px 16px',textAlign:'center',color:'#60a5fa',fontWeight:600,fontSize:'.8rem',textTransform:'uppercase',letterSpacing:'.06em'}}>{t('pricing.compare.col_pro')}</th>
                  <th style={{padding:'14px 16px',textAlign:'center',color:'#94a3b8',fontWeight:600,fontSize:'.8rem',textTransform:'uppercase',letterSpacing:'.06em'}}>{t('pricing.compare.col_ent')}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { featureKey:'pricing.compare.r_users',  starter:'3',   pro:'25',  ent:t('pricing.compare.unlimited'), altRow:false },
                  { featureKey:'pricing.compare.r_assets', starter:'50',  pro:'500', ent:t('pricing.compare.unlimited'), altRow:true },
                  { featureKey:'pricing.compare.r_wo',     starter:'✓',   pro:'✓',   ent:'✓', altRow:false },
                  { featureKey:'pricing.compare.r_pm',     starter:'—',   pro:'✓',   ent:'✓', altRow:true },
                  { featureKey:'pricing.compare.r_inv',    starter:'—',   pro:'✓',   ent:'✓', altRow:false },
                  { featureKey:'pricing.compare.r_int',    starter:'—',   pro:'—',   ent:'✓', altRow:true },
                  { featureKey:'pricing.compare.r_mgr',    starter:'—',   pro:'—',   ent:'✓', altRow:false },
                ].map(row => (
                  <tr key={row.featureKey} style={{borderBottom:'1px solid rgba(255,255,255,.05)',background:row.altRow ? 'rgba(255,255,255,.02)' : 'transparent'}}>
                    <td style={{padding:'14px 16px',fontWeight:500,color:'#fff'}}>{t(row.featureKey)}</td>
                    <td style={{padding:'14px 16px',textAlign:'center',color: row.starter === '✓' ? '#22c55e' : row.starter === '—' ? '#475569' : '#94a3b8'}}>{row.starter}</td>
                    <td style={{padding:'14px 16px',textAlign:'center',color: row.pro === '✓' ? '#22c55e' : row.pro === '—' ? '#475569' : '#60a5fa'}}>{row.pro}</td>
                    <td style={{padding:'14px 16px',textAlign:'center',color: row.ent === '✓' ? '#22c55e' : row.ent === '—' ? '#475569' : '#94a3b8'}}>{row.ent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{background:'#050b16',padding:'64px 0'}}>
        <div style={{maxWidth:'680px',margin:'0 auto',padding:'0 24px'}}>
          <h2 style={{fontSize:'clamp(1.5rem,2.5vw,2rem)',fontWeight:900,textAlign:'center',color:'#fff',marginBottom:'40px',letterSpacing:'-.03em'}}>{t('pricing.faq.title')}</h2>
          <div>
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <button className="faq-btn" onClick={() => toggleFaq(i)}>
                  <span>{t(faq.qKey)}</span>
                  <span style={{transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', transition:'transform .3s', flexShrink:0, display:'inline-block'}}>
                    <ChevronIcon />
                  </span>
                </button>
                {openFaq === i && (
                  <div className="faq-body open">{t(faq.aKey)}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{background:'#080f1e',padding:'48px 0',borderTop:'1px solid rgba(255,255,255,.06)'}}>
        <div className="max-w-screen-xl px-6 mx-auto text-center">
          <p style={{color:'#94a3b8',fontSize:'1.05rem'}}>{t('pricing.bottom.text')} <Link to="/contact" style={{color:'#60a5fa',fontWeight:500,textDecoration:'none'}} className="hover:underline">{t('pricing.bottom.link')}</Link></p>
        </div>
      </section>
    </>
  );
}
