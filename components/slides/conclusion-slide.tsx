"use client";

import { Button } from '@/components/ui/button';
import SlideContainer from '@/components/slides-container';
import { cn } from '@/lib/utils';
import { Download, ExternalLink, ArrowUp } from 'lucide-react';

export default function ConclusionSlide() {
  const summaryPoints = [
    "The fundamentals of cryptocurrency and blockchain technology",
    "What Binance is and the services it offers",
    "Beginner-friendly cryptocurrencies to consider",
    "The utility and benefits of BNB Coin",
    "Different ways to earn rewards through Binance (Launchpool, MegaDrop, Airdrops)"
  ];

  const scrollToTop = () => {
    const firstSlide = document.getElementById('slide-0');
    if (firstSlide) {
      firstSlide.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-background via-background to-yellow-950/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,215,0,0.1)_0,_transparent_60%)]" />

      <SlideContainer>
        <div className="grid grid-cols-1 gap-10">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Start Your <span className="text-yellow-500">Crypto</span> Journey Today
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              Now that you understand the basics, you&apos;re ready to explore the world of cryptocurrency with confidence. Remember to start small and continue learning.
            </p>
          </div>

          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-card/10 max-w-3xl mx-auto">
            <div className="space-y-3">
              {summaryPoints.map((point, index) => (
                <div key={`summary-${index}`} className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-sm mr-3 mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-card/10 max-w-3xl mx-auto">
            <h3 className="font-bold text-xl mb-4">Important Reminder</h3>
            <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20 text-muted-foreground">
              <p>
                Always do your own research (DYOR) before investing in any cryptocurrency.
                Start with small amounts that you can afford to lose, and gradually
                increase your investments as you gain more experience and knowledge.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {/* <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black"
              onClick={() => window.open('https://www.binance.com', '_blank')}
            >
              Visit Binance <ExternalLink className="ml-2 h-4 w-4" />
            </Button> */}

            {/* <Button
              size="lg"
              variant="outline"
              className="border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/10"
              onClick={() => window.print()}
            >
              Download This Guide <Download className="ml-2 h-4 w-4" />
            </Button> */}

            <Button
              size="lg"
              variant="ghost"
              onClick={scrollToTop}
            >
              Back to Start <ArrowUp className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </SlideContainer>
    </div>
  );
}
