import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector'

i18next.use(LanguageDetector).init({
  fallbackLng: 'en',
  resources: {
    zh: {
      translations: require('../locales/zh/translations.json')
    },
    en: {
      translations: require('../locales/en/translations.json')
    }
  },
  ns: ['translations'],
  defaultNS: 'translations',
  returnObjects: true,
  debug: process.env.NODE_ENV === 'development',
  interpolation: {
      escapeValue: false, // not needed for react!!
  },
  react: {
      wait: true,
  },
});

i18next.languages = ['zh-Hant', 'en'];

export default i18next;
