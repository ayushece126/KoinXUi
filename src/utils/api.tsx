// const COINGECKO_API_BASE = "https://api.coingecko.com/api/v3";

// export async function fetchBitcoinPrice() {
//   const response = await fetch(
//     `${COINGECKO_API_BASE}/simple/price?ids=bitcoin,bitclave,bitcoin20&vs_currencies=btc,eth,ltc,bth&include_24hr_change=true`,
//     {
//       headers: {
//         "x-cg-demo-api-key": "CG-mKZMzGSyDFXcoQWcSncMJBeH",
//       },
//     }
//   );
//   if (!response.ok) {
//     throw new Error("Failed to fetch Bitcoin price");
//   }
//   return response.json();
// }

// export async function fetchTrendingCoins() {
//   const response = await fetch(`${COINGECKO_API_BASE}/search/trending`, {
//     headers: {
//       "x-cg-demo-api-key": "CG-mKZMzGSyDFXcoQWcSncMJBeH",
//     },
//   });
//   if (!response.ok) {
//     throw new Error("Failed to fetch trending coins");
//   }
//   return response.json();
// }

// export async function fetchCoinData(id: string) {
//   const response = await fetch(`${COINGECKO_API_BASE}/coins/${id}`, {
//     headers: {
//       "x-cg-demo-api-key": "CG-mKZMzGSyDFXcoQWcSncMJBeH",
//     },
//   });
//   if (!response.ok) {
//     throw new Error(`Failed to fetch data for ${id}`);
//   }
//   return response.json();
// }

// export async function fetchPriceHistory() {
//   // Simulate API delay
//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   const today = new Date();
//   const data = [];
//   for (let i = 30; i >= 0; i--) {
//     const date = new Date(today);
//     date.setDate(date.getDate() - i);
//     data.push({
//       date: date.toISOString().split("T")[0],
//       price: 40000 + Math.random() * 10000,
//     });
//   }
//   return data;
// }

// export async function fetchFundamentals() {
//   // Simulate API delay
//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   return [
//     { label: "Bitcoin Price", value: "$46,953.04" },
//     { label: "Market Cap", value: "$323,507,290,047" },
//     { label: "24h Low / 24h High", value: "$45,000 / $48,000" },
//     { label: "7d Low / 7d High", value: "$44,000 / $49,000" },
//     { label: "Trading Volume", value: "$23,249,202,782" },
//     { label: "Market Cap Rank", value: "#1" },
//   ];
// }

// export async function fetchSentimentData() {
//   // Simulate API delay
//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   return {
//     keyEvents: [
//       {
//         title: "Lorem ipsum dolor sit amet",
//         description:
//           "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
//       },
//       {
//         title: "Consectetur adipiscing elit",
//         description:
//           "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       },
//     ],
//     analystEstimates: {
//       buy: 76,
//       hold: 8,
//       sell: 16,
//     },
//   };
// }

// export async function fetchTeamData() {
//   // Simulate API delay
//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   return [
//     {
//       name: "John Smith",
//       role: "Founder & CEO",
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-11%20at%202.56.48%E2%80%AFAM-XDsepZQJsC8VuYirJ8XJ6KN6jlglCq.png",
//       bio: "John Smith is a visionary leader with over 15 years of experience in the cryptocurrency and blockchain space. He founded our company with the mission to make cryptocurrency accessible to everyone.",
//     },
//     {
//       name: "Jane Doe",
//       role: "CTO",
//       image:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-11%20at%202.56.48%E2%80%AFAM-XDsepZQJsC8VuYirJ8XJ6KN6jlglCq.png",
//       bio: "Jane Doe is a brilliant technologist with a Ph.D. in Computer Science. She leads our development team and is responsible for the cutting-edge technology that powers our platform.",
//     },
//   ];
// }

// Simulating API calls with mock data

export async function fetchBitcoinData() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    name: "Bitcoin",
    symbol: "BTC",
    price: 46953.04,
    change24h: 2.51,
    marketCap: 323507290047,
    volume24h: 23249202782,
    circulatingSupply: 19240000,
    maxSupply: 21000000,
    current_price: {
      usd: 10,
      inr: 10,
    },
    price_change_percentage_24h: 10,
  };
}

export async function fetchPriceHistory() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const today = new Date();
  const data = [];
  for (let i = 30; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    data.push({
      date: date.toISOString().split("T")[0],
      price: 40000 + Math.random() * 10000,
    });
  }
  return data;
}

export async function fetchPerformanceData() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    todayLow: 45000,
    todayHigh: 48000,
    weekLow: 44000,
    weekHigh: 49000,
  };
}

export async function fetchFundamentals() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    { label: "Bitcoin Price", value: "$46,953.04" },
    { label: "Market Cap", value: "$323,507,290,047" },
    { label: "24h Low / 24h High", value: "$45,000 / $48,000" },
    { label: "7d Low / 7d High", value: "$44,000 / $49,000" },
    { label: "Trading Volume", value: "$23,249,202,782" },
    { label: "Market Cap Rank", value: "#1" },
  ];
}

export async function fetchSentimentData() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    keyEvents: [
      {
        title: "Lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      },
      {
        title: "Consectetur adipiscing elit",
        description:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
    analystEstimates: {
      buy: 76,
      hold: 8,
      sell: 16,
    },
  };
}

export async function fetchTokenomics() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    initialDistribution: {
      crowdsaleInvestors: 80,
      foundation: 20,
    },
    description:
      "Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet.",
  };
}

export async function fetchTeamData() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    {
      name: "John Smith",
      role: "Founder & CEO",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-11%20at%202.56.48%E2%80%AFAM-XDsepZQJsC8VuYirJ8XJ6KN6jlglCq.png",
      bio: "John Smith is a visionary leader with over 15 years of experience in the cryptocurrency and blockchain space. He founded our company with the mission to make cryptocurrency accessible to everyone.",
    },
    {
      name: "Jane Doe",
      role: "CTO",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-11%20at%202.56.48%E2%80%AFAM-XDsepZQJsC8VuYirJ8XJ6KN6jlglCq.png",
      bio: "Jane Doe is a brilliant technologist with a Ph.D. in Computer Science. She leads our development team and is responsible for the cutting-edge technology that powers our platform.",
    },
  ];
}

export async function fetchTrendingCoins() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    { name: "Ethereum", symbol: "ETH", change: "+8.21%" },
    { name: "Bitcoin", symbol: "BTC", change: "+5.26%" },
    { name: "Polygon", symbol: "MATIC", change: "+4.32%" },
  ];
}
