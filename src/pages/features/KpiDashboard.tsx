import { Link } from 'react-router-dom';

const kpis = [
  { label: 'Repair Time', q: 'How long do repairs take?', body: 'The average time from when a job is opened to when it\'s closed. Tracked automatically using work order timers. If this number is going up, your team is getting slower — or jobs are getting harder.' },
  { label: 'Time Between Failures', q: 'How often does each asset fail?', body: 'The average time an asset runs between one failure and the next. A low number means frequent failures — a useful signal for replacement decisions.' },
  { label: 'Response Time', q: 'How fast does your team respond?', body: 'The time between when a problem is reported and when work actually starts. Useful for spotting bottlenecks in your approval or assignment process.' },
  { label: 'Availability', q: 'What percentage of the time is each asset actually running?', body: 'Calculated from repair time and time between failures. The higher this number, the more reliable your equipment is.' },
  { label: 'PM Compliance', q: 'Are planned jobs being done on time?', body: 'The percentage of scheduled preventive maintenance jobs that were completed within their target window. A direct measure of how well your PM program is being followed.' },
  { label: 'Downtime', q: 'How much time has each asset been out of service?', body: 'Cumulative downtime per asset, tracked from job open to job close. Useful for identifying which equipment is costing you the most productive time.' },
  { label: 'Failure Rate', q: 'How many failures per 1,000 hours of operation?', body: 'A normalized measure of how failure-prone an asset is over time. Useful when comparing equipment of different ages or types.' },
];

const bullets = [
  '7 reliability metrics calculated automatically',
  'No spreadsheets or manual data entry',
  "Real-time updates from your team's work orders",
];

export default function KpiDashboard() {
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
              <Link to="/" style={{display:'inline-flex',alignItems:'center',gap:'6px',fontSize:'12px',color:'#60a5fa',textDecoration:'none',marginBottom:'20px',fontWeight:500,background:'rgba(59,130,246,.08)',border:'1px solid rgba(59,130,246,.18)',borderRadius:'100px',padding:'5px 14px'}}>
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                Back to all features
              </Link>
              <div style={{fontSize:'12px',fontWeight:700,letterSpacing:'.1em',color:'#60a5fa',textTransform:'uppercase',marginBottom:'18px'}}>KPI Dashboard</div>
              <h1 style={{fontSize:'clamp(2rem,3.6vw,3.2rem)',fontWeight:900,lineHeight:1.06,letterSpacing:'-0.03em',marginBottom:'14px',color:'#fff'}}>
                Seven metrics.<br />Zero manual work.<br /><span style={{background:'linear-gradient(135deg,#60a5fa,#818cf8)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>Always up to date.</span>
              </h1>
              <p style={{fontSize:'.88rem',color:'#64748b',lineHeight:1.6,maxWidth:'380px',marginBottom:'18px'}}>
                Every KPI in MaintEvo — availability, MTTR, MTBF, downtime — updates automatically as your team works. Open the dashboard and the picture is already there.
              </p>
              <div style={{display:'flex',gap:'12px',flexWrap:'wrap',marginBottom:'28px'}}>
                <Link to="/contact" className="btn-p" style={{padding:'11px 24px',fontSize:'13.5px'}}>Get started free</Link>
                <Link to="/" className="btn-s" style={{padding:'11px 22px',fontSize:'13.5px'}}>See all features</Link>
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
                {bullets.map(b => (
                  <div key={b} style={{display:'flex',alignItems:'center',gap:'8px',fontSize:'12px',color:'#94a3b8'}}>
                    <div style={{width:'18px',height:'18px',borderRadius:'5px',background:'rgba(59,130,246,.15)',border:'1px solid rgba(59,130,246,.25)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                      <svg width="10" height="10" fill="none" stroke="#60a5fa" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                    </div>
                    {b}
                  </div>
                ))}
              </div>
            </div>

            <div style={{position:'absolute',right:'-50px',top:'50%',transform:'translateY(-54%)',width:'74%',pointerEvents:'none',zIndex:1,WebkitMaskImage:'linear-gradient(to right,transparent 0%,rgba(0,0,0,.5) 14%,black 26%)',maskImage:'linear-gradient(to right,transparent 0%,rgba(0,0,0,.5) 14%,black 26%)'}}>
              <div style={{borderRadius:'16px',overflow:'hidden',transform:'perspective(1400px) rotateY(-8deg) rotateX(4deg)',boxShadow:'0 0 0 1px rgba(59,130,246,.5),0 0 50px rgba(59,130,246,.28),0 0 120px rgba(59,130,246,.1),0 60px 120px rgba(0,0,0,.75)'}}>
                <img src="/images/kpi-dashboard-hero.jpg" style={{width:'100%',display:'block'}} alt="KPI dashboard with real-time machine metrics" />
              </div>
            </div>

          </div>
        </div>
        <div className="hero-fade" style={{position:'absolute',bottom:0,left:0,right:0,zIndex:10,pointerEvents:'none'}} />
      </section>

      {/* 7 metrics */}
      <section style={{background:'#080f1e',padding:'80px 0'}}>
        <div style={{maxWidth:'860px',margin:'0 auto',padding:'0 24px'}}>
          <div style={{textAlign:'center',marginBottom:'48px'}}>
            <div style={{display:'inline-flex',alignItems:'center',gap:'8px',background:'rgba(59,130,246,.08)',border:'1px solid rgba(59,130,246,.18)',borderRadius:'100px',padding:'5px 16px',fontSize:'12px',fontWeight:600,color:'#60a5fa',letterSpacing:'.06em',textTransform:'uppercase',marginBottom:'16px'}}>7 Metrics</div>
            <h2 style={{fontSize:'clamp(1.5rem,3vw,2rem)',fontWeight:800,color:'#fff',marginBottom:'10px',letterSpacing:'-.02em'}}>The 7 metrics, in plain language</h2>
            <p style={{color:'#475569',fontSize:'.9rem'}}>All calculated automatically — you don't touch any of them.</p>
          </div>

          <div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
            {kpis.map((kpi, i) => (
              <div key={kpi.label} style={{
                display:'flex',alignItems:'flex-start',gap:'20px',
                background:'rgba(255,255,255,.025)',
                border:'1px solid rgba(255,255,255,.07)',
                borderLeft:'3px solid rgba(59,130,246,.5)',
                borderRadius:'12px',
                padding:'22px 24px',
                transition:'border-color .2s,background .2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(59,130,246,.06)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(59,130,246,.35)';
                (e.currentTarget as HTMLDivElement).style.borderLeftColor = '#3b82f6';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,.025)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,.07)';
                (e.currentTarget as HTMLDivElement).style.borderLeftColor = 'rgba(59,130,246,.5)';
              }}>
                <div style={{flexShrink:0,width:'32px',height:'32px',borderRadius:'8px',background:'rgba(59,130,246,.12)',border:'1px solid rgba(59,130,246,.2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'12px',fontWeight:700,color:'#60a5fa',marginTop:'1px'}}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{flex:1}}>
                  <div style={{display:'flex',alignItems:'baseline',gap:'10px',marginBottom:'6px',flexWrap:'wrap'}}>
                    <span style={{fontSize:'13px',fontWeight:700,color:'#93c5fd',letterSpacing:'.02em'}}>{kpi.label}</span>
                    <span style={{fontSize:'.9rem',fontWeight:600,color:'#e2e8f0'}}>{kpi.q}</span>
                  </div>
                  <p style={{color:'#475569',fontSize:'.85rem',lineHeight:1.65,margin:0}}>{kpi.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{background:'rgba(59,130,246,.08)',borderTop:'1px solid rgba(59,130,246,.15)',borderBottom:'1px solid rgba(59,130,246,.15)',padding:'80px 0'}}>
        <div className="max-w-screen-xl px-6 mx-auto text-center">
          <h2 style={{fontSize:'clamp(1.8rem,3vw,2.4rem)',fontWeight:900,color:'#fff',marginBottom:'16px',letterSpacing:'-.03em'}}>Stop calculating metrics by hand.</h2>
          <p style={{marginBottom:'28px',color:'#94a3b8',fontSize:'1.05rem'}}>Get started with MaintEvo — no credit card required.</p>
          <Link to="/contact" className="btn-p" style={{padding:'14px 36px',fontSize:'15px'}}>Get started free</Link>
        </div>
      </section>
    </>
  );
}
