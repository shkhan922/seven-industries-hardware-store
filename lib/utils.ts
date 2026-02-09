import { Product, FilterOptions } from './types';

export function filterProducts(products: Product[], filters: FilterOptions): Product[] {
  return products
    .filter((product) => {
      // Search filter
      const matchesSearch = product.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
        product.sku.toLowerCase().includes(filters.searchQuery.toLowerCase());
      
      // Category filter
      const matchesCategory = !filters.selectedCategory || product.category === filters.selectedCategory;
      
      // Price range filter
      const matchesPrice = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      switch (filters.sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });
}

export function getCategories(products: Product[]): string[] {
  const categories = new Set(products.map((p) => p.category));
  return Array.from(categories).sort();
}

export function getPriceRange(products: Product[]): [number, number] {
  const prices = products.map((p) => p.price);
  return [Math.min(...prices), Math.max(...prices)];
}

