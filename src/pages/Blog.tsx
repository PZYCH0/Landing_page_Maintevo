import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ChevronDown, ChevronRight, Search } from 'lucide-react';
import { Link, useLocale } from '../components/LocaleLink';
import { postsIn, type Post } from '../content/blog/index';

/* Small enough that the pagination bar is real rather than decorative at the
   current article count, and still a sensible page on a long list. */
const PAGE_SIZE = 3;

/** Distinct values for a filter, taken from the articles themselves so a
    dropdown can never offer something that returns nothing. */
function optionsFor(posts: Post[], key: 'category' | 'topic' | 'audience') {
  return [...new Set(posts.map(p => p[key]))].sort((a, b) => a.localeCompare(b));
}

/** Page numbers to show, with nulls where an ellipsis goes. */
function pageItems(current: number, total: number): Array<number | null> {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const out: Array<number | null> = [1];
  if (current > 3) out.push(null);
  for (let p = Math.max(2, current - 1); p <= Math.min(total - 1, current + 1); p++) out.push(p);
  if (current < total - 2) out.push(null);
  out.push(total);
  return out;
}

export default function Blog() {
  const { t, i18n } = useTranslation();
  const locale = useLocale();
  const all = postsIn(locale);

  /* The newest article carries the banner; the grid holds the rest, so the
     same piece is never shown twice on one screen. */
  const [featured, ...rest] = all;

  const [category, setCategory] = useState('');
  const [topic, setTopic] = useState('');
  const [audience, setAudience] = useState('');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rest.filter(p =>
      (!category || p.category === category) &&
      (!topic || p.topic === topic) &&
      (!audience || p.audience === audience) &&
      (!q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.topic.toLowerCase().includes(q)),
    );
  }, [rest, category, topic, audience, query]);

  const pages = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
  const current = Math.min(page, pages);
  const shown = results.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  /* Any change to the filters restarts the paging — otherwise a reader on
     page 3 narrows the results and lands on an empty page. */
  const onFilter = (set: (v: string) => void) => (v: string) => { set(v); setPage(1); };

  const fmt = (d: string) =>
    new Date(d).toLocaleDateString(i18n.language === 'fr' ? 'fr-MA' : 'en-GB', {
      year: 'numeric', month: 'long', day: 'numeric',
    });

  if (all.length === 0) {
    return (
      <section className="section-md">
        <div className="wrap">
          <div style={{ borderTop: '1px solid var(--rule)', paddingTop: '40px', maxWidth: '58ch' }}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{t('blog.empty_title')}</h2>
            <p style={{ fontSize: '0.9375rem', marginBottom: '24px' }}>{t('blog.empty_desc')}</p>
            <Link to="/contact" className="btn-s">{t('blog.empty_cta')}</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <nav className="crumbs" aria-label={t('blog.breadcrumb')}>
        <div className="wrap crumbs-row">
          <Link to="/" className="link">{t('blog.home')}</Link>
          <span className="crumbs-sep" aria-hidden="true">/</span>
          <Link to="/resources" className="link">{t('nav.resources')}</Link>
          <span className="crumbs-sep" aria-hidden="true">/</span>
          <span aria-current="page">{t('blog.title')}</span>
        </div>
      </nav>

      {/* ── Featured banner ──────────────────────────────────────────── */}
      <section className="section-sm">
        <div className="wrap feature-banner">
          <div className="feature-text">
            <p className="feature-eyebrow">{t('blog.featured')}</p>
            <h1 className="feature-title">
              <Link to={`/blog/${featured.slug}`} className="feature-link">{featured.title}</Link>
            </h1>
            <p className="feature-desc">{featured.description}</p>
            <p className="feature-by">
              {t('blog.by', { author: featured.author })}
              <span aria-hidden="true"> · </span>
              <time dateTime={featured.date}>{fmt(featured.date)}</time>
            </p>
          </div>

          {/* The promotional card. It borrows the featured article's own
              picture rather than naming a file here, so promoting a
              different article changes the image with it and this card can
              never end up advertising one piece over another's photograph.
              The maroon is a token scoped to this block, not a second brand
              colour loose in the system. */}
          <div className="feature-card" aria-hidden="true">
            {featured.image && (
              <img className="feature-card-media" src={featured.image} alt="" decoding="async" />
            )}
            <div className="feature-card-body">
              <img className="feature-card-logo" src="/images/logo-maintevo.png" alt="" width="132" height="88" />
              <p className="feature-card-title">{featured.title}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap"><hr className="feature-rule" /></div>

      {/* ── Filters ──────────────────────────────────────────────────── */}
      <section className="section-sm filter-section">
        <div className="wrap">
          <form className="filter-row" role="search" onSubmit={e => e.preventDefault()}>
            <span className="filter-label" id="filter-label">{t('blog.filter_label')}</span>

            <div className="filter-controls" aria-labelledby="filter-label">
              <Dropdown
                label={t('blog.f_categories')}
                value={category}
                onChange={onFilter(setCategory)}
                options={optionsFor(rest, 'category')}
              />
              <Dropdown
                label={t('blog.f_topics')}
                value={topic}
                onChange={onFilter(setTopic)}
                options={optionsFor(rest, 'topic')}
              />
              <Dropdown
                label={t('blog.f_audiences')}
                value={audience}
                onChange={onFilter(setAudience)}
                options={optionsFor(rest, 'audience')}
              />
            </div>

            <div className="filter-search">
              <label className="blog-sr" htmlFor="blog-q">{t('blog.search')}</label>
              <input
                id="blog-q"
                type="search"
                className="filter-input"
                placeholder={t('blog.search')}
                value={query}
                onChange={e => { setQuery(e.target.value); setPage(1); }}
              />
              <button type="submit" className="filter-go" aria-label={t('blog.search')}>
                <Search size={15} aria-hidden="true" />
              </button>
            </div>
          </form>

          <p className="filter-count" aria-live="polite">
            {t('blog.showing', { shown: results.length, total: rest.length })}
          </p>
        </div>
      </section>

      {/* ── Results ──────────────────────────────────────────────────── */}
      <section className="section-md" style={{ paddingTop: 0 }}>
        <div className="wrap">
          {shown.length === 0 ? (
            <p className="filter-none">{t('blog.no_results')}</p>
          ) : (
            <ul className="post-list">
              {shown.map((post, i) => (
                <li key={post.slug} className="post-card" data-flip={i % 2 === 1 ? 'true' : undefined}>
                  <div className="post-plate" aria-hidden="true">
                    {post.image
                      ? <img className="post-photo" src={post.image} alt="" loading="lazy" decoding="async" />
                      : <span className="post-plate-topic">{post.topic}</span>}
                  </div>
                  <div className="post-body-col">
                    <p className="post-meta">
                      <time dateTime={post.date}>{fmt(post.date)}</time>
                      <span aria-hidden="true"> · </span>
                      {t('blog.minutes', { count: post.minutes })}
                    </p>
                    <h2 className="post-card-title">
                      <Link to={`/blog/${post.slug}`} className="post-link">{post.title}</Link>
                    </h2>
                    <p className="post-excerpt">{post.description}</p>
                    <p className="post-more" aria-hidden="true">
                      {t('blog.read_more')}
                      <ArrowRight size={15} className="post-arrow" />
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {pages > 1 && (
            <nav className="pager" aria-label={t('blog.pagination')}>
              {pageItems(current, pages).map((n, i) =>
                n === null ? (
                  <span key={`gap-${i}`} className="pager-gap" aria-hidden="true">…</span>
                ) : (
                  <button
                    key={n}
                    type="button"
                    className="pager-num"
                    aria-current={n === current ? 'page' : undefined}
                    onClick={() => setPage(n)}
                  >
                    {n}
                  </button>
                ),
              )}
              {current < pages && (
                <button type="button" className="pager-next" onClick={() => setPage(current + 1)}>
                  {t('blog.next_page')}
                  <ChevronRight size={15} aria-hidden="true" />
                </button>
              )}
            </nav>
          )}
        </div>
      </section>

      <style>{`
        /* ── Featured banner ─────────────────────────────────────────── */
        .feature-banner {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 810px);
          gap: 48px;
          align-items: center;
          text-align: left;
        }
        /* The section rule sets margin-inline:auto on every direct child of
           .wrap. On a grid item that centres it inside its own track, which
           is what pushed this column away from the page margin. */
        .feature-banner > * { margin-inline: 0; }
        .feature-text { text-align: left; }
        .feature-eyebrow {
          font-size: .75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: .06em;
          color: var(--ink-muted);
          margin: 0 0 12px;
        }
        .feature-title { font-size: clamp(1.75rem, 3.6vw, 2.75rem); margin: 0; max-width: 20ch; }
        .feature-link { color: var(--ink); text-decoration: none; }
        .feature-link:hover { color: var(--accent); }
        .feature-desc {
          font-size: 1.0625rem;
          line-height: 1.6;
          color: var(--ink-muted);
          max-width: 58ch;
          margin: 16px 0 0;
        }
        .feature-by { font-size: .8125rem; color: var(--ink-muted); margin: 18px 0 0; }

        /* The promotional card. --promo is scoped to this block so the deep
           red cannot leak into the rest of the system, which runs on one
           accent. Change it here and nowhere else. */
        .feature-card {
          /* Only shows through when a featured article has no picture. */
          --promo: #5E1B1B;
          position: relative;
          overflow: hidden;
          border-radius: var(--r);
          aspect-ratio: 3 / 2;
          background: var(--promo);
          display: flex;
          align-items: flex-end;
        }
        /* The photograph is shown as it is. The one thing left over it is a
           gradient across the bottom third, which exists so the white title
           stays readable whatever picture lands here — the image itself is
           whatever the featured article carries, so it cannot be tuned to
           one photo. */
        .feature-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgb(10 12 14 / .78) 0%, rgb(10 12 14 / .25) 30%, rgb(10 12 14 / 0) 62%);
        }
        .feature-card-media {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          /* Low enough that white type clears AA over the lightest part of
             any photograph that lands here, since the picture is no longer
             a fixed one. */
        }
        .feature-card-body { position: relative; z-index: 1; padding: 32px; }
        /* No plate behind it. The mark is drawn for a light ground and its
           right stroke runs to near-black, so a shadow does the separating
           a white box used to. */
        .feature-card-logo {
          display: block;
          margin-bottom: 22px;
          width: 132px;
          height: auto;
          filter: drop-shadow(0 1px 3px rgb(0 0 0 / .55));
        }
        .feature-card-title {
          font-family: var(--font-head);
          font-weight: 600;
          font-size: 1.75rem;
          line-height: 1.22;
          color: #fff;
          margin: 0;
        }

        .feature-rule { border: 0; border-top: 1px solid var(--rule); margin: 0; }

        /* ── Filter bar ──────────────────────────────────────────────────
           Utility controls: small text, hairline borders, no fills. They sit
           under the content, not beside it. */
        .filter-section { padding-bottom: 0; }
        .filter-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          text-align: left;
        }
        .filter-label { font-size: .8125rem; color: var(--ink-muted); }
        .filter-controls { display: flex; flex-wrap: wrap; gap: 8px; }

        .blog-sr {
          position: absolute;
          width: 1px; height: 1px;
          margin: -1px; padding: 0; border: 0;
          overflow: hidden;
          clip-path: inset(50%);
          white-space: nowrap;
        }

        .filter-field { position: relative; display: inline-flex; }
        .filter-select {
          appearance: none;
          font: inherit;
          font-size: .8125rem;
          color: var(--ink);
          background: transparent;
          border: 1px solid var(--rule);
          border-radius: var(--r);
          padding: 7px 30px 7px 12px;
          cursor: pointer;
          transition: border-color .18s ease;
        }
        .filter-select:hover { border-color: var(--rule-strong); }
        .filter-select:focus-visible { outline: 2px solid var(--accent); outline-offset: 1px; }
        .filter-caret {
          position: absolute;
          right: 9px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          color: var(--ink-muted);
        }
        .filter-select[data-active='true'] { border-color: var(--accent); color: var(--accent); }

        .filter-search { position: relative; display: flex; margin-left: auto; }
        .filter-input {
          font: inherit;
          font-size: .8125rem;
          padding: 7px 38px 7px 12px;
          border: 1px solid var(--rule);
          border-radius: var(--r);
          background: transparent;
          color: var(--ink);
          min-width: 210px;
        }
        .filter-input:focus-visible { outline: 2px solid var(--accent); outline-offset: 1px; }
        .filter-go {
          position: absolute;
          right: 1px;
          top: 1px;
          bottom: 1px;
          width: 32px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 0;
          border-left: 1px solid var(--rule);
          color: var(--ink-muted);
          cursor: pointer;
        }
        .filter-go:hover { color: var(--accent); }

        .filter-count {
          font-size: .8125rem;
          color: var(--ink-muted);
          text-align: right;
          margin: 22px 0 0;
        }
        .filter-none { font-size: .9375rem; color: var(--ink-muted); text-align: left; }

        /* ── Result cards ────────────────────────────────────────────── */
        .post-list { list-style: none; margin: 0; padding: 0; }
        .post-list > li + li { margin-top: 20px; }
        .post-card {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 34%) minmax(0, 1fr);
          border: 1px solid var(--rule);
          border-radius: var(--r);
          overflow: hidden;
          background: var(--bg);
          transition: border-color .18s ease;
        }
        .post-card[data-flip] { grid-template-columns: minmax(0, 1fr) minmax(0, 34%); }
        .post-card[data-flip] .post-plate { order: 2; border-right: 0; border-left: 1px solid var(--rule); }
        .post-card:hover { border-color: var(--rule-strong); }
        .post-card:has(.post-link:focus-visible) { outline: 2px solid var(--accent); outline-offset: 2px; }
        .post-plate {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px 20px;
          min-height: 148px;
          background: var(--bg-sunken);
          border-right: 1px solid var(--rule);
          overflow: hidden;
        }
        /* A photograph fills the panel edge to edge; the padding above is
           for the word that shows when there is no photograph. */
        .post-plate:has(.post-photo) { padding: 0; }
        .post-photo { width: 100%; height: 100%; object-fit: cover; display: block; }
        /* The topic still names the card for anyone scanning, laid over the
           picture rather than replaced by it. */
        .post-plate:has(.post-photo)::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgb(22 24 26 / .45), rgb(22 24 26 / 0) 60%);
        }
        .post-plate-topic {
          font-family: var(--font-head);
          font-weight: 600;
          font-size: clamp(1.125rem, 2.2vw, 1.5rem);
          letter-spacing: -0.02em;
          color: var(--ink-muted);
          text-align: center;
          transition: color .18s ease;
        }
        .post-card:hover .post-plate-topic { color: var(--accent); }
        .post-body-col { padding: 26px 28px; min-width: 0; text-align: left; }
        .post-meta { font-size: .8125rem; color: var(--ink-muted); margin: 0 0 10px; }
        .post-card-title { font-size: 1.1875rem; margin: 0; }
        .post-card-title::before {
          content: '';
          display: block;
          width: 34px;
          height: 2px;
          background: var(--accent);
          margin-bottom: 14px;
        }
        .post-link { color: var(--ink); text-decoration: none; }
        .post-link::after { content: ''; position: absolute; inset: 0; }
        .post-card:hover .post-link { color: var(--accent); }
        .post-excerpt {
          font-size: .9375rem;
          line-height: 1.6;
          color: var(--ink-muted);
          margin: 12px 0 0;
          max-width: 62ch;
        }
        .post-more {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: .875rem;
          font-weight: 600;
          color: var(--accent);
          margin: 18px 0 0;
        }
        .post-arrow { opacity: 0; transform: translateX(-6px); transition: opacity .18s ease, transform .18s ease; }
        .post-card:hover .post-arrow { opacity: 1; transform: none; }

        /* ── Pagination ──────────────────────────────────────────────── */
        .pager {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-top: 40px;
          position: relative;
        }
        .pager-num {
          min-width: 32px;
          height: 32px;
          padding: 0 8px;
          font: inherit;
          font-size: .875rem;
          color: var(--ink-muted);
          background: transparent;
          border: 1px solid transparent;
          border-radius: var(--r);
          cursor: pointer;
          transition: color .18s ease, border-color .18s ease;
        }
        .pager-num:hover { color: var(--ink); border-color: var(--rule); }
        .pager-num[aria-current='page'] {
          background: var(--accent);
          color: var(--accent-on);
          border-color: var(--accent);
          font-weight: 600;
        }
        .pager-gap { color: var(--ink-muted); padding: 0 2px; }
        .pager-next {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          margin-left: auto;
          position: absolute;
          right: 0;
          font: inherit;
          font-size: .875rem;
          font-weight: 600;
          color: var(--accent);
          background: transparent;
          border: 0;
          cursor: pointer;
        }

        @media (max-width: 900px) {
          .feature-banner { grid-template-columns: 1fr; gap: 28px; }
          .feature-card { aspect-ratio: 16 / 9; }
        }
        @media (max-width: 720px) {
          .filter-search { margin-left: 0; width: 100%; }
          .filter-input { width: 100%; min-width: 0; }
          .filter-count { text-align: left; }
          .post-card, .post-card[data-flip] { grid-template-columns: 1fr; }
          .post-card[data-flip] .post-plate { order: 0; border-left: 0; }
          .post-plate { min-height: 0; padding: 16px 20px; border-right: 0; border-bottom: 1px solid var(--rule); }
          .post-plate-topic { font-size: 1rem; }
          .post-body-col { padding: 22px 20px; }
          .pager-next { position: static; margin-left: 4px; }
        }
        @media (prefers-reduced-motion: reduce) { .post-arrow { transition: none; } }
      `}</style>
    </>
  );
}

/* A native select carrying the caret the design asks for. Native rather than
   a custom menu on purpose: it inherits keyboard behaviour, type-ahead and
   the platform picker on a phone, none of which a div would get for free. */
function Dropdown({
  label, value, onChange, options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <span className="filter-field">
      <select
        className="filter-select"
        data-active={value ? 'true' : undefined}
        value={value}
        aria-label={label}
        onChange={e => onChange(e.target.value)}
      >
        <option value="">{label}</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      <ChevronDown size={14} className="filter-caret" aria-hidden="true" />
    </span>
  );
}
