"use client";

import SlideContainer from '@/components/slides-container';
import { BarChart3, Coins, Globe, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function BinanceSlide() {
  const stats = [
    {
      label: "Active Users",
      value: "150M+",
      icon: Users,
      color: "text-blue-500",
      hoverBg: "hover:bg-blue-800 dark:hover:bg-blue-500",
    },
    {
      label: "Cryptocurrencies",
      value: "350+",
      icon: Coins,
      color: "text-yellow-500",
      hoverBg: "hover:bg-yellow-50 dark:hover:bg-yellow-500",
    },
    {
      label: "Daily Volume",
      value: "$76B+",
      icon: BarChart3,
      color: "text-green-500",
      hoverBg: "hover:bg-green-50 dark:hover:bg-green-500",
    },
    {
      label: "Countries",
      value: "180+",
      icon: Globe,
      color: "text-purple-500",
      hoverBg: "hover:bg-purple-50 dark:hover:bg-purple-500",
    },
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-background to-yellow-950/5">
      <SlideContainer>
        <div className="grid grid-cols-1 gap-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              What is <span className="text-yellow-500">Binance</span>?
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              Binance is the world&apos;s largest cryptocurrency exchange by trading volume,
              founded in 2017 by Changpeng Zhao (CZ). It provides a platform for trading
              cryptocurrencies along with numerous other services.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <Card
                key={`stat-${index}`}
                className={cn(
                  "backdrop-blur-sm border-none transition-all duration-300",
                  "bg-gradient-to-br from-card/80 to-card/40",
                  stat.hoverBg,
                )}
              >
                <CardContent className="p-6 text-center">
                  <stat.icon className={cn("h-8 w-8 mx-auto mb-2", stat.color)} />
                  <h3 className="text-3xl font-bold">{stat.value}</h3>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="backdrop-blur-sm bg-card/80 border-card/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Binance Platform Features</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                    <span>Spot Trading (buy/sell cryptocurrencies at market price)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                    <span>Futures Trading (advanced contract trading)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                    <span>Staking (earn passive income on your crypto)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                    <span>NFT Marketplace (buy and sell digital collectibles)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-card/80 border-card/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Binance Ecosystem</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                    <span>Binance Smart Chain (BSC) - Blockchain network</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                    <span>Binance Academy - Educational resources</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                    <span>Binance Labs - Venture capital arm and incubator</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                    <span>Binance Research - Market analysis and reports</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </SlideContainer>
    </div>
  );
}
