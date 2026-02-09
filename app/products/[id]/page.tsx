'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Product } from '@/lib/types';
import { useLanguage } from '@/lib/LanguageContext';

export default function ProductDetail({ params }: { params: { id: string } }) {
  const { t } = useLanguage();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data: Product[]) => {
        const found = data.find((p) => p.id === parseInt(params.id));
        setProduct(found || null);
        setIsLoading(false);
      });
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div className="text-center text-sm sm:text-base">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
          <Link href="/" className="text-red-600 hover:text-red-700 font-medium text-sm sm:text-base">
            {t('product.backToProducts')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12">
      <Link href="/" className="text-red-600 hover:text-red-700 font-medium mb-4 sm:mb-8 inline-block text-sm sm:text-base">
        ← {t('product.backToProducts')}
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
        {/* Product Image */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg h-48 sm:h-64 md:h-96 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-4">⚙️</div>
            <p className="text-xs sm:text-sm text-gray-500">{product.sku}</p>
          </div>
        </div>

        {/* Product Details */}
        <div>
          <div className="mb-4 sm:mb-6">
            <span className="inline-block bg-red-100 text-red-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-2 sm:mb-4">
              {product.category}
            </span>
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">{product.name}</h1>
            <p className="text-xs sm:text-base text-gray-600">{t('product.sku')}: {product.sku}</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-3 sm:p-6 mb-4 sm:mb-8">
            <div className="text-3xl sm:text-5xl font-bold text-red-600 mb-1 sm:mb-2">
              ₹{product.price.toFixed(2)}
            </div>
            <p className="text-xs sm:text-base text-gray-600">per unit</p>
          </div>

          {product.description && (
            <div className="mb-4 sm:mb-8">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Description</h3>
              <p className="text-xs sm:text-base text-gray-600">{product.description}</p>
            </div>
          )}

          <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-8">
            <div className="bg-gray-50 rounded-lg p-2 sm:p-4">
              <p className="text-xs text-gray-600 mb-1">{t('product.source')}</p>
              <p className="text-xs sm:text-sm font-semibold text-gray-900">{product.source}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-2 sm:p-4">
              <p className="text-xs text-gray-600 mb-1">Quantity</p>
              <p className="text-xs sm:text-sm font-semibold text-gray-900">{product.quantity || 'Contact'}</p>
            </div>
          </div>

          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 sm:py-3 text-sm sm:text-base rounded-lg transition-colors duration-200 mb-2 sm:mb-4">
            Request Quote
          </button>

          <button className="w-full border-2 border-red-600 text-red-600 hover:bg-red-50 font-semibold py-2 sm:py-3 text-sm sm:text-base rounded-lg transition-colors duration-200">
            Contact Supplier
          </button>
        </div>
      </div>
    </div>
  );
}

