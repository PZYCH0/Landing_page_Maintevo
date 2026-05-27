import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('🇫🇷');
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('site-lang');
    if (saved) setCurrentLang(saved);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const setLang = (flag: string) => {
    setCurrentLang(flag);
    setLangOpen(false);
    localStorage.setItem('site-lang', flag);
  };

  return (
    <header className="fixed w-full z-50">
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-6 py-3 mx-auto">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/images/logo-maintevo.png" style={{width:'44px',height:'44px',objectFit:'contain'}} className="mr-3" alt="MaintEvo" />
            <span className="self-center text-lg font-bold text-white whitespace-nowrap">Maint<span style={{color:'#3b82f6'}}>Evo</span></span>
          </Link>

          {/* Right controls */}
          <div className="flex items-center lg:order-2 gap-1">

            {/* Phone */}
            <a href="tel:8884515787" className="hidden sm:inline-flex items-center text-sm font-medium text-white/70 hover:text-white mr-3 transition-colors">
              <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Contact sales: (888) 451-5787
            </a>

            {/* Language switcher */}
            <div className="relative mr-1" ref={langRef}>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); setLangOpen(o => !o); }}
                className="inline-flex items-center gap-1 px-2 py-2 text-sm font-medium text-white/70 rounded-lg hover:bg-white/10 hover:text-white focus:outline-none transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                </svg>
                <span>{currentLang}</span>
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-1 w-36 rounded-lg shadow-lg z-50" style={{background:'rgba(5,11,22,.97)',border:'1px solid rgba(255,255,255,.1)'}}>
                  <ul className="py-1 text-sm text-white/80">
                    <li><button onClick={() => setLang('🇫🇷')} className="flex items-center gap-2 w-full px-4 py-2 hover:bg-white/10 hover:text-white transition-colors">🇫🇷 Français</button></li>
                    <li><button onClick={() => setLang('🇬🇧')} className="flex items-center gap-2 w-full px-4 py-2 hover:bg-white/10 hover:text-white transition-colors">🇬🇧 English</button></li>
                  </ul>
                </div>
              )}
            </div>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              type="button"
              className="inline-flex items-center p-2 text-white/70 rounded-lg hover:bg-white/10 hover:text-white focus:outline-none transition-colors"
              aria-label="Toggle theme"
            >
              <svg className="theme-sun-icon w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
              <svg className="theme-moon-icon w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
              </svg>
            </button>

            {/* Get Started */}
            <Link to="/contact" className="btn-p" style={{padding:'9px 20px',fontSize:'13px'}}>Get Started</Link>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen(o => !o)}
              className="inline-flex items-center p-2 ml-1 text-white/70 rounded-lg lg:hidden hover:bg-white/10 hover:text-white focus:outline-none transition-colors"
              aria-label="Menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              )}
            </button>
          </div>

          {/* Desktop / mobile nav links */}
          <div
            className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${menuOpen ? 'flex flex-col' : 'hidden'}`}
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:gap-8 lg:mt-0">
              <li><Link to="/" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-white/80 hover:text-white transition-colors lg:p-0 block py-2">Product</Link></li>
              <li><Link to="/industries" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-white/80 hover:text-white transition-colors lg:p-0 block py-2">Industries</Link></li>
              <li><Link to="/enterprise" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-white/80 hover:text-white transition-colors lg:p-0 block py-2">Enterprise</Link></li>
              <li><Link to="/pricing" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-white/80 hover:text-white transition-colors lg:p-0 block py-2">Pricing</Link></li>
              <li><Link to="/resources" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-white/80 hover:text-white transition-colors lg:p-0 block py-2">Resources</Link></li>
            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}
