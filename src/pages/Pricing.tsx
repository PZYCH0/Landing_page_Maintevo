import { useState } from 'react';
import { Link } from 'react-router-dom';

const CheckIcon = ({ color = '#22c55e' }: { color?: string }) => (
  <svg style={{width:'18px',height:'18px',color,flexShrink:0}} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const ChevronIcon = () => (
  <svg className="faq-icon w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const faqs = [
  {
    q: 'Is there a free trial?',
    a: 'Yes — every plan includes a 30-day free trial with full access to all features. No credit card is required to start. At the end of the trial, choose the plan that fits your team or cancel with no charge.',
    defaultOpen: true,
  },
  {
    q: 'Can I cancel at any time?',
    a: 'Absolutely. Monthly plans can be cancelled at any time and you keep access until the end of your billing period. Annual plans are refundable within the first 30 days.',
    defaultOpen: false,
  },
  {
    q: 'Is there a discount for annual billing?',
    a: 'Yes — pay annually and get 2 months free (equivalent to ~17% off). Switch between monthly and annual billing any time from your account settings.',
    defaultOpen: false,
  },
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (i: number) => setOpenFaq(prev => prev === i ? null : i);

  return (
    <>
      {/* Hero */}
      <section style={{background:'#050b16',paddingTop:'112px',paddingBottom:'32px'}}>
        <div className="max-w-screen-xl px-6 mx-auto text-center">
          <h1 style={{fontSize:'clamp(2rem,4vw,3rem)',fontWeight:900,letterSpacing:'-.03em',color:'#fff',marginBottom:'14px'}}>Simple, transparent pricing</h1>
          <p style={{color:'#94a3b8',fontSize:'1.05rem'}}>No hidden fees. No surprises. Cancel anytime.</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section style={{background:'#050b16',paddingBottom:'64px'}}>
        <div className="max-w-screen-xl px-6 mx-auto">
          <div className="space-y-6 lg:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0">

            {/* Starter */}
            <div className="price-card">
              <h3 style={{fontSize:'1.4rem',fontWeight:700,color:'#fff',marginBottom:'10px'}}>Starter</h3>
              <p style={{color:'#94a3b8',marginBottom:'24px'}}>Perfect for small facilities and single-site operations.</p>
              <div style={{display:'flex',alignItems:'baseline',marginBottom:'28px'}}>
                <span style={{fontSize:'3rem',fontWeight:900,color:'#fff',marginRight:'6px'}}>$49</span>
                <span style={{color:'#64748b'}}>/month</span>
              </div>
              <ul style={{display:'flex',flexDirection:'column',gap:'12px',marginBottom:'28px',listStyle:'none',padding:0}}>
                <li style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'.9rem',color:'#94a3b8'}}><CheckIcon />Up to <strong style={{color:'#fff'}}>3 users</strong></li>
                <li style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'.9rem',color:'#94a3b8'}}><CheckIcon />Up to <strong style={{color:'#fff'}}>50 assets</strong></li>
                <li style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'.9rem',color:'#94a3b8'}}><CheckIcon />Work order management</li>
                <li style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'.9rem',color:'#94a3b8'}}><CheckIcon />Mobile app access</li>
                <li style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'.9rem',color:'#94a3b8'}}><CheckIcon />Email support</li>
              </ul>
              <Link to="/contact" className="btn-p" style={{width:'100%',justifyContent:'center',padding:'12px'}}>Get started</Link>
            </div>

            {/* Professional */}
            <div className="price-card featured">
              <div style={{display:'inline-flex',alignItems:'center',gap:'6px',background:'rgba(59,130,246,.2)',border:'1px solid rgba(59,130,246,.35)',borderRadius:'100px',padding:'4px 12px',fontSize:'12px',fontWeight:600,color:'#60a5fa',marginBottom:'14px'}}>Most Popular</div>
              <h3 style={{fontSize:'1.4rem',fontWeight:700,color:'#fff',marginBottom:'10px'}}>Professional</h3>
              <p style={{color:'#94a3b8',marginBottom:'24px'}}>Ideal for growing teams managing multiple assets and sites.</p>
              <div style={{display:'flex',alignItems:'baseline',marginBottom:'28px'}}>
                <span style={{fontSize:'3rem',fontWeight:900,color:'#fff',marginRight:'6px'}}>$149</span>
                <span style={{color:'#64748b'}}>/month</span>
              </div>
              <ul style={{display:'flex',flexDirection:'column',gap:'12px',marginBottom:'28px',listStyle:'none',padding:0}}>
                <li style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'.9rem',color:'#94a3b8'}}><CheckIcon color="#60a5fa" />Up to <strong style={{color:'#fff'}}>25 users</strong></li>
                <li style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'.9rem',color:'#94a3b8'}}><CheckIcon color="#60a5fa" />Up to <strong style={{color:'#fff'}}>500 assets</strong></li>
                <li style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'.9rem',color:'#94a3b8'}}><CheckIcon color="#60a5fa" />Preventive maintenance scheduling</li>
                <li style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'.9rem',color:'#94a3b8'}}><CheckIcon color="#60a5fa" />Inventory &amp; parts tracking</li>
                <li style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'.9rem',color:'#94a3b8'}}><CheckIcon color="#60a5fa" />Priority support</li>
              </ul>
              <Link to="/contact" className="btn-p" style={{width:'100%',justifyContent:'center',padding:'12px'}}>Get started</Link>
            </div>

            {/* Enterprise */}
            <div className="price-card">
              <h3 style={{fontSize:'1.4rem',fontWeight:700,color:'#fff',marginBottom:'10px'}}>Enterprise</h3>
              <p style={{color:'#94a3b8',marginBottom:'24px'}}>For large-scale operations with multi-site and custom integration needs.</p>
              <div style={{display:'flex',alignItems:'baseline',marginBottom:'28px'}}>
                <span style={{fontSize:'3rem',fontWeight:900,color:'#fff',marginRight:'6px'}}>$499</span>
                <span style={{color:'#64748b'}}>/month</span>
              </div>
              <ul style={{display:'flex',flexDirection:'column',gap:'12px',marginBottom:'28px',listStyle:'none',padding:0}}>
                <li style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'.9rem',color:'#94a3b8'}}><CheckIcon /><strong style={{color:'#fff'}}>Unlimited</strong> users</li>
                <li style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'.9rem',color:'#94a3b8'}}><CheckIcon /><strong style={{color:'#fff'}}>Unlimited</strong> assets &amp; sites</li>
                <li style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'.9rem',color:'#94a3b8'}}><CheckIcon />Custom ERP &amp; third-party integrations</li>
                <li style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'.9rem',color:'#94a3b8'}}><CheckIcon />Dedicated account manager</li>
                <li style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'.9rem',color:'#94a3b8'}}><CheckIcon />SLA &amp; 24/7 premium support</li>
              </ul>
              <Link to="/contact" className="btn-p" style={{width:'100%',justifyContent:'center',padding:'12px'}}>Contact sales</Link>
            </div>

          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section style={{background:'#080f1e',padding:'64px 0'}}>
        <div className="max-w-screen-xl px-6 mx-auto">
          <h2 style={{fontSize:'clamp(1.5rem,2.5vw,2rem)',fontWeight:900,textAlign:'center',color:'#fff',marginBottom:'32px',letterSpacing:'-.03em'}}>Compare plans</h2>
          <div className="table-scroll" style={{overflowX:'auto'}}>
            <table style={{width:'100%',borderCollapse:'collapse',fontSize:'.9rem',minWidth:'520px'}}>
              <thead>
                <tr style={{borderBottom:'1px solid rgba(255,255,255,.08)'}}>
                  <th style={{padding:'14px 16px',textAlign:'left',color:'#94a3b8',fontWeight:600,fontSize:'.8rem',textTransform:'uppercase',letterSpacing:'.06em'}}>Feature</th>
                  <th style={{padding:'14px 16px',textAlign:'center',color:'#94a3b8',fontWeight:600,fontSize:'.8rem',textTransform:'uppercase',letterSpacing:'.06em'}}>Starter</th>
                  <th style={{padding:'14px 16px',textAlign:'center',color:'#60a5fa',fontWeight:600,fontSize:'.8rem',textTransform:'uppercase',letterSpacing:'.06em'}}>Professional</th>
                  <th style={{padding:'14px 16px',textAlign:'center',color:'#94a3b8',fontWeight:600,fontSize:'.8rem',textTransform:'uppercase',letterSpacing:'.06em'}}>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Users', starter: '3', pro: '25', ent: 'Unlimited', altRow: false },
                  { feature: 'Assets', starter: '50', pro: '500', ent: 'Unlimited', altRow: true },
                  { feature: 'Work Orders', starter: '✓', pro: '✓', ent: '✓', altRow: false, green: true },
                  { feature: 'Preventive Maintenance', starter: '—', pro: '✓', ent: '✓', altRow: true },
                  { feature: 'Inventory Management', starter: '—', pro: '✓', ent: '✓', altRow: false },
                  { feature: 'Custom Integrations', starter: '—', pro: '—', ent: '✓', altRow: true },
                  { feature: 'Dedicated Account Manager', starter: '—', pro: '—', ent: '✓', altRow: false },
                ].map(row => (
                  <tr key={row.feature} style={{borderBottom:'1px solid rgba(255,255,255,.05)',background:row.altRow ? 'rgba(255,255,255,.02)' : 'transparent'}}>
                    <td style={{padding:'14px 16px',fontWeight:500,color:'#fff'}}>{row.feature}</td>
                    <td style={{padding:'14px 16px',textAlign:'center',color: row.starter === '✓' ? '#22c55e' : row.starter === '—' ? '#475569' : '#94a3b8'}}>{row.starter}</td>
                    <td style={{padding:'14px 16px',textAlign:'center',color: row.pro === '✓' ? '#22c55e' : row.pro === '—' ? '#475569' : '#60a5fa'}}>{row.pro}</td>
                    <td style={{padding:'14px 16px',textAlign:'center',color: row.ent === '✓' ? '#22c55e' : row.ent === '—' ? '#475569' : '#94a3b8'}}>{row.ent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{background:'#050b16',padding:'64px 0'}}>
        <div style={{maxWidth:'680px',margin:'0 auto',padding:'0 24px'}}>
          <h2 style={{fontSize:'clamp(1.5rem,2.5vw,2rem)',fontWeight:900,textAlign:'center',color:'#fff',marginBottom:'40px',letterSpacing:'-.03em'}}>Billing FAQ</h2>
          <div>
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <button className="faq-btn" onClick={() => toggleFaq(i)}>
                  <span>{faq.q}</span>
                  <span style={{transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', transition:'transform .3s', flexShrink:0, display:'inline-block'}}>
                    <ChevronIcon />
                  </span>
                </button>
                {openFaq === i && (
                  <div className="faq-body open">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{background:'#080f1e',padding:'48px 0',borderTop:'1px solid rgba(255,255,255,.06)'}}>
        <div className="max-w-screen-xl px-6 mx-auto text-center">
          <p style={{color:'#94a3b8',fontSize:'1.05rem'}}>Still have questions? <Link to="/contact" style={{color:'#60a5fa',fontWeight:500,textDecoration:'none'}} className="hover:underline">Talk to our team →</Link></p>
        </div>
      </section>
    </>
  );
}
