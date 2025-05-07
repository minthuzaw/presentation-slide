"use client";

import SlideContainer from '@/components/slides-container';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info } from 'lucide-react';
import Image from 'next/image';

export default function EarningSlide() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-background to-blue-950/5">
      <SlideContainer>
        <div className="grid grid-cols-1 gap-10">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Earning on <span className="text-yellow-500">Binance</span>
            </h2>
          </div>

          <Tabs defaultValue="launchpool" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="launchpool">Launchpool</TabsTrigger>
              <TabsTrigger value="megadrop">MegaDrop</TabsTrigger>
              <TabsTrigger value="airdrops">Holder Airdrops</TabsTrigger>
            </TabsList>

            <TabsContent value="launchpool" className="mt-0 flex items-center justify-center">
                <Image src="/images/earn/Launchpool.PNG" width={300} height={800} alt="launchpool" className="mx-auto"/>
            </TabsContent>

            <TabsContent value="megadrop" className="mt-0 flex items-center justify-center space-x-2">
              <Image src="/images/earn/megadrop.PNG" width={300} height={700} alt="megadrop"/>
			  <Image src="/images/earn/megadrop2.jpg" width={300} height={700} alt="megadrop"/>
            </TabsContent>

            <TabsContent value="airdrops" className="mt-0 flex items-center justify-center">
                <Image src="/images/earn/holder-airdrop.PNG" width={300} height={700} alt="airdrops"/>
            </TabsContent>
          </Tabs>
        </div>
      </SlideContainer>
    </div>
  );
}
