"use client";

import SlideContainer from '@/components/slides-container';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info } from 'lucide-react';

export default function OpportunitiesSlide() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-background to-blue-950/5">
      <SlideContainer>
        <div className="grid grid-cols-1 gap-10">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Earning on <span className="text-yellow-500">Binance</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              Beyond trading, Binance offers unique ways to earn and grow your cryptocurrency holdings
              through various programs and features.
            </p>
          </div>

          <Tabs defaultValue="launchpool" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="launchpool">Launchpool</TabsTrigger>
              <TabsTrigger value="megadrop">MegaDrop</TabsTrigger>
              <TabsTrigger value="airdrops">Holder Airdrops</TabsTrigger>
            </TabsList>

            <TabsContent value="launchpool" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="backdrop-blur-sm bg-card/80 border-card/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">What is Binance Launchpool?</h3>
                    <p className="text-muted-foreground mb-4">
                      Binance Launchpool allows users to stake their tokens (like BNB, BUSD, or other specified tokens) to farm new token rewards over a set period, usually 30 days.
                    </p>
                    <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/20">
                      <div className="flex items-start">
                        <Info className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                        <p className="text-sm">
                          This gives you the opportunity to earn new tokens while supporting promising projects without risking your initial investment.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-sm bg-card/80 border-card/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">How Launchpool Works</h3>

                    <div className="relative border-l border-yellow-500/30 space-y-6 ml-2">
                      <div className="relative pl-4">
                        <div className="absolute -left-[0.66rem] top-1 h-5 w-5 rounded-full bg-yellow-500/20 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                        </div>
                        <h4 className="font-medium">Step 1: Project Selection</h4>
                        <p className="text-sm text-muted-foreground">Binance selects promising new projects for Launchpool farming.</p>
                      </div>

                      <div className="relative pl-4">
                        <div className="absolute -left-[0.66rem] top-1 h-5 w-5 rounded-full bg-yellow-500/20 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                        </div>
                        <h4 className="font-medium">Step 2: Stake Your Assets</h4>
                        <p className="text-sm text-muted-foreground">Users stake BNB, BUSD or other tokens in dedicated pools.</p>
                      </div>

                      <div className="relative pl-4">
                        <div className="absolute -left-[0.66rem] top-1 h-5 w-5 rounded-full bg-yellow-500/20 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                        </div>
                        <h4 className="font-medium">Step 3: Farm New Tokens</h4>
                        <p className="text-sm text-muted-foreground">Earn new project tokens proportional to your staked amount.</p>
                      </div>

                      <div className="relative pl-4">
                        <div className="absolute -left-[0.66rem] top-1 h-5 w-5 rounded-full bg-yellow-500/20 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                        </div>
                        <h4 className="font-medium">Step 4: Token Distribution</h4>
                        <p className="text-sm text-muted-foreground">Earned tokens are distributed daily throughout the farming period.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="megadrop" className="mt-0">
              <Card className="backdrop-blur-sm bg-card/80 border-card/10">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold mb-4">What is MegaDrop?</h3>
                      <p className="text-muted-foreground mb-6">
                        MegaDrop is a newer Binance feature that combines asset holding with task completion to earn rewards. Unlike Launchpool, MegaDrop often requires users to complete specific tasks while holding certain assets.
                      </p>

                      <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20 mb-6">
                        <div className="flex items-start">
                          <Info className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                          <p className="text-sm">
                            MegaDrop campaigns typically have higher reward pools and can include exclusive NFTs or tokens with significant potential value.
                          </p>
                        </div>
                      </div>

                      <h4 className="font-bold mb-3">Example Tasks</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="h-5 w-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                          <span>Hold a minimum amount of specific tokens</span>
                        </li>
                        <li className="flex items-start">
                          <span className="h-5 w-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                          <span>Complete trading volume requirements</span>
                        </li>
                        <li className="flex items-start">
                          <span className="h-5 w-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                          <span>Participate in specific platform activities</span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-col justify-between">
                      <div>
                        <h4 className="font-bold mb-3">MegaDrop Benefits</h4>
                        <ul className="space-y-2 text-muted-foreground mb-6">
                          <li className="flex items-start">
                            <span className="h-5 w-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                            <span>Higher potential rewards compared to regular airdrops</span>
                          </li>
                          <li className="flex items-start">
                            <span className="h-5 w-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                            <span>Opportunity to earn valuable early-stage tokens</span>
                          </li>
                          <li className="flex items-start">
                            <span className="h-5 w-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                            <span>Often includes exclusive NFTs with utility</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-br from-yellow-500/20 to-blue-500/20 rounded-lg p-5 border border-yellow-500/20">
                        <h4 className="font-bold mb-2">How to Qualify</h4>
                        <p className="text-sm text-muted-foreground">
                          Regularly check the Binance MegaDrop section for ongoing campaigns. Each campaign has specific requirements that must be met during the qualification period. The earlier you complete tasks, the higher your potential allocation.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="airdrops" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2 backdrop-blur-sm bg-card/80 border-card/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Holder Airdrops</h3>
                    <p className="text-muted-foreground mb-6">
                      Holder airdrops are free token distributions given to users who hold specific cryptocurrencies. Binance frequently facilitates airdrops for BNB holders and users holding other specific tokens.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-lg p-5 border border-purple-500/20">
                        <h4 className="font-bold mb-3">BNB Holder Benefits</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start">
                            <span className="h-5 w-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                            <span>Priority access to new token airdrops</span>
                          </li>
                          <li className="flex items-start">
                            <span className="h-5 w-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                            <span>Higher allocation in distribution events</span>
                          </li>
                          <li className="flex items-start">
                            <span className="h-5 w-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                            <span>Exclusive BNB Chain project airdrops</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-lg p-5 border border-green-500/20">
                        <h4 className="font-bold mb-3">Other Token Holders</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start">
                            <span className="h-5 w-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                            <span>Project-specific token distributions</span>
                          </li>
                          <li className="flex items-start">
                            <span className="h-5 w-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                            <span>Governance token airdrops</span>
                          </li>
                          <li className="flex items-start">
                            <span className="h-5 w-5 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                            <span>Ecosystem expansion rewards</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-sm bg-card/80 border-card/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">How to Maximize Airdrops</h3>

                    <div className="relative border-l border-yellow-500/30 space-y-6 ml-2">
                      <div className="relative pl-4">
                        <div className="absolute -left-[0.66rem] top-1 h-5 w-5 rounded-full bg-yellow-500/20 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                        </div>
                        <h4 className="font-medium">Hold BNB Long-Term</h4>
                        <p className="text-sm text-muted-foreground">Many airdrops prioritize long-term BNB holders.</p>
                      </div>

                      <div className="relative pl-4">
                        <div className="absolute -left-[0.66rem] top-1 h-5 w-5 rounded-full bg-yellow-500/20 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                        </div>
                        <h4 className="font-medium">Stay Active on Binance</h4>
                        <p className="text-sm text-muted-foreground">Regular platform activity increases eligibility.</p>
                      </div>

                      <div className="relative pl-4">
                        <div className="absolute -left-[0.66rem] top-1 h-5 w-5 rounded-full bg-yellow-500/20 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                        </div>
                        <h4 className="font-medium">Enable Airdrop Notifications</h4>
                        <p className="text-sm text-muted-foreground">Turn on notifications to never miss opportunities.</p>
                      </div>

                      <div className="relative pl-4">
                        <div className="absolute -left-[0.66rem] top-1 h-5 w-5 rounded-full bg-yellow-500/20 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                        </div>
                        <h4 className="font-medium">Complete KYC Verification</h4>
                        <p className="text-sm text-muted-foreground">Many airdrops require verified accounts.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </SlideContainer>
    </div>
  );
}
