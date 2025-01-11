import { Card } from "@/components/ui/card";
import Image from "next/image";

export function TrendingCoins() {
  const coins = [
    { name: "Ethereum", symbol: "ETH", change: "+8.21%" },
    { name: "Bitcoin", symbol: "BTC", change: "+5.26%" },
    { name: "Polygon", symbol: "MATIC", change: "+4.32%" },
  ];

  return (
    <Card className="p-4 sm:p-6">
      <h2 className="mb-4 text-lg sm:text-xl font-bold">
        Trending Coins (24h)
      </h2>
      <div className="space-y-3 sm:space-y-4">
        {coins.map((coin) => (
          <div key={coin.symbol} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg"
                alt={coin.name}
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="text-sm sm:text-base">{coin.name}</span>
            </div>
            <span className="text-sm sm:text-base text-green-500">
              {coin.change}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
