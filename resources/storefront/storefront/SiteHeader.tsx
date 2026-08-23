import { StorefrontButton, StorefrontButtonLink } from '@/Components/storefront/StorefrontButton';
import { useCartDrawer } from '@/contexts/CartDrawerContext';
import { useScrolled } from '@/hooks/useScrolled';
import { Link, usePage } from '@inertiajs/react';
import { useQuoteDrawer } from '@/contexts/QuoteDrawerContext';
import {
    BookOpen,
    FileText,
    Home,
    Info,
    Mail,
    Menu,
    Newspaper,
    Package,
    Phone,
    ShoppingBag,
    X,
} from 'lucide-react';
import { useState } from 'react';

/** Keep in sync with CSS vars in app.css */
export const STOREFRONT_TOPBAR_HEIGHT = '2.25rem';
export const STOREFRONT_HEADER_HEIGHT = '4rem';

export const BRAND = {
    name: 'BrandSupply',
    phone: '+212 5 22 45 67 89',
    phoneHref: 'tel:+212522456789',
    email: 'contact@brandsupply.ma',
    emailHref: 'mailto:contact@brandsupply.ma',
    logoSrc: '/images/storefront/brandsupply-logo.png',
} as const;

const topBarMessages = [
    'Livraison nationale',
    'Devis sous 24h',
    'Stock synchronise ERP',
    'Support dedie B2B',
] as const;

const navLinks = [
    { label: 'Accueil', href: '/', icon: Home },
    { label: 'Produits', href: '/produits', icon: Package },
    { label: 'Catalogues', href: '/catalogues', icon: BookOpen },
    { label: 'A propos de nous', href: '/page/qui-sommes-nous', icon: Info },
    { label: 'Blogs', href: '/blog', icon: Newspaper },
    { label: 'Contact', href: '/contact', icon: Mail },
] as const;

function workspaceLink(user: { roles?: string[] }): { href: string; label: string } {
    const roles = user.roles ?? [];

    if (roles.includes('client')) {
        return { href: '/espace', label: 'Mon espace' };
    }

    if (roles.some((role) => role === 'admin' || role === 'commercial')) {
        return { href: '/admin', label: 'Administration' };
    }

    return { href: '/dashboard', label: 'Mon espace' };
}

function BrandLogo({ className = 'size-9' }: { className?: string }) {
    return (
        <img
            src={BRAND.logoSrc}
            alt={BRAND.name}
            className={`${className} object-contain`}
            width={36}
            height={36}
        />
    );
}

function TopBar() {
    return (
        <div className="border-b border-white/10 bg-storefront-primary text-storefront-primary-fg">
            <div className="storefront-container flex h-9 items-center justify-between gap-4 text-xs">
                <div className="relative min-w-0 flex-1 overflow-hidden">
                    <div className="storefront-topbar-marquee flex w-max items-center gap-8">
                        {[...topBarMessages, ...topBarMessages].map((msg, i) => (
                            <span key={`${msg}-${i}`} className="whitespace-nowrap text-white/85">
                                {msg}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="hidden shrink-0 items-center gap-5 sm:flex">
                    <a
                        href={BRAND.phoneHref}
                        className="inline-flex cursor-pointer items-center gap-1.5 text-white/90 transition-colors duration-200 hover:text-white"
                    >
                        <Phone className="size-3.5" aria-hidden />
                        {BRAND.phone}
                    </a>
                    <a
                        href={BRAND.emailHref}
                        className="inline-flex cursor-pointer items-center gap-1.5 text-white/90 transition-colors duration-200 hover:text-white"
                    >
                        <Mail className="size-3.5" aria-hidden />
                        {BRAND.email}
                    </a>
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-2.5 py-0.5 text-[11px] font-medium text-emerald-100">
                        <span className="relative flex size-1.5" aria-hidden>
                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
                            <span className="relative size-1.5 rounded-full bg-emerald-400" />
                        </span>
                        Support en ligne
                    </span>
                </div>
            </div>
        </div>
    );
}

export default function SiteHeader() {
    const [open, setOpen] = useState(false);
    const scrolled = useScrolled();
    const page = usePage();
    const user = page.props.auth?.user as { id: number; roles?: string[] } | undefined;
    const cart = (page.props as { cart?: { count: number } }).cart;
    const quoteCart = (page.props as { quoteCart?: { count: number } }).quoteCart;
    const isClient = user?.roles?.includes('client') ?? false;
    const workspace = user ? workspaceLink(user) : null;
    const { openCart } = useCartDrawer();
    const { openQuote } = useQuoteDrawer();
    const { url } = page;

    const isActive = (href: string) => {
        if (href === '/') return url === '/';
        if (href.startsWith('/#')) return false;
        return url.startsWith(href);
    };

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${
                scrolled ? 'shadow-card' : ''
            }`}
        >
            <TopBar />

            <div
                className={`border-b backdrop-blur-md transition-all duration-300 ${
                    scrolled
                        ? 'border-storefront-border bg-storefront-bg/95'
                        : 'border-storefront-border/70 bg-storefront-bg/90'
                }`}
            >
                <div className="storefront-container flex h-16 items-center justify-between gap-4 lg:gap-6">
                    <Link
                        href="/"
                        className="flex shrink-0 cursor-pointer items-center gap-2.5"
                        aria-label={`${BRAND.name} accueil`}
                    >
                        <BrandLogo />
                        <span className="text-base font-semibold tracking-tight text-storefront-fg">{BRAND.name}</span>
                    </Link>

                    <nav className="hidden items-center gap-1 xl:flex" aria-label="Navigation principale">
                        {navLinks.map((link) => {
                            const active = isActive(link.href);
                            return (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className={`group relative inline-flex cursor-pointer items-center gap-1.5 rounded-md px-3 py-2 text-sm transition-colors duration-200 ${
                                        active
                                            ? 'font-medium text-storefront-fg'
                                            : 'text-storefront-muted hover:text-storefront-fg'
                                    }`}
                                >
                                    <link.icon className="size-3.5 opacity-70" aria-hidden />
                                    {link.label}
                                    <span
                                        className={`absolute inset-x-3 -bottom-0.5 h-px origin-left bg-storefront-fg transition-transform duration-200 ${
                                            active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                        }`}
                                        aria-hidden
                                    />
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="hidden items-center gap-2 md:flex">
                        {isClient ? (
                            <>
                                <button
                                    type="button"
                                    onClick={openQuote}
                                    className="relative inline-flex size-9 cursor-pointer items-center justify-center rounded-lg border border-storefront-border text-storefront-fg transition-colors hover:bg-storefront-bg"
                                    aria-label={`Mon devis${quoteCart?.count ? ` (${quoteCart.count} articles)` : ''}`}
                                >
                                    <FileText className="size-4" />
                                    {quoteCart && quoteCart.count > 0 ? (
                                        <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-storefront-primary text-[10px] font-semibold text-storefront-primary-fg">
                                            {quoteCart.count > 99 ? '99+' : quoteCart.count}
                                        </span>
                                    ) : null}
                                </button>
                                <button
                                    type="button"
                                    onClick={openCart}
                                    className="relative inline-flex size-9 cursor-pointer items-center justify-center rounded-lg border border-storefront-border text-storefront-fg transition-colors hover:bg-storefront-bg"
                                    aria-label={`Ma commande${cart?.count ? ` (${cart.count} articles)` : ''}`}
                                >
                                    <ShoppingBag className="size-4" />
                                    {cart && cart.count > 0 ? (
                                        <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-storefront-primary text-[10px] font-semibold text-storefront-primary-fg">
                                            {cart.count > 99 ? '99+' : cart.count}
                                        </span>
                                    ) : null}
                                </button>
                            </>
                        ) : null}
                        {workspace ? (
                            <StorefrontButtonLink href={workspace.href} size="sm">
                                {workspace.label}
                            </StorefrontButtonLink>
                        ) : (
                            <>
                                <StorefrontButtonLink href="/login" variant="ghost" size="sm">
                                    Connexion
                                </StorefrontButtonLink>
                                <StorefrontButtonLink href="/inscription-b2b" size="sm">
                                    Demander un compte
                                </StorefrontButtonLink>
                            </>
                        )}
                    </div>

                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        className="inline-flex size-9 cursor-pointer items-center justify-center rounded-md border border-storefront-border text-storefront-fg xl:hidden"
                        aria-label="Menu"
                        aria-expanded={open}
                    >
                        {open ? <X className="size-4" /> : <Menu className="size-4" />}
                    </button>
                </div>

                {open && (
                    <div className="border-t border-storefront-border/70 bg-storefront-bg xl:hidden">
                        <div className="storefront-container flex flex-col gap-3 border-b border-storefront-border/60 py-3 sm:flex-row sm:items-center sm:justify-between">
                            <a
                                href={BRAND.phoneHref}
                                className="inline-flex cursor-pointer items-center gap-2 text-sm text-storefront-muted hover:text-storefront-fg"
                            >
                                <Phone className="size-4" aria-hidden />
                                {BRAND.phone}
                            </a>
                            <a
                                href={BRAND.emailHref}
                                className="inline-flex cursor-pointer items-center gap-2 text-sm text-storefront-muted hover:text-storefront-fg"
                            >
                                <Mail className="size-4" aria-hidden />
                                {BRAND.email}
                            </a>
                        </div>
                        <nav className="storefront-container flex flex-col gap-1 py-4" aria-label="Navigation mobile">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="flex cursor-pointer items-center gap-2.5 rounded-md px-2 py-2.5 text-sm text-storefront-muted transition-colors hover:bg-storefront-card hover:text-storefront-fg"
                                >
                                    <link.icon className="size-4 opacity-70" aria-hidden />
                                    {link.label}
                                </Link>
                            ))}
                            <div className="mt-2 flex flex-col gap-2">
                                {isClient ? (
                                    <>
                                        <StorefrontButton
                                            variant="outline"
                                            size="sm"
                                            className="w-full"
                                            onClick={() => {
                                                openQuote();
                                                setOpen(false);
                                            }}
                                        >
                                            Mon devis{quoteCart?.count ? ` (${quoteCart.count})` : ''}
                                        </StorefrontButton>
                                        <StorefrontButton
                                            variant="outline"
                                            size="sm"
                                            className="w-full"
                                            onClick={() => {
                                                openCart();
                                                setOpen(false);
                                            }}
                                        >
                                            Ma commande{cart?.count ? ` (${cart.count})` : ''}
                                        </StorefrontButton>
                                    </>
                                ) : null}
                                {workspace ? (
                                    <StorefrontButtonLink href={workspace.href} variant="outline" size="sm" className="w-full">
                                        {workspace.label}
                                    </StorefrontButtonLink>
                                ) : (
                                    <>
                                        <StorefrontButtonLink href="/login" variant="outline" size="sm" className="w-full">
                                            Connexion
                                        </StorefrontButtonLink>
                                        <StorefrontButtonLink href="/inscription-b2b" size="sm" className="w-full">
                                            Demander un compte
                                        </StorefrontButtonLink>
                                    </>
                                )}
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
