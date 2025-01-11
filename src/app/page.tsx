import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CryptoChart } from "@/components/crypto-chart";
import { Performance } from "@/components/performance";
import { Fundamentals } from "@/components/fundamentals";
import { Sentiment } from "@/components/sentiments";
import { AboutBitcoin } from "@/components/about-bitcoin";
import { TeamSection } from "@/components/team-section";
import { TrendingCoins } from "@/components/trending-coins";
import { Tokenomics } from "@/components/tokenomics";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold text-blue-600"
          >
            KoinX
          </Link>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-4 sm:gap-8">
              <li>
                <Link
                  href="/crypto-taxes"
                  className="text-sm sm:text-base text-gray-600 hover:text-gray-900"
                >
                  Crypto Taxes
                </Link>
              </li>
              <li>
                <Link
                  href="/free-tools"
                  className="text-sm sm:text-base text-gray-600 hover:text-gray-900"
                >
                  Free Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/resource-center"
                  className="text-sm sm:text-base text-gray-600 hover:text-gray-900"
                >
                  Resource Center
                </Link>
              </li>
              <li>
                <Button size="sm" className="hidden sm:inline-flex">
                  Get Started
                </Button>
              </li>
            </ul>
          </nav>
          <Button size="sm" className="md:hidden">
            Menu
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl p-4 sm:p-6">
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-[1fr,300px]">
          <div className="space-y-6">
            <Card className="p-6">
              <div className="mb-6 flex items-center gap-4">
                <Image
                  src="/placeholder.svg"
                  alt="Bitcoin"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <h1 className="text-2xl font-bold">Bitcoin</h1>
                <span className="text-gray-500">BTC</span>
                <Button variant="outline">Rank #1</Button>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">$46,953.04</span>
                  <span className="text-sm text-green-500">▲ 2.51%</span>
                </div>
                <span className="text-gray-500">₹ 39,42,343</span>
              </div>

              <CryptoChart />
            </Card>

            <Performance />
            <Fundamentals />
            <Sentiment />
            <AboutBitcoin />
            <Tokenomics />
            <TeamSection />
          </div>

          <div className="space-y-6">
            <Card className="bg-blue-600 p-6 text-white">
              <h2 className="mb-4 text-center text-2xl font-bold">
                Get Started with KoinX for FREE
              </h2>
              <p className="mb-6 text-center">
                With our range of features that you can equip for free, KoinX
                allows you to be more educated and aware of your tax reports.
              </p>
              <Image
                src="/placeholder.svg"
                alt="Get Started"
                width={200}
                height={200}
                className="mx-auto mb-6"
              />
              <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                Get Started for FREE <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
            <TrendingCoins />
          </div>
        </div>
      </main>
    </div>
  );
}
