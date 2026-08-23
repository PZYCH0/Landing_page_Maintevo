const brands = [
    'Atlas Workwear',
    'Nova Brands',
    'Print & Co',
    'Textile Nord',
    'Casablanca Promo',
    'ProWear',
    'EcoBlanks',
    'SoftLine',
];

export default function BrandsStrip() {
    return (
        <section className="border-b border-storefront-border overflow-hidden" aria-label="Clients partenaires">
            <div className="storefront-section-compact storefront-container">
                <p className="mb-4 text-center text-xs font-medium uppercase tracking-widest text-storefront-muted">
                    Ils commandent deja sur la plateforme
                </p>
                <div className="relative overflow-hidden">
                    <div className="storefront-marquee flex w-max gap-12 will-change-transform">
                        {[...brands, ...brands].map((name, i) => (
                            <span
                                key={`${name}-${i}`}
                                className="whitespace-nowrap text-sm font-semibold tracking-tight text-storefront-fg/40"
                            >
                                {name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
