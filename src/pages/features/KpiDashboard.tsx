import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const categories = [
  {
    id: 'work-orders',
    label: 'Work Orders & Interventions',
    shortLabel: 'Work\nOrders',
    color: '#3b82f6',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
      </svg>
    ),
    description: 'Track every job from the moment it is reported to the moment it is closed. Know who responded, how fast, and whether the fix stuck.',
    kpis: [
      { label: 'Response Time',      q: 'How fast does your team react to a report?',         body: 'Time between fault reported and work started. Reveals delays in your approval or dispatch process.' },
      { label: 'MTTR',               q: 'How long does the average repair take?',              body: 'Mean Time to Repair — open to closed. If rising, jobs are getting harder or the team is overstretched.' },
      { label: 'First-Fix Rate',     q: 'Are jobs resolved in a single visit?',                body: 'Percentage closed without a follow-up. Low rate points to missing parts or incomplete diagnostics.' },
      { label: 'Backlog',            q: 'How many open jobs are waiting right now?',            body: 'Total unresolved work orders at any point. A rising backlog means demand is outpacing capacity.' },
      { label: 'On-Time Completion', q: 'Are jobs closed within their target window?',         body: 'Tracks whether scheduling and prioritization are actually working in practice.' },
    ],
  },
  {
    id: 'equipment-health',
    label: 'Equipment Health',
    shortLabel: 'Equipment\nHealth',
    color: '#8b5cf6',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    description: 'Know exactly which assets are reliable and which are quietly eroding your uptime — before they cause a shutdown.',
    kpis: [
      { label: 'Availability',   q: 'What percentage of the time is each asset running?',      body: 'Calculated from downtime and scheduled operating time. The clearest single measure of reliability.' },
      { label: 'MTBF',           q: 'How long between one failure and the next?',              body: 'Mean Time Between Failures. Low MTBF means frequent breakdowns — a strong signal for replacement.' },
      { label: 'Failure Rate',   q: 'How many failures per 1,000 hours of operation?',         body: 'Normalized metric for comparing failure-proneness across equipment of different ages or types.' },
      { label: 'Downtime',       q: 'How much time has each asset been out of service?',       body: 'Cumulative per-asset downtime. Identifies which equipment is costing the most productive time.' },
      { label: 'PM Compliance',  q: 'Are preventive jobs being done on schedule?',             body: 'Percentage of scheduled PM tasks completed on time. A direct measure of PM program discipline.' },
    ],
  },
  {
    id: 'maintenance-costs',
    label: 'Maintenance Costs',
    shortLabel: 'Maintenance\nCosts',
    color: '#f59e0b',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    description: 'Stop guessing where your maintenance budget goes. See the full cost picture — by job, by asset, by team.',
    kpis: [
      { label: 'Cost per Work Order',      q: 'What does the average job actually cost?',          body: 'Labor + parts per closed work order. Rising cost often reflects inefficiency or aging equipment.' },
      { label: 'Preventive vs Corrective', q: 'Are you spending on prevention or firefighting?',   body: 'Share of total spend going to planned vs reactive work. Higher preventive ratio → lower long-term costs.' },
      { label: 'Cost per Asset',           q: 'Which assets are the most expensive to maintain?',  body: 'Total spend per asset over a period. Helps identify machines where replacement is cheaper than repair.' },
      { label: 'Budget Variance',          q: 'How close are you to your maintenance budget?',     body: 'Actual vs planned spend. A consistent overrun in one area usually signals an unaddressed root problem.' },
      { label: 'Parts vs Labor Split',     q: 'Where is the money going — materials or manpower?', body: 'Breakdown of parts costs vs technician hours. Useful for negotiating supply contracts or headcount.' },
    ],
  },
  {
    id: 'parts-inventory',
    label: 'Parts Inventory',
    shortLabel: 'Parts\nInventory',
    color: '#10b981',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    description: 'Know exactly what is on the shelf, when to reorder, and how much your inventory is costing you to hold.',
    kpis: [
      { label: 'Stock Accuracy',          q: 'Does the system match what is on the shelf?',         body: 'How closely records match physical stock. Low accuracy means jobs stall on parts that "exist" but are missing.' },
      { label: 'Parts Availability Rate', q: 'Are parts in stock when jobs need them?',             body: 'Percentage of work orders where required parts were immediately available. Low rate extends MTTR.' },
      { label: 'Reorder Frequency',       q: 'How often does each part trigger a restock?',         body: 'Proxy for consumption rate. Helps set smarter reorder points and minimum stock levels.' },
      { label: 'Inventory Turnover',      q: 'How quickly are parts being used and replaced?',      body: 'Very low turnover may mean you are holding obsolete or over-stocked items tying up capital.' },
      { label: 'Carrying Cost',           q: 'How much does it cost to hold your current inventory?', body: 'Storage, capital tied up, obsolescence risk. Often underestimated until properly audited.' },
    ],
  },
];

const bullets = [
  '4 metric categories, 20 KPIs tracked automatically',
  'No spreadsheets or manual data entry',
  "Real-time updates from your team's work orders",
];


export default function KpiDashboard() {
  const { dark }                    = useTheme();
  const [selected,    setSelected]    = useState<number>(0);
  const [userLocked,  setUserLocked]  = useState<boolean>(false);

  useEffect(() => {
    if (userLocked) return;
    const id = setInterval(() => {
      setSelected(prev => (prev + 1) % categories.length);
    }, 2000);
    return () => clearInterval(id);
  }, [userLocked]);

  const handleSelect = (i: number) => {
    setSelected(i);
    setUserLocked(true);
  };

  const activeCat = categories[selected];
  const sectionBg = dark ? '#080f1e' : '#ffffff';

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero-section" style={{height:'100vh',display:'flex',flexDirection:'column',background:'#020617',position:'relative',overflow:'hidden',paddingTop:'72px'}}>
        <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(59,130,246,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,.025) 1px,transparent 1px)',backgroundSize:'60px 60px',pointerEvents:'none'}} />
        <div style={{position:'absolute',bottom:'-80px',left:'-60px',width:'560px',height:'360px',background:'radial-gradient(ellipse,rgba(37,99,235,.22) 0%,transparent 65%)',filter:'blur(50px)',pointerEvents:'none'}} />
        <div style={{position:'absolute',bottom:'80px',right:'8%',width:'420px',height:'280px',background:'radial-gradient(ellipse,rgba(59,130,246,.1) 0%,transparent 65%)',filter:'blur(60px)',pointerEvents:'none'}} />
        <div style={{position:'absolute',top:'8%',right:'10%',width:'260px',height:'260px',background:'radial-gradient(circle,rgba(59,130,246,.07) 0%,transparent 65%)',filter:'blur(40px)',pointerEvents:'none'}} />
        <div style={{flex:1,display:'flex',alignItems:'center',position:'relative',zIndex:3}}>
          <div className="hero-content-row" style={{width:'100%',maxWidth:'1280px',margin:'0 auto',padding:'0 60px',display:'flex',alignItems:'center',position:'relative'}}>
            <div className="hero-left-block" style={{width:'38%',flexShrink:0,position:'relative',zIndex:2}}>
              <Link to="/" style={{display:'inline-flex',alignItems:'center',gap:'6px',fontSize:'12px',color:'#60a5fa',textDecoration:'none',marginBottom:'20px',fontWeight:500,background:'rgba(59,130,246,.08)',border:'1px solid rgba(59,130,246,.18)',borderRadius:'100px',padding:'5px 14px'}}>
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                Back to all features
              </Link>
              <div style={{fontSize:'12px',fontWeight:700,letterSpacing:'.1em',color:'#60a5fa',textTransform:'uppercase',marginBottom:'18px'}}>KPI Dashboard</div>
              <h1 style={{fontSize:'clamp(2rem,3.6vw,3.2rem)',fontWeight:900,lineHeight:1.06,letterSpacing:'-0.03em',marginBottom:'14px',color:'#fff'}}>
                Twenty metrics.<br />Zero manual work.<br />
                <span style={{background:'linear-gradient(135deg,#60a5fa,#818cf8)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>Always up to date.</span>
              </h1>
              <p style={{fontSize:'.88rem',color:'#64748b',lineHeight:1.6,maxWidth:'380px',marginBottom:'18px'}}>
                Every KPI in MaintEvo — across work orders, equipment health, costs, and inventory — updates automatically as your team works.
              </p>
              <div style={{display:'flex',gap:'12px',flexWrap:'wrap',marginBottom:'28px'}}>
                <Link to="/contact" className="btn-p" style={{padding:'11px 24px',fontSize:'13.5px'}}>Get started free</Link>
                <Link to="/" className="btn-s" style={{padding:'11px 22px',fontSize:'13.5px'}}>See all features</Link>
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
                {bullets.map(b => (
                  <div key={b} style={{display:'flex',alignItems:'center',gap:'8px',fontSize:'12px',color:'#94a3b8'}}>
                    <div style={{width:'18px',height:'18px',borderRadius:'5px',background:'rgba(59,130,246,.15)',border:'1px solid rgba(59,130,246,.25)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                      <svg width="10" height="10" fill="none" stroke="#60a5fa" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                    </div>
                    {b}
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-right-block" style={{position:'absolute',right:'-50px',top:'50%',transform:'translateY(-54%)',width:'74%',pointerEvents:'none',zIndex:1,WebkitMaskImage:'linear-gradient(to right,transparent 0%,rgba(0,0,0,.5) 14%,black 26%)',maskImage:'linear-gradient(to right,transparent 0%,rgba(0,0,0,.5) 14%,black 26%)'}}>
              <div style={{borderRadius:'16px',overflow:'hidden',transform:'perspective(1400px) rotateY(-8deg) rotateX(4deg)',boxShadow:'0 0 0 1px rgba(59,130,246,.5),0 0 50px rgba(59,130,246,.28),0 0 120px rgba(59,130,246,.1),0 60px 120px rgba(0,0,0,.75)'}}>
                <img src={dark ? '/images/KPI.png' : '/images/KPI_Light.png'} style={{width:'100%',display:'block'}} alt="KPI dashboard" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-fade" style={{position:'absolute',bottom:0,left:0,right:0,zIndex:10,pointerEvents:'none'}} />
      </section>

      {/* ── KPI Categories ── */}
      <section style={{background:'#080f1e',padding:'80px 0'}}>
        <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 60px'}}>

          <div style={{textAlign:'center',marginBottom:'56px'}}>
            <div style={{display:'inline-flex',alignItems:'center',gap:'8px',background:'rgba(59,130,246,.08)',border:'1px solid rgba(59,130,246,.18)',borderRadius:'100px',padding:'5px 16px',fontSize:'12px',fontWeight:600,color:'#60a5fa',letterSpacing:'.06em',textTransform:'uppercase',marginBottom:'16px'}}>20 Metrics</div>
            <h2 style={{fontSize:'clamp(1.5rem,3vw,2rem)',fontWeight:800,color:'#fff',marginBottom:'10px',letterSpacing:'-.02em'}}>Four categories. Every metric covered.</h2>
            <p style={{color:'#475569',fontSize:'.9rem'}}>Select a category to see its metrics in detail.</p>
          </div>

          {/* ── Two-column: category list + detail card ── */}
          <div style={{display:'flex',alignItems:'flex-start',gap:'48px'}}>

            {/* ── Left: category list ── */}
            <div style={{width:420,flexShrink:0,display:'flex',flexDirection:'column',gap:'8px'}}>
              {categories.map((cat, i) => {
                const isSelected = selected === i;
                return (
                  <div
                    key={cat.id}
                    onClick={() => handleSelect(i)}
                    style={{
                      position:   'relative',
                      display:    'flex',
                      alignItems: 'center',
                      gap:        16,
                      padding:    '18px 20px 18px 24px',
                      borderRadius: 16,
                      cursor:     'pointer',
                      border:     `1px solid ${isSelected ? cat.color + '45' : (dark ? 'rgba(255,255,255,.07)' : 'rgba(0,0,0,.08)')}`,
                      background: isSelected
                        ? (dark ? `linear-gradient(135deg,${cat.color}14,${cat.color}07)` : `linear-gradient(135deg,${cat.color}0d,${cat.color}05)`)
                        : (dark ? 'rgba(255,255,255,.02)' : 'rgba(0,0,0,.018)'),
                      boxShadow:  isSelected
                        ? (dark ? `0 0 0 1px ${cat.color}20,0 8px 32px rgba(0,0,0,.3)` : `0 0 0 1px ${cat.color}18,0 4px 20px rgba(0,0,0,.08)`)
                        : 'none',
                      transition: 'all .2s',
                      userSelect: 'none',
                    }}
                  >
                    {/* Left accent bar */}
                    <div style={{
                      position:     'absolute',
                      left:         0, top: '20%', height: '60%', width: 3,
                      borderRadius: '0 3px 3px 0',
                      background:   isSelected ? cat.color : 'transparent',
                      transition:   'background .2s',
                    }} />

                    {/* Number */}
                    <span style={{
                      fontSize:    11,
                      fontWeight:  800,
                      color:       isSelected ? cat.color : (dark ? '#334155' : '#94a3b8'),
                      letterSpacing: '.08em',
                      minWidth:    22,
                      transition:  'color .2s',
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    {/* Icon */}
                    <div style={{
                      width:36, height:36, borderRadius:10, flexShrink:0,
                      background: `${cat.color}${isSelected ? '22' : '12'}`,
                      border:     `1.5px solid ${cat.color}${isSelected ? '50' : '25'}`,
                      display:    'flex', alignItems:'center', justifyContent:'center',
                      color:      isSelected ? cat.color : `${cat.color}88`,
                      transition: 'all .2s',
                    }}>
                      {cat.icon}
                    </div>

                    {/* Text */}
                    <div style={{flex:1}}>
                      <div style={{
                        fontSize:   17,
                        fontWeight: 800,
                        color:      isSelected ? '#f1f5f9' : (dark ? '#94a3b8' : '#64748b'),
                        letterSpacing: '-.01em',
                        lineHeight: 1.2,
                        marginBottom: 3,
                        transition: 'color .2s',
                      }}>
                        {cat.label}
                      </div>
                      <div style={{
                        fontSize: 11,
                        color:    isSelected ? (dark ? '#475569' : '#64748b') : (dark ? '#1e3a5f' : '#cbd5e1'),
                        transition: 'color .2s',
                      }}>
                        {cat.kpis.length} metrics tracked automatically
                      </div>
                    </div>

                    {/* Arrow */}
                    <svg
                      width="16" height="16" fill="none" viewBox="0 0 24 24"
                      stroke={isSelected ? cat.color : (dark ? '#334155' : '#cbd5e1')}
                      strokeWidth="2.5"
                      style={{flexShrink:0,transition:'stroke .2s, transform .2s',transform: isSelected ? 'translateX(3px)' : 'none'}}
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                );
              })}
            </div>

            {/* ── Right: detail card ── */}
            <div style={{
              flex:         1,
              borderRadius: '20px',
              background:   activeCat
                ? (dark
                    ? `linear-gradient(145deg,${activeCat.color}12 0%,#0a1628 45%,#080f1e 100%)`
                    : `linear-gradient(145deg,${activeCat.color}0d 0%,#f8fafc 55%,#ffffff 100%)`)
                : (dark ? '#0a1628' : '#f8fafc'),
              border:       `1px solid ${activeCat ? activeCat.color + '35' : (dark ? 'rgba(255,255,255,.06)' : 'rgba(0,0,0,.07)')}`,
              boxShadow:    activeCat
                ? (dark
                    ? `0 0 0 1px ${activeCat.color}18,0 20px 60px rgba(0,0,0,.35),0 0 60px ${activeCat.color}0c`
                    : `0 0 0 1px ${activeCat.color}18,0 8px 32px rgba(0,0,0,.08)`)
                : 'none',
              transition:   'border-color .22s,background .22s,box-shadow .22s',
              overflow:     'hidden',
            }}>
              {(<>
                {/* Accent bar */}
                <div style={{height:3,background:`linear-gradient(90deg,${activeCat.color},${activeCat.color}33)`}} />

                <div style={{padding:'28px 32px 32px'}}>
                  {/* Header */}
                  <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:16}}>
                    <div style={{
                      width:48,height:48,borderRadius:14,flexShrink:0,
                      background:`linear-gradient(135deg,${activeCat.color}28,${activeCat.color}10)`,
                      border:`1.5px solid ${activeCat.color}40`,
                      display:'flex',alignItems:'center',justifyContent:'center',
                      color:activeCat.color,
                      boxShadow:`0 4px 16px ${activeCat.color}22`,
                    }}>
                      {activeCat.icon}
                    </div>
                    <div style={{flex:1}}>
                      <div style={{fontSize:18,fontWeight:800,color:'#e2e8f0',letterSpacing:'-.02em',lineHeight:1.15,marginBottom:4}}>
                        {activeCat.label}
                      </div>
                      <div style={{display:'flex',alignItems:'center',gap:6}}>
                        <div style={{width:6,height:6,borderRadius:'50%',background:activeCat.color}} />
                        <span style={{fontSize:11,color:activeCat.color,fontWeight:600,letterSpacing:'.05em',textTransform:'uppercase',opacity:.85}}>
                          5 metrics tracked automatically
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{
                    fontSize:12,color:dark?'#64748b':'#475569',lineHeight:1.75,
                    margin:'0 0 20px',paddingBottom:20,
                    borderBottom:`1px solid ${dark?'rgba(255,255,255,.06)':'rgba(0,0,0,.07)'}`,
                  }}>
                    {activeCat.description}
                  </p>

                  {/* KPI rows */}
                  <div style={{display:'flex',flexDirection:'column'}}>
                    {activeCat.kpis.map((kpi,ki) => (
                      <div
                        key={kpi.label}
                        style={{
                          display:'flex',gap:14,alignItems:'flex-start',
                          padding:'13px 0',
                          borderBottom: ki < activeCat.kpis.length - 1
                            ? `1px solid ${dark?'rgba(255,255,255,.04)':'rgba(0,0,0,.05)'}`
                            : 'none',
                        }}
                      >
                        <div style={{
                          width:24,height:24,borderRadius:7,flexShrink:0,marginTop:1,
                          background:`${activeCat.color}18`,
                          border:`1px solid ${activeCat.color}35`,
                          display:'flex',alignItems:'center',justifyContent:'center',
                          fontSize:10,fontWeight:800,color:activeCat.color,
                        }}>
                          {ki + 1}
                        </div>
                        <div style={{flex:1}}>
                          <div style={{display:'flex',alignItems:'baseline',gap:8,flexWrap:'wrap',marginBottom:4}}>
                            <span style={{fontSize:13,fontWeight:700,color:'#e2e8f0',lineHeight:1.2}}>
                              {kpi.label}
                            </span>
                            <span style={{fontSize:11,color:dark?'#475569':'#64748b',fontStyle:'italic',lineHeight:1.2}}>
                              {kpi.q}
                            </span>
                          </div>
                          <p style={{fontSize:11,color:dark?'#334155':'#64748b',lineHeight:1.6,margin:0}}>
                            {kpi.body}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>)}
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
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
