import Link from 'next/link'
import { breedService } from '@/app/lib/api/dogs'
import { DogAvatar } from '@/app/ui/icons/dog-avatar'

interface BreedListProps {
  query: string
}

export async function BreedList({ query }: BreedListProps) {

  const breeds = await breedService.getAllBreeds()


  const filteredBreeds = breeds.filter(breed =>
    breed.toLowerCase().startsWith(query.toLowerCase())
  )


  if (filteredBreeds.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500 truncate">
        No breeds found matching {query}
      </div>
    )
  }

  return (
    <div
      className="divide-y divide-gray-200 bg-white rounded-b-lg"
      role="list"
    >
      {filteredBreeds.map(breedName => (
        <Link
          key={breedName}
          href={`/breed/${breedName}`}
          className="w-full h-20 flex items-center px-6 py-4 hover:bg-gray-50 transition-colors border-b border-gray-200 last:border-b-0 focus:outline-none focus:bg-gray-50"
        >
          <div className="w-12 h-12 flex-shrink-0 mr-4 rounded-full overflow-hidden">
            <DogAvatar />
          </div>
          <span className="text-lg capitalize text-gray-900">{breedName}</span>
        </Link>
      ))}
    </div>
  )
}