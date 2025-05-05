import PresentationLayout from '@/components/presentation-layout';
import IntroSlide from '@/components/slides/intro-slide';
import CryptocurrencySlide from '@/components/slides/cryptocurrency-slide';
import BinanceSlide from '@/components/slides/binance-slide';
import BeginnerCoinsSlide from '@/components/slides/beginner-coins-slide';
import BnbCoinSlide from '@/components/slides/bnb-coin-slide';
import OpportunitiesSlide from '@/components/slides/opportunities-slide';
import ConclusionSlide from '@/components/slides/conclusion-slide';

export default function Home() {
  return (
    <PresentationLayout>
      <IntroSlide />
      <BinanceSlide />
      <CryptocurrencySlide />
      <BeginnerCoinsSlide />
      <BnbCoinSlide />
      <OpportunitiesSlide />
      <ConclusionSlide />
    </PresentationLayout>
  );
}
