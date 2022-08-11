import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationVN from 'src/components/specific/translationLanguage/locales/vi/translation.json';
import translationEN from 'src/components/specific/translationLanguage/locales/en/translation.json';

import { languageCode } from './utils/constants';

//The translation
const resources = {
  vi: {
    translation: translationVN,
  },
  en: {
    translation: translationEN,
  },
};

const backend = new Backend({
  // path where resources get loaded from
  loadPath: 'src/components/specific/translationLanguage/locales/{{lng}}/{{ns}}.json',
});

i18n
  .use(backend)
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: languageCode,
    fallbackLng: languageCode[0],
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    react: { useSuspense: false },
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
