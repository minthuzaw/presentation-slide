"use client";

import SlideContainer from '@/components/slides-container';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Bitcoin, Wallet, Lock } from 'lucide-react';

export default function CryptocurrencySlide() {
  const coins = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      image: '/images/crypto/bitcoin.png',
      description: 'The original cryptocurrency and largest by market cap.'
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      image: '/images/crypto/ETH.png',
      description: 'The leading smart contract platform enabling DApps and DeFi.'
    },
    {
      name: 'Tether',
      symbol: 'USDT',
      image: '/images/crypto/usdt.png',
      description: 'A stablecoin pegged to the US dollar.'
    }
  ];

  const features = [
    {
      icon: Bitcoin,
      title: 'Decentralized',
      description: 'Not controlled by any central authority'
    },
    {
      icon: Lock,
      title: 'Secure',
      description: 'Protected by advanced cryptography'
    },
    {
      icon: Wallet,
      title: 'Borderless',
      description: 'Send money anywhere, anytime'
    }
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-background to-blue-950/5">
      <SlideContainer>
        <div className="grid grid-cols-1 gap-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tight">
              What is Cryptocurrency?
            </h2>
            <p className="max-w-5xl mx-auto text-lg text-muted-foreground">
              Cryptocurrency is a digital or virtual currency that uses cryptography for security. Unlike traditional currencies issued by governments, cryptocurrencies operate on decentralized networks based on blockchain technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coins.map((coin) => (
              <Card key={coin.symbol} className="overflow-hidden backdrop-blur-sm bg-card/80 border-card/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="relative h-12 w-12">
                      <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-md" />
                      <Image
                        src={coin.image}
                        alt={`${coin.name} logo`}
                        width={48}
                        height={48}
                        className="relative z-10"
                        priority
                      />
                    </div>
                    <div className="text-right">
                      <h3 className="font-bold">{coin.name}</h3>
                      <p className="text-sm text-yellow-500">{coin.symbol}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{coin.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="backdrop-blur-sm bg-card/80 border-card/10">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-yellow-500/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-yellow-500" />
                  </div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="backdrop-blur-sm bg-card/80 border-card/10">
            <CardContent className="p-6">
              <h3 className="font-bold text-xl mb-4">Key Cryptocurrency Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                    <span>Recorded on public distributed ledgers (blockchains)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                    <span>Limited supply (most cryptocurrencies)</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                    <span>Transparent transaction history</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                    <span>Varying levels of privacy and security</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </SlideContainer>
    </div>
  );
}
