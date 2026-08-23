import { StorefrontButtonLink } from '@/Components/storefront/StorefrontButton';
import { HeroSlideMedia, storefrontMedia } from '@/lib/storefrontMedia';
import { ArrowRight, ChevronLeft, ChevronRight, Radio, ShieldCheck } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

export interface HeroSlide {
    id: string | number;
    imageUrl: string;
    /** Unsplash (or default) URL used when imageUrl fails to load */
    fallbackImageUrl: string;
    imageAlt: string;
    title: string;
    subtitle: string;
    primaryHref: string;
    primaryLabel: string;
    secondaryHref: string;
    secondaryLabel: string;
}

function HeroSlideImage({
    src,
    fallback,
    alt,
    fetchPriority,
    isActive,
    prefersReducedMotion,
}: {
    src: string;
    fallback: string;
    alt: string;
    fetchPriority?: 'high' | 'low' | 'auto';
    isActive: boolean;
    prefersReducedMotion: boolean;
}) {
    const [current, setCurrent] = useState(src);

    useEffect(() => {
        setCurrent(src);
    }, [src]);

    return (
        <img
            src={current}
            alt={alt}
            fetchPriority={fetchPriority}
            className={`absolute inset-0 h-full w-full object-cover ${
                isActive && !prefersReducedMotion ? 'motion-safe:scale-105 motion-safe:transition-transform motion-safe:duration-[8000ms] ease-out' : 'scale-100'
            }`}
            onError={() => {
                if (current !== fallback) {
                    setCurrent(fallback);
                }
            }}
        />
    );
}

interface HeroSliderProps {
    slides: HeroSlide[];
}

const HERO_STATS = [
    { value: '500+', label: 'References catalogue' },
    { value: '24h', label: 'Delai devis' },
    { value: '98%', label: 'Expeditions a temps' },
] as const;

const AUTO_ADVANCE_MS = 5500;

export default function HeroSlider({ slides }: HeroSliderProps) {
    const [index, setIndex] = useState(0);
    const [controlsPaused, setControlsPaused] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
    const count = slides.length;

    const go = useCallback(
        (next: number) => {
            setIndex(((next % count) + count) % count);
        },
        [count],
    );

    useEffect(() => {
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        const update = () => setPrefersReducedMotion(mq.matches);
        update();
        mq.addEventListener('change', update);
        return () => mq.removeEventListener('change', update);
    }, []);

    useEffect(() => {
        if (count <= 1 || prefersReducedMotion || controlsPaused) return;

        const id = window.setInterval(() => {
            setIndex((current) => (current + 1) % count);
        }, AUTO_ADVANCE_MS);

        return () => window.clearInterval(id);
    }, [count, controlsPaused, prefersReducedMotion, index]);

    if (count === 0) return null;

    const slide = slides[index];
    const transitionClass = prefersReducedMotion
        ? 'motion-reduce:transition-none'
        : 'transition-opacity duration-700 ease-out';

    return (
        <section
            id="hero"
            className="group/hero relative w-full overflow-hidden border-b border-storefront-border bg-zinc-900 scroll-mt-[var(--storefront-header-total)]"
            aria-roledescription="carousel"
            aria-label="Bannieres principales"
        >
            <div className="storefront-hero-height relative w-full">
                {slides.map((s, i) => (
                    <div
                        key={s.id}
                        className={`absolute inset-0 overflow-hidden ${transitionClass} ${
                            i === index ? 'opacity-100' : 'pointer-events-none opacity-0'
                        }`}
                        aria-hidden={i !== index}
                    >
                        <HeroSlideImage
                            src={s.imageUrl}
                            fallback={s.fallbackImageUrl}
                            alt={s.imageAlt}
                            fetchPriority={i === 0 ? 'high' : 'auto'}
                            isActive={i === index}
                            prefersReducedMotion={prefersReducedMotion}
                        />
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10 sm:via-black/25 sm:to-transparent"
                            aria-hidden
                        />
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"
                            aria-hidden
                        />
                    </div>
                ))}

                <div className="relative z-10 flex h-full flex-col justify-between pb-20 pt-6 sm:pt-8">
                    <div className="storefront-container flex flex-1 flex-col justify-center">
                        <div
                            key={slide.id}
                            className={`max-w-xl ${prefersReducedMotion ? '' : 'motion-safe:animate-fade-up'}`}
                        >
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
                                <ShieldCheck className="size-3.5" aria-hidden />
                                Plateforme B2B textile — Maroc
                            </span>

                            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                                {slide.title}
                            </h1>

                            <p className="mt-4 max-w-lg text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
                                {slide.subtitle}
                            </p>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <StorefrontButtonLink
                                    href={slide.primaryHref}
                                    size="lg"
                                    variant="secondary"
                                    className="group/btn border-0 bg-white text-zinc-900 shadow-sm hover:bg-white/90"
                                >
                                    {slide.primaryLabel}
                                    <ArrowRight className="size-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                                </StorefrontButtonLink>
                                <StorefrontButtonLink
                                    href={slide.secondaryHref}
                                    size="lg"
                                    variant="outline"
                                    className="border-white/40 bg-white/10 text-white hover:border-white hover:bg-white hover:text-storefront-fg"
                                >
                                    {slide.secondaryLabel}
                                </StorefrontButtonLink>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/40 backdrop-blur-md">
                        <dl className="storefront-container flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-3 sm:py-4">
                            {HERO_STATS.map((stat) => (
                                <div key={stat.label} className="flex items-baseline gap-3">
                                    <dt className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                                        {stat.value}
                                    </dt>
                                    <dd className="text-sm text-white/75">{stat.label}</dd>
                                </div>
                            ))}
                            <div className="hidden lg:flex">
                                <span className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-50">
                                    <span className="relative flex size-2" aria-hidden>
                                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
                                        <span className="relative size-2 rounded-full bg-emerald-400" />
                                    </span>
                                    <Radio className="size-3.5 text-emerald-300" aria-hidden />
                                    Inventaire & flux ERP en temps reel
                                </span>
                            </div>
                        </dl>
                    </div>
                </div>

                {count > 1 && (
                    <div
                        className="absolute inset-x-0 bottom-[4.5rem] z-20 flex items-center justify-between px-4 sm:bottom-[5rem] sm:px-5 lg:px-6"
                        onMouseEnter={() => setControlsPaused(true)}
                        onMouseLeave={() => setControlsPaused(false)}
                        onFocusCapture={() => setControlsPaused(true)}
                        onBlurCapture={(e) => {
                            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                                setControlsPaused(false);
                            }
                        }}
                    >
                        <button
                            type="button"
                            onClick={() => go(index - 1)}
                            className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur-md transition-colors duration-200 hover:border-white/30 hover:bg-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:opacity-0 sm:group-hover/hero:opacity-100"
                            aria-label="Slide precedente"
                        >
                            <ChevronLeft className="size-5" aria-hidden />
                        </button>

                        <div
                            className="absolute left-1/2 flex -translate-x-1/2 items-center gap-3"
                            role="tablist"
                            aria-label="Selection de slide"
                        >
                            <span className="hidden text-xs font-medium tabular-nums text-white/60 sm:inline">
                                {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
                            </span>
                            <div className="flex items-center gap-2">
                                {slides.map((s, i) => (
                                    <button
                                        key={s.id}
                                        type="button"
                                        role="tab"
                                        onClick={() => setIndex(i)}
                                        className="group/dot relative h-1 cursor-pointer overflow-hidden rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                                        style={{ width: i === index ? '2.5rem' : '0.5rem' }}
                                        aria-label={`Aller au slide ${i + 1} : ${s.title}`}
                                        aria-current={i === index ? 'true' : undefined}
                                    >
                                        <span
                                            className={`absolute inset-0 rounded-full ${
                                                i === index ? 'bg-white/25' : 'bg-white/40 group-hover/dot:bg-white/60'
                                            }`}
                                        />
                                        {i === index && !prefersReducedMotion && (
                                            <span
                                                key={`progress-${index}`}
                                                className="hero-slide-progress absolute inset-y-0 left-0 rounded-full bg-white"
                                                style={{ animationDuration: `${AUTO_ADVANCE_MS}ms` }}
                                            />
                                        )}
                                        {i === index && prefersReducedMotion && (
                                            <span className="absolute inset-0 rounded-full bg-white" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => go(index + 1)}
                            className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur-md transition-colors duration-200 hover:border-white/30 hover:bg-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:opacity-0 sm:group-hover/hero:opacity-100"
                            aria-label="Slide suivante"
                        >
                            <ChevronRight className="size-5" aria-hidden />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

export interface CmsBanner {
    id: number;
    title: string | null;
    subtitle: string | null;
    image_path: string | null;
    link_url: string | null;
}

export function resolveHeroImage(path: string | null | undefined): string | null {
    if (!path?.trim()) return null;
    const trimmed = path.trim();
    if (trimmed.startsWith('http')) return trimmed;
    if (trimmed.startsWith('/')) return trimmed;
    return `/storage/${trimmed}`;
}

function cmsBannerToSlide(
    banner: CmsBanner,
    fallback: HeroSlideMedia,
): HeroSlide {
    const resolved = resolveHeroImage(banner.image_path);
    return {
        id: banner.id,
        imageUrl: resolved ?? fallback.url,
        fallbackImageUrl: fallback.url,
        imageAlt: fallback.alt,
        title: banner.title ?? fallback.title,
        subtitle: banner.subtitle ?? fallback.subtitle,
        primaryHref: banner.link_url ?? fallback.primaryHref,
        primaryLabel: fallback.primaryLabel,
        secondaryHref: fallback.secondaryHref,
        secondaryLabel: fallback.secondaryLabel,
    };
}

function defaultMediaToSlide(media: HeroSlideMedia): HeroSlide {
    return {
        id: media.id,
        imageUrl: media.url,
        fallbackImageUrl: media.url,
        imageAlt: media.alt,
        title: media.title,
        subtitle: media.subtitle,
        primaryHref: media.primaryHref,
        primaryLabel: media.primaryLabel,
        secondaryHref: media.secondaryHref,
        secondaryLabel: media.secondaryLabel,
    };
}

export function buildHeroSlides(banners: CmsBanner[]): HeroSlide[] {
    const defaults = storefrontMedia.heroSlides;

    if (banners.length === 0) {
        return defaults.map(defaultMediaToSlide);
    }

    const bannerSlides = banners.map((banner, i) =>
        cmsBannerToSlide(banner, defaults[i % defaults.length]),
    );

    if (bannerSlides.length >= defaults.length) {
        return bannerSlides;
    }

    const usedImages = new Set(bannerSlides.map((s) => s.imageUrl));
    const fillers = defaults
        .filter((d) => !usedImages.has(d.url))
        .map(defaultMediaToSlide)
        .slice(0, defaults.length - bannerSlides.length);

    return [...bannerSlides, ...fillers];
}
