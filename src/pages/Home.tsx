import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import { useTheme } from '../context/ThemeContext';

export default function Home() {
  useReveal();
  const { dark } = useTheme();

  // Animated counters
  useEffect(() => {
    const counters = document.querySelectorAll('[data-count]');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLElement;
        const target = parseInt(el.getAttribute('data-count') || '0');
        const suffix = el.getAttribute('data-suffix') || '';
        let start = 0;
        const duration = 1800;
        let startTime: number | null = null;
        const step = (ts: number) => {
          if (!startTime) startTime = ts;
          const prog = Math.min((ts - startTime) / duration, 1);
          const ease = 1 - Math.pow(1 - prog, 3);
          el.textContent = Math.round(ease * target) + suffix;
          if (prog < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        obs.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  // Stat bars
  useEffect(() => {
    const bars = document.querySelectorAll('.s-fill');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('on'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    bars.forEach((b) => obs.observe(b));
    return () => obs.disconnect();
  }, []);

  const StarRow = () => (
    <div style={{display:'flex',gap:'2px',marginBottom:'16px'}}>
      {[1,2,3,4,5].map(i => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
      ))}
    </div>
  );

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-section" style={{height:'100vh',display:'flex',flexDirection:'column',background:'#020617',position:'relative',overflow:'hidden',paddingTop:'72px'}}>
        <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(59,130,246,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,.025) 1px,transparent 1px)',backgroundSize:'60px 60px',pointerEvents:'none'}}></div>
        <div style={{position:'absolute',bottom:'-80px',left:'-60px',width:'560px',height:'360px',background:'radial-gradient(ellipse,rgba(37,99,235,.22) 0%,transparent 65%)',filter:'blur(50px)',pointerEvents:'none'}}></div>
        <div style={{position:'absolute',bottom:'80px',right:'8%',width:'420px',height:'280px',background:'radial-gradient(ellipse,rgba(59,130,246,.1) 0%,transparent 65%)',filter:'blur(60px)',pointerEvents:'none'}}></div>
        <div style={{position:'absolute',top:'8%',right:'10%',width:'260px',height:'260px',background:'radial-gradient(circle,rgba(59,130,246,.07) 0%,transparent 65%)',filter:'blur(40px)',pointerEvents:'none'}}></div>

        <div style={{flex:1,display:'flex',alignItems:'center',position:'relative',zIndex:3,padding:0}}>
          <div className="hero-content-row" style={{width:'100%',maxWidth:'1280px',margin:'0 auto',padding:'0 60px',position:'relative',display:'flex',alignItems:'center'}}>

            {/* Left */}
            <div className="hero-left-block" style={{width:'38%',flexShrink:0,animation:'fadeUp .8s ease forwards',position:'relative',zIndex:2}}>
              <h1 style={{fontSize:'clamp(2rem,3.6vw,3.2rem)',fontWeight:900,lineHeight:1.06,letterSpacing:'-0.03em',marginBottom:'14px',color:'#fff'}}>
                Pilot maintenance.<br />
                Maximize <span style={{color:'#3b82f6'}}>performance.</span>
              </h1>
              <p style={{fontSize:'.88rem',color:'#64748b',lineHeight:1.6,maxWidth:'380px',marginBottom:'18px'}}>
                MaintEvo centralizes your operations, anticipates failures and optimizes your assets for maximum reliability and controlled costs.
              </p>
              <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'18px',flexWrap:'wrap'}}>
                <Link to="/contact" className="btn-p">
                  Request a demo
                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                <a href="#" className="btn-s">
                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M10 8l6 4-6 4V8z"/></svg>
                  Watch the video
                </a>
              </div>
            </div>

            {/* Right — dashboard */}
            <div className="hero-right-block" style={{position:'absolute',right:'-50px',top:'50%',transform:'translateY(-54%)',width:'74%',pointerEvents:'none',zIndex:1,WebkitMaskImage:'linear-gradient(to right,transparent 0%,rgba(0,0,0,.5) 14%,black 26%)',maskImage:'linear-gradient(to right,transparent 0%,rgba(0,0,0,.5) 14%,black 26%)'}}>
              <div style={{borderRadius:'16px',overflow:'hidden',transform:'perspective(1400px) rotateY(-8deg) rotateX(4deg)',boxShadow:'0 0 0 1px rgba(59,130,246,.5),0 0 50px rgba(59,130,246,.28),0 0 120px rgba(59,130,246,.1),0 60px 120px rgba(0,0,0,.75)'}}>
                <img src={dark ? '/images/hero-dashboard.png' : '/images/hero-dashboardLightMode.png'} style={{width:'100%',display:'block'}} alt="MaintEvo Dashboard" />
              </div>
            </div>

          </div>
        </div>

        <div className="hero-fade" style={{position:'absolute',bottom:0,left:0,right:0,zIndex:10,pointerEvents:'none'}} />
      </section>

      {/* ── FEATURES ── */}
      <section id="features" style={{padding:'120px 0',background:'#050b16'}} className="bg-grid">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <div className="hero-badge inline-flex mb-5">Platform Capabilities</div>
            <h2 className="font-black text-white mb-5" style={{fontSize:'clamp(2rem,4vw,3rem)',letterSpacing:'-.03em'}}>
              Everything your operations need.<br />
              <span className="grad-text">Nothing you don't.</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto" style={{fontSize:'1rem'}}>Six purpose-built modules, one connected platform — covering every stage of industrial maintenance from request to resolution.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link className="feat-card reveal d1" to="/features/work-orders">
              <div className="icon"><svg width="22" height="22" fill="none" stroke="#60a5fa" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg></div>
              <h3 className="font-bold text-white mb-2" style={{fontSize:'15px'}}>Work Orders</h3>
              <p className="text-slate-500" style={{fontSize:'13px',lineHeight:1.6}}>Log a job, assign it, track time on-site, consume parts, and close with a signed PDF report — start to finish without leaving the platform.</p>
              <span className="learn-more">Learn more <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
            </Link>
            <Link className="feat-card reveal d2" to="/features/equipment">
              <div className="icon"><svg width="22" height="22" fill="none" stroke="#60a5fa" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg></div>
              <h3 className="font-bold text-white mb-2" style={{fontSize:'15px'}}>Equipment Hierarchy</h3>
              <p className="text-slate-500" style={{fontSize:'13px',lineHeight:1.6}}>Classify every asset by criticality (Low to Critical), track its location and department, and keep a full maintenance history — all in one place.</p>
              <span className="learn-more">Learn more <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
            </Link>
            <Link className="feat-card reveal d3" to="/features/preventive-maintenance">
              <div className="icon"><svg width="22" height="22" fill="none" stroke="#60a5fa" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg></div>
              <h3 className="font-bold text-white mb-2" style={{fontSize:'15px'}}>Preventive Maintenance</h3>
              <p className="text-slate-500" style={{fontSize:'13px',lineHeight:1.6}}>Set maintenance plans by date or usage threshold. They generate work orders automatically on schedule — and the platform tracks whether your team is hitting its targets.</p>
              <span className="learn-more">Learn more <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
            </Link>
            <Link className="feat-card reveal d4" to="/features/inventory">
              <div className="icon"><svg width="22" height="22" fill="none" stroke="#60a5fa" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg></div>
              <h3 className="font-bold text-white mb-2" style={{fontSize:'15px'}}>Inventory & Purchasing</h3>
              <p className="text-slate-500" style={{fontSize:'13px',lineHeight:1.6}}>Multi-warehouse spare parts management with stock movements, purchase orders, and supplier tracking — all linked to work orders.</p>
              <span className="learn-more">Learn more <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
            </Link>
            <Link className="feat-card reveal d1" to="/features/kpi-dashboard">
              <div className="icon"><svg width="22" height="22" fill="none" stroke="#22d3ee" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg></div>
              <h3 className="font-bold text-white mb-2" style={{fontSize:'15px'}}>KPI Dashboard</h3>
              <p className="text-slate-500" style={{fontSize:'13px',lineHeight:1.6}}>Repair time, machine uptime, maintenance compliance, and failure trends — all calculated automatically as your team works. No formulas, no spreadsheets.</p>
              <span className="learn-more">Learn more <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
            </Link>
            <Link className="feat-card reveal d2" to="/features/maintenance-calendar">
              <div className="icon"><svg width="22" height="22" fill="none" stroke="#22d3ee" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg></div>
              <h3 className="font-bold text-white mb-2" style={{fontSize:'15px'}}>Maintenance Calendar</h3>
              <p className="text-slate-500" style={{fontSize:'13px',lineHeight:1.6}}>See every planned and active job in one calendar view. Spot scheduling conflicts, plan workloads, and make sure nothing is missed.</p>
              <span className="learn-more">Learn more <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
            </Link>
            <Link className="feat-card reveal d3" to="/features/roles">
              <div className="icon"><svg width="22" height="22" fill="none" stroke="#22d3ee" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg></div>
              <h3 className="font-bold text-white mb-2" style={{fontSize:'15px'}}>Role-Based Access</h3>
              <p className="text-slate-500" style={{fontSize:'13px',lineHeight:1.6}}>Dedicated portals for managers, technicians, and requesters — each with exactly the permissions and views they need.</p>
              <span className="learn-more">Learn more <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
            </Link>
            <Link className="feat-card reveal d4" to="/features/reporting">
              <div className="icon"><svg width="22" height="22" fill="none" stroke="#22d3ee" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg></div>
              <h3 className="font-bold text-white mb-2" style={{fontSize:'15px'}}>Reporting & Audits</h3>
              <p className="text-slate-500" style={{fontSize:'13px',lineHeight:1.6}}>Auto-generated performance reports, job history exports, and maintenance compliance audit trails — always ready for review.</p>
              <span className="learn-more">Learn more <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── AI / AUTOMATION ── */}
      <section id="ai" style={{padding:'120px 0',background:'#080f1e',position:'relative',overflow:'hidden'}}>
        <div className="orb orb1" style={{top:'-200px',right:'-200px',opacity:.7}}></div>
        <div className="max-w-4xl mx-auto px-6">
          <div className="reveal d2 text-center">
            <div className="hero-badge inline-flex mb-5">Smart Automation</div>
            <h2 className="font-black text-white mb-6" style={{fontSize:'clamp(1.8rem,3.5vw,2.6rem)',letterSpacing:'-.03em',lineHeight:1.1}}>
              Eliminate the admin.<br />
              <span className="grad-text">Focus on the fix.</span>
            </h2>
            <p className="text-slate-400 mb-12 leading-relaxed" style={{maxWidth:'600px',margin:'0 auto 48px'}}>MaintEvo handles the operational overhead — scheduling jobs, updating KPIs, routing requests — so your team spends time on actual maintenance, not on paperwork.</p>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              {[
                {color:'rgba(59,130,246,.1)',borderColor:'rgba(59,130,246,.2)',stroke:'#60a5fa',icon:'M13 10V3L4 14h7v7l9-11h-7z',title:'Auto-Generated Work Orders',text:'Preventive maintenance plans create work orders on schedule, automatically. No one has to remember — and no jobs slip through the cracks.'},
                {color:'rgba(34,211,238,.08)',borderColor:'rgba(34,211,238,.2)',stroke:'#22d3ee',icon:'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',title:'Live KPI Calculations',text:'Every time a job opens or closes, MTTR, MTBF, and availability rate update in real time. Your dashboard is always current — no manual entry required.'},
                {color:'rgba(59,130,246,.1)',borderColor:'rgba(59,130,246,.2)',stroke:'#60a5fa',icon:'M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z',title:'Priority-Driven Scheduling',text:'Asset criticality and maintenance history guide what gets done first. Your team always works on the right jobs, in the right order.'},
                {color:'rgba(34,211,238,.08)',borderColor:'rgba(34,211,238,.2)',stroke:'#22d3ee',icon:'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',title:'Full Audit Trail',text:'Every action is timestamped and attributed — who did what, on which asset, and when. Compliance reviews and incident investigations take minutes, not days.'},
              ].map((item, i) => (
                <div key={i} style={{display:'flex',gap:'16px',alignItems:'flex-start',padding:'24px',background:'rgba(255,255,255,.03)',border:'1px solid rgba(255,255,255,.07)',borderRadius:'16px'}}>
                  <div style={{width:'40px',height:'40px',borderRadius:'10px',background:item.color,border:`1px solid ${item.borderColor}`,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                    <svg width="18" height="18" fill="none" stroke={item.stroke} strokeWidth="2" viewBox="0 0 24 24"><path d={item.icon}/></svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1" style={{fontSize:'14px'}}>{item.title}</div>
                    <div className="text-slate-500" style={{fontSize:'13px',lineHeight:1.7}}>{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── METRICS ── */}
      <section style={{padding:'120px 0',background:'#050b16',position:'relative'}} className="bg-grid">
        <div className="orb orb2" style={{bottom:'-100px',left:'100px'}}></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <div className="hero-badge inline-flex mb-5">By the Numbers</div>
            <h2 className="font-black text-white mb-5" style={{fontSize:'clamp(2rem,4vw,3rem)',letterSpacing:'-.03em'}}>
              A platform built around<br />
              <span className="grad-text">how your team actually works.</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">Every number here reflects what's in the platform — not projections, not benchmarks.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {count:'7',suffix:'',w:0.7,title:'Metrics tracked for you',text:'Repair time, machine uptime, maintenance compliance, failure frequency, and more — seven numbers that tell you how your operations are really doing, updated automatically.'},
              {count:'3',suffix:'',w:0.3,title:'User types, one system',text:'Your manager reviews and approves jobs. Your technician executes them. Anyone on the team can report a problem. Each person sees exactly what they need — nothing more.'},
              {count:'4',suffix:'',w:0.4,title:'Priority levels',text:'Label every asset from low-risk to business-critical. When something breaks, your team already knows how urgent it is and what to do next.'},
              {count:'100',suffix:'%',w:0.5,title:'Automated reporting',text:'Every time a job closes, the numbers update on their own. No one needs to fill in a report or send an update at the end of the shift.'},
            ].map((item, i) => (
              <div key={i} className={`metric-card reveal d${i+1} text-center neon-border rounded-2xl p-8`}>
                <div className="text-5xl font-black grad-text mb-2" data-count={item.count} data-suffix={item.suffix}>{item.count}{item.suffix}</div>
                <div className="font-semibold text-white mb-2" style={{fontSize:'15px'}}>{item.title}</div>
                <div className="text-slate-500" style={{fontSize:'13px'}}>{item.text}</div>
                <div className="s-bar mt-4"><div className="s-fill" style={{transform:`scaleX(${item.w})`} as any}></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how" style={{padding:'120px 0',background:'#080f1e'}}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <div className="hero-badge inline-flex mb-5">How It Works</div>
            <h2 className="font-black text-white mb-5" style={{fontSize:'clamp(2rem,4vw,3rem)',letterSpacing:'-.03em'}}>
              Request to resolution.<br />
              <span className="grad-text">Every step tracked.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Single continuous connector */}
            <div className="hidden md:block absolute" style={{top:'43px',left:'calc(16.66% + 12px)',right:'calc(16.66% + 12px)',height:'1px',background:'linear-gradient(90deg,#3b82f6,#22d3ee,#6366f1)',opacity:.45}}></div>

            {[
              {bg:'linear-gradient(135deg,#3b82f6,#2563eb)',shadow:'0 0 20px rgba(59,130,246,.35)',borderColor:'rgba(59,130,246,.45)',accentColor:'#60a5fa',num:'01',title:'Report',text:"Someone spots a problem and submits it in the app — it takes under a minute. The issue is linked to the right equipment, given a priority, and the manager sees it immediately. Nothing gets lost in a chat thread or an email.",icon:'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'},
              {bg:'linear-gradient(135deg,#22d3ee,#0891b2)',shadow:'0 0 20px rgba(34,211,238,.3)',borderColor:'rgba(34,211,238,.4)',accentColor:'#22d3ee',num:'02',title:'Assign',text:'The manager reviews the issue, creates a job, lists what needs to be done, notes the parts required, and assigns it to the right technician. Everything is defined before anyone picks up a tool.',icon:'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'},
              {bg:'linear-gradient(135deg,#6366f1,#4f46e5)',shadow:'0 0 20px rgba(99,102,241,.3)',borderColor:'rgba(99,102,241,.4)',accentColor:'#818cf8',num:'03',title:'Close & Track',text:'The technician works through the task list on-site. Time is tracked automatically in the background. When the job is closed, the dashboard updates — no report to write, no data to enter by hand.',icon:'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'},
            ].map((step, i) => (
              <div key={i} className={`step-card reveal d${i+1}`} style={{borderTop:`2px solid ${step.borderColor}`,overflow:'hidden',textAlign:'left'}}>
                {/* Ghost number */}
                <div aria-hidden="true" style={{position:'absolute',top:'-8px',right:'12px',fontSize:'96px',fontWeight:900,lineHeight:1,color:'rgba(255,255,255,.04)',pointerEvents:'none',userSelect:'none',letterSpacing:'-.05em'}}>{step.num}</div>

                {/* Icon */}
                <div style={{width:'52px',height:'52px',borderRadius:'14px',background:step.bg,display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'20px',boxShadow:step.shadow}}>
                  <svg width="22" height="22" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d={step.icon}/></svg>
                </div>

                {/* Step label */}
                <div style={{fontSize:'11px',fontWeight:700,color:step.accentColor,letterSpacing:'.12em',textTransform:'uppercase',marginBottom:'10px'}}>Step {step.num}</div>

                <h3 className="font-bold text-white" style={{fontSize:'18px',marginBottom:'12px'}}>{step.title}</h3>
                <p className="text-slate-400" style={{fontSize:'14px',lineHeight:1.75}}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{padding:'120px 0',background:'#050b16'}} className="bg-grid">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <div className="hero-badge inline-flex mb-5">Customer Stories</div>
            <h2 className="font-black text-white mb-5" style={{fontSize:'clamp(2rem,4vw,3rem)',letterSpacing:'-.03em'}}>
              Trusted by maintenance<br />
              <span className="grad-text">leaders worldwide.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {quote:'"MaintEvo\'s AI caught a bearing failure on our primary compressor 18 days before it would have caused a full production shutdown. The ROI was immediate and undeniable."',initials:'MR',name:'Marcus R.',role:'VP Operations · Precision Manufacturing AG',grad:'linear-gradient(135deg,#3b82f6,#2563eb)',borderColor:'rgba(255,255,255,.07)'},
              {quote:'"We replaced three separate tools with MaintEvo. Our technicians love the mobile app, and our directors finally have the real-time visibility they\'ve been asking for years."',initials:'SL',name:'Sophie L.',role:'Maintenance Director · EuroPharma Group',grad:'linear-gradient(135deg,#22d3ee,#0891b2)',borderColor:'rgba(59,130,246,.15)'},
              {quote:'"Onboarding 200 technicians across 4 plants took less than a week. The ROI calculation was simple: we saved more in the first month than the annual subscription costs."',initials:'JK',name:'James K.',role:'Head of Reliability · Atlas Energy Corp',grad:'linear-gradient(135deg,#6366f1,#4f46e5)',borderColor:'rgba(255,255,255,.07)'},
            ].map((t, i) => (
              <div key={i} className={`testi-card reveal d${i+1}`} style={{borderColor:t.borderColor}}>
                <StarRow />
                <p className="text-slate-300 mb-6 leading-relaxed" style={{fontSize:'14px'}}>{t.quote}</p>
                <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
                  <div style={{width:'40px',height:'40px',borderRadius:'50%',background:t.grad,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'14px',fontWeight:700,color:'white'}}>{t.initials}</div>
                  <div>
                    <div className="font-semibold text-white" style={{fontSize:'14px'}}>{t.name}</div>
                    <div className="text-slate-500" style={{fontSize:'12px'}}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-bg" style={{padding:'140px 0',position:'relative',overflow:'hidden'}}>
        <div className="orb orb1" style={{top:'50%',left:'50%',transform:'translate(-50%,-50%)',opacity:.6}}></div>
        <div className="max-w-4xl mx-auto px-6 text-center reveal">
          <div className="hero-badge inline-flex mb-8 justify-center">Transform Your Operations</div>
          <h2 className="font-black mb-6" style={{fontSize:'clamp(2.4rem,5vw,3.8rem)',letterSpacing:'-.04em',lineHeight:1}}>
            <span className="grad-text-w">Stop losing money</span><br />
            <span className="text-white">to unplanned downtime.</span>
          </h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto" style={{fontSize:'1.1rem',lineHeight:1.7}}>
            Join 500+ industrial enterprises that have transformed their maintenance operations with MaintEvo. Setup takes 15 minutes. Results start on day one.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-p" style={{padding:'16px 40px',fontSize:'16px'}}>
              Start Free Trial — No Card Needed
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link to="/contact" className="btn-s" style={{padding:'16px 32px',fontSize:'16px'}}>Talk to Sales</Link>
          </div>
          <p className="text-slate-600 mt-6 text-sm">No contracts · Cancel anytime · SOC 2 Type II certified</p>
        </div>
      </section>
    </>
  );
}
