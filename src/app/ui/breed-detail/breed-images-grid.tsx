import Image from 'next/image'
import { breedService } from '@/app/lib/api/dogs'

interface BreedImagesGridProps {
  breedName: string
}

export async function BreedImagesGrid({ breedName }: BreedImagesGridProps) {

  const images = await breedService.getBreedImages(breedName, 50)

  return (
    <div className="grid grid-cols-3 gap-3 p-3">
      {images.map((imageUrl, index) => (
        <div
          key={`${breedName}-${index}`}
          className="aspect-square relative bg-custom-gray-300"
        >
          <Image
            src={imageUrl}
            alt={`${breedName} dog`}
            fill
            sizes="(max-width: 768px) 33vw, 200px"
            className="object-cover"
            priority={index < 11}
          />
        </div>
      ))}
    </div>
  )
} 