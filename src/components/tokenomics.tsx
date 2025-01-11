export function Tokenomics() {
  return (
    <div className="rounded-lg border bg-white p-4 sm:p-6">
      <h2 className="mb-4 text-lg sm:text-xl font-bold">Tokenomics</h2>
      <h3 className="mb-4 text-base sm:text-lg font-semibold">
        Initial Distribution
      </h3>
      <div className="mb-4 flex flex-col sm:flex-row items-center gap-4">
        <div
          className="h-32 w-32 sm:h-40 sm:w-40 rounded-full border-8 border-blue-500"
          style={{ borderRightColor: "orange" }}
        />
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-blue-500" />
            <span className="text-sm sm:text-base">
              Crowdsale investors: 80%
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-orange-500" />
            <span className="text-sm sm:text-base">Foundation: 20%</span>
          </div>
        </div>
      </div>
      <p className="text-sm sm:text-base text-gray-600">
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
        vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
        amet enim sit eget leo amet.
      </p>
    </div>
  );
}
