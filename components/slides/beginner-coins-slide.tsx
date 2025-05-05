"use client";

import { useState } from 'react';
import SlideContainer from '@/components/slides-container';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function BeginnerCoinsSlide() {
  const beginnerCoins = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      image: '/images/crypto/bitcoin.png',
      description: 'The most popular and trusted cryptocurrency, acting as digital gold.',
      beginner: 'Great for long-term holders and beginners.',
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      image: '/images/crypto/ETH.png',
      description: 'Leading smart contract platform enabling decentralized applications.',
      beginner: 'Perfect for those interested in the technology behind crypto.',
    },
    {
      name: 'Binance Coin',
      symbol: 'BNB',
      image: '/images/crypto/bnb.png',
      description: "Binance's native token with multiple use cases in the ecosystem.",
      beginner: 'Good for active Binance users, provides fee discounts.',
    },
    {
      name: 'Tether',
      symbol: 'USDT',
      image: '/images/crypto/usdt.png',
      description: 'A stablecoin pegged to the US dollar, designed to maintain $1 value.',
      beginner: 'Great for preserving value during market volatility.',
    },
  ];

  const faqs = [
    {
      question: 'What is a stablecoin?',
      answer: 'Stablecoins are cryptocurrencies designed to minimize price volatility by pegging their value to a stable asset, usually the US dollar. Examples include USDT, USDC, and BUSD.'
    },
    {
      question: 'How much should I invest as a beginner?',
      answer: 'Only invest what you can afford to lose. Many beginners start with small amounts, such as $100-$1,000, to learn the process before increasing their investment.'
    },
    {
      question: 'Where should I store my crypto?',
      answer: 'For smaller amounts, exchange wallets like Binance are convenient. For larger holdings, consider hardware wallets like Ledger or Trezor for enhanced security.'
    }
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-background to-blue-950/5">
      <SlideContainer>
        <div className="grid grid-cols-1 gap-10">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Which Coins Should Beginners Buy?
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              For newcomers to cryptocurrency, starting with established assets can help reduce risk while learning the fundamentals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beginnerCoins.map((coin) => (
              <Card key={coin.symbol} className="overflow-hidden backdrop-blur-sm bg-card/80 border-card/10 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="relative h-12 w-12">
                      <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-md" />
                      <Image
                        src={coin.image}
                        alt={`${coin.name} logo`}
                        width={48}
                        height={48}
                        className="relative z-10"
                      />
                    </div>
                    <div className="text-right">
                      <h3 className="font-bold">{coin.name}</h3>
                      <p className="text-sm text-yellow-500">{coin.symbol}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">{coin.description}</p>
                  <div className="bg-primary/5 p-3 rounded-md text-sm border border-primary/10">
                    <span className="font-medium">For beginners:</span> {coin.beginner}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-card/10">
            <h3 className="font-bold text-xl mb-6">Tips for Beginner Crypto Investors</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                  <span>Diversify your portfolio across different types of cryptocurrencies</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                  <span>Start with small investments and increase as you gain experience</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
                  <span>Research thoroughly before investing in any cryptocurrency</span>
                </li>
              </ul>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-xs mr-2 mt-0.5">4</span>
                  <span>Consider dollar-cost averaging instead of timing the market</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-xs mr-2 mt-0.5">5</span>
                  <span>Keep a long-term perspective and don&apos;t panic sell during dips</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-xs mr-2 mt-0.5">6</span>
                  <span>Use secure storage solutions for your cryptocurrency</span>
                </li>
              </ul>
            </div>
          </div>

          <Accordion type="single" collapsible className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-card/10">
            <h3 className="font-bold text-xl mb-4">Frequently Asked Questions</h3>
            {faqs.map((faq, index) => (
              <AccordionItem key={`faq-${index}`} value={`faq-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SlideContainer>
    </div>
  );
}
