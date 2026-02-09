export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
  description: string;
  sku: string;
  source: string;
}

export interface FilterOptions {
  searchQuery: string;
  selectedCategory: string;
  priceRange: [number, number];
  sortBy: 'name' | 'price-low' | 'price-high';
}

export type Language = 'en' | 'hi';

export const translations = {
  en: {
    header: {
      company: 'Seven Industries',
      tagline: 'Premium Hardware Fittings',
    },
    nav: {
      products: 'Products',
      contact: 'Contact',
    },
    home: {
      title: 'Exclusive Hardware Fittings',
      description: 'Browse Seven Industries\' extensive catalog of premium hardware products. Search, filter, and find exactly what you need.',
      productsCount: 'Products',
      noProducts: 'No products found matching your criteria.',
      clearFilters: 'Clear filters',
    },
    filters: {
      search: 'Search products by name or SKU...',
      category: 'Category',
      price: 'Price Range',
      sort: 'Sort By',
      sortName: 'Name (A-Z)',
      sortPriceLow: 'Price (Low to High)',
      sortPriceHigh: 'Price (High to Low)',
    },
    product: {
      sku: 'SKU',
      price: 'Price',
      category: 'Category',
      source: 'Source',
      backToProducts: 'Back to Products',
    },
    footer: {
      about: 'About Seven Industries',
      aboutText: 'Premium exclusive hardware fittings supplier with quality products and competitive pricing. Your trusted partner for professional hardware solutions.',
      products: 'Products',
      quickLinks: 'Quick Links',
      contact: 'Contact Us',
      email: 'Email',
      phone: 'Phone',
      hours: 'Hours',
      copyright: '© 2026 Seven Industries. All rights reserved.',
      tagline: 'Premium Hardware Fittings Supplier',
    },
  },
  hi: {
    header: {
      company: 'सेवन इंडस्ट्रीज',
      tagline: 'प्रीमियम हार्डवेयर फिटिंग्स',
    },
    nav: {
      products: 'उत्पाद',
      contact: 'संपर्क',
    },
    home: {
      title: 'एक्सक्लूसिव हार्डवेयर फिटिंग्स',
      description: 'सेवन इंडस्ट्रीज के व्यापक प्रीमियम हार्डवेयर उत्पादों की कैटलॉग ब्राउज़ करें। खोजें, फ़िल्टर करें और बिल्कुल वही खोजें जो आपको चाहिए।',
      productsCount: 'उत्पाद',
      noProducts: 'आपके मानदंड से मेल खाने वाले कोई उत्पाद नहीं मिले।',
      clearFilters: 'फ़िल्टर साफ़ करें',
    },
    filters: {
      search: 'नाम या SKU द्वारा उत्पाद खोजें...',
      category: 'श्रेणी',
      price: 'मूल्य सीमा',
      sort: 'क्रमबद्ध करें',
      sortName: 'नाम (A-Z)',
      sortPriceLow: 'मूल्य (कम से अधिक)',
      sortPriceHigh: 'मूल्य (अधिक से कम)',
    },
    product: {
      sku: 'SKU',
      price: 'मूल्य',
      category: 'श्रेणी',
      source: 'स्रोत',
      backToProducts: 'उत्पादों पर वापस जाएं',
    },
    footer: {
      about: 'सेवन इंडस्ट्रीज के बारे में',
      aboutText: 'गुणवत्ता वाले उत्पादों और प्रतिस्पर्धी मूल्य निर्धारण के साथ प्रीमियम एक्सक्लूसिव हार्डवेयर फिटिंग्स आपूर्तिकर्ता। पेशेवर हार्डवेयर समाधान के लिए आपका विश्वसनीय भागीदार।',
      products: 'उत्पाद',
      quickLinks: 'त्वरित लिंक',
      contact: 'हमसे संपर्क करें',
      email: 'ईमेल',
      phone: 'फोन',
      hours: 'समय',
      copyright: '© 2026 सेवन इंडस्ट्रीज। सर्वाधिकार सुरक्षित।',
      tagline: 'प्रीमियम हार्डवेयर फिटिंग्स आपूर्तिकर्ता',
    },
  },
};
