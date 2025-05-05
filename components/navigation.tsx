"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ModeToggle } from './mode-toggle';
import Image from 'next/image';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-4 md:px-6 h-16 flex items-center justify-between",
        "transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="flex items-center space-x-1">
        <div className="relative">
          <Image
            src="/images/binance.png"
            alt="Binance Logo"
            width={42}
            height={42}
            className="object-contain"
          />
        </div>
        <span className="text-xl font-bold">Binance</span>
      </div>
      <ModeToggle />
    </header>
  );
}
