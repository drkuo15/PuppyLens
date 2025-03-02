import { SearchBar } from '@/app/ui/breed-list/search-bar'
import { BreedList } from '@/app/ui/breed-list/breed-list'
import { BreedListSkeleton } from '@/app/ui/skeletons'
import { Suspense } from 'react'


export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    query?: string
  }>
}) {

  const query = (await searchParams)?.query || ''

  return (
    <div className="max-w-2xl mx-auto mt-10 shadow-lg bg-custom-white">
      <SearchBar initialQuery={query} />
      <Suspense fallback={<BreedListSkeleton />}>
        <BreedList query={query} />
      </Suspense>
    </div>
  )
}
