'use client';

import { FilterOptions } from '@/lib/types';

interface FiltersProps {
  categories: string[];
  priceRange: [number, number];
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

export default function Filters({ categories, priceRange, filters, onFilterChange }: FiltersProps) {
  const handleCategoryChange = (category: string) => {
    onFilterChange({
      ...filters,
      selectedCategory: filters.selectedCategory === category ? '' : category,
    });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    onFilterChange({
      ...filters,
      priceRange: [filters.priceRange[0], value],
    });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({
      ...filters,
      sortBy: e.target.value as FilterOptions['sortBy'],
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-3 sm:p-6">
      <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">Filters</h3>

      {/* Sort */}
      <div className="mb-4 sm:mb-6">
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Sort By</label>
        <select
          value={filters.sortBy}
          onChange={handleSortChange}
          className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="name">Name (A-Z)</option>
          <option value="price-low">Price (Low to High)</option>
          <option value="price-high">Price (High to Low)</option>
        </select>
      </div>

      {/* Categories */}
      <div className="mb-4 sm:mb-6">
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-3">Categories</label>
        <div className="space-y-1.5 sm:space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={filters.selectedCategory === category}
                onChange={() => handleCategoryChange(category)}
                className="w-3 h-3 sm:w-4 sm:h-4 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
              />
              <span className="ml-2 text-xs sm:text-sm text-gray-700">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-3">
          Max Price: ₹{filters.priceRange[1].toFixed(2)}
        </label>
        <input
          type="range"
          min={priceRange[0]}
          max={priceRange[1]}
          step="0.5"
          value={filters.priceRange[1]}
          onChange={handlePriceChange}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>₹{priceRange[0].toFixed(2)}</span>
          <span>₹{priceRange[1].toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

