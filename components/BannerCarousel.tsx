'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Updated: Chest Handle banner now live

const banners = [
  { id: 1, src: '/banner1.jpeg', mobileSrc: '/banner1-mobile.jpeg', alt: 'Hardware Banner 1' },
  { id: 2, src: '/banner2.jpeg', mobileSrc: '/banner2-mobile.jpeg', alt: 'Hardware Banner 2' },
  { id: 3, src: '/banner3.jpeg', mobileSrc: '/banner3-mobile.jpeg', alt: 'Chest Handle Banner' },
  { id: 4, src: '/banner4.jpeg', mobileSrc: '/banner4-mobile.jpeg', alt: 'Concealed Desk Banner' },
];

export default function BannerCarousel() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000); // Change banner every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToBanner = (index: number) => {
    setCurrentBanner(index);
    setIsAutoPlay(false);
  };

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
    setIsAutoPlay(false);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
    setIsAutoPlay(false);
  };

  return (
    <div className="relative w-full h-[350px] sm:h-[400px] md:h-[550px] lg:h-[800px] overflow-hidden rounded-lg sm:rounded-xl shadow-lg sm:shadow-2xl mb-6 sm:mb-12 group flex items-center justify-center bg-gray-100">
      <div className="relative w-full max-w-6xl h-full">
        {/* Banner Images */}
        <div className="relative w-full h-full bg-gray-100 flex items-center justify-center">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center ${
              index === currentBanner ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Mobile image - hidden on md and above */}
            <img
              src={banner.mobileSrc}
              alt={banner.alt}
              className="w-auto h-auto max-w-full max-h-full object-contain md:hidden"
            />
            {/* Desktop image - hidden on md and below */}
            <img
              src={banner.src}
              alt={banner.alt}
              className="w-auto h-auto max-w-full max-h-full object-contain hidden md:block"
            />
          </div>
        ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={prevBanner}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-all duration-200 opacity-70 sm:opacity-0 sm:group-hover:opacity-100 z-10"
          aria-label="Previous banner"
        >
          <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={nextBanner}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-all duration-200 opacity-70 sm:opacity-0 sm:group-hover:opacity-100 z-10"
          aria-label="Next banner"
        >
          <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToBanner(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentBanner
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to banner ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play Toggle */}
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white px-3 py-1 rounded-full text-sm transition-all duration-200 z-10"
        >
          {isAutoPlay ? '⏸ Pause' : '▶ Play'}
        </button>
      </div>
    </div>
  );
}

