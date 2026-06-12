import { Link } from 'react-router-dom';

const guides = [
  {
    tag: 'Guide', tagColor: '#60a5fa', tagBg: 'rgba(59,130,246,.1)',
    title: 'Getting started with MaintEvo',
    desc: 'Set up your account, create your first assets, and log your first work order in under 30 minutes.',
    time: '8 min read',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
  },
  {
    tag: 'Guide', tagColor: '#60a5fa', tagBg: 'rgba(59,130,246,.1)',
    title: 'Setting up preventive maintenance schedules',
    desc: 'Learn how to configure recurring PM plans by date or meter reading so nothing gets missed.',
    time: '12 min read',
    img: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80',
  },
  {
    tag: 'Guide', tagColor: '#60a5fa', tagBg: 'rgba(59,130,246,.1)',
    title: 'Configuring your team roles and permissions',
    desc: 'Understand the Manager, Technician, and Requester roles and how to assign them correctly.',
    time: '6 min read',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
  },
  {
    tag: 'Case Study', tagColor: '#4ade80', tagBg: 'rgba(34,197,94,.08)',
    title: 'How a 200-person manufacturer cut unplanned downtime by 40%',
    desc: 'A mid-size automotive parts manufacturer moved from spreadsheets to MaintEvo and tracked the results over 12 months.',
    time: '5 min read',
    img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80',
  },
  {
    tag: 'Case Study', tagColor: '#4ade80', tagBg: 'rgba(34,197,94,.08)',
    title: 'Facilities team managing 14 buildings from one dashboard',
    desc: 'A university facilities department consolidated asset management and reduced work order response time by half.',
    time: '4 min read',
    img: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80',
  },
  {
    tag: 'Webinar', tagColor: '#c084fc', tagBg: 'rgba(168,85,247,.08)',
    title: 'Live demo: Work orders from request to close',
    desc: 'A 45-minute walkthrough of the full work order lifecycle — creation, assignment, execution, and closure.',
    time: '45 min video',
    img: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80',
  },
];

const helpLinks = [
  { icon: <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>, title: 'Documentation', desc: 'Full reference for every feature, setting, and API endpoint.', img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80' },
  { icon: <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>, title: 'Help Center', desc: 'Step-by-step answers to the most common questions.', img: 'https://images.unsplash.com/photo-1553775282-20af80779df7?w=800&q=80' },
  { icon: <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>, title: 'API Reference', desc: 'Integrate MaintEvo with your existing systems using the REST API.', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80' },
  { icon: <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>, title: 'Changelog', desc: 'Every new feature, improvement, and fix — updated with every release.', img: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80' },
];

export default function Resources() {
  return (
    <>
      {/* Hero */}
      <section style={{background:'#050b16',paddingTop:'120px',paddingBottom:'64px'}}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div style={{fontSize:'12px',fontWeight:700,letterSpacing:'.1em',color:'#60a5fa',textTransform:'uppercase',marginBottom:'20px'}}>Resources</div>
          <h1 style={{fontSize:'clamp(2.2rem,5vw,3.4rem)',fontWeight:900,letterSpacing:'-.03em',color:'#fff',lineHeight:1.1,marginBottom:'20px'}}>
            Everything you need to<br />
            <span style={{background:'linear-gradient(135deg,#60a5fa,#818cf8)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>get the most out of MaintEvo.</span>
          </h1>
          <p style={{fontSize:'1.1rem',color:'#94a3b8',lineHeight:1.8,maxWidth:'560px',margin:'0 auto'}}>
            Guides, case studies, documentation, and videos to help your team hit the ground running.
          </p>
        </div>
      </section>

      {/* Quick links */}
      <section style={{background:'#080f1e',padding:'64px 0'}}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {helpLinks.map(l => (
              <div key={l.title} className="benefit-card" style={{cursor:'pointer'}}>
                <div className="absolute inset-0 bg-cover bg-center z-0" style={{backgroundImage:`url('${l.img}')`}}></div>
                <div className="feat-overlay absolute inset-0 bg-[#0f172a]/90 z-0"></div>
                <div className="relative z-10">
                  <div style={{width:'44px',height:'44px',borderRadius:'12px',background:'rgba(59,130,246,.1)',border:'1px solid rgba(59,130,246,.2)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'16px'}}>
                    <svg width="20" height="20" fill="none" stroke="#60a5fa" strokeWidth="1.8" viewBox="0 0 24 24">{l.icon}</svg>
                  </div>
                  <h3 style={{fontSize:'1rem',fontWeight:700,color:'#fff',marginBottom:'8px'}}>{l.title}</h3>
                  <p style={{color:'#64748b',fontSize:'.88rem',lineHeight:1.6}}>{l.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides & case studies */}
      <section style={{background:'#050b16',padding:'80px 0'}}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 style={{fontSize:'clamp(1.6rem,3vw,2.2rem)',fontWeight:900,color:'#fff',letterSpacing:'-.03em',marginBottom:'12px'}}>Guides & case studies</h2>
            <p style={{color:'#94a3b8',fontSize:'1rem',maxWidth:'480px',margin:'0 auto'}}>Learn from teams that have already made the transition to structured maintenance.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map(g => (
              <div key={g.title} style={{position:'relative',overflow:'hidden',background:'rgba(255,255,255,.03)',border:'1px solid rgba(255,255,255,.07)',borderRadius:'16px',padding:'28px',transition:'border-color .3s',cursor:'pointer'}}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(59,130,246,.3)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,.07)')}>
                <div className="absolute inset-0 bg-cover bg-center z-0" style={{backgroundImage:`url('${g.img}')`}}></div>
                <div className="feat-overlay absolute inset-0 bg-[#0f172a]/90 z-0"></div>
                <div className="relative z-10">
                  <div style={{display:'inline-flex',alignItems:'center',background:g.tagBg,border:`1px solid ${g.tagColor}33`,borderRadius:'100px',padding:'3px 12px',fontSize:'11px',fontWeight:600,color:g.tagColor,marginBottom:'16px'}}>{g.tag}</div>
                  <h3 style={{fontSize:'1rem',fontWeight:700,color:'#fff',marginBottom:'10px',lineHeight:1.4}}>{g.title}</h3>
                  <p style={{color:'#64748b',fontSize:'.88rem',lineHeight:1.6,marginBottom:'16px'}}>{g.desc}</p>
                  <div style={{fontSize:'.8rem',color:'#475569',fontWeight:500}}>{g.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{background:'rgba(59,130,246,.08)',borderTop:'1px solid rgba(59,130,246,.15)',borderBottom:'1px solid rgba(59,130,246,.15)',padding:'80px 0'}}>
        <div className="max-w-screen-xl px-6 mx-auto text-center">
          <h2 style={{fontSize:'clamp(1.8rem,3vw,2.4rem)',fontWeight:900,color:'#fff',marginBottom:'16px',letterSpacing:'-.03em'}}>Still have questions?</h2>
          <p style={{marginBottom:'28px',color:'#94a3b8',fontSize:'1.05rem'}}>Our team is happy to walk you through anything — book a call or send us a message.</p>
          <Link to="/contact" className="btn-p" style={{padding:'14px 36px',fontSize:'15px'}}>Contact us</Link>
        </div>
      </section>
    </>
  );
}
