import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './assets/locales/en';
import nl from './assets/locales/nl';

import {NativeModules} from 'react-native';

function getSystemLocale() {
  let locale;
  // iOS
  if (
    NativeModules.SettingsManager &&
    NativeModules.SettingsManager.settings &&
    NativeModules.SettingsManager.settings.AppleLanguages
  ) {
    locale = NativeModules.SettingsManager.settings.AppleLanguages[0];
    // Android
  } else if (NativeModules.I18nManager) {
    locale = NativeModules.I18nManager.localeIdentifier;
  }

  if (typeof locale === 'undefined') {
    console.log('Couldnt get locale');
    return 'en';
  }

  return locale;
}

function getLangPrefix(lng) {
  let prefix = 'xx';
  if (lng.indexOf('_') > -1) {
    prefix = lng.split('_')[0];
  } else if (lng.indexOf('-') > -1) {
    prefix = lng.split('-')[0];
  }

  return prefix;
}

const resources = {
  en: en,
  nl: nl,
};

console.log(getSystemLocale());

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: getLangPrefix(getSystemLocale()),

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
