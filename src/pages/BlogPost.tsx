import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { marked } from 'marked';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link, useLocale } from '../components/LocaleLink';
import NotFound from './NotFound';
import { findPost, postsIn } from '../content/blog/index';

/* Section headings, pulled straight from the Markdown so the contents list
   cannot drift from the article it describes. */
function headings(body: string) {
  return [...body.matchAll(/^##\s+(.+)$/gm)].map(m => {
    const text = m[1].trim();
    return {
      text,
      id: text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, ''),
    };
  });
}

export default function BlogPost() {
  const { slug = '' } = useParams();
  const locale = useLocale();
  const { t, i18n } = useTranslation();

  const post = findPost(locale, slug);
  const all = postsIn(locale);
  const index = post ? all.findIndex(p => p.slug === post.slug) : -1;
  const newer = index > 0 ? all[index - 1] : undefined;
  const older = index >= 0 && index < all.length - 1 ? all[index + 1] : undefined;

  const sections = useMemo(() => (post ? headings(post.body) : []), [post]);

  /* Rendered from Markdown we author ourselves — nothing third-party or
     reader-supplied reaches this, which is what makes setting it as HTML
     acceptable here and would not if the source were anything else. */
  const html = useMemo(() => {
    if (!post) return '';
    let n = -1;
    const renderer = new marked.Renderer();
    const ids = headings(post.body);
    renderer.heading = ({ text, depth }) => {
      if (depth !== 2) return `<h${depth}>${text}</h${depth}>`;
      n += 1;
      return `<h2 id="${ids[n]?.id ?? ''}">${text}</h2>`;
    };
    return marked.parse(post.body, { renderer }) as string;
  }, [post]);

  if (!post) return <NotFound />;

  const published = new Date(post.date).toLocaleDateString(
    i18n.language === 'fr' ? 'fr-MA' : 'en-GB',
    { year: 'numeric', month: 'long', day: 'numeric' },
  );

  return (
    <>
      {/* The reference design's breadcrumb band. It is also the one part of
          that layout search engines care about. */}
      <nav className="crumbs" aria-label={t('blog.breadcrumb')}>
        <div className="wrap crumbs-row">
          <Link to="/" className="link">{t('blog.home')}</Link>
          <span className="crumbs-sep" aria-hidden="true">/</span>
          <Link to="/blog" className="link">{t('blog.title')}</Link>
          <span className="crumbs-sep" aria-hidden="true">/</span>
          <span aria-current="page">{post.topic}</span>
        </div>
      </nav>

      <section className="section-md">
        <div className="wrap post-layout">
          <article className="post-main">
            <p className="post-byline">
              <time dateTime={post.date}>{published}</time>
              <span aria-hidden="true"> · </span>
              {t('blog.minutes', { count: post.minutes })}
              <span aria-hidden="true"> · </span>
              <span className="post-topic">{post.topic}</span>
            </p>

            <h1 className="post-title">{post.title}</h1>
            <p className="post-standfirst">{post.description}</p>

            <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />

            {post.related && (
              <p className="post-related">
                <Link to={`/${post.related}`} className="link">{t('blog.related')}</Link>
              </p>
            )}

            {/* Previous / next, as in the reference. Real internal links
                between articles, which is also how a blog earns its keep. */}
            <nav className="post-nav" aria-label={t('blog.more')}>
              {older ? (
                <Link to={`/blog/${older.slug}`} className="post-nav-link">
                  <ArrowLeft size={15} aria-hidden="true" />
                  <span>
                    <span className="post-nav-label">{t('blog.prev')}</span>
                    <span className="post-nav-title">{older.title}</span>
                  </span>
                </Link>
              ) : <span />}
              {newer && (
                <Link to={`/blog/${newer.slug}`} className="post-nav-link post-nav-next">
                  <span>
                    <span className="post-nav-label">{t('blog.next')}</span>
                    <span className="post-nav-title">{newer.title}</span>
                  </span>
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              )}
            </nav>
          </article>

          <aside className="post-aside">
            {sections.length > 0 && (
              <div className="aside-block">
                <h2 className="aside-title">{t('blog.toc')}</h2>
                <ol className="aside-list">
                  {sections.map(s => (
                    <li key={s.id}><a href={`#${s.id}`} className="link">{s.text}</a></li>
                  ))}
                </ol>
              </div>
            )}

            {all.length > 1 && (
              <div className="aside-block">
                <h2 className="aside-title">{t('blog.other')}</h2>
                <ol className="aside-ranked">
                  {all.filter(p => p.slug !== post.slug).map((p, i) => (
                    <li key={p.slug}>
                      <span className="aside-rank" aria-hidden="true">{i + 1}</span>
                      <Link to={`/blog/${p.slug}`} className="link">{p.title}</Link>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* The slot the reference fills with an Instagram grid. There is
                no account to show and no photographs to show in it, so it
                carries the one thing a reader might actually want next. */}
            <div className="aside-block aside-cta">
              <h2 className="aside-title">{t('blog.cta_title')}</h2>
              <p className="aside-cta-text">{t('blog.cta_desc')}</p>
              <Link to="/contact" className="btn-p">{t('common.requestDemo')}</Link>
            </div>
          </aside>
        </div>
      </section>

      <style>{`
        /* ── Two columns, article and sidebar ─────────────────────────── */
        .post-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 300px);
          gap: 56px;
          align-items: start;
          text-align: left;
        }
        /* The section rule centres everything inside .wrap, and its
           is(...) > .wrap selector outranks a class placed on .wrap itself.
           Set it on the columns instead, where it wins by inheritance rather
           than by specificity. Long-form prose is never centred. */
        .post-main, .post-aside { text-align: left; }
        .post-main { min-width: 0; }

        .post-byline { font-size: .8125rem; color: var(--ink-muted); margin: 0 0 14px; }
        .post-topic { color: var(--accent); font-weight: 600; }
        .post-title { font-size: clamp(1.75rem, 3.4vw, 2.5rem); max-width: 24ch; }
        .post-standfirst {
          font-size: 1.125rem;
          line-height: 1.6;
          color: var(--ink-muted);
          max-width: 62ch;
          margin: 18px 0 0;
          padding-bottom: 28px;
          border-bottom: 1px solid var(--rule);
        }

        .post-body { max-width: 68ch; margin-top: 28px; }
        .post-body > * + * { margin-top: 20px; }
        .post-body h2 {
          font-size: 1.375rem;
          margin-top: 44px;
          padding-top: 20px;
          border-top: 1px solid var(--rule);
          scroll-margin-top: 90px;
        }
        .post-body h3 { font-size: 1.0625rem; margin-top: 32px; }
        .post-body p, .post-body li { font-size: 1rem; line-height: 1.7; color: var(--ink-muted); }
        .post-body strong { color: var(--ink); font-weight: 600; }
        .post-body ul { padding-left: 20px; }
        .post-body li + li { margin-top: 8px; }
        .post-body a { color: var(--accent); text-decoration: underline; text-underline-offset: 3px; }

        /* The reference design's pull quote, as a blockquote. */
        .post-body blockquote {
          margin: 32px 0;
          padding: 4px 0 4px 22px;
          border-left: 2px solid var(--accent);
        }
        .post-body blockquote p {
          font-family: var(--font-head);
          font-size: 1.1875rem;
          line-height: 1.5;
          color: var(--ink);
          margin: 0;
        }

        .post-related { margin-top: 40px; padding-top: 22px; border-top: 1px solid var(--rule); }

        /* ── Previous / next ──────────────────────────────────────────── */
        .post-nav {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 20px;
        }
        .post-nav-link {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 16px 18px;
          border: 1px solid var(--rule);
          border-radius: var(--r);
          color: var(--ink);
          text-decoration: none;
          transition: border-color .18s ease, color .18s ease;
        }
        .post-nav-link:hover { border-color: var(--accent); color: var(--accent); }
        .post-nav-next { justify-content: flex-end; text-align: right; }
        .post-nav-label {
          display: block;
          font-size: .75rem;
          color: var(--ink-muted);
          margin-bottom: 4px;
        }
        .post-nav-title { display: block; font-size: .9375rem; font-weight: 600; }

        /* ── Sidebar ──────────────────────────────────────────────────── */
        .post-aside { position: sticky; top: 96px; display: grid; gap: 20px; }
        .aside-block {
          border: 1px solid var(--rule);
          border-radius: var(--r);
          padding: 20px;
          background: var(--bg-sunken);
        }
        .aside-title {
          font-size: .8125rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: .04em;
          color: var(--ink-muted);
          margin: 0 0 14px;
        }
        .aside-list, .aside-ranked { list-style: none; margin: 0; padding: 0; font-size: .9375rem; }
        .aside-list li + li,
        .aside-ranked li + li { margin-top: 10px; padding-top: 10px; border-top: 1px solid var(--rule); }
        .aside-ranked li { display: grid; grid-template-columns: 22px 1fr; gap: 10px; align-items: baseline; }
        .aside-rank {
          font-family: var(--font-head);
          font-weight: 600;
          color: var(--ink-muted);
          font-variant-numeric: tabular-nums;
        }
        .aside-cta { background: var(--bg); }
        .aside-cta-text { font-size: .9375rem; color: var(--ink-muted); margin: 0 0 16px; }

        @media (max-width: 900px) {
          .post-layout { grid-template-columns: 1fr; gap: 44px; }
          .post-aside { position: static; }
          .post-nav { grid-template-columns: 1fr; }
          .post-nav-next { justify-content: flex-start; text-align: left; flex-direction: row-reverse; }
        }
      `}</style>
    </>
  );
}
