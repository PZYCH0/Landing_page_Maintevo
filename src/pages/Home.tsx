import { useState } from 'react';
import { Link } from '../components/LocaleLink';
import { useTranslation } from 'react-i18next';
import Reveal from '../components/Reveal';
import WalkStrip, { type WalkScreen } from '../components/WalkStrip';
import HeroSlider, { type HeroSlide } from '../components/storefront/HeroSlider';

/* The hero. One slide per argument, in the order a buyer meets them: what the
   product is, what the technician opens, how a fault gets reported without an
   account. Each carries its own pair of buttons.

   Only the parts that are not language live here; the copy is resolved
   against the catalogue inside the component. Add a slide by adding an entry
   and its six keys to both i18n files — nothing else is tied to the count.

   `fit` is 'contain' for all three because they are portrait screenshots and
   this frame is wide. Switch a slide to 'cover' when it has a proper
   landscape banner behind it. */
const HERO_MEDIA = [
  {
    id: 'app',
    src: '/images/mockup-desktop.webp',
    altKey: 'home.hero.shotMobile',
    titleKey: 'home.hero.h1',
    bodyKey: 'home.hero.lead',
    primaryKey: 'common.requestDemo',   primaryTo: '/contact',
    secondaryKey: 'common.seePricing',  secondaryTo: '/pricing',
  },
  {
    id: 'jobs',
    src: '/images/mockup-phone.webp',
    altKey: 'home.hero.shotJobs',
    titleKey: 'home.hero.s2_title',
    bodyKey: 'home.hero.s2_body',
    primaryKey: 'home.hero.s2_cta',     primaryTo: '/features/work-orders',
    secondaryKey: 'common.requestDemo', secondaryTo: '/contact',
  },
  {
    id: 'scan',
    src: '/images/mockup-tablet.webp',
    altKey: 'home.hero.shotQr',
    titleKey: 'home.hero.s3_title',
    bodyKey: 'home.hero.s3_body',
    primaryKey: 'home.hero.s3_cta',     primaryTo: '/features/roles',
    secondaryKey: 'common.requestDemo', secondaryTo: '/contact',
  },
] as const;

const Check = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Yes = () => <span className="mark-yes" title="Yes"><Check /></span>;
const No = () => <span className="mark-no" aria-label="No">—</span>;

export default function Home() {
  const { t } = useTranslation();

  const heroSlides: HeroSlide[] = HERO_MEDIA.map(m => ({
    id: m.id,
    imageUrl: m.src,
    /* Nothing to fall back to but itself: every slide is a local file, so a
       failure here means the file is missing rather than a remote host being
       slow, and swapping in a different local image would only hide that. */
    fallbackImageUrl: m.src,
    imageAlt: t(m.altKey),
    title: t(m.titleKey),
    subtitle: t(m.bodyKey),
    primaryLabel: t(m.primaryKey),
    primaryTo: m.primaryTo,
    secondaryLabel: t(m.secondaryKey),
    secondaryTo: m.secondaryTo,
    fit: 'contain',
  }));

  const steps = ['s1', 's2', 's3', 's4'] as const;

  /* Which screen the strip is showing. The row of steps below it selects
     screens too, so the index lives here rather than inside either one. */
  const [shown, setShown] = useState(0);

  /* One screen per step. All four are framed to the same desktop ratio so
     the strip keeps its height as it moves and the row beneath it never
     shifts; the two phone captures letterbox rather than crop.

     A file that has not been produced yet renders as a labelled placeholder
     naming the path it wants, so the sequence is complete either way. */
  const screens: WalkScreen[] = [
    { src: '/images/walk-01-request.webp',    label: t('home.walkthrough.shot_s1') },
    { src: '/images/walk-02-review.webp',     label: t('home.walkthrough.shot_s2') },
    { src: '/images/walk-03-workorder.webp',  label: t('home.walkthrough.shot_s3') },
    { src: '/images/walk-04-technician.webp', label: t('home.walkthrough.shot_s4') },
  ];

  // The three reasons a CMMS rollout dies on the floor, in the order a buyer
  // meets them: the technician refuses it, the budget refuses it, IT refuses it.
  const friction = ['adoption', 'budget', 'setup'] as const;

  // Reports lead: the point of the section is that the record is a byproduct
  // of the work, and reports are where that pays off.
  const recordRows = ['liveKpi', 'autoWO', 'audit'] as const;

  const appRows = ['assigned', 'checklist', 'parts'] as const;

  const sovereign = ['data', 'mad', 'support', 'made'] as const;

  // manager, technician, requester, QR without an account
  const perms: [string, boolean, boolean, boolean, boolean][] = [
    ['home.roles.r_submit',  true, true,  true,  true],
    ['home.roles.r_track',   true, true,  true,  false],
    ['home.roles.r_approve', true, false, false, false],
    ['home.roles.r_assign',  true, false, false, false],
    ['home.roles.r_execute', true, true,  false, false],
    ['home.roles.r_parts',   true, true,  false, false],
    ['home.roles.r_kpi',     true, false, false, false],
    ['home.roles.r_admin',   true, false, false, false],
  ];

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <HeroSlider slides={heroSlides} eyebrow={t('home.hero.eyebrow')} />

      <hr className="rule-brand" />

      {/* ── FRICTION — the argument the whole page rests on ──── */}
      <section className="section-md">
        <Reveal className="wrap">
          <h2 className="rv" style={{ maxWidth: '24ch' }}>{t('home.friction.h2')}</h2>
          <p className="measure rv" style={{ marginTop: '12px', marginBottom: '40px' }}>{t('home.friction.lead')}</p>
          <div>
            {friction.map(f => (
              <div key={f} className="def-row rv">
                <div className="def-label">{t(`home.friction.${f}_title`)}</div>
                <p style={{ fontSize: '0.9375rem' }}>{t(`home.friction.${f}_text`)}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <hr className="rule-brand" />

      {/* ── WORKED EXAMPLE — one work order end to end ───────── */}
      <section className="section-lg sunken">
        <Reveal className="wrap">
          <h2 className="rv" style={{ maxWidth: '20ch' }}>{t('home.walkthrough.h2')}</h2>
          <p className="measure rv" style={{ marginTop: '12px', marginBottom: '36px' }}>{t('home.walkthrough.lead')}</p>

          {/* Steps left, the screen they produce right. Side by side the
              two stop competing for the same vertical space: each column
              takes the height it needs, and the reader gets the account and
              the evidence on one screen instead of scrolling between them. */}
          <div className="walk-split">
            {/* The account, read top to bottom. Selecting a step brings its
                screen up beside it. */}
            <Reveal as="ol" className="walk-steps">
              {steps.map((s, i) => (
                <li key={s} className="seq-col rv" data-active={i === shown ? 'true' : undefined}>
                  <button
                    type="button"
                    className="seq-col-btn"
                    aria-current={i === shown ? 'step' : undefined}
                    onClick={() => setShown(i)}
                  >
                    <span className="seq-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="seq-col-title">{t(`home.walkthrough.${s}_title`)}</span>
                    <span className="seq-col-body">{t(`home.walkthrough.${s}_body`)}</span>
                  </button>
                </li>
              ))}
            </Reveal>

            <Reveal className="walk-aside">
              <WalkStrip
                screens={screens}
                active={shown}
                onSelect={setShown}
                groupLabel={t('home.walkthrough.stage_label')}
                prevLabel={t('home.walkthrough.stage_prev')}
                nextLabel={t('home.walkthrough.stage_next')}
                status={t('home.walkthrough.stage_status', { current: shown + 1, total: screens.length })}
              />
            </Reveal>
          </div>
        </Reveal>
      </section>

      <hr className="rule-brand" />

      {/* ── TECHNICIAN APP — the claim in the hero, demonstrated ── */}
      <section className="section-md">
        <Reveal className="wrap">
          <h2 className="rv" style={{ maxWidth: '22ch' }}>{t('home.app.h2')}</h2>
          <p className="measure rv" style={{ marginTop: '12px' }}>{t('home.app.lead')}</p>
          {/* TODO: link the App Store and Play Store badges once the store
              URLs and official badge assets are supplied. Until then this
              states availability without pretending to link anywhere. */}
          <p className="rv" style={{ fontSize: '0.875rem', color: 'var(--ink-muted)', marginTop: '10px', marginBottom: '40px' }}>
            {t('home.app.stores')}
          </p>
          <div>
            {appRows.map(a => (
              <div key={a} className="def-row rv">
                <div className="def-label">{t(`home.app.${a}_title`)}</div>
                <p style={{ fontSize: '0.9375rem' }}>{t(`home.app.${a}_text`)}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <hr className="rule-brand" />

      {/* ── ROLES — comparison table. Sits behind the app section
           because both argue the same thing: nobody is handed a
           screen that is not theirs. ─────────────────────────── */}
      <section className="section-md sunken">
        <Reveal className="wrap">
          <h2 className="rv">{t('home.roles.h2')}</h2>
          <p className="measure rv" style={{ marginTop: '12px', marginBottom: '36px' }}>{t('home.roles.lead')}</p>

          <div className="tbl-scroll">
            <table className="tbl">
              <thead>
                <tr className="rv">
                  <th style={{ width: '40%' }}>{t('home.roles.col_capability')}</th>
                  <th>{t('home.roles.col_manager')}</th>
                  <th>{t('home.roles.col_technician')}</th>
                  <th>{t('home.roles.col_requester')}</th>
                  <th>{t('home.roles.col_qr')}</th>
                </tr>
              </thead>
              <tbody>
                {perms.map(([label, m, tech, r, qr]) => (
                  <tr key={label} className="rv">
                    <td>{t(label)}</td>
                    <td>{m ? <Yes /> : <No />}</td>
                    <td>{tech ? <Yes /> : <No />}</td>
                    <td>{r ? <Yes /> : <No />}</td>
                    <td>{qr ? <Yes /> : <No />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="rv" style={{ marginTop: '24px' }}>
            <Link to="/features/roles" className="link">{t('common.learnMore')} →</Link>
          </p>
        </Reveal>
      </section>

      <hr className="rule-brand" />

      {/* ── RECORD — the data is a byproduct, not a reporting job ── */}
      <section className="section-md">
        <Reveal className="wrap">
          <h2 className="rv" style={{ maxWidth: '22ch' }}>{t('home.record.h2')}</h2>
          <p className="measure rv" style={{ marginTop: '12px', marginBottom: '40px' }}>{t('home.record.lead')}</p>
          <div>
            {recordRows.map(a => (
              <div key={a} className="def-row rv">
                <div className="def-label">{t(`home.record.${a}_title`)}</div>
                <p style={{ fontSize: '0.9375rem' }}>{t(`home.record.${a}_text`)}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <hr className="rule-brand" />

      {/* ── SOVEREIGNTY — the part no release can catch up on ── */}
      <section className="section-md sunken">
        <Reveal className="wrap">
          <h2 className="rv" style={{ maxWidth: '22ch' }}>{t('home.sovereign.h2')}</h2>
          <p className="measure rv" style={{ marginTop: '12px', marginBottom: '40px' }}>{t('home.sovereign.lead')}</p>
          <div>
            {sovereign.map(s => (
              <div key={s} className="def-row rv">
                <div className="def-label">{t(`home.sovereign.${s}_title`)}</div>
                <p style={{ fontSize: '0.9375rem' }}>{t(`home.sovereign.${s}_text`)}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <hr className="rule-brand" />

      {/* ── EARLY ADOPTERS — the low-commitment way in. Self-contained:
           delete this section and its `home.early` strings once the
           twenty places are gone, without touching anything else. ── */}
      <section className="section-sm">
        <Reveal className="wrap">
          <h2 className="rv" style={{ maxWidth: '18ch' }}>{t('home.early.h2')}</h2>
          <p className="measure rv" style={{ marginTop: '14px' }}>{t('home.early.p1')}</p>
          <p className="measure rv" style={{ marginTop: '14px' }}>{t('home.early.p2')}</p>
          <p className="rv" style={{ marginTop: '22px' }}>
            <Link to="/contact" className="link">{t('home.early.cta')} →</Link>
          </p>
        </Reveal>
      </section>

      <hr className="rule-brand" />

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="section-md">
        <Reveal className="wrap">
          <h2 className="rv" style={{ maxWidth: '18ch' }}>{t('home.cta.h2')}</h2>
          <p className="measure rv" style={{ marginTop: '14px' }}>{t('home.cta.desc')}</p>
          <div className="btn-inline-group rv" style={{ display: 'flex', gap: '12px', marginTop: '28px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-p">{t('home.cta.primary')}</Link>
            <Link to="/pricing" className="btn-s">{t('home.cta.secondary')}</Link>
          </div>
        </Reveal>
      </section>

      <style>{`
        /* ── The walkthrough ───────────────────────────────────────────
           A screen, then the four steps that produce it, read left to
           right beneath it. ──────────────────────────────────────────── */

        /* Full width of its column now. Side by side the picture costs the
           steps no vertical space, so it can be as large as the column is
           without pushing anything under the fold. */
        .walk-strip { width: 100%; }
        /* The plate. Outside the clip, so its shadow is not sheared off by
           the same overflow that makes the pictures slide. */
        .walk-strip-window {
          padding: 12px;
          background: var(--bg);
          border: 1px solid var(--rule);
          border-radius: var(--r);
          box-shadow: 0 8px 24px -8px rgb(0 0 0 / .18);
        }
        /* The opening: the hairline where the picture actually begins, and
           the edge the slide is clipped against. */
        .walk-strip-clip {
          overflow: hidden;
          border: 1px solid var(--rule);
          border-radius: var(--r);
        }
        .walk-strip-track {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          transform: translateX(calc(var(--walk-i, 0) * -100%));
          transition: transform .62s var(--rv-ease);
        }
        .walk-strip-item { flex: 0 0 100%; min-width: 0; }

        .walk-strip-item .shot-frame { margin: 0; }
        .walk-strip-item .shot-frame-media { border: 0; border-radius: 0; }

        @media (max-width: 640px) {
          .walk-strip-window { padding: 8px; }
        }

        .walk-strip-foot {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 24px;
          margin-top: 14px;
        }
        .walk-strip-caption {
          font-size: .8125rem;
          color: var(--ink-muted);
          margin: 0;
        }
        .walk-strip-nav { display: flex; gap: 6px; flex: none; }

        .walk-ctl {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 30px; height: 30px;
          padding: 0;
          background: transparent;
          color: var(--ink);
          border: 1px solid var(--rule-strong);
          border-radius: var(--r);
          cursor: pointer;
          transition: border-color .18s ease, color .18s ease;
        }
        .walk-ctl:hover:not(:disabled) { border-color: var(--accent); color: var(--accent); }
        .walk-ctl:disabled { color: var(--ink-muted); opacity: .45; cursor: default; }

        .walk-sr {
          position: absolute;
          width: 1px; height: 1px;
          margin: -1px; padding: 0; border: 0;
          overflow: hidden;
          clip-path: inset(50%);
          white-space: nowrap;
        }

        /* ── The split ─────────────────────────────────────────────────
           Account left, evidence right. The text column is held to a
           readable measure rather than half the grid, so a 1440 wrap does
           not stretch four short paragraphs across 650px of line. */
        .walk-split {
          display: grid;
          grid-template-columns: minmax(0, 0.85fr) minmax(0, 1fr);
          gap: 48px;
          align-items: start;
          text-align: left;
          /* Held in from the 1440 wrap so the pair comes down together.
             Capping one column instead would only make them lopsided. */
          max-width: 1180px;
          margin-inline: auto;
        }
        .walk-aside { position: sticky; top: 96px; }

        /* ── The steps ─────────────────────────────────────────────────
           Back to a vertical list, which is the axis the rail wanted all
           along: a hairline the height of the four, and an accent segment
           the height of the open one. Sized to the step it marks rather
           than positioned by index, because the four are as tall as their
           copy makes them and an index would drift. */
        .walk-steps {
          position: relative;
          list-style: none;
          margin: 0;
          padding: 0 0 0 24px;
        }
        .walk-steps::before {
          content: '';
          position: absolute;
          left: 0; top: 0;
          width: 1px; height: 100%;
          background: var(--rule);
        }

        .seq-col { position: relative; }
        .seq-col + .seq-col { border-top: 1px solid var(--rule); }
        .seq-col[data-active]::before {
          content: '';
          position: absolute;
          left: -24px; top: 0;
          width: 1px; height: 100%;
          background: var(--accent);
        }

        .seq-col-btn {
          display: block;
          width: 100%;
          text-align: left;
          background: none;
          border: 0;
          padding: 15px 0;
          cursor: pointer;
          font: inherit;
          color: inherit;
        }
        .seq-col-btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }

        .seq-col .seq-num {
          display: block;
          margin-bottom: 6px;
          color: var(--ink-muted);
          transition: color .3s var(--rv-ease);
        }
        .seq-col-btn[aria-current="step"] .seq-num { color: var(--accent); }

        .seq-col-title {
          display: block;
          font-family: var(--font-head);
          font-weight: 600;
          font-size: 1.0625rem;
          color: var(--ink);
          margin-bottom: 6px;
        }
        .seq-col-body {
          display: block;
          font-size: .9375rem;
          line-height: 1.6;
          color: var(--ink-muted);
          max-width: 52ch;
        }
        .seq-col-btn:hover .seq-col-title { color: var(--accent); }

        /* Two columns need room at both ends at once — squeeze them and the
           picture drops below legibility while the measure goes too narrow
           to read. They part company well before the phone breakpoint. */
        @media (max-width: 1023px) {
          .walk-split { grid-template-columns: 1fr; gap: 36px; }
          .walk-aside { position: static; order: -1; }
          .walk-strip { max-width: 640px; margin-inline: auto; }
        }
        @media (max-width: 640px) {
          .walk-steps { padding-left: 20px; }
          .seq-col[data-active]::before { left: -20px; }
        }
      `}</style>
    </>
  );
}
