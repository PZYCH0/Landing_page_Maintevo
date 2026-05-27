import { Link } from 'react-router-dom';

const industries = [
  {
    icon: <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>,
    title: 'Manufacturing',
    desc: 'Keep production lines running. Track machine health, schedule preventive maintenance, and reduce unplanned downtime that costs you per hour.',
    bullets: ['OEE and availability tracking', 'Equipment failure rate analysis', 'Production-linked PM schedules'],
  },
  {
    icon: <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>,
    title: 'Facilities Management',
    desc: 'Manage buildings, utilities, and on-site teams from one platform. Handle reactive jobs and scheduled rounds without losing track of anything.',
    bullets: ['Multi-building asset registers', 'Compliance and inspection logs', 'Contractor and staff scheduling'],
  },
  {
    icon: <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>,
    title: 'Healthcare',
    desc: 'Medical equipment requires strict maintenance records and compliance audit trails. MaintEvo keeps everything documented and inspection-ready.',
    bullets: ['Regulatory compliance records', 'Medical device maintenance logs', 'Instant audit trail export'],
  },
  {
    icon: <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>,
    title: 'Hospitality',
    desc: 'Guest experience depends on equipment working properly. From HVAC to elevators, MaintEvo helps hotel and resort teams stay ahead of failures.',
    bullets: ['Guest-impact priority tagging', 'Room and zone asset mapping', 'Seasonal PM planning'],
  },
  {
    icon: <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>,
    title: 'Food & Beverage',
    desc: 'Equipment downtime in food production carries food safety risks. MaintEvo enforces maintenance schedules that keep lines clean and compliant.',
    bullets: ['Hygiene and sanitation checklists', 'Temperature and calibration logs', 'HACCP-aligned maintenance plans'],
  },
  {
    icon: <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>,
    title: 'Education',
    desc: 'Universities and schools run large, complex campuses. MaintEvo gives facilities teams the structure to manage every building, lab, and system.',
    bullets: ['Campus-wide asset hierarchy', 'Work order request portal for staff', 'Scheduled seasonal maintenance'],
  },
];

export default function Industries() {
  return (
    <>
      {/* Hero */}
      <section style={{background:'#050b16',paddingTop:'120px',paddingBottom:'64px'}}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div style={{fontSize:'12px',fontWeight:700,letterSpacing:'.1em',color:'#60a5fa',textTransform:'uppercase',marginBottom:'20px'}}>Industries</div>
          <h1 style={{fontSize:'clamp(2.2rem,5vw,3.4rem)',fontWeight:900,letterSpacing:'-.03em',color:'#fff',lineHeight:1.1,marginBottom:'20px'}}>
            Built for teams that can't afford<br />
            <span style={{background:'linear-gradient(135deg,#60a5fa,#818cf8)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>equipment to stop.</span>
          </h1>
          <p style={{fontSize:'1.1rem',color:'#94a3b8',lineHeight:1.8,maxWidth:'580px',margin:'0 auto 36px'}}>
            MaintEvo adapts to how your industry works — not the other way around. From factory floors to hospital wings, the platform fits.
          </p>
          <Link to="/contact" className="btn-p" style={{padding:'14px 32px',fontSize:'15px'}}>Talk to us about your industry</Link>
        </div>
      </section>

      {/* Industry cards */}
      <section style={{background:'#080f1e',padding:'80px 0'}}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map(ind => (
              <div key={ind.title} className="benefit-card">
                <div style={{width:'48px',height:'48px',borderRadius:'12px',background:'rgba(59,130,246,.1)',border:'1px solid rgba(59,130,246,.2)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'20px'}}>
                  <svg width="22" height="22" fill="none" stroke="#60a5fa" strokeWidth="1.8" viewBox="0 0 24 24">{ind.icon}</svg>
                </div>
                <h3 style={{fontSize:'1.1rem',fontWeight:700,color:'#fff',marginBottom:'10px'}}>{ind.title}</h3>
                <p style={{color:'#94a3b8',fontSize:'.92rem',lineHeight:1.7,marginBottom:'16px'}}>{ind.desc}</p>
                <ul style={{display:'flex',flexDirection:'column',gap:'6px'}}>
                  {ind.bullets.map(b => (
                    <li key={b} style={{display:'flex',alignItems:'center',gap:'8px',fontSize:'.85rem',color:'#64748b'}}>
                      <svg width="13" height="13" fill="none" stroke="#3b82f6" strokeWidth="2.5" viewBox="0 0 24 24" style={{flexShrink:0}}><path d="M5 13l4 4L19 7"/></svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{background:'rgba(59,130,246,.08)',borderTop:'1px solid rgba(59,130,246,.15)',borderBottom:'1px solid rgba(59,130,246,.15)',padding:'80px 0'}}>
        <div className="max-w-screen-xl px-6 mx-auto text-center">
          <h2 style={{fontSize:'clamp(1.8rem,3vw,2.4rem)',fontWeight:900,color:'#fff',marginBottom:'16px',letterSpacing:'-.03em'}}>Don't see your industry?</h2>
          <p style={{marginBottom:'28px',color:'#94a3b8',fontSize:'1.05rem'}}>MaintEvo works for any team that manages physical assets. Get in touch and we'll show you how.</p>
          <Link to="/contact" className="btn-p" style={{padding:'14px 36px',fontSize:'15px'}}>Get in touch</Link>
        </div>
      </section>
    </>
  );
}
