import { useState } from 'react'

export function useCarouselNavigation(images: string[], initialIndex: number) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const getPrevIndex = (index: number) => index === 0 ? images.length - 1 : index - 1
  const getNextIndex = (index: number) => index === images.length - 1 ? 0 : index + 1

  const navigatePrevious = () => setCurrentIndex(prevIndex => getPrevIndex(prevIndex))
  const navigateNext = () => setCurrentIndex(prevIndex => getNextIndex(prevIndex))

  const prevIndex = getPrevIndex(currentIndex)
  const nextIndex = getNextIndex(currentIndex)

  const shouldPrioritize = (index: number) =>
    index === currentIndex || index === prevIndex || index === nextIndex

  return {
    currentIndex,
    navigatePrevious,
    navigateNext,
    shouldPrioritize,
    prevIndex,
    nextIndex
  }
} 