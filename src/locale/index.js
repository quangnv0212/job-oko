import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import {initReactI18next} from 'react-i18next';
import transVi from './vi.json';
import transEn from './en.json';

const options = {
  order: ['querystring', 'navigator'],
  lookupQuerystring: 'lng',
};

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {options},
    debug: true,
    lng: 'vi',
    fallbackLng: 'vi', // use en if detected lng is not available

    interpolation: {
      escapeValue: false, // react already safes from xss
    },

    resources: {
      vi: {
        translations: transVi,
      },
      en: {
        translations: transEn,
      },
    },
    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',
    react: {
      // wait: true,
      useSuspense: true,
    },
  });

export function translate(name, params = {}) {
  return i18n.t(name, params);
}

export default i18n;
