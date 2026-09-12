import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import es from "./locales/es.json";
import en from "./locales/en.json";

// Idiomas soportados. Para agregar uno nuevo:
// 1) crear src/i18n/locales/<lang>.json
// 2) importarlo acá y sumarlo a `resources`
// 3) agregarlo a SUPPORTED_LANGUAGES
export const SUPPORTED_LANGUAGES = [
  { code: "es", label: "ESPAÑOL" },
  { code: "en", label: "ENGLISH" },
];

export const DEFAULT_LANGUAGE = "es";

const resources = {
  es: { translation: es },
  en: { translation: en },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: SUPPORTED_LANGUAGES.map((l) => l.code),
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

export default i18n;
