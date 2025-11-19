
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useChangeLocale, useLocale, type Locale } from '@/lib/i18n-utils';

export function LanguageSwitcher() {
  const currentLocale = useLocale();
  const changeLocale = useChangeLocale();
  const [isOpen, setIsOpen] = useState(false);

  const languages: { code: Locale; name: string; flag: string }[] = [
    { code: 'es', name: 'Español', flag: '🇻🇪' },
    { code: 'en', name: 'English', flag: '🇬🇧' }
  ];

  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];

  const handleLanguageChange = (locale: Locale) => {
    changeLocale(locale);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Botón principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200 border border-white/20"
        aria-label="Change language"
      >
        <Globe className="w-4 h-4 text-white" />
        <span className="text-white font-semibold text-sm">{currentLanguage.flag}</span>
        <span className="text-white font-semibold text-sm hidden sm:inline">{currentLanguage.code.toUpperCase()}</span>
      </button>

      {/* Dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay para cerrar al hacer clic fuera */}
            <div 
              className="fixed inset-0 z-30" 
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-40"
            >
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors ${
                    currentLocale === language.code ? 'bg-blue-50' : ''
                  }`}
                >
                  <span className="text-2xl">{language.flag}</span>
                  <span className={`font-medium ${
                    currentLocale === language.code ? 'text-equiser-blue' : 'text-gray-700'
                  }`}>
                    {language.name}
                  </span>
                  {currentLocale === language.code && (
                    <span className="ml-auto text-equiser-blue">✓</span>
                  )}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
