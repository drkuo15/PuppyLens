'use client'

import Link from 'next/link'
import { PreviousIcon } from '@/app/ui/icons/previous-icon'
interface BreedDetailHeaderProps {
  breedName: string
}

export function BreedDetailHeader({ breedName }: BreedDetailHeaderProps) {
  return (
    <div className="flex items-center p-4 bg-custom-gray-300">
      <Link
        href="/"
        className="mr-4 text-custom-gray-900 hover:text-custom-black focus:outline-none"
        aria-label="Back to breed list"
      >
        <PreviousIcon className="w-6 h-6" />
      </Link>
      <h1 className="text-xl font-medium text-custom-gray-900 capitalize">
        {breedName}
      </h1>
    </div>
  )
} 