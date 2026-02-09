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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32 py-4">
          <Link href="/" className="flex items-center space-x-6">
            <div className="relative w-28 h-28">
              <Image
                src="/logo.png"
                alt="Seven Industries Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">{t('header.company')}</h1>
              <p className="text-lg text-red-600 font-semibold -mt-1">{t('header.tagline')}</p>
            </div>
          </Link>

          <LanguageToggle />

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors">
              {t('nav.products')}
            </Link>
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors">
              {t('nav.contact')}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

