import { BookOpen, CreditCard, Headphones, Truck } from 'lucide-react';

const items = [
    { icon: Truck, label: 'Livraison nationale', detail: 'Suivi en temps reel' },
    { icon: CreditCard, label: 'Credit B2B', detail: 'Plafond & encours geres' },
    { icon: BookOpen, label: 'Catalogues flipbook', detail: 'PDF interactifs' },
    { icon: Headphones, label: 'Support dedie', detail: 'Reclamations centralisees' },
];

export default function TrustBar() {
    return (
        <section className="border-b border-storefront-border bg-storefront-card" aria-label="Garanties plateforme">
            <div className="storefront-section-compact storefront-container grid grid-cols-2 gap-4 md:grid-cols-4">
                {items.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-storefront-border bg-storefront-bg text-storefront-fg">
                            <item.icon className="size-5" strokeWidth={1.75} aria-hidden />
                        </span>
                        <div>
                            <p className="text-sm font-semibold text-storefront-fg">{item.label}</p>
                            <p className="text-xs text-storefront-muted">{item.detail}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
