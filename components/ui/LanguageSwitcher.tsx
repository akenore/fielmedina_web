'use client';

import { Globe } from 'lucide-react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '../../i18n/navigation';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const switchLocale = (newLocale: string) => {
    // Using next-intl navigation, it handles locale switching automatically
    const searchParams = new URLSearchParams(window.location.search);
    router.replace(pathname + (searchParams.toString() ? `?${searchParams}` : ''), {locale: newLocale});
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:text-[#b65d37] transition-colors"
        aria-label="Switch language"
      >
        <Globe className="size-5" />
        <span className="text-sm font-medium uppercase">
          {locale === 'en' ? 'EN' : 'FR'}
        </span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-20 min-w-[120px]">
            <button
              onClick={() => switchLocale('en')}
              className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors first:rounded-t-lg ${
                locale === 'en' ? 'text-[#b65d37] font-semibold' : 'text-gray-700'
              }`}
            >
              🇬🇧 English
            </button>
            <button
              onClick={() => switchLocale('fr')}
              className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors last:rounded-b-lg ${
                locale === 'fr' ? 'text-[#b65d37] font-semibold' : 'text-gray-700'
              }`}
            >
              🇫🇷 Français
            </button>
          </div>
        </>
      )}
    </div>
  );
} 