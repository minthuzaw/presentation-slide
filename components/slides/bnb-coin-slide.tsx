"use client";

import SlideContainer from '@/components/slides-container';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import {
  Percent,
  Activity,
  Layers,
  Rocket,
  Wallet,
  ShieldCheck
} from 'lucide-react';

export default function BnbCoinSlide() {
  const useCases = [
    {
      title: 'Trading Fee Discounts',
      description: 'Pay Binance trading fees with BNB to receive discounts.',
      icon: Percent,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10'
    },
    {
      title: 'Binance Launchpad',
      description: 'Participate in token sales for new projects on Binance.',
      icon: Rocket,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      title: 'BNB Chain Ecosystem',
      description: 'Used as gas for transactions on BNB Chain and BNB Smart Chain.',
      icon: Layers,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10'
    },
    {
      title: 'Trading & Investments',
      description: 'Active trading market with high liquidity across many pairs.',
      icon: Activity,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      title: 'Payments',
      description: 'Pay for goods and services with merchants accepting BNB.',
      icon: Wallet,
      color: 'text-red-500',
      bgColor: 'bg-red-500/10'
    },
    {
      title: 'Governance',
      description: 'Participate in BNB Chain governance decisions and proposals.',
      icon: ShieldCheck,
      color: 'text-teal-500',
      bgColor: 'bg-teal-500/10'
    }
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-background to-yellow-950/5">
      <SlideContainer>
        <div className="grid grid-cols-1 gap-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              BNB – The <span className="text-yellow-500">Binance</span> Coin
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              BNB is the native utility token of the Binance ecosystem, powering various services
              and providing holders with multiple benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <Card className="md:col-span-5 backdrop-blur-sm bg-card/80 border-card/10">
              <CardContent className="p-6">
                <div className="flex justify-center mb-6">
                  <div className="relative h-24 w-24">
                    <div className="absolute inset-0 bg-yellow-500/30 rounded-full blur-xl" />
                    <Image
                      src="/images/crypto/bnb.png"
                      alt="BNB logo"
                      width={96}
                      height={96}
                      className="relative z-10"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">What Makes BNB Valuable?</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                    <span>Limited supply with regular token burns reducing total supply</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                    <span>Utility across multiple platforms in the Binance ecosystem</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                    <span>High liquidity and trading volume across major exchanges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                    <span>Growing adoption outside of Binance via BNB Chain ecosystem</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {useCases.map((useCase, index) => (
                <Card key={`use-case-${index}`} className="backdrop-blur-sm bg-card/80 border-card/10">
                  <CardContent className="p-5">
                    <div className="flex items-start space-x-4">
                      <div className={cn(
                        "p-2.5 rounded-full",
                        useCase.bgColor
                      )}>
                        <useCase.icon className={cn("h-5 w-5", useCase.color)} />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">{useCase.title}</h4>
                        <p className="text-sm text-muted-foreground">{useCase.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* <Card className="backdrop-blur-sm bg-card/80 border-card/10">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">BNB Evolution Timeline</h3>
              <div className="relative border-l border-yellow-500/30 pl-8 space-y-8 ml-4 max-h-[800px] overflow-y-auto pr-4 custom-scrollbar">
                <div className="relative">
                  <div className="absolute -left-10 top-1 h-5 w-5 rounded-full bg-yellow-500"></div>
                  <h4 className="font-bold">2017: Initial BNB Launch</h4>
                  <p className="text-muted-foreground">Created as an ERC-20 token on the Ethereum blockchain with an initial supply of 200 million BNB.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-10 top-1 h-5 w-5 rounded-full bg-yellow-500"></div>
                  <h4 className="font-bold">2019: Migration to Binance Chain</h4>
                  <p className="text-muted-foreground">BNB moved from Ethereum to Binance&apos;s own blockchain, Binance Chain, becoming a native BEP-2 token.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-10 top-1 h-5 w-5 rounded-full bg-yellow-500"></div>
                  <h4 className="font-bold">2020-2021: BNB Smart Chain Launch</h4>
                  <p className="text-muted-foreground">Introduction of BNB Smart Chain (formerly BSC) for smart contracts, with BNB as the native token.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-10 top-1 h-5 w-5 rounded-full bg-yellow-500"></div>
                  <h4 className="font-bold">2022-Present: BNB Chain Ecosystem</h4>
                  <p className="text-muted-foreground">Rebranded to BNB Chain with expanded utility across DeFi, GameFi, NFTs, and more.</p>
                </div>
              </div>
            </CardContent>
          </Card> */}
        </div>
      </SlideContainer>
    </div>
  );
}
