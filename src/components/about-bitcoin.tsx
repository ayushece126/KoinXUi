export function AboutBitcoin() {
  return (
    <div className="rounded-lg border bg-white p-4 sm:p-6">
      <h2 className="mb-4 text-lg sm:text-xl font-bold">About Bitcoin</h2>
      <div className="space-y-4">
        <h3 className="font-semibold">What is Bitcoin?</h3>
        <p className="text-sm sm:text-base text-gray-600">
          Bitcoin price today is US$16,951.82, with a 24-hour trading volume of
          $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70%
          from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day
          all-time low of $16,394.75. BTC has a circulating supply of 19.24 M
          BTC and a max supply of 21 M BTC.
        </p>

        <div className="border-t pt-4">
          <h3 className="mb-4 font-semibold">Already Holding Bitcoin?</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-lg bg-gradient-to-r from-green-400 to-blue-500 p-4 text-white">
              <h4 className="mb-2 text-base sm:text-lg font-semibold">
                Calculate your Profits
              </h4>
              <button className="rounded-lg bg-white px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-blue-600">
                Check Now →
              </button>
            </div>
            <div className="overflow-hidden rounded-lg bg-gradient-to-r from-orange-400 to-red-500 p-4 text-white">
              <h4 className="mb-2 text-base sm:text-lg font-semibold">
                Calculate your tax liability
              </h4>
              <button className="rounded-lg bg-white px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-red-600">
                Check Now →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
