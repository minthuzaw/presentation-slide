"use client";

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import SlideContainer from '@/components/slides-container';
import { cn } from '@/lib/utils';

export default function IntroSlide() {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const cryptoIcons = Array.from({ length: 15 }).map((_, i) => (
    <div
      key={`icon-${i}`}
      className={cn(
        "absolute rounded-full",
        "animate-pulse text-yellow-500/20 dark:text-yellow-500/30",
        "blur-sm"
      )}
      style={{
        width: `${Math.random() * 5 + 2}rem`,
        height: `${Math.random() * 5 + 2}rem`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 5 + 3}s`,
      }}
    />
  ));

  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-background via-background to-yellow-950/5">
      {cryptoIcons}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,215,0,0.1)_0,_transparent_60%)]" />

      <SlideContainer>
        <div className="h-full flex flex-col justify-center items-center text-center max-w-7xl mx-auto px-4">
          <h1 className={cn(
            "text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight",
            "bg-clip-text text-transparent",
            "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600",
            "transition-all duration-1000",
            animationComplete ? "opacity-100" : "opacity-0 transform translate-y-10"
          )}>
            Understanding Binance & <br />the Crypto World
          </h1>

          <p className={cn(
            "mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl",
            "transition-all duration-1000 delay-300",
            animationComplete ? "opacity-100" : "opacity-0"
          )}>
            In this presentation, you&apos;ll learn the basics of Binance, cryptocurrency, and how to start your crypto journey safely.
          </p>

          <Button
            size="lg"
            className={cn(
              "mt-10 animate-bounce transition-all duration-1000 delay-500",
              "bg-yellow-500 hover:bg-yellow-600 text-black",
              animationComplete ? "opacity-100" : "opacity-0"
            )}
            onClick={() => {
              const secondSlide = document.getElementById('slide-1');
              secondSlide?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            START <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </SlideContainer>
    </div>
  );
}
