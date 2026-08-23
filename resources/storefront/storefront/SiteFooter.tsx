import { BRAND } from '@/Components/storefront/SiteHeader';
import { Link } from '@inertiajs/react';

const footerCols = [
    {
        title: 'Catalogue',
        links: [
            { label: 'Tous les produits', href: '/produits' },
            { label: 'Catalogues flipbook', href: '/catalogues' },
            { label: 'Devis personnalises', href: '/login' },
        ],
    },
    {
        title: 'Compte',
        links: [
            { label: 'Demander un compte', href: '/inscription-b2b' },
            { label: 'Connexion', href: '/login' },
            { label: 'Espace client', href: '/dashboard' },
        ],
    },
    {
        title: 'Blog',
        links: [{ label: 'Actualites', href: '/blog' }],
    },
    {
        title: 'Entreprise',
        links: [
            { label: 'A propos de nous', href: '/page/qui-sommes-nous' },
            { label: 'Contact', href: '/contact' },
            { label: 'Methodologie', href: '/page/methodologie-why-what-who' },
            { label: 'Politique de retour', href: '/page/politique-de-retour' },
        ],
    },
];

export default function SiteFooter() {
    return (
        <footer id="blog" className="bg-storefront-bg">
            <div className="storefront-section storefront-container">
                <div className="grid gap-10 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
                    <div className="flex flex-col gap-4">
                        <Link href="/" className="flex cursor-pointer items-center gap-2.5" aria-label={`${BRAND.name} accueil`}>
                            <img
                                src={BRAND.logoSrc}
                                alt={BRAND.name}
                                className="size-9 object-contain"
                                width={36}
                                height={36}
                            />
                            <span className="text-base font-semibold tracking-tight text-storefront-fg">{BRAND.name}</span>
                        </Link>
                        <p className="max-w-xs text-sm leading-relaxed text-storefront-muted">
                            Textile B2B et impression sur mesure pour marques, agences et revendeurs. Tarifs pro, stock live, partenariat durable.
                        </p>
                    </div>

                    {footerCols.map((col) => (
                        <div key={col.title} className="flex flex-col gap-3">
                            <h3 className="text-sm font-medium text-storefront-fg">{col.title}</h3>
                            <ul className="flex flex-col gap-2.5">
                                {col.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="cursor-pointer text-sm text-storefront-muted transition-colors duration-200 hover:text-storefront-fg"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-storefront-border pt-5 sm:flex-row sm:items-center">
                    <p className="text-sm text-storefront-muted">
                        © {new Date().getFullYear()} {BRAND.name}. Tous droits reserves.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/page/qui-sommes-nous" className="cursor-pointer text-sm text-storefront-muted hover:text-storefront-fg">
                            Mentions
                        </Link>
                        <Link href="/page/politique-de-retour" className="cursor-pointer text-sm text-storefront-muted hover:text-storefront-fg">
                            Retours
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
