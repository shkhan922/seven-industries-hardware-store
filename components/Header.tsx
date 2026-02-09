'use client';

import Link from 'next/link';
import Image from 'next/image';
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
        <div className="flex justify-between items-center py-3 sm:py-4 min-h-20 sm:min-h-32">
          <Link href="/" className="flex items-center gap-2 sm:gap-6 flex-shrink-0">
            <div className="relative w-16 h-16 sm:w-28 sm:h-28">
              <Image
                src="/logo.png"
                alt="Seven Industries Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">{t('header.company')}</h1>
              <p className="text-sm sm:text-lg text-red-600 font-semibold -mt-1">{t('header.tagline')}</p>
            </div>
          </Link>

          <div className="flex items-center gap-2 sm:gap-4">
            <LanguageToggle />
            <nav className="hidden md:flex space-x-4 lg:space-x-8">
              <Link href="/" className="text-xs sm:text-sm font-medium text-gray-700 hover:text-red-600 transition-colors">
                {t('nav.products')}
              </Link>
              <a href="#contact" className="text-xs sm:text-sm font-medium text-gray-700 hover:text-red-600 transition-colors">
                {t('nav.contact')}
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

