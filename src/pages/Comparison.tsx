import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CheckIcon = ({ color = '#22c55e' }: { color?: string }) => (
  <svg style={{width:'18px',height:'18px',color,flexShrink:0}} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const CrossIcon = () => (
  <svg style={{width:'18px',height:'18px',color:'#ef4444',flexShrink:0}} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const StarRating = ({ score }: { score: number }) => {
  const filled = Math.round(score);
  return (
    <div style={{display:'flex',alignItems:'center',gap:'6px'}}>
      <div style={{display:'flex',gap:'2px'}}>
        {[1, 2, 3, 4, 5].map(i => (
          <svg key={i} width="15" height="15" viewBox="0 0 20 20" fill={i <= filled ? '#fbbf24' : '#475569'}>
            <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.9l-5.2 2.6.99-5.79-4.21-4.1 5.82-.85L10 1.5z" />
          </svg>
        ))}
      </div>
      <span style={{fontSize:'.85rem',fontWeight:700,color:'#fff'}}>{score.toFixed(1)}</span>
    </div>
  );
};

type CellValue = 'check' | 'dash' | 'val_addon' | 'val_limited' | 'val_days' | 'val_weeks' | 'val_months' | 'val_extra' | 'val_tiered';

const Cell = ({ value, highlight, t }: { value: CellValue; highlight?: boolean; t: (k: string) => string }) => {
  if (value === 'check') return <div style={{display:'flex',justifyContent:'center'}}><CheckIcon color={highlight ? '#22c55e' : '#22c55e'} /></div>;
  if (value === 'dash') return <span style={{color:'#475569'}}>—</span>;
  return <span style={{fontSize:'.8rem',color: highlight ? '#60a5fa' : '#94a3b8'}}>{t(`comparison.table.${value}`)}</span>;
};

export default function Comparison() {
  const { t } = useTranslation();

  const rows: { key: string; maintevo: CellValue; sap: CellValue; maximo: CellValue; upkeep: CellValue }[] = [
    { key: 'r_wo',           maintevo: 'check', sap: 'check',     maximo: 'check',     upkeep: 'check' },
    { key: 'r_assets',       maintevo: 'check', sap: 'check',     maximo: 'check',     upkeep: 'check' },
    { key: 'r_pm',           maintevo: 'check', sap: 'check',     maximo: 'check',     upkeep: 'val_addon' },
    { key: 'r_inventory',    maintevo: 'check', sap: 'check',     maximo: 'check',     upkeep: 'val_addon' },
    { key: 'r_reporting',    maintevo: 'check', sap: 'val_addon', maximo: 'val_addon', upkeep: 'val_limited' },
    { key: 'r_mobile',       maintevo: 'check', sap: 'val_limited', maximo: 'check',   upkeep: 'check' },
    { key: 'r_api',          maintevo: 'check', sap: 'check',     maximo: 'check',     upkeep: 'val_limited' },
    { key: 'r_multilingual', maintevo: 'check', sap: 'val_limited', maximo: 'val_limited', upkeep: 'dash' },
    { key: 'r_flatpricing',  maintevo: 'check', sap: 'dash',      maximo: 'dash',      upkeep: 'dash' },
    { key: 'r_setup',        maintevo: 'val_days', sap: 'val_months', maximo: 'val_months', upkeep: 'val_weeks' },
    { key: 'r_support',      maintevo: 'check', sap: 'val_extra', maximo: 'val_extra', upkeep: 'val_tiered' },
  ];

  const platforms = [
    { key: 'maintevo', score: 4.9, featured: true,  prosCount: 5, consCount: 1 },
    { key: 'sap',      score: 3.5, featured: false, prosCount: 3, consCount: 4 },
    { key: 'maximo',   score: 3.2, featured: false, prosCount: 3, consCount: 4 },
    { key: 'upkeep',   score: 4.1, featured: false, prosCount: 3, consCount: 4 },
  ];

  const savings = [
    { labelKey: 'sap_label',      costKey: 'sap_cost',      noteKey: 'sap_note',      pct: 75,  color: '#ef4444' },
    { labelKey: 'maximo_label',   costKey: 'maximo_cost',   noteKey: 'maximo_note',   pct: 100, color: '#ef4444' },
    { labelKey: 'upkeep_label',   costKey: 'upkeep_cost',   noteKey: 'upkeep_note',   pct: 21,  color: '#f59e0b' },
    { labelKey: 'maintevo_label', costKey: 'maintevo_cost', noteKey: 'maintevo_note', pct: 4,   color: '#22c55e', highlight: true },
  ];

  return (
    <>
      {/* Hero */}
      <section style={{background:'#050b16',paddingTop:'112px',paddingBottom:'32px'}}>
        <div className="max-w-screen-xl px-6 mx-auto text-center">
          <div style={{display:'inline-flex',alignItems:'center',gap:'8px',background:'rgba(59,130,246,.1)',border:'1px solid rgba(59,130,246,.25)',borderRadius:'100px',padding:'6px 16px',fontSize:'13px',fontWeight:600,color:'#60a5fa',marginBottom:'20px'}}>
            {t('comparison.hero.badge')}
          </div>
          <h1 style={{fontSize:'clamp(2rem,4vw,3rem)',fontWeight:900,letterSpacing:'-.03em',color:'#fff',marginBottom:'14px'}}>{t('comparison.hero.title')}</h1>
          <p style={{color:'#94a3b8',fontSize:'1.05rem',maxWidth:'680px',margin:'0 auto'}}>{t('comparison.hero.desc')}</p>
        </div>
      </section>

      {/* Comparison Table */}
      <section style={{background:'#080f1e',padding:'64px 0'}}>
        <div className="max-w-screen-xl px-6 mx-auto">
          <h2 style={{fontSize:'clamp(1.5rem,2.5vw,2rem)',fontWeight:900,textAlign:'center',color:'#fff',marginBottom:'32px',letterSpacing:'-.03em'}}>{t('comparison.table.title')}</h2>
          <div className="table-scroll" style={{overflowX:'auto'}}>
            <table style={{width:'100%',borderCollapse:'collapse',fontSize:'.9rem',minWidth:'680px'}}>
              <thead>
                <tr style={{borderBottom:'1px solid rgba(255,255,255,.08)'}}>
                  <th style={{padding:'14px 16px',textAlign:'left',color:'#94a3b8',fontWeight:600,fontSize:'.8rem',textTransform:'uppercase',letterSpacing:'.06em'}}>{t('comparison.table.col_feature')}</th>
                  <th style={{padding:'14px 16px',textAlign:'center',background:'rgba(59,130,246,.06)',borderRadius:'10px 10px 0 0'}}>
                    <div style={{color:'#60a5fa',fontWeight:700,fontSize:'.85rem',textTransform:'uppercase',letterSpacing:'.06em'}}>{t('comparison.table.col_maintevo')}</div>
                    <div style={{color:'#60a5fa',fontWeight:500,fontSize:'.7rem',marginTop:'4px',opacity:.8}}>{t('comparison.table.sub_maintevo')}</div>
                  </th>
                  <th style={{padding:'14px 16px',textAlign:'center'}}>
                    <div style={{color:'#94a3b8',fontWeight:600,fontSize:'.8rem',textTransform:'uppercase',letterSpacing:'.06em'}}>{t('comparison.table.col_sap')}</div>
                    <div style={{color:'#64748b',fontWeight:400,fontSize:'.7rem',marginTop:'4px'}}>{t('comparison.table.sub_sap')}</div>
                  </th>
                  <th style={{padding:'14px 16px',textAlign:'center'}}>
                    <div style={{color:'#94a3b8',fontWeight:600,fontSize:'.8rem',textTransform:'uppercase',letterSpacing:'.06em'}}>{t('comparison.table.col_maximo')}</div>
                    <div style={{color:'#64748b',fontWeight:400,fontSize:'.7rem',marginTop:'4px'}}>{t('comparison.table.sub_maximo')}</div>
                  </th>
                  <th style={{padding:'14px 16px',textAlign:'center'}}>
                    <div style={{color:'#94a3b8',fontWeight:600,fontSize:'.8rem',textTransform:'uppercase',letterSpacing:'.06em'}}>{t('comparison.table.col_upkeep')}</div>
                    <div style={{color:'#64748b',fontWeight:400,fontSize:'.7rem',marginTop:'4px'}}>{t('comparison.table.sub_upkeep')}</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.key} style={{borderBottom:'1px solid rgba(255,255,255,.05)',background: i % 2 === 1 ? 'rgba(255,255,255,.02)' : 'transparent'}}>
                    <td style={{padding:'14px 16px',fontWeight:500,color:'#fff'}}>{t(`comparison.table.${row.key}`)}</td>
                    <td style={{padding:'14px 16px',textAlign:'center',background:'rgba(59,130,246,.04)'}}><Cell value={row.maintevo} highlight t={t} /></td>
                    <td style={{padding:'14px 16px',textAlign:'center'}}><Cell value={row.sap} t={t} /></td>
                    <td style={{padding:'14px 16px',textAlign:'center'}}><Cell value={row.maximo} t={t} /></td>
                    <td style={{padding:'14px 16px',textAlign:'center'}}><Cell value={row.upkeep} t={t} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{fontSize:'.8rem',color:'#475569',marginTop:'20px',textAlign:'center',fontStyle:'italic'}}>{t('comparison.table.note')}</p>
        </div>
      </section>

      {/* Detailed Analysis */}
      <section style={{background:'#050b16',padding:'64px 0'}}>
        <div className="max-w-screen-xl px-6 mx-auto">
          <h2 style={{fontSize:'clamp(1.5rem,2.5vw,2rem)',fontWeight:900,textAlign:'center',color:'#fff',marginBottom:'40px',letterSpacing:'-.03em'}}>{t('comparison.analysis.title')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {platforms.map(p => (
              <div key={p.key} className={`price-card${p.featured ? ' featured' : ''}`}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'6px',flexWrap:'wrap',gap:'8px'}}>
                  <h3 style={{fontSize:'1.3rem',fontWeight:700,color:'#fff'}}>{t(`comparison.analysis.${p.key}.name`)}</h3>
                  <StarRating score={p.score} />
                </div>
                <p style={{color: p.featured ? '#60a5fa' : '#64748b',fontWeight:600,fontSize:'.9rem',marginBottom:'24px'}}>{t(`comparison.analysis.${p.key}.price`)}</p>

                <div style={{marginBottom:'20px'}}>
                  <div style={{fontSize:'.75rem',fontWeight:700,color:'#22c55e',textTransform:'uppercase',letterSpacing:'.06em',marginBottom:'10px'}}>{t('comparison.analysis.pros_label')}</div>
                  <ul style={{display:'flex',flexDirection:'column',gap:'8px',listStyle:'none',padding:0}}>
                    {Array.from({ length: p.prosCount }, (_, i) => i + 1).map(n => (
                      <li key={n} style={{display:'flex',alignItems:'flex-start',gap:'10px',fontSize:'.9rem',color:'#94a3b8'}}>
                        <CheckIcon />{t(`comparison.analysis.${p.key}.p${n}`)}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{marginBottom:'20px'}}>
                  <div style={{fontSize:'.75rem',fontWeight:700,color:'#ef4444',textTransform:'uppercase',letterSpacing:'.06em',marginBottom:'10px'}}>{t('comparison.analysis.cons_label')}</div>
                  <ul style={{display:'flex',flexDirection:'column',gap:'8px',listStyle:'none',padding:0}}>
                    {Array.from({ length: p.consCount }, (_, i) => i + 1).map(n => (
                      <li key={n} style={{display:'flex',alignItems:'flex-start',gap:'10px',fontSize:'.9rem',color:'#94a3b8'}}>
                        <CrossIcon />{t(`comparison.analysis.${p.key}.c${n}`)}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{borderTop:'1px solid rgba(255,255,255,.06)',paddingTop:'16px'}}>
                  <div style={{fontSize:'.75rem',fontWeight:700,color:'#60a5fa',textTransform:'uppercase',letterSpacing:'.06em',marginBottom:'6px'}}>{t('comparison.analysis.ideal_label')}</div>
                  <p style={{fontSize:'.9rem',color:'#94a3b8',lineHeight:1.6}}>{t(`comparison.analysis.${p.key}.ideal`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Savings Comparison */}
      <section style={{background:'#080f1e',padding:'64px 0'}}>
        <div style={{maxWidth:'760px',margin:'0 auto',padding:'0 24px'}}>
          <h2 style={{fontSize:'clamp(1.5rem,2.5vw,2rem)',fontWeight:900,textAlign:'center',color:'#fff',marginBottom:'10px',letterSpacing:'-.03em'}}>{t('comparison.savings.title')}</h2>
          <p style={{color:'#94a3b8',textAlign:'center',marginBottom:'40px'}}>{t('comparison.savings.desc')}</p>

          <div style={{display:'flex',flexDirection:'column',gap:'24px',marginBottom:'32px'}}>
            {savings.map(item => (
              <div key={item.labelKey}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',marginBottom:'8px',flexWrap:'wrap',gap:'4px'}}>
                  <span style={{fontWeight:600,color: item.highlight ? '#fff' : '#e2e8f0'}}>{t(`comparison.savings.${item.labelKey}`)}</span>
                  <span style={{fontWeight:800,fontSize:'1.05rem',color: item.highlight ? '#22c55e' : '#fff'}}>{t(`comparison.savings.${item.costKey}`)}</span>
                </div>
                <div style={{height:'10px',borderRadius:'6px',background:'rgba(255,255,255,.06)',overflow:'hidden'}}>
                  <div style={{height:'100%',width:`${item.pct}%`,borderRadius:'6px',background:item.color}} />
                </div>
                <div style={{fontSize:'.8rem',color:'#64748b',marginTop:'6px'}}>{t(`comparison.savings.${item.noteKey}`)}</div>
              </div>
            ))}
          </div>

          <div style={{background:'rgba(34,197,94,.08)',border:'1px solid rgba(34,197,94,.25)',borderRadius:'16px',padding:'24px',textAlign:'center'}}>
            <p style={{color:'#fff',fontWeight:700,fontSize:'1.05rem',marginBottom:'18px'}}>{t('comparison.savings.highlight')}</p>
            <Link to="/pricing" className="btn-p">{t('comparison.savings.cta')}</Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{background:'#050b16',padding:'64px 0',borderTop:'1px solid rgba(255,255,255,.06)'}}>
        <div className="max-w-screen-xl px-6 mx-auto text-center">
          <h2 style={{fontSize:'clamp(1.5rem,2.5vw,2rem)',fontWeight:900,color:'#fff',marginBottom:'14px',letterSpacing:'-.03em'}}>{t('comparison.cta.title')}</h2>
          <p style={{color:'#94a3b8',fontSize:'1.05rem',marginBottom:'28px',maxWidth:'600px',margin:'0 auto 28px'}}>{t('comparison.cta.desc')}</p>
          <div style={{display:'flex',gap:'14px',justifyContent:'center',flexWrap:'wrap'}}>
            <Link to="/contact" className="btn-p">
              {t('common.getStartedFree')}
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link to="/" className="btn-s">{t('common.seeAllFeatures')}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
