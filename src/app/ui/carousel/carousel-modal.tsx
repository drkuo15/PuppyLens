import { useCarouselNavigation } from '@/app/hooks/useCarouselNavigation'
import { useKeyboardNavigation } from '@/app/hooks/useKeyboardNavigation'
import { useBodyScrollLock } from '@/app/hooks/useBodyScrollLock'
import { CarouselButton } from '@/app/ui/carousel/carousel-button'
import { CarouselImage } from '@/app/ui/carousel/carousel-image'
import { CloseIcon } from '@/app/ui/icons/close-icon'
import { PreviousIcon } from '@/app/ui/icons/previous-icon'
import { NextIcon } from '@/app/ui/icons/next-icon'

interface ImageCarouselModalProps {
  isOpen: boolean
  onClose: () => void
  images: string[]
  initialIndex: number
}

export function ImageCarouselModal({
  isOpen,
  onClose,
  images,
  initialIndex = 0,
}: ImageCarouselModalProps) {
  const {
    currentIndex,
    navigatePrevious,
    navigateNext,
    shouldPrioritize
  } = useCarouselNavigation(images, initialIndex)

  useKeyboardNavigation(isOpen, onClose, navigatePrevious, navigateNext)
  useBodyScrollLock(isOpen)

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="absolute inset-0 bg-custom-black opacity-70"
        aria-hidden="true"
      />

      <div
        className="z-10 w-full h-full flex flex-col items-center justify-center px-8 md:px-16"
      >
        <CarouselButton
          onClick={onClose}
          ariaLabel="Close modal"
          className="self-end mb-2"
        >
          <CloseIcon />
        </CarouselButton>

        <div className="w-full flex items-center justify-between gap-4">
          <CarouselButton onClick={navigatePrevious} ariaLabel="Previous image">
            <PreviousIcon />
          </CarouselButton>

          <div
            className="relative aspect-square w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {images.length > 0 && images.map((src, index) => (
              <CarouselImage
                key={`carousel-image-${index}`}
                src={src}
                index={index}
                currentIndex={currentIndex}
                shouldPrioritize={shouldPrioritize}
              />
            ))}
          </div>

          <CarouselButton onClick={navigateNext} ariaLabel="Next image">
            <NextIcon />
          </CarouselButton>
        </div>
      </div>
    </div>
  )
}