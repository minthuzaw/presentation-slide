"use client";

import { useEffect, useState } from 'react';
import SlideContainer from '@/components/slides-container';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function ThankYouSlide() {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-background via-background to-yellow-950/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,215,0,0.1)_0,_transparent_60%)]" />

      <SlideContainer>
        <div className="h-screen flex flex-col justify-center items-center text-center max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center w-full">
            <h1 className={cn(
              "text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight",
              "bg-clip-text text-transparent",
              "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600",
              "transition-all duration-1000",
              animationComplete ? "opacity-100" : "opacity-0 transform translate-y-10"
            )}>
              {/* Thank You <br /> For Your Time! */}
              <Image src="/images/thank-you.gif" width={500} height={500} alt="Thank You" className="mx-auto" />
            </h1>
          </div>
    	</div>
      </SlideContainer>
    </div>
  );
}
