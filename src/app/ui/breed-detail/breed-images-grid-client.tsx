'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ImageCarouselModal } from '../carousel/carousel-modal'

interface BreedImagesGridClientProps {
  images: string[]
  breedName: string
}

export function BreedImagesGridClient({ images, breedName }: BreedImagesGridClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  function handleImageClick(index: number) {
    setSelectedImageIndex(index)
    setIsModalOpen(true)
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-3 p-3">
        {images.map((imageUrl, index) => (
          <div
            key={`${breedName}-${index}`}
            className="aspect-square relative bg-custom-gray-300 cursor-pointer"
            onClick={() => handleImageClick(index)}
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

      <ImageCarouselModal
        key={`image-modal-${selectedImageIndex}`} // This key ensures that the modal is remounted when the selected image changes
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={images}
        initialIndex={selectedImageIndex}
      />
    </>
  )
} 