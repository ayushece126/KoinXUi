// import { Suspense } from "react";
// import { fetchCoinData, fetchTrendingCoins } from "@/utils/api";
// import { TradingViewWidget } from "@/components/trading-view-widget";
// import { Performance } from "@/components/performance";
// import { Sentiment } from "@/components/sentiments";
// import { AboutBitcoin } from "@/components/about-bitcoin";
// import { Tokenomics } from "@/components/tokenomics";
// import { Team } from "@/components/teams";
// import { TrendingCoins } from "@/components/trending-coins";
// import { YouMayAlsoLike } from "@/components/you-may-also-like";

// export default async function CoinPage({
//   params,
// }: {
//   params: { coinId: string };
// }) {
//   const coinData = await fetchCoinData(params.coinId);
//   const trendingCoinsData = await fetchTrendingCoins();

//   return (
//     <main className="container mx-auto px-4 py-8">
//       <div className="flex flex-col lg:flex-row gap-8">
//         <div className="w-full lg:w-2/3">
//           <h1 className="text-3xl font-bold mb-4">{coinData.name}</h1>
//           <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//             <div className="flex justify-between items-center mb-4">
//               <div>
//                 <p className="text-2xl font-bold">
//                   ${coinData.market_data.current_price.usd.toLocaleString()}
//                 </p>
//                 <p className="text-sm text-gray-500">
//                   ₹ {coinData.market_data.current_price.inr.toLocaleString()}
//                 </p>
//               </div>
//               <div
//                 className={`text-sm ${
//                   coinData.market_data.price_change_percentage_24h > 0
//                     ? "text-green-500"
//                     : "text-red-500"
//                 }`}
//               >
//                 {coinData.market_data.price_change_percentage_24h.toFixed(2)}%
//               </div>
//             </div>
//             <Suspense fallback={<div>Loading chart...</div>}>
//               <TradingViewWidget
//                 symbol={`${coinData.symbol.toUpperCase()}USD`}
//               />
//             </Suspense>
//           </div>
//           <Performance />
//           <Sentiment />
//           <AboutBitcoin />
//           <Tokenomics />
//           <Team />
//         </div>
//         <div className="w-full lg:w-1/3">
//           <TrendingCoins coins={trendingCoinsData.coins} />
//           <YouMayAlsoLike coins={trendingCoinsData.coins} />
//         </div>
//       </div>
//       <div className="mt-8">
//         <h2 className="text-2xl font-bold mb-4">Trending Coins</h2>
//         <YouMayAlsoLike coins={trendingCoinsData.coins} />
//       </div>
//     </main>
//   );
// }
