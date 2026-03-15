import { createContext, useContext, useState } from 'react';
import portfolioEs from '../data/portfolio.es';
import portfolioEn from '../data/portfolio.en';

const translations = { es: portfolioEs, en: portfolioEn };

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState(
        () => localStorage.getItem('portfolio-lang') || 'es'
    );

    const toggleLanguage = () => {
        setLang((prev) => {
            const next = prev === 'es' ? 'en' : 'es';
            localStorage.setItem('portfolio-lang', next);
            return next;
        });
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLanguage, t: translations[lang] }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
