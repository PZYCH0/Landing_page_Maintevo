import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Settings, Menu, X, ChevronDown, Sun, Moon, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/Button';
import { useLanguage } from '../context/LanguageContext';

const navLabels = {
  features:     { fr: 'Fonctionnalités', ar: 'الميزات',   en: 'Features' },
  industries:   { fr: 'Industries',      ar: 'القطاعات',  en: 'Industries' },
  integrations: { fr: 'Intégrations',    ar: 'التكاملات', en: 'Integrations' },
  pricing:      { fr: 'Tarifs',          ar: 'الأسعار',   en: 'Pricing' },
  blog:         { fr: 'Blog',            ar: 'المدونة',   en: 'Blog' },
  about:        { fr: 'À propos',        ar: 'من نحن',    en: 'About' },
  help:         { fr: 'Aide',            ar: 'المساعدة',  en: 'Help' },
  login:        { fr: 'Connexion',       ar: 'تسجيل الدخول', en: 'Login' },
  bookDemo:     { fr: 'Réserver une démo', ar: 'طلب عرض حي', en: 'Book a Demo' },
  langFr:       { fr: 'Passer en français', ar: 'التبديل إلى الفرنسية', en: 'Switch to French' },
  langAr:       { fr: 'Passer en arabe', ar: 'التبديل إلى العربية', en: 'Switch to Arabic' },
  langEn:       { fr: 'Passer en anglais', ar: 'التبديل إلى الإنجليزية', en: 'Switch to English' },
  themeDark:    { fr: 'Passer en mode clair', ar: 'التبديل إلى الوضع الفاتح', en: 'Switch to light mode' },
  themeLight:   { fr: 'Passer en mode sombre', ar: 'التبديل إلى الوضع الداكن', en: 'Switch to dark mode' },
};

export function Navbar() {
  const { language, setLanguage, isRtl } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [theme, setTheme] = useState('dark');
  const n = (key: keyof typeof navLabels) => navLabels[key][language as 'fr' | 'ar' | 'en'];

  // Language dropdown state (state-driven, click-to-toggle for mobile + desktop)
  const [langOpen, setLangOpen] = useState<null | 'desktop' | 'mobile'>(null);
  const langDesktopRef = useRef<HTMLDivElement>(null);
  const langMobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!langOpen) return;
    const handlePointer = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      const insideDesktop = langDesktopRef.current?.contains(target);
      const insideMobile = langMobileRef.current?.contains(target);
      if (!insideDesktop && !insideMobile) setLangOpen(null);
    };
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') setLangOpen(null); };
    document.addEventListener('mousedown', handlePointer);
    document.addEventListener('touchstart', handlePointer);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handlePointer);
      document.removeEventListener('touchstart', handlePointer);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [langOpen]);

  const pickLang = (lang: 'fr' | 'ar' | 'en') => {
    setLanguage(lang);
    setLangOpen(null);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light') {
      setTheme('light');
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, zIndex: 100,
          background: scrolled ? 'color-mix(in srgb, var(--color-bg) 85%, transparent)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
          transition: 'all 0.3s ease',
          padding: scrolled ? '0.25rem 0' : '0.5rem 0'
        }}
      >
        <div className="container flex items-center justify-between">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '800', fontSize: '1.2rem', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Settings size={22} color="var(--color-primary)" />
            </div>
            <span>
              <span style={{ color: 'var(--color-primary)' }}>MAINT</span>
              <span style={{ color: 'var(--color-text)' }}>evo</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'none' }} className="md-flex items-center gap-8">
            <ul style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', direction: language === 'ar' ? 'rtl' : 'ltr' }}>
              
              <li className="nav-dropdown">
                <button className="nav-link nav-dropdown-trigger" aria-haspopup="true" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}>
                  {n('features')} <ChevronDown size={14} />
                </button>
                <div className="mega-menu glass-card" role="menu">
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.5rem', padding: '1rem', textAlign: language === 'ar' ? 'right' : 'left' }}>
                    <Link to="/features#bons-de-travail" className="mega-link" role="menuitem">{language === 'ar' ? 'تدبير أوامر العمل' : language === 'fr' ? 'Bons de travail' : 'Work Orders'}</Link>
                    <Link to="/features#preventive" className="mega-link" role="menuitem">{language === 'ar' ? 'الصيانة الوقائية' : language === 'fr' ? 'Maintenance préventive' : 'Preventive Maintenance'}</Link>
                    <Link to="/features#stocks" className="mega-link" role="menuitem">{language === 'ar' ? 'المخزون والقطع' : language === 'fr' ? 'Stocks & Pièces' : 'Stocks & Parts'}</Link>
                    <Link to="/features#rapports" className="mega-link" role="menuitem">{language === 'ar' ? 'التقارير والمؤشرات' : language === 'fr' ? 'Rapports & KPIs' : 'Reports & KPIs'}</Link>
                    <Link to="/features#mobile" className="mega-link" role="menuitem">{language === 'ar' ? 'تطبيق الهاتف' : language === 'fr' ? 'Application mobile' : 'Mobile App'}</Link>
                    <Link to="/integrations" className="mega-link" role="menuitem">{n('integrations')}</Link>
                  </div>
                </div>
              </li>

              <li className="nav-dropdown">
                <button className="nav-link nav-dropdown-trigger" aria-haspopup="true" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}>
                  {n('industries')} <ChevronDown size={14} />
                </button>
                <div className="mega-menu glass-card" role="menu">
                  <div style={{ display: 'grid', gridTemplateColumns: 'minmax(220px, 1fr) minmax(220px, 1fr)', gap: '0.5rem', padding: '1rem', textAlign: language === 'ar' ? 'right' : 'left' }}>
                    <Link to="/industries/fabrication" className="mega-link" role="menuitem">{language === 'ar' ? 'الصناعة والتحويل' : language === 'fr' ? 'Fabrication' : 'Manufacturing'}</Link>
                    <Link to="/industries/energie" className="mega-link" role="menuitem">{language === 'ar' ? 'الطاقة والمرافق' : language === 'fr' ? 'Énergie & Utilities' : 'Energy & Utilities'}</Link>
                    <Link to="/industries/automobile" className="mega-link" role="menuitem">{language === 'ar' ? 'السيارات' : language === 'fr' ? 'Automobile' : 'Automotive'}</Link>
                    <Link to="/industries/sante" className="mega-link" role="menuitem">{language === 'ar' ? 'الصحة والصيدلة' : language === 'fr' ? 'Santé & Pharma' : 'Health & Pharma'}</Link>
                    <Link to="/industries/agroalimentaire" className="mega-link" role="menuitem">{language === 'ar' ? 'الصناعات الغذائية' : language === 'fr' ? 'Agroalimentaire' : 'Food & Beverage'}</Link>
                    <Link to="/industries/immobilier" className="mega-link" role="menuitem">{language === 'ar' ? 'العقارات والمرافق' : language === 'fr' ? 'Immobilier & Facilities' : 'Facilities & Real Estate'}</Link>
                    <Link to="/industries/transport" className="mega-link" role="menuitem">{language === 'ar' ? 'النقل واللوجستيك' : language === 'fr' ? 'Transport & Logistique' : 'Transport & Logistics'}</Link>
                    <Link to="/industries/mines" className="mega-link" role="menuitem">{language === 'ar' ? 'المناجم و الاستخراج' : language === 'fr' ? 'Mines & Extraction' : 'Mining & Extraction'}</Link>
                  </div>
                </div>
              </li>

              <li><Link to="/pricing" className={location.pathname === '/pricing' ? 'nav-link active' : 'nav-link'}>{n('pricing')}</Link></li>
              <li><Link to="/blog" className={location.pathname === '/blog' ? 'nav-link active' : 'nav-link'}>{n('blog')}</Link></li>
              <li><Link to="/about" className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}>{n('about')}</Link></li>
            </ul>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginLeft: '1rem', borderLeft: '1px solid var(--color-border)', paddingLeft: '1.25rem', direction: 'ltr' }}>
              <div ref={langDesktopRef} style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <button
                  onClick={() => setLangOpen(o => o === 'desktop' ? null : 'desktop')}
                  className="nav-dropdown-trigger"
                  aria-haspopup="true"
                  aria-expanded={langOpen === 'desktop'}
                  aria-label={`${n('langFr')}, ${n('langAr')}, ${n('langEn')}`}
                  style={{ fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', background: 'none', border: 'none', color: 'var(--color-text)', font: 'inherit', padding: '0.25rem 0.5rem' }}
                >
                  <Globe size={16} /> {language === 'fr' ? 'FR' : language === 'ar' ? 'AR' : 'EN'}
                  <ChevronDown size={14} style={{ transition: 'transform 0.2s', transform: langOpen === 'desktop' ? 'rotate(180deg)' : 'none' }} />
                </button>
                {langOpen === 'desktop' && (
                  <div
                    role="menu"
                    className="glass-card"
                    style={{
                      position: 'absolute', top: 'calc(100% + 8px)', right: 0,
                      minWidth: '160px', background: 'var(--color-surface)',
                      border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)',
                      boxShadow: '0 20px 40px -10px rgba(0,0,0,0.3)', zIndex: 200,
                    }}
                  >
                    <div style={{ padding: '0.5rem' }}>
                      {(['fr', 'ar', 'en'] as const).map(code => (
                        <button
                          key={code}
                          onClick={() => pickLang(code)}
                          className="mega-link"
                          aria-label={n(code === 'fr' ? 'langFr' : code === 'ar' ? 'langAr' : 'langEn')}
                          aria-current={language === code}
                          role="menuitem"
                          style={{
                            width: '100%', textAlign: 'left',
                            color: language === code ? 'var(--color-primary)' : 'var(--color-text)',
                            fontWeight: language === code ? 700 : 500,
                          }}
                        >
                          {code === 'fr' && '🇫🇷 Français'}
                          {code === 'ar' && '🇲🇦 العربية'}
                          {code === 'en' && '🇬🇧 English'}
                          {language === code && ' ✓'}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={toggleTheme}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '36px', height: '36px', borderRadius: '50%',
                  color: 'var(--color-text)', background: 'var(--color-surface)', border: '1px solid var(--color-border)',
                  transition: 'all 0.2s',
                }}
                className="theme-toggle"
                aria-label={theme === 'dark' ? n('themeDark') : n('themeLight')}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <Link to="/contact" style={{ fontSize: '0.9rem', color: 'var(--color-text)', fontWeight: 600, transition: 'color 0.2s' }} className="nav-link">
                {n('login')}
              </Link>
              <Button asLink to="/demo" size="sm" className="cta-glow" style={{ padding: '0.4rem 1rem', fontSize: '0.9rem' }}>
                {n('bookDemo')}
              </Button>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <div className="md-hidden" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div ref={langMobileRef} style={{ position: 'relative' }}>
              <button
                onClick={() => setLangOpen(o => o === 'mobile' ? null : 'mobile')}
                aria-label={`${n('langFr')}, ${n('langAr')}, ${n('langEn')}`}
                aria-haspopup="true"
                aria-expanded={langOpen === 'mobile'}
                style={{ fontSize: '1.4rem', padding: '6px 8px', cursor: 'pointer', background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                {language === 'fr' ? '🇫🇷' : language === 'ar' ? '🇲🇦' : '🇬🇧'}
                <ChevronDown size={14} style={{ transition: 'transform 0.2s', transform: langOpen === 'mobile' ? 'rotate(180deg)' : 'none' }} />
              </button>
              {langOpen === 'mobile' && (
                <div
                  role="menu"
                  className="glass-card"
                  style={{
                    position: 'absolute', top: 'calc(100% + 8px)', right: 0,
                    minWidth: '160px', background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)',
                    boxShadow: '0 20px 40px -10px rgba(0,0,0,0.4)', zIndex: 200,
                  }}
                >
                  <div style={{ padding: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    {(['fr', 'ar', 'en'] as const).map(code => (
                      <button
                        key={code}
                        onClick={() => pickLang(code)}
                        className="mega-link"
                        aria-label={n(code === 'fr' ? 'langFr' : code === 'ar' ? 'langAr' : 'langEn')}
                        aria-current={language === code}
                        role="menuitem"
                        style={{
                          textAlign: 'left',
                          color: language === code ? 'var(--color-primary)' : 'var(--color-text)',
                          fontWeight: language === code ? 700 : 500,
                        }}
                      >
                        {code === 'fr' && '🇫🇷 Français'}
                        {code === 'ar' && '🇲🇦 العربية'}
                        {code === 'en' && '🇬🇧 English'}
                        {language === code && ' ✓'}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={toggleTheme}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '36px', height: '36px', borderRadius: '50%',
                color: 'var(--color-text)', background: 'var(--color-surface)', border: '1px solid var(--color-border)',
              }}
              aria-label={theme === 'dark' ? n('themeDark') : n('themeLight')}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              style={{ display: 'flex', padding: '0.35rem', color: 'var(--color-text)', background: 'none', border: 'none' }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        <style>{`
          .md-flex { display: none; }
          .md-hidden { display: flex; }
          @media (min-width: 1100px) {
            .md-flex { display: flex !important; }
            .md-hidden { display: none !important; }
          }
          .nav-link {
            color: var(--color-text);
            font-weight: 500;
            font-size: 0.95rem;
            transition: color 0.2s;
            position: relative;
            text-decoration: none;
          }
          .nav-link:hover { color: var(--color-primary); }
          .nav-link.active {
            color: var(--color-primary);
          }
          .nav-link.active::after {
            content: '';
            position: absolute;
            bottom: -6px;
            left: 0;
            right: 0;
            height: 2px;
            background: var(--color-primary);
            border-radius: 2px;
          }
          
          .theme-toggle:hover {
            background: var(--color-primary-glow) !important;
            color: var(--color-primary) !important;
            border-color: var(--color-primary) !important;
          }
          
          .nav-dropdown {
            position: relative;
            padding: 0.5rem 0;
          }
          .mega-menu {
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%) translateY(10px);
            opacity: 0;
            visibility: hidden;
            transition: all 0.2s ease-in-out;
            border-radius: var(--radius-md);
            box-shadow: 0 20px 40px -10px rgba(0,0,0,0.3);
            min-width: 250px;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            z-index: 100;
          }
          .nav-dropdown:hover .mega-menu,
          .nav-dropdown:focus-within .mega-menu {
            opacity: 1;
            visibility: visible;
            transform: translateX(-50%) translateY(0);
          }
          .mega-link {
            display: block;
            padding: 0.6rem 1rem;
            color: var(--color-text);
            border-radius: var(--radius-sm);
            text-decoration: none;
            transition: all 0.2s;
            font-size: 0.95rem;
            font-weight: 500;
          }
          .mega-link:hover {
            background: var(--color-surface-2);
            color: var(--color-primary);
            padding-left: 1.25rem;
          }
          
          .cta-glow:hover {
            box-shadow: 0 0 20px var(--color-primary-glow) !important;
          }

          .nav-dropdown-trigger:focus-visible,
          .mega-link:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 2px;
            border-radius: 4px;
          }
        `}</style>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: '52px', left: 0, right: 0,
              background: 'var(--color-surface)',
              borderBottom: '1px solid var(--color-border)',
              padding: '2rem 1.5rem', zIndex: 99,
              display: 'flex', flexDirection: 'column', gap: '1.5rem',
              boxShadow: '0 24px 48px rgba(0,0,0,0.5)',
              maxHeight: 'calc(100vh - 52px)',
              overflowY: 'auto'
            }}
          >
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <Link to="/features" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{n('features')}</Link>
              <Link to="/industries" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{n('industries')}</Link>
              <Link to="/integrations" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{n('integrations')}</Link>
              <Link to="/pricing" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{n('pricing')}</Link>
              <Link to="/blog" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{n('blog')}</Link>
              <Link to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{n('about')}</Link>
              <Link to="/help" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{n('help')}</Link>

              <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Button asLink to="/contact" variant="secondary" onClick={() => setMobileMenuOpen(false)}>{n('login')}</Button>
                <Button asLink to="/demo" style={{ width: '100%' }} onClick={() => setMobileMenuOpen(false)}>
                  {n('bookDemo')}
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

