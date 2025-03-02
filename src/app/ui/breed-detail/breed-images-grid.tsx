import { breedService } from '@/app/lib/api/dogs'
import { BreedImagesGridClient } from './breed-images-grid-client'

interface BreedImagesGridProps {
  breedName: string
}


export async function BreedImagesGrid({ breedName }: BreedImagesGridProps) {
  const images = await breedService.getBreedImages(breedName, 50)
  return <BreedImagesGridClient images={images} breedName={breedName} />
} 