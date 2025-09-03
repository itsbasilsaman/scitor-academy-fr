"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';
import languageContent from './languageContent';

export type Language = 'en' | 'ar';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: typeof languageContent['en'];
  direction: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');
  const content = languageContent[language];
  const direction = language === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, content, direction }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
