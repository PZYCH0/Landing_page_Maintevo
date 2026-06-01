export default function Contact() {
  return (
    <section style={{background:'#050b16',paddingTop:'112px',paddingBottom:'80px',minHeight:'80vh',display:'flex',alignItems:'center'}}>
      <div className="max-w-screen-xl px-6 mx-auto w-full">
        <div style={{maxWidth:'520px',margin:'0 auto',textAlign:'center'}}>
          <h1 style={{fontSize:'clamp(2rem,4vw,3rem)',fontWeight:900,letterSpacing:'-.03em',color:'#fff',marginBottom:'16px'}}>Get in touch</h1>
          <p style={{color:'#94a3b8',fontSize:'1.05rem',lineHeight:1.7,marginBottom:'40px'}}>
            Follow us on LinkedIn to stay up to date and reach out directly.
          </p>
          <a
            href="https://www.linkedin.com/company/mainteneat"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-p inline-flex items-center gap-3"
            style={{padding:'14px 32px',fontSize:'15px',justifyContent:'center'}}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
