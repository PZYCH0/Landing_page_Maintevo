import { useState } from 'react';

export type ShotVariant = 'desktop' | 'tablet' | 'mobile';

type Props = {
  src: string;
  label: string;
  variant: ShotVariant;
  thumb?: boolean;
  /** Suppress the caption where the surrounding layout already carries one. */
  bare?: boolean;
  eager?: boolean;
};

/**
 * One product screenshot in its frame.
 *
 * The variant is the device the screen was taken on, and it decides the
 * aspect ratio — 9:16 for a phone, 16:10 for a desktop. That is the whole
 * reason it is a prop rather than a constant: a walkthrough that moves
 * from the shop floor to the office and back reads that movement in the
 * shape of the frame before it reads a word of the caption.
 *
 * A missing file falls back to a labelled placeholder naming the path it
 * wanted, so a screen that has not been produced yet is an obvious gap
 * with instructions rather than a broken image.
 */
export default function Shot({ src, label, variant, thumb, bare, eager }: Props) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={`shot-frame shot-frame--${variant}${thumb ? ' shot-size-thumb' : ''}`}>
      <div className="shot-frame-media">
        {!failed ? (
          <img
            src={src}
            alt={label}
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="shot-placeholder">
            <span>{label}</span>
            <code>{src}</code>
          </div>
        )}
      </div>
      {!bare && <figcaption className="shot-caption">{label}</figcaption>}
    </figure>
  );
}
