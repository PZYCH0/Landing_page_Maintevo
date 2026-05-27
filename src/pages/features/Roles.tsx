import { Link } from 'react-router-dom';

const CheckIcon = () => (
  <svg className="perm-check" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
  </svg>
);

export default function Roles() {
  return (
    <>
      {/* Hero */}
      <section style={{background:'#050b16',padding:'140px 0 80px'}}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Link to="/" style={{display:'inline-flex',alignItems:'center',gap:'6px',fontSize:'13px',color:'#60a5fa',textDecoration:'none',marginBottom:'24px',fontWeight:500}}>
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to all features
          </Link>
          <div style={{fontSize:'12px',fontWeight:700,letterSpacing:'.1em',color:'#60a5fa',textTransform:'uppercase',marginBottom:'24px'}}>Role-Based Access</div>
          <h1 style={{fontSize:'clamp(2.2rem,5vw,3.4rem)',fontWeight:900,letterSpacing:'-.03em',color:'#fff',lineHeight:1.1,marginBottom:'24px'}}>
            Everyone gets what they need.<br /><span style={{background:'linear-gradient(135deg,#60a5fa,#818cf8)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>Nothing more.</span>
          </h1>
          <p style={{fontSize:'1.1rem',color:'#94a3b8',lineHeight:1.8,maxWidth:'600px',margin:'0 auto 36px'}}>
            MaintEvo has three distinct roles — each with a workspace designed for how that person actually works. Managers see everything. Technicians see their jobs. Requesters see their submissions.
          </p>
          <Link to="/contact" className="btn-p" style={{padding:'14px 32px',fontSize:'15px'}}>Get started free</Link>
        </div>
      </section>

      {/* Role cards */}
      <section style={{background:'#080f1e',padding:'80px 0'}}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">

            {/* Manager */}
            <div className="role-card" style={{background:'rgba(59,130,246,.06)',borderColor:'rgba(59,130,246,.2)'}}>
              <div style={{width:'48px',height:'48px',borderRadius:'12px',background:'rgba(59,130,246,.15)',border:'1px solid rgba(59,130,246,.3)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'20px'}}>
                <svg width="22" height="22" fill="none" stroke="#60a5fa" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <div style={{fontSize:'11px',fontWeight:700,color:'#60a5fa',letterSpacing:'.08em',marginBottom:'8px'}}>MANAGER</div>
              <h3 style={{fontSize:'1.15rem',fontWeight:700,color:'#fff',marginBottom:'12px'}}>Full visibility &amp; control</h3>
              <p style={{color:'#94a3b8',fontSize:'.9rem',lineHeight:1.6,marginBottom:'20px'}}>See everything happening across the team. Approve requests, create and assign jobs, monitor open work, track KPIs, and manage assets, inventory, and maintenance plans.</p>
              <div>
                <div className="perm-item"><CheckIcon /> Review &amp; approve requests</div>
                <div className="perm-item"><CheckIcon /> Create &amp; assign work orders</div>
                <div className="perm-item"><CheckIcon /> Access KPI dashboard</div>
                <div className="perm-item"><CheckIcon /> Manage assets &amp; inventory</div>
                <div className="perm-item"><CheckIcon /> Configure PM plans</div>
              </div>
            </div>

            {/* Technician */}
            <div className="role-card" style={{background:'rgba(34,211,238,.04)',borderColor:'rgba(34,211,238,.18)'}}>
              <div style={{width:'48px',height:'48px',borderRadius:'12px',background:'rgba(34,211,238,.1)',border:'1px solid rgba(34,211,238,.25)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'20px'}}>
                <svg width="22" height="22" fill="none" stroke="#22d3ee" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <div style={{fontSize:'11px',fontWeight:700,color:'#22d3ee',letterSpacing:'.08em',marginBottom:'8px'}}>TECHNICIAN</div>
              <h3 style={{fontSize:'1.15rem',fontWeight:700,color:'#fff',marginBottom:'12px'}}>Focused on the job at hand</h3>
              <p style={{color:'#94a3b8',fontSize:'.9rem',lineHeight:1.6,marginBottom:'20px'}}>See only the jobs assigned to you. Work through the task list, start and stop the timer, log the parts you use, and close the job when it's done. Simple and distraction-free.</p>
              <div>
                <div className="perm-item"><CheckIcon /> View assigned jobs</div>
                <div className="perm-item"><CheckIcon /> Start/stop the job timer</div>
                <div className="perm-item"><CheckIcon /> Complete task checklists</div>
                <div className="perm-item"><CheckIcon /> Log parts consumed</div>
                <div className="perm-item"><CheckIcon /> Close &amp; generate report</div>
              </div>
            </div>

            {/* Requester */}
            <div className="role-card" style={{background:'rgba(99,102,241,.05)',borderColor:'rgba(99,102,241,.2)'}}>
              <div style={{width:'48px',height:'48px',borderRadius:'12px',background:'rgba(99,102,241,.12)',border:'1px solid rgba(99,102,241,.25)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'20px'}}>
                <svg width="22" height="22" fill="none" stroke="#818cf8" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
              </div>
              <div style={{fontSize:'11px',fontWeight:700,color:'#818cf8',letterSpacing:'.08em',marginBottom:'8px'}}>REQUESTER</div>
              <h3 style={{fontSize:'1.15rem',fontWeight:700,color:'#fff',marginBottom:'12px'}}>Report problems, track status</h3>
              <p style={{color:'#94a3b8',fontSize:'.9rem',lineHeight:1.6,marginBottom:'20px'}}>Anyone in the organization can submit a maintenance request. Describe the problem, link it to the asset, and track what's happening — without accessing internal workflows or sensitive data.</p>
              <div>
                <div className="perm-item"><CheckIcon /> Submit maintenance requests</div>
                <div className="perm-item"><CheckIcon /> Track submission status</div>
                <div className="perm-item"><CheckIcon /> Add descriptions &amp; attachments</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{background:'rgba(59,130,246,.08)',borderTop:'1px solid rgba(59,130,246,.15)',borderBottom:'1px solid rgba(59,130,246,.15)',padding:'80px 0'}}>
        <div className="max-w-screen-xl px-6 mx-auto text-center">
          <h2 style={{fontSize:'clamp(1.8rem,3vw,2.4rem)',fontWeight:900,color:'#fff',marginBottom:'16px',letterSpacing:'-.03em'}}>Give your whole team the right tools.</h2>
          <p style={{marginBottom:'28px',color:'#94a3b8',fontSize:'1.05rem'}}>Get started with MaintEvo — no credit card required.</p>
          <Link to="/contact" className="btn-p" style={{padding:'14px 36px',fontSize:'15px'}}>Get started free</Link>
        </div>
      </section>
    </>
  );
}
