import { Link } from 'react-router-dom';

const BenefitCard = ({ iconPath, title, body }: { iconPath: React.ReactNode; title: string; body: string }) => (
  <div className="benefit-card">
    <div style={{width:'48px',height:'48px',borderRadius:'12px',background:'rgba(59,130,246,.1)',border:'1px solid rgba(59,130,246,.2)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'20px'}}>
      <svg width="22" height="22" fill="none" stroke="#60a5fa" strokeWidth="1.8" viewBox="0 0 24 24">{iconPath}</svg>
    </div>
    <h3 style={{fontSize:'1.1rem',fontWeight:700,color:'#fff',marginBottom:'12px'}}>{title}</h3>
    <p style={{color:'#94a3b8',lineHeight:1.7,fontSize:'.95rem'}}>{body}</p>
  </div>
);

export default function PreventiveMaintenance() {
  return (
    <>
      {/* Hero */}
      <section className="hero-section" style={{height:'100vh',display:'flex',flexDirection:'column',background:'#020617',position:'relative',overflow:'hidden',paddingTop:'72px'}}>
        <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(59,130,246,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,.025) 1px,transparent 1px)',backgroundSize:'60px 60px',pointerEvents:'none'}} />
        <div style={{position:'absolute',bottom:'-80px',left:'-60px',width:'560px',height:'360px',background:'radial-gradient(ellipse,rgba(37,99,235,.22) 0%,transparent 65%)',filter:'blur(50px)',pointerEvents:'none'}} />
        <div style={{position:'absolute',bottom:'80px',right:'8%',width:'420px',height:'280px',background:'radial-gradient(ellipse,rgba(59,130,246,.1) 0%,transparent 65%)',filter:'blur(60px)',pointerEvents:'none'}} />
        <div style={{position:'absolute',top:'8%',right:'10%',width:'260px',height:'260px',background:'radial-gradient(circle,rgba(59,130,246,.07) 0%,transparent 65%)',filter:'blur(40px)',pointerEvents:'none'}} />

        <div style={{flex:1,display:'flex',alignItems:'center',position:'relative',zIndex:3,padding:0}}>
          <div style={{width:'100%',maxWidth:'1280px',margin:'0 auto',padding:'0 60px',position:'relative',display:'flex',alignItems:'center'}}>

            <div style={{width:'38%',flexShrink:0,position:'relative',zIndex:2}}>
              <Link to="/" style={{display:'inline-flex',alignItems:'center',gap:'6px',fontSize:'13px',color:'#60a5fa',textDecoration:'none',marginBottom:'20px',fontWeight:500}}>
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                Back to all features
              </Link>
              <div style={{fontSize:'12px',fontWeight:700,letterSpacing:'.1em',color:'#60a5fa',textTransform:'uppercase',marginBottom:'16px'}}>Preventive Maintenance</div>
              <h1 style={{fontSize:'clamp(2rem,3.6vw,3.2rem)',fontWeight:900,lineHeight:1.06,letterSpacing:'-0.03em',marginBottom:'14px',color:'#fff'}}>
                Schedule it once.<br />MaintEvo <span style={{color:'#3b82f6'}}>handles the rest.</span>
              </h1>
              <p style={{fontSize:'.88rem',color:'#64748b',lineHeight:1.6,maxWidth:'380px',marginBottom:'18px'}}>
                Set up maintenance plans for your equipment and the platform takes care of generating the jobs on time, every time. No one has to remember. Nothing slips through.
              </p>
              <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'18px',flexWrap:'wrap'}}>
                <Link to="/contact" className="btn-p">
                  Get started free
                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                <a href="#" className="btn-s">
                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M10 8l6 4-6 4V8z"/></svg>
                  See how it works
                </a>
              </div>
              <div style={{display:'flex',gap:'24px',flexWrap:'wrap'}}>
                <div style={{display:'flex',alignItems:'flex-start',gap:'8px'}}>
                  <div style={{width:'28px',height:'28px',borderRadius:'8px',background:'rgba(59,130,246,.1)',border:'1px solid rgba(59,130,246,.2)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                    <svg width="13" height="13" fill="none" stroke="#60a5fa" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  </div>
                  <div style={{fontSize:'12px',lineHeight:1.4}}>
                    <div style={{color:'#e2e8f0',fontWeight:600}}>Auto-generated jobs</div>
                    <div style={{color:'#475569'}}>no manual creation</div>
                  </div>
                </div>
                <div style={{display:'flex',alignItems:'flex-start',gap:'8px'}}>
                  <div style={{width:'28px',height:'28px',borderRadius:'8px',background:'rgba(59,130,246,.1)',border:'1px solid rgba(59,130,246,.2)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                    <svg width="13" height="13" fill="none" stroke="#60a5fa" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                  </div>
                  <div style={{fontSize:'12px',lineHeight:1.4}}>
                    <div style={{color:'#e2e8f0',fontWeight:600}}>PM compliance tracking</div>
                    <div style={{color:'#475569'}}>see what's on time</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{position:'absolute',right:'-50px',top:'50%',transform:'translateY(-54%)',width:'74%',pointerEvents:'none',zIndex:1,WebkitMaskImage:'linear-gradient(to right,transparent 0%,rgba(0,0,0,.5) 14%,black 26%)',maskImage:'linear-gradient(to right,transparent 0%,rgba(0,0,0,.5) 14%,black 26%)'}}>
              <div style={{borderRadius:'16px',overflow:'hidden',transform:'perspective(1400px) rotateY(-8deg) rotateX(4deg)',boxShadow:'0 0 0 1px rgba(59,130,246,.5),0 0 50px rgba(59,130,246,.28),0 0 120px rgba(59,130,246,.1),0 60px 120px rgba(0,0,0,.75)'}}>
                <img src="/PreventiveMaintnanceHero.png" style={{width:'100%',display:'block'}} alt="MaintEvo Preventive Maintenance" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{background:'#080f1e',padding:'80px 0'}}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <BenefitCard iconPath={<path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>} title="Time-based & usage-based triggers" body="Set plans to trigger by date — every 30 days, every quarter, every year — or by usage threshold, like every 500 hours of operation or every 10,000 cycles. The platform supports both, and you can combine them." />
            <BenefitCard iconPath={<path d="M13 10V3L4 14h7v7l9-11h-7z"/>} title="Automatic work order generation" body="When a plan's trigger date or threshold arrives, MaintEvo creates the work order automatically — pre-filled with the tasks, parts, and assigned technician you defined in the plan. No manual creation, no delays." />
            <BenefitCard iconPath={<path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>} title="Compliance tracking" body="See at a glance how many planned jobs were completed on time versus missed. The platform tracks your PM compliance rate by asset, by department, or across the board — so you always know if your program is working." />
            <BenefitCard iconPath={<path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>} title="Easy to update" body="Change the frequency, update the task list, swap the assigned technician, or pause a plan entirely — all in a few clicks. Changes apply automatically to all future work orders generated from that plan." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{background:'rgba(59,130,246,.08)',borderTop:'1px solid rgba(59,130,246,.15)',borderBottom:'1px solid rgba(59,130,246,.15)',padding:'80px 0'}}>
        <div className="max-w-screen-xl px-6 mx-auto text-center">
          <h2 style={{fontSize:'clamp(1.8rem,3vw,2.4rem)',fontWeight:900,color:'#fff',marginBottom:'16px',letterSpacing:'-.03em'}}>Stop scheduling maintenance by hand.</h2>
          <p style={{marginBottom:'28px',color:'#94a3b8',fontSize:'1.05rem'}}>Get started with MaintEvo — no credit card required.</p>
          <Link to="/contact" className="btn-p" style={{padding:'14px 36px',fontSize:'15px'}}>Get started free</Link>
        </div>
      </section>
    </>
  );
}
