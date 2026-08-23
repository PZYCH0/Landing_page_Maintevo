/**
 * A wide, shallow photograph under a page's opening.
 *
 * Deliberately a band rather than a hero image. This site's argument is that
 * hairlines and whitespace carry the structure, and a full-bleed picture at
 * the top of all eighteen pages would replace that argument with the one
 * every other SaaS site makes. A letterbox strip adds the warmth without
 * taking the page over.
 *
 * `alt` is empty on purpose: these are decorative. Every page states its
 * subject in the heading directly above, so a screen reader announcing the
 * picture as well would only repeat it.
 */
export default function PageBand({ src, quiet }: { src: string; quiet?: boolean }) {
  return (
    <div className={quiet ? 'page-band page-band--quiet' : 'page-band'}>
      <div className="wrap">
        <img src={src} alt="" loading="lazy" decoding="async" />
      </div>
    </div>
  );
}
