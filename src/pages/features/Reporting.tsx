import { Link } from 'react-router-dom';

export default function Reporting() {
  return (
    <>
      {/* Hero */}
      <section className="hero-section hero-centered" style={{background:'#050b16',padding:'140px 0 140px',position:'relative',overflow:'hidden'}}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Link to="/" style={{display:'inline-flex',alignItems:'center',gap:'6px',fontSize:'13px',color:'#60a5fa',textDecoration:'none',marginBottom:'24px',fontWeight:500}}>
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to all features
          </Link>
          <div style={{fontSize:'12px',fontWeight:700,letterSpacing:'.1em',color:'#60a5fa',textTransform:'uppercase',marginBottom:'24px'}}>Reporting &amp; Audits</div>
          <h1 style={{fontSize:'clamp(2.2rem,5vw,3.4rem)',fontWeight:900,letterSpacing:'-.03em',color:'#fff',lineHeight:1.1,marginBottom:'24px'}}>
            Your maintenance record,<br /><span style={{background:'linear-gradient(135deg,#60a5fa,#818cf8)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>always ready.</span>
          </h1>
          <p style={{fontSize:'1.1rem',color:'#94a3b8',lineHeight:1.8,maxWidth:'620px',margin:'0 auto 36px'}}>
            Every work order closed, every part used, every KPI shift — MaintEvo records it automatically. When you need to report, export, or review, the data is already there.
          </p>
          <Link to="/contact" className="btn-p" style={{padding:'14px 32px',fontSize:'15px'}}>Get started free</Link>
        </div>
        <div className="hero-fade" style={{position:'absolute',bottom:0,left:0,right:0,zIndex:10,pointerEvents:'none'}} />
      </section>

      {/* Benefit cards */}
      <section style={{background:'#080f1e',padding:'80px 0'}}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">

            <div className="benefit-card">
              <div style={{width:'48px',height:'48px',borderRadius:'12px',background:'rgba(59,130,246,.1)',border:'1px solid rgba(59,130,246,.2)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'20px'}}>
                <svg width="22" height="22" fill="none" stroke="#60a5fa" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              </div>
              <h3 style={{fontSize:'1.1rem',fontWeight:700,color:'#fff',marginBottom:'10px'}}>PDF report on every closed job</h3>
              <p style={{color:'#94a3b8',fontSize:'.92rem',lineHeight:1.7}}>When a technician closes a work order, MaintEvo generates a PDF report automatically. It includes what was done, who did it, how long it took, and which parts were used — ready to save, share, or file.</p>
            </div>

            <div className="benefit-card">
              <div style={{width:'48px',height:'48px',borderRadius:'12px',background:'rgba(34,197,94,.08)',border:'1px solid rgba(34,197,94,.18)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'20px'}}>
                <svg width="22" height="22" fill="none" stroke="#4ade80" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
              </div>
              <h3 style={{fontSize:'1.1rem',fontWeight:700,color:'#fff',marginBottom:'10px'}}>KPI history over time</h3>
              <p style={{color:'#94a3b8',fontSize:'.92rem',lineHeight:1.7}}>Your KPIs don't just show the current moment — they build a history as your team works. See how repair times, availability, and failure rates have changed over weeks and months, without compiling anything manually.</p>
            </div>

            <div className="benefit-card">
              <div style={{width:'48px',height:'48px',borderRadius:'12px',background:'rgba(251,191,36,.07)',border:'1px solid rgba(251,191,36,.18)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'20px'}}>
                <svg width="22" height="22" fill="none" stroke="#fbbf24" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
              </div>
              <h3 style={{fontSize:'1.1rem',fontWeight:700,color:'#fff',marginBottom:'10px'}}>Full audit trail</h3>
              <p style={{color:'#94a3b8',fontSize:'.92rem',lineHeight:1.7}}>Every status change, assignment, comment, and update is logged against the work order with a timestamp and the name of the person who made it. Nothing is anonymous, nothing disappears.</p>
            </div>

            <div className="benefit-card">
              <div style={{width:'48px',height:'48px',borderRadius:'12px',background:'rgba(168,85,247,.08)',border:'1px solid rgba(168,85,247,.18)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'20px'}}>
                <svg width="22" height="22" fill="none" stroke="#c084fc" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              </div>
              <h3 style={{fontSize:'1.1rem',fontWeight:700,color:'#fff',marginBottom:'10px'}}>Export anytime</h3>
              <p style={{color:'#94a3b8',fontSize:'.92rem',lineHeight:1.7}}>Need to share data with management, compliance teams, or external auditors? Export work orders, maintenance histories, and KPI summaries whenever you need them — no data locked inside the platform.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Audit trail detail */}
      <section style={{background:'#050b16',padding:'80px 0'}}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 style={{fontSize:'clamp(1.6rem,3vw,2.2rem)',fontWeight:900,color:'#fff',letterSpacing:'-.03em',marginBottom:'12px'}}>What gets recorded — automatically</h2>
            <p style={{color:'#94a3b8',fontSize:'1rem',maxWidth:'520px',margin:'0 auto'}}>You don't have to log anything manually. MaintEvo captures every event as your team works.</p>
          </div>
          <div className="audit-wrap" style={{background:'rgba(255,255,255,.03)',border:'1px solid rgba(255,255,255,.07)',borderRadius:'16px',padding:'8px 32px'}}>
            {[
              { bg:'rgba(59,130,246,.12)',border:'rgba(59,130,246,.2)',stroke:'#60a5fa', icon:<path d="M12 4v16m8-8H4"/>, title:'Work order created', sub:'Who submitted it, which asset, what the problem was, and when it came in.' },
              { bg:'rgba(34,197,94,.08)',border:'rgba(34,197,94,.16)',stroke:'#4ade80', icon:<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>, title:'Assigned to a technician', sub:'Which manager assigned it, to whom, and at what time.' },
              { bg:'rgba(251,191,36,.07)',border:'rgba(251,191,36,.16)',stroke:'#fbbf24', icon:<><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>, title:'Time tracked on the job', sub:'Every start and stop of the timer, logged against the technician who ran it.' },
              { bg:'rgba(168,85,247,.08)',border:'rgba(168,85,247,.16)',stroke:'#c084fc', icon:<path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>, title:'Parts consumed', sub:'Which parts were used, how many, and the inventory adjustment that followed.' },
              { bg:'rgba(34,211,238,.07)',border:'rgba(34,211,238,.16)',stroke:'#22d3ee', icon:<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>, title:'Job closed with a report', sub:'Completion notes, closing timestamp, and the auto-generated PDF — all stored against the work order.' },
            ].map((row, i, arr) => (
              <div key={row.title} style={{display:'flex',alignItems:'flex-start',gap:'16px',padding:'18px 0',borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,.05)' : 'none'}}>
                <div style={{width:'36px',height:'36px',flexShrink:0,borderRadius:'8px',display:'flex',alignItems:'center',justifyContent:'center',background:row.bg,border:`1px solid ${row.border}`}}>
                  <svg width="16" height="16" fill="none" stroke={row.stroke} strokeWidth="2" viewBox="0 0 24 24">{row.icon}</svg>
                </div>
                <div>
                  <div style={{fontSize:'.95rem',fontWeight:600,color:'#fff',marginBottom:'4px'}}>{row.title}</div>
                  <div style={{fontSize:'.88rem',color:'#64748b'}}>{row.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{background:'rgba(59,130,246,.08)',borderTop:'1px solid rgba(59,130,246,.15)',borderBottom:'1px solid rgba(59,130,246,.15)',padding:'80px 0'}}>
        <div className="max-w-screen-xl px-6 mx-auto text-center">
          <h2 style={{fontSize:'clamp(1.8rem,3vw,2.4rem)',fontWeight:900,color:'#fff',marginBottom:'16px',letterSpacing:'-.03em'}}>Stop building reports. Start reading them.</h2>
          <p style={{marginBottom:'28px',color:'#94a3b8',fontSize:'1.05rem'}}>Get started with MaintEvo — no credit card required.</p>
          <Link to="/contact" className="btn-p" style={{padding:'14px 36px',fontSize:'15px'}}>Get started free</Link>
        </div>
      </section>
    </>
  );
}
