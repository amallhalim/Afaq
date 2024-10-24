import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next'; 
import translationEN from '../translation/en.json';
import translationAR from '../translation/ar.json';

// Set up the translation resources
const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAR,
  },
};

i18n
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    resources,
    fallbackLng: 'en', // Fallback language if detection fails
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'], // Language detection order
      caches: ['localStorage', 'cookie'], // Where to store the detected language
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
