import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Breed Not Found</h2>
      <p className="text-gray-600 mb-6">
        Sorry, we couldn&apos;t find the dog breed you&apos;re looking for.
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-custom-gray-300 text-white rounded-md hover:bg-custom-gray-900 transition-colors"
      >
        Back to all breeds
      </Link>
    </div>
  )
} 