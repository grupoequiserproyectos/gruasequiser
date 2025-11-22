
'use client';

import { NextIntlClientProvider } from 'next-intl';
import { ReactNode, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import esMessages from '@/messages/es.json';
import enMessages from '@/messages/en.json';

interface IntlProviderProps {
  children: ReactNode;
}

// Get initial locale from cookie (server-safe)
function getInitialLocale(): string {
  if (typeof window === 'undefined') return 'es';
  return Cookies.get('NEXT_LOCALE') || 'es';
}

export function IntlProvider({ children }: IntlProviderProps) {
  // Initialize with default Spanish locale and messages
  const initialLocale = getInitialLocale();
  const initialMessages = initialLocale === 'en' ? enMessages : esMessages;
  
  const [messages, setMessages] = useState(initialMessages);
  const [locale, setLocale] = useState(initialLocale);

  useEffect(() => {
    // Verify locale from cookie matches state
    const savedLocale = Cookies.get('NEXT_LOCALE') || 'es';
    if (savedLocale !== locale) {
      setLocale(savedLocale);
      setMessages(savedLocale === 'en' ? enMessages : esMessages);
    }

    // Listen for locale changes via custom event
    const handleLocaleChange = () => {
      const newLocale = Cookies.get('NEXT_LOCALE') || 'es';
      setLocale(newLocale);
      setMessages(newLocale === 'en' ? enMessages : esMessages);
    };

    window.addEventListener('localeChange', handleLocaleChange);
    return () => window.removeEventListener('localeChange', handleLocaleChange);
  }, []);

  // Always render with provider and valid messages
  return (
    <NextIntlClientProvider 
      locale={locale} 
      messages={messages}
      timeZone="America/Caracas"
    >
      {children}
    </NextIntlClientProvider>
  );
}
