import { breedService } from '@/app/lib/api/dogs'
import { BreedImagesGridClient } from '@/app/ui/breed-detail/breed-images-grid-client'

interface BreedImagesGridProps {
  breedName: string
}


export async function BreedImagesGrid({ breedName }: BreedImagesGridProps) {
  const images = await breedService.getBreedImages(breedName, 50)
  return <BreedImagesGridClient images={images} breedName={breedName} />
} 