export default function WeddingCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
      {/* Image */}
      <div className="h-[260px] bg-gray-300" />

      {/* Content */}
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-300 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-1/2" />

        <div className="flex justify-between items-center mt-4">
          <div className="h-5 bg-gray-300 rounded w-20" />
          <div className="h-8 bg-gray-300 rounded w-24" />
        </div>
      </div>
    </div>
  );
}
