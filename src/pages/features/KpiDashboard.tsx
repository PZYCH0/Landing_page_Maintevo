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

export default function KpiDashboard() {
  return (
    <>
      {/* Hero */}
      <section style={{background:'#050b16',padding:'140px 0 80px'}}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Link to="/" style={{display:'inline-flex',alignItems:'center',gap:'6px',fontSize:'13px',color:'#60a5fa',textDecoration:'none',marginBottom:'24px',fontWeight:500}}>
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to all features
          </Link>
          <div style={{fontSize:'12px',fontWeight:700,letterSpacing:'.1em',color:'#60a5fa',textTransform:'uppercase',marginBottom:'24px'}}>KPI Dashboard</div>
          <h1 style={{fontSize:'clamp(2.2rem,5vw,3.4rem)',fontWeight:900,letterSpacing:'-.03em',color:'#fff',lineHeight:1.1,marginBottom:'24px'}}>
            Seven metrics that tell you<br /><span style={{background:'linear-gradient(135deg,#60a5fa,#818cf8)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>how your operations are doing.</span>
          </h1>
          <p style={{fontSize:'1.1rem',color:'#94a3b8',lineHeight:1.8,maxWidth:'600px',margin:'0 auto 36px'}}>
            Every performance number in MaintEvo updates automatically as your team works. No formulas, no spreadsheets, no end-of-month data entry. Open the dashboard and the picture is already there.
          </p>
          <Link to="/contact" className="btn-p" style={{padding:'14px 32px',fontSize:'15px'}}>Get started free</Link>
        </div>
      </section>

      {/* 7 metrics */}
      <section style={{background:'#080f1e',padding:'80px 0'}}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 style={{fontSize:'1.4rem',fontWeight:800,color:'#fff',marginBottom:'8px',textAlign:'center'}}>The 7 metrics, in plain language</h2>
          <p style={{color:'#64748b',textAlign:'center',fontSize:'.9rem',marginBottom:'40px'}}>All of these are calculated automatically. You don't touch any of them.</p>

          {kpis.map((kpi, i) => (
            <div key={kpi.label} className="kpi-row" style={{display:'flex',alignItems:'flex-start',gap:'20px',padding:'24px 0',borderBottom: i < kpis.length - 1 ? '1px solid rgba(255,255,255,.06)' : 'none'}}>
              <div className="kpi-label" style={{fontSize:'13px',fontWeight:600,color:'#60a5fa',minWidth:'120px',paddingTop:'2px'}}>{kpi.label}</div>
              <div>
                <div style={{fontSize:'.95rem',fontWeight:600,color:'#fff',marginBottom:'4px'}}>{kpi.q}</div>
                <p style={{color:'#64748b',fontSize:'.88rem',lineHeight:1.6}}>{kpi.body}</p>
              </div>
            </div>
          ))}
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
