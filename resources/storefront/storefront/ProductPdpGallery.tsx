import { cn } from '@/lib/storefront';
import { Maximize2, Play, X } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

export interface GalleryItem {
    url: string;
    thumb: string;
    type?: 'image' | 'video';
    videoUrl?: string;
    alt?: string;
}

interface ProductPdpGalleryProps {
    items: GalleryItem[];
    activeIndex: number;
    onSelect: (index: number) => void;
    productName: string;
}

function GalleryMedia({
    item,
    productName,
    className,
    videoClassName,
}: {
    item: GalleryItem;
    productName: string;
    className?: string;
    videoClassName?: string;
}) {
    if (item.type === 'video' && item.videoUrl) {
        return (
            <video
                key={item.videoUrl}
                src={item.videoUrl}
                poster={item.url}
                controls
                className={cn('size-full object-contain', videoClassName, className)}
                playsInline
            />
        );
    }

    return (
        <img
            src={item.url}
            alt={item.alt ?? productName}
            className={cn('size-full object-contain', className)}
        />
    );
}

export default function ProductPdpGallery({
    items,
    activeIndex,
    onSelect,
    productName,
}: ProductPdpGalleryProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const active = items[activeIndex] ?? items[0];

    const closeLightbox = useCallback(() => setLightboxOpen(false), []);

    useEffect(() => {
        if (!lightboxOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeLightbox();
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKeyDown);

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [lightboxOpen, closeLightbox]);

    if (items.length === 0) {
        return (
            <div className="flex aspect-square items-center justify-center rounded-3xl bg-[#f3f3f3] text-storefront-muted">
                Pas d&apos;image
            </div>
        );
    }

    return (
        <>
            {/* Same structure as b2-b-e-commerce-landing-page: main first, thumbs second, row-reverse on lg */}
            <div className="flex flex-col gap-4 lg:flex-row-reverse">
                <div className="relative min-w-0 flex-1">
                    <div className="group relative aspect-square w-full overflow-hidden rounded-3xl bg-[#f3f3f3]">
                        <div className="flex size-full items-center justify-center p-4 sm:p-6">
                            <GalleryMedia item={active} productName={productName} />
                        </div>

                        <button
                            type="button"
                            onClick={() => setLightboxOpen(true)}
                            className="absolute right-3 top-3 flex size-9 cursor-pointer items-center justify-center rounded-lg border border-storefront-border bg-white/90 text-storefront-muted opacity-100 shadow-sm backdrop-blur transition-all duration-200 hover:text-storefront-fg lg:opacity-0 lg:group-hover:opacity-100"
                            aria-label="Agrandir l'image"
                        >
                            <Maximize2 className="size-4" strokeWidth={1.75} />
                        </button>
                    </div>
                </div>

                {items.length > 0 && (
                    <div
                        className="flex gap-3 overflow-x-auto pb-1 lg:w-20 lg:shrink-0 lg:flex-col lg:overflow-visible lg:pb-0"
                        role="tablist"
                        aria-label="Vignettes produit"
                    >
                        {items.map((item, i) => {
                            const selected = i === activeIndex;
                            return (
                                <button
                                    key={`${item.url}-${i}`}
                                    type="button"
                                    role="tab"
                                    onClick={() => onSelect(i)}
                                    className={cn(
                                        'relative aspect-square w-20 shrink-0 cursor-pointer overflow-hidden rounded-xl bg-[#f3f3f3] transition-all duration-200 lg:w-full',
                                        selected
                                            ? 'border-2 border-storefront-fg'
                                            : 'border-2 border-transparent hover:border-storefront-border',
                                    )}
                                    aria-label={item.alt ?? `Voir image ${i + 1}`}
                                    aria-selected={selected}
                                >
                                    <img
                                        src={item.thumb}
                                        alt=""
                                        className="size-full object-cover"
                                    />
                                    {item.type === 'video' && (
                                        <span className="absolute inset-0 flex items-center justify-center bg-storefront-fg/20">
                                            <Play className="size-4 fill-white text-white" aria-hidden />
                                        </span>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>

            {lightboxOpen && active && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${productName} — vue agrandie`}
                    onClick={closeLightbox}
                >
                    <button
                        type="button"
                        onClick={closeLightbox}
                        className="absolute right-4 top-4 flex size-10 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                        aria-label="Fermer"
                    >
                        <X className="size-5" />
                    </button>
                    <div className="relative max-h-[90vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
                        <GalleryMedia
                            item={active}
                            productName={productName}
                            className="max-h-[85vh] max-w-full object-contain"
                            videoClassName="max-h-[85vh] w-full"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
