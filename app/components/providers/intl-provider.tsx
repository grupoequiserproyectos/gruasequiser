
'use client';

import { NextIntlClientProvider } from 'next-intl';
import { ReactNode, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import esMessages from '@/messages/es.json';
import enMessages from '@/messages/en.json';

interface IntlProviderProps {
  children: ReactNode;
}

export function IntlProvider({ children }: IntlProviderProps) {
  const [messages, setMessages] = useState(esMessages);
  const [locale, setLocale] = useState<string>('es');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Get locale from cookie
    const savedLocale = Cookies.get('NEXT_LOCALE') || 'es';
    setLocale(savedLocale);
    setMessages(savedLocale === 'en' ? enMessages : esMessages);
    setMounted(true);

    // Listen for locale changes via custom event
    const handleLocaleChange = () => {
      const newLocale = Cookies.get('NEXT_LOCALE') || 'es';
      setLocale(newLocale);
      setMessages(newLocale === 'en' ? enMessages : esMessages);
    };

    window.addEventListener('localeChange', handleLocaleChange);
    return () => window.removeEventListener('localeChange', handleLocaleChange);
  }, []);

  // Show nothing until mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
