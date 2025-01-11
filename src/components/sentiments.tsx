export function Sentiment() {
  return (
    <div className="rounded-lg border bg-white p-4 sm:p-6">
      <h2 className="mb-4 text-lg sm:text-xl font-bold">Sentiment</h2>
      <div className="mb-6">
        <h3 className="mb-4 text-base sm:text-lg font-semibold">Key Events</h3>
        <div className="grid gap-4">
          <div className="rounded-lg bg-blue-50 p-3 sm:p-4">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="rounded-full bg-blue-500 p-2 text-white">
                <svg
                  className="h-4 w-4 sm:h-6 sm:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
                mattis enim tincidunt.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-base sm:text-lg font-semibold">
          Analyst Estimates
        </h3>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <div className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-green-50">
            <span className="text-xl sm:text-2xl font-bold text-green-500">
              76%
            </span>
          </div>
          <div className="flex-1 space-y-2 w-full sm:w-auto">
            <div className="flex items-center gap-2">
              <span className="w-8 text-xs sm:text-sm">Buy</span>
              <div className="h-2 w-3/4 rounded-full bg-green-500" />
              <span className="text-xs sm:text-sm">76%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 text-xs sm:text-sm">Hold</span>
              <div className="h-2 w-[8%] rounded-full bg-gray-300" />
              <span className="text-xs sm:text-sm">8%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 text-xs sm:text-sm">Sell</span>
              <div className="h-2 w-[16%] rounded-full bg-red-500" />
              <span className="text-xs sm:text-sm">16%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
