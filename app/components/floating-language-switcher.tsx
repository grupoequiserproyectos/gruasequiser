'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useChangeLocale, useLocale, type Locale } from '@/lib/i18n-utils';

interface FloatingLanguageSwitcherProps {
  position: 'top' | 'bottom';
}

export function FloatingLanguageSwitcher({ position }: FloatingLanguageSwitcherProps) {
  const currentLocale = useLocale();
  const changeLocale = useChangeLocale();
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const languages = [
    { 
      code: 'es' as Locale, 
      name: 'Español', 
      flag: 'https://flagcdn.com/ve.svg',
      alt: 'Bandera de Venezuela - Español'
    },
    { 
      code: 'en' as Locale, 
      name: 'English', 
      flag: 'https://flagcdn.com/gb.svg',
      alt: 'UK Flag - English'
    }
  ];

  const handleLanguageChange = (locale: Locale) => {
    changeLocale(locale);
  };

  const positionClasses = position === 'top' 
    ? 'top-4 md:top-6' 
    : 'bottom-4 md:bottom-6';

  // Si está minimizado en móvil, mostrar solo un punto
  if (isMinimized && isMobile) {
    return (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className={`fixed ${positionClasses} right-4 md:right-6 z-[9998]`}
      >
        <button
          onClick={() => setIsMinimized(false)}
          className="w-3 h-3 bg-equiser-yellow rounded-full shadow-lg hover:scale-125 transition-transform"
          aria-label="Mostrar selector de idioma"
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed ${positionClasses} right-4 md:right-6 z-[9998] flex items-center gap-2 md:gap-3`}
    >
      {/* Botón minimizar (solo móvil) */}
      {isMobile && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMinimized(true)}
          className="w-6 h-6 flex items-center justify-center bg-white/90 rounded-full shadow-lg backdrop-blur-sm border border-gray-200"
          aria-label="Minimizar selector de idioma"
        >
          <X className="w-3 h-3 text-gray-600" />
        </motion.button>
      )}

      {/* Banderas de idioma */}
      <div className="flex items-center gap-2 bg-white/95 backdrop-blur-md rounded-full px-2 py-2 shadow-xl border border-gray-200/50">
        {languages.map((language) => {
          const isActive = currentLocale === language.code;
          
          return (
            <motion.button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`relative group ${isActive ? 'ring-2 ring-equiser-yellow ring-offset-2' : ''}`}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              aria-label={`Cambiar a ${language.name}`}
              title={language.name}
            >
              {/* Bandera */}
              <div 
                className={`
                  w-8 h-8 md:w-10 md:h-10 
                  rounded-full 
                  overflow-hidden 
                  shadow-md
                  border-2
                  ${isActive 
                    ? 'border-equiser-yellow shadow-lg shadow-equiser-yellow/30' 
                    : 'border-gray-300 group-hover:border-equiser-blue'
                  }
                  transition-all duration-200
                `}
              >
                <img 
                  src={language.flag} 
                  alt={language.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Indicador activo */}
              {isActive && (
                <motion.div
                  layoutId={`active-indicator-${position}`}
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-equiser-yellow rounded-full"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}

              {/* Tooltip en hover (solo desktop) */}
              <AnimatePresence>
                {!isMobile && (
                  <motion.div
                    initial={{ opacity: 0, y: position === 'top' ? -5 : 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: position === 'top' ? -5 : 5 }}
                    className={`
                      absolute 
                      ${position === 'top' ? 'top-full mt-2' : 'bottom-full mb-2'}
                      left-1/2 
                      transform -translate-x-1/2
                      px-2 py-1 
                      bg-gray-900 
                      text-white 
                      text-xs 
                      rounded 
                      whitespace-nowrap
                      opacity-0 
                      group-hover:opacity-100
                      transition-opacity
                      pointer-events-none
                    `}
                  >
                    {language.name}
                    <div 
                      className={`
                        absolute 
                        left-1/2 
                        transform -translate-x-1/2
                        ${position === 'top' 
                          ? '-top-1 border-b-4 border-b-gray-900 border-x-4 border-x-transparent' 
                          : '-bottom-1 border-t-4 border-t-gray-900 border-x-4 border-x-transparent'
                        }
                      `}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}
