'use client';

import { Product } from '@/lib/types';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { t } = useLanguage();
  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer h-full">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 h-32 sm:h-40 md:h-48 flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-1 sm:mb-2">⚙️</div>
            <p className="text-xs sm:text-sm text-gray-500">{product.sku}</p>
          </div>
        </div>

        <div className="p-3 sm:p-4">
          <h3 className="font-semibold text-sm sm:text-base text-gray-800 line-clamp-2 mb-2">{product.name}</h3>

          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {product.category}
            </span>
          </div>

          <div className="border-t pt-2 sm:pt-3">
            <div className="flex items-baseline justify-between">
              <span className="text-xl sm:text-2xl font-bold text-red-600">
                ₹{product.price.toFixed(2)}
              </span>
              <span className="text-xs text-gray-500">per unit</span>
            </div>
          </div>

          <button className="w-full mt-3 sm:mt-4 bg-red-600 hover:bg-red-700 text-white font-medium py-2 sm:py-2.5 text-sm sm:text-base rounded-lg transition-colors duration-200">
            {t('product.backToProducts')}
          </button>
        </div>
      </div>
    </Link>
  );
}

