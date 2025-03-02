import React from 'react'
import Image from 'next/image'
import { cn } from '@/app/lib/utils'

interface CarouselImageProps {
  src: string
  index: number
  currentIndex: number
  shouldPrioritize: (index: number) => boolean
}

export function CarouselImage({
  src,
  index,
  currentIndex,
  shouldPrioritize
}: CarouselImageProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 transition-opacity duration-300",
        index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
      )}
      aria-hidden={index !== currentIndex}
    >
      <Image
        src={src}
        alt={`Image ${index + 1}`}
        fill
        sizes="(max-width: 768px) 100vw, 80vw"
        className="object-cover"
        priority={shouldPrioritize(index)}
      />
    </div>
  )
} 