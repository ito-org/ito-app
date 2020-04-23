import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './assets/locales/en';
import nl from './assets/locales/nl';
import de from './assets/locales/de';

import {NativeModules} from 'react-native';

function getSystemLocale(): string {
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

const resources = {en, nl, de};

function getLangPrefix(lng: string): string {
  let prefix = 'en';
  if (lng.indexOf('_') > -1) {
    prefix = lng.split('_')[0];
  } else if (lng.indexOf('-') > -1) {
    prefix = lng.split('-')[0];
  }

  if (!resources.hasOwnProperty(prefix)) {
    // reset to English if language is not supported
    prefix = 'en';
  }
  return prefix;
}

console.log('System Locale', getSystemLocale());
console.log('Lang Prefix', getLangPrefix(getSystemLocale()));

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
