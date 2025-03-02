'use client'

import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg text-center">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong!</h2>
      <p className="text-gray-700 mb-6">
        {error.message || "We couldn't load the breed images. Please try again."}
      </p>
      <div className="flex justify-center space-x-4">
        <button
          onClick={reset}
          className="px-4 py-2 bg-custom-gray-300 text-white rounded-md hover:bg-custom-gray-900 transition-colors"
        >
          Try again
        </button>
        <Link
          href="/"
          className="px-4 py-2 bg-custom-gray-300 text-white rounded-md hover:bg-custom-gray-900 transition-colors"
        >
          Return home
        </Link>
      </div>
    </div>
  )
} 