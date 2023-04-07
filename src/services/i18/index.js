import i18n, { use } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"
import { resources } from "./resources";

const i18 = i18n
            .use(initReactI18next)
            use(LanguageDetector)
            .init({
                detection:{
                  order: ['localStorage','path', 'cookie', 'navigator', 'subdomain'],
                },
                resources,
                fallbackLng: localStorage.getItem("lenguage") ? localStorage.getItem("lenguage") : "en",
                interpolation: {
                  escapeValue: false
                },

            })

export default i18