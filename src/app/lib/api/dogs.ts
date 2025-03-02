import type { BreedListResponse, BreedImagesResponse, BreedService } from './types'

const BASE_URL = 'https://dog.ceo/api'

export const breedService: BreedService = {
  async getAllBreeds() {
    const response = await fetch(`${BASE_URL}/breeds/list/all`)
    
    if (!response.ok) {
      throw new Error('Failed to fetch breeds')
    }
    
    const data: BreedListResponse = await response.json()
    return Object.keys(data.message)
  },

  async getBreedImages(breed: string, count: number = 50) {
    const response = await fetch(`${BASE_URL}/breed/${breed}/images/random/${count}`)
    
    if (!response.ok) {
      throw new Error('Failed to fetch breed images')
    }
    
    const data: BreedImagesResponse = await response.json()
    return data.message
  }
}