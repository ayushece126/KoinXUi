export function Performance() {
  return (
    <div className="rounded-lg border bg-white p-4 sm:p-6">
      <h2 className="mb-4 text-lg sm:text-xl font-bold">Performance</h2>
      <div className="space-y-4 sm:space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
          <span className="text-xs sm:text-sm text-gray-500 w-24">
            Today Low
          </span>
          <div className="h-1 w-full flex-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full" />
          <span className="text-xs sm:text-sm text-gray-500 w-24 text-right">
            Today High
          </span>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
          <span className="text-xs sm:text-sm text-gray-500 w-24">52W Low</span>
          <div className="h-1 w-full flex-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full" />
          <span className="text-xs sm:text-sm text-gray-500 w-24 text-right">
            52W High
          </span>
        </div>
      </div>
    </div>
  );
}
