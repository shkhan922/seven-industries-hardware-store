'use client';

import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-950 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          <div className="flex flex-col items-center md:items-start">
            <div className="relative w-20 h-20 mb-4">
              <Image
                src="/logo.png"
                alt="Seven Industries Logo"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-white font-bold text-lg mb-4 text-center md:text-left">{t('footer.about')}</h3>
            <p className="text-sm leading-relaxed text-center md:text-left">
              {t('footer.aboutText')}
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">{t('footer.products')}</h3>
            <ul className="text-sm space-y-3">
              <li><a href="#" className="hover:text-red-500 transition-colors duration-200">Hardware Fittings</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors duration-200">Handles & Knobs</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors duration-200">All Products</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">{t('footer.quickLinks')}</h3>
            <ul className="text-sm space-y-3">
              <li><a href="/" className="hover:text-red-500 transition-colors duration-200">Home</a></li>
              <li><a href="/" className="hover:text-red-500 transition-colors duration-200">Browse Products</a></li>
              <li><a href="#contact" className="hover:text-red-500 transition-colors duration-200">{t('footer.contact')}</a></li>
            </ul>
          </div>

          <div id="contact">
            <h3 className="text-white font-bold text-lg mb-4">{t('footer.contact')}</h3>
            <p className="text-sm leading-relaxed">
              <strong>{t('footer.email')}:</strong><br />
              <a href="mailto:info@sevenindustries.com" className="hover:text-red-500 transition-colors">info@sevenindustries.com</a>
            </p>
            <p className="text-sm leading-relaxed mt-3">
              <strong>{t('footer.phone')}:</strong><br />
              <a href="tel:+15551234567" className="hover:text-red-500 transition-colors">+1 (555) 123-4567</a>
            </p>
            <p className="text-sm leading-relaxed mt-3">
              <strong>{t('footer.hours')}:</strong><br />
              Mon-Fri 9AM-6PM
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>{t('footer.copyright')}</p>
          <p className="text-gray-500 mt-2">{t('footer.tagline')}</p>
        </div>
      </div>
    </footer>
  );
}

