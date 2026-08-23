import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, useCanonicalPath, useLocale } from './LocaleLink';
import { localePath } from '../seo/site';
import { findPost, translationOf } from '../content/blog/index';
import {
  ArrowRight, BarChart3, BookOpen, Boxes, CalendarDays, ChevronDown, ClipboardList, Factory,
  Gauge, History, ListChecks, MessageSquare, Package, Pen, ShieldCheck, Truck,
  Users, Warehouse,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

/* The product itself, on its own subdomain. Not a route on this site, so
   these two controls are plain anchors rather than router links: the click
   has to leave the marketing site entirely, and it must not pick up a
   locale prefix on the way out. */
const APP_LOGIN_URL = 'https://app.mainteneat.com/login';

/* ── Megamenu content ────────────────────────────────────────────
   One shape for all three menus, so the panel, the mobile list and the
   open/close machinery are written once rather than per menu.

   `split` puts a group's items in two sub-columns instead of one stack. It is
   authored rather than derived from the item count: Core Platform and
   Operations & Insights both hold four, and deriving it splits both, which
   turns the panel into a flat 2x2x2 grid and loses the read of one primary
   column beside a denser secondary one. */
interface MenuItem { titleKey: string; descKey: string; to: string; Icon: LucideIcon }
interface MenuGroup { eyebrowKey: string; items: MenuItem[]; split?: boolean }
interface MenuDef { id: string; labelKey: string; groups: MenuGroup[]; allKey: string; allTo: string }

const MENUS: MenuDef[] = [
  {
    id: 'product',
    labelKey: 'nav.product',
    /* No /features index exists, so this follows the convention the feature
       pages already use: their "← All features" back-link goes to "/". */
    allKey: 'nav.menu.productAll',
    allTo: '/',
    groups: [
      {
        eyebrowKey: 'nav.menu.productCore',
        items: [
          { titleKey: 'nav.features.workOrders', descKey: 'nav.featureDesc.workOrders', to: '/features/work-orders',             Icon: ClipboardList },
          { titleKey: 'nav.features.equipment',  descKey: 'nav.featureDesc.equipment',  to: '/features/equipment',               Icon: Factory },
          { titleKey: 'nav.features.preventive', descKey: 'nav.featureDesc.preventive', to: '/features/preventive-maintenance',  Icon: ShieldCheck },
          { titleKey: 'nav.features.inventory',  descKey: 'nav.featureDesc.inventory',  to: '/features/inventory',               Icon: Package },
        ],
      },
      {
        eyebrowKey: 'nav.menu.productOps',
        split: true,
        items: [
          { titleKey: 'nav.features.calendar',  descKey: 'nav.featureDesc.calendar',  to: '/features/maintenance-calendar', Icon: CalendarDays },
          { titleKey: 'nav.features.roles',     descKey: 'nav.featureDesc.roles',     to: '/features/roles',                Icon: Users },
          { titleKey: 'nav.features.kpi',       descKey: 'nav.featureDesc.kpi',       to: '/features/kpi-dashboard',        Icon: BarChart3 },
          { titleKey: 'nav.features.reporting', descKey: 'nav.featureDesc.reporting', to: '/features/reporting',            Icon: History },
        ],
      },
    ],
  },
  {
    id: 'industries',
    labelKey: 'nav.industries',
    allKey: 'nav.menu.industriesAll',
    allTo: '/industries',
    groups: [
      {
        eyebrowKey: 'nav.menu.industriesProcess',
        items: [
          { titleKey: 'industries.i1_title', descKey: 'nav.industryDesc.i1', to: '/industries', Icon: Boxes },
          { titleKey: 'industries.i2_title', descKey: 'nav.industryDesc.i2', to: '/industries', Icon: Factory },
          { titleKey: 'industries.i3_title', descKey: 'nav.industryDesc.i3', to: '/industries', Icon: Gauge },
        ],
      },
      {
        eyebrowKey: 'nav.menu.industriesSites',
        items: [
          { titleKey: 'industries.i4_title', descKey: 'nav.industryDesc.i4', to: '/industries', Icon: ShieldCheck },
          { titleKey: 'industries.i5_title', descKey: 'nav.industryDesc.i5', to: '/industries', Icon: Warehouse },
          { titleKey: 'industries.i6_title', descKey: 'nav.industryDesc.i6', to: '/industries', Icon: Truck },
        ],
      },
    ],
  },
  {
    id: 'resources',
    labelKey: 'nav.resources',
    allKey: 'nav.menu.resourcesAll',
    allTo: '/resources',
    groups: [
      {
        eyebrowKey: 'nav.menu.resourcesLibrary',
        items: [
          { titleKey: 'nav.resourceItems.blog_title',      descKey: 'nav.resourceItems.blog_desc',      to: '/blog',      Icon: Pen },
          { titleKey: 'nav.resourceItems.guides_title',    descKey: 'nav.resourceItems.guides_desc',    to: '/blog', Icon: BookOpen },
          { titleKey: 'nav.resourceItems.kpi_title',       descKey: 'nav.resourceItems.kpi_desc',       to: '/resources/kpi-definitions', Icon: Gauge },
          { titleKey: 'nav.resourceItems.checklist_title', descKey: 'nav.resourceItems.checklist_desc', to: '/resources/setup-checklist', Icon: ListChecks },
        ],
      },
      {
        eyebrowKey: 'nav.menu.resourcesContact',
        items: [
          { titleKey: 'nav.resourceItems.suggest_title', descKey: 'nav.resourceItems.suggest_desc', to: '/contact', Icon: MessageSquare },
        ],
      },
    ],
  },
];

/* Flat list, for the mobile drawer and nothing else. */
const allFeatures = MENUS[0].groups.flatMap(g => g.items);

export default function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  /* One id, not a flag per menu — that is what makes "only one open at a
     time" structural rather than something each menu has to remember to do. */
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  /* Derived from the URL, not held in state. /en/pricing IS the English
     page, so there is nothing to remember and nothing that can disagree with
     the address bar — and it means the right code shows on the first paint
     rather than after an effect. */
  const navigate = useNavigate();
  const currentLang = useLocale();
  const canonicalPath = useCanonicalPath();
  const langRef = useRef<HTMLDivElement>(null);
  const navRowRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | null>(null);
  /* Set when a click closes a menu the pointer is still inside. Without it the
     very next mousemove would hover it straight back open and the button would
     look broken. Cleared when the pointer leaves the trigger. */
  const hoverLocked = useRef(false);
  /* How the open menu got opened, which is what separates the two close
     rules. A menu the pointer opened closes when the pointer leaves. A menu a
     click opened is pinned: it stays until a click outside, a second click on
     its own trigger, or Escape.

     Without this the two triggers fight. Moving to a trigger hovers it open,
     and the click that follows a beat later reads as "already open, so close"
     — the menu shuts on the very click meant to open it. */
  const openedBy = useRef<'hover' | 'click' | null>(null);

  const cancelClose = useCallback(() => {
    if (closeTimer.current !== null) { window.clearTimeout(closeTimer.current); closeTimer.current = null; }
  }, []);

  /* The pointer has to cross a few pixels of dead space between the trigger in
     the bar and the panel below it. Closing on the first mouseleave would drop
     the menu mid-journey, so leaving only schedules a close and entering
     either half cancels it. */
  const scheduleClose = useCallback(() => {
    /* A pinned menu ignores the pointer leaving; it was opened deliberately
       and only a deliberate action closes it. */
    if (openedBy.current === 'click') return;
    cancelClose();
    closeTimer.current = window.setTimeout(() => { openedBy.current = null; setOpenMenu(null); }, 140);
  }, [cancelClose]);

  useEffect(() => () => cancelClose(), [cancelClose]);

  /* The drawer is a scrolling sheet of its own. Without this the page behind
     it scrolls too, so a flick meant for the menu moves the article underneath
     and the sheet looks frozen. Restores whatever was there rather than
     assuming '', since the value is not ours to own. */
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (langRef.current && !langRef.current.contains(target)) setLangOpen(false);
      const inRow = navRowRef.current?.contains(target);
      const inPanel = panelRef.current?.contains(target);
      if (!inRow && !inPanel) { setOpenMenu(null); hoverLocked.current = false; openedBy.current = null; }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  /* Escape gets its own effect so it can read openMenu from props rather than
     from inside a state updater. Updaters have to stay pure — React may run
     one more than once — and moving focus is very much a side effect. */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setLangOpen(false); setMenuOpen(false);
      /* Escape from inside the panel would otherwise strand focus on a link
         that is about to be unmounted. */
      if (openMenu) document.getElementById(`nav-trigger-${openMenu}`)?.focus();
      setOpenMenu(null);
      hoverLocked.current = false;
      openedBy.current = null;
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [openMenu]);

  /* Switching language is a navigation, not a mutation: the same page in the
     other language, so /features/inventory goes to /en/features/inventory
     instead of dumping the reader back at the home page. i18n follows the
     route rather than being told separately, so the two cannot drift. */
  const setLang = (lang: 'en' | 'fr') => {
    setLangOpen(false);

    /* Articles carry their own address in each language — a French article
       is at a French URL — so swapping the prefix would aim at a page that
       does not exist. Ask the content for where the translation actually
       lives instead. Every article is guaranteed to have one: the build
       refuses to publish an article whose translation is missing. */
    const article = /^blog\/(.+)$/.exec(canonicalPath);
    if (article) {
      const current = findPost(currentLang, article[1]);
      const twin = current && translationOf(current, lang);
      if (twin) {
        navigate(localePath(`blog/${twin.slug}`, lang));
        return;
      }
    }

    navigate(localePath(canonicalPath, lang));
  };

  const closeAll = () => {
    setOpenMenu(null); setMenuOpen(false);
    hoverLocked.current = false; openedBy.current = null; cancelClose();
  };

  /* Hover-to-open is for pointers only. On a touch screen the first tap would
     otherwise both hover-open and click-close the menu in one gesture. */
  const canHover = () =>
    typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* State is read directly rather than through a functional update: these run
     from event handlers rebuilt on every render, so openMenu is already
     current, and the refs must not be mutated inside an updater that StrictMode
     runs twice. */
  const onTriggerClick = (id: string) => {
    setLangOpen(false);
    cancelClose();
    if (openMenu === id && openedBy.current === 'click') {
      openedBy.current = null;
      hoverLocked.current = true;
      setOpenMenu(null);
      return;
    }
    /* Covers both "closed, so open it" and "hovered open, so pin it". */
    openedBy.current = 'click';
    hoverLocked.current = false;
    setOpenMenu(id);
  };

  const onTriggerEnter = (id: string) => {
    if (!canHover() || hoverLocked.current) return;
    cancelClose();
    setLangOpen(false);
    if (openMenu !== id) openedBy.current = 'hover';
    setOpenMenu(id);
  };

  const onTriggerLeave = () => {
    hoverLocked.current = false;
    if (canHover()) scheduleClose();
  };

  const activeMenu = MENUS.find(m => m.id === openMenu) ?? null;

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'var(--bg)' }}>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        {/* No maxWidth here: .wrap owns the page column, and an inline copy of
            the old number would beat it and leave the bar narrower than every
            section under it. */}
        <div ref={navRowRef} className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '9px', flexShrink: 0 }} onClick={closeAll}>
            <img src="/images/logo-maintevo.png" width="50" height="50" className="brand-mark" alt="" />
            <span style={{ fontFamily: 'var(--font-head)', fontSize: '1.0625rem', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--ink)' }}>
              Mainte<span style={{ color: 'var(--accent-2)' }}>Neat</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul style={{ display: 'flex', alignItems: 'center', gap: '26px', listStyle: 'none' }} className="nav-desktop">
            {MENUS.map(m => (
              <li
                key={m.id}
                onMouseEnter={() => onTriggerEnter(m.id)}
                onMouseLeave={onTriggerLeave}
              >
                <button
                  id={`nav-trigger-${m.id}`}
                  onClick={(e) => { e.stopPropagation(); onTriggerClick(m.id); }}
                  aria-expanded={openMenu === m.id}
                  aria-haspopup="true"
                  aria-controls="nav-megamenu"
                  className={`nav-link nav-trigger${openMenu === m.id ? ' is-open' : ''}`}
                >
                  {t(m.labelKey)}
                  <svg width="11" height="11" fill="currentColor" viewBox="0 0 20 20" className="nav-caret" aria-hidden>
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </li>
            ))}
            <li><Link to="/enterprise" className="nav-link">{t('nav.enterprise')}</Link></li>
            <li><Link to="/pricing" className="nav-link">{t('nav.pricing')}</Link></li>
            <li><Link to="/comparison" className="nav-link">{t('nav.comparison')}</Link></li>
          </ul>

          {/* Right controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <div style={{ position: 'relative' }} ref={langRef}>
              <button
                onClick={(e) => { e.stopPropagation(); setLangOpen(o => !o); }}
                aria-label="Language"
                aria-expanded={langOpen}
                className="nav-link"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '7px 8px', fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '.04em' }}
              >
                {currentLang.toUpperCase()}
              </button>
              {langOpen && (
                <div className="nav-menu" style={{ position: 'absolute', right: 0, top: 'calc(100% + 8px)', width: '130px', padding: '5px', zIndex: 60 }}>
                  <button onClick={() => setLang('fr')} className="nav-menu-item" style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}>Français</button>
                  <button onClick={() => setLang('en')} className="nav-menu-item" style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}>English</button>
                </div>
              )}
            </div>

            <a href={APP_LOGIN_URL} className="nav-link nav-cta" style={{ fontSize: '0.875rem', padding: '9px 10px', marginLeft: '4px' }}>
              {t('nav.logIn')}
            </a>

            {/* A text link, not a filled box. The bar only gets one button,
                and it is the one that matches the hero's primary action —
                two filled CTAs here plus two more in the hero left four
                competing targets on the first screen. */}
            <Link to="/signup" className="nav-link nav-cta" style={{ fontSize: '0.875rem', padding: '9px 10px', marginLeft: '4px' }}>
              {t('nav.signUp')}
            </Link>

            <Link to="/contact" className="btn-p nav-cta" style={{ padding: '9px 16px', fontSize: '0.875rem', marginLeft: '6px' }}>
              {t('nav.getStarted')}
            </Link>

            <button
              onClick={() => setMenuOpen(o => !o)}
              className="nav-link nav-burger"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '7px', display: 'none' }}
              aria-label="Menu"
              aria-expanded={menuOpen}
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                {menuOpen ? <path strokeLinecap="round" d="M5 5l14 14M19 5L5 19" /> : <path strokeLinecap="round" d="M3 6h18M3 12h18M3 18h18" />}
              </svg>
            </button>
          </div>
        </div>

        {/* ── Megamenu ──
            A sibling of the nav row, not a child of the <li>, because the
            panel is full-bleed and an absolutely positioned child of a
            relatively positioned list item can only ever be as wide as the
            page lets that item be. .navbar carries the containing block. */}
        {activeMenu && (
          <div
            id="nav-megamenu"
            ref={panelRef}
            className="megamenu"
            role="group"
            aria-label={t(activeMenu.labelKey)}
            onMouseEnter={cancelClose}
            onMouseLeave={() => { if (canHover()) scheduleClose(); }}
          >
            <div className="wrap">
              <div className="megamenu-cols" data-wide={activeMenu.groups.some(g => g.split) || undefined}>
                {activeMenu.groups.map(group => {
                  const eyebrowId = `mm-${activeMenu.id}-${group.eyebrowKey}`;
                  return (
                    <div className="megamenu-group" key={group.eyebrowKey}>
                      {/* A label, not a link and not a heading: it names the
                          column for a screen reader via aria-labelledby
                          without adding a rung to the page's outline. */}
                      <div className="megamenu-eyebrow" id={eyebrowId}>{t(group.eyebrowKey)}</div>
                      <ul
                        className="megamenu-list"
                        data-split={group.split || undefined}
                        aria-labelledby={eyebrowId}
                      >
                        {group.items.map(({ titleKey, descKey, to, Icon }) => (
                          <li key={titleKey}>
                            {/* The whole row is the target — icon, title and
                                description all sit inside the <a>. */}
                            <Link to={to} className="megamenu-item" onClick={closeAll}>
                              <Icon className="megamenu-icon" size={18} strokeWidth={1.7} aria-hidden />
                              <span className="megamenu-text">
                                <span className="megamenu-title">{t(titleKey)}</span>
                                <span className="megamenu-desc">{t(descKey)}</span>
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              <div className="megamenu-foot">
                <Link to={activeMenu.allTo} className="megamenu-all" onClick={closeAll}>
                  {t(activeMenu.allKey)}
                  <ArrowRight size={15} strokeWidth={1.9} aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {menuOpen && (
          <div className="nav-mobile" style={{ borderTop: '1px solid var(--rule)', background: 'var(--bg)' }}>
            {/* Block padding only. The inline padding comes from .wrap, so the
                drawer lines up with every section beneath it instead of
                sitting on a wider gutter of its own. */}
            <div className="wrap nav-mobile-inner" style={{ paddingBlock: '14px 0' }}>
              {/* The drawer is a stack, so the panel's two columns collapse to
                  one and only the Product group keeps its per-item
                  descriptions — repeating them for all three would push the
                  first real link most of a screen down. */}
              <div className="megamenu-eyebrow" style={{ padding: '10px 0 6px' }}>{t('nav.product')}</div>
              {allFeatures.map(({ titleKey, descKey, to, Icon }) => (
                <Link key={to} to={to} onClick={closeAll} className="megamenu-item">
                  <Icon className="megamenu-icon" size={18} strokeWidth={1.7} aria-hidden />
                  <span className="megamenu-text">
                    <span className="megamenu-title">{t(titleKey)}</span>
                    <span className="megamenu-desc">{t(descKey)}</span>
                  </span>
                </Link>
              ))}
              {/* Collapsed by default. Expanded, the three groups came to
                  1532px in an 844px viewport; folding the two secondary ones
                  brings the sheet back to something you can take in at once.
                  <details> rather than React state: keyboard-accessible, and
                  it works before hydration. */}
              {MENUS.filter(m => m.id !== 'product').map(m => (
                <details key={m.id} className="nav-mobile-group">
                  <summary className="nav-mobile-summary">
                    <span className="megamenu-eyebrow">{t(m.labelKey)}</span>
                    <ChevronDown className="nav-mobile-chev" size={16} strokeWidth={2} aria-hidden />
                  </summary>
                  {m.groups.flatMap(g => g.items).map(({ titleKey, to }) => (
                    <Link key={titleKey} to={to} onClick={closeAll} style={{ display: 'block', padding: '10px 0', fontSize: '0.9375rem', color: 'var(--ink-muted)' }}>
                      {t(titleKey)}
                    </Link>
                  ))}
                </details>
              ))}
              <div style={{ borderTop: '1px solid var(--rule)', marginTop: '12px', paddingTop: '8px' }}>
                <Link to="/enterprise" onClick={closeAll} style={{ display: 'block', padding: '10px 0', fontSize: '0.9375rem', color: 'var(--ink)' }}>{t('nav.enterprise')}</Link>
                <Link to="/pricing" onClick={closeAll} style={{ display: 'block', padding: '10px 0', fontSize: '0.9375rem', color: 'var(--ink)' }}>{t('nav.pricing')}</Link>
                <Link to="/comparison" onClick={closeAll} style={{ display: 'block', padding: '10px 0', fontSize: '0.9375rem', color: 'var(--ink)' }}>{t('nav.comparison')}</Link>
              </div>

              {/* Sticky, so the three account actions stay reachable however
                  far the list above has been scrolled. They used to sit at the
                  end of a 1532px stack that had no way to scroll at all. */}
              <div className="nav-mobile-cta">
                <Link to="/contact" className="btn-p" onClick={closeAll} style={{ width: '100%', justifyContent: 'center' }}>
                  {t('nav.getStarted')}
                </Link>
                <Link to="/signup" className="btn-s" onClick={closeAll} style={{ width: '100%', justifyContent: 'center' }}>
                  {t('nav.signUp')}
                </Link>
                <a href={APP_LOGIN_URL} className="nav-link nav-mobile-login">
                  {t('nav.logIn')}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        /* Collapses at 1180px, not 1000px. Six links plus four right-hand
           controls do not fit 1120px once French sets them — "Comparatif",
           "Se connecter", "Planifier une démo" — and the row used to overrun
           the wordmark before the burger appeared. */
        @media (max-width: 1180px) {
          .nav-desktop { display: none !important; }
          .nav-burger  { display: inline-flex !important; }
          .nav-cta     { display: none !important; }
        }

        /* The drawer is a sheet, not a section of the page. It lives inside a
           position: sticky header, so anything taller than the viewport used
           to be simply unreachable -- there is no gesture that scrolls a
           pinned element. Measured at 1532px in an 844px viewport, which
           stranded Get started, Sign up and Log in below the fold.

           dvh, not vh: on a phone vh is the tallest the viewport ever gets,
           so with the browser chrome showing the sheet would run off-screen
           by exactly the height of that chrome. */
        .nav-mobile {
          max-height: calc(100dvh - 64px);
          overflow-y: auto;
          overscroll-behavior: contain;
        }
        .nav-mobile-inner {
          display: flex;
          flex-direction: column;
          min-height: 0;
        }

        .nav-mobile-group {
          border-top: 1px solid var(--rule);
          margin-top: 12px;
          padding-top: 4px;
        }
        .nav-mobile-summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 10px 0;
          cursor: pointer;
          list-style: none;
          /* 44px of target from an 18px label. */
          min-height: 44px;
        }
        /* Safari draws its own disclosure triangle from a pseudo-element that
           list-style alone does not remove. */
        .nav-mobile-summary::-webkit-details-marker { display: none; }
        .nav-mobile-chev {
          color: var(--ink-muted);
          flex: none;
          transition: transform .18s ease;
        }
        .nav-mobile-group[open] .nav-mobile-chev { transform: rotate(180deg); }

        /* Sticky inside the scroll container, so the account actions ride
           along at the bottom of the sheet instead of waiting at the end of
           the list. The negative inline margin lets the backdrop reach the
           full width of the sheet while the buttons stay on the page column. */
        .nav-mobile-cta {
          position: sticky;
          bottom: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 16px;
          margin-inline: calc(-1 * var(--nav-sheet-pad, 18px));
          padding: 14px var(--nav-sheet-pad, 18px) calc(14px + env(safe-area-inset-bottom, 0px));
          background: var(--bg);
          border-top: 1px solid var(--rule);
        }
        .nav-mobile-login {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          font-size: 0.9375rem;
        }

        /* Matches .wrap's own gutter at each breakpoint, so the backdrop
           bleeds edge to edge and the buttons stay aligned with the links
           above them. */
        .nav-mobile-inner { --nav-sheet-pad: clamp(24px, 3vw, 40px); }
        @media (max-width: 639.98px) {
          .nav-mobile-inner { --nav-sheet-pad: 18px; }
        }
      `}</style>
    </header>
  );
}
