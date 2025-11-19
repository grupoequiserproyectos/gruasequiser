
'use client';

import { NextIntlClientProvider } from 'next-intl';
import { ReactNode, useEffect, useState } from 'react';
import { getLocaleFromCookie } from '@/lib/i18n-utils';

interface IntlProviderProps {
  children: ReactNode;
}

export function IntlProvider({ children }: IntlProviderProps) {
  const [messages, setMessages] = useState<any>(null);
  const [locale, setLocale] = useState<string>('es');

  useEffect(() => {
    const loadMessages = async () => {
      const currentLocale = getLocaleFromCookie();
      setLocale(currentLocale);
      
      try {
        const messagesModule = await import(`@/messages/${currentLocale}.json`);
        setMessages(messagesModule.default);
      } catch (error) {
        console.error('Error loading messages:', error);
        // Fallback to Spanish
        const messagesModule = await import(`@/messages/es.json`);
        setMessages(messagesModule.default);
      }
    };

    loadMessages();

    // Listen for locale changes
    const handleLocaleChange = () => {
      loadMessages();
    };

    window.addEventListener('storage', handleLocaleChange);
    return () => window.removeEventListener('storage', handleLocaleChange);
  }, []);

  if (!messages) {
    return <>{children}</>;
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
