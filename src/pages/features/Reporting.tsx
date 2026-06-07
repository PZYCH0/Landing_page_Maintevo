import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next';

export default function Reporting() {
  const { dark } = useTheme();
  const { t } = useTranslation();
  return (
    <>
      <section className="hero-section" style={{height:'100vh',display:'flex',flexDirection:'column',background:'#020617',position:'relative',overflow:'hidden',paddingTop:'72px'}}>
        <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(59,130,246,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,.025) 1px,transparent 1px)',backgroundSize:'60px 60px',pointerEvents:'none'}} />
        <div style={{position:'absolute',bottom:'-80px',left:'-60px',width:'560px',height:'360px',background:'radial-gradient(ellipse,rgba(37,99,235,.22) 0%,transparent 65%)',filter:'blur(50px)',pointerEvents:'none'}} />
        <div style={{position:'absolute',bottom:'80px',right:'8%',width:'420px',height:'280px',background:'radial-gradient(ellipse,rgba(59,130,246,.1) 0%,transparent 65%)',filter:'blur(60px)',pointerEvents:'none'}} />
        <div style={{position:'absolute',top:'8%',right:'10%',width:'260px',height:'260px',background:'radial-gradient(circle,rgba(59,130,246,.07) 0%,transparent 65%)',filter:'blur(40px)',pointerEvents:'none'}} />
        <div style={{flex:1,display:'flex',alignItems:'center',position:'relative',zIndex:3}}>
          <div className="hero-content-row" style={{width:'100%',maxWidth:'1280px',margin:'0 auto',padding:'0 60px',position:'relative',display:'flex',alignItems:'center'}}>
            <div className="hero-left-block" style={{width:'38%',flexShrink:0,position:'relative',zIndex:2}}>
              <Link to="/" style={{display:'inline-flex',alignItems:'center',gap:'6px',fontSize:'13px',color:'#60a5fa',textDecoration:'none',marginBottom:'20px',fontWeight:500}}>
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                {t('common.back')}
              </Link>
              <div style={{fontSize:'12px',fontWeight:700,letterSpacing:'.1em',color:'#60a5fa',textTransform:'uppercase',marginBottom:'16px'}}>{t('reporting.hero.eyebrow')}</div>
              <h1 style={{fontSize:'clamp(2rem,3.6vw,3.2rem)',fontWeight:900,lineHeight:1.06,letterSpacing:'-0.03em',marginBottom:'14px',color:'#fff'}}>
                {t('reporting.hero.h1_1')}<br /><span style={{background:'linear-gradient(135deg,#60a5fa,#818cf8)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>{t('reporting.hero.h1_accent')}</span>
              </h1>
              <p style={{fontSize:'.88rem',color:'#64748b',lineHeight:1.6,maxWidth:'380px',marginBottom:'22px'}}>{t('reporting.hero.desc')}</p>
              <div style={{display:'flex',alignItems:'center',gap:'12px',flexWrap:'wrap'}}>
                <Link to="/contact" className="btn-p">
                  {t('common.getStartedFree')}
                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                <Link to="/contact" className="btn-s">{t('common.requestDemo')}</Link>
              </div>
            </div>
            <div className="hero-right-block" style={{position:'absolute',right:'-50px',top:'50%',transform:'translateY(-54%)',width:'74%',pointerEvents:'none',zIndex:1,WebkitMaskImage:'linear-gradient(to right,transparent 0%,rgba(0,0,0,.5) 14%,black 26%)',maskImage:'linear-gradient(to right,transparent 0%,rgba(0,0,0,.5) 14%,black 26%)'}}>
              <div style={{borderRadius:'16px',overflow:'hidden',transform:'perspective(1400px) rotateY(-8deg) rotateX(4deg)',boxShadow:'0 0 0 1px rgba(59,130,246,.5),0 0 50px rgba(59,130,246,.28),0 0 120px rgba(59,130,246,.1),0 60px 120px rgba(0,0,0,.75)'}}>
                <img src={dark ? '/images/RecordingDarkMode.png' : '/images/RecordingLightMode.png'} style={{width:'100%',display:'block'}} alt="Reporting & audit trail — MaintEvo" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-fade" style={{position:'absolute',bottom:0,left:0,right:0,zIndex:10,pointerEvents:'none'}} />
      </section>

      <section style={{background:'#080f1e',padding:'80px 0'}}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="benefit-card">
              <div style={{width:'48px',height:'48px',borderRadius:'12px',background:'rgba(59,130,246,.1)',border:'1px solid rgba(59,130,246,.2)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'20px'}}>
                <svg width="22" height="22" fill="none" stroke="#60a5fa" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              </div>
              <h3 style={{fontSize:'1.1rem',fontWeight:700,color:'#fff',marginBottom:'10px'}}>{t('reporting.benefits.b1_title')}</h3>
              <p style={{color:'#94a3b8',fontSize:'.92rem',lineHeight:1.7}}>{t('reporting.benefits.b1_body')}</p>
            </div>
            <div className="benefit-card">
              <div style={{width:'48px',height:'48px',borderRadius:'12px',background:'rgba(34,197,94,.08)',border:'1px solid rgba(34,197,94,.18)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'20px'}}>
                <svg width="22" height="22" fill="none" stroke="#4ade80" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
              </div>
              <h3 style={{fontSize:'1.1rem',fontWeight:700,color:'#fff',marginBottom:'10px'}}>{t('reporting.benefits.b2_title')}</h3>
              <p style={{color:'#94a3b8',fontSize:'.92rem',lineHeight:1.7}}>{t('reporting.benefits.b2_body')}</p>
            </div>
            <div className="benefit-card">
              <div style={{width:'48px',height:'48px',borderRadius:'12px',background:'rgba(251,191,36,.07)',border:'1px solid rgba(251,191,36,.18)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'20px'}}>
                <svg width="22" height="22" fill="none" stroke="#fbbf24" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
              </div>
              <h3 style={{fontSize:'1.1rem',fontWeight:700,color:'#fff',marginBottom:'10px'}}>{t('reporting.benefits.b3_title')}</h3>
              <p style={{color:'#94a3b8',fontSize:'.92rem',lineHeight:1.7}}>{t('reporting.benefits.b3_body')}</p>
            </div>
            <div className="benefit-card">
              <div style={{width:'48px',height:'48px',borderRadius:'12px',background:'rgba(168,85,247,.08)',border:'1px solid rgba(168,85,247,.18)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'20px'}}>
                <svg width="22" height="22" fill="none" stroke="#c084fc" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              </div>
              <h3 style={{fontSize:'1.1rem',fontWeight:700,color:'#fff',marginBottom:'10px'}}>{t('reporting.benefits.b4_title')}</h3>
              <p style={{color:'#94a3b8',fontSize:'.92rem',lineHeight:1.7}}>{t('reporting.benefits.b4_body')}</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{background:'#050b16',padding:'80px 0'}}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 style={{fontSize:'clamp(1.6rem,3vw,2.2rem)',fontWeight:900,color:'#fff',letterSpacing:'-.03em',marginBottom:'12px'}}>{t('reporting.audit.title')}</h2>
            <p style={{color:'#94a3b8',fontSize:'1rem',maxWidth:'520px',margin:'0 auto'}}>{t('reporting.audit.subtitle')}</p>
          </div>
          <div className="audit-wrap" style={{background:'rgba(255,255,255,.03)',border:'1px solid rgba(255,255,255,.07)',borderRadius:'16px',padding:'8px 32px'}}>
            {([
              { bg:'rgba(59,130,246,.12)',border:'rgba(59,130,246,.2)',stroke:'#60a5fa', icon:<path d="M12 4v16m8-8H4"/>, titleKey:'reporting.audit.e1_title', subKey:'reporting.audit.e1_sub' },
              { bg:'rgba(34,197,94,.08)',border:'rgba(34,197,94,.16)',stroke:'#4ade80', icon:<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>, titleKey:'reporting.audit.e2_title', subKey:'reporting.audit.e2_sub' },
              { bg:'rgba(251,191,36,.07)',border:'rgba(251,191,36,.16)',stroke:'#fbbf24', icon:<><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>, titleKey:'reporting.audit.e3_title', subKey:'reporting.audit.e3_sub' },
              { bg:'rgba(168,85,247,.08)',border:'rgba(168,85,247,.16)',stroke:'#c084fc', icon:<path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>, titleKey:'reporting.audit.e4_title', subKey:'reporting.audit.e4_sub' },
              { bg:'rgba(34,211,238,.07)',border:'rgba(34,211,238,.16)',stroke:'#22d3ee', icon:<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>, titleKey:'reporting.audit.e5_title', subKey:'reporting.audit.e5_sub' },
            ]).map((row, i, arr) => (
              <div key={row.titleKey} style={{display:'flex',alignItems:'flex-start',gap:'16px',padding:'18px 0',borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,.05)' : 'none'}}>
                <div style={{width:'36px',height:'36px',flexShrink:0,borderRadius:'8px',display:'flex',alignItems:'center',justifyContent:'center',background:row.bg,border:`1px solid ${row.border}`}}>
                  <svg width="16" height="16" fill="none" stroke={row.stroke} strokeWidth="2" viewBox="0 0 24 24">{row.icon}</svg>
                </div>
                <div>
                  <div style={{fontSize:'.95rem',fontWeight:600,color:'#fff',marginBottom:'4px'}}>{t(row.titleKey)}</div>
                  <div style={{fontSize:'.88rem',color:'#64748b'}}>{t(row.subKey)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{background:'rgba(59,130,246,.08)',borderTop:'1px solid rgba(59,130,246,.15)',borderBottom:'1px solid rgba(59,130,246,.15)',padding:'80px 0'}}>
        <div className="max-w-screen-xl px-6 mx-auto text-center">
          <h2 style={{fontSize:'clamp(1.8rem,3vw,2.4rem)',fontWeight:900,color:'#fff',marginBottom:'16px',letterSpacing:'-.03em'}}>{t('reporting.cta.title')}</h2>
          <p style={{marginBottom:'28px',color:'#94a3b8',fontSize:'1.05rem'}}>{t('common.noCard')}</p>
          <Link to="/contact" className="btn-p" style={{padding:'14px 36px',fontSize:'15px'}}>{t('common.getStartedFree')}</Link>
        </div>
      </section>
    </>
  );
}
