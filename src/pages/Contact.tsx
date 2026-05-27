import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', company: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section style={{background:'#050b16',paddingTop:'112px',paddingBottom:'80px'}}>
      <div className="max-w-screen-xl px-6 mx-auto">
        <div style={{maxWidth:'640px',margin:'0 auto 56px',textAlign:'center'}}>
          <h1 style={{fontSize:'clamp(2rem,4vw,3rem)',fontWeight:900,letterSpacing:'-.03em',color:'#fff',marginBottom:'16px'}}>Get in touch</h1>
          <p style={{color:'#94a3b8',fontSize:'1.05rem',lineHeight:1.7}}>Start your free trial, request a demo, or just ask us anything. We'll get back to you within one business day.</p>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">

          {/* Form */}
          <div>
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 mb-5">
                  <div>
                    <label htmlFor="firstName" className="form-label">First name</label>
                    <input type="text" id="firstName" name="firstName" required className="form-input" placeholder="John" value={form.firstName} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="form-label">Last name</label>
                    <input type="text" id="lastName" name="lastName" required className="form-input" placeholder="Smith" value={form.lastName} onChange={handleChange} />
                  </div>
                </div>
                <div className="mb-5">
                  <label htmlFor="email" className="form-label">Work email</label>
                  <input type="email" id="email" name="email" required className="form-input" placeholder="john@company.com" value={form.email} onChange={handleChange} />
                </div>
                <div className="mb-5">
                  <label htmlFor="company" className="form-label">Company</label>
                  <input type="text" id="company" name="company" className="form-input" placeholder="Acme Inc." value={form.company} onChange={handleChange} />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea id="message" name="message" rows={5} className="form-input" placeholder="Tell us what you're looking for..." value={form.message} onChange={handleChange} />
                </div>
                <button type="submit" className="btn-p" style={{width:'100%',justifyContent:'center',padding:'14px',fontSize:'15px'}}>Send message</button>
              </form>
            ) : (
              <div style={{padding:'16px',background:'rgba(34,197,94,.08)',border:'1px solid rgba(34,197,94,.2)',borderRadius:'10px'}} role="alert">
                <span style={{fontWeight:600,color:'#4ade80'}}>Message sent!</span> <span style={{color:'#94a3b8'}}>Thanks for reaching out — we'll get back to you within one business day.</span>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div style={{marginTop:'40px'}} className="lg:mt-0 space-y-8">
            <div>
              <h3 style={{fontSize:'1.1rem',fontWeight:700,color:'#fff',marginBottom:'8px'}}>Email us</h3>
              <p style={{color:'#94a3b8',marginBottom:'6px'}}>For general enquiries and demos:</p>
              <a href="mailto:hello@maintevo.io" style={{color:'#60a5fa',textDecoration:'none'}} className="hover:underline">hello@maintevo.io</a>
            </div>
            <div>
              <h3 style={{fontSize:'1.1rem',fontWeight:700,color:'#fff',marginBottom:'8px'}}>Call us</h3>
              <p style={{color:'#94a3b8',marginBottom:'6px'}}>Mon–Fri, 9am–6pm EST</p>
              <a href="tel:+18001234567" style={{color:'#60a5fa',textDecoration:'none'}} className="hover:underline">+1 (800) 123-4567</a>
            </div>
            <div>
              <h3 style={{fontSize:'1.1rem',fontWeight:700,color:'#fff',marginBottom:'8px'}}>Office</h3>
              <p style={{color:'#94a3b8',lineHeight:1.7}}>123 Maintenance Ave, Suite 400<br />Detroit, MI 48201<br />United States</p>
            </div>
            <div style={{padding:'24px',background:'rgba(59,130,246,.06)',border:'1px solid rgba(59,130,246,.15)',borderRadius:'14px'}}>
              <h3 style={{fontSize:'1.1rem',fontWeight:700,color:'#fff',marginBottom:'8px'}}>Start your free trial</h3>
              <p style={{color:'#94a3b8',marginBottom:'16px',lineHeight:1.6}}>No credit card needed. Full access for 30 days. Set up in under 10 minutes.</p>
              <ul style={{display:'flex',flexDirection:'column',gap:'8px'}}>
                {['Unlimited work orders during trial','Import your assets from Excel','Onboarding call included'].map(item => (
                  <li key={item} style={{display:'flex',alignItems:'center',gap:'8px',fontSize:'.875rem',color:'#94a3b8'}}>
                    <svg style={{width:'16px',height:'16px',color:'#3b82f6',flexShrink:0}} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
