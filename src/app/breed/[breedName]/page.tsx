import { Suspense } from 'react'
import { BreedImagesGrid } from '@/app/ui/breed-detail/breed-images-grid'
import { BreedImagesGridSkeleton } from '@/app/ui/skeletons'
import { BreedDetailHeader } from '@/app/ui/breed-detail/breed-header'


export default async function BreedDetailPage({
  params,
}: {
  params: Promise<{
    breedName: string
  }>
}) {
  const { breedName } = await params

  return (
    <div className="max-w-2xl mx-auto mt-10 shadow-lg bg-custom-white min-h-screen flex flex-col">
      <BreedDetailHeader breedName={breedName} />
      <div className="flex-1 overflow-auto">
        <Suspense fallback={<BreedImagesGridSkeleton />}>
          <BreedImagesGrid breedName={breedName} />
        </Suspense>
      </div>
    </div>
  )
}
