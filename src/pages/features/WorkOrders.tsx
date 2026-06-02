import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const BenefitCard = ({ iconPath, title, body }: { iconPath: React.ReactNode; title: string; body: string }) => (
  <div className="benefit-card">
    <div style={{width:'48px',height:'48px',borderRadius:'12px',background:'rgba(59,130,246,.1)',border:'1px solid rgba(59,130,246,.2)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'20px'}}>
      <svg width="22" height="22" fill="none" stroke="#60a5fa" strokeWidth="1.8" viewBox="0 0 24 24">{iconPath}</svg>
    </div>
    <h3 style={{fontSize:'1.1rem',fontWeight:700,color:'#fff',marginBottom:'12px'}}>{title}</h3>
    <p style={{color:'#94a3b8',lineHeight:1.7,fontSize:'.95rem'}}>{body}</p>
  </div>
);

export default function WorkOrders() {
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
              <div style={{fontSize:'12px',fontWeight:700,letterSpacing:'.1em',color:'#60a5fa',textTransform:'uppercase',marginBottom:'16px'}}>{t('workOrders.hero.eyebrow')}</div>
              <h1 style={{fontSize:'clamp(2rem,3.6vw,3.2rem)',fontWeight:900,lineHeight:1.06,letterSpacing:'-0.03em',marginBottom:'14px',color:'#fff'}}>
                {t('workOrders.hero.h1_1')}<br />
                {t('workOrders.hero.h1_2')} <span style={{color:'#3b82f6'}}>{t('workOrders.hero.h1_accent')}</span>
              </h1>
              <p style={{fontSize:'.88rem',color:'#64748b',lineHeight:1.6,maxWidth:'380px',marginBottom:'22px'}}>{t('workOrders.hero.desc')}</p>
              <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'22px',flexWrap:'wrap'}}>
                <Link to="/contact" className="btn-p">
                  {t('common.getStartedFree')}
                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                <Link to="/contact" className="btn-s">{t('common.requestDemo')}</Link>
              </div>
              <div style={{display:'flex',gap:'24px',flexWrap:'wrap'}}>
                <div style={{display:'flex',alignItems:'flex-start',gap:'8px'}}>
                  <div style={{width:'28px',height:'28px',borderRadius:'8px',background:'rgba(59,130,246,.1)',border:'1px solid rgba(59,130,246,.2)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                    <svg width="13" height="13" fill="none" stroke="#60a5fa" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                  <div style={{fontSize:'12px',lineHeight:1.4}}>
                    <div style={{color:'#e2e8f0',fontWeight:600}}>{t('workOrders.hero.badge1_title')}</div>
                    <div style={{color:'#475569'}}>{t('workOrders.hero.badge1_sub')}</div>
                  </div>
                </div>
                <div style={{display:'flex',alignItems:'flex-start',gap:'8px'}}>
                  <div style={{width:'28px',height:'28px',borderRadius:'8px',background:'rgba(59,130,246,.1)',border:'1px solid rgba(59,130,246,.2)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                    <svg width="13" height="13" fill="none" stroke="#60a5fa" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                  </div>
                  <div style={{fontSize:'12px',lineHeight:1.4}}>
                    <div style={{color:'#e2e8f0',fontWeight:600}}>{t('workOrders.hero.badge2_title')}</div>
                    <div style={{color:'#475569'}}>{t('workOrders.hero.badge2_sub')}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-right-block" style={{position:'absolute',right:'-50px',top:'50%',transform:'translateY(-54%)',width:'74%',pointerEvents:'none',zIndex:1,WebkitMaskImage:'linear-gradient(to right,transparent 0%,rgba(0,0,0,.5) 14%,black 26%)',maskImage:'linear-gradient(to right,transparent 0%,rgba(0,0,0,.5) 14%,black 26%)'}}>
              <div style={{borderRadius:'16px',overflow:'hidden',transform:'perspective(1400px) rotateY(-8deg) rotateX(4deg)',boxShadow:'0 0 0 1px rgba(59,130,246,.5),0 0 50px rgba(59,130,246,.28),0 0 120px rgba(59,130,246,.1),0 60px 120px rgba(0,0,0,.75)'}}>
                <img src={dark ? '/images/work-orders-hero.jpg' : '/WorkOrderHeroLightMode.png'} style={{width:'100%',display:'block'}} alt="Work Orders — MaintEvo" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-fade" style={{position:'absolute',bottom:0,left:0,right:0,zIndex:10,pointerEvents:'none'}} />
      </section>

      <section style={{background:'#080f1e',padding:'80px 0'}}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <BenefitCard iconPath={<path d="M12 4v16m8-8H4"/>} title={t('workOrders.benefits.b1_title')} body={t('workOrders.benefits.b1_body')} />
            <BenefitCard iconPath={<path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>} title={t('workOrders.benefits.b2_title')} body={t('workOrders.benefits.b2_body')} />
            <BenefitCard iconPath={<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>} title={t('workOrders.benefits.b3_title')} body={t('workOrders.benefits.b3_body')} />
            <BenefitCard iconPath={<path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>} title={t('workOrders.benefits.b4_title')} body={t('workOrders.benefits.b4_body')} />
          </div>
        </div>
      </section>

      <section style={{background:'#050b16',padding:'80px 0'}}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 style={{fontSize:'clamp(1.6rem,3vw,2.2rem)',fontWeight:900,color:'#fff',letterSpacing:'-.03em',marginBottom:'12px'}}>{t('workOrders.flow.title')}</h2>
            <p style={{color:'#64748b',fontSize:'.95rem'}}>{t('workOrders.flow.subtitle')}</p>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:0}}>
            {([
              { num:'01', titleKey:'workOrders.flow.s1_title', descKey:'workOrders.flow.s1_desc' },
              { num:'02', titleKey:'workOrders.flow.s2_title', descKey:'workOrders.flow.s2_desc' },
              { num:'03', titleKey:'workOrders.flow.s3_title', descKey:'workOrders.flow.s3_desc' },
              { num:'04', titleKey:'workOrders.flow.s4_title', descKey:'workOrders.flow.s4_desc', last:true },
            ]).map(step => (
              <div key={step.num} style={{display:'flex',gap:'24px',alignItems:'flex-start',padding:'28px 0',borderBottom:step.last ? 'none' : '1px solid rgba(255,255,255,.06)'}}>
                <div className="step-num">{step.num}</div>
                <div>
                  <div style={{fontSize:'1rem',fontWeight:700,color:'#fff',marginBottom:'6px'}}>{t(step.titleKey)}</div>
                  <p style={{color:'#94a3b8',fontSize:'.9rem',lineHeight:1.6}}>{t(step.descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{background:'rgba(59,130,246,.08)',borderTop:'1px solid rgba(59,130,246,.15)',borderBottom:'1px solid rgba(59,130,246,.15)',padding:'80px 0'}}>
        <div className="max-w-screen-xl px-6 mx-auto text-center">
          <h2 style={{fontSize:'clamp(1.8rem,3vw,2.4rem)',fontWeight:900,color:'#fff',marginBottom:'16px',letterSpacing:'-.03em'}}>{t('workOrders.cta.title')}</h2>
          <p style={{marginBottom:'28px',color:'#94a3b8',fontSize:'1.05rem'}}>{t('common.noCard')}</p>
          <Link to="/contact" className="btn-p" style={{padding:'14px 36px',fontSize:'15px'}}>{t('common.getStartedFree')}</Link>
        </div>
      </section>
    </>
  );
}
