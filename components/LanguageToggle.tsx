'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-white rounded-lg shadow-md p-1">
      <button
        onClick={() => setLanguage('en')}
        className={`px-4 py-2 rounded font-semibold transition-all ${
          language === 'en'
            ? 'bg-red-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        English
      </button>
      <button
        onClick={() => setLanguage('hi')}
        className={`px-4 py-2 rounded font-semibold transition-all ${
          language === 'hi'
            ? 'bg-red-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        हिंदी
      </button>
    </div>
  );
}

