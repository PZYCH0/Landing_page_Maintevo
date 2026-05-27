import { useReveal } from '../hooks/useReveal';

export default function About() {
  useReveal();
  return (
    <>
      {/* Mission */}
      <section style={{background:'#050b16',paddingTop:'112px',paddingBottom:'64px'}}>
        <div className="max-w-screen-xl px-6 mx-auto lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <p style={{fontSize:'.9rem',fontWeight:600,color:'#3b82f6',marginBottom:'10px',letterSpacing:'.06em',textTransform:'uppercase'}}>Our Mission</p>
            <h1 style={{fontSize:'clamp(2rem,4vw,3rem)',fontWeight:900,letterSpacing:'-.03em',color:'#fff',marginBottom:'24px',lineHeight:1.1}}>Every maintenance team deserves modern tools.</h1>
            <p style={{marginBottom:'16px',color:'#94a3b8',fontSize:'1.05rem',lineHeight:1.8}}>We started MaintEvo because we watched skilled maintenance professionals waste hours fighting spreadsheets, whiteboards, and paper work orders — instead of doing the work they're great at.</p>
            <p style={{color:'#94a3b8',fontSize:'1.05rem',lineHeight:1.8}}>Our goal is simple: give every maintenance team — from a 3-person shop to a 500-person plant — the same quality of tooling that Fortune 500 companies pay millions for.</p>
          </div>
          <div className="hidden lg:flex items-center justify-center mt-8 lg:mt-0">
            <div style={{width:'100%',height:'320px',background:'rgba(59,130,246,.05)',border:'1px solid rgba(59,130,246,.15)',borderRadius:'20px',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <svg style={{width:'120px',height:'120px',color:'rgba(59,130,246,.25)'}} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /></svg>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{background:'#080f1e',padding:'80px 0'}}>
        <div className="max-w-screen-xl px-6 mx-auto">
          <h2 style={{fontSize:'clamp(1.8rem,3vw,2.4rem)',fontWeight:900,textAlign:'center',color:'#fff',marginBottom:'48px',letterSpacing:'-.03em'}}>What we stand for</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Reliability */}
            <div style={{padding:'28px',background:'rgba(255,255,255,.03)',border:'1px solid rgba(255,255,255,.07)',borderRadius:'16px',textAlign:'center'}}>
              <div style={{display:'flex',justifyContent:'center',marginBottom:'20px'}}>
                <div style={{padding:'14px',background:'rgba(59,130,246,.1)',border:'1px solid rgba(59,130,246,.2)',borderRadius:'50%'}}>
                  <svg style={{width:'28px',height:'28px',color:'#60a5fa'}} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                </div>
              </div>
              <h3 style={{fontSize:'1.2rem',fontWeight:700,color:'#fff',marginBottom:'10px'}}>Reliability</h3>
              <p style={{color:'#94a3b8',lineHeight:1.7}}>We build software that works when your equipment can't afford not to. 99.9% uptime, enterprise-grade security, and data you can always trust.</p>
            </div>
            {/* Simplicity */}
            <div style={{padding:'28px',background:'rgba(255,255,255,.03)',border:'1px solid rgba(255,255,255,.07)',borderRadius:'16px',textAlign:'center'}}>
              <div style={{display:'flex',justifyContent:'center',marginBottom:'20px'}}>
                <div style={{padding:'14px',background:'rgba(59,130,246,.1)',border:'1px solid rgba(59,130,246,.2)',borderRadius:'50%'}}>
                  <svg style={{width:'28px',height:'28px',color:'#60a5fa'}} fill="currentColor" viewBox="0 0 20 20"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" /></svg>
                </div>
              </div>
              <h3 style={{fontSize:'1.2rem',fontWeight:700,color:'#fff',marginBottom:'10px'}}>Simplicity</h3>
              <p style={{color:'#94a3b8',lineHeight:1.7}}>Powerful software shouldn't require a consultant to set up. MaintEvo is designed so any technician can learn it in an afternoon — and actually enjoy using it.</p>
            </div>
            {/* Partnership */}
            <div style={{padding:'28px',background:'rgba(255,255,255,.03)',border:'1px solid rgba(255,255,255,.07)',borderRadius:'16px',textAlign:'center'}}>
              <div style={{display:'flex',justifyContent:'center',marginBottom:'20px'}}>
                <div style={{padding:'14px',background:'rgba(59,130,246,.1)',border:'1px solid rgba(59,130,246,.2)',borderRadius:'50%'}}>
                  <svg style={{width:'28px',height:'28px',color:'#60a5fa'}} fill="currentColor" viewBox="0 0 20 20"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" /></svg>
                </div>
              </div>
              <h3 style={{fontSize:'1.2rem',fontWeight:700,color:'#fff',marginBottom:'10px'}}>Partnership</h3>
              <p style={{color:'#94a3b8',lineHeight:1.7}}>We treat our customers as partners. Your feedback shapes the roadmap, our support team knows your name, and we succeed only when you do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{background:'#050b16',padding:'80px 0'}}>
        <div className="max-w-screen-xl px-6 mx-auto">
          <h2 style={{fontSize:'clamp(1.8rem,3vw,2.4rem)',fontWeight:900,textAlign:'center',color:'#fff',marginBottom:'48px',letterSpacing:'-.03em'}}>Meet the team</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'Alex Rivera', role: 'CEO & Co-Founder', bio: '10+ years in industrial operations. Former maintenance manager at a Tier 1 automotive supplier.' },
              { name: 'Jamie Chen', role: 'CTO & Co-Founder', bio: 'Previously led engineering at two enterprise SaaS companies. Passionate about building tools for the physical world.' },
              { name: 'Morgan Osei', role: 'Head of Customer Success', bio: 'Certified reliability engineer. Helps customers get measurable ROI from their MaintEvo deployment in the first 90 days.' },
            ].map((member) => (
              <div key={member.name} style={{textAlign:'center'}}>
                <div style={{width:'88px',height:'88px',margin:'0 auto 16px',background:'rgba(59,130,246,.1)',border:'1px solid rgba(59,130,246,.2)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <svg style={{width:'44px',height:'44px',color:'rgba(96,165,250,.4)'}} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                </div>
                <h3 style={{fontSize:'1.05rem',fontWeight:700,color:'#fff',marginBottom:'4px'}}>{member.name}</h3>
                <p style={{fontSize:'.875rem',color:'#3b82f6',marginBottom:'8px'}}>{member.role}</p>
                <p style={{fontSize:'.875rem',color:'#94a3b8',lineHeight:1.6}}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{background:'rgba(59,130,246,.08)',borderTop:'1px solid rgba(59,130,246,.15)',borderBottom:'1px solid rgba(59,130,246,.15)',padding:'80px 0'}}>
        <div className="max-w-screen-xl px-6 mx-auto text-center">
          <h2 style={{fontSize:'clamp(1.8rem,3vw,2.4rem)',fontWeight:900,color:'#fff',marginBottom:'16px',letterSpacing:'-.03em'}}>Join 5,000+ teams using MaintEvo</h2>
          <p style={{marginBottom:'28px',color:'#94a3b8',fontSize:'1.05rem'}}>Start your free trial today — no credit card required.</p>
          <a href="/contact" style={{display:'inline-flex',alignItems:'center',gap:'8px',background:'linear-gradient(135deg,#3b82f6,#2563eb)',color:'#fff',borderRadius:'10px',padding:'14px 36px',fontWeight:600,fontSize:'15px',textDecoration:'none',boxShadow:'0 4px 20px rgba(59,130,246,.4)'}}>Get started free</a>
        </div>
      </section>
    </>
  );
}
