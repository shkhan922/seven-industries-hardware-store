'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-950 text-gray-300 mt-12 sm:mt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
          <div className="flex flex-col items-center sm:items-start">
            <img
              src="/logo.png"
              alt="Seven Industries Logo"
              className="w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4 object-contain"
            />
            <h3 className="text-white font-bold text-base sm:text-lg mb-2 sm:mb-4 text-center sm:text-left">{t('footer.about')}</h3>
            <p className="text-xs sm:text-sm leading-relaxed text-center sm:text-left">
              {t('footer.aboutText')}
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-white font-bold text-base sm:text-lg mb-2 sm:mb-4">{t('footer.products')}</h3>
            <ul className="text-xs sm:text-sm space-y-2 sm:space-y-3">
              <li><a href="#" className="hover:text-red-500 transition-colors duration-200">Hardware Fittings</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors duration-200">Handles & Knobs</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors duration-200">All Products</a></li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-white font-bold text-base sm:text-lg mb-2 sm:mb-4">{t('footer.quickLinks')}</h3>
            <ul className="text-xs sm:text-sm space-y-2 sm:space-y-3">
              <li><a href="/" className="hover:text-red-500 transition-colors duration-200">Home</a></li>
              <li><a href="/" className="hover:text-red-500 transition-colors duration-200">Browse Products</a></li>
              <li><a href="#contact" className="hover:text-red-500 transition-colors duration-200">{t('footer.contact')}</a></li>
            </ul>
          </div>

          <div id="contact" className="text-center sm:text-left sm:col-span-2 md:col-span-1">
            <h3 className="text-white font-bold text-base sm:text-lg mb-2 sm:mb-4">{t('footer.contact')}</h3>
            <p className="text-xs sm:text-sm leading-relaxed">
              <strong>{t('footer.email')}:</strong><br />
              <a href="mailto:info@sevenindustries.com" className="hover:text-red-500 transition-colors break-all">info@sevenindustries.com</a>
            </p>
            <p className="text-xs sm:text-sm leading-relaxed mt-2 sm:mt-3">
              <strong>{t('footer.phone')}:</strong><br />
              <a href="tel:+918279434278" className="hover:text-red-500 transition-colors">+91 8279434278</a>
            </p>
            <p className="text-xs sm:text-sm leading-relaxed mt-2 sm:mt-3">
              <strong>{t('footer.hours')}:</strong><br />
              Mon-Fri 9AM-6PM
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-xs sm:text-sm">
          <p>{t('footer.copyright')}</p>
          <p className="text-gray-500 mt-2">{t('footer.tagline')}</p>
        </div>
      </div>
    </footer>
  );
}

