"use client";

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import SlideIndicator from './slide-indicator';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface PresentationLayoutProps {
  children: React.ReactNode;
}

export default function PresentationLayout({ children }: PresentationLayoutProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (containerRef.current) {
      const slides = containerRef.current.querySelectorAll('.slide');
      setTotalSlides(slides.length);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop;
        const slideHeight = window.innerHeight;
        const currentSlide = Math.round(scrollPosition / slideHeight);
        if (currentSlide !== activeSlide) {
          setActiveSlide(currentSlide);
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [activeSlide]);

  const scrollToSlide = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  const navigateToNextSlide = () => {
    if (activeSlide < totalSlides - 1) {
      scrollToSlide(activeSlide + 1);
    }
  };

  const navigateToPrevSlide = () => {
    if (activeSlide > 0) {
      scrollToSlide(activeSlide - 1);
    }
  };

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden pt-16">
      <div 
        ref={containerRef}
        className="h-full w-full overflow-y-auto snap-y snap-mandatory"
        style={{ scrollbarWidth: 'none' }}
      >
        {React.Children.map(children, (child, index) => (
          <div 
            className={cn(
              "slide h-[100dvh] w-full snap-start flex items-center justify-center relative",
              "transition-opacity duration-500",
            )}
            id={`slide-${index}`}
          >
            {child}
          </div>
        ))}
      </div>

      <SlideIndicator 
        totalSlides={totalSlides} 
        activeSlide={activeSlide}
        onSlideChange={scrollToSlide}
      />

      <div className="fixed right-10 bottom-[50%] z-50 transform translate-y-1/2 flex flex-col space-y-6">
        <button 
          onClick={navigateToPrevSlide}
          className={cn(
            "p-3 rounded-full bg-primary/10 text-primary-foreground backdrop-blur-sm", 
            "hover:bg-primary/20 transition-all duration-200",
            "focus:outline-none focus:ring-2 focus:ring-primary/50",
            activeSlide === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100"
          )}
          disabled={activeSlide === 0}
        >
          <ArrowUp size={20} />
        </button>
        <button 
          onClick={navigateToNextSlide}
          className={cn(
            "p-3 rounded-full bg-primary/10 text-primary-foreground backdrop-blur-sm", 
            "hover:bg-primary/20 transition-all duration-200",
            "focus:outline-none focus:ring-2 focus:ring-primary/50",
            activeSlide === totalSlides - 1 ? "opacity-50 cursor-not-allowed" : "opacity-100"
          )}
          disabled={activeSlide === totalSlides - 1}
        >
          <ArrowDown size={20} />
        </button>
      </div>
    </div>
  );
}