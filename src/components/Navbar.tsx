import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n/index';

export default function Navbar() {
  const { toggleTheme, dark } = useTheme();
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<'en' | 'fr'>(() => {
    const saved = localStorage.getItem('site-lang');
    return (saved === 'en' || saved === 'fr') ? saved : 'fr';
  });
  const langRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLLIElement>(null);

  const features = [
    { labelKey: 'nav.features.workOrders',  to: '/features/work-orders',            icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
    { labelKey: 'nav.features.equipment',   to: '/features/equipment',              icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
    { labelKey: 'nav.features.preventive',  to: '/features/preventive-maintenance', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { labelKey: 'nav.features.inventory',   to: '/features/inventory',              icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
    { labelKey: 'nav.features.kpi',         to: '/features/kpi-dashboard',          icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
    { labelKey: 'nav.features.calendar',    to: '/features/maintenance-calendar',   icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { labelKey: 'nav.features.roles',       to: '/features/roles',                  icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
    { labelKey: 'nav.features.reporting',   to: '/features/reporting',              icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
      if (productRef.current && !productRef.current.contains(e.target as Node)) setProductOpen(false);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const setLang = (lang: 'en' | 'fr') => {
    setCurrentLang(lang);
    setLangOpen(false);
    localStorage.setItem('site-lang', lang);
    i18n.changeLanguage(lang);
  };

  return (
    <header className="fixed w-full z-50">
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 sm:px-6 py-3 mx-auto">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/images/logo-maintevo.png" style={{width:'44px',height:'44px',objectFit:'contain'}} className="mr-3" alt="MaintEvo" />
            <span className="self-center text-lg font-bold text-white whitespace-nowrap">Maint<span style={{color:'#3b82f6'}}>Evo</span></span>
          </Link>

          {/* Right controls */}
          <div className="flex items-center lg:order-2 gap-1">

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
                <span>{currentLang === 'fr' ? '🇫🇷' : '🇬🇧'}</span>
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-1 w-36 rounded-lg shadow-lg z-50" style={{background:'rgba(5,11,22,.97)',border:'1px solid rgba(255,255,255,.1)'}}>
                  <ul className="py-1 text-sm text-white/80">
                    <li><button onClick={() => setLang('fr')} className="flex items-center gap-2 w-full px-4 py-2 hover:bg-white/10 hover:text-white transition-colors">🇫🇷 Français</button></li>
                    <li><button onClick={() => setLang('en')} className="flex items-center gap-2 w-full px-4 py-2 hover:bg-white/10 hover:text-white transition-colors">🇬🇧 English</button></li>
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

            {/* Log In */}
            <a
              href="#"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white transition-colors px-4 py-2 rounded-lg border border-white/20 hover:border-white/40 hover:bg-white/5"
              style={{fontSize:'13px'}}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
              </svg>
              {t('nav.login')}
            </a>

            {/* Get Started */}
            <Link to="/contact" className="btn-p hidden sm:inline-flex" style={{padding:'9px 20px',fontSize:'13px'}}>{t('nav.getStarted')}</Link>

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
              {/* Product dropdown */}
              <li className="relative" ref={productRef}>
                <button
                  onClick={(e) => { e.stopPropagation(); setProductOpen(o => !o); }}
                  className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white transition-colors lg:p-0 py-2 bg-transparent border-none cursor-pointer w-full lg:w-auto"
                >
                  {t('nav.product')}
                  <svg className="w-3.5 h-3.5 transition-transform" style={{transform: productOpen ? 'rotate(180deg)' : 'rotate(0deg)'}} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </button>
                {productOpen && (
                  <div className="lg:absolute left-0 top-full mt-2 z-50 w-full lg:w-[480px] rounded-xl shadow-2xl overflow-hidden"
                    style={{
                      background: dark ? 'rgba(5,11,22,.97)' : 'rgba(255,255,255,.98)',
                      border: dark ? '1px solid rgba(59,130,246,.2)' : '1px solid rgba(59,130,246,.15)',
                      backdropFilter: 'blur(20px)',
                      boxShadow: dark ? '0 20px 60px rgba(0,0,0,.5)' : '0 20px 60px rgba(0,0,0,.12)',
                    }}>
                    <div className="p-3 grid grid-cols-1 lg:grid-cols-2 gap-1">
                      {features.map(f => (
                        <Link
                          key={f.to}
                          to={f.to}
                          onClick={() => { setProductOpen(false); setMenuOpen(false); }}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group"
                          style={{textDecoration:'none'}}
                          onMouseEnter={e => (e.currentTarget.style.background = dark ? 'rgba(255,255,255,.05)' : 'rgba(59,130,246,.06)')}
                          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                        >
                          <div style={{width:'32px',height:'32px',borderRadius:'8px',background:'rgba(59,130,246,.1)',border:'1px solid rgba(59,130,246,.2)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                            <svg width="15" height="15" fill="none" stroke="#60a5fa" strokeWidth="1.8" viewBox="0 0 24 24">
                              <path d={f.icon}/>
                            </svg>
                          </div>
                          <span className="text-sm font-medium transition-colors" style={{color: dark ? 'rgba(255,255,255,.8)' : '#1e293b'}}>{t(f.labelKey)}</span>
                        </Link>
                      ))}
                    </div>
                    <div style={{borderTop: dark ? '1px solid rgba(255,255,255,.06)' : '1px solid rgba(59,130,246,.1)', padding:'10px 12px'}}>
                      <Link to="/" onClick={() => { setProductOpen(false); setMenuOpen(false); }}
                        className="text-xs text-blue-400 hover:text-blue-300 transition-colors font-medium flex items-center gap-1">
                        {t('nav.viewAll')}
                        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </Link>
                    </div>
                  </div>
                )}
              </li>
              <li><Link to="/industries" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-white/80 hover:text-white transition-colors lg:p-0 block py-2">{t('nav.industries')}</Link></li>
              <li><Link to="/enterprise" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-white/80 hover:text-white transition-colors lg:p-0 block py-2">{t('nav.enterprise')}</Link></li>
              <li><Link to="/pricing" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-white/80 hover:text-white transition-colors lg:p-0 block py-2">{t('nav.pricing')}</Link></li>
              <li><Link to="/resources" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-white/80 hover:text-white transition-colors lg:p-0 block py-2">{t('nav.resources')}</Link></li>
              <li className="lg:hidden pt-1">
                <a href="#" className="flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white transition-colors py-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
                  </svg>
                  {t('nav.login')}
                </a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}
