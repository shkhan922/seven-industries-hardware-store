'use client';

import Link from 'next/link';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '@/lib/LanguageContext';
import { useEffect, useState } from 'react';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="bg-white text-gray-900 shadow-2xl border-b-4 border-red-600">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-2 sm:py-4 gap-2 sm:gap-0">
          <Link href="/" className="flex items-center gap-2 sm:gap-6 flex-shrink-0">
            <img
              src="/logo.png"
              alt="Seven Industries Logo"
              className="w-20 h-20 sm:w-28 sm:h-28 object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">{t('header.company')}</h1>
              <p className="text-sm sm:text-lg text-red-600 font-semibold -mt-1">{t('header.tagline')}</p>
            </div>
          </Link>

          <div className="flex items-center gap-1 sm:gap-4 w-full sm:w-auto justify-between sm:justify-end">
            <a href="tel:+918279434278" className="text-xs sm:text-sm font-bold text-red-600 hover:text-red-700 transition-colors md:hidden">
              📞 +91 8279434278
            </a>
            <LanguageToggle />
            <nav className="hidden md:flex space-x-4 lg:space-x-8 items-center">
              <Link href="/" className="text-xs sm:text-sm font-medium text-gray-700 hover:text-red-600 transition-colors">
                {t('nav.products')}
              </Link>
              <a href="#contact" className="text-xs sm:text-sm font-medium text-gray-700 hover:text-red-600 transition-colors">
                {t('nav.contact')}
              </a>
              <a href="tel:+918279434278" className="text-xs sm:text-sm font-medium text-red-600 hover:text-red-700 transition-colors font-semibold">
                📞 +91 8279434278
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

