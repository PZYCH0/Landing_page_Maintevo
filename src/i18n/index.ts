import { createInstance, type i18n as I18n } from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import fr from './fr.json';
import type { Locale } from '../seo/site';

/* One instance per language rather than one instance that changes language.
   During a static build all thirty-six pages render in a single Node process;
   with a shared mutable instance, any async boundary lets the previous page's
   language leak into the next one, and the way that fails is "every English
   page came out French" — silently, in the output, with the build reporting
   success. Two instances cannot do that.

   Memoised, so the browser builds at most two and hydration reuses the one
   the server rendered with. */
const instances = new Map<Locale, I18n>();

export function i18nFor(locale: Locale): I18n {
  const existing = instances.get(locale);
  if (existing) return existing;

  const instance = createInstance();
  instance.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
    lng: locale,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    /* i18next must never suspend: a suspended tree during prerender renders
       the fallback into the HTML instead of the page. */
    react: { useSuspense: false },
  });

  instances.set(locale, instance);
  return instance;
}
