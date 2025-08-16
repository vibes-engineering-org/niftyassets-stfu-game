"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";

const STFU_TOKEN_CONTRACT = "0x5dA35cD34267848bDeDa3406dC8efb90eBd24B07" as const;
const TOKEN_INFO_URL = "https://www.clanker.world/clanker/0x5dA35cD34267848bDeDa3406dC8efb90eBd24B07" as const;

export function WelcomeScreen() {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Welcome to $STFU
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Original $STFU Token Information
        </p>
      </div>

      <Card className="overflow-hidden">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-2xl">Original $STFU Token</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 rounded-lg overflow-hidden">
              <Image
                src="/$STFU.jfif"
                alt="STFU Token"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Contract Address:
              </p>
              <p className="text-xs font-mono bg-white dark:bg-gray-900 p-2 rounded border">
                {STFU_TOKEN_CONTRACT}
              </p>
            </div>
            
            <Button 
              asChild 
              className="w-full"
              size="lg"
            >
              <a 
                href={TOKEN_INFO_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Token Information
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}