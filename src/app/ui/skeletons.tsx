export function BreedImageSkeleton() {
  return (
    <div className="aspect-square relative rounded-lg overflow-hidden bg-gray-200 animate-pulse" />
  )
}

export function BreedImagesGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: 12 }).map((_, i) => (
        <BreedImageSkeleton key={i} />
      ))}
    </div>
  )
}

export function BreedListSkeleton() {
  return (
    <div className="divide-y divide-custom-gray-200">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="w-full h-20 px-6 py-4 flex items-center bg-custom-white animate-pulse"
        >
          <div className="w-12 h-12 rounded-full bg-custom-gray-300 mr-4" />
          <div className="h-4 bg-custom-gray-300 rounded w-1/4" />
        </div>
      ))}
    </div>
  )
}