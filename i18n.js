import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './assets/locales/en';
import nl from './assets/locales/nl';

const resources = {
  en: en,
  nl: nl,
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'nl',

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
