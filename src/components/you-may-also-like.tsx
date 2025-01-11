import Image from "next/image";

interface Coin {
  item: {
    id: string;
    coin_id: number;
    name: string;
    symbol: string;
    market_cap_rank: number;
    thumb: string;
    small: string;
    large: string;
    slug: string;
    price_btc: number;
    score: number;
    data: {
      price: number;
      price_change_percentage_24h: {
        usd: number;
      };
      sparkline: string;
    };
  };
}

interface YouMayAlsoLikeProps {
  coins: Coin[];
}

export function YouMayAlsoLike({ coins }: YouMayAlsoLikeProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-bold mb-4">You May Also Like</h2>
      <div className="flex overflow-x-auto space-x-4 pb-4">
        {coins.map((coin) => (
          <div
            key={coin.item.id}
            className="flex-shrink-0 w-48 bg-gray-100 rounded-lg p-4"
          >
            <div className="flex items-center mb-2">
              <Image
                src={coin.item.small}
                alt={coin.item.name}
                width={24}
                height={24}
                className="mr-2"
              />
              <span>{coin.item.symbol}</span>
            </div>
            <div
              className={
                coin.item.data.price_change_percentage_24h.usd >= 0
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              {coin.item.data.price_change_percentage_24h.usd >= 0 ? "+" : ""}
              {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
            </div>
            <div className="font-bold">${coin.item.data.price}</div>
            <Image
              src={coin.item.data.sparkline}
              alt={`${coin.item.name} price graph`}
              width={200}
              height={50}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
