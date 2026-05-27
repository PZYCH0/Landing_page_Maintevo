import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{background:'#050b16',borderTop:'1px solid rgba(255,255,255,.06)',padding:'64px 0 40px'}}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          <div className="md:col-span-2">
            <Link to="/" style={{display:'inline-flex',alignItems:'center',gap:'10px',textDecoration:'none',marginBottom:'16px'}}>
              <img src="/images/logo-maintevo.png" style={{width:'34px',height:'34px',objectFit:'contain'}} alt="MaintEvo" />
              <span style={{fontSize:'18px',fontWeight:700,color:'#fff'}}>Maint<span style={{color:'#3b82f6'}}>Evo</span></span>
            </Link>
            <p style={{fontSize:'14px',lineHeight:1.7,maxWidth:'260px',color:'#64748b'}}>The AI-powered CMMS platform built for the next era of industrial maintenance.</p>
            <div style={{display:'flex',gap:'12px',marginTop:'16px'}}>
              <a href="#" style={{width:'34px',height:'34px',borderRadius:'8px',background:'rgba(255,255,255,.05)',border:'1px solid rgba(255,255,255,.08)',display:'flex',alignItems:'center',justifyContent:'center',color:'#64748b',transition:'all .2s',textDecoration:'none'}}>
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" style={{width:'34px',height:'34px',borderRadius:'8px',background:'rgba(255,255,255,.05)',border:'1px solid rgba(255,255,255,.08)',display:'flex',alignItems:'center',justifyContent:'center',color:'#64748b',transition:'all .2s',textDecoration:'none'}}>
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
              </a>
            </div>
          </div>

          <div>
            <div style={{fontSize:'13px',fontWeight:600,color:'#fff',marginBottom:'16px'}}>Platform</div>
            <ul style={{display:'flex',flexDirection:'column',gap:'10px',listStyle:'none',padding:0}}>
              <li><Link to="/features" style={{fontSize:'13px',textDecoration:'none',color:'#64748b'}} className="hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/pricing" style={{fontSize:'13px',textDecoration:'none',color:'#64748b'}} className="hover:text-white transition-colors">Pricing</Link></li>
              <li><a href="#" style={{fontSize:'13px',textDecoration:'none',color:'#64748b'}} className="hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" style={{fontSize:'13px',textDecoration:'none',color:'#64748b'}} className="hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>
          <div>
            <div style={{fontSize:'13px',fontWeight:600,color:'#fff',marginBottom:'16px'}}>Company</div>
            <ul style={{display:'flex',flexDirection:'column',gap:'10px',listStyle:'none',padding:0}}>
              <li><Link to="/about" style={{fontSize:'13px',textDecoration:'none',color:'#64748b'}} className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" style={{fontSize:'13px',textDecoration:'none',color:'#64748b'}} className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" style={{fontSize:'13px',textDecoration:'none',color:'#64748b'}} className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" style={{fontSize:'13px',textDecoration:'none',color:'#64748b'}} className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <div style={{fontSize:'13px',fontWeight:600,color:'#fff',marginBottom:'16px'}}>Legal</div>
            <ul style={{display:'flex',flexDirection:'column',gap:'10px',listStyle:'none',padding:0}}>
              <li><a href="#" style={{fontSize:'13px',textDecoration:'none',color:'#64748b'}} className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" style={{fontSize:'13px',textDecoration:'none',color:'#64748b'}} className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" style={{fontSize:'13px',textDecoration:'none',color:'#64748b'}} className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div style={{borderTop:'1px solid rgba(255,255,255,.06)',paddingTop:'28px',display:'flex',flexWrap:'wrap',justifyContent:'space-between',alignItems:'center',gap:'12px'}}>
          <p style={{fontSize:'13px',color:'#475569'}}>© 2025 MaintEvo™. All rights reserved.</p>
          <div style={{display:'flex',alignItems:'center',gap:'6px'}}>
            <div style={{width:'6px',height:'6px',borderRadius:'50%',background:'#22c55e',animation:'blink 3s ease infinite'}}></div>
            <span style={{fontSize:'12px',color:'#475569'}}>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
