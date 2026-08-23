import { useTranslation } from 'react-i18next';
import { Link } from '../components/LocaleLink';
import PageBand from '../components/PageBand';

/* Was an empty state saying "nothing published yet" — while three navbar
   entries pointed at it, each promising one of these. */
const ITEMS = [
  { to: '/resources/kpi-definitions', title: 'resources.kpi_title',    desc: 'resources.kpi_desc' },
  { to: '/resources/setup-checklist', title: 'resources.check_title',  desc: 'resources.check_desc' },
  { to: '/blog',                      title: 'resources.guides_title', desc: 'resources.guides_desc' },
];

export default function Resources() {
  const { t } = useTranslation();

  return (
    <>
      <section className="hero-pad-sm">
        <div className="wrap">
          <h1 className="hero-in">{t('resources.index_title')}</h1>
          <p className="lead hero-in hero-in-2" style={{ maxWidth: '58ch', marginTop: '22px' }}>
            {t('resources.index_desc')}
          </p>
        </div>
      </section>

      <PageBand src="/images/pages/resources.webp" />

      <section className="section-md">
        <div className="wrap">
          {/* The stacked index the design system already uses for the home
              page module list. The row carries its own rules, so no wrapper
              border, and the whole row is the target. */}
          <div>
            {ITEMS.map(item => (
              <Link key={item.to} to={item.to} className="index-row">
                <div className="index-name">{t(item.title)}</div>
                <p className="index-desc">{t(item.desc)}</p>
                <span className="index-go">{t('resources.open')} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
