import { ArrowUp } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

export default function BackToHeroButton() {
    const [visible, setVisible] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        const update = () => setPrefersReducedMotion(mq.matches);
        update();
        mq.addEventListener('change', update);
        return () => mq.removeEventListener('change', update);
    }, []);

    useEffect(() => {
        const hero = document.getElementById('hero');
        if (!hero) return;

        const observer = new IntersectionObserver(
            ([entry]) => setVisible(!entry.isIntersecting),
            { threshold: 0, rootMargin: '0px' },
        );

        observer.observe(hero);
        return () => observer.disconnect();
    }, []);

    const scrollToHero = useCallback(() => {
        const hero = document.getElementById('hero');
        if (!hero) return;
        hero.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
    }, [prefersReducedMotion]);

    return (
        <button
            type="button"
            onClick={scrollToHero}
            aria-label="Retour a la section principale"
            className={`fixed bottom-6 right-4 z-50 flex size-11 cursor-pointer items-center justify-center rounded-full border border-storefront-border bg-storefront-card text-storefront-fg shadow-card transition-all duration-300 hover:border-storefront-fg/20 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storefront-fg/30 sm:bottom-8 sm:right-6 sm:size-12 ${
                visible
                    ? 'pointer-events-auto translate-y-0 opacity-100'
                    : 'pointer-events-none translate-y-3 opacity-0'
            }`}
        >
            <ArrowUp className="size-5" aria-hidden />
        </button>
    );
}
