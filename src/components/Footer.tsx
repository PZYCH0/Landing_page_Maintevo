import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Linkedin, Twitter, Youtube } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  fr: {
    desc: "GMAO trilingue conçue pour la réalité des PME industrielles au Maroc. Adieu le papier, bonjour la performance.",
    support: "Support local :",
    address: "Basé à Casablanca, Maroc",
    cols: {
      prod: { title: "Produit", links: ["Fonctionnalités", "Tarifs", "Intégrations", "Sécurité", "Support arabe"] },
      ind: { title: "Industries", links: ["Fabrication", "Automobile", "Agroalimentaire", "Énergie", "Pharma", "Voir tout"] },
      res: { title: "Ressources", links: ["Blog", "Documentation", "Calculateur ROI", "Guides sectoriels", "Études de cas"] },
      corp: { title: "Entreprise", links: ["À propos", "Programme Pilote", "Contact", "Mentions légales", "RGPD"] }
    },
    bottom: {
      origin: "🇲🇦 Basé au Maroc",
      hosting: "🇪🇺 Hébergement Europe",
      compliance: "🔒 Données sécurisées",
      copy: " Tous droits réservés."
    }
  },
  ar: {
    desc: "نظام GMAO ثلاثي اللغات مصمم لواقع المقاولات الصناعية الصغرى والمتوسطة في المغرب. وداعاً للورق، مرحباً بالكفاءة.",
    support: "الدعم المحلي :",
    address: "مقره الدار البيضاء، المغرب",
    cols: {
      prod: { title: "المنتج", links: ["الميزات", "الأسعار", "التكاملات", "الأمن", "دعم بالعربية"] },
      ind: { title: "القطاعات", links: ["التصنيع", "السيارات", "الصناعات الغذائية", "الطاقة", "الصيدلة", "عرض الكل"] },
      res: { title: "الموارد", links: ["المدونة", "الوثائق", "حاسبة ROI", "أدلة المهنة", "دراسات الحالة"] },
      corp: { title: "الشركة", links: ["من نحن", "البرنامج التجريبي", "اتصل بنا", "الإشعارات القانونية", "RGPD"] }
    },
    bottom: {
      origin: "🇲🇦 مقره في المغرب",
      hosting: "🇪🇺 استضافة أوروبية",
      compliance: "🔒 بيانات مؤمنة",
      copy: " جميع الحقوق محفوظة."
    }
  },
  en: {
    desc: "Trilingual CMMS designed for the reality of industrial SMEs in Morocco. Goodbye paper, hello performance.",
    support: "Local Support:",
    address: "Based in Casablanca, Morocco",
    cols: {
      prod: { title: "Product", links: ["Features", "Pricing", "Integrations", "Security", "Arabic Support"] },
      ind: { title: "Industries", links: ["Manufacturing", "Automotive", "Food & Beverage", "Energy", "Pharma", "See all"] },
      res: { title: "Resources", links: ["Blog", "Documentation", "ROI Calculator", "Industry Guides", "Case Studies"] },
      corp: { title: "Company", links: ["About Us", "Pilot Program", "Contact", "Legal Mentions", "GDPR"] }
    },
    bottom: {
      origin: "🇲🇦 Based in Morocco",
      hosting: "🇪🇺 Europe Hosting",
      compliance: "🔒 Secure Data",
      copy: " All rights reserved."
    }
  }
};

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer style={{
      background: 'var(--color-surface)',
      color: 'var(--color-text)',
      paddingTop: '5rem',
      paddingBottom: '2rem',
      borderTop: '1px solid var(--color-border)',
      direction: language === 'ar' ? 'rtl' : 'ltr'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem'
        }}>
          {/* Col 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: language === 'ar' ? 'right' : 'left' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '800', fontSize: '1.5rem', fontFamily: 'var(--font-display)', color: 'var(--color-text)', justifyContent: language === 'ar' ? 'flex-start' : 'flex-start' }}>
              <Settings size={30} color="var(--color-primary)" />
              <span>
                <span style={{ color: 'var(--color-primary)' }}>MAINT</span>
                <span>evo</span>
              </span>
            </Link>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              {t.desc}
            </p>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.85rem', lineHeight: 1.4 }}>
              <strong>{t.support}</strong><br/>
              {t.address}<br/>
              contact@maintevo.ma
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', justifyContent: language === 'ar' ? 'flex-start' : 'flex-start' }}>
              <a href="#" className="footer-icon"><Linkedin size={20} /></a>
              <a href="#" className="footer-icon"><Twitter size={20} /></a>
              <a href="#" className="footer-icon"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Col 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 style={{ fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>{t.cols.prod.title}</h4>
            <Link to="/features" className="footer-link">{t.cols.prod.links[0]}</Link>
            <Link to="/pricing" className="footer-link">{t.cols.prod.links[1]}</Link>
            <Link to="/integrations" className="footer-link">{t.cols.prod.links[2]}</Link>
            <Link to="/securite" className="footer-link">{t.cols.prod.links[3]}</Link>
            <a href="#" className="footer-link">{t.cols.prod.links[4]}</a>
          </div>

          {/* Col 3 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 style={{ fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>{t.cols.ind.title}</h4>
            <Link to="/industries/fabrication" className="footer-link">{t.cols.ind.links[0]}</Link>
            <Link to="/industries/energie" className="footer-link">{t.cols.ind.links[1]}</Link>
            <Link to="/industries/automobile" className="footer-link">{t.cols.ind.links[2]}</Link>
            <Link to="/industries/sante" className="footer-link">{t.cols.ind.links[3]}</Link>
            <Link to="/industries/agroalimentaire" className="footer-link">{t.cols.ind.links[4]}</Link>
            <Link to="/industries" className="footer-link">{t.cols.ind.links[5]}</Link>
          </div>

          {/* Col 4 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 style={{ fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>{t.cols.res.title}</h4>
            <Link to="/blog" className="footer-link">{t.cols.res.links[0]}</Link>
            <Link to="/aide" className="footer-link">{t.cols.res.links[1]}</Link>
            <Link to="/integrations" className="footer-link">{t.cols.res.links[2]}</Link>
            <Link to="/roi" className="footer-link">{t.cols.res.links[3]}</Link>
            <Link to="/etudes-de-cas" className="footer-link">{t.cols.res.links[4]}</Link>
          </div>

          {/* Col 5 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 style={{ fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>{t.cols.corp.title}</h4>
            <Link to="/about" className="footer-link">{t.cols.corp.links[0]}</Link>
            <Link to="/about" className="footer-link">{t.cols.corp.links[1]}</Link>
            <Link to="/contact" className="footer-link">{t.cols.corp.links[2]}</Link>
            <a href="#" className="footer-link">{t.cols.corp.links[3]}</a>
            <Link to="/securite" className="footer-link">{t.cols.corp.links[4]}</Link>
          </div>
        </div>

        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid var(--color-border)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          textAlign: 'center',
          color: 'var(--color-muted)',
          fontSize: '0.875rem'
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', marginBottom: '1rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>{t.bottom.origin}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>{t.bottom.hosting}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>{t.bottom.compliance}</span>
          </div>
          <p>© 2026 MAINTevo.{t.bottom.copy}</p>
        </div>
        
        <style>{`
          .footer-link {
            color: var(--color-muted);
            font-size: 0.95rem;
            transition: color 0.2s;
            text-decoration: none;
          }
          .footer-link:hover {
            color: var(--color-primary);
          }
          .footer-icon {
            color: var(--color-muted);
            transition: color 0.2s;
          }
          .footer-icon:hover {
             color: var(--color-primary);
          }
        `}</style>
      </div>
    </footer>
  );
}
