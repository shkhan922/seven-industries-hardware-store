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
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 h-48 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">⚙️</div>
            <p className="text-sm text-gray-500">{product.sku}</p>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-gray-800 line-clamp-2 mb-2">{product.name}</h3>
          
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {product.category}
            </span>
          </div>
          
          <div className="border-t pt-3">
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-bold text-red-600">
                ₹{product.price.toFixed(2)}
              </span>
              <span className="text-xs text-gray-500">per unit</span>
            </div>
          </div>

          <button className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-lg transition-colors duration-200">
            {t('product.backToProducts')}
          </button>
        </div>
      </div>
    </Link>
  );
}

