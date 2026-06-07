import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next';

export default function KpiDashboard() {
  const { dark } = useTheme();
  const { t } = useTranslation();
  const [selected, setSelected] = useState<number>(0);
  const [userLocked, setUserLocked] = useState<boolean>(false);

  const categories = [
    {
      id: 'work-orders',
      labelKey: 'kpi.categories.cat1_label',
      color: '#3b82f6',
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
        </svg>
      ),
      descKey: 'kpi.categories.cat1_desc',
      kpis: [
        { labelKey: 'kpi.categories.cat1_kpi1_label', qKey: 'kpi.categories.cat1_kpi1_q', bodyKey: 'kpi.categories.cat1_kpi1_body' },
        { labelKey: 'kpi.categories.cat1_kpi2_label', qKey: 'kpi.categories.cat1_kpi2_q', bodyKey: 'kpi.categories.cat1_kpi2_body' },
        { labelKey: 'kpi.categories.cat1_kpi3_label', qKey: 'kpi.categories.cat1_kpi3_q', bodyKey: 'kpi.categories.cat1_kpi3_body' },
        { labelKey: 'kpi.categories.cat1_kpi4_label', qKey: 'kpi.categories.cat1_kpi4_q', bodyKey: 'kpi.categories.cat1_kpi4_body' },
        { labelKey: 'kpi.categories.cat1_kpi5_label', qKey: 'kpi.categories.cat1_kpi5_q', bodyKey: 'kpi.categories.cat1_kpi5_body' },
      ],
    },
    {
      id: 'equipment-health',
      labelKey: 'kpi.categories.cat2_label',
      color: '#8b5cf6',
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>
      ),
      descKey: 'kpi.categories.cat2_desc',
      kpis: [
        { labelKey: 'kpi.categories.cat2_kpi1_label', qKey: 'kpi.categories.cat2_kpi1_q', bodyKey: 'kpi.categories.cat2_kpi1_body' },
        { labelKey: 'kpi.categories.cat2_kpi2_label', qKey: 'kpi.categories.cat2_kpi2_q', bodyKey: 'kpi.categories.cat2_kpi2_body' },
        { labelKey: 'kpi.categories.cat2_kpi3_label', qKey: 'kpi.categories.cat2_kpi3_q', bodyKey: 'kpi.categories.cat2_kpi3_body' },
        { labelKey: 'kpi.categories.cat2_kpi4_label', qKey: 'kpi.categories.cat2_kpi4_q', bodyKey: 'kpi.categories.cat2_kpi4_body' },
        { labelKey: 'kpi.categories.cat2_kpi5_label', qKey: 'kpi.categories.cat2_kpi5_q', bodyKey: 'kpi.categories.cat2_kpi5_body' },
      ],
    },
    {
      id: 'maintenance-costs',
      labelKey: 'kpi.categories.cat3_label',
      color: '#f59e0b',
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
        </svg>
      ),
      descKey: 'kpi.categories.cat3_desc',
      kpis: [
        { labelKey: 'kpi.categories.cat3_kpi1_label', qKey: 'kpi.categories.cat3_kpi1_q', bodyKey: 'kpi.categories.cat3_kpi1_body' },
        { labelKey: 'kpi.categories.cat3_kpi2_label', qKey: 'kpi.categories.cat3_kpi2_q', bodyKey: 'kpi.categories.cat3_kpi2_body' },
        { labelKey: 'kpi.categories.cat3_kpi3_label', qKey: 'kpi.categories.cat3_kpi3_q', bodyKey: 'kpi.categories.cat3_kpi3_body' },
        { labelKey: 'kpi.categories.cat3_kpi4_label', qKey: 'kpi.categories.cat3_kpi4_q', bodyKey: 'kpi.categories.cat3_kpi4_body' },
        { labelKey: 'kpi.categories.cat3_kpi5_label', qKey: 'kpi.categories.cat3_kpi5_q', bodyKey: 'kpi.categories.cat3_kpi5_body' },
      ],
    },
    {
      id: 'parts-inventory',
      labelKey: 'kpi.categories.cat4_label',
      color: '#10b981',
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      descKey: 'kpi.categories.cat4_desc',
      kpis: [
        { labelKey: 'kpi.categories.cat4_kpi1_label', qKey: 'kpi.categories.cat4_kpi1_q', bodyKey: 'kpi.categories.cat4_kpi1_body' },
        { labelKey: 'kpi.categories.cat4_kpi2_label', qKey: 'kpi.categories.cat4_kpi2_q', bodyKey: 'kpi.categories.cat4_kpi2_body' },
        { labelKey: 'kpi.categories.cat4_kpi3_label', qKey: 'kpi.categories.cat4_kpi3_q', bodyKey: 'kpi.categories.cat4_kpi3_body' },
        { labelKey: 'kpi.categories.cat4_kpi4_label', qKey: 'kpi.categories.cat4_kpi4_q', bodyKey: 'kpi.categories.cat4_kpi4_body' },
        { labelKey: 'kpi.categories.cat4_kpi5_label', qKey: 'kpi.categories.cat4_kpi5_q', bodyKey: 'kpi.categories.cat4_kpi5_body' },
      ],
    },
  ];

  useEffect(() => {
    if (userLocked) return;
    const id = setInterval(() => {
      setSelected(prev => (prev + 1) % categories.length);
    }, 2000);
    return () => clearInterval(id);
  }, [userLocked]);

  const handleSelect = (i: number) => { setSelected(i); setUserLocked(true); };
  const activeCat = categories[selected];
  const sectionBg = dark ? '#080f1e' : '#ffffff';

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero-section" style={{height:'100vh',display:'flex',flexDirection:'column',background:'#020617',position:'relative',overflow:'hidden',paddingTop:'72px'}}>
        <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(59,130,246,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,.025) 1px,transparent 1px)',backgroundSize:'60px 60px',pointerEvents:'none'}} />
        <div style={{position:'absolute',bottom:'-80px',left:'-60px',width:'560px',height:'360px',background:'radial-gradient(ellipse,rgba(37,99,235,.22) 0%,transparent 65%)',filter:'blur(50px)',pointerEvents:'none'}} />
        <div style={{position:'absolute',bottom:'80px',right:'8%',width:'420px',height:'280px',background:'radial-gradient(ellipse,rgba(59,130,246,.1) 0%,transparent 65%)',filter:'blur(60px)',pointerEvents:'none'}} />
        <div style={{position:'absolute',top:'8%',right:'10%',width:'260px',height:'260px',background:'radial-gradient(circle,rgba(59,130,246,.07) 0%,transparent 65%)',filter:'blur(40px)',pointerEvents:'none'}} />
        <div style={{flex:1,display:'flex',alignItems:'center',position:'relative',zIndex:3}}>
          <div className="hero-content-row" style={{width:'100%',maxWidth:'1280px',margin:'0 auto',padding:'0 60px',display:'flex',alignItems:'center',position:'relative'}}>
            <div className="hero-left-block" style={{width:'38%',flexShrink:0,position:'relative',zIndex:2}}>
              <Link to="/" style={{display:'inline-flex',alignItems:'center',gap:'6px',fontSize:'13px',color:'#60a5fa',textDecoration:'none',marginBottom:'20px',fontWeight:500}}>
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                {t('common.back')}
              </Link>
              <div style={{fontSize:'12px',fontWeight:700,letterSpacing:'.1em',color:'#60a5fa',textTransform:'uppercase',marginBottom:'18px'}}>{t('kpi.hero.eyebrow')}</div>
              <h1 style={{fontSize:'clamp(2rem,3.6vw,3.2rem)',fontWeight:900,lineHeight:1.06,letterSpacing:'-0.03em',marginBottom:'14px',color:'#fff'}}>
                {t('kpi.hero.h1_1')}<br />{t('kpi.hero.h1_2')}<br />
                <span style={{background:'linear-gradient(135deg,#60a5fa,#818cf8)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>{t('kpi.hero.h1_accent')}</span>
              </h1>
              <p style={{fontSize:'.88rem',color:'#64748b',lineHeight:1.6,maxWidth:'380px',marginBottom:'18px'}}>{t('kpi.hero.desc')}</p>
              <div style={{display:'flex',gap:'12px',flexWrap:'wrap',marginBottom:'28px'}}>
                <Link to="/contact" className="btn-p" style={{padding:'11px 24px',fontSize:'13.5px'}}>{t('common.getStartedFree')}</Link>
                <Link to="/" className="btn-s" style={{padding:'11px 22px',fontSize:'13.5px'}}>{t('common.seeAllFeatures')}</Link>
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
                {([t('kpi.hero.bullet1'), t('kpi.hero.bullet2'), t('kpi.hero.bullet3')]).map(b => (
                  <div key={b} style={{display:'flex',alignItems:'center',gap:'8px',fontSize:'12px',color:'#94a3b8'}}>
                    <div style={{width:'18px',height:'18px',borderRadius:'5px',background:'rgba(59,130,246,.15)',border:'1px solid rgba(59,130,246,.25)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                      <svg width="10" height="10" fill="none" stroke="#60a5fa" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                    </div>
                    {b}
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-right-block" style={{position:'absolute',right:'-50px',top:'50%',transform:'translateY(-54%)',width:'74%',pointerEvents:'none',zIndex:1,WebkitMaskImage:'linear-gradient(to right,transparent 0%,rgba(0,0,0,.5) 14%,black 26%)',maskImage:'linear-gradient(to right,transparent 0%,rgba(0,0,0,.5) 14%,black 26%)'}}>
              <div style={{borderRadius:'16px',overflow:'hidden',transform:'perspective(1400px) rotateY(-8deg) rotateX(4deg)',boxShadow:'0 0 0 1px rgba(59,130,246,.5),0 0 50px rgba(59,130,246,.28),0 0 120px rgba(59,130,246,.1),0 60px 120px rgba(0,0,0,.75)'}}>
                <img src={dark ? '/images/KPI.png' : '/images/KPI_Light.png'} style={{width:'100%',display:'block'}} alt="KPI dashboard" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-fade" style={{position:'absolute',bottom:0,left:0,right:0,zIndex:10,pointerEvents:'none'}} />
      </section>

      {/* ── KPI Categories ── */}
      <section style={{background:sectionBg,padding:'80px 0'}}>
        <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 60px'}}>
          <div style={{textAlign:'center',marginBottom:'56px'}}>
            <div style={{display:'inline-flex',alignItems:'center',gap:'8px',background:'rgba(59,130,246,.08)',border:'1px solid rgba(59,130,246,.18)',borderRadius:'100px',padding:'5px 16px',fontSize:'12px',fontWeight:600,color:'#60a5fa',letterSpacing:'.06em',textTransform:'uppercase',marginBottom:'16px'}}>{t('kpi.categories.badge')}</div>
            <h2 style={{fontSize:'clamp(1.5rem,3vw,2rem)',fontWeight:800,color:'#fff',marginBottom:'10px',letterSpacing:'-.02em'}}>{t('kpi.categories.title')}</h2>
            <p style={{color:'#475569',fontSize:'.9rem'}}>{t('kpi.categories.subtitle')}</p>
          </div>

          <div style={{display:'flex',alignItems:'flex-start',gap:'48px'}}>
            <div style={{width:420,flexShrink:0,display:'flex',flexDirection:'column',gap:'8px'}}>
              {categories.map((cat, i) => {
                const isSelected = selected === i;
                return (
                  <div key={cat.id} onClick={() => handleSelect(i)} style={{position:'relative',display:'flex',alignItems:'center',gap:16,padding:'18px 20px 18px 24px',borderRadius:16,cursor:'pointer',border:`1px solid ${isSelected ? cat.color + '45' : (dark ? 'rgba(255,255,255,.07)' : 'rgba(0,0,0,.08)')}`,background:isSelected ? (dark ? `linear-gradient(135deg,${cat.color}14,${cat.color}07)` : `linear-gradient(135deg,${cat.color}0d,${cat.color}05)`) : (dark ? 'rgba(255,255,255,.02)' : 'rgba(0,0,0,.018)'),boxShadow:isSelected ? (dark ? `0 0 0 1px ${cat.color}20,0 8px 32px rgba(0,0,0,.3)` : `0 0 0 1px ${cat.color}18,0 4px 20px rgba(0,0,0,.08)`) : 'none',transition:'all .2s',userSelect:'none'}}>
                    <div style={{position:'absolute',left:0,top:'20%',height:'60%',width:3,borderRadius:'0 3px 3px 0',background:isSelected ? cat.color : 'transparent',transition:'background .2s'}} />
                    <span style={{fontSize:11,fontWeight:800,color:isSelected ? cat.color : (dark ? '#334155' : '#94a3b8'),letterSpacing:'.08em',minWidth:22,transition:'color .2s'}}>{String(i+1).padStart(2,'0')}</span>
                    <div style={{width:36,height:36,borderRadius:10,flexShrink:0,background:`${cat.color}${isSelected ? '22' : '12'}`,border:`1.5px solid ${cat.color}${isSelected ? '50' : '25'}`,display:'flex',alignItems:'center',justifyContent:'center',color:isSelected ? cat.color : `${cat.color}88`,transition:'all .2s'}}>{cat.icon}</div>
                    <div style={{flex:1}}>
                      <div style={{fontSize:17,fontWeight:800,color:isSelected ? '#f1f5f9' : (dark ? '#94a3b8' : '#64748b'),letterSpacing:'-.01em',lineHeight:1.2,marginBottom:3,transition:'color .2s'}}>{t(cat.labelKey)}</div>
                      <div style={{fontSize:11,color:isSelected ? (dark ? '#475569' : '#64748b') : (dark ? '#1e3a5f' : '#cbd5e1'),transition:'color .2s'}}>{cat.kpis.length} {t('kpi.categories.metricsTracked')}</div>
                    </div>
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke={isSelected ? cat.color : (dark ? '#334155' : '#cbd5e1')} strokeWidth="2.5" style={{flexShrink:0,transition:'stroke .2s, transform .2s',transform:isSelected ? 'translateX(3px)' : 'none'}}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                );
              })}
            </div>

            <div style={{flex:1,borderRadius:'20px',background:activeCat ? (dark ? `linear-gradient(145deg,${activeCat.color}12 0%,#0a1628 45%,#080f1e 100%)` : `linear-gradient(145deg,${activeCat.color}0d 0%,#f8fafc 55%,#ffffff 100%)`) : (dark ? '#0a1628' : '#f8fafc'),border:`1px solid ${activeCat ? activeCat.color + '35' : (dark ? 'rgba(255,255,255,.06)' : 'rgba(0,0,0,.07)')}`,boxShadow:activeCat ? (dark ? `0 0 0 1px ${activeCat.color}18,0 20px 60px rgba(0,0,0,.35),0 0 60px ${activeCat.color}0c` : `0 0 0 1px ${activeCat.color}18,0 8px 32px rgba(0,0,0,.08)`) : 'none',transition:'border-color .22s,background .22s,box-shadow .22s',overflow:'hidden'}}>
              <div style={{height:3,background:`linear-gradient(90deg,${activeCat.color},${activeCat.color}33)`}} />
              <div style={{padding:'28px 32px 32px'}}>
                <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:16}}>
                  <div style={{width:48,height:48,borderRadius:14,flexShrink:0,background:`linear-gradient(135deg,${activeCat.color}28,${activeCat.color}10)`,border:`1.5px solid ${activeCat.color}40`,display:'flex',alignItems:'center',justifyContent:'center',color:activeCat.color,boxShadow:`0 4px 16px ${activeCat.color}22`}}>{activeCat.icon}</div>
                  <div style={{flex:1}}>
                    <div style={{fontSize:18,fontWeight:800,color:'#e2e8f0',letterSpacing:'-.02em',lineHeight:1.15,marginBottom:4}}>{t(activeCat.labelKey)}</div>
                    <div style={{display:'flex',alignItems:'center',gap:6}}>
                      <div style={{width:6,height:6,borderRadius:'50%',background:activeCat.color}} />
                      <span style={{fontSize:11,color:activeCat.color,fontWeight:600,letterSpacing:'.05em',textTransform:'uppercase',opacity:.85}}>{t('kpi.categories.fiveMetrics')}</span>
                    </div>
                  </div>
                </div>
                <p style={{fontSize:12,color:dark?'#64748b':'#475569',lineHeight:1.75,margin:'0 0 20px',paddingBottom:20,borderBottom:`1px solid ${dark?'rgba(255,255,255,.06)':'rgba(0,0,0,.07)'}`}}>{t(activeCat.descKey)}</p>
                <div style={{display:'flex',flexDirection:'column'}}>
                  {activeCat.kpis.map((kpi, ki) => (
                    <div key={kpi.labelKey} style={{display:'flex',gap:14,alignItems:'flex-start',padding:'13px 0',borderBottom:ki < activeCat.kpis.length - 1 ? `1px solid ${dark?'rgba(255,255,255,.04)':'rgba(0,0,0,.05)'}` : 'none'}}>
                      <div style={{width:24,height:24,borderRadius:7,flexShrink:0,marginTop:1,background:`${activeCat.color}18`,border:`1px solid ${activeCat.color}35`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:10,fontWeight:800,color:activeCat.color}}>{ki+1}</div>
                      <div style={{flex:1}}>
                        <div style={{display:'flex',alignItems:'baseline',gap:8,flexWrap:'wrap',marginBottom:4}}>
                          <span style={{fontSize:13,fontWeight:700,color:'#e2e8f0',lineHeight:1.2}}>{t(kpi.labelKey)}</span>
                          <span style={{fontSize:11,color:dark?'#475569':'#64748b',fontStyle:'italic',lineHeight:1.2}}>{t(kpi.qKey)}</span>
                        </div>
                        <p style={{fontSize:11,color:dark?'#334155':'#64748b',lineHeight:1.6,margin:0}}>{t(kpi.bodyKey)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{background:'rgba(59,130,246,.08)',borderTop:'1px solid rgba(59,130,246,.15)',borderBottom:'1px solid rgba(59,130,246,.15)',padding:'80px 0'}}>
        <div className="max-w-screen-xl px-6 mx-auto text-center">
          <h2 style={{fontSize:'clamp(1.8rem,3vw,2.4rem)',fontWeight:900,color:'#fff',marginBottom:'16px',letterSpacing:'-.03em'}}>{t('kpi.cta.title')}</h2>
          <p style={{marginBottom:'28px',color:'#94a3b8',fontSize:'1.05rem'}}>{t('common.noCard')}</p>
          <Link to="/contact" className="btn-p" style={{padding:'14px 36px',fontSize:'15px'}}>{t('common.getStartedFree')}</Link>
        </div>
      </section>
    </>
  );
}
