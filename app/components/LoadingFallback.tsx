export default function LoadingFallback() {
  return (
    <div className="min-h-screen bg-green">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header skeleton */}
        <div className="skeleton h-12 w-3/4 mb-8 rounded-lg"></div>

        {/* Content skeleton */}
        <div className="space-y-4">
          <div className="skeleton h-6 w-full rounded-lg"></div>
          <div className="skeleton h-6 w-5/6 rounded-lg"></div>
          <div className="skeleton h-6 w-4/5 rounded-lg"></div>
        </div>

        {/* Cards skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="skeleton h-48 rounded-lg"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
