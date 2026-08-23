import type { Locale } from '../../seo/site';
import { LOCALES } from '../../seo/site';

export type Post = {
  /** Shared by an article and its translation. Taken from the filename, so
      the pairing cannot be mistyped — there is no field to get wrong. */
  pair: string;
  locale: Locale;
  /** The address this article lives at, in its own language. */
  slug: string;
  title: string;
  description: string;
  date: string;
  /** One word naming the subject. Shown on the listing in place of a
      photograph, and doubles as the article's tag. */
  topic: string;
  /** What kind of article this is — the "Categories" filter. */
  category: string;
  /** Which role it is written for, from the roles the product defines. */
  audience: string;
  author: string;
  /** Editorial thumbnail. Optional: an article without one falls back to
      the typographic plate, so a missing picture is a quieter card rather
      than a broken layout. */
  image?: string;
  /** Roughly how long the article takes to read, in minutes. */
  minutes: number;
  /** Path of the feature page this article should send a reader to next. */
  related?: string;
  body: string;
};

/* One glob, four consumers: the article pages, the /blog index, the
   prerender list, and the language switcher. */
const FILES = import.meta.glob('./*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;

/* A deliberately small frontmatter reader rather than gray-matter, which
   drags a Buffer polyfill into the browser bundle under Vite. These files
   are ours and the field set is fixed, so a full YAML parser buys nothing. */
function readFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!match) return { data: {}, body: raw };

  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const at = line.indexOf(':');
    if (at === -1) continue;
    const key = line.slice(0, at).trim();
    let value = line.slice(at + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (key) data[key] = value;
  }
  return { data, body: match[2] };
}

function parseAll(): Post[] {
  const posts: Post[] = [];

  for (const [path, raw] of Object.entries(FILES)) {
    /* ./what-is-a-cmms.fr.md -> pair "what-is-a-cmms", locale "fr" */
    const name = path.replace(/^\.\//, '').replace(/\.md$/, '');
    const at = name.lastIndexOf('.');
    const pair = name.slice(0, at);
    const locale = name.slice(at + 1) as Locale;

    if (!LOCALES.includes(locale)) {
      throw new Error(
        `Blog: "${path}" does not end in a known language. Name files ` +
        `{pair}.fr.md and {pair}.en.md.`,
      );
    }

    const { data, body } = readFrontmatter(raw);
    for (const field of ['title', 'description', 'date', 'slug', 'topic', 'category', 'audience', 'author'] as const) {
      if (!data[field]) throw new Error(`Blog: "${path}" is missing "${field}" in its frontmatter.`);
    }

    posts.push({
      pair,
      locale,
      slug: data.slug,
      title: data.title,
      description: data.description,
      date: data.date,
      topic: data.topic,
      category: data.category,
      audience: data.audience,
      author: data.author,
      image: data.image || undefined,
      /* 200 words a minute, floored at one. Rounded rather than precise —
         it is a signal about length, not a measurement. */
      minutes: Math.max(1, Math.round(body.trim().split(/\s+/).length / 200)),
      related: data.related || undefined,
      body,
    });
  }

  /* ── The guarantee ─────────────────────────────────────────────────
     Switching language in the navbar has to land on the same article in
     the other language. That can only be promised if every article has a
     translation, so a missing one stops the build rather than shipping a
     switcher that leads to a 404. The broken state is unbuildable. */
  const byPair = new Map<string, Locale[]>();
  for (const p of posts) byPair.set(p.pair, [...(byPair.get(p.pair) ?? []), p.locale]);

  const orphans = [...byPair.entries()]
    .map(([pair, locales]) => ({ pair, missing: LOCALES.filter(l => !locales.includes(l)) }))
    .filter(x => x.missing.length > 0);

  if (orphans.length > 0) {
    throw new Error(
      'Blog: every article must exist in both languages so the language ' +
      'switcher always has somewhere to go.\n' +
      orphans.map(o => `  - "${o.pair}" is missing: ${o.missing.map(l => `${o.pair}.${l}.md`).join(', ')}`).join('\n'),
    );
  }

  /* Two articles at the same address in the same language would make the
     route ambiguous, and the winner would depend on file order. */
  const seen = new Set<string>();
  for (const p of posts) {
    const key = `${p.locale}:${p.slug}`;
    if (seen.has(key)) throw new Error(`Blog: two ${p.locale} articles share the slug "${p.slug}".`);
    seen.add(key);
  }

  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

export const POSTS: Post[] = parseAll();

/** Articles in one language, newest first. */
export function postsIn(locale: Locale): Post[] {
  return POSTS.filter(p => p.locale === locale);
}

export function findPost(locale: Locale, slug: string): Post | undefined {
  return POSTS.find(p => p.locale === locale && p.slug === slug);
}

/**
 * The same article in another language.
 *
 * This is what the navbar switcher calls. It returns the twin's real
 * address rather than assuming the two share a slug — which is the whole
 * reason a French article can live at a French address.
 */
export function translationOf(post: Post, locale: Locale): Post | undefined {
  return POSTS.find(p => p.pair === post.pair && p.locale === locale);
}
