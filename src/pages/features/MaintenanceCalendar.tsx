import { Link } from 'react-router-dom';

export default function MaintenanceCalendar() {
  return (
    <>
      {/* Hero */}
      <section style={{background:'#050b16',padding:'140px 0 80px'}}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Link to="/" style={{display:'inline-flex',alignItems:'center',gap:'6px',fontSize:'13px',color:'#60a5fa',textDecoration:'none',marginBottom:'24px',fontWeight:500}}>
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to all features
          </Link>
          <div style={{fontSize:'12px',fontWeight:700,letterSpacing:'.1em',color:'#60a5fa',textTransform:'uppercase',marginBottom:'24px'}}>Maintenance Calendar</div>
          <h1 style={{fontSize:'clamp(2.2rem,5vw,3.4rem)',fontWeight:900,letterSpacing:'-.03em',color:'#fff',lineHeight:1.1,marginBottom:'24px'}}>
            Your full schedule<br /><span style={{background:'linear-gradient(135deg,#60a5fa,#818cf8)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>in one view.</span>
          </h1>
          <p style={{fontSize:'1.1rem',color:'#94a3b8',lineHeight:1.8,maxWidth:'600px',margin:'0 auto 36px'}}>
            Planned jobs, reactive jobs, and preventive maintenance — all laid out together on a single calendar. See what's coming, spot what's in conflict, and plan your team's week before it starts.
          </p>
          <Link to="/contact" className="btn-p" style={{padding:'14px 32px',fontSize:'15px'}}>Get started free</Link>
        </div>
      </section>

      {/* Benefit cards */}
      <section style={{background:'#080f1e',padding:'80px 0'}}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="benefit-card">
              <div style={{width:'48px',height:'48px',borderRadius:'12px',background:'rgba(59,130,246,.1)',border:'1px solid rgba(59,130,246,.2)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'20px'}}>
                <svg width="22" height="22" fill="none" stroke="#60a5fa" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              </div>
              <h3 style={{fontSize:'1.1rem',fontWeight:700,color:'#fff',marginBottom:'12px'}}>Everything in one view</h3>
              <p style={{color:'#94a3b8',lineHeight:1.7,fontSize:'.95rem'}}>Planned maintenance, active work orders, and upcoming scheduled jobs — all on one calendar. Switch between day, week, and month views depending on how far ahead you want to look.</p>
            </div>

            <div className="benefit-card">
              <div style={{width:'48px',height:'48px',borderRadius:'12px',background:'rgba(59,130,246,.1)',border:'1px solid rgba(59,130,246,.2)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'20px'}}>
                <svg width="22" height="22" fill="none" stroke="#60a5fa" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
              </div>
              <h3 style={{fontSize:'1.1rem',fontWeight:700,color:'#fff',marginBottom:'12px'}}>Spot scheduling conflicts</h3>
              <p style={{color:'#94a3b8',lineHeight:1.7,fontSize:'.95rem'}}>See immediately when too many jobs land on the same day, or when a technician is double-booked. Move things around before the day starts — not during it.</p>
            </div>

            <div className="benefit-card">
              <div style={{width:'48px',height:'48px',borderRadius:'12px',background:'rgba(59,130,246,.1)',border:'1px solid rgba(59,130,246,.2)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'20px'}}>
                <svg width="22" height="22" fill="none" stroke="#60a5fa" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
              </div>
              <h3 style={{fontSize:'1.1rem',fontWeight:700,color:'#fff',marginBottom:'12px'}}>Plan weeks ahead</h3>
              <p style={{color:'#94a3b8',lineHeight:1.7,fontSize:'.95rem'}}>Look weeks or months into the future to understand your upcoming workload. Useful for planning staff capacity, ordering parts in advance, and making sure critical jobs don't pile up unexpectedly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{background:'rgba(59,130,246,.08)',borderTop:'1px solid rgba(59,130,246,.15)',borderBottom:'1px solid rgba(59,130,246,.15)',padding:'80px 0'}}>
        <div className="max-w-screen-xl px-6 mx-auto text-center">
          <h2 style={{fontSize:'clamp(1.8rem,3vw,2.4rem)',fontWeight:900,color:'#fff',marginBottom:'16px',letterSpacing:'-.03em'}}>See your maintenance schedule clearly.</h2>
          <p style={{marginBottom:'28px',color:'#94a3b8',fontSize:'1.05rem'}}>Get started with MaintEvo — no credit card required.</p>
          <Link to="/contact" className="btn-p" style={{padding:'14px 36px',fontSize:'15px'}}>Get started free</Link>
        </div>
      </section>
    </>
  );
}
