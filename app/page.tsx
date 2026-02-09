'use client';

import { useState, useMemo } from 'react';
import { Product, FilterOptions } from '@/lib/types';
import { filterProducts, getCategories, getPriceRange } from '@/lib/utils';
import SearchBar from '@/components/SearchBar';
import Filters from '@/components/Filters';
import ProductCard from '@/components/ProductCard';
import BannerCarousel from '@/components/BannerCarousel';
import { useLanguage } from '@/lib/LanguageContext';

const PRODUCTS_PER_PAGE = 12;

export default function Home() {
  const { t } = useLanguage();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<FilterOptions>({
    searchQuery: '',
    selectedCategory: '',
    priceRange: [0, 1000],
    sortBy: 'name',
  });

  // Load products on mount
  if (isLoading) {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        const priceRange = getPriceRange(data);
        setFilters((prev) => ({
          ...prev,
          priceRange,
        }));
        setIsLoading(false);
      });
  }

  const categories = useMemo(() => getCategories(products), [products]);
  const priceRange = useMemo(() => getPriceRange(products), [products]);
  const filteredProducts = useMemo(() => filterProducts(products, filters), [products, filters]);

  // Reset to page 1 when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [filters]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  // Group products by category
  const productsByCategory = useMemo(() => {
    const grouped: { [key: string]: Product[] } = {};
    paginatedProducts.forEach((product) => {
      if (!grouped[product.category]) {
        grouped[product.category] = [];
      }
      grouped[product.category].push(product);
    });
    return grouped;
  }, [paginatedProducts]);

  return (
    <div className="w-full">
      {/* Banner Carousel - Full Width */}
      <div className="w-full">
        <BannerCarousel />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12">
        {/* Hero Section */}
        <div className="mb-6 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">{t('home.title')}</h2>
          <p className="text-sm sm:text-lg text-gray-600">
            {t('home.description')}
          </p>
        </div>

      {/* Search Bar */}
      <div className="mb-6 sm:mb-8">
        <SearchBar onSearch={(query) => setFilters({ ...filters, searchQuery: query })} />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-8">
        {/* Sidebar Filters */}
        <div className="lg:col-span-1">
          <Filters
            categories={categories}
            priceRange={priceRange}
            filters={filters}
            onFilterChange={setFilters}
          />
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
            <h3 className="text-lg sm:text-2xl font-bold text-gray-900">
              {t('home.productsCount')} ({filteredProducts.length})
            </h3>
            {totalPages > 1 && (
              <div className="text-xs sm:text-sm text-gray-600">
                Page {currentPage} of {totalPages}
              </div>
            )}
          </div>

          {filteredProducts.length > 0 ? (
            <>
              <div className="space-y-12">
                {Object.entries(productsByCategory).map(([category, categoryProducts]) => (
                  <div key={category} className="border-b border-gray-200 pb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-red-500">
                      {category}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {categoryProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="px-3 sm:px-4 py-2 text-sm sm:text-base bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors w-full sm:w-auto"
                  >
                    ← Previous
                  </button>

                  <div className="flex gap-1 sm:gap-2 flex-wrap justify-center">
                    {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                      if (totalPages <= 5) return i + 1;
                      if (currentPage <= 3) return i + 1;
                      if (currentPage >= totalPages - 2) return totalPages - 4 + i;
                      return currentPage - 2 + i;
                    }).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm rounded-lg transition-colors ${
                          currentPage === page
                            ? 'bg-red-600 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="px-3 sm:px-4 py-2 text-sm sm:text-base bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors w-full sm:w-auto"
                  >
                    Next →
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">{t('home.noProducts')}</p>
              <button
                onClick={() =>
                  setFilters({
                    searchQuery: '',
                    selectedCategory: '',
                    priceRange,
                    sortBy: 'name',
                  })
                }
                className="mt-4 text-red-600 hover:text-red-700 font-medium"
              >
                {t('home.clearFilters')}
              </button>
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}
