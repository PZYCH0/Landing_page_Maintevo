export default function Contact() {
  const cards = [
    {
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      stroke: '#60a5fa',
      bg: 'rgba(59,130,246,.08)',
      border: 'rgba(59,130,246,.2)',
      label: 'General Inquiries',
      value: 'your@email.com',
      href: 'mailto:your@email.com',
      sub: 'Questions, feedback, or anything else',
    },
    {
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      stroke: '#22d3ee',
      bg: 'rgba(34,211,238,.06)',
      border: 'rgba(34,211,238,.2)',
      label: 'Sales & Demos',
      value: 'your@email.com',
      href: 'mailto:your@email.com',
      sub: 'Book a demo or get a quote',
    },
    {
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      stroke: '#818cf8',
      bg: 'rgba(99,102,241,.08)',
      border: 'rgba(99,102,241,.2)',
      label: 'Support',
      value: 'your@email.com',
      href: 'mailto:your@email.com',
      sub: 'Help with your existing account',
    },
  ];

  return (
    <section style={{background:'#050b16',paddingTop:'120px',paddingBottom:'100px',minHeight:'80vh'}}>
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div style={{textAlign:'center',marginBottom:'64px'}}>
          <h1 style={{fontSize:'clamp(2rem,4vw,3rem)',fontWeight:900,letterSpacing:'-.03em',color:'#fff',marginBottom:'16px',lineHeight:1.1}}>
            Get in touch
          </h1>
          <p style={{color:'#94a3b8',fontSize:'1.05rem',lineHeight:1.7,maxWidth:'480px',margin:'0 auto'}}>
            Reach out via email or connect with us on LinkedIn — we'll get back to you promptly.
          </p>
        </div>

        {/* Email cards */}
        <div className="grid sm:grid-cols-3 gap-5 mb-8">
          {cards.map((c, i) => (
            <a
              key={i}
              href={c.href}
              style={{
                display:'block',
                padding:'28px 24px',
                background:'rgba(255,255,255,.03)',
                border:`1px solid ${c.border}`,
                borderRadius:'18px',
                textDecoration:'none',
                transition:'all .25s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,.06)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,.03)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              <div style={{width:'44px',height:'44px',borderRadius:'12px',background:c.bg,border:`1px solid ${c.border}`,display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'18px'}}>
                <svg width="20" height="20" fill="none" stroke={c.stroke} strokeWidth="2" viewBox="0 0 24 24">
                  <path d={c.icon}/>
                </svg>
              </div>
              <div style={{fontSize:'11px',fontWeight:700,color:c.stroke,letterSpacing:'.1em',textTransform:'uppercase',marginBottom:'6px'}}>{c.label}</div>
              <div style={{fontSize:'14px',fontWeight:600,color:'#e2e8f0',marginBottom:'6px'}}>{c.value}</div>
              <div style={{fontSize:'12px',color:'#64748b',lineHeight:1.5}}>{c.sub}</div>
            </a>
          ))}
        </div>

        {/* LinkedIn */}
        <div style={{
          display:'flex',
          alignItems:'center',
          gap:'20px',
          padding:'28px 32px',
          background:'rgba(255,255,255,.03)',
          border:'1px solid rgba(255,255,255,.07)',
          borderRadius:'18px',
        }}>
          <div style={{width:'48px',height:'48px',borderRadius:'12px',background:'rgba(10,102,194,.15)',border:'1px solid rgba(10,102,194,.3)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#60a5fa">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </div>
          <div style={{flex:1}}>
            <div style={{fontSize:'14px',fontWeight:700,color:'#e2e8f0',marginBottom:'4px'}}>Follow us on LinkedIn</div>
            <div style={{fontSize:'13px',color:'#64748b'}}>Stay up to date with product news and updates.</div>
          </div>
          <a
            href="https://www.linkedin.com/company/mainteneat"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-p inline-flex items-center gap-2"
            style={{padding:'10px 22px',fontSize:'13px',whiteSpace:'nowrap',flexShrink:0}}
          >
            Connect
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
