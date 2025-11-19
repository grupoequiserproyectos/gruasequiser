
'use client';

import { usePathname, useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export type Locale = 'es' | 'en';

export function useLocale(): Locale {
  if (typeof window !== 'undefined') {
    return (Cookies.get('NEXT_LOCALE') as Locale) || 'es';
  }
  return 'es';
}

export function useChangeLocale() {
  const router = useRouter();
  const pathname = usePathname();

  return (newLocale: Locale) => {
    // Set cookie for 1 year
    Cookies.set('NEXT_LOCALE', newLocale, { expires: 365 });
    
    // Dispatch custom event to notify IntlProvider
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('localeChange'));
    }
    
    // Reload the page to apply new locale
    router.refresh();
  };
}

export function getLocaleFromCookie(): Locale {
  if (typeof window !== 'undefined') {
    return (Cookies.get('NEXT_LOCALE') as Locale) || 'es';
  }
  return 'es';
}
