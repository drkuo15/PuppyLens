import React from 'react'
import { cn } from '@/app/lib/utils'
interface CarouselButtonProps {
  onClick: (e: React.MouseEvent) => void
  ariaLabel: string
  className?: string
  children: React.ReactNode
}

export function CarouselButton({
  onClick,
  ariaLabel,
  className,
  children
}: CarouselButtonProps) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick(e);
      }}
      className={cn(
        "bg-custom-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-white",
        className
      )}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
} 