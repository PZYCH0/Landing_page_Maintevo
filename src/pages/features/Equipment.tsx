import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const BenefitCard = ({ iconPath, title, body, img }: { iconPath: React.ReactNode; title: string; body: string; img: string }) => (
  <div className="benefit-card">
    <div className="absolute inset-0 bg-cover bg-center z-0" style={{backgroundImage:`url('${img}')`}}></div>
    <div className="feat-overlay absolute inset-0 bg-[#0f172a]/90 z-0"></div>
    <div className="relative z-10">
      <div style={{width:'48px',height:'48px',borderRadius:'12px',background:'rgba(59,130,246,.1)',border:'1px solid rgba(59,130,246,.2)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'20px'}}>
        <svg width="22" height="22" fill="none" stroke="#60a5fa" strokeWidth="1.8" viewBox="0 0 24 24">{iconPath}</svg>
      </div>
      <h3 style={{fontSize:'1.1rem',fontWeight:700,color:'#fff',marginBottom:'12px'}}>{title}</h3>
      <p style={{color:'#94a3b8',lineHeight:1.7,fontSize:'.95rem'}}>{body}</p>
    </div>
  </div>
);

export default function Equipment() {
  const { dark } = useTheme();
  const { t } = useTranslation();
  return (
    <>
      <section className="hero-section" style={{height:'100vh',display:'flex',flexDirection:'column',background:'#020617',position:'relative',overflow:'hidden',paddingTop:'72px'}}>
        <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(59,130,246,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,.025) 1px,transparent 1px)',backgroundSize:'60px 60px',pointerEvents:'none'}} />
        <div style={{position:'absolute',bottom:'-80px',left:'-60px',width:'560px',height:'360px',background:'radial-gradient(ellipse,rgba(37,99,235,.22) 0%,transparent 65%)',filter:'blur(50px)',pointerEvents:'none'}} />
        <div style={{position:'absolute',bottom:'80px',right:'8%',width:'420px',height:'280px',background:'radial-gradient(ellipse,rgba(59,130,246,.1) 0%,transparent 65%)',filter:'blur(60px)',pointerEvents:'none'}} />
        <div style={{position:'absolute',top:'8%',right:'10%',width:'260px',height:'260px',background:'radial-gradient(circle,rgba(59,130,246,.07) 0%,transparent 65%)',filter:'blur(40px)',pointerEvents:'none'}} />
        <div style={{flex:1,display:'flex',alignItems:'center',position:'relative',zIndex:3,padding:0}}>
          <div className="hero-content-row" style={{width:'100%',maxWidth:'1280px',margin:'0 auto',padding:'0 60px',position:'relative',display:'flex',alignItems:'center'}}>
            <div className="hero-left-block" style={{width:'38%',flexShrink:0,position:'relative',zIndex:2}}>
              <Link to="/" style={{display:'inline-flex',alignItems:'center',gap:'6px',fontSize:'13px',color:'#60a5fa',textDecoration:'none',marginBottom:'20px',fontWeight:500}}>
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                {t('common.back')}
              </Link>
              <div style={{fontSize:'12px',fontWeight:700,letterSpacing:'.1em',color:'#60a5fa',textTransform:'uppercase',marginBottom:'16px'}}>{t('equipment.hero.eyebrow')}</div>
              <h1 style={{fontSize:'clamp(2rem,3.6vw,3.2rem)',fontWeight:900,lineHeight:1.06,letterSpacing:'-0.03em',marginBottom:'14px',color:'#fff'}}>
                {t('equipment.hero.h1_1')}<br />{t('equipment.hero.h1_2')} <span style={{color:'#3b82f6'}}>{t('equipment.hero.h1_accent')}</span>
              </h1>
              <p style={{fontSize:'.88rem',color:'#64748b',lineHeight:1.6,maxWidth:'380px',marginBottom:'18px'}}>{t('equipment.hero.desc')}</p>
              <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'18px',flexWrap:'wrap'}}>
                <Link to="/contact" className="btn-p">
                  {t('common.getStartedFree')}
                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                <a href="#" className="btn-s">
                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M10 8l6 4-6 4V8z"/></svg>
                  {t('common.seeHowItWorks')}
                </a>
              </div>
              <div style={{display:'flex',gap:'24px',flexWrap:'wrap'}}>
                <div style={{display:'flex',alignItems:'flex-start',gap:'8px'}}>
                  <div style={{width:'28px',height:'28px',borderRadius:'8px',background:'rgba(59,130,246,.1)',border:'1px solid rgba(59,130,246,.2)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                    <svg width="13" height="13" fill="none" stroke="#60a5fa" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
                  </div>
                  <div style={{fontSize:'12px',lineHeight:1.4}}>
                    <div style={{color:'#e2e8f0',fontWeight:600}}>{t('equipment.hero.badge1_title')}</div>
                    <div style={{color:'#475569'}}>{t('equipment.hero.badge1_sub')}</div>
                  </div>
                </div>
                <div style={{display:'flex',alignItems:'flex-start',gap:'8px'}}>
                  <div style={{width:'28px',height:'28px',borderRadius:'8px',background:'rgba(59,130,246,.1)',border:'1px solid rgba(59,130,246,.2)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                    <svg width="13" height="13" fill="none" stroke="#60a5fa" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                  </div>
                  <div style={{fontSize:'12px',lineHeight:1.4}}>
                    <div style={{color:'#e2e8f0',fontWeight:600}}>{t('equipment.hero.badge2_title')}</div>
                    <div style={{color:'#475569'}}>{t('equipment.hero.badge2_sub')}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-right-block" style={{position:'absolute',right:'-50px',top:'50%',transform:'translateY(-54%)',width:'74%',pointerEvents:'none',zIndex:1,WebkitMaskImage:'linear-gradient(to right,transparent 0%,rgba(0,0,0,.5) 14%,black 26%)',maskImage:'linear-gradient(to right,transparent 0%,rgba(0,0,0,.5) 14%,black 26%)'}}>
              <div style={{borderRadius:'16px',overflow:'hidden',transform:'perspective(1400px) rotateY(-8deg) rotateX(4deg)',boxShadow:'0 0 0 1px rgba(59,130,246,.5),0 0 50px rgba(59,130,246,.28),0 0 120px rgba(59,130,246,.1),0 60px 120px rgba(0,0,0,.75)'}}>
                <img src={dark ? '/AssestsHero.png' : '/AssetsHeroLightMode.jpg'} style={{width:'100%',display:'block'}} alt="MaintEvo Equipment Hierarchy" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-fade" style={{position:'absolute',bottom:0,left:0,right:0,zIndex:10,pointerEvents:'none'}} />
      </section>

      <section style={{background:'#080f1e',padding:'60px 0'}}>
        <div className="max-w-3xl mx-auto px-6">
          <p style={{textAlign:'center',fontSize:'13px',fontWeight:600,color:'#60a5fa',letterSpacing:'.06em',textTransform:'uppercase',marginBottom:'24px'}}>{t('equipment.criticality.label')}</p>
          <div className="criticality-grid" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'12px'}}>
            {([
              { levelKey:'equipment.criticality.l1_level', nameKey:'equipment.criticality.l1_name', descKey:'equipment.criticality.l1_desc', bg:'rgba(34,197,94,.08)', border:'rgba(34,197,94,.2)', color:'#22c55e' },
              { levelKey:'equipment.criticality.l2_level', nameKey:'equipment.criticality.l2_name', descKey:'equipment.criticality.l2_desc', bg:'rgba(234,179,8,.08)', border:'rgba(234,179,8,.2)', color:'#eab308' },
              { levelKey:'equipment.criticality.l3_level', nameKey:'equipment.criticality.l3_name', descKey:'equipment.criticality.l3_desc', bg:'rgba(249,115,22,.08)', border:'rgba(249,115,22,.2)', color:'#f97316' },
              { levelKey:'equipment.criticality.l4_level', nameKey:'equipment.criticality.l4_name', descKey:'equipment.criticality.l4_desc', bg:'rgba(239,68,68,.08)', border:'rgba(239,68,68,.2)', color:'#ef4444' },
            ]).map(c => (
              <div key={c.nameKey} style={{background:c.bg,border:`1px solid ${c.border}`,borderRadius:'12px',padding:'20px',textAlign:'center'}}>
                <div style={{fontSize:'11px',fontWeight:700,color:c.color,letterSpacing:'.06em',marginBottom:'8px'}}>{t(c.levelKey)}</div>
                <div style={{fontSize:'15px',fontWeight:700,color:'#fff'}}>{t(c.nameKey)}</div>
                <div style={{fontSize:'11px',color:'#64748b',marginTop:'6px'}}>{t(c.descKey)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{background:'#050b16',padding:'80px 0'}}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <BenefitCard iconPath={<path d="M4 7h16M4 12h16M4 17h10"/>} title={t('equipment.benefits.b1_title')} body={t('equipment.benefits.b1_body')} img="https://images.unsplash.com/photo-1715322506425-2fc19fe0fc5f?w=800&q=80" />
            <BenefitCard iconPath={<><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></>} title={t('equipment.benefits.b2_title')} body={t('equipment.benefits.b2_body')} img="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=800&q=80" />
            <BenefitCard iconPath={<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>} title={t('equipment.benefits.b3_title')} body={t('equipment.benefits.b3_body')} img="https://images.unsplash.com/photo-1569235186275-626cb53b83ce?w=800&q=80" />
            <BenefitCard iconPath={<path d="M13 10V3L4 14h7v7l9-11h-7z"/>} title={t('equipment.benefits.b4_title')} body={t('equipment.benefits.b4_body')} img="https://images.unsplash.com/photo-1629058019123-da19dc3d871a?w=800&q=80" />
          </div>
        </div>
      </section>

      <section style={{background:'rgba(59,130,246,.08)',borderTop:'1px solid rgba(59,130,246,.15)',borderBottom:'1px solid rgba(59,130,246,.15)',padding:'80px 0'}}>
        <div className="max-w-screen-xl px-6 mx-auto text-center">
          <h2 style={{fontSize:'clamp(1.8rem,3vw,2.4rem)',fontWeight:900,color:'#fff',marginBottom:'16px',letterSpacing:'-.03em'}}>{t('equipment.cta.title')}</h2>
          <p style={{marginBottom:'28px',color:'#94a3b8',fontSize:'1.05rem'}}>{t('common.noCard')}</p>
          <Link to="/contact" className="btn-p" style={{padding:'14px 36px',fontSize:'15px'}}>{t('common.getStartedFree')}</Link>
        </div>
      </section>
    </>
  );
}
