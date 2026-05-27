import { Link } from 'react-router-dom';

const features = [
  {
    stroke: '#60a5fa', bg: 'rgba(59,130,246,.1)', border: 'rgba(59,130,246,.2)',
    icon: <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>,
    title: 'Multi-site management',
    desc: 'Run dozens of facilities from one account. Each site has its own assets, teams, and work queues — while you see the full picture from the top.',
  },
  {
    stroke: '#22d3ee', bg: 'rgba(34,211,238,.08)', border: 'rgba(34,211,238,.2)',
    icon: <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>,
    title: 'SSO & advanced security',
    desc: 'Connect MaintEvo to your existing identity provider via SAML or OIDC. Enforce MFA, manage roles centrally, and meet your security requirements.',
  },
  {
    stroke: '#818cf8', bg: 'rgba(99,102,241,.08)', border: 'rgba(99,102,241,.2)',
    icon: <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>,
    title: 'API & integrations',
    desc: 'Connect MaintEvo to your ERP, EAM, or IoT stack via REST API. Push data in, pull data out, and build automated workflows across your systems.',
  },
  {
    stroke: '#4ade80', bg: 'rgba(34,197,94,.07)', border: 'rgba(34,197,94,.18)',
    icon: <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>,
    title: 'Dedicated success team',
    desc: 'A named account manager and solution engineer who know your setup. Onboarding, training, and ongoing support — not just a ticket queue.',
  },
  {
    stroke: '#fbbf24', bg: 'rgba(251,191,36,.07)', border: 'rgba(251,191,36,.18)',
    icon: <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>,
    title: 'Custom contracts & SLAs',
    desc: 'Flexible billing, data residency options, uptime guarantees, and legal terms that work for procurement and legal teams at large organizations.',
  },
  {
    stroke: '#c084fc', bg: 'rgba(168,85,247,.08)', border: 'rgba(168,85,247,.18)',
    icon: <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>,
    title: 'Private cloud deployment',
    desc: 'Need your data in your own environment? MaintEvo can be deployed on your infrastructure or in a dedicated cloud tenancy with full isolation.',
  },
];

export default function Enterprise() {
  return (
    <>
      {/* Hero */}
      <section style={{background:'#050b16',paddingTop:'120px',paddingBottom:'64px'}}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div style={{fontSize:'12px',fontWeight:700,letterSpacing:'.1em',color:'#60a5fa',textTransform:'uppercase',marginBottom:'20px'}}>Enterprise</div>
          <h1 style={{fontSize:'clamp(2.2rem,5vw,3.4rem)',fontWeight:900,letterSpacing:'-.03em',color:'#fff',lineHeight:1.1,marginBottom:'20px'}}>
            Maintenance management<br />
            <span style={{background:'linear-gradient(135deg,#60a5fa,#818cf8)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>built for scale.</span>
          </h1>
          <p style={{fontSize:'1.1rem',color:'#94a3b8',lineHeight:1.8,maxWidth:'580px',margin:'0 auto 36px'}}>
            Multi-site operations, custom integrations, dedicated support, and the security controls your IT team requires. MaintEvo enterprise is built for organizations that can't afford gaps.
          </p>
          <div style={{display:'flex',gap:'12px',justifyContent:'center',flexWrap:'wrap'}}>
            <Link to="/contact" className="btn-p" style={{padding:'14px 32px',fontSize:'15px'}}>Talk to sales</Link>
            <Link to="/contact" className="btn-s" style={{padding:'14px 28px',fontSize:'15px'}}>Request a demo</Link>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section style={{background:'#080f1e',padding:'80px 0'}}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 style={{fontSize:'clamp(1.6rem,3vw,2.2rem)',fontWeight:900,color:'#fff',letterSpacing:'-.03em',marginBottom:'12px'}}>Everything a large organization needs</h2>
            <p style={{color:'#94a3b8',fontSize:'1rem',maxWidth:'500px',margin:'0 auto'}}>On top of the full MaintEvo platform, enterprise customers get these capabilities.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => (
              <div key={f.title} className="benefit-card">
                <div style={{width:'48px',height:'48px',borderRadius:'12px',background:f.bg,border:`1px solid ${f.border}`,display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'20px'}}>
                  <svg width="22" height="22" fill="none" stroke={f.stroke} strokeWidth="1.8" viewBox="0 0 24 24">{f.icon}</svg>
                </div>
                <h3 style={{fontSize:'1.1rem',fontWeight:700,color:'#fff',marginBottom:'10px'}}>{f.title}</h3>
                <p style={{color:'#94a3b8',fontSize:'.92rem',lineHeight:1.7}}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <section style={{background:'#050b16',padding:'60px 0',borderTop:'1px solid rgba(255,255,255,.06)'}}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p style={{fontSize:'.85rem',fontWeight:600,letterSpacing:'.08em',color:'#475569',textTransform:'uppercase',marginBottom:'36px'}}>Trusted by maintenance teams at</p>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'48px',flexWrap:'wrap'}}>
            {['Large Manufacturing Co.','Global FM Group','Regional Health Network','Hotel & Resort Chain','Food Processing Ltd.'].map(name => (
              <span key={name} style={{fontSize:'.95rem',fontWeight:600,color:'#334155'}}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{background:'rgba(59,130,246,.08)',borderTop:'1px solid rgba(59,130,246,.15)',borderBottom:'1px solid rgba(59,130,246,.15)',padding:'80px 0'}}>
        <div className="max-w-screen-xl px-6 mx-auto text-center">
          <h2 style={{fontSize:'clamp(1.8rem,3vw,2.4rem)',fontWeight:900,color:'#fff',marginBottom:'16px',letterSpacing:'-.03em'}}>Ready to see the enterprise plan?</h2>
          <p style={{marginBottom:'28px',color:'#94a3b8',fontSize:'1.05rem'}}>Our team will walk you through the platform and build a plan around your specific needs.</p>
          <Link to="/contact" className="btn-p" style={{padding:'14px 36px',fontSize:'15px'}}>Talk to sales</Link>
        </div>
      </section>
    </>
  );
}
