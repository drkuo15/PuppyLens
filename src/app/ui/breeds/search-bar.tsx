'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { SearchIcon } from '@/app/ui/icons/search-icon'
import { CloseIcon } from '@/app/ui/icons/close-icon'
import { cn } from '@/app/lib/utils'
import { useDebouncedCallback } from 'use-debounce'

interface SearchBarProps {
  initialQuery: string
}

export function SearchBar({ initialQuery }: SearchBarProps) {
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const [inputValue, setInputValue] = useState(initialQuery)
  const [isSearchMode, setIsSearchMode] = useState(!!initialQuery)


  const updateUrlWithDebounce = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams)

    if (value) {
      params.set('query', value)
    } else {
      params.delete('query')
    }

    replace(`?${params.toString()}`)
  }, 100)


  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value
    setInputValue(newValue)
    updateUrlWithDebounce(newValue)
  }


  function handleClearSearch() {
    setInputValue('')
    setIsSearchMode(false)
    updateUrlWithDebounce('')
  }

  return (
    <div className="bg-custom-gray-300 p-4">
      <div className="relative h-12">
        <input
          type="text"
          placeholder={isSearchMode ? "Input breed name to search" : "Click to search"}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setIsSearchMode(true)}
          onBlur={() => !inputValue && setIsSearchMode(false)}
          className={cn(
            "w-full h-full px-12 rounded-md focus:outline-none transition-colors text-custom-gray-900",
            isSearchMode ? "bg-custom-white" : "bg-custom-gray-200"
          )}
          aria-label="Search for dog breeds"
        />
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-custom-gray-300 pointer-events-none" />
        {isSearchMode && inputValue && (
          <button
            onClick={handleClearSearch}
            className="absolute right-4 top-1/2 -translate-y-1/2"
            aria-label="Clear search"
          >
            <CloseIcon className="w-5 h-5 text-custom-gray-300" />
          </button>
        )}
      </div>
    </div>
  )
}