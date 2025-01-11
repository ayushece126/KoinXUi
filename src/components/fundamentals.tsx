export function Fundamentals() {
  const fundamentals = [
    { label: "Bitcoin Price", value: "$16,815.46" },
    { label: "Market Cap", value: "$323,507,290,047" },
    { label: "24h Low / 24h High", value: "$16,382.07 / $16,874.12" },
    { label: "7d Low / 7d High", value: "$16,382.07 / $16,874.12" },
    { label: "Trading Volume", value: "$23,249,202,782" },
    { label: "Market Cap Rank", value: "#1" },
  ];

  return (
    <div className="rounded-lg border bg-white p-4 sm:p-6">
      <h2 className="mb-4 text-lg sm:text-xl font-bold">Fundamentals</h2>
      <div className="grid gap-2 sm:gap-4 sm:grid-cols-2">
        {fundamentals.map((item) => (
          <div
            key={item.label}
            className="flex justify-between border-b py-2 text-sm"
          >
            <span className="text-gray-500">{item.label}</span>
            <span className="font-medium">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
