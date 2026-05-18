import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  fr: {
    title: "Page introuvable",
    desc: "La page que vous cherchez n'existe pas ou a été déplacée.",
    cta: "Retour à l'accueil"
  },
  ar: {
    title: "الصفحة غير موجودة",
    desc: "الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
    cta: "الرجوع إلى الرئيسية"
  },
  en: {
    title: "Page Not Found",
    desc: "The page you are looking for does not exist or has been moved.",
    cta: "Back to Home"
  }
};

export default function NotFound() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', direction: language === 'ar' ? 'rtl' : 'ltr' }}>
      <div className="container text-center">
        <h1 style={{ fontSize: '6rem', color: 'var(--color-primary)', marginBottom: '1rem', fontFamily: 'var(--font-display)', fontWeight: 800 }}>404</h1>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--color-text)' }}>{t.title}</h2>
        <p style={{ color: 'var(--color-muted)', marginBottom: '3rem' }}>
          {t.desc}
        </p>
        <Button asLink to="/">{t.cta}</Button>
      </div>
    </div>
  );
}
