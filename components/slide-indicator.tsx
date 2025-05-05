"use client";

import { cn } from '@/lib/utils';

interface SlideIndicatorProps {
  totalSlides: number;
  activeSlide: number;
  onSlideChange: (index: number) => void;
}

export default function SlideIndicator({ 
  totalSlides, 
  activeSlide, 
  onSlideChange 
}: SlideIndicatorProps) {
  return (
    <div className="fixed left-10 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-2">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={`indicator-${index}`}
          className={cn(
            "w-3 h-3 rounded-full transition-all duration-300",
            "hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary/50",
            index === activeSlide 
              ? "bg-primary w-4 h-4" 
              : "bg-primary/30 hover:bg-primary/50"
          )}
          onClick={() => onSlideChange(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}