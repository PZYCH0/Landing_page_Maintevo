import BackToHeroButton from '@/Components/storefront/BackToHeroButton';
import BrandsStrip from '@/Components/storefront/BrandsStrip';
import CatalogShowcase from '@/Components/storefront/CatalogShowcase';
import HomeCollectionsGrid from '@/Components/storefront/HomeCollectionsGrid';
import CtaBanner from '@/Components/storefront/CtaBanner';
import FaqSection from '@/Components/storefront/FaqSection';
import FeaturedProducts from '@/Components/storefront/FeaturedProducts';
import HeroSlider, { buildHeroSlides } from '@/Components/storefront/HeroSlider';
import Methodology from '@/Components/storefront/Methodology';
import PlatformFeatures from '@/Components/storefront/PlatformFeatures';
import ProcessSteps from '@/Components/storefront/ProcessSteps';
import ScrollReveal from '@/Components/storefront/ScrollReveal';
import SiteFooter from '@/Components/storefront/SiteFooter';
import SiteHeader from '@/Components/storefront/SiteHeader';
import TestimonialsSection from '@/Components/storefront/TestimonialsSection';
import TrustBar from '@/Components/storefront/TrustBar';
import { Head } from '@inertiajs/react';

interface Banner {
    id: number;
    title: string | null;
    subtitle: string | null;
    image_path: string | null;
    link_url: string | null;
}

interface HomeCollection {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    image: string | null;
    url: string;
    is_featured: boolean;
}

interface Product {
    id: number;
    name: string;
    slug: string;
    base_price: number;
    stock_qty?: number;
    thumb: string | null;
}

export default function Home({
    banners,
    collections,
    featured,
}: {
    banners: Banner[];
    collections: HomeCollection[];
    featured: Product[];
}) {
    const heroSlides = buildHeroSlides(banners);

    return (
        <div className="min-h-screen overflow-x-hidden bg-storefront-bg font-sans text-storefront-fg antialiased">
            <Head title="Accueil — BrandSupply">
                <meta
                    name="description"
                    content="Plateforme e-commerce B2B textile au Maroc : catalogue blanks & workwear, tarifs grossistes, devis impression, catalogues flipbook et gestion des commandes."
                />
                <link rel="preconnect" href="https://images.unsplash.com" />
            </Head>

            <SiteHeader />
            <main className="overflow-x-hidden">
                <HeroSlider slides={heroSlides} />
                <ScrollReveal variant="fade-in">
                    <TrustBar />
                </ScrollReveal>
                <ScrollReveal variant="fade-up" delay={50}>
                    <BrandsStrip />
                </ScrollReveal>
                <ScrollReveal variant="fade-up">
                    <Methodology />
                </ScrollReveal>
                <ScrollReveal variant="slide-right">
                    <HomeCollectionsGrid collections={collections} />
                </ScrollReveal>
                <ScrollReveal variant="fade-up">
                    <FeaturedProducts products={featured} />
                </ScrollReveal>
                <ScrollReveal variant="slide-left">
                    <CatalogShowcase />
                </ScrollReveal>
                <ScrollReveal variant="scale-in">
                    <PlatformFeatures />
                </ScrollReveal>
                <ScrollReveal variant="fade-up">
                    <ProcessSteps />
                </ScrollReveal>
                <ScrollReveal variant="fade-up" delay={80}>
                    <TestimonialsSection />
                </ScrollReveal>
                <ScrollReveal variant="fade-up">
                    <FaqSection />
                </ScrollReveal>
                <ScrollReveal variant="scale-in">
                    <CtaBanner />
                </ScrollReveal>
            </main>
            <ScrollReveal variant="fade-in">
                <SiteFooter />
            </ScrollReveal>
            <BackToHeroButton />
        </div>
    );
}
