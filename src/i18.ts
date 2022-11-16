import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const config = {
  fallbackLng: "en",
  whitelist: ["en", "ru"],
  debug: true,
  detection: {
    order: ["localStorage", "queryString", "cookie"],
    cache: ["localStorage", "queryString", "cookie"],
  },
  interpolation: {
    escapeValue: false,
  },
};

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init(config);

export default i18n;
